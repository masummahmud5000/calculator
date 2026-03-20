'use client'

import { useRef, useState } from "react";

const Cal = () => {

    const [status,setStatus] = useState<string>('');
    const [result,setResult] = useState<string>('0.00');
    const [resultL2,setResultL2] = useState<string>('0.00');

    const [input1,setInput1] = useState<string>('');
    const [input2,setInput2] = useState<string>('');

    const [input1L2,setInput1L2] = useState<string>('');
    const [input2L2,setInput2L2] = useState<string>('');
    
    const [active,setActive] = useState<number>(0);
    const [activeL2,setActiveL2] = useState<number>(0);
    const timer = useRef<NodeJS.Timeout | null>(null)
    const [left,setLeft] = useState<boolean>(false)
    const [right,setRight] = useState<boolean>(false)
    const [layer2,setLayer2] = useState<boolean>(false)

    const [Error,setError] = useState<boolean>(false);
    
    const addValue = (num: string) => {
        // const regEx = /^[^.]*\.[^.]*$/;
        if (layer2){
            if (activeL2 === 0){
                setActive(1)
            }
            if (activeL2 === 1){
                setLeft(true)
                setRight(false)
                setInput1L2(prev => prev + num)
            }else if (activeL2 === 2){
                setRight(true)
                setLeft(false)
                setInput2L2(prev => prev + num)
            }
        }else{
            if (active === 0){
                setActive(1)
            }
            if (active === 1){
                setLeft(true)
                setRight(false)
                setInput1(prev => prev + num)
            }else if (active === 2){
                setRight(true)
                setLeft(false)
                setInput2(prev => prev + num)
            }
        }
        // ///////////
    }
    
    const c = () => {
        if (layer2){
            setLeft(true)
            setRight(false)
            setActive(1)
            setInput1L2('')
            setInput2L2('')
            setResultL2('0.00')
            setStatus('')
        }else{
            setLeft(true)
            setRight(false)
            setActive(1)
            setInput1('')
            setInput2('')
            setResult('0.00')
            setStatus('')
        }

    }
    const deleteLastDigit = () => {
        if (active === 1){
            setInput1(prev => prev.slice(0, -1))
        }else if (active === 2){
            setInput2(prev => prev.slice(0, -1))
        }

        if (active === 1){
            setInput1L2(prev => prev.slice(0, -1))
        }else if (active === 2){
            setInput2L2(prev => prev.slice(0, -1))
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
        if (layer2){
            let value1 = parseFloat(input1L2)
            let value2 = parseFloat(input2L2)
            let calculate = value1 + value2
            setStatus('+')
            setResultL2(String(calculate.toFixed(2)))
        }else{
            let value1 = parseFloat(input1)
            let value2 = parseFloat(input2)
            let calculate = value1 + value2
            setStatus('+')
            setResult(String(calculate.toFixed(2)))
        }
    }
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    const subtraction = () => {
        if (layer2){
            let value1 = parseFloat(input1L2)
            let value2 = parseFloat(input2L2)
            let calculate = value1 - value2
            setStatus('-')
            setResultL2(String(calculate.toFixed(2)))
        }else{
            let value1 = parseFloat(input1)
            let value2 = parseFloat(input2)
            let calculate = value1 - value2
            setStatus('-')
            setResult(String(calculate.toFixed(2)))
        }
        
    }
    //////////////////////////////////////////
    const multi = () => {
        if (layer2){
            let value1 = parseFloat(input1L2)
            let value2 = parseFloat(input2L2)
            let calculate = value1 * value2
            setStatus('x')
            setResultL2(String(calculate.toFixed(2)))
        }else{
            let value1 = parseFloat(input1)
            let value2 = parseFloat(input2)
            let calculate = value1 * value2
            setStatus('x')
            setResult(String(calculate.toFixed(2)))
        }
    }
    ///////////////////////////////////////////
    const divition = () => {
        if (layer2){
            let value1 = parseFloat(input1L2)
            let value2 = parseFloat(input2L2)
            let calculate = value1 / value2
            setStatus('÷')
            setResultL2(String(calculate.toFixed(2)))
        }else{
            let value1 = parseFloat(input1)
            let value2 = parseFloat(input2)
            let calculate = value1 / value2
            setStatus('÷')
            setResult(String(calculate.toFixed(2)))
        }
    }
    ///////////////////////////////////////////
    const leftFocus = () => {
        if (layer2){
            setActiveL2(1)
            setLeft(true)
            setRight(false)
        }else{
            setActive(1)
            setLeft(true)
            setRight(false)
        }
    }
    const rightFocus = () => {
        if (layer2){
            setActiveL2(2)
            setRight(true)
            setLeft(false)
        }else{
            setActive(2)
            setRight(true)
            setLeft(false)
        }
    }
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    const leftHandle = () => {
        if (layer2){
            setActiveL2(1)
            setLeft(true)
            setRight(false)
        }else{
            setActive(1)
            setLeft(true)
            setRight(false)
        }
    }
    const rightHandle = () => {
        if (layer2){
            setActiveL2(2)
            setLeft(false)
            setRight(true)
        }else{
            setActive(2)
            setLeft(false)
            setRight(true)
        }
    }
    ///////////////////////////////////////////
    
    ///////////////////////////////////////////
    const resultHandle = () => {
        if (result === '' || result === 'NaN' || result === '0.00'){
            setError(true)
            setTimeout(()=> setError(false), 3000)
        }else{
            setInput1(result)
            setResult('0.00')
            setInput2('')
            setLeft(false)
            setRight(true)
            setStatus('')
        }
    }
    ///////////////////////////////////////////
    const resultHandleLayer2 = () => {
        if (resultL2 === '' || resultL2 === 'NaN' || resultL2 === '0.00'){
            setError(true)
            setTimeout(()=> setError(false), 3000)
        }else{
            setInput2(resultL2)
            setResult('0.00')
            setLeft(false)
            setRight(false)
            setLayer2(false)
            setStatus('')
        }
    }
    const layer2Init = () => {
        setLayer2(true)
        setLeft(true)
        setRight(false)
        setActive(1)
    }
    ///////////////////////////////////////////
    const layer2XHandle = () => {
        setLayer2(false)
        if (active === 0){
            setLeft(true)
            setActive(1)
        }else if (active === 1){
            setLeft(true)
            setRight(false)
            setActive(1)
        }else if (active === 2){
            setRight(true)
            setLeft(false)
            setActive(2)

        }
    }
    const layerAddHandle = () => {
        setLayer2(true)
        if (activeL2 === 0){
            setLeft(true)
            setActive(1)
        }else if (activeL2 === 1){
            setLeft(true)
            setRight(false)
            setActive(1)
        }else if (activeL2 === 2){
            setRight(true)
            setLeft(false)
            setActive(2)
        }
    }
    ///////////////////////////////////////////
    return(
        <main className="px-3 py-3">
            {layer2 && <h1 className="text-center font-mono font-bold text-3xl">Layer 2</h1>}
            {
                layer2 ? 
                    <div className="section flex bg-blue-200 text-black rounded-xl py-2 px-3 justify-center mt-3">
                    <input value={input1L2} onFocus={leftFocus} type="text" placeholder="input 1" required className="text-center text-xl w-35 py-1 rounded-xl font-bold" readOnly/>

                    <h1 className="text-3xl ml-3 mr-3">{status}</h1>

                    <input value={input2L2} onFocus={rightFocus} type="text" placeholder="input 2" required className="text-center text-xl w-35 py-1 rounded-xl font-bold" readOnly/>
                </div> : <div className="section flex bg-blue-200 text-black rounded-xl py-2 px-3 justify-center mt-12">
                    <input value={input1} onFocus={leftFocus} type="text" placeholder="input 1" required className="text-center text-xl w-35 py-1 rounded-xl font-bold" readOnly/>

                    <h1 className="text-3xl ml-3 mr-3">{status}</h1>

                    <input value={input2} onFocus={rightFocus} type="text" placeholder="input 2" required className="text-center text-xl w-35 py-1 rounded-xl font-bold" readOnly/>
                </div>
            }
            
            <div>
                <h1 className="text-center text-2xl mt-3 font-bold">
                    {
                        layer2 ? <span className={Error ? "font-bold text-white bg-red-500 py-1 px-3 rounded-xl ml-2 animate-[pulse_300ms_infinite]" : "font-bold text-white bg-amber-800 py-1 px-3 rounded-xl ml-2"}>{resultL2}</span> : 
                        
                        <span className={Error ? "font-bold text-white bg-red-500 py-1 px-3 rounded-xl ml-2 animate-[pulse_300ms_infinite]" : "font-bold text-white bg-amber-800 py-1 px-3 rounded-xl ml-2"}>{result}</span>
                    }

                {layer2 ? 
                <p className="fa fa-link bg-green-500 py-1 rounded-xl ml-15 text-white border-2 border-amber-500 pl-2 pr-8 cursor-pointer hover:bg-green-600" onClick={resultHandleLayer2}></p>
                :
                <p className="fa fa-check bg-green-500 py-1 rounded-xl ml-15 text-white border-2 border-amber-500 pl-2 pr-7 cursor-pointer hover:bg-green-600" onClick={resultHandle}></p>}

                {layer2 ? <p className="fa fa-x ml-7 bg-red-600 py-1 pl-2 pr-6 rounded-lg text-white border-2 cursor-pointer hover:bg-red-700 border-amber-500" onClick={layer2XHandle}>
                </p> : <p className="fa fa-add ml-7 bg-blue-600 py-1 pl-2 pr-7 rounded-lg text-white border-2 cursor-pointer hover:bg-blue-700 border-amber-500" onClick={layer2Init}></p>}
                </h1>

            </div>
            {/* //////////////////////////////////////////////////// */}
            <div className="flex mt-15 items-center justify-center gap-20 pb-5">
                <h1 className={left ? "fa fa-arrow-left bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800 opacity-30": "fa fa-arrow-left bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800"} onClick={leftHandle}></h1>
                
                <h1 className={right ? "fa fa-arrow-right bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800 opacity-30" : "fa fa-arrow-right bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800"} onClick={rightHandle}></h1>
                
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