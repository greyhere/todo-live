import { useState } from 'react';

const TodoInput = ({ addTodo }: { addTodo: (a: string) => void }) => {
  const [text, setText] = useState<string>('');

  const add = () => {
    addTodo(text);
    setText('');
  };

  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={add}>+ {/* Add*/}</button>
    </>
  );
};

export default TodoInput;
