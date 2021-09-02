import React, { useState } from 'react';
import Styles from './Modal.module.css';

const ModalCliente = ({ onClose = () => {}, buscaCliente, apiUrl }) => {
  const [nomeCli, setNomeCli] = useState('');
  const [emailCli, setEmailCli] = useState('');
  const [cpfCli, setCpfCli] = useState('');
  const [quartoCli, setquarto] = useState('');

  const handleNome = (e) => {
    setNomeCli(e.target.value);
  };

  const handleEmail = (e) => {
    setEmailCli(e.target.value);
  };

  const handleCpf = (e) => {
    setCpfCli(e.target.value);
  };

  const handleQuarto = (e) => {
    setquarto(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.id == 'modal') {
      onClose();
    }
  };

  const cadastrarCli = async (e, apiUrl) => {
    e.preventDefault();

    let Cli = {
      nome: nomeCli,
      email: emailCli,
      cpf: cpfCli,
      quarto: quartoCli,
    };

    let post = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(Cli),
    };

    let json = await fetch(apiUrl, post);
    onClose();
    setTimeout(() => {
      buscaCliente();
    }, 1000);
  };

  return (
    <div id="modal" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.formularioContato}>
            <div className={Styles.containerflex}>
              <form>
                <h4 class={Styles.tituloMensagem}>Cadastrar Cliente</h4>
                <div>
                  <input
                    onChange={handleNome}
                    type="text"
                    id="nome"
                    name="nome"
                    required=""
                    placeholder="Nome"
                  />
                </div>
                <div>
                  <input
                    onChange={handleEmail}
                    type="text"
                    id="Email"
                    name="Email"
                    required=""
                    placeholder="Email"
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
                    onChange={handleQuarto}
                    type="number"
                    id="Quarto"
                    name="Quarto"
                    required=""
                    placeholder="Quarto"
                  />
                </div>
                <div className={Styles.centralizarBtn}>
                  <input
                    onClick={(e) => cadastrarCli(e, apiUrl)}
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

export default ModalCliente;
