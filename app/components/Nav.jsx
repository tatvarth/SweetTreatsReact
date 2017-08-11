var React = require('react');
var {Link,IndexLink}=require('react-router');
var Nav = React.createClass({
  render:function(){
    var divCss={
      backgroundColor: '#ffe6b3',
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '1%',
      border:'#e67300 dashed 2px'
    };

var divHeaderCss = {
  backgroundColor: '#FEEFD9',
  backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(236, 176, 182,.5) 50%)',
  backgroundSize: '4%',
  height:'50px'
};

   var menuElementCss={
      color:'#6699ff',
      fontWeight:'bold',
      textDecoration:'none',
      padding:'0% 5%'
    };
   var logoCss = {
  backgroundImage: 'url("logo.png")',
height: '110px',
width: '200px',
position: 'absolute',
top: '22px',
backgroundSize: '200px 110px'
    };
    var menuElementDivCss = {
paddingLeft:'200px'
    };

    return(
      <div>
        <div style={divHeaderCss}></div>
        <div style={divCss}>
          <div style={logoCss}></div>
          <div style={menuElementDivCss}>
            <IndexLink to="/" activeClassName="active" activeStyle={{color:'black',fontWeight:'bold'}} style={menuElementCss}>Menu</IndexLink>
            <IndexLink to="/gallery" activeStyle={{color:'black',fontWeight:'bold'}} style={menuElementCss} activeClassName="active">Gallery</IndexLink>
            <IndexLink to="/order" activeStyle={{color:'black',fontWeight:'bold'}} style={menuElementCss} activeClassName="active">Order</IndexLink>
            <IndexLink to="/about" activeStyle={{color:'black',fontWeight:'bold'}} style={menuElementCss} activeClassName="active">About</IndexLink>
            <IndexLink to="/testimonials" activeStyle={{color:'black',fontWeight:'bold'}} style={menuElementCss} activeClassName="active">Testimonials</IndexLink>
            <IndexLink to="/contact" activeStyle={{color:'black',fontWeight:'bold'}} style={menuElementCss} activeClassName="active">Contact</IndexLink>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Nav;
