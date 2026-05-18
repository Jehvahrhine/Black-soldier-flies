


/* BUTTON ALERT */

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    alert("Welcome to BSF Farming Project Website!");

});

/* NAVBAR SHADOW */

window.addEventListener("scroll", ()=>{

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

    }else{

        nav.style.boxShadow = "none";
    }

});


/*button at homepage*/


    document.getElementById("wlcm").addEventListener("click", function() {
        window.location.href = "bsf2.html";
    });

    


