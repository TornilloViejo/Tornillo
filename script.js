jQuery('document').ready(function($){
	var menuBtn= $('.menu-icono');
	menu = $('.naveg ul');

	menuBtn.click(function()
        {
        	menu.addClass('show');
        });
});