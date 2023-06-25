import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { ChatLine, LoadingChatLine } from './ChatLine';

const InputMessage = ({ input, setInput, addMessage }) => (
  <div className="mt-6 flex clear-both">
    <input
      type="text"
      aria-label="chat input"
      required
      autoFocus
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
      value={input}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addMessage(input)
          setInput('')
        }
      }}
      onChange={(e) => {
        setInput(e.target.value)
      }}
    />
    <Button
      type="submit"
      className="ml-4 flex-none"
      onClick={() => {
        addMessage(input)
        setInput('')
      }}
    >
      Send
    </Button>
  </div>
)

const data = []
export function Chat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: questions[0],
    },
  ])

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const bottomRef = useRef(null);
	const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // send message to API /api/chat endpoint
  const addMessage = async (message) => {
    setLoading(true)

    console.log(data)
    if (message == "yes")
      data.push(1)
    else
      data.push(0)

    const newMessages = [
      ...messages,
      { role: 'user', content: message },
    ]
    setMessages(newMessages)

    if (data.length < questions.length) {
      setTimeout(() => {
        setMessages([
          ...newMessages,
          { role: 'assistant', content: questions[data.length]},
        ]
        )
        setLoading(false)
      }, 1000);
      return
    }

    fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input_data: data }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages([
          ...newMessages,
          { role: 'assistant', content: data.predicted_disorder, end: true },
        ]
        )
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setLoading(false)
  }

  return (
    <div ref={ref}
    
    style={{
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      backdropFilter: "blur(30px)", overflowY : "scroll", overflowX: "hidden", height:"90%"
    }}
    className="rounded-2xl border-zinc-200  lg:border lg:p-9">
      {messages.map(({ content, role, end }, index) => (
        <ChatLine key={index} role={role} content={content} end={end} />
      ))}

      {loading && <LoadingChatLine />}

      {messages.length < 2 && (
        <div style={{paddingTop : "10rem"}} className="mx-auto flex flex-grow text-gray-600 clear-both">
          Type a message to start the conversation
        </div>
      )}
      <InputMessage
        input={input}
        setInput={setInput}
        addMessage={addMessage}
      />
      <div id='DIE' ref={bottomRef} />
    </div>
  )
}

const questions = [
  'Are you feeling nervous?',
  'Are you experiencing panic?',
  'Are you breathing rapidly?',
  'Are you sweating excessively?',
  'Are you having trouble concentrating?',
  'Are you having trouble sleeping?',
  'Are you having trouble with work or tasks?',
  'Are you feeling hopeless?',
  'Are you feeling angry?',
  'Do you tend to overreact to situations?',
  'Have you experienced a change in eating patterns?',
  'Are you having suicidal thoughts?',
  'Are you feeling tired or fatigued?',
  'Do you have a close friend or confidant?',
  'Do you feel addicted or dependent on social media?',
  'Have you experienced unexplained weight gain?',
  'Do you have a strong attachment to material possessions?',
  'Do you consider yourself introverted?',
  'Do stressful memories keep popping up in your mind?',
  'Are you having frequent nightmares?',
  'Do you tend to avoid people or activities?',
  'Are you generally feeling negative?',
  'Do you have trouble concentrating or focusing?',
  'Do you often blame yourself for things?',
];