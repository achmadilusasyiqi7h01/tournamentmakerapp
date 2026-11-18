const countries = [
    { name: "Afghanistan", code: "af" },
    { name: "Åland Islands", code: "ax" },
    { name: "Albania", code: "al" },
    { name: "Algeria", code: "dz" },
    { name: "American Samoa", code: "as" },
    { name: "Andorra", code: "ad" },
    { name: "Angola", code: "ao" },
    { name: "Anguilla", code: "ai" },
    { name: "Antarctica", code: "aq" },
    { name: "Antigua and Barbuda", code: "ag" },
    { name: "Argentina", code: "ar" },
    { name: "Armenia", code: "am" },
    { name: "Aruba", code: "aw" },
    { name: "Australia", code: "au" },
    { name: "Austria", code: "at" },
    { name: "Azerbaijan", code: "az" },
    { name: "Bahamas", code: "bs" },
    { name: "Bahrain", code: "bh" },
    { name: "Bangladesh", code: "bd" },
    { name: "Barbados", code: "bb" },
    { name: "Belarus", code: "by" },
    { name: "Belgium", code: "be" },
    { name: "Belize", code: "bz" },
    { name: "Benin", code: "bj" },
    { name: "Bermuda", code: "bm" },
    { name: "Bhutan", code: "bt" },
    { name: "Bolivia", code: "bo" },
    { name: "Bosnia and Herzegovina", code: "ba" },
    { name: "Botswana", code: "bw" },
    { name: "Bouvet Island", code: "bv" },
    { name: "Brazil", code: "br" },
    { name: "British Indian Ocean Territory", code: "io" },
    { name: "British Virgin Islands", code: "vg" },
    { name: "Brunei", code: "bn" },
    { name: "Bulgaria", code: "bg" },
    { name: "Burkina Faso", code: "bf" },
    { name: "Burundi", code: "bi" },
    { name: "Cabo Verde", code: "cv" },
    { name: "Cambodia", code: "kh" },
    { name: "Cameroon", code: "cm" },
    { name: "Canada", code: "ca" },
    { name: "Cayman Islands", code: "ky" },
    { name: "Central African Republic", code: "cf" },
    { name: "Chad", code: "td" },
    { name: "Chile", code: "cl" },
    { name: "China", code: "cn" },
    { name: "Christmas Island", code: "cx" },
    { name: "Cocos (Keeling) Islands", code: "cc" },
    { name: "Colombia", code: "co" },
    { name: "Comoros", code: "km" },
    { name: "Congo", code: "cg" },
    { name: "Cook Islands", code: "ck" },
    { name: "Costa Rica", code: "cr" },
    { name: "Croatia", code: "hr" },
    { name: "Cuba", code: "cu" },
    { name: "Curaçao", code: "cw" },
    { name: "Cyprus", code: "cy" },
    { name: "Czechia", code: "cz" },
    { name: "Democratic Republic of the Congo", code: "cd" },
    { name: "Denmark", code: "dk" },
    { name: "Djibouti", code: "dj" },
    { name: "Dominica", code: "dm" },
    { name: "Dominican Republic", code: "do" },
    { name: "Ecuador", code: "ec" },
    { name: "Egypt", code: "eg" },
    { name: "El Salvador", code: "sv" },
    {
        name: "England",
        code: "gb-eng"
    },
    { name: "Equatorial Guinea", code: "gq" },
    { name: "Eritrea", code: "er" },
    { name: "Estonia", code: "ee" },
    { name: "Eswatini", code: "sz" },
    { name: "Ethiopia", code: "et" },
    { name: "Falkland Islands", code: "fk" },
    { name: "Faroe Islands", code: "fo" },
    { name: "Fiji", code: "fj" },
    { name: "Finland", code: "fi" },
    { name: "France", code: "fr" },
    { name: "French Guiana", code: "gf" },
    { name: "French Polynesia", code: "pf" },
    { name: "French Southern Territories", code: "tf" },
    { name: "Gabon", code: "ga" },
    { name: "Gambia", code: "gm" },
    { name: "Georgia", code: "ge" },
    { name: "Germany", code: "de" },
    { name: "Ghana", code: "gh" },
    { name: "Gibraltar", code: "gi" },
    { name: "Greece", code: "gr" },
    { name: "Greenland", code: "gl" },
    { name: "Grenada", code: "gd" },
    { name: "Guadeloupe", code: "gp" },
    { name: "Guam", code: "gu" },
    { name: "Guatemala", code: "gt" },
    { name: "Guernsey", code: "gg" },
    { name: "Guinea", code: "gn" },
    { name: "Guinea-Bissau", code: "gw" },
    { name: "Guyana", code: "gy" },
    { name: "Haiti", code: "ht" },
    { name: "Heard Island and McDonald Islands", code: "hm" },
    { name: "Holy See (Vatican City)", code: "va" },
    { name: "Honduras", code: "hn" },
    { name: "Hong Kong", code: "hk" },
    { name: "Hungary", code: "hu" },
    { name: "Iceland", code: "is" },
    { name: "India", code: "in" },
    { name: "Indonesia", code: "id" },
    { name: "Iran", code: "ir" },
    { name: "Iraq", code: "iq" },
    { name: "Ireland", code: "ie" },
    { name: "Isle of Man", code: "im" },
    { name: "Israel", code: "il" },
    { name: "Italy", code: "it" },
    { name: "Jamaica", code: "jm" },
    { name: "Japan", code: "jp" },
    { name: "Jersey", code: "je" },
    { name: "Jordan", code: "jo" },
    { name: "Kazakhstan", code: "kz" },
    { name: "Kenya", code: "ke" },
    { name: "Kiribati", code: "ki" },
    { name: "Kuwait", code: "kw" },
    { name: "Kyrgyzstan", code: "kg" },
    { name: "Laos", code: "la" },
    { name: "Latvia", code: "lv" },
    { name: "Lebanon", code: "lb" },
    { name: "Lesotho", code: "ls" },
    { name: "Liberia", code: "lr" },
    { name: "Libya", code: "ly" },
    { name: "Liechtenstein", code: "li" },
    { name: "Lithuania", code: "lt" },
    { name: "Luxembourg", code: "lu" },
    { name: "Macau", code: "mo" },
    { name: "Madagascar", code: "mg" },
    { name: "Malawi", code: "mw" },
    { name: "Malaysia", code: "my" },
    { name: "Maldives", code: "mv" },
    { name: "Mali", code: "ml" },
    { name: "Malta", code: "mt" },
    { name: "Marshall Islands", code: "mh" },
    { name: "Martinique", code: "mq" },
    { name: "Mauritania", code: "mr" },
    { name: "Mauritius", code: "mu" },
    { name: "Mayotte", code: "yt" },
    { name: "Mexico", code: "mx" },
    { name: "Micronesia", code: "fm" },
    { name: "Moldova", code: "md" },
    { name: "Monaco", code: "mc" },
    { name: "Mongolia", code: "mn" },
    { name: "Montenegro", code: "me" },
    { name: "Montserrat", code: "ms" },
    { name: "Morocco", code: "ma" },
    { name: "Mozambique", code: "mz" },
    { name: "Myanmar", code: "mm" },
    { name: "Namibia", code: "na" },
    { name: "Nauru", code: "nr" },
    { name: "Nepal", code: "np" },
    { name: "Netherlands", code: "nl" },
    { name: "New Caledonia", code: "nc" },
    { name: "New Zealand", code: "nz" },
    { name: "Nicaragua", code: "ni" },
    { name: "Niger", code: "ne" },
    { name: "Nigeria", code: "ng" },
    { name: "Niue", code: "nu" },
    { name: "Norfolk Island", code: "nf" },
    { name: "North Korea", code: "kp" },
    { name: "North Macedonia", code: "mk" },
    {
        name: "Northern Ireland",
        code: "gb-nir"
    },
    { name: "Northern Mariana Islands", code: "mp" },
    { name: "Norway", code: "no" },
    { name: "Oman", code: "om" },
    { name: "Pakistan", code: "pk" },
    { name: "Palau", code: "pw" },
    { name: "Palestine", code: "ps" },
    { name: "Panama", code: "pa" },
    { name: "Papua New Guinea", code: "pg" },
    { name: "Paraguay", code: "py" },
    { name: "Peru", code: "pe" },
    { name: "Philippines", code: "ph" },
    { name: "Pitcairn Islands", code: "pn" },
    { name: "Poland", code: "pl" },
    { name: "Portugal", code: "pt" },
    { name: "Puerto Rico", code: "pr" },
    { name: "Qatar", code: "qa" },
    { name: "Réunion", code: "re" },
    { name: "Romania", code: "ro" },
    { name: "Russia", code: "ru" },
    { name: "Rwanda", code: "rw" },
    { name: "Saint Barthélemy", code: "bl" },
    { name: "Saint Helena, Ascension and Tristan da Cunha", code: "sh" },
    { name: "Saint Kitts and Nevis", code: "kn" },
    { name: "Saint Lucia", code: "lc" },
    { name: "Saint Martin (French part)", code: "mf" },
    { name: "Saint Pierre and Miquelon", code: "pm" },
    { name: "Saint Vincent and the Grenadines", code: "vc" },
    { name: "Samoa", code: "ws" },
    { name: "San Marino", code: "sm" },
    { name: "Sao Tome and Principe", code: "st" },
    { name: "Saudi Arabia", code: "sa" },
    {
        name: "Scotland",
        code: "gb-sct"
    },
    { name: "Senegal", code: "sn" },
    { name: "Serbia", code: "rs" },
    { name: "Seychelles", code: "sc" },
    { name: "Sierra Leone", code: "sl" },
    { name: "Singapore", code: "sg" },
    { name: "Sint Maarten (Dutch part)", code: "sx" },
    { name: "Slovakia", code: "sk" },
    { name: "Slovenia", code: "si" },
    { name: "Solomon Islands", code: "sb" },
    { name: "Somalia", code: "so" },
    { name: "South Africa", code: "za" },
    { name: "South Georgia and the South Sandwich Islands", code: "gs" },
    { name: "South Korea", code: "kr" },
    { name: "South Sudan", code: "ss" },
    { name: "Spain", code: "es" },
    { name: "Sri Lanka", code: "lk" },
    { name: "Sudan", code: "sd" },
    { name: "Suriname", code: "sr" },
    { name: "Svalbard and Jan Mayen", code: "sj" },
    { name: "Sweden", code: "se" },
    { name: "Switzerland", code: "ch" },
    { name: "Syria", code: "sy" },
    { name: "Taiwan", code: "tw" },
    { name: "Tajikistan", code: "tj" },
    { name: "Tanzania", code: "tz" },
    { name: "Thailand", code: "th" },
    { name: "Timor-Leste", code: "tl" },
    { name: "Togo", code: "tg" },
    { name: "Tokelau", code: "tk" },
    { name: "Tonga", code: "to" },
    { name: "Trinidad and Tobago", code: "tt" },
    { name: "Tunisia", code: "tn" },
    { name: "Turkey", code: "tr" },
    { name: "Turkmenistan", code: "tm" },
    { name: "Turks and Caicos Islands", code: "tc" },
    { name: "Tuvalu", code: "tv" },
    { name: "Uganda", code: "ug" },
    { name: "Ukraine", code: "ua" },
    { name: "United Arab Emirates", code: "ae" },
    { name: "United States", code: "us" },
    { name: "United States Minor Outlying Islands", code: "um" },
    { name: "United States Virgin Islands", code: "vi" },
    { name: "Uruguay", code: "uy" },
    { name: "Uzbekistan", code: "uz" },
    { name: "Vanuatu", code: "vu" },
    { name: "Venezuela", code: "ve" },
    { name: "Vietnam", code: "vn" },
    { name: "Virgin Islands (British)", code: "vg" },
    { name: "Virgin Islands (U.S.)", code: "vi" },
    {
        name: "Wales",
        code: "gb-wls"
    },
    { name: "Wallis and Futuna", code: "wf" },
    { name: "Western Sahara", code: "eh" },
    { name: "Yemen", code: "ye" },
    { name: "Zambia", code: "zm" },
    { name: "Zimbabwe", code: "zw" },
];

