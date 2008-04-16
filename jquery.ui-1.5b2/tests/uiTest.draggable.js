
	var uiTestDraggable = {
		"draggable": {
			"default": {
				"" : "$('#foo').draggable();",
				"clone" : "$('#foo').clone().draggable();",
				"empty" : "$([]).draggable();",
				"detached" : "$('<'+'div/>').draggable();"
			},
			"options": {
				"appendTo" : {
					"(empty)" : "$('#foo').draggable({ helper: 'clone', appendTo: '' });",
					"body" : "$('#foo').draggable({ helper: 'clone', appendTo: 'body' });"
				},
				"axis" : {
					"(empty)" : "$('#foo').draggable({ axis: '' });",
					"x" : "$('#foo').draggable({ axis: 'x' });",
					"y" : "$('#foo').draggable({ axis: 'y' });",
					"invalidvalue" : "$('#foo').draggable({ axis: 'invalidvalue' });"
				},
				"cancel" : {
					"(empty)" : "$('#foo').append('<' + 'input type=\"text\"/>').draggable({ cancel: '' });",
					"*" : "$('#foo').draggable({ cancel: '*' });",
					"div" : "$('#foo').draggable({ cancel: 'div' });",
					"code" : "$('#foo').draggable({ cancel: 'code' });",
					"div,code" : "$('#foo').draggable({ cancel: 'div,code' });"
				},
				"containment" : {
					"document" : "$('#foo').draggable({ containment: 'document' });",
					"parent" : "$('#foo').draggable({ containment: 'parent' });"
				},
				"cursor" : {
					"crosshair" : "$('#foo').draggable({ cursor: 'crosshair' });",
					"move" : "$('#foo').draggable({ cursor: 'move' });"
				},
				"cursorAt" : {
					"top2left2" : "$('#foo').draggable({ cursorAt: {top: 2, left: 2} });",
					"bottom20right14" : "$('#foo').draggable({ cursorAt: {bottom: 20, right: 14} });"
				},
				"delay" : {
					"400" : "$('#foo').draggable({ delay: 400 });"
				},
				"distance" : {
					"40" : "$('#foo').draggable({ distance: 40 });"
				},
				"grid" : {
					"x50y10" : "$('#foo').draggable({ grid: [50, 10] });",
					"x10y50" : "$('#foo').draggable({ grid: [10, 50] });"
				},
				"handle" : {
					"(empty)" : "$('#foo').draggable({ handle: '' });",
					"*" : "$('#foo').draggable({ handle: '*' });",
					"div" : "$('#foo').draggable({ handle: 'div' });",
					"code" : "$('#foo').draggable({ handle: 'code' });"
				},
				"helper" : {
					"(empty)" : "$('#foo').draggable({ helper: '' });",
					"original" : "$('#foo').draggable({ helper: 'original' });",
					"clone" : "$('#foo').draggable({ helper: 'clone' });",
					"invalidvalue" : "$('#foo').draggable({ helper: 'invalidvalue' });",
					"function" : "$('#foo').draggable({ helper: function() {\n\t return $('<'+'div style=\"background:blue;\" />').addClass('bar')[0]; \n} });"
				},
				"opacity" : {
					"0.6" : "$('#foo').draggable({ opacity: 0.6 });",
					"0.3" : "$('#foo').draggable({ opacity: 0.3 });",
					"0.4helperclone" : "$('#foo').draggable({ opacity: 0.4, helper: 'clone' });"
				},
				"revert" : {
					"true" : "$('#foo').draggable({ revert: true });",
					"truehelperclone" : "$('#foo').draggable({ revert: true, helper: 'clone' });",
					"false" : "$('#foo').draggable({ revert: false });",
					"falsehelperclone" : "$('#foo').draggable({ revert: false, helper: 'clone' });"
				},
				"scroll" : {
					"true" : "$('#foo').draggable({ scroll: true });",
					"false" : "$('#foo').draggable({ scroll: false });"
				},
				"scrollSensitivity" : {
					"2" : "$('#foo').draggable({ scroll: true, scrollSensitivity: 1 });",
					"20" : "$('#foo').draggable({ scroll: true, scrollSensitivity: 20 });",
					"200" : "$('#foo').draggable({ scroll: true, scrollSensitivity: 200 });"
				},
				"scrollSpeed" : {
					"2" : "$('#foo').draggable({ scroll: true, scrollSpeed: 2 });",
					"20" : "$('#foo').draggable({ scroll: true, scrollSpeed: 20 });",
					"200" : "$('#foo').draggable({ scroll: true, scrollSpeed: 200 });"
				},
				"zIndex" : {
					"1" : "$('#foo').draggable({ zIndex: 1 });",
					"100" : "$('#foo').draggable({ zIndex: 100 });"
				}
			},
			"callbacks": {
				"start" : "$('#foo').draggable({ start: function() {\n\t uiTestLog('start'); \n} });",
				"drag" : "$('#foo').draggable({ drag: function() {\n\t uiTestLog('drag'); \n} });",
				"stop" : "$('#foo').draggable({ stop: function() {\n\t uiTestLog('stop'); \n} });"
			},
			"methods": {
				"disable" : "$('#foo').draggable({}).draggable('disable');",
				"enable" : "$('#foo').draggable({}).draggable('disable').draggable('enable');",
				"destory" : "$('#foo').draggable({}).draggable('destroy');"
			}
		}
	};
