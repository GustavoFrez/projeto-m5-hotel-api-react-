import React from 'react';
import Styles from './Funcionarios.module.css';
import lixeira from '../../../Assets/img/lixeira.png';
import editar from '../../../Assets/img/ferramenta-lapis.png';
import loader from '../../../Assets/img/loader.gif';
import { useState, useEffect } from 'react';
import Modal from '../../ModalFunc/ModalFunc';
import ModalConfirm from '../../ModalConfirm/ModalConfirm';
import ModalUpdate from '../../ModalUpdateFunc/ModalUpdate';

const Funcionarios = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  const [deleteId, setDeleteID] = useState(0);
  const [updateId, setUpdateID] = useState(0);
  const [func, setFunc] = useState([]);

  useEffect(() => {
    if (!func.length) {
      buscaFunc();
    }
    console.log(func);
  });

  const buscaFunc = async () => {
    let request = await fetch(
      'https://api-rest-funcionarios.herokuapp.com/funcionarios/',
    );
    let json = await request.json();
    let funcionarios = json.result;

    setFunc(funcionarios);
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
      <h1>Funcionários</h1>
      {func.length ? (
        <table>
          <thead>
            <tr>
              <th className={Styles.th}>ID</th>
              <th>Nome</th>
              <th className={Styles.th}>Idade</th>
              <th className={Styles.th}>CPF</th>
              <th className={Styles.th}>Cargo</th>
              <th className={Styles.th}>
                <button className={Styles.btnModal} onClick={() => callModal()}>
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {func.map((fun) => (
              <tr key={fun.ID}>
                <td>{fun.ID}</td>
                <td>{fun.NOME}</td>
                <td>{fun.IDADE}</td>
                <td>{fun.CPF}</td>
                <td>{fun.CARGO}</td>

                <td>
                  <img
                    className={Styles.img}
                    id={fun.ID}
                    onClick={callUpdate}
                    src={editar}
                    alt="Atualizar"
                  />{' '}
                  <img
                    className={Styles.img}
                    id={fun.ID}
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
          apiUrl="https://api-rest-funcionarios.herokuapp.com/funcionarios/"
          buscaFunc={() => buscaFunc()}
          onClose={() => setIsModalVisible(false)}
        />
      ) : null}

      {isConfirmVisible ? (
        <ModalConfirm
          apiUrl="https://api-rest-funcionarios.herokuapp.com/funcionarios/"
          deleteId={deleteId}
          busca={() => buscaFunc()}
          onConfirm={() => setIsConfirmVisible(false)}
        />
      ) : null}

      {isUpdateVisible ? (
        <ModalUpdate
          isUpdateVisible={isUpdateVisible}
          apiUrl="https://api-rest-funcionarios.herokuapp.com/funcionarios/"
          updateId={updateId}
          buscaFunc={() => buscaFunc()}
          onUpdate={() => setIsUpdateVisible(false)}
        />
      ) : null}
    </div>
  );
};

export default Funcionarios;
