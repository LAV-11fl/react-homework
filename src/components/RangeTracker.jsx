import { useRef, useState } from 'react'

function RangeTracker() {
  const [value, setValue] = useState(50)
  const [changeInfo, setChangeInfo] = useState('Move the slider to compare values')
  const previousValue = useRef(50)

  function changeValue(event) {
    const newValue = Number(event.target.value)
    const oldValue = previousValue.current
    let message = `Value did not change: ${newValue}`

    if (newValue > oldValue) {
      message = `Value increased from ${oldValue} to ${newValue}`
    } else if (newValue < oldValue) {
      message = `Value decreased from ${oldValue} to ${newValue}`
    }

    setValue(newValue)
    setChangeInfo(message)
    previousValue.current = newValue
  }

  return (
    <section className="range-practice" aria-labelledby="range-title">
      <div className="range-heading">
        <h2 id="range-title">VOLUME: {value}</h2>
        <p>{changeInfo}</p>
      </div>
      <label className="visually-hidden" htmlFor="volume-range">Volume</label>
      <input
        className="form-range"
        id="volume-range"
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={changeValue}
      />
    </section>
  )
}

export default RangeTracker