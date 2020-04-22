export default  (values, userCanDisableMargin) => {
    if (values){
      if (!values.orderAction || values.orderAction==='-'){
        return true
      }
      if (!values.orderQuantity || typeof(Number(values.orderQuantity))!=='number'){
        return true;
      }
      if (!values.orderPriceType || values.orderPriceType==='-'){
        return true;
      }
      if (!values.orderExpiration || values.orderExpiration==='-'){
        return true;
      }
      if ((values.orderPriceType==='limit' || values.orderPriceType==='stopLimit') && (!values.orderLimitPrice || typeof(Number(values.orderLimitPrice))!=='number')){
        return true;
      }
      if ((values.orderPriceType==='stopMarket' || values.orderPriceType==='stopLimit') && (!values.orderStopPrice || typeof(Number(values.orderStopPrice))!=='number')){
        return true;
      }
      if (userCanDisableMargin && (!values.userDisabledMargin || values.userDisabledMargin==='-')){
        return true;
      }
      if (!values.orderQuantityType || values.orderQuantityType==='-'){
        return true;
      }
      return false;
    } else {
      return true
    }
  }