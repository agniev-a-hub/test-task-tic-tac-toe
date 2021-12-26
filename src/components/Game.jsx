import React, { useState } from 'react'
import Board from './Board'
import {calculateWinner} from '../helper'

import './Game.css'

const Game = (Props) => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)
    const [scoreOne, setScoreOne] = useState(0)
    const [scoreTwo, setScoreTwo] = useState(0)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}> Очистить поле </button>
        )
    }

    if (winner === 'X'){
        try{
            setBoard(Array(9).fill(null))
        }
        catch(e){
            console.log(e)
        }
        finally{
            console.log('hiX')
            let score = scoreOne +1
            setScoreOne(score)
        }
    }

    if (winner === 'O'){
        try{
            setBoard(Array(9).fill(null))
        }
        catch(e){
            console.log(e)
        }
        finally{
            let score = scoreTwo +1
            setScoreTwo(score)
        }
    }


    return (
        <div className="wrapper">
            { startNewGame() }
            <Board squares={board} click={handleClick} />
            <div className="wrapperColumn">
                <div className="game__score">
                    <div>{Props.nameOne}:{scoreOne}</div>
                    <div>{Props.nameTwo}:{scoreTwo}</div>
                </div>
                <p className="game__info">
                    { winner ? 'Победитель ' + winner : 'Сейчас ходит ' + ( xIsNext ? 'X' : 'O') }
                    
                </p>
            </div>
        </div>
    )
}

export default Game