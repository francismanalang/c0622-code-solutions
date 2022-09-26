/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 2 * 1 = O(2)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 3 * n = O(3n) ~= 0(n)
    if (!seen[word]) {              // 4 * n = O(4n) ~= 0(n)
      seen[word] = true;            // 5 * n = O(5n) ~= 0(n)
      unique[unique.length] = word; // 6 * n = O(6n) ~= 0(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 3 * n = O(3n) ~= 0(n)
    let isUnique = true;            // 4 * n = O(4n) ~= 0(n)
    for (
      let c = 0;                    // 1 * n     = O(n) NESTED LOOP!
      c < i;                        // 2 * n * n = O(2n^2) ~= 0(n^2)
      c++                           // 2 * n * n = O(2n^2) ~= 0(n^2)
    ) {
      const comparing = words[c];   // 1 * n * n = O(n^2)
      if (comparing === word) {     // 2 * n * n = O(2n^2) ~= 0(n^2)
        isUnique = false;           // 3 * n * n = O(3n^2) ~= 0(n^2)
      }
    }
    if (isUnique) {                 // 1 * n = O(n)
      unique[unique.length] = word; // 2 * n = O(2n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
