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
    this.setState({ selectedProduct: product });
  }
  handleProductAdded = (product) => {
    const products = [...this.state.products];
    const index = products.findIndex((p) => p.id === product.id);
    if(index >= 0){
      products[index] = product;
    }
    else {
      products.push(product);
    }
    this.setState({ products, selectedProduct: null });
  }

  handleProductDeleted = (product) => {
    const index = this.state.products.findIndex((p) => p.id === product.id);
    if(index >= 0){
      const products = [ 
        ...this.state.products.slice(0, index),
        ...this.state.products.slice(index+1)
      ]
      this.setState({ products });
    }
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
