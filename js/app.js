let images = document.querySelectorAll(".content-image");

let modalHeaders = ["Внешность", "Поведение", "Сроки жизни"];

let spiders = [
  {
    id: "0",
    name: "BRACHYPELMA SMITTI",
    url: "./images/brachypelma_smitti.jpg",
    descriptions: {
      mainDescription:
        "Brachypelma smithi (брахипельма смити) — мексиканский красноколенныйптицеед, более известный среди любителей экзотических животных насвоем латинском названии.Он является одним из самых красивых, тихих, неагрессивных и простых в содержании пауков- птицеедов.",
      footerDescriptions: [
        "Окрас туловища темного цвета с красно–оранжевыми полосками налапках. Это является главной отличительной особенностью данной породы от других.",
        "Темперамент насекомого можно считать ангельским. Если к питомцу не проявлять ни малейшей агрессии, то насекомое никогда не бросится в атаку и не укусит. По своей природе Брахипельма наделен ядом, но поотношению к человеку вещество не является опасным. На месте укуса может возникнуть покраснение и небольшое раздражение.",
        "Мексиканский красно-коленный птицеед – рекордсмен по продолжительности жизни среди пауков. Самец может прожить около 6 лет, а самки до 20. Однако встречаются случаи, когда они живут более 20 лет. Это внушительный срок, ведь 20 лет – гораздо больше жизни других домашних питомцев.",
      ],
    },
  },

  {
    id: "1",
    name: "BRACHYPELMA VAGANS",
    url: "./images/brachypelma_vagans.jpg",
    descriptions: {
      mainDescription:
        "Brachypelma vagans – один из популярнейших птицеедов в качестве экзотического питомца. Он уступает этот титул только своему родственнику Brachypelma albopilosum. В природе пауки живут во влажных лесах Мексики, Сальвадора и Гватемалы, роя норы в лесной подстилке.",
      footerDescriptions: [
        "Окрас у паука является его своеобразной изюминкой: сам паук черного цвета, особенно насыщенный у основания конечностей, а ярко-красные волоски на брюшке придают пауку особую оригинальность. Размеры самок варьируются от 6 до 7 сантиметров по телу, в размахе лап до 20 сантиметров.",
        "Птицеед любит рыть норы, что является нехарактерно для брахипельм, но чаще находится на поверхности, а нору использует только как укрытие. Что касается характера – паук может быть как очень агрессивным, становясь в угрожающую стойку и пытаясь укусить при любой возможности, так и очень спокойным.",
        "Продолжительность жизни у Brachypelma vagans приличная, самки могут доживать до 20 лет.",
      ],
    },
  },

  {
    id: "2",
    name: "BRACHYPELMA ALBOPILOSUM",
    url: "./images/brachypelma_albopilosum.jpg",
    descriptions: {
      mainDescription:
        "Во влажных тропических лесах Гондураса и Коста-Рики обитает паук-птицеед брахипельма альбопилозум. Он имеет яркую окраску, длинные волоски и довольно крупное тело. Этот вид птицеедов идеален для содержания в домашних условиях, поскольку имеет спокойный нрав, он красив и стоит недорого, а главное — его укус безопасен.",
      footerDescriptions: [
        "Кудрявый тарантул - паук с пухлым телом, покрытый щетинками от темно-коричневого до черного цвета, которые начинают светлеть в молодом возрасте и темнеют с возрастом. Он имеет золотисто-бронзовый блеск из-за более длинных золотых щетинок, покрывающих все тело, которые особенно густы на задних лапах.",
        "Взрослая особь имеет тихий нрав, малоподвижен и может просидеть весь день не шелохнувшись. Но в юном возрасте, передвигаются они быстро и очень активны. Настолько, что необходимо закрывать крышку террариума, чтобы не сбежал. Когда насекомое берут в руки, важно делать это аккуратно, чтобы не спугнуть паучка. Иначе он может скинуть свои защитные волоски.",
        "В условиях хорошего содержания продолжительность жизни самок может достигнуть 20 лет, а порой даже 30. Представители данного вида растут достаточно медленно.",
      ],
    },
  },

  {
    id: "3",
    name: "AVICULARIA VERSICOLOR",
    url: "./images/avicularia_versicolor.jpg",
    descriptions: {
      mainDescription:
        "Авикулярия версиколор (Avicularia (Caribena) versicolor) - популярный птицеед среди коллекционеров и любителей пауков. Считается одним из самых красивых птицеедов планеты. Древесный вид, в природе карибена версиколор заселяет пустоты в деревьях и между ветвями. Поедает различных членистоногих и мелких позвоночных.",
      footerDescriptions: [
        "Взрослые животные имеют переливающийся зеленым карапас, опистосома и ноги красновато-розового цвета. Молодые животные имеют красивый синий цвет с темным поперечным узором на опистосоме. По размеру этот птицеед небольшой, максимальная длина в размахе лап взрослой особи составляет 16 сантиметров при длине тела 6 сантиметров.",
        "Пауки ведут древесный образ жизни. В природе они заселяют пустоты в деревьях и между ветвями, где плетут сложную воронкообразную паутину с двумя выходами, на высоте нескольких метров. Большую часть времени авикулярия проводит в укрытиях, а с наступлением темноты выходит на охоту.",
        "Хотя многие виды пауков-птицеедов считаются рекордсменами по продолжительности жизни (некоторые экземпляры, например, мексиканца, носящего наименование Брахипельма Эмилия, способны доживать до 30-летнего возраста), жизненный цикл Авикулярии версиколор ограничен 6-8 годами.",
      ],
    },
  },
];

