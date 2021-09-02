import React, { useEffect, useState } from 'react';
import Styles from './ModalUpdate.module.css';

const Modal = ({
  onUpdate = () => {},
  buscaCliente,
  updateId,
  isUpdateVisible,
}) => {
  const [nomeCli, setNomeCli] = useState('');
  const [emailCli, setEmailCli] = useState('');
  const [cpfCli, setCpfCli] = useState('');
  const [quartoCli, setquarto] = useState('');

  useEffect(() => buscaCliById(updateId), [isUpdateVisible]);

  const buscaCliById = async (id) => {
    let url = 'https://api-rest-client.herokuapp.com/clientes/' + id;
    let request = await fetch(url);
    let json = await request.json();
    let cli = json.result[0];
    console.log(cli.NOME);
    setNomeCli(cli.NOME);
    setEmailCli(cli.EMAIL);
    setCpfCli(cli.CPF);
    setquarto(cli.QUARTO);
  };

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
    if (e.target.id == 'modalUpdate') {
      onUpdate();
    }
  };

  const AtualizaCli = async (e, id) => {
    e.preventDefault();

    let cli = {
      nome: nomeCli,
      email: emailCli,
      cpf: cpfCli,
      quarto: quartoCli,
    };

    let put = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(cli),
    };

    let url = 'https://api-rest-client.herokuapp.com/clientes/' + id;

    let json = await fetch(url, put);
    onUpdate();
    setTimeout(() => {
      buscaCliente();
    }, 1000);
  };

  return (
    <div id="modalUpdate" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.formularioContato}>
            <div className={Styles.containerflex}>
              <form>
                <h4 class={Styles.tituloMensagem}>Atualizar Cliente</h4>
                <div>
                  <input
                    onChange={handleNome}
                    type="text"
                    id="nome"
                    name="nome"
                    required=""
                    placeholder="Nome"
                    value={nomeCli}
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
                    value={emailCli}
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
                    value={cpfCli}
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
                    value={quartoCli}
                  />
                </div>
                <div className={Styles.centralizarBtn}>
                  <input
                    onClick={(e) => AtualizaCli(e, updateId)}
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
