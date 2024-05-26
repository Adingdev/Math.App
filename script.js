let query=document.querySelector('.query');
let btn=document.querySelector('.btn');
let resultat=document.querySelector('.resultat');

btn.onclick=function(){
    if (query.value.length>0) {
        resultat.value= query.value +"="+ eval(query.
            value);
        resultat.style.display="block";
    }else{
        alert("le champ est vide");
        resultat.style.display="none";
    }
    query.value="";
}