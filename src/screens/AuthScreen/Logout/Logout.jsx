import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from 'store/actions/auth';

const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(signOut())
    })
    return (
        <></>
    );
};

export default Logout;