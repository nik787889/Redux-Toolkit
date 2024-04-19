// // //
import React, { useState } from 'react'
// import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import FilteredProducts from './FilteredProducts';

const SidebarComp = () => {

    const navigate = useNavigate()

    const [toggled, setToggled] = useState(false);

    return (
        <div>

            <div style={{ display: 'flex', height: '100%', opacity: "1" }}>
                <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                    <h1><MdCancel onClick={() => setToggled(false)} style={{ display: "flex", float: "right", zIndex: "5", position: "relative", color: "red" }} /></h1>
                    <Menu>
                        <MenuItem onClick={() => navigate('/')}> Home</MenuItem>
                        <FilteredProducts/>
                        <MenuItem onClick={() => navigate('/cart')}> Cart</MenuItem>
                        <MenuItem onClick={() => navigate('/signin')}> Signin</MenuItem>
                        <MenuItem onClick={() => navigate('/signup')}> Logout</MenuItem>
                    </Menu>
                </Sidebar>
                <main style={{ display: 'flex', padding: 10 }}>
                    <div>
                        <h1> <AiOutlineBars onClick={() => setToggled(!toggled)} /></h1>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default SidebarComp
