import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";

@observer
class App extends React.Component {
  @observable tax = 1.07;
  @observable price = 10;
  @computed
  get total() {
    const total = this.price * this.tax;
    return parseFloat(total).toFixed(2);
  }

  doublePrice = () => {
    this.price = this.price * 2;
  };

  render() {
    return (
      <div>
        <h2>MobX Demo</h2>
        <h3>Total:</h3>
        <h4>{this.total}</h4>
        <button onClick={this.doublePrice}>Double Price</button>
      </div>
    );
  }
}

const styles = {
  box: {
    margin: 10,
    height: 200,
    width: 200,
    backgroundColor: "red"
  }
};

render(<App />, document.getElementById("root"));
