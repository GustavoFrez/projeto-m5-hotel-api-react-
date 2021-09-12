import React, { useContext, useState } from 'react';
import { Context } from '../../SessionProvider';
import Styles from './ModalSair.module.css';

const Modal = () => {

  const {handleLoggout, setIsSairVisible} = useContext(Context)
  
  const handleClick = (e) => {
    if (e.target.id == 'modalConfirm') {
      setIsSairVisible(false);
    }
  };

  const sair = () =>{
    setIsSairVisible(false)
    setTimeout(()=>{
      handleLoggout()

    }, 1000)

  }

  const ficar = () => setIsSairVisible(false)

  return (
    <div id="modalConfirm" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.tituloDeletar}>
          <h4>Realmente Deseja Sair?</h4>
        </div>
        <div className={Styles.content}>
          <button className={Styles.btnClose} onClick={ficar}>
            Ficar
          </button>
          <button className={Styles.btnClose} onClick={sair}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
