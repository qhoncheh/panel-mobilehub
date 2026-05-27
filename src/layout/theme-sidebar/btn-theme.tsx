import type { Dispatch, SetStateAction } from "react";

interface BtnThemeProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>> | ((theme: string) => void);
}

const BtnTheme = ({ setTheme, theme }: BtnThemeProps) => {
    return (
        <div className="sideBar-theme-inner">
            <button
                onClick={() => setTheme('light')}
                className={theme === 'light' ? 'sideBar-theme-inner-btn-active' : ''}
            >
                روشن
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={theme === 'dark' ? 'sideBar-theme-inner-btn-active' : ''}
            >
                تاریک
            </button>
        </div>
    );
};

export default BtnTheme;
