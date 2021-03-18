// для того, чтобы осуществить разлогин нужно удалить конкретную куки (если присвоить doc.cookie = null, ничего не выйдет, т.к. null присвоится не для нужного нам значения куки) или обнулить их и потом перезагрузить страницу

document.querySelector('#logout').onclick = function () {
   let c = document.cookie;
   console.log(c);
   let d = new Date();
   d.setTime(d.getTime() - (10*60*1000)); // ставим время, в которое куки еще  не существовало
   let expires = d.toUTCString();
   document.cookie = `${c}; expires=${expires}; path=/`; // перезаписали куки
   location.reload();
}

// подключен в cabinet.php