import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import customerBg from '../assets/customer-bg.svg'
import customerImg from '../assets/customer-img.svg'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src={customerBg}
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src={customerImg} />

        <strong>Tiago Pires</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}