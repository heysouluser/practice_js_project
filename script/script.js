document.querySelector('#signup-submit').onclick = function (event) {
   event.preventDefault();
   let name = document.querySelector('#signup-name').value; 
   let pass = document.querySelector('#signup-pass').value; 
   let email = document.querySelector('#signup-email').value; 
   let birthday = document.querySelector('#signup-birthday').value; 
   let sex = document.querySelectorAll('.sex');
   for (let i = 0; i < sex.length; i++) {
      if (sex[i].checked) {
         sex = sex[i].value;
         break;
      }
   }
   let data = {
      "name" : name,
      "pass" : pass,
      "email" : email,
      "birthday" : birthday,
      "sex" : sex,
   }

   ajax('core/signup.php', 'post', signup, data);

   function signup(result) {
      console.log(result);
      if (result == 2) M.toast({html: "Заполните поля"});
      // if (result == 2) chips("Заполните поля"); // свой код
      else if (result == 1) {
         M.toast({html: "Теперь можно войти!"});
         closeModal();
      } 
      else M.toast({html: "Ошибка, повторите регистрацию позже"});     
   }
}

document.querySelector('#login-submit').onclick = function (event) {
   event.preventDefault();
   let pass = document.querySelector('#login-pass').value; 
   let email = document.querySelector('#login-email').value; 

   let data = {
      "pass" : pass,
      "email" : email,
   }

   ajax('core/login.php', 'post', login, data);

   function login(result) {
      // console.log(result);
      if (result == 2) M.toast({html: "Заполните поля"});
      // if (result == 2) chips("Заполните поля"); // свой код
      else if (result == 0) M.toast({html: "Пользователь не найден!"});
      else  {
         console.log(result);
         result = JSON.parse(result);
         let d = new Date();
         d.setTime(d.getTime() + (10*60*1000)); // устанавливаем время жизни куки
         // если куки удаляются - нас разлогинивает
         let expires = d.toUTCString();
         document.cookie = `email=${result.email}; expires=${expires}; path=/`;
         // в рамках одного браузера куки будут работать на всех вкладках этого домена
         location.href = "cabinet.php"; // куда будем перенаправлять
      }   
   }
}

// следующие действия - вывод данных пользователя, чтобы он мог изменить их в кабинете и сохранение этих данных (get_user_data.js) + кнопка разлогина (logout.js)

// Когда сервер понимает, что такой пользователь есть и необходимо произвести логирование, то возможны 2 варианта развития событий: системы авторизации и логирования построены на куках - файлах, которые генерирует сервер и отправляет в результате запроса клиенту (браузеру); клиент (браузер) получает этот файл, сохраняет его у себя в хранилище и при каждом запросе на сервер, если куки есть, браузер автоматически будет их отсылать, соответственно сервер по этим кукам может понять залогинен пользователь или нет
