#language: es
@HU-01
Característica: Iniciar una partida

Como jugador
quiero ver la palabra oculta como casilleros
para saber cuántas letras tiene

@CA-01
Escenario: Mostrar un casillero por cada letra de la palabra
Dado que el jugador inicia una partida con la palabra "ESPEJO"
Cuando presiona el botón "Jugar"
Entonces debe ver 6 casilleros vacíos
