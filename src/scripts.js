var ES6 = React.createClass({
  // shortcut to write methods
  // equivalent to `render: function()`
  render() {
    // const allows to declare a variable that cant
    // change value (that stays 'constant')
    const x = 1
    // [param] => [eval] is a shortcut to write functions
    // it is an arrow function
    // this code is equal to
    // var result = function(x) { return x * 2}
    const result = x => x * 2
    const styleContainer = {
      textAlign: "center", // commas will be tranformed to semicolons
      padding: 5, // trailing coma is supported in arrays and objects
      // no need to write px
    }
    return (
      <div style={ styleContainer } className="container">
        <h1>The result is { result(x) }</h1>
        <p>ES6 is awesome!</p>
      </div>
    )
  }
})

ReactDOM.render(
  <ES6 />,
  document.getElementById('example')
)
