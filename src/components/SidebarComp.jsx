// // //
import React, { useState } from 'react'
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';

const SidebarComp = () => {

    const navigate = useNavigate()

    const [toggled, setToggled] = useState(false);

    return (
        <div>

            <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
                <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                   <h1><GoSidebarExpand onClick={()=>setToggled(false)}/></h1>
                    <Menu>
                        <MenuItem onClick={()=>navigate('/')}> Home</MenuItem>
                        <MenuItem onClick={()=>navigate('/cart')}> Cart</MenuItem>
                        <MenuItem onClick={()=>navigate('/signin')}> Signin</MenuItem>
                        <MenuItem onClick={()=>navigate('/signup')}> Logout</MenuItem>
                    </Menu>
                </Sidebar>
                <main style={{ display: 'flex', padding: 10 }}>
                    <div>
                        <button className="sb-button" onClick={() => setToggled(!toggled)}>
                           <h1> <GoSidebarCollapse /></h1>
                        </button>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default SidebarComp
