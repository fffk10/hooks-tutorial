import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  const sub = () => {
    setCount(count - 1)
  }

  return { count, add, sub }
}

export const useCellsData = () => {
  const [cells, setCells] = useState<string[][]>([
    ['1-1', '1-2', '1-3'],
    ['2-1', '2-2', '2-3'],
    ['3-1', '3-2', '3-3'],
  ])

  const changeTargetCell = (row: number, col: number) => (value: string) => {
    const newCells = cells.map((rowCells, rowIndex) =>
      rowCells.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? value : cell
      )
    )
    setCells(newCells)
  }

  return { cells, changeTargetCell }
}
