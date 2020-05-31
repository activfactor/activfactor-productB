import React,{useCallback} from 'react';
import { ListItem, List } from '@material-ui/core';
import NavigationLink from '../../MaterialUIs/NavigationLink';
import { useCustomStyles, IconWrapper, ControlWrapper } from './style';
import PropTypes from 'prop-types';
import AutoCompleteTickers from '../../Custom/Navigation/AutoCompleteTickers';
import WealthfaceIcon from '../../Icons/assets/logo';


const DrawerList = ({routes, anchor, toggleDrawer}) => {
    const classes = useCustomStyles();
    const getNavigationLinkComp = useCallback((route) => {
        const {label, to} = route;
        return (
          <ListItem
              button
              key={route.label}
              component="div"
              disableTouchRipple={true}
          >
              <NavigationLink label={label} to={to} />
          </ListItem>
        )
    }, []);
    
    const getListItems = useCallback(() => {
        const {list, fullList} = classes;
        if (routes && routes.length>0){
            return (
              <div
                className={['top','bottom'].includes(anchor) ? fullList : list}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {routes.map((route => (
                    getNavigationLinkComp(route)
                  )))}
                  <ListItem
                      button
                      component="div"
                      disableTouchRipple={true}
                  >
                      <NavigationLink label="Logout" to="/logout" />
                  </ListItem>
                </List>
              </div>
            );
        }
    }, [getNavigationLinkComp, anchor, classes, routes, toggleDrawer]);

    return (
        <>
        <IconWrapper>
            <WealthfaceIcon fontSize="small"/>
          </IconWrapper>
          <ControlWrapper>
          <AutoCompleteTickers noMargin={true}/>
        </ControlWrapper>
        {getListItems()}
        </>
    )
};

DrawerList.protoTypes = {
    routes: PropTypes.array.isRequired,
    anchor: PropTypes.oneOf(['top','down','left','right']),
    toggleDrawer: PropTypes.func.isRequired
}

DrawerList.defaultProps = {
    anchor: 'left'
}

export default DrawerList