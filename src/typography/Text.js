Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var PropTypes=require('prop-types');
var _reactNative=require('react-native');

var _themeManager=require('../themeManager');var _themeManager2=_interopRequireDefault(_themeManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var defaultTheme={
FONT_COLOR:'#333',
FONT_SIZE:14,
FONT_WEIGHT:'normal',
FONT_STYLE:'normal',
PADDING_VERTICAL:10,
TEXT_ALIGN:'left'};


_themeManager2.default.setSource('Text',function(){return defaultTheme;});

var defaultStyle=function defaultStyle(theme){
return{
fontSize:theme.FONT_SIZE,
fontWeight:theme.FONT_WEIGHT,
fontStyle:theme.FONT_STYLE,
color:theme.FONT_COLOR,
paddingVertical:theme.PADDING_VERTICAL};

};

var Text=function Text(props){
var theme=props.theme||_themeManager2.default.getStyle('Text');
var baseStyle=defaultStyle(theme);var
textProps=_objectWithoutProperties(props,[]);
textProps.style=[_extends({
textAlign:props.align},baseStyle),
textProps.style];



delete textProps.theme;
delete textProps.align;

return _react2.default.createElement(_reactNative.Text,textProps);
};

Text.propTypes={
align:PropTypes.string,
style:PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
theme:PropTypes.object};


Text.defaultProps={align:'left'};exports.default=

Text;module.exports=exports['default'];
