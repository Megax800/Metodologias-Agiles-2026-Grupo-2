# language: es
@HU-03
Característica: Fallar una letra

  Criterios de aceptación:
    - CA-01: Al iniciar una partida, el jugador tiene 5 vidas.
    - CA-02: Al ingresar una letra incorrecta, pierde una vida.
    - CA-03: Al ingresar una letra correcta, no pierde vidas.
    - CA-04: Las vidas no deben descontarse más de una vez por la misma letra incorrecta ya ingresada.

  @CA-03
  Escenario: El jugador pierde una vida al ingresar una letra incorrecta
    Dado que el jugador inicia una partida con la palabra "CASA"
    Cuando ingresa la letra incorrecta "Z"
    Entonces debe tener 4 vidas restantes