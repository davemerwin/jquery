	var uiTestAccordion = {
		"accordion": {
			"default": {
				"" : "$('#foo').html(content).accordion();",
				"clone" : "$('#foo').clone().accordion();",
				"empty" : "$([]).accordion();",
				"detached" : "$('<'+'div/>').accordion();"
			},
			"options": {
				"header" : {
					"ui-accordion-link" : "$('#foo').html(content).accordion({\n\t\ header: 'a.ui-accordion-link' \n});"
				},
				"active" : {
					"false" : "$('#foo').html(content).accordion({\n\t\ active: false \n});",
					"test-active" : "$('#foo').html(content).accordion({\n\t\ active: '.test-active' \n});",
					":last" : "$('#foo').html(content).accordion({\n\t\ active: ':last' \n});",
					"1" : "$('#foo').html(content).accordion({\n\t\ active: 1 \n});"
				},
				"selectedClass" : {
					"test-selected" : "$('#foo').html(content).accordion({\n\t\ selectedClass: 'test-selected' \n});"
				},
				"alwaysOpen" : {
					"true" : "$('#foo').html(content).accordion({\n\t\ alwaysOpen: true \n});",
					"false" : "$('#foo').html(content).accordion({\n\t\ alwaysOpen: false \n});"
				},
				"animated" : {
					"false" : "$('#foo').html(content).accordion({\n\t\ animated: false \n});",
					"slide" : "$('#foo').html(content).accordion({\n\t\ animated: 'slide' \n});",
					"bounceslide" : "$('#foo').html(content).accordion({\n\t\ animated: 'bounceslide' \n});",
					"easeslide" : "$('#foo').html(content).accordion({\n\t\ animated: 'easeslide' \n});"
				},
				"event" : {
					"mouseover" : "$('#foo').html(content).accordion({\n\t\ event: 'mouseover' \n});"
				},
				"navigation" : {
					"true" : "$('#foo').html(content).accordion({\n\t\ navigation: true \n});",
					"false" : "$('#foo').html(content).accordion({\n\t\ navigation: false \n});"
				},
				"navigationFilter" : {
					"XXX" : "$('#foo').html('XXX Unknown')"
				},
				"autoHeight" : {
					"true" : "$('#foo').html(content).accordion({\n\t\ autoHeight: true \n});",
					"false" : "$('#foo').html(content).accordion({\n\t\ autoHeight: false \n});"
				},
				"running" : {
					"XXX" : "$('#foo').html('XXX Unknown')"
				},
				"fillSpace" : {
					"true" : "$('#foo').html(content).accordion({\n\t\ fillSpace: true \n});",
					"false" : "$('#foo').html(content).accordion({\n\t\ fillSpace: false \n});"
				},
				"clearStyle" : {
					"true" : "$('#foo').html(content).accordion({\n\t\ clearStyle: true, autoheight: false \n});",
					"false" : "$('#foo').html(content).accordion({\n\t\ clearStyle: false, autoheight: false \n});"
				},
				"disabled" : {
					"true" : "$('#foo').html(content).accordion({\n\t\ disabled: true \n});",
					"false" : "$('#foo').html(content).accordion({\n\t\ disabled: false \n});"
				}
			},
			"methods": {
				"activate" : "$('#foo').html(content).accordion();\nsetTimeout(\n\t\"$('#foo').accordion('activate', 1);\"\n, 3000);",
				"enable" : "$('#foo').html(content).accordion({\n\t\ disabled: true \n});\nsetTimeout(\n\t\"$('#foo').accordion('enable');\"\n, 3000);",
				"disable" : "$('#foo').html(content).accordion();\nsetTimeout(\n\t\"$('#foo').accordion('disable');\"\n, 3000);",
				"destroy" : "$('#foo').html(content).accordion();\nsetTimeout(\n\t\"$('#foo').accordion('destroy');\"\n, 3000);"
			}
		}
	};
