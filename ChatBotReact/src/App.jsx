import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios, { Axios } from 'axios'


function App() {

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const generator = async () => {
    setAnswer('Loading...')
    const res = await axios({
      method: 'post',
      url: import.meta.env.VITE_API_KEY,
      data: { "contents": [{ "parts": [{ "text": question }] }] }
    }



    )

    setAnswer(res.data.candidates[0].content.parts[0].text)
  }


  const questionHandeler = (e) => {
    setQuestion(e.target.value)
  }
  return (
    <>
      <h1 className= 'bg-slate-500 font-bold max-w-screen text-center'>CHAT BOT</h1>
      <br />
      <div className='h-23'>
        <input className='border rounded-2xl text-green-600 max-w-36 mb-2' type="text" value={question} onChange={questionHandeler} />
        <br />
        <button type='submit' className='gap-2 bg-gray-700 rounded-l w-32' onClick={generator}>Click to generate</button>

      </div>


      <div className='gap 3 h-32 font-semibold text-slate-900'>
        <pre>
          {answer}
        </pre>

      </div>

    </>

  )
}

export default App
