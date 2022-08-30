export const useRandom = () => {
  const fromArray = <T>(list: T[]) => {
    return list[~~(Math.random() * list.length)]
  }
  const integerRange = (min: number, max: number) => {
    return ~~(Math.random() * (max - min) + min)
  }
  const spliceArray = <T>(list: T[]) => {
    const index = ~~(Math.random() * list.length)
    return list.splice(index, 1)[0]
  }
  return {
    fromArray,
    spliceArray,
    integerRange,
  }
}
