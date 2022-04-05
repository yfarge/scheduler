export const toggle = (x, lst) => (
    lst.includes(x) ? lst.filter(y => y != x) : [x, ...lst]
);

export const mapValues = (fn, obj) => (
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]))
);