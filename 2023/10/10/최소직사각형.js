// 명함의 가로 길이와 세로 길이를 담은 배열 sizes가 주어질 때
// 주어진 명함들을 모두 담을 수 있는 명합 지갑을 만들기 위한 크기를 반환하는 문제입니다.
// sizes 배열의 각 요소마다 최대와 최소를 width와 height에 담아서
// width의 최댓값과 height의 최댓값을 곱해 반환해주었습니다.

function solution(sizes) {
    const width = [];
    const height = [];
    for (let i = 0; i < sizes.length; i++) {
        width.push(Math.max(sizes[i][0], sizes[i][1]));
        height.push(Math.min(sizes[i][0], sizes[i][1]));
    }
    return Math.max(...width) * Math.max(...height);
}
