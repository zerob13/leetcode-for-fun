/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  let currentLine = [];
  let currentLen = 0;
  for (let i = 0; i < words.length; i++) {
    const wItem = words[i];
    // console.log(i, wItem, currentLen, currentLine);
    if (currentLen == 0 && wItem.length <= maxWidth) {
      currentLen += wItem.length;
      currentLine.push(wItem);
    } else if (currentLen + wItem.length + 1 <= maxWidth) {
      currentLen += wItem.length + 1;
      currentLine.push(wItem);
    } else {
      if (currentLine.length > 0) {
        result.push(currentLine);
      }
      currentLine = [];
      currentLen = 0;
      currentLen += wItem.length;
      currentLine.push(wItem);
    }
  }
  if (currentLen > 0) {
    result.push(currentLine);
  }
  const ret = [];
  // console.log(result);
  for (let i = 0; i < result.length; i++) {
    const currentLine = result[i];
    if (currentLine.length == 1) {
      const gapLen = maxWidth - currentLine[0].length;
      let textResult = currentLine[0];
      for (let k = 0; k < gapLen; k++) {
        textResult += " ";
      }
      ret.push(textResult);
    } else {
      const fullLen = currentLine.join("").length;
      const gapLen = maxWidth - fullLen - (currentLine.length - 1);
      let spaceCount = 1 + Math.floor(gapLen / (currentLine.length - 1));
      // console.log("i", spaceCount, currentLine, currentLine.length - 1, gapLen);
      let spareNum = gapLen % (currentLine.length - 1);
      if (i !== result.length - 1) {
        let textResult = "";
        for (let j = 0; j < currentLine.length; j++) {
          textResult += currentLine[j];
          if (j != currentLine.length - 1) {
            for (let k = 0; k < spaceCount; k++) {
              textResult += " ";
            }
            if (j < spareNum) {
              textResult += " ";
            }
          }
        }
        ret.push(textResult);
      } else {
        let textResult = currentLine.join(" ");
        for (let k = 0; k < gapLen; k++) {
          textResult += " ";
        }
        ret.push(textResult);
      }
    }

    // console.log(i, ret);
  }
  // console.log(ret);
  return ret;
};
fullJustify(
  ["This", "is", "an", "example", "of", "text", "justification."],
  16
);
fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16);
fullJustify(
  [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do",
  ],
  20
);
fullJustify(["Listen", "to", "many,", "speak", "to", "a", "few."], 6);
fullJustify(["a", "b", "c", "d", "e"], 3);
