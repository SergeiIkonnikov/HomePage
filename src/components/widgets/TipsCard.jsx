export default function TipsCard() {
  return (
    <div className="bg-bg-panel rounded-xl h-full px-6 py-4 flex flex-col justify-between hover:bg-[#2a333b] transition-colors">
      <div className="flex items-start justify-between">
        <img
          src="http://localhost:3845/assets/8c20b382043245c9b1ffe94fe3cf36ed79457eb2.svg"
          alt=""
          className="w-8 h-8"
        />
        <div className="flex gap-1">
          <button className="w-8 h-8 rounded-[4px] border border-[#323A41] bg-bg-panel text-text-secondary flex items-center justify-center cursor-pointer hover:bg-border-default transition-colors">
            <img
              src="http://localhost:3845/assets/80ae9bcc28787af5ae2d1f2309162c62b0ffe95b.svg"
              alt=""
              className="w-6 h-6"
            />
          </button>
          <button className="w-8 h-8 rounded-[4px] border border-[#323A41] bg-bg-panel text-text-secondary flex items-center justify-center cursor-pointer hover:bg-border-default transition-colors">
            <img
              src="http://localhost:3845/assets/3557fa0ed33d28455656a7532f114add89151b40.svg"
              alt=""
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      <p className="text-sm leading-5 tracking-wide text-white">
        Condor enables quicker alert triggering and supports longer dwell&#8209;time rules compared to legacy
      </p>
    </div>
  )
}
