import React from 'react';
import Styles from './Quartos.module.css';
import quarto1 from '../../Assets/img/quarto1.png';
import quarto2 from '../../Assets/img/quarto2.jpg';
import quarto3 from '../../Assets/img/quarto3.png';
import quarto4 from '../../Assets/img/quarto4.jpg';

const Quarto = () => {
  return (
    <main>
      <section className={Styles.backgroundQuarto}>
        <h2>Quartos</h2>
      </section>

      <div className={Styles.centralizar}>
        <section className={Styles.gridQuarto}>
          <img src={quarto1} alt="Premium" className={Styles.imgQuartoUm} />
          <div className={Styles.textoQuartoUm}>
            <h5 className={Styles.tituloQuarto}>Standard</h5>
            <p className={Styles.textoPreco}>
              R$ <span className={Styles.valorPreco}>99</span>/diária
            </p>
            <div className={Styles.espacamentoLinhas}>
              <p>Size:30 ft</p>
              <p>Capacity: Max persion 14</p>
              <p>Bed: King Beds</p>
              <p>Services: Wifi, Television, Bathroom,..</p>
            </div>
          </div>

          <img src={quarto3} alt="" className={Styles.imgQuartoDois} />
          <div className={Styles.textoQuartoDois}>
            <h5 className={Styles.tituloQuarto}>Single</h5>
            <p className={Styles.textoPreco}>
              R$ <span className={Styles.valorPreco}>99</span>/diária
            </p>
            <div className={Styles.espacamentoLinhas}>
              <p>Size:30 ft</p>
              <p>Capacity: Max persion 3</p>
              <p>Bed: King Beds</p>
              <p>Services: Wifi, Television, Bathroom,..</p>
            </div>
          </div>

          <img src={quarto1} alt="" className={Styles.imgQuartoTres} />
          <div className={Styles.textoQuartoTres}>
            <h5 className={Styles.tituloQuarto}>Lux</h5>
            <p className={Styles.textoPreco}>
              R$ <span className={Styles.valorPreco}>99</span>/diária
            </p>
            <div className={Styles.espacamentoLinhas}>
              <p>Size:30 ft</p>
              <p>Capacity: Max persion 3</p>
              <p>Bed: King Beds</p>
              <p>Services: Wifi, Television, Bathroom,..</p>
            </div>
          </div>

          <img src={quarto3} alt="" className={Styles.imgQuartoQuatro} />
          <div className={Styles.textoQuartoQuatro}>
            <h5 className={Styles.tituloQuarto}>Family</h5>
            <p className={Styles.textoPreco}>
              R$ <span className={Styles.valorPreco}>99</span>/diária
            </p>
            <div className={Styles.espacamentoLinhas}>
              <p>Size:30 ft</p>
              <p>Capacity: Max persion 3</p>
              <p>Bed: King Beds</p>
              <p>Services: Wifi, Television, Bathroom,..</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Quarto;
