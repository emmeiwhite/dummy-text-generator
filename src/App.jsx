import { useState } from 'react'
import data from './data'

import { nanoid } from 'nanoid'

const App = () => {
  const [totalCount, setTotalCount] = useState(1)
  const [totalParas, setTotalParas] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    setTotalCount(paras => {
      const selectedParas = data.slice(0, totalCount * 1)
      setTotalParas(selectedParas)
    })
  }

  return (
    <section className="section-center">
      <h4>No more boring lorem ipsum text</h4>

      <form
        className="lorem-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="10"
          value={totalCount}
          onChange={e => setTotalCount(e.target.value)}
        />

        <button
          className="btn"
          type="submit"
        >
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {totalParas.map((text, index) => {
          return <p key={nanoid()}>{text}</p>
        })}
      </article>
    </section>
  )
}
export default App
