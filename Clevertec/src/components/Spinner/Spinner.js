import React from 'react';
import './Spinner.css'

/**
 * Компонент спиннер
 */
function Spinner() {
  return (
    <div>
    <div className='spinner'>
      <div className='bounce1' />
      <div className='bounce2' />
      <div className='bounce3' />
      <h2>Загрузка формы подождите)</h2>
    </div>
    </div>
);
}
export default Spinner;