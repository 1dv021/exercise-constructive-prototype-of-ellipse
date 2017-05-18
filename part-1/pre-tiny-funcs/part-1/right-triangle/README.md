# <i class="fa fa-laptop"></i> Rätvinklig triangel
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal"></i>A-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-right-triangle.git">https://github.com/1dv021/exercise-right-triangle.git</a></li>
</ul>

><i class="fa fa-warning"></i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-right-triangle.git). Öppna filen `Shape.js` och komplettera funktionen `Shape.createRightTriangle(base)`, som endast får använda följande strängar, en gång vardera, 

- `'#'`
- `'\n'`

för att skapa en rätvinklig triangel i form av en enda sträng som funktionen returnerar. Vid anrop av funktionen ska det vara möjligt att bestämma hur många tecken som ska finnas i den rätvinkliga triangelns bas.

Anropet `console.log(Shape.createRightTriangle(5));` ska ge triangeln

<pre>#    
##  
###  
####  
#####</pre>

Anropet `console.log(Shape.createRightTriangle(10));` ska ge triangeln

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

## <i class="fa fa-lightbulb-o"></i> Tips
Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- [string.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [+=, tilldelningsoperator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators) 
- [<=, operatorn mindre än eller lika med](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators) 
