# <i class="fa fa-laptop"></i> Buggig kod
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal level-a"></i>B-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-bugsy.git">https://github.com/1dv021/exercise-bugsy.git</a></li>
</ul>

><i class="fa fa-warning">&nbsp;</i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](../../guider/att-komma-igang-med-en-ovningsuppgift/README.md) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-tiny-funcs.git). Öppna filen `src\bugsy.js` och gör de ändringar som krävs för att koden i funktionen `getGangster`ska testa grönt.

<i class="fa fa-warning">&nbsp;</i> __OBS!__ Projektet innehåller funktioner med kod. Koden i funktionerna, bortsett från funktione `getGangster`, får under inga omständigheter ändras.

## Funktioner

### getGangster

Funktionen är redan implementerad, d.v.s. den innehåller redan kod. Tyvärr är koden inte korrekt i alla avseenden varför den inte klarar testerna. Din uppgift är att skriva om koden i funktionen så att den klarar samtliga tester.

Denna funktion parameter i form av en sträng innehållande initialer tillhörande en misstänkt gangster. Funktionen med hjälp av initialerna leta reda på gangsterns fullständiga namn och returnera det. Hittas inget namn som matchar initialerna ska funktionen returnera strängen `'No suspect found!'`.

Till din hjälp finns i namnrymden `MostWanted` två funktioner `getNames` och `getInitials` som beskrivs nedan.

### MostWanted.getNames

Funktionen returnerar en så kallad _generator_-objekt, som ger namn för namn från en lista  gangstrars namn med hjälp av metoden `next()` och egenskapen `value`.

```
let MostWanted = require('./MostWanted');

let names = MostWanted.getNames(); // ger generator-objektet med alla namn
let name = names.next().value;  // ger det första namnet 'Bugsy Malone'
name = names.next().value;  // ger det andra namnet 'Frank Nitti'
...
name = names.next().value;  // finns det inga fler namn returneras undefined
```

### MostWanted.getInitials

Funktionen returnerar ett fullständigt namns initialer.

```
let MostWanted = require('./MostWanted');

let name = 'Ellen Nu';
let initials = MostWanted.getInitials(name); // ger 'EN'
```

## <i class="fa fa-lightbulb-o"></i> Tips
Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- ([for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of))

## <i class="fa fa-flask"></i> Lösningsförslag
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/bugsy">https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/bugsy</a></li>
</ul>
