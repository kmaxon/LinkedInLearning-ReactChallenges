import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] = useState(JSON.parse(localStorage.getItem('score')));

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score])

// how to use useEffect() for a getItem call from local storage, i think?
  // useEffect(() => {
  //   const storedScore = JSON.parse(localStorage.getItem('score'));
  //   if (storedScore) {
  //     setScore(storedScore);
  //   }
  // }, []);

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
    </div>
  )
}
