import { useState } from "react"

export const ThemeSidebar = () => {
    const [theme, setTheme] = useState('dark')
    return (
        <>
            <div className="sideBar-theme">
                <div className="sideBar-theme-inner">
                    <button onClick={()=> setTheme('light')}  className={`${theme === 'light' && 'sideBar-theme-inner-btn-active'}`}>روشن</button>
                    <button onClick={() => setTheme('dark')} className={`${theme === 'dark' && 'sideBar-theme-inner-btn-active'}`}>تاریک</button>
                </div>
            </div>
        </>
    )
}
