var data = "%data%";

var clientes = [
  {
    "nome" : "Mansk sabonetes artesanais.",
    "facebook" : "https://www.facebook.com/ManskSabonetes/",
    "description" : "Manufatura e venda de sabonetes artesanais.",
    "alt" : "Logo Mansk Sabonetes Artesanais.",
    "img" : "Logomsa.png",
    "site" : ""
  },
  {
    "nome" : "Fábio celulares.",
    "facebook" : "https://www.facebook.com/FabioCelulares2016/",
    "description" : "Manutenção de Celulares e Tablets.",
    "alt" : "Logo Fábio celulares.",
    "img" : "Logofc.png",
    "site" : ""
  },
  {
    "nome" : "Clebinárius Social Estúdio.",
    "facebook" : "https://www.facebook.com/ClebinariusSocialEstudio/",
    "description" : "Estúdio dedicado a aplicação de piercings, venda de joias e produtos de cuidado com seu piercing.",
    "alt" : "Logo Clebinárius Social Estúdio.",
    "img" : "Logocse.jpg",
    "site" : ""
  },
  {
    "nome" : "English and Portuguese - Medical Translations.",
    "facebook" : "https://www.facebook.com/EAPMedicalTranslations/",
    "description" : "I am a specialist medical and pharmaceutical translator, offering translation and transcription services between Brazilian Portuguese and English.",
    "alt" : "Logo English and Portuguese - Medical Translations.",
    "img" : "LogoEAPMT.png",
    "site" : ""
  },
  {
    "nome" : "Mansk Centro de estética Aplicada.",
    "facebook" : "https://www.facebook.com/rosanamontebello/",
    "description" : "Espaço que se dedica a formação de profissionais na área de Estética Facial e Corporal e Massagem. Nossos cursos são livres com carga horária definida aceita no mercado. Temos atendimento em terapias alternativas, fisioterapia, Estética facial e corporal. Cromoterapia.",
    "alt" : "Logo Mansk Centro de estética Aplicada.",
    "img" : "LogoManskClinica.png",
    "site" : ""
  },
  {
    "nome" : "Maquinarium Sketches and Tattoos.",
    "facebook" : "https://www.facebook.com/maquinarium.tattoo/",
    "description" : "O Maquinarium é um projeto que está em andamento, mostrando algumas artes feitas, tanto com lápis no papel como tinta na pele.",
    "alt" : "Logo Maquinarium.",
    "img" : "LogoMaquinarium.png",
    "site" : ""
  }
];

clientes.display = function(){
  var nome = "";
  var facebook = "";
  var description = "";
  var alt = "";
  var img = "";
  var site = "";
  var total = "";

  if(clientes.length > 0){
    for(var i = 0; i < clientes.length; i++){
      img = HTMLrowP2part1.replace(data,clientes[i].img);
      alt = HTMLrowP2part2.replace(data,clientes[i].alt);
      facebook = HTMLrowP2part3.replace(data,clientes[i].facebook);
      nome = HTMLrowP2part4.replace(data,clientes[i].nome);
      description = HTMLrowP2part5.replace(data,clientes[i].description);
      total = img + alt + facebook + nome + description;
      if(i !== (clientes.length - 1)){
        total += "<hr>";
      }
      $("#corpoP2").append(total);
    }
  }
};

clientes.display();
