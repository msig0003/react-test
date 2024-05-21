import { useState } from 'react';
import Board from './components/Board';

function App() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const [isAscending, setIsAscending] = useState(true);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
	}

	function toggleSort() {
		setIsAscending(!isAscending);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "go to move #" + move;
		} else {
			description = "go to game start";
		}
		return (
			<li key={move}>
				{move === currentMove ? (
					<span>You are at move #{move}</span>
				) : (
					<button onClick={() => jumpTo(move)}>{description}</button>
				)}

			</li>
		)
	}
	)

	const sortedMoves = isAscending ? moves : moves.slice().reverse();

	return (
		<>
			<div className="game">
				<div className='game-board'>
					<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
				</div>
			</div>
			<div className='game-info'>
				<button onClick={toggleSort}>
					Sort {isAscending ? 'Descending' : 'Ascending'}
				</button>
				<ol>{sortedMoves}</ol>
			</div>
		</>

	);
}

export default App;
