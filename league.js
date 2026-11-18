const params = new URLSearchParams(window.location.search);

const navItems = document.querySelectorAll(".nav-items");

const panels = document.querySelectorAll(".panels");

let selectedGroup = null;

let selectedSlot = null;

const manualModal = document.getElementById("manual-modal");

const manualSearch = document.getElementById("manual-search");

const manualTeamContainer = document.getElementById("manual-team-container");

const translations = {
    en: {
        system: "System",
        save: "Save",
        back: " ← Back",
        standing: "Standing",
        matches: "Matches",
        statisticsTeam: "Team Statistics",
        general: "General",
        league: "League",

        chooseTeam: "Choose Team",
        selectedTeams: "Selected Teams",
        homeaway: "Home Away",
        singlemeeting: "Single Meeting",

        qualified: "Qualified",
        qualifiedSecondary: "Qualified Secondary",
        eliminated: "Eliminated",
        eliminatedSecondary: "Eliminated Secondary",

        leagueGenerator: "League Generator",
        createStandings: "Create Standing",
        deleteStandings: "Delete Standing",

        searchTeam: "Search team or round or group",
        sortRound: "Default",
        sortDate: "Sort by Date",
        autoSchedule: "Auto Schedule",

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
        league: "Liga",

        chooseTeam: "Pilih Tim",
        selectedTeams: "Tim Terpilih",
        homeaway: "Kandang dan Tandang",
        singlemeeting: "bertemu satu kali",

        qualified: "Lolos",
        qualifiedSecondary: "Lolos Sekunder",
        eliminated: "Tereliminasi",
        eliminatedSecondary: "Tereliminasi Sekunder",

        leagueGenerator: "Generator Liga",
        createStandings: "Buat Klasemen",
        deleteStandings: "Hapus Klasemen",

        searchTeam: "Cari Tim, ronde, atau grup",
        sortRound: "Default",
        sortDate: "Urutkan berdasarkan Tanggal",
        autoSchedule: "Jadwal Otomatis",

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
        league: "Ligue",

        chooseTeam: "Choisir une équipe",
        selectedTeams: "Équipes sélectionnées",
        homeaway: "Aller-Retour",
        singlemeeting: "Match unique",

        qualified: "Qualifié",
        qualifiedSecondary: "Qualifié secondaire",
        eliminated: "Éliminé",
        eliminatedSecondary: "Éliminé secondaire",

        leagueGenerator: "Générateur de ligue",
        createStandings: "Créer le classement",
        deleteStandings: "Supprimer le classement",

        searchTeam: "Rechercher une équipe, un tour ou un groupe",
        sortRound: "Par défaut",
        sortDate: "Trier par date",
        autoSchedule: "Planification automatique",

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
        league: "联赛",

        chooseTeam: "选择球队",
        selectedTeams: "已选球队",
        homeaway: "主客场",
        singlemeeting: "单场比赛",

        qualified: "晋级",
        qualifiedSecondary: "次级晋级",
        eliminated: "淘汰",
        eliminatedSecondary: "次级淘汰",

        leagueGenerator: "联赛生成器",
        createStandings: "创建积分榜",
        deleteStandings: "删除积分榜",

        searchTeam: "搜索球队、轮次或小组",
        sortRound: "默认",
        sortDate: "按日期排序",
        autoSchedule: "自动安排赛程",

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
        league: "الدوري",

        chooseTeam: "اختيار الفريق",
        selectedTeams: "الفرق المختارة",
        homeaway: "ذهاب وإياب",
        singlemeeting: "مباراة واحدة",

        qualified: "متأهل",
        qualifiedSecondary: "متأهل ثانوي",
        eliminated: "مُستبعد",
        eliminatedSecondary: "مُستبعد ثانوي",

        leagueGenerator: "منشئ الدوري",
        createStandings: "إنشاء الترتيب",
        deleteStandings: "حذف الترتيب",

        searchTeam: "البحث عن فريق أو جولة أو مجموعة",
        sortRound: "افتراضي",
        sortDate: "الترتيب حسب التاريخ",
        autoSchedule: "جدولة تلقائية",

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
        league: "Лига",

        chooseTeam: "Выбрать команду",
        selectedTeams: "Выбранные команды",
        homeaway: "Дома и в гостях",
        singlemeeting: "Один матч",

        qualified: "Квалифицирован",
        qualifiedSecondary: "Дополнительная квалификация",
        eliminated: "Выбыл",
        eliminatedSecondary: "Дополнительное выбытие",

        leagueGenerator: "Генератор лиги",
        createStandings: "Создать таблицу",
        deleteStandings: "Удалить таблицу",

        searchTeam: "Поиск команды, раунда или группы",
        sortRound: "По умолчанию",
        sortDate: "Сортировать по дате",
        autoSchedule: "Автоматическое расписание",

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
        league: "Liga",

        chooseTeam: "Elegir equipo",
        selectedTeams: "Equipos seleccionados",
        homeaway: "Ida y vuelta",
        singlemeeting: "Partido único",

        qualified: "Clasificado",
        qualifiedSecondary: "Clasificado secundario",
        eliminated: "Eliminado",
        eliminatedSecondary: "Eliminado secundario",

        leagueGenerator: "Generador de liga",
        createStandings: "Crear clasificación",
        deleteStandings: "Eliminar clasificación",

        searchTeam: "Buscar equipo, ronda o grupo",
        sortRound: "Predeterminado",
        sortDate: "Ordenar por fecha",
        autoSchedule: "Programación automática",

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


                // Tetap gunakan select lama
                matchSort.value =
                    value;


                // Ubah tulisan tombol

                matchSortValue.textContent =
                    option.textContent.trim();


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


                // Render ulang

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

        document.getElementById(button.dataset.panel).style.display = "block";

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
        `${selectedTeams.length} / 20`;

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

    initializeStanding();

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

    system.qualified = selectedQualified;

    system.qualifiedSecondary = selectedQualifiedSecondary;

    system.eliminated = selectedEliminated;

    system.eliminatedSecondary = selectedEliminatedSecondary;

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

        if (selectedTeams.length >= 20) {

            event.target.checked = false;

            showToast("Maximum 20 teams!", "warning");

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

const qualifiedCount = document.getElementById("qualified-count");

const qualifiedSecondaryCount = document.getElementById("qualified-secondary-count");

const eliminatedCount = document.getElementById("eliminated-count");

const eliminatedSecondaryCount = document.getElementById("eliminated-secondary-count");

let selectedQualified = system.qualified;

let selectedQualifiedSecondary = system.qualifiedSecondary;

let selectedEliminated = system.eliminated;

let selectedEliminatedSecondary = system.eliminatedSecondary;

function updateQualificationDisplay() {

    qualifiedCount.textContent = selectedQualified;

    qualifiedSecondaryCount.textContent =
        selectedQualifiedSecondary;

    eliminatedCount.textContent =
        selectedEliminated;

    eliminatedSecondaryCount.textContent =
        selectedEliminatedSecondary;

}

updateQualificationDisplay();

function getTotalSlots() {

    return (
        selectedQualified +
        selectedQualifiedSecondary +
        selectedEliminated +
        selectedEliminatedSecondary
    );

}

document.addEventListener("click", function (event) {

    if (
        !event.target.classList.contains("plus-btn") &&
        !event.target.classList.contains("minus-btn")
    ) return;

    const type =
        event.target.closest(".qualification").dataset.type;

    const isPlus =
        event.target.classList.contains("plus-btn");

    switch (type) {

        case "qualified":

            if (isPlus) {

                if (getTotalSlots() >= selectedTeams.length) {

                    showToast(
                        "Total slots cannot exceed selected teams!",
                        "warning"
                    );

                    return;

                }

                selectedQualified++;

            } else if (selectedQualified > 0) {

                selectedQualified--;

            }

            break;

        case "qualifiedSecondary":

            if (isPlus) {

                if (getTotalSlots() >= selectedTeams.length) {

                    showToast(
                        "Total slots cannot exceed selected teams!",
                        "warning"
                    );

                    return;

                }

                selectedQualifiedSecondary++;

            } else if (selectedQualifiedSecondary > 0) {

                selectedQualifiedSecondary--;

            }

            break;

        case "eliminated":

            if (isPlus) {

                if (getTotalSlots() >= selectedTeams.length) {

                    showToast(
                        "Total slots cannot exceed selected teams!",
                        "warning"
                    );

                    return;

                }

                selectedEliminated++;

            } else if (selectedEliminated > 0) {

                selectedEliminated--;

            }

            break;

        case "eliminatedSecondary":

            if (isPlus) {

                if (getTotalSlots() >= selectedTeams.length) {

                    showToast(
                        "Total slots cannot exceed selected teams!",
                        "warning"
                    );

                    return;

                }

                selectedEliminatedSecondary++;

            } else if (selectedEliminatedSecondary > 0) {

                selectedEliminatedSecondary--;

            }

            break;

    }

    updateQualificationDisplay();

});

function selectAllTeams(options) {

    const allTeams = options.teams;
    const maxTeams = options.maxTeams;

    options.selectedTeams.length = 0;

    allTeams
        .slice(0, maxTeams)
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

        maxTeams: 20,

        selectedTeams: selectedTeams,

        render: function () {

            renderTeamList(searchTeamSystem.value);

        },

        updateCounter: function () {

            updateTeamCounter();

        }

    });

});

