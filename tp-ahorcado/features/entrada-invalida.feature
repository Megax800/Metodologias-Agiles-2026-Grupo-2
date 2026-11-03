
# language: es
@HU-07
Característica: Validar la entrada del jugador

  @CA-07
  Escenario: El jugador ingresa un carácter que no es una letra
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando ingresa la letra "5"
    Entonces debe tener 5 vidas restantes
    Y debe ver la palabra secreta "_ _ _ _ _ _"
