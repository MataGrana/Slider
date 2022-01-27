"use strict";

let index = 0;

let show_slide = function (i) {
  //povećaj/smanji broj za slidea 1, ovisno jel klikamo na show_slide(-1) ili show_slide(1)
  index += i;

  //uzmimo sve slike i stavimo ih u varijablu images (lista varijabla images)
  const images = document.getElementsByClassName("image");

  //isto i sa točkicama, uzmemo sve točkice i spremimo ih u listu dot
  const dots = document.getElementsByClassName("dot");

  /*moramo sakriti sve slike i ovdje (a ne samo u css-u) jer bi se na klik strelice pojavile sve ako ovog nema.
  Proći ćemo sa for petljom kroz sve slike i blokirat ćemo ih jednu po jednu*/
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // maknimo aktivnu klasu sa točkice na praznu klasu
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  /* ako je index veći od broja slika (postavi ga na nulu), to radimo kako bi se vratili na prvu sliku kada 
  dođemo do kraja galerije*/
  if (index > images.length - 1) {
    index = 0;
  }

  /* Ako je index manji od nule, postavi ga na vrijednost duljine liste. to radimo za
slučaj da korisnik na prvoj slici odabere strelicu na lijevo */
  if (index < 0) {
    index = images.length - 1;
  }

  // idemo sada pokazati (s obirom da smo ih sve sakrili) trenutno odabranu sliku (onu na poziciji 0)
  images[index].style.display = "block";
  // na tu aktiviranu sliku ćemo dodati i na točkici sa pripadajućim rednim brojem active css klasu
  //tako da je samo aktivna točkica tamnija
  dots[index].className += " active";
};

//Na kraju ili na početku (svejedno), moramo inicijalizirati funkciju na otvaranje prozora
window.addEventListener("onload", show_slide(index));
