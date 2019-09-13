import React from 'react';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import './styles/layout.scss';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
