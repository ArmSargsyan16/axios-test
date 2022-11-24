import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from "../main/Main";
import MoreDetails from '../moredetails/MoreDetails';

function Router(){
    return(
        <Routes>
           <Route  path='/' element={<Main />}/>
           <Route  path='/:id' element={<MoreDetails />}/>
        </Routes>
    )
}

export default Router;