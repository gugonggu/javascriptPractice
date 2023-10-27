// 2016년의 월 a와 일 b가 주어졌을 때 그 날짜의 요일을 반환하는 문제입니다.

// 먼저 2016년의 달마다 날짜을 넣어놓은 day와
// 요일을 적어놓은 week을 선언했습니다. 2016년은 금요일부터 시작하므로 FRI를 먼저 넣어줬습니다.

// for문을 돌려 받은 월 - 1 까지 해당 달 마다의 날짜를 증가시키고,
// 받은 요일 - 1을 증가시켜서
// 전체 요일을 7로 나눈 나머지의 week 인덱스 값을 반환해줍니다.

function solution(a, b) {
    const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

    let total = 0;
    for (let i = 0; i < a - 1; i++) {
        total += day[i];
    }
    total += b - 1;

    return week[total % 7];
}
