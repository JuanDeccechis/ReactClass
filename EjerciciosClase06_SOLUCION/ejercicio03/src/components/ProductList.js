import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1
    }
  }
  handleSelection = (product, index) => {
    this.setState({
      selectedIndex: index
    });
    this.props.onProductSelection(product);
  }
  render() {
    return (
      <div>
        <h1> List of Products:</h1>
        <div>
          {this.props.products.map((product, index) => {
            return (
              <div key={product.id} onClick={() => this.handleSelection(product, index)}>
                <div className={`product ${this.state.selectedIndex === index ? 'selected' : ''}`}>
                  <div className="product-data">
                    Id: {product.id}
                  </div>
                  <div className="product-data">
                    Name: {product.name}
                  </div>
                  <div className="product-data">
                    Price: ${product.price}
                  </div>
                  <div className="product-data">
                    Amount: {product.amount}
                  </div>
                  <button onClick={() => this.props.onProductDeleted(product)}>
                    Delete Product
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={() => this.handleSelection(null, -1)}>
            Clear Selection
          </button>
        </div>
      </div>
    );
  }
}

export default ProductList;