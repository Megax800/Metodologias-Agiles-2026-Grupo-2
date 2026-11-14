# language: es
@HU-03
Característica: Fallar una letra

Como jugador
quiero perder una vida al ingresar una letra incorrecta
para que cada error tenga consecuencias

  @CA-03
  Escenario: El jugador pierde una vida al ingresar una letra incorrecta
    Dado que el jugador inicia una partida con la palabra "CASA"
    Cuando ingresa la letra incorrecta "Z"
    Entonces debe tener 4 vidas restantes