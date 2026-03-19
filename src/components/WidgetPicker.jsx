import { WIDGET_LABELS } from '../hooks/useLayout'

export default function WidgetPicker({ availableWidgets, onSelect, onClose }) {
  if (availableWidgets.length === 0) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-bg-panel rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-title font-semibold text-lg">Add Widget</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-white cursor-pointer bg-transparent border-0 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {availableWidgets.map(wt => (
            <button
              key={wt}
              onClick={() => onSelect(wt)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm text-text-calm hover:bg-border-default hover:text-white transition-colors cursor-pointer bg-transparent border-0 font-[inherit]"
            >
              {WIDGET_LABELS[wt] || wt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
