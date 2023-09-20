// 대문자와 소문자가 섞여있는 문자열 s가 주어질 때
// 문자열 내의 p의 개수와 y의 개수가 같으면 true를, 다르다면 false를 반환하는 문제입니다.
// pCount와 yCount를 생성해 주고
// 문자열 s의 각 요소롤 소문자로 변환한 배열을 다시 s에 저장합니다.
// forEach를 사용해 반복하며 각 요소가 p또는 y인지 검사합니다.
// p또는 y라면 각각의 카운터를 증가시키고
// 마지막으로 카운터가 같다면 true를, 다르면 false를 반환했습니다.

function solution(s) {
    let pCount = 0;
    let yCount = 0;
    s = [...s].map((v) => v.toLowerCase());
    s.forEach((v) => {
        v === "p" ? pCount++ : v === "y" ? yCount++ : null;
    });
    return pCount === yCount ? true : false;
}
