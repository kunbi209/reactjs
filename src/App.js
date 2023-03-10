import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';

function App() {
  const name = 'Tien Toan';
  const age = 18;
  const isGioTinh = true;
  const student = {
    name: 'Tien Toan',
    age: 30,
    gioiTinh: true,
    soThich: 'Game, xem phim'
  };
  const colorList = ['red', 'green', 'blue']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tien Toan 123 pro vip kk
        </p>
        <p>Xin chao {name} - {age} - {isGioTinh ? 'Nam' : 'Nu'}</p>
        {isGioTinh ? <p>Nam</p> : <p>Nữ</p>}
        {isGioTinh && <p>Nam</p>}
        {!isGioTinh && <p>Nữ</p>}
        {isGioTinh && (
          <div className='abc'>
            <p>Nam 1</p>
            <p>Nam 2</p>
          </div>
        )}
        {isGioTinh && (
          <React.Fragment>
            <p>Nam 1</p>
            <p>Nam 2</p>
          </React.Fragment>
        )}
        {isGioTinh && (
          <>
            <p>Nam 3</p>
            <p>Nam 4</p>
          </>
        )}
        <p>{student.name} - {student.soThich}</p>
        <ul>
            {colorList.map( color =>  (
              <li style={{color}}>{color}</li>
            ))}
        </ul>
        <TodoFeature/>
      </header>
    </div>
  );
}

export default App;
