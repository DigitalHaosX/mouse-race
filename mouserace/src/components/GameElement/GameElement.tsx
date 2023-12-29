import React, { Component } from "react";
import GameLogic from "../../GameLogic/GameLogic";

interface GameElementProps {
  height: number;
  width: number;
  shape: "square" | "circle" | "rectangle";
  color: string;
  positionX: number;
  positionY: number;
  gameLogic: GameLogic;
}

class GameElement extends Component<GameElementProps> {
  onClick = (): void => {
    return;
  };

  render() {
    const { height, width, shape, color, positionX, positionY } = this.props;
    const borderRadius = shape === "circle" ? width : 0;

    return (
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: `${color}`,
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

export default GameElement;
