/**
 * Created by Andrey on 10.04.2015.
 */
/*1.	� ���������� ������� ���� ���������� ������� 2 ������,
 ������ �� ������� �������� ����� �� 1 �� 5, ������ � ����� �� 200 �� 205.
  ��� ������� ������ ���������� � ������ � ������� ����� �������� ��������� �����.*/



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


