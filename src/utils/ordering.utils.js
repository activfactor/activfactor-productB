export const sortArray = (array, isDescending) => {
    return array && array.length>0 && array.sort((a,b) => isDescending ? b-a : a-b);
}