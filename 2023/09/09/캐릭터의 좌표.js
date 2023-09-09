// 캐릭터의 움직임 (up, down, right, left)를 담은 문자열 배열과 움직일 수 있는 영역 크기인 정수 배열 board가 주어질 때
// 캐릭터의 이동이 끝난 후 좌표를 반환하는 문제입니다.
// for 반복문을 통해 캐릭터의 움직임을 순회했습니다.
// switch case문을 통해 캐릭터의 움직임을 판별하였고, 만약 캐릭터가 영역의 끝에 있으면
// 움직이지 않고 넘어가도록 처리했습니다.

function solution(keyinput, board) {
    var answer = [0, 0];
    for (const value of keyinput) {
        switch (value) {
            case "up":
                if (answer[1] === Math.floor(board[1] / 2)) {
                    continue;
                } else {
                    answer[1]++;
                }
                break;
            case "down":
                if (answer[1] === -Math.floor(board[1] / 2)) {
                    continue;
                } else {
                    answer[1]--;
                }
                break;
            case "right":
                if (answer[0] === Math.floor(board[0] / 2)) {
                    continue;
                } else {
                    answer[0]++;
                }
                break;
            case "left":
                if (answer[0] === -Math.floor(board[0] / 2)) {
                    continue;
                } else {
                    answer[0]--;
                }
                break;
        }
    }
    return answer;
}
