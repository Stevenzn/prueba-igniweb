 module.exports.finalDate = (addDay) => {
  const { dateFormat } = require("./date");
  let date = new Date();
  date.setDate(date.getDate() + parseInt(addDay));
  return dateFormat(date)
}

module.exports.dateFormat= (date)=> {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return day + "/" + month + "/" + year;
} 

