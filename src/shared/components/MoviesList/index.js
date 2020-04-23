import React from 'react';
import { Link } from 'react-router-dom';

import useApi from '../../../hooks/useDataApi';

import './styles.scss';

const Item = ({ item }) => (
  <>
    <Link to={{ pathname: `/details/${item.id}/${item.url}`, state: { item } }}>
      <img src={item.cover} alt={item.title} />
    </Link>
  </>
);

const WhiteSpaceHack = () => (
  <>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
  </>
);

const LoadingWarning = () => <>Carregando...</>;
const ErrorWarning = () => <>Ocorreu um erro ao buscar os dados na API...</>;

export default () => {
  const [items, apiStatus] = useApi('/movies', []);

  return (
    <>
      <div className="movies-list">
        {apiStatus.isLoading && <LoadingWarning />}
        {apiStatus.isError && <ErrorWarning />}
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ))}
          <WhiteSpaceHack />
        </ul>
      </div>
    </>
  );
};
