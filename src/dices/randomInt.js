export const randomInt = (min, max) => {
  let result = min + Math.floor((max + 1 - min) * Math.random())
  console.log(result)
  return result
}
