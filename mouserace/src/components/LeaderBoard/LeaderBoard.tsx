import React, { Component } from "react";
import {
  ref,
  query,
  orderByChild,
  limitToFirst,
  get,
  DataSnapshot,
} from "firebase/database";
import Css from "./LeaderBoard.module.css";
import db from "../../Config/firebaseConfig";

interface LeaderboardEntry {
  name: string;
  time: number;
}

class LeaderBoard extends Component {
  state = {
    leaderboard: [] as LeaderboardEntry[],
  };

  componentDidMount() {
    this.fetchLeaderboardData();
  }

  componentDidUpdate() {
    this.fetchLeaderboardData();
  }

  fetchLeaderboardData() {
    const leaderboardRef = ref(db, "leaderboard");
    const leaderboardQuery = query(
      leaderboardRef,
      orderByChild("time"),
      limitToFirst(3)
    );

    get(leaderboardQuery).then((snapshot: DataSnapshot) => {
      const leaderboardData: LeaderboardEntry[] = [];

      snapshot.forEach((childSnapshot: DataSnapshot) => {
        const entry: LeaderboardEntry = childSnapshot.val();
        leaderboardData.push(entry);
      });
      this.setState({
        leaderboard: leaderboardData,
      });
    });
  }

  render() {
    const { leaderboard } = this.state;

    return (
      <div className={Css.wrapper}>
        <h2 className={Css.centered}>Leaderboard</h2>
        {leaderboard.map((entry) => (
          <p key={entry.name} className={Css.centered}>
            {entry.name}: {entry.time} seconds
          </p>
        ))}
      </div>
    );
  }
}

export default LeaderBoard;
