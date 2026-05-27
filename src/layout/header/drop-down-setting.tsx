import { useState, type Dispatch, type SetStateAction } from "react";
import BtnTheme from "../theme-sidebar/btn-theme";

interface DropDownSettingProps {
    visibleDrop: boolean;
    setVisibleDrop: Dispatch<SetStateAction<boolean>>;
}

const DropDownSetting = ({ visibleDrop, setVisibleDrop }: DropDownSettingProps) => {
    const [language, setLanguage] = useState<string>('fa');
    const [theme, setTheme] = useState<string>('dark');

    const languageList = [
        { title: 'فارسی', simbol: 'fa' },
        { title: 'انگلیسی', simbol: 'en' },
        { title: 'آلمانی', simbol: 'de' },
    ];

    return (
        <>
            <div
                onClick={() => setVisibleDrop(false)}
                className={`drop-settings-bg ${visibleDrop ? 'drop-settings-bg-active' : ''}`}
            >
            </div>
            <div className={`drop-settings ${visibleDrop ? 'drop-settings-active' : ''}`}>
                <div className="drop-settings-top">
                    {languageList.map((item, index) =>
                        <button
                            key={index}
                            onClick={() => setLanguage(item.simbol)}
                            className={`drop-settings-top-item ${language === item.simbol ? 'drop-settings-top-item-active' : ''}`}
                        >
                            {item.title}
                        </button>
                    )}
                </div>

                <div className="drop-settings-bottom">
                    <BtnTheme setTheme={setTheme} theme={theme} />
                </div>
            </div>
        </>
    );
};

export default DropDownSetting;
