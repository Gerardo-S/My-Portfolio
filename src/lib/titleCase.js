const titleCase = (str) => {
  let result = "";

  let letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    letters[0] = letters[0].toUpperCase();
    result = letters.join("");
  }

  return result;
};

export default titleCase;
