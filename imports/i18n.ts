import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");
moment.updateLocale("ru");

const resources = {
  ru: {
    translation: {
      entry: "войти",
      ifNoAccThenNew: "Если аккаунта еще нет, он будет создан автоматически.",
      login: "логин",
      password: "пароль",
      requestCode: "запросить код",
      code: "проверочный код",
      sendCode: "проверить код",
      entryWithPassword: "войти с помощью пароля",
      entryWithCode: "войти с помощью проверочного кода",
      showPrevEvents: "показать прошедшие события",
      hidePrevEvents: "скрыть прошедшие события",
      showNextEvents: "показать будущие события",
      hideNextEvents: "скрыть будущие события",
      passedSuccess: "пройдено успешно",
      awaitCheck: "ожидается проверка",
      passedWithErrors: "пройдено с ошибками",
      writeMessage: "Сообщение..."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
