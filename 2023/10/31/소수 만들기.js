// 숫자들이 들어있는 배열 nums가 주어질 때
// 중복되지 않는 숫자 3개를 더한 값이 소수인 경우의 개수를 반환하는 문제입니다.

// 3중 for문으로 중복되지 않는 경우를 모두 순회합니다.
// 순회할 때 마다 answer++ 해주고, 숫자 3개의 합인 sum이 소수인지 검사를해서 소수이면 answer--을 해줍니다.

function solution(nums) {
    var answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                answer++;
                for (let l = 2; l <= Math.sqrt(sum); l++) {
                    if (sum % l === 0) {
                        answer--;
                        break;
                    }
                }
            }
        }
    }

    return answer;
}
