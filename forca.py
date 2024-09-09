def jogar():
    palavra_secreta="banana"
    enforcou=False
    acertou=False
    while(not enforcou and not acertou):
    
        chute=input("Chute uma letra")
        chute= chute.strip()
        i=0

        for letra in palavra_secreta:
            if chute.lower()==letra.lower():
                print("Encontrei a letra{} na posição{}".format(chute,i))
                i=+1

        
        
if (__name__ == "__main__"):
    jogar()