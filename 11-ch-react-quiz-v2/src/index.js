import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import BankAccount from './BankAccount'
import { QuizProvider } from './context/QuizContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
    {/* <BankAccount /> */}
  </React.StrictMode>
);

