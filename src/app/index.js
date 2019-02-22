import React from 'react';
import './index.scss';

// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import { Header, Main, Footer } from './components';

function App() {
  return (
    <React.Fragment>
      <section className="App">
        <Header />
        <Main />
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
