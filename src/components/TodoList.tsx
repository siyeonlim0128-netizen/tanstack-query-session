import type { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="empty-message">아직 등록된 할 일이 없어요.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <label className="todo-label">
            {/* 수업에서 완료 상태 변경 기능을 연결합니다. */}
            <input
              type="checkbox"
              checked={todo.completed}
              disabled
            />

            <span className={todo.completed ? "completed" : ""}>
              {todo.title}
            </span>
          </label>

          {/* 수업에서 삭제 기능을 연결합니다. */}
          <button
            className="delete-button"
            type="button"
            aria-label={`${todo.title} 삭제`}
            disabled
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}