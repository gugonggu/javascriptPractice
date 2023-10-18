// 그리워 하는 사람의 이름들을 담은 배열 name,
// 각 사람별 그리움 점수를 담은 yearning,
// 각 사진에 찍인 인물의 이름을 담은 이차원 문자열 배열 photo가 주어질 때
// 각 사진별 그리움 점수의 총합을 딤을 배열을 반환하는 문제입니다.

// 먼저 각 인물들의 이름과 그리움 점수를 담은 객체를 만듭니다.
// 그 후 photo에 대해 map을 사용해 변환할건데,
// 그 요소에 대해 다시 map을 사용해 이름을 그리움 지수로 바꾸고
// reduce를 이용해 합해줍니다.
// 마지막으로 변환 과정을 마친 점수를 담은 배열을 반환하였습니다.

function solution(name, yearning, photo) {
    let obj = {};
    for (let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i];
    }
    photo = photo.map((v) =>
        v
            .map((v2) => (obj[v2] === undefined ? 0 : obj[v2]))
            .reduce((a, c) => a + c)
    );
    return photo;
}
