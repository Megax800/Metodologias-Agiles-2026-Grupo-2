# language: es
@HU-05
Característica: Perder una partida

  @CA-05
  Escenario: El jugador pierde al quedarse sin vidas
    Dado que el jugador inicia una partida con la palabra "ESPEJO"
    Cuando ingresa la letra incorrecta "A"
    Y ingresa la letra incorrecta "B"
    Y ingresa la letra incorrecta "C"
    Y ingresa la letra incorrecta "D"
    Y ingresa la letra incorrecta "F"
    Entonces debe tener 0 vidas restantes
    Y debe ver el mensaje "¡Perdiste!"
    Y debe ver la palabra secreta "ESPEJO"