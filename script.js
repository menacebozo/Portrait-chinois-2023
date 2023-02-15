document.addEventListener("DOMContentLoaded", function () {
    //création de mes section de "Si j'étais ... Je serais..."
    //lier le data.json
    fetch('data.json').then(function (response) {
        response.json().then(function (data) {
            data.forEach(function afficheAnalogie(resultat) {
                document.querySelector('#list-analogies').innerHTML += "<section class=\"sec\" id=" + resultat.id + "><h1>Si j’étais <span>" + resultat.analogie + "</span></h1><h2>je serais" + resultat.Valeuranalogie + ".</h2><p class=\"justify\"> " + resultat.justify + " </p><img src=" + resultat.img + " alt=\"\" class=\"image\"><a href=" + resultat.down + "  class=\"down\"></a></section>";
            })
        })
    });

    //Mentions légales
    var overlay = document.getElementById("overlay");

    document.querySelector("#show-modal-btn").addEventListener("click", () => {
        overlay.style.display = "block";
    });

    document.querySelector("#close-modal-btn").addEventListener("click", () => {
        overlay.style.display = "none";
    });

    //création d'une section quand on clique sur un button 
    document.querySelector('#sub').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#you').innerHTML += "<section class=\"sec\"><h1>Si j’étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + ".<img src=" + document.querySelector("#imganalogie").value + " alt='' class='img'></h1><p class=\"justify\"> " + document.querySelector("#arganalogie").value + " </p></section>";
        //API
        fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=patrick.faure&courriel=patrick.faure@univ-eiffel.fr" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ",je serais " + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("#arganalogie").value).then(function (response) {
            response.json().then(function (data) {
                if (data.status == "success") {
                    document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
                } else {
                    document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
                }
            })
        })
    });
});