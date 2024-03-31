import { useRef } from 'react'
import { Message } from './Lesson6_1'

const Thread = ({
  messages,
  sendMessage,
}: {
  messages: Message[]
  sendMessage: (formData: FormData) => Promise<void>
}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(formRef.current as HTMLFormElement)
    await sendMessage(formData)
    formRef.current?.reset()
  }

  return (
    <div>
      {messages.map((message) => (
        <div key={message.key}>{message.text}</div>
      ))}
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          type='text'
          name='message'
          placeholder='Hello!'
          className='border-2 px-2 py-2 rounded-md'
        />
        <button type='submit' className='ml-2 border-2 px-2 py-2 rounded-md'>
          送信
        </button>
      </form>
    </div>
  )
}

export default Thread
