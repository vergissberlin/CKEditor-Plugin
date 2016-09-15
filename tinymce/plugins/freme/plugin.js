/* eslint no-unused-vars: "off" */
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
				title:   'Detect concepts',
				// @todo change this to tinyMCE url
				url:     '../plugins/freme/dialogs/link.html',
				width:   550,
				height:  400,
				onclick: function () {
				}
			});
		}
	});
});
