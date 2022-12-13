//Функция перехода с главной на игру и наоборот
function changePage(a){
    let gp =  document.querySelector(".gamePage");
    let mp = document.querySelector(".mainPage");
    let hb = document.querySelector(".Page");
    let ft = document.querySelector("footer");
    if(a == 1){
        gp.style.display = "flex";
        mp.style.display = "none";
        hb.style.background = "darkred";
        ft.style.display = "none";
    }else{
        gp.style.display = "none";
        mp.style.display = "";
        hb.style.background = "";
        ft.style.display = "";
    }
}

//Функция для открытия попапа с регистрацией или входом
function loginPopup() {
    var modal = document.getElementById("my_modal");
    var span = document.getElementsByClassName("close_modal_window")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

//Функция для показа регистрационной панели или логинной
function showReg(a) {
    if(a == 1){
        document.querySelector(".divRegForm").style.display = "block";
        document.querySelector(".divLogForm").style.display = "none";
    }else{
        document.querySelector(".divRegForm").style.display = "none";
        document.querySelector(".divLogForm").style.display = "block";
    }
}

//Функция для открытия попапа с настройками
function settingsPopup() {
    var settings = document.getElementById("settings");
    var csc = document.getElementsByClassName("close_settings_content")[0];
    settings.style.display = "block";
    csc.onclick = function () {
        settings.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == settings) {
            settings.style.display = "none";
        }
    }
}