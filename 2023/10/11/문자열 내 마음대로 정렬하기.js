// 문자열로 구성된 리스트 strings와 정수 n이 주어질 때
// 문자열 내의 n번째 인덱스로 문자들을 정렬하는 문제입니다.
// 만약 n번째 인덱스의 문자가 같다면, 문자열 자체를 기준으로 정렬합니다

// 먼저 map을 이용하여 문자열 배열 내의 문자열들을 모두 배열로 변환시키고
// sort를 이용하여 인덱스 n번째 문자를 기준으로 정렬합니다.
// 마지막으로 다시 map을 이용하여 join을 통해 배열들을 문자열로 변환해주었습니다.

function solution(strings, n) {
    strings = strings
        .map((v) => [...v])
        .sort((a, b) => (a[n] > b[n] ? 1 : a[n] === b[n] && a > b ? 1 : -1))
        .map((v) => v.join(""));
    return strings;
}
