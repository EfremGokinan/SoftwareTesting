# SoftwareTesting
Naam docent : Frank Serneels
Testomgeving : REST API testing met postman Cursus

# Logboek Software Testing - Efrem Gokinan

## 27/09 Week 2 - 1 uur

Github/repo aanmaken

Gesprek met docent 

Aankoop udemy course

Bekijken van documentie

## 4/10 Week 3 - 5 uur

Section 1 (40min) : Aangezien ik vorig jaar al bekend was met Postman, hoefde ik niet de hele inleiding te zien. Het bleek dat ik al een Postman account had, net als de desktop applicatie.
In dit gedeelte zal de auteur uitleggen wat postman is, en hoe je eenvoudige GET/POST gebruiktt. Hij geeft daarbij ook een pdf waarbij hij laat zien wat de Postman landscape is. In de map "quiz 1" vind u de quiz die ik heb gemaakt gedurende deze sectie.

Section 2 (1uur20) : In dit gedeelte bekijken we hoe je een eenvoudig verzoek maakt, wat de verschillende onderdelen van een verzoek zijn. Hoe importeer ik een verzoek van een html site, Hoe HTTP antwoorden te inspecteren in Postman. Zo een zaken werden in sectie 2 uitgelegd. Daarna hebben we gezien hoe je collecties kunt opslaan die requests bevatten. Tenslotte hebben we gezien hoe we problemen kunnen oplossen als de gekozen API niet goed werkt. Nogmaals in deze sectie was ik al bekend met Postman waarbij het niet zo moeilijk was. Aan het einde van de sectie was er een oefening (zie github - opdracht 1).

Section 3 (3uur): In deze sectie hebben we gekeken naar hoe je een API kan testen met een API documentatie. Daarna hebben we gezien hoe we testen kunnen uitvoeren met behulp van de trello API. Vervolgens hebben we gekeken naar hoe we nog meer scripts kunnen uitvoeren om nog de API nog meer uit te testen. Deze sectie was interessant om te volgen. Als laatste werd een oefening gegeven. Deze was heel leuk om te maken (zie github - opdracht 2).


## 11/10 Week 4 - 4 uur

Gastcollege Introductie tot Software Testing (2uur)

Sectie 4 (2uur): In deze sectie werd gekeken naar het verschil tussen globale en environment variabele. Het verschil was al van sectiie 3 duidelijk voor mij. Voor opdracht 2 gebruikte ik globale variabele. Ik zal voor opdracht 3 environment variabele gebruiken. Daarna werd ook gekeken naar de pre-request scripts in postman. Dat is ook iets interessant om bijvoorbeeld een randomnaam van een bord mee te geven aan een variabele. Zie github - opdracht 3. Na de opdracht was er nog een video waarbij hij uiitlegde hoe je meerdere links kunt configureren als environment variabele om meerdere api-url uit te testen.

Sectie 5: Deze sectie ga ik niet bekijken wegens de verouderde versie (wordt verwijderd na dit jaar).

## 18/10 Week 5 - 5 uur 30

Gastcollege Behavior Driven Development op campus (2uur)

Sectie 6 (1uur): In deze sectie werd het onderwerp assertie uitgelegd. Ten eerste hebben we gekeken naar de basic postman asserties. Daarna keken we naar asserties in een array met een for... of loop (javascript). Daarna hebben we ook gekeken naar asserties in geneste objecten. Na alle video's die hij uitlegde gaf de auteur een video op youtube, waarop die persoon ook uitlegd hoe je met asserties moet werken (objects, arrays en nested objects). In de map "quiz 2" vind u de quiz die ik heb gemaakt tijdens deze sectie.

Sectie 7 (2uur30): In deze sectie werden een paar zaken behandeld. Als eerste hebben we naar de collection runner gekeken (deze zal bestaande collecties met bepaalde intervallen uitvoeren). Daarna werd gekeken naar de postman monitors. Daarna werd hebben we gekeken naar de Newman environment. Hoe je een collectie runt met newman, hoe je newman environment installeerd (CLI(nodejs)). Newman is simpel gezegd een CLI-tool dat collecties kan runnen vanaf de command line. Er werd ook uitgelegd hoe je Newman moet laten draaien op Jenkins en wat de pre-condities zijn. Als laatste kan je in de map "Sectie 7" gaan om te zien hoe ik newman installer, html reports aanmaak en testen laat runnen met newman en jenkins.

## 25/10 - Week 6 - 4 uur

Gastcollege Cypress (2uur): Bij deze gastcollege hebben we gevolgd wat hij kwam vertellen over Cypress. Daarna maakte we een paar simpele oefeningen (tests) samen.

Sectie 8 (1uur): In deze sectie keken we naar Gitlab CI, TeamCity en Docker. Hierbij installeer ik docker met de CLI en ga ik een paar testen uitvoeren.

