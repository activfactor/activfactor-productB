import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useApiInfo = (type) => {
    const api = useSelector(state => state.api);
    return useMemo(() => {
        const typeInfo = api[type];
        if (typeInfo){
            const {isLoading, error, done} = typeInfo;
            return [isLoading, error, done]
        }
        return [null, null, null]
    }, [type, api])
}