import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { spotifyTrack } from '../content'

const SpotifyPlayer = forwardRef(function SpotifyPlayer(_, ref) {
  const mountRef = useRef(null)
  const playerWrapRef = useRef(null)
  const controllerRef = useRef(null)
  const controllerRequestedRef = useRef(false)
  const pendingPlayRef = useRef(false)
  const spotifyReadyRef = useRef(false)
  const [expanded, setExpanded] = useState(false)

  const revealPlayer = () => {
    playerWrapRef.current?.classList.remove('is-concealed')
    playerWrapRef.current?.classList.add('is-visible')
    setExpanded(true)
  }

  const concealPlayer = () => {
    playerWrapRef.current?.classList.remove('is-visible')
    playerWrapRef.current?.classList.add('is-concealed')
    setExpanded(false)
  }

  useImperativeHandle(ref, () => ({
    start() {
      revealPlayer()
      if (controllerRef.current && spotifyReadyRef.current) {
        try { controllerRef.current.play() } catch { /* Spotify keeps its own play control available. */ }
      } else {
        pendingPlayRef.current = true
      }
    },
    stop() {
      pendingPlayRef.current = false
      concealPlayer()
      if (controllerRef.current && spotifyReadyRef.current) {
        try { controllerRef.current.pause() } catch { /* Spotify keeps its own pause control available. */ }
      }
    },
  }), [])

  useEffect(() => {
    const initializeSpotify = (iframeApi) => {
      if (!mountRef.current || controllerRef.current || controllerRequestedRef.current) return
      if (typeof iframeApi?.createController !== 'function') return

      controllerRequestedRef.current = true
      try {
        iframeApi.createController(
          mountRef.current,
          { width: '100%', height: '152', uri: 'spotify:track:7zFio8WT0tTBqLs1pXYKqy' },
          (controller) => {
            controllerRef.current = controller
            controller.addListener('ready', () => {
              spotifyReadyRef.current = true
              if (pendingPlayRef.current) {
                pendingPlayRef.current = false
                try { controller.play() } catch { /* Spotify keeps its own play control available. */ }
              }
            })
          },
        )
      } catch (error) {
        controllerRequestedRef.current = false
        console.error('Spotify player initialization failed:', error)
      }
    }

    const handleSpotifyApiReady = () => initializeSpotify(window.spotifyIframeApi)
    window.addEventListener('spotify-iframe-api-ready', handleSpotifyApiReady)
    if (window.spotifyIframeApi) initializeSpotify(window.spotifyIframeApi)
    return () => window.removeEventListener('spotify-iframe-api-ready', handleSpotifyApiReady)
  }, [])

  const showPlayer = () => {
    revealPlayer()
    if (controllerRef.current && spotifyReadyRef.current) {
      try { controllerRef.current.play() } catch { /* Spotify controls remain available. */ }
    } else {
      pendingPlayRef.current = true
    }
  }

  return (
    <div className="relative">
      <button className="flex items-center gap-2 rounded-full border border-[#e7b8d0] bg-[#fff7fb]/85 px-[15px] py-2.5 text-[11px] text-[#8f3568] transition hover:-translate-y-0.5 hover:bg-white" onClick={showPlayer} type="button" aria-expanded={expanded} aria-controls="spotify-player-wrap"><span aria-hidden="true">♫</span><span>{expanded ? 'We Hug Now · Spotify' : 'Listen to We Hug Now'}</span></button>
      <div ref={playerWrapRef} id="spotify-player-wrap" className={`spotify-player is-concealed absolute right-0 top-12 z-30 w-[min(360px,calc(100vw-32px))] overflow-hidden rounded-xl border border-[#e8c8d8] shadow-[0_12px_34px_rgba(130,53,99,.18)] transition duration-300`} aria-hidden={!expanded}>
        <div ref={mountRef} aria-label="Spotify player for We Hug Now by Sydney Rose" />
        <p className="m-0 bg-[#fff8fb] px-3 pt-2 text-[9px] leading-4 text-[#805a70]">If Spotify doesn’t start on its own, tap ▶ in the player.</p>
        <a href={spotifyTrack} target="_blank" rel="noreferrer" className="block bg-[#fff8fb] px-3 py-2 text-right font-mono-ui text-[9px] uppercase tracking-[.08em] text-[#a23870]">open in Spotify ↗</a>
      </div>
    </div>
  )
})

export default SpotifyPlayer
