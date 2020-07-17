interface Point {
  x: number;
  y: number;
}
// type keys = 'x' | 'y'
type keys = keyof Point


function getName<T extends object, k extends keyof T>(o: T, name: K):T[K] {
  return o[name]
}