import React from 'react'
import { Link} from 'react-router-dom'
/*
  Link es un componente que nos permite crear enlaces que nos llevan a otras páginas.
*/

export default function C() {
  return (
    <div>
      C
      <Link to="/pagina2">Ir a Pagina 2</Link>
    </div>
  )
}
