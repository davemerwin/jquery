
	var uiTestResizable = {
		"resizable": {
			"default": {
				"" : "$('#foo').resizable();",
				"clone" : "$('#foo').clone().resizable();",
				"empty" : "$([]).resizable();",
				"detached" : "$('<'+'div/>').resizable();"
			},
			"options": {
				"handles" : {
					"all" : "$('#foo').resizable({ handles: 'all'});",
					"n + s" : "$('#foo').resizable({ handles: 'n,s' });",
					"e + w" : "$('#foo').resizable({ handles: 'e,w' });"
				},
				"containment" : {
					"document" : "$('#foo').resizable({ containment: 'document' });",
					"parent" : "$('#foo').resizable({ containment: 'parent' });"
				},
				"maxHeight" : {
					"200px" : "$('#foo').resizable({ maxHeight: 200 });"
				},
				"maxWidth" : {
					"400px" : "$('#foo').resizable({ maxWidth: 400 });"
				},
				"minHeight" : {
					"50px" : "$('#foo').resizable({ minHeight: 50 });"
				},
				"minWidth" : {
					"10px" : "$('#foo').resizable({ minWidth: 10 });"
				},
				"proxy" : {
					".bar" : "$('#foo').resizable({ proxy: '#bar' });"
				},
				"destructive" : {
					"true" : "$('#foo').resizable({ destructive: true });",
					"false" : "$('#foo').resizable({ destructive: false });"
				},
				"proportionallyResize" : {
					"bar" : "$('#foo').resizable({ proportionallyResize: [$('#bar')] });"
				},
			},
			"callbacks": {
				"start" : "$('#foo').resizable({ start: function() {\n\t uiTestLog('start'); \n} });",
				"resize" : "$('#foo').resizable({ resize: function() {\n\t uiTestLog('resize'); \n} });",
				"stop" : "$('#foo').resizable({ stop: function() {\n\t uiTestLog('stop'); \n} });"
			},
			"methods": {
				"disable" : "$('#foo').resizable({}).resizable('disable');",
				"enable" : "$('#foo').resizable({}).resizable('disable').resizable('enable');",
				"destory" : "$('#foo').resizable({}).resizable('destroy');"
			}
		}
	};
