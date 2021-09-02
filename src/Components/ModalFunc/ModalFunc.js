import React, { useState } from 'react';
import Styles from './Modal.module.css';

const Modal = ({ onClose = () => {}, buscaFunc, apiUrl }) => {
  const [nomeFunc, setNomeFunc] = useState('');
  const [idadeFunc, setIdadeFunc] = useState('');
  const [cpfFunc, setCpfFunc] = useState('');
  const [cargoFunc, setCargoFunc] = useState('');
  const [senhaFunc, setSenhaFunc] = useState('');

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
    if (e.target.id == 'modal') {
      onClose();
    }
  };

  const cadastrarFunc = async (e, apiUrl) => {
    e.preventDefault();

    let func = {
      nome: nomeFunc,
      idade: idadeFunc,
      cpf: cpfFunc,
      cargo: cargoFunc,
      senha: senhaFunc,
    };

    let post = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(func),
    };

    let json = await fetch(apiUrl, post);
    onClose();
    setTimeout(() => {
      buscaFunc();
    }, 1000);
  };

  return (
    <div id="modal" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.formularioContato}>
            <div className={Styles.containerflex}>
              <form>
                <h4 class={Styles.tituloMensagem}>Cadastro Funcionário</h4>
                <div>
                  <input
                    onChange={handleNome}
                    type="text"
                    id="nome"
                    name="nome"
                    required=""
                    placeholder="Name"
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
                  />
                </div>
                <div className={Styles.centralizarBtn}>
                  <input
                    onClick={(e) => cadastrarFunc(e, apiUrl)}
                    className={Styles.btnEnviar}
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
