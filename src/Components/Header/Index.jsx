import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';
import Styles from './Header.module.css';
import { Context } from '../../SessionProvider';
import ModalSair from '../ModalSair/ModalSair'

const Header = () => {
  const { talogado, isSairVisible, setIsSairVisible } = useContext(Context);

  return (
    <header>
      <nav className={Styles.navHeader}>
        <label>
          <img src={logo} alt="Logo" className={Styles.logos} />
        </label>

        <button className={Styles.botaoMenu}>&#9776;</button>

        <ul className={Styles.ulHeader}>
          <Link className={Styles.linkHeader} to="/">
            <li className={Styles.liHeader}>Home</li>
          </Link>

          <Link className={Styles.linkHeader} to="/Quartos">
            <li className={Styles.liHeader}>Quartos</li>
          </Link>

          <Link className={Styles.linkHeader} to="/Contato">
            <li className={Styles.liHeader}>Contato</li>
          </Link>

          {talogado ? (
            <>
              <Link className={Styles.linkHeader} to="/AdminScreen/">
                <li className={Styles.liHeader}>Admin</li>
              </Link>
              <Link
                className={Styles.linkHeader}
                
                onClick={()=>setIsSairVisible(true)}
              >
                <li className={Styles.liHeader}>Sair</li>
              </Link>
            </>
          ) : null}
        </ul>
      </nav>

      {isSairVisible ? <ModalSair/> : null}

    </header>
  );
};

export default Header;
