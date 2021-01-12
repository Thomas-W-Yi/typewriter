const sentence = "hello there from lighthouse labs";
const log = console.log;
let timeOut = 0;
for (const [index, char] of [...sentence].entries()) {
  setTimeout(() => {
    let endChar;
    index === sentence.length - 1 ? endChar = char + '\n this is after newline' : endChar = char;
    process.stdout.write(endChar);
  }, timeOut);
  timeOut += 50;
}