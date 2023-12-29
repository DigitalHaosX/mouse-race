import React, { Component } from "react";

interface TimerProps {
  onGameFinish: (finalTime: number) => void;
}

class Timer extends Component<TimerProps, { time: number }> {
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
    this.props.onGameFinish(this.state.time);
  }

  private startTimer() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          time: parseFloat((prevState.time + 0.01).toFixed(2)),
        }));
      }, 10);
    }
  }

  private stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  render() {
    return (
      <div>
        <p>Time:{this.state.time} s</p>
      </div>
    );
  }
}

export default Timer;
