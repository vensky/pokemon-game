import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './style.module.css';

const Navbar = ({ isOpen, bgActive = false, onClickMenu }) => {
    return (
        <nav className={cn(s.navbar, { [s.bgActive]: bgActive })}>
            <div className={s.navWrapper}>
                <div className={s.brand}>
                    <Link to='/'>POKEMON GAME</Link>
                </div>
                <button
                    className={cn(s.menuButton, { [s.active]: isOpen })}
                    onClick={onClickMenu}
                    type='button'
                >
                    <span />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
