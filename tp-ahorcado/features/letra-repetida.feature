# language: es
@HU-06
Característica: Ingresar una letra repetida

Como jugador
quiero que el juego me avise si ya ingresé una letra y no me quite vidas
para recordarla y no ingresarla nuevamente

  @CA-06
  Escenario: El jugador ingresa una letra que ya había ingresado
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando ingresa la letra "E"
    Y vuelve a ingresar la letra "E"
    Entonces debe tener 5 vidas restantes
    Y debe ver el mensaje "Ya ingresaste esa letra"