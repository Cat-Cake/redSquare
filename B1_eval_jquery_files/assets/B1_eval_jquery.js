

$("#toggleRedSquare").click(function() {
    $(".redsquare-app").toggleClass('is-active')
    if ($(".redsquare-app").hasClass('is-active')) {
        $(".btn").addClass('disabled')
        $(".btn").removeClass("btn-light").addClass("btn-primary")
    } else {
        $(".btn").removeClass('disabled')
        $(".btn").addClass("btn-light").removeClass("btn-primary")
    }
})

function moving() {
    if ($(".custom-switch").hasClass("is-active")) {

    }
}

function jumbotron() {
    //q1
    $(".jumbotron").off("click", $('a'))
    //q2
    $("ul").addClass('list-group')
    $("li").addClass('list-group-item')
    //q3
    $("ul").siblings().prepend('<i class="fa fa-plus-circle"></i>');
    //q4
    $( ".jumbotron p i" ).replaceWith( $('.jumbotron').data('source') );
    //q5
    $(".team").parent('li').addClass('.list-group-item-success')


}

moving()
jumbotron()