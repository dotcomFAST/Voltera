const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const languageSelect = document.getElementById('languageSelect');

const englishTranslations = {
  'Відкрити меню': 'Open menu',
  'Головна навігація': 'Main navigation',
  'Рішення': 'Solutions',
  'Як це працює': 'How it works',
  'Переваги': 'Benefits',
  'Розрахувати комплект': 'Get a system quote',
  'Енергонезалежність для дому та бізнесу': 'Energy independence for homes and businesses',
  'Власне світло, коли в Україні без перебоїв не обходиться.': 'Your own power when the grid is unreliable.',
  'Voltera підбирає й встановлює комплект «сонячні панелі + акумулятор + інвертор» під конкретний будинок, квартиру чи магазин — так, щоб ви мали комфорт, безпеку та менше залежали від електромережі.': 'Voltera designs and installs solar panel, battery, and inverter systems for your home, apartment, or shop, so you can stay comfortable and secure while relying less on the grid.',
  'Дізнатися вартість': 'Get a quote',
  'Подивитися рішення': 'Explore solutions',
  'Переваги Voltera': 'Voltera benefits',
  'Підбір під ваш сценарій використання': 'Tailored to how you use power',
  'Монтаж під ключ': 'Turnkey installation',
  'Підтримка після запуску': 'Support after launch',
  'Ілюстрація системи Voltera': 'Voltera system illustration',
  'сонячне живлення': 'solar power',
  'Панелі': 'Panels',
  'Акумулятор': 'Battery',
  'Економія': 'Savings',
  'на платіжках': 'on energy bills',
  'Резерв': 'Backup',
  'без відключень': 'without outages',
  'Статистика Voltera': 'Voltera statistics',
  'сімей та підприємців': 'families and business owners',
  'клієнтів залишаються задоволені': 'customer satisfaction',
  'середній термін діагностики': 'average assessment time',
  'Рішення для кожного сценарію': 'Solutions for every need',
  'Комфортний комплект під ваш тип будинку або бізнесу': 'A system tailored to your home or business',
  'Для приватного будинку': 'For a house',
  'Повний резерв для освітлення, опалення, котла, насосу, роутерів і побутової техніки.': 'Reliable backup for lighting, heating, boilers, pumps, routers, and household appliances.',
  'Для квартири': 'For an apartment',
  'Компактні інверторні комплекти, які захищають освітлення, Wi‑Fi, зарядку та базові пристрої.': 'Compact inverter systems to keep your lights, Wi-Fi, devices, and essentials running.',
  'Для малого бізнесу': 'For a small business',
  'Надійне живлення для касових апаратів, холодильників, освітлення, систем безпеки та роботи.': 'Reliable power for tills, refrigerators, lighting, security systems, and day-to-day operations.',
  'Чому Voltera': 'Why Voltera',
  'Система, яка працює з реальним життям українців': 'A system designed for real life',
  'Безпечна автономія': 'Reliable independence',
  'Резервне живлення працює в кризові періоди, навіть якщо електромережа відключена.': 'Backup power keeps you going during outages, even when the grid is down.',
  'Індивідуальний підбір': 'A system built around you',
  'Ми враховуємо площу, споживання, інтенсивність використання і ваші потреби.': 'We consider your space, energy use, usage patterns, and specific needs.',
  'Мінімум ризиків': 'Fewer risks',
  'Сумісні компоненти, перевірені вузли та професійний монтаж без зайвих втрат.': 'Compatible components, tested systems, and professional installation with minimal energy loss.',
  'Прозорий процес': 'A clear process',
  'Ви знаєте, що купуєте, як це працює й коли система запуститься в експлуатацію.': 'Know what you are buying, how it works, and when your system will be up and running.',
  'Як ми працюємо': 'How it works',
  'Просто, зрозуміло і без зайвого хаосу': 'A straightforward process, from start to finish',
  'Підтверджуємо потреби': 'Assess your needs',
  'Діагностика, облік споживання та оцінка потужності, яка потрібна саме вам.': 'We assess your property, energy use, and the capacity you need.',
  'Проектуємо комплект': 'Design your system',
  'Підбираємо панелі, інвертор і акумулятор під ваш бюджет і сценарій живлення.': 'We select panels, an inverter, and a battery to fit your budget and usage.',
  'Монтуємо під ключ': 'Install your system',
  'Команда встановлює все швидко й чисто, з урахуванням вашої геометрії та об’єкта.': 'Our team installs everything efficiently, tailored to your property and its layout.',
  'Підтримуємо після запуску': 'Support you after launch',
  'Ми допомагаємо відстежувати роботу системи, адаптувати її та забезпечувати стабільну роботу.': 'We help monitor and adjust your system to keep it running reliably.',
  'Розрахунок економії': 'Estimate your savings',
  'Побачте, як виглядає ваш сценарій живлення': 'See what your power setup could look like',
  'Виберіть тип об’єкта та середнє споживання — ми підкажемо, який комплект підходить, скільки він дає енергії та з якою економією ви можете розраховувати.': 'Choose your property type and average energy use to find a suitable system, its estimated output, and potential savings.',
  'Тип об’єкта': 'Property type',
  'Середнє споживання, кВт·год/день': 'Average usage, kWh/day',
  'Початкова вартість комплекта': 'Estimated system price',
  'Резерв на': 'Backup for',
  'Приватний будинок': 'House',
  'Квартира': 'Apartment',
  'Магазин': 'Shop',
  'Відгуки клієнтів': 'Customer stories',
  'Українські сім’ї та бізнес уже обирають Voltera': 'Families and businesses choose Voltera',
  '«Ми отримали стабільне освітлення й працюємо без паніки під час відключень. Система простіша, ніж я очікував, а економія відчутна вже в перші місяці.»': '“We have reliable lighting and can work through outages without worry. The system is easier than I expected, and we noticed savings within the first few months.”',
  '— Олена, приватний будинок у Вінниці': '— Olena, homeowner in Vinnytsia',
  '«Для магазину важливо мати безперебійну роботу кас та холодильників. Voltera зробили все під ключ і пояснили, як користуватися системою.»': '“Keeping our tills and refrigerators running is essential. Voltera handled everything and showed us how to use the system.”',
  '— Андрій, маленький супермаркет у Львові': '— Andrii, shop owner in Lviv',
  '«Головне — не просто комплект, а думка про реальне життя людей. Нам підібрали систему під потреби квартири, і тепер вечори стали набагато спокійнішими.»': '“It is not just about the equipment; Voltera understood how we live. Our apartment system fits our needs, and evenings are much less stressful now.”',
  '— Марина, квартира в Києві': '— Maryna, apartment owner in Kyiv',
  'Поширені питання': 'Frequently asked questions',
  'Все, що варто знати перед покупкою': 'What to know before you buy',
  'Чи підходить Voltera для квартири?': 'Is Voltera suitable for an apartment?',
  'Так. Для квартири ми підбираємо компактні комплекти з інвертором і акумулятором, які забезпечують освітлення, зарядку пристроїв та роботу базових систем.': 'Yes. We recommend compact inverter and battery systems that keep your lights, devices, and essential appliances running.',
  'Чи можна отримати систему «під ключ»?': 'Do you offer turnkey installation?',
  'Так. Ми робимо повний цикл: аудит, проєктування, поставка, монтаж, підключення та навчання користування системою.': 'Yes. We handle the full process: assessment, design, delivery, installation, connection, and system training.',
  'Що відбувається під час відключення електроенергії?': 'What happens during a power outage?',
  'Система автоматично перемикається на резервне живлення за кілька секунд, тому освітлення, роутер, холодильник і інші важливі пристрої працюють без перебоїв.': 'The system switches to backup power within seconds, keeping your lights, router, refrigerator, and other essentials running.',
  'Чи є гарантія та сервіс?': 'Do you provide a warranty and service?',
  'Так. На основні компоненти і монтаж передбачена гарантія, а після запуску ми підтримуємо систему та допомагаємо з обслуговуванням.': 'Yes. Core components and installation are covered by a warranty, and we provide ongoing support and maintenance.',
  'Почніть з діагностики': 'Start with an assessment',
  'Залиште заявку — ми підберемо рішення під ваш будинок, квартиру або магазин.': 'Get in touch and we will find the right system for your home, apartment, or shop.',
  'Voltera. Світло для українських родин і малого бізнесу.': 'Voltera. Power for families and small businesses.',
  'Світло для українських родин і малого бізнесу.': 'Power for families and small businesses.',
};

