# language: es
@HU-03
Característica: Fallar una letra

  @CA-03
  Escenario: El jugador pierde una vida al ingresar una letra incorrecta
    Dado que el jugador inicia una partida con la palabra "CASA"
    Cuando ingresa la letra incorrecta "Z"
    Entonces debe tener 4 vidas restantes