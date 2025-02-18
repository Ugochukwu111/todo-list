let numbers = 1

for (let i = 10; i >= 1 ; i--) {
  console.log(i)

}



function multiplication(num, n) {
  for (let i = 1;  i <= n ; i++) {
    let answer = num * i;
    let outPut = (`${num} * ${i} = ${answer}`);
    console.log(outPut)
  
  }
}

multiplication(5, 12)