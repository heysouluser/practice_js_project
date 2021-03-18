function ajax(url, method, functionName, dataArray) {
   let xhttp = new XMLHttpRequest();
   xhttp.open(method, url, true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send(requestData(dataArray));

   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         functionName(this.response);
      }
   }
}

function requestData(dataArr) {
   let out = '';
   for (let key in dataArr) {
      out += `${key}=${dataArr[key]}&`;
   }
   console.log(out);
   return out;
}

// functionName - данные, полученные с сервера
// dataArray - данные, которые мы отправляем на сервер

// если в ответе (functionName) приходит JSON строка, то ее нужно распарсить - имя параметра functionName = JSON.parse(имя параметра functionName); после этого можно обращаться к любому свойству разбираемого массива

// встроенная база denwera MySQL - http://localhost/tools/phpMyAdmin/

// создав базу данных (базы данных – имя, кодировка – создать), нужно создать таблицу внутри базы данных, с которой будем работать (здесь - .sql файл, который находится в u17.Настройка окружения), загрузка через импорт
