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

export const todays = [
  {
    key: '1',
    title: 'Research something',
    description: '',
    isDone: false,
  },
  {
    key: '2',
    title: 'Make a video',
    description: '',
    isDone: false,
  },
  {
    key: '3',
    title: 'Read a book',
    description: '',
    isDone: true,
  },
]

export const habits = [
  {
    key: '1',
    habit: 'Clean room',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
  {
    key: '2',
    habit: 'Reading',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
  {
    key: '3',
    habit: 'Meditating',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
]