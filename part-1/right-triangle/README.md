# Rätvinklig triangel

- A-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/ratvinklig-triangel/)

> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg till en .gitignore-fil. Öppna filen `shape.js` och komplettera funktionen `shape.createRightTriangle(base)`, som endast får använda följande strängar, en gång vardera,

- `'#'`
- `'\n'`

för att skapa en rätvinklig triangel i form av en enda sträng som funktionen returnerar. Vid anrop av funktionen ska det vara möjligt att bestämma hur många tecken som ska finnas i den rätvinkliga triangelns bas.

Anropet `console.log(shape.createRightTriangle(5))` ska ge triangeln

<pre>#
##
###
####
#####</pre>

Anropet `console.log(shape.createRightTriangle(10))` ska ge triangeln

<pre>#
##
###
####
#####
######
#######
########
#########
##########</pre>

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testerna...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- [string.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [+=, tilldelningsoperator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)
- [<=, operatorn mindre än eller lika med](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)
