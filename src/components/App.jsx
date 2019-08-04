import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

export class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(
      this.props.match.params.storeId
    );
    if (localStorageRef) {
      console.log(JSON.parse(localStorageRef));
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now}`] = fish;
    this.setState({
      fishes: fishes
    });
  };

  updateFish = (key, updateFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updateFish;
    this.setState({ fishes: fishes });
  };

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  };

  deleteOrder = key => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order: order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="FRESH SEAFOOD MARKET" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(fish => (
              <Fish
                key={fish}
                index={fish}
                fish={this.state.fishes[fish]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} deleteOrder = {this.deleteOrder} />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fish={this.state.fishes}
          deleteFish ={this.deleteFish}
        />
      </div>
    );
  }
}