Sectie 9 (1uur): Deze sectie was kort, maar met een oefening erbij. Hierbij hebben we eerst gekeken naar de workflows and scenarios van de uitgevoerde testen. Wanneer dat een bepaalde request/test als eerste moet komen, wanneer een andrer request als 2de moet komen. Daarna maakte ik een oefening: opdracht 5: zie github.

## 08/11 - Week 7 - 1 uur

Sectie 10 (30min): Data Driven Tests. Bij deze sectie heb ik geleerd hoe ik data sets kan aanmaken en hoe ik die de data sets kan gebruiken en daarbij ook testen vastgelegd met pre-requested scripts. Daarna heb ik gezien hoe ik externe data files kan gebruiken voor het runnen van meerde requests naar een adres met verschillende data sets. Daarbij ook testen vatgelegd met scripts om te kijken of de data sets bepaalde delen zouden missen of fouten bevatten.

Qectie 11 (30min): In deze sectie werd er getoond hoe dat je een repository kan maken met Github om zo een workspace te kunnen delen met iemand, alsook de samenwerking module dat er mogelijk is via github en via postman zelf. Daarna werden de rechten van de users besproken en hoe je die kan wijzigen in de loop van de tijd.

## 15/11 - Week 8 - 1 uur

Sectie 12 (30min): Bij deze sectie heb ik geleerd hoe dat ik een mock server kan aanmaken op postman. Als eerste werd gezegd wat een mock-server is, wat het doet en hoe je het gebruikt. Een mock-server is een api die je zelf kan opstellen met een response body zodat je zelf een api kan testen. Daarna heb ik gezien hoe je een mock-server kan gebruiken voor front-end developpers. Als laatste werd nog besproken hoe je response kan bijhouden van een bestaande API.

Sectie 13 (30min): In deze sectie heb ik eerst geleerd hoe dat ik een upload form van een applicatie/website kan testen. Bijvoorbeeld of de file die geupload is succesvol is en de status code 200 bevat. Daarna heb ik geleerd hoe dat ik automatische testen kan runnen voor het "upload form test" met Newman of docker. Om dat te doen moet je jouw test-omgeving exporteren van postman en via de cli uitvoeren met newman/docker.

## 22/11 - Week 9 - 1 uur 30 

Sectie 14 (30min): In deze sectie heb ik bijgeleerd over het authenticatie. Ten eerste heb ik gezien hoe je de basic-auth configureerd op postman. Ten tweede heb ik gezien hoe je OAuth2 kan gebruiken bij postman, hierbij moest je een authorization en token aanvragen van een test-site met afbeeldingen, waarbij je status code 200 kreeg na het invullen van de tokens-authenticatie. Zo kan je de OAuth2 Authorization testen van een website/applicatie. Daarna werd er getoond hoe je form-based / session-based authenticatie kon testen op een bepaalde site. Als laatste werd er uitgelegd wat de JSON Web Tokens (JWT) zijn, wat ze bevatten en waarvoor ze dienen. Deze tokens zijn een geëncrypteerde combinatie die bepaalde zaken bijhoudt van login zoals email of andere zaken wanneer iemand zich inlogd. Daarom dat de tokens altijd uniek zin.

Sectie 15 (1uur): In deze sectie keken we eerst naar de manier waarop je testen herbruikt in multiple requests. Door alle testen in een variabele te steken en die daarna als globale variabele mee te geven is dat mogelijk. Als 2de heb ik geleeerd hoe ik moet omgaan met CSV responses, dit hebben we gedaan met PapaParse (zie bronnen). Ten 3de heb ik geleerd hoe ik files kan schrijven in de file system (schijf) aan de hand van Newman en hoe ik ook variabele kan doorgeven aan Newman. Daarna heb ik nog geleerd hoe dat ik een request kan sturen vanuit de pre-request-tab. Als laatste heb ik geleerd hoe ik een connectie kan vastleggen met een database, alsook hoe dat ik  JSON schema validatie kan laten testen vanuit responses van de databank, om bijvoorbeeld na te kijken dat een bepaalde waarde een string is.

## 29/11 - Week 10 - XX uur



# Totale duur : 23 uur

# Bronnen 

Udemy Online Course

use http://requestbin.net - RECOMMENDED, but sometimes still offline

use https://hookbin.com - RECOMMENDED

use an alternative service but with a different UI https://httpbin.org/ - GOOD ALTERNATIVE

https://postman-quick-reference-guide.readthedocs.io/_/downloads/en/latest/pdf/

https://drive.google.com/file/d/1Zh3J13aqbBolW7SbLtarZ-PN0joCUA6K/view

https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-post

https://trello.com/

https://github.com/postmanlabs/newman

https://www.jenkins.io/

https://github.com/postmanlabs/newman/tree/develop/docker

https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation

https://www.papaparse.com/
