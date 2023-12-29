import React from "react";
import GameElement from "../GameElement/GameElement";

class CollectGameElement extends GameElement {
  state = {
    isVisible: true,
  };

  onClick = () => {
    this.setState({ isVisible: false });
    this.props.gameLogic.handleCollectGameElementClick();
  };

  render() {
    const { isVisible } = this.state;
    return isVisible ? super.render() : <></>;
  }
}

export default CollectGameElement;
