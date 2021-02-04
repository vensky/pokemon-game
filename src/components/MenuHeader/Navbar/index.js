import cn from "classnames";

import s from "./style.module.css";

const Navbar = ({ isOpen, bgActive = false, onClickMenu }) => {
    return (
        <nav className={cn(s.navbar, { [s.bgActive]: bgActive })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>POKEMON GAME</p>
                <button
                    className={cn(s.menuButton, { [s.active]: isOpen })}
                    onClick={onClickMenu}
                    type="button"
                >
                    <span />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
