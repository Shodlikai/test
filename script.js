// ===== PAROL TIZIMI =====
const AUTH_KEY = 'SHodlik_test282827_texlaog_markazi_authenticated';
const VALID_CREDENTIALS = {
    username: 'Texnologiya2025',
    password: 'Odina1221'
};

// ===== TEST SAVOLLARI (400 TA) =====
const questionsData = [
{
    question: "Papye-mashye qanday maqsadlarda ishlatiladi?",
    options: [
      "Qurilish materiallari",
      "Dekorativ san'at",
      "Elektronika ishlab chiqarish",
      "Tibbiyot asboblari"
    ],
    correctAnswer: "Dekorativ san'at"
  },
  {
    question: "Papye-mashye mahsulotlarini bezash uchun qanday materiallar ishlatiladi?",
    options: [
      "Rangli bo'yoqlar va lak",
      "Qum va tsement",
      "Metall va plastmassa",
      "Yog'och va shisha"
    ],
    correctAnswer: "Rangli bo'yoqlar va lak"
  },
  {
    question: "Papye-mashye so'zi qanday ma'noni anglatadi?",
    options: [
      "Yog'ochdan yasalgan",
      "Shishadan tayyorlangan",
      "Qog'oz va kley bilan qoplangan",
      "Tovush chiqaruvchi"
    ],
    correctAnswer: "Qog'oz va kley bilan qoplangan"
  },
  {
    question: "Qaysi jarayon papye-mashye tayyorlashda eng muhim?",
    options: [
      "Yelimlash",
      "Qoplash",
      "Quruqlash",
      "Bo'yash"
    ],
    correctAnswer: "Quruqlash"
  },
  {
    question: "Papye-mashye mahsulotlarida asosiy material sifatida ishlatiladigan qog'oz turi qaysi?",
    options: [
      "Karton",
      "Gazeta qog'ozi",
      "Fotopapir",
      "Shisha qog'oz"
    ],
    correctAnswer: "Gazeta qog'ozi"
  },
  {
    question: "Papye-mashye san'atida ishlatiladigan kley qanday holatda bo'lishi kerak?",
    options: [
      "Suyuq",
      "Qattiq",
      "Quruq",
      "Jel"
    ],
    correctAnswer: "Suyuq"
  },
  {
    question: "Papye-mashye mahsulotlari odatda qanday maqsadlar uchun ishlatiladi?",
    options: [
      "Og'ir yuklarni tashish",
      "Dekorativ buyumlar yaratish",
      "Elektr energiyasini saqlash",
      "Suv o'tkazish"
    ],
    correctAnswer: "Dekorativ buyumlar yaratish"
  },
  {
    question: "Papye-mashye tayyorlashda ishlatiladigan asosiy vositalardan biri nima?",
    options: [
      "Bolg'a",
      "Cho'tka",
      "Elektr arra",
      "Tegirmon"
    ],
    correctAnswer: "Cho'tka"
  },
  {
    question: "Papye-mashye tayyorlash uchun qog'oz qanday tayyorlanadi?",
    options: [
      "Suvda ivitiladi",
      "Quritiladi va maydalaydi",
      "Yog'lanadi",
      "Eritiladi"
    ],
    correctAnswer: "Suvda ivitiladi"
  },
  {
    question: "Papye-mashye san'atida qog'oz va kleydan tashqari yana nima ishlatiladi?",
    options: [
      "Lak va bo'yoqlar",
      "Metall va plastmassa",
      "Shisha va g'isht",
      "Suv va havo"
    ],
    correctAnswer: "Lak va bo'yoqlar"
  },
  {
    question: "Papye-mashye mahsulotlarining mustahkamligini oshirish uchun nima qo'llaniladi?",
    options: [
      "Qo'shimcha qog'oz qatlami",
      "Metall arqonlar",
      "Plastik tarkibiy qismlar",
      "Yog'och karkas"
    ],
    correctAnswer: "Qo'shimcha qog'oz qatlami"
  },
  {
    question: "Boshlang'ich ta'limda iqtisodiy tarbiya nima uchun muhim?",
    options: [
      "Faqat pulni tejash uchun",
      "O'quvchilarning iqtisodiy bilimlarini oshirish uchun",
      "Faqat katta yoshdagilar uchun kerak",
      "Shaxsiy maqsadlar uchun"
    ],
    correctAnswer: "O'quvchilarning iqtisodiy bilimlarini oshirish uchun"
  },
  {
    question: "\"Tejamkorlik\" nima?",
    options: [
      "Pul sarflash",
      "Resurslarni oqilona ishlatish",
      "Juda ko'p xarid qilish",
      "O'zini cheklash"
    ],
    correctAnswer: "Resurslarni oqilona ishlatish"
  },
  {
    question: "\"Xarajat\" tushunchasini tushuntirib bering.",
    options: [
      "Mahsulot yaratish jarayoni",
      "Resurslarni sarflash yoki sotib olish",
      "Faqat tejash jarayoni",
      "Pul ishlash"
    ],
    correctAnswer: "Resurslarni sarflash yoki sotib olish"
  },
  {
    question: "Tejamkorlikning asosiy foydasi nima?",
    options: [
      "Juda ko'p narsalarni sotib olish",
      "Pulni tejab qolish va kelajakda foydalangan holda ishlatish",
      "Har kuni barcha pullarni sarflash",
      "Barcha narsalarni bepul olish"
    ],
    correctAnswer: "Pulni tejab qolish va kelajakda foydalangan holda ishlatish"
  },
  {
    question: "\"Ishlab chiqarish vositalari\" deganda nimani tushunasiz?",
    options: [
      "Faqat inson qo'li bilan ishlab chiqariladigan narsalar",
      "Ishlab chiqarish jarayonida ishlatiladigan asbob-uskunalar, texnika va resurslar",
      "Faqat poyabzal va kiyim",
      "Pul tejash vositasi"
    ],
    correctAnswer: "Ishlab chiqarish jarayonida ishlatiladigan asbob-uskunalar, texnika va resurslar"
  },
  {
    question: "Iqtisodiy tarbiyada \"qarz\" tushunchasi nimani anglatadi?",
    options: [
      "Faqat pul berish",
      "Boshqalardan vaqtincha foydalanish uchun pul yoki resurs olish",
      "Faqat sotib olish",
      "Hech kimga yordam bermaslik"
    ],
    correctAnswer: "Boshqalardan vaqtincha foydalanish uchun pul yoki resurs olish"
  },
  {
    question: "Tejamkor bo'lish qanday foyda keltiradi?",
    options: [
      "Faqat ko'proq xarid qilish imkoniyati",
      "Kelajakda muhim narsalarga pul tejash imkoniyati",
      "Pulni har doim ishlatish",
      "Har kuni hamma narsani sotib olish"
    ],
    correctAnswer: "Kelajakda muhim narsalarga pul tejash imkoniyati"
  },
  {
    question: "Qo'l mehnatiga o'rgatishda qo'llaniladigan asosiy usullar tizimiga kirmaydigan usulni aniqlang.",
    options: [
      "Bilim va ko'nikma",
      "Og'zaki bayon qilish.",
      "Tushuntirish va hikoya qilish.",
      "Suhbat."
    ],
    correctAnswer: "Bilim va ko'nikma"
  },
  {
    question: "Bu usulda materialni jonli va obrazli bayon qilinadi va yangi bilimni o'qituvchining oʻzi beradi.",
    options: [
      "Suhbat usuli",
      "Og'zaki bayon qilish usuli",
      "Tushuntirish va hikoya qilish usuli",
      "Labaratoriya ishlari"
    ],
    correctAnswer: "Tushuntirish va hikoya qilish usuli"
  },
  {
    question: "Qaysi jarayonda o'quvchilarning idroklarini faollashtirish maqsadida tushuntirilayotgan material yuzasidan ularga bir-ikkita savol berish mumkin.",
    options: [
      "Hikoya qilish jarayonida",
      "Suhbat jarayonida",
      "Og'zaki bayon qilish jarayonida",
      "Tushuntirish jarayonida"
    ],
    correctAnswer: "Tushuntirish jarayonida"
  },
  {
    question: "Qaysi usul turli o'quv maqsadlarda, ya'ni yangi dastur materialini bayon qilish, bilimlarni rejalashtirish va chuqurlashtirish uchun takrorlash jarayonida, o'quvchilarning bilimini tekshirish uchun qo'llanishi mumkin?",
    options: [
      "Suhbat usuli",
      "Og'zaki bayon qilish usuli",
      "Tushuntirish va hikoya qilish usuli",
      "Labaratoriya ishlari"
    ],
    correctAnswer: "Tushuntirish va hikoya qilish usuli"
  },
  {
    question: "Ko'rgazmali qurollarni o'quvchilar tomonidan bajarilishini qaysi ishga kiritish mumkin?",
    options: [
      "Suhbat",
      "Mashq",
      "Ekskursiya",
      "Amaliy ish"
    ],
    correctAnswer: "Amaliy ish"
  },
  {
    question: "Qo'l mehnati mashg'ulotlarida ayrim bo'limlarni oʻrganish, kasblar, materiallarni tayyorlash texnologiyasi, xavfsizlik texnikasi qoidalarini tanishtirish munosabati bilan qo'llaniladi.",
    options: [
      "Texnik vositalar",
      "Ekskursiya",
      "Kitob bilan ishlash",
      "Mustaqil ishlar"
    ],
    correctAnswer: "Ekskursiya"
  },
  {
    question: "Tasvirlash texnikasining turli formalarini qirqish va ularni fon tarzida qabul qilingan materiallar hisobiga mustahkamlashga asoslanuvchi turi-.....?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "ijodni rivojlantirishda katta yordam beradi, tasavvurni boyitadi, kuzatuvchanlik va diqqatni faollashtiradi, irodani tarbiyalaydi, chamalash va rangni sezishni o'stiradi.",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Applikatsiya ishini bajarishda asosiy e'tibor nimaga qaratilishi kerak?",
    options: [
      "Kompozitsiyaga",
      "Rangiga",
      "Umumiy ko'rinishiga",
      "Sifatga"
    ],
    correctAnswer: "Kompozitsiyaga"
  },
  {
    question: "Yaxshi o'ylangan kompozitsiya, ya'ni tasvirlash lozim bo'lgan narsalarni joylashtirish qaysi ish turning muvaffaqiyati garovi hisoblanadi?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Monumental dekorativ san'at turlaridan biri..?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "Turli davrlarda va turli mamlakatlarda qaysi ish turi qo'llaniladigan materialiga ko'ra ham, naqsh va rasmlariga ko'ra ham o'ziga xos xususiyatlarga ega boʻlgan?",
    options: [
      "Kviling",
      "Toshlar bilan ishlash",
      "Mozaika",
      "Applikatsiya"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "O'rta Osiyo madrasalari, machitlar, hukmdorlarning saroylari qaysi ish turi bilan bezatilgan?",
    options: [
      "Kviling",
      "Rangli toshlar bilan",
      "Mozaika",
      "Applikatsiya"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "Mozaika ishlarida nimalardan foydalaniladi?",
    options: [
      "oyna, sopol, plita.",
      "tosh, taxta",
      "sopol idish, qog'oz",
      "karton, oyna"
    ],
    correctAnswer: "oyna, sopol, plita."
  },
  {
    question: "... bu rasm sathida ayrim-ayrim parchalar (qog'oz, oyna, sapo, gul tojibarglari, tuxum po'sti va shu kabilar) qo 'yib chiqishdir.",
    options: [
      "Kviling",
      "Toshlar bilan ishlash",
      "Mozaika",
      "Applikatsiya"
    ],
    correctAnswer: "Mozaika"
  },
  {
    question: "Qaysi buyumdan mozaika qilishda shunday tasvirni tanlash kerakki, ularning konturlari mumkin qadar tekis va mayda egri-bugrilari bo'lmasligi kerak?",
    options: [
      "Tuxum po'stidan",
      "Toshdan",
      "Qog'ozdan",
      "Oynadan"
    ],
    correctAnswer: "Tuxum po'stidan"
  },
  {
    question: "Turli meva va sabzavot, poliz ekinlarining urug'lari, danak, baliq tangalari, chig'anoq, mayda toshlar bilan xilma-xil qaysi turdagi ishlarini bajarish mumkin?",
    options: [
      "Applikatsiya",
      "Mozaika",
      "Kviling",
      "Toshlar bilan ishlash"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Dars maqsadining qaysi turi dars jarayonida oʻquvchilarda shakllantiriladigan bilim, ko'nikma va malakalar asosida belgilanadi?",
    options: [
      "Tarbiyaviy maqsad",
      "Ta'limiy maqsad",
      "Rivojlantiruvchi maqsad",
      "Axloqiy maqsad"
    ],
    correctAnswer: "Ta'limiy maqsad"
  },
  {
    question: "Dars maqsadining qaysi turi dars natijasida o'quvchilarda qaysi bilimlar va axloqiy fazilatlar rivojlantirilishi asosida belgilanadi?",
    options: [
      "Rivojlantiruvchi maqsad",
      "Tarbiyaviy maqsad",
      "Axloqiy maqsad",
      "Ta'limiy maqsad"
    ],
    correctAnswer: "Rivojlantiruvchi maqsad"
  },
  {
    question: "Dars maqsadining qaysi turi dars jarayonida o'quvchilarda axloqiy sifatlar shakllantirilishi asosida belgilanadi?",
    options: [
      "Rivojlantiruvchi maqsad",
      "Tarbiyaviy maqsad",
      "Axloqiy maqsad",
      "Ta'limiy maqsad"
    ],
    correctAnswer: "Tarbiyaviy maqsad"
  },
  {
    question: "Qanday malaka ko'p marotaba takrorlanadigan mashqlar natijasida hosil boʻladi?",
    options: [
      "Mehnat madaniyati malakasi",
      "Yozma nutq malakasi",
      "Tinglab tushunish malakasi",
      "Anglash malakasi"
    ],
    correctAnswer: "Mehnat madaniyati malakasi"
  },
  {
    question: "Bolalar qaysi ish turi bilan ishlaganda nostandart ijodiy usullardan foydalanish va materiallar bilan tajriba o'tkazishda chalkashlik kuzatiladi?",
    options: [
      "Kviling",
      "Toshlar bilan ishlash",
      "Mozaika",
      "Applikatsiya"
    ],
    correctAnswer: "Applikatsiya"
  },
  {
    question: "Bolalar qaysi ish turi bilan ishlaganda ijodkorlikni ifoda etishdagi qiyinchiliklar kuzatiladi?",
    options: [
      "Applikatsiya",
      "Kviling",
      "Toshlar bilan ishlash",
      "Plastilin bilan ishlash"
    ],
    correctAnswer: "Kviling"
  },
  {
    question: "Applikatsiyaning qaysi turida nosimmetrik tasvirlar uchun kerakli oʻlchamdagi kvadrat yoki to'rtburchak qog'ozni yarmiga buklab chizib olamiz, uni buklov joyidan ushlab turamiz va tasvirning yarmini kesamiz.",
    options: [
      "Lentali applikatsiya",
      "Simmetrik applikatsiya",
      "Nosimmetrik applikatsiya",
      "Tasvirli applikatsiya"
    ],
    correctAnswer: "Simmetrik applikatsiya"
  }
];


// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

let shuffledAllQuestions = [];
let currentQuestionIndex = 0;
let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;
let blockStartIndex = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100;
    }
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}

function loadQuestion() {
    quizContainer.innerHTML = '';
    questionAnsweredThisTurn = false;
    nextButton.disabled = true;

    if (shuffledAllQuestions.length === 0) {
        shuffledAllQuestions = [...questionsData];
        shuffleArray(shuffledAllQuestions);
        currentQuestionIndex = 0;
    }

    if (currentQuestionIndex >= shuffledAllQuestions.length) {
        currentQuestionIndex = 0;
        shuffleArray(shuffledAllQuestions);
    }

    const q = shuffledAllQuestions[currentQuestionIndex];
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${totalAttempts + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options-list');

    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option, optionIndex) => {
        const listItem = document.createElement('li');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'question';
        radioInput.value = option;
        radioInput.id = `q-option${optionIndex}`;

        const label = document.createElement('label');
        label.htmlFor = `q-option${optionIndex}`;
        label.textContent = option;

        radioInput.addEventListener('change', (event) => {
            if (questionAnsweredThisTurn) return;

            const selectedValue = event.target.value;
            const allLabels = questionBlock.querySelectorAll('label');
            
            totalAttempts++;
            blockTotalCount++;

            if (selectedValue === q.correctAnswer) {
                // To'g'ri javob
                label.classList.add('selected-correct');
                correctCount++;
                blockCorrectCount++;

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'correct');
                feedbackDiv.textContent = 'To\'g\'ri!';
                questionBlock.appendChild(feedbackDiv);
            } else {
                // Noto'g'ri javob
                label.classList.add('selected-wrong');
                
                // To'g'ri javobni ko'rsatish
                allLabels.forEach(lbl => {
                    const radio = document.getElementById(lbl.htmlFor);
                    if (radio && radio.value === q.correctAnswer) {
                        lbl.classList.add('show-correct');
                    }
                });

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'incorrect');
                feedbackDiv.textContent = `Noto\'g\'ri. To'g'ri javob: "${q.correctAnswer}"`;
                questionBlock.appendChild(feedbackDiv);
            }

            updateResults();

            const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.disabled = true;
            });

            questionAnsweredThisTurn = true;
            nextButton.disabled = false;
        });

        listItem.appendChild(radioInput);
        listItem.appendChild(label);
        optionsList.appendChild(listItem);
    });

    questionBlock.appendChild(optionsList);
    quizContainer.appendChild(questionBlock);
}

