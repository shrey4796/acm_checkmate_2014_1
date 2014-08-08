// empty placeholder
var name="Shirsh Zibbu"
var score=123
var multiplier=7;
var doubledip=5;
$("#nameSpan").text(name);
$("#scoreSpan").text(score);
$("#multiplierSpan").text(multiplier);
$("#doubledipSpan").text(doubledip);

$("#answerInput").focus(function(event)
{
	var shadow="0 0 15px rgba(0,0,0,0.35)";
	// $("#answerLabel").css('box-shadow',shadow);
	// $("#answerInput").css('box-shadow',shadow);
	// $("#submitButton").css('box-shadow',shadow);
	$("#answerDiv").css('box-shadow',shadow);
});


var questions=[
	"Praesent fringilla vel odio vel egestas. In commodo lacus ut ligula ullamcorper, et iaculis lorem tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec ante eget velit semper dictum fringilla et nunc. Duis vitae quam nec metus vestibulum sodales. Nulla vulputate ligula ornare tellus blandit, vitae fermentum nisi dictum. Nunc quis fermentum erat.",
	"Curabitur libero nunc, interdum a fringilla et, euismod sit amet ante. Sed eu mattis tortor. Cras eleifend lacus in risus porttitor, at elementum nisl volutpat. Suspendisse varius velit purus, a eleifend nisl tincidunt sit amet. Sed non eros id est interdum pulvinar. Quisque turpis nisi, scelerisque quis leo id, pretium pretium mi. Quisque tincidunt varius convallis. Suspendisse sit amet pulvinar est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu lectus auctor, auctor augue vel, fermentum dui. Fusce semper est non dolor rutrum consequat. Cras dignissim diam lectus, non gravida enim viverra id. Vivamus non sem quis turpis dignissim aliquam. Cras volutpat, elit nec auctor consequat, quam metus mattis nunc, imperdiet mattis nunc justo quis lorem.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia mauris vitae est aliquet, eu bibendum odio facilisis. Aliquam consectetur vitae dui a commodo. Ut id consequat magna, eu laoreet lorem. Maecenas egestas dui dignissim scelerisque iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu nisi non libero vulputate consequat ac at nisl. Phasellus eu lacinia ligula. Etiam fringilla aliquet libero quis dictum. Nunc volutpat ligula sem, ut ullamcorper sem euismod non. Duis sit amet lacus dolor. Praesent quis sollicitudin libero, sit amet elementum dui. Nam rutrum tellus egestas tempus molestie. Sed ac odio ultricies, pulvinar leo et, pretium turpis. Duis vehicula leo vitae nisl rhoncus convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia mauris vitae est aliquet, eu bibendum odio facilisis. Aliquam consectetur vitae dui a commodo. Ut id consequat magna, eu laoreet lorem. Maecenas egestas dui dignissim scelerisque iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu nisi non libero vulputate consequat ac at nisl. Phasellus eu lacinia ligula. Etiam fringilla aliquet libero quis dictum. Nunc volutpat ligula sem, ut ullamcorper sem euismod non. Duis sit amet lacus dolor. Praesent quis sollicitudin libero, sit amet elementum dui. Nam rutrum tellus egestas tempus molestie. Sed ac odio ultricies, pulvinar leo et, pretium turpis. Duis vehicula leo vitae nisl rhoncus convallis."
];
var questionLinks=$(".questionLink").click(function(event)
{
	var quesNum=event.target.id[1]+event.target.id[2];
	quesNum=parseInt(quesNum)-1;
	$("#questionSpan").text(questions[quesNum]);
});
