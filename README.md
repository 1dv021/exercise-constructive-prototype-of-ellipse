# Reducerad array

- B-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/reducerad-array/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg tillen .gitignore-fil. Öppna filen `my-array.js` och komplettera funktionen `getSum`.

Funktionen ska summera talen som finns i arrayen genom att använda `Array.reduce`.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om parametern inte är av typen `Array` ska ett undantag av typen `TypeError` kastas.

Vidare så ska funktionen vara en så kallad "_pure function_", d.v.s. vara helt utan sidoeffekter.

```js
const ma = require('../src/my-array')

let sum = ma.getSum([1, 2, 3])
// sum should be 6 (as 1 + 2 + 3 is 6)

sum = ma.getSum([])
// sum should be 0
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/reduced-array](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/reduced-array)
