import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//import Library from './Chapter_03/Library';
//import Clock  from './Chapter_04/Clock.jsx';
import CommentList from './Chapter_05/CommentList';
import NotificationList from './Chapter_06/NotificationList';
import Accomodate from './Chapter_07/Accomodate';
import ConfirmButton from './Chapter_08/ConfirmButton';
import LandingPage from './Chapter_09/LandingPage';
import AttendanceBook from './Chapter_10/AttendanceBook';
import Singup from './Chapter_11/Singup';
import Calculator from './Chapter_12/Calculator';
import Card from './Chapter_13/Card';
import ProfileCard from './Chapter_13/ProfileCard';
import MainContent from './Chapter_14/MainContent';
import DarkOrLight from './Chapter_14/DarkOrLight';
import Blocks from './Chapter_15/Blocks';

// const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

ReactDOM.render(
  <React.StrictMode>
    <Blocks/>
    </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
