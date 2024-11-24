import "./StringCompressionComponent.scss";

function StringCompressionComponent() {
  const compress = function (chars) {
    let i = 0;
    let write = 0;

    while (i < chars.length) {
      let currentChar = chars[i];
      let count = 0;

      // Count the number of occurrences of the current character
      while (i < chars.length && chars[i] === currentChar) {
        i++;
        count++;
      }

      chars[write] = currentChar;
      write++;

      if (count > 1) {
        let countStr = count.toString();
        for (let c of countStr) {
          chars[write] = c;
          write++;
        }
      }
    }

    return write;
  };

  console.log(
    compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
  );

  return <div></div>;
}

export default StringCompressionComponent;
