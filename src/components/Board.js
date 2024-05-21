import React from 'react';
import Square from './Square';

export default function Board({ xIsNext, squares, onPlay }) {
    const result = calculateWinner(squares);
    const winner = result ? result.winner : null;
    const winningLine = result ? result.line : null;
    const isDraw = !squares.includes(null) && !winner;
    
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if (isDraw) {
        status = "It's a draw!";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const renderSquare = (i) => {
        const isWinningSquare = winningLine && winningLine.includes(i);
        return (
            <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
                isWinningSquare={isWinningSquare}
            />
        );
    };

    const renderRow = (rowIndex) => {
        const row = [];
        for (let i = 0; i < 3; i++) {
            const squareIndex = rowIndex * 3 + i;
            row.push(renderSquare(squareIndex));
        }
        return (
            <div key={rowIndex} className="board-row">
                {row}
            </div>
        );
    };

    const renderBoard = () => {
        const board = [];
        for (let i = 0; i < 3; i++) {
            board.push(renderRow(i));
        }
        return board;
    };

    return (
        <>
            {renderBoard()}
            <div className='status'>{status}</div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: lines[i] };
        }
    }
    return null;
}
