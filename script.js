$(document) .ready(function(){
   //AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ==============
 $('.category_list .category_item[category="all"]') .addClass('ct_item-active');

 $('.category_item') .click(function(){
     var catProduct= $(this).attr('category');
     console.log('Live reload enabled.')

     //AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
     $('.Category_item') .removeClass('ct_item-active');
     $(this) .addClass('ct_item-active');

     //OCULTANDO PRODUCTOS =========
     $('.product-item').hide();
     
     //MOSTRANDO PRODUCTOS============
     $('.product-item○[category="'+catProduct+'"]') .show();
 });
 $('.category_item[category="all"]') .click(function(){
     $('Live reload enabled.') .show();
 });

});
   