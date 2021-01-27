const sastrawi = require('sastrawijs');

const kataKasar = [
    'anjing',
    'kontol',
    'memek',
    'bangsat',
    'bajingan',
    'asu',
    'lonte',
    'tod',
    'ngentod',
    'jancuk',
    'jancok',
    'pekok',
    'tolol',
    'goblok',
    'bodoh',
    'kirik',
    'fuck',
    'shit',
    'monyet',
    'babi',
    'pepek',
    'ppk',
    'mmk',
    'tai',
    'taek',
    'cok',
    'cuk',
    'jembut'
    //Tambahin Sendiri
];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariKasar = (kata) => new Promise((resolve) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})
