# {%= title || name %}

{%= description %}

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/{%= git_user %}/{%= name %}/master/dist/{%= name %}.widget.jqueryui.min.js
[max]: https://raw.github.com/{%= git_user %}/{%= name %}/master/dist/{%= name %}.widget.jqueryui.js

In your web page:

```html
  <script src="jquery.js"></script>
  <script src="dist/{%= name %}.widget.jqueryui.min.js"></script>
  <script>
    $('<div></div>').{%= name %}()
  </script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
