import { ref, push, set } from "firebase/database";
import db from "../Config/firebaseConfig";

const scoreLeaderboard = async (name: string, time: number) => {
  const leaderBoardRef = ref(db, "leaderboard");

  try {
    const newScoreRef = push(leaderBoardRef);
    await set(newScoreRef, {
      name: name,
      time: time,
    });
  } catch (error) {
    console.error("Error submitting your score", error);
  }
};

export default scoreLeaderboard;
