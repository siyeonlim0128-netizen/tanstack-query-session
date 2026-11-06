import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <main className="todo-card">
      <header className="todo-header">
        <p className="eyebrow">MY DAILY PLAN</p>
        <h1>오늘의 할 일</h1>
      </header>

      <TodoForm />

      <div className="list-heading">
        <h2>할 일 목록</h2>
      </div>

      <TodoList todos={[]} />
    </main>
  );
}