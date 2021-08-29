import React from 'react';
import Styles from './Home.module.css';
import hotel from '../../Assets/img/hotelHome.png';
import piscina from '../../Assets/img/piscinaHome.png';
import quarto from '../../Assets/img/quartoHome.png';
import jardim from '../../Assets/img/jardimHome.png';
import recepcionista from '../../Assets/img/recepcionista.png';
import iconeWifi from '../../Assets/img/iconeWifi.png';
import iconePiscina from '../../Assets/img/iconePiscina.png';
import iconeCafe from '../../Assets/img/iconeCoffee.png';
import iconeBar from '../../Assets/img/iconeBar.png';
import iconeTv from '../../Assets/img/iconeTv.png';
import iconeJanta from '../../Assets/img/iconeJanta.png';

const Home = () => {
  return (
    <main className={Styles.main}>
      <section className={Styles.backgroundHome}>
        <h2>Bem-vindo</h2>
        <h5>O seu hotel 5 estrelas</h5>
        <h5>a um clique de distância</h5>
        <span className={Styles.estrela}>★★★★★</span>
      </section>
      <section className={Styles.sobreNos}>
        <div className={Styles.container}>
          <div className={Styles.textoSobreNos}>
            <h2>Sobre Nós</h2>
            <h5>Bem-vindo Hiroto Hotel</h5>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque. voluptatem
              sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque.
            </p>
          </div>

          <div className={Styles.imgSobreNos}>
            <img src={hotel} alt="" className={Styles.hotelHome} />
          </div>
        </div>
      </section>

      <section className={Styles.galeria}>
        <div>
          <img src={piscina} alt="Piscina" />
        </div>
        <div>
          <img src={quarto} alt="Quarto" />
        </div>
        <div>
          <img src={jardim} alt="Jardim" />
        </div>
        <div>
          <img src={recepcionista} alt="Recepcionista" />
        </div>
      </section>

      <section className={Styles.containerFlexServicos}>
        <div className={Styles.containerServicos}>
          <div className={Styles.card}>
            <img src={iconeWifi} alt="Wifi" />
            <h3>Free Wi-Fi</h3>
            <p>
              The massive investment in a hotel or resort requires constant
              reviews and control in order to make it a successful investment.
            </p>
          </div>

          <div className={Styles.card}>
            <img src={iconePiscina} alt="Piscina" />
            <h3>Premium Pool</h3>
            <p>
              The massive investment in a hotel or resort requires constant
              reviews and control in order to make it a successful investment.
            </p>
          </div>

          <div className={Styles.card}>
            <img src={iconeCafe} alt="Café" />
            <h3>Coffee Maker</h3>
            <p>
              The massive investment in a hotel or resort requires constant
              reviews and control in order to make it a successful investment.
            </p>
          </div>

          <div className={Styles.card}>
            <img src={iconeBar} alt="Bar" />
            <h3>Bar Wine</h3>
            <p>
              The massive investment in a hotel or resort requires constant
              reviews and control in order to make it a successful investment.
            </p>
          </div>

          <div className={Styles.card}>
            <img src={iconeTv} alt="TV" />
            <h3>TV HD</h3>
            <p>
              The massive investment in a hotel or resort requires constant
              reviews and control in order to make it a successful investment.
            </p>
          </div>

          <div className={Styles.card}>
            <img src={iconeJanta} alt="Restaurante" />
            <h3>Restaurant</h3>
            <p>
              The massive investment in a hotel or resort requires constant
              reviews and control in order to make it a successful investment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
