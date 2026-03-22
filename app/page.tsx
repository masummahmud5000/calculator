'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  let router = useRouter()

  useEffect(()=>{
    setTimeout(()=> router.push('/cal'),3000)
  },[])
  
  return (
    <main className="flex flex-col items-center py-20 gap-20">
      <h1 className="fa fa-spinner text-8xl animate-[spin_350ms_infinite]"></h1>
      <h1 className="text-3xl font-mono">Run The System...</h1>
    </main>
  )
}
