import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

const sampleTodos: Todo[] = [
  { id: "1", title: "운동하기", completed: false },
  { id: "2", title: "수업 복습하기", completed: true },
  { id: "3", title: "세션 준비하기", completed: false },
];

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

      <TodoList todos={sampleTodos} />
    </main>
  );
}