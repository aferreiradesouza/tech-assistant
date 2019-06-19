import React from 'react';
import './App.css';
import ButtonComponent from './components/button';
import TitleComponent from './components/title/title';

class App extends React.Component<any> {

  render() {
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
// const App: React.FC = () => {
// }

export default App;
