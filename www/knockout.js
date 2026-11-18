const params = new URLSearchParams(window.location.search);

const navItems = document.querySelectorAll(".nav-items");

const panels = document.querySelectorAll(".panels");

const translations = {
    en: {
        system: "System",
        save: "Save",
        back: " ← Back",
        standing: "Standing",
        matches: "Matches",
        statisticsTeam: "Team Statistics",
        general: "General",
        knockout: "Knockout",

        chooseTeam: "Choose Team",
        selectedTeams: "Selected Teams",
        homeaway: "Home Away",
        singlemeeting: "Single Meeting",

        qualified: "Qualified",
        qualifiedSecondary: "Qualified Secondary",
        eliminated: "Eliminated",
        eliminatedSecondary: "Eliminated Secondary",

        knockoutBracket: "Knock-Out Bracket",
        createBracket: "Create Bracket",
        deleteBracket: "Delete Bracket",

        searchTeam: "Search team or round or group",
        sortRound: "Default",
        sortDate: "Sort by Date",
        autoSchedule: "Auto Schedule",

        randomDraw: "Random Draw",
        draw: "Draw",

        setScore: "Set Score",
        editScore: "Edit Score",
        automaticScore: "Automatic Score",
        statistics: "Statistics",

        chooseTeam: "Choose Team",
        selectAllteam: "Select All Team",
        addTeams: "Add Teams",

        areYousure: "Are you sure you want to delete this standing?",
        thisDeleteAll: "This will also delete all:",
        matches: "Matches",
        statistics: "Statistics",
        cancel: "Cancel",
        delete: "Delete",

        matchSchedule: "Match Schedule",
        date: "Date",
        time: "Time",

        selectLocation: "Select Location",
        searchLocation: "Search Location",

        setScore: "Set Score",
        deleteScore: "Delete Score",

        startDate: "Start Date",
        startTime: "Start Time",
        minutesBetween: "Minutes Between Matches",
        daysBetween: "Days Between Rounds",
        generate: "Generate",

        selectTeam: "Select Team",

        matchStatistics: "Match Statistics",

        close: "Close",

        team: "Team",
        p: "P",
        w: "W",
        d: "D",
        l: "L",
        gF: "GF",
        gA: "GA",
        gD: "GD",
        pts: "Pts",

        possession: "Possession",
        shots: "Shots",
        shotsOnTarget: "Shots on Target",
        corners: "Corners",
        fouls: "Fouls",
        yellowCards: "Yellow Cards",
        redCards: "Red Cards",

        mostGoals: "Most Goals",
        bestDefence: "Best Defence",
        mostWins: "Most Wins",
        mostDraws: "Most Draws",
        mostLosses: "Most Losses",
        mostCleanSheets: "Most Clean Sheets",
        goalDifference: "Goal Difference",

        champion: "CHAMPION",
        congratulations: "Congratulations!",
        empty: "Empty",
        penalty: "Penalty",

        selectDate: "Select Date",
        selectTime: "Select Time",

        sun: "Su",
        mon: "Mo",
        tue: "Tu",
        wed: "We",
        thu: "Th",
        fri: "Fr",
        sat: "Sa",

        today: "Today",
        clear: "Clear",
        cancel: "Cancel",
    },

    id: {
        system: "Sistem",
        save: "Simpan",
        back: " ← Kembali",
        standing: "Klasemen",
        matches: "Pertandingan",
        statisticsTeam: "Statistik Tim",
        general: "Umum",
        knockout: "Gugur",

        chooseTeam: "Pilih Tim",
        selectedTeams: "Tim Terpilih",
        homeaway: "Kandang dan Tandang",
        singlemeeting: "bertemu satu kali",

        qualified: "Lolos",
        qualifiedSecondary: "Lolos Sekunder",
        eliminated: "Tereliminasi",
        eliminatedSecondary: "Tereliminasi Sekunder",

        knockoutBracket: "Bagan Sistem Gugur",
        createBracket: "Buat Bagan",
        deleteBracket: "Hapus Bagan",

        searchTeam: "Cari Tim, ronde, atau grup",
        sortRound: "Default",
        sortDate: "Urutkan berdasarkan Tanggal",
        autoSchedule: "Jadwal Otomatis",

        randomDraw: "Acak Undian",
        draw: "Undi",

        setScore: "Atur Skor",
        editScore: "Edit Skor",
        automaticScore: "Skor Otomatis",
        statistics: "Statistik",

        chooseTeam: "Pilih Tim",
        selectAllteam: "Pilih Semua Tim",
        addTeams: "Tambahkan Tim",

        areYousure: "Apakah kamu yakin untuk menghapus klasemen ini?",
        thisDeleteAll: "Ini akan menghapus semuanya:",
        matches: "Pertandingan",
        statistics: "Statistik",
        cancel: "Batal",
        delete: "Hapus",

        matchSchedule: "Jadwal Pertandingan",
        date: "Tanggal",
        time: "Waktu",

        selectLocation: "Pilih Lokasi",
        searchLocation: "Cari Lokasi",

        setScore: "Atur Skor",
        deleteScore: "Hapus Skor",

        startDate: "Tanggal mulai",
        startTime: "Waktu mulai",
        minutesBetween: "Menit di Antara Pertandingan",
        daysBetween: "Hari-hari di Antara Ronde",
        generate: "Membuat",

        selectTeam: "Pilih Tim",

        matchStatistics: "Statistik Pertandingan",

        close: "Tutup",

        team: "Tim",
        p: "P",
        w: "M",
        d: "S",
        l: "K",
        gF: "GM",
        gA: "GK",
        gD: "SG",
        pts: "Pts",

        possession: "Penguasaan Bola",
        shots: "Tembakan",
        shotsOnTarget: "Tembakan Tepat Sasaran",
        corners: "Tendangan Sudut",
        fouls: "Pelanggaran",
        yellowCards: "Kartu Kuning",
        redCards: "Kartu Merah",

        mostGoals: "Gol Terbanyak",
        bestDefence: "Pertahanan Terbaik",
        mostWins: "Kemenangan Terbanyak",
        mostDraws: "Hasil Imbang Terbanyak",
        mostLosses: "Kekalahan Terbanyak",
        mostCleanSheets: "Clean Sheet Terbanyak",
        goalDifference: "Selisih Gol",

        champion: "PEMENANG",
        congratulations: "Selamat!",
        empty: "Kosong",
        penalty: "Pinalti",

        selectDate: "Pilih Tanggal",
        selectTime: "Pilih Waktu",

        sun: "Mg",
        mon: "Sn",
        tue: "Sl",
        wed: "Rb",
        thu: "Km",
        fri: "Jm",
        sat: "Sb",

        today: "Hari Ini",
        clear: "Hapus",
        cancel: "Batal",
    },

    fr: {
        system: "Système",
        save: "Enregistrer",
        back: " ← Retour",
        standing: "Classement",
        matches: "Matchs",
        statisticsTeam: "Statistiques de l'équipe",
        general: "Général",
        knockout: "Élimination directe",

        chooseTeam: "Choisir une équipe",
        selectedTeams: "Équipes sélectionnées",
        homeaway: "Aller-Retour",
        singlemeeting: "Match unique",

        qualified: "Qualifié",
        qualifiedSecondary: "Qualifié secondaire",
        eliminated: "Éliminé",
        eliminatedSecondary: "Éliminé secondaire",

        knockoutBracket: "Tableau à élimination directe",
        createBracket: "Créer le tableau",
        deleteBracket: "Supprimer le tableau",

        searchTeam: "Rechercher une équipe, un tour ou un groupe",
        sortRound: "Par défaut",
        sortDate: "Trier par date",
        autoSchedule: "Planification automatique",

        randomDraw: "Tirage au sort",
        draw: "Tirer",

        setScore: "Définir le score",
        editScore: "Modifier le score",
        automaticScore: "Score automatique",
        statistics: "Statistiques",

        selectAllteam: "Sélectionner toutes les équipes",
        addTeams: "Ajouter des équipes",

        areYousure: "Êtes-vous sûr de vouloir supprimer ce classement ?",
        thisDeleteAll: "Cela supprimera également tous les éléments suivants :",
        cancel: "Annuler",
        delete: "Supprimer",

        matchSchedule: "Calendrier des matchs",
        date: "Date",
        time: "Heure",

        selectLocation: "Sélectionner un lieu",
        searchLocation: "Rechercher un lieu",

        deleteScore: "Supprimer le score",

        startDate: "Date de début",
        startTime: "Heure de début",
        minutesBetween: "Minutes entre les matchs",
        daysBetween: "Jours entre les tours",
        generate: "Générer",

        selectTeam: "Sélectionner une équipe",

        matchStatistics: "Statistiques du match",

        close: "Fermer",

        team: "Équipe",
        p: "MJ",
        w: "V",
        d: "N",
        l: "D",
        gF: "BP",
        gA: "BC",
        gD: "DB",
        pts: "Pts",

        possession: "Possession",
        shots: "Tirs",
        shotsOnTarget: "Tirs cadrés",
        corners: "Corners",
        fouls: "Fautes",
        yellowCards: "Cartons jaunes",
        redCards: "Cartons rouges",

        mostGoals: "Plus de buts",
        bestDefence: "Meilleure défense",
        mostWins: "Plus de victoires",
        mostDraws: "Plus de matchs nuls",
        mostLosses: "Plus de défaites",
        mostCleanSheets: "Plus de clean sheets",
        goalDifference: "Différence de buts",

        champion: "CHAMPION",
        congratulations: "Félicitations !",
        empty: "Vide",
        penalty: "Penalty",

        selectDate: "Sélectionner une date",
        selectTime: "Sélectionner une heure",

        sun: "Di",
        mon: "Lu",
        tue: "Ma",
        wed: "Me",
        thu: "Je",
        fri: "Ve",
        sat: "Sa",

        today: "Aujourd'hui",
        clear: "Effacer",
        cancel: "Annuler",
    },

    zh: {
        system: "赛制",
        save: "保存",
        back: " ← 返回",
        standing: "积分榜",
        matches: "比赛",
        statisticsTeam: "球队统计",
        general: "常规",
        knockout: "淘汰赛",

        chooseTeam: "选择球队",
        selectedTeams: "已选球队",
        homeaway: "主客场",
        singlemeeting: "单场比赛",

        qualified: "晋级",
        qualifiedSecondary: "次级晋级",
        eliminated: "淘汰",
        eliminatedSecondary: "次级淘汰",

        knockoutBracket: "淘汰赛对阵表",
        createBracket: "创建对阵表",
        deleteBracket: "删除对阵表",

        searchTeam: "搜索球队、轮次或小组",
        sortRound: "默认",
        sortDate: "按日期排序",
        autoSchedule: "自动安排赛程",

        randomDraw: "随机抽签",
        draw: "抽签",

        setScore: "设置比分",
        editScore: "编辑比分",
        automaticScore: "自动比分",
        statistics: "统计",

        selectAllteam: "选择所有球队",
        addTeams: "添加球队",

        areYousure: "确定要删除此积分榜吗？",
        thisDeleteAll: "这还将删除所有以下内容：",
        cancel: "取消",
        delete: "删除",

        matchSchedule: "比赛赛程",
        date: "日期",
        time: "时间",

        selectLocation: "选择场地",
        searchLocation: "搜索场地",

        deleteScore: "删除比分",

        startDate: "开始日期",
        startTime: "开始时间",
        minutesBetween: "比赛间隔分钟数",
        daysBetween: "轮次间隔天数",
        generate: "生成",

        selectTeam: "选择球队",

        matchStatistics: "比赛统计",

        close: "关闭",

        team: "球队",
        p: "场",
        w: "胜",
        d: "平",
        l: "负",
        gF: "进球",
        gA: "失球",
        gD: "净胜球",
        pts: "积分",

        possession: "控球率",
        shots: "射门",
        shotsOnTarget: "射正",
        corners: "角球",
        fouls: "犯规",
        yellowCards: "黄牌",
        redCards: "红牌",

        mostGoals: "进球最多",
        bestDefence: "最佳防守",
        mostWins: "胜场最多",
        mostDraws: "平局最多",
        mostLosses: "负场最多",
        mostCleanSheets: "零封最多",
        goalDifference: "净胜球",

        champion: "冠军",
        congratulations: "恭喜！",
        empty: "空",
        penalty: "点球",

        selectDate: "选择日期",
        selectTime: "选择时间",

        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六",

        today: "今天",
        clear: "清除",
        cancel: "取消",
    },

    ar: {
        system: "النظام",
        save: "حفظ",
        back: " ← رجوع",
        standing: "الترتيب",
        matches: "المباريات",
        statisticsTeam: "إحصائيات الفريق",
        general: "عام",
        knockout: "خروج المغلوب",

        chooseTeam: "اختيار الفريق",
        selectedTeams: "الفرق المختارة",
        homeaway: "ذهاب وإياب",
        singlemeeting: "مباراة واحدة",

        qualified: "متأهل",
        qualifiedSecondary: "متأهل ثانوي",
        eliminated: "مُستبعد",
        eliminatedSecondary: "مُستبعد ثانوي",

        knockoutBracket: "جدول خروج المغلوب",
        createBracket: "إنشاء الجدول",
        deleteBracket: "حذف الجدول",

        searchTeam: "البحث عن فريق أو جولة أو مجموعة",
        sortRound: "افتراضي",
        sortDate: "الترتيب حسب التاريخ",
        autoSchedule: "جدولة تلقائية",

        randomDraw: "قرعة عشوائية",
        draw: "سحب القرعة",

        setScore: "تحديد النتيجة",
        editScore: "تعديل النتيجة",
        automaticScore: "النتيجة التلقائية",
        statistics: "الإحصائيات",

        selectAllteam: "تحديد جميع الفرق",
        addTeams: "إضافة الفرق",

        areYousure: "هل أنت متأكد أنك تريد حذف هذا الترتيب؟",
        thisDeleteAll: "سيؤدي هذا أيضًا إلى حذف جميع ما يلي:",
        cancel: "إلغاء",
        delete: "حذف",

        matchSchedule: "جدول المباريات",
        date: "التاريخ",
        time: "الوقت",

        selectLocation: "اختيار الموقع",
        searchLocation: "البحث عن موقع",

        deleteScore: "حذف النتيجة",

        startDate: "تاريخ البدء",
        startTime: "وقت البدء",
        minutesBetween: "الدقائق بين المباريات",
        daysBetween: "الأيام بين الجولات",
        generate: "إنشاء",

        selectTeam: "اختيار الفريق",

        matchStatistics: "إحصائيات المباراة",

        close: "إغلاق",

        team: "الفريق",
        p: "لعب",
        w: "فوز",
        d: "تعادل",
        l: "خسارة",
        gF: "له",
        gA: "عليه",
        gD: "الفارق",
        pts: "نقاط",

        possession: "الاستحواذ",
        shots: "التسديدات",
        shotsOnTarget: "التسديدات على المرمى",
        corners: "الركلات الركنية",
        fouls: "الأخطاء",
        yellowCards: "البطاقات الصفراء",
        redCards: "البطاقات الحمراء",

        mostGoals: "أكثر الأهداف",
        bestDefence: "أفضل دفاع",
        mostWins: "أكثر الانتصارات",
        mostDraws: "أكثر التعادلات",
        mostLosses: "أكثر الهزائم",
        mostCleanSheets: "أكثر الشباك النظيفة",
        goalDifference: "فارق الأهداف",

        champion: "البطل",
        congratulations: "تهانينا!",
        empty: "فارغ",
        penalty: "ركلة جزاء",

        selectDate: "اختر التاريخ",
        selectTime: "اختر الوقت",

        sun: "أح",
        mon: "إث",
        tue: "ثل",
        wed: "أر",
        thu: "خم",
        fri: "جم",
        sat: "سب",

        today: "اليوم",
        clear: "مسح",
        cancel: "إلغاء",
    },

    ru: {
        system: "Система",
        save: "Сохранить",
        back: " ← Назад",
        standing: "Таблица",
        matches: "Матчи",
        statisticsTeam: "Статистика команды",
        general: "Общие",
        knockout: "Плей-офф",

        chooseTeam: "Выбрать команду",
        selectedTeams: "Выбранные команды",
        homeaway: "Дома и в гостях",
        singlemeeting: "Один матч",

        qualified: "Квалифицирован",
        qualifiedSecondary: "Дополнительная квалификация",
        eliminated: "Выбыл",
        eliminatedSecondary: "Дополнительное выбытие",

        knockoutBracket: "Сетка плей-офф",
        createBracket: "Создать сетку",
        deleteBracket: "Удалить сетку",

        searchTeam: "Поиск команды, раунда или группы",
        sortRound: "По умолчанию",
        sortDate: "Сортировать по дате",
        autoSchedule: "Автоматическое расписание",

        randomDraw: "Случайная жеребьёвка",
        draw: "Жеребьёвка",

        setScore: "Установить счёт",
        editScore: "Изменить счёт",
        automaticScore: "Автоматический счёт",
        statistics: "Статистика",

        selectAllteam: "Выбрать все команды",
        addTeams: "Добавить команды",

        areYousure: "Вы уверены, что хотите удалить эту таблицу?",
        thisDeleteAll: "Это также удалит все:",
        cancel: "Отмена",
        delete: "Удалить",

        matchSchedule: "Расписание матчей",
        date: "Дата",
        time: "Время",

        selectLocation: "Выбрать место",
        searchLocation: "Поиск места",

        deleteScore: "Удалить счёт",

        startDate: "Дата начала",
        startTime: "Время начала",
        minutesBetween: "Минут между матчами",
        daysBetween: "Дней между турами",
        generate: "Создать",

        selectTeam: "Выбрать команду",

        matchStatistics: "Статистика матча",

        close: "Закрыть",

        team: "Команда",
        p: "И",
        w: "В",
        d: "Н",
        l: "П",
        gF: "ЗМ",
        gA: "ПМ",
        gD: "РМ",
        pts: "О",

        possession: "Владение",
        shots: "Удары",
        shotsOnTarget: "Удары в створ",
        corners: "Угловые",
        fouls: "Фолы",
        yellowCards: "Жёлтые карточки",
        redCards: "Красные карточки",

        mostGoals: "Больше всего голов",
        bestDefence: "Лучшая защита",
        mostWins: "Больше всего побед",
        mostDraws: "Больше всего ничьих",
        mostLosses: "Больше всего поражений",
        mostCleanSheets: "Больше всего сухих матчей",
        goalDifference: "Разница мячей",

        champion: "ЧЕМПИОН",
        congratulations: "Поздравляем!",
        empty: "Пусто",
        penalty: "Пенальти",

        selectDate: "Выбрать дату",
        selectTime: "Выбрать время",

        sun: "Вс",
        mon: "Пн",
        tue: "Вт",
        wed: "Ср",
        thu: "Чт",
        fri: "Пт",
        sat: "Сб",

        today: "Сегодня",
        clear: "Очистить",
        cancel: "Отмена",
    },

    es: {
        system: "Sistema",
        save: "Guardar",
        back: " ← Volver",
        standing: "Clasificación",
        matches: "Partidos",
        statisticsTeam: "Estadísticas del equipo",
        general: "General",
        knockout: "Eliminación directa",

        chooseTeam: "Elegir equipo",
        selectedTeams: "Equipos seleccionados",
        homeaway: "Ida y vuelta",
        singlemeeting: "Partido único",

        qualified: "Clasificado",
        qualifiedSecondary: "Clasificado secundario",
        eliminated: "Eliminado",
        eliminatedSecondary: "Eliminado secundario",

        knockoutBracket: "Cuadro de eliminación directa",
        createBracket: "Crear cuadro",
        deleteBracket: "Eliminar cuadro",

        searchTeam: "Buscar equipo, ronda o grupo",
        sortRound: "Predeterminado",
        sortDate: "Ordenar por fecha",
        autoSchedule: "Programación automática",

        randomDraw: "Sorteo aleatorio",
        draw: "Sortear",

        setScore: "Establecer resultado",
        editScore: "Editar resultado",
        automaticScore: "Resultado automático",
        statistics: "Estadísticas",

        selectAllteam: "Seleccionar todos los equipos",
        addTeams: "Añadir equipos",

        areYousure: "¿Estás seguro de que quieres eliminar esta clasificación?",
        thisDeleteAll: "Esto también eliminará todos los siguientes elementos:",
        cancel: "Cancelar",
        delete: "Eliminar",

        matchSchedule: "Calendario de partidos",
        date: "Fecha",
        time: "Hora",

        selectLocation: "Seleccionar ubicación",
        searchLocation: "Buscar ubicación",

        deleteScore: "Eliminar resultado",

        startDate: "Fecha de inicio",
        startTime: "Hora de inicio",
        minutesBetween: "Minutos entre partidos",
        daysBetween: "Días entre rondas",
        generate: "Generar",

        selectTeam: "Seleccionar equipo",

        matchStatistics: "Estadísticas del partido",

        close: "Cerrar",

        team: "Equipo",
        p: "PJ",
        w: "G",
        d: "E",
        l: "P",
        gF: "GF",
        gA: "GC",
        gD: "DG",
        pts: "Pts",

        possession: "Posesión",
        shots: "Tiros",
        shotsOnTarget: "Tiros a puerta",
        corners: "Saques de esquina",
        fouls: "Faltas",
        yellowCards: "Tarjetas amarillas",
        redCards: "Tarjetas rojas",

        mostGoals: "Más goles",
        bestDefence: "Mejor defensa",
        mostWins: "Más victorias",
        mostDraws: "Más empates",
        mostLosses: "Más derrotas",
        mostCleanSheets: "Más porterías a cero",
        goalDifference: "Diferencia de goles",

        champion: "CAMPEÓN",
        congratulations: "¡Felicidades!",
        empty: "Vacío",
        penalty: "Penalti",

        selectDate: "Seleccionar fecha",
        selectTime: "Seleccionar hora",

        sun: "Do",
        mon: "Lu",
        tue: "Ma",
        wed: "Mi",
        thu: "Ju",
        fri: "Vi",
        sat: "Sá",

        today: "Hoy",
        clear: "Limpiar",
        cancel: "Cancelar",
    },

};

