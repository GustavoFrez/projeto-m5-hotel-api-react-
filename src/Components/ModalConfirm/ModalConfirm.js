import React, { useState } from 'react';
import Styles from './ModalConfirm.module.css';

const Modal = ({ onConfirm = () => {}, busca, deleteId, apiUrl }) => {
  const handleClick = (e) => {
    if (e.target.id == 'modalConfirm') {
      onConfirm();
    }
  };

  const deletaFunc = async () => {
    let deletar = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    let url = apiUrl + deleteId;

    let json = await fetch(url, deletar);

    onConfirm();
    setTimeout(() => {
      busca();
    }, 1000);
  };

  return (
    <div id="modalConfirm" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.tituloDeletar}>
          <h4>Tem certeza que deseja deletar ?</h4>
        </div>
        <div className={Styles.content}>
          <button className={Styles.btnClose} onClick={() => onConfirm()}>
            Sair
          </button>
          <button className={Styles.btnClose} onClick={deletaFunc}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
