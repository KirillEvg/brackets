module.exports = function check(str, bracketsConfig) {
  let k = "";

  while(k !== str) {
    k = str;

    bracketsConfig.forEach(e => {
      let r = e.join("");
      let newStr = str.replace(r,"");
      
      str = newStr;
    });
  }
  return !str;
}
