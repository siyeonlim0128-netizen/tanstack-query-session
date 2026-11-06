export default function TodoForm() {
  return (
    <form
      className="todo-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="sr-only" htmlFor="todo-title">
        새로운 할 일
      </label>

      <input
        id="todo-title"
        name="title"
        type="text"
        placeholder="오늘 할 일을 입력하세요"
        autoComplete="off"
      />

      {/* 수업에서 추가 기능을 연결합니다. */}
      <button type="submit" disabled>
        추가
      </button>
    </form>
  );
}