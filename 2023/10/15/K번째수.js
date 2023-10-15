// 숫자들이 들어있는 배열 array와 배열을 나누는 기준, 답에 필요한 인덱스들이 들어있는 commands가 주어질 때
// array를 command 각 요소의 0번째인 i번째 숫자부터 1번째 요소인 j번째 숫자까지 자르고 정렬한 뒤 2번째 요소인 k번째에 있는 수를 구하는 문제입니다.

// for문을 통해 commands를 순회합니다.
// 루프를 돌 때 마다 tmp를 생성해서 배열을 i, j를 기준으로 자르고 정렬한 뒤 k번째 수를 command에 다시 저장합니다.
// 루프를 다 돈뒤에 commands를 반환합니다.

function solution(array, commands) {
    for (let i = 0; i < commands.length; i++) {
        const tmp = array
            .slice(commands[i][0] - 1, commands[i][1])
            .sort((a, b) => a - b);
        commands[i] = tmp[commands[i][2] - 1];
    }
    return commands;
}
