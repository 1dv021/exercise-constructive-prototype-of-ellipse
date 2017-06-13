# Subjektiv sortering av objekt

- A-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/subjektiv-sortering-av-objekt/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `team.js` och komplettera funktionen `sortByPoints`, som ska returnera en sorterad kopia av arrayen som skickas som argument till funktionen. Arrayen, innehållande objekt med information om fotbollslag, ska sorterad i fallande ordning med avseende på poäng. Funktionen ska vara en så kallad "pure function", d.v.s. vara helt utan sidoeffekter.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om parametern inte är av typen `Array` ska ett undantag av typen `TypeError` kastas.

Uppgiften innehåller kod du inte får ändra. Det finns t.ex. redan funktioner som läser in en fil med JSON (JavaScript Object Notation, [http://json.org/](http://json.org/) och returnerar en array med objekt innehållande inläst data. Filen `data/teams.json` innehåller den JSON som läses in; valda uppgifter om fotbollslag: namn, smeknamn och poäng.

```js
const team = require('./src/team.js')

let arr = [
  { name: 'Arsenal', nickname: 'The Gunners', points: 75 },
  { name: 'Tottenhamn Hotspur FC', nickname: 'Spurs', points: 86 },
  { name: 'Liverpool', nickname: 'The reds', points: 76 }
]

arr = team.sortByPoints(arr)

// arr should be
// [
//   {name: 'Tottenhamn Hotspur FC', nickname: 'Spurs', points: 86},
//   {name: 'Liverpool', nickname: 'The reds', points: 76},
//   {name: 'Arsenal', nickname: 'The Gunners', points: 75}
// ]
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/sorting-objects](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/sorting-objects)
