/* eslint-disable no-param-reassign */
import * as S from './styles';

export default function ProgressBar({ audioRef, setAudioProgress, audioProgress
}) {

  const handleRewind = (event) => {
    setAudioProgress(event.target.value)
    audioRef.current.currentTime = (event.target.value * audioRef.current.duration) / 100
  }

  return (
    <S.ProgressInput
      type="range"
      value={audioProgress}
      step={0.01}
      onChange={handleRewind}
      $color="#B672FF"/>
  )
}