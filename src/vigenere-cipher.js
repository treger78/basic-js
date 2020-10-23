const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(trigger) {
  	if (trigger === true || trigger === undefined) {
  		this.isDirect = true;
  	} else {
  		this.isDirect = false;
  	}
  }

  ciphering(message, key, encryptOrDecrypt) {
    
    if (!message || !key) {
      throw new Error();
    }
    
    const n = 26;
    let openTextLetters = '',
        keyLetters = '', 
        output = '',
        counterKey = 0;

    for (var i = 0; i < message.length; i++) {
      openTextLetters = message[i].toUpperCase();
      if (openTextLetters >= 'A' && openTextLetters <= 'Z') {

        keyLetters = (i < key.length) ? key[counterKey].toUpperCase() : key[counterKey % key.length].toUpperCase();
        counterKey++;

        output += encryptOrDecrypt ? 
                  String.fromCharCode((openTextLetters.charCodeAt(0) + keyLetters.charCodeAt(0)) % n + 65) : 
                  String.fromCharCode((n + openTextLetters.charCodeAt(0) - keyLetters.charCodeAt(0)) % n + 65);

      } else {
        output += message[i];
      }
    }

    return this.isDirect ? output : output.split('').reverse().join('');

  }

  encrypt(message, key) {
    return this.ciphering(message, key, true);
  }  

  decrypt(encryptedMessage, key) {
    return this.ciphering(encryptedMessage, key, false);
  }

}

module.exports = VigenereCipheringMachine;
