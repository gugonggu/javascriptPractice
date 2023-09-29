// 자연수 n이 주어질 때 n을 3진법으로 변환한 후 3진법 상에서 뒤집은 후에 그 3진법 숫자를 다시 10진법으로 변환한 숫자를 반환하는 문제입니다.
// 아래 풀이는 직접 숫자를 3진법으로 변환한 후 다시 10진법으로 변환한 풀이이고

function solution(n) {
    var answer = 0;
    let temp = [];
    while (n !== 0) {
        temp.push(n % 3);
        n = Math.floor(n / 3);
    }
    let square = temp.length - 1;
    for (let i = 0; i < temp.length; i++) {
        answer += 3 ** square * temp[i];
        square--;
    }
    return answer;
}

// 자바스크립트 내장함수를 통해 3진법으로 변환한 후 10진법으로 변환하는 코드입니다.
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
};
