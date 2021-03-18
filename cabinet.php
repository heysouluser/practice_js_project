<?php
    //var_dump($_COOKIE);
   if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
      header("Location: index.html");
      exit; 
   }
?>
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="shortcut icon" href="favicon.png" type="image/png">
   <title>User cabinet</title>
   <!--Import Google Icon Font-->
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   <!--Import materialize.css-->
   <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
   <link rel="stylesheet" href="./css/chips.css">
   <link rel="stylesheet" href="./css/style.css">
   <!--Let browser know website is optimized for mobile-->
   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>
   <div class="container">
      <div class="row">
         <div class="col l12 s12 center-align">
            <h1 class="user-cab-header">User cabinet</h1>
         </div>
         <div class="col l12 s12 center-align">
            <button id="logout" class="waves-effect waves-light btn blue lighten-1">
               <i class="material-icons right">logout</i>Logout
            </button>
         </div>
      </div>
      <div class="row">
         <div class="col m2 l3"></div>
         <div class="col m8 l6">
            <form> <!-- метод не нужен - определяем с помощью js -->
               <div class="row">
                  <!-- если нужно чтобы поля были друг под другом, делай класс у дива s12 -->
                  <div class="input-field col s12 m6 l6">
                     <input id="signup-name" type="text" class="validate">
                     <!-- добавляем класс .active если поля автоматически будут заполняться информацией, как здесь -->
                     <label class="active" for="signup-name">Name</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                     <input id="signup-pass" type="text" class="validate">
                     <label class="active" for="signup-pass">Password</label>
                  </div>
                  <div class="input-field col s12">
                     <input id="signup-birthday" type="text" class="datepicker">
                     <label class="active" for="signup-birthday">Birthday</label>
                  </div>
                  <!-- текст кнопки в span, кнопку и текст в label -->
                  <div class="col s12">Sex:
                     <div>
                        <label>
                           <input type="radio" value="male" name="sex" class="sex with-gap">
                           <span>Male</span>
                        </label>
                     </div>
                     <div>
                        <label>
                           <input type="radio" value="female" name="sex" class="sex with-gap">
                           <span>Female</span>
                        </label>
                     </div>
                     <div>
                        <label>
                           <input type="radio" value="other" name="sex" class="sex with-gap">
                           <span>Other</span>
                        </label>
                     </div>
                  </div>
                  <div class="col s12 m12 right-align">
                     <button id="signup-submit" class="waves-effect waves-light btn blue lighten-1"><i class="material-icons right">system_update_alt</i>Update</button>
                  </div>
               </div>              
            </form>
         </div>
         <div class="col m2 l3"></div>
      </div>
   </div>

   <!--JavaScript at end of body for optimized loading-->
   <script src="js/materialize.min.js"></script>
   <script src="./script/ajax.js"></script>
   <!-- для всплывающих сообщений либо свой код - chips.js, либо юзай M.toast (см. get_user_data.js функцию update_user_data) -->
   <script src="./script/chips.js"></script>
   <script src="./script/get_user_data.js"></script>
   <script src="./script/logout.js"></script>
</body>

</html>