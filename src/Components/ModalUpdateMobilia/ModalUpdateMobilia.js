import React, { useEffect, useState } from 'react';
import Styles from './ModalUpdate.module.css';

const ModalUpdateMobilia = ({
  onUpdate = () => {},
  buscaMobilia,
  updateId,
  isUpdateVisible,
}) => {
  const [tipoMobilia, setTipoMobilia] = useState('');
  const [corMobilia, setCorMobilia] = useState('');
  const [ManutencaoMobilia, setManutencaoMobilia] = useState('');

  useEffect(() => buscaMobById(updateId), [isUpdateVisible]);

  const buscaMobById = async (id) => {
    let url = 'https://warm-cliffs-31075.herokuapp.com/mobilia/' + id;
    let request = await fetch(url);
    let json = await request.json();
    let mob = json.result[0];
    console.log(mob.TIPOMOBILIA);
    setTipoMobilia(mob.TIPOMOBILIA);
    setCorMobilia(mob.COR);
    setManutencaoMobilia(mob.MANUTENCAO);
  };

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
    if (e.target.id == 'modalUpdate') {
      onUpdate();
    }
  };

  const AtualizaMob = async (e, id) => {
    e.preventDefault();

    let Mob = {
      tipomobilia: tipoMobilia,
      cor: corMobilia,
      manutencao: ManutencaoMobilia,
    };

    let put = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(Mob),
    };

    let url = 'https://warm-cliffs-31075.herokuapp.com/mobilia/edit/' + id;

    let json = await fetch(url, put);
    onUpdate();
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
                <h4 className={Styles.tituloMensagem}>Atualizar Mobilia</h4>
                <div>
                  <input
                    onChange={handleTipo}
                    type="text"
                    id="tipo"
                    name="tipo"
                    required
                    value={tipoMobilia}
                  />
                </div>
                <div>
                  <input
                    onChange={handleCor}
                    type="text"
                    id="cor"
                    name="cor"
                    required
                    value={corMobilia}
                  />
                </div>
                <div>
                  <input
                    onChange={handleManutencao}
                    type="text"
                    id="Manutencao"
                    name="Manutencao"
                    required
                    value={ManutencaoMobilia}
                  />
                </div>

                <div className={Styles.centralizarBtn}>
                  <input
                    onClick={(e) => AtualizaMob(e, updateId)}
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

export default ModalUpdateMobilia;
