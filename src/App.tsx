import styles from './App.module.css';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Todo } from './components/Todo';

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Search />
        <Todo />
      </main>
    </div>
  );
}
