import React, { Component } from "react";
import Popup from "../popup/popup";
class Product extends Component {
  render() {
    return (
      <React.Fragment>
        {
          <Popup
            trigger={
              <div className="product">
                <div
                  className="product__image"
                  style={{ background: `url(${this.props.product.imgUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center" }}
                />
                <h3 className="product__title">{this.props.product.title}</h3>
              </div>
            }
            content={{
              title: this.props.product.title,
              description: this.props.product.description,
              productRecommendations: this.props.product.productRecommendations
            }}
          />
        }
      </React.Fragment>
    );
  }
}

export default Product;
