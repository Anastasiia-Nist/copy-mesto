const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//
const CARDS_LIST = document.querySelector('.cards')
const CARD = document.querySelector("#card")
const TEMPLATE_CARD = document.querySelector("#template-card")
const CARD_INFO = document.querySelector(".card__info");

//попапы
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup__profile');
const popupCards = document.querySelector('.popup__cards');
const popupImage = document.querySelector('.popup__image');

//кнопки
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseProfile = document.querySelector('.popup__button-close-profile');
const popupButtonCloseCards = document.querySelector('.popup__button-close-cards');
const popupButtonCloseImage = document.querySelector('.popup__button-close-image');
const cardsButtonAdd = document.querySelector('.profile__button-add');


//форма User
const profileName =  document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');
const formProfile = document.querySelector('.popup__form-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const careerInput = document.querySelector('.popup__input_type_career');

// форма добавления карточек
const formCards = document.querySelector('.popup__form-cards');
const cardInput = document.querySelectorAll(".popup__input_card_name");
const urlInput = document.querySelectorAll(".popup__input_card_img");
//
const cardImage = document.querySelector(".popup__image-large");
const cardName = document.querySelector(".popup__image-title");


//открытие попапа
function openedPopup(popup) {
  popup.classList.add('popup_opened');
}
//закрытие попапа
function closedPopup(popup) {
  popup.classList.remove('popup_opened');
}

// попап блока User
function handleProfilePopup() {
  openedPopup(popupProfile);
  nameInput.value = profileName.textContent;
  careerInput.value = profileCareer.textContent;
}

//отправка формы блока User
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCareer.textContent = careerInput.value;
  closedPopup(popupProfile);
}

/*
//добавление новой карточки
 function createCard(item) {
  const cardName = item.name;
  const cardLink = item.link;
  const cardElement = TEMPLATE_CARD.content.cloneNode(true);
  cardElement.querySelector(".card__name").textContent = cardName;
  const imageCard = cardElement.querySelector(".card__img");
  imageCard.src = cardLink; 
  
  const cardButtonLike = cardElement.querySelectorAll('.card__button-like');
  const cardButtonTrash = cardElement.querySelectorAll('.card__button-trash');

  return cardElement;

}

const addNewCard = (item) => {
  CARDS_LIST.prepend(createCard(item));
};

initialCards.forEach(function (item) {
  CARDS_LIST.append(createCard(item));
});
*/

//добавление 6 карточек из массива initialCards на страничку

function addCard(name, link) {
  const card = TEMPLATE_CARD.content.querySelector('.card');
  const imgElement = card.querySelector('.card__img');
  imgElement.setAttribute('src', link);

  const titleElement = card.querySelector('.card__name');
  titleElement.textContent = name;
  imgElement.alt = name;

  const cloneCard = card.cloneNode(true);

  CARDS_LIST.append(cloneCard);

  //лайки и корзина
  const likeButton = cloneCard.querySelector(".card__button-like");
  const trashButton = cloneCard.querySelector(".card__button-trash")

  function likeCard() {
    likeButton.classList.toggle("card__button-like_active");
  };

  function deleteCard() {
    cloneCard.remove();
  };
  //попап с большой картинкой
  function openedCardLarge() {
    console.log('click');
  }

  //слушатели на карточке 
  likeButton.addEventListener("click", likeCard);
  trashButton.addEventListener("click", deleteCard);
  imgElement.addEventListener("click", openedCardLarge);// большая картинка
  return cloneCard;
}


function addAllCard() {
  initialCards.forEach((card)=>addCard(card.name,card.link))
}

addAllCard();


//открытие попапа User
profileButtonEdit.addEventListener('click', handleProfilePopup);

//открытие попапа с формой добавления карточек
cardsButtonAdd.addEventListener("click", function () {
  openedPopup(popupCards);
});

//отправка формы User
formProfile.addEventListener('submit', handleFormSubmit);

//отправка формы добавления карточек
formCards.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const placeElement = addCard(cardInput, urlInput);
  CARDS_LIST.prepend(placeElement);
  closedPopup(popupCards);
  console.log(cardInput.value);
  console.log(urlInput.value);
  evt.target.reset();
});



// все кнопки X закрытия попапа
popupButtonCloseProfile.addEventListener('click', function() {
  closedPopup(popupProfile);
});
popupButtonCloseCards.addEventListener('click', function() {
closedPopup(popupCards);
});
popupButtonCloseImage.addEventListener('click', function() {
  closedPopup(popupImage);
});
