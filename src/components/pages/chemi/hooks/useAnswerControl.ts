import { useState } from 'react'

const useAnswerControl = (isOpen: boolean, openModal: () => void) => {
  const [count, setCount] = useState(5)

  const handleAnswerSubmit = () => {
    console.log('정답 제출!')
    if (count > 0) {
      setCount((prev) => prev - 1)
    }
  }

  return { count, setCount, handleAnswerSubmit }
}

export default useAnswerControl
