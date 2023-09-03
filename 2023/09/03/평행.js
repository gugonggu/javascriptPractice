// 점 네개의 좌표를 담은 2차원 배열 dots가 주어질 때
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을, 없으면 0을 반환하는 문제입니다.

// 처음에는 a-b, a-c, a-d, b-c, b-d, c-d 6가지 경우의 수를 생각해서 코드를 짰습니다.

// 오답 코드
let slopes = [];
for (let i = 0; i < dots.length; i++) {
    for (let j = 0; j < dots.length; j++) {
        if (i === j) {
            continue;
        } else {
            slopes.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]));
        }
    }
}

const results = {};
slopes.forEach((v) => {
    results[v] = (results[v] || 0) + 1;
});

for (let i of Object.values(results)) {
    if (i >= 4) {
        return 1;
    }
}
return 0;

// 위 코드를 제출해서 문제를 풀었더니 케이스 12번부터 다 틀려서
// 문제를 다시 생각해봤습니다.
// 주어진 네 개의 점을 두 개씩 이었을 때라고 적혀있어서
// [a-b, c-d]. [a-c, b-d], [a-d, b-c] 3가지 경우를 생각해서 코드를 작성했습니다.
// 4개의 점들로 임의의 두 쌍을 만들었을 때 그 두쌍이 이루는 직선이 서로 평행한지를 묻는 문제였습니다.

// 정답 코드
function solution(dots) {
    let answer = 0;
    function getSlope(a, b, c, d) {
        const abSlope = (b[1] - a[1]) / (b[0] - a[0]);
        const cdSlope = (d[1] - c[1]) / (d[0] - c[0]);

        if (abSlope === cdSlope) answer++;
    }

    getSlope(dots[0], dots[1], dots[2], dots[3]);
    getSlope(dots[0], dots[2], dots[1], dots[3]);
    getSlope(dots[0], dots[3], dots[1], dots[2]);

    return answer > 0 ? 1 : 0;
}
