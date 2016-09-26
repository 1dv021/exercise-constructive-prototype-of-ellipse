# <i class="fa fa-laptop"></i> Episk ellips med klass
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal level-a"></i>A-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-epic-ellipse-with-class.git">https://github.com/1dv021/exercise-epic-ellipse-with-class.git</a></li>
</ul>

><i class="fa fa-warning"></i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-epic-ellipse-with-class.git) och komplettera enligt nedan.

## Uppgift

Du ska skriva en klass som skapar objekt av typen `Ellipse` där arean och omkretsen ska kunna beräknas. I samband med att objektet skapas ska det vara möjligt att ange halva storaxelns längd, som betecknas a, och halva lillaxelns längd, som betecknas b.

![Ellips](ellips.gif)

En ellips area kan bestämmas med $$A=\pi a b$$, `Math.PI * a * b`, och dess omkrets approximativt med $$O = \pi \sqrt{2 a^2 + 2 b^2}$$, `Math.PI * Math.sqrt(2 * a * a + 2 * b * b)`.

## Klassen Ellipse

Du ska komplettera filen `Ellipse.js` med kod som gör det möjligt att instansiera objekt av klassen `Ellipse`.

### Egenskaper
- `a`, halva storaxelns längd.
- `b`, halva lillaxelns längd.

### Metoder

Metoderna nedan ska vara gemensamma för samtliga objekt som instansieras av klassen.

- `area`, ska returnera ellipsens area.
- `circumference`, ska returnera ellipsens omkrets.
- `toString`, ska returnera en sträng representerande aktuellt objekt, med halva storaxelns längd satt till 42.7 och halva lillaxelns längd satt till 13.8, enligt `{ a: 42.7, b: 13.8, area: 1851.2, circumference: 199.4 }` där arean respektive omkretsen ska avrundas till en decimal.

## <i class="fa fa-lightbulb-o"></i> Tips
__Se föreläsning 6 och fokusera på `class`.__

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

## <i class="fa fa-flask"></i> Lösningsförslag
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-solution-proposals/tree/master/part-2/epic-ellipse-with-class">https://github.com/1dv021/exercise-solution-proposals/tree/master/part-2/epic-ellipse-with-class</a></li>
</ul>
