// 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하는 문제입니다.
// 정수 배열 emergency가 주어졌을 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 반환합니다.

// emergency를 복사한 배열 copy를 정렬합니다.
// emergency을 map 메서드를 사용해 각 요소마다 copy 배열에서 해당 요소의 인덱스 + 1을
// answer에 push해서 답을 반환합니다.

function solution(emergency) {
    var answer = [];
    const copy = [...emergency].sort((a, b) => b - a);
    emergency.map((v) => answer.push(copy.indexOf(v) + 1));
    return answer;
}
