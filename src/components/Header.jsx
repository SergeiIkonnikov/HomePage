export default function Header() {
  return (
    <header className="h-14 bg-bg-darkest flex items-center justify-between px-6 sticky top-0 z-50 shadow-[0_1px_3px_#0a1119] border-b border-border-default">
      <div className="flex items-center gap-2 shrink-0">
        <div className="flex flex-col gap-[3px] mr-1">
          <span className="block h-[3px] w-[14px] ml-1 bg-primary rounded-full" />
          <span className="block h-[3px] w-[17px] bg-primary rounded-full" />
          <span className="block h-[3px] w-[9px] ml-[7px] bg-primary rounded-full" />
        </div>
        <div className="flex gap-1.5 items-center text-xl">
          <span className="text-white tracking-wide">BriefCam</span>
          <span className="text-white">Protect</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <nav className="flex gap-3 max-md:hidden">
          {['Review', 'Respond', 'Research', 'Admin'].map(tab => (
            <div key={tab} className="h-14 flex items-center justify-center px-4 pt-1 text-sm font-bold uppercase tracking-wide text-text-secondary cursor-pointer border-b-[3px] border-transparent hover:text-text-calm transition-colors">
              {tab}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-1 bg-border-default text-white px-3 py-1 rounded-3xl text-sm cursor-pointer hover:bg-[#3d464f] transition-colors">
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="6" x2="13" y2="6"/><circle cx="15" cy="6" r="2"/><line x1="17" y1="6" x2="19" y2="6"/>
              <line x1="5" y1="12" x2="7" y2="12"/><circle cx="9" cy="12" r="2"/><line x1="11" y1="12" x2="19" y2="12"/>
              <line x1="5" y1="18" x2="13" y2="18"/><circle cx="15" cy="18" r="2"/><line x1="17" y1="18" x2="19" y2="18"/>
            </svg>
            <span className="max-sm:hidden">Customize</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div className="w-8 h-8 rounded-full border-[1.5px] border-text-secondary text-text-secondary flex items-center justify-center text-base font-medium cursor-pointer hover:border-text-calm hover:text-text-calm transition-colors">?</div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-semibold tracking-wide cursor-pointer">SF</div>
        </div>
      </div>
    </header>
  )
}