function applyLanguage(language) {

    const dictionary = translations[language];

    if (!dictionary) return;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key = element.dataset.i18n;

            if (!dictionary[key]) return;

            if (
                element.tagName === "INPUT" ||
                element.tagName === "TEXTAREA"
            ) {

                element.placeholder =
                    dictionary[key];

                return;
            }

            element.textContent =
                dictionary[key];

        });

}

function setLanguageKey(element, key) {

    element.dataset.i18n = key;

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

function initializeLanguage() {

    const savedLanguage =
        localStorage.getItem("language") || "en";

    applyLanguage(savedLanguage);

}

initializeLanguage();

const matchSortCustom =
    document.querySelector(".match-sort-custom");

const matchSortTrigger =
    matchSortCustom.querySelector(
        ".custom-select-trigger"
    );

const matchSortValue =
    matchSortCustom.querySelector(
        ".custom-select-value"
    );

const matchSortOptions =
    matchSortCustom.querySelectorAll(
        ".custom-select-option"
    );


matchSortTrigger.addEventListener(
    "click",
    function () {

        matchSortCustom.classList.toggle(
            "open"
        );

    }
);

matchSortOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                const value =
                    option.dataset.value;


                matchSort.value =
                    value;


                matchSortValue.textContent =
                    option.textContent.trim();


                matchSortValue.dataset.i18n =
                    option.dataset.i18n;


                matchSortOptions.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                option.classList.add(
                    "active"
                );


                matchSortCustom.classList.remove(
                    "open"
                );


                renderMatches();

            }
        );

    }
);

document.addEventListener(
    "click",
    function (event) {

        if (
            !matchSortCustom.contains(
                event.target
            )
        ) {

            matchSortCustom.classList.remove(
                "open"
            );

        }

    }
);

navItems.forEach(function (button) {

    button.addEventListener("click", function () {

        panels.forEach(function (panel) {
            panel.style.display = "none";
        });

        const targetPanel =
            document.getElementById(button.dataset.panel);

        targetPanel.style.display = "block";


        /*
         * =====================================
         * REFRESH KNOCKOUT CONNECTOR
         * SAAT STANDING DIBUKA
         * =====================================
         */

        if (button.dataset.panel === "standing-panel") {

            requestAnimationFrame(function () {

                requestAnimationFrame(function () {

                    if (
                        document.getElementById(
                            "knockout-bracket"
                        )
                    ) {

                        drawKnockoutConnectors();

                    }

                });

            });

        }

        navItems.forEach(function (item) {
            item.classList.remove("nav-items-active");
        });

        button.classList.add("nav-items-active");

        localStorage.setItem("activeGroupPanel", button.dataset.panel);

    });

});

const activePanel =
    localStorage.getItem("activeGroupPanel") || "system-panel";

panels.forEach(function (panel) {
    panel.style.display = "none";
});

document.getElementById(activePanel).style.display = "block";

navItems.forEach(function (button) {

    button.classList.remove("nav-items-active");

    if (button.dataset.panel === activePanel) {

        button.classList.add("nav-items-active");

    }

});

const toast = document.getElementById("toast");

const toastIcon = document.getElementById("toast-icon");

const toastMessage = document.getElementById("toast-message");

function showToast(message, type) {

    toast.className = "toast";

    toast.classList.add(type);

    if (type === "success") {

        toastIcon.className = "fa-solid fa-circle-check";

    }

    if (type === "warning") {

        toastIcon.className = "fa-solid fa-triangle-exclamation";

    }

    if (type === "error") {

        toastIcon.className = "fa-solid fa-circle-xmark";

    }

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}

const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", function () {

    window.location.href = "dashboard.html";

});

const tournamentId = params.get("tournament");

const systemId = params.get("system");

const teams = JSON.parse(localStorage.getItem("teams")) || [];

const tournaments =
    JSON.parse(localStorage.getItem("tournaments")) || [];

const tournament = tournaments.find(function (tournament) {

    return tournament.id === tournamentId;

});

const system = tournament.systems.find(function (system) {

    return system.id === systemId;

});

let selectedTeams = [...system.teams];

let selectedMeetingType = system.meetingType;

function updateMeetingTypeButtons() {

    homeAwayBtn.classList.remove("active");

    singleMeetingBtn.classList.remove("active");

    if (selectedMeetingType === "homeAway") {

        homeAwayBtn.classList.add("active");

    } else {

        singleMeetingBtn.classList.add("active");

    }

}

