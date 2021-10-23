let dictionary = [];

function searchWord(differentiator) {
  // if differentiator is 0 I want to display the second message
  // if it is empty I want to add the word without displaying the second message
  let isWord = document.getElementById("field").value;
  for (let wordPosition = 0; wordPosition < dictionary.length; ++wordPosition) {
    if (isWord === dictionary[wordPosition]) {
      isWord = -1;
    }
  }
  if (isWord === -1) {
    document.getElementById(
      "showMessage"
    ).innerHTML += `<p>Your word is already in dictionary. Press <em>Show dictionary</em> to view the word.</p>`;
  } else if (isWord != -1 && isWord && differentiator == 0) {
    document.getElementById(
      "showMessage"
    ).innerHTML += `<p>The word you are searching is not in dictionary.</p>`;
  }
  return isWord;
}

function addWord() {
  let addOrNot = searchWord();
  if (addOrNot != -1 && addOrNot) {
    dictionary.push(addOrNot);
  }
}

function showDictionary() {
  document.getElementById(
    "showMessage"
  ).innerHTML += `<p><em>Dictionary</em>: ${dictionary}</p>`;
}

function clearMessage() {
  document.getElementById(
    "showMessage"
  ).innerHTML = `<div id="showMessage"></div>`;
