function vaatKhao() {
  console.log("Please Vat Khao BABA");
}

vaatKhao();

// 3 ---> 3*3 = 9
// 4 ----> 4*4 = 16
// 5 ---> 5*5 = 25
// 11 ---> 11*11 = 121

function square(num) {
  if (num) {
    const square = num * num;
    console.log(`The square of ${num} is: ${square}`);
  } else {
    console.log("Num na dile square korbo kivabe?");
  }
}

square(20)
