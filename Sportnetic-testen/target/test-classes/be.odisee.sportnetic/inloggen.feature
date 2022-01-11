
Feature: Gebruiker inloggen

  Scenario: Een gebruiker logt zich in
    Given De gebruiker bevindt zich op de pagina waar hij zijn gegevens moet invullen om in te loggen
    When De gebruiker voert zijn email adres "test@sportnetic.be" in
    And zijn paswoord "test12" invoert
    And op de login button drukt
    Then bevindt hij zich op de home pagina
    And is de gebruiker ingelogd

