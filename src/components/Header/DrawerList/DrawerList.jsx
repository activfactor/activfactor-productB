import React,{useCallback} from 'react';
import { ListItem, ListItemText, List, Divider } from '@material-ui/core';
import NavigationLink from '../../MaterialUIs/NavigationLink';
import { useCustomStyles, IconWrapper, ControlWrapper } from './style';
import PropTypes from 'prop-types';
import SearchField from '../../MaterialUIs/SearchField';
import Button from '../../MaterialUIs/Button';
import WealthfaceIcon from '../../Icons/assets/logo';


const DrawerList = ({routes, anchor, toggleDrawer}) => {
    const classes = useCustomStyles();
    const getNavigationLinkComp = useCallback((route) => {
        const {label, to} = route;
        const CustomLink = () => <NavigationLink label={label} to={to} />
        return (
          <ListItem
              button
              key={route.label}
              component={CustomLink}
          >
              <ListItemText primary={route.label} />
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
          <SearchField placeholder="Search for stocks" fullWidth={true}/>
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