const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  textNodes.push({ node, original: node.nodeValue });
}

function translatePage(language) {
  const isEnglish = language === 'en';
  textNodes.forEach(({ node, original }) => {
    const text = original.trim().replace(/\s+/g, ' ');
    if (!text) return;
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    node.nodeValue = `${leading}${isEnglish ? englishTranslations[text] || text : text}${trailing}`;
  });

  document.documentElement.lang = language;
  document.title = isEnglish
    ? 'Voltera | Reliable power, every day'
    : 'Voltera | Власне світло без відключень';
  document.querySelector('meta[name="description"]').content = isEnglish
    ? 'Voltera designs and installs solar panels, batteries, and inverters for homes, apartments, and small businesses in Ukraine.'
    : 'Voltera — сонячні панелі, акумулятори та інвертори для дому, квартири та малого бізнесу в Україні.';
  document.querySelector('.menu-toggle')?.setAttribute('aria-label', isEnglish ? 'Open menu' : 'Відкрити меню');
  document.querySelector('.main-nav')?.setAttribute('aria-label', isEnglish ? 'Main navigation' : 'Головна навігація');
  document.querySelector('.hero-points')?.setAttribute('aria-label', isEnglish ? 'Voltera benefits' : 'Переваги Voltera');
  document.querySelector('.hero-visual')?.setAttribute('aria-label', isEnglish ? 'Voltera system illustration' : 'Ілюстрація системи Voltera');
  document.querySelector('.trust-bar')?.setAttribute('aria-label', isEnglish ? 'Voltera statistics' : 'Статистика Voltera');
  document.querySelector('.language-control select')?.setAttribute('aria-label', isEnglish ? 'Language' : 'Мова / Language');
}

