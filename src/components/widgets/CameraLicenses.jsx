export default function CameraLicenses({ editMode }) {
  return (
    <div className="bg-bg-panel rounded-xl h-full relative hover:bg-[#2a333b] transition-colors">
      <h3 className="font-title font-semibold text-xl leading-6 px-6 pt-[18px] whitespace-nowrap">Camera licenses</h3>
      <div className="absolute bottom-[19px] left-6 right-[22px]">
        <div className="flex justify-between items-center text-sm leading-5 tracking-wide">
          <span className="text-text-calm">Activated</span>
          <span className="text-white">{editMode ? '##/###' : '265/1000'}</span>
        </div>
        <div className="h-1 bg-border-default rounded-xl mt-2 overflow-hidden">
          <div className="h-full bg-primary rounded-xl" style={{ width: editMode ? '30%' : '26.5%' }} />
        </div>
      </div>
    </div>
  )
}
