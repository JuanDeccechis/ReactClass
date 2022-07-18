import React, { Component } from "react";

class ProductABM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
      price: 0,
      amount: 0
    };
  }

  handleChange = (event) => {
    // TODO
    this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit = (event) => {
    // TODO
    event.preventDefault();
    const { name, id, price, amount } = this.state;
    const product = { name, id, price, amount };
    this.props.onProductAdded(product);
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedProduct } = this.props;
    if (prevProps.selectedProduct !== selectedProduct) {
      this.setState({ name: selectedProduct.name, id: selectedProduct.id, price: selectedProduct.price, amount: selectedProduct.amount });
      console.log("did update")
    }
  }

  render() {
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <h2 className="header">Add/Edit a Product</h2>
        <div className="inputContainer"> 
          <label>Id </label>
          <input
            id="input"
            placeholder="Id"
            type="text"
            value={this.state.id}
            name="id"
            autoComplete="off"
            onChange={this.handleChange}
          />
        </div>
        <div className="inputContainer"> 
          <label>Name </label>
          <input
            id="input"
            placeholder="Name"
            type="text"
            value={this.state.name}
            name="name"
            autoComplete="off"
            onChange={this.handleChange}
          />
        </div>
        <div className="inputContainer"> 
          <label>Price </label>
          <input
            id="input"
            placeholder="Price"
            type="numeric"
            value={this.state.price}
            name="price"
            autoComplete="off"
            onChange={this.handleChange}
          />
        </div>
        <div className="inputContainer"> 
          <label>Amount </label>
          <input
            id="input"
            placeholder="Amount"
            type="numeric"
            value={this.state.amount}
            name="amount"
            autoComplete="off"
            onChange={this.handleChange}
          />
        </div>
        <div> 
        <button className="button" type="submit">
          Submit
        </button>
        </div>
      </form>
    );
  }
}

export default ProductABM;
