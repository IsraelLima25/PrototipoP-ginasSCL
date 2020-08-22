$('.dropdown').on('show.bs.dropdown', function () {
    var div = ($(this).find('div'));
    div.slideDown("slow");
})

$('.dropdown').on('hide.bs.dropdown', function () {
    var div = ($(this).find('div'));
    div.slideUp("slow");
})



