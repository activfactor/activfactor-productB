import React from 'react';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useStyles } from './style';
import PropTypes from 'prop-types';

const SearchField = ({placeholder, onChange, onFocus, fullWidth, ...rest}) => {
    const { searchIcon, inputInput, inputRoot, search } = useStyles();
    return (
        <div className={search} style={{width: fullWidth ? '100%' : 'auto', marginLeft: fullWidth ? '' : '32px'}}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={placeholder}
              onChange={onChange}
              onFocus={onFocus}
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              {...rest}
            />
          </div>
    );
};

SearchField.protoTypes = {
    placeholder: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    fullWidth: PropTypes.bool,
    rest: PropTypes.any
}

SearchField.defaultProps = {
    placeholder: 'Search',
    fullWidth: false
}

export default SearchField;