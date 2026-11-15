import { littleNotes } from '../content'

export default function TinyNote({ noteIndex, onNext }) {
  return <div className="flex items-center gap-4 rounded-2xl border border-[#edcddd] bg-[#fff8fb]/80 px-5 py-4 text-left shadow-[0_12px_30px_rgba(142,61,103,.07)]"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f8dce9] text-[#c04c89]">✦</span><p className="m-0 flex-1 font-display text-base italic text-[#65354f]">{littleNotes[noteIndex]}</p><button className="whitespace-nowrap border-0 border-b border-[#d891b3] bg-transparent py-1 font-mono-ui text-[9px] text-[#a23870]" onClick={onNext} type="button">another ↗</button></div>
}
