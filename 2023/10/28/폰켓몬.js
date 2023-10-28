// 폰켓몬의 종류가 담긴 배열 nums가 주어지고,
// 가져갈 수 있는 폰켓몬의 수는 원본 배열 길이의 1/2 마리의 폰켓몬을 가져갈 수 있습니다.
// 같은 종류의 폰켓몬을 가져가지 않으려고할 때 가져갈 폰켓몬의 수를 반환하는 문제입니다.

// 먼저 원본 배열 길이의 1/2를 미리 구해서 저장해두고
// nums의 중복 요소를 없애기 뒤해 set으로 변경했다가 다시 배열로 변경합니다.
// while문을 통해 nums의 길이가 미리 저장해 놓은 length의 길이보다 클 때 까지 nums의 수를 계속 줄여줍니다.
// while문이 끝나고 나면 nums의 길이를 반환해줍니다.

function solution(nums) {
    const length = nums.length / 2;
    nums = [...new Set(nums)];
    while (nums.length > length) {
        nums.pop();
    }
    return nums.length;
}
