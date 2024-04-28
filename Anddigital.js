function homework(input) {
    const excluding = (i) => (xs) =>
      [...xs.slice(0, i), ...xs.slice(i + 1)]
    const permutations = ([...xs]) =>
      xs.length == 0
        ? [[]]
        : xs.flatMap((x, i) => permutations(excluding(i)(xs)).map(p => x + p))
    const extractNums = ([...input]) =>
      input.filter(c => /\d/.test(c)).join('')
    const nums = extractNums(input)
    return nums.length
      ? permutations(nums).sort((a, b) => b - a).join(', ')
      : 'Your error message here'
  }
  console.log(homework('326')); // expected ouput 632,623,362,326,263,236
  console.log(homework('A 3B2 C6D')); 
  console.log(homework('A B CD')); 
  
  
  