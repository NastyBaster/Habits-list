import { Header } from './components/Header';
import { HabitForm } from './components/HabitForm';
import { HabitProvider } from './context/HabitProvider';
import { HabitList } from './components/HabitList';
import { useState } from 'react';
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns';

export default function App() {
  const [weekOffset, setweekOffset] = useState(0);

  const week = addWeeks(new Date(), weekOffset);
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  });
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4">
      <HabitProvider>
        <Header
          visibleDates={visibleDates}
          onNext={() => setweekOffset((o) => o + 1)}
          onPrev={() => setweekOffset((o) => o - 1)}
        />
        <HabitForm />
        <HabitList visibleDates={visibleDates}/>
      </HabitProvider>
    </div>
  );
}
