# Bestäm datatypen

- A-nivå
- [Gitbook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/bestam-datatypen/)

> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Komplettera koden så att funktionen `tellType` returnerar en sträng som beskriver vilken datatyp datat som skickats till funktionen är av. Du ska även komplettera `app.js` så att den använder funktionen `tellType` för att undersöka ett antal olika typer av data.

| Argument | Returvärde |
| -- | -- |
| textsträng | `'You sent me a string.'` |
| booleskt värde | `'You sent me a boolean.'` |
| nummer | `'You sent me a number.'` |
| objekt | `'You sent me an object.'` |
| array | `'You sent me an array.'` |
| null | `'You sent me a null value.'` |
| funktion | `'You sent me a function.'` |
| inget värde alls | `'You sent me an undefined value.'` |

I filerna `app.js` och `determinator.js` saknas det kod. Kommentaren `// TODO: Write your code here.` indikerar var det saknas kod.

## Filer

### determinator.js

Komplettera funktionen `tellType` så att den returnerar en sträng som beskriver datatypen argumentet är av som skickats till funktionen.

### app.js

Du ska komplettera med kod som anropar funktionen `tellType` och presentera det som returneras i konsolfönstret.

#### Exempel

```js
const determinator = require('./src/determinator');

console.log(determinator.tellType('Hasta la vista, baby.')) // outputs 'You sent me a string.'
console.log(determinator.tellType(true)) // outputs 'You sent me a boolean.'
console.log(determinator.tellType({})) // outputs 'You sent me an object.'
console.log(determinator.tellType([])) // outputs 'You sent me an array.'
console.log(determinator.tellType(function () {})) // outputs 'You sent me a function.'
...
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [funktioner](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [console.log](https://nodejs.org/api/console.html#console_console_log_data)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/data-type-determinator](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/data-type-determinator)