function showResultModal() {
    const modalCorrect = document.getElementById('modalCorrect');
    const modalWrong = document.getElementById('modalWrong');
    const modalPercent = document.getElementById('modalPercent');
    const modalVerdict = document.getElementById('modalVerdict');
    const modalIcon = document.querySelector('.modal-icon');

    const wrongCount = blockTotalCount - blockCorrectCount;
    const percentage = blockTotalCount > 0 ? (blockCorrectCount / blockTotalCount) * 100 : 0;

    modalCorrect.textContent = blockCorrectCount;
    modalWrong.textContent = wrongCount;
    modalPercent.textContent = percentage.toFixed(0) + '%';

    // Baholash (70% o'tish bali)
    if (percentage >= 70) {
        modalVerdict.textContent = '🎉 Tabriklaymiz! Siz imtihondan muvaffaqiyatli o\'tdingiz!';
        modalVerdict.className = 'modal-verdict pass';
        modalIcon.textContent = '🎉';
    } else {
        modalVerdict.textContent = '😔 Afsuski, siz imtihondan o\'ta olmadingiz. Yana harakat qiling!';
        modalVerdict.className = 'modal-verdict fail';
        modalIcon.textContent = '😔';
    }

    resultModal.style.display = 'block';
}

function handleNextQuestion() {
    currentQuestionIndex++;
    
    // Har 20 ta savoldan keyin modal ko'rsatish
    if (blockTotalCount > 0 && blockTotalCount % 20 === 0) {
        showResultModal();
        return;
    }

    loadQuestion();
}

