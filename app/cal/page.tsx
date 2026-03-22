'use client'
// import {alertSound} from '@/public/dan'
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Cal = () => {
    let router = useRouter()

    const [allShow,setAllShow] = useState<boolean>(false)
    const [user,setUser] = useState<string>('')
    const [userName,setUserName] = useState<string>('')
    const [addStatus,setAddStatus] = useState<boolean>(false)
    const [nameBox,setNameBox] = useState<boolean>(false)

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

    const audioRef = useRef<HTMLAudioElement>(null)
    const faaaAudio = useRef<HTMLAudioElement>(null)
    const misMatch = useRef<HTMLAudioElement>(null)
    // const [playing,setPlaying] = useState<boolean>(false)
    useEffect(() => {
        const userName = localStorage.getItem('name')
        if (userName){
            setUser(userName)
            setAddStatus(false)
            setAllShow(true)
        }else{
            setUser('Name Not Found')
            setAddStatus(true)
            setAllShow(false)
        }
        if (active === 0){
            setActive(1)
            setLeft(true)
            setRight(false)
        }
        if (activeL2 === 0){
            setActiveL2(1)
            setLeft(true)
            setRight(false)
        }
    },[])
    // const [playing,setPlaying] = useState<boolean>(false)
    const faaa = () => {
        faaaAudio.current?.play();
    }
    const dangerSoundControl = () => {
        audioRef.current?.play();
    }
    const mismatch = () => {
        misMatch.current?.play();
    }
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
            faaa()
        }else{
            setLeft(true)
            setRight(false)
            setActive(1)
            setInput1('')
            setInput2('')
            setResult('0.00')
            setStatus('')
            faaa()
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
            if (input1L2 === '' || input2L2 === ''){
                mismatch()
            }else{
                let value1 = parseFloat(input1L2)
                let value2 = parseFloat(input2L2)
                let calculate = value1 + value2
                setStatus('+')
                setResultL2(String(calculate.toFixed(2)))
            }
        }else{
            if (input1 === '' || input2 === ''){
                mismatch()
            }else{
                let value1 = parseFloat(input1)
                let value2 = parseFloat(input2)
                let calculate = value1 + value2
                setStatus('+')
                setResult(String(calculate.toFixed(2)))
            }
        }

        if (result === 'NaN' || result === '' || resultL2 === 'NaN' || resultL2 === ''){
            mismatch()
        }
    }
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    const subtraction = () => {
        if (layer2){
            if (input1L2 === '' || input2L2 === ''){
                mismatch()
            }else{
                let value1 = parseFloat(input1L2)
                let value2 = parseFloat(input2L2)
                let calculate = value1 - value2
                setStatus('-')
                setResultL2(String(calculate.toFixed(2)))
            }
        }else{
            if (input1 === '' || input2 === ''){
                mismatch()
            }else{
                let value1 = parseFloat(input1)
                let value2 = parseFloat(input2)
                let calculate = value1 - value2
                setStatus('-')
                setResult(String(calculate.toFixed(2)))
            }
        }
        if (result === 'NaN' || result === '' || resultL2 === 'NaN' || resultL2 === ''){
            mismatch()
        }
        
    }
    //////////////////////////////////////////
    const multi = () => {
        if (layer2){
            if (input1L2 === '' || input2L2 === ''){
                mismatch()
            }else{
                let value1 = parseFloat(input1L2)
                let value2 = parseFloat(input2L2)
                let calculate = value1 * value2
                setStatus('x')
                setResultL2(String(calculate.toFixed(2)))
            }
        }else{
            if (input1 === '' || input2 === ''){
                mismatch()
            }else{
                let value1 = parseFloat(input1)
                let value2 = parseFloat(input2)
                let calculate = value1 * value2
                setStatus('x')
                setResult(String(calculate.toFixed(2)))
            }
        }
        if (result === 'NaN' || result === '' || resultL2 === 'NaN' || resultL2 === ''){
            mismatch()
        }
    }
    ///////////////////////////////////////////
    const divition = () => {
        if (layer2){
            if (input1L2 === '' || input2L2 === ''){
                mismatch()
            }else{
                let value1 = parseFloat(input1L2)
                let value2 = parseFloat(input2L2)
                let calculate = value1 / value2
                setStatus('÷')
                setResultL2(String(calculate.toFixed(2)))
            }
        }else{
            if (input1 === '' || input2 === ''){
                mismatch()
            }else{
                let value1 = parseFloat(input1)
                let value2 = parseFloat(input2)
                let calculate = value1 / value2
                setStatus('÷')
                setResult(String(calculate.toFixed(2)))
            }
        }
        if (result === 'NaN' || result === '' || resultL2 === 'NaN' || resultL2 === ''){
            mismatch()
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
            dangerSoundControl()
        }else{
            setInput1(result)
            setActive(2)
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
            dangerSoundControl()
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
    //////////////////////////////////////////
    const nameControl = () => {
        localStorage?.setItem('name', userName)
        setNameBox(false)
        router.push('/')
    }
    //////////////////////////////////////////
    const remoteControl = () => {
        localStorage?.removeItem('name')
        router.push('/')
    }
    /////////////////////////////////////////////////////////////////////////////////
    
    /////////////////////////////////////////////////////////////////////////////////
    return(
        <main className="select-none px-3 py-3">
            <audio ref={audioRef} src='/dangerSound.mp3'/>
            <audio ref={faaaAudio} src='/fahhh.mp3'/>
            <audio ref={misMatch} src='/mismatch.mp3'/> 

            <h1 className="inline py-1 px-3 rounded-xl bg-amber-200 font-mono">User : <span className="text-blue-800">{user}</span>{addStatus ? <span className="bg-green-500 ml-5 text-white px-2 hover:bg-green-600 rounded-md cursor-pointer" onClick={() => setNameBox(!nameBox)}>Add Name</span> : <span className="bg-red-500 px-2 text-white rounded-lg ml-5 cursor-pointer" onClick={remoteControl}>Remove Name</span>}</h1>

            {nameBox && <div className="bg-amber-800 inline-block mt-5 py-1 px-3 rounded-lg text-white">
                <input className="nameinput" onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter Your Name" required/>
                <span className="bg-green-500 hover:bg-green-600 px-3 ml-5 rounded-md cursor-pointer" onClick={nameControl}>Set Name</span>
            </div>}

            {layer2 && <h1 className="text-center font-mono font-bold text-3xl mt-5">Layer 2</h1>}
            {
                layer2 ? 
                    <div className="section flex bg-blue-200 text-black rounded-xl py-2 px-3 justify-center mt-3">
                    <input value={input1L2} onFocus={leftFocus} type="text" placeholder="input 1" required className="text-center text-xl w-35 py-1 rounded-xl font-bold" readOnly/>

                    <h1 className="text-3xl ml-3 mr-3">{status}</h1>

                    <input value={input2L2} onFocus={rightFocus} type="text" placeholder="input 2" required className="text-center text-xl w-35 py-1 rounded-xl font-bold" readOnly/>
                </div> : <div className="section flex bg-blue-200 text-black rounded-xl py-2 px-3 justify-center mt-8">
                    {allShow && <input value={input1} onFocus={leftFocus} type="text" placeholder="input 1" required className="text-center text-xl w-35 py-1 rounded-xl font-bold" readOnly/>}

                    <h1 className="text-3xl ml-3 mr-3">{status}</h1>

                    {allShow && <input value={input2} onFocus={rightFocus} type="text" placeholder="input 2" required className="text-center text-xl w-35 py-1 rounded-xl font-bold" readOnly/>}
                </div>
            }
            {
                !allShow && <div className="flex flex-col mt-20 bg-red-700 text-white items-center py-5 gap-5 px-5 rounded-2xl border-3 border-black">
                    <h1 className="fa fa-warning text-center text-5xl bg-white py-3 pl-5 pr-17 text-red-600 rounded-full"></h1>
                    <h1 className='text-2xl font-sans text-center'>নাম না সেট করলে, আপনি এই অ্যাপটি ব্যাবহার করতে পারবেন না!</h1>
                    <h1 className="bg-blue-500 py-1 px-3 rounded-xl">Masum Software Lab</h1>
                </div>
            }
            
            {allShow && <div>
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

            </div>}
            {/* //////////////////////////////////////////////////// */}
            {allShow && <div className="flex mt-15 items-center justify-center gap-20 pb-5">
                <h1 className={left ? "fa fa-arrow-left bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800 opacity-30": "fa fa-arrow-left bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800"} onClick={leftHandle}></h1>
                
                <h1 className={right ? "fa fa-arrow-right bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800 opacity-30" : "fa fa-arrow-right bg-green-500 text-3xl py-1 rounded-lg pl-3 pr-12 text-white border-2 border-red-800"} onClick={rightHandle}></h1>
                
            </div>}
            {allShow && <div className="grid grid-cols-4 gap-5 bg-emerald-800 py-8 px-5 bottom-0 right-0 rounded-xl border-3 border-fuchsia-700">
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
        
            </div>}
            {/* //////////////////////////////////////////////////// */}
        </main>
    )
}
export default Cal;