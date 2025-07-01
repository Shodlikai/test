// ==========================================================
// SECTION 1: Data and Global Variables
// Bu bo'limda test savollari ma'lumotlari va veb-sahifa elementlariga bog'langan global o'zgaruvchilar joylashgan.
// ==========================================================

const questionsData = [
    {
        question: "Pedagogika fanining vazifalari:",
        options: [
            "Yosh avlodni kamol toptirish",
            "Pedagogika kursining optimal mazmuni ishlab chiqish",
            "Ilm o'rgatish",
            "Kelajakka tavsiyalarning ishlatilishi"
        ],
        correctAnswer: "Yosh avlodni kamol toptirish"
    },
    {
        question: "Pedagogik konflentlar qonday xolatlarda yuzaga keladi?",
        options: [
            "Oiladagi a'zolari o'trasida",
            "Do'stlar davrasida",
            "Jamoa bilan",
            "Ta'lim tarbiya jarayonida"
        ],
        correctAnswer: "Ta'lim tarbiya jarayonida"
    },
    {
        question: "Yechimini topish qiyin bo'lgan nizo bu-?",
        options: [
            "Tashqi nizo",
            "Aralash nizo",
            "Ichki nizo",
            "O'zaro nizo"
        ],
        correctAnswer: "Ichki nizo"
    },
    {
        question: "Pedagogik konfliktlarni Yechimini topishdagi muhim masala bu-?",
        options: [
            "Ota-onaning o'mi",
            "Rahbarning o'mi",
            "O'qiuvchi va o'quvchi o'trasidagi munosabatning ijobivilgi",
            "Mahalla jamoasi"
        ],
        correctAnswer: "O'qiuvchi va o'quvchi o'trasidagi munosabatning ijobivilgi"
    },
    {
        question: "Ta'lim j arayonidagi konfliktlarni echishda kimning roli muxim",
        options: [
            "O'qiuvchining",
            "Rahbarlarning",
            "O'quvchining",
            "Guruxning"
        ],
        correctAnswer: "O'qiuvchining"
    },
    {
        question: "Bola ta'lim olish arayonidagi nizolarni oldini olishda kimdan ko'proq ko'mak oladi?",
        options: [
            "Oiladan",
            "Oiladan Mahalladan guruxdan",
            "Mahalladan",
            "Guruxdan"
        ],
        correctAnswer: "Oiladan Mahalladan guruxdan"
    },
    {
        question: "Mulogot samadorligi kimga bog'liq?",
        options: [
            "Subhatdoshlarning yoshiga",
            "Gaplashayotgan kishilarningbir-biriga qanchalik mos ekanligiga",
            "Subhatdoshlarning hrakteriga",
            "So'zlarning ta'sirchanligiga"
        ],
        correctAnswer: "Gaplashayotgan kishilarningbir-biriga qanchalik mos ekanligiga"
    },
    {
        question: "Pedagogik konfliktlarni Yechimini topishdagi muxim masala bu-7",
        options: [
            "Rahbaraing o'rni",
            "O'qituvchi va o'quvchining o'trasidagi munosabatning to'g'ri echimi",
            "Ota-ona o'trasidagi munosabat",
            "Oiladagi muommolar"
        ],
        correctAnswer: "O'qituvchi va o'quvchining o'trasidagi munosabatning to'g'ri echimi"
    },
    {
        question: "Shaxs va jamoa jaomadagi shaxslararo nizolarni bartaraf etish to'g'risidagi tadqigotni kim olib borgan?",
        options: [
            "L.G.Somalin",
            "Maxmudov V",
            "Aliboev Sh",
            "A.A.Ershanov"
        ],
        correctAnswer: "L.G.Somalin"
    },
    {
        question: "Konflikt bartaraf etilmay munosabatlar butunlay tugallansa,buni qanday xodisa deyiladi?",
        options: [
            "Pozetsiyalarning bir-biriga to'g'ri kelmasligi tufayli ro'y bergan xodisa",
            "Ikki tomonning kelishuvi",
            "Suxbatdoshimizni to'g'ri tushinish",
            "Konfliktlar bo'lmasligiga xarakat qilish"
        ],
        correctAnswer: "Pozetsiyalarning bir-biriga to'g'ri kelmasligi tufayli ro'y bergan xodisa"
    },
    {
        question: "Pedagogik konfliktni tug'diradigan sharotilar qaysilar?",
        options: [
            "Bu kishilarning qiziqishlari,qarashlari,bir-birini tushanishlaridir",
            "Ogoxlantirish omili",
            "Muloqatning barqaror emasligi",
            "Bu kishilarning kelishmovchiligi"
        ],
        correctAnswer: "Bu kishilarning qiziqishlari,qarashlari,bir-birini tushanishlaridir"
    },
    {
        question: "Mullogot samadorligi nimaga bog'liq?",
        options: [
            "Suxbatlashayotgan kishilarning bir-biriga qanchalik mas ekanligi",
            "Suxbadoshlarning yoshini mosligiga",
            "Suxbadoshlarning xarakteriga",
            "So'zlaming tasirchanligiga"
        ],
        correctAnswer: "Suxbatlashayotgan kishilarning bir-biriga qanchalik mas ekanligi"
    },
    {
        question: "Pedagogik konflikti asosan nima asosida yuzaga keladi?",
        options: [
            "Mexnat asosida",
            "O'yin asosida",
            "Mulogat ogibatida",
            "Dars asosida"
        ],
        correctAnswer: "Mulogat ogibatida"
    },
    {
        question: "Ta'lim jarayonidagi konfliktlar kimlar o'trasida kelib chiqishi munkin?",
        options: [
            "O'qituvchi-o'quvchi",
            "O'quvchi,Direktor,O'qituvchi",
            "O'quvchi- direktor",
            "O'quvchi-o'quvchi"
        ],
        correctAnswer: "O'qituvchi-o'quvchi, O'quvchi- direktor,O'quvchi-o'quvchi"
    },
    {
        question: "Pedagogik konfliktlarda o'quvchilarga asosiy ko'mak beruvchi maskan.",
        options: [
            "Oila",
            "Maxallada",
            "Sinf jamoasi",
            "Jamiyatda"
        ],
        correctAnswer: "Sinf jamoasi"
    },
    {
        question: "Ziddiyatni qanday tomonlari bor.",
        options: [
            "Verbal",
            "Verbal Noverbal",
            "Noverbal",
            "Aralash"
        ],
        correctAnswer: "Verbal Noverbal"
    },
    {
        question: "Pedagogik konfliktlar qanday xolatlarda yuzaga keladi. .",
        options: [
            "Oiladagi a'zolari o'tiasida",
            "Do'stlar davrasida",
            "Ta'lim-tarbiya jarayonida",
            "Oilasida"
        ],
        correctAnswer: "Ta'lim-tarbiya jarayonida"
    },
    {
        question: "Yechimini topish qiyin bo'Igan nizo bu",
        options: [
            "Tashqi nizo",
            "Ichki nizo",
            "Aralash nizo",
            "Nizoni sabablari"
        ],
        correctAnswer: "Ichki nizo"
    },
    {
        question: "Konflikt nima?",
        options: [
            "Ishtirokchilarning xar biri ikkinchisining o'z extiyqilarini qondirish",
            "Munosabatlarning yomonlashuvi",
            "O'zaro kelishmovchilik",
            "Qarama qarshilik va kurashning keskin kuchayib, ketishi jarayonidir"
        ],
        correctAnswer: "Qarama qarshilik va kurashning keskin kuchayib, ketishi jarayonidir"
    },
    {
        question: "Konflikt dinamikasi necha bosqichdan iborat",
        options: [
            "2 bosqichdan -1. sabab, 2-ogibat",
            "Ob'ekt, sub'ekt",
            "4 bosqichdan",
            "3 bosqichdan —etilish, so'nish. Ro'yobga chiqish"
        ],
        correctAnswer: "3 bosqichdan —etilish, so'nish. Ro'yobga chiqish"
    },
    {
        question: "Nizoli vaziyat-",
        options: [
            "Tomonlarning yashirin, ochiq to'gnashuvi, nonunoəibligi",
            "Tomonlarning to'gnashuvi",
            "Tomonlarning ochiq to'gnashuvi",
            "Tomonlarning nonunoəibligi"
        ],
        correctAnswer: "Tomonlarning yashirin, ochiq to'gnashuvi, nonunoəibligi"
    },
    {
        question: "Konflikt eskolyatsiyasi nima?",
        options: [
            "Liderlikka intilish;",
            "Konflikt migyosining kengayishi;",
            "Talabalar o'rtasiida konfliktlar",
            "Kuch ishlatish yo'li bilan hal etish"
        ],
        correctAnswer: "Konflikt migyosining kengayishi;"
    },
    {
        question: "“Konfliktogen” so'zining ma'nosi nima?",
        options: [
            "Konflikt miqyosining kengayishi;",
            "Ziddiyat, to'qnashuv;",
            "“agressiv” usuli, “qonuniy” usul",
            "Imkon beruvchi, sharoit yaratuvchi;"
        ],
        correctAnswer: "Imkon beruvchi, sharoit yaratuvchi;"
    },
    {
        question: "Pedagogik konfliktologiya qaysi fanlar bilan bog'liq?",
        options: [
            "Sotsiologiya, psixologiya,pedagogika, biologiya, ijtimoiy pedagogika, pedagogika tarixi;",
            "Qiyosiy pedagogika, anatomiya, fiziologiya, psixologiya, pedagogika, sotsiologiya, biologiya, tarix;",
            "Yangiliklarga bo'lgan munosabat",
            "Pedagogika, ijtimoiy pedagogika, pedagogika tarxi, qiyosiy pedagogika, anatomiya, fiziologiya, psixologiya, sotsiologiya"
        ],
        correctAnswer: "Pedagogika, ijtimoiy pedagogika, pedagogika tarxi, qiyosiy pedagogika, anatomiya, fiziologiya, psixologiya, sotsiologiya"
    },
    {
        question: "“Konflikt” so'ziga sinonim sifatida ishlatiladigan javob variantini tanlang.",
        options: [
            "Zulm, keskinlik",
            "Qarama-qarshilik, yon bosish",
            "Harakter va temperament qonuniyatlari",
            "Tortishuv, raqobat;"
        ],
        correctAnswer: "Tortishuv, raqobat;"
    },
    {
        question: "O'quvchi shaxsining ruhiy holatlarini yaxshi tushuna olish- o'qituvchi qobiliyatlarining qaysi turi hisoblanadi?",
        options: [
            "Turli yoshdagi bolalarning psixik taraqqiyotiga xos bo'lgan xususiyatlarni va rivojlanish qonuniyatlarini o'rganadi.",
            "Kuzatuvehanlik qobiliyati;",
            "Atrof-muhitdagi moddiy narsalar va ularning paydo bo'lish yo'llarini o'rganadi.",
            "Yengish va yengilish usuli"
        ],
        correctAnswer: "Kuzatuvehanlik qobiliyati;"
    },
    {
        question: "Konfliktlarning to'g'ri yYechimini toppish uchun nima qilish kerak?",
        options: [
            "Uni bartaraf qilish yo'llarini bilish lozim;",
            "Konflikt sababini aniqlash lozim",
            "Ularni oldini olish lozim;",
            "K.D.Ushinskiyning«Tajriba va fikr” asari"
        ],
        correctAnswer: "Konflikt sababini aniqlash lozim"
    },
    {
        question: "“Ziddiyat chiqarmaslik uchun yon bosish” fanda qunday nomlanadi?",
        options: [
            "Konflikt",
            "Konfliktogen;",
            "Ya.A. Komenskiy",
            "Kompromis"
        ],
        correctAnswer: "Kompromis"
    },
    {
        question: "Qaysi fikr to'g'ri?",
        options: [
            "Nazariyada konflikt va qarama-qarshilik sinonim bo'lmaydi;",
            "Har qonday qarama-qarshilik muayyan sharoïda kofliktga aylanishi mumkin;",
            "Tarbiyani",
            "Har qonday qarama-qarshilik konfliktning boshlang'ich nuqtasi bo'lishi mumkin;"
        ],
        correctAnswer: "Har qonday qarama-qarshilik konfliktning boshlang'ich nuqtasi bo'lishi mumkin;"
    },
    {
        question: "Pedagogik konfliktologiya fan sífatida kiritilishining sababi nima?",
        options: [
            "Yoshlarni mehr-shavqat, sadoqat, vatanga muhabbat ruhida tarbiyalash;",
            "O'quvchilarga to'g'ri ta'lim berish;",
            "Pedagogic madaniyatni rivojlantirish",
            "Kelajakka tavsiyalarning ishlatilishi"
        ],
        correctAnswer: "Kelajakka tavsiyalarning ishlatilishi"
    },
    {
        question: "“Adolatparvarlik mezonlar!”ni qo'llash- …",
        options: [
            "Zo'ravonlik bilan hal qilish",
            "Qonunga zid holda hal etish",
            "Konfliktni zo'ravonliksiz, kuch ishlatmasdan hal qilish",
            "Xozircha tuplangan amaliy tajribalarning sistemalashtirish va kelajakka tavsiyalarning ishlatilishi."
        ],
        correctAnswer: "Konfliktni zo'ravonliksiz, kuch ishlatmasdan hal qilish"
    },
    {
        question: "Konfliktlarni boshqarish usullari qaysilar?",
        options: [
            "“Ko'nikish”usuli, “agressiv” usuli, “qonuniy” usul",
            "”Moslashish va ko'nikish”, “bu mening ishim emas”, “agressiv” usul, “kompromiss”, “hamkorlik” usuli",
            "“Kompromiss”usuli, “qonuniy” usul, “ko'nikish” usuli",
            "“Agressiv” usuli, “qonuniy” usul"
        ],
        correctAnswer: "”Moslashish va ko'nikish”, “bu mening ishim emas”, “agressiv” usul, “kompromiss”, “hamkorlik” usuli"
    },
    {
        question: "Konfliktologiyada konfliktlarni boshqarish usullari nimalarga asoslanib ishlab chiqilgan?",
        options: [
            "Odamlar harakteri, o'zini tutishi, psixologiyasiga",
            "Temperamentiga, yashash sharoïtiga",
            "Madaniyatiga, psixologiyasiga, harakteriga",
            "Temperamentiga, harakteriga, o'zini tutishiga"
        ],
        correctAnswer: "Madaniyatiga, psixologiyasiga, harakteriga"
    },
    {
        question: "Muomala madaniyati bu-…",
        options: [
            "Hayvonlarga bo'lgan munosabat",
            "O'zga insonga bo'lgan munosabat madaniyati",
            "O'simliklarga bo'lgan munosabat",
            "Yangiliklarga bo'lgan munosabat"
        ],
        correctAnswer: "O'zga insonga bo'lgan munosabat madaniyati"
    },
    {
        question: "Konflikt yechimidagi asosiy qonuniyatlarni ko'rsating.",
        options: [
            "Hal etish va yechim topish qonuniyatlari",
            "Munosabat va yechim qonuniyatlari",
            "Birovni eshtfish va o'zini anglatish qonuniyatlari",
            "Harakter va temperament qonuniyatlari"
        ],
        correctAnswer: "Birovni eshtfish va o'zini anglatish qonuniyatlari"
    },
    {
        question: "Konfliktning yechimida agressiya va zo'ravonlikni qo'llash- …",
        options: [
            "Taqlid qilish",
            "Zo'ravonlikka qarshi kurash",
            "Agressivlik",
            "Tahdid qilish va shontaj"
        ],
        correctAnswer: "Agressivlik"
    },
    {
        question: "Agressiyani yengishning usullari qaysi qatorda to'g'ri ko'rsatilgan?",
        options: [
            "Taqlid usuli, hal etish usuli, tahdid usuli",
            "Kurashish usuli, qonuniylik usuli",
            "Yengish va yengilish usuli",
            "Passiv usul, faol usul, mantiqiy usul"
        ],
        correctAnswer: "Passiv usul, faol usul, mantiqiy usul"
    },
    {
        question: "Yoshlardagi agressiv xulq-atvor normalarining namoyon bo'lishiga sabab-…",
        options: [
            "Ommaviy madaniyatning kirib kelishi, noto'g'ri tarbiya ogibatida",
            "Noto'liq oilalar soning ortayotganligi,",
            "Oilaning iqtisodiy ahvoli",
            "Oiladagi nosog'lom psixologik muhit,ota-onaning farzand tarbiyasini “ikkinchi o'rin”ga qo'yishi, noto'liq oilalar soning ortayotganligi"
        ],
        correctAnswer: "Oiladagi nosog'lom psixologik muhit,ota-onaning farzand tarbiyasini “ikkinchi o'rin”ga qo'yishi, noto'liq oilalar soning ortayotganligi"
    },
    {
        question: "Nazariy pedagogika bo'yicha ilk asarlardan biri...",
        options: [
            "“Pedagogika” asari",
            "A.Distervergning«Tajriba va fıkr” asari",
            "Ya.A. Komenskiyning «Buyuk didaktika» asari",
            "K.D.Ushinskiyning«Tajriba va fıkr” asari"
        ],
        correctAnswer: "Ya.A. Komenskiyning «Buyuk didaktika» asari"
    },
    {
        question: "O'quvchilarda ijodkorlikni rivojlantirish uchun qaysi usul muhim?",
        options: [
            "Faqat yodlash mashqlari",
            "Tartibli material berish",
            "Loyiha ishlari va ijodiy topshiriqlar",
            "Test natijalarini baholash"
        ],
        correctAnswer: "Loyiha ishlari va ijodiy topshiriqlar"
    },
    {
        question: "Qaysi tamoyil ta'lim va tarbiya jarayonining asosi hisoblanadi?",
        options: [
            "Faqat nazorat va baholash",
            "Tartibli dars o'tkazish",
            "Shaxsga yo'naltirilgan yondashuv",
            "Ko'p mashq qilish"
        ],
        correctAnswer: "Shaxsga yo'naltirilgan yondashuv"
    },
    {
        question: "Qaysi holat ta'limming samaradorligini oshiradi?",
        options: [
            "Tartib va nazoratni kuchaytirish",
            "O'quvchilarning faol ishtiroki va qizigishi",
            "Faqat ko'p yodlatish",
            "Mashg'ulotlar sonini ko'paytirish"
        ],
        correctAnswer: "O'quvchilarning faol ishtiroki va qizigishi"
    },
    {
        question: "O'quv jarayonida \"mustaqil ish\" nima uchun muhim?",
        options: [
            "Tez yodlash gobiliyatini oshirish uchun",
            "O'quvchilarning shaxsiy maə'uliyatini shakllantirish uchun",
            "Nazorat ishlariga tayyorgarlik uchun",
            "Faqat baholash uchun"
        ],
        correctAnswer: "O'quvchilarning shaxsiy maə'uliyatini shakllantirish uchun"
    },
    {
        question: "Pedagogikada \"tejamkorlik tamoyili\" nima?",
        options: [
            "Ko'p sinov ishlarini o'tkazish",
            "Materiallarni qisqartirish",
            "Test natijalarini yaxshilash",
            "Vaqt va resurslarni oqilona tashkil etish"
        ],
        correctAnswer: "Vaqt va resurslarni oqilona tashkil etish"
    },
    {
        question: "Shaxsning ijtimoiylashuvi jarayonida qaysi omil asosiy ahamiyatga ega?",
        options: [
            "Muhit va o'rganish sharotilari",
            "Faqat o'qituvchi faoliyati",
            "Sinov natijalari",
            "Darsning davomiyligi"
        ],
        correctAnswer: "Muhit va o'rganish sharotilari"
    },
    {
        question: "Pedagogik tadqiqotning yakuniy maqsadi nima?",
        options: [
            "Ta'lim jarayonini yaxshilash uchun takliflar ishlab chiqish",
            "Faqat o'quvchilarni baholash",
            "Yodlash usullarini rivojlantirish",
            "Darslarni qisqartirish"
        ],
        correctAnswer: "Ta'lim jarayonini yaxshilash uchun takliflar ishlab chiqish"
    },
    {
        question: "Qaysi holat o'quvchilarning ijodiy faoliyatini rivojlantiradi?",
        options: [
            "Faqat yodlash mashqlari",
            "Nazorat ishlarini ko'paytirish",
            "Muammoli savol va topshiridjar berish",
            "Slaydlar orqali tushuntirish"
        ],
        correctAnswer: "Muammoli savol va topshiridjar berish"
    },
    {
        question: "O'quv jarayonida \"refleksiv yondashuv\"ning asosiy vazifasi nima?",
        options: [
            "O'z faoliyatini tahlii qilish va yaxshilash",
            "Faqat natijalarni baholash",
            "Dars rejasini ishlab chiqish",
            "Materiallarni qisqartirish"
        ],
        correctAnswer: "O'z faoliyatini tahlii qilish va yaxshilash"
    },
    {
        question: "2020 yil 23 sentabrda qabul qilingan “Ta'lim to'g'risida” dagi qonun nechta bob va moddan iborat?",
        options: [
            "11 bob 75 modda",
            "5 bob 34 modda",
            "11 bob 34 modda",
            "7 bob 44 modda"
        ],
        correctAnswer: "11 bob 75 modda"
    },
    {
        question: "Nuqtalar o'rniga kerakli jumlah qo'ying? ...... - malakali, raqobatbardosh kadrlar tayyorlashning asosi bo'lib, ta'limning barcha turlarini, davlat ta'lim standartlarini, kadrlar tayyorlash tizimining tuzilmasi va uning faoliyat ko'rsatish muhitini o'z ichiga oladi?",
        options: [
            "davlat va jamiyat",
            "ishlab chiqarish",
            "uzluksiz ta'lim,",
            "shaxs va jamiyat"
        ],
        correctAnswer: "uzluksiz ta'lim,"
    },
    {
        question: "Pedagogik konfliktlarni yechimini topishdagi muhim masala bu-?",
        options: [
            "Ota-onaning o'rni",
            "Rahbarning o'rni",
            "Mahalla jamoasi",
            "O'qituvchi va o'quvchi o'rtasidagi munosabatning ijobiyligi"
        ],
        correctAnswer: "O'qituvchi va o'quvchi o'rtasidagi munosabatning ijobiyligi"
    },
        {
        question: "Pedagogik konfliktologiyaning o'rganish ob'ektini toping?",
        options: [
            "O'qituvchi va o'quvchi munosabatlari",
            "Ta'lim tarbiya jarayonidagi nizolar",
            "Dars jarayonidagi nizolar",
            "O'qituvchi va o'quvchi munosabatlari, Ta'lim tarbiya jarayonidagi nizolar"
        ],
        correctAnswer: "O'qituvchi va o'quvchi munosabatlari, Ta'lim tarbiya jarayonidagi nizolar"
    },
    {
        question: "Ta'lim jarayonidagi konfliktlarning kelib chiqish sabablari?",
        options: [
            "O'qituvchi va o'quvchi munosabatlari",
            "O'qituvchining ma'sulyatsizligi",
            "O'quvchining bilimsizligi",
            "O'qituvchi va o'quvchi munosabatlari, O'qituvchining ma'sulyatsizligi, O'quvchining bilimsizligi"
        ],
        correctAnswer: "O'qituvchi va o'quvchi munosabatlari, O'qituvchining ma'sulyatsizligi, O'quvchining bilimsizligi"
    },
    {
        question: "Ta'lim jarayonidagi konfliktlarni echishda kimning roli muxim?",
        options: [
            "O'qituvchining",
            "Rahbarlarning",
            "O'quvchining",
            "Guruxning"
        ],
        correctAnswer: "O'qituvchining"
    },
    {
        question: "Bola ta'lim olish jarayonidagi nizolarni oldini olishda kimdan ko'proq ko'mak oladi?",
        options: [
            "Oiladan",
            "Mahalladan",
            "Oiladan, Mahalladan, guruxdan",
            "Guruxdan"
        ],
        correctAnswer: "Oiladan, Mahalladan, guruxdan"
    },
    {
        question: "Yechimini topish qiyin bo'lgan nizolar bu-?",
        options: [
            "Ichki nizo",
            "Tashqi nizo",
            "Aralash nizo",
            "Konflikt"
        ],
        correctAnswer: "Ichki nizo"
    },
    {
        question: "Norasmiy gurux a'zosi Rahbardan ham gurux a'zolaridan ham bir xil xatti xarakatni kutsa nima kelib chiqmaydi?",
        options: [
            "Kelishuv",
            "Munozara",
            "Konfliktlar",
            "Subbat"
        ],
        correctAnswer: "Konfliktlar"
    },
    {
        question: "Muloqot samadorligi nimaga bog'liq?",
        options: [
            "Suxbadoshlarning yoshini mosligiga",
            "Suxbadoshlarning xarakteriga",
            "So'zlarning tasirchanligiga",
            "Suxbatlashayotgan kishilarning bir-biriga qanchalik mos ekanligi"
        ],
        correctAnswer: "Suxbatlashayotgan kishilarning bir-biriga qanchalik mos ekanligi"
    },
    {
        question: "Insonlar eng avvalo konfliktni yuzaga keltirmaslik uchun qanday bo'lishi kerak?",
        options: [
            "Kamtar",
            "Buni oldini olish",
            "Tarbiyalangan",
            "Nizoni sabablari"
        ],
        correctAnswer: "Tarbiyalangan"
    },
    {
        question: "Pedagogik konfliktlarni oldini olishda nima asosiy o'rinni egallaydi?",
        options: [
            "Ota-ona",
            "O'quvchi",
            "O'qituvchi",
            "Rahbar"
        ],
        correctAnswer: "O'qituvchi"
    },
    {
        question: "Konfliktning tarkibly kismlari",
        options: [
            "Nizoning tomonlari",
            "Nioning shart-sharoitlari",
            "Nizo qatnashchilari xatti xarakatlari",
            "Nizoning tomonlari, Nioning shart-sharoitlari"
        ],
        correctAnswer: "Nizoning tomonlari, Nioning shart-sharoitlari"
    },
    {
        question: "Talaba dars vaqtida telefon o'ynashi yoki o'zining shaxsiy ishlari bilan shug'ullanishi mumkunmi?",
        options: [
            "Yo'q u boshqa talabalarga va fanning o'qitilishida xalaqit beradi",
            "Xa bu paytda u xech kimga xalakit bermaydi",
            "Bunday talabalarni o'z xoliga tashlab qo'yish zarur.",
            "Nioning shart-sharoitlari"
        ],
        correctAnswer: "Yo'q u boshqa talabalarga va fanning o'qitilishida xalaqit beradi"
    },
    {
        question: "Pedagogik konfliktalogiyaning asosiy vazifasi?",
        options: [
            "Komil inson tarbiyalash",
            "Konfliktni bartaraf etish",
            "Shaxslar o'trasidagi ziddiyat",
            "Shaxsni tarbiyalash"
        ],
        correctAnswer: "Konfliktni bartaraf etish"
    },
    {
        question: "Ichki nozisiya nima?",
        options: [
            "Kishining maqsadi va motivlari",
            "Kishining xulq atvori",
            "Kishining idiali",
            "Kishining xarakteri"
        ],
        correctAnswer: "Kishining maqsadi va motivlari"
    },
    {
        question: "Ish o'rinlari o'trasidagi bog’liqlik alogalarini sanab bering.",
        options: [
            "Tashkiliy, amaliy",
            "Tashkiliy, texnologik",
            "Texnika",
            "Texnologik, axborot"
        ],
        correctAnswer: "Texnologik, axborot"
    },
    {
        question: "Talaba dars vaqtida telefon o'ynashi yoki o'zining shaxsiy ishlari bilan shug'ullanishi munkinmi?",
        options: [
            "Ha.Bu paytda u hech kimga halaqit bermaydi.",
            "Bunday talabalarni o'z xoliga qo'yish zarur",
            "Tarbiyalash kerak",
            "Yo'q bu boshqa talabalarga va fanning o'qitilishida xalaqit beradi"
        ],
        correctAnswer: "Yo'q bu boshqa talabalarga va fanning o'qitilishida xalaqit beradi"
    },
    {
        question: "Pedagogik konflentlarda o'quvchilarga asosiy ko'mak beruvchi maskan",
        options: [
            "Oila",
            "Maxallada",
            "Ha,bunda hech qonday ziddiyat yuzaga kelad",
            "Sinf jamoasi"
        ],
        correctAnswer: "Sinf jamoasi"
    },
    {
        question: "Konfeltlarda o'quvchi kimdan ko'mak oladi?",
        options: [
            "O'quvchilardan oilasidan",
            "O'quvchilardan",
            "Oilasidan",
            "O'qituvchi va oilasidan"
        ],
        correctAnswer: "O'qituvchi va oilasidan"
    },
    {
        question: "Ziddiyatni qonday tomonlari bor?",
        options: [
            "Verbal",
            "Vebral noveloral",
            "Novebral",
            "o'quvchilardan"
        ],
        correctAnswer: "Verbal"
    },
    {
        question: "Konflikt sshzining ma'nosini belgilang?",
        options: [
            "Ozaro hurmat",
            "Do'stlik",
            "Nizo, kelishmovchilik",
            "Kelishuv"
        ],
        correctAnswer: "Nizo, kelishmovchilik"
    },
    {
        question: "Tashqi nizolar nima?",
        options: [
            "Kishining maqsadi va motivlari",
            "Nizoni sabablari",
            "Kishining xulq atvori",
            "Mexnat asosida"
        ],
        correctAnswer: "Kishining xulq atvori"
    },
    {
        question: "……. - pedagogik ijodkortikning asosiy maydoni.",
        options: [
            "Dars",
            "O`qituvchi",
            "Sinf",
            "O`quvchi"
        ],
        correctAnswer: "Sinf"
    },
    {
        question: "O`spirinlik yoshini aniqlang.",
        options: [
            "15 -18 yosh",
            "14 – 17 yosh",
            "14 – 19 yosh",
            "16 – 19 yosh"
        ],
        correctAnswer: "14 – 17 yosh"
    },
    {
        question: "Pedagogik konfliktologiya fani quyida berilgan fanlardan qaysi biri bilan bog'liq?",
        options: [
            "Psixologiya, pedagogika",
            "Barcha fanlar bilan",
            "Iqtisod, falsafa",
            "Adabiyot, biologiya"
        ],
        correctAnswer: "Psixologiya, pedagogika"
    },
    {
        question: "Shaxslar aro konfliktlarning yuzaga kelishi omillari.",
        options: [
            "Oila muxiti",
            "Maktab jamoasi",
            "Oila muxiti Maktab jamoasi Maxalla jamoasi",
            "Maxalla jamoasi"
        ],
        correctAnswer: "Oila muxiti Maktab jamoasi Maxalla jamoasi"
    },
    {
        question: "og'zaki (dahanaki) qarshilik natijasi bu ..",
        options: [
            "guruhli konflikt",
            "motivatsion konflikt",
            "kommunikativ konflikt",
            "ochiq konflikt"
        ],
        correctAnswer: "kommunikativ konflikt"
    },
    {
        question: "ehtiyojlar va istaklar o’rtasidagi  bu .",
        options: [
            "kommunikativ konflikt",
            "guruhli konflikt",
            "ochiq konflikt",
            "motivatsion konflikt"
        ],
        correctAnswer: "motivatsion konflikt"
    },
    {
        question: "raqibga zarar yetkazish maqsadidagi kurash ehtiyojlar va istaklar o’rtasidagi  bu .",
        options: [
            "motivatsion konflikt",
            "kommunikativ konflikt",
            "ochiq konflikt",
            "guruhli konflikt"
        ],
        correctAnswer: "ochiq konflikt"
    },
    {
        question: "agressiya ma’nosi nima?",
        options: [
            "To’qnashuv",
            "“hujum qilish”",
            "Konflikt",
            "Janjal"
        ],
        correctAnswer: "“hujum qilish”"
    },
    {
        question: "Latent so’zining lug’aviy ma’nosi qaysi javobda to’g’ri ko’rsatilgan?",
        options: [
            "Yashirin",
            "Tanglik",
            "Zo’rlik ishlatish",
            "Tashqi namoyon bo’lish"
        ],
        correctAnswer: "Yashirin"
    },
    {
        question: "Konflikt qanday belgilari bilan boshlanishi mumkin?",
        options: [
            "To’liq mulogotning o’rtacha darajada pasayishi",
            "Tomonlar o’rtasida ochiq va tinch mulogotning ko'payishi",
            "Noaniq xatti-harakatlar va noto'g’ri tushunishlar",
            "Tomonlarning o'zaro hurmatini kuchaytirishi"
        ],
        correctAnswer: "Noaniq xatti-harakatlar va noto'g’ri tushunishlar"
    },
    {
        question: "Konfliktning birinchi signali qonday ko'tinadi?",
        options: [
            "O'quvehilar o'tasida hurmat va tushunishning oshishi",
            "O'quvehilarning bir-biriga tajovuzkor munosabati",
            "O'qituvchining qat'iy qarori",
            "O'quvehilar o'tasidagi yaqin do'stilk"
        ],
        correctAnswer: "O'quvehilarning bir-biriga tajovuzkor munosabati"
    },
    {
        question: "Konfliktning belgilari bo'lishi mumkin bo'lgan qonday hissiyotlar mayjud?",
        options: [
            "Hayajon, g'azab, o'tadagi sukunat",
            "Xavotir, go'rquv, qarama-qarshilik",
            "Xushnudlik, quvoneh, umid",
            "Yengillik, ishoneh, his-tuyg'ularni inkor etish"
        ],
        correctAnswer: "Hayajon, g'azab, o'tadagi sukunat"
    },
    {
        question: "Konfliktning belgilari sifatida qaysi hatti-harakatlar ko'tinishi mumkin?",
        options: [
            "O'quvehilarning o'zaro yordan berishi",
            "O'quvehilarning o'z fikrlarini ochiq bayon qilishlari",
            "Tomonlarning qarama-qarshi yondashuvi va hissiy ajralishlari",
            "O'quvehilarning faqat o'zaro yordan so'rashlari"
        ],
        correctAnswer: "Tomonlarning qarama-qarshi yondashuvi va hissiy ajralishlari"
    },
    {
        question: "Konfliktni boshlanishidagi birinchi signal sifatida qaysi holatni ko'rish mumkin?",
        options: [
            "O'quvehilar o'tasida kuchli do'stilk",
            "O'quvehilarning hissiy asabiylashuvi yoki to'qnashuvi",
            "O'qituvchining barcha qarorlarini izchil qo'llash",
            "O'quvehilarning faqat yaxshilanishni kutishlari"
        ],
        correctAnswer: "O'quvehilarning hissiy asabiylashuvi yoki to'qnashuvi"
    },
    {
        question: "Konfliktning boshida ko'pincha qonday holatlar yuzaga keladi?",
        options: [
            "Tomonlarning kelishuvga erishishi",
            "O'quvehilarning o'zaro hurmat va tushunishi oshishi",
            "Aks ettirilgan va noaniq fikrlar, qarama-qarshi hissiyotlar",
            "Faqat o'qituvchining qarorlari asosida qarorlar qabul qilish"
        ],
        correctAnswer: "Aks ettirilgan va noaniq fikrlar, qarama-qarshi hissiyotlar"
    },
    {
        question: "Konfliktning belgilari sifatida qonday noaniqliklar bo'lishi mumkin?",
        options: [
            "Noaniq, tushunarsiz yoki ikki ma'noli gaplar",
            "O'quvehilarning ochiq va to'g'ri mulogotlari",
            "O'quvehilarning fikrlarini to'liq tushunish",
            "O'quvehilarning o'zaro hamkorligi va kelishuvlari"
        ],
        correctAnswer: "Noaniq, tushunarsiz yoki ikki ma'noli gaplar"
    },
    {
        question: "Konfliktning boshlanishidagi birinchi signaldan keyin qonday belgilar kuzatilishi mumkin?",
        options: [
            "Tomonlarning to'liq kelishuvga erishishi",
            "Oquvchilarning o'zaro murojaatlari ko'payishi",
            "Hissiy asabiylashuv, g'azab yoki to'gnashuvar",
            "Oqituvchining barcha garorlarini tan olish"
        ],
        correctAnswer: "Hissiy asabiylashuv, g'azab yoki to'gnashuvar"
    },
    {
        question: "Konfliktning belgilari o'quvchilarda qonday hissiy holatni keltirib chigarishi munkin?",
        options: [
            "Xavotir, g'azab, tushunmovchilik",
            "Oquvchilarning yaxshi kayfiyatlari",
            "Faqat bir tomonning qoniqishi",
            "Oquvchilarning to'liq ishontirilishi"
        ],
        correctAnswer: "Xavotir, g'azab, tushunmovchilik"
    },
    {
        question: "Konfliktning boshlanishi o'quvchilarda qonday ijtimoiy alogalarga olib kelishi munkin?",
        options: [
            "Oquvchilarning o'zaro hamkorlik va tushunishi",
            "Oquvchilar orasida qarama-qarshilklar va g'azabning kuchayishi",
            "Oquvchilarning o'zaro yordam berishi",
            "Oquvchilarning to'liq tinchlanishi"
        ],
        correctAnswer: "Oquvchilar orasida qarama-qarshilklar va g'azabning kuchayishi"
    },
    {
        question: "Tana zaboning necha tarkibiy qismi mayjud?",
        options: [
            "3",
            "5",
            "4",
            "7"
        ],
        correctAnswer: "4"
    },
    {
        question: "O’zaro kelishuvga asoslangan birgalikdagj hamkorlik, hanjjhatlik, o’zaro do’stlik ma’nolarini anglatatuvchi so’zni belgilang.",
        options: [
            "energetika",
            "sinergetika",
            "kibernitetika",
            "fonetika"
        ],
        correctAnswer: "sinergetika"
    },
        {
        question: "............ hayotda uehrab turadigan turli nizo va ziddiyatga bog’liq bo’lgan vogealar bo’lib, osuda va tinchlik vaqtida siz ularga e’tiborsiz bo’lasiz.",
        options: [
            "Insidentlar",
            "Diskomfortlar",
            "Hasadgo’ylar",
            "Melanxoliklar"
        ],
        correctAnswer: "Insidentlar"
    },
    {
        question: "Donishmandlarning fikricha “Janjal bo’lgan yerda...........” ushbu fikirlarni davom ettiring.",
        options: [
            "Omad ketadi",
            "Baraka qochadi",
            "Janjal chigadi",
            "–hech narsa bo’lmaydi"
        ],
        correctAnswer: "Baraka qochadi"
    },
    {
        question: "Muloqat jarayonidagisuhbadoshning pozitsiyasida turib,o’zini tassavur qilishi,o’ziga birovningko’zi bilan qarashga intilishi nima deb ataladi?",
        options: [
            "O’xshatish",
            "Faoliyat",
            "Refleksiya",
            "Bilish"
        ],
        correctAnswer: "Refleksiya"
    },
    {
        question: "Ta'sirli nutq bu",
        options: [
            "andozali nutq",
            "tasvirli nutq",
            "foydali nutq",
            "chiroyli nutq"
        ],
        correctAnswer: "tasvirli nutq"
    },
    {
        question: "Pedagogik hamkorlikning dastlabki tamoyili",
        options: [
            "shaxsiy bilishga asoslangan ongiliikdir",
            "to’ldiruvchilik tamoyili",
            "ta’lim-tarbiyaviy axborotlarning ochiqligi tamoyili",
            "Ongililk tamoyili"
        ],
        correctAnswer: "ta’lim-tarbiyaviy axborotlarning ochiqligi tamoyili"
    },
    {
        question: "Nizoli vaziyatlarni boshqarishning Strategik usullar nechta",
        options: [
            "3 ta",
            "4 ta",
            "5 ta",
            "6 ta"
        ],
        correctAnswer: "4 ta"
    },
    {
        question: "U kishga bulgan talabni tushuntirish; Muvofiqdashtirish va integratsiyalash qanday usullarga kiradi",
        options: [
            "Strategik",
            "Tarkibly - tashkiliy",
            "Kompleks",
            "Interfaol"
        ],
        correctAnswer: "Tarkibly - tashkiliy"
    },
    {
        question: "Maqsadli ziddiyat qanday kelib chigadi?",
        options: [
            "Sabablarga ko'ra",
            "Nizo kelib chiqqanligi",
            "Shaxsiy maqsad asosida,xatti xarakatlar natijasida",
            "Motivlar asosida"
        ],
        correctAnswer: "Shaxsiy maqsad asosida,xatti xarakatlar natijasida"
    },
    {
        question: "Shaxs va jamoa jaomadagi shaxslar aro nizolarni bartaraf etish to'g'risidagi tadqiqotni kim olib borgan?",
        options: [
            "L.G.Somalin",
            "Maxmudov V",
            "Aliboev Sh",
            "A.A.Ershanov"
        ],
        correctAnswer: "L.G.Somalin"
    },
    {
        question: "Konfliktlarning Yechimini topishda muxim omil bu…",
        options: [
            "Shaxsning ma'naviy etuklik",
            "Nizolarda o'zini tuta olish",
            "Ortoglarni xurmat qilish",
            "Shaxsning ma'naviy etuklik Nizolarda o'zini tuta olish. Ortoglarni xurmat qilish"
        ],
        correctAnswer: "Shaxsning ma'naviy etuklik Nizolarda o'zini tuta olish. Ortoglarni xurmat qilish"
    },
    {
        question: "Qaynona bilan kelin o'tasida kelib chikuvchi nizoning birinchi sababi nima?",
        options: [
            "Murosaning yo'qligi",
            "Murosaning yo'qligi. Bir- birini tushunmasligi. Oila muxitining yomonligi.",
            "Bir- birini tushunmasligi",
            "Oila muxitining yomonligi"
        ],
        correctAnswer: "Murosaning yo'qligi. Bir- birini tushunmasligi. Oila muxitining yomonligi."
    },
    {
        question: "Kelin bilan kiyov arazlashib qoldi, bunday xolatda kelin bu xolatni qaynonalarga bildirishi kerakmi?",
        options: [
            "Xa,chunki o'gil ularning farzandi",
            "Jiddiy xolatda aytishi lozim",
            "Yo'q,chunki er xotin bir kun yarashib ketadi",
            "Shaxsning ma'naviy yetuklik"
        ],
        correctAnswer: "Jiddiy xolatda aytishi lozim"
    },
    {
        question: "Oila muxitida bolalar bilan ota-onaning o'tasidagi konfliktlar asosan nimaga bogliq?",
        options: [
            "Ularning tarbiyalanganlik darajasiga bogliq",
            "Ularning tarbiyalanganlik darajasiga bogliq. Ularning bir-birini Muxitning nosog'lomligi. tushunishiga",
            "Ularning bir-birini tushunishiga",
            "Muxitning nosoglomligi"
        ],
        correctAnswer: "Ularning tarbiyalanganlik darajasiga bogliq. Ularning bir-birini Muxitning nosog'lomligi. tushunishiga"
    },
    {
        question: "“Konflikt” so’ziga sinonim sifatida ishlatiladigan javob variantini tanlang.",
        options: [
            "Zulm, keskinlik",
            "Qarama-qarshilik, yon bosish",
            "Harakter va temperament qonuniyatlari",
            "Tortishuv, raqobat;"
        ],
        correctAnswer: "Tortishuv, raqobat;"
    },
    {
        question: "O’quvchi shaxsining ruhiy holatlarini yaxshi tushuna olish- o’qituvchi qobiliyatlarining qaysi turi hisoblanadi?",
        options: [
            "Turli yoshdagi bolalarning psixik taraqqiyotiga xos bo’lgan xususiyatlarni va rivojlanish qonuniyatlarini o’rganadi.",
            "Kuzatuvehanlik qobiliyati;",
            "Atrof-muhitdagi moddiy narsalar va ularning paydo bo’lish yo’llarini o’rganadi.",
            "Yengish va yengilish usuli"
        ],
        correctAnswer: "Kuzatuvehanlik qobiliyati;"
    },
    {
        question: "Konfliktlarning to’g’ri yYechimini toppish uchun nima qilish kerak?",
        options: [
            "Uni bartaraf qilish yo’llarini bilish lozim;",
            "Konflikt sababini aniqlash lozim",
            "Ularni oldini olish lozim;",
            "K.D.Ushinskiyning«Tajriba va fikr” asari"
        ],
        correctAnswer: "Konflikt sababini aniqlash lozim"
    },
    {
        question: "“Ziddiyat chiqarmaslik uchun yon bosish” fanda qonday nomlanadi?",
        options: [
            "Konflikt",
            "Konfliktogen;",
            "Ya.A. Komenskiy",
            "Kompromis"
        ],
        correctAnswer: "Kompromis"
    },
    {
        question: "Qaysi fikr to’g’ri?",
        options: [
            "Nazariyada konflikt va qarama-qarshilik sinonim bo’lmaydi;",
            "Har qonday qarama-qarshilik muayyan sharoïda kofliktga aylanishi mumkin;",
            "Tarbiyani",
            "Har qonday qarama-qarshilik konfliktning boshlang’ich nuqtasi bo’lishi mumkin;"
        ],
        correctAnswer: "Har qonday qarama-qarshilik muayyan sharoïda kofliktga aylanishi mumkin;"
    },
    {
        question: "Pedagogik konfliktologiya fan sífatida kiritilishining sababi nima?",
        options: [
            "Yoshlarni mehr-shavqat, sadoqat, vatanga muhabbat ruhida tarbiyalash;",
            "O’quvchilarga to’g’ri ta’lim berish;",
            "Pedagogic madaniyatni rivojlantirish",
            "Kelajakka tavsiyalarning ishlatilishi"
        ],
        correctAnswer: "Kelajakka tavsiyalarning ishlatilishi"
    },
    {
        question: "“Adolatparvarlik mezonlar!”ni qo’llash- …",
        options: [
            "Zo’ravonlik bilan hal qilish",
            "Qonunga zid holda hal etish",
            "Konfliktni zo’ravonliksiz, kuch ishlatmasdan hal qilish",
            "Xozircha tuplangan amaliy tajribalarning sistemalashtirish va kelajakka tavsiyalarning ishlatilishi."
        ],
        correctAnswer: "Konfliktni zo’ravonliksiz, kuch ishlatmasdan hal qilish"
    },
    {
        question: "Konfliktlarni boshqarish usullari qaysilar?",
        options: [
            "“Ko’nikish”usuli, “agressiv” usuli, “qonuniy” usul",
            "”Moslashish va ko’nikish”, “bu mening ishim emas”, “agressiv” usul, “kompromiss”, “hamkorlik” usuli",
            "“Kompromiss”usuli, “qonuniy” usul, “ko’nikish” usuli",
            "“Agressiv” usuli, “qonuniy” usul"
        ],
        correctAnswer: "”Moslashish va ko’nikish”, “bu mening ishim emas”, “agressiv” usul, “kompromiss”, “hamkorlik” usuli"
    },
    {
        question: "Konfliktologiyada konfliktlarni boshqarish usullari nimalarga asoslanib ishlab chiqilgan?",
        options: [
            "Odamlar harakteri, o’zini tutishi, psixologiyasiga",
            "Temperamentiga, yashash sharoïtiga",
            "Madaniyatiga, psixologiyasiga, harakteriga",
            "Temperamentiga, harakteriga, o’zini tutishiga"
        ],
        correctAnswer: "Madaniyatiga, psixologiyasiga, harakteriga"
    },
    {
        question: "Muomala madaniyati bu-…",
        options: [
            "Hayvonlarga bo’lgan munosabat",
            "O’zga insonga bo’lgan munosabat madaniyati",
            "O’simliklarga bo’lgan munosabat",
            "Yangiliklarga bo’lgan munosabat"
        ],
        correctAnswer: "O’zga insonga bo’lgan munosabat madaniyati"
    },
    {
        question: "Konflikt yechimidagi asosiy qonuniyatlarni ko’rsating.",
        options: [
            "Hal etish va yechim topish qonuniyatlari",
            "Munosabat va yechim qonuniyatlari",
            "Birovni eshtfish va o’zini anglatish qonuniyatlari",
            "Harakter va temperament qonuniyatlari"
        ],
        correctAnswer: "Birovni eshtfish va o’zini anglatish qonuniyatlari"
    },
    {
        question: "Konfliktning yechimida agressiya va zo’ravonlikni qo’llash- …",
        options: [
            "Taqlid qilish",
            "Zo’ravonlikka qarshi kurash",
            "Agressivlik",
            "Tahdid qilish va shontaj"
        ],
        correctAnswer: "Agressivlik"
    },
    {
        question: "Agressiyani yengishning usullari qaysi qatorda to’g’ri ko’rsatilgan?",
        options: [
            "Taqlid usuli, hal etish usuli, tahdid usuli",
            "Kurashish usuli, qonuniylik usuli",
            "Yengish va yengilish usuli",
            "Passiv usul, faol usul, mantiqiy usul"
        ],
        correctAnswer: "Passiv usul, faol usul, mantiqiy usul"
    },
    {
        question: "Yoshlardagi agressiv xulq-atvor normalarining namoyon bo’lishiga sabab-…",
        options: [
            "Ommaviy madaniyatning kirib kelishi, noto’g’ri tarbiya ogibatida",
            "Noto’liq oilalar soning ortayotganligi,",
            "Oilaning iqtisodiy ahvoli",
            "Oiladagi nosog’lom psixologik muhit,ota-onaning farzand tarbiyasini “ikkinchi o’rin”ga qo’yishi, noto’liq oilalar soning ortayotganligi"
        ],
        correctAnswer: "Oiladagi nosog’lom psixologik muhit,ota-onaning farzand tarbiyasini “ikkinchi o’rin”ga qo’yishi, noto’liq oilalar soning ortayotganligi"
    },
    {
        question: "Nazariy pedagogika bo’yicha ilk asarlardan biri...",
        options: [
            "“Pedagogika” asari",
            "A.Distervergning«Tajriba va fıkr” asari",
            "Ya.A. Komenskiyning «Buyuk didaktika» asari",
            "K.D.Ushinskiyning«Tajriba va fıkr” asari"
        ],
        correctAnswer: "Ya.A. Komenskiyning «Buyuk didaktika» asari"
    },
    {
        question: "O'quvchilarda ijodkorlikni rivojlantirish uchun qaysi usul muhim?",
        options: [
            "Faqat yodlash mashqlari",
            "Tartibli material berish",
            "Loyiha ishlari va ijodiy topshiriqlar",
            "Test natijalarini baholash"
        ],
        correctAnswer: "Loyiha ishlari va ijodiy topshiriqlar"
    },
    {
        question: "Qaysi tamoyil ta'lim va tarbiya jarayonining asosi hisoblanadi?",
        options: [
            "Faqat nazorat va baholash",
            "Tartibli dars o'tkazish",
            "Shaxsga yo'naltirilgan yondashuv",
            "Ko'p mashq qilish"
        ],
        correctAnswer: "Shaxsga yo'naltirilgan yondashuv"
    },
    {
        question: "Qaysi holat ta'limming samaradorligini oshiradi?",
        options: [
            "Tartib va nazoratni kuchaytirish",
            "O'quvchilarning faol ishtiroki va qizigishi",
            "Faqat ko'p yodlatish",
            "Mashg'ulotlar sonini ko'paytirish"
        ],
        correctAnswer: "O'quvchilarning faol ishtiroki va qizigishi"
    },
    {
        question: "O'quv jarayonida \"mustaqil ish\" nima uchun muhim?",
        options: [
            "Tez yodlash gobiliyatini oshirish uchun",
            "O'quvchilarning shaxsiy maə'uliyatini shakllantirish uchun",
            "Nazorat ishlariga tayyorgarlik uchun",
            "Faqat baholash uchun"
        ],
        correctAnswer: "O'quvchilarning shaxsiy maə'uliyatini shakllantirish uchun"
    },
    {
        question: "Pedagogikada \"tejamkorlik tamoyili\" nima?",
        options: [
            "Ko'p sinov ishlarini o'tkazish",
            "Materiallarni qisqartirish",
            "Test natijalarini yaxshilash",
            "Vaqt va resurslarni oqilona tashkil etish"
        ],
        correctAnswer: "Vaqt va resurslarni oqilona tashkil etish"
    },
    {
        question: "Shaxsning ijtimoiylashuvi jarayonida qaysi omil asosiy ahamiyatga ega?",
        options: [
            "Muhit va o'rganish sharotilari",
            "Faqat o'qituvchi faoliyati",
            "Sinov natijalari",
            "Darsning davomiyligi"
        ],
        correctAnswer: "Muhit va o'rganish sharotilari"
    },
    {
        question: "Pedagogik tadqiqotning yakuniy maqsadi nima?",
        options: [
            "Ta'lim jarayonini yaxshilash uchun takliflar ishlab chiqish",
            "Faqat o'quvchilarni baholash",
            "Yodlash usullarini rivojlantirish",
            "Darslarni qisqartirish"
        ],
        correctAnswer: "Ta'lim jarayonini yaxshilash uchun takliflar ishlab chiqish"
    },
    {
        question: "Qaysi holat o'quvchilarning ijodiy faoliyatini rivojlantiradi?",
        options: [
            "Faqat yodlash mashqlari",
            "Nazorat ishlarini ko'paytirish",
            "Muammoli savol va topshiridjar berish",
            "Slaydlar orqali tushuntirish"
        ],
        correctAnswer: "Muammoli savol va topshiridjar berish"
    },
    {
        question: "O'quv jarayonida \"refleksiv yondashuv\"ning asosiy vazifasi nima?",
        options: [
            "O'z faoliyatini tahlii qilish va yaxshilash",
            "Faqat natijalarni baholash",
            "Dars rejasini ishlab chiqish",
            "Materiallarni qisqartirish"
        ],
        correctAnswer: "O'z faoliyatini tahlii qilish va yaxshilash"
    },
    {
        question: "2020 yil 23 sentabrda qabul qilingan “Ta’lim to‘g‘risida” dagi qonun nechta bob va moddan iborat?",
        options: [
            "11 bob 75 modda",
            "5 bob 34 modda",
            "11 bob 34 modda",
            "7 bob 44 modda"
        ],
        correctAnswer: "11 bob 75 modda"
    },
    {
        question: "Nuqtalar o‘rniga kerakli jumlah qo‘ying? ...... - malakali, raqobatbardosh kadrlar tayyorlashning asosi bo’lib, ta’limning barcha turlarini, davlat ta’lim standartlarini, kadrlar tayyorlash tizimining tuzilmasi va uning faoliyat ko’rsatish muhitini o’z ichiga oladi?",
        options: [
            "davlat va jamiyat",
            "ishlab chiqarish",
            "uzluksiz ta’lim,",
            "shaxs va jamiyat"
        ],
        correctAnswer: "uzluksiz ta’lim,"
    },
    {
        question: "O’zbekiston Respublikasida ta’lim sohasidagi islohotlarning asosiy maqsadi, bu...?",
        options: [
            "jamiyat madaniy hayotni yaxshilash;",
            "ilm, fan va madaniyatni yanada rivojlantirish;",
            "dunyoviy alogalarni bir-biri bilan bog’lash",
            "shaxsni har tomonlama rivojlantirish va kamol toptirish;"
        ],
        correctAnswer: "shaxsni har tomonlama rivojlantirish va kamol toptirish;"
    },
    {
        question: "Nuqtalar o‘rniga to‘g‘ri jumalani qo‘ying? ...... - ta’lim va kadrlar tayyorlash tizimining faoliyatini tartibga solish va nazorat qilishni amalga oshiruvchi kadrlarni tayyorlash va ularni qabul qilib olishning kafillaridir.",
        options: [
            "davlat va jamiyat",
            "tizimli ta’lim,",
            "ishlab chiqarish",
            "maktab va jamiyat"
        ],
        correctAnswer: "davlat va jamiyat"
    },
    {
        question: "Nuqtalar o‘rniga to‘g‘ri tushunchani qo‘ying? ......– shaxsning ongida tushunchalar, sxemalar, ma’lum obrazlar ko’rinishida aks etuvchi borliq haqidagi tizimlashtirilgan ilmiy ma’lumotlar majmui.",
        options: [
            "Ta’lim",
            "Rivojlanish",
            "Bilim",
            "Dunyoqarash"
        ],
        correctAnswer: "Bilim"
    },
    {
        question: "2020 yıl 23 sentabrda qabul qilingan “Ta’lim to‘g‘risida”dagi qonun beshinchi moddasi qaysi javobda to‘g‘ri ko’rsatilgan?",
        options: [
            "Ta’lim sohasidagi asosiy prinsiplar",
            "Ta’lim tizimi",
            "Ta’lim olish huquqi",
            "Ta’lim turlari"
        ],
        correctAnswer: "Ta’lim sohasidagi asosiy prinsiplar"
    },
    {
        question: "2020 yıl 23 sentabrda qabul qilingan “Ta’lim to‘g‘risida”dagi qonun oltinchi moddasi qaysi javobda to‘g‘ri ko‘rsatilgan?",
        options: [
            "Ta’lim olish huquqi",
            "Ta’lim tizimi",
            "Ta’lim sohasidagi asosiy prinsiplar",
            "Ta’lim turlari"
        ],
        correctAnswer: "Ta’lim tizimi"
    },
    {
        question: "2020 yıl 23 sentabrda qabul qilingan “Ta’lim to‘g‘risida”dagi qonun yetünchi moddasi qaysi javobda to‘g‘ri ko‘rsatilgan?",
        options: [
            "Ta’lim turlari",
            "Ta’lim olish huquqi",
            "Ta’lim sohasidagi asosiy prinsiplar",
            "Ta’lim tizimi"
        ],
        correctAnswer: "Ta’lim turlari"
    },
    {
        question: "2020 yıl 23 sentabrda qabul qilingan “Ta’lim to‘g‘risida” bagi qonun to‘rtinchi moddasi qaysi javobda to‘g‘ri ko‘rsatilgan?",
        options: [
            "Ta’lim olish huquqi",
            "Ta’lim tizimi",
            "Ta’lim sohasidagi asosiy prinsipla",
            "Ta’lim turlari"
        ],
        correctAnswer: "Ta’lim olish huquqi"
    },
    {
        question: "“Pedagog” so‘zi lug‘aviy ma’nosi ?",
        options: [
            "tarbiyachi",
            "yetakchilik qilish",
            "rahbarlik qilish",
            "bola yetaklovchi"
        ],
        correctAnswer: "bola yetaklovchi"
    },
    {
        question: "Dastlabki maktablar qadimgi Sharqda qaysi shahar hududlarida paydo bo‘lgan?",
        options: [
            "Vavilon, Misr, Hindistonda",
            "Sparta, Afina va Rim",
            "Rim Misr, Hindistonda",
            "Sparta, Afina va Vavilon"
        ],
        correctAnswer: "Vavilon, Misr, Hindistonda"
    },
    {
        question: "Dastlabki qadimgi Sharqda maktablarida bolalarga qonday bilimlar o‘rgatilgan?",
        options: [
            "qishloq xo‘jaligi va axloq",
            "jang sa’nati va ov qilish",
            "axloq va diniy bilimlar",
            "ma’muriy-xo‘jalik boshqaruvi asoslari"
        ],
        correctAnswer: "ma’muriy-xo‘jalik boshqaruvi asoslari"
    },
    {
        question: "Sharqda qaysi mutafakkirlar “O‘qituvchining ma’naviy-axloqiy jihatdan yetuk bo‘lishlariga alohida ahamiyat qaratganlar”?",
        options: [
            "Muhammad al-Xorazmiy, Abu Nasr Forobiy, Abu Rayhon Beruniy",
            "Abdulla Avloniy, Abduqodir Shakuriy, Munavvar Qori",
            "Aflotun, Suqrot, Demokrit",
            "Sugrot, Ibn Sino, Muhammad al-Xorazmiy"
        ],
        correctAnswer: "Muhammad al-Xorazmiy, Abu Nasr Forobiy, Abu Rayhon Beruniy"
    },
    {
        question: "Kompetensiya tushunchasiga ta’rif berilgan qatorni toping?",
        options: [
            "o‘quv jarayoni va o‘qitish jarayoni ni boshgarish",
            "o‘quvchilarning yutuqlari va rivojlanishlarini baholash",
            "o‘quvchilarga motivatsiya berish va yordam ko‘rsatish",
            "bilim, ko‘nikma, malaka, qadriyat, boshqa shaxsiy sifatlar, ijobiy natijalarni faoliyatda ko‘rinishi;"
        ],
        correctAnswer: "bilim, ko‘nikma, malaka, qadriyat, boshqa shaxsiy sifatlar, ijobiy natijalarni faoliyatda ko‘rinishi;"
    },
    {
        question: "Axloq – tushunchasining pedagogik lug‘aviy ma’nosi?",
        options: [
            "Xolat yurish-turish, negativ xatti-xarakat",
            "Pozitiv kayfiyat, yurish-turish, negativlik",
            "Ahloq qoidalarni xilof ish, xatti-xarakat",
            "Xulq-atvor, yurish-turish, tarbiya odob."
        ],
        correctAnswer: "Xulq-atvor, yurish-turish, tarbiya odob."
    },
    {
        question: "Ushbu fikr kimga tegishli? «Tarbiyachi – ustoz bo‘lish uchun, boshgalarning adj-idrokini o‘stirish, ma’rifat ziyosidan bahramand qilish, haqiqiy vatanparvar, haqiqiy fuqaro etib yetishtirish uchun, eng avvalo, tarbiyachining ana shunday yuksak talablarga javob berishi, ana shunday buyuk fazilatlarga ega bo‘lishi kerak».",
        options: [
            "I.Karimov",
            "E.Vohidov",
            "A.Avloniy",
            "I.Ibrat"
        ],
        correctAnswer: "A.Avloniy"
    },
    {
        question: "Didaktika tushunchasining lug‘aviy ma’nosi qaysi jawobda to‘g‘ri berilgan?",
        options: [
            "Didaktika (ta’lim nazariyasi, inglizcha didaktik «o‘qitish»",
            "Didaktika (lotincha didasko «o‘rganuvchi»)",
            "Didaktika (franzucha ta’lim nazariyasi, didasko «o‘rganuvchi»)",
            "Didaktika (ta’lim nazariyasi, yunoncha didaktikos «o‘rgatuvchi», didasko «o‘rganuvchi»)"
        ],
        correctAnswer: "Didaktika (ta’lim nazariyasi, yunoncha didaktikos «o‘rgatuvchi», didasko «o‘rganuvchi»)"
    },
    {
        question: "Nuqtalar o‘rniga tegishli jumlahi toping? ...... muayyan, aniq maqsad hamda ijtimoiy-tarixiy tajriba asosida yosh avlodni har tomonlama o‘stirish, uning ongi, xulq-atvori va dunyoqarashini tarkib toptirish jarayonidir.",
        options: [
            "Tarbiya",
            "Ta’lim",
            "Axloq",
            "O‘qitish"
        ],
        correctAnswer: "Tarbiya"
    },
    {
        question: "Shaxsni har tomonlama kamol toptirish qonuniyatlarini aniglash, ilg‘or pedagogik tajribalarni umumlashtirish va amaliyotga joriy etish jarayoni bu...?",
        options: [
            "Pedagogika fanining vazifalari",
            "Pedagogika fanining ob‘ekti",
            "Pedagogika fanining maqsadi",
            "Pedagogika fanining kategoriyasi"
        ],
        correctAnswer: "Pedagogika fanining vazifalari"
    },
    {
        question: "«Tajriba va fikr yuritish, amaliyot va nazariya, tabiy gobiliyat va maxsus ta’lim o’zaro birikib, o’qituvchini tarkib toptiradi» ushbu g’oya muallifi",
        options: [
            "A.S. Makarenko",
            "K.D.Ushinskiy",
            "A.Disterverg",
            "Ya.A. Komenskiy"
        ],
        correctAnswer: "K.D.Ushinskiy"
    },
    {
        question: "Pedagogika o’qitish metodikasi fan sifatida - ......, tarbiyalanuvchi va o’quvchi – talabalar tomonidan qonday o’rganiisa, uni boshgarib turadigan tarbiyachi va pedagoglarni ta’lim berish va tarbiyalash faoliyatini o’rganadi. Nuqtalar o’mini toping.",
        options: [
            "Ta’lim va tarbiyani",
            "Ta’limni gonuniyligini",
            "Real tarbiyani",
            "Tarbiyani"
        ],
        correctAnswer: "Ta’lim va tarbiyani"
    },    
    {
        question: "Konfliktning boshlanishidagi birinchi signaldan keyin qonday belgilar kuzatilishi mumkin?",
        options: [
            "Tomonlarning to'liq kelishuvga erishishi",
            "Oquvchilarning o'zaro murojaatlari ko'payishi",
            "Hissiy asabiylashuv, g'azab yoki to'gnashuvar",
            "Oqituvchining barcha garorlarini tan olish"
        ],
        correctAnswer: "Hissiy asabiylashuv, g'azab yoki to'gnashuvar"
    },
    {
        question: "Konfliktning belgilari o'quvchilarda qonday hissiy holatni keltirib chigarishi munkin?",
        options: [
            "Xavotir, g'azab, tushunmovchilik",
            "Oquvchilarning yaxshi kayfiyatlari",
            "Faqat bir tomonning qoniqishi",
            "Oquvchilarning to'liq ishontirilishi"
        ],
        correctAnswer: "Xavotir, g'azab, tushunmovchilik"
    },
    {
        question: "Konfliktning boshlanishi o'quvchilarda qonday ijtimoiy alogalarga olib kelishi munkin?",
        options: [
            "Oquvchilarning o'zaro hamkorlik va tushunishi",
            "Oquvchilar orasida qarama-qarshilklar va g'azabning kuchayishi",
            "Oquvchilarning o'zaro yordam berishi",
            "Oquvchilarning to'liq tinchlanishi"
        ],
        correctAnswer: "Oquvchilar orasida qarama-qarshilklar va g'azabning kuchayishi"
    },
    {
        question: "Tana zaboning necha tarkibiy qismi mayjud?",
        options: [
            "3",
            "5",
            "4",
            "7"
        ],
        correctAnswer: "4"
    },
    {
        question: "O’zaro kelishuvga asoslangan birgalikdagj hamkorlik, hanjjhatlik, o’zaro do’stlik ma’nolarini anglatatuvchi so’zni belgilang.",
        options: [
            "energetika",
            "sinergetika",
            "kibernitetika",
            "fonetika"
        ],
        correctAnswer: "sinergetika"
    },
    {
        question: "............ hayotda uehrab turadigan turli nizo va ziddiyatga bog’liq bo’lgan vogealar bo’lib, osuda va tinchlik vaqtida siz ularga e’tiborsiz bo’lasiz.",
        options: [
            "Insidentlar",
            "Diskomfortlar",
            "Hasadgo’ylar",
            "Melanxoliklar"
        ],
        correctAnswer: "Insidentlar"
    },
    {
        question: "Donishmandlarning fikricha “Janjal bo’lgan yerda...........” ushbu fikirlarni davom ettiring.",
        options: [
            "Omad ketadi",
            "Baraka qochadi",
            "Janjal chigadi",
            "hech narsa bo’lmaydi"
        ],
        correctAnswer: "Baraka qochadi"
    },
    {
        question: "Muloqat jarayonidagisuhbadoshning pozitsiyasida turib,o’zini tassavur qilishi,o’ziga birovningko’zi bilan qarashga intilishi nima deb ataladi?",
        options: [
            "O’xshatish",
            "Faoliyat",
            "Refleksiya",
            "Bilish"
        ],
        correctAnswer: "Refleksiya"
    },
    {
        question: "Ta'sirli nutq bu",
        options: [
            "andozali nutq",
            "tasvirli nutq",
            "foydali nutq",
            "chiroyli nutq"
        ],
        correctAnswer: "tasvirli nutq"
    },
    {
        question: "Pedagogik hamkorlikning dastlabki tamoyili",
        options: [
            "shaxsiy bilishga asoslangan ongiliikdir",
            "to’ldiruvchilik tamoyili",
            "ta’lim-tarbiyaviy axborotlarning ochiqligi tamoyili",
            "Ongililk tamoyili"
        ],
        correctAnswer: "ta’lim-tarbiyaviy axborotlarning ochiqligi tamoyili"
    },
    {
        question: "Nizoli vaziyatlarni boshqarishning Strategik usullar nechta",
        options: [
            "3 ta",
            "4 ta",
            "5 ta",
            "6 ta"
        ],
        correctAnswer: "4 ta"
    },
    {
        question: "U kishga bulgan talabni tushuntirish; Muvofiqdashtirish va integratsiyalash qanday usullarga kiradi",
        options: [
            "Strategik",
            "Tarkibly - tashkiliy",
            "Kompleks",
            "Interfaol"
        ],
        correctAnswer: "Tarkibly - tashkiliy"
    },
    {
        question: "Maqsadli ziddiyat qanday kelib chigadi?",
        options: [
            "Sabablarga ko'ra",
            "Nizo kelib chiqqanligi",
            "Shaxsiy maqsad asosida,xatti xarakatlar natijasida",
            "Motivlar asosida"
        ],
        correctAnswer: "Shaxsiy maqsad asosida,xatti xarakatlar natijasida"
    },
    {
        question: "Shaxs va jamoa jaomadagi shaxslar aro nizolarni bartaraf etish to'g'risidagi tadqiqotni kim olib borgan?",
        options: [
            "L.G.Somalin",
            "Maxmudov V",
            "Aliboev Sh",
            "A.A.Ershanov"
        ],
        correctAnswer: "L.G.Somalin"
    },
    {
        question: "Konfliktlarning Yechimini topishda muxim omil bu…",
        options: [
            "Shaxsning ma'naviy etuklik",
            "Nizolarda o'zini tuta olish",
            "Ortoglarni xurmat qilish",
            "Shaxsning ma'naviy etuklik Nizolarda o'zini tuta olish. Ortoglarni xurmat qilish"
        ],
        correctAnswer: "Shaxsning ma'naviy etuklik Nizolarda o'zini tuta olish. Ortoglarni xurmat qilish"
    },
    {
        question: "Qaynona bilan kelin o'tasida kelib chikuvchi nizoning birinchi sababi nima?",
        options: [
            "Murosaning yo'qligi",
            "Murosaning yo'qligi. Bir- birini tushunmasligi. Oila muxitining yomonligi.",
            "Bir- birini tushunmasligi",
            "Oila muxitining yomonligi"
        ],
        correctAnswer: "Murosaning yo'qligi. Bir- birini tushunmasligi. Oila muxitining yomonligi."
    },
    {
        question: "Kelin bilan kiyov arazlashib qoldi, bunday xolatda kelin bu xolatni qaynonalarga bildirishi kerakmi?",
        options: [
            "Xa,chunki o'gil ularning farzandi",
            "Jiddiy xolatda aytishi lozim",
            "Yo'q,chunki er xotin bir kun yarashib ketadi",
            "Shaxsning ma'naviy yetuklik"
        ],
        correctAnswer: "Jiddiy xolatda aytishi lozim"
    },
    {
        question: "Oila muxitida bolalar bilan ota-onaning o'tasidagi konfliktlar asosan nimaga bogliq?",
        options: [
            "Ularning tarbiyalanganlik darajasiga bogliq",
            "Ularning tarbiyalanganlik darajasiga bogliq. Ularning bir-birini Muxitning nosog'lomligi. tushunishiga",
            "Ularning bir-birini tushunishiga",
            "Muxitning nosoglomligi"
        ],
        correctAnswer: "Ularning tarbiyalanganlik darajasiga bogliq. Ularning bir-birini Muxitning nosog'lomligi. tushunishiga"
    },
    {
        question: "Konfliktning yuzaga kelishi uchun qanday shart-sharotilar mayjud bo'ladi?",
        options: [
            "Rivojlanib etilgan mojoroli vaziyat",
            "Qatnashchilarning etarii soni",
            "Rivojlanib etilgan mojoroli vaziyat Qatnashchilarning etarii soni. Ziddiyatli vaziyatiga sabab",
            "Ziddiyatli vaziyatiga sabab"
        ],
        correctAnswer: "Rivojlanib etilgan mojoroli vaziyat Qatnashchilarning etarii soni. Ziddiyatli vaziyatiga sabab"
    },
    {
        question: "O'qiuvchi va o'quvchilar o'trasidagi konfliktlarning yuzaga kelishidagi omillari nechta",
        options: [
            "6",
            "4",
            "5",
            "3"
        ],
        correctAnswer: "4"
    },
    {
        question: "O'qiuvchining talabalarga tashqi ko'rinishiga qarab muomala qilishi to'g'rimi?",
        options: [
            "Ha,bunda hech qonday ziddiyat yuzaga keladi",
            "Ha.Bu payida u hech kimga halaqit bermaydi",
            "Nizoning shart sharotilari",
            "Yo'q bunday tabalarga e'tiborini qaratib,boshqa talabalar nazardan chetda olishi talabalarni fanga va o'qiuvchiga nisbatan nafrati ortishiga olib keladi."
        ],
        correctAnswer: "Yo'q bunday tabalarga e'tiborini qaratib,boshqa talabalar nazardan chetda olishi talabalarni fanga va o'qiuvchiga nisbatan nafrati ortishiga olib keladi."
    },
    {
        question: "Pedagogik konflentlar qonday xolatlarda yuzaga keladi?",
        options: [
            "Oiladagi a'zolari o'trasida",
            "Do'stlar davrasida",
            "Jamoa bilan",
            "Ta'lim tarbiya jarayonida"
        ],
        correctAnswer: "Ta'lim tarbiya jarayonida"
    },
    {
        question: "Yechimini topish qiyin bo'lgan nizo bu-?",
        options: [
            "Tashqi nizo",
            "Aralash nizo",
            "Ichki nizo",
            "O'zaro nizo"
        ],
        correctAnswer: "Ichki nizo"
    },
    {
        question: "Pedagogik konfliktlarni Yechimini topishdagi muhim masala bu-?",
        options: [
            "Ota-onaning o'mi",
            "Rahbarning o'mi",
            "O'qiuvchi va o'quvchi o'trasidagi munosabatning ijobivilgi",
            "Mahalla jamoasi"
        ],
        correctAnswer: "O'qiuvchi va o'quvchi o'trasidagi munosabatning ijobivilgi"
    },
    {
        question: "Ta'lim j arayonidagi konfliktlarni echishda kimning roli muxim",
        options: [
            "O'qiuvchining",
            "Rahbarlarning",
            "O'quvchining",
            "Guruxning"
        ],
        correctAnswer: "O'qiuvchining"
    },
    {
        question: "Bola ta'lim olish arayonidagi nizolarni oldini olishda kimdan ko'proq ko'mak oladi?",
        options: [
            "Oiladan",
            "Oiladan Mahalladan guruxdan",
            "Mahalladan",
            "Guruxdan"
        ],
        correctAnswer: "Oiladan Mahalladan guruxdan"
    },
    {
        question: "Mulogot samadorligi kimga bog'liq?",
        options: [
            "Subhatdoshlarning yoshiga",
            "Gaplashayotgan kishilarningbir-biriga qanchalik mos ekanligiga",
            "Subhatdoshlarning hrakteriga",
            "So'zlarning ta'sirchanligiga"
        ],
        correctAnswer: "Gaplashayotgan kishilarningbir-biriga qanchalik mos ekanligiga"
    },
    {
        question: "Pedagogik konfliktlarni Yechimini topishdagi muxim masala bu-7",
        options: [
            "Rahbaraing o'rni",
            "O'qituvchi va o'quvchining o'trasidagi munosabatning to'g'ri echimi",
            "Ota-ona o'trasidagi munosabat",
            "Oiladagi muommolar"
        ],
        correctAnswer: "O'qituvchi va o'quvchining o'trasidagi munosabatning to'g'ri echimi"
    },
    {
        question: "Shaxs va jamoa jaomadagi shaxslararo nizolarni bartaraf etish to'g'risidagi tadqigotni kim olib borgan?",
        options: [
            "L.G.Somalin",
            "Maxmudov V",
            "Aliboev Sh",
            "A.A.Ershanov"
        ],
        correctAnswer: "L.G.Somalin"
    },
    {
        question: "Konflikt bartaraf etilmay munosabatlar butunlay tugallansa,buni qanday xodisa deyiladi?",
        options: [
            "Pozetsiyalarning bir-biriga to'g'ri kelmasligi tufayli ro'y bergan xodisa",
            "Ikki tomonning kelishuvi",
            "Suxbatdoshimizni to'g'ri tushinish",
            "Konfliktlar bo'lmasligiga xarakat qilish"
        ],
        correctAnswer: "Pozetsiyalarning bir-biriga to'g'ri kelmasligi tufayli ro'y bergan xodisa"
    },
    {
        question: "Pedagogik konfliktni tug'diradigan sharotilar qaysilar?",
        options: [
            "Bu kishilarning qiziqishlari,qarashlari,bir-birini tushanishlaridir",
            "Ogoxlantirish omili",
            "Muloqatning barqaror emasligi",
            "Bu kishilarning kelishmovchiligi"
        ],
        correctAnswer: "Bu kishilarning qiziqishlari,qarashlari,bir-birini tushanishlaridir"
    },
    {
        question: "Mullogot samadorligi nimaga bog'liq?",
        options: [
            "Suxbatlashayotgan kishilarning bir-biriga qanchalik mas ekanligi",
            "Suxbadoshlarning yoshini mosligiga",
            "Suxbadoshlarning xarakteriga",
            "So'zlaming tasirchanligiga"
        ],
        correctAnswer: "Suxbatlashayotgan kishilarning bir-biriga qanchalik mas ekanligi"
    },
    {
        question: "Pedagogik konflikti asosan nima asosida yuzaga keladi?",
        options: [
            "Mexnat asosida",
            "O'yin asosida",
            "Mulogat ogibatida",
            "Dars asosida"
        ],
        correctAnswer: "Mulogat ogibatida"
    },
    {
        question: "Ta'lim jarayonidagi konfliktlar kimlar o'trasida kelib chiqishi munkin?",
        options: [
            "O'qituvchi-o'quvchi",
            "O'quvchi,Direktor,O'qituvchi",
            "O'quvchi- direktor",
            "O'quvchi-o'quvchi"
        ],
        correctAnswer: "O'quvchi,Direktor,O'qituvchi"
    },
    {
        question: "Pedagogik konfliktlarda o'quvchilarga asosiy ko'mak beruvchi maskan.",
        options: [
            "Oila",
            "Maxallada",
            "Sinf jamoasi",
            "Jamiyatda"
        ],
        correctAnswer: "Sinf jamoasi"
    },
    {
        question: "Ziddiyatni qanday tomonlari bor.",
        options: [
            "Verbal",
            "Verbal Noverbal",
            "Noverbal",
            "Aralash"
        ],
        correctAnswer: "Verbal Noverbal"
    },
    {
        question: "Pedagogik konfliktlar qanday xolatlarda yuzaga keladi. .",
        options: [
            "Oiladagi a'zolari o'tiasida",
            "Do'stlar davrasida",
            "Ta'lim-tarbiya jarayonida",
            "Oilasida"
        ],
        correctAnswer: "Ta'lim-tarbiya jarayonida"
    },
    {
        question: "Yechimini topish qiyin bo'Igan nizo bu",
        options: [
            "Tashqi nizo",
            "Ichki nizo",
            "Aralash nizo",
            "Nizoni sabablari"
        ],
        correctAnswer: "Ichki nizo"
    },
    {
        question: "Konflikt nima?",
        options: [
            "Ishtirokchilarning xar biri ikkinchisining o'z extiyqilarini qondirish",
            "Munosabatlarning yomonlashuvi",
            "O'zaro kelishmovchilik",
            "Qarama qarshilik va kurashning keskin kuchayib, ketishi jarayonidir"
        ],
        correctAnswer: "Qarama qarshilik va kurashning keskin kuchayib, ketishi jarayonidir"
    },
    {
        question: "Konflikt dinamikasi necha bosqichdan iborat",
        options: [
            "2 bosqichdan -1. sabab, 2-ogibat",
            "Ob'ekt, sub'ekt",
            "4 bosqichdan",
            "3 bosqichdan —etilish, so'nish. Ro'yobga chiqish"
        ],
        correctAnswer: "3 bosqichdan —etilish, so'nish. Ro'yobga chiqish"
    },
    {
        question: "Nizoli vaziyat-",
        options: [
            "Tomonlarning yashirin, ochiq to'gnashuvi, nonunoəibligi",
            "Tomonlarning to'gnashuvi",
            "Tomonlarning ochiq to'gnashuvi",
            "Tomonlarning nonunoəibligi"
        ],
        correctAnswer: "Tomonlarning yashirin, ochiq to'gnashuvi, nonunoəibligi"
    },
    {
        question: "Konflikt eskolyatsiyasi nima?",
        options: [
            "Liderlikka intilish;",
            "Konflikt migyosining kengayishi;",
            "Talabalar o’rtasıda konfliktlar",
            "Kuch ishlatish yo’li bilan hal etish"
        ],
        correctAnswer: "Konflikt migyosining kengayishi;"
    },
    {
        question: "“Konfliktogen” so’zining ma’nosi nima?",
        options: [
            "Konflikt miqyosining kengayishi;",
            "Ziddiyat, to’qnashuv;",
            "“agressiv” usuli, “qonuniy” usul",
            "Imkon beruvchi, sharoit yaratuvchi;"
        ],
        correctAnswer: "Imkon beruvchi, sharoit yaratuvchi;"
    },
    {
        question: "Pedagogik konfliktologiya qaysi fanlar bilan bog’liq?",
        options: [
            "Sotsiologiya, psixologiya,pedagogika, biologiya, ijtimoiy pedagogika, pedagogika tarixi;",
            "Qiyosiy pedagogika, anatomiya, fiziologiya, psixologiya, pedagogika, sotsiologiya, biologiya, tarix;",
            "Yangiliklarga bo’lgan munosabat",
            "Pedagogika, ijtimoiy pedagogika, pedagogika tarxi, qiyosiy pedagogika, anatomiya, fiziologiya, psixologiya, sotsiologiya"
        ],
        correctAnswer: "Pedagogika, ijtimoiy pedagogika, pedagogika tarxi, qiyosiy pedagogika, anatomiya, fiziologiya, psixologiya, sotsiologiya"
    },
    {
        question: "Pedagogik konfliktlar qanday holatlarda yuzaga keladi?",
        options: [
            "Oila azolari o'rtasida",
            "Do'stlar davrasida",
            "Talim, tarbiya jarayonida",
            "Ota-onalar va farzandlar o'rtasida"
        ],
        correctAnswer: "Talim, tarbiya jarayonida"
    },
    {
        question: "Pedagogik konfliktlarni yechimini topishdagi muhim masala bu-?",
        options: [
            "Ota-onaning o'rni",
            "Rahbarning o'rni",
            "Mahalla jamoasi",
            "O'qituvchi va o'quvchi o'rtasidagi munosabatning ijobiyligi"
        ],
        correctAnswer: "O'qituvchi va o'quvchi o'rtasidagi munosabatning ijobiyligi"
    },
    {
        question: "Pedagogik konfliktologiyaning o'rganish ob'ektini toping?",
        options: [
            "O'qituvchi va o'quvchi munosabatlari",
            "Ta'lim tarbiya jarayonidagi nizolar",
            "Dars jarayonidagi nizolar",
            "O'qituvchi va o'quvchi munosabatlari, Ta'lim tarbiya jarayonidagi nizolar"
        ],
        correctAnswer: "O'qituvchi va o'quvchi munosabatlari, Ta'lim tarbiya jarayonidagi nizolar"
    },
    {
        question: "Pedagogik konfliktlar qanday jarayonlarda yuzaga keladi?",
        options: [
            "Oila, mahalla muxiti",
            "Ta'lim, tarbiya jarayonida",
            "Do'stlar orasida",
            "Har xil xolatlarda"
        ],
        correctAnswer: "Ta'lim, tarbiya jarayonida"
    },
    {
        question: "Ta'lim jarayonidagi konfliktlarning kelib chiqish sabablari?",
        options: [
            "O'qituvchi va o'quvchi munosabatlari, O'qituvchining ma'sulyatsizligi",
            "O'qituvchi va o'quvchi munosabatlari",
            "O'qituvchining ma'sulyatsizligi",
            "Oquvchining bilimsizligi"
        ],
        correctAnswer: "O'qituvchi va o'quvchi munosabatlari, O'qituvchining ma'sulyatsizligi"
    },
    {
        question: "Ta'lim jarayonidagi konfliktlarni echishda kimning roli muxim?",
        options: [
            "Oqituvchining",
            "Rahbarlarning",
            "Oquvchining",
            "Guruxning"
        ],
        correctAnswer: "Oqituvchining"
    },
    {
        question: "Bola ta'lim olish jarayonidagi nizolarni oldini olishda kimdan ko'proq ko'mak oladi?",
        options: [
            "Oiladan",
            "Mahalladan",
            "Oiladan, Mahalladan, guruxdan",
            "Guruxdan"
        ],
        correctAnswer: "Oiladan, Mahalladan, guruxdan"
    },
    {
        question: "Yechimini topish qiyin bo'lgan nizolar bu-?",
        options: [
            "Ichki nizo",
            "Tashqi nizo",
            "Aralash nizo",
            "Konflikt"
        ],
        correctAnswer: "Ichki nizo"
    },
    {
        question: "Norasmiy gurux a'zosi Rahbardan ham gurux a'zolaridan ham bir xil xatti xarakatni kutsa nima kelib chiqmaydi?",
        options: [
            "Kelishuv",
            "Munozara",
            "Konfliktlar",
            "Subbat"
        ],
        correctAnswer: "Konfliktlar"
    },
    {
        question: "Muloqot samadorligi nimaga bog'liq?",
        options: [
            "Suxbadoshlarning yoshini mosligiga",
            "Suxbadoshlarning xarakteriga",
            "So'zlarning tasirchanligiga",
            "Suxbatlashayotgan kishilarning bir-biriga qanchalik mos ekanligi"
        ],
        correctAnswer: "Suxbatlashayotgan kishilarning bir-biriga qanchalik mos ekanligi"
    },
    {
        question: "Insonlar eng avvalo konfliktni yuzaga keltirmaslik uchun qanday bo'lishi kerak?",
        options: [
            "Kamtar",
            "Buni oldini olish",
            "Tarbiyalangan",
            "Nizoni sabablari"
        ],
        correctAnswer: "Tarbiyalangan"
    },
    {
        question: "Pedagogik konfliktlarni oldini olishda nima asosiy o'rinni egallaydi?",
        options: [
            "Ota-ona",
            "O'quvchi",
            "O'qituvchi",
            "Rahbar"
        ],
        correctAnswer: "O'qituvchi"
    },
    {
        question: "Konfliktning tarkibly kismlari",
        options: [
            "Nizoning tomonlari",
            "Nioning shart-sharoitlari",
            "Nizo qatnashchilari xatti xarakatlari",
            "Nizoning tomonlari, Nioning shart-sharoitlari"
        ],
        correctAnswer: "Nizoning tomonlari, Nioning shart-sharoitlari"
    },
    {
        question: "Talaba dars vaqtida telefon o'ynashi yoki o'zining shaxsiy ishlari bilan shug'ullanishi mumkunmi?",
        options: [
            "Yo'q u boshqa talabalarga va fanning o'qitilishida xalaqit beradi,",
            "Xa bu paytda u xech kimga xalakit bermaydi",
            "Bunday talabalarni o'z xoliga tashlab qo'yish zarur.",
            "Nioning shart-sharoitlari"
        ],
        correctAnswer: "Yo'q u boshqa talabalarga va fanning o'qitilishida xalaqit beradi,"
    },
    {
        question: "Pedagogik konfliktalogiyaning asosiy vazifasi?",
        options: [
            "Komil inson tarbiyalash",
            "Konfliktni bartaraf etish",
            "Shaxslar o'trasidagi ziddiyat",
            "Shaxsni tarbiyalash"
        ],
        correctAnswer: "Konfliktni bartaraf etish"
    },
    {
        question: "Ichki nozisiya nima?",
        options: [
            "Kishining maqsadi va motivlari",
            "Kishining xulq atvori",
            "Kishining idiali",
            "Kishining xarakteri"
        ],
        correctAnswer: "Kishining maqsadi va motivlari"
    },
    {
        question: "Ish o'rinlari o'trasidagi bog’liqlik alogalarini sanab bering.",
        options: [
            "Tashkiliy, amaliy",
            "Tashkiliy, texnologik",
            "Texnika",
            "Texnologik, axborot"
        ],
        correctAnswer: "Tashkiliy, texnologik"
    },
    {
        question: "Talaba dars vaqtida telefon o'ynashi yoki o'zining shaxsiy ishlari bilan shug'ullanishi munkinmi?",
        options: [
            "Ha.Bu paytda u hech kimga halaqit bermaydi.",
            "Bunday talabalarni o'z xoliga qo'yish zarur",
            "Tarbiyalash kerak",
            "Yo'q bu boshqa talabalarga va fanning o'qitilishida xalaqit beradi"
        ],
        correctAnswer: "Yo'q bu boshqa talabalarga va fanning o'qitilishida xalaqit beradi"
    },
    {
        question: "Pedagogik konflentlarda o'quvchilarga asosiy ko'mak beruvchi maskan",
        options: [
            "Oila",
            "Maxallada",
            "Ha,bunda hech qonday ziddiyat yuzaga kelad",
            "Sinf jamoasi"
        ],
        correctAnswer: "Sinf jamoasi"
    },
    {
        question: "Konfeltlarda o'quvchi kimdan ko'mak oladi?",
        options: [
            "O'quvchilardan oilasidan",
            "O'quvchilardan",
            "Oilasidan",
            "O'qituvchi va oilasidan"
        ],
        correctAnswer: "O'qituvchi va oilasidan"
    },
    {
        question: "Ziddiyatni qonday tomonlari bor?",
        options: [
            "Verbal",
            "Vebral noveloral",
            "Novebral",
            "o'quvchilardan"
        ],
        correctAnswer: "Verbal"
    },
    {
        question: "Konflikt sshzining ma'nosini belgilang?",
        options: [
            "Ozaro hurmat",
            "Do'stlik",
            "Nizo, kelishmovchilik",
            "Kelishuv"
        ],
        correctAnswer: "Nizo, kelishmovchilik"
    },
    {
        question: "Tashqi nizolar nima?",
        options: [
            "Kishining maqsadi va motivlari",
            "Nizoni sabablari",
            "Kishining xulq atvori",
            "Mexnat asosida"
        ],
        correctAnswer: "Kishining xulq atvori"
    },
    {
        question: "……. - pedagogik ijodkortikning asosiy maydoni.",
        options: [
            "Dars",
            "O`qituvchi",
            "Sinf",
            "O`quvchi"
        ],
        correctAnswer: "Sinf"
    },
    {
        question: "O`spirinlik yoshini aniqlang.",
        options: [
            "15 -18 yosh",
            "14 – 17 yosh",
            "14 – 19 yosh",
            "16 – 19 yosh"
        ],
        correctAnswer: "14 – 17 yosh"
    },
    {
        question: "Pedagogik konfliktologiya fani quyida berilgan fanlardan qaysi biri bilan bog'liq?",
        options: [
            "Psixologiya, pedagogika",
            "Barcha fanlar bilan",
            "Iqtisod, falsafa",
            "Adabiyot, biologiya"
        ],
        correctAnswer: "Psixologiya, pedagogika"
    },
    {
        question: "Shaxslar aro konfliktlarning yuzaga kelishi omillari.",
        options: [
            "Oila muxiti",
            "Maktab jamoasi",
            "Oila muxiti Maktab jamoasi Maxalla jamoasi",
            "Maxalla jamoasi"
        ],
        correctAnswer: "Oila muxiti Maktab jamoasi Maxalla jamoasi"
    },
    {
        question: "og'zaki (dahanaki) qarshilik natijasi bu ..",
        options: [
            "guruhli konflikt",
            "motivatsion konflikt",
            "kommunikativ konflikt",
            "ochiq konflikt"
        ],
        correctAnswer: "kommunikativ konflikt"
    },
    {
        question: "ehtiyojlar va istaklar o’rtasidagi  bu .",
        options: [
            "kommunikativ konflikt",
            "guruhli konflikt",
            "ochiq konflikt",
            "motivatsion konflikt"
        ],
        correctAnswer: "motivatsion konflikt"
    },
    {
        question: "raqibga zarar yetkazish maqsadidagi kurash ehtiyojlar va istaklar o’rtasidagi  bu .",
        options: [
            "motivatsion konflikt",
            "kommunikativ konflikt",
            "ochiq konflikt",
            "guruhli konflikt"
        ],
        correctAnswer: "ochiq konflikt"
    },
    {
        question: "agressiya ma’nosi nima?",
        options: [
            "To’qnashuv",
            "“hujum qilish”",
            "Konflikt",
            "Janjal"
        ],
        correctAnswer: "“hujum qilish”"
    },
    {
        question: "Latent so’zining lug’aviy ma’nosi qaysi javobda to’g’ri ko’rsatilgan?",
        options: [
            "Yashirin",
            "Tanglik",
            "Zo’rlik ishlatish",
            "Tashqi namoyon bo’lish"
        ],
        correctAnswer: "Yashirin"
    },
    {
        question: "Konflikt qanday belgilari bilan boshlanishi mumkin?",
        options: [
            "To’liq mulogotning o’rtacha darajada pasayishi",
            "Tomonlar o’rtasida ochiq va tinch mulogotning ko'payishi",
            "Noaniq xatti-harakatlar va noto'g’ri tushunishlar",
            "Tomonlarning o'zaro hurmatini kuchaytirishi"
        ],
        correctAnswer: "Noaniq xatti-harakatlar va noto'g’ri tushunishlar"
    },
    {
        question: "Konfliktning birinchi signali qonday ko'tinadi?",
        options: [
            "O'quvehilar o'tasida hurmat va tushunishning oshishi",
            "O'quvehilarning bir-biriga tajovuzkor munosabati",
            "O'qituvchining qat'iy qarori",
            "O'quvehilar o'tasidagi yaqin do'stilk"
        ],
        correctAnswer: "O'quvehilarning bir-biriga tajovuzkor munosabati"
    },
    {
        question: "Konfliktning belgilari bo'lishi mumkin bo'lgan qonday hissiyotlar mayjud?",
        options: [
            "Hayajon, g'azab, o'tadagi sukunat",
            "Xavotir, go'rquv, qarama-qarshilik",
            "Xushnudlik, quvoneh, umid",
            "Yengillik, ishoneh, his-tuyg'ularni inkor etish"
        ],
        correctAnswer: "Hayajon, g'azab, o'tadagi sukunat"
    },
    {
        question: "Konfliktning belgilari sifatida qaysi hatti-harakatlar ko'tinishi mumkin?",
        options: [
            "O'quvehilarning o'zaro yordan berishi",
            "O'quvehilarning o'z fikrlarini ochiq bayon qilishlari",
            "Tomonlarning qarama-qarshi yondashuvi va hissiy ajralishlari",
            "O'quvehilarning faqat o'zaro yordan so'rashlari"
        ],
        correctAnswer: "Tomonlarning qarama-qarshi yondashuvi va hissiy ajralishlari"
    },
    {
        question: "Konfliktni boshlanishidagi birinchi signal sifatida qaysi holatni ko'rish mumkin?",
        options: [
            "O'quvehilar o'tasida kuchli do'stilk",
            "O'quvehilarning hissiy asabiylashuvi yoki to'qnashuvi",
            "O'qituvchining barcha qarorlarini izchil qo'llash",
            "O'quvehilarning faqat yaxshilanishni kutishlari"
        ],
        correctAnswer: "O'quvehilarning hissiy asabiylashuvi yoki to'qnashuvi"
    },
    {
        question: "Konfliktning boshida ko'pincha qonday holatlar yuzaga keladi?",
        options: [
            "Tomonlarning kelishuvga erishishi",
            "O'quvehilarning o'zaro hurmat va tushunishi oshishi",
            "Aks ettirilgan va noaniq fikrlar, qarama-qarshi hissiyotlar",
            "Faqat o'qituvchining qarorlari asosida qarorlar qabul qilish"
        ],
        correctAnswer: "Aks ettirilgan va noaniq fikrlar, qarama-qarshi hissiyotlar"
    },
    {
        question: "Konfliktning belgilari sifatida qonday noaniqliklar bo'lishi mumkin?",
        options: [
            "Noaniq, tushunarsiz yoki ikki ma'noli gaplar",
            "O'quvehilarning ochiq va to'g'ri mulogotlari",
            "O'quvehilarning fikrlarini to'liq tushunish",
            "O'quvehilarning o'zaro hamkorligi va kelishuvlari"
        ],
        correctAnswer: "Noaniq, tushunarsiz yoki ikki ma'noli gaplar"
    },
    
];


