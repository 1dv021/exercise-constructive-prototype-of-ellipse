# Kulramen

- C-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/kulramen/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `src\abacus.js` och komplettera funktionen `add` så att samtliga krav uppfylls.

Du ska skapa en mycket enkel räknemodul som klarar av att summera att fritt antal parametrar i form av nummer (heltal som decimaltal), och returnera summan.

```js
const abacus = require('./src/abacus.js')

let sum = abacus.add(2, 5, 19)
console.log(sum) // 26
```

Funktionen ska kunna hantera att anropas med en eller flera strängar där varje sträng ska kunna konverteras till ett tal. Även en eller flera arrayer med värden ska kunna skickas som argument till funktionen.

```js
const abacus = require('./src/abacus.js')

let sum = abacus.add(2, "21", 19)
console.log(sum) // 42

sum = abacus.add(2.5, "5", "3,5", "1.2") // OBS! Både decimalkomma(,) och decimalpunkt(.) ska fungera
console.log(sum) // 12.2

sum = abacus.add(1, 2, [3, 4], 5, [6, 7]) // OBS! Det ska gå att skicka med arrayer som argument
console.log(sum) // 28
```

---
Vill du göra det extra svårt för dig? Se till att metoden klara av att hantera nästlade arrayer, d.v.s. arryer inuti arrayer, vilket kräver någon form av rekursion.

```js
sum = abacus.add(1, 2, [3, 4, [6, 7]], 5]) // OBS! Det ska gå att skicka med nästlade arrayer som argument
console.log(sum) // 28
```

---

Anropas funktionen där något av värdena inte är ett tal eller inte kan konverteras till ett tal ska ett undantag av typen `TypeError` kastas med meddelandet `At least one of the arguments can't be parsed as a number.`.

```js
let abacus = require('./src/abacus.js')
let sum

try {
sum = abacus.add(3, 8, 5, true) // must throw an exception
console.log(sum)
} catch (e) {
console.error(e.message)
}

try {
sum = abacus.add(3, 8, 5, 'lorem ipsum') // must throw an exception
console.log(sum)
} catch (e) {
console.error(e.message)
}

// Output:
// At least one of the arguments can't be parsed as a number.
// At least one of the arguments can't be parsed as a number.
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [Spread-operatorn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Array.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [String.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [String.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
- [Number.parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)

- [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Array.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [String.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [Number.parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat), [parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/abacus](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/abacus)
