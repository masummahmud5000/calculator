'use client'

import { useRef, useState } from "react";

const Cal = () => {

    const [status,setStatus] = useState<string>('');
    const [result,setResult] = useState<string>('0');
    const [input1,setInput1] = useState<string>('');
    const [input2,setInput2] = useState<string>('');
    const [active,setActive] = useState<number>(0);
    const timer = useRef<NodeJS.Timeout | null>(null)
    
    const addValue = (num: string) => {
        // const regEx = /^[^.]*\.[^.]*$/;
        if (active === 0){
            setActive(1)
        }
        if (active === 1){
            setInput1(prev => prev + num)
        }else if (active === 2){
            setInput2(prev => prev + num)
        }
    }
    
    const c = () => {
        setInput1('')
        setInput2('')
        setResult('0')
    }
    const deleteLastDigit = () => {
        if (active === 1){
            setInput1(prev => prev.slice(0, -1))
        }else if (active === 2){
            setInput2(prev => prev.slice(0, -1))
        }

    }
    const dotHandleStart = ()=> {
        timer.current = setTimeout(() => addValue('.'),1000)
    }
    const dotHandleEnd = ()=> {
        if (timer.current) clearTimeout(timer.current)
    }
    ///////////////////////////////////////////
    const addition = () => {
        let value1 = parseFloat(input1)
        let value2 = parseFloat(input2)
        setResult(String(value1+value2))
    }
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    const subtraction = () => {
        let value1 = parseFloat(input1)
        let value2 = parseFloat(input2)
        setResult(String(value1-value2))
        
    }
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    const multi = () => {
        let value1 = parseFloat(input1)
        let value2 = parseFloat(input2)
        setResult(String(value1*value2))
    }
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    const divition = () => {
        let value1 = parseFloat(input1)
        let value2 = parseFloat(input2)
        setResult(String(value1/value2))
    }
    ///////////////////////////////////////////
    return(
        <main className="px-3 py-3">
            {/* <div className="section flex bg-black text-white rounded-xl py-2 px-3 justify-center">
                <input value={input1} onFocus={() => setActive(1)} type="text" placeholder="Select" required className="text-center text-xl w-35 py-1 rounded-xl" readOnly/>

                <h1 className="text-3xl ml-3 mr-3">+</h1>

                <input value={input2} onFocus={() => setActive(2)} type="text" placeholder="Select" required className="text-center text-xl w-35 py-1 rounded-xl" readOnly/>
            </div> */}
            {/* //////////////////////////////////////////////////// */}
            <div className="section flex bg-black text-white rounded-xl py-2 px-3 justify-center mt-10">
                <input value={input1} onFocus={() => setActive(1)} type="text" placeholder="Select 1" required className="text-center text-xl w-35 py-1 rounded-xl" readOnly/>

                <h1 className="text-3xl ml-3 mr-3">{status}</h1>

                <input value={input2} onFocus={() => setActive(2)} type="text" placeholder="Select 2" required className="text-center text-xl w-35 py-1 rounded-xl" readOnly/>
            </div>
            <h1 className="text-center text-2xl mt-3 font-bold">Result = <span className="font-bold text-white bg-amber-800 py-1 px-3 rounded-xl">{result}</span></h1>
            {/* //////////////////////////////////////////////////// */}
            <div className="flex mt-15 items-center justify-center gap-20 pb-5">
                <h1 className="fa fa-arrow-left bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800" onClick={()=> setActive(1)}></h1>
                
                <h1 className="fa fa-arrow-right bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800" onClick={() => setActive(2)}></h1>
                
            </div>
            <div className="grid grid-cols-4 gap-5 bg-emerald-800 py-8 px-5 bottom-0 right-0 rounded-xl border-3 border-fuchsia-700">
                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('1')}>1</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('2')}>2</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('3')}>3</span>

                <span className="text-3xl font-mono font-bold bg-blue-400 py-3 px-5 text-center rounded-full text-white hover:bg-blue-500 cursor-pointer transition-all duration-150" onClick={addition}>+</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('4')}>4</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('5')}>5</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('6')}>6</span>

                <span className="text-3xl font-mono font-bold bg-blue-400 py-3 px-5 text-center rounded-full text-white hover:bg-blue-500 cursor-pointer transition-all duration-150" onClick={subtraction}>-</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('7')}>7</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('8')}>8</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('9')}>9</span>

                <span className="text-3xl font-mono font-bold bg-blue-400 py-3 px-5 text-center rounded-full text-white hover:bg-blue-500 cursor-pointer transition-all duration-150" onClick={multi}>x</span>

                <span className="text-3xl font-mono font-bold bg-amber-400 py-3 px-5 text-center rounded-full text-white hover:bg-amber-500 cursor-pointer transition-all duration-150" onClick={()=> addValue('0')} onTouchStart={dotHandleStart} onTouchEnd={dotHandleEnd}>0.</span>

                <span onClick={c} className="text-3xl font-mono font-bold bg-red-400 py-3 px-5 text-center rounded-full text-white hover:bg-red-500 cursor-pointer transition-all duration-150">C</span>

                <span className="text-3xl font-mono font-bold bg-green-400 py-3 px-5 text-center rounded-full text-white hover:bg-green-500 cursor-pointer transition-all duration-150" onClick={deleteLastDigit}><h1 className="fa fa-backspace text-2xl"></h1></span>

                <span className="text-3xl font-mono font-bold bg-blue-400 py-3 px-5 text-center rounded-full text-white hover:bg-blue-500 cursor-pointer transition-all duration-150" onClick={divition}>÷</span>
        
            </div>
            {/* //////////////////////////////////////////////////// */}
        </main>
    )
}
export default Cal;