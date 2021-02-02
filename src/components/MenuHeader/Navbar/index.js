import { useState } from 'react';
import cn from 'classnames';

import s from './style.module.css';

const Navbar = ({ onClickMenu }) => {
    const [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive);
        onClickMenu && onClickMenu(isActive);
    };

    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>LOGO</p>
                <a
                    className={cn(
                        s.menuButton,
                        isActive ? s.active : s.deactive
                    )}
                    onClick={handleClick}
                >
                    <span />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
