import React from 'react';
import { Error, FeedBack ,Wrapper, Message } from './style';
import PropTypes from 'prop-types';

const FeedBackAlert = ({message, isError}) => {
    return (
        <Wrapper>
            {isError ? <Error /> : <FeedBack />}
            <Message component="h1">{message}</Message>
        </Wrapper>
    );
};

FeedBackAlert.propTypes = {
    message: PropTypes.string,
    isError: PropTypes.bool
}

FeedBackAlert.defaultProps = {
    message: 'No data to display',
    isError: false
}
export default FeedBackAlert;