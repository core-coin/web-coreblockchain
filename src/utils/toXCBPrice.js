export const toXCBPrice = (value) => {
  return (value / 10 ** value?.toString().length) * 10
}