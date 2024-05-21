import { useState } from 'react'
import Square from './Square.js'

export default function Board({ xIsNext, squares, onPlay }) {

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) { nextSquares[i] = "x" }
        else { nextSquares[i] = "o" }
        onPlay(nextSquares);
    }

    const renderRow = (rowIndex) => {
        const row = [];
        for (let i = 0; i < 3; i++) {
            const squareIndex = rowIndex * 3 + i;
            row.push(
                <Square
                    key={squareIndex}
                    value={squares[squareIndex]}
                    onSquareClick={() => handleClick(squareIndex)}
                />
            );
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
    )

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
                return squares[a];
            }
        }
        return null;
    }
}