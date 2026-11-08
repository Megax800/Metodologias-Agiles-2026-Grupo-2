# language: es
@HU-09
Característica: Niveles de dificultad

  @CA-09
  Escenario: Iniciar una partida en dificultad fácil
    Dado que el jugador selecciona la dificultad "Fácil"
    Cuando inicia una partida
    Entonces debe tener 6 vidas
    Y la palabra seleccionada debe tener entre 4 y 5 letras

  @CA-09
  Escenario: Iniciar una partida en dificultad difícil
    Dado que el jugador selecciona la dificultad "Difícil"
    Cuando inicia una partida
    Entonces debe tener 4 vidas
    Y la palabra seleccionada debe tener entre 8 y 9 letras

  @CA-09
  Escenario: Iniciar una partida en dificultad media
    Dado que el jugador selecciona la dificultad "Medio"
    Cuando inicia una partida
    Entonces debe tener 5 vidas
    Y la palabra seleccionada debe tener entre 6 y 7 letras