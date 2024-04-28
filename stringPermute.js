const excluding = (i) => (xs) => 
  [... xs .slice (0, i), ... xs .slice (i + 1)]

const permutations = ([...xs]) => 
  xs .length == 0 
    ? [[]] 
    : xs .flatMap ((x, i) => permutations (excluding (i) (xs)) .map (p => x + p))

const extractNums = ([...s]) =>
  s .filter (c => /\d/ .test (c)) .join ('')

const numPermute = (s, nums = extractNums (s)) =>
  nums .length 
    ? permutations (nums) .sort ((a, b) => b - a) .join (', ')
    : 'Your error message here'

    console.log(numPermute('326')); // expected ouput 632,623,362,326,263,236
    console.log(numPermute('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
