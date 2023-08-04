import { useState } from 'react'

const Landing = (props) => {

  const [ inputtedText, setInputtedText ] = useState('')

  const inputChangeHandler = (e) => {
    setInputtedText(e.target.value)
  }

  return (
    <div
      style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/530e6f89e4b0f62bb1b853af/1415804413001-EY599HTB0S4UHJB48WVN/IMG_6516.JPG?format=1500w')`}}
      className="w-full h-[100vh] bg-cover bg-center bg-white/20 bg-blend-screen flex flex-col items-center justify-center px-16"
    >
      <p className='font-Lobster text-6xl text-black'>My Todo App</p>
      <input type='text' value={inputtedText} onChange={inputChangeHandler} className='w-full max-w-lg mt-4 px-4 py-1 rounded-lg focus:border-none text-sm' placeholder='Search todos... '/>
    </div>
  );
}
export default Landing;