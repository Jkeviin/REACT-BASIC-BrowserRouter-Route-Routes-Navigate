import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Nav() {
  return (
    <nav>
      <NavLink className={
        ({ isActive }) => (isActive ? "activado" : null)} to="/">Pagina1</NavLink>{/* Esto reemplaza el href de la etiqueta <a> en el html. */}
      <NavLink className={
        ({ isActive }) => (isActive ? "activado" : null)} to="/pagina2">Pagina2</NavLink>
      <NavLink className={
        ({ isActive }) => (isActive ? "activado" : null)} to="/pagina3">Pagina3</NavLink>
      <NavLink className={
        ({ isActive }) => (isActive ? "activado" : null)} to="/pagina4/G">Pagina4</NavLink>  
    </nav>
  )
}
