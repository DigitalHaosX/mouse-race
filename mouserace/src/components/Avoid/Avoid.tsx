import GameElement from "../GameElement/GameElement";

class AvoidGameElement extends GameElement {
  onClick = () => {
    this.props.gameLogic.handleAvoidGameElementClick();
  };
}

export default AvoidGameElement;
