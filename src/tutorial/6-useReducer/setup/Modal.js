import React, { useEffect } from 'react';

const Modal = ({modalContenet, closeModal}) => {
 
  useEffect(() => {

    setTimeout(() => {
      closeModal();
    } , 3000);
  })
  return <div className='modal'>
  <p>
  {modalContenet}
  </p>
  </div>;
};

export default Modal;
