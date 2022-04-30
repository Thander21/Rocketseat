import { RepositoryItem } from './RepositoryItem';
import { useState, useEffect } from 'react';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryLIst() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/Rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Respositórios</h1>;
      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
