# Buggig kod

- B-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/buggig-kod/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `src\bugsy.js` och gör de ändringar som krävs för att koden i funktionen `getGangster`ska fungera som avsett och testa grönt.

__OBS!__ Projektet innehåller funktioner med kod. Koden i funktionerna, bortsett från funktionen `getGangster`, får under inga omständigheter ändras.

## Funktioner

### getGangster (bugsy.js)

Funktionen är redan implementerad, d.v.s. den innehåller redan kod. Tyvärr är koden inte korrekt i alla avseenden varför den inte klarar testerna. Din uppgift är att skriva om koden i funktionen så att den klarar samtliga tester.

Denna funktion parameter i form av en sträng innehållande initialer tillhörande en misstänkt gangster. Funktionen med hjälp av initialerna leta reda på gangsterns fullständiga namn och returnera det. Hittas inget namn som matchar initialerna ska funktionen returnera strängen `'No suspect found!'`.

Till din hjälp finns i modulen `mostWanted` två funktioner `getNames` och `getInitials` som beskrivs nedan.

### getNames (mostWanted.js)

Funktionen returnerar en så kallad _generator_-objekt, som ger namn för namn från en lista gangstrars namn med hjälp av metoden `next()` och egenskapen `value`.

```js
const mostWanted = require('./mostWanted')

let names = mostWanted.getNames() // ger generator-objektet med alla namn
let name = names.next().value // ger det första namnet 'Bugsy Malone'
name = names.next().value // ger det andra namnet 'Frank Nitti'
...
name = names.next().value // finns det inga fler namn returneras undefined
```

### getInitials (mostWanted.js)

Funktionen returnerar ett fullständigt namns initialer.

```js
const mostWanted = require('./mostWanted')

let name = 'Ellen Nu'
let initials = mostWanted.getInitials(name) // ger 'EN'
```

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- ([for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of))
