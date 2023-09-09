// 2차원 배열 board가 주어지고, 배열 내부에 지뢰가 매설된 지역 1과, 지뢰가 없는 지역 0이 있습니다.
// 지뢰의 위치와 지뢰에 인접한 위, 아래, 좌, 우, 대각선을 모드 위험지역으로 분류하고
// 위험지역이 아닌 칸 수를 반환하는 문제입니다.

// 2중 for문을 돌려 배열의 모든 요소를 순회합니다.
// 해당 요소가 지뢰가 매설되어있는 지역이라면
// 미리 만들어 놓은 위험지역 배열인 area를 통해 i, j 좌표의 모든 위험지역을 2로 표시합니다.
// board 2중 map을 이용해 위험지역이 아닌 칸을 판별해 answer를 증가시켜 반환합니다.

function solution(board) {
    var answer = 0;
    const area = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
    ];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                area.map((v) => {
                    let [x, y] = v;
                    [x, y] = [x + i, y + j];
                    if (
                        x >= 0 &&
                        x < board.length &&
                        y >= 0 &&
                        y < board[i].length &&
                        board[x][y] === 0
                    ) {
                        board[x][y] = 2;
                    }
                });
            }
        }
    }
    board.map((line) => line.map((value) => (value === 0 ? answer++ : null)));
    return answer;
}