const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const questionsPerPage = 1; // SAHIFADA FAQAT BITTA TEST KO'RINIShI UCHUN 1 GA O'ZGARTIRILDI

// Natijalar elementlari: endi bitta span elementiga bog'laymiz
const summaryResultsSpan = document.getElementById('summaryResults');

let currentQuestions = []; // Hozirgi sahifadagi savollar (faqat bitta bo'ladi)
// `answeredQuestions` endi kerak emas, chunki har bir savolga bir marta javob berilgandan keyin yangi savol yuklanadi.

// Barcha savollarni aralashtirish uchun alohida nusxa saqlaymiz
let shuffledAllQuestions = [];

// Hisoblash o'zgaruvchilari
let totalAttempts = 0; // Jami urinishlar (savollar soni)
let correctCount = 0; // To'g'ri javoblar soni
let questionAnsweredThisTurn = false; // Joriy savolga javob berilganligini kuzatish uchun flag

// ==========================================================
// SECTION 2: Helper Functions (Yordamchi Funksiyalar)
// Bu bo'limda umumiy vazifalarni bajaradigan, qayta ishlatiladigan funksiyalar mavjud.
// ==========================================================

// Array elementlarini tasodifiy tartiblash funksiyasi (Fisher-Yates shuffle algoritmi)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Elementlarni almashtirish
    }
}

