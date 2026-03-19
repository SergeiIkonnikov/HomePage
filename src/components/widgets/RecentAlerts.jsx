import img1 from '../../images/900CB2DECB44906BFFBCFFB76070CDCB.jpg'
import img2 from '../../images/5F5A6AA6D91423056DF3DAAE6F8B8543.jpg'
import img3 from '../../images/A3C85607C381973B64232BF1F30B0C6D.jpg'
import img4 from '../../images/66690F77168A6B9034174CB7A2859B5E.jpg'
import img5 from '../../images/0751648545E59E261B3B5FC8865CD0FD.jpg'
import img6 from '../../images/684C094AFBB0C03F7ADCA95479001288.jpg'
import img7 from '../../images/B6E0D6D764D2D309F181FFC8E1DFD94D.jpg'
import img8 from '../../images/B74CDB14C09D44A3C16497B2CA4B8DD3.jpg'
import img9 from '../../images/C3B77BE5447C5FE669723519695EA6E7.jpg'

const alerts = [
  { width: 80,  img: img1, time: '04:32 PM' },
  { width: 186, img: img2, time: '12:56 PM' },
  { width: 59,  img: img3, time: '04:32 PM' },
  { width: 58,  img: img4, time: '04:32 PM', highlight: true },
  { width: 87,  img: img5, time: '04:32 PM', highlight: true },
  { width: 119, img: img6, time: '04:32 PM' },
  { width: 80,  img: img7, time: '03:15 PM' },
  { width: 70,  img: img8, time: '02:48 PM' },
  { width: 65,  img: img9, time: '01:22 PM' },
]

export default function RecentAlerts() {
  return (
    <div className="bg-bg-panel rounded-xl h-full p-6 flex flex-col gap-5 hover:bg-[#2a333b] transition-colors">
      <h3 className="font-title font-semibold text-xl leading-6 shrink-0">Recent alerts</h3>
      <div className="flex gap-[7px] flex-1 items-stretch overflow-hidden">
        {alerts.map((a, i) => (
          <div key={i} className="shrink-0 overflow-hidden relative bg-border-default max-xl:flex-1 max-xl:min-w-0" style={{ width: `${a.width}px` }}>
            <img src={a.img} alt="" className="w-full h-full object-cover" />
            <div className={`absolute bottom-[7px] left-1/2 -translate-x-1/2 bg-[rgba(31,38,45,0.5)] px-1 py-0.5 rounded-[40px] text-[10px] font-semibold leading-3 tracking-wide whitespace-nowrap ${a.highlight ? 'text-orange' : ''}`}>
              {a.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
