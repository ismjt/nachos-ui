var PropTypes=require('prop-types');Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _Text=require('./Text');var _Text2=_interopRequireDefault(_Text);
var _themeManager=require('../themeManager');var _themeManager2=_interopRequireDefault(_themeManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var theme=_extends({},
_themeManager2.default.getStyle('Text'),{
FONT_COLOR:'#bdc1cc',
FONT_SIZE:17,
FONT_WEIGHT:'500'});


_themeManager2.default.setSource('H4',function(){return theme;});

var H4=function H4(props){
var textProps=_extends({},
props,{
theme:props.theme||_themeManager2.default.getStyle('H4')});

return _react2.default.createElement(_Text2.default,textProps);
};

H4.propTypes={theme:PropTypes.object};exports.default=

H4;module.exports=exports['default'];
