// 상자의 가로, 세로, 높이가 저장되어있는 배열인 box와 주사위의 모서리 길이를 나타내는 n이 주어졌을 때
// box에 들어갈 수 있는 주사위의 최대 개수를 반환하는 문제입니다.
// 모서리가 n인 주사위가 딱 맞게 들어가도록 box의 가로, 세로, 높이를 n으로 나누고 소수부를 버린 뒤 다시 n으로 곱합니다.
// 이전 단계에서 구한 각각의 가로, 세로, 높이를 구해 box의 부피를 구하고
// 그 뒤 주사위의 부피를 나태나는 n3 제곱으로 box의 부피를 나누면 box에 들어갈 수 있는 주사위의 최대개수를 구할 수 있습니다.

function solution(box, n) {
    return Math.floor(
        (Math.floor(box[0] / n) *
            n *
            (Math.floor(box[1] / n) * n) *
            (Math.floor(box[2] / n) * n)) /
            (n * n * n)
    );
}

// 아래와 같은 방법으로 더 간단하게 풀 수 있습니다.
function solution(box, n) {
    let [width, length, height] = box;

    return (
        Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
    );
}
