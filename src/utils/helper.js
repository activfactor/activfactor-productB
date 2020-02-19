export const isObjectEmpty = (object) => typeof(object)==='undefined' || !Object.keys(object).length;

export const isAmountCorrect = (value) => {
    const numberReg = /^[+-]?\d+(\.\d+)?$/;
    if (value.match(numberReg)){
        return true;
    }
    return false;
}

export const isFloat = (value) => {
    const baseValidation = "1234567890.";
    return baseValidation.includes(value[value.length-1]) || value==="";
}