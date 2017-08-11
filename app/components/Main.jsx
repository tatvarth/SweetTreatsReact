var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('Nav');

var Main = React.createClass({
  render:function(){
    var MainCss={
      backgroundColor: '#ffeecc'
    };
    return(
      <div>
        <Nav/>
        <div style={MainCss}>
          {this.props.children}
        </div>
      </div>

    );
  }
});
module.exports = Main;
