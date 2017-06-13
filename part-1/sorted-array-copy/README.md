# Sorterad kopia av array

- A-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/sorterad-kopia-av-array/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `my-array.js` och komplettera funktionerna `immutableSort`, som ska returnera en kopia av en array sorterad numeriskt i stigande ordning, och `immutableSortDescending`, som ska returnera en kopia av en array sorterad numeriskt i fallande ordning. Ingen av metoderna får ha några sidoeffekter.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om parametern inte är av typen `Array` ska ett undantag av typen `TypeError` kastas.

```js
'use strict'

const ma = require('./src/my-array.js')

let originalArray = [2, 5, 1, 6]

try {
  console.log('Original array: ', originalArray)

  let result = ma.immutableSort(originalArray) // should return [1, 2, 5, 6]
  console.log('\nOriginal array: ', originalArray)
  console.log('Sorted array: ', result)

  result = ma.immutableSortDescending(originalArray) // should return [6, 5, 2, 1]
  console.log('\nOriginal array: ', originalArray)
  console.log('Sorted (descending) array: ', result)
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}

console.log()

try {
  ma.immutableSort() // should throw a TypeError
  console.log('ma.immutableSort throws no TypeError!')
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}

try {
  ma.immutableSortDescending() // should throw a TypeError
  console.log('ma.immutableSortDescending throws no TypeError!')
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som __kan__ komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/sorted-array-copy](github.com/1dv021/exercise-solution-proposals/tree/master/part-1/sorted-array-copy)
