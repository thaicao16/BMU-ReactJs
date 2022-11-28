import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from '../src/feature/auth/LoginScreen';
import reportWebVitals from './reportWebVitals';
import theme from '../src/assets/theme/theme';
import { GlobalContextProvider } from '../src/feature/auth/GlobalScopeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <GlobalContextProvider>
      <CssBaseline />
      <App />
    </GlobalContextProvider>

  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
