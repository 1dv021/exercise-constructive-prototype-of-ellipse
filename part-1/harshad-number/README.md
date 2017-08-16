# Harshadtal

- C-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/harshadtal/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil.
Harshadtal, eller Nivental, i en given talbas, i denna uppgift talbasen 10, är ett heltal som är jämt delbart med sin siffersumma.

Exempel på tal som är Harshadtal:

- 10, då 1 + 0 = 1 och 10 är lika med 1 &times; 10
- 24, då 2 + 4 = 6 och 24 är lika med 6 &times; 4
- 198, då 1 + 9 + 8 = 18 och 198 är lika med 18 &times; 11

Exempel på tal som inte är Harshadtal:

- 17, då 1 + 7 = 8 och 17 går inte att dividera utan rest med 8
- 349, då 3 + 4 + 9 = 16 och 349 går inte att dividera utan rest med 16
- 2197, 2 + 1 + 9 + 7 = 19 och 2197 går inte att dividera utan rest med 19

Din uppgift är att slutföra implementationen av det påbörjade Harshad-modulen, som har tre funktioner. Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil och implementera funktionerna nedan enligt anvisningarna.

- `isValid`, undersöker om ett tal är ett Harshadtal eller inte. `harshad.isValid(24)` returnerar `true`.
- `getNext`, returnerar nästa Harshadtal. `harshad.getNext(14)` returnerar `18`.
- `getSequence`, returnerar en array innehållande en sekvens av n Harshadtal, där startvärdet, som inte behöver anges och har standardvärdet 0, inte är inkluderat.
- `harshad.getSequence(3, 160)` returnerar `[162, 171, 180]`.
- `harshad.getSequence(15)` returnerar `[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24 ]`.

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [Number.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
- [String.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/harshad-number](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/harshad-number)
