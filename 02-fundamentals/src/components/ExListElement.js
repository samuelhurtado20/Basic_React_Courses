import React from 'react'

export default function ExListElement(props) {
  return (
    <li key={props.element.id}><a href={props.element.web} rel="noreferrer" target="_blank">{props.element.name}</a></li>
  )
}
