import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import * as styles from './Layout.css'

import ThemeSwitcher from '../features/ThemeSwitcher'
import Sidebar from './Sidebar'
import Foorter from './Footer'

function Layout({ sectionRefs }) {
  const [themeColor, setThemeColor] = useState('');

  return (
    <div className={styles.app}>
      <ThemeSwitcher themeColor={themeColor} setThemeColor={setThemeColor}>
      </ThemeSwitcher>
      <div className={styles.app2}>
        <Sidebar sectionRefs={sectionRefs} />
        <div className={styles.appContent}>
          <Outlet />
        </div>
      </div>

      <Foorter />
    </div>
  )
}

export default Layout