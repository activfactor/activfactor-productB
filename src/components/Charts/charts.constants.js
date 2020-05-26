export const chartColors = [
  "#3895FE",
  "#60DFC8",
  "#D6D6D6",
  "#A735F8",
  "#004678",
  "#4DF364",
  "#29BEB0",
  "#07BFE0",
  "#E82BC1",
  "#A3AEF0",
  "#E6C3D1",
  "#E99FF1",
  "#D6EFD2",
];

export const getColorByIndex = (index) => {
  switch(index){
    case 0:
      return '#3895FE'
    case 1:
      return '#60DFC8'
    case 2:
      return '#D6D6D6'
    case 3:
      return '#A735F8'
    case 4:
      return '#004678'
    case 5:
      return '#4DF364'
    case 6:
      return '#29BEB0'
    case 7:
      return '#07BFE0'
    case 8:
      return '#E82BC1'
    case 9:
      return '#A3AEF0'
    default:
      return '#D6EFD2'

  }
}

export const size = {
  height: 300
}