let currentLanguage = localStorage.getItem('voltera-language') === 'en' ? 'en' : 'uk';
if (languageSelect) {
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener('change', () => {
    currentLanguage = languageSelect.value;
    localStorage.setItem('voltera-language', currentLanguage);
    translatePage(currentLanguage);
    updateEstimate();
  });
}
translatePage(currentLanguage);

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const objectTypeEl = document.getElementById('objectType');
const usageInputEl = document.getElementById('usageInput');
const estimateValueEl = document.getElementById('estimateValue');
const reserveDaysEl = document.getElementById('reserveDays');
const savingsValueEl = document.getElementById('savingsValue');

function updateEstimate() {
  if (!objectTypeEl || !usageInputEl || !estimateValueEl || !reserveDaysEl || !savingsValueEl) {
    return;
  }

  const type = objectTypeEl.value;
  const usage = Number(usageInputEl.value) || 0;

  const baseByType = {
    house: 149000,
    apartment: 89000,
    shop: 199000,
  };

  const reserveByType = {
    house: currentLanguage === 'en' ? '1–2 days' : '1–2 дні',
    apartment: currentLanguage === 'en' ? '0.5–1 day' : '0.5–1 день',
    shop: currentLanguage === 'en' ? '1–3 days' : '1–3 дні',
  };

  const savingsByType = {
    house: currentLanguage === 'en' ? 'up to 35%' : 'до 35%',
    apartment: currentLanguage === 'en' ? 'up to 25%' : 'до 25%',
    shop: currentLanguage === 'en' ? 'up to 40%' : 'до 40%',
  };

  const range = Math.max(1, Math.round(usage / 5));
  const estimate = baseByType[type] + range * 12000;

  estimateValueEl.textContent = currentLanguage === 'en'
    ? `from ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'UAH', maximumFractionDigits: 0 }).format(estimate)}`
    : `від ${estimate.toLocaleString('uk-UA')} ₴`;
  reserveDaysEl.textContent = reserveByType[type];
  savingsValueEl.textContent = savingsByType[type];
}

if (objectTypeEl) {
  objectTypeEl.addEventListener('change', updateEstimate);
}

if (usageInputEl) {
  usageInputEl.addEventListener('input', updateEstimate);
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

updateEstimate();
