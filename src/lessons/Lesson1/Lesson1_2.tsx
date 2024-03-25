import { useEffect, useRef, useState } from 'react'
import { useCellsData, useCounter } from './hooks'

function Cell({
  value,
  row,
  col,
}: {
  value: string
  row: number
  col: number
}) {
  const [editValue, setEditValue] = useState(value)
  const [isEdit, setIsEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { changeTargetCell } = useCellsData()
  const changeData = changeTargetCell(row, col)

  const cellClick = () => {
    setIsEdit(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value)
  }

  const enter = () => {
    changeData(editValue)
    setIsEdit(false)
  }

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEdit])

  return (
    <td>
      {isEdit ? (
        <>
          <input
            type='text'
            value={editValue}
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={enter}>確定</button>
        </>
      ) : (
        <div onClick={cellClick}>{value}</div>
      )}
    </td>
  )
}

function WorkSheet({ searchKeyword }: { searchKeyword: string }) {
  // const [cells, setCells] = useState([
  //   ['1-1', '1-2', '1-3'],
  //   ['2-1', '2-2', '2-3'],
  //   ['3-1', '3-2', '3-3'],
  // ])

  const { cells } = useCellsData()
  const { count, add, sub } = useCounter()

  const filteredRows = searchKeyword
    ? cells.filter((row) => row.some((cell) => cell.includes(searchKeyword)))
    : cells

  console.log(cells)
  console.log(count)

  return (
    <>
      <table>
        <tbody>
          {filteredRows.map((row, i) => (
            <tr>
              {row.map((cell, j) => (
                <Cell value={cell} row={i} col={j} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <p>counter: {count}</p>
      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
    </>
  )
}

const Lesson1_2 = () => {
  const [form, setForm] = useState({
    firstName: 'first',
    lastName: 'last',
    email: 'email',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newForm = { ...form }
    setForm({ ...newForm, [e.target.name]: e.target.value })
  }

  const [searchKeyword, setSearchKeyword] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const search = () => {
    setSearchKeyword(inputRef.current?.value ?? '')
  }

  return (
    <div>
      <div className='flex mb-5'>
        <label>
          First Name:
          <input
            type='text'
            name='firstName'
            value={form.firstName}
            onChange={handleChange}
            className='border border-slate-500'
          />
        </label>
        <label>
          Last Name:
          <input
            type='text'
            name='lastName'
            value={form.lastName}
            onChange={handleChange}
            className='border border-slate-500'
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='border border-slate-500'
          />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>

      <hr />
      <>
        <input type='text' ref={inputRef} />
        <button onClick={search}>確定</button>
        <WorkSheet searchKeyword={searchKeyword} />
      </>
    </div>
  )
}

export default Lesson1_2
