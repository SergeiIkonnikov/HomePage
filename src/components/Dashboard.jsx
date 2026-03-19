import { useState } from 'react'
import useLayout, { SLOT_GRID_CONFIG } from '../hooks/useLayout'
import WidgetSlot from './WidgetSlot'
import WidgetPicker from './WidgetPicker'
import EditToolbar from './EditToolbar'

export default function Dashboard() {
  const { layout, removeWidget, placeWidget, moveWidget, save, cancel, availableWidgets } = useLayout()
  const [editMode, setEditMode] = useState(false)
  const [pickerSlot, setPickerSlot] = useState(null)

  const handleToggleEdit = () => setEditMode(true)

  const handleSave = () => {
    save()
    setEditMode(false)
  }

  const handleCancel = () => {
    cancel()
    setEditMode(false)
  }

  const handleClickEmpty = (slotId) => {
    if (availableWidgets.length > 0) {
      setPickerSlot(slotId)
    }
  }

  const handlePickWidget = (widgetType) => {
    if (pickerSlot) {
      placeWidget(pickerSlot, widgetType)
      setPickerSlot(null)
    }
  }

  const slotIds = Object.keys(SLOT_GRID_CONFIG)

  return (
    <main className={`dashboard-grid ${editMode ? 'dashboard-grid--edit' : ''}`}>
      {/* Welcome row */}
      <div className="col-span-5 max-2xl:col-span-6 row-start-1 flex items-center pr-10 max-2xl:pr-4 pb-2">
        <h1 className="font-title font-light text-[32px] leading-10 tracking-tight max-xl:text-[28px] max-lg:text-2xl max-md:text-[22px]">
          Welcome, &lt;Name&gt;
        </h1>
      </div>

      {/* Renew */}
      <div className="col-start-10 col-span-3 max-2xl:col-start-9 max-2xl:col-span-4 row-start-1 flex items-center justify-end gap-2 pb-2">
        <div className="whitespace-nowrap">
          <p className="text-sm leading-5 tracking-wide">Automatic renew in 32 sec</p>
          <p className="text-xs leading-4 tracking-wide text-text-calm">Last update: 12/23/2025 12:35 AM</p>
        </div>
        <div className="w-10 h-10 relative flex items-center justify-center cursor-pointer shrink-0">
          <div className="absolute inset-1 rounded-full border-2 border-border-default" />
          <div className="absolute inset-1 rounded-full border-2 border-primary border-b-transparent border-l-transparent -rotate-45" />
          <svg className="w-4 h-4 text-text-secondary relative z-[1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
        </div>
      </div>

      {/* Widget slots */}
      {slotIds.map(slotId => {
        const config = SLOT_GRID_CONFIG[slotId]
        const gridClasses = `${config.col} ${config.row}`
        const extraClasses =
          slotId === 'systemStatus' ? ' pr-10 max-2xl:pr-16 pb-3' :
          slotId === 'savedResources' ? ' pt-3 pr-10 max-2xl:pr-16' :
          slotId === 'ask' ? ' max-2xl:pr-16' :
          ''

        return (
          <WidgetSlot
            key={slotId}
            slotId={slotId}
            widgetType={layout[slotId]}
            editMode={editMode}
            onRemove={removeWidget}
            onClickEmpty={handleClickEmpty}
            onDrop={moveWidget}
            gridClasses={gridClasses + extraClasses}
          />
        )
      })}

      {/* Settings toggle */}
      {!editMode && (
        <div className="col-start-13 row-start-1 row-span-7 flex items-center justify-center max-md:hidden">
          <button
            onClick={handleToggleEdit}
            className="w-8 h-8 bg-bg-panel rounded-full flex items-center justify-center cursor-pointer border-0 hover:bg-border-default transition-colors"
            title="Customise"
          >
            <svg className="w-4 h-4 text-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
        </div>
      )}

      {/* Edit mode toolbar */}
      {editMode && <EditToolbar onSave={handleSave} onCancel={handleCancel} />}

      {/* Widget picker modal */}
      {pickerSlot && (
        <WidgetPicker
          availableWidgets={availableWidgets}
          onSelect={handlePickWidget}
          onClose={() => setPickerSlot(null)}
        />
      )}
    </main>
  )
}
