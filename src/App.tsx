import { Header } from './components/Header';
import { HabitForm } from './components/HabitForm';
import { HabitList, type Habit } from './components/HabitList';
import { useState } from 'react';

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(name: string) {
    setHabits([...habits, { id: crypto.randomUUID(), name }]);
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} />
    </div>
  );
}