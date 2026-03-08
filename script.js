// Меню.
const menuData = {
  salads: [
    { name: "Свежий", price: "235", compound: 'Состав: огурцы, помидоры, болгарский перец, листья салата, красный лук, подсолнечное масло' },
    { name: "Шакарап", price: "235", compound: 'Состав: помидор, репчатый лук, подсолнечное масло' },
    { name: "Пекинский", price: "375", compound: 'Состав: чеснок, помидор, огурец, листья салата, полугорький перец, говяжье мясо, красный лук, соевый соус, лимонный сок, подсолнечное масло' },
    { name: "Греческий", price: "375", compound: 'Состав: помидоры, огурцы, листья салата, сыр фетаксо, маслины, оливки, красный лук, масло оливковое, лимонный сок' },
    { name: "Нежный", price: "375", compound: 'Состав: огурцы, копченая колбаса, яйца вареные, консервированная кукуруза, майонез, сыр голландский' },
    { name: "Цезарь", price: "405", compound: 'Состав: салат айсберг, куриное филе(духовка), сухари, яйца, сыр голландский, сыр пармезан, помидоры черри, соус цезарь' },
    { name: "Охотник", price: "405", compound: 'Состав: охотничьи колбаски, помидоры, огурцы, басай, грецкий орех, корнишоны, майонез, голландский сыр' },
    { name: "Фирменный «Эрэн»", price: "405", compound: 'Состав: шпинат, брокколи, листья салата, цветная капуста, курица в кляре, маринованные шампиньоны, заправка оливковое масло, лимонный сок' },
    { name: "Острый язычок", price: "405", compound: 'Состав: помидоры, огурцы, листья салата, полугорький перец, красный лук, говяжий язык, подсолнечное мясо, соевый соус, чеснок' },
    { name: "Русская закуска", price: "355", compound: 'Состав: селедка, вареный картофель, маринованные огурцы, красный лук' },
    { name: "Грузинский", price: "220", compound: 'Состав: капуста, морковка, красная свекла, броколли, цветная капуста, укроп, кинза' },
    { name: "Хрустящий баклажан", price: "405" },
    { name: "Купеческий", price: "375", compound: 'Состав: айсберг, огурцы, копченое филе, вареные яйца, вареное говяжье мясо' },
    { name: "Грибной", price: "375", compound: 'Состав: консервированные опята, фасоль, древесные грибы, помидоры, вареное говяжье мясо' },
    { name: "Капрезе", price: "375", compound: 'Состав: помидоры, сыр сулугуни, соус песто, листья шпината, кедровые орешки' }
  ],

  soups: [
    { name: "Фрикадельки домашние", price: "300", compound: 'Состав: бульон, фрикадельки, одно яйцо, зелень' },
    { name: "Шорпо баранина", price: "300", compound: 'Состав: бульон, баранье мясо с косточкой, картошка, зелень' },
    { name: "Шорпо говядина", price: "300", compound: 'Состав: бульон, говяжье мясо, картошка, зелень' },
    { name: "Пельмени домашние", price: "300", compound: 'Состав: пельмени, бульон, сметана, зелень' },
    { name: "Солянка сборная", price: "350", compound: 'Состав: томатный бульон, копченная курица, колбаса, говяжье мясо,￼маринованные огурцы, маслины, лимон, сметана' },
    { name: "Лагман жидкий", price: "300", compound: 'Состав: лагманое тесто, подлив , пол горький перец , зелень-(кинза)' },
    { name: "Рамен с говядиной", price: "355", compound: 'корейская лапша, специи, говяжье мясо, яйцо, грибы древесные, зелень' },
    { name: "Ашлян-фу", price: "185", compound: 'Состав: лагманое тесто, крахмал, помидоры, огурцы, яичный омлет, соус' },
    { name: "Окрошка", price: "235", compound: 'Состав: колбаса, яйца, редиска, огурцы, картошка, кефир, сметана, минералка' },
    { name: "Мампар", price: "300", compound: 'Состав: бульон, говяжье мясо,￼мелко-нарезанное тесто, зелень' },
    { name: "Том-ям", price: "465", compound: 'Состав: бульон том ям, креветки, мидии, осьминоги маленькие, помидоры черри, имбирь' }
  ],

  european: [
    { name: "Фирменное блюдо «Эрэн»", price: "1040" },
    { name: "Паста болоньезе", price: "420", compound: 'Состав: фарш говяжий, томатный соус, сушенный базилик, паста' },
    { name: "Фетучини", price: "420", compound: 'Состав: куриное мясо, грибы, сливочный соус, паста фетучини' },
    { name: "Фрикасе с курицей", price: "420", compound: 'Состав: куриное мясо, грибы, сливочный соус, кукуруза, рис' },
    { name: "Мясо по-французски", price: "420", compound: 'Состав: жареная картошка, грибы шапин, говяжье мясо, сыр моцарелла, сметана' },
    { name: "Бризоль с рисом", price: "420", compound: 'Состав: фарш говяжий, яичный блин, огурцы, помидоры, рис' },
    { name: "Бефстроганов с рисом", price: "420" }
  ],

  sauces: [
    { name: "Сырный соус", price: "100" },
    { name: "Кетчуп", price: "100" },
    { name: "Шашлычный соус", price: "100" },
    { name: "Соус Цезарь", price: "100" },
    { name: "Халапеньо", price: "100" },
    { name: "Сметана", price: "100" },
    { name: "Чеснокный соус", price: "100" },
    { name: "Сгущенка", price: "100" },
    { name: "Сосиски (2 шт)", price: "100" }
  ],

  bread: [
    { name: "Боорсок с каймаком", price: "150" },
    {
      name: "Лепешка",
      price: ["60(1шт)", "30(0.5шт)"]
    },
    { name: "Ржаной", price: "50(1л)" },
    { name: "Лаваш сырный", price: "40" },
    { name: "Боорсок", price: "350(1кг)" }
  ],

  main_dishes: [
    { name: "Беш бармак", price: "410", compound: 'Состав: говяжье мясо, тесто, лук, казы карта' },
    { name: "Манты", price: "320", compound: 'Состав: говяжий фарш, тесто' },
    { name: "Куурдак баранина", price: "580", compound: 'Состав: баранье мясо, картошка, лук, зелень' },
    { name: "Фри с сыром", price: "380", compound: 'Состав: фри, сыр, лук, говяжье мясо' },
    { name: "Кара куурдак баранина", price: "700", compound: 'Состав: баранье мясо, лук, зелень' },
    { name: "Плов Ташкентский", price: "350" },
    { name: "Гуйру лагман", price: "350", compound: 'Состав: лагманное тесто, подлив, говяжье мясо, басай' },
    { name: "Гуйру ган фан", price: "350" },
    { name: "Босо лагман (жареный лагман)", price: "350", compound: 'Состав: лагманное тесто, говяжье мясо, полугорький перец, лук, басай' },
    { name: "Фунчоза сяй", price: "350", compound: 'Состав: фунчоза, говяжье мясо, полугорький перец, лук, басай' },
    { name: "Жареный рис", price: "250" },
    { name: "Лазыру", price: "410", compound: 'Состав: говяжье мясо, полугорький перец, лук, древесные грибы' },
    { name: "Дапанджи", price: "350", compound: 'Состав: курица, картошка, тесто, имбирь' },
    { name: "Мушуру", price: "410", compound: 'Состав: омлет, древесные грибы, говяжье мясо, полугорький перец, лук' },
    { name: "Фри с мясом", price: "380", compound: 'Состав: говяжье мясо, фри, полугорький перец, лук' },
    { name: "Азу по-татарски", price: "380", compound: 'Состав: фри, говяжье мясо, лук, полугорький перец, маринованные огурцы, помидоры' },
    { name: "Казан-кевап говядина", price: "410", compound: 'Состав: маринованное говяжье мясо, лук' },
    { name: "Казан-кевап курица", price: "410", compound: 'Состав: маринованное куриное мясо, лук' },
    { name: "Казан-кевап печень", price: "350", compound: 'Состав: маринованная печень, лук' },
    { name: "Требуха жареная", price: "380", compound: 'Состав: требуха, полугорький перец, лук' },
    { name: "Жаровня говядина", price: "430", compound: 'Состав: говяжье мясо, болгарский перец, помидоры, древесные грибы, полугорький перец' },
    { name: "Жаровня курица", price: "430", compound: 'Состав: куриное мясо, болгарский перец, помидоры, древесные грибы, полугорький перец' },
    { name: "Курица по-сычуански", price: "500" }
  ],
  for_company: [
    { name: 'Беш бармак', price: '2100', description: '4-5 персон (ожидание 20 мин)' },
    { name: 'Куурдак баранина', price: '2500', description: '4-5 персон (ожидание 30 мин) ' },
    { name: 'Кесе самса', price: '400', description: '(ожидание 2ч)' },
    { name: 'Плов + 2 шакарап', price: '2500', description: '6-7 персон (ожидание 3 часа)' },
    { name: 'Форель', price: '1600(1кг)' },
    { name: 'Скумбрия', price: '600(1шт)' },
    { name: 'Да-пан-джи', price: '1800', description: '4-5 персон' },
  ],
  coffee: [
    { name: "Эспрессо", price: "120(S)" },
    { name: "Американо", price: ["130(S)", "170(M)"] },
    { name: "Капучино", price: ["160(S)", "210(M)"] },
    { name: "Латте", price: ["150(S)", "200(M)"] },
    { name: "Горячий какао", price: ["110(S)", "160(M)"] },
    { name: "Горячий шоколад", price: ["170(S)", "220(M)"] },
    { name: "Jacobs кофе", price: "70" }
  ],
  steak_house: [
    { name: "Колбаски натуральные говядина, деревенская картошка", price: "350(250гр)" },
    { name: "Ребрышки на барбекю с овощами", price: "870(400гр)" },
    { name: "Седло из баранины с овощами", price: "870(500гр,2шт)" },
    { name: "Тибон стейк с овощами", price: "1040(550гр)" },
    { name: "Ковбой стейк с овощами", price: "1100(600гр)" },
    { name: "Курица отбивная с рисом", price: "470(250гр)" }
  ],

  azerbaijan_kebab: [
    { name: "Хачапури", price: "260" },
    { name: "Колбаски на мангале", price: "290" },
    { name: "Наполеон", price: "350" },
    { name: "Люля-кебаб в лаваше", price: "250" },
    { name: "Говядина мякоть", price: "350" },
    { name: "Оромо-кебаб говядина", price: "300" },
    { name: "Баранина мякоть", price: "350" },
    { name: "Баранина семечки (жирные)", price: "350" },
    { name: "Перзола стейк", price: "600" },
    { name: "Бараньи сердце", price: "300" },
    { name: "Седло из баранины", price: "750(2шт)" },
    { name: "Бараньи почки", price: "300" },
    { name: "Печень", price: "300" },
    { name: "Крылышки", price: "300" },
    { name: "Курица", price: "300" },
    { name: "Курица филе", price: "300" },
    { name: "Утиное филе", price: "300" },
    { name: "Рыба сельдь", price: "240" },
    { name: "Овощной", price: "240" },
    { name: "Шампиньоны", price: "300" },
    { name: "Перепелка", price: "300" },
    { name: "Сет «Эрэн»", price: "5700(18 видов)" },
    { name: "Сет «Кебаб»", price: "3500(12 видов)" }
  ],

  kids_menu: [
    { name: "Пицца «Пепперони»", price: "640" },
    { name: "Пицца «4 сезона»", price: "640" },
    { name: "Чили пицца", price: "640" },
    { name: "Балоньезе", price: "640" },
    { name: "Бифштекс", price: "340(гарнир)" },
    { name: "Котлеты говядина", price: "340(гарнир)" },
    { name: "Наггетсы", price: "250" },
    { name: "Картофель по-деревенски", price: "180" },
    { name: "Фри", price: "180" },
    { name: "Тесто", price: "120" },
    { name: "Рис", price: "100" },
    { name: "Пюре", price: "100" },
    { name: "Вареники", price: "270" },
    { name: "Яичница", price: "120(3шт)" }
  ],

  rolls: [
    { name: "Гавайи", price: "390" },
    { name: "Цезарь", price: "390" },
    { name: "Филадельфия", price: "490" },
    { name: "Калифорния", price: "390" },
    { name: "Запеченный с курицей", price: "390" },
    { name: "Темпура с лососем", price: "400" },
    { name: "Седвич-ролл", price: "460" },
    { name: "Золотой дракон", price: "500" }
  ],

  desserts: [
    { name: "Брауни", price: "270" },
    { name: "Сникерс", price: "250" },
    { name: "Шоколадный чизкейк", price: "250" },
    { name: "Орео", price: "250" },
    { name: "Трюфель", price: "270" }
  ],

  drinks: [
    { name: "Кола / Фанта / Пепси", price: ["150(1л)", "210(1.5л)", "250(2л)"] },
    { name: "Натуральный сок", price: "160" },
    { name: "Компот", price: "150" },
    { name: "Фьюс ти", price: "160" },
    { name: "Газированная вода", price: "75" },
    { name: "Нитро", price: "125" },
    { name: "Горилла", price: "125" },
    { name: "Лимонад мохито", price: ["190(0.5л)", "330(1л)"] },
    { name: "Лимонад клубника-манго", price: ["190(0.5л)", "330(1л)"] },
    { name: "Ягодный лимонад", price: ["190(0.5л)", "330(1л)"] },
    { name: "Лимонад апельсин-манго", price: ["190(0.5л)", "330(1л)"] },
    { name: "Лимонад малина-маракуйя", price: ["190(0.5л)", "330(1л)"] },
    { name: "Лимонад киви-лайм", price: ["190(0.5л)", "330(1л)"] },
    { name: "Лимонад \"Вкус детства\"", price: ["190(0.5л)", "330(1л)"] },
    { name: "Коктейль клубничный", price: "240(0.5л)" },
    { name: "Коктейль шоколадный", price: "240(0.5л)" },
    { name: "Коктейль ванильный", price: "240(0.5л)" },
    { name: "Коктейль орео", price: "240(0.5л)" },
    { name: "Коктейль ягодный микс", price: "240(0.5л)" },
    { name: "Чай черная смородина", price: ["250(S)", "320(M)"] },
    { name: "Чай ягодный микс", price: ["250(S)", "320(M)"] },
    { name: "Чай роза с шиповником", price: ["250(S)", "320(M)"] },
    { name: "Чай пряное яблоко", price: ["250(S)", "320(M)"] },
    { name: "Чай фруктовый сад", price: ["250(S)", "320(M)"] },
    { name: "Чай облепиха с грушей", price: ["250(S)", "320(M)"] },
    { name: "Имбирный чай", price: ["250(S)", "320(M)"] },
    { name: "Ташкентский чай", price: ["250(S)", "320(M)"] },
    { name: "Чай с молоком", price: "120" },
    { name: "Чай с лимоном", price: "120" },
    { name: "Чай черный", price: "75" },
    { name: "Чай зеленый", price: "75" }
  ]
};

