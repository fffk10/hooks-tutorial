import { useState } from 'react'
import Thread from './Thread'
import { deliverMessage } from './actions'

export type Message = {
  text: string
  sending: boolean
  key: number
}

const Lesson6_1 = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Hello World',
      sending: false,
      key: 1,
    },
  ])

  const sendMessage = async (formData: FormData) => {
    const sendMessage = await deliverMessage(formData.get('message') as string)
    setMessages((messages) => [
      ...messages,
      { text: sendMessage, sending: false, key: messages.length + 1 },
    ])
  }
  return (
    <div>
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  )
}

export default Lesson6_1
