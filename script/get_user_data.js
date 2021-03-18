document.addEventListener('DOMContentLoaded', function() {
   let elems = document.querySelectorAll('.datepicker');
   let instances = M.Datepicker.init(elems, {
      "format" : "yyyy-mm-dd",
      // "autoClose" : true
   });
});

// чтобы вывести данные пользователя, нам нужно послать запрос, вычитать эти данные из базы данных и разместить в нужные поля формы
// вытащим из куки емейл и пошлем ajax запрос на сервер, сервер вернет все пользовательские данные, которые мы разместим в форме (см. cabinet.php), которую можно изменять

let userEmail = getCookie('email');
console.log(userEmail);
ajax('core/get_user_data.php', 'post', getUserData, {"email" : userEmail});

// get a cookie - функция, которая позволит извлекать из куки необходимые параметры
function getCookie(cname) {
   let name = `${cname}=`;
   let decodedCookie = decodeURIComponent(document.cookie); // т.к. содержит специальный символы
   let ca = decodedCookie.split(';'); // превратит строку в массив
   for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      // Метод charAt() возвращает указанный символ из строки.
      // Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
      while (c.charAt(0) == ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}

function getUserData(result) {
   result = JSON.parse(result);
   console.log(result);
   // получив данные пользователя с сервера, выберем те, которые мы хотим изменять и присвоим их в строки формы (cabinet.php), предварительно добавив ее в файл
   document.querySelector('#signup-name').value = result.name;
   document.querySelector('#signup-pass').value = result.password;
   document.querySelector('#signup-birthday').value = result.birthday;
   let sex = document.querySelectorAll('.sex');
   for (let i = 0; i < sex.length; i++) {
      if (sex[i].value == result.sex) sex[i].checked = true;    
   }
   M.updateTextFields(); // обновляем поля после того как вывели в них информацию (это глобальный объект materialize.js) и добавляем для полей в label класс .active
}

// по нажатию на кнопку с value="update" нам необходимо повесить событие, чтобы данные из формы выбирались и отправлялись на обновление

document.querySelector('#signup-submit').onclick = function (event) {
   event.preventDefault(); // кнопка относится к форме, поэтому откючаем действие по умолчанию
   // получаем данные из формы и отправляем ajax запрос на сервер для обновления
   let updateData = {
      "email" : userEmail,
      "name" : document.querySelector('#signup-name').value,
      "pass" : document.querySelector('#signup-pass').value,
      "birthday" : document.querySelector('#signup-birthday').value,
      "sex" : getSex(),
   };
   ajax('core/update_user_data.php', 'post', updateUserData, updateData);
}

function updateUserData(result) {
   console.log(result);
   // if (result == 1) M.toast({html: "Данные успешно обновлены!"});
   // else M.toast({html: "Ошибка обновления"});
   if (result == 1) chips("Данные успешно обновлены!");
   else chips("Ошибка обновления");
}

function getSex() {
   let sex = document.querySelectorAll('.sex');
   for (let i = 0; i < sex.length; i++) {
      if (sex[i].checked) {
         return sex[i].value;
      }
   }
}

