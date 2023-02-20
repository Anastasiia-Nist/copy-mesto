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
const popupImage = document.querySelector('.popup__image');
//кнопки
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseProfile = document.querySelector('.popup__button-close-profile');
const popupButtonCloseCards = document.querySelector('.popup__button-close-cards');
const popupButtonCloseImage = document.querySelector('.popup__button-close-image');
const cardsButtonAdd = document.querySelector('.profile__button-add');
const cardButtonLike = document.querySelectorAll('.card__button-like');
const cardButtonTrash = document.querySelectorAll('.card__button-trash');

const profileName =  document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');
//форма User
const formProfile = document.querySelector('.popup__form-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const careerInput = document.querySelector('.popup__input_type_career');

// форма добавления карточек
const formCards = document.querySelector('.popup__form-cards');
const cardInput = document.querySelectorAll(".card__name");
const urlInput = document.querySelectorAll(".card__img");
//
const cardImage = document.querySelector(".popup__image-large");
const cardName = document.querySelector(".popup__image-title");
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

//добавление 6 карточек из массива initialCards на страничку


//удаление карточек
cardButtonTrash.forEach((el) => {
  el.addEventListener("click", () => {
    el.closest(".card").remove(); // не поняла как работает метод closest 
  });
});

//лайки всех карточек
cardButtonLike.forEach(function (likeActive) {
  likeActive.addEventListener("click", () => {
    likeActive.classList.toggle("card__button-like_active");
  });
});

//открытие попапа User
profileButtonEdit.addEventListener('click', handleProfilePopup);

//открытие попапа с формой добавления карточек
cardsButtonAdd.addEventListener("click", function () {
  openedPopup(popupCards);
}); 

//открытие попапа с большой картинкой
urlInput.forEach(function (elem) {
  elem.addEventListener("click", function () {
    openedPopup(popupImage);
  });
});

//отправка формы User
formProfile.addEventListener('submit', handleFormSubmit);

//отправка формы добавления карточек


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