function translateSystemName(name) {

    const language =
        localStorage.getItem("language") || "en";

    const systemTranslations = {

        en: {
            League: "League",
            Group: "Group",
            "Knock-out": "Knock-out"
        },

        id: {
            League: "Liga",
            Group: "Grup",
            "Knock-out": "Gugur"
        },

        zh: {
            League: "联赛",
            Group: "小组赛",
            "Knock-out": "淘汰赛"
        },

        ru: {
            League: "Лига",
            Group: "Группа",
            "Knock-out": "Плей-офф"
        },

        ar: {
            League: "الدوري",
            Group: "المجموعة",
            "Knock-out": "خروج المغلوب"
        },

        es: {
            League: "Liga",
            Group: "Grupo",
            "Knock-out": "Eliminatoria"
        },

        fr: {
            League: "Ligue",
            Group: "Groupe",
            "Knock-out": "Élimination directe"
        }

    };

    return (
        systemTranslations[language]?.[name]
        || name
    );

}

document.getElementById("system-name").textContent =
    translateSystemName(system.name);

const systemNameInput = document.getElementById("system-input-name");

systemNameInput.value = system.name;

const teamCounter = document.getElementById("team-counter");

function updateTeamCounter() {

    teamCounter.textContent =
        `${selectedTeams.length} / 64`;

}

updateTeamCounter();

const homeAwayBtn = document.getElementById("home-away-btn");

homeAwayBtn.addEventListener("click", function () {

    selectedMeetingType = "homeAway";

    updateMeetingTypeButtons();

});

const singleMeetingBtn = document.getElementById("single-meeting-btn");

singleMeetingBtn.addEventListener("click", function () {

    selectedMeetingType = "single";

    updateMeetingTypeButtons();

});

updateMeetingTypeButtons();

const saveSystemBtn = document.getElementById("save-system-btn");

const addSystemBtn = document.getElementById("add-system-btn");

function saveTeams() {

    system.teams = [...selectedTeams];

    selectedTeams = [...system.teams];

    localStorage.setItem(
        "tournaments",
        JSON.stringify(tournaments)
    );

    updateTeamCounter();

}