const standingSetup =
    document.getElementById("standing-setup");

const randomBtn =
    document.getElementById("random-btn");

const deleteStandingBtn =
    document.getElementById("delete-standing-btn");

const deleteStandingModal = document.getElementById("delete-standing-modal");

const cancelDeleteStandingBtn = document.getElementById("cancel-delete-standing-btn");

const confirmDeleteStandingBtn = document.getElementById("confirm-delete-standing-btn");

deleteStandingBtn.addEventListener("click", function () {

    deleteStandingModal.classList.add("show");

    document.body.classList.add("modal-open");

});

cancelDeleteStandingBtn.addEventListener("click", function () {

    deleteStandingModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function resetTournamentState() {

    system.standing = null;

    system.matches = [];

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

    standingSetup.innerHTML = "";

    matchesContainer.innerHTML = "";

    document.getElementById("team-statistics-container").innerHTML = "";

}

function deleteStanding() {

    system.standing = null;

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    resetTournamentState();

    standingSetup.innerHTML = "";

    randomBtn.style.display = "inline-block";

    deleteStandingBtn.style.display = "none";

}

confirmDeleteStandingBtn.addEventListener("click", function () {

    deleteStanding();

    deleteStandingModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Standing deleted!",
        "success"
    );

});

function renderStanding() {

    if (!system.standing) return;

    let html = `

    <div class="group-card">

    <table class="standing-table">

        <thead>

            <tr>

                <th>#</th>
                <th data-i18n="team">Team</th>
                <th data-i18n="p">P</th>
                <th data-i18n="w">W</th>
                <th data-i18n="d">D</th>
                <th data-i18n="l">L</th>
                <th data-i18n="gF">GF</th>
                <th data-i18n="gA">GA</th>
                <th data-i18n="gD">GD</th>
                <th data-i18n="pts">Pts</th>

            </tr>

        </thead>

        <tbody>

    `;

    system.standing.forEach(function (teamData, index) {

        const team = teams.find(function (item) {

            return item.id === teamData.id;

        });

        const status = getStandingStatus(index + 1, system.standing.length);

        html += `

        <tr class="${status}">

            <td>${index + 1}</td>

            <td class="team-cell">

                ${getTeamLogo(team)}

                ${team.name}

            </td>

            <td>${teamData.played}</td>

            <td>${teamData.win}</td>

            <td>${teamData.draw}</td>

            <td>${teamData.lose}</td>

            <td>${teamData.goalsFor}</td>

            <td>${teamData.goalsAgainst}</td>

            <td>${teamData.goalDifference}</td>

            <td>${teamData.points}</td>

        </tr>

        `;

    });

    html += `

        </tbody>

    </table>

    </div>

    `;

    standingSetup.innerHTML = html;

}

function createStanding() {

    system.standing = selectedTeams.map(function (id) {

        return {

            id,

            played: 0,
            win: 0,
            draw: 0,
            lose: 0,

            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,

            points: 0

        };

    });

    saveStanding();

    generateLeagueMatches();

    renderStanding();

    renderMatches();

}

function saveStanding() {

    system.standing = selectedTeams.map(function (id) {

        return {

            id,

            played: 0,

            win: 0,

            draw: 0,

            lose: 0,

            goalsFor: 0,

            goalsAgainst: 0,

            goalDifference: 0,

            points: 0

        };

    });

    localStorage.setItem(
        "tournaments",
        JSON.stringify(tournaments)
    );

}

function saveTournament() {

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    localStorage.setItem(
        "teams",
        JSON.stringify(teams)
    );

}

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

randomBtn.addEventListener("click", function () {

    if (selectedTeams.length < 2) {

        showToast(
            "Minimal 2 teams!",
            "warning"
        );

        return;

    }

    createStanding();

    randomBtn.style.display = "none";

    deleteStandingBtn.style.display = "block";

});

function initializeStanding() {

    if (!system.standing) return;

    if (!system.matches) {

        generateLeagueMatches();

    }

    renderStanding();

    renderMatches();

    renderTeamStatistics();

    randomBtn.style.display = "none";

    deleteStandingBtn.style.display = "block";

}

function generateRounds(teamList) {

    const rounds = [];

    const teams = [...teamList];

    if (teams.length % 2 !== 0) {

        teams.push(null);

    }

    const totalRounds = teams.length - 1;

    for (let r = 0; r < totalRounds; r++) {

        const round = [];

        for (let i = 0; i < teams.length / 2; i++) {

            const home = teams[i];

            const away = teams[teams.length - 1 - i];

            if (home && away) {

                round.push({

                    home,
                    away

                });

            }

        }

        rounds.push(round);

        const fixed = teams.shift();

        teams.unshift(fixed);

        teams.splice(1, 0, teams.pop());

    }

    return rounds;

}

function createMatch(matchList, home, away, round) {

    matchList.push({

        id: crypto.randomUUID(),

        homeTeamId: home.id,
        awayTeamId: away.id,

        homeScore: null,
        awayScore: null,

        statistics: {

            possession: {
                home: 50,
                away: 50
            },

            shots: {
                home: 0,
                away: 0
            },

            shotsOnTarget: {
                home: 0,
                away: 0
            },

            corners: {
                home: 0,
                away: 0
            },

            fouls: {
                home: 0,
                away: 0
            },

            yellowCards: {
                home: 0,
                away: 0
            },

            redCards: {
                home: 0,
                away: 0
            }

        },

        winner: null,

        played: false,

        round: round,

        date: null,
        time: null,

        locationId: null

    });

}

function generateLeagueMatches() {

    system.matches = [];

    const rounds = generateRounds(system.standing);

    rounds.forEach(function (roundMatches, index) {

        roundMatches.forEach(function (match) {

            createMatch(

                system.matches,

                match.home,

                match.away,

                index + 1

            );

            if (selectedMeetingType === "homeAway") {

                createMatch(

                    system.matches,

                    match.away,

                    match.home,

                    index + 1 + rounds.length

                );

            }

        });

    });

    saveTournament();

}

const matchesContainer =
    document.getElementById("matches-container");

const matchSearch =
    document.getElementById("match-search");

const matchSort = document.getElementById("match-sort");

matchSearch.addEventListener("input", function () {

    renderMatches();

});

matchSort.addEventListener("change", function () {

    renderMatches();

});

function renderMatches() {

    matchesContainer.innerHTML = "";

    if (!system.matches || system.matches.length === 0) {

        return;

    }

    const matches = [...system.matches];

    // ==========================================
    // SORT
    // ==========================================

    if (matchSort.value === "round") {

        matches.sort(function (a, b) {

            return a.round - b.round;

        });

    }

    else if (matchSort.value === "date") {

        matches.sort(function (a, b) {

            // Keduanya belum punya tanggal
            if (!a.date && !b.date) {

                return 0;

            }

            // A belum punya tanggal
            // → paling bawah
            if (!a.date) {

                return 1;

            }

            // B belum punya tanggal
            // → paling bawah
            if (!b.date) {

                return -1;

            }

            const dateA =
                new Date(
                    `${a.date}T${a.time || "00:00"}`
                );

            const dateB =
                new Date(
                    `${b.date}T${b.time || "00:00"}`
                );

            return dateA - dateB;

        });

    }


    // ==========================================
    // SEARCH
    // ==========================================

    const keyword =
        matchSearch.value
            .trim()
            .toLowerCase();


    let currentRound = 0;

    let html = "";


    // ==========================================
    // RENDER
    // ==========================================

    matches.forEach(function (match) {


        const home =
            teams.find(function (team) {

                return team.id === match.homeTeamId;

            });


        const away =
            teams.find(function (team) {

                return team.id === match.awayTeamId;

            });


        const location =
            locations.find(function (item) {

                return item.id === match.locationId;

            });

        const teamMatch =
            home?.name
                ?.toLowerCase()
                .includes(keyword)
            ||
            away?.name
                ?.toLowerCase()
                .includes(keyword);


        const roundNumber =
            String(match.round)
                .replace(/^round\s*/i, "")
                .trim();


        const roundMatch =
            keyword === `round ${roundNumber}`;


        if (
            keyword &&
            !teamMatch &&
            !roundMatch
        ) {

            return;

        }


        // ==========================================
        // ROUND HEADER
        // HANYA SAAT SORT BY ROUND
        // ==========================================

        if (matchSort.value === "round") {

            if (currentRound !== match.round) {

                currentRound =
                    match.round;

                html += `

                <div class="match-round">

                    Round ${currentRound}

                </div>

                `;

            }

        }


        html += `

        <div class="match-card">

            <div class="match-info">

                <header class="match-header">

                    <button
                        class="calendar-btn"
                        data-id="${match.id}">

                        <i class="fa-solid fa-calendar"></i>

                        ${match.date
                ? match.date +
                "." +
                match.time
                : ""
            }

                    </button>


                    <button
                        class="location-btn"
                        data-match="${match.id}">

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

                    ${match.homeScore ?? "-"}

                    :

                    ${match.awayScore ?? "-"}

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

                ${match.played
                ? `

                            <button
                                class="statistics-btn"
                                data-match="${match.id}"
                                data-i18n="statistics">

                                Statistics

                            </button>

                        `
                : ""
            }


                <button
                    class="set-score-btn"
                    data-id="${match.id}"
                    data-i18n="${match.played
                ? "editScore"
                : "setScore"
            }">

                    ${match.played
                ? "Edit Score"
                : "Set Score"
            }

                </button>


                <button
                    class="auto-score-btn"
                    data-id="${match.id}"
                    data-i18n="automaticScore">

                    Automatic Score

                </button>

            </div>

        </div>

        `;

    });


    matchesContainer.innerHTML =
        html;


    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

matchesContainer.addEventListener("click", function (event) {

    const statistics =
        event.target.closest(".statistics-btn");

    if (statistics) {

        return;

    }

    const score =
        event.target.closest(".set-score-btn");

    if (score) {

        selectedMatchId = score.dataset.id;

        openScoreModal(selectedMatchId);

        return;

    }

    const auto =
        event.target.closest(".auto-score-btn");

    if (auto) {

        const match =
            findMatch(auto.dataset.id);

        generateAutomaticScore(match);

        return;

    }

    const calendar =
        event.target.closest(".calendar-btn");

    if (!calendar) return;

    selectedMatchId = calendar.dataset.id;

    openCalendarModal(selectedMatchId);

    const location = event.target.closest(".location-btn");

    if (location) {

        return;

    }

});

matchesContainer.addEventListener("click", function (event) {

    const button =
        event.target.closest(".location-btn");

    if (!button) return;

    selectedMatchId = button.dataset.id;

    renderLocationList();

    locationModal.classList.add("show");

    document.body.classList.add("modal-open");

});

function findMatchById(id) {

    return system.matches.find(function (match) {

        return match.id === id;

    });

}

const scoreModal =
    document.getElementById("score-modal");

const homeTeamName =
    document.getElementById("home-team-name");

const awayTeamName =
    document.getElementById("away-team-name");

const homeScoreInput =
    document.getElementById("home-score-input");

const awayScoreInput =
    document.getElementById("away-score-input");

const cancelScoreBtn =
    document.getElementById("cancel-score-btn");

const saveScoreBtn =
    document.getElementById("save-score-btn");

let selectedMatchId = null;

function openScoreModal(matchId) {

    const match =
        findMatch(matchId);

    const home =
        teams.find(function (team) {

            return team.id === match.homeTeamId;

        });

    const away =
        teams.find(function (team) {

            return team.id === match.awayTeamId;

        });

    homeTeamName.textContent =
        home.name;

    awayTeamName.textContent =
        away.name;

    homeScoreInput.value =
        match.homeScore ?? 0;

    awayScoreInput.value =
        match.awayScore ?? 0;

    scoreModal.classList.add("show");

    document.body.classList.add("modal-open");

    deleteScoreBtn.style.display = match.played ? "inline-block" : "none";

}

cancelScoreBtn.addEventListener("click", function () {

    scoreModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

saveScoreBtn.addEventListener("click", function () {

    const match =
        findMatch(selectedMatchId);

    match.homeScore =
        Number(homeScoreInput.value);

    match.awayScore =
        Number(awayScoreInput.value);

    match.played = true;

    generateMatchStatistics(match);

    updateStanding();

    updateTeamStatistics();

    renderTeamStatistics();

    renderStanding();

    saveTournament();

    renderMatches();

    if (isLeagueFinished()) {

        advanceQualifiedTeams();

        sendQualifiedTeams();

        showChampion();

    }

    scoreModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(

        "Score saved!",

        "success"

    );

});

function resetStanding() {

    system.standing.forEach(function (team) {

        team.played = 0;

        team.win = 0;

        team.draw = 0;

        team.lose = 0;

        team.goalsFor = 0;

        team.goalsAgainst = 0;

        team.goalDifference = 0;

        team.points = 0;

    });

}

function findStandingTeam(id) {

    return system.standing.find(function (team) {

        return team.id === id;

    });

}

function updateStandingTeam(team, gf, ga) {

    team.played++;

    team.goalsFor += gf;

    team.goalsAgainst += ga;

    team.goalDifference =
        team.goalsFor -
        team.goalsAgainst;

    if (gf > ga) {

        team.win++;

        team.points += 3;

    }

    else if (gf === ga) {

        team.draw++;

        team.points++;

    }

    else {

        team.lose++;

    }

}

function updateStanding() {

    resetStanding();

    system.matches.forEach(function (match) {

        if (!match.played) return;

        const home =
            findStandingTeam(match.homeTeamId);

        const away =
            findStandingTeam(match.awayTeamId);

        updateStandingTeam(

            home,

            match.homeScore,

            match.awayScore

        );

        updateStandingTeam(

            away,

            match.awayScore,

            match.homeScore

        );

    });

    sortStanding();

}

function sortStanding() {

    system.standing.sort(function (a, b) {

        if (b.points !== a.points) {

            return b.points - a.points;

        }

        if (b.goalDifference !== a.goalDifference) {

            return b.goalDifference - a.goalDifference;

        }

        if (b.goalsFor !== a.goalsFor) {

            return b.goalsFor - a.goalsFor;

        }

        const teamA =
            teams.find(function (team) {

                return team.id === a.id;

            });

        const teamB =
            teams.find(function (team) {

                return team.id === b.id;

            });

        return teamA.name.localeCompare(teamB.name);

    });

}

function generateAutomaticScore(match) {

    match.homeScore =
        Math.floor(Math.random() * 6);

    match.awayScore =
        Math.floor(Math.random() * 6);

    match.played = true;

    generateMatchStatistics(match);

    updateStanding();

    updateTeamStatistics();

    renderTeamStatistics();

    renderStanding();

    saveTournament();

    renderMatches();

    if (isLeagueFinished()) {

        sendQualifiedTeamsLeague();

        showChampion();

    }

    showToast(

        "Automatic score generated!",

        "success"

    );

}

const calendarModal = document.getElementById("calendar-modal");

const matchDate = document.getElementById("match-date");

const matchTime = document.getElementById("match-time");

const cancelCalendarBtn = document.getElementById("cancel-calendar-btn");

const saveCalendarBtn = document.getElementById("save-calendar-btn");

function findMatch(id) {

    return system.matches.find(function (match) {

        return match.id === id;

    });

}

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

    const match =
        findMatch(matchId);

    matchDate.value =
        match.date || "";

    matchTime.value =
        match.time || "";


    updateScheduleDisplay();


    deleteCalendarBtn.style.display =
        match.date
            ? "inline-block"
            : "none";


    calendarModal.classList.add("show");

    document.body.classList.add("modal-open");

}

function updateScheduleDisplay() {

    const dateDisplay =
        document.getElementById("selected-date");

    const timeDisplay =
        document.getElementById("selected-time");


    dateDisplay.textContent =
        matchDate.value
            ? formatDisplayDate(matchDate.value)
            : "Select Date";


    timeDisplay.textContent =
        matchTime.value
            ? matchTime.value
            : "Select Time";

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

function formatDisplayDate(value) {

    if (!value) {

        return "Select Date";

    }


    const date =
        new Date(value + "T00:00:00");


    return date.toLocaleDateString(
        "en-US",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

saveCalendarBtn.addEventListener("click", function () {

    const match =
        findMatch(selectedMatchId);

    match.date =
        matchDate.value;

    match.time =
        matchTime.value;

    saveTournament();

    renderMatches();

    calendarModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(

        "Schedule updated!",

        "success"

    );

});

cancelCalendarBtn.addEventListener("click", function () {

    calendarModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

const deleteScoreBtn = document.getElementById("delete-score-btn");

const deleteCalendarBtn = document.getElementById("delete-calendar-btn");

const deleteLocationBtn = document.getElementById("delete-location-btn");

const locations = JSON.parse(localStorage.getItem("locations")) || [];

const locationModal =
    document.getElementById("location-modal");

const locationList =
    document.getElementById("location-list");

const searchLocation =
    document.getElementById("search-location");

const closeLocationBtn =
    document.getElementById("close-location-btn");

function renderLocationList(keyword = "") {

    locationList.innerHTML = "";

    locations.forEach(function (location) {

        if (
            !location.name
                .toLowerCase()
                .includes(keyword.toLowerCase())
        ) return;

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

matchesContainer.addEventListener("click", function (event) {

    const button =
        event.target.closest(".location-btn");

    if (!button) return;

    selectedMatchId =
        button.dataset.match;

    const match = findMatchById(selectedMatchId);

    deleteLocationBtn.style.display = match.locationId ? "inline-block" : "none";

    renderLocationList();

    locationModal.classList.add("show");

    document.body.classList.add("modal-open");

});

searchLocation.addEventListener("input", function () {

    renderLocationList(this.value);

});

locationList.addEventListener("click", function (event) {

    const item =
        event.target.closest(".location-item");

    if (!item) return;

    const match =
        findMatchById(selectedMatchId);

    match.locationId = item.dataset.id;

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

deleteScoreBtn.addEventListener("click", function () {

    const match =
        findMatchById(selectedMatchId);

    match.homeScore = null;
    match.awayScore = null;
    match.played = false;

    updateStanding();

    renderStanding();

    updateTeamStatistics();

    renderTeamStatistics();

    saveTournament();

    renderStanding();

    renderMatches();

    scoreModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Score deleted!",
        "success"
    );

});

deleteCalendarBtn.addEventListener("click", function () {

    const match =
        findMatchById(selectedMatchId);

    match.date = null;
    match.time = null;

    saveTournament();

    renderMatches();

    calendarModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Schedule deleted!",
        "success"
    );

});

deleteLocationBtn.addEventListener("click", function () {

    const match =
        findMatchById(selectedMatchId);

    match.locationId = null;

    saveTournament();

    renderMatches();

    locationModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Location deleted!",
        "success"
    );

});

const statisticsModal =
    document.getElementById("statistics-modal");

const statisticsContent =
    document.getElementById("statistics-content");

const closeStatisticsBtn =
    document.getElementById("close-statistics-btn");

function updateTeamStatistics() {

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

    system.matches.forEach(function (match) {

        if (!match.played) return;

        const home = teams.find(team => team.id === match.homeTeamId);
        const away = teams.find(team => team.id === match.awayTeamId);

        if (!home || !away) return;

        home.statistics.matches++;
        away.statistics.matches++;

        home.statistics.goalsFor += match.homeScore;
        home.statistics.goalsAgainst += match.awayScore;

        away.statistics.goalsFor += match.awayScore;
        away.statistics.goalsAgainst += match.homeScore;

        if (match.awayScore === 0)
            home.statistics.cleanSheets++;

        if (match.homeScore === 0)
            away.statistics.cleanSheets++;

        if (match.homeScore > match.awayScore) {

            home.statistics.wins++;
            away.statistics.losses++;

        }

        else if (match.homeScore < match.awayScore) {

            away.statistics.wins++;
            home.statistics.losses++;

        }

        else {

            home.statistics.draws++;
            away.statistics.draws++;

        }

    });

}

function generateMatchStatistics(match) {

    match.statistics = {

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

    match.statistics.possession.away =
        100 - match.statistics.possession.home;

    match.statistics.shotsOnTarget.home =
        Math.floor(Math.random() * (match.statistics.shots.home + 1));

    match.statistics.shotsOnTarget.away =
        Math.floor(Math.random() * (match.statistics.shots.away + 1));

}

matchesContainer.addEventListener("click", function (event) {

    const button =
        event.target.closest(".statistics-btn");

    if (!button) return;

    openStatisticsModal(button.dataset.match);

});

function openStatisticsModal(matchId) {

    const match =
        findMatchById(matchId);

    const home =
        teams.find(function (team) {

            return team.id === match.homeTeamId;

        });

    const away =
        teams.find(function (team) {

            return team.id === match.awayTeamId;

        });

    const stats =
        match.statistics;

    statisticsContent.innerHTML = `

<div class="match-statistics">

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
        localStorage.getItem("language") || "en"
    );

}

closeStatisticsBtn.addEventListener("click", function () {

    statisticsModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function isLeagueFinished() {

    for (const match of system.matches) {

        if (!match.played) {

            return false;

        }

    }

    return true;

}

function getChampion() {

    if (!system.standing || system.standing.length === 0) {

        return null;

    }

    return system.standing[0];

}

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

const championModal =
    document.getElementById("champion-modal");

const championContent =
    document.getElementById("champion-content");

const closeChampionBtn =
    document.getElementById("close-champion-btn");

function showChampion() {

    const champion =
        getChampion();

    if (!champion) return;

    const team =
        teams.find(function (item) {

            return item.id === champion.id;

        });

    championContent.innerHTML = `

<h1>

🏆

</h1>

<h2 data-i18n="champion">

CHAMPION

</h2>

<div class="champion-logo">

${getTeamLogo(team)}

</div>

<h2>

${team.name}

</h2>

<p data-i18n="congratulations">

Congratulations!

</p>

<i class="fa-solid fa-trophy trophy-icon"></i>

`;

    championModal.classList.add("show");

    document.body.classList.add("modal-open");

    launchConfetti();

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

closeChampionBtn.addEventListener("click", function () {

    championModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function getStandingStatus(position, totalTeams) {

    if (position <= selectedQualified) {

        return "qualified";

    }

    if (
        position <=
        selectedQualified +
        selectedQualifiedSecondary
    ) {

        return "qualified-secondary";

    }

    if (
        position >
        totalTeams -
        selectedEliminated
    ) {

        return "eliminated";

    }

    if (
        position >
        totalTeams -
        selectedEliminated -
        selectedEliminatedSecondary
    ) {

        return "eliminated-secondary";

    }

    return "";

}

function updateTeamStatistics() {

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

    system.matches.forEach(function (match) {

        if (!match.played) return;

        const home =
            teams.find(team => team.id === match.homeTeamId);

        const away =
            teams.find(team => team.id === match.awayTeamId);

        if (!home || !away) return;

        home.statistics.matches++;
        away.statistics.matches++;

        home.statistics.goalsFor += match.homeScore;
        home.statistics.goalsAgainst += match.awayScore;

        away.statistics.goalsFor += match.awayScore;
        away.statistics.goalsAgainst += match.homeScore;

        if (match.awayScore === 0)
            home.statistics.cleanSheets++;

        if (match.homeScore === 0)
            away.statistics.cleanSheets++;

        if (match.homeScore > match.awayScore) {

            home.statistics.wins++;
            away.statistics.losses++;

        }

        else if (match.homeScore < match.awayScore) {

            away.statistics.wins++;
            home.statistics.losses++;

        }

        else {

            home.statistics.draws++;
            away.statistics.draws++;

        }

    });

}

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

    const goalDifference =
        [...tournamentTeams];

    goalDifference.sort(function (a, b) {

        const gdA =
            a.statistics.goalsFor -
            a.statistics.goalsAgainst;

        const gdB =
            b.statistics.goalsFor -
            b.statistics.goalsAgainst;

        return gdB - gdA;

    });

    html += `

<div class="statistics-card">

<h2 data-i18n="goalDifference">

Goal Difference

</h2>

<table class="statistics-ranking">

<tr>

<th>#</th>
<th data-i18n="team">Team</th>
<th data-i18n="gD">GD</th>

</tr>

`;

    goalDifference.forEach(function (team, index) {

        html += `

    <tr>

    <td>${index + 1}</td>

    <td>

    ${getTeamLogo(team)}

    ${team.name}

    </td>

    <td>

    ${team.statistics.goalsFor -
            team.statistics.goalsAgainst
            }

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

function getNextSystem() {

    const currentIndex = tournament.systems.findIndex(function (item) {

        return item.id === system.id;

    });

    if (currentIndex === -1) {

        return null;

    }

    if (currentIndex >= tournament.systems.length - 1) {

        return null;

    }

    return tournament.systems[currentIndex + 1];

}

function getQualifiedTeams() {

    return system.standing
        .slice(0, selectedQualified)
        .map(function (team) {

            return team.id;

        });

}

function sendQualifiedTeamsLeague() {

    const nextSystem = getNextSystem();

    if (!nextSystem) {

        return;

    }

    nextSystem.teams = system.standing
        .slice(0, selectedQualified)
        .map(function (team) {

            return team.id;

        });

    saveTournament();

}

initializeStanding();