import './styles/global.scss';
import { Counter } from './components/Counter';
import { RepositoryLIst } from './components/RepositoryLIst';

export function App() {
  return (
    <>
      <RepositoryLIst />
      <Counter />
    </>
  );
}
