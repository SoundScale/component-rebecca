const convertToString = (num) => {
  if (num < 1000) {
    return num.toString();
  }
  if (num < 1000000) {
    const result = (num / 1000).toString().slice(0, 4);
    if (result[3] === '.') {
      return `${result.slice(0, 3)}K`;
    }
    return `${result}K`;
  }
  const result = (num / 1000000).toString().slice(0, 4);
  if (result[3] === '.') {
    return `${result.slice(0, 3)}M`;
  }
  return `${result}M`;
};

module.exports = convertToString;