const APP_VERSION = "1.0.0";

document.getElementById("app-version").textContent = APP_VERSION;

let tournaments = JSON.parse(localStorage.getItem("tournaments")) || [];

let teams = JSON.parse(localStorage.getItem("teams")) || [];

let locations = JSON.parse(localStorage.getItem("locations")) || [];

let deleteIndex = null;

let editIndex = null;

let editTeamIndex = null;

let editLocationIndex = null;

let deleteLocationIndex = null;

let selectedLogo = {

    type: "",

    value: ""

};

const modal = document.getElementById("modal");

const addTournamentbtn = document.getElementById("add-tournament-btn");

const closeModalbtn = document.getElementById("close-modal-btn");

const modalTitle = document.getElementById("modal-title");

const createTournamentBtn = document.getElementById("create-tournament-btn");

const deleteModal = document.getElementById("delete-modal");

const cancelDeleteBtn = document.getElementById("cancel-delete-btn");

const confirmDeleteBtn = document.getElementById("confirm-delete-btn");

const deleteTournamentName = document.getElementById("delete-tournament-name");

const searchTournament = document.getElementById("search-tournament");

const searchTeam = document.getElementById("search-team");

const filterTournament = [];

const sortTournament = document.getElementById("sort-tournament");

const sortTournamentCustom =
    document.getElementById(
        "sort-tournament-custom"
    );

const sortTournamentTrigger =
    sortTournamentCustom.querySelector(
        ".custom-select-trigger"
    );

const sortTournamentValue =
    sortTournamentCustom.querySelector(
        ".custom-select-value"
    );

const sortTournamentOptions =
    sortTournamentCustom.querySelectorAll(
        ".custom-select-option"
    );

const teamModal = document.getElementById("team-modal");

const chooseLogo = document.getElementById("choose-logo");

const logoModal = document.getElementById("logo-modal");

const closeLogoModalBtn = document.getElementById("close-logo-modal-btn");

const countryModal = document.getElementById("country-modal");

const countryBtn = document.getElementById("country-btn");

const closeCountryModalBtn = document.getElementById("close-country-modal-btn");

const chooseLogoBox = document.getElementById("choose-logo");

const addTeamBtn = document.getElementById("add-team-btn");

const createTeamForm = document.getElementById("create-team-form");

const closeTeamModalBtn = document.getElementById("close-team-modal-btn");

let deleteTeamIndex = null;

const deleteTeamModal = document.getElementById("delete-team-modal");

const deleteTeamName = document.getElementById("delete-team-name");

const cancelDeleteTeamBtn = document.getElementById("cancel-delete-team-btn");

const confirmDeleteTeamBtn = document.getElementById("confirm-delete-team-btn");

const galleryBtn = document.getElementById("gallery-btn");

const galleryInput = document.getElementById("gallery-input");

const toast = document.getElementById("toast");

const toastIcon = document.getElementById("toast-icon");

const toastMessage = document.getElementById("toast-message");

const addLocationBtn = document.getElementById("add-location-btn");

const locationModal = document.getElementById("location-modal");

const closeLocationModalBtn = document.getElementById("close-location-modal-btn");

const createLocationForm = document.getElementById("create-location-form");

const searchLocation = document.getElementById("search-location");

const deleteLocationModal = document.getElementById("delete-location-modal");

const deleteLocationName = document.getElementById("delete-location-name");

const cancelDeleteLocationBtn = document.getElementById("cancel-delete-location-btn");

const confirmDeleteLocationBtn = document.getElementById("confirm-delete-location-btn");

const searchCountry = document.getElementById("search-country");

const importDataBtn = document.getElementById("import-data-btn");

const importDataInput = document.getElementById("import-data-input");

const exportDataBtn = document.getElementById("export-data-btn");

const resetDataBtn = document.getElementById("reset-data-btn");

const resetDataModal = document.getElementById("reset-data-modal");

const cancelResetBtn = document.getElementById("cancel-reset-btn");

const confirmResetBtn = document.getElementById("confirm-reset-btn");

const openModal = document.getElementById("open-modal");

const openTitle = document.getElementById("open-title");

const openSystemContainer = document.getElementById("open-system-container");

const closeOpenModalBtn = document.getElementById("close-open-modal-btn");

