export const CapString = (textString) => {
    return textString.charAt(0).toUpperCase() + textString.slice(1);
}

export const getValue = (value) => {
  if (value || value===0){
    return value;
  } else {
    return "---";
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