import React from 'react'
import { useParams } from 'react-router-dom'

export default function D() {
  const dato = useParams()
  return (
    <div>{dato.letra}</div>
  )
}
