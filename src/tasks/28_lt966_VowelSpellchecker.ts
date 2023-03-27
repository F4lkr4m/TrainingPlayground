// Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.

// For a given query word, the spell checker handles two categories of spelling mistakes:

// Capitalization: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.
// Example: wordlist = ["yellow"], query = "YellOw": correct = "yellow"
// Example: wordlist = ["Yellow"], query = "yellow": correct = "Yellow"
// Example: wordlist = ["yellow"], query = "yellow": correct = "yellow"
// Vowel Errors: If after replacing the vowels ('a', 'e', 'i', 'o', 'u') of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.
// Example: wordlist = ["YellOw"], query = "yollow": correct = "YellOw"
// Example: wordlist = ["YellOw"], query = "yeellow": correct = "" (no match)
// Example: wordlist = ["YellOw"], query = "yllw": correct = "" (no match)
// In addition, the spell checker operates under the following precedence rules:

// When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
// When the query matches a word up to capitlization, you should return the first such match in the wordlist.
// When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
// If the query has no matches in the wordlist, you should return the empty string.
// Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].

 

// Example 1:

// Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
// Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
// Example 2:

// Input: wordlist = ["yellow"], queries = ["YellOw"]
// Output: ["yellow"]
 

// Constraints:

// 1 <= wordlist.length, queries.length <= 5000
// 1 <= wordlist[i].length, queries[i].length <= 7
// wordlist[i] and queries[i] consist only of only English letters.


const vowels = ['a', 'e', 'i', 'o', 'u'];

export const checkVowelWithQuery = (word: string, query: string): boolean => {
  if (word.length !== query.length) {
    return false;
  }

  for (let i = 0; i < word.length; i++) {
    const wordLetter = word[i].toLowerCase();
    const queryLetter = query[i].toLowerCase();

    if (vowels.includes(wordLetter) && vowels.includes(queryLetter)) {
      continue;
    }
    if (wordLetter === queryLetter) {
      continue;
    }
    return false;
  }
  return true;
}

const findVowel = (wordlist: string[], query: string): string => {
  for (let i = 0; i < wordlist.length; i++) {
    const word = wordlist[i];
    if (checkVowelWithQuery(word, query)) {
      return word;
    }
  }
  return '';
}

function spellchecker(wordlist: string[], queries: string[]): string[] {
  const wordlistSet = new Set<string>(wordlist);
  const wordlistInsensitiveSet = new Set<string>(wordlist.map((word) => word.toLowerCase()));
  const result: string[] = [];
  for (let i = 0; i < queries.length; i++) {
    const currentQuery = queries[i];
    // check full match
    if (wordlistSet.has(currentQuery)) {
      result.push(currentQuery);
      continue;
    }

    // check case insensitive
    if (wordlistInsensitiveSet.has(currentQuery.toLowerCase())) {
      const insensitive = wordlist.find((word) => word.toLowerCase() === currentQuery.toLowerCase());
      insensitive && result.push(insensitive);
      continue;
    }

    // check vowels
    result.push(findVowel(wordlist, currentQuery));
  }
  return result;
};

interface TableTest<T, K> {
  name: string,
  input: T,
  output: K,
}

// Input: wordlist = ["yellow"], queries = ["YellOw"]
// Output: ["yellow"]
 

const tableTest: TableTest<[string[], string[]], string[]>[] = [
  {
    name: 'test1',
    input: [["KiTe","kite","hare","Hare"], ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]],
    output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
  },
  {
    name: 'test2',
    input: [["yellow"], ["YellOw"]],
    output: ["yellow"]
  }
] 
const spellcheckerWrapper = (arg: [string[], string[]]): string[] => {
  return spellchecker(...arg);
}

const isSpellcheckerRight = (result: string[], expected: string[]): boolean => {
  if (result.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}

interface Car {
  name: string,
  engine: 'engine'
}

interface Bmw extends Car {
  name: 'bmw',
}

interface Lada extends Car {
  name: 'lada',
}

const isLada = (car: any): car is Lada => {
  if (car.name === 'lada') {
    return true;
  }
  return false;
}

type carArrItem = Bmw | Lada;

const arr: carArrItem[] = [];

const code = () => {
  const car: Car = {
    name: 'lada',
    engine: 'engine',
  }

  // if (isLada(car)) {
  //   car.
  // }

  
  if ('engine' in car) {
  
  }
}

const logTestFailedResult = <T, K>(test: TableTest<T, K>, result: K) => {
  console.log('FAILED ', test.name);
  console.log('OUT:', result);
  console.log('EXPECTED: ', test.output);
}

const runTests = <T, K>(tt: TableTest<T, K>[], func: (input: T) => K, isRight: (result: K, expected: K) => boolean) => {
  for (let test of tt) {
    const result = func(test.input);
    if (!isRight(result, test.output)) {
      logTestFailedResult(test, result);
      continue;
    }
    console.log('OK: ', test.name);
  }
}


runTests(tableTest, spellcheckerWrapper, isSpellcheckerRight);
