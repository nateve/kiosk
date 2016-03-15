
//bind body functions to create :active CSS pseudo classes
$('body').bind('touchstart', function(){

});

$('body').bind('mouseover', function(){

});

$('.carousel').carousel({
  interval: 5000
})

// set up directory mappings
var directory = {
    imagedir: "img/",
    Room291: "291_library_instruction_classroom.jpg",
    Room289: "289_cites_classroom.jpg",
    circ: "circulation_and_reserves.jpg",
    gaming: "gaming.jpg",
    loanabletech: "loanable_technology.jpg",
    mediacommons: "media_commons.jpg",
    mediaediting: "media_editing_stations.jpg",
    newbooks: "new_books_and_magazines.jpg",
    printersupper: "printers_upper.jpg",
    research: "research_help.jpg",
    scannersupper: "scanners_upper.jpg",
    studyupper: "study_rooms_upper.jpg",
    techsupport: "tech_support_desk.jpg",
    videostudio: "video_studio.jpg",
    writersworkshop: "writers_workshop.jpg",
    audiobooth: "audio_booth.jpg",
    mediacollection: "media_collection.jpg",
    mediaviewing: "media_viewing_stations.jpg",
    mortenson: "mortenson_center.jpg",
    books: "books.jpg",
    magazines: "magazines_and_journals.jpg",
    studycarrels: "study_carrels.jpg"
};



function GetQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
};

$.fn.textWidth = function(){
  var html_org = $(this).html();
  var html_calc = '<span>' + html_org + '</span>';
  $(this).html(html_calc);
  var width = $(this).find('span:first').width();
  $(this).html(html_org);
  return width;
};

function setButtonWidth() {
    var max_width = 403;
    $('.btn-xl').each(function(i,obj) {
        var txt_width = $(this).textWidth();
        if (txt_width > 403) {
          max_width = txt_width;
        }         
    });
    $('.btn-xl').width(max_width);
}

function preload(sources) {
    jQuery.each(sources, function(i,source) { jQuery.get(source); });
}

var waitForFinalEvent = (function () {
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

