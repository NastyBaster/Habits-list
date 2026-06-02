import { Header } from './components/Header';
import { HabitForm } from './components/HabitForm';
import { HabitProvider } from './context/HabitProvider';
import { HabitList } from './components/HabitList';

export default function App() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-4">
      <HabitProvider>
        <Header />
        <HabitForm />
        <HabitList />
      </HabitProvider>
    </div>
  );
}
