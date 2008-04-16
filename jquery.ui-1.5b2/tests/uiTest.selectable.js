	var uiTestSelectable = {
		"selectable": {
			"default": {
				"" : "$('#foo').html(content).selectable({});",
				"clone" : "$('#foo').html(content).clone().selectable();",
				"empty" : "$([]).selectable();",
				"detached" : "$('<'+'div/>').selectable();"
			},
			"options": {
				"apendTo" : {
					"XXX" : "$('#foo').html('todo / figure out');"
				},
				"autoRefresh" : {
					"true" : "$('#foo').html(content).selectable({autoRefresh : true}); $('#test-list').append('<li>Item 5</li>');",
					"false" : "$('#foo').html(content).selectable({autoRefresh : false}); $('#test-list').append('<li>Item 5</li>');"
				},
				"filter" : {
					"*" : "$('#foo').html(content).selectable({filter: '*'});",
					":odd" : "$('#foo').html(content).selectable({filter: ':odd'});",
					":even" : "$('#foo').html(content).selectable({filter: ':even'});",
					".filter-test" : "$('#foo').html(content).selectable({filter: '.filter-test'});"
				},
				"tolerance" : {
					"touch" : "$('#foo').html(content).selectable({tolerance: 'touch' });",
					"fit" : "$('#foo').html(content).selectable({tolerance: 'fit' });"
				}
			},
			"callbacks": {
				"start" : "$('#foo').html(content).selectable({start: function(){uiTestLog('start') }});",
				"selected" : "$('#foo').html(content).selectable({selected: function(){uiTestLog('selected') }});",
				"selecting" : "$('#foo').html(content).selectable({selecting: function(){uiTestLog('selecting') }});",
				"unselected" : "$('#foo').html(content).selectable({unselected: function(){uiTestLog('unselected') }});",
				"unselecting" : "$('#foo').html(content).selectable({unselecting: function(){uiTestLog('unselecting') }});",
				"stop" : "$('#foo').html(content).selectable({stop: function(){uiTestLog('stop') }});"
			},
			"methods": {
				"chained" : {
					"disable" : "$('#foo').html(content).selectable({}).selectable('disable');",
					"enable" : "$('#foo').html(content).selectable({}).selectable('disable').selectable('enable');"
				},
				"enable" : "$('#foo').html(content).selectable().selectable('disable');\nsetTimeout(\n\t\"$('#foo').selectable('enable');\"\n, 3000);",
				"disable" : "$('#foo').html(content).selectable(); \nsetTimeout(\n\t\"$('#foo').selectable('disable');\"\n, 3000);",
				"toggle" : "$('#foo').html(content).selectable();\nsetTimeout(\n\t\"$('#foo').selectable('toggle');\"\n, 3000);setTimeout(\n\t\"$('#foo').selectable('toggle');\"\n, 6000);",
				"destroy" : "$('#foo').html(content).selectable(); setTimeout(\"$('#foo').selectable('destroy');\", 3000);"
			}
		}
	};
