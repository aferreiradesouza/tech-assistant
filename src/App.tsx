import React from 'react';
import './App.css';
import ButtonComponent from './components/button/button';
import TitleComponent from './components/title/title';

class App extends React.Component<any> {

  async buscar() {
    const axios = require('axios');
    axios.get('http://localhost:3000/posts').then(function (response: any) {
      console.log(response.data);
    });
    
  }

  render() {
    this.buscar()
    return (
      <div className="App">
        <header className="App-header">
          <TitleComponent title='Painel de controle' section='Início'></TitleComponent>
          <ButtonComponent label='Entrar'></ButtonComponent>
        </header>
      </div>
    );
  }
}

export default App;