const translations = {
    en: {
        changingLanguage: "Changing language...",

        // Navigation
        tournament: "Tournament",
        team: "Team",
        location: "Location",
        settings: "Settings",

        // Tournament Panel
        searchTournament: "Search Tournament",
        sortTournament: "Sort Tournament",
        newest: "Newest",
        oldest: "Oldest",
        aToZ: "A-Z",
        zToA: "Z-A",
        welcomeTitle: "Welcome to The Tournament Maker",
        createTournament: "Create Tournament",
        tournamentList: "Tournament list",
        noTournamentYet: "no tournament yet",
        createFirstTournament: "Create your first tournament to get started",

        // Team Panel
        searchTeam: "Search Team",
        createTeam: "Create Team",
        teamList: "Team List",
        noTeamYet: "no team yet",

        // Location Panel
        searchLocation: "Search Location",
        createLocation: "Create Location",
        locationList: "Location List",
        noLocationYet: "no location yet",

        // Settings Panel - General
        general: "General",
        language: "Language",
        languageDescription: "Application language",

        // Settings Panel - Data
        data: "Data",
        dataDescription: "Keep your tournament data safe.",
        exportData: "Export Data",
        importData: "Import Data",
        dangerZone: "Danger Zone",
        resetAllData: "Reset All Data",

        // Settings Panel - About
        about: "About",
        appName: "Tournament Maker",
        appDescription: "Offline Tournament Management App",
        version: "Version",
        developer: "Developer",
        madeWith: "Made with",

        // Modal - Create Tournament
        createTournamentModal: "Create Tournament",
        tournamentName: "Tournament Name",
        enterTournamentName: "Enter Tournament Name...",
        tournamentSystem: "Tournament System",
        league: "League",
        group: "Group",
        knockOut: "Knock-out",
        create: "Create",

        // Modal - Delete Tournament
        deleteTournament: "Delete Tournament",
        areYouSureDelete: "Are you sure you want to delete",
        cancel: "Cancel",
        delete: "Delete",

        // Modal - Create Team
        createTeamModal: "Create Team",
        teamName: "Team Name",
        enterTeamName: "Enter Team Name...",
        teamLogo: "Team Logo",
        chooseLogo: "Choose Logo",

        // Modal - Choose Logo
        chooseTeamLogo: "Choose Team Logo",
        uploadFromGallery: "Upload From Gallery",
        countryFlags: "Country Flags",

        // Modal - Choose Country
        chooseCountryFlag: "Choose Country Flag",
        searchCountry: "Search Country...",

        // Modal - Delete Team
        deleteTeam: "Delete Team",

        // Modal - Create Location
        createLocationModal: "Create Location",
        locationName: "Location Name",
        enterLocationName: "Enter Location Name...",

        // Modal - Delete Location
        deleteLocation: "Delete Location",

        // Modal - Reset Data
        resetAllDataModal: "Reset All Data",
        areYouSureReset: "Are you sure you want to delete all data?",
        warningCannotUndo: "This action cannot be undone.",
        reset: "Reset",

        // Modal - Open System
        openSystem: "Open System",
        open: "Open",
        edit: "Edit",
        editTournament: "Edit Tournament",
        saveChanges: "Save Changes",
        create: "Create",
        open: "Open",
        edit: "Edit",
        delete: "Delete",
        editLocation: "Edit Location"

    },

    id: {
        changingLanguage: "Mengubah bahasa...",

        // Navigation
        tournament: "Turnamen",
        team: "Tim",
        location: "Lokasi",
        settings: "Pengaturan",

        // Tournament Panel
        searchTournament: "Cari Turnamen",
        sortTournament: "Urutkan Turnamen",
        newest: "Terbaru",
        oldest: "Terlama",
        aToZ: "A-Z",
        zToA: "Z-A",
        welcomeTitle: "Selamat Datang di Tournament Maker",
        createTournament: "Buat Turnamen",
        tournamentList: "Daftar Turnamen",
        noTournamentYet: "Belum ada turnamen",
        createFirstTournament: "Buat turnamen pertama Anda untuk memulai",

        // Team Panel
        searchTeam: "Cari Tim",
        createTeam: "Buat Tim",
        teamList: "Daftar Tim",
        noTeamYet: "Belum ada tim",

        // Location Panel
        searchLocation: "Cari Lokasi",
        createLocation: "Buat Lokasi",
        locationList: "Daftar Lokasi",
        noLocationYet: "Belum ada lokasi",

        // Settings Panel - General
        general: "Umum",
        language: "Bahasa",
        languageDescription: "Bahasa aplikasi",

        // Settings Panel - Data
        data: "Data",
        dataDescription: "Jaga keamanan data turnamen Anda.",
        exportData: "Ekspor Data",
        importData: "Impor Data",
        dangerZone: "Zona Berbahaya",
        resetAllData: "Atur Ulang Semua Data",

        // Settings Panel - About
        about: "Tentang",
        appName: "Tournament Maker",
        appDescription: "Aplikasi Manajemen Turnamen Offline",
        version: "Versi",
        developer: "Pengembang",
        madeWith: "Dibuat dengan",

        // Modal - Create Tournament
        createTournamentModal: "Buat Turnamen",
        tournamentName: "Nama Turnamen",
        enterTournamentName: "Masukkan Nama Turnamen...",
        tournamentSystem: "Sistem Turnamen",
        league: "Liga",
        group: "Grup",
        knockOut: "Sistem Gugur",
        create: "Buat",

        // Modal - Delete Tournament
        deleteTournament: "Hapus Turnamen",
        areYouSureDelete: "Apakah Anda yakin ingin menghapus",
        cancel: "Batal",
        delete: "Hapus",

        // Modal - Create Team
        createTeamModal: "Buat Tim",
        teamName: "Nama Tim",
        enterTeamName: "Masukkan Nama Tim...",
        teamLogo: "Logo Tim",
        chooseLogo: "Pilih Logo",

        // Modal - Choose Logo
        chooseTeamLogo: "Pilih Logo Tim",
        uploadFromGallery: "Unggah dari Galeri",
        countryFlags: "Bendera Negara",

        // Modal - Choose Country
        chooseCountryFlag: "Pilih Bendera Negara",
        searchCountry: "Cari Negara...",

        // Modal - Delete Team
        deleteTeam: "Hapus Tim",

        // Modal - Create Location
        createLocationModal: "Buat Lokasi",
        locationName: "Nama Lokasi",
        enterLocationName: "Masukkan Nama Lokasi...",

        // Modal - Delete Location
        deleteLocation: "Hapus Lokasi",

        // Modal - Reset Data
        resetAllDataModal: "Atur Ulang Semua Data",
        areYouSureReset: "Apakah Anda yakin ingin menghapus semua data?",
        warningCannotUndo: "Tindakan ini tidak dapat dibatalkan.",
        reset: "Atur Ulang",

        // Modal - Open System
        openSystem: "Buka Sistem",
        open: "Buka",
        edit: "Edit",
        editTournament: "Edit Turnamen",
        saveChanges: "Simpan Perubahan",
        editLocation: "Edit Lokasi"
    },

    fr: {
        changingLanguage: "Changement de langue...",

        // Navigation
        tournament: "Tournoi",
        team: "Équipe",
        location: "Lieu",
        settings: "Paramètres",

        // Tournament Panel
        searchTournament: "Rechercher un tournoi",
        sortTournament: "Trier les tournois",
        newest: "Plus récent",
        oldest: "Plus ancien",
        aToZ: "A-Z",
        zToA: "Z-A",
        welcomeTitle: "Bienvenue sur Tournament Maker",
        createTournament: "Créer un tournoi",
        tournamentList: "Liste des tournois",
        noTournamentYet: "aucun tournoi pour le moment",
        createFirstTournament: "Créez votre premier tournoi pour commencer",

        // Team Panel
        searchTeam: "Rechercher une équipe",
        createTeam: "Créer une équipe",
        teamList: "Liste des équipes",
        noTeamYet: "aucune équipe pour le moment",

        // Location Panel
        searchLocation: "Rechercher un lieu",
        createLocation: "Créer un lieu",
        locationList: "Liste des lieux",
        noLocationYet: "aucun lieu pour le moment",

        // Settings Panel - General
        general: "Général",
        language: "Langue",
        languageDescription: "Langue de l'application",

        // Settings Panel - Data
        data: "Données",
        dataDescription: "Gardez vos données de tournoi en sécurité.",
        exportData: "Exporter les données",
        importData: "Importer les données",
        dangerZone: "Zone dangereuse",
        resetAllData: "Réinitialiser toutes les données",

        // Settings Panel - About
        about: "À propos",
        appName: "Tournament Maker",
        appDescription: "Application de gestion de tournois hors ligne",
        version: "Version",
        developer: "Développeur",
        madeWith: "Créé avec",

        // Modal - Create Tournament
        createTournamentModal: "Créer un tournoi",
        tournamentName: "Nom du tournoi",
        enterTournamentName: "Entrez le nom du tournoi...",
        tournamentSystem: "Système du tournoi",
        league: "Ligue",
        group: "Groupes",
        knockOut: "Élimination directe",
        create: "Créer",

        // Modal - Delete Tournament
        deleteTournament: "Supprimer le tournoi",
        areYouSureDelete: "Êtes-vous sûr de vouloir supprimer",
        cancel: "Annuler",
        delete: "Supprimer",

        // Modal - Create Team
        createTeamModal: "Créer une équipe",
        teamName: "Nom de l'équipe",
        enterTeamName: "Entrez le nom de l'équipe...",
        teamLogo: "Logo de l'équipe",
        chooseLogo: "Choisir un logo",

        // Modal - Choose Logo
        chooseTeamLogo: "Choisir le logo de l'équipe",
        uploadFromGallery: "Importer depuis la galerie",
        countryFlags: "Drapeaux des pays",

        // Modal - Choose Country
        chooseCountryFlag: "Choisir un drapeau",
        searchCountry: "Rechercher un pays...",

        // Modal - Delete Team
        deleteTeam: "Supprimer l'équipe",

        // Modal - Create Location
        createLocationModal: "Créer un lieu",
        locationName: "Nom du lieu",
        enterLocationName: "Entrez le nom du lieu...",

        // Modal - Delete Location
        deleteLocation: "Supprimer le lieu",

        // Modal - Reset Data
        resetAllDataModal: "Réinitialiser toutes les données",
        areYouSureReset: "Êtes-vous sûr de vouloir supprimer toutes les données ?",
        warningCannotUndo: "Cette action est irréversible.",
        reset: "Réinitialiser",

        // Modal - Open System
        openSystem: "Ouvrir le système",
        open: "Ouvrir",
        edit: "Modifier",
        editTournament: "Modifier le tournoi",
        saveChanges: "Enregistrer les modifications",
        editLocation: "Modifier le lieu"
    },

    zh: {
        changingLanguage: "正在切换语言...",

        // Navigation
        tournament: "赛事",
        team: "球队",
        location: "场地",
        settings: "设置",

        // Tournament Panel
        searchTournament: "搜索赛事",
        sortTournament: "排序赛事",
        newest: "最新",
        oldest: "最旧",
        aToZ: "A-Z",
        zToA: "Z-A",
        welcomeTitle: "欢迎使用 Tournament Maker",
        createTournament: "创建赛事",
        tournamentList: "赛事列表",
        noTournamentYet: "暂无赛事",
        createFirstTournament: "创建您的第一个赛事以开始使用",

        // Team Panel
        searchTeam: "搜索球队",
        createTeam: "创建球队",
        teamList: "球队列表",
        noTeamYet: "暂无球队",

        // Location Panel
        searchLocation: "搜索场地",
        createLocation: "创建场地",
        locationList: "场地列表",
        noLocationYet: "暂无场地",

        // Settings Panel - General
        general: "通用",
        language: "语言",
        languageDescription: "应用程序语言",

        // Settings Panel - Data
        data: "数据",
        dataDescription: "保护您的赛事数据安全。",
        exportData: "导出数据",
        importData: "导入数据",
        dangerZone: "危险区域",
        resetAllData: "重置所有数据",

        // Settings Panel - About
        about: "关于",
        appName: "Tournament Maker",
        appDescription: "离线赛事管理应用",
        version: "版本",
        developer: "开发者",
        madeWith: "制作于",

        // Modal - Create Tournament
        createTournamentModal: "创建赛事",
        tournamentName: "赛事名称",
        enterTournamentName: "输入赛事名称...",
        tournamentSystem: "赛事赛制",
        league: "联赛",
        group: "小组赛",
        knockOut: "淘汰赛",
        create: "创建",

        // Modal - Delete Tournament
        deleteTournament: "删除赛事",
        areYouSureDelete: "您确定要删除",
        cancel: "取消",
        delete: "删除",

        // Modal - Create Team
        createTeamModal: "创建球队",
        teamName: "球队名称",
        enterTeamName: "输入球队名称...",
        teamLogo: "球队标志",
        chooseLogo: "选择标志",

        // Modal - Choose Logo
        chooseTeamLogo: "选择球队标志",
        uploadFromGallery: "从相册上传",
        countryFlags: "国家旗帜",

        // Modal - Choose Country
        chooseCountryFlag: "选择国家旗帜",
        searchCountry: "搜索国家...",

        // Modal - Delete Team
        deleteTeam: "删除球队",

        // Modal - Create Location
        createLocationModal: "创建场地",
        locationName: "场地名称",
        enterLocationName: "输入场地名称...",

        // Modal - Delete Location
        deleteLocation: "删除场地",

        // Modal - Reset Data
        resetAllDataModal: "重置所有数据",
        areYouSureReset: "您确定要删除所有数据吗？",
        warningCannotUndo: "此操作无法撤销。",
        reset: "重置",

        // Modal - Open System
        openSystem: "打开赛制",
        open: "打开",
        edit: "编辑",
        editTournament: "编辑赛事",
        saveChanges: "保存更改",
        editLocation: "编辑场地"
    },

    ar: {
        changingLanguage: "جارٍ تغيير اللغة...",

        // Navigation
        tournament: "البطولة",
        team: "الفريق",
        location: "الموقع",
        settings: "الإعدادات",

        // Tournament Panel
        searchTournament: "البحث عن بطولة",
        sortTournament: "ترتيب البطولات",
        newest: "الأحدث",
        oldest: "الأقدم",
        aToZ: "A-Z",
        zToA: "Z-A",
        welcomeTitle: "مرحبًا بك في Tournament Maker",
        createTournament: "إنشاء بطولة",
        tournamentList: "قائمة البطولات",
        noTournamentYet: "لا توجد بطولات بعد",
        createFirstTournament: "أنشئ بطولتك الأولى للبدء",

        // Team Panel
        searchTeam: "البحث عن فريق",
        createTeam: "إنشاء فريق",
        teamList: "قائمة الفرق",
        noTeamYet: "لا توجد فرق بعد",

        // Location Panel
        searchLocation: "البحث عن موقع",
        createLocation: "إنشاء موقع",
        locationList: "قائمة المواقع",
        noLocationYet: "لا توجد مواقع بعد",

        // Settings Panel - General
        general: "عام",
        language: "اللغة",
        languageDescription: "لغة التطبيق",

        // Settings Panel - Data
        data: "البيانات",
        dataDescription: "حافظ على بيانات بطولاتك بأمان.",
        exportData: "تصدير البيانات",
        importData: "استيراد البيانات",
        dangerZone: "منطقة الخطر",
        resetAllData: "إعادة تعيين جميع البيانات",

        // Settings Panel - About
        about: "حول التطبيق",
        appName: "Tournament Maker",
        appDescription: "تطبيق إدارة البطولات بدون اتصال",
        version: "الإصدار",
        developer: "المطور",
        madeWith: "صُنع باستخدام",

        // Modal - Create Tournament
        createTournamentModal: "إنشاء بطولة",
        tournamentName: "اسم البطولة",
        enterTournamentName: "أدخل اسم البطولة...",
        tournamentSystem: "نظام البطولة",
        league: "دوري",
        group: "مجموعات",
        knockOut: "خروج المغلوب",
        create: "إنشاء",

        // Modal - Delete Tournament
        deleteTournament: "حذف البطولة",
        areYouSureDelete: "هل أنت متأكد أنك تريد حذف",
        cancel: "إلغاء",
        delete: "حذف",

        // Modal - Create Team
        createTeamModal: "إنشاء فريق",
        teamName: "اسم الفريق",
        enterTeamName: "أدخل اسم الفريق...",
        teamLogo: "شعار الفريق",
        chooseLogo: "اختيار الشعار",

        // Modal - Choose Logo
        chooseTeamLogo: "اختيار شعار الفريق",
        uploadFromGallery: "رفع من المعرض",
        countryFlags: "أعلام الدول",

        // Modal - Choose Country
        chooseCountryFlag: "اختيار علم الدولة",
        searchCountry: "البحث عن دولة...",

        // Modal - Delete Team
        deleteTeam: "حذف الفريق",

        // Modal - Create Location
        createLocationModal: "إنشاء موقع",
        locationName: "اسم الموقع",
        enterLocationName: "أدخل اسم الموقع...",

        // Modal - Delete Location
        deleteLocation: "حذف الموقع",

        // Modal - Reset Data
        resetAllDataModal: "إعادة تعيين جميع البيانات",
        areYouSureReset: "هل أنت متأكد أنك تريد حذف جميع البيانات؟",
        warningCannotUndo: "لا يمكن التراجع عن هذا الإجراء.",
        reset: "إعادة تعيين",

        // Modal - Open System
        openSystem: "فتح النظام",
        open: "فتح",
        edit: "تعديل",
        editTournament: "تعديل البطولة",
        saveChanges: "حفظ التغييرات",
        editLocation: "تعديل الموقع"
    },

    ru: {
        changingLanguage: "Изменение языка...",

        // Navigation
        tournament: "Турнир",
        team: "Команда",
        location: "Место",
        settings: "Настройки",

        // Tournament Panel
        searchTournament: "Поиск турнира",
        sortTournament: "Сортировка турниров",
        newest: "Сначала новые",
        oldest: "Сначала старые",
        aToZ: "А-Я",
        zToA: "Я-А",
        welcomeTitle: "Добро пожаловать в Tournament Maker",
        createTournament: "Создать турнир",
        tournamentList: "Список турниров",
        noTournamentYet: "турниров пока нет",
        createFirstTournament: "Создайте свой первый турнир, чтобы начать",

        // Team Panel
        searchTeam: "Поиск команды",
        createTeam: "Создать команду",
        teamList: "Список команд",
        noTeamYet: "команд пока нет",

        // Location Panel
        searchLocation: "Поиск места",
        createLocation: "Создать место",
        locationList: "Список мест",
        noLocationYet: "мест пока нет",

        // Settings Panel - General
        general: "Общие",
        language: "Язык",
        languageDescription: "Язык приложения",

        // Settings Panel - Data
        data: "Данные",
        dataDescription: "Храните данные турниров в безопасности.",
        exportData: "Экспортировать данные",
        importData: "Импортировать данные",
        dangerZone: "Опасная зона",
        resetAllData: "Сбросить все данные",

        // Settings Panel - About
        about: "О приложении",
        appName: "Tournament Maker",
        appDescription: "Офлайн-приложение для управления турнирами",
        version: "Версия",
        developer: "Разработчик",
        madeWith: "Создано с помощью",

        // Modal - Create Tournament
        createTournamentModal: "Создать турнир",
        tournamentName: "Название турнира",
        enterTournamentName: "Введите название турнира...",
        tournamentSystem: "Система турнира",
        league: "Лига",
        group: "Группа",
        knockOut: "Плей-офф",
        create: "Создать",

        // Modal - Delete Tournament
        deleteTournament: "Удалить турнир",
        areYouSureDelete: "Вы уверены, что хотите удалить",
        cancel: "Отмена",
        delete: "Удалить",

        // Modal - Create Team
        createTeamModal: "Создать команду",
        teamName: "Название команды",
        enterTeamName: "Введите название команды...",
        teamLogo: "Логотип команды",
        chooseLogo: "Выбрать логотип",

        // Modal - Choose Logo
        chooseTeamLogo: "Выбрать логотип команды",
        uploadFromGallery: "Загрузить из галереи",
        countryFlags: "Флаги стран",

        // Modal - Choose Country
        chooseCountryFlag: "Выбрать флаг страны",
        searchCountry: "Поиск страны...",

        // Modal - Delete Team
        deleteTeam: "Удалить команду",

        // Modal - Create Location
        createLocationModal: "Создать место",
        locationName: "Название места",
        enterLocationName: "Введите название места...",

        // Modal - Delete Location
        deleteLocation: "Удалить место",

        // Modal - Reset Data
        resetAllDataModal: "Сбросить все данные",
        areYouSureReset: "Вы уверены, что хотите удалить все данные?",
        warningCannotUndo: "Это действие нельзя отменить.",
        reset: "Сбросить",

        // Modal - Open System
        openSystem: "Открыть систему",
        open: "Открыть",
        edit: "Изменить",
        editTournament: "Изменить турнир",
        saveChanges: "Сохранить изменения",
        editLocation: "Изменить место"
    },

    es: {
        changingLanguage: "Cambiando idioma...",

        // Navigation
        tournament: "Torneo",
        team: "Equipo",
        location: "Ubicación",
        settings: "Configuración",

        // Tournament Panel
        searchTournament: "Buscar torneo",
        sortTournament: "Ordenar torneos",
        newest: "Más reciente",
        oldest: "Más antiguo",
        aToZ: "A-Z",
        zToA: "Z-A",
        welcomeTitle: "Bienvenido a Tournament Maker",
        createTournament: "Crear torneo",
        tournamentList: "Lista de torneos",
        noTournamentYet: "no hay torneos todavía",
        createFirstTournament: "Crea tu primer torneo para comenzar",

        // Team Panel
        searchTeam: "Buscar equipo",
        createTeam: "Crear equipo",
        teamList: "Lista de equipos",
        noTeamYet: "no hay equipos todavía",

        // Location Panel
        searchLocation: "Buscar ubicación",
        createLocation: "Crear ubicación",
        locationList: "Lista de ubicaciones",
        noLocationYet: "no hay ubicaciones todavía",

        // Settings Panel - General
        general: "General",
        language: "Idioma",
        languageDescription: "Idioma de la aplicación",

        // Settings Panel - Data
        data: "Datos",
        dataDescription: "Mantén seguros los datos de tus torneos.",
        exportData: "Exportar datos",
        importData: "Importar datos",
        dangerZone: "Zona de peligro",
        resetAllData: "Restablecer todos los datos",

        // Settings Panel - About
        about: "Acerca de",
        appName: "Tournament Maker",
        appDescription: "Aplicación de gestión de torneos sin conexión",
        version: "Versión",
        developer: "Desarrollador",
        madeWith: "Hecho con",

        // Modal - Create Tournament
        createTournamentModal: "Crear torneo",
        tournamentName: "Nombre del torneo",
        enterTournamentName: "Introduce el nombre del torneo...",
        tournamentSystem: "Sistema del torneo",
        league: "Liga",
        group: "Grupos",
        knockOut: "Eliminación directa",
        create: "Crear",

        // Modal - Delete Tournament
        deleteTournament: "Eliminar torneo",
        areYouSureDelete: "¿Estás seguro de que quieres eliminar",
        cancel: "Cancelar",
        delete: "Eliminar",

        // Modal - Create Team
        createTeamModal: "Crear equipo",
        teamName: "Nombre del equipo",
        enterTeamName: "Introduce el nombre del equipo...",
        teamLogo: "Logo del equipo",
        chooseLogo: "Elegir logo",

        // Modal - Choose Logo
        chooseTeamLogo: "Elegir logo del equipo",
        uploadFromGallery: "Subir desde la galería",
        countryFlags: "Banderas de países",

        // Modal - Choose Country
        chooseCountryFlag: "Elegir bandera del país",
        searchCountry: "Buscar país...",

        // Modal - Delete Team
        deleteTeam: "Eliminar equipo",

        // Modal - Create Location
        createLocationModal: "Crear ubicación",
        locationName: "Nombre de la ubicación",
        enterLocationName: "Introduce el nombre de la ubicación...",

        // Modal - Delete Location
        deleteLocation: "Eliminar ubicación",

        // Modal - Reset Data
        resetAllDataModal: "Restablecer todos los datos",
        areYouSureReset: "¿Estás seguro de que quieres eliminar todos los datos?",
        warningCannotUndo: "Esta acción no se puede deshacer.",
        reset: "Restablecer",

        // Modal - Open System
        openSystem: "Abrir sistema",
        open: "Abrir",
        edit: "Editar",
        editTournament: "Editar torneo",
        saveChanges: "Guardar cambios",
        editLocation: "Editar ubicación"
    },

};

