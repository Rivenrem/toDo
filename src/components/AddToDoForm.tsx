import { KeyboardEvent, useContext, useState } from 'react';

import styles from '@/components/addToDoForm.module.scss';
import { ToDoContext } from '@/context/toDoContext';

export default function AddToDoForm() {
  const [input, setInput] = useState('');
  const toDoContext = useContext(ToDoContext);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toDoContext!.addTodoItem(input);
      setInput('');
    }
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.form__input}
        value={input}
        type="text"
        placeholder="Create Todo-Task"
        onChange={({ target: { value } }) => setInput(value)}
        onKeyDown={event => handleKeyDown(event)}
      />

      <button
        className={styles.form__button}
        onClick={() => {
          toDoContext!.addTodoItem(input);
          setInput('');
        }}
      >
        Add
      </button>
    </div>
  );
}
