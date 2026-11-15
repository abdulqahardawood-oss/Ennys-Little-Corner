import { useEffect, useRef, useState } from 'react'
import { littleNotes } from './content'
import InsideCorner from './components/InsideCorner'
import OpeningGate from './components/OpeningGate'
import SpotifyPlayer from './components/SpotifyPlayer'

const floaters = ['✿', '♡', '✦', '♡', '✿', '♡', '✦', '♡']

export default function App() {
  const [opened, setOpened] = useState(false)
  const [noteIndex, setNoteIndex] = useState(0)
  const spotifyRef = useRef(null)

  useEffect(() => {
    document.title = opened ? "A little note for Enyy ✿" : 'A little friend note for Enyy'
  }, [opened])

  const toggleLetter = () => {
    if (opened) {
      setOpened(false)
      spotifyRef.current?.stop()
      window.setTimeout(() => document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      return
    }
    setOpened(true)
    spotifyRef.current?.start()
    window.setTimeout(() => document.querySelector('#letter')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500)
  }

  const nextNote = () => setNoteIndex((current) => (current + 1) % littleNotes.length)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff0f6] text-[#432938]">
      <div className="floaters" aria-hidden="true">{floaters.map((item, index) => <span key={index} style={{ '--i': index }}>{item}</span>)}</div>
      <header className="fixed left-0 top-0 z-20 flex h-[82px] w-full items-center justify-between border-b border-[#eabfd3]/50 bg-[#fff0f6]/90 px-[7.2%] backdrop-blur-md max-[760px]:h-[70px] max-[760px]:px-[6%]">
        <a className="flex items-center gap-2.5 text-[10px] font-bold tracking-[.14em] text-[#512b40]" href="#top"><span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-[#f8d5e5] text-[#a83f76]">✿</span>ENYY'S LITTLE MUSIC NOTE.</a>
        <SpotifyPlayer ref={spotifyRef} />
      </header>
      <OpeningGate onOpen={toggleLetter} opened={opened} />
      {opened && <InsideCorner noteIndex={noteIndex} onNextNote={nextNote} onPlaySong={() => spotifyRef.current?.start()} />}
    </div>
  )
}
