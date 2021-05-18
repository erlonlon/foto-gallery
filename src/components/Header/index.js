import React from 'react'
import css from './css.module.css'

const Header = () => {

  return (
    <div>
      <h1 className={css.titulo}>Minha galeria de imagem em gatsby</h1>
      <p className={css.titulo + 'paragrafo1'}>Sistema do curso PwerSites</p>
    </div >
  )
}

export default Header