import * as React from 'react';

export const Logo = ({ src, padding = '0', style = {} }) => {
  return <div style={{ padding, ...style }}>
    <img src={src} style={{ width: '100%', }} />
  </div>;
};

export default {
  vshsdt_logo: require('../images/logo.png?resize&size=300'),
  vshsdt_name: require('../images/vshsdt.png?resize&size=300'),
  darkColor: '#171717',
  vshsdtColor: '#dbc47c',
  title: ['Открытая','лекция'],
  description: 'Мода это - профессия.',
  definition: 'Работа и обучение в индустрии моды.',
  fromRang: 'от руководителя факультета fashion маркетинга',
  vshsdt: {
    short: 'ВШСДТ',
    full: 'Высшая Школа Стилистики Дизайна и Технологий',
    fullOf: 'Высшей Школы Стилистики Дизайна и Технологий',
  },
  publications: {
    title: 'Публикации в СМИ',
    logos: [
      <Logo src={require('../images/logo-domashniy-ochag.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-vogue.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-elle.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-the-village.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-moscow.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-afisha.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-ntv.png?resize&size=600')} padding={'10%'}/>,
      <Logo src={require('../images/logo-mos-fash-w.jpg?resize&size=600')} padding={'10%'}/>,
    ],
  },
  aboutMe: {
    name: 'Дарья Щербакова',
    rang: 'Руководитель факультета стилистики и моды в ВШСДТ',
    photo1: require('../images/2.jpg?resize&size=700'),
    photo2: require('../images/4.jpg?resize&size=700'),
    exp: 'Экспертность',
    exps: [
      'Спикер Деловой России, бизнес тренингов',
      'Режиссер показов Russian Fashion Week',
      'Руководитель факультета стилистики и моды в ВШСДТ',
      'Руководитель благотворительного проекта',
    ],
    edu: 'Образование',
    edus: [
      'International Institute of Advertising магистр Marketing',
      "Mod'spe Paris Central Europe бакалавр факультет Fashion Marketing",
    ],
  },
  myComment: {
    title: 'От автора',
    photo: require('../images/aboutMe.jpeg?resize&size=1800'),
    sign: require('../images/sign.jpg?resize&size=150'),
    body: <><b>Я открыла свой первый бизнес в 19 лет</b> - школа дизайна одежды. Об этом можно прочесть во многих интервью обо мне. За 10 лет на руководящей должности, я прошла большой путь с клиентами, от создания эскизов, до производства, выходов на международные подиумы. Более 5 000 наших клиентов, обрели профессию мечты: свадебные салоны, ателье, шоу - румы, собственные марки одежды.</>,
    me: <b>Мода - это не только моя профессия,<br/>это моя жизнь.</b>,
  },
  forWho: {
    title: 'Для кого',
    variants: [
      <><b>Новички</b> которые только начинают свой путь в индустрии моды и делают первые шаги.</>,
      <><b>Выпускники ВУЗов</b> мечтающие реализовать свой потенциал в интересной профессии, получить переквалификацию государственного образца или быстро освоить новое направление.</>,
      <><b>Профессионалы индустрии</b> которые хотят увидеть больший диапазон своей деятельности и развития.</>,
      <><b>Предприниматели</b> и владельцы крупного бизнеса всегда ищущие эффективные решения и направления развития своего проекта.</>,
    ],
    bgImage: require('../images/for-who.jpeg?resize&size=300'),
    images: [
      require('../images/publications.jpeg?resize&size=300'),
      require('../images/1.jpg?resize&size=300'),
      require('../images/3.jpg?resize&size=300'),
    ],
  },
  programm: {
    title: 'От лектора',
    body: <>“Я училась во Франции в мировой известной школе на факультете Fashion Marketing. Это дало мне огромный масштаб, внутреннюю уверенность в своих силах и желание идти за большой мечтой. На открытой лекции, я расскажу о своем опыте, направлениях развития в Российской фешн индустрии, успешных профессиональных кейсах, с которыми я работала и видела лично “изнанку”, о мировых школах и как сделать первый шаг к мечте.”</>,
    steps: [
      <>Профессия мечты</>,
      <>Успешные кейсы</>,
      <>Мировые школы</>,
      <>Первый шаг + <b>домашнее задание</b></>,
    ],
  },
  partners: {
    title: 'Наши партнеры',
    logos: [
      <Logo src={require('../images/logo-mhpi.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-moscow.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-white.png?resize&size=600')} padding={'4%'}/>,
      <Logo src={require('../images/logo-garderob.png?resize&size=600')} padding={'4%'}/>,
    ],
  },
  rules: {
    title: 'Правила школы',
    steps: [
      <>У нас нужно <b>учиться</b> и <b>брать</b> максимум от школы</>,
      <>Мы поддерживаем профессиональную <b>инициативу</b> и <b>амбиции</b></>,
      <>Наша команда - <b>это практики индустрии</b>, ведущие преподаватели и авторы книг</>,
      <>Мы пристально <b>следим за трендами</b>, и как развиваются технологии в мире</>,
    ],
  },
  map: {
    image: require('../images/map.jpg?resize&size=500'),
  },
};
