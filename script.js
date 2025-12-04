function firstWord(s) {
  // your code here
	 s = s.trim();

  // if empty return empty string
  if (s === "") return "";

  // split by spaces and return first word
  return s.split(" ")[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
