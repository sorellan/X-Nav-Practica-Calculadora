jQuery(document).ready(function() {

	/*Memoria*/
	mem = null;

	/*Tomamos el display*/
	display = $("#solution");

	$(".num, .op").click(function() {
		display.val(display.val().concat($(this).html()));
		//display.val(display.val() + $(this).html());
	});

	$("#delete").click(function() {
		aux = display.val();
		display.val(aux.slice(0,aux.length-1));
	});

	$("#equal").click(function() {
		try{
			op = eval(display.val());
			$("#allclear").trigger("click");
			display.val(op);
		} catch (err) {
			$("#allclear").trigger("click");
			display.val("Syntax Error");
		}
	});

	$("#allclear").click(function() {
		display.val("");
	});

	$("#setmemory").click(function() {
		mem = display.val();
	});

	$("#getmemory").click(function() {
		display.val(display.val().concat(mem));
	});
});