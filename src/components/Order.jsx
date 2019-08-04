import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Order extends React.Component {
  renderFish = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    // const isAvailable = fish.status === 'available'
    if (!fish) {
      return null;
    }
    if (fish.status !== 'available') {
      return (
        <li key={key}>Sorry {fish ? fish.name : "fish"} no longer available</li>
      );
    }
    return (
      <div>
        <li key={key}>
          {count} lbs {fish.name} {formatPrice(count * fish.price)}
          <button onClick={() => this.props.deleteOrder(key)}>&times;</button>
        </li>
      </div>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((acc, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return acc + (count * fish.price);
      }
      return acc;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {orderIds.map(key => this.renderFish(key))}
        </ul>
        {/*<TransitionGroup component="ul" className="order">{orderIds.map(key => this.renderFish(key))}</TransitionGroup>*/}
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
