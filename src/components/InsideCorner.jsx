import MemoryStrip from './MemoryStrip'
import TinyNote from './TinyNote'

export default function InsideCorner({ noteIndex, onNextNote, onPlaySong }) {
  return (
    <>
      <section className="scroll-mt-9 bg-[#fbeaf2] px-[22px] py-28 animate-fade-slide max-[760px]:px-[18px] max-[760px]:py-[75px]" id="letter">
        <article className="relative mx-auto max-w-[650px] overflow-hidden border border-[#eee3eb] bg-[#fffdfb] px-[78px] py-[65px] shadow-[0_18px_55px_rgba(74,42,70,.07)] max-[760px]:px-7 max-[760px]:py-[42px]">
          <div className="flex items-center justify-between border-b border-[#f0dfe8] pb-[18px] text-[8px] font-bold tracking-[.18em] text-[#a58b9b]"><span>A LETTER FOR YOU</span><span className="text-[15px] text-[#c3528d]" aria-hidden="true">✿</span></div>
          <p className="mb-[22px] mt-9 font-display text-[27px] text-[#a23870]">Hey Enyy,</p>
          <p className="relative z-[1] font-display text-[19px] leading-[1.6] text-[#49333f]">I made you a tiny corner of the internet because you deserve nice things and also because I can.</p>
          <p className="relative z-[1] text-[13px] leading-[2] text-[#725c69]">You’re funny, kind, beautiful, and very easy to appreciate. You have that rare talent for making regular moments feel like there’s a good story in them.</p>
          <p className="relative z-[1] text-[13px] leading-[2] text-[#725c69]">No pressure to reply, and definitely no assignment. I just wanted to make you smile and remind you that I’m glad you’re my friend.</p>
          <p className="relative z-[1] mt-8 font-display text-[19px] leading-[1.7] text-[#604754]">Your friend,<br /><span className="italic text-[#a23870]">Damilare</span> <span aria-hidden="true">♡</span></p>
          <span className="pointer-events-none absolute -bottom-16 -right-4 font-display text-[220px] leading-none text-[#fbf4f8]" aria-hidden="true">✿</span>
        </article>

        <div className="mx-auto mt-12 max-w-[670px] text-center"><p className="mb-4 text-[9px] font-bold tracking-[.2em] text-[#a16685]">A TINY COMPLIMENT, ON DEMAND</p><TinyNote noteIndex={noteIndex} onNext={onNextNote} /></div>

        <section className="mx-auto mt-8 flex max-w-[670px] items-center gap-5 rounded-[22px] border border-[#edc9dc] bg-gradient-to-r from-[#f8dce9] via-[#fceaf2] to-[#f3def2] px-5 py-5 shadow-[0_14px_35px_rgba(142,61,103,.09)] max-[560px]:gap-3 max-[560px]:px-4" aria-label="The page soundtrack">
          <div className="mini-record" aria-hidden="true"><span /></div>
          <div className="min-w-0 flex-1"><p className="mb-1 text-[8px] font-bold tracking-[.18em] text-[#a16685]">ON THIS LITTLE MIXTAPE</p><h2 className="m-0 truncate font-display text-[22px] italic text-[#572c47]">We Hug Now</h2><p className="mt-1 text-[10px] text-[#8d6b7e]">Sydney Rose · picked for Enyy</p></div>
          <div className="soundwave hidden items-center gap-[3px] sm:flex" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <button className="rounded-full border-0 bg-[#a23870] px-4 py-2.5 text-[10px] font-bold text-white shadow-[0_7px_14px_rgba(162,56,112,.2)] transition hover:-translate-y-0.5 hover:bg-[#84295d] max-[560px]:px-3" onClick={onPlaySong} type="button">play again ♫</button>
        </section>

        <div className="mx-auto mt-20 max-w-[980px]"><MemoryStrip /></div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#8c3b68] via-[#77345f] to-[#522744] px-6 py-[90px] text-center text-[#fff5fa] max-[760px]:py-[75px]">
        <span className="absolute -left-5 -top-20 font-display text-[260px] text-white/[.025]" aria-hidden="true">✿</span><span className="absolute -bottom-36 -right-12 font-display text-[330px] text-white/[.025]" aria-hidden="true">♡</span>
        <div className="relative z-[1] mx-auto max-w-[570px]"><span className="inline-block animate-heartbeat text-[22px] text-[#ffc0dd]" aria-hidden="true">♡</span><p className="mb-5 mt-4 text-[9px] font-bold tracking-[.2em] text-[#f2c8dc]">A FRIENDLY REMINDER</p><h2 className="m-0 font-display text-[clamp(39px,5vw,59px)] font-medium leading-[1.08] tracking-[-.045em]">You’re a very<br /><em className="text-[#ffc3e0]">good egg, Enyy.</em></h2><p className="mx-auto mt-6 max-w-[375px] text-xs leading-[1.8] text-[#f0d8e5]">That’s all, really. Take the flowers, keep the compliment, and have a lovely day. Reply whenever, or never. Friendship still stands.</p></div>
      </section>
      <footer className="bg-[#4b263d] px-5 py-8 text-center text-[#f2dce8]"><span className="inline-block animate-heartbeat text-[#f2a8cc]" aria-hidden="true">✿</span><p className="my-2 font-display text-sm italic">A small reminder: you are appreciated, always.</p><span className="text-[8px] tracking-[.18em] text-[#c99db5]">MADE WITH CARE · FOR ENYY</span></footer>
    </>
  )
}
