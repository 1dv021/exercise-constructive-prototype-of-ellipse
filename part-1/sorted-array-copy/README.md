# <i class="fa fa-laptop"></i> Sorterad kopia av array
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal level-a"></i>A-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-sorted-array-copy.git">https://github.com/1dv021/exercise-sorted-array-copy.git</a></li>
</ul>

><i class="fa fa-warning"></i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-additional-array-copy.git). Öppna filen `MyArray.js` och komplettera funktionerna `sort`, som ska returnera en kopia av en array sorterad numeriskt i stigande ordning, och `sortDescending`, som ska returnera en kopia av en array sorterad numeriskt i fallande ordning.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om  parametern inte är av typen `Array` ska ett undantag av typen `TypeError` kastas.

```
let MyArray = require('./src/MyArray.js');

let originalArray = [2, 5, 1, 6];

try {
  console.log('Original array: ', originalArray);

  let result = MyArray.sort(originalArray); // returns [1, 2, 5, 6]
  console.log('\nOriginal array: ', originalArray);
  console.log('Sorted array: ', result);

  result = MyArray.sortDescending(originalArray); // returns [6, 5, 2, 1]
  console.log('\nOriginal array: ', originalArray);
  console.log('Sorted (descending) array: ', result);
} catch (e) {
  console.log(e);
}

console.log();

try {
  MyArray.sort(); // throws TypeError
  console.error('MyArray.sort throws no TypeError!');
} catch (e) {
  console.log(e);
}

try {
  MyArray.sortDescending(); // throws TypeError
  console.error('MyArray.sortDescending throws no TypeError!');
} catch (e) {
  console.log(e);
}
```

## <i class="fa fa-lightbulb-o"></i> Tips
Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

## <i class="fa fa-flask"></i> Lösningsförslag
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/sorted-array-copy">https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/sorted-array-copy</a></li>
</ul>
