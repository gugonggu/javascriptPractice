// 덧셈, 뺄셈 수식이 "X 연산자 Y = Z"형태로 들어있는 문자열 배열 quiz가 주어질 때
// 해당 수식이 옳다면 O를, 틀리다면 X를 순서대로 담은 배열을 반환하는 문제입니다.
// quiz를 for 반복문으로 순회합니다.
// 각 요소를 공백을 기준으로 분리한 배열로 저장하고,
// 연산자 자리에 있는 요소가 +인지 -인지 반별합니다
// 연산자를 판별한 후 연산을 진행해서 연산이 맞으면 O를 넣고, 틀리면 X를 넣습니다.

function solution(quiz) {
    var answer = [];
    for (let equation of quiz) {
        equation = equation.split(" ");
        if (equation[1] === "+") {
            Number(equation[0]) + Number(equation[2]) === Number(equation[4])
                ? answer.push("O")
                : answer.push("X");
        } else {
            Number(equation[0]) - Number(equation[2]) === Number(equation[4])
                ? answer.push("O")
                : answer.push("X");
        }
    }
    return answer;
}
