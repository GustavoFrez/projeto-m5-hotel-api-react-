import React, { useState } from 'react';
import Styles from './Modal.module.css';

const ModalMobilia = ({ onClose = () => {}, buscaMobilia, apiUrl }) => {
  const [tipoMobilia, setTipoMobilia] = useState('');
  const [corMobilia, setCorMobilia] = useState('');
  const [ManutencaoMobilia, setManutencaoMobilia] = useState('');

  const handleTipo = (e) => {
    setTipoMobilia(e.target.value);
  };

  const handleCor = (e) => {
    setCorMobilia(e.target.value);
  };

  const handleManutencao = (e) => {
    setManutencaoMobilia(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.id == 'modal') {
      onClose();
    }
  };

  const cadastrarMob = async (e, apiUrl) => {
    e.preventDefault();

    let Mob = {
      tipomobilia: tipoMobilia,
      cor: corMobilia,
      manutencao: ManutencaoMobilia,
    };

    let post = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(Mob),
    };
    let url = apiUrl + 'inserir';
    let json = await fetch(url, post);
    onClose();
    setTimeout(() => {
      buscaMobilia();
    }, 1000);
  };

  return (
    <div id="modal" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <div className={Styles.formularioContato}>
            <div className={Styles.containerflex}>
              <form>
                <h4 class={Styles.tituloMensagem}>Cadastrar Mobilia</h4>
                <div>
                  <input
                    onChange={handleTipo}
                    type="text"
                    id="tipo"
                    name="tipo"
                    required=""
                    placeholder="Tipo Mobilia"
                  />
                </div>
                <div>
                  <input
                    onChange={handleCor}
                    type="text"
                    id="cor"
                    name="cor"
                    required=""
                    placeholder="Cor"
                  />
                </div>
                <div>
                  <input
                    onChange={handleManutencao}
                    type="text"
                    id="Manutencao"
                    name="Manutencao"
                    required=""
                    placeholder="Manutencao"
                  />
                </div>

                <div className={Styles.centralizarBtn}>
                  <input
                    onClick={(e) => cadastrarMob(e, apiUrl)}
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

export default ModalMobilia;