addSystemBtn.addEventListener("click", function () {

    saveTeams();

    showToast("Teams updated!", "success");

    chooseTeamModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function saveSystem() {

    if (systemNameInput.value.trim() === "") {

        showToast(
            "System name cannot be empty!",
            "warning"
        );

        return;

    }

    system.name = systemNameInput.value.trim();

    system.meetingType = selectedMeetingType;

    localStorage.setItem(
        "tournaments",
        JSON.stringify(tournaments)
    );

    updateTeamCounter();

    document.getElementById("system-name").textContent =
        system.name;

}

saveSystemBtn.addEventListener("click", function () {

    saveSystem();

    showToast("System saved!", "success");

});

const chooseTeamBtn = document.getElementById("choose-team-btn");

const chooseTeamModal = document.getElementById("choose-team-modal");

const closeChooseTeamBtn = document.getElementById("close-choose-team-btn");

const teamListContainer = document.getElementById("team-list-container");

chooseTeamBtn.addEventListener("click", function () {

    selectedTeams = [...system.teams];

    searchTeamSystem.value = "";

    renderTeamList();

    chooseTeamModal.classList.add("show");

    document.body.classList.add("modal-open");

});

closeChooseTeamBtn.addEventListener("click", function () {

    selectedTeams = [...system.teams];

    selectedMeetingType = system.meetingType;

    updateMeetingTypeButtons();

    updateTeamCounter();

    renderTeamList(searchTeamSystem.value);

    chooseTeamModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function getTeamLogo(team) {

    if (team.logo.type === "icon") {

        return `
        <i class="${team.logo.value}"></i>
        `;

    }

    if (team.logo.type === "country") {

        return `
        <img
            src="assets/flags/${team.logo.value}.svg"
            class="standing-team-logo">
        `;

    }

    return `
    <img
        src="${team.logo.value}"
        class="standing-team-logo">
    `;

}

function renderTeamList(keyword = "") {

    teamListContainer.innerHTML = "";

    teams.forEach(function (team) {

        if (!team.name.toLowerCase().includes(keyword.toLowerCase())) {

            return;

        }

        let logo = "";

        if (team.logo.type === "icon") {

            logo = `<i class="${team.logo.value}"></i>`;

        }

        else if (team.logo.type === "country") {

            logo = `
        <img
            src="assets/flags/${team.logo.value}.svg"
            class="team-logo">
    `;

        }

        else {

            logo = `
        <img
            src="${team.logo.value}"
            class="team-logo">
    `;

        }

        teamListContainer.innerHTML += `

        <label class="team-item">

            <input
                type="checkbox"
                class="team-checkbox"
                value="${team.id}"
                ${selectedTeams.includes(team.id) ? "checked" : ""}>

            <div class="team-info">

                ${logo}

                <span>${team.name}</span>

            </div>

        </label>

        `;

    });

}

teamListContainer.addEventListener("change", function (event) {

    if (!event.target.classList.contains("team-checkbox")) return;

    const teamId = event.target.value;

    if (event.target.checked) {

        if (selectedTeams.length >= 64) {

            event.target.checked = false;

            showToast("Maximum 64 teams!", "warning");

            return;

        }

        if (!selectedTeams.includes(teamId)) {

            selectedTeams.push(teamId);

        }

    } else {

        selectedTeams = selectedTeams.filter(function (id) {

            return id !== teamId;

        });

    }

    updateTeamCounter();

});

const searchTeamSystem = document.getElementById("search-team-system");

searchTeamSystem.addEventListener("input", function () {

    renderTeamList(this.value);

});

function saveTournament() {

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    localStorage.setItem(
        "teams",
        JSON.stringify(teams)
    );

}

function selectAllTeams(options) {

    options.selectedTeams.length = 0;

    options.teams
        .slice(0, options.maxTeams)
        .forEach(function (team) {

            options.selectedTeams.push(team.id);

        });

    if (typeof options.render === "function") {

        options.render();

    }

    if (typeof options.updateCounter === "function") {

        options.updateCounter();

    }

}

const selectAllTeamsBtn =
    document.getElementById("select-all-teams-btn");

selectAllTeamsBtn.addEventListener("click", function () {

    selectAllTeams({

        teams: teams,

        maxTeams: 64,

        selectedTeams: selectedTeams,

        render: function () {

            renderTeamList(searchTeamSystem.value);

        },

        updateCounter: function () {

            updateTeamCounter();

        }

    });

});

const createKnockoutBtn = document.getElementById("create-knockout-btn");

const deleteKnockoutBtn = document.getElementById("delete-knockout-btn");

const deleteStandingModal = document.getElementById("delete-standing-modal");

const cancelDeleteStandingBtn = document.getElementById("cancel-delete-standing-btn");

const confirmDeleteStandingBtn = document.getElementById("confirm-delete-standing-btn");

deleteKnockoutBtn.addEventListener("click", function () {

    deleteStandingModal.classList.add("show");

    document.body.classList.add("modal-open");

});

cancelDeleteStandingBtn.addEventListener("click", function () {

    deleteStandingModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function resetKnockoutState() {

    system.knockout = {

        created: false,

        rounds: []

    };

    system.matches = [];

    document.getElementById(
        "knockout-bracket"
    ).innerHTML = "";

    teams.forEach(function (team) {

        team.statistics = {

            goalsFor: 0,
            goalsAgainst: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            cleanSheets: 0,
            matches: 0

        }

    });

    saveTournament();

    renderKnockoutBracket();

    renderMatches();

    renderTeamStatistics();

    updateKnockoutButtons();

}

function deleteKnockout() {

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    resetKnockoutState();

}

confirmDeleteStandingBtn.addEventListener("click", function () {

    deleteKnockout();

    deleteStandingModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Bracket deleted!",
        "success"
    );

}

);

createKnockoutBtn.addEventListener("click", function () {

    initializeKnockout();

    renderKnockoutBracket();

    renderMatches();

    showToast(
        "Bracket created!",
        "success"
    );

});

function updateKnockoutButtons() {

    const created =
        system.knockout &&
        system.knockout.created;

    createKnockoutBtn.style.display =
        created
            ? "none"
            : "inline-flex";

    deleteKnockoutBtn.style.display =
        created
            ? "inline-flex"
            : "none";

}

function initializeKnockout() {

    if (selectedTeams.length < 2) {

        showToast(
            "Minimum 2 teams!",
            "warning"
        );

        return;

    }

    let bracketSize = 2;

    while (bracketSize < selectedTeams.length) {

        bracketSize *= 2;

    }

    system.knockout = {

        created: true,

        bracketSize: bracketSize,

        rounds: [],

        championShown: false,

    };

    system.matches = [];

    buildBracket();

    fillFirstRound();

    autoByeFirstRound();

    renderKnockoutBracket();

    recalculateTeamStatistics();

    renderTeamStatistics();

    renderMatches();

    saveTournament();

    updateKnockoutButtons();

}

function buildBracket() {

    system.knockout.rounds = [];

    system.matches = [];

    const roundNames = {

        64: "Round of 64",

        32: "Round of 32",

        16: "Round of 16",

        8: "Quarter Final",

        4: "Semi Final",

        2: "Final"

    };

    let teams = system.knockout.bracketSize;

    while (teams >= 2) {

        const round = {

            name: roundNames[teams],

            matches: []

        };

        for (let i = 0; i < teams / 2; i++) {

            const match = {

                id: crypto.randomUUID(),

                homeTeamId: null,
                awayTeamId: null,

                winner: null,
                played: false,

                winnerSourceHome: null,
                winnerSourceAway: null,

                date: "",
                time: "",
                location: "",

                legs: [

                    {
                        id: crypto.randomUUID(),

                        meeting: 1,

                        homeScore: null,
                        awayScore: null,

                        homePenalty: null,
                        awayPenalty: null,

                        played: false
                    },

                    {
                        id: crypto.randomUUID(),

                        meeting: 2,

                        homeScore: null,
                        awayScore: null,

                        homePenalty: null,
                        awayPenalty: null,

                        played: false
                    }

                ]

            };

            round.matches.push(match);

            system.matches.push({

                id: match.id,

                round: round.name,

                homeTeamId: null,

                awayTeamId: null,

                meeting: 1,

                homeScore: null,

                awayScore: null,

                homePenalty: null,

                awayPenalty: null,

                winner: null,

                played: false,

                date: "",

                time: "",

                location: ""

            })

        }

        system.knockout.rounds.push(round);

        teams /= 2;

    }

}

function fillFirstRound() {

    const firstRound =
        system.knockout.rounds[0];

    const shuffled = [...selectedTeams];

    shuffled.sort(function () {

        return Math.random() - 0.5;

    });

    while (
        shuffled.length <
        system.knockout.bracketSize
    ) {

        shuffled.push(null);

    }

    for (
        let i = 0;
        i < firstRound.matches.length;
        i++
    ) {

        const match =
            firstRound.matches[i];

        match.homeTeamId =
            shuffled[i * 2];

        match.awayTeamId =
            shuffled[i * 2 + 1];

        const matchData = system.matches.find(function (m) {

            return m.id === match.id;

        });

        if (matchData) {

            matchData.homeTeamId = match.homeTeamId;
            matchData.awayTeamId = match.awayTeamId;

        }

    }

}

function rebuildBracket() {

    const oldMatches = JSON.parse(
        JSON.stringify(system.matches)
    );

    let bracketSize = 2;

    while (bracketSize < selectedTeams.length) {

        bracketSize *= 2;

    }

    system.knockout.rounds = [];
    system.matches = [];

    buildBracket(bracketSize);

    fillFirstRound();

    autoByeFirstRound();

    oldMatches.forEach(function (oldMatch) {

        const current =
            system.matches.find(function (m) {

                return (
                    m.round === oldMatch.round &&
                    m.homeTeamId === oldMatch.homeTeamId &&
                    m.awayTeamId === oldMatch.awayTeamId
                );

            });

        if (!current) return;

        current.homeScore = oldMatch.homeScore;
        current.awayScore = oldMatch.awayScore;
        current.played = oldMatch.played;
        current.winner = oldMatch.winner;

        if (current.played) {

            const roundIndex =
                system.knockout.rounds.findIndex(function (r) {

                    return r.name === current.round;

                });

            const matchIndex =
                system.knockout.rounds[roundIndex]
                    .matches.findIndex(function (mt) {

                        return mt.id === current.id;

                    });

            const km =
                system.knockout.rounds[roundIndex]
                    .matches[matchIndex];

            km.homeScore = current.homeScore;
            km.awayScore = current.awayScore;
            km.played = true;
            km.winner = current.winner;

            moveWinner(
                roundIndex,
                matchIndex,
                current.winner
            );

        }

    });

    autoByeFirstRound();

}

function autoByeFirstRound() {

    const firstRound =
        system.knockout.rounds[0];

    firstRound.matches.forEach(function (match, index) {

        let winner = null;

        if (match.homeTeamId && !match.awayTeamId) {

            winner = match.homeTeamId;

        }

        else if (!match.homeTeamId && match.awayTeamId) {

            winner = match.awayTeamId;

        }

        else {

            return;

        }

        match.played = true;

        match.winner = winner;

        const matchData =
            system.matches.find(function (item) {

                return item.id === match.id;

            });

        if (matchData) {

            matchData.played = true;

            matchData.winner = winner;

        }

        moveWinner(0, index, winner);

    });

}

function moveWinner(roundIndex, matchIndex, winnerId) {

    // Kalau final, tidak ada round berikutnya
    if (roundIndex >= system.knockout.rounds.length - 1) {

        return;

    }

    const nextRound =
        system.knockout.rounds[roundIndex + 1];

    const nextMatch =
        nextRound.matches[Math.floor(matchIndex / 2)];

    // Slot tujuan
    const isHome =
        matchIndex % 2 === 0;

    // Simpan asal winner
    const source =
        roundIndex + "-" + matchIndex;

    /*
        Jika slot ini sebelumnya
        berasal dari match yang sama,
        kosongkan dulu.
    */

    if (isHome) {

        if (nextMatch.winnerSourceHome === source) {

            nextMatch.homeTeamId = null;

        }
        else {

            if (nextMatch.winnerSourceAway === source) {

                nextMatch.awayTeamId = null;

            }

        }

    }

    // Masukkan winner baru
    if (isHome) {

        nextMatch.homeTeamId = winnerId;

        nextMatch.winnerSourceHome = source;

    }
    else {

        nextMatch.awayTeamId = winnerId;

        nextMatch.winnerSourceAway = source;

    }

    // Reset data pertandingan berikutnya
    nextMatch.played = false;

    nextMatch.winner = null;

    nextMatch.homeScore = null;
    nextMatch.awayScore = null;

    nextMatch.homePenalty = null;
    nextMatch.awayPenalty = null;

    // Reset seluruh leg jika Home Away
    if (nextMatch.legs) {

        nextMatch.legs.forEach(function (leg) {

            leg.homeScore = null;
            leg.awayScore = null;

            leg.homePenalty = null;
            leg.awayPenalty = null;

            leg.played = false;

        });

    }

    // Update system.matches
    const matchData =
        system.matches.find(function (item) {

            return item.id === nextMatch.id;

        });

    if (matchData) {

        matchData.homeTeamId =
            nextMatch.homeTeamId;

        matchData.awayTeamId =
            nextMatch.awayTeamId;

        matchData.homeScore = null;
        matchData.awayScore = null;

        matchData.homePenalty = null;
        matchData.awayPenalty = null;

        matchData.played = false;

        matchData.winner = null;

    }

}

const championModal =
    document.getElementById("champion-modal");

const championContent =
    document.getElementById("champion-content");

const closeChampionBtn =
    document.getElementById("close-champion-btn");

function checkChampion() {

    const finalRound =
        system.knockout.rounds[
        system.knockout.rounds.length - 1
        ];

    const finalMatch =
        finalRound.matches[0];

    if (!finalMatch.winner) {

        return;

    }

    if (system.knockout.championShown) {

        return;

    }

    system.knockout.championShown = true;

    showChampion(finalMatch.winner);

}

function showChampion(teamId) {

    const champion =
        teams.find(function (team) {

            return team.id === teamId;

        });

    if (!champion) {

        return;

    }

    const finalRound =
        system.knockout.rounds[
        system.knockout.rounds.length - 1
        ];

    const finalMatch =
        finalRound.matches[0];

    const runnerUp =
        teams.find(function (team) {

            return team.id ===
                (finalMatch.homeTeamId === teamId
                    ? finalMatch.awayTeamId
                    : finalMatch.homeTeamId);

        });

    championContent.innerHTML = `

        <h1>🏆</h1>

        ${getTeamLogo(champion)}

        <h2 data-i18n="champion">

            CHAMPION

        </h2>

        <h1 class="champion-name">

            ${champion.name}

        </h1>

        <p> Final </p>

        <h3> ${champion.name} : ${runnerUp.name} </h3>

        <p data-i18n="congratulations">

            Congratulations!

        </p>

    `;

    launchConfetti();

    championModal.classList.add("show");

    document.body.classList.add("modal-open");

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

closeChampionBtn.addEventListener("click", function () {

    championModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function launchConfetti() {

    const container =
        document.getElementById("confetti-container");

    const colors = [

        "#FFD700",

        "#FF3B30",

        "#007AFF",

        "#34C759",

        "#FF9500",

        "#AF52DE"

    ];

    for (let i = 0; i < 180; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            colors[
            Math.floor(
                Math.random() * colors.length
            )
            ];

        piece.style.animationDuration =
            (3 + Math.random() * 2) + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

        setTimeout(function () {

            piece.remove();

        }, 5000);

    }

}

function determineWinner(match, leg) {

    // SINGLE
    if (system.meetingType === "single") {

        if (leg.homeScore > leg.awayScore) {

            return match.homeTeamId;

        }

        if (leg.awayScore > leg.homeScore) {

            return match.awayTeamId;

        }

        if (
            leg.homePenalty == null ||
            leg.awayPenalty == null
        ) {

            return null;

        }

        return leg.homePenalty > leg.awayPenalty
            ? match.homeTeamId
            : match.awayTeamId;

    }

    // HOME AWAY

    if (leg.meeting === 1) {

        return null;

    }

    const aggregate =
        calculateAggregate(match.id);

    if (!aggregate) {

        return null;

    }

    if (aggregate.totalA > aggregate.totalB) {

        return aggregate.teamA;

    }

    if (aggregate.totalB > aggregate.totalA) {

        return aggregate.teamB;

    }

    if (
        leg.homePenalty == null ||
        leg.awayPenalty == null
    ) {

        return null;

    }

    return leg.homePenalty > leg.awayPenalty
        ? aggregate.teamB
        : aggregate.teamA;

}

function renderKnockoutBracket() {

    const container =
        document.getElementById("knockout-bracket");

    container.innerHTML = "";

    if (!system.knockout) {
        return;
    }


    system.knockout.rounds.forEach(function (
        round,
        roundIndex
    ) {

        const roundDiv =
            document.createElement("div");

        roundDiv.className =
            "knockout-round";

        roundDiv.dataset.round =
            roundIndex;


        const title =
            document.createElement("h2");

        title.textContent =
            round.name;

        roundDiv.appendChild(title);


        /*
         * ================================
         * MATCH
         * ================================
         */

        round.matches.forEach(function (
            match,
            matchIndex
        ) {

            const card =
                createKnockoutMatchCard(
                    match,
                    roundIndex,
                    matchIndex
                );

            roundDiv.appendChild(card);

        });


        container.appendChild(roundDiv);

    });


    /*
     * Tunggu DOM selesai dihitung
     * kemudian atur posisi bracket.
     */

    requestAnimationFrame(function () {

        layoutKnockoutBracket();

    });

}

function layoutKnockoutBracket() {

    const container =
        document.getElementById("knockout-bracket");

    const rounds =
        container.querySelectorAll(
            ".knockout-round"
        );


    if (!rounds.length) {
        return;
    }

    /*
     * ================================
     * UKURAN BRACKET
     * ================================
     */

    const cardHeight = 116;

    const baseGap = 44;

    const slotHeight =
        cardHeight + baseGap;

    const titleHeight = 55;


    /*
     * ================================
     * JUMLAH MATCH ROUND PERTAMA
     * ================================
     */

    const firstRound =
        rounds[0];

    const firstMatches =
        firstRound.querySelectorAll(
            ":scope > .knockout-match"
        );


    const firstMatchCount =
        firstMatches.length;


    /*
     * Tinggi seluruh bracket
     */

    const bracketHeight =
        titleHeight +
        (
            firstMatchCount *
            cardHeight
        ) +
        (
            Math.max(
                0,
                firstMatchCount - 1
            ) *
            baseGap
        );


    /*
     * ================================
     * SETTING ROUND
     * ================================
     */

    rounds.forEach(function (
        round,
        roundIndex
    ) {

        round.style.height =
            bracketHeight + "px";


        round.style.position =
            "relative";


        const matches =
            round.querySelectorAll(
                ":scope > .knockout-match"
            );


        /*
         * ================================
         * JARAK MATCH PADA ROUND
         * ================================
         */

        const spacing =
            slotHeight *
            Math.pow(
                2,
                roundIndex
            );


        /*
         * Offset round
         *
         * Round 1 = 0
         * Round 2 = setengah slot
         * Round 3 = lebih ke tengah
         * dst.
         */

        const offset =
            (
                spacing -
                slotHeight
            ) / 2;


        matches.forEach(function (
            match,
            matchIndex
        ) {

            const top =
                titleHeight +
                offset +
                (
                    matchIndex *
                    spacing
                );


            match.style.position =
                "absolute";


            match.style.top =
                top + "px";


            match.style.left =
                "0";


            match.style.margin =
                "0";

        });

    });


    /*
     * ================================
     * HEIGHT CONTAINER
     * ================================
     */

    container.style.minHeight =
        bracketHeight + 30 + "px";


    /*
     * ================================
     * CONNECTOR
     * ================================
     */

    drawKnockoutConnectors();

}

function drawKnockoutConnectors() {

    const container =
        document.getElementById("knockout-bracket");

    if (!container) {
        return;
    }


    /*
     * =====================================
     * HAPUS CONNECTOR LAMA
     * =====================================
     */

    container
        .querySelectorAll(".bracket-connector")
        .forEach(function (line) {

            line.remove();

        });


    const rounds =
        container.querySelectorAll(".knockout-round");


    if (rounds.length < 2) {
        return;
    }


    /*
     * =====================================
     * POSISI CONTAINER
     * =====================================
     */

    const containerRect =
        container.getBoundingClientRect();


    /*
     * =====================================
     * FUNGSI BUAT GARIS
     * =====================================
     */

    function createLine(
        className,
        left,
        top,
        width,
        height
    ) {

        const line =
            document.createElement("div");

        line.className =
            "bracket-connector " + className;

        line.style.left =
            left + "px";

        line.style.top =
            top + "px";

        if (width !== undefined) {

            line.style.width =
                width + "px";

        }

        if (height !== undefined) {

            line.style.height =
                height + "px";

        }

        container.appendChild(line);

        return line;

    }


    /*
     * =====================================
     * SETIAP ROUND
     * =====================================
     */

    rounds.forEach(function (
        round,
        roundIndex
    ) {

        /*
         * Round terakhir tidak punya
         * connector ke round berikutnya.
         */

        if (
            roundIndex >=
            rounds.length - 1
        ) {

            return;

        }


        const nextRound =
            rounds[roundIndex + 1];


        const matches =
            round.querySelectorAll(
                ":scope > .knockout-match"
            );


        const nextMatches =
            nextRound.querySelectorAll(
                ":scope > .knockout-match"
            );


        /*
         * =================================
         * SETIAP 2 MATCH → 1 MATCH
         * =================================
         */

        for (
            let i = 0;
            i < matches.length;
            i += 2
        ) {

            const match1 =
                matches[i];

            const match2 =
                matches[i + 1];

            const nextMatch =
                nextMatches[
                Math.floor(i / 2)
                ];


            if (
                !match1 ||
                !match2 ||
                !nextMatch
            ) {

                continue;

            }


            /*
             * ==============================
             * RECT CARD
             * ==============================
             */

            const rect1 =
                match1.getBoundingClientRect();

            const rect2 =
                match2.getBoundingClientRect();

            const nextRect =
                nextMatch.getBoundingClientRect();


            /*
             * ==============================
             * KOORDINAT RELATIF CONTAINER
             * ==============================
             */

            const right1 =
                rect1.right -
                containerRect.left +
                container.scrollLeft;


            const right2 =
                rect2.right -
                containerRect.left +
                container.scrollLeft;


            const nextLeft =
                nextRect.left -
                containerRect.left +
                container.scrollLeft;


            const y1 =
                rect1.top -
                containerRect.top +
                container.scrollTop +
                (
                    rect1.height / 2
                );


            const y2 =
                rect2.top -
                containerRect.top +
                container.scrollTop +
                (
                    rect2.height / 2
                );


            const middle =
                (y1 + y2) / 2;


            /*
             * ==============================
             * JARAK GARIS
             * ==============================
             *
             * Card → vertical connector
             * → next card
             */

            const verticalX =
                (
                    Math.min(
                        right1,
                        right2
                    ) +
                    nextLeft
                ) / 2;


            /*
             * ==============================
             * HORIZONTAL MATCH 1
             * ==============================
             */

            createLine(
                "bracket-horizontal",
                right1,
                y1,
                verticalX - right1,
                2
            );


            /*
             * ==============================
             * HORIZONTAL MATCH 2
             * ==============================
             */

            createLine(
                "bracket-horizontal",
                right2,
                y2,
                verticalX - right2,
                2
            );


            /*
             * ==============================
             * VERTICAL
             * ==============================
             */

            createLine(
                "bracket-vertical",
                verticalX,
                Math.min(y1, y2),
                2,
                Math.abs(y2 - y1)
            );


            /*
             * ==============================
             * HORIZONTAL KE ROUND BERIKUTNYA
             * ==============================
             */

            createLine(
                "bracket-horizontal",
                verticalX,
                middle,
                nextLeft - verticalX,
                2
            );

        }

    });

}

function createKnockoutMatchCard(
    match,
    roundIndex,
    matchIndex
) {

    const home =
        teams.find(function (team) {

            return team.id === match.homeTeamId;

        });


    const away =
        teams.find(function (team) {

            return team.id === match.awayTeamId;

        });


    let displayHomeScore =
        match.homeScore;

    let displayAwayScore =
        match.awayScore;


    /*
     * ================================
     * HOME / AWAY AGGREGATE
     * ================================
     */

    if (system.meetingType === "homeAway") {

        const aggregate =
            calculateAggregate(match.id);


        if (aggregate) {

            displayHomeScore =
                aggregate.totalA;

            displayAwayScore =
                aggregate.totalB;

        }

        else {

            const leg1 =
                match.legs[0];

            const leg2 =
                match.legs[1];


            displayHomeScore =
                (leg1.homeScore ?? 0) +
                (leg2.awayScore ?? 0);


            displayAwayScore =
                (leg1.awayScore ?? 0) +
                (leg2.homeScore ?? 0);

        }

    }


    /*
     * ================================
     * PENALTY
     * ================================
     */

    const showPenalty =
        shouldShowPenalty(match);


    const penaltyHome =
        system.meetingType === "single"
            ? match.legs[0].homePenalty
            : match.legs[1].awayPenalty;


    const penaltyAway =
        system.meetingType === "single"
            ? match.legs[0].awayPenalty
            : match.legs[1].homePenalty;


    /*
     * ================================
     * ELIMINATED
     * ================================
     */

    const homeEliminated =
        match.played &&
        match.winner &&
        match.winner !== match.homeTeamId;


    const awayEliminated =
        match.played &&
        match.winner &&
        match.winner !== match.awayTeamId;


    /*
     * ================================
     * CARD
     * ================================
     */

    const card =
        document.createElement("div");


    card.className =
        "knockout-match";


    card.dataset.round =
        roundIndex;


    card.dataset.match =
        matchIndex;


    card.innerHTML = `

        <div class="knockout-team ${homeEliminated ? "eliminated" : ""}">

            ${home ? getTeamLogo(home) : ""}

            <span>
                ${home ? home.name : "BYE"}
            </span>

            <strong>

                ${displayHomeScore ?? "-"}

                ${showPenalty &&
            penaltyHome != null
            ? `(${penaltyHome})`
            : ""
        }

            </strong>

        </div>


        <div class="knockout-team ${awayEliminated ? "eliminated" : ""}">

            ${away ? getTeamLogo(away) : ""}

            <span>
                ${away ? away.name : "BYE"}
            </span>

            <strong>

                ${displayAwayScore ?? "-"}

                ${showPenalty &&
            penaltyAway != null
            ? `(${penaltyAway})`
            : ""
        }

            </strong>

        </div>

    `;

    return card;

}

const searchMatch = document.getElementById("match-search");

searchMatch.addEventListener("input", function () {

    renderMatches();

});

const matchSort = document.getElementById("match-sort");

matchSort.addEventListener("change", function () {

    renderMatches();

});

function isLegAvailable(match, leg) {

    // Leg 1 selalu bisa dimainkan
    if (leg.meeting === 1) {

        return true;

    }

    // Leg 2 hanya bisa dimainkan
    // jika Leg 1 sudah dimainkan
    const previousLeg =
        match.legs.find(function (item) {

            return item.meeting === leg.meeting - 1;

        });

    return previousLeg?.played === true;

}

function shouldShowScoreButtons(match, leg) {

    // =========================
    // LEG 1
    // =========================

    if (leg.meeting === 1) {

        // Kalau Leg 2 sudah dimainkan,
        // Leg 1 hanya menampilkan Statistics
        if (
            match.legs[1] &&
            match.legs[1].played === true
        ) {

            return false;

        }

        // Leg 1 belum / sudah dimainkan
        return true;

    }


    // =========================
    // LEG 2
    // =========================

    if (leg.meeting === 2) {

        // Leg 2 harus sudah dibuka
        // setelah Leg 1 dimainkan
        return true;

    }


    return false;

}

function renderMatches() {

    let allLegs = [];

    const roundOrder = {

        "Round of 64": 1,
        "Round of 32": 2,
        "Round of 16": 3,
        "Quarter Final": 4,
        "Semi Final": 5,
        "Final": 6

    };

    const container =
        document.getElementById("matches-container");

    container.innerHTML = "";

    if (!system.knockout) {

        return;

    }


    // ==========================================
    // COLLECT ALL LEGS
    // ==========================================

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (match) {

            const legs =
                system.meetingType === "homeAway"
                    ? match.legs
                    : [match.legs[0]];

            legs.forEach(function (leg) {

                const location =
                    locations.find(function (item) {

                        return item.id === leg.locationId;

                    });


                let homeTeamId;
                let awayTeamId;


                if (leg.meeting === 1) {

                    homeTeamId =
                        match.homeTeamId;

                    awayTeamId =
                        match.awayTeamId;

                }

                else {

                    homeTeamId =
                        match.awayTeamId;

                    awayTeamId =
                        match.homeTeamId;

                }


                const home =
                    teams.find(function (team) {

                        return team.id === homeTeamId;

                    });


                const away =
                    teams.find(function (team) {

                        return team.id === awayTeamId;

                    });


                const keyword =
                    searchMatch.value
                        .trim()
                        .toLowerCase();


                const teamMatch =
                    home?.name
                        .toLowerCase()
                        .includes(keyword)
                    ||
                    away?.name
                        .toLowerCase()
                        .includes(keyword);


                const roundMatch =
                    round.name
                        .toLowerCase()
                        .includes(keyword);


                const legMatch =
                    system.meetingType === "homeAway" &&
                    `leg ${leg.meeting}`
                        .toLowerCase()
                        .includes(keyword);


                if (
                    keyword &&
                    !teamMatch &&
                    !roundMatch &&
                    !legMatch
                ) {

                    return;

                }


                allLegs.push({

                    round: round,

                    match: match,

                    leg: leg,

                    location: location,

                    home: home,

                    away: away

                });

            });

        });

    });


    // ==========================================
    // SORT BY ROUND
    // ==========================================

    if (matchSort.value === "round") {

        allLegs.sort(function (a, b) {

            return (
                roundOrder[a.round.name] -
                roundOrder[b.round.name]
            );

        });

    }


    // ==========================================
    // SORT BY DATE
    // ==========================================

    else if (matchSort.value === "date") {

        allLegs.sort(function (a, b) {

            const dateA =
                a.leg.date
                    ? new Date(
                        `${a.leg.date}T${a.leg.time || "00:00"}`
                    )
                    : null;


            const dateB =
                b.leg.date
                    ? new Date(
                        `${b.leg.date}T${b.leg.time || "00:00"}`
                    )
                    : null;


            // Dua-duanya belum punya tanggal
            if (!dateA && !dateB) {

                return 0;

            }


            // A belum punya tanggal
            // → paling bawah
            if (!dateA) {

                return 1;

            }


            // B belum punya tanggal
            // → paling bawah
            if (!dateB) {

                return -1;

            }


            // Tanggal paling awal → paling atas
            return dateA - dateB;

        });

    }


    // ==========================================
    // RENDER
    // ==========================================

    allLegs.forEach(function (item) {

        const round =
            item.round;

        const match =
            item.match;

        const leg =
            item.leg;

        const location =
            item.location;

        const home =
            item.home;

        const away =
            item.away;


        const leg1 =
            match.legs[0];

        const leg2 =
            match.legs[1];


        const legAvailable =
            isLegAvailable(
                match,
                leg
            );


        let homeScore;
        let awayScore;


        if (system.meetingType === "single") {

            homeScore =
                leg1.homeScore;

            awayScore =
                leg1.awayScore;

        }

        else {

            homeScore =
                (leg1.homeScore ?? 0) +
                (leg2.awayScore ?? 0);

            awayScore =
                (leg1.awayScore ?? 0) +
                (leg2.homeScore ?? 0);

        }


        const showPenalty =
            shouldShowPenalty(match);


        container.innerHTML += `

        <div class="match-card">

            <div class="match-round">

                ${round.name}

                ${system.meetingType === "homeAway"
                ? `Leg ${leg.meeting}`
                : ""
            }

            </div>


            <div class="match-info">

                <header class="match-header">

                    <button
                        class="calendar-btn"
                        data-match="${leg.id}">

                        <i class="fa-solid fa-calendar"></i>

                        ${leg.date
                ? leg.date +
                "." +
                leg.time
                : ""
            }

                    </button>


                    <button
                        class="location-btn"
                        data-match="${leg.id}">

                        <i class="fa-solid fa-location-dot"></i>

                        ${location
                ? location.name
                : ""
            }

                    </button>

                </header>

            </div>


            <div class="match-teams">

                <div class="team">

                    ${home
                ? getTeamLogo(home)
                : ""
            }

                    <span>

                        ${home
                ? home.name
                : "TBD"
            }

                    </span>

                </div>


                <div class="match-score">

                    ${leg.homeScore ?? "-"
            }

                    ${showPenalty &&
                leg.homePenalty != null
                ? `(${leg.homePenalty})`
                : ""
            }

                    :

                    ${showPenalty &&
                leg.awayPenalty != null
                ? `(${leg.awayPenalty})`
                : ""
            }

                    ${leg.awayScore ?? "-"
            }

                </div>


                <div class="team">

                    ${away
                ? getTeamLogo(away)
                : ""
            }

                    <span>

                        ${away
                ? away.name
                : "TBD"
            }

                    </span>

                </div>

            </div>


            <div class="match-action">


                ${system.meetingType === "homeAway"

                ? `

                            ${leg.played

                    ? `

                                        <button
                                            class="statistics-btn"
                                            data-leg="${leg.id}"
                                            data-i18n="statistics">

                                            Statistics

                                        </button>

                                    `

                    : ""
                }


                            ${leg.meeting === 1

                    ? (

                        leg.played &&
                            !leg2.played

                            ? `

                                                <button
                                                    class="set-score-btn"
                                                    data-id="${leg.id}"
                                                    data-i18n="editScore">

                                                    Edit Score

                                                </button>

                                                <button
                                                    class="auto-score-btn"
                                                    data-id="${leg.id}"
                                                    data-i18n="automaticScore">

                                                    Automatic Score

                                                </button>

                                            `

                            : !leg.played &&
                                !leg2.played

                                ? `

                                                <button
                                                    class="set-score-btn"
                                                    data-id="${leg.id}"
                                                    data-i18n="setScore">

                                                    Set Score

                                                </button>

                                                <button
                                                    class="auto-score-btn"
                                                    data-id="${leg.id}"
                                                    data-i18n="automaticScore">

                                                    Automatic Score

                                                </button>

                                            `

                                : ""

                    )


                    : (

                        !leg1.played

                            ? ""

                            : !leg.played

                                ? `

                                                <button
                                                    class="set-score-btn"
                                                    data-id="${leg.id}"
                                                    data-i18n="setScore">

                                                    Set Score

                                                </button>

                                                <button
                                                    class="auto-score-btn"
                                                    data-id="${leg.id}"
                                                    data-i18n="automaticScore">

                                                    Automatic Score

                                                </button>

                                            `

                                : `

                                                <button
                                                    class="set-score-btn"
                                                    data-id="${leg.id}"
                                                    data-i18n="editScore">

                                                    Edit Score

                                                </button>

                                                <button
                                                    class="auto-score-btn"
                                                    data-id="${leg.id}"
                                                    data-i18n="automaticScore">

                                                    Automatic Score

                                                </button>

                                            `

                    )

                }

                        `


                : `

                            ${leg.played

                    ? `

                                        <button
                                            class="statistics-btn"
                                            data-leg="${leg.id}"
                                            data-i18n="statistics">

                                            Statistics

                                        </button>

                                        <button
                                            class="set-score-btn"
                                            data-id="${leg.id}"
                                            data-i18n="editScore">

                                            Edit Score

                                        </button>

                                        <button
                                            class="auto-score-btn"
                                            data-id="${leg.id}"
                                            data-i18n="automaticScore">

                                            Automatic Score

                                        </button>

                                    `

                    : `

                                        <button
                                            class="set-score-btn"
                                            data-id="${leg.id}"
                                            data-i18n="setScore">

                                            Set Score

                                        </button>

                                        <button
                                            class="auto-score-btn"
                                            data-id="${leg.id}"
                                            data-i18n="automaticScore">

                                            Automatic Score

                                        </button>

                                    `
                }

                        `

            }

            </div>

        </div>

        `;

    });


    saveTournament();

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

const scoreModal =
    document.getElementById("score-modal");

const cancelScoreBtn =
    document.getElementById("cancel-score-btn");

const saveScoreBtn =
    document.getElementById("save-score-btn");

const deleteScoreBtn =
    document.getElementById("delete-score-btn");

const homeTeamName =
    document.getElementById("home-team-name");

const awayTeamName =
    document.getElementById("away-team-name");

const homeScoreInput =
    document.getElementById("home-score-input");

const awayScoreInput =
    document.getElementById("away-score-input");

const homePenaltyInput =
    document.getElementById("home-penalty-input");

const awayPenaltyInput =
    document.getElementById("away-penalty-input");

const penaltySection = document.getElementById("penalty-section");

function togglePenaltyInputs(show) {

    const homeGroup =
        homePenaltyInput.parentElement;

    const awayGroup =
        awayPenaltyInput.parentElement;

    homeGroup.style.display =
        show ? "flex" : "none";

    awayGroup.style.display =
        show ? "flex" : "none";

}

function updatePenaltyVisibility(match, leg) {

    if (system.meetingType === "single") {

        penaltySection.style.display =
            Number(homeScoreInput.value) ===
                Number(awayScoreInput.value)
                ? "block"
                : "none";

        return;

    }

    if (leg.meeting === 1) {

        penaltySection.style.display = "none";

        return;

    }

    const leg1 = match.legs[0];

    const aggregateHome =
        (leg1.homeScore ?? 0) +
        (Number(awayScoreInput.value) || 0);

    const aggregateAway =
        (leg1.awayScore ?? 0) +
        (Number(homeScoreInput.value) || 0);

    penaltySection.style.display =
        aggregateHome === aggregateAway
            ? "block"
            : "none";

}

homeScoreInput.addEventListener("input", function () {

    if (!selectedMatchId) return;

    let match = null;
    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (m) {

            const foundLeg = m.legs.find(function (l) {

                return l.id === selectedMatchId;

            });

            if (foundLeg) {

                match = m;
                leg = foundLeg;

            }

        });

    });

    if (match && leg) {

        updatePenaltyVisibility(match, leg);

    }

});

awayScoreInput.addEventListener("input", function () {

    if (!selectedMatchId) return;

    let match = null;
    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (m) {

            const foundLeg = m.legs.find(function (l) {

                return l.id === selectedMatchId;

            });

            if (foundLeg) {

                match = m;
                leg = foundLeg;

            }

        });

    });

    if (match && leg) {

        updatePenaltyVisibility(match, leg);

    }

});

