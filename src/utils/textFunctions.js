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
  if (value || value===0){
    if (value >= 0){
      return 'text-primary';
    } else {
      return 'text-danger';
    }
  } else {
    return 'text-danger';
  }
}