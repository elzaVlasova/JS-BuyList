/**
 * Created by 112 on 20.01.2016.
 */



$(function(){
//This	function	will	be	called
//	after	the	DOM	was	loaded	and	ready
//Here	we	can	place	all	jQuery	Code
    var count =3;
    var nameOfItem;


    $('.buttonDodaty').click(function(){
               count++;
        nameOfItem = $(".inputNazvaTovaru").val();
        if (nameOfItem){
        var item =  '<div class="str2" id="item'+ count + '">'+
            '<div class="colom1">' + '<span>' + nameOfItem + '</span>'+'</div>'
            +' <div class="colom2">'+'<button  class="buttonMinus"><b>-</b></button>'+ '<span class="number1">1</span>' + '<button  class="buttonPlus">'+'<b>+</b>'+'</button>'
            +'</div>'+' <div class="colom3" >'+' <button class="buttonCupleno" type="button"> Куплено </button>'
            +  '  <button class="delete" type="button">&#215;</button>'+'  </div>'+' </div>';
        var resbox = '<div class = "resRect">'+  nameOfItem + '<div class="resCircl">' + 1 + '</div>'+' </div>';
        $('input').val('');
        $('input').focus();
        $(".list-of-items").append (item);
            $("#zalishock").append (resbox);}

    });


   $('.delete').click(function() {
      $( $(this).parents('.str2')).remove();
   });

    /*$('.name-not-bought').click(function(){
        $ ($(this).) // меняет texarea na input
    });*/

 /*   $('.buttonCupleno').click(function() {
    $($(this).parents('.str2')).fadeOut(400);
        var parentOfButtom = $($(this).parents('.str2'));
$(parentOfButtom.column1).css({'display':'none'});
         $($(this).parents('.str2')).fadeIn(400);

         итак:
         1)первый столбец зачеркиваем текст (делаем его видимым)
         2)во втором делаем видимость и нажимаемость 0 для кнопок плюс, минус
         3)display: none для куплено и удалить, display: inline для не куплено
    });*/




});