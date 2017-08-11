var React = require('react');

var Menu = React.createClass({
  render:function(){
  var menuDivCss={
    textAlign:'center',
    color:'#ac7339',
    padding:'1%'
  };
  var columnCss={
    textAlign: 'justify',
    width:'45%',
    display:'inline-block'
  };
  var menuItemTitle = {
    fontWeight:'bold'
  }
  var menuItemDesc = {
    fontWeight:'normal'
  }
  var partition = {
    borderRight:'#e67300 dashed 2px'
  }
  return(
    <div style={menuDivCss}>
      <h1>Cake Flavors</h1>
        <div style={columnCss, partition}>
          <div style={menuItemTitle}>Chocolate</div>
          <div style={menuItemDesc}>Chocolate cake + chocolate ganache</div>
          <div style={menuItemTitle}>Chocolate</div>
          <div style={menuItemDesc}>Chocolate cake + chocolate ganache</div>
          <div style={menuItemTitle}>Chocolate</div>
          <div style={menuItemDesc}>Chocolate cake + chocolate ganache</div>
        </div>
        <div style={columnCss}>
          <div style={menuItemTitle}>Chocolate</div>
          <div style={menuItemDesc}>Chocolate cake + chocolate ganache</div>
          <div style={menuItemTitle}>Chocolate</div>
          <div style={menuItemDesc}>Chocolate cake + chocolate ganache</div>
          <div style={menuItemTitle}>Chocolate</div>
          <div style={menuItemDesc}>Chocolate cake + chocolate ganache</div>
         </div>
    </div>
  );
}
});
module.exports = Menu;
