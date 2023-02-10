import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { useState } from 'react';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodo = (id: number) => {
    // setTodos((previous) => previous.filter((item) => item.id !== id));

    setTodos((previous) =>
      previous.filter((ele) => {
        if (id !== ele.id) return true;
        else return false;
      })
    );
  };

  const addTodo = (text: string) => {
    setTodos((previous) => [
      ...previous,
      {
        id: previous.length + 1,
        text,
        done: false,
      },
    ]);
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default Todo;
