import React from "react";
import GameElement from "../GameElement/GameElement";
import { randomNumber } from "../../Utils/randomNumber";

interface ChangeGameElementState {
  isVisible: boolean;
  isCollect: boolean;
}

class ChangeGameElement extends GameElement {
  toggleInterval: NodeJS.Timeout | null = null;
  state = {
    isVisible: true,
    isCollect: true,
  };

  componentDidMount() {
    this.startToggleBehavior();
  }

  componentWillUnmount() {
    this.stopToggleBehavior();
  }

  startToggleBehavior() {
    this.toggleInterval = setInterval(
      this.toggleBehavior,
      randomNumber(1500, 3000)
    );
  }

  stopToggleBehavior() {
    if (this.toggleInterval) {
      clearInterval(this.toggleInterval);
    }
  }

  toggleBehavior = () => {
    this.setState((prevState: ChangeGameElementState) => ({
      isCollect: !prevState.isCollect,
    }));
  };

  onClick = () => {
    if (this.state.isCollect) {
      this.props.gameLogic.handleCollectGameElementClick();
      this.setState({ isVisible: false });
    } else {
      this.props.gameLogic.handleAvoidGameElementClick();
    }
  };

  render() {
    const { isCollect, isVisible } = this.state;
    const color = isCollect ? "#00FF00" : "#FF0000";

    if (!isVisible) {
      return <></>;
    }

    const { height, width, shape, positionX, positionY } = this.props;

    const borderRadius = shape === "circle" ? width : 0;

    return (
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: color,
          borderRadius: `${borderRadius}px`,
          position: "absolute",
          top: `${positionY}px`,
          left: `${positionX}px`,
        }}
        onClick={this.onClick}
      ></div>
    );
  }
}

export default ChangeGameElement;
