// 벽의 총 길이 n과 롤러의 길이 m, 벽을 n칸으로 나눈 부분들 중에 페인트가 벗겨져 있는 부분들을 담은 배열 sections가 주어질 때
// 페인트를 칠해야하는 최소 횟수를 반환하는 문제입니다.

// 페인트를 칠한 횟수를 카운트 할 count를 선언하고,
// 벽의 상태를 나타내는 wall을 선언했습니다.
// 첫 번째 for문을 통해 벽에 페인트를 칠해야 할 부분을 0으로 변경해 주고,
// while문을 통해 wall 배열의 0의 인덱스를 찾아서 for문을 통해 해당 인덱스부터 + m까지 1로 변경해주었습니다.
// 위 작업이 끝나면 count를 증가시켜서 반환하기 위한 답을 만들어 주었습니다.

function solution(n, m, section) {
    let count = 0;
    let wall = new Array(n).fill(1);
    for (let i = 0; i < section.length; i++) {
        wall[section[i] - 1] = 0;
    }
    while (wall.indexOf(0) !== -1) {
        const index = wall.indexOf(0);
        for (let i = index; i < index + m; i++) {
            wall[i] = 1;
        }
        count++;
    }

    return count;
}
