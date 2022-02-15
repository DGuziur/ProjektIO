#program sluzacy bakowaniu pana d
a= input("Podaj wartosc baki")
b = input("A kto baka D czy K")


if str(b) =="D" :
    print("Bakusssssssss")
    if int(a) >= 3:
        print("Bakaaaaaa " * int(a))
else:
    print("a to nie ac pac :> u re greatest!!!!")
#test uwu

#sprawdzamy czy baki enough

def is_baka(en: int) -> bool:
    pass

def test_is_baka():
    #given
    en= 3
    #when
    result = is_baka(en)
    #then
    assert result
    assert is_baka(6)
    assert is_baka(10)
#sprawdzam, czy nie baka

def test_is_not_baka():
    assert not is_baka(1)
    assert not is_baka(2)
    assert not is_baka(0)