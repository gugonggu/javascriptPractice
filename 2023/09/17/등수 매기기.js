// 영어 점수와 수학 점수를 담은 2차원 배열 score이 주어질 때 점수의 평균을 기준으로 매긴 등수를 담은 배열을 반환하는 문제입니다.
// 먼저 map을 이용해서 평균을 담은 배열을 만들어주고
// 그 배열을 복사하고 정렬해서 등수대로 나열합니다
// 마지막으로 평균 배열을 map을 이용해서 정렬된 배열을 이용해 요소를 등수로 바꾸어 반환합니다.

function solution(score) {
    let average = score.map((v) => (v[0] + v[1]) / 2);
    let averageSort = [...average].sort((a, b) => b - a);
    return average.map((v) => averageSort.indexOf(v) + 1);
}
