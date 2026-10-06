import { Course, Task, AppSettings } from '../types';

export const initialStudent = {
  nama: 'Mahasiswa',
  nim: '220401001',
  prodi: 'Teknik Informatika',
  semester: 5,
  bebanSks: 0,
  ipk: 0.0,
  tanggal: '24 Okt 2024',
  status: 'Aktif',
  sesiHadir: 0,
  totalSesi: 0,
  persenKehadiran: 100,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
};

// Data dikosongkan sesuai permintaan pengguna
export const initialCourses: Course[] = [];

export const initialTasks: Task[] = [];

export const initialSettings: AppSettings = {
  darkMode: false,
  currentSemester: 'Semester Ganjil 2024/2025',
  notifikasiDeadline: true,
  reminderPoints: {
    tujuhHari: true,
    limaHari: true,
    tigaHari: true,
    satuHari: true,
  },
  autoSilentKuliah: true,
};
