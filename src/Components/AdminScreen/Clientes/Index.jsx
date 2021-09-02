import React from 'react';
import Styles from './Clientes.module.css';
import lixeira from '../../../Assets/img/lixeira.png';
import editar from '../../../Assets/img/ferramenta-lapis.png';
import loader from '../../../Assets/img/loader.gif';
import { useState, useEffect } from 'react';
import Modal from '../../ModalClientes/ModalClientes';
import ModalConfirm from '../../ModalConfirm/ModalConfirm';
import ModalUpdate from '../../ModalUpdateCliente/ModalUpdateCliente';

const Clientes = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  const [deleteId, setDeleteID] = useState(0);
  const [updateId, setUpdateID] = useState(0);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    if (!clientes.length) {
      buscaCliente();
    }
    console.log(clientes);
  }, [clientes]);

  const buscaCliente = async () => {
    let request = await fetch(
      'https://api-rest-client.herokuapp.com/clientes/',
    );
    let json = await request.json();
    let clientes = json.result;

    setClientes(clientes);
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
      <h1>Clientes</h1>
      {clientes.length ? (
        <table>
          <thead>
            <tr>
              <th className={Styles.th}>ID</th>
              <th>Nome</th>
              <th className={Styles.th}>Email</th>
              <th className={Styles.th}>CPF</th>
              <th className={Styles.th}>Quarto</th>
              <th className={Styles.th}>
                {' '}
                <button className={Styles.btnModal} onClick={() => callModal()}>
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cli) => (
              <tr key={cli.ID}>
                <td>{cli.ID}</td>
                <td>{cli.NOME}</td>
                <td>{cli.EMAIL}</td>
                <td>{cli.CPF}</td>
                <td>{cli.QUARTO}</td>

                <td>
                  <img
                    className={Styles.img}
                    id={cli.ID}
                    onClick={callUpdate}
                    src={editar}
                    alt="Atualizar"
                  />{' '}
                  <img
                    className={Styles.img}
                    id={cli.ID}
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
          apiUrl="https://api-rest-client.herokuapp.com/clientes/"
          buscaCliente={() => buscaCliente()}
          onClose={() => setIsModalVisible(false)}
        />
      ) : null}

      {isConfirmVisible ? (
        <ModalConfirm
          apiUrl="https://api-rest-client.herokuapp.com/clientes/"
          deleteId={deleteId}
          busca={() => buscaCliente()}
          onConfirm={() => setIsConfirmVisible(false)}
        />
      ) : null}

      {isUpdateVisible ? (
        <ModalUpdate
          isUpdateVisible={isUpdateVisible}
          apiUrl="https://api-rest-client.herokuapp.com/clientes/"
          updateId={updateId}
          buscaCliente={() => buscaCliente()}
          onUpdate={() => setIsUpdateVisible(false)}
        />
      ) : null}
    </div>
  );
};

export default Clientes;
