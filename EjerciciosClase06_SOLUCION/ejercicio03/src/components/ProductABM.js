import React, { Component } from "react";

class ProductABM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
      price: 0,
      amount: 0,
      isUpdate: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.selectedProduct && 
      (!prevState.id === '' || prevState.id !== nextProps.selectedProduct.id)) {
      return {
        ...nextProps.selectedProduct,
        isUpdate: true
      }
    }
    else {
      return null
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const product = { ...this.state };
    this.props.onProductAdded(product);
    this.setState({
      name: '',
      id: '',
      price: 0,
      amount: 0,
      isUpdate: false
    })
  }

  render() {
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <h2 className="header">Add/Edit a Product</h2>
        <div className="inputContainer"> 
          <label>Id </label>
          <input
            disabled={this.state.isUpdate}
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
