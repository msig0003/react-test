import { useState } from 'react';

export default function Square({ value, onSquareClick, isWinningSquare }) {
    return (
        <button className={`square ${isWinningSquare ? 'winning-square' : ''}`} onClick={onSquareClick}>
            {value}
        </button>
    );
}