function applyLanguage(language) {

    const dictionary =
        translations[language];

    if (!dictionary) {
        return;
    }


    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(function (element) {

        const key =
            element.dataset.i18n;


        const translatedText =
            dictionary[key];


        if (translatedText === undefined) {
            return;
        }


        /*
         * ================================
         * INPUT / TEXTAREA
         * ================================
         */

        if (
            element.tagName === "INPUT" ||
            element.tagName === "TEXTAREA"
        ) {

            element.placeholder =
                translatedText;

            return;
        }


        /*
         * ================================
         * OPTION
         * ================================
         */

        if (
            element.tagName === "OPTION"
        ) {

            element.textContent =
                translatedText;

            return;
        }


        /*
         * ================================
         * ARIA LABEL
         * ================================
         */

        if (
            element.hasAttribute(
                "aria-label"
            )
        ) {

            element.setAttribute(
                "aria-label",
                translatedText
            );

        }


        /*
         * ================================
         * ELEMENT BIASA
         * ================================
         */

        element.textContent =
            translatedText;

    });

}

const languageSelect =
    document.getElementById("language-select");

const languageTrigger =
    languageSelect.querySelector(
        ".custom-select-trigger"
    );

const languageValue =
    languageSelect.querySelector(
        ".custom-select-value"
    );

