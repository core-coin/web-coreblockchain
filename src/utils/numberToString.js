export default function numberToString(number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")

}