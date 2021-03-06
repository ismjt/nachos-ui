Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);var PropTypes=require('prop-types');
var _reactNative=require('react-native');
var _themeManager=require('./themeManager');var _themeManager2=_interopRequireDefault(_themeManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var defaultTheme={
BUBBLE_BACKGROUND:'#2f8cff',
BUBBLE_MIN_HEIGHT:70,
BUBBLE_BORDER_RADIUS:10,
BUBBLE_PADDING_VERTICAL:15,
BUBBLE_PADDING_HORIZONTAL:25,
BUBBLE_FONT_SIZE:14,
BUBBLE_FONT_COLOR:'#fff'};


_themeManager2.default.setSource('Bubble',function(){return defaultTheme;});

var defaultStyle=function defaultStyle(theme){
return{
base:{
position:'relative',
minHeight:theme.BUBBLE_MIN_HEIGHT,
borderRadius:theme.BUBBLE_BORDER_RADIUS,
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
paddingVertical:theme.BUBBLE_PADDING_VERTICAL,
paddingHorizontal:theme.BUBBLE_PADDING_HORIZONTAL},

text:{
color:theme.BUBBLE_FONT_COLOR,
fontSize:theme.BUBBLE_FONT_SIZE},

arrowContainer:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0},

arrowPosition:{
top:{
justifyContent:'flex-start',
alignItems:'center'},

right:{
justifyContent:'center',
alignItems:'flex-end'},

bottom:{
justifyContent:'flex-end',
alignItems:'center'},

left:{
justifyContent:'center',
alignItems:'flex-start'}},


arrow:function arrow(color){
return{
top:{
marginTop:-7,
borderRightWidth:6,
borderBottomWidth:7,
borderLeftWidth:6,
borderRightColor:'transparent',
borderBottomColor:color,
borderLeftColor:'transparent'},

right:{
marginRight:-7,
borderTopWidth:6,
borderBottomWidth:6,
borderLeftWidth:7,
borderTopColor:'transparent',
borderBottomColor:'transparent',
borderLeftColor:color},

bottom:{
marginBottom:-7,
borderRightWidth:6,
borderTopWidth:7,
borderLeftWidth:6,
borderRightColor:'transparent',
borderTopColor:color,
borderLeftColor:'transparent'},

left:{
marginLeft:-7,
borderTopWidth:6,
borderRightWidth:7,
borderBottomWidth:6,
borderTopColor:'transparent',
borderRightColor:color,
borderBottomColor:'transparent'}};


}};

};

var Bubble=function Bubble(props){var

arrowPosition=


props.arrowPosition,style=props.style,children=props.children;

var theme=props.theme||_themeManager2.default.getStyle('Bubble');
var baseStyle=defaultStyle(theme);
var color=props.color||theme.BUBBLE_BACKGROUND;

return(
_react2.default.createElement(_reactNative.View,{style:style},
_react2.default.createElement(_reactNative.View,{style:[baseStyle.base,{backgroundColor:color}]},
_react2.default.createElement(_reactNative.Text,{style:baseStyle.text},
children),

_react2.default.createElement(_reactNative.View,{
style:[
baseStyle.arrowContainer,
baseStyle.arrowPosition[arrowPosition]]},


_react2.default.createElement(_reactNative.View,{style:baseStyle.arrow(color)[arrowPosition]})))));




};

Bubble.propTypes={
arrowPosition:PropTypes.oneOf(['top','left','bottom','right']),
color:PropTypes.string,
style:PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
children:PropTypes.node.isRequired,
theme:PropTypes.object};


Bubble.defaultProps={
arrowPosition:'left'};exports.default=


Bubble;module.exports=exports['default'];
