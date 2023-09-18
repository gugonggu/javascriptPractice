// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 주어질 때 두 이진수의 합을 반환하는 문제입니다
// 2진수를 10진수로 변환하여 덧셈을 연산한 후 다시 2진수로 변환하여 반환했습니다.

function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// 진수 변환 방법

// 2진수
const bin = "11110111";
parseInt(bin, 2); // 2 -> 10
parseInt(bin, 2).toString(16); // -> 2 -> 10 -> 16

// 8진수
parseInt(bin, 8);
parseInt(bin, 8).toString(16); // 2 -> 8 -> 16

const num = 123;
num.toString(2); // 10 -> 2
num.toString(16); // 10 -> 16
