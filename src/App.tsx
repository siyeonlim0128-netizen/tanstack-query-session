import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

// 화면 확인용 예시 데이터입니다.
// 수업에서 API로 조회한 데이터로 교체합니다.
const sampleTodos: Todo[] = [
  { id: "1", title: "운동하기", completed: false },
  { id: "2", title: "수업 복습하기", completed: true },
  { id: "3", title: "세션 준비하기", completed: false },
];

export default function App() {
  const completedCount = sampleTodos.filter(
    (todo) => todo.completed,
  ).length;

  return (
    <main className="todo-card">
      <header className="todo-header">
        <p className="eyebrow">MY DAILY PLAN</p>
        <h1>오늘의 할 일</h1>
        <p className="description">
          작은 일부터 하나씩 완료해 보세요.
        </p>
      </header>

      <TodoForm />

      <div className="list-heading">
        <h2>할 일 목록</h2>
        <span>
          완료 {completedCount} / 전체 {sampleTodos.length}
        </span>
      </div>

      <TodoList todos={sampleTodos} />

      <p className="starter-notice">
        UI 미리보기 · 추가, 완료, 삭제 기능은 세션에서 연결합니다.
      </p>
    </main>
  );
}