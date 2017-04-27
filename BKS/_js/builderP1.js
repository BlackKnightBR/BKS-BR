var data = "%data%";

var nos = [
  {
    "name" : "Quem somos?",
    "description" : "Agência de marketing digital, ou seja, " +
    "promovemos conteúdo digital. Criando uma estratégia especifica e " +
    "adequada para seu negocio. O trabalho é garantido e de confiança."
  },
  {
    "name" : "Nossa equipe",
    "description" : "Trabalhamos com o esquema de contas onde cada " +
       "um de nossos agentes trabalha exclusivamente com você, criando " +
       "uma relação de confiança e responsabilidade."
  },
  {
    "name" : "Agentes",
    "description" : "Os agentes tem a total responsabilidade " +
      "sobre sua conta e são seu contato 24h por dia para consultas, " +
      "decisões e controle dos recursos que você contratou."
  },
  {
    "name" : "Consultas pontuais",
    "description" : "O único sistema que se torna diferente é a "+
              "consulta pontual. Primeiro você deve marcar um horário através de "+
              'contato pela nossa <a href="https://www.facebook.com/BlackKnightStudioBR" target="blank">página</a> ou <a href="mailto:blackknight@blackknightstudio.com.br">e-mail</a> e após confirmado o horário, '+
              "o pagamento deve ser realizado e só então seu horário será reservado."
  }
];

var trabalhos = [
  {
    "title" : "Com o que trabalhamos?",
    "description" : "O trabalho de marketing digital envolve a promoção de lojas virtuais, "+
       "páginas, perfis em redes sociais. A nossa missão é transformar seus "+
     "seguidores e curtidas em potenciais clientes. Transformar popularidade "+
   "em lucro. O trabalho se divide em duas frentes, nossos pacotes de "+
   "gerenciamento direto(com confiança e retorno garantido) ou nosso serviço "+
 "de atendimento ao cliente(você pode tirar duvidas sobre estratégias e "+
 "métodos comprovados)."
  },
  {
    "title" : "Como trabalhamos?",
    "description" : "Todo nosso trabalho é garantido e "+
      "certificado. Nosso trabalho é realizado no esquema pagamento e "+
       "serviço, deste modo a partir de seu primeiro contato e contratação "+
       "de algum dos nossos serviços os agentes começam o serviço após "+
        'a confirmação do primeiro pagamento. <em class="text-upper">Atenção:</em>  pagamentos '+
        "atrasados resultam em pausa dos serviços e com 2 meses serão "+
        "cortados e deve se realizar um novo contrato."
  }
];

var servicos = [
  {
    "job" : "Pacotes de gerenciamento",
    "description" : "Possuímos planos semanais, mensais ou anuais de gerenciamento. "+
    "A assistência remota é semanal e ajudamos você a montar uma estratégia "+
  "para sua mídia digital a fim de que se torne independente. Se você não alcançar os resultados "+
  "definidos para seu plano de negócio o investimento é devolvido."
  },
  {
    "job" : "Logos, banners e conteúdo criativo",
    "description" : "Assim como nossos outros serviços a compra "+
       "de itens separados e de uso comum funciona no sistema confirmação "+
        "de pagamento e inicio das atividades. O cliente tem direito a "+
        "até 4 versões por pagamento de cada produto e após a quarta "+
        "entrega devera ser realizado um novo contrato."
  },
  {
    "job" : "Coaching digital",
    "description" : "Os serviços de consulta sobre seu negócio "+
      "digital ou como você presta o seu serviço é feito com hora "+
      "marcada a não ser que o agente escolha realizar a consulta fora "+
      "de horário marcado. Trabalhamos desta forma para não sobrecarregar "+
      "nossas linhas de comunicação ou nosso pipe line de trabalho."
  }
];

nos.display = function(){
  var name = "";
  var desc = "";
  var total = "";
  if(nos.length > 0){
    for(var i = 0; i < nos.length; i++){
      name = HTMLcolumP11part1.replace(data,nos[i].name);
      desc = HTMLcolumP11part2.replace(data,nos[i].description);
      total = name+desc;
      $("#fileiraP11").append(total);
    }
  }
};

trabalhos.display = function(){
  var titulo = "";
  var descricao = "";
  var total = "";
  if(trabalhos.length > 0){
    for(var i = 0; i < trabalhos.length; i++){
      titulo = HTMLcolumP12part1.replace(data,trabalhos[i].title);
      descricao = HTMLcolumP12part2.replace(data,trabalhos[i].description);
      total = titulo + descricao;
      $("#fileiraP12").append(total);
    }
  }
};

servicos.display = function(){
    var servico = "";
    var descricao = "";
    var total = "";
    if(servicos.length > 0){
      for(var i = 0; i < servicos.length; i++){
        servico = HTMLcolumP13part1.replace(data,servicos[i].job);
        descricao = HTMLcolumP13part2.replace(data,servicos[i].description);
        total = servico + descricao;
        $("#fileiraP13").append(total);
      }
    }
};

nos.display();
trabalhos.display();
servicos.display();
