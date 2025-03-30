document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "В каждом пепле таится история былого пламени.",
    "Мир не проклят — он просто устал ждать своего героя.",
    "Ты сражаешься не ради победы. Ты сражаешься, потому что не можешь иначе.",
    "Свет не всегда означает спасение.",
    "Тот, кто идёт один, слышит голос мира громче других.",
    "Иногда шаг назад — это подготовка к прыжку в бездну.",
    "Холод стал частью меня, как и меч в моей руке.",
    "Путь выбран. Осталось только идти.",
    "Некоторые битвы выигрываются просто тем, что ты не падаешь.",
    "Огонь внутри ярче, чем все звезды над головой.",
    "В этой тишине даже эхо умерло.",
    "Судьба не спрашивает — она ломает.",
    "Меч — это продолжение души. А душа — это пламя.",
    "В пустоте я обрёл форму.",
    "Здесь никто не приходит случайно.",
    "Ты слышишь ветер? Это плач тех, кто сдался.",
    "Живой тот, кто ещё идёт.",
    "Мрак не побеждают — с ним живут.",
    "Грехи прошлого следуют за тобой, как тень от костра.",
    "Когда умирают боги, рождаются чудовища.",
    "Мы не бессмертны. Мы просто не сдаёмся.",
    "Каждая трещина в броне — это память.",
    "Если ты здесь, значит, ты уже потерял всё. Кроме воли.",
    "Никто не запомнит твое имя. Но след твой останется.",
    "Не каждый, кто потерял свет, сломался.",
    "Смерть — не конец, если ты отказываешься лечь.",
    "Они называли это безумием. Я называю это выбором.",
    "Нет карты в мире, где указана дорога к себе.",
    "Душа — не вес. Душа — это огонь.",
    "Сквозь страх, боль и мрак — к единственному костру.",
    "Если тебе страшно — значит, ты на верном пути.",
    "Клинок не знает жалости. Так же как и мир.",
    "Не доверяй солнцу. Оно лжёт.",
    "Кровь стирается. Но клятвы — никогда.",
    "С каждым врагом ты приближаешься к себе.",
    "Внизу ничего нет. Но ты всё равно спустишься.",
    "Лишь в бою ты видишь своё отражение.",
    "Слова — слабость. Удар — истина.",
    "Иди, даже если дорога хочет тебя сожрать.",
    "Искажение начинается с памяти.",
    "Ты пришёл слишком далеко, чтобы остановиться.",
    "Кто был последним — тот первый в легенде.",
    "Не пытайся понять. Просто дыши и бей.",
    "Если ты чувствуешь, значит, ты жив. Этого достаточно.",
    "Жестокость — язык этого мира.",
    "Ты стал чудовищем, чтобы победить чудовище.",
    "Даже пустота когда-то была полна звёзд.",
    "Гордость ломается первой. Но не у тебя.",
    "Ты не герой. Но и не тень. Ты — последняя искра.",
    "Если ты упал — значит, ты стоял.",
    "Тишина не враг. Она ждёт ответа.",
    "Ты всё ещё здесь. Значит, ты нужен этому миру.",
  ];

  const quoteElement = document.getElementById("quote");
  const button = document.getElementById("generate-quote");

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }

  button.addEventListener("click", generateQuote);

  // Экспорт переменных в глобальную область видимости
  window.quotes = quotes;
  window.generateQuote = generateQuote;
  window.quoteElement = quoteElement;
  window.button = button;
});
