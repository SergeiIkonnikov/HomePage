export default function EditToolbar({ onSave, onCancel }) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
      <button
        onClick={onCancel}
        className="w-10 h-10 rounded-full bg-bg-panel border border-border-default flex items-center justify-center cursor-pointer hover:bg-border-default transition-colors"
        title="Cancel"
      >
        <svg className="w-5 h-5 text-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <button
        onClick={onSave}
        className="w-10 h-10 rounded-full bg-success flex items-center justify-center cursor-pointer hover:brightness-110 transition border-0"
        title="Save"
      >
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="5 12 10 17 19 7"/>
        </svg>
      </button>
    </div>
  )
}
