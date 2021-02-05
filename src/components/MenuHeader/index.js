import { useState } from 'react';

import Menu from './Menu';
import Navbar from './Navbar';

const MenuHeader = ({ bgActive }) => {
    const [isOpen, setOpen] = useState(null);

    const handleClickMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <>
            <Navbar
                isOpen={isOpen}
                bgActive={bgActive}
                onClickMenu={handleClickMenu}
            />
            <Menu isOpen={isOpen} onClickMenu={handleClickMenu} />
        </>
    );
};

export default MenuHeader;
