// Les 3 classes du projet
// Les BO Business Object
 
//---------------------------
class Entreprise{
    constructor(){
        this.personnes=[];
        this.equipes=[];
    }
}
//---------------------------
class Equipe{
    constructor(nom){
        this.nom = nom;
        this.personnes =[];
    }
}
//---------------------------
class Personne{
    constructor(id='',prenom='',nom=''){
        this.id=id;
        this.prenom=prenom;
        this.nom=nom;
    }
}
//---------------------------