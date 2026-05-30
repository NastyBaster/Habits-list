import { Header } from './components/Header';
import { HabitForm } from './components/HabitForm';
import { HabitList } from './components/HabitList';

export default function App() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4">
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  );
}
