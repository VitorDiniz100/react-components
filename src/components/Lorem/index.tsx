import { useEffect, useState } from 'react'

interface LoremProps {
  amount?: number
}

export default function Lorem({ amount = 1 }: LoremProps) {
  const [lorem, setLorem] = useState<string[]>([])

  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae provident exercitationem tenetur sit, soluta eligendi iste quasi sint iusto eum consequuntur sed architecto commodi nam amet autem harum praesentium.'

  useEffect(() => {
    for (let i = 0; i < amount; i++) {
      setLorem((state) => [...state, text])
    }
  }, [amount])

  return (
    <>
      {lorem.map((text, index) => {
        return <p key={index}>{text}</p>
      })}
    </>
  )
}
