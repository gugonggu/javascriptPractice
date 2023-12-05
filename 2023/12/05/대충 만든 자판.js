// 휴대폰 자판의 개념을 이용한 문제입니다. (같은 키를 여러번 누르면 문자가 바뀌는 자판)
// 자판은 무작위로, 중복이 있을 수도 있고, 없을 수도 있습니다.
// 1번 키부터 차례대로 문자들이 순서대로 담긴 문자열 배열 keymap과
// 입력하려는 문자열이 담긴 문자열 배열 targets가 주어질 때
// 각 문자열을 작성하기 위한 최소 횟수를 배열에 각각 담아 반환하는 문제입니다.

// 먼저 keymap에 등장하는 문자를 담아놓기 위한 keyObj를 선언해놓고
// keymap을 순회하기 시작합니다.
// keymap의 요소마다 다시 forEach를 통해 순회하는데
// 만약 그 2중 loop의 요소가 keyObj에 없다면, 그 요소를 key로, value를 인덱스로 해서 저장합니다.
// 만약 있다면 이미 저장되어있는 인덱스와 새로 저장할 인덱스 중에 더 작은 것을 저장합니다.
// keyObj를 등록하기 위한 첫 순회가 끝나면
// 다시 for문을 통해 targets를 순회합니다.
// targets의 요소를 target이라고 배열로 분해한 뒤 저장하고,
// target을 for문으로 순회합니다.
// 각 요소마다 keyObj에 들어있는지 검색하여 있다면 count를 증가시키고,
// 없다면 count를 -1로 만들고 break합니다.
// target 순회가 끝나면, count를 answer에 push하여 반환할 값을 준비하고
// 모든 순회가 끝나면 answer을 반환하여 문제를 마무리합니다.

function solution(keymap, targets) {
  var answer = [];
  const keyObj = {};
  for (let i = 0; i < keymap.length; i++) {
    [...keymap[i]].forEach((v, i2) => {
      if (!keyObj[v]) {
        keyObj[v] = i2 + 1;
      } else {
        keyObj[v] = keyObj[v] > i2 + 1 ? i2 + 1 : keyObj[v];
      }
    });
  }
  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    const target = [...targets[i]];
    for (let j = 0; j < target.length; j++) {
      if (keyObj[target[j]]) {
        count += keyObj[target[j]];
      } else {
        count = -1;
        break;
      }
    }
    answer.push(count);
  }
  return answer;
}
