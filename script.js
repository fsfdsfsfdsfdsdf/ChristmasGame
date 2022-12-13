//Функция перехода с главной на игру и наоборот
function changePage(a){
    let gp =  document.querySelector(".gamePage");
    let mp = document.querySelector(".mainPage");
    let hb = document.querySelector(".Page");
    if(a == 1){
        gp.style.display = "flex";
        mp.style.display = "none";
        hb.style.background = "darkred";
    }else{
        gp.style.display = "none";
        mp.style.display = "";
        hb.style.background = "";
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