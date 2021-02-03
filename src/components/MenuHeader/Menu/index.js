import cn from 'classnames';

import s from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        to: '',
    },
    {
        title: 'GAME',
        to: 'game',
    },
    {
        title: 'ABOUT',
        to: 'about',
    },
    {
        title: 'CONTACT',
        to: 'contact',
    },
];

const Menu = ({ isOpen }) => {
    return (
        <div
            className={cn(s.menuContainer, {
                [s.active]: isOpen === true,
                [s.deactive]: isOpen === false,
            })}
        >
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {MENU.map(({ title, to }, index) => (
                        <li key={index}>
                            <a href={to}>{title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
