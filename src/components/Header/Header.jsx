import React, {useState, useCallback} from 'react';
import { Logo } from '../Icons';
import { StyledAppBar, StyledToolBar, DesktopNavigationContainer, MobileNavigationContainer } from './style';
import SearchField from '../MaterialUIs/SearchField';
import Navigations from './Navigations';
import Button from '../MaterialUIs/Button';
import Drawer from '../MaterialUIs/Drawer';
import { routes } from 'constants/endpoints';
import DrawerList from './DrawerList/DrawerList';
import Link from '../MaterialUIs/Link';

const Header = () => {
    const [opened, setOpened] = useState(false);

    const toggleDrawer = useCallback((open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        console.log(open);
        setOpened(open);
      }, []);

    return (
        <StyledAppBar position="static" color="primary">
            <StyledToolBar component="div">
                <Logo withPointer={true} color="primary" />
                <DesktopNavigationContainer>
                    <SearchField placeholder="Search for stocks" />
                    <Navigations routes={routes}/>
                    <Link label="logout" to="/logout" />
                </DesktopNavigationContainer>
                <MobileNavigationContainer>
                    <Drawer routes={routes} anchor="left" toggleDrawer={toggleDrawer} opened={opened}>
                        <DrawerList routes={routes} anchor="left" toggleDrawer={toggleDrawer}/>
                    </Drawer>
                </MobileNavigationContainer>
            </StyledToolBar>
        </StyledAppBar>
    );
};

export default Header;