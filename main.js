$(document).ready(function() {

var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

var context = {title: "My other Post", body: "This is my first post!"};
var html    = template(context);

 $(".content").append(html);

});
