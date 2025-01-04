
import { useState } from 'react'
import Square from './Square'
import PlayerBox from './PlayerBox'
import { calculateWinner } from '../utils/helper'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [winnerCount, setWinnerCount] = useState({ x: 0, o: 0, draw: 0 })
    const [winner, setWinner] = useState<string | null>(null)
    const handleClick = (index: number) => {
        if (squares[index] || calculateWinner(squares)) {
            return
        }
        const newSquares = squares.slice()
        newSquares[index] = xIsNext ? 'x' : 'o'
        const winner = calculateWinner(newSquares)
        if (!winner && newSquares.every(Boolean)) {
            setWinner("draw")
            setWinnerCount({ ...winnerCount, draw: winnerCount.draw + 1 })
        } else {
            if (winner === 'x') {
                setWinnerCount({ ...winnerCount, x: winnerCount.x + 1 })
                setWinner('x')
            } else if (winner === 'o') {
                setWinnerCount({ ...winnerCount, o: winnerCount.o + 1 })
                setWinner('o')
            }
        }
        setSquares(newSquares)
        setXIsNext(!xIsNext)

    }
    const resetBoard = () => {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
        setWinner(null)
    }

    const status = winner ? winner === "draw" ? `${winner.toUpperCase()}` : `Winner: ${winner.toUpperCase()}` : `Player ${xIsNext ? 'X' : 'O'} to play`
    return (
        <div className=' px-8 lg:px-24 py-5 lg:py-8 rounded-md bg-[#2B0040]'>
            <div className='flex gap-2 mb-10'>
                <PlayerBox
                    title='Player X'
                    value={winnerCount.x}
                    bgColor='#48D2FE'
                />
                <PlayerBox
                    title='Draw'
                    value={winnerCount.draw}
                    bgColor='#BCDBF9'
                />
                <PlayerBox
                    title='Player O'
                    value={winnerCount.o}
                    bgColor='#E2BE00'
                />
            </div>
            <div>
                <div className='flex gap-2 mb-2'>
                    <Square value={squares[0]} onHandleClick={() => handleClick(0)} />
                    <Square value={squares[1]} onHandleClick={() => handleClick(1)} />
                    <Square value={squares[2]} onHandleClick={() => handleClick(2)} />
                </div>
                <div className='flex gap-2 mb-2'>
                    <Square value={squares[3]} onHandleClick={() => handleClick(3)} />
                    <Square value={squares[4]} onHandleClick={() => handleClick(4)} />
                    <Square value={squares[5]} onHandleClick={() => handleClick(5)} />
                </div>
                <div className='flex gap-2 mb-2'>
                    <Square value={squares[6]} onHandleClick={() => handleClick(6)} />
                    <Square value={squares[7]} onHandleClick={() => handleClick(7)} />
                    <Square value={squares[8]} onHandleClick={() => handleClick(8)} />
                </div>
            </div>
            <div className='text-center mt-5'>
                <p className='text-xl lg:text-3xl text-white font-semibold'>{status}</p>
            </div>
            <div>
                <button
                    onClick={resetBoard}
                    className='py-3 bg-white rounded-lg w-full mt-5 font-semibold'>Start New Game</button>
            </div>
        </div>


    )
}
export default Board
