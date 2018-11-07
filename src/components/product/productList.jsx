import React, { Component } from "react";
import Product from "./product";
import productList from '../../data';
class ProductList extends Component {
  constructor(props) {
    super(props);
    // dummy data
    this.state = {
      productList: productList,
    };
    this.openPopup = this.openPopup.bind(this);
  }

  openPopup() {
    alert("helllo");
  }
  render() {
    return (
      <div className="productlist">
        <div className="productlist__header ">
          <h2 className="productlist__header__title container">Product List</h2>
        </div>
        <div className="productlist__container container">
          {this.state.productList.map(product => (
            <div className="productlist__item" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
