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
    console.log("select");
    console.log(product);
    let productIndex = this.getProductIndex(product);
    this.setState({ selectedProduct : productIndex });
  }

  getProductIndex = (product) => {
    let productIndex = this.state.products.filter(function (p) {
      return p.id === product.id
    })[0];
    return productIndex;
  }

  handleProductAdded = (product) => {
    // TODO
    console.log("added");
    console.log(product);
    let productIndex = this.getProductIndex(product);

    this.setState(function(prevState) {
      let products = [...prevState.products];
      if(productIndex >= 0){
        products[productIndex] = product;
      }
      else {
        products.push(product);
      }
      console.log(products);
      return {products : products, selectedProduct: null} ;
    });
  }

  handleProductDeleted = (product) => {
    // TODO
    console.log("deleted")
    console.log(product);
  }

  render() {
    console.log(this.state.products);
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
