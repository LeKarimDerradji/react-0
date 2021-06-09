import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import soundFile from './res/sounds/Money_PinkFlyod.mp3'

const useLocalStorage = (key, initalValue) => {
    const [value, setValue] = useState(localStorage.getItem(key) || initalValue)

    useEffect(() => {
        localStorage.setItem(key, initalValue)
    }, [key, value])

    return [value, setValue]

}

function App () {
    const [NbOp, setNbOp] = useLocalStorage("NbOp", 0)
    let [isDisabled, setIsDisabled] = useState(false)

    const clearLocalStorage = () => {
        setNbOp(0)
        setIsDisabled(false)
      }

    useEffect(() => {
        if (NbOp > 20) {
            setIsDisabled(true)
        }
    }, [NbOp])

    useEffect(() => {
        if (NbOp > 20) {
          const disable = async () => {
            setIsDisabled(true)
            try {
              const audio = new Audio(soundFile)
              await audio.play()
            } catch (e) {
              console.log(e)
            }
          }
          disable()
        }
      }, [NbOp])

    return (
        <>
        <h1>Hello Hardfork</h1>
        {NbOp > 20 && (
        <h3 style={{ color: 'red' }}>
          You have reachead the limit, please{' '}
          <img src="https://media1.tenor.com/images/2c226679873feb731a640ec291b71a11/tenor.gif?itemid=17544086" alt="" />
          <a
            href={
              'https://thephnompen.files.wordpress.com/2012/02/i-am-not-a-scammer-he-is.jpg'
            }
          >
            PAY
          </a>
          <button onClick={clearLocalStorage}>clear local storage</button>
        </h3>
        
      )}
        <Counter initialStep={1} onCount={setNbOp} NbOp={NbOp} isDisabled={NbOp > 20} />
        </>
    ) 
}

export default App