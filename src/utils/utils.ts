export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max + 1 - min));
