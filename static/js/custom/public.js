const print = (..._) => { 
    
    console.log(..._);

}
const Check_Hidden = _ => { 
    
    return $(_).css("display") === "none";

}
function Check_Class(el, class_name, check_parent=true) {

    return check_parent ? $(el).hasClass(class_name) ||
        $(el).parents(`.${class_name}`).length : $(el).hasClass(class_name);

}
function Position(element, query) {

    if (query == "top") return $(element).offset().top;

    if (query == "bottom") return $(window).height() - $(element).offset().top;

    if (query == "left") return $(element).offset().left;

    else if (query == "right") return $(window).width() - $(element).offset().left;

    else return [$(element).offset().top, $(element).offset().left];

}
function getCookie(name) {

    let cookieValue = null;

    if (document.cookie && document.cookie !== "") {
        
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {

            const cookie = cookies[i].trim();

            if (cookie.substring(0, name.length + 1) === (name + "=")) {

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;

            }

        }

    }

    return cookieValue;

}
function get_date(required_name=""){
        
    var date = new Date();
    let Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Mon_name = Months[date.getMonth()]
    let Day_name = Days[date.getDay()];
    let Weak_day = date.getDay();

    let years = date.getFullYear();
    let months = date.getMonth() + 1;
    let days = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = "";
    if (hours > 12) { am_pm = "PM"}
    else am_pm = "AM";
    if (hours == 0) hours = 12;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    required_name = required_name.toLowerCase();

    if (required_name == "year") return years;
    else if (required_name == "month") return months;
    else if (required_name == "day")  return days;
    else if (required_name == "month_list") return Months;
    else if (required_name == "day_list") return Days;
    else if (required_name == "month_name") return Months[months-1];
    else if (required_name == "day_name") return Days[date.getDay()];
    else if (required_name == "hour") return hours;
    else if (required_name == "minute") return minutes;
    else if (required_name == "second") return seconds;
    else if (required_name == "dayname") return Day_name;
    else if (required_name == "monthname") return Mon_name;
    else if (required_name == "weekday") return Weak_day;
    else if (required_name == "am_pm") return am_pm;
    else if ( ! required_name || required_name == "full" ) 
        return `${years}-${months}-${days} ${hours}:${minutes}:${seconds}`;
    else return `${years}-${months}-${days} ${hours}:${minutes}:${seconds}`;

}
function Query( query ) {

    const urlSearchParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params[query] ? params[query] : "";

}
function Full_Screen() {

    document.fullScreenElement && null !== document.fullScreenElement ||
    !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ?
    document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ?
    document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen
    && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ?
    document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() :
    document.webkitCancelFullScreen && document.webkitCancelFullScreen()

}
function check_src(src){

    var img = new Image();
    img.src = src;
    return img.complete;

}