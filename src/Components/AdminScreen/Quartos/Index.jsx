import React from 'react';
import Styles from './Quartos.module.css';
import lixeira from '../../../Assets/img/lixeira.png';
import editar from '../../../Assets/img/ferramenta-lapis.png';
import loader from '../../../Assets/img/loader.gif';
import { useState, useEffect } from 'react';
import Modal from '../../ModalQuarto/ModalQuarto';
import ModalConfirm from '../../ModalConfirm/ModalConfirm';
import ModalUpdate from '../../ModalUpdateQuarto/ModalUpdateQuarto';

const Quartos = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  const [deleteId, setDeleteID] = useState(0);
  const [updateId, setUpdateID] = useState(0);
  const [quartos, setQuartos] = useState([]);

  useEffect(() => {
    if (!quartos.length) {
      buscaQuartos();
    }
  }, [quartos]);

  const buscaQuartos = async () => {
    let request = await fetch('https://hotelresilia.herokuapp.com/room/');
    let json = await request.json();
    let quartos = json.result;

    setQuartos(quartos);
  };

  const callModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const callConfirm = (e) => {
    setDeleteID(e.target.id);
    setIsConfirmVisible(!isConfirmVisible);
  };

  const callUpdate = (e) => {
    setUpdateID(e.target.id);
    setIsUpdateVisible(!isConfirmVisible);
  };

  return (
    <div className={Styles.container}>
      <h1>Quartos</h1>
      {quartos.length ? (
        <table>
          <thead>
            <tr>
              <th className={Styles.th}>ID</th>
              <th className={Styles.th}>Número</th>
              <th className={Styles.th}>Status</th>
              <th className={Styles.th}>Tipo</th>
              <th className={Styles.th}>
                <button className={Styles.btnModal} onClick={() => callModal()}>
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {quartos.map((quarto) => (
              <tr key={quarto.id}>
                <td>{quarto.Id}</td>
                <td>{quarto.RoomNumber}</td>
                <td>{quarto.IsOcupied ? 'Ocupado' : 'Disponível'}</td>
                <td>{quarto.RoomType}</td>

                <td>
                  <img
                    className={Styles.img}
                    id={quarto.Id}
                    onClick={callUpdate}
                    src={editar}
                    alt="Atualizar"
                  />{' '}
                  <img
                    className={Styles.img}
                    id={quarto.Id}
                    onClick={callConfirm}
                    src={lixeira}
                    alt="Deletar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={Styles.loader}>
          <img src={loader} />
        </div>
      )}

      {isModalVisible ? (
        <Modal
          apiUrl="https://hotelresilia.herokuapp.com/room/"
          buscaQuartos={() => buscaQuartos()}
          onClose={() => setIsModalVisible(false)}
        />
      ) : null}

      {isConfirmVisible ? (
        <ModalConfirm
          apiUrl="https://hotelresilia.herokuapp.com/room/delete/"
          deleteId={deleteId}
          busca={() => buscaQuartos()}
          onConfirm={() => setIsConfirmVisible(false)}
        />
      ) : null}

      {isUpdateVisible ? (
        <ModalUpdate
          isUpdateVisible={isUpdateVisible}
          apiUrl="https://hotelresilia.herokuapp.com/room/update/"
          updateId={updateId}
          buscaQuartos={() => buscaQuartos()}
          onUpdate={() => setIsUpdateVisible(false)}
        />
      ) : null}
    </div>
  );
};

export default Quartos;
