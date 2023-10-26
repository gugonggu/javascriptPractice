// 영어 단어들이 들어있는 cards1 배열과 cards2 배열이 주어집니다.
// 그 배열에 포함되어있는 요소들로 조합된 goal 배열이 있습니다.
// 이 배열은 cards에 들어있는 요소들을 하나씩, 재사용 없이, 순서 스킵 없이 단어들을 넣어 만들었습니다
// 주어진 cards1과 cards2 배열들의 단어들을 조합해 goal을 만들 수 있으면 Yes를, 없다면 No를 반환하는 문제입니다.

// for문을 통해 goal을 순회합니다.
// goal을 순회하면서 각각의 요소를 순서대로 검사합니다.
// 만약 요소가 cards1이나 cards2의 0번째 요소라면, 순서를 어기지 않고 goal에 단어 하나가 들어갔다는 의미입니다.
// 따라서 다음 요소도 비교하기 위해 cards1이나 cards2에서 shift를 사용해 0번째 요소를 제거하고 다음 요소로 넘어갑니다.
// 만약 cards1이나 cards2의 0번째 요소가 goal의 i번째와 같지 않다면, 순서가 어긋났다는 의미이니 만들 수 없다는 의미입니다.
// 따라서 answer을 No로 수정하고 for문을 종료합니다.

function solution(cards1, cards2, goal) {
    var answer = "Yes";
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[0]) {
            cards1.shift();
        } else if (goal[i] === cards2[0]) {
            cards2.shift();
        } else {
            answer = "No";
            break;
        }
    }
    return answer;
}
