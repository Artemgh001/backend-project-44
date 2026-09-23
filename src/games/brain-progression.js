import _ from "lodash";

function getProgress() {
  const start = _.random(0, 35);
  let counter = 1;
  let strProgress = `${start}`;
  let index = 1;
  const step = _.random(1, 35);
  while (counter < 10) {
    const currentElement = start + index * step;
    index += 1;
    strProgress = `${strProgress} ${currentElement}`;
    counter += 1;
  }
  return strProgress;
}

export function getNullEl() {
  let elements = getProgress().split(" ");
  const randElement = _.random(0, 9);
  const correctAnswer = elements[randElement];
  elements[randElement] = "..";
  return { question: elements.join(" "), correctAnswer };
}
