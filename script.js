//Menu Hamburguer

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active")
}

btnMobile.addEventListener("click", toggleMenu);


// Slides

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1;
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)



//frutos do cerrado

const frutas = [
    {
        id: 00,
        nome: 'Bacuri',
        img: './img/Fruto do bacurizeiro- amarelo.jpg',
        descricao: `Bacuri (nome científico Platonia insignis) é uma árvore frondosa 
        que pode chegar a 40 metros de altura e dois metros de diâmetro. Popular na região
        amazônica, também é encontrada no bioma Cerrado nos estados do Maranhão e Piauí. 
        A espécie, no passado, não era vista como planta frutífera, mas explorada por ter 
        uma madeira resistente para construção de embarcações e casas.
        De flores róseas ou brancas, essa espécie pode se reproduzir de duas formas: por 
        sementes ou brotações das raízes. Há um ditado popular na Amazônia que diz: 
        “o bacurizeiro nasce até dentro de casa”. A justificativa para tal afirmação é que, 
        em áreas com vegetação aberta, a densidade do bacuri, em início de regeneração, pode chegar
         a 40 mil por hectare...`,
        link: "./fruitpages/bacuri.html",
        alt: "Foto da bacuri",
    },
    {
        id: 00,
        nome: 'Coco-Babaçu',
        img: './img/Babacu.jpeg',
        descricao: `O babaçu, também chamado bauaçu, baguaçu, auaçu, aguaçu, guaguaçu,
         uauaçu, gebara-uçu, coco-de-macaco, coco-de-palmeira, coco-naiá, coco-pindoba e 
         palha-branca, é uma espécie (Attalea speciosa) da família das palmeiras 
         (Arecaceae), dotada de frutos drupáceos com sementes oleaginosas e comestíveis
          das quais se extrai um óleo, empregado sobretudo na alimentação, remédios, além 
          de ser alvo de pesquisas avançadas para a fabricação de biocombustíveis...`,
        link: "./fruitpages/cocu-babacu.html",
        alt: "Foto da bacuri",
    },
    {
        id: 01,
        nome: 'Cajuí',
        img: './img/cajui.png',
        descricao: `O cajuzinho-do-cerrado (Anacardium humile), também 
        conhecido como cajuzinho-do-campo ou cajuí, é uma planta em forma de
         arbustos encontrada nos estados de Mato Grosso, Mato Grosso do Sul, Tocantins, 
         Minas Gerais e no Distrito Federal. O arbusto costuma habitar o Cerradão,
          o Cerrado, o Campo Sujo e o Campo Rupestre.
         A coleta de cajuzinho-do-cerrado também garante renda a agricultores familiares
         do Cerrado, através do extrativismo e comercialização do fruto. Atualmente,
          existem diversas técnicas de processamento e aproveitamento integral do fruto...`,
        link: "./fruitpages/cajui.html",
        alt: "Foto do cajui",
    },
    {
        id: 02,
        nome: 'Pequi',
        img: './img/pequi1.jpg',
        descricao: `O pequi (Caryocar Brasiliense Camb.) é um fruto do tipo
        drupa com epicarpo espesso de coloração esverdeada a tons de roxo, 
        mesocarpo externo de cor esbranquiçada e mesocarpo interno (polpa) de 
        cor amarela, coberta por um endocarpo espinhoso, o qual possui a função
        de proteger a amêndoa. A amêndoa é revestida por um tegumento de coloração
        marrom. A frutificação do pequi ocorre entre os meses de
        janeiro e março, sendo encontrado em toda a extensão do Cerrado Brasileiro, 
        figurando o Estado de Minas Gerais o principal produtor (73% da produção)...`,
        link: "./fruitpages/pequi.html",
        alt: "Foto do puqui",
    },
    {
        id: 03,
        nome: 'Buriti',
        img: './img/buriti.jpg',
        descricao: `O buriti (Mauritia flexuosa L.f.) é um fruto com forma elipsoidal,
        coloração castanho-avermelhado, podendo ser isento ou apresentar até dois caroços. 
        A camada externa é revestida por escamas brilhantes e, abaixo destas, há uma pasta
        amarela, que recobre o caroço – comumente denominada de bucha. O comprimento de cada 
        fruta varia entre 4 e 5 cm, com massa de aproximadamente 20 a 40 g. A frutificação do buriti ocorre entre os meses de dezembro e junho,
         na maioria do território coberto pelo Cerrado...`,
        link: "./fruitpages/buriti.html",
        alt: "Foto do buriti",
    },
    {
        id: 04,
        nome: 'Jatobá',
        img: './img/jatoba-logo.jpeg',
        descricao: `A espécie de jatobá encontrada no cerrado é a de nome científico Hymenaea stilbocarpa, 
        da família Leguminosae. Também conhecida como jatobá-do-campo, jatobá-da-serra, jatobá-de-casca-fina 
        e jutaí, a árvore pode alcançar até 9 metros de altura. O nome jatobá vem do guarani e significa “árvore 
        de fruto duro”. Em outras regiões do Brasil podem ser encontradas outras espécies de jatobá.
        Os frutos do jatobá-do-cerrado são apreciados in natura por populações rurais, e suas flores se destacam 
        na paisagem, sendo muitas vezes utilizadas para ornamentação de jardins e de vias públicas. Os morcegos
         são os principais agentes polinizadores do jatobá.
        A sua floração ocorre nos meses de dezembro a fevereiro; e sua frutificação nos meses de agosto e setembro...`,
        link: "./fruitpages/jatoba.html",
        alt: "Foto do jatobá",
    },
    {
        id: 05,
        nome: 'Macaúba',
        img: './img/macauba.jpg',
        descricao: `A macaúba é uma palmeira arbórea que pode atingir até 20 m de altura. 
        Apresenta estipe único recoberto por espinhos e uma copa com aspecto plumoso. Uma 
        palmeira adulta apresenta em média de 20 a 25 folhas, com comprimento que varia de 
        2,5 a 3,0 m, apresentando espinhos ao longo da ráquis. Palmeira nativa da flora brasileira, 
        a macaúba (Acromia Aculeata) pertence à família Arecaceae e está espalhada por todo o território 
        de clima tropical americano. Só para ter uma ideia, existem exemplares da espécie do México até a 
        Argentina sendo que, no Brasil, é um dos lugares em que mais se encontra a árvore...`,
        link: "./fruitpages/macauba.html",
        alt: "Foto do macaúba"
        ,
    },
    {
        id: 06,
        nome: 'Cagaita',
        img: './img/cagaita.jpg',
        descricao: `A cagaita (Eugenia dysenterica) é um fruto de forma esférica.
        Quando maduro, apresenta coloração amarelo-claro e sabor ligeiramente ácido.
        O fruto apresenta formato oval, achatado ou elipsoide, com massa de 14 a 20 gramas,
        sendo o epicarpo membranoso e de brilho intenso, e o mesocarpo e o endocarpo, carnosos.
        A frutificação da cagaita ocorre aproximadamente um mês depois do florescimento
        (de agosto a setembro). É um fruto com teor significativo de fibras alimentares, 
        vitaminas, minerais e baixo valor energético (cerca de 20 a 29 kcal em 100 gramas). 
        Possui alto teor de umidade, aproximadamente 95%, e quantidades consideráveis de ácidos 
        graxos essenciais...`,
        link: "./fruitpages/cagaita.html",
        alt: "Foto do cagaita",
    },
    {
        id: 07,
        nome: 'Araticum',
        img: './img/araticum.jpg',
        descricao: `O fruto do araticum (Annona crassiflora Mart.) 
        é do tipo baga, com formato circular achatado, de epicarpo rígido 
        e, quando maduro, apresenta coloração marrom. Os frutos possuem diâmetros
        de aproximadamente 12 cm. A frutificação do araticum ocorre 
        entre os meses de setembro e janeir. A polpa é em forma 
        de cone com coloração amarelo-claro, espessa, mole e reveste uma semente elíptica
        de coloração marrom-escuro . A polpa do fruto é fonte de ferro e 
        de pró-vitamina A . De acordo com Luzia (2012), a semente 
        de araticum possui teor consideravelmente alto de óleo, o que admite extração em
        prensa contínua ou por batelada...`,
        link: "./fruitpages/araticum.html",
        alt: "Foto do araticum",
    },
    {
        id: 08,
        nome: 'Guabiroba',
        img: './img/guabiroba.jpg',
        descricao: `O fruto da guabiroba (Campomanesia cambessedeana Berg.) 
        é comestível, com sabor adocicado, polpa suculenta e do tipo baga, 
        e possui formato globoso, apresentando diâmetros entre 15 e 20 mm. 
        A coloração do fruto é amarelada ou alaranjada, no estádio maduro, 
        com aroma cítrico agradável. O fruto pode apresentar de uma a seis 
        sementes de coloração castanha, formato achatado e com três a oito 
        milímetros de diâmetro. A guabiroba
        se encontra em maior concentração no Estado de Goiás e a frutificação
        ocorre de setembro a dezembro, podendo prolongar-se até fevereiro...`,
        link: "./fruitpages/guabiroba.html",
        alt: "Foto do guabiroba",
    },
    {
        id: 09,
        nome: 'Murici',
        img: './img/murici.jpeg',
        descricao: `O murici (Byrsonima crassifolia) é do tipo drupa,
        possui coloração amarelada, formato esférico e levemente 
        achatado, apresenta diâmetro aproximado de 1,5 a 2,0 cm. 
        A floração do muricizeiro tem 
        início no fim do mês de agosto e a frutificação, no final 
        de setembro, podendo também ser em meados de janeiro a março, 
        dependendo do índice pluviométrico no ano O muruci,
        também conhecido como murici, murici-da-praia ou murici-do-brejo, é uma árvore da
        família Malpighiaceae, ordem Malpighiales, nativa do norte e nordeste do Brasil...`,
        link: "./fruitpages/murici.html",
        alt: "Foto do murici",
    },
    {
        id: 010,
        nome: 'Mama-Cadela',
        img: './img/mama-cadela.jpg',
        descricao: `A mama-cadela (Brosimum gaudichaudii Tréc) 
        exibe frutos do tipo drupa com casca globosa, coloração 
        amarelo-alaranjado e textura verrugosa. O diâmetro varia 
        de quatro a cinco centímetros. A polpa é comestível, carnosa 
        e doce, e envolve até duas sementes de coloração creme. Possui 
        quantidades consideráveis de compostos bioativos, como o ácido 
        ascórbico e compostos fenólicos, além de elevados teores de 
        carotenoides, principalmente licopeno e β-caroteno, apresentando 
        características antioxidantes...`,
        link: "./fruitpages/mama-cadela.html",
        alt: "Foto da mama-cadela ",
    },

    {
        id: 011,
        nome: 'Baru',
        img: './img/baru.jpg',
        descricao: `O baru (Dipteryx alata Vog.) 
        é uma leguminosa do tipo drupa, com formato ovalado 
        e suavemente achatado, com coloração marrom, tegumento 
        externo liso e brilhante, e possui apenas uma amêndoa comestível. A frutificação 
        ocorre entre os meses de setembro e outubro. A amêndoa possui comprimento que 
        pode variar de 1,0 a 2,6 cm, largura de 0,9 a 1,3 cm e espessura de 0,7 a 1,0 
        cm, sendo rica em lipídeos (40%),
        apresenta 30% de sua composição em forma de proteínas, além de conter diversos 
        minerais, como ferro, zinco, potássio e cálcio...`,
        link: "./fruitpages/baru.html",
        alt: "Foto do baru",
    },
    {
        id: 012,
        nome: 'Mangaba',
        img: './img/mangaba.jpg',
        descricao: `A mangaba (Hancornia speciosa Gomes)
         é um fruto do tipo baga, geralmente possuindo de duas a 15 sementes, 
        podendo até mesmo apresentar 30 sementes discoides, achatadas e com 
        coloração castanho-claro, com diâmetros de 7 a 8 mm. O formato varia em
        elipsoidais ou arredondados, possuindo diâmetro diversificado entre 2,5 e 6,0 cm.
        O exocarpo apresenta tons amarelados ou esverdeados, com pigmentação vermelha ou
        sem pigmentação. A polpa, carnoso-viscosa, é amarela, ácida e adocicada. 
        A frutificação da mangaba ocorre entre os meses de outubro e dezembro, 
        sendo vastamente encontrada nas áreas de tabuleiros e baixadas litorâneas 
        da Região Nordeste...`,
        link: "./fruitpages/mangaba.html",
        alt: "Foto da mangaba"
        ,
    },
    {
        id: 013,
        nome: 'Tucum',
        img: './img/tucum.png',
        descricao: `Tucum (Bactris setosa), tucunzeiro, ticum ou tecum é uma palmeira que cresce formando 
        touceiras densas. Tem caules coberto por espinhos, sendo muito
         ornamental. Seus frutos são esféricos, com cerca de 2 centímetros de diâmetro. Quando verdes, 
         contêm pequena polpa e água no interior, como o coco-da-baía. Quando maduros, ficam roxos, 
         adocicados e saborosos, com caroço de casca fina e castanha de polpa branca e comestível. 
         São produzidos em cachos e consumidos ao natural, chupando-se como a jabuticaba. São, também, 
         muito utilizados em infusão na aguardente...`,
        link: "./fruitpages/tucum.html",
        alt: "Foto da Tucum",
    },
   
]


function frutasCerrado() {
    let containerFrutas = document.getElementById('frutas');
    frutas.map((val) => {
        containerFrutas.innerHTML +=
            `   <div class="frutas">
                    <div class="frutas-single">
                    <div class="frutas-titulo">
                         <h2 class=" titulo-secundario">` + val.nome + `</h2>
                    </div>
                        <img class="frutas-imagem" src="`+ val.img + `" alt="` + val.alt + `">
                        <p>`+ val.descricao + `</p>
                        <br>
                        <p class="frutas-link"><a href="`+ val.link + `"</a>Clique aqui para saber mais sobre esta fruta!</p>
                    </div>
            </div> `;
    });
};

frutasCerrado();


