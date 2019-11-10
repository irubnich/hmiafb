// Converts a float into a "formtted price", e.g "18000.00" => "18,000.00"
const toPrice = (price) => {
  return price.valueOf().toFixed(2).replace(/./g, (c, i, a) => {
    return i && c !== "." && !((a.length - i) % 3) ? "," + c : c;
  })
}

// Gets a random element from an array
const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}


module.exports = {
  toPrice: toPrice,
  randomElement: randomElement
}
