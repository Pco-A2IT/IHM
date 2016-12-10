var boutonElt = document.getElementById("valider");

// Ajout d'un gestionnaire pour l'événement click

boutonElt.addEventListener("click", function () {
    console.log("clic");
   // boutonElt.style.color = "green";
    console.log("Le récapitulatif a été envoyé");
    
    
    // récapitulatif à confirmer
    if(confirm("Confirmez-vous la modification des données suivantes? "+ document.getElementsById("1").value + document.getElementsById("2").value + document.getElementsById("3").value + document.getElementsById("4").value + document.getElementsById("5").value )){
       window.open('../html/DossierPatient.html','nom_de_ma_popup','fullscreen=yes, menubar=no, scrollbars=no');
    }
    

});
