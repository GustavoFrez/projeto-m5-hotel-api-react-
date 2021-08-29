import React, { useState } from "react";
import Styles from "./ModalConfirm.module.css";

const Modal = ({ onConfirm= () => {}, buscaFunc, deleteId }) => {


  const handleClick = (e) =>{
    if(e.target.id == "modalConfirm"){
      onConfirm()
    }

  }  

  const deletaFunc = async ()=>{   


    let deletar = {        
        method: "DELETE",        
        headers: new Headers({            
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }) 
         };   
   
  
    let url = 'https://api-rest-funcionarios.herokuapp.com/funcionarios/' + deleteId    

    let json = await fetch(url, deletar)  
    
    onConfirm()
    setTimeout(() => {
       buscaFunc()  
    }, 1000);    

  }

  return (
    <div id="modalConfirm" onClick={handleClick} className={Styles.modal}>
      <div className={Styles.container}>
      
        <div className={Styles.content}>        
            
              
        </div>
        <button className={Styles.btnClose} onClick={() => onConfirm()}>Sair</button><button className={Styles.btnClose} onClick={deletaFunc}>Deletar</button>
      </div>
    </div>
  );
};

export default Modal;
