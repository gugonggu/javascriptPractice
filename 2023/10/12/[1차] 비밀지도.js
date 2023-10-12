// 지도 한 변의 길이 n, 첫 번째 지도 arr1, 두 번째 지도 arr2가 주어질 때
// 지도의 각 요소를 2진수 n자리로 변환했을 때 진짜 지도가 나타나게 됩니다.
// 각각의 요소가 1일 때는 벽이라는 의미고, 0이라면 공백이라는 의미입니다.
// arr1과 arr2를 합쳐 전체 지도를 만들 때 arr1과 arr2 중에 하나라도 벽인 칸이 있다면 전체 지도에서도 벽입니다.

// 따라서 arr1과 arr2를 map을 통해 n자리 2진수로 변환해 주었고
// for문을 통해 지도1, 2의 i, j자리의 요소를 검사해서 하나라도 1이라면 전체지도에서도 벽 처리를 해주었습니다.

function solution(n, arr1, arr2) {
    let answer = [];
    arr1 = arr1.map((v) => [...v.toString(2).padStart(n, "0")]);
    arr2 = arr2.map((v) => [...v.toString(2).padStart(n, "0")]);
    for (let i = 0; i < n; i++) {
        let line = [];
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] === "1" || arr2[i][j] === "1") {
                line.push("#");
            } else {
                line.push(" ");
            }
        }
        answer.push(line.join(""));
        line = [];
    }
    return answer;
}