cancelScoreBtn.addEventListener("click", function () {

    scoreModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

document.addEventListener("click", function (event) {

    if (!event.target.classList.contains("set-score-btn")) {

        return;

    }

    const card =
        event.target.closest(".knockout-match");

    const legId = event.target.dataset.id;

    selectedMatchId = legId;

    let match = null;
    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (m) {

            const foundLeg = m.legs.find(function (l) {

                return l.id === legId;

            });

            if (foundLeg) {

                match = m;
                leg = foundLeg;

            }

        });

    });

    editMode = leg.played;

    let homeTeamId;
    let awayTeamId;

    if (leg.meeting === 1) {

        homeTeamId = match.homeTeamId;
        awayTeamId = match.awayTeamId;

    }
    else {

        homeTeamId = match.awayTeamId;
        awayTeamId = match.homeTeamId;

    }

    const home =
        teams.find(function (team) {

            return team.id === homeTeamId;

        });

    const away =
        teams.find(function (team) {

            return team.id === awayTeamId;

        });

    homeTeamName.textContent =
        home ? home.name : "BYE";

    awayTeamName.textContent =
        away ? away.name : "BYE";

    homeScoreInput.value =
        leg.homeScore ?? "";

    awayScoreInput.value =
        leg.awayScore ?? "";

    if (system.meetingType === "homeAway" && leg.meeting === 1) {

        homePenaltyInput.value = "";
        awayPenaltyInput.value = "";

    }
    else {

        homePenaltyInput.value =
            leg.homePenalty ?? "";

        awayPenaltyInput.value =
            leg.awayPenalty ?? "";

    }

    updatePenaltyVisibility(match, leg);

    homeScoreInput.oninput = function () {

        updatePenaltyVisibility(match, leg);

    };

    awayScoreInput.oninput = function () {

        updatePenaltyVisibility(match, leg);

    };

    const penaltySection = document.getElementById("penalty-section");

    if (system.meetingType === "single") {

        penaltySection.style.display =
            (leg.homeScore === leg.awayScore)
                ? "block"
                : "none";

    }
    else {

        if (leg.meeting === 1) {

            penaltySection.style.display = "none";

        }
        else {

            const aggregate =
                calculateAggregate(match.id);

            if (!aggregate) {

                penaltySection.style.display = "none";

            }
            else {

                penaltySection.style.display =
                    aggregate.totalA === aggregate.totalB
                        ? "block"
                        : "none";

            }

        }

    }

    scoreModal.classList.add("show");

    document.body.classList.add("modal-open");

});

