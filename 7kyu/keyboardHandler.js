/* 
The keyboard handler is a function which receives three parameters as input:

Key - the entered character on the keyboard.

isCaps (or is_caps) - boolean variable responsible for the enabled 'Caps Lock'. (by default false)

isShift (or is_shift) - boolean variable which is responsible for whether 'Shift' is pressed. (by default false)

Your task to write a function that returns the entered character.

Requirements for obtaining the 'key' variable:
Alphabetical characters must be a lowercase (e.x. 'a', not 'A')
It must be a character (e.x '2', not 2 or not [1,2,3])
It must be of unit length (e.x. 'a', not 'abc')
If the value does not satisfy the condition, return 'KeyError'

For example:

handler('a', true) // should return 'A' (because Caps-Lock)
handler('1', true) // should return '1' (because Сaps-Lock doesn't work here)
handler('a', false, true) // should return 'A' (because Shift)
handler('1', false, true) // should return '!'

handler('')  // should return 'KeyError'
handler('A') // should return 'KeyError'
handler( 3 ) // should return 'KeyError'
handler('abc') // should return 'KeyError'

*/

function handler(key, isCaps = false, isShift = false) {
  if (
    typeof key !== "string" ||
    key.length > 1 ||
    !key ||
    key.toUpperCase() === key
  )
    return "KeyError";

  return isCaps ^ isShift ? key.toUpperCase() : key;
}

console.log(handler("a"), "a");
console.log(handler("a", true), "A");
console.log(handler("a", true, true), "a");
console.log(handler("a", false, true), "A");
console.log(handler(""), "KeyError");
console.log(handler("1", true, true), "!");
console.log(handler("1", false, true), "!");

console.log(handler(5), "KeyError");
console.log(handler("A"), "KeyError");
console.log(handler("abc"), "KeyError");
console.log(handler([3, "a", 1]), "KeyError");
console.log(handler({ a: 1, b: 2 }), "KeyError");
