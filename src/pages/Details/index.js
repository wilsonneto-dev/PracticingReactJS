import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import useApi from '../../hooks/useDataApi';

import './styles.scss';

const LoadingWarning = () => <>Carregando...</>;
const ErrorWarning = () => <>Ocorreu um erro ao buscar os dados na API...</>;

const InnerDetails = ({ item }) => (
  <>
    <div className="wrapper">
      <div className="left">
        <img src={item.cover} alt={item.title} />
      </div>
      <div className="right">
        <div className="box">
          <h1>{item.title}</h1>
          <h4>{item.subtitle}</h4>
          <p>{item.description}</p>
          <span className="price">
            Aluguel: R$ {parseInt(item.price).toFixed(2)}
          </span>
        </div>
        <div className="button-wrap">
          <div className="button">Adicionar ao Carrinho</div>
        </div>
      </div>
    </div>
  </>
);

export default () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [item, setItem] = useState({});
  const [apiItem, apiStatus, setApiUrl] = useApi('', {});

  useEffect(() => {
    if (state?.item) {
      console.log(state?.item);
      setItem(state.item);
    } else {
      setApiUrl(`/movies/${id}`, {});
    }
  }, [id, setApiUrl, state]);

  useEffect(() => {
    setItem(apiItem);
  }, [apiItem]);

  useEffect(() => {
    console.log(item);
    console.log('useEffect: item');
  }, [item]);

  return (
    <>
      <div className="content-details">
        {apiStatus.isLoading && <LoadingWarning />}
        {apiStatus.isError && <ErrorWarning />}
        {apiStatus.isLoading || <InnerDetails item={item} />}
      </div>
    </>
  );
};