function calculateAggregate(aggregateId) {

    let knockoutMatch = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (match) {

            if (match.id === aggregateId) {

                knockoutMatch = match;

            }

        });

    });

    if (!knockoutMatch) return null;

    const leg1 = knockoutMatch.legs[0];
    const leg2 = knockoutMatch.legs[1];

    if (!leg1.played || !leg2.played) {

        return null;

    }

    const teamA = knockoutMatch.homeTeamId;
    const teamB = knockoutMatch.awayTeamId;

    const totalA =
        (leg1.homeScore ?? 0) +
        (leg2.awayScore ?? 0);

    const totalB =
        (leg1.awayScore ?? 0) +
        (leg2.homeScore ?? 0);

    return {

        teamA,
        teamB,
        totalA,
        totalB

    };

}

function shouldShowPenalty(match) {

    if (system.meetingType === "single") {

        return match.legs[0].homePenalty != null &&
            match.legs[0].awayPenalty != null;

    }

    const aggregate = calculateAggregate(match.id);

    if (!aggregate) {

        return false;

    }

    return aggregate.totalA === aggregate.totalB;

}

function shouldShowPenaltyInput(match, leg) {

    if (system.meetingType === "single") {

        return true;

    }

    if (leg.meeting === 1) {

        return false;

    }

    const leg1 = match.legs[0];

    if (!leg1.played) {

        return false;

    }

    const totalHome =
        (leg1.homeScore ?? 0) +
        (leg.awayScore ?? 0);

    const totalAway =
        (leg1.awayScore ?? 0) +
        (leg.homeScore ?? 0);

    return totalHome === totalAway;

}

function clearWinner(roundIndex, matchIndex) {

    if (roundIndex >= system.knockout.rounds.length - 1) return;

    const nextRound = system.knockout.rounds[roundIndex + 1];
    const nextMatch = nextRound.matches[Math.floor(matchIndex / 2)];

    if (matchIndex % 2 === 0) {

        nextMatch.homeTeamId = null;
        nextMatch.winnerSourceHome = null;

    } else {

        nextMatch.awayTeamId = null;
        nextMatch.winnerSourceAway = null;

    }

}

let selectedMatchId = null;

let editMode = false;

saveScoreBtn.addEventListener("click", function () {

    let match = null;
    let leg = null;
    let roundIndex = -1;
    let matchIndex = -1;

    system.knockout.rounds.forEach(function (round, r) {

        round.matches.forEach(function (m, i) {

            const foundLeg = m.legs.find(function (l) {
                return l.id === selectedMatchId;
            });

            if (foundLeg) {

                match = m;
                leg = foundLeg;

                roundIndex = r;
                matchIndex = i;

            }

        });

    });

    const previousWinner = match.winner;

    const homeScore =
        Number(homeScoreInput.value);

    const awayScore =
        Number(awayScoreInput.value);

    leg.homeScore = homeScore;
    leg.awayScore = awayScore;

    leg.played = true;

    const homePenalty =
        homePenaltyInput.value === ""
            ? null
            : Number(homePenaltyInput.value);

    const awayPenalty =
        awayPenaltyInput.value === ""
            ? null
            : Number(awayPenaltyInput.value);

    leg.homePenalty = homePenalty;
    leg.awayPenalty = awayPenalty;

    const winnerId = determineWinner(match, leg);

    if (winnerId !== null) {

        match.winner = winnerId;

    }
    else {

        match.winner = null;

    }

    system.knockout.rounds.forEach(function (round, r) {

        round.matches.forEach(function (m, i) {

            if (m.id === match.id) {

                roundIndex = r;
                matchIndex = i;

            }

        });

    });

    const knockoutMatch =
        system.knockout.rounds[roundIndex].matches[matchIndex];

    if (leg.meeting === 1) {

        knockoutMatch.homeScore = homeScore;
        knockoutMatch.awayScore = awayScore;

    }
    else {

        knockoutMatch.homeScore = awayScore;
        knockoutMatch.awayScore = homeScore;

    }

    if (leg.meeting === 1) {

        knockoutMatch.homePenalty = null;
        knockoutMatch.awayPenalty = null;

    }
    else {

        knockoutMatch.homePenalty = awayPenalty;
        knockoutMatch.awayPenalty = homePenalty;

    }

    knockoutMatch.played = true;

    knockoutMatch.winner = match.winner;

    if (system.meetingType === "single") {

        moveWinner(
            roundIndex,
            matchIndex,
            match.winner
        );

    }
    else {

        // Leg 1
        if (leg.meeting === 1) {

            if (!match.legs[1].played) {

                generateMatchStatistics(leg);

                saveTournament();

                renderKnockoutBracket();

                renderMatches();

                scoreModal.classList.remove("show");

                document.body.classList.remove("modal-open");

                showToast(
                    "First leg saved!",
                    "success"
                );

                return;

            }

        }

        const oldWinner = previousWinner;

        match.winner = winnerId;

        match.played = true;

        knockoutMatch.winner = winnerId;

        if (oldWinner && oldWinner !== winnerId) {

            clearWinner(roundIndex, matchIndex);

        }

        moveWinner(
            roundIndex,
            matchIndex,
            winnerId
        );

        saveTournament();

        renderKnockoutBracket();

        renderMatches();

        scoreModal.classList.remove("show");

        document.body.classList.remove("modal-open");

        checkChampion();

        showToast(
            "Aggregate completed!",
            "success"
        );

        return;

    }

    generateMatchStatistics(leg);

    recalculateTeamStatistics();

    renderTeamStatistics();

    checkChampion();

    saveTournament();

    renderKnockoutBracket();

    renderMatches();

    scoreModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Score saved!",
        "success"
    );

});

const calendarModal = document.getElementById("calendar-modal");

const matchDate = document.getElementById("match-date");

const matchTime = document.getElementById("match-time");

const selectedDate =
    document.getElementById("selected-date");

const selectedTime =
    document.getElementById("selected-time");

const cancelCalendarBtn = document.getElementById("cancel-calendar-btn");

const deleteCalendarBtn = document.getElementById("delete-calendar-btn");

const saveCalendarBtn = document.getElementById("save-calendar-btn");

const datePickerModal =
    document.getElementById("date-picker-modal");

const datePickerDays =
    document.getElementById("date-picker-days");

const datePickerMonth =
    document.getElementById("date-picker-month");

const datePickerYear =
    document.getElementById("date-picker-year");

const datePickerPrev =
    document.getElementById("date-picker-prev");

const datePickerNext =
    document.getElementById("date-picker-next");

const datePickerToday =
    document.getElementById("date-picker-today");

const datePickerClear =
    document.getElementById("date-picker-clear");

const datePickerClose =
    document.getElementById("date-picker-close");


let datePickerCurrentDate =
    new Date();


let datePickerSelectedDate =
    null;

function formatDateLocal(date) {

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}

function renderDatePicker() {

    const year =
        datePickerCurrentDate.getFullYear();

    const month =
        datePickerCurrentDate.getMonth();


    const monthNames = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];


    datePickerMonth.textContent =
        monthNames[month];

    datePickerYear.textContent =
        year;


    datePickerDays.innerHTML = "";


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    const previousMonthDays =
        new Date(
            year,
            month,
            0
        ).getDate();


    // =====================================
    // PREVIOUS MONTH
    // =====================================

    for (
        let i = firstDay - 1;
        i >= 0;
        i--
    ) {

        const day =
            previousMonthDays - i;

        createDateDay(
            day,
            month - 1,
            year,
            true
        );

    }


    // =====================================
    // CURRENT MONTH
    // =====================================

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        createDateDay(
            day,
            month,
            year,
            false
        );

    }


    // =====================================
    // NEXT MONTH
    // =====================================

    const totalCells =
        datePickerDays.children.length;


    const remaining =
        totalCells % 7 === 0
            ? 0
            : 7 - (totalCells % 7);


    for (
        let day = 1;
        day <= remaining;
        day++
    ) {

        createDateDay(
            day,
            month + 1,
            year,
            true
        );

    }

}

function createDateDay(
    day,
    month,
    year,
    otherMonth
) {

    const button =
        document.createElement("button");


    button.type = "button";

    button.className =
        "date-picker-day";


    if (otherMonth) {

        button.classList.add(
            "other-month"
        );

    }


    const date =
        new Date(
            year,
            month,
            day
        );


    const dateValue =
        formatDateLocal(date);


    button.textContent =
        day;


    // TODAY

    const today =
        new Date();


    if (
        date.getFullYear() ===
        today.getFullYear() &&

        date.getMonth() ===
        today.getMonth() &&

        date.getDate() ===
        today.getDate()
    ) {

        button.classList.add(
            "today"
        );

    }


    // SELECTED

    if (
        datePickerSelectedDate ===
        dateValue
    ) {

        button.classList.add(
            "selected"
        );

    }


    button.addEventListener(
        "click",
        function () {

            selectDate(dateValue);

        }
    );


    datePickerDays.appendChild(
        button
    );

}

function selectDate(dateValue) {

    datePickerSelectedDate =
        dateValue;


    if (
        window.selectedMatchId
    ) {

        // nanti bisa kita sesuaikan
        // dengan fungsi calendar
        // yang sekarang kamu gunakan

    }


    datePickerModal.classList.remove(
        "show"
    );

}

datePickerPrev.addEventListener(
    "click",
    function () {

        datePickerCurrentDate.setMonth(
            datePickerCurrentDate.getMonth() - 1
        );

        renderDatePicker();

    }
);


datePickerNext.addEventListener(
    "click",
    function () {

        datePickerCurrentDate.setMonth(
            datePickerCurrentDate.getMonth() + 1
        );

        renderDatePicker();

    }
);

datePickerToday.addEventListener(
    "click",
    function () {

        const today =
            new Date();


        datePickerCurrentDate =
            new Date(today);


        selectDate(
            formatDateLocal(today)
        );

    }
);

datePickerClear.addEventListener(
    "click",
    function () {

        datePickerSelectedDate =
            null;


        datePickerModal.classList.remove(
            "show"
        );

    }
);

datePickerClose.addEventListener(
    "click",
    function () {

        datePickerModal.classList.remove(
            "show"
        );

    }
);

