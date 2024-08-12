module.exports = function check(str, bracketsConfig) {
  const resultArr = [];

  for (let i = 0; i < str.length; i++) {
    const [first, end] = bracketsConfig.find((item) => item.includes(str[i]));

    if (str[i] === first && !resultArr.includes(first)) {
      resultArr.push(end);
      continue;
    }

    const bracketArr = resultArr.pop();
    if (str[i] === bracketArr) {
      continue;
    }
    return false;
  }

  return !resultArr.length;
}
