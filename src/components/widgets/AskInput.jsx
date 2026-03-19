import { useState, useEffect } from 'react'

export default function AskInput() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setVisible(v => !v), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-bg-base border-[1.5px] border-[#3199cd] rounded-2xl p-5 flex flex-col justify-between min-h-[120px] shadow-[_-1px_2px_10px_0_rgba(240,35,255,0.5),0_0_5px_1px_rgba(0,131,255,0.7)] hover:bg-[#1a2230] transition-colors">
      <div className="flex items-center pl-2 h-8">
        <span className="text-white font-medium text-xl leading-6 max-md:text-base" style={{ opacity: visible ? 1 : 0 }}>|</span>
        <span className="text-[#576777] font-medium text-xl leading-6 max-md:text-base">Ask anything about BriefCam</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full bg-bg-panel border-0 text-text-secondary flex items-center justify-center cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="1" x2="7" y2="13"/><line x1="1" y1="7" x2="13" y2="7"/></svg>
          </button>
          <button className="flex items-center gap-1 text-text-secondary text-sm font-bold tracking-wide cursor-pointer bg-transparent border-0 font-[inherit]">
            Normal mode
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
        <button className="w-8 h-8 rounded-full bg-border-default border-0 text-text-secondary flex items-center justify-center cursor-pointer">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>
  )
}
