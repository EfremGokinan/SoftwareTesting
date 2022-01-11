$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("be.odisee.sportnetic/accountgegevens.feature");
formatter.feature({
  "line": 2,
  "name": "Account gegevens bekijken en wijzigen",
  "description": "",
  "id": "account-gegevens-bekijken-en-wijzigen",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Een gebruiker bekijkt en wijzigt zijn accountgevens",
  "description": "",
  "id": "account-gegevens-bekijken-en-wijzigen;een-gebruiker-bekijkt-en-wijzigt-zijn-accountgevens",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "De gebruiker is ingelogd",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Gebruiker navigeert naar de \"account\" pagina",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Bevindt hij zich in de account-pagina",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "worden zijn gegevens van zijn account getoond",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "De gebruiker bevindt zich op de account-pagina",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "De gebruiker zijn naam wijzigt naar \"test2 sportnetic\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "zijn telefoonnummer wijzigt naar \"0488280611\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "zijn geslacht wijzigt \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "op de update account button drukt",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "zijn de gegevens gewijzigd",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "opgeslagen",
  "keyword": "And "
});
formatter.match({
  "location": "AccountGegevensStepdefs.deGebruikerIsIngelogd()"
});
formatter.result({
  "duration": 3153309700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "account",
      "offset": 29
    }
  ],
  "location": "AccountGegevensStepdefs.gebruikerNavigeertNaarDePagina(String)"
});
formatter.result({
  "duration": 468370300,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.bevindtHijZichInDeAccountPagina()"
});
formatter.result({
  "duration": 22767800,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.wordenZijnGegevensVanZijnAccountGetoond()"
});
formatter.result({
  "duration": 94116900,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.deGebruikerBevindtZichOpDeAccountPagina()"
});
formatter.result({
  "duration": 10225200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test2 sportnetic",
      "offset": 37
    }
  ],
  "location": "AccountGegevensStepdefs.deGebruikerZijnNaamWijzigtNaar(String)"
});
formatter.result({
  "duration": 75836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0488280611",
      "offset": 34
    }
  ],
  "location": "AccountGegevensStepdefs.zijnTelefoonnummerWijzigtNaar(String)"
});
formatter.result({
  "duration": 65660500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 23
    }
  ],
  "location": "AccountGegevensStepdefs.zijnGeslachtWijzigt(String)"
});
formatter.result({
  "duration": 25895900,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.opDeUpdateAccountButtonDrukt()"
});
formatter.result({
  "duration": 1048284000,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.zijnDeGegevensGewijzigd()"
});
formatter.result({
  "duration": 47625800,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.opgeslagen()"
});
formatter.result({
  "duration": 4339840500,
  "status": "passed"
});
formatter.uri("be.odisee.sportnetic/inloggen.feature");
formatter.feature({
  "line": 2,
  "name": "Gebruiker inloggen",
  "description": "",
  "id": "gebruiker-inloggen",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Een gebruiker logt zich in",
  "description": "",
  "id": "gebruiker-inloggen;een-gebruiker-logt-zich-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "De gebruiker bevindt zich op de pagina waar hij zijn gegevens moet invullen om in te loggen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "De gebruiker voert zijn email adres \"test@sportnetic.be\" in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "zijn paswoord \"test12\" invoert",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "op de login button drukt",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "bevindt hij zich op de home pagina",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "is de gebruiker ingelogd",
  "keyword": "And "
});
formatter.match({
  "location": "InloggenStepdefs.deGebruikerBevindtZichOpDePaginaWaarHijZijnGegevensMoetInvullenOmInTeLoggen()"
});
formatter.result({
  "duration": 1831243200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@sportnetic.be",
      "offset": 37
    }
  ],
  "location": "InloggenStepdefs.deGebruikerVoertZijnEmailAdresIn(String)"
});
formatter.result({
  "duration": 45258900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test12",
      "offset": 15
    }
  ],
  "location": "InloggenStepdefs.zijnPaswoordInvoert(String)"
});
formatter.result({
  "duration": 37711100,
  "status": "passed"
});
formatter.match({
  "location": "InloggenStepdefs.opDeButtonDrukt()"
});
formatter.result({
  "duration": 29167900,
  "status": "passed"
});
formatter.match({
  "location": "InloggenStepdefs.bevindtHijZichOpDeHomePagina()"
});
formatter.result({
  "duration": 1175846500,
  "status": "passed"
});
formatter.match({
  "location": "InloggenStepdefs.isDeGebruikerIngelogd()"
});
formatter.result({
  "duration": 4129900800,
  "status": "passed"
});
formatter.uri("be.odisee.sportnetic/profielgegevens.feature");
formatter.feature({
  "line": 2,
  "name": "Profiel gegevens bekijken en wijzigen",
  "description": "",
  "id": "profiel-gegevens-bekijken-en-wijzigen",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Een gebruiker bekijkt en wijzigt zijn profielgegevens",
  "description": "",
  "id": "profiel-gegevens-bekijken-en-wijzigen;een-gebruiker-bekijkt-en-wijzigt-zijn-profielgegevens",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "De gebruiker bevindt zich op de home pagina en is ingelogd",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "De gebruiker navigeert naar de \"profile\" pagina",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Bevindt hij zich in de profiel-pagina",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "worden zijn profielgegevens getoond",
  "rows": [
    {
      "cells": [
        "label",
        "data"
      ],
      "line": 9
    },
    {
      "cells": [
        "txtAbout",
        "test"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "De gebruiker bevindt zich op de profiel-pagina",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "de gebruiker zijn profile heading wijzigt naar \"Hallo dit is een test\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "op de update profile button drukt",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "krijgt de gebruiker een alert dat het succesvol is",
  "keyword": "Then "
});
formatter.match({
  "location": "ProfielGegevensStepdefs.deGebruikerBevindtZichOpDeHomePaginaEnIsIngelogd()"
});
formatter.result({
  "duration": 2669758800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "profile",
      "offset": 32
    }
  ],
  "location": "ProfielGegevensStepdefs.deGebruikerNavigeertNaarDePaginaEnIsIngelogd(String)"
});
formatter.result({
  "duration": 475514900,
  "status": "passed"
});
formatter.match({
  "location": "ProfielGegevensStepdefs.bevindtHijZichInDeProfielPagina()"
});
formatter.result({
  "duration": 61145100,
  "status": "passed"
});
formatter.match({
  "location": "ProfielGegevensStepdefs.wordenZijnProfielgegevensGetoond(ProfielGegevensStepdefs$LabelData\u003e)"
});
formatter.result({
  "duration": 72045200,
  "status": "passed"
});
formatter.match({
  "location": "ProfielGegevensStepdefs.deGebruikerBevindtZichOpDeProfielPagina()"
});
formatter.result({
  "duration": 55281300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hallo dit is een test",
      "offset": 48
    }
  ],
  "location": "ProfielGegevensStepdefs.deGebruikerZijnProfileHeadingWijzigtNaar(String)"
});
formatter.result({
  "duration": 73432600,
  "status": "passed"
});
formatter.match({
  "location": "ProfielGegevensStepdefs.opDeUpdateProfileButtonDrukt()"
});
formatter.result({
  "duration": 36147800,
  "status": "passed"
});
formatter.match({
  "location": "ProfielGegevensStepdefs.krijgtDeGebruikerEenAlertDatHetSuccesvolIs()"
});
formatter.result({
  "duration": 4148286200,
  "status": "passed"
});
});