// 선분 3개가 평행하게 놓여있을 때, 선분 3개의 시작과 끝을 담은 2차원 배열 lines가 주어질 때 선분들 끼리 겹치는 부분의 길이를 반환하는 문제입니다.
// 2차원 배열을 1차원 배열로 바꿔서 가장 큰 수와 가장 작은 수를 구하고, 그 크기 만큼의 배열을 0으로 채워서 만듭니다.
// lines를 forEach로 순회해서 각 선분마다 해당하는 위치의 배열 요소에 1을 더합니다.
// 순회가 다 끝나면 2이상인 숫자들만 필터링해서 그 길이를 반환합니다.

function solution(lines) {
    const start = Math.min(...lines.flat());
    const end = Math.max(...lines.flat());
    const list = Array(end - start).fill(0);

    lines.forEach((v) => {
        for (let i = v[0]; i < v[1]; i++) {
            list[i - start] += 1;
        }
    });
    return list.filter((v) => v > 1).length;
}
