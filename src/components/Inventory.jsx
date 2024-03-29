import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

export default class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fish).map(key => (
          <EditFishForm
            fish={this.props.fish[key]}
            key={key}
            index={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            deleteOrder={this.props.deleteOrder}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}
