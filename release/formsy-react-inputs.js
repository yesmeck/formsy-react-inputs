!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("formsy-react"),require("react")):"function"==typeof define&&define.amd?define(["formsy-react","react"],t):"object"==typeof exports?exports.FormsyReactInputs=t(require("formsy-react"),require("react")):e.FormsyReactInputs=t(e["formsy-react"],e.react)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";e.exports={Input:r(3),Textarea:r(4),Select:r(5)}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(2),s=r(1),i=a.createClass({displayName:"Input",mixins:[s.Mixin],propTypes:{type:a.PropTypes.string.isRequired,name:a.PropTypes.string.isRequired},changeValue:function(e){this.setValue(e.currentTarget.value)},render:function(){return a.createElement("input",n({},this.props,{onChange:this.changeValue,value:this.getValue()}))}});e.exports=i},function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(2),s=r(1),i=a.createClass({displayName:"Textarea",mixins:[s.Mixin],propTypes:{name:a.PropTypes.string.isRequired},changeValue:function(e){this.setValue(e.currentTarget.value)},render:function(){return a.createElement("textarea",n({},this.props,{onChange:this.changeValue,value:this.getValue()}))}});e.exports=i},function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(2),s=r(1),i=a.createClass({displayName:"Select",mixins:[s.Mixin],propTypes:{name:a.PropTypes.string.isRequired},changeValue:function(e){this.setValue(e.currentTarget.value)},render:function(){return a.createElement("select",n({},this.props,{onChange:this.changeValue,value:this.getValue()}),this.props.children)}});e.exports=i}])});
//# sourceMappingURL=formsy-react-inputs.js.map