orientacion = 'N'
posicion = (0,0)

def test_posicion():
    assert (0,0) == get_posicion()

def test_orientacion():
    assert 'N' == get_orientacion()