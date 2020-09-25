<h1 align="center">
Mike Gatsby blog
</h1>
<p align="center">
  <a href="https://mike-sundqvist-webbutveckling.netlify.app/" text-decoration="none" font-size="1.25rem" color="orangered">Länk till min sida</a>
</p>
För att redigera koden måste du använda ett utvecklingsverktyg, rekommenderat "Visual Studio Code". Ladda ner projektet på din dator och öppna
mappen i Visual Code. Det finns flera plug-ins i package.json filen som du installerar genom att öppna terminalen och köra kommandot "npm install", obs! kräver att du har
node installerat på datorn.
För att se sidan kör du kommandot "gatsby develop" och öppnar http://localhost:8000 på din webbläsare.

<h2 align="center">
Se samband och värdera alternativa lösningar vid val av programmeringsteknik vid utveckling av dynamiska webbplatser
</h2>
<p>
Vi har utvecklat en sida i gatsby som är en utveckling av React. Istället för att skapa statiska sidor i html så har vi skrivit allt i javascript
och låter gatsby(react) skapa html-sidorna åt oss. Fördelen var svår att se i början när vi inte kommit långt i projektet och små ändringar krävde mycket jobb
men efter hand fick man en bättre överblick och insåg hur enkelt det var att bygga upp sidan i kodblock istället för att hårdkoda in allt. När man redan har styling och layout
färdig i tex gatsby-bloggen är det sen enkelt att lägga till nya blogginlägg. Kan tänka mig en edit-version som bara tar emot bild, titel osv och sen tar koden hand om resten -skapar sidan, länkar(via graphql) osv.
En anledning att inte använda dynamiska websidor skulle vara om det är en sida med info som inte ska ändras, exempelvis http://cartlidgesqualitymeats.com/, då behöver man endast
deploya en sida med en html och css.
Anledningen till att använda dynamiska sidor är när innehållet på sidan ska ändras kontinuerligt. Om man vill visa ett facebookflöde tex. Där hämtas information på servern via apier som sen skickas till klienten. Andra exempel kan vara en shopping-sida som hämtar information från en databas om tex pris och tillgång.
Serverbaserade skripter känner jag är vanligast och bidrar mest till upplevelsen av en levande hemsida. En anldening att använda klientbaserad skript skulle kunna vara om man tex gör ett enkelt spel.
Jag har använt .asp innan i utbildningen och det fungerade utmärkt tillsammans med sqlserver.

källa: https://www.quora.com/What-are-some-common-examples-of-static-websites-and-dynamic-websites
       powerpointen server-client sidor på navet :)
       lektioner.
</p>