const categories = {
  soups: '🍜 Первые блюда',
  main_dishes: '🍲 Вторые блюда',
  european: '🍝 Европейская кухня',
  azerbaijan_kebab: '🥓Азербайджанские шашлыки',
  salads: '🥗 Салаты',
  steak_house: '🍖Стейки',
  kids_menu: '🧒🏻Детское меню',
  rolls: '🍣Роллы',
  desserts: '🥮Десерты',
  sauces: '🫙 Соусы/Добавки',
  for_company: '🧑‍🧑‍🧒‍🧒 На компанию',
  bread: '🍞 Хлеб',
  coffee: '☕️ Кофе',
  drinks: '🧋 Напитки',
}

// Декларирование элементов DOM.
const tabsEl = document.getElementById("tabs");
const titleEl = document.getElementById("category-title");
const itemsEl = document.getElementById("menu-items");

let activeCategory = "soups";

// Отрисовка менюшки.
function renderMenu(category) {
  activeCategory = category;

  // Заголовок
  titleEl.textContent = categories[category];

  // Предметы
  itemsEl.innerHTML = "";

  menuData[category].forEach(item => {
    const div = document.createElement("details");
    div.className = "menu-item";

    div.innerHTML = `
        <summary class='menu-accordion-summary'>
        <div>
          <div class="menu-name">${item.name}</div>
          ${item.description ? `<div class="menu-desc">${item.description}</div>` : ''}
        </div>
        <div class="menu-price">${Array.isArray(item.price) ? item.price.map((p) => { return ' ' + p }) : item.price} сом</div>
        </summary>
        <div class="menu-compound">${item.compound != undefined ? item.compound : ''}</div>
      `;

    itemsEl.appendChild(div);
  });

  // Update active tab button
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === category);
  });
}

