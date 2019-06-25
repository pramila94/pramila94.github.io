$(document).ready(function(){

		$("#divContainer img").on({

				mouseover: function(){

					$(this).css({       
				//jason object
					'cursor':'pointer',
					'border-Color' : 'red'

					});
					


				}, mouseout: function(){


					$(this).css({       
				//jason object
					'cursor':'default',
					'border-Color' : 'grey'

					});

				}, click: function(){

					var imageUrl = $(this).attr('src');
					$("#mainImage").attr('src', imageUrl);
					

				}


		});

});