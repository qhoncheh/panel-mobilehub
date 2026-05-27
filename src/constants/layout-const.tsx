import type { JSX } from "react";
import SvgDashboard from "../icons/SvgDashboard";
import SvgTools from "../icons/SvgTool";
import Svgabzar from "../icons/Svgabzar";
import Svgmap from "../icons/Svgmap";
import SvgSetting from "../icons/SvgSetting";

export type SubMenuItem = {
    title: string;
};

export type MenuItem = {
    title: string;
    icon: JSX.Element;
    submenu?: SubMenuItem[];
};

export const menu: MenuItem[] = [
    {
        title: 'داشبورد',
        icon: <SvgDashboard />,
        submenu: [
            { title: 'صفحه اول' },
            { title: 'گزارش‌ها' },
            { title: 'آنالیتیکس' },
        ],
    },
    {
        title: 'اپلیکیشن',
        icon: <SvgTools />,
        submenu: [
            { title: 'پروفایل' },
            { title: 'امنیت' },
        ],
    },
    {
        title: 'ابزارها',
        icon: <Svgabzar />,
        submenu: [
            { title: 'پروفایل' },
            { title: 'امنیت' },
        ],
    },
    {
        title: 'نقشه',
        icon: <Svgmap />
    },
    {
        title: 'تنظیمات',
        icon: <SvgSetting />,
        submenu: [
            { title: 'پروفایل' },
            { title: 'امنیت' },
        ],
    },
];
