import React from 'react';
import Styles from './Mobilia.module.css';
import lixeira from '../../../Assets/img/lixeira.png';
import editar from '../../../Assets/img/ferramenta-lapis.png';
import loader from '../../../Assets/img/loader.gif';
import { useState, useEffect } from 'react';
import Modal from '../../ModalMobilia/ModalMobilia';
import ModalConfirm from '../../ModalConfirm/ModalConfirm';
import ModalUpdate from '../../ModalUpdateMobilia/ModalUpdateMobilia';

const Mobilia = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  const [deleteId, setDeleteID] = useState(0);
  const [updateId, setUpdateID] = useState(0);
  const [mobilias, setMobilias] = useState([]);

  useEffect(() => {
    if (!mobilias.length) {
      buscaMobilia();
    }
    console.log(mobilias);
  }, [mobilias]);

  const buscaMobilia = async () => {
    let request = await fetch(
      'https://warm-cliffs-31075.herokuapp.com/mobilia/',
    );
    let json = await request.json();
    let mobilias = json.result;

    setMobilias(mobilias);
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
      <h1>Mobilias</h1>
      {mobilias.length ? (
        <table>
          <thead>
            <tr>
              <th className={Styles.th}>ID</th>
              <th className={Styles.th}>Tipo de Mobilia</th>
              <th className={Styles.th}>Cor</th>
              <th className={Styles.th}>Manutenção</th>
              <th className={Styles.th}>
                <button className={Styles.btnModal} onClick={() => callModal()}>
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {mobilias.map((mob) => (
              <tr key={mob.ID}>
                <td>{mob.ID}</td>
                <td>{mob.TIPOMOBILIA}</td>
                <td>{mob.COR}</td>
                <td>{mob.MANUTENCAO}</td>

                <td>
                  <img
                    className={Styles.img}
                    id={mob.ID}
                    onClick={callUpdate}
                    src={editar}
                    alt="Atualizar"
                  />{' '}
                  <img
                    className={Styles.img}
                    id={mob.ID}
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
          apiUrl="https://warm-cliffs-31075.herokuapp.com/mobilia"
          buscaMobilia={() => buscaMobilia()}
          onClose={() => setIsModalVisible(false)}
        />
      ) : null}

      {isConfirmVisible ? (
        <ModalConfirm
          apiUrl="https://warm-cliffs-31075.herokuapp.com/mobilia/delete/"
          deleteId={deleteId}
          busca={() => buscaMobilia()}
          onConfirm={() => setIsConfirmVisible(false)}
        />
      ) : null}

      {isUpdateVisible ? (
        <ModalUpdate
          isUpdateVisible={isUpdateVisible}
          apiUrl="https://warm-cliffs-31075.herokuapp.com/mobilia/"
          updateId={updateId}
          buscaMobilia={() => buscaMobilia()}
          onUpdate={() => setIsUpdateVisible(false)}
        />
      ) : null}
    </div>
  );
};

export default Mobilia;