const languageOptions =
    languageSelect.querySelectorAll(
        ".custom-select-option"
    );


languageTrigger.addEventListener(
    "click",
    function () {

        languageSelect.classList.toggle(
            "open"
        );

    }
);

const languageLoadingModal =
    document.getElementById("language-loading-modal");

languageOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                const language =
                    option.dataset.value;


                languageValue.textContent =
                    option.textContent.trim();


                languageOptions.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                option.classList.add(
                    "active"
                );


                languageSelect.classList.remove(
                    "open"
                );


                // Tampilkan loading

                languageLoadingModal.classList.add(
                    "show"
                );


                // Simpan bahasa

                localStorage.setItem(
                    "language",
                    language
                );


                // Refresh setelah loading

                setTimeout(function () {

                    location.reload();

                }, 500);

            }
        );

    }
);

document.addEventListener(
    "click",
    function (event) {

        if (
            !languageSelect.contains(
                event.target
            )
        ) {

            languageSelect.classList.remove(
                "open"
            );

        }

    }
);

const savedLanguage =
    localStorage.getItem("language") || "en";


languageOptions.forEach(
    function (option) {

        if (
            option.dataset.value ===
            savedLanguage
        ) {

            option.classList.add("active");

            languageValue.textContent =
                option.textContent.trim();

        }

    }
);

function t(key) {

    const language =
        localStorage.getItem("language") || "en";

    return translations[language][key] || key;

}

