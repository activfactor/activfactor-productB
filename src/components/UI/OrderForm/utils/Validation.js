export default  (values, userCanDisableMargin) => {
    console.log(values);
    if (values){
      if (!values.orderAction || values.orderAction==='-'){
        console.log('1')
        return true
      }
      if (!values.orderQuantity || typeof(Number(values.orderQuantity))!=='number'){
        console.log('2')
        return true;
      }
      if (!values.orderPriceType || values.orderPriceType==='-'){
        console.log('3')
        return true;
      }
      if (!values.orderExpiration || values.orderExpiration==='-'){
        console.log('4')
        return true;
      }
      if ((values.orderPriceType==='limit' || values.orderPriceType==='stopLimit') && (!values.orderLimitPrice || typeof(Number(values.orderLimitPrice))!=='number')){
        console.log('5')
        return true;
      }
      if ((values.orderPriceType==='stopMarket' || values.orderPriceType==='stopLimit') && (!values.orderStopPrice || typeof(Number(values.orderStopPrice))!=='number')){
        console.log('6')
        return true;
      }
      if (userCanDisableMargin && (!values.userDisabledMargin || values.userDisabledMargin==='-')){
        console.log('7')
        return true;
      }
      if (!values.orderQuantityType || values.orderQuantityType==='-'){
        console.log('8')
        return true;
      }
      return false;
    } else {
      return true
    }
  }