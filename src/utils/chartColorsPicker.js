export const getColorsByValue = (factor) => {
    switch(factor){
        case 'momentum':
            return '#3895FE'
        case 'value':
            return '#60DFC8'
        case 'size':
            return '#D6D6D6'
        case 'volatility':
            return '#A735F8'
        case 'investment':
            return '#004678'
        case 'profitability':
            return '#E82BC1'
        default:
            return '#29BEB0'
    }
}

export const getColorsArray = () => {
    return ['#3895FE', '#60DFC8', '#D6D6D6', '#A735F8', '#004678', '#4DF364', '#29BEB0' , '#07BFE0' , '#E82BC1' , '#A3AEF0' , '#E6C3D1' , '#E99FF1', '#D6EFD2']
}




// 3895FE 60DFC8 D6D6D6 A735F8 004678 4DF364 29BEB0