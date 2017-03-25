$(document).ready(function() {
			var counter = 1;
			$("#inputer").keypress(function(e) {
				if (e.which == 13) { // if eneter pressed
					var input_value = $(this).val();
					$(".task-list").append("<li class='task'>" + counter + ". " + input_value + "</li>");
					$(this).val(''); // clear the input
					counter++;
				}
			});
			$(".task-list").on("click", ".task", function() {
				$(this).slideToggle(300, function() {
					$(this).remove();
					setTimeout(300, function() {counter--});
				});
				var set = $(this).nextAll();
					for (let i = 0; i < set.length; i++) {
						var that = $(set[i]);
						var task_text = that.html();
						var dot_index = task_text.indexOf(".");
						var index_text = task_text.slice(0, dot_index);
						var current_index= parseInt(index_text);
						that.html((current_index - 1) + task_text.slice(dot_index));
						// poor implementation but at least works
					}	
			});
			$(".task-list").on("mouseover", ".task", function() {
				$(this).css("text-decoration", "line-through");
				$(this).css("cursor", "pointer");
			});
			$(".task-list").on("mouseout", ".task", function() {
				$(this).css("text-decoration", "none");
			});
			$("#clear_button").on("click", function() {
				$(".task-list").children().each(function() {
					$(this).fadeOut(500);
				});
				setTimeout($(".task-list").empty, 1000);
				counter = 1;
			})

		});