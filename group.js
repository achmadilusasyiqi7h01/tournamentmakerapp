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
        group: "Group",

        chooseTeam: "Choose Team",
        selectedTeams: "Selected Teams",
        homeaway: "Home Away",
        singlemeeting: "Single Meeting",

        qualified: "Qualified",
        qualifiedSecondary: "Qualified Secondary",
        eliminated: "Eliminated",
        eliminatedSecondary: "Eliminated Secondary",

        groupGenerator: "Group Generator",
        random: "Random",
        manual: "Manual",
        createStandings: "Create Standing",
        deleteStandings: "Delete Standing",

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
        group: "Grup",

        chooseTeam: "Pilih Tim",
        selectedTeams: "Tim Terpilih",
        homeaway: "Kandang dan Tandang",
        singlemeeting: "bertemu satu kali",

        qualified: "Lolos",
        qualifiedSecondary: "Lolos Sekunder",
        eliminated: "Tereliminasi",
        eliminatedSecondary: "Tereliminasi Sekunder",

        groupGenerator: "Generator Grup",
        random: "Acak",
        manual: "Manual",
        createStandings: "Buat Klasemen",
        deleteStandings: "Hapus Klasemen",

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
        group: "Groupe",

        chooseTeam: "Choisir une équipe",
        selectedTeams: "Équipes sélectionnées",
        homeaway: "Aller-Retour",
        singlemeeting: "Match unique",

        qualified: "Qualifié",
        qualifiedSecondary: "Qualifié secondaire",
        eliminated: "Éliminé",
        eliminatedSecondary: "Éliminé secondaire",

        groupGenerator: "Générateur de groupes",
        random: "Aléatoire",
        manual: "Manuel",
        createStandings: "Créer le classement",
        deleteStandings: "Supprimer le classement",

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

        mostGoals: "Meilleurs buteurs",
        bestDefence: "Meilleure défense",
        mostWins: "Plus de victoires",
        mostDraws: "Plus de matchs nuls",
        mostLosses: "Plus de défaites",
        mostCleanSheets: "Plus de clean sheets",
        goalDifference: "Différence de buts",

        champion: "CHAMPION",
        congratulations: "Félicitations !",
        empty: "Vide",

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
        group: "小组",

        chooseTeam: "选择球队",
        selectedTeams: "已选球队",
        homeaway: "主客场",
        singlemeeting: "单循环",

        qualified: "晋级",
        qualifiedSecondary: "次级晋级",
        eliminated: "淘汰",
        eliminatedSecondary: "次级淘汰",

        groupGenerator: "小组生成器",
        random: "随机",
        manual: "手动",
        createStandings: "创建积分榜",
        deleteStandings: "删除积分榜",

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
        group: "المجموعة",

        chooseTeam: "اختيار الفريق",
        selectedTeams: "الفرق المختارة",
        homeaway: "ذهاب وإياب",
        singlemeeting: "مباراة واحدة",

        qualified: "متأهل",
        qualifiedSecondary: "متأهل ثانوي",
        eliminated: "مُستبعد",
        eliminatedSecondary: "مُستبعد ثانوي",

        groupGenerator: "مولد المجموعات",
        random: "عشوائي",
        manual: "يدوي",
        createStandings: "إنشاء الترتيب",
        deleteStandings: "حذف الترتيب",

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
        group: "Группа",

        chooseTeam: "Выбрать команду",
        selectedTeams: "Выбранные команды",
        homeaway: "Дома и в гостях",
        singlemeeting: "Один матч",

        qualified: "Квалифицирован",
        qualifiedSecondary: "Дополнительная квалификация",
        eliminated: "Выбыл",
        eliminatedSecondary: "Дополнительное выбытие",

        groupGenerator: "Генератор групп",
        random: "Случайно",
        manual: "Вручную",
        createStandings: "Создать таблицу",
        deleteStandings: "Удалить таблицу",

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
        group: "Grupo",

        chooseTeam: "Elegir equipo",
        selectedTeams: "Equipos seleccionados",
        homeaway: "Ida y vuelta",
        singlemeeting: "Partido único",

        qualified: "Clasificado",
        qualifiedSecondary: "Clasificado secundario",
        eliminated: "Eliminado",
        eliminatedSecondary: "Eliminado secundario",

        groupGenerator: "Generador de grupos",
        random: "Aleatorio",
        manual: "Manual",
        createStandings: "Crear clasificación",
        deleteStandings: "Eliminar clasificación",

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
        thisDeleteAll: "Esto también eliminará todos los:",
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