function createModal(id) {
  //modal-opacity
  modalOpacity = document.createElement("div");
  modalOpacity.className = "modal-opacity";
  modalOpacity.addEventListener("click", deleteModal);
  document.body.prepend(modalOpacity);

  //-------------modal-block--------------

  //modal
  modalBlock = document.createElement("div");
  modalBlock.className = "modal-block";
  modalBlock.id = id;

  //close button
  let closeButton = document.createElement("div");
  closeButton.className = "close-button";
  closeButton.addEventListener("click", deleteModal);

  //species name
  let speciesNameHeader = document.createElement("h1");
  speciesNameHeader.innerHTML = spiders[id].name;

  //flex container
  let flexContainer = document.createElement("div");
  flexContainer.className = "flex";

  //image
  let modalImage = document.createElement("img");
  modalImage.className = "modal-image";
  modalImage.alt = spiders[id].name;
  modalImage.src = spiders[id].url;

  //description container
  let mainDescription = document.createElement("div");
  mainDescription.className = "modal-text";

  //description header
  let descriptionHeader = document.createElement("h2");
  descriptionHeader.innerText = "Описание";

  //description paragraph
  let descriptionParagraph = document.createElement("p");
  descriptionParagraph.innerText = spiders[id].descriptions.mainDescription;

  //footer-flex container
  let footerFlexContainer = document.createElement("div");
  footerFlexContainer.className = "modal-flex";

  for (let i = 0; i < modalHeaders.length; i++) {
    //footer text block
    let footerTextBlock = document.createElement("div");
    footerTextBlock.className = "modal-text";

    //footer header
    let footerHeader = document.createElement("h2");
    footerHeader.innerText = modalHeaders[i];

    //footer paragraph
    let footerParagraph = document.createElement("p");
    footerParagraph.innerText = spiders[id].descriptions.footerDescriptions[i];

    footerFlexContainer.append(footerTextBlock);
    footerTextBlock.append(footerHeader, footerParagraph);
  }

  /* Добавление всех элементов модального окна в DOM */

  document.body.prepend(modalBlock);
  modalBlock.prepend(
    closeButton,
    speciesNameHeader,
    flexContainer,
    footerFlexContainer
  );
  flexContainer.prepend(modalImage, mainDescription);
  mainDescription.prepend(descriptionHeader, descriptionParagraph);
}

/* ....................................................... */

//image id
function fillingId() {
  for (var i = 0; i < images.length; i++) {
    images[i] = document.getElementsByClassName("content-image")[i].id = i;
  }
}

fillingId();

function deleteModal() {
  modalBlock.remove();
  modalOpacity.remove();
}
