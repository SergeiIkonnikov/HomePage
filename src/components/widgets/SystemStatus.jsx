export default function SystemStatus({ editMode }) {
  const base = "font-title font-light text-[32px] leading-[48px] tracking-tight max-xl:text-[26px] max-xl:leading-[40px] max-lg:text-[22px] max-lg:leading-[36px] max-md:text-xl max-md:leading-8"

  return (
    <p className={`${base} text-text-secondary`}>
      Your workspace has{' '}
      <span className="text-primary whitespace-nowrap">
        <span className="inline-flex items-center justify-center w-8 h-8 max-lg:w-6 max-lg:h-6 align-middle">
          <svg className="w-6 h-6 max-lg:w-5 max-lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
        </span>
        {' '}{editMode ? '## cases' : '25 cases'}
      </span>
      {' '}and{' '}
      <span className="text-orange whitespace-nowrap">
        <span className="inline-flex items-center justify-center w-8 h-8 max-lg:w-6 max-lg:h-6 align-middle">
          <svg className="w-6 h-6 max-lg:w-5 max-lg:h-5" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
        {' '}{editMode ? '## alerts' : '12 alerts'}
      </span>
      {' '}that came in over the last 24 hours
    </p>
  )
}
