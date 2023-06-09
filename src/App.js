import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ColorBox from './commponents/ColorBox';
import Counter from './commponents/Counter';
import NotFound from './commponents/NotFound/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Header
      <p><NavLink to="/">/</NavLink></p>
      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/albums">Albums</NavLink></p>
      red
      <Routes>
        <Route path='/todos/*' Component={TodoFeature}/>
        <Route path='/' Component={AlbumFeature} />
        <Route path='/albums' Component={AlbumFeature} />
        <Route path='/colorBox' Component={ColorBox} />
        <Route path='/counter' Component={Counter} />
        <Route element={<NotFound />} />
      </Routes>
      Footer
    </div>

  );
}

export default App;
