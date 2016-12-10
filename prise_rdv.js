var boutonElt = document.getElementById("myButton3");
var boutonElt2 = document.getElementById("myButton5");
// Ajout d'un gestionnaire pour l'événement click


boutonElt.addEventListener("click", function () {
    console.log("clic");
   // boutonElt.style.color = "green";
    console.log("Le récapitulatif a été envoyé");
    
    
    // récapitulatif à confirmer
    var examensChoisis = "Les examen à inclure dans le récapitulatif :";
    if (document.getElementById("case_examens_IRM").checked === true){examensChoisis=examensChoisis+' '+ "IRM" +', '}
    if (document.getElementById("case_examens_BilanCardiaque").checked === true){examensChoisis =examensChoisis+' '+"Bilan Cardiaque"+', '}
    if (document.getElementById("case_examens_RDVNeurologue").checked === true){examensChoisis=examensChoisis+' '+"RDV Neurologue"+'. '}
    adresseRenseignee=document.getElementById("adresseChoisie");
    if(confirm(adresseRenseignee.value+' '+ examensChoisis)){
       //window.open('../html/DossierPatient.html','nom_de_ma_popup','fullscreen=yes, menubar=no, scrollbars=no');
    }
    

});
boutonElt2.addEventListener("click", function () {
    console.log("clic2");
    
    // retour au dossier patient
    window.open('dossier_patient_consultation.html','nom_de_ma_popup','fullscreen=yes, menubar=no, scrollbars=no');
    window.close();

});
