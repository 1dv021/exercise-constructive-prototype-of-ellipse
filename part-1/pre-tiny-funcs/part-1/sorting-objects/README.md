# <i class="fa fa-laptop"></i> Subjektiv sortering av objekt
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal level-a"></i>A-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-sorted-array-copy.git">https://github.com/1dv021/exercise-sorted-array-copy.git</a></li>
</ul>

><i class="fa fa-warning"></i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-additional-array-copy.git). Öppna filen `Team.js` och komplettera funktionen `sortByPoints`, som ska sortera den array som skickas som argument till funktionen för att sedan dessutom returnera arrayen. Arrayen, innehållande objekt med information om fotbollslag, ska sorterad i fallande ordning med avseende på poäng.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om  parametern inte är av typen `Array` ska ett undantag av typen `TypeError` kastas.

Uppgiften innehåller kod du inte får ändra. Det finns t.ex. redan funktioner som läser in en fil med JSON  (JavaScript Object Notation,  http://json.org/) och returnerar en array med objekt innehållande inläst data. Filen `data/teams.json` innehåller den JSON som läses in; valda uppgifter om fotbollslag: namn, smeknamn och poäng.

```
let team = require('./Team.js');

let arr = [
    {name: "Arsenal", nickname: "The Gunners", points: 1},
    {name: "Tottenhamn Hotspur FC", nickname: "Spurs", points: 20},
    {name: "Liverpool", nickname: "The reds", points: 10}
];

Team.sortByPoints(arr);

// arr should be
//[
//    {name: "Tottenhamn Hotspur FC", nickname: "Spurs", points: 20},
//    {name: "Liverpool", nickname: "The reds", points: 10},
//    {name: "Arsenal", nickname: "The Gunners", points: 1}
//]
```

## <i class="fa fa-lightbulb-o"></i> Tips
Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

## <i class="fa fa-flask"></i> Lösningsförslag
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/sorting-objects">https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/sorting-objects</a></li>
</ul>
