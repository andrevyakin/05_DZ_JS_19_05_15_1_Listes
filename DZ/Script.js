/**
 * Created by Andrey on 10.04.2015.
 */
/*1.	В клиентской области окна приложения создать 2 списка,
 первый из которых содержит числа от 1 до 5, второй – числа от 200 до 205.
  При нажатии кнопки «Добавить» в список с фокусом ввода добавить очередное число.*/



var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");

var add1 = 5;
var add2 = 205;

for (var i = 1; i <= 5; i++)
{
 form1.options[i - 1] = new Option(i, "str" + i);
 form2.options[i - 1] = new Option(199 + i, "str" + 199 + i);
}
form2.options[5] = new Option(205, "str" + 205);

function Add()
{

 if (form1.selectedIndex != -1)
 {
  form1.options[add1++] = new Option(add1, "str" + add1);
  form1.selectedIndex = -1;
 }

 if (form2.selectedIndex != -1)
 {
  form2.options[add2++ - 199] = new Option(add2, "str" + add2);
  form2.selectedIndex = -1;
 }
}


