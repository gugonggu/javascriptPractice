// 문자열로 된 수식 my_string이 주어졌을 때
// 해당 수식을 풀어서 반환하는 문제입니다.
// operator란 변수를 생성해 연산자를 저장합니다.
// my_string을 공백을 기준으로 배열로 변환하고
// for 반복문을 돌려 요소가 연산자면 연산자를 바꾸고, 연산자가 아니면 연산자에 저장되어있는대로 연산을 수행합니다.

function solution(my_string) {
    let answer = 0;
    let operator = "+";
    my_string = my_string.split(" ");
    for (let i = 0; i < my_string.length; i++) {
        if (isNaN(my_string[i])) {
            operator = my_string[i];
        } else {
            operator === "+"
                ? (answer += Number(my_string[i]))
                : (answer -= Number(my_string[i]));
        }
    }
    return answer;
}
