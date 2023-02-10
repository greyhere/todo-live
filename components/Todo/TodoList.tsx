import type { Todo } from './Todo';

type TodoList = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
};

const TodoList = ({ todos, deleteTodo }: TodoList) => (
  <>
    {todos.map((item) => (
      <li key={item.id}>
        <span>{item.text}</span>
        <button onClick={() => deleteTodo(item.id)}> x </button>
      </li>
    ))}
  </>
);

export default TodoList;
