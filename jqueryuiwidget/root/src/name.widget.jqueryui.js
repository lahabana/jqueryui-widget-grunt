/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

;(function ($) {
    var that = {};
    $.widget( "{%= name %}" , {
        version: "{%= version %}",
        options: {
            selectors: {
            },
            classes: {
            }
        },

        /**
         * Destroy an instantiated plugin and clean up
         * modifications the widget has made to the DOM
         */
        destroy: function () {

            // Unbind event handlers
            $.Widget.prototype.destroy.call(this);
            // For UI 1.9, define _destroy instead and don't
            // worry about
            // calling the base widget
        },

        /**
         * Initialize the widget and bind all the events
         */
        _create: function () {
            that = this;

            // Create all the event handlers and store them in an object to be able to unbind easily
            that._initWidget();
            that._bindAll();
        },

        /**
         * We bind all events
         */
        _bindAll: function () {
            var opts = that.options;
        },

        /**
         */
        _initWidget: function () {
        },

        /**
         * Respond to any changes the user makes to the
         * DUMMY method for the moment
         */
        _setOption: function (key, value) {
            if (key === "someValue") {
                //this.options.someValue = doSomethingWith(value);
            } else {
                //this.options[key] = value;
            }

            // For UI 1.8, _setOption must be manually invoked
            // from the base widget
            $.Widget.prototype._setOption.apply(this, arguments);
            // For UI 1.9 the _super method can be used instead
            // this._super( "_setOption", key, value );
        }
    });
}(jQuery));
