// 문자열 코드로 변환 후 검사하고
// 다시 문자열로 변환

function solution(s, skip, index) {
  s = [...s].map((v) => v.charCodeAt());
  skip = [...skip].map((v) => v.charCodeAt());
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    while (count !== index) {
      s[i]++;
      if (s[i] === 123) {
        s[i] = 97;
      }
      if (!skip.includes(s[i])) {
        count++;
      }
    }
  }
  return s.map((v) => String.fromCharCode(v)).join("");
}
