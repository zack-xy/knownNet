import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.less';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import ContextPage from './pages/ContextPage'

// import HocPage from './pages/HocPage';

// Antd Form
// import AntdFormPage from './pages/AntdFormPage';
import MyRcFieldForm from './pages/MyRcFieldForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* Context API的使用 */}
    <ContextPage></ContextPage>

    {/* <HocPage /> */}


    {/* <AntdFormPage></AntdFormPage> */}


    <MyRcFieldForm></MyRcFieldForm>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
