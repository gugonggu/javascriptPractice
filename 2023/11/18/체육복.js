// 학생들이 체육 수업을 해야하는데, 어떤 학생들은 체육복을 도난당했고, 어떤 학생은 여분 체육복을 하나 가지고 있습니다.
// 학생들의 번호는 체격 순으로 매겨져 있고, 바로 앞번호나 뒷번호의 학생들에게만 빌려 입을 수 있습니다.
// 여분을 가지고 있는 학생들 또한 기존의 체육복을 도난당했을 수 있습니다.
// 학생들의 수 n, 도난 당한 학생들 번호 배열 lost, 여분을 가지고 있는 학생들 번호 배열 reserve가 주어질 때
// 체육 수업을 들을 수 있는 학생의 최댓값을 반환하는 문제입니다.

// 먼저 clothes라는 배열에 n + 1만큼 1로 채워 배열을 생성합니다. 0번 학생은 없기 때문입니다.
// 그 후 lost를 순회하면서 lost의 요소가 reserve에도 있는지 검사하며 순회합니다.
// 만약 reserve에도 있으면 reserve에서 그 요소를 삭제하고
// 없으면 clothes에서 학생 번호에 0을 할당합니다 (체육복이 없다는 의미)
// 두 번째 for문에서 clothes를 순회합니다.
// 모든 루프마다 clothes[i]가 0인지 체크해서 현재 체육복을 가지고 있는지 검사합니다.
// 있다면 answer에 1을 더하고
// 없다면 앞번호 학생이 여분을 가지고 있는지 체크해서 빌릴 수 있으면 reserve에서 해당하는 요소를 없애고 answer을 더합니다 clothes[i]를 1로 만드는 코드는 의미 없습니다. 체크용 입니다.
// 빌릴 수 없다면 뒷번호 학생도 앞번호 학생과 같이 체크합니다.
// 마지막으로 n + 1 크기로 배열을 만들었기 때문에, answer에 1을 빼서 반환해주었습니다.

function solution(n, lost, reserve) {
    var answer = 0;
    const clothes = new Array(n + 1).fill(1);
    for (let i = 0; i < lost.length; i++) {
        let index = reserve.indexOf(lost[i], "");
        if (index !== -1) {
            reserve.splice(index, 1, "");
        } else {
            clothes[lost[i]] = 0;
        }
    }
    for (let i = 0; i < clothes.length; i++) {
        if (clothes[i] === 0) {
            if (reserve.includes(i - 1)) {
                reserve.splice(reserve.indexOf(i - 1), 1, "");
                clothes[i] = 1;
                answer++;
            } else if (reserve.includes(i + 1)) {
                reserve.splice(reserve.indexOf(i + 1), 1, "");
                clothes[i] = 1;
                answer++;
            }
        } else {
            answer++;
        }
    }
    return answer - 1;
}
