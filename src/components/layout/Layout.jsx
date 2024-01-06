import { Outlet } from 'react-router-dom'

import * as styles from './Layout.css'

import Sidebar from './Sidebar'
import Foorter from './Footer'

function Layout() {
  return (
    <div className={styles.app}>
      
      <div className={styles.app2}>
        <Sidebar />
        <div className={styles.appContent}>
          <Outlet />
        </div>
      </div>

      <Foorter />
    </div>
  )
}

export default Layout