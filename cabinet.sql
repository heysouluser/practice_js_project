-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Мар 19 2021 г., 15:02
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `cabinet`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `birthday` varchar(100) NOT NULL,
  `sex` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `birthday`, `sex`) VALUES
(1, 'Ivan', 'ivan@mail.ru', '112233', '02.04.1997', 'male'),
(2, 'olga', 'olga@mail.ru', '7788', '02.04.1991', 'female'),
(3, 'alex', 'alex@mail.ru', '5566', '10.11.1985', 'male'),
(4, 'katerina', 'kat@ua.ua', '1144', '2011-03-16', 'female'),
(5, 'evgeniy', 'evg@mail.ru', '123456', '11-01-2000', 'male'),
(6, 'fedor', 'fed@mail.ru', '334488', '05-04-1991', 'male'),
(7, 'petr', 'petr@mail.com', '339911', '04-04-2001', 'male'),
(8, 'dima', 'dima@mail.com', '8814', '01-01-2003', 'male'),
(9, 'lena', 'natasha@mail.ru', '112233', '02.02.1995', 'other'),
(10, 'paulo', 'paulo@ua.com', '2223', '11-01-1978', 'female'),
(11, 'Sergey', 'sss@s.ru', '5555', '2010-12-08', 'other'),
(12, 'ramil', 'ramil@ua.ua', '11111', '2005-03-17', 'male'),
(13, 'dilya', 'dilya@ddd.com', '22222', '2002-12-14', 'female');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