function setLanguageKey(element, key) {

    element.dataset.i18n = key;

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

function translateSystem(type) {

    const language =
        localStorage.getItem("language") || "en";

    const dictionary =
        translations[language];

    const keyMap = {
        "League": "league",
        "Group": "group",
        "Knock-out": "knockOut"
    };

    return dictionary[keyMap[type]] || type;
}

function initializeLanguage() {

    const savedLanguage =
        localStorage.getItem("language") || "en";

    languageSelect.value =
        savedLanguage;

    applyLanguage(savedLanguage);

}

closeOpenModalBtn.addEventListener("click", function () {

    openModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

resetDataBtn.addEventListener("click", function () {

    resetDataModal.classList.add("show");
    document.body.classList.add("modal-open");

});

cancelResetBtn.addEventListener("click", function () {

    resetDataModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

confirmResetBtn.addEventListener(
    "click",
    function () {

        localStorage.removeItem(
            "tournaments"
        );

        localStorage.removeItem(
            "teams"
        );

        localStorage.removeItem(
            "locations"
        );

        tournaments = [];

        teams = [];

        locations = [];

        updateTournamentList();

        updateTeamList();

        updateLocationList();

        resetDataModal.classList.remove(
            "show"
        );

        showToast(
            "All data has been deleted!",
            "warning"
        );

    }
);

exportDataBtn.addEventListener("click", function () {

    if (
        tournaments.length === 0 &&
        teams.length === 0 &&
        locations.length === 0
    ) {

        showToast(
            "No data to export!",
            "warning"
        );

        return;

    }

    const data = {

        app: "Tournament Maker",

        version: 1,

        exportedAt: new Date().toISOString(),

        tournaments: tournaments,

        teams: teams,

        locations: locations

    };

    const json =
        JSON.stringify(data, null, 2);

    const blob =
        new Blob(
            [json],
            {
                type: "application/json"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement("a");

    a.href = url;

    a.download =
        "TournamentMaker_Backup.json";

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);

    showToast(
        "Backup exported successfully!",
        "success"
    );

});

importDataBtn.addEventListener("click", function () {

    importDataInput.click();

});

importDataInput.addEventListener(
    "change",
    function () {

        const file =
            importDataInput.files[0];

        if (!file) return;

        const reader =
            new FileReader();

        reader.onload =
            function (event) {

                try {

                    const data =
                        JSON.parse(
                            event.target.result
                        );

                    if (
                        !data ||
                        !Array.isArray(data.tournaments) ||
                        !Array.isArray(data.teams) ||
                        !Array.isArray(data.locations)
                    ) {

                        showToast(
                            "Invalid backup file!",
                            "error"
                        );

                        importDataInput.value = "";

                        return;

                    }

                    tournaments =
                        data.tournaments;

                    teams =
                        data.teams;

                    locations =
                        data.locations;

                    localStorage.setItem(
                        "tournaments",
                        JSON.stringify(tournaments)
                    );

                    localStorage.setItem(
                        "teams",
                        JSON.stringify(teams)
                    );

                    localStorage.setItem(
                        "locations",
                        JSON.stringify(locations)
                    );

                    updateTournamentList();

                    updateTeamList();

                    updateLocationList();

                    importDataInput.value = "";

                    showToast(
                        "Data imported successfully!",
                        "success"
                    );

                }

                catch (error) {

                    console.error(
                        "Import error:",
                        error
                    );

                    importDataInput.value = "";

                    showToast(
                        "The backup file is damaged or invalid!",
                        "error"
                    );

                }

            };

        reader.readAsText(file);

    }

);

searchCountry.addEventListener("input", function () {

    renderCountry(searchCountry.value);

});

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

galleryBtn.addEventListener("click", function () {

    galleryInput.click();

});

galleryInput.addEventListener("change", function () {

    const file = galleryInput.files[0];

    if (!file) return;

    const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/svg+xml"
    ];

    if (!allowedTypes.includes(file.type)) {

        showToast("Only PNG, JPG, JPEG, SVG, and WEBP files are allowed!", "error");

        galleryInput.value = "";

        return;

    }

    if (file.size > 5 * 1024 * 1024) {

        showToast("Image size must be under 5 MB!", "error");

        galleryInput.value = "";

        return;

    }

    const reader = new FileReader();

    reader.onload = function () {

        selectedLogo.type = "gallery";

        selectedLogo.value = reader.result;

        updateLogoPreview();

        logoModal.classList.remove("show");

        document.body.classList.remove("modal-open");

        teamModal.classList.add("show");

        document.body.classList.add("modal-open");

    };

    reader.readAsDataURL(file);

});

createTeamForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const teamName = document.getElementById("team-name").value;

    if (teamName.trim() === "") return;

    if (selectedLogo.type === "") {

        showToast("Choose logo first!", "warning");

        return;

    }

    const team = {

        id: editTeamIndex === null
            ? crypto.randomUUID()
            : teams[editTeamIndex].id,

        name: teamName,

        logo: {
            type: selectedLogo.type,
            value: selectedLogo.value
        }

    };

    if (editTeamIndex === null) {

        teams.push(team);

    } else {

        teams[editTeamIndex] = team;

        editTeamIndex = null;

    }

    localStorage.setItem("teams", JSON.stringify(teams));

    updateTeamList();

    document.getElementById("team-modal-title")
        .dataset.i18n = "createTeamModal";

    document.getElementById("create-team-btn")
        .dataset.i18n = "create";

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

    teamModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    createTeamForm.reset();

    selectedLogo = {

        type: "",

        value: ""

    };

    updateLogoPreview();

});

closeTeamModalBtn.addEventListener("click", function () {

    teamModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    createTeamForm.reset();

    selectedLogo = {
        type: "",
        value: ""
    };

    updateLogoPreview();

    editTeamIndex = null;

    document.getElementById("team-modal-title")
        .dataset.i18n = "createTeamModal";

    document.getElementById("create-team-btn")
        .dataset.i18n = "create";

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

});

addTeamBtn.addEventListener("click", function () {

    teamModal.classList.add("show");

    document.body.classList.add("modal-open");

    editTeamIndex = null;

    document.getElementById("team-modal-title")
        .dataset.i18n = "createTeamModal";

    document.getElementById("create-team-btn")
        .dataset.i18n = "create";

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

});

countryBtn.addEventListener("click", function () {

    logoModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    countryModal.classList.add("show");

    document.body.classList.add("modal-open");

    searchCountry.value = "";

    renderCountry();

});

closeCountryModalBtn.addEventListener("click", function () {

    countryModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    logoModal.classList.add("show");

    document.body.classList.add("modal-open");

    searchCountry.value = "";

    renderCountry();

});

confirmDeleteTeamBtn.addEventListener("click", function () {

    teams.splice(deleteTeamIndex, 1);

    localStorage.setItem("teams", JSON.stringify(teams));

    updateTeamList();

    deleteTeamModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    deleteTeamIndex = null;

});

cancelDeleteTeamBtn.addEventListener("click", function () {

    deleteTeamModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    deleteTeamIndex = null;

});

addLocationBtn.addEventListener("click", function () {

    locationModal.classList.add("show");

    document.body.classList.add("modal-open");

});

closeLocationModalBtn.addEventListener("click", function () {

    locationModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    createLocationForm.reset();

    editLocationIndex = null;

    document.getElementById("location-modal-title").dataset.i18n = "createLocation";

    document.getElementById("create-location-btn").dataset.i18n = "create";

    applyLanguage(localStorage.getItem("language") || "en");

});

confirmDeleteLocationBtn.addEventListener("click", function () {

    locations.splice(deleteLocationIndex, 1);

    localStorage.setItem("locations", JSON.stringify(locations));

    updateLocationList();

    deleteLocationModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    deleteLocationIndex = null;

});

cancelDeleteLocationBtn.addEventListener("click", function () {

    deleteLocationModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    deleteLocationIndex = null;

});

createLocationForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const locationName = document.getElementById("location-name").value;

    if (locationName.trim() === "") return;

    const location = {

        id: editLocationIndex === null
            ? crypto.randomUUID()
            : locations[editLocationIndex].id,

        name: locationName

    };

    if (editLocationIndex === null) {

        locations.push(location);

    } else {

        locations[editLocationIndex] = location;

        editLocationIndex = null;

    }

    localStorage.setItem("locations", JSON.stringify(locations));

    updateLocationList();

    createLocationForm.reset();

    locationModal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

searchLocation.addEventListener("input", function () {

    updateLocationList();

});

function updateLocationList() {

    const keyword =
        searchLocation.value
            .trim()
            .toLowerCase();

    const filteredLocations =
        locations.filter(function (location) {

            return location.name
                .toLowerCase()
                .includes(keyword);

        });

    renderLocation(filteredLocations);

}

document.getElementById("location-modal-title").dataset.i18n = "createLocation";

document.getElementById("create-location-btn").dataset.i18n = "create";

applyLanguage(localStorage.getItem("language") || "en");

function renderCountry(keyword = "") {

    const countryContainer =
        document.getElementById("country-container");

    const filteredCountries =
        countries.filter(function (country) {

            return country.name
                .toLowerCase()
                .includes(
                    keyword.toLowerCase()
                );

        });

    let html = "";

    filteredCountries.forEach(function (country) {

        html += `

            <div
                class="country-card"
                data-code="${country.code}"
                data-name="${country.name}"
            >

                <img
                    src="assets/flags/${country.code}.svg"
                    class="team-logo-preview"
                    alt="${country.name}"
                >

                <span>
                    ${country.name}
                </span>

            </div>

        `;

    });

    countryContainer.innerHTML = html;

}

function updateLogoPreview() {

    if (selectedLogo.type === "") {

        chooseLogoBox.innerHTML = `

            <i class="fa-solid fa-plus"></i>

            <p>Choose Logo</p>

        `;

        return;
    }

    if (selectedLogo.type === "country") {

        chooseLogoBox.innerHTML = `

            <img src="assets/flags/${selectedLogo.value}.svg" 
            class="team-logo-preview" alt="${selectedLogo.value}">

        `;

    }

    if (selectedLogo.type === "gallery") {

        chooseLogoBox.innerHTML = `
        
        <img src="${selectedLogo.value}" class="team-logo-preview">
        
        `;
    }

}

document.addEventListener("click", function (event) {

    if (event.target.closest(".country-card")) {

        const card = event.target.closest(".country-card");

        const code = card.dataset.code;

        selectedLogo.type = "country";

        selectedLogo.value = code.toLowerCase();

        updateLogoPreview();

        countryModal.classList.remove("show");

        document.body.classList.remove("modal-open");

        teamModal.classList.add("show");

        document.body.classList.add("modal-open");

    }
});

chooseLogo.addEventListener("click", function () {

    teamModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    logoModal.classList.add("show");

    document.body.classList.add("modal-open");

});

closeLogoModalBtn.addEventListener("click", function () {

    logoModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    teamModal.classList.add("show");

    document.body.classList.add("modal-open");

});

searchTournament.addEventListener("input", function () {

    updateTournamentList();

});

sortTournament.addEventListener("change", function () {

    updateTournamentList();

});

searchTeam.addEventListener("input", function () {

    updateTeamList();

});

function updateTeamList() {

    const keyword = searchTeam.value.toLowerCase();

    const filteredTeams = teams.filter(function (team) {

        return team.name.toLowerCase().includes(keyword);

    });

    renderTeam(filteredTeams);
}

sortTournamentTrigger.addEventListener(
    "click",
    function () {

        sortTournamentCustom.classList.toggle(
            "open"
        );

    }
);

sortTournamentOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                const value =
                    option.dataset.value;


                // Update select asli

                sortTournament.value =
                    value;


                // Update tulisan tombol

                sortTournamentValue.textContent =
                    option.textContent.trim();

                sortTournamentValue.dataset.i18n =
                    option.dataset.i18n;

                // Active state

                sortTournamentOptions.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                option.classList.add(
                    "active"
                );


                // Tutup dropdown

                sortTournamentCustom.classList.remove(
                    "open"
                );


                // Jalankan fungsi yang sudah ada

                updateTournamentList();

            }
        );

    }
);

