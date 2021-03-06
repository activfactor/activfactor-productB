export const CapString = (textString) => {
  if (textString && typeof(textString)==='string'){
    return textString.charAt(0).toUpperCase() + textString.slice(1);
  }
  return textString;
}

export const getValue = (value) => {
  if (value || value===0){
    return value;
  } else {
    return "0";
  }
}

export const getClass = (value) => {
  if (value){
    if (value > 0){
      return 'text-primary';
    } else if (value<0) {
      return 'text-danger';
    }
  } else if (value===0) {
    return 'text-secondary';
  }
}

export const getColor = (value) => {
  if (value && value!==0){
    return value<0 ? '#FF0000' : value>0 ? '#109CF1' : null
  }
}

export const getVariant = (value) => {
  if (value){
    if (value > 0){
      return 'primary';
    } else if (value<0) {
      return 'danger';
    }
  } else if (value===0) {
    return 'secondary';
  }
}