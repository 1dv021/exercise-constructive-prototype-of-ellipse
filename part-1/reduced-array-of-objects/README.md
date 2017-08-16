# Reducerad array med objekt

- C-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/reducerad-array-med-objekt/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg tillen .gitignore-fil. Öppna filen `my-array.js` och komplettera funktionen `getSum`.

Funktionen ska summera talen som finns i arrayen genom att använda `Array.reduce`.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om parametern inte är av typen `Array` ska ett undantag av typen `TypeError` kastas.

Vidare så ska funktionen vara en så kallad "_pure function_", d.v.s. vara helt utan sidoeffekter.

```js
const ma = require('./src/my-array');

let arr = [{nr: 4}, {nr: 5}];
let result = ma.getSum(arr);
console.log(result); // output: 9

arr.push({nr: 33});
result = ma.getSum(arr);
console.log(result); // output: 42
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/reduced-array-of-objects](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/reduced-array-of-objects)
