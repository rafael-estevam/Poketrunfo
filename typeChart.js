export function typeChart (valorUser){
    var userType = cardUser.tipo;
    var comType = cardCom.tipo;
    console.log (userType,comType)

    if (cardUser.tipo=="Fogo"&&(cardCom.tipo=="Água"||cardCom.tipo=="Terra"||cardCom.tipo=="Pedra")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Fogo"&&(cardCom.tipo=="Grama"||cardCom.tipo=="Gelo"||cardCom.tipo=="Inseto")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Água"&&(cardCom.tipo=="Elétrico"||cardCom.tipo=="Grama")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Água"&&(cardCom.tipo=="Fogo"||cardCom.tipo=="Terra"||cardCom.tipo=="Pedra")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Elétrico"&&(cardCom.tipo=="Terra")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Elétrico"&&(cardCom.tipo=="Água"||cardCom.tipo=="Voador")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Grama"&&(cardCom.tipo=="Fogo"||cardCom.tipo=="Voador"||cardCom.tipo=="Inseto")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Grama"&&(cardCom.tipo=="Água"||cardCom.tipo=="Terra"||cardCom.tipo=="Pedra")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Gelo"&&(cardCom.tipo=="Fogo"||cardCom.tipo=="Lutador"||cardCom.tipo=="Pedra")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Gelo"&&(cardCom.tipo=="Grama"||cardCom.tipo=="Voador"||cardCom.tipo=="Dragão")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Lutador"&&(cardCom.tipo=="Voador"||cardCom.tipo=="Psíquico")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Lutador"&&(cardCom.tipo=="Normal"||cardCom.tipo=="Gelo"||cardCom.tipo=="Pedra")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Veneno"&&(cardCom.tipo=="Terra"||cardCom.tipo=="Psíquico")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Veneno"&&(cardCom.tipo=="Grama"||cardCom.tipo=="Fada")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Terra"&&(cardCom.tipo=="Água"||cardCom.tipo=="Grama"||cardCom.tipo=="Gelo")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Terra"&&(cardCom.tipo=="Fogo"||cardCom.tipo=="Elétrico"||cardCom.tipo=="Veneno")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Voador"&&(cardCom.tipo=="Elétrico"||cardCom.tipo=="Gelo"||cardCom.tipo=="Pedra")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Voador"&&(cardCom.tipo=="Grama"||cardCom.tipo=="Lutador"||cardCom.tipo=="Inseto")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Psíquico"&&(cardCom.tipo=="Inseto"||cardCom.tipo=="Fantasma")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Psíquico"&&(cardCom.tipo=="Lutador"||cardCom.tipo=="Veneno")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Inseto"&&(cardCom.tipo=="Fogo"||cardCom.tipo=="Voador"||cardCom.tipo=="Pedra")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Inseto"&&(cardCom.tipo=="Psíquico"||cardCom.tipo=="Grama")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Pedra"&&(cardCom.tipo=="Água"||cardCom.tipo=="Grama"||cardCom.tipo=="Lutador")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else if (cardUser.tipo=="Pedra"&&(cardCom.tipo=="Fogo"||cardCom.tipo=="Gelo"||cardCom.tipo=="Voador")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Fantasma"&&(cardCom.tipo=="Psíquico")){
       valorUser = valorUser*2;
       return valorUser; 
    }
    else if (cardUser.tipo=="Dragão"&&(cardCom.tipo=="Gelo")){
        valorUser = valorUser/2;
        return valorUser; 
    }
    else{
        return valorUser;
    }
}