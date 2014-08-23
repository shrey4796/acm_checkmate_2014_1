// empty placeholder
var name="Shirsh Zibbu";
var score=123;
var multiplier=7;
var doubledip=5;
$("#nameSpan").text(name);
$("#scoreSpan").text(score);
$("#multiplierSpan").text(multiplier);
$("#doubledipSpan").text(doubledip);

$("#answerInput").focus(function(event)
{
	var shadow="0 0 15px rgba(0,0,0,0.35)";
	$("#answerDiv").css('box-shadow',shadow);
});


$(".questionLink").click(function(event)
{
	var quesNum=event.target.id;
//	$("#questionSpan").load('questions/'+quesNum+'.txt');
	$.get('questions/'+quesNum+'.txt',function(data)
	{
		$("#questionSpan").text(data);
	});
});

$("#submitButton").click(function()
{
	$.post("response.txt",{data:"potato"});
});