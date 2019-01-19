import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import ItemList from './ItemList';

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = () => {
    this.setState({ items: this.state.items.slice(0, -1) });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem addItem={this.addItem} />
        <DeleteItem deleteLastItem={this.deleteLastItem} items={this.state.items} />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
