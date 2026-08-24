p_cardinales = ['N','E','S','O']
cardinales_valores = [(0,1), (1,0), (0,-1), (-1,0)]
orientacion = 0
posicion = (0,0)

def get_posicion():
    return posicion

def get_orientacion():
    return p_cardinales[orientacion % 4]

def girarDerecha():
    global orientacion
    orientacion += 1

def girarIzquierda():
    global orientacion
    orientacion -= 1

def avanzar():
    global posicion
    posicion = tuple(sum(x) for x in zip(posicion, cardinales_valores[orientacion % 4]))

def retroceder():
    global posicion
    posicion = (0,-1)

def test_posicion():
    assert (0,0) == get_posicion()

def test_orientacion():
    assert 'N' == get_orientacion()

def test_girarDerecha():
    global orientacion
    orientacion = 0
    girarDerecha()
    assert 'E' == get_orientacion()

def test_girarIzquierda():
    global orientacion
    orientacion = 0
    girarIzquierda()
    assert 'O' == get_orientacion()

def test_avanzar():
    global orientacion
    orientacion = 0
    avanzar()
    assert (0,1) == get_posicion()

def test_retroceder():
    global orientacion
    orientacion = 0
    retroceder()
    assert (0,-1) == get_posicion()