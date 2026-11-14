# language: es
@HU-07
Característica: Validar la entrada del jugador

Como jugador
quiero que solo se acepten letras y que no se puedan seguir ingresando al ganar
para que el juego sea justo

  @CA-07a
  Escenario: El jugador ingresa un carácter que no es una letra
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando ingresa la letra "5"
    Entonces debe tener 5 vidas restantes
    Y debe ver la palabra secreta "_ _ _ _ _ _"

  @CA-07b
  Escenario: El jugador no puede ingresar letras después de ganar
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando el jugador adivina la letra "E"
    Y el jugador adivina la letra "S"
    Y el jugador adivina la letra "P"
    Y el jugador adivina la letra "J"
    Y el jugador adivina la letra "O"
    Entonces no debe poder ingresar una letra
