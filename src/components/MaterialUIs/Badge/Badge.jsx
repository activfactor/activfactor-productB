import React from 'react';
import { StyledChip } from './style';
import PropTypes from 'prop-types';

const Badge = ({avatar, handleClick, variant, deleteIcon, color, label, handleDelete, width, clickable, fontSize, margin}) => {
    return (
        <StyledChip
            avatar={avatar}
            label={label}
            onClick={handleClick}
            variant={variant}
            onDelete={handleDelete}
            deleteIcon={deleteIcon}
            color={color}
            width={width}
            clickable={clickable}
            fontSize={fontSize}
            margin={margin}
        />
    );
};

Badge.propTypes = {
    avatar: PropTypes.node,
    handleClick: PropTypes.func,
    variant: PropTypes.oneOf(['default','outlined']),
    onDelete: PropTypes.func,
    deleteIcon: PropTypes.node,
    color: PropTypes.oneOf(['primary','secondary']),
    width: PropTypes.string,
    clickable: PropTypes.bool,
    fontSize: PropTypes.string,
    margin: PropTypes.string
}

Badge.defaultProps = {
    clickable: false
}

export default Badge;