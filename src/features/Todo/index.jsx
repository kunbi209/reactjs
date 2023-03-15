import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import NotFound from '../../commponents/NotFound/NotFound'

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    return (
        <div>
            <h3>Todos</h3>
            <Routes>
                <Route path="" element={<ListPage />} />
                <Route path="/:id" element={<DetailPage />} />
                <Route element={<NotFound />} />

            </Routes>
        </div>
    );
}

export default TodoFeature;