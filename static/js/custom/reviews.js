// for the reviews form active class toggle
$('.reviews-form').children('li').on('click', function(){
    $('.reviews-form').children('li').removeClass('active');
    $(this).addClass('active');
})
// for the select menu
let hoverColor = '#fff4dd';
let backgroundColor = 'white'
$('li.default-option').on('click', function () {
    $('ul.select-div').removeClass('active')
    $(this).parent().toggleClass('active');
})
$('.select-group li').on('click', function(){
    let currentTale = $(this).children('p').text();
    $(this).parent().prev().html(currentTale);
    $(this).parents('.select-div').removeClass('active');
    if($(this).children('p').text() === $(this).parent().prev().text()){
        $(this).siblings().children('span').addClass('hide');
        $(this).children('span').removeClass('hide');
        $(this).siblings().css('backgroundColor', backgroundColor)
        $(this).css('backgroundColor', hoverColor)
    }
})
// for the reviews list
const revText = $('.reviews-list .reviews-content .text');
var fullText;
var partialText;
if($(revText).text().length > 300){
    fullText = $(revText).text();
    partialText =  fullText.slice(0, 300)+'...';
    $('.reviews-list .reviews-content .text').text(partialText)
}
$('.reviews-list .reviews-content .spoiler button').on('click', function(){
    if($(revText).text().length>303){
    $('.reviews-list .reviews-content .text').text(partialText)
        $(this).children('p').text('Expand review')
        $(this).parent().removeClass('expanded')
        $(this).parents('li.reviews-content').find('.text').removeClass('expanded')
    }else{
        $('.reviews-list .reviews-content .text').text(fullText)
        $(this).children('p').text('Hide the review')
        $(this).parent().addClass('expanded')
        $(this).parents('li.reviews-content').find('.text').addClass('expanded')
    }
})