// Natijalarni yangilash funksiyasi
function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100; 
    }
    
    // Natijalarni yangi formatda yangilaymiz: "Urinish: X, To'g'ri: Y, Foiz: Z%"
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}


// Savollarni veb-sahifaga yuklash va ko'rsatish funksiyasi
function loadQuestions() {
    quizContainer.innerHTML = ''; // Avvalgi savollarni tozalash

    // Joriy savolga javob berilganligini tiklaymiz
    questionAnsweredThisTurn = false; 

    // Agar shuffledAllQuestions bo'sh bo'lsa (yoki barcha savollar ishlatilgan bo'lsa),
    // uni qayta yuklab va aralashtiramiz
    if (shuffledAllQuestions.length === 0) {
        shuffledAllQuestions = [...questionsData]; // questionsData dan nusxa olamiz
        shuffleArray(shuffledAllQuestions); // Nusxani aralashtiramiz
    }

    // Keyingi N ta savolni olamiz (N = questionsPerPage)
    currentQuestions = shuffledAllQuestions.splice(0, questionsPerPage);
    
    // Agar savol qolmagan bo'lsa
    if (currentQuestions.length === 0) {
        quizContainer.innerHTML = "<p style='text-align: center; font-size: 1.5em; color: #555;'>Barcha savollar tugadi! Natijalarni pastda ko'ring.</p>";
        nextButton.disabled = true; // Tugmani o'chiramiz
        return; // Funksiyadan chiqamiz
    }

    // Har safar yangi savol yuklanganda, "Keyingi Savol" tugmasini vaqtincha o'chiramiz
    nextButton.disabled = true;


    currentQuestions.forEach((q, index) => { // Bu yerda index har doim 0 bo'ladi, chunki questionsPerPage = 1
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');

        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        // Savol raqamini jami urinishlar asosida ko'rsatamiz
        questionText.textContent = `${totalAttempts + 1}. ${q.question}`; 
        questionBlock.appendChild(questionText);

        const optionsList = document.createElement('ul');
        optionsList.classList.add('options-list');

        // Variantlarni aralashtirish uchun nusxa olamiz va aralashtiramiz
        const shuffledOptions = [...q.options]; 
        shuffleArray(shuffledOptions); // Variantlarni tasodifiy tartiblash

        shuffledOptions.forEach((option, optionIndex) => {
            const listItem = document.createElement('li');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question${index}`; // Har bir savol uchun unikal nom (bu yerda index har doim 0)
            radioInput.value = option;
            radioInput.id = `q${index}-option${optionIndex}`;
            
            // Radio tugmasi o'zgarganda foydalanuvchi javobini saqlash va tekshirish
            radioInput.addEventListener('change', (event) => {
                // Agar joriy savolga allaqachon javob berilgan bo'lsa, qayta hisoblamaymiz
                if (questionAnsweredThisTurn) {
                    return; 
                }

                const selectedValue = event.target.value;
                
                const currentQuestion = currentQuestions[index]; // Hozirgi savol ob'ekti (faqat bitta)
                let feedbackDiv = questionBlock.querySelector('.feedback');

                // Agar feedbackDiv mavjud bo'lsa, avvalgisini olib tashlaymiz
                if (feedbackDiv) {
                    feedbackDiv.remove();
                }
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback');
                questionBlock.appendChild(feedbackDiv);

                // Urinish sonini oshiramiz (faqat bir marta)
                totalAttempts++;

                if (selectedValue === currentQuestion.correctAnswer) {
                    feedbackDiv.textContent = 'Toʻgʻri!';
                    feedbackDiv.classList.remove('incorrect');
                    feedbackDiv.classList.add('correct');
                    correctCount++; // To'g'ri javob sonini oshiramiz
                } else {
                    feedbackDiv.textContent = `Notoʻgʻri. To'g'ri javob: "${currentQuestion.correctAnswer}"`;
                    feedbackDiv.classList.remove('correct');
                    feedbackDiv.classList.add('incorrect');
                    // wrongCount o'zgaruvchisi sahifada ko'rsatilmaydi, shuning uchun bu yerda oshirish shart emas
                }

                // Natijalarni yangilaymiz
                updateResults();

                // Shu savolning radio tugmalarini o'chirish (bir marta javob berilgandan so'ng)
                const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
                radioButtons.forEach(radio => {
                    radio.disabled = true;
                });

                // Savolga javob berilganligini belgilaymiz
                questionAnsweredThisTurn = true;
                // "Keyingi Savol" tugmasini faollashtiramiz
                nextButton.disabled = false;
            });

            const label = document.createElement('label');
            label.htmlFor = `q${index}-option${optionIndex}`;
            label.textContent = option;

            listItem.appendChild(radioInput);
            listItem.appendChild(label);
            optionsList.appendChild(listItem);
        });
        questionBlock.appendChild(optionsList); // optionsListni questionBlockga qo'shish
        quizContainer.appendChild(questionBlock);
    });
}


// ==========================================================
// SECTION 3: Event Handlers (Hodisalarni Boshqaruvchi Funksiyalar)
// Bu bo'limda tugmalar bosilganda yoki boshqa hodisalar yuz berganda bajariladigan funksiyalar mavjud.
// ==========================================================

// Keyingi savollar tugmasi bosilganda bajariladigan funksiya
function handleNextQuestions() {
    loadQuestions(); // Yangi savol to'plamini yuklash
}


// ==========================================================
// SECTION 4: Event Listeners (Hodisa Tinglovchilar)
// Bu bo'limda HTML elementlariga hodisa tinglovchilari biriktirilgan.
// ==========================================================

nextButton.addEventListener('click', handleNextQuestions);


// ==========================================================
// SECTION 5: Initial Load (Dastlabki Yuklanish)
// Bu bo'limda sahifa to'liq yuklanganda bajariladigan funksiyalar joylashgan.
// ==========================================================

// Sahifa to'liq yuklanganda savollarni yuklashni boshlash
document.addEventListener('DOMContentLoaded', () => {
    updateResults(); // Sahifa yuklanganda natijalarni boshlang'ich holatga keltirish
    loadQuestions();
});
