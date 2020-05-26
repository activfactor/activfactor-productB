import React, {useState, useCallback, useEffect} from 'react';
import { Logo } from '../Icons';
import { StyledAppBar, StyledToolBar, DesktopNavigationContainer, MobileNavigationContainer } from './style';
import {Drawer, Link} from '../MaterialUIs';
import AutoCompleteTickers from '../Custom/Navigation/AutoCompleteTickers';
import Navigations from './Navigations';
import { routes } from 'config/appConfig';
import DrawerList from './DrawerList/DrawerList';
import { useDispatch, useSelector } from 'react-redux';
import { getTickersList } from 'store/actions/navigation.actions';

const Header = () => {
    const [opened, setOpened] = useState(false);
    const dispatch = useDispatch();
    const {tickers} = useSelector(state => state.navigation);

    useEffect(() => {
        if (!tickers){
            dispatch(getTickersList())
        }
    }, [dispatch, tickers]);

    const toggleDrawer = useCallback((open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpened(open);
      }, []);

    return (
        <StyledAppBar position="static" color="primary">
            <StyledToolBar style={{padding: '0px'}} component="div">
                <Logo withPointer={true} color="primary" />
                <DesktopNavigationContainer>
                    <AutoCompleteTickers />
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