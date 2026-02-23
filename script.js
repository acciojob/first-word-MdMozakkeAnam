function firstWord(str) {
  if (str.length === 0) return '';
  
  const spaceIndex = str.indexOf(' ');
  if (spaceIndex === -1) return str;
  
  return str.slice(0, spaceIndex);
}
