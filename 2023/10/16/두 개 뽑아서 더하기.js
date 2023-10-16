// 숫자들이 들어있는 배열 numbers가 주어질 때
// 중복돤 자리의 숫자를 제외한 숫자들의 합으로 나올 수 있는 경우의 수들을 모두 담아 오름차순으로 정렬해서 반환하는 문제입니다.

// 중복을 상관하지 않고, 모든 경우의 수에 대해서 합을 저장할 temp를 선언해서
// 2중 for문을 통해 배열 numbers 내에 자기 자신과의 합을 제외한 모든 합을 저장해줍니다.
// 그 후 중복값을 없애는 특성을 가진 set을 활용해서 중복 값을 없애고, sort를 이용해 오름차순으로 정렬해 주었습니다.

function solution(numbers) {
    let temp = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) continue;
            temp.push(numbers[i] + numbers[j]);
        }
    }
    const answer = [...new Set(temp)].sort((a, b) => a - b);
    return answer;
}
