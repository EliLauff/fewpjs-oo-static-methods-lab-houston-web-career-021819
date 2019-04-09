class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, "");
  }

  static titleize(str) {
    let titleStr = [];
    let counter = 0;
    str.split(" ").forEach(word => {
      if (
        counter === 0 ||
        (word !== "the" &&
          word !== "a" &&
          word !== "an" &&
          word !== "but" &&
          word !== "of" &&
          word !== "and" &&
          word !== "for" &&
          word !== "at" &&
          word !== "by" &&
          word !== "from")
      ) {
        titleStr.push(this.capitalize(word));
        counter += 1;
      } else {
        titleStr.push(word);
        counter += 1;
      }
    });
    return titleStr.join(" ");
  }
}
