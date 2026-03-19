export default function RulesCard({ editMode }) {
  const rows = [
    { label: 'Disabled', value: 7 },
    { label: 'Queued', value: 3 },
    { label: 'Recovering', value: 1 },
    { label: 'Processing', value: 1 },
  ]

  return (
    <div className="bg-bg-panel rounded-xl h-full flex flex-col px-[22px] pt-[18px] pb-[18px] hover:bg-[#2a333b] transition-colors">
      <h3 className="font-title font-semibold text-xl leading-6 shrink-0">Rules</h3>
      <div className="w-full mt-auto">
        <div className="flex justify-between items-center h-7 border-b border-white shrink-0">
          <span className="text-sm font-bold leading-5 tracking-wide">Total</span>
          <span className="font-title font-normal text-2xl leading-6 tracking-tight">{editMode ? '##' : '12'}</span>
        </div>
        <div className="mt-3">
          {rows.map(r => (
            <div key={r.label} className="flex justify-between items-center h-7 border-b border-border-default text-sm leading-5 tracking-wide">
              <span className="text-text-calm">{r.label}</span>
              <span className="text-white">{editMode ? '#' : r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