// === Render tabs ===
function renderTabs() {
  Object.keys(categories).forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "tab-btn";
    btn.textContent = categories[cat];
    btn.dataset.cat = cat;

    btn.addEventListener("click", () => renderMenu(cat));

    tabsEl.appendChild(btn);
  });
}

// Init
renderTabs();
renderMenu(activeCategory);


const name = document.querySelector('#form-name');
const phone = document.querySelector('#form-phone');
const date = document.querySelector('#form-date');
const time = document.querySelector('#form-time');
const quantity = document.querySelector('#form-quantity');
const table = document.querySelector('#form-table');


const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const msg =
    `Здравствуйте! Хочу забронировать столик. \n` +
    `Имя: ${name.value}\n` +
    `Телефон: ${phone.value} \n` +
    `Дата: ${date.value} \n` +
    `Время: ${time.value} \n` +
    `Количество гостей: ${quantity.value} \n` +
    `Предпочитаемый столик: ${table.value} \n`;

  const url = "https://wa.me/996705774787?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
})

// Фотки как в инсте (с оверлеем там и т.д)

const photos = ['src/images/eren1.jpeg', 'src/images/eren2.jpeg', 'src/images/eren3.jpeg', 'src/images/eren4.jpeg']
const gallery = document.querySelector('#gallery')

photos.forEach(photo => {
  const item = document.createElement('div');
  item.className = 'gallery-photo';
  item.style.backgroundImage = `url('${photo}')`;


  gallery.appendChild(item);
})

const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

document.querySelectorAll('.gallery div').forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.style.backgroundImage.slice(5, -2);
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});