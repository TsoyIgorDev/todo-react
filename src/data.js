import UpcomingSection from './components/Sections/UpcomingSection';
import TodaySection from './components/Sections/TodaySection';
import StickySection from './components/Sections/StickySection';
import DiarySection from './components/Sections/DiarySection';
import HabitSection from './components/Sections/HabitSection';

export const sections = [
  {
    key: 'upcoming',
    label: 'Upcoming',
    component: UpcomingSection,
  },
  {
    key: 'today',
    label: 'Today',
    component: TodaySection,
  },
  {
    key: 'stickyWall',
    label: 'Sticky Wall',
    component: StickySection,
  },
  {
    key: 'diary',
    label: 'Diary',
    component: DiarySection,
  },
  {
    key: 'habit',
    label: 'Habit tracker',
    component: HabitSection,
  },
];