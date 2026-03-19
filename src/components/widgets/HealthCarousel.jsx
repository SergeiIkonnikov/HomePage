import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    title: 'Storage',
    value: '54%',
    editValue: 'xx%',
    color: '#0083FF',
    percent: 54,
    chart: 'circle',
    badgeColor: 'bg-success',
    badgeIcon: <polyline points="2 6 5 9 10 3"/>,
  },
  {
    title: 'System power',
    value: '68%',
    editValue: 'xx%',
    color: '#0083FF',
    percent: 68,
    chart: 'bars',
    badgeColor: 'bg-success',
    badgeIcon: <polyline points="2 6 5 9 10 3"/>,
  },
  {
    title: 'Services',
    value: '324/345',
    editValue: '###/###',
    chart: 'grid',
    total: 345,
    running: 324,
    badgeColor: 'bg-success',
    badgeIcon: <polyline points="2 6 5 9 10 3"/>,
  },
]

export default function HealthCarousel({ editMode }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next])

  const slide = slides[current]

  return (
    <div
      className="bg-bg-panel rounded-xl h-full flex flex-col hover:bg-[#2a333b] transition-colors overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex justify-between items-start px-6 pt-4">
        <span className="font-title font-semibold text-xl leading-6">{slide.title}</span>
        <div className="w-8 h-8 flex items-center justify-center">
          <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${slide.badgeColor}`}>
            <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-2 h-2">{slide.badgeIcon}</svg>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-2 py-2 overflow-hidden min-h-0">
        <div key={current} className="flex items-center justify-center h-full w-full min-h-0 animate-[slideIn_0.4s_ease-out]">
          {slide.chart === 'circle' && (
            <svg viewBox="0 0 164 164" className="max-w-full max-h-full aspect-square" shapeRendering="crispEdges">
              {(() => {
                const gap = 5, dotS = 3, cx = 82, cy = 82, r = 80
                const totalRows = Math.floor(164 / gap)
                const dots = []
                for (let y = gap / 2; y < 164; y += gap) {
                  for (let x = gap / 2; x < 164; x += gap) {
                    const dx = x - cx, dy = y - cy
                    if (Math.sqrt(dx * dx + dy * dy) > r) continue
                    let angle = Math.atan2(dx, -dy)
                    if (angle < 0) angle += 2 * Math.PI
                    const filled = angle <= (slide.percent / 100) * 2 * Math.PI
                    const o = filled ? 1 : 0.15
                    const rowIdx = Math.floor((y - gap / 2) / gap)
                    const rowDelay = ((totalRows - 1 - rowIdx) / totalRows) * 0.4
                    const jitter = ((dots.length * 2654435761 >>> 0) / 4294967296) * 0.03
                    const delay = rowDelay + jitter
                    dots.push(<rect key={dots.length} x={x - dotS / 2} y={y - dotS / 2} width={dotS} height={dotS} fill={slide.color}
                      opacity={o} style={{ animation: `dotReveal 0.01s steps(1) ${delay}s backwards` }} />)
                  }
                }
                return dots
              })()}
            </svg>
          )}
          {slide.chart === 'bars' && (
            <svg viewBox="0 0 164 164" className="max-w-full max-h-full aspect-square" shapeRendering="crispEdges">
              {(() => {
                const gap = 5, dotS = 3
                const cols = Math.floor(164 / gap), rows = Math.floor(164 / gap)
                const heights = [
                  4, 5, 3, 6, 8, 5, 4, 7, 12, 9, 6, 5, 8, 14, 11, 7,
                  10, 18, 22, 20, 15, 12, 16, 21, 25, 19, 14, 11, 17, 24, 20, 16
                ]
                const dots = []
                for (let col = 0; col < cols; col++) {
                  const h = heights[col % heights.length]
                  const barTop = rows - h
                  for (let row = 0; row < rows; row++) {
                    const inBar = row >= barTop
                    const isPeak = inBar && (row === barTop || row === barTop + 1)
                    const fill = isPeak ? '#65B686' : '#0083FF'
                    const o = inBar ? 1 : 0.15
                    const rowDelay = ((rows - 1 - row) / rows) * 0.4
                    const jitter = (((col * rows + row) * 2654435761 >>> 0) / 4294967296) * 0.03
                    const delay = rowDelay + jitter
                    dots.push(<rect key={`${col}-${row}`} x={col * gap + gap / 2 - dotS / 2} y={row * gap + gap / 2 - dotS / 2} width={dotS} height={dotS} fill={fill}
                      opacity={o} style={{ animation: `dotReveal 0.01s steps(1) ${delay}s backwards` }} />)
                  }
                }
                return dots
              })()}
            </svg>
          )}
          {slide.chart === 'grid' && (
            <svg viewBox="0 0 164 164" className="max-w-full max-h-full aspect-square" shapeRendering="crispEdges">
              {(() => {
                const gap = 5, dotS = 3
                const cols = Math.floor(164 / gap), rows = Math.floor(164 / gap)
                const count = cols * rows
                const failRatio = (slide.total - slide.running) / slide.total
                const dimRatio = 0.12
                const failSet = new Set()
                const dimSet = new Set()
                let s = 42
                while (failSet.size < Math.round(count * failRatio)) {
                  s = (s * 16807 + 7) % 2147483647
                  failSet.add(s % count)
                }
                s = 137
                while (dimSet.size < Math.round(count * dimRatio)) {
                  s = (s * 16807 + 7) % 2147483647
                  const idx = s % count
                  if (!failSet.has(idx)) dimSet.add(idx)
                }
                const dots = []
                for (let row = 0; row < rows; row++) {
                  for (let col = 0; col < cols; col++) {
                    const idx = row * cols + col
                    const isFail = failSet.has(idx)
                    const isDim = dimSet.has(idx)
                    const fill = isFail ? '#D1733E' : '#0083FF'
                    const o = isDim ? 0.15 : 1
                    const rowDelay = ((rows - 1 - row) / rows) * 0.4
                    const jitter = ((idx * 2654435761 >>> 0) / 4294967296) * 0.03
                    const delay = rowDelay + jitter
                    dots.push(<rect key={idx} x={col * gap + gap / 2 - dotS / 2} y={row * gap + gap / 2 - dotS / 2} width={dotS} height={dotS}
                      fill={fill}
                      opacity={o} style={{ animation: `dotReveal 0.01s steps(1) ${delay}s backwards` }} />)
                  }
                }
                return dots
              })()}
            </svg>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-6 pb-4">
        <span className="font-title font-light text-[32px] leading-10 max-md:text-[26px] tracking-tight">
          {editMode ? slide.editValue : slide.value}
        </span>
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === current ? 'bg-white' : 'bg-text-secondary'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
