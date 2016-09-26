# <i class="fa fa-laptop"></i> Reducerad array med objekt
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal level-c"></i>C-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-reduced-array-of-objects.git">https://github.com/1dv021/exercise-reduced-array-of-objects.git</a></li>
</ul>

><i class="fa fa-warning"></i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-reduced-array-of-objects.git). Öppna filen `reducedArray.js` och komplettera funktionen `getTotal`.

Funktionen ska summera talen som finns i arrayen genom att använda `Array.reduce`.

```
let ra = require('./src/reducedArray');

let arr = [{nr: 4}, {nr: 5}];
let result = ra.getTotal(arr);
console.log(result); // output: 9

arr.push({nr: 33});
result = ra.getTotal(arr);
console.log(result); // output: 42
```

## <i class="fa fa-lightbulb-o"></i> Tips
Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## <i class="fa fa-flask"></i> Lösningsförslag
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/reduced-array-of-objects">https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/reduced-array-of-objects</a></li>
</ul>
