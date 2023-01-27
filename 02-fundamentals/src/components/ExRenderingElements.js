import React, { useState } from 'react'
import data from '../helpers/data.json'
import ExListElement from './ExListElement';

export default function ExRenderingElements() {

    const [seasons] = useState(["Spring", "Summer", "Fall", "Winter"]);
    
  return (
    <div>
        <h1>ExRenderingElements</h1>
        <ol>
            {
                seasons.map((e, i) => <li key={i}>{ e }</li>)
            }
        </ol>

        <h3>Render list, frameworks</h3>
        <ul>
          {
            data.frameworks.map( (f) => <ExListElement key={f.id} element={f} />)
          }
        </ul>
    </div>
  )
}
