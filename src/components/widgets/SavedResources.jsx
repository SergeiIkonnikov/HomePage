export default function SavedResources({ editMode }) {
  const base = "font-title font-light text-[32px] leading-[48px] tracking-tight max-xl:text-[26px] max-xl:leading-[40px] max-lg:text-[22px] max-lg:leading-[36px] max-md:text-xl max-md:leading-8"

  return (
    <p className={`${base} text-text-secondary`}>
      Your team has <span className="text-white">processed</span>
      {' '}
      <span className="text-white whitespace-nowrap">
        <span className="inline-flex items-center justify-center w-8 h-8 max-lg:w-6 max-lg:h-6 align-middle">
          <svg className="w-6 h-6 max-lg:w-5 max-lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 5l4 4v10a2 2 0 0 1-2 2H6"/></svg>
        </span>
        {' '}{editMode ? '#,### hours' : '2,532 hours'}
      </span>
      {' '}of video in the past month. By using BriefCam,{' '}
      <span className="text-white">you saved</span>
      {' '}the equivalent of{' '}
      <span className="text-white whitespace-nowrap">
        <span className="inline-flex items-center justify-center w-8 h-8 max-lg:w-6 max-lg:h-6 align-middle">
          <svg className="w-6 h-6 max-lg:w-5 max-lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </span>
        {' '}{editMode ? '###.# workdays' : '278.5 workdays'}
      </span>
    </p>
  )
}
