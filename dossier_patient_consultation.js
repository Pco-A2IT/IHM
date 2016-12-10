var boutonModifier = document.getElementById("Modifier");
var boutonSupprimer = document.getElementById("Supprimer");
// Ajout d'un gestionnaire pour l'événement click


boutonModifier.addEventListener("click", function () {
    console.log("clic");
    boutonModifier.style.color = "blue";
    console.log("Le récapitulatif a été envoyé");
    
    
    //Ouverture de l'écran de modification du dossier patient
    window.open('dossier_patient_modification.html','nom_de_ma_popup','fullscreen=yes, menubar=no, scrollbars=no');
});

boutonSupprimer.addEventListener("click", function () {
    console.log("clic");
    
    //Demander la confirmation de la suppression
    if(confirm("Etes-vous sûr de bien vouloir supprimer le dossier patient de"+ document.getElementsByTagName("h2").value+" ?")){
       window.close();
    }
});
