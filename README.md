# Bättre än Svensson

- B-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/battre-an-svensson/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `my-array.js` och komplettera funktionen `filterBetterThanAverage`.

Funktionen ska analysera en array innehållande objekt med namn och poäng, exempelvis `{name: 'Ellen', points: 42}`. Funktionen ska gå igenom samtliga objekt och bestämma medelpoängen för att därefter returna en array som bara innehåller namnen på de vars poäng är bättre eller lika med medelpoängen.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om parametern inte är av typen `Array` ska ett undantag av typen `TypeError` kastas.

Visdare så ska funktionen vara en så kallad "_pure function_", d.v.s. vara helt utan sidoeffekter.

```js
const ma = require('../src/my-array');

let arr = [
{name: 'Stina', points: 1},
{name: 'Erik', points: 2},
{name: 'Maja', points: 3},
{name: 'Sven', points: 4}
]

let result = ma.filterBetterThanAverage(arr)
console.log(result) // ['Maja', 'Sven']
```

Som synes av exemplet ovan att en array med fyra objekt skickades in. Poängerna 1, 2, 3, 4 ger ett medelvärde på 2,5, `(1+2+3+4) / 4`. De personer som har en poäng/points över, eller lika med 2,5 är Maja och Sven varför dessa två namn returneras (i samma ordning) i en ny array, `['Maja', 'Sven']`.

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/better-than-average](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/better-than-average)
