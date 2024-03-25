import { useState } from 'react'

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0)
  const [name, setName] = useState('test-user')
  const handleClick = () => {
    setAge((p) => p + 1)
    setAge((p) => p + 1)
    setAge((p) => p + 1)
    console.log(name)
  }

  console.log('rendering!')
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className='border p-2 rounded-md bg-red-100'
        onClick={handleClick}
      >
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  )
}

export default Lesson1_1
