# language: es
@HU-02
Característica: Acertar letra

  @CA-02
  Escenario: El jugador acierta una letra presente
    Dado que el jugador tiene una partida iniciada con la palabra "ESPEJO"
    Cuando el jugador adivina la letra "E"
    Entonces se ve la palabra "E _ _ E _ _"