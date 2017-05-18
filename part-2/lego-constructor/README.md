# <i class="fa fa-laptop"></i> Legokonstruktören
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-signal level-a"></i>A-nivå</li>
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-lego-constructor.git">https://github.com/1dv021/exercise-lego-constructor.git</a></li>
</ul>

><i class="fa fa-warning"></i> __VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem [övningsuppgiftens repo](https://github.com/1dv021/exercise-lego-constructor.git) och komplettera enligt nedan.

## Uppgift

I denna uppgift ska du komplettera med kod så att objekt, som representerar en enkel legobit, skapas enligt tre olika designmönster, _"Factory Pattern"_, _"Constructor Pattern"_ och _"Constructor/Prototype Pattern"_ .

Övningsuppgiften är uppdelad i tre filer och du ska skriva kod i som skapar objekt enligt nämnda designmönster. Genomför uppgiften genom att arbeta med filerna, och designmönsterna, i tur och ordning.

1. `lego-part1.js` - _"Factory Pattern"_
2. `lego-part2.js` - _"Constructor Pattern"_
3. `lego-part3.js` - _"Constructor/Prototype Pattern"_

Genom att använda de olika designmönstren ska objekt skapas som har egenskaper och metoder enigt nedan.

### Egenskaper

- `x`, antal knoppar i horisontell led, standardvärde 2.
- `y`, antal knoppar i vertikal led, standardvärde 4.
- `color`, färg som sträng, standardvärde 'red'.

### Metoder

- `toString`, returnerar en sträng representerande objektet, `® ® ® ®\n® ® ® ®` ska retuneras för ett objekt där `x` är 4 och `y` är 2.
- `render`, skriver ut strängen metoden `toString` returnerar i ett konsolfönster.

## <i class="fa fa-lightbulb-o"></i> Tips
__Ta del av föreläsning 5 innan du genomför denna uppgift!__

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

## <i class="fa fa-flask"></i> Lösningsförslag
<ul class="fa-ul fa-border exercise-info">
  <li><i class="fa-li fa fa-github"></i><a href="https://github.com/1dv021/exercise-solution-proposals/tree/master/part-2/lego-constructor">https://github.com/1dv021/exercise-solution-proposals/tree/master/part-2/lego-constructor</a></li>
</ul>
