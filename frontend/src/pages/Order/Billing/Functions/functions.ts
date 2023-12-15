export const formatNumberWithTwoDecimals = (num:number)=> {

    let formattedNumber = parseFloat(num+'').toFixed(2);
    // Check if the number has no decimal places
    if (formattedNumber.indexOf('.') === -1) {
      formattedNumber += '.00';
    }
    return formattedNumber;
  }