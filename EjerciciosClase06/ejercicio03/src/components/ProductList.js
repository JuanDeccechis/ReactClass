import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO 
      selectedProduct: null
    }
  }

  handleClick = (product, index) => {
    // TODO
    console.log(product);
    this.setState({ selectedProduct: product });
    this.props.onProductSelection(product)
  }

  render() {
    const { products } = this.props;
    const { selectedProduct } = this.state;
    return (
      <div>
        <h1> List of Products:</h1>
        <div>
          <ul>
            {products.map((item, index) => {
              return <li key={index} className={ (selectedProduct && selectedProduct.id === item.id) ? 'selected' : ''} onClick={() => this.handleClick(item, index)}> {item.id} {item.name} {item.price} </li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;