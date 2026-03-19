import { useState, useCallback } from 'react'

const STORAGE_KEY = 'briefcam-dashboard-layout'

const DEFAULT_LAYOUT = {
  systemStatus: 'SystemStatus',
  savedResources: 'SavedResources',
  rules: 'RulesCard',
  cameraLicenses: 'CameraLicenses',
  realtimeLicenses: 'RealtimeLicenses',
  health: 'HealthCarousel',
  alerts: 'RecentAlerts',
  ask: 'AskInput',
  tips: 'TipsCard',
  action1: 'CreateRule',
  action2: 'CreateCase',
  action3: 'Help',
  freeL1: null,
  freeL2: null,
  freeL3: null,
  freeL4: null,
  freeL5: null,
  freeL6: null,
  freeR1: null,
  freeR2: null,
  freeR3: null,
  freeR4: null,
  freeR5: null,
  freeR6: null,
}

export const SLOT_GRID_CONFIG = {
  systemStatus:      { col: 'col-span-5 max-2xl:col-span-6',                                          row: 'row-start-2',             label: 'System Status' },
  savedResources:    { col: 'col-span-5 max-2xl:col-span-6',                                          row: 'row-start-3 row-span-2',  label: 'Saved Resources' },
  rules:             { col: 'col-start-7 col-span-2 max-2xl:col-start-7',                             row: 'row-start-2 row-span-2',  label: 'Rules' },
  cameraLicenses:    { col: 'col-start-9 col-span-2 max-2xl:col-start-9',                             row: 'row-start-2',             label: 'Camera Licenses' },
  realtimeLicenses:  { col: 'col-start-9 col-span-2 max-2xl:col-start-9',                             row: 'row-start-3',             label: 'Realtime Licenses' },
  health:            { col: 'col-start-11 col-span-2 max-2xl:col-start-11 max-2xl:col-span-2',        row: 'row-start-2 row-span-2',  label: 'System Health' },
  alerts:            { col: 'col-start-7 col-span-6 max-2xl:col-start-7 max-2xl:col-span-6',          row: 'row-start-4 row-span-2',  label: 'Recent Alerts' },
  ask:               { col: 'col-span-5 max-2xl:col-span-6',                                          row: 'row-start-7',             label: 'Ask Input' },
  tips:              { col: 'col-start-7 col-span-3 max-2xl:col-start-7 max-2xl:col-span-3',          row: 'row-start-7',             label: 'Tips' },
  action1:           { col: 'col-start-10 max-2xl:col-start-10',                                      row: 'row-start-7',             label: 'Action 1' },
  action2:           { col: 'col-start-11 max-2xl:col-start-11',                                      row: 'row-start-7',             label: 'Action 2' },
  action3:           { col: 'col-start-12 max-2xl:col-start-12',                                      row: 'row-start-7',             label: 'Action 3' },
  freeL1:            { col: 'col-start-1 col-span-2',                                                  row: 'row-start-5',             label: 'Free Slot' },
  freeL2:            { col: 'col-start-3 col-span-2',                                                  row: 'row-start-5',             label: 'Free Slot' },
  freeL3:            { col: 'col-start-5 col-span-2 max-2xl:hidden',                                  row: 'row-start-5',             label: 'Free Slot' },
  freeL4:            { col: 'col-start-1 col-span-2',                                                  row: 'row-start-6',             label: 'Free Slot' },
  freeL5:            { col: 'col-start-3 col-span-2',                                                  row: 'row-start-6',             label: 'Free Slot' },
  freeL6:            { col: 'col-start-5 col-span-2 max-2xl:hidden',                                  row: 'row-start-6',             label: 'Free Slot' },
  freeR1:            { col: 'col-start-7 max-2xl:col-start-6',                                         row: 'row-start-6',             label: 'Free Slot' },
  freeR2:            { col: 'col-start-8 max-2xl:col-start-7',                                         row: 'row-start-6',             label: 'Free Slot' },
  freeR3:            { col: 'col-start-9 max-2xl:col-start-8',                                         row: 'row-start-6',             label: 'Free Slot' },
  freeR4:            { col: 'col-start-10 max-2xl:col-start-9',                                        row: 'row-start-6',             label: 'Free Slot' },
  freeR5:            { col: 'col-start-11 max-2xl:col-start-10',                                       row: 'row-start-6',             label: 'Free Slot' },
  freeR6:            { col: 'col-start-12 max-2xl:col-start-11 max-2xl:col-span-2',                   row: 'row-start-6',             label: 'Free Slot' },
}

export const ALL_WIDGET_TYPES = [
  'SystemStatus', 'SavedResources', 'RulesCard', 'CameraLicenses',
  'RealtimeLicenses', 'HealthCarousel', 'RecentAlerts', 'AskInput',
  'TipsCard', 'CreateRule', 'CreateCase', 'Help',
]

export const WIDGET_LABELS = {
  SystemStatus: 'System Status',
  SavedResources: 'Saved Resources',
  RulesCard: 'Rules',
  CameraLicenses: 'Camera Licenses',
  RealtimeLicenses: 'Realtime Licenses',
  HealthCarousel: 'System Health',
  RecentAlerts: 'Recent Alerts',
  AskInput: 'Ask Input',
  TipsCard: 'Tips & Updates',
  CreateRule: 'Create Rule',
  CreateCase: 'Create Case',
  Help: 'Help Center',
}

function loadLayout() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {}
  return { ...DEFAULT_LAYOUT }
}

export default function useLayout() {
  const [layout, setLayout] = useState(loadLayout)
  const [savedLayout, setSavedLayout] = useState(layout)

  const removeWidget = useCallback((slotId) => {
    setLayout(prev => ({ ...prev, [slotId]: null }))
  }, [])

  const placeWidget = useCallback((slotId, widgetType) => {
    setLayout(prev => {
      const next = { ...prev }
      for (const key of Object.keys(next)) {
        if (next[key] === widgetType) next[key] = null
      }
      next[slotId] = widgetType
      return next
    })
  }, [])

  const moveWidget = useCallback((fromSlot, toSlot) => {
    if (fromSlot === toSlot) return
    setLayout(prev => {
      const next = { ...prev }
      const fromWidget = next[fromSlot]
      next[fromSlot] = next[toSlot]
      next[toSlot] = fromWidget
      return next
    })
  }, [])

  const save = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(layout))
    setSavedLayout(layout)
  }, [layout])

  const cancel = useCallback(() => {
    setLayout(savedLayout)
  }, [savedLayout])

  const availableWidgets = ALL_WIDGET_TYPES.filter(
    wt => !Object.values(layout).includes(wt)
  )

  return { layout, removeWidget, placeWidget, moveWidget, save, cancel, availableWidgets }
}