// ===== HODISA TINGLOVCHILAR =====
nextButton.addEventListener('click', handleNextQuestion);

continueBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    
    // Blok statistikasini tiklash
    blockCorrectCount = 0;
    blockTotalCount = 0;
    blockStartIndex = currentQuestionIndex;
    
    // Yangi savol yuklash
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    // Login ekranini yashirish
    const loginScreen = document.getElementById('loginScreen');
    if (loginScreen) {
        loginScreen.style.display = 'none';
    }
    
    // Main content ni ko'rsatish
    document.body.classList.remove('login-active');
    
    // Testni boshlash
    startTimer();
    updateResults();
    loadQuestion();
});

document.getElementById('loginBtn').addEventListener('click', function() {
    checkCredentials();
});

document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCredentials();
    }
});

document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('password').focus();
    }
});

function checkCredentials() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');

    if (!username || !password) {
        errorMessage.textContent = '⚠️ Iltimos, barcha maydonlarni to\'ldiring!';
        errorMessage.classList.add('show');
        return;
    }

    loginBtn.disabled = true;
    btnText.innerHTML = 'Tekshirilmoqda<span class="loading"></span>';
    errorMessage.classList.remove('show');

    setTimeout(() => {
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            localStorage.setItem(AUTH_KEY, 'true');
            errorMessage.classList.remove('show');
            
            btnText.textContent = '✓ Muvaffaqiyatli!';
            loginBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            
            setTimeout(() => {
                showMainContent();
            }, 500);
        } else {
            errorMessage.textContent = '❌ Login yoki parol noto\'g\'ri!';
            errorMessage.classList.add('show');
            loginBtn.disabled = false;
            btnText.textContent = 'Kirish';
            
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    }, 500);
}

function showMainContent() {
    const loginScreen = document.getElementById('loginScreen');
    
    loginScreen.style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    }, 500);
}

function logout() {
    if (confirm('Rostdan ham tizimdan chiqmoqchimisiz?')) {
        localStorage.removeItem(AUTH_KEY);
        location.reload();
    }
}

console.log('%c💡 Tizimdan chiqish uchun:', 'color: blue; font-size: 14px; font-weight: bold;');
console.log('%clogout()', 'color: green; font-size: 12px; background: #f0f0f0; padding: 5px;');

// ===== TAYMER =====
let startTime;
let timerInterval;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;
}