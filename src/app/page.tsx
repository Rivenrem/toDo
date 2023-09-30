'use client';

import { useContext, useEffect } from 'react';

import styles from '@/app/page.module.scss';
import AddToDoForm from '@/components/AddToDoForm';
import ToDo from '@/components/ToDo';
import { ToDoContext } from '@/context/toDoContext';
import { useEffectOnUpdateOnly } from '@/customHooks/useEffectOnUpdateOnly';

export default function Home() {
  const toDoContext = useContext(ToDoContext);

  useEffect(() => {
    const storedList = localStorage.getItem('toDos');

    if (storedList) {
      toDoContext!.setToDos(JSON.parse(storedList));
    }
  }, []);

  useEffectOnUpdateOnly(() => {
    localStorage.setItem('toDos', JSON.stringify(toDoContext!.toDos));
  }, [toDoContext]);

  return (
    <main className={styles.main}>
      <AddToDoForm />

      <div className={styles.main__list}>
        {toDoContext!.toDos.map(toDo => (
          <ToDo key={toDo.id} toDoData={toDo} />
        ))}
      </div>
    </main>
  );
}
