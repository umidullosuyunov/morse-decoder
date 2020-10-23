const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
   
  const splitted_expr = expr.match(/.{1,10}/g);

  const splitted_nums = splitted_expr.map((letter) => letter.match(/.{1,2}/g));

  const morse_letters = splitted_nums.map((nums) =>
    nums
      .map((num) =>
        num === '**' ? num : +num === 10 ? '.' : +num == 11 ? '-' : ''
      )
      .join('')
  );
  const decoded = morse_letters.map((ltr) => MORSE_TABLE[ltr]).join('');

  return decoded;
}

module.exports = {
    decode
}
