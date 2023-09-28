# Opdrachtbeschrijving

## Inleiding

Vorige week heb je het blogplatform Blogventure voor je vrienden Freek en Bernard opgezet. Omdat ze weten dat je geen
tijd hebt om óók nog de backend te bouwen, hebben ze dit door iemand anders laten doen. Jij kunt alle blogposts straks
opvragen door requests te maken naar deze backend (webAPI).

![logo.png](src/assets/logo-black.png)

## Applicatie starten

Deze opdracht is een vervolg op [part 1](https://github.com/hogeschoolnovi/frontend-react-blog-part1), dus je kunt verder werken in jouw eigen project. Wel zul je de blogventure
backend moeten clonen om er gebruik van te kunnen maken. Dit betekent dat je twee projecten tegelijkertijd aan het
runnen bent:
jouw Blogventure frontend en jouw Blogventure backend. Clone [deze backend](https://github.com/hogeschoolnovi/frontend-fake-blog-database) naar jouw eigen computer en start deze op
volgens de instructies in de `README.md`. Lees de documentatie goed door, zodat je weet welke endpoints
er beschikbaar zijn. Op basis van de volgende opdrachten zul je namelijk zelf moeten bedenken waar het request naartoe
moet.

_Tip:_ begin een nieuw, schoon frontend projectje zodat je onbezorgd kunt oefenen met de requests, voordat je dit
implementeert in je bestaande blogventure applicatie. Scheelt een hoop verwarring en zoekwerk.

## Opdracht 1 - Oefenrequests (in de console)

1. **Blogposts ophalen:** maak een tijdelijke button, zodat je daar jouw asynchrone functie aan kunt koppelen. Maak een
   request naar de backend om alle posts op te halen en log deze in de console;
2. **Post 6 ophalen:** maak nog een button en gebruik deze om de informatie over de post met `id` 6 op te halen uit de
   backend. Log deze gegevens in de console;
3. **Nieuwe post toevoegen:** maak nog een button en zorg ervoor dat er een nieuwe todo wordt toegevoegd aan de database
   wanneer de gebruiker hierop klikt. Dit mag je voor nu doen met hardcoded-tekst. Zorg ervoor dat er succesmelding in
   de console wordt gelogd bij succes en een foutmelding bij een mislukte poging.
4. Check, check, dubbelcheck: als je nu opnieuw alle posts ophaalt door op de haal taken op-knop te klikken, staat jouw
   toegevoegde to-do daar nu bij? 😍
5. **Post verwijderen:** maak een button en gebruik de `id` van de laatste to-do uit de lijst om deze uit de backend te
   verwijderen. Deze `id` mag je voor nu gewoon even handmatig overtypen (hardcoded). Zorg ervoor dat er bij success een
   melding in de console wordt gelogd en een foutmelding bij een mislukte poging (wanneer de post al verwijderd is,
   bijvoorbeeld);
6. **Post wijzigen:** maak nog een button en gebruik de `id` van de laatste to-do uit de lijst om daarvan de subtitel
   te wijzgen. Let erop dat je **alle** informatie van deze post meestuurt - ook de velden die niet
   worden aangepast! - anders verlies je gegevens. Ook hier wil je een succes- en foutmelding bij maken. Controleer of
   de wijziging gelukt is door daarna weer op de knop te klikken die alle posts ophaalt.

## Opdracht 2 - Alle posts ophalen en weergeven

Wanneer de gebruiker op de overzichtspagina komt, willen we natuurlijk direct beginnen met het ophalen en weergeven van
alle posts. Je hebt echter nog niet geleerd hoe je dit soort acties automatisch kunt triggeren*. We zullen alle requests
daarom nog even handmatig moeten aanzwengelen met behulp van buttons.

1. **Ophalen en opslaan:** zorg ervoor dat alle posts worden opgehaald wanneer de gebruiker op een 'Haal posts op'-knop
   klikt. Hiervoor maak je een stukje state aan, zodat je de opgehaalde posts daarin kunt zetten.
2. **Verwerken en afkaderen:** zorg ervoor dat de data die gebruikt wordt om de posts op de pagina weer te geven niet
   meer uit het JSON-bestand komt, maar uit de state. Om er nu voor te zorgen dat de app niet crasht als er nog geen
   data is, of als er geen data opgehaald kan worden, implementeer je een extra veiligheidscheck op de plek waar je over
   de posts heen mapt.
3. **Errors communiceren:** zorg ervoor dat er een passende foutmelding weergegeven wordt op de pagina wanneer het
   ophalen van de data mislukt. Zo weet de gebruiker altijd waar 'ie aan toe is.

## Opdracht 3 - Specifieke post ophalen en weergeven

We gaan hetzelfde doen op de pagina waar je de details over één post laat zien. Hiervoor halen we natuurlijk niet weer
alle posts op, maar alleen de informatie over de post die we willen weergeven. Doorloop hier weer dezelfde stappen:

1. Maak een knop
2. Haal de juiste post op (op basis van de id) en sla deze op in de state;
3. Gebruik de state data om de gegevens weer te geven en bouw een passende veiligheidscheck in;
4. Handel foutmeldingen netjes af naar de gebruiker.

## Opdracht 3 - Formulier werkend maken

We hebben ons formulier natuurlijk al zo opgebouwd dat alle juiste informatie in een object verzameld wordt wanener de
gebruiker het formulier submit. Er wordt echter niets verzonden... Ook daar gaan we verandering in brengen.
1. Breidt de huidige `handleSubmit` functie uit, door er een asynchrone functie van te maken en voeg een `try/catch`-blok toe.
2. Verstuur de verzamelde informatie op de voorgeschreven manier (in de documentatie) naar de backend;
3. Bij succes verdwijnt het formulier en geef je het volgende weer op de pagina:

> De blogpost is succesvol toegevoegd. Je kunt deze hier`<link-naar-post>` bekijken.

4. Ging er iets mis? Dan blijft het formulier staan en geef je een rode foutmelding weer.

## Bonusopdracht

* Zorg ervoor dat de gebruiker posts kan verwijderen doormiddel van een 'delete'-knop op de detailpagina.

*Hiervoor heb je effect-hooks nodig. Hoe deze hooks in React precies werken, zullen we later behandelen. Je mag voor nu
simpelweg aannemen dat dit nodig is om niet in een never-ending-loop terecht te komen. Als je toch erg nieuwschierig
bent naar effect-hooks en life cycles, geen zorgen, dit komt volgende week aan bod!
