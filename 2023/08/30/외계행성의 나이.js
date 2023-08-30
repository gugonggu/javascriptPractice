// 나이를 나타내는 자연수 age가 주어졌을 때
// 0은 a, 1은 b, 2는 c 이런식으로 숫자를 알파벳으로 변환해서 반환하는 문제였습니다.

// 배열 메서드를 사용하기위해 숫자로 주어진 age를 문자열로 변환하고 다시 배열로 변환시켰고
// map 메서드를 이용해 각 요소마다 뒤에 오는 함수를 동작시킵니다.
// 함수는 요소를 숫자로 변환시켜 97을 더한뒤 그 숫자에 맞는 아스키코드 문자를 반환해 answer에 추가합니다.

function solution(age) {
    var answer = "";
    [...age.toString()].map(
        (v) => (answer += String.fromCharCode(Number(v) + 97))
    );
    return answer;
}
