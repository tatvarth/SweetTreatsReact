var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Menu = require('Menu');
var Gallery = require('Gallery');
var Order = require('Order');
var About = require('About');
var Testimonials = require('Testimonials');
var Contact = require('Contact');

var {Route,Router,IndexRoute,hashHistory}= require('react-router');
// object destructuring
//var Route = require('react-router').Route;
//Route,Router,IndexRoute helps us create Routes so users can switch urls
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path = "/" component = {Main}>
      <Route path = "/contact" component = {Contact}/>
      <Route path = "/testimonials" component = {Testimonials}/>
      <Route path = "/order" component = {Order}/>
      <Route path = "/gallery" component = {Gallery}/>
      <Route path = "/about" component = {About}/>
      <IndexRoute component = {Menu}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
