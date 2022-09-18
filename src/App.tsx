import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Todo } from './components/Todo';

export function App() {

  const elements = [
    {
      id: 1,
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: true
    },
    {
      id: 2,
      title: 'Inro auctor neque turpis turpis seis vel sed fames integer.',
      checked: false
    }
  ];

  const [elementList, setElements] = useState(elements);

  function handlerSearchSubmit() {
    event?.preventDefault();
    const newElementList = [...elementList, { id: (Math.floor(Math.random() * 123123)), title: event.target.todo.value, checked: false }];
    setElements(newElementList);
  }

  function handlerCbChange() {

    const newElements = elementList.map((element) => {
      if (element.id === Number.parseInt(event.target.name)) {
        element.checked = event.target.checked;
      }
      return element;
    });

    setElements(newElements);
  }

  function handlerDelete(id: number) {
    const newElements = elementList.filter((element) => element.id != id);

    setElements(newElements);
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Search handlerSearchSubmit={handlerSearchSubmit} />
        <Todo
          elements={elementList}
          totalElements={elementList.length}
          amountFinish={elementList.filter(e => e.checked).length}
          handlerCbChange={handlerCbChange}
          handlerDelete={handlerDelete}
        />
      </main>
    </div>
  );
}
