/*
 * jquery-ui-widget-grunt init task
 *
 * Copyright (c) 2012 "lahabana" Charly Molter
 * Licensed under the MIT license.
 * https://github.com/lahabana/jquery-ui-widget-grunt/blob/master/LICENSE-MIT
 */

// Basic template description.
exports.description = 'Create a jQuery-ui widget, including QUnit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ should not contain "jquery-ui" or "js".' +
  '_Project title_ should be a human-readable title, and doesn\'t need to contain ' +
  'the word "jQuery" or "widget", although it may. For example, a widget titled "Awesome ' +
  'jQuery-ui Widget" might have the name "awesome-widget". For more information ' +
  'please see the documentation at ' +
  'http://api.jqueryui.com/jQuery.widget/';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  grunt.helper('prompt', {type: 'jqueryuiwidget'}, [
    // Prompt for these values.
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'title', function(value, data, done) {
      // Fix jQuery capitalization.
      value = value.replace(/jquery/gi, 'jQuery');
      done(null, value);
    }),
    grunt.helper('prompt_for', 'description', 'The best jQuery widget ever.'),
    grunt.helper('prompt_for', 'version'),
    grunt.helper('prompt_for', 'repository'),
    grunt.helper('prompt_for', 'homepage'),
    grunt.helper('prompt_for', 'bugs'),
    grunt.helper('prompt_for', 'licenses', 'MIT'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email'),
    grunt.helper('prompt_for', 'author_url'),
    grunt.helper('prompt_for', 'jquery_version')
  ], function(err, props) {
    // A few additional properties.
    props.jqueryjson = props.name + '.widget.jqueryui.json';
    props.dependencies = {jquery: props.jquery_version || '>= 1',
                          jqueryui: props.jqueryui_version || '>=1' };
    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: 'jqueryui-widget',
      version: '0.0.0-ignored',
      npm_test: 'grunt qunit',
      // TODO: pull from grunt's package.json
      node_version: '>= 0.6.0'
    });

    // Generate jquery.json file.
    init.writePackageJSON(props.jqueryjson, props);

    // All done!
    done();
  });

};
