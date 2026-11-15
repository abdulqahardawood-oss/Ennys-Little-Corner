export default function OpeningGate({ onOpen, opened }) {
  return (
    <section className="relative grid min-h-[740px] h-[min(100vh,900px)] grid-cols-2 items-center overflow-hidden bg-[radial-gradient(ellipse_at_78%_48%,#f6cde0_0,transparent_37%),linear-gradient(120deg,#fff5f9,#fceaf2)] px-[12%] pb-[100px] pt-[115px] max-[760px]:h-auto max-[760px]:min-h-[840px] max-[760px]:grid-cols-1 max-[760px]:px-6 max-[760px]:pb-[90px] max-[760px]:pt-[125px]" id="top">
      <div className="absolute -right-[245px] top-5 h-[500px] w-[500px] rounded-full border border-[#edc9da] shadow-[0_0_0_45px_rgba(255,255,255,.1),0_0_0_95px_rgba(255,255,255,.07)] animate-orbit" aria-hidden="true" />
      <div className="relative z-[1] max-w-[490px] animate-fade-slide max-[760px]:mx-auto max-[760px]:text-center">
        <p className="mb-[27px] flex items-center gap-2.5 text-[9px] font-bold tracking-[.2em] text-[#a16685] max-[760px]:justify-center"><span className="h-px w-[22px] bg-[#cf82a7]" />A MIXTAPE NOTE FOR ENYY</p>
        <h1 className="m-0 font-display text-[clamp(47px,6vw,78px)] font-medium leading-[1.08] tracking-[-.045em] text-[#432838] max-[760px]:text-[clamp(48px,12vw,70px)]">For the friend<br />who makes life <em className="text-[#b3447b]">sound better.</em></h1>
        <p className="my-6 max-w-[355px] text-sm leading-[1.8] text-[#795c6d] max-[760px]:mx-auto">You told me music is your thing, so this little note comes with a soundtrack. Press play, music person.</p>
        <button className="flex items-center gap-2.5 border-0 bg-transparent p-0 text-xs font-bold text-[#a23870] transition-all hover:gap-4 max-[760px]:mx-auto" onClick={onOpen} type="button">{opened ? 'Close your note' : 'Read your note'} <span className="text-[17px]">{opened ? '↑' : '↓'}</span></button>
        <div className="mt-[62px] flex items-center gap-2 text-[10px] text-[#aa879a] max-[760px]:mt-[34px] max-[760px]:justify-center"><span className="text-[#c65f96]">✧</span> No rush. Just a friendly little thing.</div>
      </div>
      <div className="relative z-[1] flex min-h-[400px] flex-col items-center justify-center animate-fade-slide delay-100 max-[760px]:min-h-[370px]">
        <div className="vinyl-disc" aria-hidden="true"><span /></div>
        <div className="absolute h-[350px] w-[350px] animate-breathe rounded-full border border-[#dfa8c5] opacity-70 max-[760px]:h-[285px] max-[760px]:w-[285px]" aria-hidden="true" />
        <div className="absolute h-[420px] w-[420px] animate-breathe rounded-full border border-[#dfa8c5] opacity-35 [animation-delay:1.2s] max-[760px]:h-[340px] max-[760px]:w-[340px]" aria-hidden="true" />
        <span className="absolute right-[13%] top-[14%] rotate-[-14deg] font-display text-2xl text-[#c3528d] animate-heartbeat" aria-hidden="true">♫</span>
        <button className={`letter-envelope relative h-[182px] w-[260px] border-0 bg-transparent p-0 drop-shadow-[0_21px_19px_rgba(107,73,91,.12)] transition hover:-translate-y-1.5 ${opened ? 'is-open' : ''}`} onClick={onOpen} type="button" aria-label={opened ? 'Close the letter envelope' : 'Open the letter envelope'} aria-expanded={opened} aria-controls="letter">
          <span className="mail-shadow" /><span className="mail-letter"><span className="text-[31px] text-[#a96291]">✿</span></span><span className="mail-back" /><span className="mail-front" /><span className="mail-flap" /><span className="mail-seal">✿</span>
        </button>
        <p className="mt-[33px] text-[10px] tracking-[.12em] text-[#9a7189]">{opened ? 'Your note is open · music is on' : 'Tap the envelope to open'}</p>
      </div>
      <div className="absolute bottom-7 left-[7.2%] right-[7.2%] flex justify-between border-t border-[#edcfde] pt-[13px] text-[8px] tracking-[.16em] text-[#aa879a] max-[760px]:left-[6%] max-[760px]:right-[6%]"><span>A NOTE FROM A FRIEND</span><span>MADE WITH CARE · FOR ENYY</span></div>
    </section>
  )
}
