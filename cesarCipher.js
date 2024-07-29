class cesarCipher {
  constructor() {}

  encrypt(text, n) {
    let textArray = text.split('');
    textArray = textArray.map((element) => {
      if (this.isLowerCaseChar(element) || this.isUpperCaseChar(element)) {
        let oldCode = element.charCodeAt(0);
        let newCode = oldCode + n;

        if (
          (this.isLowerCaseChar(element) && newCode > 122) ||
          (this.isUpperCaseChar(element) && newCode > 90)
        ) {
          newCode = newCode - 26;
        }

        const newElement = String.fromCharCode(newCode);

        return newElement;
      } else {
        return element;
      }
    });

    return textArray.join('');
  }

  isLowerCaseChar(element) {
    const charCode = element.charCodeAt(0);
    return charCode >= 97 && charCode <= 122;
  }

  isUpperCaseChar(element) {
    const charCode = element.charCodeAt(0);
    return charCode >= 65 && charCode <= 90;
  }
}

module.exports = cesarCipher;
