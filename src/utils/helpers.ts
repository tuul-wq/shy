export function randomRange(from: number, to: number, pureValue: boolean = false) {
  const value = Math.random() * (to - from) + from;

  if (pureValue) {
    return value;
  }
  return Math.floor(Math.random() * (to - from)) + from;
}

export function randomColor() {
  return `rgba(
    ${randomRange(0, 255)},
    ${randomRange(0, 255)},
    ${randomRange(0, 255)},
    ${randomRange(0.4, 0.7, true)}
  )`;
}
