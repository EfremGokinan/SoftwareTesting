
Feature: Profiel gegevens bekijken en wijzigen

  Scenario: Een gebruiker bekijkt en wijzigt zijn profielgegevens
    Given De gebruiker bevindt zich op de home pagina en is ingelogd
    When De gebruiker navigeert naar de "profile" pagina
    Then Bevindt hij zich in de profiel-pagina
    And worden zijn profielgegevens getoond
      | label        | data         |
      | txtAbout     | test         |

    Given De gebruiker bevindt zich op de profiel-pagina
    When de gebruiker zijn profile heading wijzigt naar "Hallo dit is een test"
    And op de update profile button drukt
    Then krijgt de gebruiker een alert dat het succesvol is