import React from 'react';
import Styles from './Funcionarios.module.css';
import lixeira from '../../../Assets/img/lixeira.png'
import editar from '../../../Assets/img/ferramenta-lapis.png'
import loader from '../../../Assets/img/loader.gif'
import { useState, useEffect } from 'react';
import Modal from '../../Modal/Modal';
import ModalConfirm from '../../ModalConfirm/ModalConfirm';

const Funcionarios = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isConfirmVisible, setIsConfirmVisible] = useState(false)
  const [deleteId, setDeleteID] = useState(0)

  const [func, setFunc] = useState([])

  useEffect(()=>{ 
    
    if(!func.length){
      buscaFunc()
    }
    console.log(func)

  })


  const buscaFunc = async ()=>{
    let request = await fetch('https://api-rest-funcionarios.herokuapp.com/funcionarios')
    let json = await request.json()
    let funcionarios = json.result
    
    setFunc(funcionarios)

  }

  const callModal = ()=>{
    setIsModalVisible(!isModalVisible)
  }

  const callConfirm = (e)=>{
    setDeleteID(e.target.id)
    setIsConfirmVisible(!isConfirmVisible)
  }

  return (
    <div className={Styles.container}>
      
         <h1>Funcionários</h1>
{ func.length ?       
<table>
  <thead>
    <tr>
      <th className={Styles.id}>ID</th>
      <th>Nome</th>
      <th className={Styles.idade}>Idade</th>
      <th>CPF</th>
      <th className={Styles.cargo}>Cargo</th>
      <th className={Styles.editar}></th>
    </tr>
    </thead>
  <tbody>
  {func.map(fun =>(
  <tr key={fun.ID}>      
      
    <td>{fun.ID}</td>
    <td>{fun.NOME}</td>
    <td>{fun.IDADE}</td>
    <td>{fun.CPF}</td>
    <td>{fun.CARGO}</td>      

    <td><img className={Styles.img} src={editar} alt=""/> <img className={Styles.img} id={fun.ID} onClick={callConfirm} src={lixeira} alt=""/></td>

  </tr>      

))}
    
  </tbody> 

</table> : <div className={Styles.loader}><img  src={loader}/></div>}



{isModalVisible ? 
  <Modal  
  buscaFunc={()=>buscaFunc()}
  onClose={()=> setIsModalVisible(false)}
  /> : null}
{isConfirmVisible ?
  <ModalConfirm
  deleteId={deleteId}
  buscaFunc={()=>buscaFunc()}
  onConfirm={()=>setIsConfirmVisible(false)}
  /> :null}

    <button className={Styles.btnModal} onClick={()=> callModal()}>+</button>
    </div>
  );
};

export default Funcionarios;
