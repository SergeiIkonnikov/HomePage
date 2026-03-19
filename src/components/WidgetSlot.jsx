import { useState } from 'react'
import SystemStatus from './widgets/SystemStatus'
import SavedResources from './widgets/SavedResources'
import RulesCard from './widgets/RulesCard'
import CameraLicenses from './widgets/CameraLicenses'
import RealtimeLicenses from './widgets/RealtimeLicenses'
import HealthCarousel from './widgets/HealthCarousel'
import RecentAlerts from './widgets/RecentAlerts'
import TipsCard from './widgets/TipsCard'
import AskInput from './widgets/AskInput'
import ActionCard from './widgets/ActionCard'

const WIDGET_MAP = {
  SystemStatus,
  SavedResources,
  RulesCard,
  CameraLicenses,
  RealtimeLicenses,
  HealthCarousel,
  RecentAlerts,
  TipsCard,
  AskInput,
  CreateRule: (props) => <ActionCard type="CreateRule" {...props} />,
  CreateCase: (props) => <ActionCard type="CreateCase" {...props} />,
  Help: (props) => <ActionCard type="Help" {...props} />,
}

export default function WidgetSlot({ slotId, widgetType, editMode, onRemove, onClickEmpty, onDrop, gridClasses }) {
  const [dragOver, setDragOver] = useState(false)
  const isEmpty = !widgetType
  const Component = widgetType ? WIDGET_MAP[widgetType] : null

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', slotId)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOver(true)
  }

  const handleDragLeave = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return
    setDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const fromSlot = e.dataTransfer.getData('text/plain')
    if (fromSlot && fromSlot !== slotId) {
      onDrop(fromSlot, slotId)
    }
  }

  if (isEmpty && !editMode) {
    return <div className={gridClasses} />
  }

  const dropTargetClasses = dragOver ? 'ring-2 ring-primary ring-inset bg-primary/10 rounded-xl' : ''

  return (
    <div
      className={`${gridClasses} relative min-h-0 ${editMode ? 'group' : ''} ${editMode ? dropTargetClasses : ''}`}
      onDragOver={editMode ? handleDragOver : undefined}
      onDragLeave={editMode ? handleDragLeave : undefined}
      onDrop={editMode ? handleDrop : undefined}
    >
      {isEmpty ? (
        <button
          onClick={() => onClickEmpty(slotId)}
          className={`w-full h-full min-h-[80px] rounded-xl border border-dashed cursor-pointer transition-colors ${
            dragOver
              ? 'border-primary'
              : 'border-border-default hover:border-primary'
          }`}
        />
      ) : (
        <div
          className={`h-full ${editMode ? 'rounded-xl border border-dashed border-border-default cursor-grab active:cursor-grabbing' : ''}`}
          draggable={editMode}
          onDragStart={editMode ? handleDragStart : undefined}
        >
          {editMode && (
            <button
              onClick={() => onRemove(slotId)}
              className="absolute top-2 right-2 z-10 w-6 h-6 rounded bg-bg-darkest/70 flex items-center justify-center cursor-pointer hover:bg-bg-darkest transition-colors border-0"
            >
              <svg className="w-4 h-4 text-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14"/>
              </svg>
            </button>
          )}
          <div className={editMode ? 'h-full opacity-45' : 'h-full'}>
            <Component editMode={editMode} />
          </div>
        </div>
      )}
    </div>
  )
}
