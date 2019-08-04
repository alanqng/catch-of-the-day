import React, { Component } from "react";

export default class EditFishForm extends Component {
  onHandleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.onHandleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.onHandleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.onHandleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.onHandleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.onHandleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}
