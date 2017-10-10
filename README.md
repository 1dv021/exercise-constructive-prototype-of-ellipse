# KOnstruktiv prototype av ellips

- A-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del2/?/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo, lägg till en .gitignore-fil och komplettera enligt anvisningarna.

## Uppgift

I denna uppgift ska du komplettera med kod så att objekt, som representerar en ellips, skapas enligt _"Constructor/Prototype Pattern"_ . Genom att använda arv ska även objekt representarande en cirkel kunna skapas.

Övningsuppgiften är uppdelad i tre filer och du ska skriva kod i som skapar objekt enligt nämndt designmönster. Genomför uppgiften genom att arbeta med filerna, och designmönster, i tur och ordning.

1. `Ellips.js` - _"Constructor/Prototype Pattern"_
1. `Circle.js` -  _"Constructor/Prototype Pattern"_ som ärver från `Ellips`.

Genom att använda designmönstret ska objekt skapas som har egenskaper och metoder enigt nedan.

### src/Ellipse.js

Du ska skriva en konstruktorfunktion som skapar ett objekt av typen `Ellipse` där arean och omkretsen ska kunna beräknas. I samband med att objektet skapas ska det vara möjligt att ange halva storaxelns längd, som betecknas `a`, och halva lillaxelns längd, som betecknas `b`.

En ellips area kan bestämmas med `Math.PI * a * b`, och dess omkrets approximativt med `Math.PI * Math.sqrt(2 * a * a + 2 * b * b)`.

#### Egenskaper

- `a`, halva storaxelns längd.
- `b`, halva lillaxelns längd.

#### Metoder

Metoderna nedan ska vara gemensamma för samtliga objekt som instansieras av typen `Ellipse`.

- `getArea`, ska returnera ellipsens area.
- `getCircumference`, ska returnera ellipsens omkrets.
- `toString`, ska returnera en sträng representerande aktuellt objekt, med halva storaxelns längd satt till 42.7 och halva lillaxelns längd satt till 13.8, enligt `a: 42.7, b: 13.8, area: 1851.2, circumference: 199.4` där arean respektive omkretsen ska avrundas till en decimal.

### src/Circle.js

Du ska skriva en konstruktorfunktion som skapar ett objekt av typen `Circle` där arean och omkretsen ska kunna beräknas. I samband med att objektet skapas ska det vara möjligt att cirkelns radie, som betecknas `radius`. Se till att återanvända kod i så stro utsträckning som möjligt från typen `Ellipse` genom att använda arv.

En ellips area kan bestämmas med `Math.PI * radius * radius`, och dess omkrets med `2 * Math.PI * radius`.

#### Egenskaper

- `radius`, cirkelns radie.

#### Metoder

Metoderna nedan ska vara gemensamma för samtliga objekt som instansieras av typen `Circle`.

- `getArea`, ska returnera cirkelns area.
- `getCircumference`, ska returnera cirkelns omkrets.
- `toString`, ska returnera en sträng representerande aktuellt objekt, med radien satt till 42.7, enligt `radius: 42.7, area: 5728.0, circumference: 268.3` där arean respektive omkretsen ska avrundas till en decimal.

### src/Circle.js



## Tips

__Ta del av föreläsningarna om olika sätt att skapa objekt, och återanvändning av kod, innan du fullständigt fullföljer denna uppgift!__

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-2/constructive-prototype-of-ellipse](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-2/constructive-prototype-of-ellipse)
