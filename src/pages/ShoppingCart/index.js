import React from 'react';

import './styles.scss';

export default () => {
  return (
    <>
      <div className="content-cart">
        <section className="inner">
          <header>
            <h1>Itens adicionados ao carrinho</h1>
          </header>
          <ul>
            <li>
              <div className="item thumb">
                <img
                  src="http://movies-example.will.tmp.br/uploads/the_shamwshank_redemption_f1b483f7f3.jpeg"
                  alt="cover"
                />
              </div>
              <div className="item title">Clube da Luta</div>
              <div className="item price">R$ 19,90</div>
              <div className="item button">x</div>
            </li>
            <li>
              <div className="item thumb">
                <img
                  src="http://movies-example.will.tmp.br/uploads/the_shamwshank_redemption_f1b483f7f3.jpeg"
                  alt="cover"
                />
              </div>
              <div className="item title">Clube da Luta</div>
              <div className="item price">R$ 19,90</div>
              <div className="item button">x</div>
            </li>
            <li className="total">
              <span>Total: R$ 60,00</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};
