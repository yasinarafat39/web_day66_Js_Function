function isEven(number) {
  if (typeof number === "number") {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please give a number only";
  }

// return (typeof number);
}

const even = isEven('20');
console.log(even); 