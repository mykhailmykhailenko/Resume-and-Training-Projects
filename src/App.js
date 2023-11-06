import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Timer from './components/Timer';
import TodoList from "./components/TodoList";
import UserDashboard from "./components/UserDashboard";
import SignUpFormWithYup from "./components/SingUpFormWithYup";
import LoginPage from "./pages/LoginPage";
import './App.css';
import ProductLoader from "./components/ProductLoader";
import MessengerPage from "./pages/MessengerPage";
import CurrencyConverter from "./components/CurrencyConverter";
import ResumeProject from "./components/ResumeProject";





class App extends React.Component {
    
    
    render () {
        
        return (
           <div className="container">
            <BrowserRouter>
                <h1 className="header">My training projects</h1>
                <ul>
                    <li><a className="links" href="https://github.com/mykhailmykhailenko?tab=repositories" target="blank">My GIT account</a></li>
                    <li><Link className="links" to="/">Go to ResumePage</Link></li>
                    <li><Link className="links" to="/userDashboard">Go to UserDashboard (fetch, pagination, sort and filter of users)</Link></li>
                    <li><Link className="links" to="/messengerPage">Go to MessengerPage (useState, useEffect, useReducer, useRef, useContext, fetch )</Link></li>
                    <li><Link className="links" to="/CurrencyConverter">Go to CurrencyConverter(useState, useEffect, useReducer, fetch)</Link></li>
                    <li><Link className="links" to="/loginPage">Go to LoginPage (with validation and errors on npm formik)</Link></li>
                    <li><Link className="links" to="/singUpFormWithYup">Go to SignUpForm (with validation on npm yup)</Link></li>
                    <li><Link className="links" to="/productLoader">Go to ProductLoader (custom hook useData for getting list of products with fetch) </Link></li>
                    <li><Link className="links" to="/timer">Go to Timer (training hooks: useState, useEffect. npm date-fns, setTimeout)</Link></li>
                    <li><Link className="links" to="/todoList">Go to TodoList (npm classnames, propTypes)</Link></li>
                </ul>

                <Routes>
                    <Route path="/" element={<ResumeProject />}/>
                    <Route path="/timer" element={<Timer />}/>
                    <Route path="/todoList" element={<TodoList />}/>
                    <Route path="/userDashboard" element={<UserDashboard />}/>
                    <Route path="/singUpFormWithYup" element={<SignUpFormWithYup />}/>
                    <Route path="/loginPage" element={<LoginPage />}/>
                    <Route path="/productLoader" element={<ProductLoader />}/>
                    <Route path="/messengerPage" element={<MessengerPage />}/>
                    <Route path="/CurrencyConverter" element={<CurrencyConverter />}/>
                   
                </Routes>
            </BrowserRouter>
            </div>

                
        )
    }
}

export default App;

