// Converts a float into a "formtted price", e.g "18000.00" => "18,000.00"
export const toPrice = (price: number): string => {
  return price.valueOf().toFixed(2).replace(/./g, (c, i, a) => {
    return i && c !== "." && !((a.length - i) % 3) ? "," + c : c;
  })
};

// Gets a random element from an array
export const randomElement = <T>(array: Array<T>): T => {
  return array[Math.floor(Math.random() * array.length)];
};