document.addEventListener(
    "click",
    function (event) {

        if (
            !sortTournamentCustom.contains(
                event.target
            )
        ) {

            sortTournamentCustom.classList.remove(
                "open"
            );

        }

    }
);

function updateTournamentList() {

    const keyword = searchTournament.value.toLowerCase();

    const filterTournament = tournaments.filter(function (tournament) {

        return tournament.name.toLowerCase().includes(keyword);

    });

    const sort = sortTournament.value;

    const sortedTournament = [...filterTournament];

    if (sort === "az") {

        sortedTournament.sort(function (a, b) {

            return a.name.localeCompare(b.name);

        });
    }

    if (sort === "za") {

        sortedTournament.sort(function (a, b) {

            return b.name.localeCompare(a.name);

        });
    }

    if (sort === "newest") {

        sortedTournament.sort(function (a, b) {

            return new Date(b.createAt) - new Date(a.createAt);

        });
    }

    if (sort === "oldest") {

        sortedTournament.sort(function (a, b) {

            return new Date(a.createAt) - new Date(b.createAt);

        });
    }

    renderTournament(sortedTournament);

}

addTournamentbtn.addEventListener("click", function () {

    modal.classList.add("show");

    document.body.classList.add("modal-open");

    modalTitle.dataset.i18n = "createTournamentModal";

    createTournamentBtn.dataset.i18n = "create";

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

});

closeModalbtn.addEventListener("click", function () {

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

    modalTitle.dataset.i18n = "createTournamentModal";

    createTournamentBtn.dataset.i18n = "create";

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

    editIndex = null;

    document.getElementById("create-tournament-form").reset();

    resetSystemCounters();

});

function updateButtonState(counter) {

    const value = Number(counter.textContent);

    const minusButton = counter.previousElementSibling;

    const plusButton = counter.nextElementSibling;

    minusButton.disabled = value === 0;

    plusButton.disabled = value === 4;

}

function resetSystemCounters() {

    const counters = document.querySelectorAll(".count");

    counters.forEach(function (counter) {

        counter.textContent = 0;

        updateButtonState(counter);

    });

};

const plusButtons = document.querySelectorAll(".plus-btn");

plusButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const counter = button.previousElementSibling;

        let value = Number(counter.textContent);

        if (value < 4) {
            value++;
            counter.textContent = value;
            updateButtonState(counter);
        }

    });
});

const minusButtons = document.querySelectorAll(".minus-btn");

minusButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const counter = button.nextElementSibling;

        let value = Number(counter.textContent);

        if (value > 0) {
            value--;
            counter.textContent = value;
            updateButtonState(counter);
        }

    });
});

document.querySelectorAll(".count").forEach(function (counter) {

    updateButtonState(counter);

});

function renderTournament(data = tournaments) {

    const tournamentContainer =
        document.getElementById("tournament-container");

    const empty =
        document.querySelector(".empty");

    if (data.length === 0) {

        tournamentContainer.innerHTML = "";

        empty.hidden = false;

        return;
    }

    empty.hidden = true;

    let html = "";

    data.forEach(function (tournament) {

        let systemHTML = "";

        tournament.systems.forEach(function (system) {

            systemHTML += `
                <span class="system-badge">
                    ${translateSystem(system.type)}
                </span>
            `;

        });

        const createdDate = tournament.createAt
            ? new Date(tournament.createAt)
            : new Date();

        const formattedDate =
            createdDate.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });

        html += `
            <div
                class="tournament-card"
                data-id="${tournament.id}"
            >

                <h3>${tournament.name}</h3>

                <p class="created-date">
                    ${formattedDate}
                </p>

                <div class="tournament-system">
                    ${systemHTML}
                </div>

                <div class="card-actions">

                    <button
                        data-i18n="open"
                        class="open-btn"
                    >
                        Open
                    </button>

                    <button
                        data-i18n="edit"
                        class="edit-btn"
                    >
                        Edit
                    </button>

                    <button
                        data-i18n="delete"
                        class="delete-btn"
                    >
                        Delete
                    </button>

                </div>

            </div>
        `;

    });

    // DOM hanya diubah SEKALI
    tournamentContainer.innerHTML = html;

    // Translation hanya dijalankan SEKALI
    applyLanguage(
        localStorage.getItem("language") || "en"
    );
}