const standingSetup = document.getElementById("standing-setup");

let groupSizes = [];

let groups = [];

function initializeStanding() {

    selectedTeams = [...system.teams];

    if (system.standing) {

        groups = system.standing;

        if (system.manualMode === true) {

            hideStandingButtons();

        }

        groupSizes = groups.map(function (group) {

            return group.maxTeams;

        });

        renderStandingSetup();

        if (
            !system.matches ||
            system.matches.length === 0

        ) {

            generateLeagueMatches();

            saveTournament();

        }

        updateStanding();

        updateTeamStatistics();

        renderTeamStatistics();

        renderMatches();

        hideStandingButtons();

        showDeleteButton();

        return;

    }

    groupSizes = generateGroupSizes(selectedTeams.length);

}

function generateGroupSizes(totalTeams) {

    const maxPerGroup = 4;

    const totalGroups =
        Math.ceil(totalTeams / maxPerGroup);

    let sizes = [];

    let remain = totalTeams;

    for (let i = 0; i < totalGroups; i++) {

        let value =
            Math.min(maxPerGroup, remain);

        sizes.push(value);

        remain -= value;

    }

    while (Math.min(...sizes) < 3) {

        const small =
            sizes.indexOf(Math.min(...sizes));

        const big =
            sizes.indexOf(Math.max(...sizes));

        sizes[small]++;

        sizes[big]--;

    }

    return sizes;

}

function createEmptyGroups() {

    groups = [];

    groupSizes.forEach(function (size, index) {

        groups.push({

            name: String.fromCharCode(65 + index),

            maxTeams: size,

            teams: new Array(size).fill(null)

        });

    });

}

function renderStandingSetup(totalGroup = groups.length) {

    standingSetup.innerHTML = "";

    for (let g = 0; g < totalGroup; g++) {

        const group = groups[g];

        let html = `

        <div class="group-card">

        <h3> 
            <span data-i18n="group">
                Group
            </span> ${group.name}
        </h3>

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

        for (let i = 0; i < group.maxTeams; i++) {

            const teamData = group.teams[i];

            if (teamData) {

                const teamId = teamData.id;

                const team = teams.find(function (item) {

                    return item.id === teamId;

                });

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

                const status = getStandingStatus(i + 1, group.maxTeams);

                html += `
                <tr class="${status}">
                <td>${i + 1}</td>
                <td class="team-cell">
                ${logo}
                <span>${team.name}</span>
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

            } else {

                html += `
                <tr class="team-slot empty-slot" data-group="${group.name}" data-slot="${i}">
                <td>${i + 1}</td>
                <td colspan="9">Empty</td>
                </tr>
                </div>
                `;

            }


        }

        html += `
        </tbody>
        </table>
        </div>
        `;

        standingSetup.innerHTML += html;

        applyLanguage(
            localStorage.getItem("language") || "en"
        );

    }

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

function renderEmptyStanding() {

    standingSetup.innerHTML = "";

    groups.forEach(function (group) {

        let html = `

    <div class="group-card">

        <h3>

            <span data-i18n="group">
                Group
            </span>

            ${group.name}

        </h3>

        `;

        for (let i = 0; i < group.maxTeams; i++) {

            html += `

        <div
            id="slot-${group.name}-${i}"
            class="team-slot empty-slot"
            data-group="${group.name}"
            data-slot="${i}">

            <span data-i18n="empty">
                Empty
            </span>

        </div>

        `;

        }

        html += `

        </div>

        `;

        standingSetup.innerHTML += html;

        applyLanguage(
            localStorage.getItem("language") || "en"
        );

    });

}

standingSetup.addEventListener("click", function (event) {

    const slot =
        event.target.closest(".empty-slot");

    if (!slot) return;

    selectedGroup =
        slot.dataset.group;

    selectedSlot =
        Number(slot.dataset.slot);

    renderManualTeams();

    manualModal.classList.add("show");

    document.body.classList.add("modal-open");

});

const searchManual = document.getElementById("manual-search");

