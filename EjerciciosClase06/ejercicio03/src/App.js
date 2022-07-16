import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductABM from './components/ProductABM';
import ProductList from './components/ProductList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      selectedProduct: null
    }
  }
  handleProductSelection = (product) => {
    // TODO
  }
  handleProductAdded = (product) => {
    // TODO
  }

  handleProductDeleted = (product) => {
    // TODO
  }

  render() {
    return (
      <div className="App">
        <ProductList 
          products={this.state.products} 
          onProductSelection={this.handleProductSelection}
          onProductDeleted={this.handleProductDeleted}
        />

        <ProductABM 
          selectedProduct={this.state.selectedProduct}
          onProductAdded={this.handleProductAdded}
          onProductDeleted={this.handleProductDeleted}
        />
      </div>
    );
  }
}

export default App;
