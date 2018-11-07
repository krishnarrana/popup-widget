import React, { Component } from "react";
export default class Popup extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.state = {
      popupVisible: false,
      currentTap: 1
    };
  }
  changeTab(e) {
    let tab = Number(e.target.attributes.getNamedItem("tab").value);
    this.setState(
      {
        currentTap: tab
      });
  }
  handleClick() {
    if (!this.state.popupVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    return (
      <div
        className="popup"
        ref={node => {
          this.node = node;
        }}
      >
        <div onClick={this.handleClick}>{this.props.trigger}</div>
        {this.state.popupVisible && (
          <div className="popup__content">
            <div className="popup__tab">
              <ul className="popup__tab__header">
                <li
                  tab={1}
                  className={
                    this.state.currentTap === 1
                      ? "popup__tab__header__title active"
                      : "popup__tab__header__title "
                  }
                  onClick={this.changeTab}
                >
                  Info
                </li>
                <li
                  tab={2}
                  className={
                    this.state.currentTap === 2
                      ? "popup__tab__header__title  active "
                      : "popup__tab__header__title "
                  }
                  onClick={this.changeTab}
                >
                  Recommendations
                </li>
              </ul>
              {this.state.currentTap === 1 && (
                <div className="popup__tab__body">
                  <h3 className="popup__tab__body__title">
                    {this.props.content.title}
                  </h3>
                  <p className="popup__tab__body__description">
                    {this.props.content.description}
                  </p>
                </div>
              )}
              {this.state.currentTap === 2 && (
                <div className="popup__tab__body">
                  {this.props.content.productRecommendations.map((product,i) => {
                    return (
                      <div key={i} className="product-recommendations">
                        <img src={product.imgUrl} alt="" className="product-recommendations__image"/>
                        <h4>{product.title}</h4>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
