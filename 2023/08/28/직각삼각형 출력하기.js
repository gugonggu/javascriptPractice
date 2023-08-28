// 정수 n이 주어졌을 때 높이와 너비가 n인 직각 이등변 삼각형을 출력하는 문제였습니다.
// for문과 repeat을 이용해 반복해서 출력했습니다.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    for (let i = 1; i <= Number(input[0]); i++) {
        console.log("*".repeat(i));
    }
});
