class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = ['a', 'an', 'but', 'of', 'the', 'and', 'for', 'at', 'by', 'from']
    let newArr = []
    let stringArr = string.split(' ')
    for (let i = 0; i < stringArr.length; i++) {
      if (i == 0) {
        newArr.push( this.capitalize(stringArr[i]) )
      } else {
        if (exceptions.includes(stringArr[i])){
          newArr.push( stringArr[i])
        } else {
          newArr.push( this.capitalize(stringArr[i]))
        }
      }
    }
    return newArr.join(" ")
  }
}