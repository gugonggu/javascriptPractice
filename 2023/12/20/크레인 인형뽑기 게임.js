// 인형이 들어있는 게임판 board, 게임판의 특정 라인을 선택하는 숫자가 담겨있는 배열이 주어졌을 때
// moves에 담겨있는 숫자대로 인형을 뽑고, 마지막으로 뽑은 인형 2개가 같다면 인형을 터뜨리고 마지막에는 터뜨린 갯수를 반환하는 문제입니다.

// 뽑은 인형을 담아놓을 배열 pick을 선언해놓고
// for문으로 moves를 순회하기 시작합니다.
// for문 내부에 이번 움직임에 뽑을 인형의 번호를 담은 item을 -1으로 초기화 해놓고
// 2중 for문으로 게임판의 moves[i]-1 라인에 한 칸씩 내려가며 값을 검사합니다.
// 그 값이 0이 아니라 인형이 들어있다면 item을 그 숫자로 변경하고 그 값을 0으로 변경합니다.
// 그 후에 if문으로 item을 검사해서 뽑아놓은 인형이 있다면
// pick에 담겨있는 마지막 값과 비교해서
// 같다면 answer에 2를 더하고 마지막 값을 없애주고
// 다르다면 pick에 item을 추가합니다.
// 터뜨린 값을 반환하며 마무리했습니다.

function solution(board, moves) {
  var answer = 0;
  const pick = [];
  for (let i = 0; i < moves.length; i++) {
    let item = -1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        item = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
    if (item !== -1) {
      if (item === pick[pick.length - 1]) {
        answer += 2;
        pick.pop();
      } else {
        pick.push(item);
      }
    }
  }

  return answer;
}
