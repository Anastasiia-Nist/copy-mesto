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

//попапы
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup__profile');
const popupCards = document.querySelector('.popup__cards');
//кнопки
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseProfile = document.querySelector('.popup__button-close-profile');
const popupButtonCloseCards = document.querySelector('.popup__button-close-cards');
const cardsButtonAdd = document.querySelector('.profile__button-add');
const cardButtonLike = document.querySelectorAll('.card__button-like');
const cardButtonTrash = document.querySelectorAll(".card__button-trash");

const profileName =  document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');

const formProfile = document.querySelector('.popup__form-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const careerInput = document.querySelector('.popup__input_type_career');

const formCards = document.querySelector('.popup__form-cards');

const cardTemplate = document.querySelector(".card__template").content;
const template = cardTemplate.querySelector(".card");

const cardInput = document.querySelector(".card__name");
const urlInput = document.querySelector(".card__img");


//открытие попапа
function openedPopup(popup) {
  popup.classList.add('popup_opened');
  console.log('открытие');
}
//закрытие попапа
function closedPopup(popup) {
  popup.classList.remove('popup_opened');
  console.log('закрытие');
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

//добавление карточек
  const createCard = ({ name, link }) => {
  const placeElement = template.cloneNode(true); // клонируем из cardTemplate в placeElement
  const cardImg = placeElement.querySelector(".card__img");

  cardImg.src = link;
  cardImg.alt = name;
  placeElement.querySelector(".card__name").textContent = name; // название
}

formCards.addEventListener("submit", function (evt) {
  evt.preventDefault();
  openedPopup(popupCards);
  const placeElement = createCard({
    name: cardInput.value,
    link: urlInput.value,
  });
  container.prepend(placeElement);
  closedPopup(popupCards);
  evt.target.reset();
});

//удаление карточек
cardButtonTrash.forEach((el) => {
  el.addEventListener("click", () => {
    const parentOfTrash = el.closest(".card"); // не поняла как работает метод closest 
    parentOfTrash.remove();
  });
});

//лайки всех карточек!! 
cardButtonLike.forEach(function (likeActive) {
  likeActive.addEventListener("click", function () {
    likeActive.classList.toggle("card__button-like_active");
  });
});

profileButtonEdit.addEventListener('click', handleProfilePopup);//открытие попапа User
cardsButtonAdd.addEventListener("click", function () {
  openedPopup(popupCards);
}); //открытие попапа с карточками
formProfile.addEventListener('submit', handleFormSubmit);//отправка формы User


// все кнопки X закрытия попапа 
popupButtonCloseProfile.addEventListener('click', function() {
  closedPopup(popupProfile);
});
popupButtonCloseCards.addEventListener('click', function() {
closedPopup(popupCards);
});

