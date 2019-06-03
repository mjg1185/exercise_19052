export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  let formatDate = new Date(dateToFormatTimeMillis);
  let sysDate= new Date(systemDateTimeMillis);
  if((formatDate - sysDate) == 0){
    //dates are the same
    return 'TODAY'; 
  }else{
    //dates are not the same, return formatted dateToFormatTimeMillis to DD/MM/YYYY
    return formatDate.getDate() + '/' + formatDate.getMonth() + '/' + formatDate.getFullYear();
  }
};