function renderTeam(data = teams) {

    const teamContainer =
        document.getElementById("team-container");

    if (data.length === 0) {

        teamContainer.innerHTML = `
            <p data-i18n="noTeamYet" class="empty">
                No team yet
            </p>
        `;

        applyLanguage(
            localStorage.getItem("language") || "en"
        );

        return;

    }

    let html = "";

    data.forEach(function (team, index) {

        let logo = "";

        if (team.logo.type === "icon") {

            logo =
                `<i class="${team.logo.value}"></i>`;

        }

        else if (team.logo.type === "country") {

            logo = `
                <img
                    src="assets/flags/${team.logo.value}.svg"
                    class="team-logo"
                >
            `;

        }

        else {

            logo = `
                <img
                    src="${team.logo.value}"
                    class="team-logo"
                >
            `;

        }

        html += `
            <div
                class="team-card"
                data-index="${index}"
            >

                ${logo}

                <h3>
                    ${team.name}
                </h3>

                <div class="team-actions">

                    <button
                        data-i18n="edit"
                        class="edit-team-btn"
                    >
                        Edit
                    </button>

                    <button
                        data-i18n="delete"
                        class="delete-team-btn"
                    >
                        Delete
                    </button>

                </div>

            </div>
        `;

    });

    teamContainer.innerHTML = html;

    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

function renderLocation(data = locations) {

    const locationContainer =
        document.getElementById("location-container");

    if (data.length === 0) {

        locationContainer.innerHTML = `
            <p data-i18n="noLocationYet" class="empty">
                No location yet
            </p>
        `;

        applyLanguage(
            localStorage.getItem("language") || "en"
        );

        return;
    }

    let html = "";

    data.forEach(function (location, index) {

        html += `
            <div
                class="location-card"
                data-index="${index}"
            >

                <div class="location-icon">

                    <i class="fa-solid fa-location-dot"></i>

                </div>

                <h3>
                    ${location.name}
                </h3>

                <div class="location-actions">

                    <button
                        data-i18n="edit"
                        class="edit-location-btn"
                    >
                        Edit
                    </button>

                    <button
                        data-i18n="delete"
                        class="delete-location-btn"
                    >
                        Delete
                    </button>

                </div>

            </div>
        `;

    });

    // Masukkan seluruh HTML sekaligus
    locationContainer.innerHTML = html;

    // Translate sekali saja
    applyLanguage(
        localStorage.getItem("language") || "en"
    );

}

const createTournamentform = document.getElementById("create-tournament-form");

createTournamentform.addEventListener("submit", function (event) {

    let InputNametournament = document.getElementById("tournament-name");

    if (InputNametournament.value.trim() == "") { return };

    event.preventDefault();

    const tournamentName = document.getElementById("tournament-name").value;

    const systems = [];

    document.querySelectorAll(".system-counter").forEach(function (counter) {

        const systemName = counter.dataset.system;

        const count = Number(counter.querySelector(".count").textContent);

        for (let i = 0; i < count; i++) {
            systems.push({

                id: crypto.randomUUID(),

                type: systemName,

                name: systemName,

                teams: [],

                meetingType: "single",

                qualified: 0,

                qualifiedSecondary: 0,

                eliminated: 0,

                eliminatedSecondary: 0

            });
        }

    });

    if (systems.length === 0) {
        showToast("Please select at least one tournament system!", "warning");
        return;
    };

    const tournament = {
        id: editIndex === null
            ? crypto.randomUUID()
            : tournaments[editIndex].id,
        name: tournamentName,
        systems: systems,
        createAt: editIndex === null
            ? new Date().toISOString()
            : tournaments[editIndex].createAt
    };

    if (editIndex === null) {

        tournaments.push(tournament);

    } else {

        const oldTournament = tournaments[editIndex];

        oldTournament.name = tournamentName;

        const newSystems = [];

        document.querySelectorAll(".system-counter").forEach(function (counter) {

            const type = counter.dataset.system;

            const count = Number(counter.querySelector(".count").textContent);

            const oldSystems = oldTournament.systems.filter(function (system) {

                return system.type === type;

            });

            for (let i = 0; i < count; i++) {

                if (oldSystems[i]) {

                    newSystems.push(oldSystems[i]);

                } else {

                    newSystems.push({

                        id: crypto.randomUUID(),

                        type: type,

                        name: type,

                        teams: [],

                        meetingType: "single",

                        qualified: 0,

                        qualifiedSecondary: 0,

                        eliminated: 0,

                        eliminatedSecondary: 0

                    });

                }

            }

        });

        oldTournament.systems = newSystems;

        editIndex = null;

        setLanguageKey(
            modalTitle,
            "createTournamentModal"
        );

        setLanguageKey(
            createTournamentBtn,
            "create"
        );

    }

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    updateTournamentList();

    document.getElementById("tournament-name").value = "";

    resetSystemCounters();

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

const navButtons = document.querySelectorAll(".nav-item");

const panels = document.querySelectorAll(".panel");

navButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        panels.forEach(function (panel) {

            panel.hidden = true;

        });

        const targetPanel = document.getElementById(button.dataset.panel);

        targetPanel.hidden = false;

        navButtons.forEach(function (btn) {

            btn.classList.remove("active");
        });

        button.classList.add("active");

        localStorage.setItem("activePanel", button.dataset.panel);

    });
});

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("edit-btn")) {

        modal.classList.add("show");

        document.body.classList.add("modal-open");

        setLanguageKey(modalTitle, "editTournament");

        setLanguageKey(
            createTournamentBtn,
            "saveChanges"
        );

        const card = event.target.closest(".tournament-card");

        const id = card.dataset.id;

        editIndex = tournaments.findIndex(function (item) {

            return item.id === id;

        });

        const tournament = tournaments[editIndex];

        const systemCount = {
            League: 0,
            Group: 0,
            "Knock-out": 0
        };

        tournament.systems.forEach(function (system) {

            if (system.type === "League") {
                systemCount.League++;
            }

            if (system.type === "Group") {
                systemCount.Group++;
            }

            if (system.type === "Knock-out") {
                systemCount["Knock-out"]++;
            }

            document.querySelectorAll("system-counter").forEach(function (counter) {

                const systemName = counter.dataset.system;

                const count = systemCount[systemName];

            });

        });

        document.querySelectorAll(".system-counter").forEach(function (counter) {

            const systemName = counter.dataset.system;

            const count = systemCount[systemName];

            counter.querySelector(".count").textContent = count;

            updateButtonState(counter.querySelector(".count"));

        });

        document.getElementById("tournament-name").value = tournament.name;

    }

    if (event.target.classList.contains("delete-btn")) {

        const card = event.target.closest(".tournament-card");

        const id = card.dataset.id;

        deleteIndex = tournaments.findIndex(function (item) {

            return item.id === id;

        });

        deleteModal.classList.add("show");

        document.body.classList.add("modal-open");

        const tournament = tournaments.find(function (item) {

            return item.id === id;

        });

        deleteTournamentName.textContent = tournament.name;

    }

    if (event.target.classList.contains("open-btn")) {

        const card = event.target.closest(".tournament-card");

        const id = card.dataset.id;

        const tournament = tournaments.find(function (item) {

            return item.id === id;

        });

        openTitle.textContent = tournament.name;

        openSystemContainer.innerHTML = "";

        tournament.systems.forEach(function (system) {

            openSystemContainer.innerHTML += `

            <button
                class="open-system-btn"
                data-tournament-id="${tournament.id}"
                data-system-id="${system.id}"
                data-type="${system.type}">

                ${translateSystem(system.type)}

            </button>

        `;

        });

        openModal.classList.add("show");

        document.body.classList.add("modal-open");

    }

    if (event.target.classList.contains("open-system-btn")) {

        const tournamentId = event.target.dataset.tournamentId;

        const systemId = event.target.dataset.systemId;

        const type = event.target.dataset.type;

        if (type === "Group") {

            window.location.href =
                `group.html?tournament=${tournamentId}&system=${systemId}`;

        }

        if (type === "League") {

            window.location.href =
                `league.html?tournament=${tournamentId}&system=${systemId}`;

        }

        if (type === "Knock-out") {

            window.location.href =
                `knockout.html?tournament=${tournamentId}&system=${systemId}`;

        }

    }

    if (event.target.classList.contains("edit-team-btn")) {

        const card = event.target.closest(".team-card");

        const index = card.dataset.index;

        editTeamIndex = index;

        const team = teams[index];

        document.getElementById("team-name").value = team.name;

        selectedLogo = {

            type: team.logo.type,

            value: team.logo.value

        };

        updateLogoPreview();

        document.getElementById("team-modal-title")
            .dataset.i18n = "editTeam";

        document.getElementById("create-team-btn")
            .dataset.i18n = "saveChanges";

        applyLanguage(
            localStorage.getItem("language") || "en"
        );

        teamModal.classList.add("show");

        document.body.classList.add("modal-open");

    }

    if (event.target.classList.contains("delete-team-btn")) {

        const card = event.target.closest(".team-card");

        deleteTeamIndex = card.dataset.index;

        const team = teams[deleteTeamIndex];

        deleteTeamName.textContent = team.name;

        deleteTeamModal.classList.add("show");

        document.body.classList.add("modal-open");

    }

    if (event.target.classList.contains("edit-location-btn")) {

        const card = event.target.closest(".location-card");

        const index = card.dataset.index;

        editLocationIndex = index;

        const location = locations[index];

        document.getElementById("location-name").value = location.name;

        document.getElementById("location-modal-title").dataset.i18n = "editLocation";

        document.getElementById("create-location-btn").dataset.i18n = "saveChanges";

        applyLanguage(localStorage.getItem("language") || "en");

        locationModal.classList.add("show");

        document.body.classList.add("modal-open");

    }

    if (event.target.classList.contains("delete-location-btn")) {

        const card = event.target.closest(".location-card");

        deleteLocationIndex = card.dataset.index;

        deleteLocationName.textContent = locations[deleteLocationIndex].name;

        deleteLocationModal.classList.add("show");

        document.body.classList.add("modal-open");

    }

});

cancelDeleteBtn.addEventListener("click", function () {

    deleteModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    deleteIndex = null;

});

confirmDeleteBtn.addEventListener("click", function () {

    tournaments.splice(deleteIndex, 1);

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    updateTournamentList();

    deleteModal.classList.remove("show");

    document.body.classList.remove("modal-open");

    deleteIndex = null;

});

updateTournamentList();

updateTeamList();

updateLocationList();

const activePanel = localStorage.getItem("activePanel");

if (activePanel) {

    const targetPanel = document.getElementById(activePanel);

    if (targetPanel) {

        panels.forEach(function (panel) {
            panel.hidden = true;
        });

        targetPanel.hidden = false;

        navButtons.forEach(function (button) {

            button.classList.remove("active");

            if (button.dataset.panel === activePanel) {
                button.classList.add("active");
            }

        });

    }

}

async function initializeApp() {

    // ==============================
    // LOAD LANGUAGE
    // ==============================

    initializeLanguage();


    // ==============================
    // LOAD LOCAL DATA
    // ==============================

    // Beri browser kesempatan
    // menyelesaikan proses rendering awal.

    await new Promise(function (resolve) {

        requestAnimationFrame(resolve);

    });

}

async function startApp() {

    const splash =
        document.getElementById("splash-screen");


    try {

        await initializeApp();


        // Pastikan splash terlihat
        // sebentar supaya transisinya terasa smooth.

        await new Promise(function (resolve) {

            setTimeout(resolve, 500);

        });


        splash.classList.add("hide");


    }

    catch (error) {

        console.error(
            "Failed to initialize application:",
            error
        );

        splash.classList.add("hide");

    }

}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        startApp();

    }
);

renderCountry();

renderTeam();

renderLocation();