const openDatePicker =
    document.getElementById(
        "open-date-picker"
    );


openDatePicker.addEventListener(
    "click",
    function () {

        openCustomDatePicker();

    }
);

function openCustomDatePicker() {

    if (matchDate.value) {

        const parts =
            matchDate.value.split("-");


        datePickerCurrentDate =
            new Date(
                Number(parts[0]),
                Number(parts[1]) - 1,
                Number(parts[2])
            );


        datePickerSelectedDate =
            matchDate.value;

    }

    else {

        datePickerCurrentDate =
            new Date();

        datePickerSelectedDate =
            null;

    }


    renderDatePicker();

    datePickerModal.classList.add(
        "show"
    );

}

function selectDate(dateValue) {

    datePickerSelectedDate =
        dateValue;


    matchDate.value =
        dateValue;


    updateScheduleDisplay();


    datePickerModal.classList.remove(
        "show"
    );

}

const timePickerModal =
    document.getElementById("time-picker-modal");

const timeHour =
    document.getElementById("time-hour");

const timeMinute =
    document.getElementById("time-minute");

const hourValue =
    document.getElementById("hour-value");

const minuteValue =
    document.getElementById("minute-value");

const openTimePicker =
    document.getElementById("open-time-picker");

const timePickerClose =
    document.getElementById("time-picker-close");

const timePickerClear =
    document.getElementById("time-picker-clear");

const timePickerSave =
    document.getElementById("time-picker-save");

const hourUp =
    document.getElementById("hour-up");

const hourDown =
    document.getElementById("hour-down");

const minuteUp =
    document.getElementById("minute-up");

const minuteDown =
    document.getElementById("minute-down");

openTimePicker.addEventListener(
    "click",
    function () {

        if (matchTime.value) {

            const parts =
                matchTime.value.split(":");

            selectedHour =
                Number(parts[0]);

            selectedMinute =
                Number(parts[1]);

        }

        else {

            const now =
                new Date();

            selectedHour =
                now.getHours();

            selectedMinute =
                now.getMinutes();

        }

        updateTimePicker();

        timePickerModal.classList.add(
            "show"
        );

    }
);

function updateTimePicker() {

    const hour =
        String(selectedHour)
            .padStart(2, "0");

    const minute =
        String(selectedMinute)
            .padStart(2, "0");


    timeHour.textContent =
        hour;

    timeMinute.textContent =
        minute;

    hourValue.textContent =
        hour;

    minuteValue.textContent =
        minute;

}

hourUp.addEventListener(
    "click",
    function () {

        selectedHour++;

        if (selectedHour > 23) {

            selectedHour = 0;

        }

        updateTimePicker();

    }
);


hourDown.addEventListener(
    "click",
    function () {

        selectedHour--;

        if (selectedHour < 0) {

            selectedHour = 23;

        }

        updateTimePicker();

    }
);

minuteUp.addEventListener(
    "click",
    function () {

        selectedMinute += 5;

        if (selectedMinute >= 60) {

            selectedMinute = 0;

            selectedHour++;

            if (selectedHour > 23) {

                selectedHour = 0;

            }

        }

        updateTimePicker();

    }
);


minuteDown.addEventListener(
    "click",
    function () {

        selectedMinute -= 5;

        if (selectedMinute < 0) {

            selectedMinute = 55;

            selectedHour--;

            if (selectedHour < 0) {

                selectedHour = 23;

            }

        }

        updateTimePicker();

    }
);

timePickerSave.addEventListener(
    "click",
    function () {

        const hour =
            String(selectedHour)
                .padStart(2, "0");

        const minute =
            String(selectedMinute)
                .padStart(2, "0");


        matchTime.value =
            `${hour}:${minute}`;


        updateScheduleDisplay();


        timePickerModal.classList.remove(
            "show"
        );

    }
);

timePickerClear.addEventListener(
    "click",
    function () {

        matchTime.value = "";

        updateScheduleDisplay();

        timePickerModal.classList.remove(
            "show"
        );

    }
);

timePickerClose.addEventListener(
    "click",
    function () {

        timePickerModal.classList.remove(
            "show"
        );

    }
);

function openCalendarModal(matchId) {

    let match = null;
    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (m) {

            const found = m.legs.find(function (l) {

                return l.id === matchId;

            });

            if (found) {

                match = m;
                leg = found;

            }

        });

    });

    if (!leg) return;


    matchDate.value =
        leg.date || "";

    matchTime.value =
        leg.time || "";


    // Apply language TERLEBIH DAHULU
    applyLanguage(
        localStorage.getItem("language") || "en"
    );


    // Baru tampilkan nilai yang tersimpan
    selectedDate.textContent =
        leg.date
            ? formatDisplayDate(leg.date)
            : "Select Date";

    selectedTime.textContent =
        leg.time
            ? leg.time
            : "Select Time";


    deleteCalendarBtn.style.display =
        leg.date
            ? "inline-block"
            : "none";


    calendarModal.classList.add(
        "show"
    );

}

function formatDisplayDate(value) {

    if (!value) {

        return "Select Date";

    }

    const date =
        new Date(
            value + "T00:00:00"
        );

    return date.toLocaleDateString(
        "en-US",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );

}

function updateScheduleDisplay() {

    // Apply language dulu
    applyLanguage(
        localStorage.getItem("language") || "en"
    );


    // Setelah itu tampilkan nilai yang dipilih
    if (selectedDate) {

        selectedDate.textContent =
            matchDate.value
                ? formatDisplayDate(matchDate.value)
                : "Select Date";

    }


    if (selectedTime) {

        selectedTime.textContent =
            matchTime.value
                ? matchTime.value
                : "Select Time";

    }

}

document.addEventListener("click", function (event) {

    const button =
        event.target.closest(".calendar-btn");

    if (!button) return;

    selectedMatchId =
        button.dataset.match;

    openCalendarModal(selectedMatchId);

});

function findMatchById(id) {

    for (const round of system.knockout.rounds) {

        for (const match of round.matches) {

            if (match.id === id) {

                return match;

            }

        }

    }

    return null;

}

function findLegById(id) {

    for (const round of system.knockout.rounds) {

        for (const match of round.matches) {

            const leg = match.legs.find(function (l) {

                return l.id === id;

            });

            if (leg) {

                return leg;

            }

        }

    }

    return null;

}

cancelCalendarBtn.addEventListener("click", function () {

    calendarModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

saveCalendarBtn.addEventListener("click", function () {

    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (match) {

            const found = match.legs.find(function (l) {

                return l.id === selectedMatchId;

            });

            if (found) {

                leg = found;

            }

        });

    });

    leg.date = matchDate.value;
    leg.time = matchTime.value;

    saveTournament();

    renderMatches();

    calendarModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Match schedule updated!",
        "success"
    );

});

deleteCalendarBtn.addEventListener("click", function () {

    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (match) {

            const found = match.legs.find(function (l) {

                return l.id === selectedMatchId;

            });

            if (found) {

                leg = found;

            }

        });

    });

    leg.date = "";
    leg.time = "";

    saveTournament();

    renderMatches();

    calendarModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Match schedule deleted!",
        "success"
    );

});

const locations =
    JSON.parse(localStorage.getItem("locations")) || [];

const locationModal =
    document.getElementById("location-modal");

const locationList =
    document.getElementById("location-list");

const searchLocation =
    document.getElementById("search-location");

const closeLocationBtn =
    document.getElementById("close-location-btn");

const deleteLocationBtn =
    document.getElementById("delete-location-btn");

function renderLocationList(keyword = "") {

    locationList.innerHTML = "";

    locations.forEach(function (location) {

        if (
            !location.name
                .toLowerCase()
                .includes(keyword.toLowerCase())
        ) {

            return;

        }

        locationList.innerHTML += `

        <div
            class="location-item"
            data-id="${location.id}">

            <i class="fa-solid fa-location-dot"></i>

            ${location.name}

        </div>

        `;

    });

}

searchLocation.addEventListener("input", function () {

    renderLocationList(this.value);

});

document.addEventListener("click", function (event) {

    const button =
        event.target.closest(".location-btn");

    if (!button) return;

    selectedMatchId = button.dataset.match;

    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (match) {

            const found = match.legs.find(function (l) {

                return l.id === selectedMatchId;

            });

            if (found) {

                leg = found;

            }

        });

    });

    deleteLocationBtn.style.display =
        leg.locationId
            ? "inline-block"
            : "none";

    searchLocation.value = "";

    renderLocationList();

    locationModal.classList.add("show");

    document.body.classList.add("modal-open");

});

locationList.addEventListener("click", function (event) {

    const item =
        event.target.closest(".location-item");

    if (!item) {

        return;

    }

    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (match) {

            const found = match.legs.find(function (l) {

                return l.id === selectedMatchId;

            });

            if (found) {

                leg = found;

            }

        });

    });

    leg.locationId = item.dataset.id;

    saveTournament();

    renderMatches();

    locationModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Location selected!",
        "success"
    );

});

closeLocationBtn.addEventListener("click", function () {

    locationModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

deleteLocationBtn.addEventListener("click", function () {

    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (match) {

            const found = match.legs.find(function (l) {

                return l.id === selectedMatchId;

            });

            if (found) {

                leg = found;

            }

        });

    });

    leg.locationId = "";

    saveTournament();

    renderMatches();

    locationModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Location deleted!",
        "success"
    );

});

function autoScore(matchId) {

    let match = null;
    let leg = null;
    let roundIndex = -1;
    let matchIndex = -1;

    system.knockout.rounds.forEach(function (round, r) {

        round.matches.forEach(function (m, i) {

            const foundLeg = m.legs.find(function (l) {

                return l.id === matchId;

            });

            if (foundLeg) {

                match = m;
                leg = foundLeg;

                roundIndex = r;
                matchIndex = i;

            }

        });

    });

    if (!match || !leg) {

        return;

    }

    leg.homePenalty = null;
    leg.awayPenalty = null;

    const homeScore =
        Math.floor(Math.random() * 6);

    const awayScore =
        Math.floor(Math.random() * 6);

    leg.homeScore = homeScore;
    leg.awayScore = awayScore;

    leg.played = true;

    if (system.meetingType === "single") {

        if (homeScore > awayScore) {

            match.winner = match.homeTeamId;

        }

        else if (awayScore > homeScore) {

            match.winner = match.awayTeamId;

        }

        else {

            let homePenalty =
                Math.floor(Math.random() * 6);

            let awayPenalty =
                Math.floor(Math.random() * 6);

            while (homePenalty === awayPenalty) {

                awayPenalty =
                    Math.floor(Math.random() * 6);

            }

            leg.homePenalty = homePenalty;
            leg.awayPenalty = awayPenalty;

            match.winner =
                homePenalty > awayPenalty
                    ? match.homeTeamId
                    : match.awayTeamId;

        }

    }

    const winnerId = determineWinner(match, leg);

    match.winner = winnerId;

    const knockoutMatch =
        system.knockout.rounds[roundIndex].matches[matchIndex];

    knockoutMatch.played = true;

    if (system.meetingType === "single") {

        knockoutMatch.homeScore = homeScore;
        knockoutMatch.awayScore = awayScore;

        knockoutMatch.homePenalty = leg.homePenalty;
        knockoutMatch.awayPenalty = leg.awayPenalty;

        knockoutMatch.winner = match.winner;

        moveWinner(roundIndex, matchIndex, match.winner);

    }

    else {

        if (leg.meeting === 1) {

            knockoutMatch.homeScore = homeScore;
            knockoutMatch.awayScore = awayScore;

            knockoutMatch.homePenalty = null;
            knockoutMatch.awayPenalty = null;

            if (!match.legs[1].played) {

                generateMatchStatistics(leg);

                saveTournament();

                renderKnockoutBracket();

                renderMatches();

                showToast(
                    "First leg generated!",
                    "success"
                );

                return;

            }

        }

        const aggregate = calculateAggregate(match.id);

        if (
            aggregate &&
            aggregate.totalA === aggregate.totalB
        ) {

            let homePenalty =
                Math.floor(Math.random() * 6);

            let awayPenalty =
                Math.floor(Math.random() * 6);

            while (homePenalty === awayPenalty) {

                awayPenalty =
                    Math.floor(Math.random() * 6);

            }

            leg.homePenalty = homePenalty;
            leg.awayPenalty = awayPenalty;

        }

        // Jika leg 2 sudah dimainkan,
        // hitung ulang winner
        const winnerId = determineWinner(match, leg);

        match.winner = winnerId;
        match.played = true;

        knockoutMatch.winner = winnerId;

        moveWinner(
            roundIndex,
            matchIndex,
            winnerId
        );

        knockoutMatch.homeScore = awayScore;
        knockoutMatch.awayScore = homeScore;

        knockoutMatch.homePenalty = leg.awayPenalty;
        knockoutMatch.awayPenalty = leg.homePenalty;

        const previousWinner = knockoutMatch.winner;

        match.winner = winnerId;
        match.played = true;

        knockoutMatch.winner = winnerId;

        if (previousWinner && previousWinner !== winnerId) {

            clearWinner(roundIndex, matchIndex);

        }

        moveWinner(
            roundIndex,
            matchIndex,
            winnerId
        );

    }

    generateMatchStatistics(leg);

    recalculateTeamStatistics();

    renderTeamStatistics();

    checkChampion();

    renderKnockoutBracket();

    renderMatches();

    saveTournament();

    showToast(
        "Automatic score generated!",
        "success"
    );

}

