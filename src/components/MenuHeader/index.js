import { useState } from 'react';

import Menu from './Menu';
import Navbar from './Navbar';

const MenuHeader = () => {
    const [showMenu, setActive] = useState(true);

    const handleClickMenu = (isActive) => {
        setActive(isActive);
    };

    return (
        <>
            <Navbar onClickMenu={handleClickMenu} />
            <Menu showMenu={showMenu} />
        </>
    );
};

export default MenuHeader;
