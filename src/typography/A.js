Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var PropTypes=require('prop-types');
var _reactNative=require('react-native');
var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);
var _themeManager=require('../themeManager');var _themeManager2=_interopRequireDefault(_themeManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var defaultTheme=_extends({},
_themeManager2.default.getStyle('Text'),{
FONT_COLOR:'#2f8cff',
PADDING_VERTICAL:0});


_themeManager2.default.setSource('A',function(){return defaultTheme;});

var defaultStyle=function defaultStyle(theme){
return{
color:theme.FONT_COLOR,
textDecorationLine:'underline',
textDecorationStyle:'solid',
textDecorationColor:theme.FONT_COLOR};

};var

A=function(_Component){_inherits(A,_Component);function A(){var _ref;var _temp,_this,_ret;_classCallCheck(this,A);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=A.__proto__||Object.getPrototypeOf(A)).call.apply(_ref,[this].concat(args))),_this),_this.














_handlePress=function(e){
if(_this.props.onPress){
_this.props.onPress(e);
if(e.defaultPrevented){
return;
}
}

if(!_this.props.href){
return;
}

_reactNative.Linking.canOpenURL(_this.props.href).then(function(supported){
if(supported){
_reactNative.Linking.openURL(_this.props.href);
}else{
_this.props.onError('Don\'t know how to open URI: '+
_this.props.href);

}
});
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(A,[{key:'render',value:function render()

{
var theme=this.props.theme||_themeManager2.default.getStyle('A');
var baseStyle=defaultStyle(theme);
return(
_react2.default.createElement(_Text2.default,{
accessibilityRole:'link',
style:[baseStyle,this.props.style],
onPress:this._handlePress},

this.props.children));


}}]);return A;}(_react.Component);A.propTypes={href:PropTypes.string,onPress:PropTypes.func,onError:PropTypes.func,children:PropTypes.node,style:PropTypes.oneOfType([PropTypes.object,PropTypes.array]),theme:PropTypes.object};A.defaultProps={onPress:function onPress(){},onError:function onError(){}};exports.default=


A;module.exports=exports['default'];
