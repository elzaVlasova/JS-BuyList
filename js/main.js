/**
 * Created by 112 on 20.01.2016.
 */



$(function(){
//This	function	will	be	called
//	after	the	DOM	was	loaded	and	ready
//Here	we	can	place	all	jQuery	Code
    var count = 0;

    function addElement(title){
        var id = ++count;

        var item =  '<div class="product" id="item'+ count + '">'+
            '<div class="colom-1-name">'
            +'<span class="product-name" style="display: block;">' + title + '</span>'
            +'<input class="product-name-change" value="'+title+'" style="display: none;" />' +'</div>'
            +' <div class="colom-2-quantity">'
            +'<button  class="button-minus" id="minus-'+id+'" value="'+id+'" style="opacity: 0.5" disabled="disabled"><b>-</b></button>'
            + '<span class="number1">1</span>'
            + '<button  class="button-plus" id="plus-'+id+'" value="'+id+'">'+'<b>+</b>'+'</button>' +'</div>'
            +' <div class="colom-3-state" >'+' <button class="button-cupleno" value="'+id+'"> Куплено </button>'
            + '<button class="delete"  value="'+id+'" >&#215;</button>'
            + '<button class="button-ne-cupleno" value="'+id+'" style="display: none"> Не куплено </button>'
            +'  </div>'+' </div>';
        var resbox = '<div class = "res-rect" id="product-rect-'+id+'" >'+  title + '<div class="res-circl" id="left-block-count-'+id+'">' + 1 + '</div>'+' </div>';

        $('input').focus();
        $(".list-of-items").append (item);
        $("#zalishock").append (resbox);
    }

    $('.button-add-product').click(function(){
        var nameOfItem = $(".input-name-of-product").val();
            $('.input-name-of-product').val('');

        if (nameOfItem){
        addElement(nameOfItem, count);}
    });


    //делегування
     $(document).on('click', '.delete', function(){
        var id = $(this).val();
        $( $(this).parents('.product')).remove();
        $('#left-block-count-'+id).parent().remove();
    })
        .on('click', '.product-name', function(){
            $(this).hide().next().show().focus();
        })

        .on ('focusout', '.product-name-change', function(){

           var newName = $(this). val();
            $(this).hide().prev().show().text(newName);
        })

         .on('click', '.button-cupleno', function(){
            var id = $(this).val();
            var clone = $('#product-rect-'+id).clone();
            $('#product-rect-'+id).remove();

            $('#is-bought').prepend(clone);
            $(this).hide().next().hide().next().show();
            $(this).parents('.product').find('.product-name').css('text-decoration', 'line-through');
            $(this).parents('.product').find('.button-plus').hide();
            $(this).parents('.product').find('.button-minus').hide();

        })

         .on ('click', '.button-ne-cupleno', function(){
            var id = $(this).val();
            var clone =$('#product-rect-'+id).clone();

            $('#product-rect-'+id).remove();
            $('#zalishock').prepend(clone);
            $(this).hide().prev().show().prev().show();
            $(this).parents('.product').find('.product-name').css('text-decoration', 'none');
            $(this).parents('.product').find('.button-plus').show();
            $(this).parents('.product').find('.button-minus').show();
        })

         .on('click', '.button-plus', function(){
            var id = $(this).val();
            var quantity = $(this).prev().text();
            quantity = parseInt(quantity)+1;

            $(this).prev().text(quantity);
            $(this).prev().prev().removeAttr("disabled").css('opacity', '1.0');
            $('#left-block-count-'+id).text(quantity);
        })

         .on('click', '.button-minus', function(){
            var id = $(this).val();
            var quantity = $(this).next().text();
             quantity = parseInt(quantity);

            if (quantity > 1)
                quantity = quantity - 1;
            $(this).next().text(quantity);
            $('#left-block-count-'+id).text(quantity);

            if(quantity==1) {$(this).attr("disabled","true").css('opacity', '0.5');
            }
        })
    ;

    addElement('Мед');
    addElement('Облепиха');
    addElement('Чабрець');

//імітація кліку на мінус для його нефуекціювання
    $('.button-minus').trigger('click');



});