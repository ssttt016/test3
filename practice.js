/* 9번

var a;
var sum = 0;
for (a = 1; a < 20; a++) {
  if (a % 2 == 0 || a % 3 == 0) sum += a;
}
console.log(sum); */

/*  8번

var a;
var sum = 0;
for (a = 1; a < 20; a++) {
  if (a % 2 == 0) continue;
  if (a % 3 == 0) continue;
  sum += a;
}
console.log(sum); */

/* 7번
var a;
var sum = 0;
for (a = 0; a <= 9; a++) {
  sum += a;
}
console.log(sum); */

/* 6번

let a = 10;

while (a > 0) {
  if (a % 2 == 1) {
    console.log(a);
  }
  a--;
} */

/* 5번

let a = 0;

while (a < 9) {
  a++;
  if (a % 2 === 1) {
    continue;
  }
  console.log(a);
}
 */

/* let a = 1;

while (a < 10) {
  if (a % 2 == 1) {
    continue;
  }
  console.log(a);
  a++;
}
 */
