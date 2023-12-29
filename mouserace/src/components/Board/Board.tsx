import React, { Component } from "react";
import { uniquePosition, Position } from "../../Utils/uniquePositions";
import Css from "./Board.module.css";

interface GameBoardProps {
  generateGameElements: (positions: Position[]) => React.ReactNode[];
}

class GameBoard extends Component<GameBoardProps> {
  positions: Position[] = uniquePosition(12);

  render() {
    const { generateGameElements } = this.props;

    return (
      <div className={Css.board}>{generateGameElements(this.positions)}</div>
    );
  }
}

export default GameBoard;
