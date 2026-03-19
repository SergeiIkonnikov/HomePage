const configs = {
  CreateRule: {
    label: 'Create rule',
    iconUrl: 'http://localhost:3845/assets/d960786294cc42889723161fec4cc5cdef25870a.svg',
    iconSize: 'w-[54px] h-[54px]',
  },
  CreateCase: {
    label: 'Create case',
    iconUrl: 'http://localhost:3845/assets/141bbcc2413e4907cb5cde8b0eb2ee5235ff5794.svg',
    iconSize: 'w-10 h-10',
  },
  Help: {
    label: 'Help center',
    iconUrl: 'http://localhost:3845/assets/d7b27f0ff4e52b76815108339979009d8ee51ac3.svg',
    iconSize: 'w-9 h-9',
  },
}

export default function ActionCard({ type }) {
  const config = configs[type]
  if (!config) return null

  return (
    <div className="bg-bg-panel rounded-xl h-full p-4 flex flex-col cursor-pointer hover:bg-[#2a333b] transition-colors">
      <div className="h-[72px] flex items-center justify-center">
        <img src={config.iconUrl} alt="" className={config.iconSize} />
      </div>
      <span className="mt-auto text-sm font-bold leading-5 tracking-wide text-white text-left">
        {config.label}
      </span>
    </div>
  )
}
