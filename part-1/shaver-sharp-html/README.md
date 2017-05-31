# Knivskarp HTML

- A-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/knivskarp-html/)

> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Denna uppgift ska resultera i en applikation som skapar HTML. Det är dock en enklare variant som bara klarar av att skapa starttag, sluttag och textinnehåll däremellan. Den klarar alltså inte av t.ex. tomma element eller attribut. Tanken är att du i slutändan ska kunna skicka in en array med objekt som instruerar applikationen att skapa HTML-kod i form av en textsträng. Du behöver inte ta hänsyn till så kallade "whitespaces", så som radbrytningar så HTML-strängen blir i ett stycke.

Implementera funktionerna enligt anvisningarna.

## Funktioner

Uppgiften är tänkt att lösas via fyra olika funktioner för att enklare bryta ner problemet.

### createBeginTag

Tar en textsträng som parameter och returnerar en textsträng i form av en starttagg.

```js
let html = shaverSharp.createBeginTag('1')
// html contains '<h1>'
```

### createEndTag

Tar en textsträng som parameter och returnerar parametern formaterad som en sluttagg.

```js
let html = shaverSharp.createEndTag('h1')
// html contains '</h1>'
```

### createElement

Tar två textsträngar som parameter och returnerar en textsträng av ett helt element.
Här bör man anropa de två tidigare funktionerna för att skapa slutresultatet

```js
let html = shaverSharp.createElement('h1', 'This is a headline')
// html contains '<h1>This is a headline</h1>'
```

### createElements

Tar en array med objekt som parameter och returnerar en textsträng i form av HTML.

```js
let arr = [
{element: 'h1', innerHTML: 'This is a headline'},
{elment: 'p', innerHTML: '...and this is a paragraph.'}
]
let html = shaverSharp.createElements(arr)
// html contains '<h1>This is a headline</h1><p>...and this is a paragraph.</p>'
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
