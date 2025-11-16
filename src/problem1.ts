type Value = string | number | boolean;

const formatValue = <T extends Value>(value: T): T => {
  if (typeof value === "string") {
    return value.toUpperCase() as T;
  } else if (typeof value === "number") {
    return (value * 10) as T;
  } else {
    return !value as T;
  }
};

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
