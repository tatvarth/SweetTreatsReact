var React = require('react');

var Testimonials = React.createClass({
  render:function(){
    var testimonialDivCss={
      textAlign:'center',
      color:'#ac7339',
      padding:'1%'
    };
    var paraCss={
      padding: '1% 25%',
      textAlign: 'justify'
    };
    return(
      <div style={testimonialDivCss}>
        <h1>What our Clients say about us!</h1>
          <p style={paraCss}>
            I come to the Oven Bakery every morning, not just for the coffee and the pastries but for the excellent  service! The coffee is roasted by Northbound,
             local company, and the pastries are simply said are divine!I ordered a variety of pastries for a breakfast meeting that were out of this world delicious! Warm when I picked them up, aromas to make your stomach growl and flavor combinations in the scones and muffins were wonderful. Don't remember much about the meeting... Thanks to owner Tiphaine Ferchaud, she's very pleasant and talented and operates a real gem in our Mt. Shasta food scene.
          </p>
          <p>Vee Hilton - Milpitas,CA </p>
          <p style={paraCss}>
            Every year on our way up north we stop in, great pastry and bread. Big brick oven I'm sure the pizza is amazing too, I'll have to try next time.
          </p>
      </div>
    );
  }
});
module.exports = Testimonials;
