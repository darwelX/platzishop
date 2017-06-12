console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
const $form = $('#suscribeForm');
const $formGroup = $form.find('.form-group');
const $formControl = $formGroup.find('.form-control');

$form.submit(function(eve){
    eve.preventDefault();
    const error = Math.random() > 0.5;
    $formGroup.removeClass().addClass('form-group');
    $formControl.removeClass().addClass('form-control');
    $formGroup.addClass( error ? 'has-danger':'has-success');
    $formControl.addClass( error ? 'form-control-danger':'form-control-success');
    $formGroup.find('.form-control-feedback').remove();
    var el;
    if(error){
        el = $('<div>', {html: 'Ha ocurrido un error'});
    }else{
        el = $('<div>', {html: 'Te enviaremos todas las novedades'});
    }
    el.addClass('form-control-feedback');
    $formGroup.append(el);
});

function mostrarModal(){
    $('#btnNoregistrar').click( function(eve){
        localStorage.noMostrarModal = true;
    });
    const mostrar = (localStorage.noMostrarModal != 'undefined')? localStorage.noMostrarModal:"false";
    if(!mostrar){
        // {backdrop: 'static', keyboard: false} evita que al realizar  click fuera de la ventana esta no se cierre
        $('#modal-oferta').modal({backdrop: 'static', keyboard: false});
    }
}
var mediaquery = window.matchMedia("(max-width: 576px)");

function handleOrientationChange(mediaquery) {
    if (mediaquery.matches){
        $('#filtros-container').collapse('hide')
    }else{
        $('#filtros-container').collapse('show');
    }
}
handleOrientationChange(mediaquery);
/* esta al tanto de los cambios de tamaños de la pantalla y ejecuta el codigo de la funcion cada vez */
mediaquery.addListener(handleOrientationChange);

const $filtrosToggle = $('#filtrosToggle');
$filtrosToggle.click(function(eve){
    eve.preventDefault();
    const $i = $filtrosToggle.find('i.fa');
    const isDown =$i.hasClass('fa-chevron-down');
    if(isDown){
        $i.removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }else{
        $i.removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
});

$('#tooltip1 , #tooltip2, #tooltip3, #tooltip4, #tooltip5').tooltip();

$('[data-toggle="tooltip"]').hover(function(){
    $('.tooltip-inner').css('background-color', '#8ab542');
    $('.tooltip-inner').css('color', 'white');
    $('.tooltip-arrow').css('color', '#00a8c4!important');
});

const $minus = $('#minus');
$minus.click(function(eve){
    eve.preventDefault();
    var $cantidad = $('#cantidad');
    if($cantidad.val() > 0){
        var valor = $cantidad.val()
        valor--;
        $cantidad.val(valor);
    }
});
const $plus = $('#plus');
$plus.click(function(eve){
    eve.preventDefault();
    var $cantidad = $('#cantidad');
    var valor = $cantidad.val();
    valor++;
    $cantidad.val(valor);
});
