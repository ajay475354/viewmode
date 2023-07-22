import { Component } from "react";
import "./index.css";

class LightDark extends Component {
  state = {
    isClicked: false,
  };

  onClick = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  buttontext = () => {
    const { isClicked } = this.state;
    return isClicked ? "Dark mode" : "Light Mode";
  };

  render() {
    const { isClicked } = this.state;
    const cardview = isClicked
      ? "white_card_container"
      : "black_card_container";

    const buttonView = isClicked ? "button_light" : "button_dark";

    return (
      <div className={cardview}>
        <h1 className="heading">geethika</h1>
        <button className={buttonView} onClick={this.onClick}>
          {this.buttontext()}
        </button>
      </div>
    );
  }
}
export default LightDark;
