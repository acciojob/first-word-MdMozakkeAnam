function firstWord(s) {
  // your code here
	if (str.length === 0) return '';
    
    let spaceIndex = str.indexOf(' ');
    if (spaceIndex === -1) {
        return str;
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
