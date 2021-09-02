import React, { useEffect, useState } from 'react';
import Styles from './ModalUpdate.module.css';

const Modal = ({
  onUpdate = () => {},
  buscaQuartos,
  updateId,
  isUpdateVisible,
}) => {
  const [numeroQuarto, setNumeroQuarto] = useState('');
  const [statusQuarto, setStatusQuarto] = useState('');
  const [tipoQuarto, setTipoQuarto] = useState('');

  useEffect(() => buscaQuartosById(updateId), [isUpdateVisible]);

  const buscaQuartosById = async (id) => {
    let url = 'https://hotelresilia.herokuapp.com/room/' + id;
    let request = await fetch(url);
    let json = await request.json();
    let Quarto = json.result[0];
    console.log(Quarto.RoomNumber);
    setNumeroQuarto(Quarto.RoomNumber);
    setStatusQuarto(Quarto.isOcupied);
    setTipoQuarto(Quarto.RoomType);
  };

  const handleNumero = (e) => {
    setNumeroQuarto(e.target.value);
  };

  const handleStatus = (e) => {
    setStatusQuarto(e.target.value);
  };

  const handleTipo = (e) => {
    setTipoQuarto(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.id == 'modalUpdate') {
      onUpdate();
    }
  };

  const AtualizaQuarto = async (e, id) => {
    e.preventDefault();

    let Quarto = {
      roomNumber: numeroQuarto,
      isOcupied: statusQuarto ? 1 : 0,
      roomType: tipoQuarto,
    };

    let put = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(Quarto),
    };

    let url = 'https://hotelresilia.herokuapp.com/room/update/' + id;
    console.log(Quarto);
    let json = await fetch(url, put);
    onUpdate();
    setTimeout(() => {
      buscaQuartos();
    }, 1000);
  };

  return (
    <div id="modalUpdate" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.formularioContato}>
            <div className={Styles.containerflex}>
              <form>
                <h4 class={Styles.tituloMensagem}>Atualizar Quarto</h4>

                <div>
                  <input
                    onChange={handleNumero}
                    type="number"
                    id="Numero"
                    name="Numero"
                    required=""
                    placeholder="Número"
                    value={numeroQuarto}
                  />
                </div>

                <div>
                  <select
                    onChange={handleStatus}
                    className={Styles.select}
                    type="Status"
                    id="Status"
                    name="Status"
                    value={statusQuarto}
                  >
                    <option value="1">Ocupado</option>
                    <option value="0" selected>
                      Disponível
                    </option>
                  </select>
                </div>

                <div>
                  <select
                    onChange={handleTipo}
                    className={Styles.select}
                    id="Tipo"
                    name="TipoTipo"
                    value={tipoQuarto}
                  >
                    <option value="Standard">Standard</option>
                    <option value="Family">Family</option>
                    <option value="Single">Single</option>
                    <option value="Economic" selected>
                      Economic
                    </option>
                  </select>
                </div>

                <div>
                  <input
                    onClick={(e) => AtualizaQuarto(e, updateId)}
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
        <button className={Styles.btnClose} onClick={() => onUpdate()}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
