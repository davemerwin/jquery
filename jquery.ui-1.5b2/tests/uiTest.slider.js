
	var uiTestSlider = {
		"slider": {
			"default": {
				"" : "$('#foo').slider();",
				"clone" : "$('#foo').clone().slider();",
				"empty" : "$([]).slider();",
				"detached" : "$('<'+'div/>').slider();"
			},
			"options": {
				"handle" : {
					"ui-foo-slider" : "$('#foo').slider({ handle: 'ui-foo-slider'});"
				},
				"range" : "$('#foo').slider({ " +
					"minValue: 100,"+
					"maxValue: 50000,"+
					"steps: 1000,"+
					"range: true,"+
					"handles: [{start:100}, {start:1000}],"+
					"change: function(e, ui) "+
						"{ uiTestLog(Math.round(ui.instance.value(0)) + ' - ' + Math.round(ui.instance.value(1))); }"+
				"})"
			},
			"callbacks": {
				"start" : "$('#foo').slider({ start: function() {\n\t uiTestLog('start'); \n} });",
				"slide" : "$('#foo').slider({ slide: function() {\n\t uiTestLog('slide'); \n} });",
				"change" : "$('#foo').slider({ change: function() {\n\t uiTestLog('change'); \n} });",
				"stop" : "$('#foo').slider({ stop: function() {\n\t uiTestLog('stop'); \n} });"
			},
			"methods": {
				"disable" : "$('#foo').slider({}).slider('disable');",
				"enable" : "$('#foo').slider({}).slider('disable').slider('enable');",
				"destory" : "$('#foo').slider({}).slider('destroy');"
			}
		}
	};
