function decodeTheRing =(string, pattern) {
  // Convert the pattern into a regex pattern
  let regexPattern = pattern
    .replace(/\*/g, '.') // Convert '*' to '.' to match any single character
    .replace(/\?/g, '.*'); // Convert '?' to '.*' to match zero or more characters

  // Create a regex object with the pattern
  let regex = new RegExp('^' + regexPattern + '$'); // Anchors for full match

  // Test the string against the regex
  return regex.test(string);
}

module.exports = decodeTheRing;
