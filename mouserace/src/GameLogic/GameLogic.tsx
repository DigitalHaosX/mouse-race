import React from "react";
import { Position } from "../Utils/uniquePositions";
import Collect from "../components/Collect/Collect";
import Avoid from "../components/Avoid/Avoid";
import Change from "../components/Change/Change";
import { randomNumber } from "../Utils/randomNumber";

class GameLogic {
  isGameRunning: boolean = false;
  clickedCounter: number = 9;
  finalTime: number = 0;
  private observers: (() => void)[] = [];

  handleAvoidGameElementClick: () => void = () => {
    this.isGameRunning = false;
    this.notifyObservers();
  };

  handleCollectGameElementClick: () => void = () => {
    if (this.clickedCounter === 1) {
      this.clickedCounter -= 1;
      this.isGameRunning = false;
      this.notifyObservers();
    } else {
      this.clickedCounter -= 1;
    }
  };

  handleGameStart: () => void = () => {
    this.clickedCounter = 9;
    this.isGameRunning = true;
    this.finalTime = 0;
    this.notifyObservers();
  };

  generateGameElements: (positions: Position[]) => React.ReactNode[] = (
    positions
  ) => {
    return [
      ...positions.slice(0, 3).map((position, index) => {
        const sideSize = randomNumber(30, 60);
        return (
          <Change
            key={`change-${index}`}
            positionX={position.left}
            positionY={position.top}
            color={"transparent"}
            shape={"circle"}
            width={sideSize}
            height={sideSize}
            gameLogic={this}
          />
        );
      }),
      ...positions.slice(3, 9).map((position, index) => {
        const sideSize = randomNumber(30, 60);
        return (
          <Collect
            key={`collect-${index}`}
            positionX={position.left}
            positionY={position.top}
            color={"#00FF00"}
            shape={"rectangle"}
            width={sideSize * 2}
            height={sideSize}
            gameLogic={this}
          />
        );
      }),
      ...positions.slice(9).map((position, index) => {
        const sideSize = randomNumber(30, 60);
        return (
          <Avoid
            key={`avoid-${index}`}
            positionX={position.left}
            positionY={position.top}
            color={"#FF0000"}
            shape={"square"}
            width={sideSize}
            height={sideSize}
            gameLogic={this}
          />
        );
      }),
    ];
  };

  onGameFinish(finalTime: number) {
    this.finalTime = finalTime;
    this.notifyObservers();
  }

  addObserver(observer: () => void) {
    this.observers.push(observer);
  }

  removeObserver(observer: () => void) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer();
    }
  }
}

export default GameLogic;
