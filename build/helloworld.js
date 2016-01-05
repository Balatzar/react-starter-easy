var Trouc = React.createClass({
  displayName: 'Trouc',

  // shortcut to write methods
  // equivalent to `render: function()`
  render() {
    // const allows to declare a variable that cant
    // change value (that stays 'constant')
    const x = 1;
    // [param] => [eval] is a shortcut to write functions
    // it is an arrow function
    // this code is equal to
    // var result = function(x) { return x * 2}
    const result = x => x * 2;
    return React.createElement(
      'h1',
      null,
      result(x)
    );
  }
});

ReactDOM.render(React.createElement(Trouc, null), document.getElementById('example'));