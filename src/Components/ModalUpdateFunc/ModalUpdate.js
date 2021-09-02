import React, { useEffect, useState } from 'react';
import Styles from './ModalUpdate.module.css';

const Modal = ({
  onUpdate = () => {},
  buscaFunc,
  updateId,
  isUpdateVisible,
}) => {
  const [nomeFunc, setNomeFunc] = useState('');
  const [idadeFunc, setIdadeFunc] = useState('');
  const [cpfFunc, setCpfFunc] = useState('');
  const [cargoFunc, setCargoFunc] = useState('');
  const [senhaFunc, setSenhaFunc] = useState('');

  useEffect(() => buscaFuncById(updateId), [isUpdateVisible]);

  const buscaFuncById = async (id) => {
    let url = 'https://api-rest-funcionarios.herokuapp.com/funcionarios/' + id;
    let request = await fetch(url);
    let json = await request.json();
    let func = json.result[0];
    console.log(func.NOME);
    setNomeFunc(func.NOME);
    setIdadeFunc(func.IDADE);
    setCpfFunc(func.CPF);
    setCargoFunc(func.CARGO);
    setSenhaFunc(func.SENHA);
  };

  const handleNome = (e) => {
    setNomeFunc(e.target.value);
  };

  const handleIdade = (e) => {
    setIdadeFunc(e.target.value);
  };

  const handleCpf = (e) => {
    setCpfFunc(e.target.value);
  };

  const handleCargo = (e) => {
    setCargoFunc(e.target.value);
  };

  const handleSenha = (e) => {
    setSenhaFunc(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.id == 'modalUpdate') {
      onUpdate();
    }
  };

  const AtualizaFunc = async (e, id) => {
    e.preventDefault();

    let func = {
      nome: nomeFunc,
      idade: idadeFunc,
      cpf: cpfFunc,
      cargo: cargoFunc,
      senha: senhaFunc,
    };

    let put = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(func),
    };

    let url = 'https://api-rest-funcionarios.herokuapp.com/funcionarios/' + id;

    let json = await fetch(url, put);
    onUpdate();
    buscaFunc();
    setTimeout(() => {
      buscaFunc();
    }, 1000);
  };

  return (
    <div id="modalUpdate" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.formularioContato}>
            <div className={Styles.containerflex}>
              <form>
                <h4 class={Styles.tituloMensagem}>Atualizar Funcionário</h4>
                <div>
                  <input
                    onChange={handleNome}
                    type="text"
                    id="nome"
                    name="nome"
                    required=""
                    placeholder="Name"
                    value={nomeFunc}
                  />
                </div>
                <div>
                  <input
                    onChange={handleIdade}
                    type="number"
                    id="number"
                    name="number"
                    required=""
                    placeholder="Idade"
                    max="70"
                    min="0"
                    value={idadeFunc}
                  />
                </div>
                <div>
                  <input
                    onChange={handleCpf}
                    type="text"
                    id="CPF"
                    name="CPF"
                    required=""
                    placeholder="CPF"
                    value={cpfFunc}
                  />
                </div>

                <div>
                  <input
                    onChange={handleCargo}
                    type="text"
                    id="Cargo"
                    name="Cargo"
                    required=""
                    placeholder="Cargo"
                    value={cargoFunc}
                  />
                </div>

                <div>
                  <input
                    onChange={handleSenha}
                    type="password"
                    id="password"
                    name="password"
                    required=""
                    placeholder="Senha"
                    value={senhaFunc}
                  />
                </div>
                <div className={Styles.centralizarBtn}>
                  <input
                    onClick={(e) => AtualizaFunc(e, updateId)}
                    class="enviar"
                    id="enviar"
                    name="enviar"
                    type="submit"
                    value="Atualizar"
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
