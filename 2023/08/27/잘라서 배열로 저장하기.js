// 문자열과 정수 n이 주어졌을 때, 문자열을 n만큼 잘라서 저장한 배열을 반환하는 문제였습니다.

// 첫 번째 풀이입니다.
// 자바스크립트를 배열을 이용해 푸는게 익숙해서 처음에는 문자열을 배열로 변환하고
// temp라는 배열에 문자를 하나씩 넣은 뒤 temp의 길이가 n과 같거나, i가 문자열의 길이와 같을 때
// 문자열로 변환한 배열 temp를 answer에 넣어서 문제를 풀었습니다.

function solution(my_str, n) {
    my_str = my_str.split("");
    var answer = [];
    let temp = [];
    for (let i = 0; i < my_str.length; i++) {
        temp.push(my_str[i]);
        if (i === my_str.length - 1 || temp.length === n) {
            answer.push(temp.join(""));
            temp = [];
        }
    }
    return answer;
}

// 두 번째 풀이입니다.
// 첫 번째 풀일 문제를 풀고 난 뒤 굳이 위와 같은 방법으로 문제를 풀 필요가 없을 것 같아서
// 그냥 slice를 사용해서 문제를 풀었습니다.

function solution(my_str, n) {
    var answer = [];
    for (let i = 0; i < my_str.length; i += n) {
        answer.push(my_str.slice(i, i + n));
    }
    return answer;
}
