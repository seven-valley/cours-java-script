let entreprise = new Entreprise();
//------------------------------------------------
const afficherEquipeHTML=()=>{
    let depot =document.querySelector('.equipe');
    depot.innerHTML='';
    const template = document.getElementById("templateEquipe");
    let selectE = document.getElementById('selectEquipe');
    selectE.innerHTML='';
    let option = document.createElement('option');
    option.value= -1;
    option.innerText="Pas d'équipe";
    selectE.appendChild(option);
    let i =0;
    for (let equipe of entreprise.equipes){
        const clone = template.content.cloneNode(true);
        clone.querySelector("table").setAttribute('data-indice',i);
        let h3 = clone.querySelector("h3");
        h3.innerHTML= equipe.nom;
        btnDelEquipe = clone.querySelector('.btn-enlever-equipe');
        btnDelEquipe.onclick=(evt)=>{
            let indice = evt.target.closest('table').dataset.indice;
            entreprise.equipes.splice(indice,1);
            afficherEquipeHTML();
        }
        let option = document.createElement('option');
        option.value= i;
        option.innerText=equipe.nom;
        selectE.appendChild(option);
        // les personnes
        let depotPersonne = clone.querySelector('.tbodyEquipe');
        const templatePersonne = document.getElementById("templateEquipePersonne");
        for (let p of equipe.personnes ){
            const cloneP = templatePersonne.content.cloneNode(true);
            let td = cloneP.querySelectorAll('td');
            td[0].innerHTML = p.prenom;
            td[1].innerHTML = p.nom;
            // btn onclick delete ...
            depotPersonne.appendChild(cloneP);
        }

        depot.appendChild(clone);
        i++;
    }// for
   

}
//------------------------------------------------
const afficherPersonneHTML=()=>{
    let depot =document.getElementById('tbodyPersonne');
    depot.innerHTML='';
    const template = document.getElementById("templatePersonne");
    for (let p of entreprise.personnes){
        const clone = template.content.cloneNode(true);
        clone.querySelector("tr").setAttribute('data-id',p.id);
        let td =clone.querySelectorAll('td');
        td[0].innerHTML =p.prenom;
        td[1].innerHTML =p.nom;
        // onclick btn delete
        depot.appendChild(clone);
    }
}

document.getElementById('btnAjouterEquipe').onclick=()=>{
    let nom = document.getElementById('equipe').value;
    document.getElementById('equipe').value='';// vider input
    let equipe = new Equipe(nom);
    entreprise.equipes.push(equipe);
    console.log(entreprise);
    afficherEquipeHTML();
}
document.getElementById('btnAjouterPersonne').onclick=()=>{
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let indiceEquipe = document.getElementById('selectEquipe').value;
    document.getElementById('nom').value='';
    document.getElementById('prenom').value='';
    document.getElementById('selectEquipe').value=-1;
    let id =Date.now(); // miliseconds elapsed since January 1, 1970.
    let p = new Personne(id,prenom,nom);
    entreprise.personnes.push(p);
    afficherPersonneHTML();
    if (indiceEquipe != -1){
        console.log('abbs');
        entreprise.equipes[indiceEquipe].personnes.push(p);
        afficherEquipeHTML();
    }
}
