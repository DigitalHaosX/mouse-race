import React, { Component } from "react";
import scoreLeaderBoard from "../../Utils/scoreLeaderboard";
import Css from "./Win.module.css";

interface WinFormProps {
  finalTime: number;
}

interface WinFormState {
  name: string;
  isVisible: boolean;
}

class WinForm extends Component<WinFormProps, WinFormState> {
  constructor(props: WinFormProps) {
    super(props);
    this.state = {
      name: "",
      isVisible: true,
    };
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name } = this.state;
    const { finalTime } = this.props;

    if (name.trim() === "") {
      alert("Please enter your name.");
    } else {
      await scoreLeaderBoard(name, finalTime);
      this.setState({
        isVisible: false,
        name: "",
      });
    }
  };

  render() {
    const { finalTime } = this.props;
    const { name, isVisible } = this.state;

    return (
      <div>
        <p className={Css.centered}>Your time is: {finalTime} seconds</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={this.handleNameChange}
          className={`${isVisible ? "" : Css.invisible} ${Css.input_field}`}
        />
        <button
          onClick={this.handleSubmit}
          className={isVisible ? "" : Css.invisible}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default WinForm;
