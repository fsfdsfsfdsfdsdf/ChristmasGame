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