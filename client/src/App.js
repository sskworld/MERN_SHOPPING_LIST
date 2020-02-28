import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppNavbar from './Component/AppNavbar'; 
import ShoppingList from './Component/ShoppingList';
import ItemModal from './Component/ItemModal'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
          <ItemModal/>
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
