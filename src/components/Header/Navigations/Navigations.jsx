import React from 'react';
import NavigationLink from '../../MaterialUIs/NavigationLink';
import { NavigationsWrapper } from '../style';
import PropTypes from 'prop-types';

const Navigations = ({routes}) => {
    if (routes && routes.length>0){
        return (
            <NavigationsWrapper>
                {routes.map(({label, to}) => <NavigationLink to={to} label={label}/>)}
            </NavigationsWrapper>
        );
    }
    return <></>
};

Navigations.propTypes = {
    routes: PropTypes.array
}

export default Navigations;