# <i class="fa fa-laptop"></i> Knivskarp HTML

<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal level-a"></i>A-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-shaver-sharp-html.git">https://github.com/1dv021/exercise-shaver-sharp-html.git</a></li>
</ul>

><i class="fa fa-warning"></i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](../../guider/att-komma-igang-med-en-ovningsuppgift/README.md) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Denna uppgift ska resultera i en applikation som skapar HTML. Det är dock en enklare variant som
bara klarar av att skapa starttag, sluttag och textinnehåll däremellan. Den klarar alltså
inte av t.ex. tomma element eller attribut. Tanken är att du i slutändan ska kunna skicka in
en array med objekt som instruerar applikationen att skapa HTML-kod i form av en textsträng.
Du behöver inte ta hänsyn till så kallade "whitespaces", så som radbrytningar så HTML-strängen blir
i ett stycke.

## Funktioner

Uppgiften är tänkt att lösas via fyra olika funktioner för att enklare bryta ner problemet.

### createBeginTag

Tar en textsträng som parameter och returnerar en textsträng i form av en starttagg.

```
let html = ShaverSharp.createBeginTag("h1"); // html contains "<h1>"
```

### createEndTag
Tar en textsträng som parameter och returnerar parametern formaterad som en sluttagg.

```
let html = ShaverSharp.createEndTag("h1"); // html contains "</h1>"
```

### createElement

Tar två textsträngar som parameter och returnerar en textsträng av ett helt element.
Här bör man anropa de två tidigare funktionerna för att skapa slutresultatet

```
let html = ShaverSharp.createElement("h1", "This is a headline"); // html contains "<h1>This is a headline</h1>"
```

### createElements

Tar en array med objekt som parameter och returnerar en textsträng i form av HTML.

```
let arr = [{element: 'h1', innerHTML: 'This is a headline'}, {elment: 'p', innerHTML: '...and this is a paragraph.'}]
let html = ShaverSharp.createElements(arr); // html contains '<h1>This is a headline</h1><p>...and this is a paragraph.</p>'
```

## <i class="fa fa-lightbulb-o"></i> Tips
Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [funktioner](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [console.log](https://nodejs.org/api/console.html#console_console_log_data)

## <i class="fa fa-flask"></i> Lösningsförslag
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/shaver-sharp-html">https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/shaver-sharp-html</a></li>
</ul>