searchManual.addEventListener("input", function () {

    renderManualTeams(this.value);

});

function renderManualTeams(keyword = "") {

    manualTeamContainer.innerHTML = "";

    const usedTeams = [];

    groups.forEach(function (group) {

        group.teams.forEach(function (team) {

            if (team) {

                usedTeams.push(team.id);

            }

        });

    });

    teams.forEach(function (team) {

        if (!selectedTeams.includes(team.id)) return;

        if (usedTeams.includes(team.id)) return;

        if (
            !team.name
                .toLowerCase()
                .includes(keyword.toLowerCase())
        )

            return;

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

        manualTeamContainer.innerHTML += `

        <div
        class="manual-team"
        data-id="${team.id}">

        ${logo}
        ${team.name}

        </div>

        `;

    });

}

const closeManualBtn = document.getElementById("close-manual-btn");

closeManualBtn.addEventListener("click", function () {

    manualModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

manualTeamContainer.addEventListener("click", function (event) {

    const item =
        event.target.closest(".manual-team");

    if (!item) return;

    const group =
        groups.find(function (g) {

            return g.name === selectedGroup;

        });

    group.teams[selectedSlot] = {

        id: item.dataset.id,

        played: 0,
        win: 0,
        draw: 0,
        lose: 0,

        goalsFor: 0,
        goalsAgainst: 0,

        goalDifference: 0,

        points: 0

    };

    renderStandingSetup();

    system.standing = groups;

    saveTournament();

    manualModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    checkManualCompleted();

});

function checkManualCompleted() {

    const empty = groups.reduce(function (total, group) {

        return total + group.teams.filter(team => team === null).length;

    }, 0);

    if (empty > 0) {

        showToast(
            `${empty} slot masih kosong!`,
            "warning"
        );

        return;

    }

    const full = groups.every(function (group) {

        return group.teams.every(function (team) {

            return team !== null;

        });

    });

    if (!full) return;

    renderStandingSetup();

    system.standing = groups;

    generateLeagueMatches();

    updateStanding();

    updateTeamStatistics();

    saveTournament();

    renderMatches();

    hideStandingButtons();

    showDeleteButton();

}

async function fillStandingAnimation() {

    for (const group of groups) {

        for (let i = 0; i < group.teams.length; i++) {

            const team =
                teams.find(function (item) {

                    return item.id ===
                        group.teams[i].id;

                });

            await animateSlot(

                group.name,

                i,

                team.name

            );

        }

    }

    renderStandingSetup();

}

function updateTeamStats(teamData, goalsFor, goalsAgainst) {

    teamData.played++;

    teamData.goalsFor += goalsFor;

    teamData.goalsAgainst += goalsAgainst;

    teamData.goalDifference =
        teamData.goalsFor -
        teamData.goalsAgainst;

    if (goalsFor > goalsAgainst) {

        teamData.win++;

        teamData.points += 3;

    }

    else if (goalsFor === goalsAgainst) {

        teamData.draw++;

        teamData.points++;

    }

    else {

        teamData.lose++;

    }

}

function findTeamStanding(teamId) {

    for (const group of groups) {

        const team = group.teams.find(function (item) {

            return item.id === teamId;

        });

        if (team) {

            return team;

        }

    }

    return null;

}

function resetStandingStats() {

    groups.forEach(function (group) {

        group.teams.forEach(function (team) {

            team.played = 0;
            team.win = 0;
            team.draw = 0;
            team.lose = 0;
            team.goalsFor = 0;
            team.goalsAgainst = 0;
            team.goalDifference = 0;
            team.points = 0;

        });

    });

}

function sortStanding() {

    groups.forEach(function (group) {

        group.teams.sort(function (a, b) {

            if (b.points !== a.points) {

                return b.points - a.points;

            }

            if (b.goalDifference !== a.goalDifference) {

                return b.goalDifference - a.goalDifference;

            }

            if (b.goalsFor !== a.goalsFor) {

                return b.goalsFor - a.goalsFor;

            }

            const teamA = teams.find(team => team.id === a.id);

            const teamB = teams.find(team => team.id === b.id);

            return (teamA?.name || "").localeCompare(teamB?.name || "");

        });

    });

}

function updateStanding() {

    resetStandingStats();

    system.matches.forEach(function (group) {

        group.matches.forEach(function (match) {

            if (!match.played) return;

            const home =
                findTeamStanding(match.homeTeamId);

            const away =
                findTeamStanding(match.awayTeamId);

            if (!home || !away) return;

            updateTeamStats(

                home,

                match.homeScore,

                match.awayScore

            );

            updateTeamStats(

                away,

                match.awayScore,

                match.homeScore

            );

        });

    });

    sortStanding();

}

function generateLeagueMatches() {

    system.matches = [];

    groups.forEach(function (group) {

        const groupMatches = [];

        const schedule = generateRounds(group.teams);

        schedule.forEach(function (roundMatches, roundIndex) {

            roundMatches.forEach(function (match) {

                createMatch(
                    groupMatches,
                    match.home,
                    match.away,
                    roundIndex + 1
                );

                if (selectedMeetingType === "homeAway") {

                    createMatch(
                        groupMatches,
                        match.away,
                        match.home,
                        roundIndex + schedule.length + 1
                    );

                }

            });

        });

        system.matches.push({

            group: group.name,
            matches: groupMatches

        });

    });

}

function createMatch(matchList, home, away, round) {

    matchList.push({

        id: crypto.randomUUID(),

        homeTeamId: home.id,
        awayTeamId: away.id,

        homeScore: null,
        awayScore: null,

        statistics: {

            shotsHome: 0,
            shotsAway: 0,

            shotsOnTargetHome: 0,
            shotsOnTargetAway: 0,

            possessionHome: 50,
            possessionAway: 50,

            passesHome: 0,
            passesAway: 0,

            passAccuracyHome: 0,
            passAccuracyAway: 0,

            foulsHome: 0,
            foulsAway: 0,

            yellowHome: 0,
            yellowAway: 0,

            redHome: 0,
            redAway: 0,

            offsideHome: 0,
            offsideAway: 0,

            cornerHome: 0,
            cornerAway: 0

        },

        played: false,

        round: round,

        date: null,
        time: null,

        locationId: null

    });

}

function generateRoundRobinMatches(teamList) {

    const matches = [];

    const teams = [...teamList];

    const totalRounds = teams.length - 1;

    const totalMatchesPerRound = teams.length / 2;

    for (let round = 1; round <= totalRounds; round++) {

        for (let i = 0; i < totalMatchesPerRound; i++) {

            createMatch(

                matches,

                teams[i],

                teams[teams.length - 1 - i],

                round

            );

        }

        teams.splice(1, 0, teams.pop());

    }

    return matches;

}

function generateRounds(teamList) {

    const rounds = [];

    const teams = [...teamList];

    if (teams.length % 2 !== 0) {

        teams.push(null);

    }

    const totalRounds = teams.length - 1;

    for (let r = 0; r < totalRounds; r++) {

        rounds.push([]);

        for (let i = 0; i < teams.length / 2; i++) {

            const home = teams[i];

            const away = teams[teams.length - 1 - i];

            if (home && away) {

                rounds[r].push({

                    home,

                    away

                });

            }

        }

        const fixed = teams[0];

        const rotating = teams.slice(1);

        rotating.unshift(rotating.pop());

        teams.splice(1);

        teams.push(...rotating);

    }

    return rounds;

}

function saveTournament() {

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    localStorage.setItem(
        "teams",
        JSON.stringify(teams)
    );

}

function resetTournamentState() {

    system.standing = null;

    system.matches = [];

    groups = [];

    groupSizes = [];

    standingSetup.innerHTML = "";

    matchesContainer.innerHTML = "";

    document.getElementById("team-statistics-container").innerHTML = "";

}

const matchesContainer = document.getElementById("matches-container");

function renderMatches() {

    matchesContainer.innerHTML = "";

    system.matches.forEach(function (group) {

        let html = `
        <div class="match-group">
        <h2>
            <span data-i18n="group">
                Group
            </span>
         ${group.group}
        </h2>
        `;

        let currentRound = 0;

        const matches = [...group.matches];

        if (matchSort.value === "round") {

            matches.sort(function (a, b) {

                return a.round - b.round;

            });

        }

        else if (matchSort.value === "date") {

            matches.sort(function (a, b) {

                // Match tanpa tanggal
                // selalu berada paling bawah

                if (!a.date && !b.date) {

                    return 0;

                }

                if (!a.date) {

                    return 1;

                }

                if (!b.date) {

                    return -1;

                }

                const dateA = new Date(
                    `${a.date}T${a.time || "00:00"}`
                );

                const dateB = new Date(
                    `${b.date}T${b.time || "00:00"}`
                );

                return dateA - dateB;

            });

        }

        matches.forEach(function (match) {

            if (matchSort.value === "round") {

                if (match.round !== currentRound) {
                    currentRound = match.round;

                    html += `
                <div class="match-round">
                Round ${currentRound}
                </div>
                `;
                }

            }

            const location = locations.find(function (item) {
                return item.id === match.locationId;
            });

            const homeTeam = teams.find(function (team) {
                return team.id === match.homeTeamId;
            });

            const awayTeam = teams.find(function (team) {
                return team.id === match.awayTeamId;
            });

            const homeScore = match.homeScore ?? 0;

            const awayScore = match.awayScore ?? 0;

            const keyword =
                matchSearch.value
                    .trim()
                    .toLowerCase();


            const teamMatch =
                homeTeam?.name
                    .toLowerCase()
                    .includes(keyword)
                ||
                awayTeam?.name
                    .toLowerCase()
                    .includes(keyword);


            const roundMatch =
                keyword === `round ${match.round}`;


            const groupMatch =
                `group ${group.group}`
                    .toLowerCase()
                    .includes(keyword);


            if (
                keyword &&
                !teamMatch &&
                !roundMatch &&
                !groupMatch
            ) {

                return;

            }

            html += `
            <div class="match-card">

            <div class="match-info">

            <header class="match-header">

            <button class="calendar-btn" data-match="${match.id}">
            <i class="fa-solid fa-calendar"></i>
            ${match.date ? match.date + "." + match.time : ""}
            </button>

            <button class="location-btn" data-match="${match.id}">
            <i class="fa-solid fa-location-dot"></i>
            ${location ? location.name : ""}
            </button>

            </header>

            </div>

            <div class="match-teams">

            <div class="team">

            ${getTeamLogo(homeTeam)}

            <span>
            ${homeTeam.name}
            </span>

            </div>

            <div class="match-score">
            ${match.homeScore ?? "-"}
            :
            ${match.awayScore ?? "-"}
            </div>

            <div class="team">

            ${getTeamLogo(awayTeam)}

            <span>
            ${awayTeam.name}
            </span>

            </div>

            </div>

            <div class="match-action">

            ${match.played ? `

            <button
            class="statistics-btn"
            data-match="${match.id}"
            data-i18n="statistics">

            Statistics

            </button>

            ` : ""}

            <button
            class="set-score-btn"
            data-match="${match.id}"
            data-i18n="${match.played ? "editScore" : "setScore"}">

            ${match.played ? "Edit Score" : "Set Score"}

            </button>

            <button
            class="auto-score-btn"
            data-match="${match.id}"
            data-i18n="automaticScore">

            Automatic Score

            </button>

            </div>

            </div>

            `;

        });

        html += `
        </div>
        `;

        matchesContainer.innerHTML += html;

        applyLanguage(
            localStorage.getItem("language") || "en"
        );

    });

}

const matchSort = document.getElementById("match-sort");

const matchSearch = document.getElementById("match-search");

matchSort.addEventListener("change", function () {

    renderMatches();

});

matchSearch.addEventListener("input", function () {

    renderMatches();

});

function generateAutomaticScore(match) {

    const homeScore =
        Math.floor(Math.random() * 6);

    const awayScore =
        Math.floor(Math.random() * 6);

    match.homeScore = homeScore;

    match.awayScore = awayScore;

    match.played = true;

    generateMatchStatistics(match);

    updateStanding();

    updateTeamStatistics();

    renderTeamStatistics();

    if (isGroupFinished()) {

        sendQualifiedTeamsGroup();

    }

    saveTournament();

    renderStandingSetup();

    renderMatches();

    showToast(
        "Automatic score generated!",
        "success"
    );

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

    system.matches.forEach(function (group) {

        group.matches.forEach(function (match) {

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

    });

}

matchesContainer.addEventListener("click", function (event) {

    const button = event.target.closest(".auto-score-btn");

    if (!button) return;

    const match = findMatchById(button.dataset.match);

    generateAutomaticScore(match);

});

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

const statisticsModal =
    document.getElementById("statistics-modal");

const statisticsContent =
    document.getElementById("statistics-content");

const closeStatisticsBtn =
    document.getElementById("close-statistics-btn");

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

const calendarModal =
    document.getElementById("calendar-modal");

const matchDate =
    document.getElementById("match-date");

const matchTime =
    document.getElementById("match-time");

const openDatePicker =
    document.getElementById("open-date-picker");

const openTimePicker =
    document.getElementById("open-time-picker");

const selectedDate =
    document.getElementById("selected-date");

const selectedTime =
    document.getElementById("selected-time");

const cancelCalendarBtn = document.getElementById("cancel-calendar-btn");

const saveCalendarBtn = document.getElementById("save-calendar-btn");

let selectedMatchId = null;

let selectedHour = 0;

let selectedMinute = 0;

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
        String(date.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(date.getDate())
            .padStart(2, "0");

    return `${year}-${month}-${day}`;

}

openDatePicker.addEventListener(
    "click",
    function () {

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
);

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


    // Hari dari bulan sebelumnya

    for (
        let i = firstDay - 1;
        i >= 0;
        i--
    ) {

        createDateDay(
            previousMonthDays - i,
            month - 1,
            year,
            true
        );

    }


    // Bulan sekarang

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


    // Bulan berikutnya

    const total =
        datePickerDays.children.length;

    const remaining =
        total % 7 === 0
            ? 0
            : 7 - total % 7;

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

    const value =
        formatDateLocal(date);

    button.textContent =
        day;


    // Hari ini

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


    // Tanggal yang dipilih

    if (
        value ===
        datePickerSelectedDate
    ) {

        button.classList.add(
            "selected"
        );

    }


    button.addEventListener(
        "click",
        function () {

            selectDate(value);

        }
    );

    datePickerDays.appendChild(
        button
    );

}

function selectDate(value) {

    datePickerSelectedDate =
        value;

    matchDate.value =
        value;

    selectedDate.textContent =
        formatDisplayDate(value);

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

        matchDate.value = "";

        datePickerSelectedDate =
            null;

        selectedDate.textContent =
            "Select Date";

        datePickerModal.classList.remove(
            "show"
        );

        applyLanguage(
            localStorage.getItem("language") || "en"
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
                Math.floor(
                    now.getMinutes() / 5
                ) * 5;

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
        findMatchById(matchId);

    matchDate.value =
        match.date || "";

    matchTime.value =
        match.time || "";


    selectedDate.textContent =
        match.date
            ? formatDisplayDate(match.date)
            : "Select Date";


    selectedTime.textContent =
        match.time
            ? match.time
            : "Select Time";


    deleteCalendarBtn.style.display =
        match.date
            ? "inline-block"
            : "none";


    calendarModal.classList.add(
        "show"
    );

    applyLanguage(
        localStorage.getItem("language") || "en"
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

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

matchesContainer.addEventListener("click", function (event) {

    const button =
        event.target.closest(".calendar-btn");

    if (!button) return;

    selectedMatchId =
        button.dataset.match;

    openCalendarModal(selectedMatchId);

});

function findMatchById(id) {

    for (const group of system.matches) {

        const match =
            group.matches.find(function (item) {

                return item.id === id;

            });

        if (match) {

            return match;

        }

    }

    return null;

}

cancelCalendarBtn.addEventListener("click", function () {

    calendarModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

saveCalendarBtn.addEventListener("click", function () {

    const match =
        findMatchById(selectedMatchId);

    match.date =
        matchDate.value;

    match.time =
        matchTime.value;

    saveTournament();

    renderMatches();

    calendarModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Match schedule updated!",
        "success"
    );

});

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

matchesContainer.addEventListener("click", function (event) {

    const autoButton = event.target.closest(".auto-score-btn");

    if (autoButton) {

        const match = findMatchById(autoButton.dataset.match);

        generateAutomaticScore(match);

        return;

    }

    const button =
        event.target.closest(".set-score-btn");

    if (!button) return;

    selectedMatchId =
        button.dataset.match;

    openScoreModal(selectedMatchId);

});

function openScoreModal(matchId) {

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

    homeTeamName.textContent =
        home.name;

    awayTeamName.textContent =
        away.name;

    homeScoreInput.value =
        match.homeScore ?? 0;

    awayScoreInput.value =
        match.awayScore ?? 0;

    deleteScoreBtn.style.display = match.played ? "inline-block" : "none";

    scoreModal.classList.add("show");

    document.body.classList.add("modal-open");

}

cancelScoreBtn.addEventListener("click", function () {

    scoreModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

saveScoreBtn.addEventListener("click", function () {

    const match =
        findMatchById(selectedMatchId);

    match.homeScore =
        Number(homeScoreInput.value);

    match.awayScore =
        Number(awayScoreInput.value);

    match.played = true;

    generateMatchStatistics(match);

    updateStanding();

    updateTeamStatistics();

    renderTeamStatistics();

    if (isGroupFinished()) {

        sendQualifiedTeamsGroup();

    }

    saveTournament();

    renderStandingSetup();

    renderMatches();

    scoreModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    showToast(
        "Score saved!",
        "success"
    );

});

function saveGroupStanding() {

    system.standing = groups;

    saveTournament();

}

const deleteScoreBtn = document.getElementById("delete-score-btn");

const deleteCalendarBtn = document.getElementById("delete-calendar-btn");

const deleteLocationBtn = document.getElementById("delete-location-btn");

deleteScoreBtn.addEventListener("click", function () {

    const match =
        findMatchById(selectedMatchId);

    match.homeScore = null;
    match.awayScore = null;
    match.played = false;

    updateStanding();

    updateTeamStatistics();

    renderTeamStatistics();

    saveTournament();

    renderStandingSetup();

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

function fillSlot(groupName, index, teamName) {

    const slot = document.getElementById(
        `slot-${groupName}-${index}`
    );

    slot.classList.remove("drawing");

    const group = groups.find(function (item) {

        return item.name === groupName;

    });

    const status = getStandingStatus(index + 1, group.maxTeams);

    slot.className = `team-slot ${status}`;

    slot.textContent = `${index + 1}. ${teamName}`;

}

function animateSlot(groupName, index, teamName) {

    return new Promise(function (resolve) {

        const slot =
            document.getElementById(
                `slot-${groupName}-${index}`
            );

        slot.classList.add("drawing");

        const randomNames =
            teams.map(function (team) {

                return team.name;

            });

        let counter = 0;

        const animation =
            setInterval(function () {

                const randomIndex =
                    Math.floor(
                        Math.random() *
                        randomNames.length
                    );

                slot.textContent = `${index + 1}. ${randomNames[randomIndex]}`;

                counter++;

                if (counter >= 15) {

                    clearInterval(animation);

                    fillSlot(
                        groupName,
                        index,
                        teamName
                    );

                    resolve();

                }

            }, 80);

    });

}

function validateGroupSizes() {

    const total =
        groupSizes.reduce(function (sum, size) {

            return sum + size;

        }, 0);

    return total === selectedTeams.length;

}

function getStandingStatus(position, totalTeams) {

    if (position <= selectedQualified) {

        return "qualified";

    }

    if (position <=
        selectedQualified +
        selectedQualifiedSecondary) {

        return "qualified-secondary";

    }

    if (position >
        totalTeams -
        selectedEliminated) {

        return "eliminated";

    }

    if (position >
        totalTeams -
        selectedEliminated -
        selectedEliminatedSecondary) {

        return "eliminated-secondary";

    }

    return "";

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

const randomBtn = document.getElementById("random-btn");

randomBtn.addEventListener("click", function () {

    if (!validateGroupSizes()) {

        showToast(
            "Group size is invalid!",
            "warning"
        );

        return;

    }

    system.manualMode = false;

    openRandomModal();

});

const randomModal = document.getElementById("random-modal");

const randomPreview = document.getElementById("random-preview");

const cancelRandomBtn = document.getElementById("cancel-random-btn");

const drawRandomBtn = document.getElementById("draw-random-btn");

const deleteStandingBtn = document.getElementById("delete-standing-btn");

function openRandomModal() {

    randomPreview.innerHTML = "";

    groupSizes.forEach(function (size, index) {

        const letter = String.fromCharCode(65 + index);

        randomPreview.innerHTML += `

        <div class="group-size-item">

            <span>
                Group ${letter}
            </span>

            <button
                class="group-minus"
                data-index="${index}">
                -
            </button>

            <span class="group-size-value">
                ${size}
            </span>

            <button
                class="group-plus"
                data-index="${index}">
                +
            </button>

        </div>

        `;

    });

    randomModal.classList.add("show");

    document.body.classList.add("modal-open");

}

randomPreview.addEventListener("click", function (event) {

    if (
        !event.target.classList.contains("group-plus") &&
        !event.target.classList.contains("group-minus")
    ) return;

    const index =
        Number(event.target.dataset.index);

    if (event.target.classList.contains("group-plus")) {

        const donor =
            groupSizes.findIndex(function (size) {

                return size > 3;

            });

        if (donor === -1 || donor === index) {

            showToast(
                "No group can donate a team.",
                "warning"
            );

            return;

        }

        groupSizes[index]++;

        groupSizes[donor]--;

    }

    else {

        if (groupSizes[index] <= 3) {

            showToast(
                "Minimum 3 teams.",
                "warning"
            );

            return;

        }

        const receiver =
            groupSizes.findIndex(function (size) {

                return size < 4;

            });

        if (receiver === -1 || receiver === index) {

            showToast(
                "No group can receive a team.",
                "warning"
            );

            return;

        }

        groupSizes[index]--;

        groupSizes[receiver]++;

    }

    openRandomModal();

});

function shuffleArray(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
            [result[j], result[i]];

    }

    return result;

}

function randomizeGroups() {

    createEmptyGroups();

    const shuffledTeams =
        shuffleArray(selectedTeams);

    let currentIndex = 0;

    groups.forEach(function (group) {

        for (let i = 0; i < group.maxTeams; i++) {

            group.teams[i] = {

                id: shuffledTeams[currentIndex],

                played: 0,

                win: 0,

                draw: 0,

                lose: 0,

                goalsFor: 0,

                goalsAgainst: 0,

                goalDifference: 0,

                points: 0

            };

            currentIndex++;

        }

    });

}

cancelRandomBtn.addEventListener("click", function () {

    randomModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

drawRandomBtn.addEventListener("click", function () {

    randomModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    startRandomDraw();

    system.standing = groups;

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

});

async function startRandomDraw() {

    hideStandingButtons();

    randomizeGroups();

    renderEmptyStanding();

    await fillStandingAnimation();

    generateLeagueMatches();

    system.standing = groups;

    saveTournament();

    renderMatches();

    showDeleteButton();

}

function hideStandingButtons() {

    randomBtn.style.display = "none";

    manualBtn.style.display = "none";

}

function showDeleteButton() {

    deleteStandingBtn.style.display = "block";

}

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

function deleteStanding() {

    system.standing = null;

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    resetTournamentState();

    standingSetup.innerHTML = "";

    randomBtn.style.display = "inline-block";

    manualBtn.style.display = "inline-block";

    deleteStandingBtn.style.display = "none";

    groupSizes = generateGroupSizes(selectedTeams.length);

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

const manualBtn = document.getElementById("manual-btn");

manualBtn.addEventListener("click", function () {

    if (!validateGroupSizes()) {

        showToast(
            "Group size is invalid!",
            "warning"
        );

        return;

    }

    system.manualMode = true;

    createEmptyGroups();

    renderEmptyStanding();

    hideStandingButtons();

    showDeleteButton();

    saveTournament();

});

function isGroupFinished() {

    if (
        !system.matches ||
        system.matches.length === 0
    ) {

        return false;

    }

    for (const round of system.matches) {

        if (!round.matches) {

            continue;

        }

        for (const match of round.matches) {

            if (match.played !== true) {

                return false;

            }

        }

    }

    return true;

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

function sendQualifiedTeamsGroup() {

    const nextSystem = getNextSystem();

    if (!nextSystem) {

        return;

    }

    const qualifiedTeams = [];

    groups.forEach(function (group) {

        for (
            let i = 0;
            i < selectedQualified;
            i++
        ) {

            const team = group.teams[i];

            if (!team) {

                continue;

            }

            qualifiedTeams.push(team.id);

        }

    });

    nextSystem.teams = [...qualifiedTeams];

    saveTournament();

}

initializeStanding();