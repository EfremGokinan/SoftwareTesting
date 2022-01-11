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
  "duration": 3198850500,
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
  "duration": 449399100,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.bevindtHijZichInDeAccountPagina()"
});
formatter.result({
  "duration": 23083700,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.wordenZijnGegevensVanZijnAccountGetoond()"
});
formatter.result({
  "duration": 91594600,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.deGebruikerBevindtZichOpDeAccountPagina()"
});
formatter.result({
  "duration": 9835300,
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
  "duration": 71582300,
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
  "duration": 63420300,
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
  "duration": 26747400,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.opDeUpdateAccountButtonDrukt()"
});
formatter.result({
  "duration": 1042237200,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.zijnDeGegevensGewijzigd()"
});
formatter.result({
  "duration": 46959800,
  "status": "passed"
});
formatter.match({
  "location": "AccountGegevensStepdefs.opgeslagen()"
});
formatter.result({
  "duration": 4309481300,
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
  "duration": 1330979100,
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
  "duration": 47129100,
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
  "duration": 56624900,
  "status": "passed"
});
formatter.match({
  "location": "InloggenStepdefs.opDeButtonDrukt()"
});
formatter.result({
  "duration": 31047100,
  "status": "passed"
});
formatter.match({
  "location": "InloggenStepdefs.bevindtHijZichOpDeHomePagina()"
});
formatter.result({
  "duration": 1174849700,
  "status": "passed"
});
formatter.match({
  "location": "InloggenStepdefs.isDeGebruikerIngelogd()"
});
formatter.result({
  "duration": 4128499000,
  "status": "passed"
});
});