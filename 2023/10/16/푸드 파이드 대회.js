// 푸드 파이트를 개최하기 위해 음식을 준비했습니다.
// 푸드 파이트 규칙은 대결하는 선수들이 양 쪽 끝에서 시작에 중간에 있는 물을 마시면 승리합니다.
// 각각의 음식의 개수가 담겨있는 배열 food가 주어질 때
// 음식의 개수를 정당하게 양쪽으로 나누어서 물(0)을 기준으로 index를 배치한 문자열을 반환하는 문제입니다.

// for문을 통해 food를 2배 한 값에 2를 뺀 만큼 순회합니다.
// 순회할 때마다 index를 생성해서 index가 배열의 길이를 벗어나도 음식의 인덱스를 잘 지정할수 있도록 삼항 연산자를 사용했습니다.
// index가 정해지면 해당 인덱스의 음식의 개수를 2로 나눈 값 만큼 for문을 돌아서 답을 반환할 문자열에 인덱스를 추가힙니다.
// 만약 1차 반복문을 순회하는 도중 i가 food의 길이보다 1작다면 중간을 의미하니 물을 의미하는 0을 추가해줬습니다.

function solution(food) {
    var answer = "";
    for (let i = 1; i < food.length * 2 - 1; i++) {
        const index = i > food.length - 1 ? food.length * 2 - i - 1 : i;
        for (let j = 0; j < Math.floor(food[index] / 2); j++) {
            answer += index;
        }
        if (i === food.length - 1) answer += 0;
    }
    return answer;
}
