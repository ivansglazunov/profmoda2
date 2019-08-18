export const Logo = ({ src, padding = '0', style = {} }) => {
  return <div style={{ padding, ...style }}>
    <img src={src} style={{ width: '100%', }} />
  </div>;
};

export default {
  vshsdt_logo: require('../images/logo.png'),
  vshsdt_name: require('../images/vshsdt.png'),
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
      <Logo src={require('../images/logo-domashniy-ochag.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-vogue.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-elle.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-the-village.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-moscow.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-afisha.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-ntv.png')} padding={'20%'}/>,
      <Logo src={require('../images/logo-mos-fash-w.jpg')} padding={'25%'}/>,
    ],
  },
  aboutMe: {
    name: 'Дарья Щербакова',
    rang: 'Руководитель факультета стилистики и моды в ВШСДТ',
    photo: require('../images/photo.jpg'),
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
    photo: require('../images/aboutMe.jpeg'),
    sign: require('../images/sign.png'),
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
  },
  programm: {
    title: 'Программа лекции',
    body: <><b>От автора</b>: “Я училась во Франции в мировой известной школе на факультете Fashion Marketing. Это дало мне огромный масштаб, внутреннюю уверенность в своих силах и желание идти за большой мечтой. На открытой лекции, я расскажу о своем опыте, направлениях развития в Российской фешн индустрии, успешных профессиональных кейсах, с которыми я работала и видела лично “изнанку”, о мировых школах и как сделать первый шаг к мечте.”</>,
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
      <Logo src={require('../images/logo-mhpi.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-moscow.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-white.png')} padding={'4%'}/>,
      <Logo src={require('../images/logo-garderob.png')} padding={'4%'}/>,
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
    image: require('../images/map.jpg'),
  },
};
