
Feature: Account gegevens bekijken en wijzigen

Scenario: Een gebruiker bekijkt en wijzigt zijn accountgevens
Given De gebruiker is ingelogd
When Gebruiker navigeert naar de "account" pagina
Then Bevindt hij zich in de account-pagina
And worden zijn gegevens van zijn account getoond

Given De gebruiker bevindt zich op de account-pagina
When De gebruiker zijn naam wijzigt naar "test2 sportnetic"
And zijn telefoonnummer wijzigt naar "0488280611"
And zijn geslacht wijzigt "Female"
And op de update account button drukt
Then zijn de gegevens gewijzigd
And opgeslagen