import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import * as styles from './Layout.css'

import ThemeSwitcher from '../features/ThemeSwitcher'
import Sidebar from './Sidebar'
import Foorter from './Footer'

function Layout() {
  const [themeColor, setThemeColor] = useState('');

  return (
    <div className={styles.app}>

      <div className={styles.app2}>
        <Sidebar />
        <ThemeSwitcher themeColor={themeColor} setThemeColor={setThemeColor}/>
        <div className={styles.appContent}>
          <Outlet />
        </div>
      </div>

      <Foorter />
    </div>
  )
}

export default Layout