document.addEventListener("click", function (event) {

    const button =
        event.target.closest(".auto-score-btn");

    if (!button) {

        return;

    }

    autoScore(button.dataset.id);

});

deleteScoreBtn.addEventListener("click", function () {

    let match = null;
    let leg = null;
    let roundIndex = -1;
    let matchIndex = -1;

    system.knockout.rounds.forEach(function (round, r) {

        round.matches.forEach(function (m, i) {

            const foundLeg = m.legs.find(function (l) {

                return l.id === selectedMatchId;

            });

            if (foundLeg) {

                match = m;
                leg = foundLeg;

                roundIndex = r;
                matchIndex = i;

            }

        });

    });

    if (!match || !leg) {

        return;

    }

    leg.homeScore = null;
    leg.awayScore = null;

    leg.homePenalty = null;
    leg.awayPenalty = null;

    leg.played = false;
    match.winner = null;

    const knockoutMatch =
        system.knockout.rounds[roundIndex]
            .matches[matchIndex];

    knockoutMatch.homeScore = null;
    knockoutMatch.awayScore = null;

    knockoutMatch.homePenalty = null;
    knockoutMatch.awayPenalty = null;

    knockoutMatch.played = false;
    knockoutMatch.winner = null;

    if (roundIndex < system.knockout.rounds.length - 1) {

        const nextMatch =
            system.knockout.rounds[roundIndex + 1]
                .matches[Math.floor(matchIndex / 2)];

        if (matchIndex % 2 === 0) {

            nextMatch.homeTeamId = null;

        }

        else {

            nextMatch.awayTeamId = null;

        }

        nextMatch.homeScore = null;
        nextMatch.awayScore = null;

        nextMatch.homePenalty = null;
        nextMatch.awayPenalty = null;

        nextMatch.played = false;
        nextMatch.winner = null;

    }

    recalculateTeamStatistics();

    renderTeamStatistics();

    saveTournament();

    renderKnockoutBracket();

    renderMatches();

    scoreModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Score deleted!",
        "success"
    );

});

function generateMatchStatistics(leg) {

    leg.statistics = {

        possession: {
            home: Math.floor(Math.random() * 31) + 35,
            away: 0
        },

        shots: {
            home: Math.floor(Math.random() * 16) + 5,
            away: Math.floor(Math.random() * 16) + 5
        },

        shotsOnTarget: {
            home: 0,
            away: 0
        },

        corners: {
            home: Math.floor(Math.random() * 11),
            away: Math.floor(Math.random() * 11)
        },

        fouls: {
            home: Math.floor(Math.random() * 11) + 5,
            away: Math.floor(Math.random() * 11) + 5
        },

        yellowCards: {
            home: Math.floor(Math.random() * 5),
            away: Math.floor(Math.random() * 5)
        },

        redCards: {
            home: Math.random() < 0.1 ? 1 : 0,
            away: Math.random() < 0.1 ? 1 : 0
        }

    };

    leg.statistics.possession.away =
        100 - leg.statistics.possession.home;

    leg.statistics.shotsOnTarget.home =
        Math.floor(
            Math.random() *
            (leg.statistics.shots.home + 1)
        );

    leg.statistics.shotsOnTarget.away =
        Math.floor(
            Math.random() *
            (leg.statistics.shots.away + 1)
        );

}

const statisticsModal =
    document.getElementById("statistics-modal");

const statisticsContent =
    document.getElementById("statistics-content");

const closeStatisticsBtn =
    document.getElementById("close-statistics-btn");

document.addEventListener("click", function (event) {

    const button =
        event.target.closest(".statistics-btn");

    if (!button) {

        return;

    }

    openStatisticsModal(button.dataset.leg);

});

function findMatchById(id) {

    for (const round of system.knockout.rounds) {

        for (const match of round.matches) {

            if (match.id === id) {

                return match;

            }

        }

    }

    return null;

}

function openStatisticsModal(legId) {

    let match = null;
    let leg = null;

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (m) {

            const found = m.legs.find(function (l) {

                return l.id === legId;

            });

            if (found) {

                match = m;
                leg = found;

            }

        });

    });

    if (!match || !leg || !leg.statistics) {

        return;

    }

    let homeTeamId;
    let awayTeamId;

    if (leg.meeting === 1) {

        homeTeamId = match.homeTeamId;
        awayTeamId = match.awayTeamId;

    } else {

        homeTeamId = match.awayTeamId;
        awayTeamId = match.homeTeamId;

    }

    const home = teams.find(team => team.id === homeTeamId);
    const away = teams.find(team => team.id === awayTeamId);

    const stats = leg.statistics;

    statisticsContent.innerHTML = `
<div class="statistics-content">

    <div class="statistics-title">
        <span>${home.name}</span>
        <span>VS</span>
        <span>${away.name}</span>
    </div>

    <div class="statistics-row">
        <span>${stats.possession.home}%</span>
        <span data-i18n="possession">Possession</span>
        <span>${stats.possession.away}%</span>
    </div>

    <div class="statistics-row">
        <span>${stats.shots.home}</span>
        <span data-i18n="shots">Shots</span>
        <span>${stats.shots.away}</span>
    </div>

    <div class="statistics-row">
        <span>${stats.shotsOnTarget.home}</span>
        <span data-i18n="shotsOnTarget">Shots on Target</span>
        <span>${stats.shotsOnTarget.away}</span>
    </div>

    <div class="statistics-row">
        <span>${stats.corners.home}</span>
        <span data-i18n="corners">Corners</span>
        <span>${stats.corners.away}</span>
    </div>

    <div class="statistics-row">
        <span>${stats.fouls.home}</span>
        <span data-i18n="fouls">Fouls</span>
        <span>${stats.fouls.away}</span>
    </div>

    <div class="statistics-row">
        <span>${stats.yellowCards.home}</span>
        <span data-i18n="yellowCards">Yellow Cards</span>
        <span>${stats.yellowCards.away}</span>
    </div>

    <div class="statistics-row">
        <span>${stats.redCards.home}</span>
        <span data-i18n="redCards">Red Cards</span>
        <span>${stats.redCards.away}</span>
    </div>

</div>
`;

    statisticsModal.classList.add("show");

    document.body.classList.add("modal-open");

    applyLanguage(
        localStorage.getItem("language") || 'en'
    );

}

closeStatisticsBtn.addEventListener("click", function () {

    statisticsModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function renderTeamStatistics() {

    const container = document.getElementById("team-statistics-container");

    container.innerHTML = "";

    const tournamentTeams =
        teams.filter(function (team) {

            if (!team.statistics) {

                team.statistics = {

                    goalsFor: 0,
                    goalsAgainst: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    cleanSheets: 0,
                    matches: 0

                };
            }

            return system.teams.includes(team.id);

        });

    const mostGoals =
        [...tournamentTeams];

    mostGoals.sort(function (a, b) {

        return (
            b.statistics.goalsFor -
            a.statistics.goalsFor
        );

    });

    let html = `

    <div class="team-statistics-grid">`;

    html += `

    <div class="statistics-card">

<h2 data-i18n="mostGoals">

Most Goals

</h2>

<table class="statistics-ranking">

<tr>

<th>#</th>
<th data-i18n="team">Team</th>
<th data-i18n="gF">GF</th>

</tr>

`;

    mostGoals.forEach(function (team, index) {

        html += `

    <tr>

    <td>${index + 1}</td>

    <td>

    ${getTeamLogo(team)}

    ${team.name}

    </td>

    <td>

    ${team.statistics.goalsFor}

    </td>

    </tr>

    `;

    });

    html += `

</table>

</div>

`;

    const bestDefence =
        [...tournamentTeams];

    bestDefence.sort(function (a, b) {

        return (
            a.statistics.goalsAgainst -
            b.statistics.goalsAgainst
        );

    });

    html += `

<div class="statistics-card">

<h2 data-i18n="bestDefence">

Best Defence

</h2>

<table class="statistics-ranking">

<tr>

<th>#</th>
<th data-i18n="team">Team</th>
<th data-i18n="gA">GA</th>

</tr>

`;

    bestDefence.forEach(function (team, index) {

        html += `

    <tr>

    <td>${index + 1}</td>

    <td>

    ${getTeamLogo(team)}
    ${team.name}

    </td>

    <td>

    ${team.statistics.goalsAgainst}

    </td>

    </tr>

    `;

    });

    html += `

</table>

</div>

`;

    const mostWins =
        [...tournamentTeams];

    mostWins.sort(function (a, b) {

        return (
            b.statistics.wins -
            a.statistics.wins
        );

    });

    html += `

<div class="statistics-card">

<h2 data-i18n="mostWins">

Most Wins

</h2>

<table class="statistics-ranking">

<tr>

<th>#</th>
<th data-i18n="team">Team</th>
<th data-i18n="w">W</th>

</tr>

`;

    mostWins.forEach(function (team, index) {

        html += `

    <tr>

    <td>${index + 1}</td>

    <td>

    ${getTeamLogo(team)}
    ${team.name}

    </td>

    <td>

    ${team.statistics.wins}

    </td>

    </tr>

    `;

    });

    html += `
</table>

</div>

`;

    const mostDraw =
        [...tournamentTeams];

    mostDraw.sort(function (a, b) {

        return (
            b.statistics.draws -
            a.statistics.draws
        );

    });

    html += `

<div class="statistics-card">

<h2 data-i18n="mostDraws">Most Draws</h2>

<table class="statistics-ranking">

<tr>

<th>#</th>
<th data-i18n="team">Team</th>
<th data-i18n="d">D</th>

</tr>

`;

    mostDraw.forEach(function (team, index) {

        html += `

    <tr>

    <td>${index + 1}</td>

    <td>

    ${getTeamLogo(team)}
    ${team.name}

    </td>

    <td>

    ${team.statistics.draws}

    </td>

    </tr>

    `;

    });

    html += `
</table>

</div>
`;

    const mostLoss =
        [...tournamentTeams];

    mostLoss.sort(function (a, b) {

        return (
            b.statistics.losses -
            a.statistics.losses
        );

    });

    html += `

<div class="statistics-card">

<h2 data-i18n="mostLosses">Most Losses</h2>

<table class="statistics-ranking">

<tr>

<th>#</th>
<th data-i18n="team">Team</th>
<th data-i18n="l">L</th>

</tr>

`;

    mostLoss.forEach(function (team, index) {

        html += `

    <tr>

    <td>${index + 1}</td>

    <td>

    ${getTeamLogo(team)}
    ${team.name}

    </td>

    <td>

    ${team.statistics.losses}

    </td>

    </tr>

    `;

    });

    html += `
</table>

</div>
`;

    const mostCleanSheets =
        [...tournamentTeams];

    mostCleanSheets.sort(function (a, b) {

        return (
            b.statistics.cleanSheets -
            a.statistics.cleanSheets
        );

    });

    html += `

<div class="statistics-card">

<h2 data-i18n="mostCleanSheets">Most Clean Sheets</h2>

<table class="statistics-ranking">

<tr>

<th>#</th>
<th data-i18n="team">Team</th>
<th>CS</th>

</tr>

`;

    mostCleanSheets.forEach(function (team, index) {

        html += `

    <tr>

    <td>${index + 1}</td>

    <td>

    ${getTeamLogo(team)}
    ${team.name}

    </td>

    <td>

    ${team.statistics.cleanSheets}

    </td>

    </tr>

    `;

    });

    html += `
</table>

</div>
`;

    container.innerHTML = html;

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

function recalculateTeamStatistics() {

    teams.forEach(function (team) {

        team.statistics = {

            goalsFor: 0,
            goalsAgainst: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            cleanSheets: 0,
            matches: 0

        };

    });

    system.knockout.rounds.forEach(function (round) {

        round.matches.forEach(function (match) {

            const legs =
                system.meetingType === "homeAway"
                    ? match.legs
                    : [match.legs[0]];

            legs.forEach(function (leg) {

                if (!leg.played) {

                    return;

                }

                let homeTeamId;
                let awayTeamId;

                if (leg.meeting === 1) {

                    homeTeamId = match.homeTeamId;
                    awayTeamId = match.awayTeamId;

                }

                else {

                    homeTeamId = match.awayTeamId;
                    awayTeamId = match.homeTeamId;

                }

                const home =
                    teams.find(team => team.id === homeTeamId);

                const away =
                    teams.find(team => team.id === awayTeamId);

                if (!home || !away) {

                    return;

                }

                home.statistics.matches++;
                away.statistics.matches++;

                home.statistics.goalsFor += leg.homeScore;
                home.statistics.goalsAgainst += leg.awayScore;

                away.statistics.goalsFor += leg.awayScore;
                away.statistics.goalsAgainst += leg.homeScore;

                if (leg.homeScore > leg.awayScore) {

                    home.statistics.wins++;
                    away.statistics.losses++;

                }

                else if (leg.awayScore > leg.homeScore) {

                    away.statistics.wins++;
                    home.statistics.losses++;

                }

                else {

                    home.statistics.draws++;
                    away.statistics.draws++;

                }

                if (leg.awayScore === 0) {

                    home.statistics.cleanSheets++;

                }

                if (leg.homeScore === 0) {

                    away.statistics.cleanSheets++;

                }

            });

        });

    });

}

updateKnockoutButtons();

if (system.knockout?.created) {

    renderKnockoutBracket();

    recalculateTeamStatistics();

    renderTeamStatistics();

    renderMatches();

}