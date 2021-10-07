
$(function() {
    $('ul.tab-nav li .button').click(function() {
        var href = $(this).attr('data-ref');

        $('li .active.button', $(this).parent().parent()).removeClass('active');
        $(this).addClass('active');

        $('.tab-pane.active', $(href).parent()).removeClass('active');
        $(href).addClass('active');

        $('.tab-pane.fade', $(href).parent()).removeClass('fade');
        $(this).addClass('active');

        /*
        var toScroll = $(this).parent().parent().parent().parent();

        $('html, body').animate({
    		scrollTop: toScroll.offset().top
		}, 1000);
		*/

        return false;
    });
});


function showTab(selected, total)
{
  for(i = 1; i <= total; i += 1)
  {
    document.getElementById('tabs-' + i).style.display = 'none';
  }

  document.getElementById('tabs-' + selected).style.display = 'block';
}