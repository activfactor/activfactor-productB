export const formatDecimal = (number, decimalNo) => {
  if (number) {
    const formatedNumber = Number(number);
    if (!isNaN(formatedNumber)) {
      return formatedNumber.toFixed(decimalNo);
    }
    return number;
  }
  return number;
};

export const isEmpty = (value) => {
  return (
    typeof value === "undefined" ||
    value === '' ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    value.length === 0
  );
};

export const formatNumberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getColor = (value) => {
  if (value && value !== 0) {
    return value < 0 ? "#FF0000" : value > 0 ? "#109CF1" : null;
  }
};

export const getValue = (value) => {
  if (value || value === 0) {
    return `${value}`;
  } else {
    return "0";
  }
};

export const convertToK = (value) => {
    if (value){
        if (value>999){
            return `${formatNumberWithCommas(value/1000)}K`
        }
        return value
    }
    return value
}

export const filterObject = (obj, keyToRemove) => {
    let result = {};
    if (!isEmpty(obj)){
      Object.keys(obj).forEach(key => {
        if(key!==keyToRemove){
          result[key]=obj[key]
        }
      })
    }
    return result;
}
