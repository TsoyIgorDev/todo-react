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

export const diaries = [
  {
    key: '1',
    date: '1 July',
    description: `Сегодня начались летние каникулы. Я проснулся рано утром и почувствовал радость. Погода была солнечной и тёплой. Решил провести день на свежем воздухе. Позавтракал любимыми фруктами и чаем. Затем собрал рюкзак для прогулки. Взял с собой книгу и блокнот для заметок. В парке встретил старого друга, мы долго разговаривали. Потом гулял у озера, наслаждаясь природой. Сделал несколько фотографий для памяти. Вечером приготовил вкусный ужин. День прошёл очень насыщенно и приятно.`,
    tag: 'good',
  },
  {
    key: '2',
    date: '5 July',
    description: `Сегодня встретился с друзьями в парке. Мы играли в волейбол и смеялись. Погода была идеальной для прогулок. После игры пошли в кафе на мороженое. Обсуждали планы на лето и путешествия. Я рассказал о своих мечтах и целях. Друзья поддержали меня и дали советы. Мы сделали много фотографий на память. Вечером смотрели фильм вместе. Чувствовал себя очень счастливым и расслабленным. День прошёл быстро, но оставил много приятных впечатлений. Надеюсь, скоро повторим такую встречу.`,
    tag: 'default',
  },
  {
    key: '3',
    date: '10 July',
    description: `Сегодня посетил музей современного искусства. Экспозиция была очень интересной и вдохновляющей. Я изучал картины и скульптуры с большим вниманием. Некоторые работы вызвали у меня сильные эмоции. В музее было много посетителей, но атмосфера была спокойной. Я сделал заметки о понравившихся произведениях. После музея прогулялся по городу, наслаждаясь архитектурой. Зашёл в небольшую кофейню и выпил ароматный кофе. Вечером прочитал книгу о художниках и их творчестве. День был наполнен новыми знаниями и впечатлениями. Чувствую вдохновение для своих проектов. Очень рад, что решил посетить это место.`,
    tag: 'good',
  },
  {
    key: '4',
    date: '15 July',
    description: `Сегодня начал новый проект на работе. Задачи были сложными, но интересными. Я составил план и распределил время. Коллеги помогали советами и поддержкой. В течение дня решал разные вопросы и проблемы. Учился новым методам и инструментам. Чувствовал мотивацию и желание добиться успеха. В обед сделал короткую прогулку для отдыха. После работы записал идеи и мысли в блокнот. Вечером подготовил презентацию для команды. День был продуктивным и насыщенным. Надеюсь, проект принесёт хорошие результаты.`,
    tag: 'good',
  },
  {
    key: '5',
    date: '20 July',
    description: `Сегодня провёл вечер с семьёй. Мы вместе смотрели новый фильм. Обсуждали сюжет и персонажей после просмотра. Дети делились своими впечатлениями и эмоциями. Приготовили вместе ужин, что было весело и интересно. После еды играли в настольные игры. Смех и радость наполняли комнату. Чувствовал тепло и уют домашнего очага. Вечер прошёл очень быстро и приятно. Перед сном прочитал детям сказку. Благодарен за такие моменты вместе. Надеюсь, что у нас будет ещё много таких вечеров.`,
    tag: 'bad',
  },
];