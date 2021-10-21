let book = [];


function collect(id) {
    return(document.getElementById(id).value);
}

function dictionary() {
    let isWord = collect("field");
    let contor = 0;
    for( let index = 0; index < book.length; ++index) {
        if(isWord === book[index]) {
            contor = 1;
        }

    }
    if (contor === 0) {
        book.push(isWord);
    } else {
        document.getElementById("response").innerHTML += `<p>The word you are trying to add is already in dictionary</p>`
    }
}

function searchWord() {
    let isWord = collect("searchPlace");
    let contor = 0;
    for( let index = 0; index < book.length; ++index) {
        if(isWord === book[index]) {
            contor = 1;
        }
    }
    if (contor === 0) {
        document.getElementById("response").innerHTML += `<p>The word you are searching is not in dictionary</p>`
    } else {
        document.getElementById("response").innerHTML += `<p>The word you are searching is in dictionary</p>`
    }
}


function moreWords() {
    document.getElementById("response").innerHTML += `<p>${book}</p>`
}
