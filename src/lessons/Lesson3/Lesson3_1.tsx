import { useRef, useState } from 'react'

const Lesson3_1 = () => {
  const [input, setInput] = useState('')
  console.log(input)

  const ref = useRef(0)

  function handleClick() {
    ref.current = ref.current + 1
    console.log(ref)
  }

  return (
    <div>
      <input type='text' onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Click me!</button>
      <p></p>
    </div>
  )
}

export default Lesson3_1
