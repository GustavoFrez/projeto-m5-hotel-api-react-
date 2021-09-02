import React, { useState } from 'react';
import Styles from './ModalQuarto.module.css';

const Modal = ({ onClose = () => {}, buscaQuartos, apiUrl }) => {
  const [numeroQuarto, setNumeroQuarto] = useState(0);
  const [statusQuarto, setStatusQuarto] = useState(0);
  const [tipoQuarto, setTipoQuarto] = useState('Standard');

  const handleNumero = (e) => {
    setNumeroQuarto(parseInt(e.target.value));
  };

  const handleStatus = (e) => {
    setStatusQuarto(parseInt(e.target.value));
  };

  const handleTipo = (e) => {
    setTipoQuarto(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.id == 'modal') {
      onClose();
    }
  };

  const cadastrarQuarto = async (e, apiUrl) => {
    e.preventDefault();

    let Quarto = {
      roomNumber: numeroQuarto,
      isOcupied: statusQuarto,
      roomType: tipoQuarto,
    };
    console.log(Quarto);
    let post = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(Quarto),
    };
    let url = apiUrl + 'create';
    let json = await fetch(url, post);

    onClose();
    setTimeout(() => {
      buscaQuartos();
    }, 1000);
  };

  return (
    <div id="modal" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.formularioContato}>
            <div className={Styles.containerflex}>
              <form>
                <h4 class={Styles.tituloMensagem}>Cadastrar Quarto</h4>

                <div>
                  <input
                    onChange={handleNumero}
                    type="number"
                    id="Numero"
                    name="Numero"
                    required=""
                    placeholder="Número"
                  />
                </div>

                <div>
                  <select
                    className={Styles.select}
                    onChange={handleStatus}
                    type="Status"
                    id="Status"
                    name="Status"
                    required
                  >
                    <option value="1">Ocupado</option>
                    <option value="0">Disponível</option>
                  </select>
                </div>

                <div>
                  <select
                    className={Styles.select}
                    onChange={handleTipo}
                    id="Tipo"
                    name="TipoTipo"
                    required
                  >
                    <option value="Standard">Standard</option>
                    <option value="Family">Family</option>
                    <option value="Single">Single</option>
                    <option value="Economic">Economic</option>
                  </select>
                </div>

                <div className={Styles.centralizarBtn}>
                  <input
                    className={Styles.btnEnviar}
                    onClick={(e) => cadastrarQuarto(e, apiUrl)}
                    class="enviar"
                    id="enviar"
                    name="enviar"
                    type="submit"
                    value="Enviar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <button className={Styles.btnClose} onClick={() => onClose()}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
