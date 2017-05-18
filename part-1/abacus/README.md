# <i class="fa fa-laptop"></i> Kulramen
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal level-c"></i>C-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-abacus.git">https://github.com/1dv021/exercise-abacus.git</a></li>
</ul>

><i class="fa fa-warning">&nbsp;</i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](../../guider/att-komma-igang-med-en-ovningsuppgift/README.md) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-abacus.git). Öppna filen `src\abacus.js` och komplettera funktionen `add` så att samtliga krav uppfylls.

Du ska skapa en mycket enkel räknemodul som klarar av att summera att fritt antal parametrar i form av nummer (heltal som decimaltal), och returnera summan.

```
let abacus = require('./src/abacus.js');
let sum = abacus.add(2, 5, 19);
console.log(sum); // 26
```

Funktionen ska kunna hantera att anropas med en eller flera strängar där varje sträng ska kunna konverteras till ett tal.

```
let abacus = require('./src/abacus.js');
let sum = abacus.add(2, "21", 19);
console.log(sum); // 42

sum = abacus.add(2.5, "5", "3,5", "1.2"); // OBS! Både decimalkomma(,) och decimalpunkt(.) ska fungera
console.log(sum); // 12.2
```

Anropas funktionen där något av värde inte är ett tal eller inte kan konverteras till ett tal ska värdet NaN (Not-A-Number) returneras.

```
let abacus = require('./src/abacus.js');
let sum = abacus.add(3, 8, 5, true);
console.log(sum); // NaN

sum = abacus.add(3, 8, 5, 'lorem ipsum');
console.log(sum); // NaN
```
## <i class="fa fa-lightbulb-o"></i> Tips
Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Number.parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat), [parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [String.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
