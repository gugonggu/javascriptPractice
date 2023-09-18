// 등차수열 또는 등비수열인 common이 주어질 때 마지막 원소 다음에 올 원소를 반환하는 문제입니다
// if문을 통해 등비수열인지 판별하고
// 등비수열이라면 두 번쨰 원소 나누기 첫 번쨰 원소에 마지막 원소를 곱해주고
// 등차수열이라면 두 번째 원소 나누기 첫 번쨰 원소에 마지막 원소를 더해줍니다.

function solution(common) {
    if (common[1] / common[0] === common[2] / common[1]) {
        return (common[1] / common[0]) * common[common.length - 1];
    } else {
        return common[1] - common[0] + common[common.length - 1];
    }
}
