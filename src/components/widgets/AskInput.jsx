import { useState, useEffect, useRef } from 'react'

export default function AskInput() {
  const [text, setText] = useState('')
  const [visible, setVisible] = useState(true)
  const textareaRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setVisible(v => !v), 530)
    return () => clearInterval(id)
  }, [])

  const hasText = text.trim().length > 0

  const handleSend = () => {
    if (!hasText) return
    // Prototype: clear the input (no backend wiring yet)
    setText('')
  }

  return (
    <div className="bg-bg-base border-[1.5px] border-[#3199cd] rounded-2xl p-5 flex flex-col justify-between min-h-[120px] shadow-[_-1px_2px_10px_0_rgba(240,35,255,0.5),0_0_5px_1px_rgba(0,131,255,0.7)] hover:bg-bg-panel transition-colors">
      {/* Editable input area (full click target via textarea) */}
      <div
        className="relative flex items-center pl-2 h-8 cursor-text"
        onMouseDown={(e) => {
          // Keep focus stable on click/tap.
          textareaRef.current?.focus()
          // Prevents caret-jump on some browsers.
          e.preventDefault()
        }}
      >
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          className="absolute inset-0 w-full h-full resize-none bg-transparent outline-none text-white leading-6 max-md:text-base px-2 py-0
            focus:ring-0"
          aria-label="Ask input"
          spellCheck={false}
        />

        {/* Animated placeholder label (only when empty) */}
        {!hasText && (
          <div className="flex items-center pl-2 pointer-events-none">
            <span className="text-white font-medium text-xl leading-6 max-md:text-base" style={{ opacity: visible ? 1 : 0 }}>|</span>
            <span className="text-[#576777] font-medium text-xl leading-6 max-md:text-base" style={{ opacity: 1 }}>
              Ask anything about BriefCam
            </span>
          </div>
        )}
      </div>

      {/* Bottom controls row: plus + mode on the left, send on the right */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full bg-bg-panel border-0 text-text-secondary flex items-center justify-center cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="7" y1="1" x2="7" y2="13" />
              <line x1="1" y1="7" x2="13" y2="7" />
            </svg>
          </button>
          <button className="flex items-center gap-1 text-text-secondary text-sm font-bold tracking-wide cursor-pointer bg-transparent border-0 font-[inherit]">
            Normal mode
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <button
          onClick={handleSend}
          className={`w-8 h-8 rounded-full border-0 flex items-center justify-center cursor-pointer transition-colors ${
            hasText ? 'bg-primary text-white' : 'bg-border-default text-text-secondary'
          }`}
          aria-label="Send"
          type="button"
        >
          <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  )
}
