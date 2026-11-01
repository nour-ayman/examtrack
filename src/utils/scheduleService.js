import * as XLSX from 'xlsx';

// Cache 3ashan mayro7sh ya3mel download w parse lel file ma3 kol search
let cachedScheduleData = null;

/**
 * Bey-load el Excel file men folder public w ye2ra el sheet men el row el tany (range: 1)
 */
export async function loadScheduleData() {
  if (cachedScheduleData) {
    return cachedScheduleData;
  }

  try {
    // 7ot el file b-nafs el esm f folder public/
    const response = await fetch('/Midterm_Schedule_Fall 2026.xlsx');
    if (!response.ok) {
      throw new Error('Failed to load schedule Excel file');
    }

    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

    // Awel Sheet mawgooda
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // range: 1 3ashan ye-skip row 0 (el 3enwan) w ya3teber row 1 howa el headers
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { range: 1, defval: '' });

    cachedScheduleData = jsonData;
    return jsonData;
  } catch (error) {
    console.error('Error loading schedule Excel:', error);
    throw error;
  }
}

/**
 * Bey-search bel Student ID gowa el 'Students Sets' column
 * @param {string} studentId
 * @returns {Array<Object>} List of exam objects
 */
export async function getStudentSchedule(studentId) {
  const data = await loadScheduleData();
  const cleanId = String(studentId).trim();

  if (!cleanId) return [];

  const studentExams = [];

  for (const row of data) {
    const rawSets = String(row['Students Sets'] || '');
    if (!rawSets) continue;

    // Split el IDs bel '+' w trim ay spaces
    const studentIdsList = rawSets.split('+').map((id) => id.trim());

    if (studentIdsList.includes(cleanId)) {
      studentExams.push({
        day: row['Day'] || '',
        time: row['Time'] || '',
        room: String(row['Room'] || ''),
        subject: row['Subject'] || '',
        facilityType: row['Facility Type'] || '',
        comments: row['Comments'] || '',
        offeringProgram: row['Offering Program'] || '',
      });
    }
  }

  return studentExams;
}