import Image from 'next/image';
import { KeyboardEvent, useContext, useState } from 'react';

import deleteImage from '@/assets/icons/delete.svg';
import doneImage from '@/assets/icons/done.svg';
import editImage from '@/assets/icons/write.svg';
import styles from '@/components/toDo.module.scss';
import { ToDoContext } from '@/context/toDoContext';
import isValidInput from '@/helpers/isValidInput';
import IToDo from '@/types/toDo';

export default function ToDo({ toDoData }: { toDoData: IToDo }) {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(toDoData.value);
  const toDoContext = useContext(ToDoContext);

  const editButtonHandler = () => {
    setEditMode(!editMode);

    if (
      toDoData.value === inputValue ||
      !isValidInput(toDoContext!.toDos, inputValue)
    ) {
      setInputValue(toDoData.value);
      return;
    }

    toDoContext!.editTodoItem(toDoData.id, inputValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      editButtonHandler();
    }
  };

  return (
    <div className={styles.todo}>
      {editMode ? (
        <input
          autoFocus
          value={inputValue}
          type="text"
          className={styles.todo__text}
          onChange={event => {
            setInputValue(event.target.value);
          }}
          onKeyDown={event => handleKeyDown(event)}
        />
      ) : (
        <div className={styles.todo__text}>
          <input
            type="checkbox"
            checked={toDoData.done}
            onChange={() => {
              toDoContext!.toggleDone(toDoData.id);
            }}
          />

          {toDoData.value}
        </div>
      )}

      <div className={styles.todo__control}>
        <Image
          className={styles['todo__control--edit']}
          src={editMode ? doneImage : editImage}
          alt="edit button"
          onClick={editButtonHandler}
        />

        <Image
          className={styles['todo__control--delete']}
          src={deleteImage}
          alt="delete button"
          onClick={() => toDoContext!.removeTodoItem(toDoData.id)}
        />
      </div>
    </div>
  );
}
