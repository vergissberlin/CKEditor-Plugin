tinymce.PluginManager.requireLangPack('freme', 'de_DE');
tinymce.PluginManager.add('freme', function (editor, url) {
	// Add a button that opens a window
	editor.addButton('freme', {
		icon:    true,
		// @todo change this to tinyMCE url
		image:   '../plugins/freme/icons/fremeLink.png',
		tooltip: 'Add contextual links',
		onclick: function () {
			// Open window
			editor.windowManager.open({
				title:    'Detect concepts',
				// @todo change this to tinyMCE url
				url:      '../plugins/freme/dialogs/link.html',
				width:    300,
				height:   200,
				onsubmit: function (e) {
					// @todo Insert content when the window form is submitted
					editor.insertContent('Title: ' + e.data.contextualData);
				}
			});
		}
	});

	// Adds a menu item to the tools menu
	editor.addMenuItem('freme', {
		text:    'Detect concepts',
		context: 'tools',
		onclick: function () {
			// @todo Implement the request
		}
	});
});