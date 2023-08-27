// 직사각형의 좌표가 담겨있는 배열이 주어졌을 때, 그 직사각형의 넓이를 반환하는 문제였습니다.
// 배열을 정렬해서 좌표를 순서대로 배치한 뒤
// 길이와 높이를 구한 뒤 곱해서 넓이를 반환합니다.

function solution(dots) {
    dots.sort((a, b) => a[0] - b[0]);
    return (
        Math.abs(dots[0][0] - dots[2][0]) * Math.abs(dots[0][1] - dots[1][1])
    );
}
