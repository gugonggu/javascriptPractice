// 각도을 나타내는 angle이 주어졌을 때 예각, 직각, 둔각, 평각을 분류해 반환하는 문제입니다.
// 삼항 연산자를 이용해 문제를 해결했습니다.

function solution(angle) {
    return angle > 90 ? (angle === 180 ? 4 : 3) : angle === 90 ? 2 : 1;
}
