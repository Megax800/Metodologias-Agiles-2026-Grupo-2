# language: es
@HU-10
Característica: Jugar de nuevo

Como jugador
quiero reiniciar la partida al terminar
para seguir jugando sin recargar la página

  @CA-10a
  Escenario: El jugador inicia una nueva partida después de perder
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando ingresa la letra incorrecta "A"
    Y ingresa la letra incorrecta "B"
    Y ingresa la letra incorrecta "C"
    Y ingresa la letra incorrecta "D"
    Y ingresa la letra incorrecta "F"
    Entonces debe ver el mensaje "¡Perdiste!"
    Cuando presiona el botón "Jugar de nuevo"
    Entonces debe tener 5 vidas restantes
    Y debe ver todos los casilleros ocultos
    Y debe poder ingresar una letra nuevamente
    Y no debe ver el mensaje "¡Perdiste!"
    Y no debe ver la palabra secreta anterior
    Y la página no debe haberse recargado

  @CA-10b
  Escenario: El jugador inicia una nueva partida después de ganar
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando el jugador adivina la letra "E"
    Y el jugador adivina la letra "S"
    Y el jugador adivina la letra "P"
    Y el jugador adivina la letra "J"
    Y el jugador adivina la letra "O"
    Entonces debe ver el mensaje "¡Ganaste!"
    Cuando presiona el botón "Jugar de nuevo"
    Entonces debe tener 5 vidas restantes
    Y debe ver todos los casilleros ocultos
    Y debe poder ingresar una letra nuevamente
    Y no debe ver el mensaje "¡Ganaste!"
    Y la página no debe haberse recargado