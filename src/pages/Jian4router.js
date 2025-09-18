import React from 'react';
import { Home} from './home';
import {Read} from './read';
import {Menu} from './menu';
import {Register} from './register';
import {Login} from './login';
import {Update} from './update';
import {Bmi} from './bmi';
import {Forgetps} from './forgetps'
import { Error404 } from './404';
import {Updateps} from './updateps';
import { Routes, Route, Navigate, } from "react-router-dom";

function Jian4Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/Read" element={<Read />}></Route>
      <Route path="/Menu" element={<Menu />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Update" element={<Update />}></Route>
      <Route path="/Bmi" element={<Bmi />}></Route>
      <Route path="/Forgetps" element={<Forgetps />}></Route>
      <Route path="/Updateps" element={<Updateps />}></Route>

     
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  )
}
export default Jian4Router;