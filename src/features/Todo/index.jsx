import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    return (
        <div>
            <h3>Todos</h3>
            <Routes>
                <Route path="/todos-list" element={<ListPage />} />
                <Route path="/todos-list/:id" element={<DetailPage />} />
            </Routes>
        </div>
    );
}

export default TodoFeature;