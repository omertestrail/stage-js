function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(call&&(_typeof2(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}/* v1.26.2 */this.filestack=this.filestack||{};this.filestack.pick=function(){var ENV={css:{main:'/build/1.26.2/main.css'},vendor:{opentok:'/build/1.26.2/assets/scripts/opentok.js',fabric:'/build/1.26.2/assets/scripts/fabric.js',cropper:'/build/1.26.2/assets/scripts/cropper.js',pica:'/build/1.26.2/assets/scripts/pica.js'},sentryDSN:'https://cbf8a0c6110c4f6e81263a24b1a55008@o70483.ingest.sentry.io/5208105'};/*!
   * Vue.js v2.6.10
   * (c) 2014-2019 Evan You
   * Released under the MIT License.
   */ /*  */var emptyObject=Object.freeze({});// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef(v){return v===undefined||v===null;}function isDef(v){return v!==undefined&&v!==null;}function isTrue(v){return v===true;}function isFalse(v){return v===false;}/**
   * Check if value is primitive.
   */function isPrimitive(value){return typeof value==='string'||typeof value==='number'||// $flow-disable-line
_typeof2(value)==='symbol'||typeof value==='boolean';}/**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */function isObject(obj){return obj!==null&&_typeof2(obj)==='object';}/**
   * Get the raw type string of a value, e.g., [object Object].
   */var _toString=Object.prototype.toString;function toRawType(value){return _toString.call(value).slice(8,-1);}/**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */function isPlainObject(obj){return _toString.call(obj)==='[object Object]';}function isRegExp(v){return _toString.call(v)==='[object RegExp]';}/**
   * Check if val is a valid array index.
   */function isValidArrayIndex(val){var n=parseFloat(String(val));return n>=0&&Math.floor(n)===n&&isFinite(val);}function isPromise(val){return isDef(val)&&typeof val.then==='function'&&typeof val["catch"]==='function';}/**
   * Convert a value to a string that is actually rendered.
   */function toString$1(val){return val==null?'':Array.isArray(val)||isPlainObject(val)&&val.toString===_toString?JSON.stringify(val,null,2):String(val);}/**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n;}/**
   * Make a map and return a function for checking if a key
   * is in that map.
   */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];};}/**
   * Check if a tag is a built-in tag.
   */var isBuiltInTag=makeMap('slot,component',true);/**
   * Check if an attribute is a reserved attribute.
   */var isReservedAttribute=makeMap('key,ref,slot,slot-scope,is');/**
   * Remove an item from an array.
   */function remove(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1);}}}/**
   * Check whether an object has the property.
   */var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key);}/**
   * Create a cached version of a pure function.
   */function cached(fn){var cache=Object.create(null);return function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str));};}/**
   * Camelize a hyphen-delimited string.
   */var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});/**
   * Capitalize a string.
   */var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});/**
   * Hyphenate a camelCase string.
   */var hyphenateRE=/\B([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'-$1').toLowerCase();});/**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */ /* istanbul ignore next */function polyfillBind(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);}boundFn._length=fn.length;return boundFn;}function nativeBind(fn,ctx){return fn.bind(ctx);}var bind=Function.prototype.bind?nativeBind:polyfillBind;/**
   * Convert an Array-like object to a real Array.
   */function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;}/**
   * Mix properties into target object.
   */function extend(to,_from){for(var key in _from){to[key]=_from[key];}return to;}/**
   * Merge an Array of Objects into a single Object.
   */function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}return res;}/* eslint-disable no-unused-vars */ /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */function noop(a,b,c){}/**
   * Always return false.
   */var no=function no(a,b,c){return false;};/* eslint-enable no-unused-vars */ /**
   * Return the same value.
   */var identity=function identity(_){return _;};/**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */function looseEqual(a,b){if(a===b){return true;}var isObjectA=isObject(a);var isObjectB=isObject(b);if(isObjectA&&isObjectB){try{var isArrayA=Array.isArray(a);var isArrayB=Array.isArray(b);if(isArrayA&&isArrayB){return a.length===b.length&&a.every(function(e,i){return looseEqual(e,b[i]);});}else if(a instanceof Date&&b instanceof Date){return a.getTime()===b.getTime();}else if(!isArrayA&&!isArrayB){var keysA=Object.keys(a);var keysB=Object.keys(b);return keysA.length===keysB.length&&keysA.every(function(key){return looseEqual(a[key],b[key]);});}else{/* istanbul ignore next */return false;}}catch(e){/* istanbul ignore next */return false;}}else if(!isObjectA&&!isObjectB){return String(a)===String(b);}else{return false;}}/**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i;}}return-1;}/**
   * Ensure a function is called only once.
   */function once(fn){var called=false;return function(){if(!called){called=true;fn.apply(this,arguments);}};}var SSR_ATTR='data-server-rendered';var ASSET_TYPES=['component','directive','filter'];var LIFECYCLE_HOOKS=['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated','errorCaptured','serverPrefetch'];/*  */var config={/**
     * Option merge strategies (used in core/util/options)
     */ // $flow-disable-line
optionMergeStrategies:Object.create(null),/**
     * Whether to suppress warnings.
     */silent:false,/**
     * Show production mode tip message on boot?
     */productionTip:"development"!=='production',/**
     * Whether to enable devtools
     */devtools:"development"!=='production',/**
     * Whether to record perf
     */performance:false,/**
     * Error handler for watcher errors
     */errorHandler:null,/**
     * Warn handler for watcher warns
     */warnHandler:null,/**
     * Ignore certain custom elements
     */ignoredElements:[],/**
     * Custom user key aliases for v-on
     */ // $flow-disable-line
keyCodes:Object.create(null),/**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */isReservedTag:no,/**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */isReservedAttr:no,/**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */isUnknownElement:no,/**
     * Get the namespace of an element
     */getTagNamespace:noop,/**
     * Parse the real tag name for the specific platform.
     */parsePlatformTagName:identity,/**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */mustUseProp:no,/**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */async:true,/**
     * Exposed for legacy reasons
     */_lifecycleHooks:LIFECYCLE_HOOKS};/*  */ /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */var unicodeRegExp=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;/**
   * Check if a string starts with $ or _
   */function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;}/**
   * Define a property.
   */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}/**
   * Parse simple path.
   */var bailRE=new RegExp("[^"+unicodeRegExp.source+".$_\\d]");function parsePath(path){if(bailRE.test(path)){return;}var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return;}obj=obj[segments[i]];}return obj;};}/*  */ // can we use __proto__?
var hasProto='__proto__'in{};// Browser environment sniffing
var inBrowser=typeof window!=='undefined';var inWeex=typeof WXEnvironment!=='undefined'&&!!WXEnvironment.platform;var weexPlatform=inWeex&&WXEnvironment.platform.toLowerCase();var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=UA&&UA.indexOf('android')>0||weexPlatform==='android';var isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA)||weexPlatform==='ios';var isChrome=UA&&/chrome\/\d+/.test(UA)&&!isEdge;var isPhantomJS=UA&&/phantomjs/.test(UA);var isFF=UA&&UA.match(/firefox\/(\d+)/);// Firefox has a "watch" function on Object.prototype...
var nativeWatch={}.watch;var supportsPassive=false;if(inBrowser){try{var opts={};Object.defineProperty(opts,'passive',{get:function get(){/* istanbul ignore next */supportsPassive=true;}});// https://github.com/facebook/flow/issues/285
window.addEventListener('test-passive',null,opts);}catch(e){}}// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;var isServerRendering=function isServerRendering(){if(_isServer===undefined){/* istanbul ignore if */if(!inBrowser&&!inWeex&&typeof global!=='undefined'){// detect presence of vue-server-renderer and avoid
// Webpack shimming the process
_isServer=global['process']&&global['process'].env.VUE_ENV==='server';}else{_isServer=false;}}return _isServer;};// detect devtools
var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;/* istanbul ignore next */function isNative(Ctor){return typeof Ctor==='function'&&/native code/.test(Ctor.toString());}var hasSymbol=typeof Symbol!=='undefined'&&isNative(Symbol)&&typeof Reflect!=='undefined'&&isNative(Reflect.ownKeys);var _Set;/* istanbul ignore if */ // $flow-disable-line
if(typeof Set!=='undefined'&&isNative(Set)){// use native Set when available.
_Set=Set;}else{// a non-standard Set polyfill that only works with primitive keys.
_Set=/*@__PURE__*/function(){function Set(){this.set=Object.create(null);}Set.prototype.has=function has(key){return this.set[key]===true;};Set.prototype.add=function add(key){this.set[key]=true;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}();}/*  */var warn=noop;var tip=noop;var generateComponentTrace=noop;// work around flow check
var formatComponentName=noop;{var hasConsole=typeof console!=='undefined';var classifyRE=/(?:^|[-_])(\w)/g;var classify=function classify(str){return str.replace(classifyRE,function(c){return c.toUpperCase();}).replace(/[-_]/g,'');};warn=function warn(msg,vm){var trace=vm?generateComponentTrace(vm):'';if(config.warnHandler){config.warnHandler.call(null,msg,vm,trace);}else if(hasConsole&&!config.silent){console.error("[Vue warn]: "+msg+trace);}};tip=function tip(msg,vm){if(hasConsole&&!config.silent){console.warn("[Vue tip]: "+msg+(vm?generateComponentTrace(vm):''));}};formatComponentName=function formatComponentName(vm,includeFile){if(vm.$root===vm){return'<Root>';}var options=typeof vm==='function'&&vm.cid!=null?vm.options:vm._isVue?vm.$options||vm.constructor.options:vm;var name=options.name||options._componentTag;var file=options.__file;if(!name&&file){var match=file.match(/([^/\\]+)\.vue$/);name=match&&match[1];}return(name?"<"+classify(name)+">":"<Anonymous>")+(file&&includeFile!==false?" at "+file:'');};var repeat=function repeat(str,n){var res='';while(n){if(n%2===1){res+=str;}if(n>1){str+=str;}n>>=1;}return res;};generateComponentTrace=function generateComponentTrace(vm){if(vm._isVue&&vm.$parent){var tree=[];var currentRecursiveSequence=0;while(vm){if(tree.length>0){var last=tree[tree.length-1];if(last.constructor===vm.constructor){currentRecursiveSequence++;vm=vm.$parent;continue;}else if(currentRecursiveSequence>0){tree[tree.length-1]=[last,currentRecursiveSequence];currentRecursiveSequence=0;}}tree.push(vm);vm=vm.$parent;}return'\n\nfound in\n\n'+tree.map(function(vm,i){return""+(i===0?'---> ':repeat(' ',5+i*2))+(Array.isArray(vm)?formatComponentName(vm[0])+"... ("+vm[1]+" recursive calls)":formatComponentName(vm));}).join('\n');}else{return"\n\n(found in "+formatComponentName(vm)+")";}};}/*  */var uid=0;/**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */var Dep=function Dep(){this.id=uid++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){// stabilize the subscriber list first
var subs=this.subs.slice();if(!config.async){// subs aren't sorted in scheduler if not running async
// we need to sort them now to make sure they fire in correct
// order
subs.sort(function(a,b){return a.id-b.id;});}for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target=null;var targetStack=[];function pushTarget(target){targetStack.push(target);Dep.target=target;}function popTarget(){targetStack.pop();Dep.target=targetStack[targetStack.length-1];}/*  */var VNode=function VNode(tag,data,children,text,elm,context,componentOptions,asyncFactory){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=undefined;this.context=context;this.fnContext=undefined;this.fnOptions=undefined;this.fnScopeId=undefined;this.key=data&&data.key;this.componentOptions=componentOptions;this.componentInstance=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;this.isOnce=false;this.asyncFactory=asyncFactory;this.asyncMeta=undefined;this.isAsyncPlaceholder=false;};var prototypeAccessors={child:{configurable:true}};// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */prototypeAccessors.child.get=function(){return this.componentInstance;};Object.defineProperties(VNode.prototype,prototypeAccessors);var createEmptyVNode=function createEmptyVNode(text){if(text===void 0)text='';var node=new VNode();node.text=text;node.isComment=true;return node;};function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val));}// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,// #7975
// clone children array to avoid mutating original in case of cloning
// a child.
vnode.children&&vnode.children.slice(),vnode.text,vnode.elm,vnode.context,vnode.componentOptions,vnode.asyncFactory);cloned.ns=vnode.ns;cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isComment=vnode.isComment;cloned.fnContext=vnode.fnContext;cloned.fnOptions=vnode.fnOptions;cloned.fnScopeId=vnode.fnScopeId;cloned.asyncMeta=vnode.asyncMeta;cloned.isCloned=true;return cloned;}/*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);var methodsToPatch=['push','pop','shift','unshift','splice','sort','reverse'];/**
   * Intercept mutating methods and emit events
   */methodsToPatch.forEach(function(method){// cache original method
var original=arrayProto[method];def(arrayMethods,method,function mutator(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':case'unshift':inserted=args;break;case'splice':inserted=args.slice(2);break;}if(inserted){ob.observeArray(inserted);}// notify change
ob.dep.notify();return result;});});/*  */var arrayKeys=Object.getOwnPropertyNames(arrayMethods);/**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */var shouldObserve=true;function toggleObserving(value){shouldObserve=value;}/**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){if(hasProto){protoAugment(value,arrayMethods);}else{copyAugment(value,arrayMethods,arrayKeys);}this.observeArray(value);}else{this.walk(value);}};/**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive$$1(obj,keys[i]);}};/**
   * Observe a list of Array items.
   */Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};// helpers
/**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */function protoAugment(target,src){/* eslint-disable no-proto */target.__proto__=src;/* eslint-enable no-proto */}/**
   * Augment a target Object or Array by defining
   * hidden properties.
   */ /* istanbul ignore next */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}/**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */function observe(value,asRootData){if(!isObject(value)||value instanceof VNode){return;}var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(shouldObserve&&!isServerRendering()&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}if(asRootData&&ob){ob.vmCount++;}return ob;}/**
   * Define a reactive property on an Object.
   */function defineReactive$$1(obj,key,val,customSetter,shallow){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;}// cater for pre-defined getter/setters
var getter=property&&property.get;var setter=property&&property.set;if((!getter||setter)&&arguments.length===2){val=obj[key];}var childOb=!shallow&&observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();if(Array.isArray(value)){dependArray(value);}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;/* eslint-disable no-self-compare */if(newVal===value||newVal!==newVal&&value!==value){return;}/* eslint-enable no-self-compare */if(customSetter){customSetter();}// #7981: for accessor properties without setter
if(getter&&!setter){return;}if(setter){setter.call(obj,newVal);}else{val=newVal;}childOb=!shallow&&observe(newVal);dep.notify();}});}/**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */function set(target,key,val){if(isUndef(target)||isPrimitive(target)){warn("Cannot set reactive property on undefined, null, or primitive value: "+target);}if(Array.isArray(target)&&isValidArrayIndex(key)){target.length=Math.max(target.length,key);target.splice(key,1,val);return val;}if(key in target&&!(key in Object.prototype)){target[key]=val;return val;}var ob=target.__ob__;if(target._isVue||ob&&ob.vmCount){warn('Avoid adding reactive properties to a Vue instance or its root $data '+'at runtime - declare it upfront in the data option.');return val;}if(!ob){target[key]=val;return val;}defineReactive$$1(ob.value,key,val);ob.dep.notify();return val;}/**
   * Delete a property and trigger change if necessary.
   */function del(target,key){if(isUndef(target)||isPrimitive(target)){warn("Cannot delete reactive property on undefined, null, or primitive value: "+target);}if(Array.isArray(target)&&isValidArrayIndex(key)){target.splice(key,1);return;}var ob=target.__ob__;if(target._isVue||ob&&ob.vmCount){warn('Avoid deleting properties on a Vue instance or its root $data '+'- just set it to null.');return;}if(!hasOwn(target,key)){return;}delete target[key];if(!ob){return;}ob.dep.notify();}/**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */function dependArray(value){for(var e=void 0,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();if(Array.isArray(e)){dependArray(e);}}}/*  */ /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */var strats=config.optionMergeStrategies;/**
   * Options with restrictions
   */{strats.el=strats.propsData=function(parent,child,vm,key){if(!vm){warn("option \""+key+"\" can only be used during instance "+'creation with the `new` keyword.');}return defaultStrat(parent,child);};}/**
   * Helper that recursively merges two data objects together.
   */function mergeData(to,from){if(!from){return to;}var key,toVal,fromVal;var keys=hasSymbol?Reflect.ownKeys(from):Object.keys(from);for(var i=0;i<keys.length;i++){key=keys[i];// in case the object is already observed...
if(key==='__ob__'){continue;}toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(toVal!==fromVal&&isPlainObject(toVal)&&isPlainObject(fromVal)){mergeData(toVal,fromVal);}}return to;}/**
   * Data
   */function mergeDataOrFn(parentVal,childVal,vm){if(!vm){// in a Vue.extend merge, both should be functions
if(!childVal){return parentVal;}if(!parentVal){return childVal;}// when parentVal & childVal are both present,
// we need to return a function that returns the
// merged result of both functions... no need to
// check if parentVal is a function here because
// it has to be a function to pass previous merges.
return function mergedDataFn(){return mergeData(typeof childVal==='function'?childVal.call(this,this):childVal,typeof parentVal==='function'?parentVal.call(this,this):parentVal);};}else{return function mergedInstanceDataFn(){// instance merge
var instanceData=typeof childVal==='function'?childVal.call(vm,vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm,vm):parentVal;if(instanceData){return mergeData(instanceData,defaultData);}else{return defaultData;}};}}strats.data=function(parentVal,childVal,vm){if(!vm){if(childVal&&typeof childVal!=='function'){warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}return mergeDataOrFn(parentVal,childVal);}return mergeDataOrFn(parentVal,childVal,vm);};/**
   * Hooks and props are merged as arrays.
   */function mergeHook(parentVal,childVal){var res=childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;return res?dedupeHooks(res):res;}function dedupeHooks(hooks){var res=[];for(var i=0;i<hooks.length;i++){if(res.indexOf(hooks[i])===-1){res.push(hooks[i]);}}return res;}LIFECYCLE_HOOKS.forEach(function(hook){strats[hook]=mergeHook;});/**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */function mergeAssets(parentVal,childVal,vm,key){var res=Object.create(parentVal||null);if(childVal){assertObjectType(key,childVal,vm);return extend(res,childVal);}else{return res;}}ASSET_TYPES.forEach(function(type){strats[type+'s']=mergeAssets;});/**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */strats.watch=function(parentVal,childVal,vm,key){// work around Firefox's Object.prototype.watch...
if(parentVal===nativeWatch){parentVal=undefined;}if(childVal===nativeWatch){childVal=undefined;}/* istanbul ignore if */if(!childVal){return Object.create(parentVal||null);}{assertObjectType(key,childVal,vm);}if(!parentVal){return childVal;}var ret={};extend(ret,parentVal);for(var key$1 in childVal){var parent=ret[key$1];var child=childVal[key$1];if(parent&&!Array.isArray(parent)){parent=[parent];}ret[key$1]=parent?parent.concat(child):Array.isArray(child)?child:[child];}return ret;};/**
   * Other object hashes.
   */strats.props=strats.methods=strats.inject=strats.computed=function(parentVal,childVal,vm,key){if(childVal&&"development"!=='production'){assertObjectType(key,childVal,vm);}if(!parentVal){return childVal;}var ret=Object.create(null);extend(ret,parentVal);if(childVal){extend(ret,childVal);}return ret;};strats.provide=mergeDataOrFn;/**
   * Default strategy.
   */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal===undefined?parentVal:childVal;};/**
   * Validate component names
   */function checkComponents(options){for(var key in options.components){validateComponentName(key);}}function validateComponentName(name){if(!new RegExp("^[a-zA-Z][\\-\\.0-9_"+unicodeRegExp.source+"]*$").test(name)){warn('Invalid component name: "'+name+'". Component names '+'should conform to valid custom element name in html5 specification.');}if(isBuiltInTag(name)||config.isReservedTag(name)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+name);}}/**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */function normalizeProps(options,vm){var props=options.props;if(!props){return;}var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else{warn('props must be strings when using array syntax.');}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}else{warn("Invalid value for option \"props\": expected an Array or an Object, "+"but got "+toRawType(props)+".",vm);}options.props=res;}/**
   * Normalize all injections into Object-based format
   */function normalizeInject(options,vm){var inject=options.inject;if(!inject){return;}var normalized=options.inject={};if(Array.isArray(inject)){for(var i=0;i<inject.length;i++){normalized[inject[i]]={from:inject[i]};}}else if(isPlainObject(inject)){for(var key in inject){var val=inject[key];normalized[key]=isPlainObject(val)?extend({from:key},val):{from:val};}}else{warn("Invalid value for option \"inject\": expected an Array or an Object, "+"but got "+toRawType(inject)+".",vm);}}/**
   * Normalize raw function directives into object format.
   */function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def$$1=dirs[key];if(typeof def$$1==='function'){dirs[key]={bind:def$$1,update:def$$1};}}}}function assertObjectType(name,value,vm){if(!isPlainObject(value)){warn("Invalid value for option \""+name+"\": expected an Object, "+"but got "+toRawType(value)+".",vm);}}/**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */function mergeOptions(parent,child,vm){{checkComponents(child);}if(typeof child==='function'){child=child.options;}normalizeProps(child,vm);normalizeInject(child,vm);normalizeDirectives(child);// Apply extends and mixins on the child options,
// but only if it is a raw options object that isn't
// the result of another mergeOptions call.
// Only merged options has the _base property.
if(!child._base){if(child["extends"]){parent=mergeOptions(parent,child["extends"],vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){parent=mergeOptions(parent,child.mixins[i],vm);}}}var options={};var key;for(key in parent){mergeField(key);}for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;}/**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */function resolveAsset(options,type,id,warnMissing){/* istanbul ignore if */if(typeof id!=='string'){return;}var assets=options[type];// check local registration variations first
if(hasOwn(assets,id)){return assets[id];}var camelizedId=camelize(id);if(hasOwn(assets,camelizedId)){return assets[camelizedId];}var PascalCaseId=capitalize(camelizedId);if(hasOwn(assets,PascalCaseId)){return assets[PascalCaseId];}// fallback to prototype chain
var res=assets[id]||assets[camelizedId]||assets[PascalCaseId];if(warnMissing&&!res){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}/*  */function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];// boolean casting
var booleanIndex=getTypeIndex(Boolean,prop.type);if(booleanIndex>-1){if(absent&&!hasOwn(prop,'default')){value=false;}else if(value===''||value===hyphenate(key)){// only cast empty string / same name to boolean if
// boolean has higher priority
var stringIndex=getTypeIndex(String,prop.type);if(stringIndex<0||booleanIndex<stringIndex){value=true;}}}// check default value
if(value===undefined){value=getPropDefaultValue(vm,prop,key);// since the default value is a fresh copy,
// make sure to observe it.
var prevShouldObserve=shouldObserve;toggleObserving(true);observe(value);toggleObserving(prevShouldObserve);}{assertProp(prop,key,value,vm,absent);}return value;}/**
   * Get the default value of a prop.
   */function getPropDefaultValue(vm,prop,key){// no default, return undefined
if(!hasOwn(prop,'default')){return undefined;}var def=prop["default"];// warn against non-factory defaults for Object & Array
if(isObject(def)){warn('Invalid default value for prop "'+key+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}// the raw prop value was also undefined from previous render,
// return previous default value to avoid unnecessary watcher trigger
if(vm&&vm.$options.propsData&&vm.$options.propsData[key]===undefined&&vm._props[key]!==undefined){return vm._props[key];}// call factory function for non-Function types
// a value is Function if its prototype is function even across different execution context
return typeof def==='function'&&getType(prop.type)!=='Function'?def.call(vm):def;}/**
   * Assert whether a prop is valid.
   */function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return;}if(value==null&&!prop.required){return;}var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType||'');valid=assertedType.valid;}}if(!valid){warn(getInvalidTypeMessage(name,value,expectedTypes),vm);return;}var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}var simpleCheckRE=/^(String|Number|Boolean|Function|Symbol)$/;function assertType(value,type){var valid;var expectedType=getType(type);if(simpleCheckRE.test(expectedType)){var t=_typeof2(value);valid=t===expectedType.toLowerCase();// for primitive wrapper objects
if(!valid&&t==='object'){valid=value instanceof type;}}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}/**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match?match[1]:'';}function isSameType(a,b){return getType(a)===getType(b);}function getTypeIndex(type,expectedTypes){if(!Array.isArray(expectedTypes)){return isSameType(expectedTypes,type)?0:-1;}for(var i=0,len=expectedTypes.length;i<len;i++){if(isSameType(expectedTypes[i],type)){return i;}}return-1;}function getInvalidTypeMessage(name,value,expectedTypes){var message="Invalid prop: type check failed for prop \""+name+"\"."+" Expected "+expectedTypes.map(capitalize).join(', ');var expectedType=expectedTypes[0];var receivedType=toRawType(value);var expectedValue=styleValue(value,expectedType);var receivedValue=styleValue(value,receivedType);// check if we need to specify expected value
if(expectedTypes.length===1&&isExplicable(expectedType)&&!isBoolean(expectedType,receivedType)){message+=" with value "+expectedValue;}message+=", got "+receivedType+" ";// check if we need to specify received value
if(isExplicable(receivedType)){message+="with value "+receivedValue+".";}return message;}function styleValue(value,type){if(type==='String'){return"\""+value+"\"";}else if(type==='Number'){return""+Number(value);}else{return""+value;}}function isExplicable(value){var explicitTypes=['string','number','boolean'];return explicitTypes.some(function(elem){return value.toLowerCase()===elem;});}function isBoolean(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}return args.some(function(elem){return elem.toLowerCase()==='boolean';});}/*  */function handleError(err,vm,info){// Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
// See: https://github.com/vuejs/vuex/issues/1505
pushTarget();try{if(vm){var cur=vm;while(cur=cur.$parent){var hooks=cur.$options.errorCaptured;if(hooks){for(var i=0;i<hooks.length;i++){try{var capture=hooks[i].call(cur,err,vm,info)===false;if(capture){return;}}catch(e){globalHandleError(e,cur,'errorCaptured hook');}}}}}globalHandleError(err,vm,info);}finally{popTarget();}}function invokeWithErrorHandling(handler,context,args,vm,info){var res;try{res=args?handler.apply(context,args):handler.call(context);if(res&&!res._isVue&&isPromise(res)&&!res._handled){res["catch"](function(e){return handleError(e,vm,info+" (Promise/async)");});// issue #9511
// avoid catch triggering multiple times when nested calls
res._handled=true;}}catch(e){handleError(e,vm,info);}return res;}function globalHandleError(err,vm,info){if(config.errorHandler){try{return config.errorHandler.call(null,err,vm,info);}catch(e){// if the user intentionally throws the original error in the handler,
// do not log it twice
if(e!==err){logError(e,null,'config.errorHandler');}}}logError(err,vm,info);}function logError(err,vm,info){{warn("Error in "+info+": \""+err.toString()+"\"",vm);}/* istanbul ignore else */if((inBrowser||inWeex)&&typeof console!=='undefined'){console.error(err);}else{throw err;}}/*  */var isUsingMicroTask=false;var callbacks=[];var pending=false;function flushCallbacks(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();timerFunc=function timerFunc(){p.then(flushCallbacks);// In problematic UIWebViews, Promise.then doesn't completely break, but
// it can get stuck in a weird state where callbacks are pushed into the
// microtask queue but the queue isn't being flushed, until the browser
// needs to do some other work, e.g. handle a timer. Therefore we can
// "force" the microtask queue to be flushed by adding an empty timer.
if(isIOS){setTimeout(noop);}};isUsingMicroTask=true;}else if(!isIE&&typeof MutationObserver!=='undefined'&&(isNative(MutationObserver)||// PhantomJS and iOS 7.x
MutationObserver.toString()==='[object MutationObserverConstructor]')){// Use MutationObserver where native Promise is not available,
// e.g. PhantomJS, iOS7, Android 4.4
// (#6466 MutationObserver is unreliable in IE11)
var counter=1;var observer=new MutationObserver(flushCallbacks);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function timerFunc(){counter=(counter+1)%2;textNode.data=String(counter);};isUsingMicroTask=true;}else if(typeof setImmediate!=='undefined'&&isNative(setImmediate)){// Fallback to setImmediate.
// Techinically it leverages the (macro) task queue,
// but it is still a better choice than setTimeout.
timerFunc=function timerFunc(){setImmediate(flushCallbacks);};}else{// Fallback to setTimeout.
timerFunc=function timerFunc(){setTimeout(flushCallbacks,0);};}function nextTick(cb,ctx){var _resolve;callbacks.push(function(){if(cb){try{cb.call(ctx);}catch(e){handleError(e,ctx,'nextTick');}}else if(_resolve){_resolve(ctx);}});if(!pending){pending=true;timerFunc();}// $flow-disable-line
if(!cb&&typeof Promise!=='undefined'){return new Promise(function(resolve){_resolve=resolve;});}}/*  */ /* not type checking this file because flow doesn't play well with Proxy */var initProxy;{var allowedGlobals=makeMap('Infinity,undefined,NaN,isFinite,isNaN,'+'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,'+'require'// for Webpack/Browserify
);var warnNonPresent=function warnNonPresent(target,key){warn("Property or method \""+key+"\" is not defined on the instance but "+'referenced during render. Make sure that this property is reactive, '+'either in the data option, or for class-based components, by '+'initializing the property. '+'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',target);};var warnReservedPrefix=function warnReservedPrefix(target,key){warn("Property \""+key+"\" must be accessed with \"$data."+key+"\" because "+'properties starting with "$" or "_" are not proxied in the Vue instance to '+'prevent conflicts with Vue internals'+'See: https://vuejs.org/v2/api/#data',target);};var hasProxy=typeof Proxy!=='undefined'&&isNative(Proxy);if(hasProxy){var isBuiltInModifier=makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');config.keyCodes=new Proxy(config.keyCodes,{set:function set(target,key,value){if(isBuiltInModifier(key)){warn("Avoid overwriting built-in modifier in config.keyCodes: ."+key);return false;}else{target[key]=value;return true;}}});}var hasHandler={has:function has(target,key){var has=key in target;var isAllowed=allowedGlobals(key)||typeof key==='string'&&key.charAt(0)==='_'&&!(key in target.$data);if(!has&&!isAllowed){if(key in target.$data){warnReservedPrefix(target,key);}else{warnNonPresent(target,key);}}return has||!isAllowed;}};var getHandler={get:function get(target,key){if(typeof key==='string'&&!(key in target)){if(key in target.$data){warnReservedPrefix(target,key);}else{warnNonPresent(target,key);}}return target[key];}};initProxy=function initProxy(vm){if(hasProxy){// determine which proxy handler to use
var options=vm.$options;var handlers=options.render&&options.render._withStripped?getHandler:hasHandler;vm._renderProxy=new Proxy(vm,handlers);}else{vm._renderProxy=vm;}};}/*  */var seenObjects=new _Set();/**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */function traverse(val){_traverse(val,seenObjects);seenObjects.clear();}function _traverse(val,seen){var i,keys;var isA=Array.isArray(val);if(!isA&&!isObject(val)||Object.isFrozen(val)||val instanceof VNode){return;}if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}seen.add(depId);}if(isA){i=val.length;while(i--){_traverse(val[i],seen);}}else{keys=Object.keys(val);i=keys.length;while(i--){_traverse(val[keys[i]],seen);}}}var mark;var measure;{var perf=inBrowser&&window.performance;/* istanbul ignore if */if(perf&&perf.mark&&perf.measure&&perf.clearMarks&&perf.clearMeasures){mark=function mark(tag){return perf.mark(tag);};measure=function measure(name,startTag,endTag){perf.measure(name,startTag,endTag);perf.clearMarks(startTag);perf.clearMarks(endTag);// perf.clearMeasures(name)
};}}/*  */var normalizeEvent=cached(function(name){var passive=name.charAt(0)==='&';name=passive?name.slice(1):name;var once$$1=name.charAt(0)==='~';// Prefixed last, checked first
name=once$$1?name.slice(1):name;var capture=name.charAt(0)==='!';name=capture?name.slice(1):name;return{name:name,once:once$$1,capture:capture,passive:passive};});function createFnInvoker(fns,vm){function invoker(){var arguments$1=arguments;var fns=invoker.fns;if(Array.isArray(fns)){var cloned=fns.slice();for(var i=0;i<cloned.length;i++){invokeWithErrorHandling(cloned[i],null,arguments$1,vm,"v-on handler");}}else{// return handler return value for single handlers
return invokeWithErrorHandling(fns,null,arguments,vm,"v-on handler");}}invoker.fns=fns;return invoker;}function updateListeners(on,oldOn,add,remove$$1,createOnceHandler,vm){var name,def$$1,cur,old,event;for(name in on){def$$1=cur=on[name];old=oldOn[name];event=normalizeEvent(name);if(isUndef(cur)){warn("Invalid handler for event \""+event.name+"\": got "+String(cur),vm);}else if(isUndef(old)){if(isUndef(cur.fns)){cur=on[name]=createFnInvoker(cur,vm);}if(isTrue(event.once)){cur=on[name]=createOnceHandler(event.name,cur,event.capture);}add(event.name,cur,event.capture,event.passive,event.params);}else if(cur!==old){old.fns=cur;on[name]=old;}}for(name in oldOn){if(isUndef(on[name])){event=normalizeEvent(name);remove$$1(event.name,oldOn[name],event.capture);}}}/*  */function mergeVNodeHook(def,hookKey,hook){if(def instanceof VNode){def=def.data.hook||(def.data.hook={});}var invoker;var oldHook=def[hookKey];function wrappedHook(){hook.apply(this,arguments);// important: remove merged hook to ensure it's called only once
// and prevent memory leak
remove(invoker.fns,wrappedHook);}if(isUndef(oldHook)){// no existing hook
invoker=createFnInvoker([wrappedHook]);}else{/* istanbul ignore if */if(isDef(oldHook.fns)&&isTrue(oldHook.merged)){// already a merged invoker
invoker=oldHook;invoker.fns.push(wrappedHook);}else{// existing plain hook
invoker=createFnInvoker([oldHook,wrappedHook]);}}invoker.merged=true;def[hookKey]=invoker;}/*  */function extractPropsFromVNodeData(data,Ctor,tag){// we are only extracting raw values here.
// validation and default values are handled in the child
// component itself.
var propOptions=Ctor.options.props;if(isUndef(propOptions)){return;}var res={};var attrs=data.attrs;var props=data.props;if(isDef(attrs)||isDef(props)){for(var key in propOptions){var altKey=hyphenate(key);{var keyInLowerCase=key.toLowerCase();if(key!==keyInLowerCase&&attrs&&hasOwn(attrs,keyInLowerCase)){tip("Prop \""+keyInLowerCase+"\" is passed to component "+formatComponentName(tag||Ctor)+", but the declared prop name is"+" \""+key+"\". "+"Note that HTML attributes are case-insensitive and camelCased "+"props need to use their kebab-case equivalents when using in-DOM "+"templates. You should probably use \""+altKey+"\" instead of \""+key+"\".");}}checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey,false);}}return res;}function checkProp(res,hash,key,altKey,preserve){if(isDef(hash)){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}return true;}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}return true;}}return false;}/*  */ // The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children){for(var i=0;i<children.length;i++){if(Array.isArray(children[i])){return Array.prototype.concat.apply([],children);}}return children;}// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children){return isPrimitive(children)?[createTextVNode(children)]:Array.isArray(children)?normalizeArrayChildren(children):undefined;}function isTextNode(node){return isDef(node)&&isDef(node.text)&&isFalse(node.isComment);}function normalizeArrayChildren(children,nestedIndex){var res=[];var i,c,lastIndex,last;for(i=0;i<children.length;i++){c=children[i];if(isUndef(c)||typeof c==='boolean'){continue;}lastIndex=res.length-1;last=res[lastIndex];//  nested
if(Array.isArray(c)){if(c.length>0){c=normalizeArrayChildren(c,(nestedIndex||'')+"_"+i);// merge adjacent text nodes
if(isTextNode(c[0])&&isTextNode(last)){res[lastIndex]=createTextVNode(last.text+c[0].text);c.shift();}res.push.apply(res,c);}}else if(isPrimitive(c)){if(isTextNode(last)){// merge adjacent text nodes
// this is necessary for SSR hydration because text nodes are
// essentially merged when rendered to HTML strings
res[lastIndex]=createTextVNode(last.text+c);}else if(c!==''){// convert primitive to vnode
res.push(createTextVNode(c));}}else{if(isTextNode(c)&&isTextNode(last)){// merge adjacent text nodes
res[lastIndex]=createTextVNode(last.text+c.text);}else{// default key for nested array children (likely generated by v-for)
if(isTrue(children._isVList)&&isDef(c.tag)&&isUndef(c.key)&&isDef(nestedIndex)){c.key="__vlist"+nestedIndex+"_"+i+"__";}res.push(c);}}}return res;}/*  */function initProvide(vm){var provide=vm.$options.provide;if(provide){vm._provided=typeof provide==='function'?provide.call(vm):provide;}}function initInjections(vm){var result=resolveInject(vm.$options.inject,vm);if(result){toggleObserving(false);Object.keys(result).forEach(function(key){/* istanbul ignore else */{defineReactive$$1(vm,key,result[key],function(){warn("Avoid mutating an injected value directly since the changes will be "+"overwritten whenever the provided component re-renders. "+"injection being mutated: \""+key+"\"",vm);});}});toggleObserving(true);}}function resolveInject(inject,vm){if(inject){// inject is :any because flow is not smart enough to figure out cached
var result=Object.create(null);var keys=hasSymbol?Reflect.ownKeys(inject):Object.keys(inject);for(var i=0;i<keys.length;i++){var key=keys[i];// #6574 in case the inject object is observed...
if(key==='__ob__'){continue;}var provideKey=inject[key].from;var source=vm;while(source){if(source._provided&&hasOwn(source._provided,provideKey)){result[key]=source._provided[provideKey];break;}source=source.$parent;}if(!source){if('default'in inject[key]){var provideDefault=inject[key]["default"];result[key]=typeof provideDefault==='function'?provideDefault.call(vm):provideDefault;}else{warn("Injection \""+key+"\" not found",vm);}}}return result;}}/*  */ /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */function resolveSlots(children,context){if(!children||!children.length){return{};}var slots={};for(var i=0,l=children.length;i<l;i++){var child=children[i];var data=child.data;// remove slot attribute if the node is resolved as a Vue slot node
if(data&&data.attrs&&data.attrs.slot){delete data.attrs.slot;}// named slots should only be respected if the vnode was rendered in the
// same context.
if((child.context===context||child.fnContext===context)&&data&&data.slot!=null){var name=data.slot;var slot=slots[name]||(slots[name]=[]);if(child.tag==='template'){slot.push.apply(slot,child.children||[]);}else{slot.push(child);}}else{(slots["default"]||(slots["default"]=[])).push(child);}}// ignore slots that contains only whitespace
for(var name$1 in slots){if(slots[name$1].every(isWhitespace)){delete slots[name$1];}}return slots;}function isWhitespace(node){return node.isComment&&!node.asyncFactory||node.text===' ';}/*  */function normalizeScopedSlots(slots,normalSlots,prevSlots){var res;var hasNormalSlots=Object.keys(normalSlots).length>0;var isStable=slots?!!slots.$stable:!hasNormalSlots;var key=slots&&slots.$key;if(!slots){res={};}else if(slots._normalized){// fast path 1: child component re-render only, parent did not change
return slots._normalized;}else if(isStable&&prevSlots&&prevSlots!==emptyObject&&key===prevSlots.$key&&!hasNormalSlots&&!prevSlots.$hasNormal){// fast path 2: stable scoped slots w/ no normal slots to proxy,
// only need to normalize once
return prevSlots;}else{res={};for(var key$1 in slots){if(slots[key$1]&&key$1[0]!=='$'){res[key$1]=normalizeScopedSlot(normalSlots,key$1,slots[key$1]);}}}// expose normal slots on scopedSlots
for(var key$2 in normalSlots){if(!(key$2 in res)){res[key$2]=proxyNormalSlot(normalSlots,key$2);}}// avoriaz seems to mock a non-extensible $scopedSlots object
// and when that is passed down this would cause an error
if(slots&&Object.isExtensible(slots)){slots._normalized=res;}def(res,'$stable',isStable);def(res,'$key',key);def(res,'$hasNormal',hasNormalSlots);return res;}function normalizeScopedSlot(normalSlots,key,fn){var normalized=function normalized(){var res=arguments.length?fn.apply(null,arguments):fn({});res=res&&_typeof2(res)==='object'&&!Array.isArray(res)?[res]// single vnode
:normalizeChildren(res);return res&&(res.length===0||res.length===1&&res[0].isComment// #9658
)?undefined:res;};// this is a slot using the new v-slot syntax without scope. although it is
// compiled as a scoped slot, render fn users would expect it to be present
// on this.$slots because the usage is semantically a normal slot.
if(fn.proxy){Object.defineProperty(normalSlots,key,{get:normalized,enumerable:true,configurable:true});}return normalized;}function proxyNormalSlot(slots,key){return function(){return slots[key];};}/*  */ /**
   * Runtime helper for rendering v-for lists.
   */function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)||typeof val==='string'){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){if(hasSymbol&&val[Symbol.iterator]){ret=[];var iterator=val[Symbol.iterator]();var result=iterator.next();while(!result.done){ret.push(render(result.value,ret.length));result=iterator.next();}}else{keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}}if(!isDef(ret)){ret=[];}ret._isVList=true;return ret;}/*  */ /**
   * Runtime helper for rendering <slot>
   */function renderSlot(name,fallback,props,bindObject){var scopedSlotFn=this.$scopedSlots[name];var nodes;if(scopedSlotFn){// scoped slot
props=props||{};if(bindObject){if(!isObject(bindObject)){warn('slot v-bind without argument expects an Object',this);}props=extend(extend({},bindObject),props);}nodes=scopedSlotFn(props)||fallback;}else{nodes=this.$slots[name]||fallback;}var target=props&&props.slot;if(target){return this.$createElement('template',{slot:target},nodes);}else{return nodes;}}/*  */ /**
   * Runtime helper for resolving filters
   */function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity;}/*  */function isKeyNotMatch(expect,actual){if(Array.isArray(expect)){return expect.indexOf(actual)===-1;}else{return expect!==actual;}}/**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */function checkKeyCodes(eventKeyCode,key,builtInKeyCode,eventKeyName,builtInKeyName){var mappedKeyCode=config.keyCodes[key]||builtInKeyCode;if(builtInKeyName&&eventKeyName&&!config.keyCodes[key]){return isKeyNotMatch(builtInKeyName,eventKeyName);}else if(mappedKeyCode){return isKeyNotMatch(mappedKeyCode,eventKeyCode);}else if(eventKeyName){return hyphenate(eventKeyName)!==key;}}/*  */ /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */function bindObjectProps(data,tag,value,asProp,isSync){if(value){if(!isObject(value)){warn('v-bind without argument expects an Object or Array value',this);}else{if(Array.isArray(value)){value=toObject(value);}var hash;var loop=function loop(key){if(key==='class'||key==='style'||isReservedAttribute(key)){hash=data;}else{var type=data.attrs&&data.attrs.type;hash=asProp||config.mustUseProp(tag,type,key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});}var camelizedKey=camelize(key);var hyphenatedKey=hyphenate(key);if(!(camelizedKey in hash)&&!(hyphenatedKey in hash)){hash[key]=value[key];if(isSync){var on=data.on||(data.on={});on["update:"+key]=function($event){value[key]=$event;};}}};for(var key in value){loop(key);}}}return data;}/*  */ /**
   * Runtime helper for rendering static trees.
   */function renderStatic(index,isInFor){var cached=this._staticTrees||(this._staticTrees=[]);var tree=cached[index];// if has already-rendered static tree and not inside v-for,
// we can reuse the same tree.
if(tree&&!isInFor){return tree;}// otherwise, render a fresh tree.
tree=cached[index]=this.$options.staticRenderFns[index].call(this._renderProxy,null,this// for render fns generated for functional component templates
);markStatic(tree,"__static__"+index,false);return tree;}/**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */function markOnce(tree,index,key){markStatic(tree,"__once__"+index+(key?"_"+key:""),true);return tree;}function markStatic(tree,key,isOnce){if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){if(tree[i]&&typeof tree[i]!=='string'){markStaticNode(tree[i],key+"_"+i,isOnce);}}}else{markStaticNode(tree,key,isOnce);}}function markStaticNode(node,key,isOnce){node.isStatic=true;node.key=key;node.isOnce=isOnce;}/*  */function bindObjectListeners(data,value){if(value){if(!isPlainObject(value)){warn('v-on without argument expects an Object value',this);}else{var on=data.on=data.on?extend({},data.on):{};for(var key in value){var existing=on[key];var ours=value[key];on[key]=existing?[].concat(existing,ours):ours;}}}return data;}/*  */function resolveScopedSlots(fns,// see flow/vnode
res,// the following are added in 2.6
hasDynamicKeys,contentHashKey){res=res||{$stable:!hasDynamicKeys};for(var i=0;i<fns.length;i++){var slot=fns[i];if(Array.isArray(slot)){resolveScopedSlots(slot,res,hasDynamicKeys);}else if(slot){// marker for reverse proxying v-slot without scope on this.$slots
if(slot.proxy){slot.fn.proxy=true;}res[slot.key]=slot.fn;}}if(contentHashKey){res.$key=contentHashKey;}return res;}/*  */function bindDynamicKeys(baseObj,values){for(var i=0;i<values.length;i+=2){var key=values[i];if(typeof key==='string'&&key){baseObj[values[i]]=values[i+1];}else if(key!==''&&key!==null){// null is a speical value for explicitly removing a binding
warn("Invalid value for dynamic directive argument (expected string or null): "+key,this);}}return baseObj;}// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier(value,symbol){return typeof value==='string'?symbol+value:value;}/*  */function installRenderHelpers(target){target._o=markOnce;target._n=toNumber;target._s=toString$1;target._l=renderList;target._t=renderSlot;target._q=looseEqual;target._i=looseIndexOf;target._m=renderStatic;target._f=resolveFilter;target._k=checkKeyCodes;target._b=bindObjectProps;target._v=createTextVNode;target._e=createEmptyVNode;target._u=resolveScopedSlots;target._g=bindObjectListeners;target._d=bindDynamicKeys;target._p=prependModifier;}/*  */function FunctionalRenderContext(data,props,children,parent,Ctor){var this$1=this;var options=Ctor.options;// ensure the createElement function in functional components
// gets a unique context - this is necessary for correct named slot check
var contextVm;if(hasOwn(parent,'_uid')){contextVm=Object.create(parent);// $flow-disable-line
contextVm._original=parent;}else{// the context vm passed in is a functional context as well.
// in this case we want to make sure we are able to get a hold to the
// real context instance.
contextVm=parent;// $flow-disable-line
parent=parent._original;}var isCompiled=isTrue(options._compiled);var needNormalization=!isCompiled;this.data=data;this.props=props;this.children=children;this.parent=parent;this.listeners=data.on||emptyObject;this.injections=resolveInject(options.inject,parent);this.slots=function(){if(!this$1.$slots){normalizeScopedSlots(data.scopedSlots,this$1.$slots=resolveSlots(children,parent));}return this$1.$slots;};Object.defineProperty(this,'scopedSlots',{enumerable:true,get:function get(){return normalizeScopedSlots(data.scopedSlots,this.slots());}});// support for compiled functional template
if(isCompiled){// exposing $options for renderStatic()
this.$options=options;// pre-resolve slots for renderSlot()
this.$slots=this.slots();this.$scopedSlots=normalizeScopedSlots(data.scopedSlots,this.$slots);}if(options._scopeId){this._c=function(a,b,c,d){var vnode=createElement(contextVm,a,b,c,d,needNormalization);if(vnode&&!Array.isArray(vnode)){vnode.fnScopeId=options._scopeId;vnode.fnContext=parent;}return vnode;};}else{this._c=function(a,b,c,d){return createElement(contextVm,a,b,c,d,needNormalization);};}}installRenderHelpers(FunctionalRenderContext.prototype);function createFunctionalComponent(Ctor,propsData,data,contextVm,children){var options=Ctor.options;var props={};var propOptions=options.props;if(isDef(propOptions)){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData||emptyObject);}}else{if(isDef(data.attrs)){mergeProps(props,data.attrs);}if(isDef(data.props)){mergeProps(props,data.props);}}var renderContext=new FunctionalRenderContext(data,props,children,contextVm,Ctor);var vnode=options.render.call(null,renderContext._c,renderContext);if(vnode instanceof VNode){return cloneAndMarkFunctionalResult(vnode,data,renderContext.parent,options,renderContext);}else if(Array.isArray(vnode)){var vnodes=normalizeChildren(vnode)||[];var res=new Array(vnodes.length);for(var i=0;i<vnodes.length;i++){res[i]=cloneAndMarkFunctionalResult(vnodes[i],data,renderContext.parent,options,renderContext);}return res;}}function cloneAndMarkFunctionalResult(vnode,data,contextVm,options,renderContext){// #7817 clone node before setting fnContext, otherwise if the node is reused
// (e.g. it was from a cached normal slot) the fnContext causes named slots
// that should not be matched to match.
var clone=cloneVNode(vnode);clone.fnContext=contextVm;clone.fnOptions=options;{(clone.devtoolsMeta=clone.devtoolsMeta||{}).renderContext=renderContext;}if(data.slot){(clone.data||(clone.data={})).slot=data.slot;}return clone;}function mergeProps(to,from){for(var key in from){to[camelize(key)]=from[key];}}/*  */ /*  */ /*  */ /*  */ // inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks={init:function init(vnode,hydrating){if(vnode.componentInstance&&!vnode.componentInstance._isDestroyed&&vnode.data.keepAlive){// kept-alive components, treat as a patch
var mountedNode=vnode;// work around flow
componentVNodeHooks.prepatch(mountedNode,mountedNode);}else{var child=vnode.componentInstance=createComponentInstanceForVnode(vnode,activeInstance);child.$mount(hydrating?vnode.elm:undefined,hydrating);}},prepatch:function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.componentInstance=oldVnode.componentInstance;updateChildComponent(child,options.propsData,// updated props
options.listeners,// updated listeners
vnode,// new parent vnode
options.children// new children
);},insert:function insert(vnode){var context=vnode.context;var componentInstance=vnode.componentInstance;if(!componentInstance._isMounted){componentInstance._isMounted=true;callHook(componentInstance,'mounted');}if(vnode.data.keepAlive){if(context._isMounted){// vue-router#1212
// During updates, a kept-alive component's child components may
// change, so directly walking the tree here may call activated hooks
// on incorrect children. Instead we push them into a queue which will
// be processed after the whole patch process ended.
queueActivatedComponent(componentInstance);}else{activateChildComponent(componentInstance,true/* direct */);}}},destroy:function destroy(vnode){var componentInstance=vnode.componentInstance;if(!componentInstance._isDestroyed){if(!vnode.data.keepAlive){componentInstance.$destroy();}else{deactivateChildComponent(componentInstance,true/* direct */);}}}};var hooksToMerge=Object.keys(componentVNodeHooks);function createComponent(Ctor,data,context,children,tag){if(isUndef(Ctor)){return;}var baseCtor=context.$options._base;// plain options object: turn it into a constructor
if(isObject(Ctor)){Ctor=baseCtor.extend(Ctor);}// if at this stage it's not a constructor or an async component factory,
// reject.
if(typeof Ctor!=='function'){{warn("Invalid Component definition: "+String(Ctor),context);}return;}// async component
var asyncFactory;if(isUndef(Ctor.cid)){asyncFactory=Ctor;Ctor=resolveAsyncComponent(asyncFactory,baseCtor);if(Ctor===undefined){// return a placeholder node for async component, which is rendered
// as a comment node but preserves all the raw information for the node.
// the information will be used for async server-rendering and hydration.
return createAsyncPlaceholder(asyncFactory,data,context,children,tag);}}data=data||{};// resolve constructor options in case global mixins are applied after
// component constructor creation
resolveConstructorOptions(Ctor);// transform component v-model data into props & events
if(isDef(data.model)){transformModel(Ctor.options,data);}// extract props
var propsData=extractPropsFromVNodeData(data,Ctor,tag);// functional component
if(isTrue(Ctor.options.functional)){return createFunctionalComponent(Ctor,propsData,data,context,children);}// extract listeners, since these needs to be treated as
// child component listeners instead of DOM listeners
var listeners=data.on;// replace with listeners with .native modifier
// so it gets processed during parent component patch.
data.on=data.nativeOn;if(isTrue(Ctor.options["abstract"])){// abstract components do not keep anything
// other than props & listeners & slot
// work around flow
var slot=data.slot;data={};if(slot){data.slot=slot;}}// install component management hooks onto the placeholder node
installComponentHooks(data);// return a placeholder vnode
var name=Ctor.options.name||tag;var vnode=new VNode("vue-component-"+Ctor.cid+(name?"-"+name:''),data,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children},asyncFactory);return vnode;}function createComponentInstanceForVnode(vnode,// we know it's MountedComponentVNode but flow doesn't
parent// activeInstance in lifecycle state
){var options={_isComponent:true,_parentVnode:vnode,parent:parent};// check inline-template render functions
var inlineTemplate=vnode.data.inlineTemplate;if(isDef(inlineTemplate)){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}return new vnode.componentOptions.Ctor(options);}function installComponentHooks(data){var hooks=data.hook||(data.hook={});for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var existing=hooks[key];var toMerge=componentVNodeHooks[key];if(existing!==toMerge&&!(existing&&existing._merged)){hooks[key]=existing?mergeHook$1(toMerge,existing):toMerge;}}}function mergeHook$1(f1,f2){var merged=function merged(a,b){// flow complains about extra args which is why we use any
f1(a,b);f2(a,b);};merged._merged=true;return merged;}// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options,data){var prop=options.model&&options.model.prop||'value';var event=options.model&&options.model.event||'input';(data.attrs||(data.attrs={}))[prop]=data.model.value;var on=data.on||(data.on={});var existing=on[event];var callback=data.model.callback;if(isDef(existing)){if(Array.isArray(existing)?existing.indexOf(callback)===-1:existing!==callback){on[event]=[callback].concat(existing);}}else{on[event]=callback;}}/*  */var SIMPLE_NORMALIZE=1;var ALWAYS_NORMALIZE=2;// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context,tag,data,children,normalizationType,alwaysNormalize){if(Array.isArray(data)||isPrimitive(data)){normalizationType=children;children=data;data=undefined;}if(isTrue(alwaysNormalize)){normalizationType=ALWAYS_NORMALIZE;}return _createElement(context,tag,data,children,normalizationType);}function _createElement(context,tag,data,children,normalizationType){if(isDef(data)&&isDef(data.__ob__)){warn("Avoid using observed data object as vnode data: "+JSON.stringify(data)+"\n"+'Always create fresh vnode data objects in each render!',context);return createEmptyVNode();}// object syntax in v-bind
if(isDef(data)&&isDef(data.is)){tag=data.is;}if(!tag){// in case of component :is set to falsy value
return createEmptyVNode();}// warn against non-primitive key
if(isDef(data)&&isDef(data.key)&&!isPrimitive(data.key)){{warn('Avoid using non-primitive value as key, '+'use string/number value instead.',context);}}// support single function children as default scoped slot
if(Array.isArray(children)&&typeof children[0]==='function'){data=data||{};data.scopedSlots={"default":children[0]};children.length=0;}if(normalizationType===ALWAYS_NORMALIZE){children=normalizeChildren(children);}else if(normalizationType===SIMPLE_NORMALIZE){children=simpleNormalizeChildren(children);}var vnode,ns;if(typeof tag==='string'){var Ctor;ns=context.$vnode&&context.$vnode.ns||config.getTagNamespace(tag);if(config.isReservedTag(tag)){// platform built-in elements
vnode=new VNode(config.parsePlatformTagName(tag),data,children,undefined,undefined,context);}else if((!data||!data.pre)&&isDef(Ctor=resolveAsset(context.$options,'components',tag))){// component
vnode=createComponent(Ctor,data,context,children,tag);}else{// unknown or unlisted namespaced elements
// check at runtime because it may get assigned a namespace when its
// parent normalizes children
vnode=new VNode(tag,data,children,undefined,undefined,context);}}else{// direct component options / constructor
vnode=createComponent(tag,data,context,children);}if(Array.isArray(vnode)){return vnode;}else if(isDef(vnode)){if(isDef(ns)){applyNS(vnode,ns);}if(isDef(data)){registerDeepBindings(data);}return vnode;}else{return createEmptyVNode();}}function applyNS(vnode,ns,force){vnode.ns=ns;if(vnode.tag==='foreignObject'){// use default namespace inside foreignObject
ns=undefined;force=true;}if(isDef(vnode.children)){for(var i=0,l=vnode.children.length;i<l;i++){var child=vnode.children[i];if(isDef(child.tag)&&(isUndef(child.ns)||isTrue(force)&&child.tag!=='svg')){applyNS(child,ns,force);}}}}// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings(data){if(isObject(data.style)){traverse(data.style);}if(isObject(data["class"])){traverse(data["class"]);}}/*  */function initRender(vm){vm._vnode=null;// the root of the child tree
vm._staticTrees=null;// v-once cached trees
var options=vm.$options;var parentVnode=vm.$vnode=options._parentVnode;// the placeholder node in parent tree
var renderContext=parentVnode&&parentVnode.context;vm.$slots=resolveSlots(options._renderChildren,renderContext);vm.$scopedSlots=emptyObject;// bind the createElement fn to this instance
// so that we get proper render context inside it.
// args order: tag, data, children, normalizationType, alwaysNormalize
// internal version is used by render functions compiled from templates
vm._c=function(a,b,c,d){return createElement(vm,a,b,c,d,false);};// normalization is always applied for the public version, used in
// user-written render functions.
vm.$createElement=function(a,b,c,d){return createElement(vm,a,b,c,d,true);};// $attrs & $listeners are exposed for easier HOC creation.
// they need to be reactive so that HOCs using them are always updated
var parentData=parentVnode&&parentVnode.data;/* istanbul ignore else */{defineReactive$$1(vm,'$attrs',parentData&&parentData.attrs||emptyObject,function(){!isUpdatingChildComponent&&warn("$attrs is readonly.",vm);},true);defineReactive$$1(vm,'$listeners',options._parentListeners||emptyObject,function(){!isUpdatingChildComponent&&warn("$listeners is readonly.",vm);},true);}}var currentRenderingInstance=null;function renderMixin(Vue){// install runtime convenience helpers
installRenderHelpers(Vue.prototype);Vue.prototype.$nextTick=function(fn){return nextTick(fn,this);};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var _parentVnode=ref._parentVnode;if(_parentVnode){vm.$scopedSlots=normalizeScopedSlots(_parentVnode.data.scopedSlots,vm.$slots,vm.$scopedSlots);}// set parent vnode. this allows render functions to have access
// to the data on the placeholder node.
vm.$vnode=_parentVnode;// render self
var vnode;try{// There's no need to maintain a stack becaues all render fns are called
// separately from one another. Nested component's render fns are called
// when parent component is patched.
currentRenderingInstance=vm;vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){handleError(e,vm,"render");// return error render result,
// or previous vnode to prevent render error causing blank component
/* istanbul ignore else */if(vm.$options.renderError){try{vnode=vm.$options.renderError.call(vm._renderProxy,vm.$createElement,e);}catch(e){handleError(e,vm,"renderError");vnode=vm._vnode;}}else{vnode=vm._vnode;}}finally{currentRenderingInstance=null;}// if the returned array contains only a single node, allow it
if(Array.isArray(vnode)&&vnode.length===1){vnode=vnode[0];}// return empty vnode in case the render function errored out
if(!(vnode instanceof VNode)){if(Array.isArray(vnode)){warn('Multiple root nodes returned from render function. Render function '+'should return a single root node.',vm);}vnode=createEmptyVNode();}// set parent
vnode.parent=_parentVnode;return vnode;};}/*  */function ensureCtor(comp,base){if(comp.__esModule||hasSymbol&&comp[Symbol.toStringTag]==='Module'){comp=comp["default"];}return isObject(comp)?base.extend(comp):comp;}function createAsyncPlaceholder(factory,data,context,children,tag){var node=createEmptyVNode();node.asyncFactory=factory;node.asyncMeta={data:data,context:context,children:children,tag:tag};return node;}function resolveAsyncComponent(factory,baseCtor){if(isTrue(factory.error)&&isDef(factory.errorComp)){return factory.errorComp;}if(isDef(factory.resolved)){return factory.resolved;}var owner=currentRenderingInstance;if(owner&&isDef(factory.owners)&&factory.owners.indexOf(owner)===-1){// already pending
factory.owners.push(owner);}if(isTrue(factory.loading)&&isDef(factory.loadingComp)){return factory.loadingComp;}if(owner&&!isDef(factory.owners)){var owners=factory.owners=[owner];var sync=true;var timerLoading=null;var timerTimeout=null;owner.$on('hook:destroyed',function(){return remove(owners,owner);});var forceRender=function forceRender(renderCompleted){for(var i=0,l=owners.length;i<l;i++){owners[i].$forceUpdate();}if(renderCompleted){owners.length=0;if(timerLoading!==null){clearTimeout(timerLoading);timerLoading=null;}if(timerTimeout!==null){clearTimeout(timerTimeout);timerTimeout=null;}}};var resolve=once(function(res){// cache resolved
factory.resolved=ensureCtor(res,baseCtor);// invoke callbacks only if this is not a synchronous resolve
// (async resolves are shimmed as synchronous during SSR)
if(!sync){forceRender(true);}else{owners.length=0;}});var reject=once(function(reason){warn("Failed to resolve async component: "+String(factory)+(reason?"\nReason: "+reason:''));if(isDef(factory.errorComp)){factory.error=true;forceRender(true);}});var res=factory(resolve,reject);if(isObject(res)){if(isPromise(res)){// () => Promise
if(isUndef(factory.resolved)){res.then(resolve,reject);}}else if(isPromise(res.component)){res.component.then(resolve,reject);if(isDef(res.error)){factory.errorComp=ensureCtor(res.error,baseCtor);}if(isDef(res.loading)){factory.loadingComp=ensureCtor(res.loading,baseCtor);if(res.delay===0){factory.loading=true;}else{timerLoading=setTimeout(function(){timerLoading=null;if(isUndef(factory.resolved)&&isUndef(factory.error)){factory.loading=true;forceRender(false);}},res.delay||200);}}if(isDef(res.timeout)){timerTimeout=setTimeout(function(){timerTimeout=null;if(isUndef(factory.resolved)){reject("timeout ("+res.timeout+"ms)");}},res.timeout);}}}sync=false;// return in case resolved synchronously
return factory.loading?factory.loadingComp:factory.resolved;}}/*  */function isAsyncPlaceholder(node){return node.isComment&&node.asyncFactory;}/*  */function getFirstComponentChild(children){if(Array.isArray(children)){for(var i=0;i<children.length;i++){var c=children[i];if(isDef(c)&&(isDef(c.componentOptions)||isAsyncPlaceholder(c))){return c;}}}}/*  */ /*  */function initEvents(vm){vm._events=Object.create(null);vm._hasHookEvent=false;// init parent attached events
var listeners=vm.$options._parentListeners;if(listeners){updateComponentListeners(vm,listeners);}}var target;function add(event,fn){target.$on(event,fn);}function remove$1(event,fn){target.$off(event,fn);}function createOnceHandler(event,fn){var _target=target;return function onceHandler(){var res=fn.apply(null,arguments);if(res!==null){_target.$off(event,onceHandler);}};}function updateComponentListeners(vm,listeners,oldListeners){target=vm;updateListeners(listeners,oldListeners||{},add,remove$1,createOnceHandler,vm);target=undefined;}function eventsMixin(Vue){var hookRE=/^hook:/;Vue.prototype.$on=function(event,fn){var vm=this;if(Array.isArray(event)){for(var i=0,l=event.length;i<l;i++){vm.$on(event[i],fn);}}else{(vm._events[event]||(vm._events[event]=[])).push(fn);// optimize hook:event cost by using a boolean flag marked at registration
// instead of a hash lookup
if(hookRE.test(event)){vm._hasHookEvent=true;}}return vm;};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}on.fn=fn;vm.$on(event,on);return vm;};Vue.prototype.$off=function(event,fn){var vm=this;// all
if(!arguments.length){vm._events=Object.create(null);return vm;}// array of events
if(Array.isArray(event)){for(var i$1=0,l=event.length;i$1<l;i$1++){vm.$off(event[i$1],fn);}return vm;}// specific event
var cbs=vm._events[event];if(!cbs){return vm;}if(!fn){vm._events[event]=null;return vm;}// specific handler
var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break;}}return vm;};Vue.prototype.$emit=function(event){var vm=this;{var lowerCaseEvent=event.toLowerCase();if(lowerCaseEvent!==event&&vm._events[lowerCaseEvent]){tip("Event \""+lowerCaseEvent+"\" is emitted in component "+formatComponentName(vm)+" but the handler is registered for \""+event+"\". "+"Note that HTML attributes are case-insensitive and you cannot use "+"v-on to listen to camelCase events when using in-DOM templates. "+"You should probably use \""+hyphenate(event)+"\" instead of \""+event+"\".");}}var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);var info="event handler for \""+event+"\"";for(var i=0,l=cbs.length;i<l;i++){invokeWithErrorHandling(cbs[i],vm,args,vm,info);}}return vm;};}/*  */var activeInstance=null;var isUpdatingChildComponent=false;function setActiveInstance(vm){var prevActiveInstance=activeInstance;activeInstance=vm;return function(){activeInstance=prevActiveInstance;};}function initLifecycle(vm){var options=vm.$options;// locate first non-abstract parent
var parent=options.parent;if(parent&&!options["abstract"]){while(parent.$options["abstract"]&&parent.$parent){parent=parent.$parent;}parent.$children.push(vm);}vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=null;vm._directInactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}function lifecycleMixin(Vue){Vue.prototype._update=function(vnode,hydrating){var vm=this;var prevEl=vm.$el;var prevVnode=vm._vnode;var restoreActiveInstance=setActiveInstance(vm);vm._vnode=vnode;// Vue.prototype.__patch__ is injected in entry points
// based on the rendering backend used.
if(!prevVnode){// initial render
vm.$el=vm.__patch__(vm.$el,vnode,hydrating,false/* removeOnly */);}else{// updates
vm.$el=vm.__patch__(prevVnode,vnode);}restoreActiveInstance();// update __vue__ reference
if(prevEl){prevEl.__vue__=null;}if(vm.$el){vm.$el.__vue__=vm;}// if parent is an HOC, update its $el as well
if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}// updated hook is called by the scheduler to ensure that children are
// updated in a parent's updated hook.
};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return;}callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;// remove self from parent
var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options["abstract"]){remove(parent.$children,vm);}// teardown watchers
if(vm._watcher){vm._watcher.teardown();}var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}// remove reference from data ob
// frozen object may not have observer.
if(vm._data.__ob__){vm._data.__ob__.vmCount--;}// call the last hook...
vm._isDestroyed=true;// invoke destroy hooks on current rendered tree
vm.__patch__(vm._vnode,null);// fire destroyed hook
callHook(vm,'destroyed');// turn off all instance listeners.
vm.$off();// remove __vue__ reference
if(vm.$el){vm.$el.__vue__=null;}// release circular reference (#6759)
if(vm.$vnode){vm.$vnode.parent=null;}};}function mountComponent(vm,el,hydrating){vm.$el=el;if(!vm.$options.render){vm.$options.render=createEmptyVNode;{/* istanbul ignore if */if(vm.$options.template&&vm.$options.template.charAt(0)!=='#'||vm.$options.el||el){warn('You are using the runtime-only build of Vue where the template '+'compiler is not available. Either pre-compile the templates into '+'render functions, or use the compiler-included build.',vm);}else{warn('Failed to mount component: template or render function not defined.',vm);}}}callHook(vm,'beforeMount');var updateComponent;/* istanbul ignore if */if(config.performance&&mark){updateComponent=function updateComponent(){var name=vm._name;var id=vm._uid;var startTag="vue-perf-start:"+id;var endTag="vue-perf-end:"+id;mark(startTag);var vnode=vm._render();mark(endTag);measure("vue "+name+" render",startTag,endTag);mark(startTag);vm._update(vnode,hydrating);mark(endTag);measure("vue "+name+" patch",startTag,endTag);};}else{updateComponent=function updateComponent(){vm._update(vm._render(),hydrating);};}// we set this to vm._watcher inside the watcher's constructor
// since the watcher's initial patch may call $forceUpdate (e.g. inside child
// component's mounted hook), which relies on vm._watcher being already defined
new Watcher(vm,updateComponent,noop,{before:function before(){if(vm._isMounted&&!vm._isDestroyed){callHook(vm,'beforeUpdate');}}},true/* isRenderWatcher */);hydrating=false;// manually mounted instance, call mounted on self
// mounted is called for render-created child components in its inserted hook
if(vm.$vnode==null){vm._isMounted=true;callHook(vm,'mounted');}return vm;}function updateChildComponent(vm,propsData,listeners,parentVnode,renderChildren){{isUpdatingChildComponent=true;}// determine whether component has slot children
// we need to do this before overwriting $options._renderChildren.
// check if there are dynamic scopedSlots (hand-written or compiled but with
// dynamic slot names). Static scoped slots compiled from template has the
// "$stable" marker.
var newScopedSlots=parentVnode.data.scopedSlots;var oldScopedSlots=vm.$scopedSlots;var hasDynamicScopedSlot=!!(newScopedSlots&&!newScopedSlots.$stable||oldScopedSlots!==emptyObject&&!oldScopedSlots.$stable||newScopedSlots&&vm.$scopedSlots.$key!==newScopedSlots.$key);// Any static slot children from the parent may have changed during parent's
// update. Dynamic scoped slots may also have changed. In such cases, a forced
// update is necessary to ensure correctness.
var needsForceUpdate=!!(renderChildren||// has new static slots
vm.$options._renderChildren||// has old static slots
hasDynamicScopedSlot);vm.$options._parentVnode=parentVnode;vm.$vnode=parentVnode;// update vm's placeholder node without re-render
if(vm._vnode){// update child tree's parent
vm._vnode.parent=parentVnode;}vm.$options._renderChildren=renderChildren;// update $attrs and $listeners hash
// these are also reactive so they may trigger child update if the child
// used them during render
vm.$attrs=parentVnode.data.attrs||emptyObject;vm.$listeners=listeners||emptyObject;// update props
if(propsData&&vm.$options.props){toggleObserving(false);var props=vm._props;var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];var propOptions=vm.$options.props;// wtf flow?
props[key]=validateProp(key,propOptions,propsData,vm);}toggleObserving(true);// keep a copy of raw propsData
vm.$options.propsData=propsData;}// update listeners
listeners=listeners||emptyObject;var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;updateComponentListeners(vm,listeners,oldListeners);// resolve slots + force update if has children
if(needsForceUpdate){vm.$slots=resolveSlots(renderChildren,parentVnode.context);vm.$forceUpdate();}{isUpdatingChildComponent=false;}}function isInInactiveTree(vm){while(vm&&(vm=vm.$parent)){if(vm._inactive){return true;}}return false;}function activateChildComponent(vm,direct){if(direct){vm._directInactive=false;if(isInInactiveTree(vm)){return;}}else if(vm._directInactive){return;}if(vm._inactive||vm._inactive===null){vm._inactive=false;for(var i=0;i<vm.$children.length;i++){activateChildComponent(vm.$children[i]);}callHook(vm,'activated');}}function deactivateChildComponent(vm,direct){if(direct){vm._directInactive=true;if(isInInactiveTree(vm)){return;}}if(!vm._inactive){vm._inactive=true;for(var i=0;i<vm.$children.length;i++){deactivateChildComponent(vm.$children[i]);}callHook(vm,'deactivated');}}function callHook(vm,hook){// #7573 disable dep collection when invoking lifecycle hooks
pushTarget();var handlers=vm.$options[hook];var info=hook+" hook";if(handlers){for(var i=0,j=handlers.length;i<j;i++){invokeWithErrorHandling(handlers[i],vm,null,vm,info);}}if(vm._hasHookEvent){vm.$emit('hook:'+hook);}popTarget();}/*  */var MAX_UPDATE_COUNT=100;var queue=[];var activatedChildren=[];var has={};var circular={};var waiting=false;var flushing=false;var index=0;/**
   * Reset the scheduler's state.
   */function resetSchedulerState(){index=queue.length=activatedChildren.length=0;has={};{circular={};}waiting=flushing=false;}// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp=0;// Async edge case fix requires storing an event listener's attach timestamp.
var getNow=Date.now;// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if(inBrowser&&!isIE){var performance=window.performance;if(performance&&typeof performance.now==='function'&&getNow()>document.createEvent('Event').timeStamp){// if the event timestamp, although evaluated AFTER the Date.now(), is
// smaller than it, it means the event is using a hi-res timestamp,
// and we need to use the hi-res version for event listener timestamps as
// well.
getNow=function getNow(){return performance.now();};}}/**
   * Flush both queues and run the watchers.
   */function flushSchedulerQueue(){currentFlushTimestamp=getNow();flushing=true;var watcher,id;// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child)
// 2. A component's user watchers are run before its render watcher (because
//    user watchers are created before the render watcher)
// 3. If a component is destroyed during a parent component's watcher run,
//    its watchers can be skipped.
queue.sort(function(a,b){return a.id-b.id;});// do not cache length because more watchers might be pushed
// as we run existing watchers
for(index=0;index<queue.length;index++){watcher=queue[index];if(watcher.before){watcher.before();}id=watcher.id;has[id]=null;watcher.run();// in dev build, check and stop circular updates.
if(has[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>MAX_UPDATE_COUNT){warn('You may have an infinite update loop '+(watcher.user?"in watcher with expression \""+watcher.expression+"\"":"in a component render function."),watcher.vm);break;}}}// keep copies of post queues before resetting state
var activatedQueue=activatedChildren.slice();var updatedQueue=queue.slice();resetSchedulerState();// call component updated and activated hooks
callActivatedHooks(activatedQueue);callUpdatedHooks(updatedQueue);// devtool hook
/* istanbul ignore if */if(devtools&&config.devtools){devtools.emit('flush');}}function callUpdatedHooks(queue){var i=queue.length;while(i--){var watcher=queue[i];var vm=watcher.vm;if(vm._watcher===watcher&&vm._isMounted&&!vm._isDestroyed){callHook(vm,'updated');}}}/**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */function queueActivatedComponent(vm){// setting _inactive to false here so that a render function can
// rely on checking whether it's in an inactive tree (e.g. router-view)
vm._inactive=false;activatedChildren.push(vm);}function callActivatedHooks(queue){for(var i=0;i<queue.length;i++){queue[i]._inactive=true;activateChildComponent(queue[i],true/* true */);}}/**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */function queueWatcher(watcher){var id=watcher.id;if(has[id]==null){has[id]=true;if(!flushing){queue.push(watcher);}else{// if already flushing, splice the watcher based on its id
// if already past its id, it will be run next immediately.
var i=queue.length-1;while(i>index&&queue[i].id>watcher.id){i--;}queue.splice(i+1,0,watcher);}// queue the flush
if(!waiting){waiting=true;if(!config.async){flushSchedulerQueue();return;}nextTick(flushSchedulerQueue);}}}/*  */var uid$2=0;/**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */var Watcher=function Watcher(vm,expOrFn,cb,options,isRenderWatcher){this.vm=vm;if(isRenderWatcher){vm._watcher=this;}vm._watchers.push(this);// options
if(options){this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;this.before=options.before;}else{this.deep=this.user=this.lazy=this.sync=false;}this.cb=cb;this.id=++uid$2;// uid for batching
this.active=true;this.dirty=this.lazy;// for lazy watchers
this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();this.expression=expOrFn.toString();// parse expression for getter
if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=noop;warn("Failed watching path: \""+expOrFn+"\" "+'Watcher only accepts simple dot-delimited paths. '+'For full control, use a function instead.',vm);}}this.value=this.lazy?undefined:this.get();};/**
   * Evaluate the getter, and re-collect dependencies.
   */Watcher.prototype.get=function get(){pushTarget(this);var value;var vm=this.vm;try{value=this.getter.call(vm,vm);}catch(e){if(this.user){handleError(e,vm,"getter for watcher \""+this.expression+"\"");}else{throw e;}}finally{// "touch" every property so they are all tracked as
// dependencies for deep watching
if(this.deep){traverse(value);}popTarget();this.cleanupDeps();}return value;};/**
   * Add a dependency to this directive.
   */Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};/**
   * Clean up for dependency collection.
   */Watcher.prototype.cleanupDeps=function cleanupDeps(){var i=this.deps.length;while(i--){var dep=this.deps[i];if(!this.newDepIds.has(dep.id)){dep.removeSub(this);}}var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};/**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */Watcher.prototype.update=function update(){/* istanbul ignore else */if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};/**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||// Deep watchers and watchers on Object/Arrays should fire even
// when the value is the same, because the value may
// have mutated.
isObject(value)||this.deep){// set new value
var oldValue=this.value;this.value=value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e){handleError(e,this.vm,"callback for watcher \""+this.expression+"\"");}}else{this.cb.call(this.vm,value,oldValue);}}}};/**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};/**
   * Depend on all deps collected by this watcher.
   */Watcher.prototype.depend=function depend(){var i=this.deps.length;while(i--){this.deps[i].depend();}};/**
   * Remove self from all dependencies' subscriber list.
   */Watcher.prototype.teardown=function teardown(){if(this.active){// remove self from vm's watcher list
// this is a somewhat expensive operation so we skip it
// if the vm is being destroyed.
if(!this.vm._isBeingDestroyed){remove(this.vm._watchers,this);}var i=this.deps.length;while(i--){this.deps[i].removeSub(this);}this.active=false;}};/*  */var sharedPropertyDefinition={enumerable:true,configurable:true,get:noop,set:noop};function proxy(target,sourceKey,key){sharedPropertyDefinition.get=function proxyGetter(){return this[sourceKey][key];};sharedPropertyDefinition.set=function proxySetter(val){this[sourceKey][key]=val;};Object.defineProperty(target,key,sharedPropertyDefinition);}function initState(vm){vm._watchers=[];var opts=vm.$options;if(opts.props){initProps(vm,opts.props);}if(opts.methods){initMethods(vm,opts.methods);}if(opts.data){initData(vm);}else{observe(vm._data={},true/* asRootData */);}if(opts.computed){initComputed(vm,opts.computed);}if(opts.watch&&opts.watch!==nativeWatch){initWatch(vm,opts.watch);}}function initProps(vm,propsOptions){var propsData=vm.$options.propsData||{};var props=vm._props={};// cache prop keys so that future props updates can iterate using Array
// instead of dynamic object key enumeration.
var keys=vm.$options._propKeys=[];var isRoot=!vm.$parent;// root instance props should be converted
if(!isRoot){toggleObserving(false);}var loop=function loop(key){keys.push(key);var value=validateProp(key,propsOptions,propsData,vm);/* istanbul ignore else */{var hyphenatedKey=hyphenate(key);if(isReservedAttribute(hyphenatedKey)||config.isReservedAttr(hyphenatedKey)){warn("\""+hyphenatedKey+"\" is a reserved attribute and cannot be used as component prop.",vm);}defineReactive$$1(props,key,value,function(){if(!isRoot&&!isUpdatingChildComponent){warn("Avoid mutating a prop directly since the value will be "+"overwritten whenever the parent component re-renders. "+"Instead, use a data or computed property based on the prop's "+"value. Prop being mutated: \""+key+"\"",vm);}});}// static props are already proxied on the component's prototype
// during Vue.extend(). We only need to proxy props defined at
// instantiation here.
if(!(key in vm)){proxy(vm,"_props",key);}};for(var key in propsOptions){loop(key);}toggleObserving(true);}function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?getData(data,vm):data||{};if(!isPlainObject(data)){data={};warn('data functions should return an object:\n'+'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',vm);}// proxy data on instance
var keys=Object.keys(data);var props=vm.$options.props;var methods=vm.$options.methods;var i=keys.length;while(i--){var key=keys[i];{if(methods&&hasOwn(methods,key)){warn("Method \""+key+"\" has already been defined as a data property.",vm);}}if(props&&hasOwn(props,key)){warn("The data property \""+key+"\" is already declared as a prop. "+"Use prop default value instead.",vm);}else if(!isReserved(key)){proxy(vm,"_data",key);}}// observe data
observe(data,true/* asRootData */);}function getData(data,vm){// #7573 disable dep collection when invoking data getters
pushTarget();try{return data.call(vm,vm);}catch(e){handleError(e,vm,"data()");return{};}finally{popTarget();}}var computedWatcherOptions={lazy:true};function initComputed(vm,computed){// $flow-disable-line
var watchers=vm._computedWatchers=Object.create(null);// computed properties are just getters during SSR
var isSSR=isServerRendering();for(var key in computed){var userDef=computed[key];var getter=typeof userDef==='function'?userDef:userDef.get;if(getter==null){warn("Getter is missing for computed property \""+key+"\".",vm);}if(!isSSR){// create internal watcher for the computed property.
watchers[key]=new Watcher(vm,getter||noop,noop,computedWatcherOptions);}// component-defined computed properties are already defined on the
// component prototype. We only need to define computed properties defined
// at instantiation here.
if(!(key in vm)){defineComputed(vm,key,userDef);}else{if(key in vm.$data){warn("The computed property \""+key+"\" is already defined in data.",vm);}else if(vm.$options.props&&key in vm.$options.props){warn("The computed property \""+key+"\" is already defined as a prop.",vm);}}}}function defineComputed(target,key,userDef){var shouldCache=!isServerRendering();if(typeof userDef==='function'){sharedPropertyDefinition.get=shouldCache?createComputedGetter(key):createGetterInvoker(userDef);sharedPropertyDefinition.set=noop;}else{sharedPropertyDefinition.get=userDef.get?shouldCache&&userDef.cache!==false?createComputedGetter(key):createGetterInvoker(userDef.get):noop;sharedPropertyDefinition.set=userDef.set||noop;}if(sharedPropertyDefinition.set===noop){sharedPropertyDefinition.set=function(){warn("Computed property \""+key+"\" was assigned to but it has no setter.",this);};}Object.defineProperty(target,key,sharedPropertyDefinition);}function createComputedGetter(key){return function computedGetter(){var watcher=this._computedWatchers&&this._computedWatchers[key];if(watcher){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;}};}function createGetterInvoker(fn){return function computedGetter(){return fn.call(this,this);};}function initMethods(vm,methods){var props=vm.$options.props;for(var key in methods){{if(typeof methods[key]!=='function'){warn("Method \""+key+"\" has type \""+_typeof2(methods[key])+"\" in the component definition. "+"Did you reference the function correctly?",vm);}if(props&&hasOwn(props,key)){warn("Method \""+key+"\" has already been defined as a prop.",vm);}if(key in vm&&isReserved(key)){warn("Method \""+key+"\" conflicts with an existing Vue instance method. "+"Avoid defining component methods that start with _ or $.");}}vm[key]=typeof methods[key]!=='function'?noop:bind(methods[key],vm);}}function initWatch(vm,watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}function createWatcher(vm,expOrFn,handler,options){if(isPlainObject(handler)){options=handler;handler=handler.handler;}if(typeof handler==='string'){handler=vm[handler];}return vm.$watch(expOrFn,handler,options);}function stateMixin(Vue){// flow somehow has problems with directly declared definition object
// when using Object.defineProperty, so we have to procedurally build up
// the object here.
var dataDef={};dataDef.get=function(){return this._data;};var propsDef={};propsDef.get=function(){return this._props;};{dataDef.set=function(){warn('Avoid replacing instance root $data. '+'Use nested data properties instead.',this);};propsDef.set=function(){warn("$props is readonly.",this);};}Object.defineProperty(Vue.prototype,'$data',dataDef);Object.defineProperty(Vue.prototype,'$props',propsDef);Vue.prototype.$set=set;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;if(isPlainObject(cb)){return createWatcher(vm,expOrFn,cb,options);}options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){try{cb.call(vm,watcher.value);}catch(error){handleError(error,vm,"callback for immediate watcher \""+watcher.expression+"\"");}}return function unwatchFn(){watcher.teardown();};};}/*  */var uid$3=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;// a uid
vm._uid=uid$3++;var startTag,endTag;/* istanbul ignore if */if(config.performance&&mark){startTag="vue-perf-start:"+vm._uid;endTag="vue-perf-end:"+vm._uid;mark(startTag);}// a flag to avoid this being observed
vm._isVue=true;// merge options
if(options&&options._isComponent){// optimize internal component instantiation
// since dynamic options merging is pretty slow, and none of the
// internal component options needs special treatment.
initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm.constructor),options||{},vm);}/* istanbul ignore else */{initProxy(vm);}// expose real self
vm._self=vm;initLifecycle(vm);initEvents(vm);initRender(vm);callHook(vm,'beforeCreate');initInjections(vm);// resolve injections before data/props
initState(vm);initProvide(vm);// resolve provide after data/props
callHook(vm,'created');/* istanbul ignore if */if(config.performance&&mark){vm._name=formatComponentName(vm,false);mark(endTag);measure("vue "+vm._name+" init",startTag,endTag);}if(vm.$options.el){vm.$mount(vm.$options.el);}};}function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);// doing this because it's faster than dynamic enumeration.
var parentVnode=options._parentVnode;opts.parent=options.parent;opts._parentVnode=parentVnode;var vnodeComponentOptions=parentVnode.componentOptions;opts.propsData=vnodeComponentOptions.propsData;opts._parentListeners=vnodeComponentOptions.listeners;opts._renderChildren=vnodeComponentOptions.children;opts._componentTag=vnodeComponentOptions.tag;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor["super"]){var superOptions=resolveConstructorOptions(Ctor["super"]);var cachedSuperOptions=Ctor.superOptions;if(superOptions!==cachedSuperOptions){// super option changed,
// need to resolve new options.
Ctor.superOptions=superOptions;// check if there are any late-modified/attached options (#4976)
var modifiedOptions=resolveModifiedOptions(Ctor);// update base extend options
if(modifiedOptions){extend(Ctor.extendOptions,modifiedOptions);}options=Ctor.options=mergeOptions(superOptions,Ctor.extendOptions);if(options.name){options.components[options.name]=Ctor;}}}return options;}function resolveModifiedOptions(Ctor){var modified;var latest=Ctor.options;var sealed=Ctor.sealedOptions;for(var key in latest){if(latest[key]!==sealed[key]){if(!modified){modified={};}modified[key]=latest[key];}}return modified;}function Vue(options){if(!(this instanceof Vue)){warn('Vue is a constructor and should be called with the `new` keyword');}this._init(options);}initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);renderMixin(Vue);/*  */function initUse(Vue){Vue.use=function(plugin){var installedPlugins=this._installedPlugins||(this._installedPlugins=[]);if(installedPlugins.indexOf(plugin)>-1){return this;}// additional parameters
var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else if(typeof plugin==='function'){plugin.apply(null,args);}installedPlugins.push(plugin);return this;};}/*  */function initMixin$1(Vue){Vue.mixin=function(mixin){this.options=mergeOptions(this.options,mixin);return this;};}/*  */function initExtend(Vue){/**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */Vue.cid=0;var cid=1;/**
     * Class inheritance
     */Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var SuperId=Super.cid;var cachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});if(cachedCtors[SuperId]){return cachedCtors[SuperId];}var name=extendOptions.name||Super.options.name;if(name){validateComponentName(name);}var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;// For props and computed properties, we define the proxy getters on
// the Vue instances at extension time, on the extended prototype. This
// avoids Object.defineProperty calls for each instance created.
if(Sub.options.props){initProps$1(Sub);}if(Sub.options.computed){initComputed$1(Sub);}// allow further extension/mixin/plugin usage
Sub.extend=Super.extend;Sub.mixin=Super.mixin;Sub.use=Super.use;// create asset registers, so extended classes
// can have their private assets too.
ASSET_TYPES.forEach(function(type){Sub[type]=Super[type];});// enable recursive self-lookup
if(name){Sub.options.components[name]=Sub;}// keep a reference to the super options at extension time.
// later at instantiation we can check if Super's options have
// been updated.
Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;Sub.sealedOptions=extend({},Sub.options);// cache constructor
cachedCtors[SuperId]=Sub;return Sub;};}function initProps$1(Comp){var props=Comp.options.props;for(var key in props){proxy(Comp.prototype,"_props",key);}}function initComputed$1(Comp){var computed=Comp.options.computed;for(var key in computed){defineComputed(Comp.prototype,key,computed[key]);}}/*  */function initAssetRegisters(Vue){/**
     * Create asset registration methods.
     */ASSET_TYPES.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else{/* istanbul ignore if */if(type==='component'){validateComponentName(id);}if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=this.options._base.extend(definition);}if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}this.options[type+'s'][id]=definition;return definition;}};});}/*  */function getComponentName(opts){return opts&&(opts.Ctor.options.name||opts.tag);}function matches(pattern,name){if(Array.isArray(pattern)){return pattern.indexOf(name)>-1;}else if(typeof pattern==='string'){return pattern.split(',').indexOf(name)>-1;}else if(isRegExp(pattern)){return pattern.test(name);}/* istanbul ignore next */return false;}function pruneCache(keepAliveInstance,filter){var cache=keepAliveInstance.cache;var keys=keepAliveInstance.keys;var _vnode=keepAliveInstance._vnode;for(var key in cache){var cachedNode=cache[key];if(cachedNode){var name=getComponentName(cachedNode.componentOptions);if(name&&!filter(name)){pruneCacheEntry(cache,key,keys,_vnode);}}}}function pruneCacheEntry(cache,key,keys,current){var cached$$1=cache[key];if(cached$$1&&(!current||cached$$1.tag!==current.tag)){cached$$1.componentInstance.$destroy();}cache[key]=null;remove(keys,key);}var patternTypes=[String,RegExp,Array];var KeepAlive={name:'keep-alive',"abstract":true,props:{include:patternTypes,exclude:patternTypes,max:[String,Number]},created:function created(){this.cache=Object.create(null);this.keys=[];},destroyed:function destroyed(){for(var key in this.cache){pruneCacheEntry(this.cache,key,this.keys);}},mounted:function mounted(){var this$1=this;this.$watch('include',function(val){pruneCache(this$1,function(name){return matches(val,name);});});this.$watch('exclude',function(val){pruneCache(this$1,function(name){return!matches(val,name);});});},render:function render(){var slot=this.$slots["default"];var vnode=getFirstComponentChild(slot);var componentOptions=vnode&&vnode.componentOptions;if(componentOptions){// check pattern
var name=getComponentName(componentOptions);var ref=this;var include=ref.include;var exclude=ref.exclude;if(// not included
include&&(!name||!matches(include,name))||// excluded
exclude&&name&&matches(exclude,name)){return vnode;}var ref$1=this;var cache=ref$1.cache;var keys=ref$1.keys;var key=vnode.key==null// same constructor may get registered as different local components
// so cid alone is not enough (#3269)
?componentOptions.Ctor.cid+(componentOptions.tag?"::"+componentOptions.tag:''):vnode.key;if(cache[key]){vnode.componentInstance=cache[key].componentInstance;// make current key freshest
remove(keys,key);keys.push(key);}else{cache[key]=vnode;keys.push(key);// prune oldest entry
if(this.max&&keys.length>parseInt(this.max)){pruneCacheEntry(cache,keys[0],keys,this._vnode);}}vnode.data.keepAlive=true;}return vnode||slot&&slot[0];}};var builtInComponents={KeepAlive:KeepAlive};/*  */function initGlobalAPI(Vue){// config
var configDef={};configDef.get=function(){return config;};{configDef.set=function(){warn('Do not replace the Vue.config object, set individual fields instead.');};}Object.defineProperty(Vue,'config',configDef);// exposed util methods.
// NOTE: these are not considered part of the public API - avoid relying on
// them unless you are aware of the risk.
Vue.util={warn:warn,extend:extend,mergeOptions:mergeOptions,defineReactive:defineReactive$$1};Vue.set=set;Vue["delete"]=del;Vue.nextTick=nextTick;// 2.6 explicit observable API
Vue.observable=function(obj){observe(obj);return obj;};Vue.options=Object.create(null);ASSET_TYPES.forEach(function(type){Vue.options[type+'s']=Object.create(null);});// this is used to identify the "base" constructor to extend all plain-object
// components with in Weex's multi-instance scenarios.
Vue.options._base=Vue;extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}initGlobalAPI(Vue);Object.defineProperty(Vue.prototype,'$isServer',{get:isServerRendering});Object.defineProperty(Vue.prototype,'$ssrContext',{get:function get(){/* istanbul ignore next */return this.$vnode&&this.$vnode.ssrContext;}});// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue,'FunctionalRenderContext',{value:FunctionalRenderContext});Vue.version='2.6.10';/*  */ // these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr=makeMap('style,class');// attributes that should be using props for binding
var acceptValue=makeMap('input,textarea,option,select,progress');var mustUseProp=function mustUseProp(tag,type,attr){return attr==='value'&&acceptValue(tag)&&type!=='button'||attr==='selected'&&tag==='option'||attr==='checked'&&tag==='input'||attr==='muted'&&tag==='video';};var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isValidContentEditableValue=makeMap('events,caret,typing,plaintext-only');var convertEnumeratedValue=function convertEnumeratedValue(key,value){return isFalsyAttrValue(value)||value==='false'?'false'// allow arbitrary string value for contenteditable
:key==='contenteditable'&&isValidContentEditableValue(value)?value:'true';};var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,translate,'+'truespeed,typemustmatch,visible');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function isXlink(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink';};var getXlinkProp=function getXlinkProp(name){return isXlink(name)?name.slice(6,name.length):'';};var isFalsyAttrValue=function isFalsyAttrValue(val){return val==null||val===false;};/*  */function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(isDef(childNode.componentInstance)){childNode=childNode.componentInstance._vnode;if(childNode&&childNode.data){data=mergeClassData(childNode.data,data);}}while(isDef(parentNode=parentNode.parent)){if(parentNode&&parentNode.data){data=mergeClassData(data,parentNode.data);}}return renderClass(data.staticClass,data["class"]);}function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),"class":isDef(child["class"])?[child["class"],parent["class"]]:parent["class"]};}function renderClass(staticClass,dynamicClass){if(isDef(staticClass)||isDef(dynamicClass)){return concat(staticClass,stringifyClass(dynamicClass));}/* istanbul ignore next */return'';}function concat(a,b){return a?b?a+' '+b:a:b||'';}function stringifyClass(value){if(Array.isArray(value)){return stringifyArray(value);}if(isObject(value)){return stringifyObject(value);}if(typeof value==='string'){return value;}/* istanbul ignore next */return'';}function stringifyArray(value){var res='';var stringified;for(var i=0,l=value.length;i<l;i++){if(isDef(stringified=stringifyClass(value[i]))&&stringified!==''){if(res){res+=' ';}res+=stringified;}}return res;}function stringifyObject(value){var res='';for(var key in value){if(value[key]){if(res){res+=' ';}res+=key;}}return res;}/*  */var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template,blockquote,iframe,tfoot');// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,'+'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isReservedTag=function isReservedTag(tag){return isHTMLTag(tag)||isSVG(tag);};function getTagNamespace(tag){if(isSVG(tag)){return'svg';}// basic support for MathML
// note it doesn't support other MathML elements being component roots
if(tag==='math'){return'math';}}var unknownElementCache=Object.create(null);function isUnknownElement(tag){/* istanbul ignore if */if(!inBrowser){return true;}if(isReservedTag(tag)){return false;}tag=tag.toLowerCase();/* istanbul ignore if */if(unknownElementCache[tag]!=null){return unknownElementCache[tag];}var el=document.createElement(tag);if(tag.indexOf('-')>-1){// http://stackoverflow.com/a/28210364/1070244
return unknownElementCache[tag]=el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else{return unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString());}}var isTextInputType=makeMap('text,number,password,search,email,tel,url');/*  */ /**
   * Query an element selector if it's not an element already.
   */function query(el){if(typeof el==='string'){var selected=document.querySelector(el);if(!selected){warn('Cannot find element: '+el);return document.createElement('div');}return selected;}else{return el;}}/*  */function createElement$1(tagName,vnode){var elm=document.createElement(tagName);if(tagName!=='select'){return elm;}// false or null will remove the attribute but undefined will not
if(vnode.data&&vnode.data.attrs&&vnode.data.attrs.multiple!==undefined){elm.setAttribute('multiple','multiple');}return elm;}function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName);}function createTextNode(text){return document.createTextNode(text);}function createComment(text){return document.createComment(text);}function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}function removeChild(node,child){node.removeChild(child);}function appendChild(node,child){node.appendChild(child);}function parentNode(node){return node.parentNode;}function nextSibling(node){return node.nextSibling;}function tagName(node){return node.tagName;}function setTextContent(node,text){node.textContent=text;}function setStyleScope(node,scopeId){node.setAttribute(scopeId,'');}var nodeOps=/*#__PURE__*/Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,setStyleScope:setStyleScope});/*  */var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!isDef(key)){return;}var vm=vnode.context;var ref=vnode.componentInstance||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(!Array.isArray(refs[key])){refs[key]=[ref];}else if(refs[key].indexOf(ref)<0){// $flow-disable-line
refs[key].push(ref);}}else{refs[key]=ref;}}}/**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */var emptyNode=new VNode('',{},[]);var hooks=['create','activate','update','remove','destroy'];function sameVnode(a,b){return a.key===b.key&&(a.tag===b.tag&&a.isComment===b.isComment&&isDef(a.data)===isDef(b.data)&&sameInputType(a,b)||isTrue(a.isAsyncPlaceholder)&&a.asyncFactory===b.asyncFactory&&isUndef(b.asyncFactory.error));}function sameInputType(a,b){if(a.tag!=='input'){return true;}var i;var typeA=isDef(i=a.data)&&isDef(i=i.attrs)&&i.type;var typeB=isDef(i=b.data)&&isDef(i=i.attrs)&&i.type;return typeA===typeB||isTextInputType(typeA)&&isTextInputType(typeB);}function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}return map;}function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks.length;++i){cbs[hooks[i]]=[];for(j=0;j<modules.length;++j){if(isDef(modules[j][hooks[i]])){cbs[hooks[i]].push(modules[j][hooks[i]]);}}}function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm);}function createRmCb(childElm,listeners){function remove$$1(){if(--remove$$1.listeners===0){removeNode(childElm);}}remove$$1.listeners=listeners;return remove$$1;}function removeNode(el){var parent=nodeOps.parentNode(el);// element may have already been removed due to v-html / v-text
if(isDef(parent)){nodeOps.removeChild(parent,el);}}function isUnknownElement$$1(vnode,inVPre){return!inVPre&&!vnode.ns&&!(config.ignoredElements.length&&config.ignoredElements.some(function(ignore){return isRegExp(ignore)?ignore.test(vnode.tag):ignore===vnode.tag;}))&&config.isUnknownElement(vnode.tag);}var creatingElmInVPre=0;function createElm(vnode,insertedVnodeQueue,parentElm,refElm,nested,ownerArray,index){if(isDef(vnode.elm)&&isDef(ownerArray)){// This vnode was used in a previous render!
// now it's used as a new node, overwriting its elm would cause
// potential patch errors down the road when it's used as an insertion
// reference node. Instead, we clone the node on-demand before creating
// associated DOM element for it.
vnode=ownerArray[index]=cloneVNode(vnode);}vnode.isRootInsert=!nested;// for transition enter check
if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){return;}var data=vnode.data;var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){{if(data&&data.pre){creatingElmInVPre++;}if(isUnknownElement$$1(vnode,creatingElmInVPre)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.',vnode.context);}}vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode);setScope(vnode);/* istanbul ignore if */{createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}insert(parentElm,vnode.elm,refElm);}if(data&&data.pre){creatingElmInVPre--;}}else if(isTrue(vnode.isComment)){vnode.elm=nodeOps.createComment(vnode.text);insert(parentElm,vnode.elm,refElm);}else{vnode.elm=nodeOps.createTextNode(vnode.text);insert(parentElm,vnode.elm,refElm);}}function createComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i=vnode.data;if(isDef(i)){var isReactivated=isDef(vnode.componentInstance)&&i.keepAlive;if(isDef(i=i.hook)&&isDef(i=i.init)){i(vnode,false/* hydrating */);}// after calling the init hook, if the vnode is a child component
// it should've created a child instance and mounted it. the child
// component also has set the placeholder vnode's elm.
// in that case we can just return the element and be done.
if(isDef(vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);insert(parentElm,vnode.elm,refElm);if(isTrue(isReactivated)){reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm);}return true;}}}function initComponent(vnode,insertedVnodeQueue){if(isDef(vnode.data.pendingInsert)){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);vnode.data.pendingInsert=null;}vnode.elm=vnode.componentInstance.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{// empty component root.
// skip all element-related modules except for ref (#3455)
registerRef(vnode);// make sure to invoke the insert hook
insertedVnodeQueue.push(vnode);}}function reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i;// hack for #4339: a reactivated component with inner transition
// does not trigger because the inner node's created hooks are not called
// again. It's not ideal to involve module-specific logic in here but
// there doesn't seem to be a better way to do it.
var innerNode=vnode;while(innerNode.componentInstance){innerNode=innerNode.componentInstance._vnode;if(isDef(i=innerNode.data)&&isDef(i=i.transition)){for(i=0;i<cbs.activate.length;++i){cbs.activate[i](emptyNode,innerNode);}insertedVnodeQueue.push(innerNode);break;}}// unlike a newly created component,
// a reactivated keep-alive component doesn't insert itself
insert(parentElm,vnode.elm,refElm);}function insert(parent,elm,ref$$1){if(isDef(parent)){if(isDef(ref$$1)){if(nodeOps.parentNode(ref$$1)===parent){nodeOps.insertBefore(parent,elm,ref$$1);}}else{nodeOps.appendChild(parent,elm);}}}function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){{checkDuplicateKeys(children);}for(var i=0;i<children.length;++i){createElm(children[i],insertedVnodeQueue,vnode.elm,null,true,children,i);}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(String(vnode.text)));}}function isPatchable(vnode){while(vnode.componentInstance){vnode=vnode.componentInstance._vnode;}return isDef(vnode.tag);}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}i=vnode.data.hook;// Reuse variable
if(isDef(i)){if(isDef(i.create)){i.create(emptyNode,vnode);}if(isDef(i.insert)){insertedVnodeQueue.push(vnode);}}}// set scope id attribute for scoped CSS.
// this is implemented as a special case to avoid the overhead
// of going through the normal attribute patching process.
function setScope(vnode){var i;if(isDef(i=vnode.fnScopeId)){nodeOps.setStyleScope(vnode.elm,i);}else{var ancestor=vnode;while(ancestor){if(isDef(i=ancestor.context)&&isDef(i=i.$options._scopeId)){nodeOps.setStyleScope(vnode.elm,i);}ancestor=ancestor.parent;}}// for slot content they should also get the scopeId from the host instance.
if(isDef(i=activeInstance)&&i!==vnode.context&&i!==vnode.fnContext&&isDef(i=i.$options._scopeId)){nodeOps.setStyleScope(vnode.elm,i);}}function addVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm,false,vnodes,startIdx);}}function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{// Text node
removeNode(ch.elm);}}}}function removeAndInvokeRemoveHook(vnode,rm){if(isDef(rm)||isDef(vnode.data)){var i;var listeners=cbs.remove.length+1;if(isDef(rm)){// we have a recursively passed down rm callback
// increase the listeners count
rm.listeners+=listeners;}else{// directly removing
rm=createRmCb(vnode.elm,listeners);}// recursively invoke hooks on child component root node
if(isDef(i=vnode.componentInstance)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeNode(vnode.elm);}}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,vnodeToMove,refElm;// removeOnly is a special flag used only by <transition-group>
// to ensure removed elements stay in correct relative positions
// during leaving transitions
var canMove=!removeOnly;{checkDuplicateKeys(newCh);}while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];// Vnode has been moved left
}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue,newCh,newEndIdx);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){// Vnode moved right
patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue,newCh,newEndIdx);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){// Vnode moved left
patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:findIdxInOld(newStartVnode,oldCh,oldStartIdx,oldEndIdx);if(isUndef(idxInOld)){// New element
createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm,false,newCh,newStartIdx);}else{vnodeToMove=oldCh[idxInOld];if(sameVnode(vnodeToMove,newStartVnode)){patchVnode(vnodeToMove,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,vnodeToMove.elm,oldStartVnode.elm);}else{// same key but different element. treat as new element
createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm,false,newCh,newStartIdx);}}newStartVnode=newCh[++newStartIdx];}}if(oldStartIdx>oldEndIdx){refElm=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}function checkDuplicateKeys(children){var seenKeys={};for(var i=0;i<children.length;i++){var vnode=children[i];var key=vnode.key;if(isDef(key)){if(seenKeys[key]){warn("Duplicate keys detected: '"+key+"'. This may cause an update error.",vnode.context);}else{seenKeys[key]=true;}}}}function findIdxInOld(node,oldCh,start,end){for(var i=start;i<end;i++){var c=oldCh[i];if(isDef(c)&&sameVnode(node,c)){return i;}}}function patchVnode(oldVnode,vnode,insertedVnodeQueue,ownerArray,index,removeOnly){if(oldVnode===vnode){return;}if(isDef(vnode.elm)&&isDef(ownerArray)){// clone reused vnode
vnode=ownerArray[index]=cloneVNode(vnode);}var elm=vnode.elm=oldVnode.elm;if(isTrue(oldVnode.isAsyncPlaceholder)){if(isDef(vnode.asyncFactory.resolved)){hydrate(oldVnode.elm,vnode,insertedVnodeQueue);}else{vnode.isAsyncPlaceholder=true;}return;}// reuse element for static trees.
// note we only do this if the vnode is cloned -
// if the new node is not cloned it means the render functions have been
// reset by the hot-reload-api and we need to do a proper re-render.
if(isTrue(vnode.isStatic)&&isTrue(oldVnode.isStatic)&&vnode.key===oldVnode.key&&(isTrue(vnode.isCloned)||isTrue(vnode.isOnce))){vnode.componentInstance=oldVnode.componentInstance;return;}var i;var data=vnode.data;if(isDef(data)&&isDef(i=data.hook)&&isDef(i=i.prepatch)){i(oldVnode,vnode);}var oldCh=oldVnode.children;var ch=vnode.children;if(isDef(data)&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}if(isDef(i=data.hook)&&isDef(i=i.update)){i(oldVnode,vnode);}}if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){{checkDuplicateKeys(ch);}if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(elm,oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.postpatch)){i(oldVnode,vnode);}}}function invokeInsertHook(vnode,queue,initial){// delay insert hooks for component root nodes, invoke them after the
// element is really inserted
if(isTrue(initial)&&isDef(vnode.parent)){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}var hydrationBailed=false;// list of modules that can skip create hook during hydration because they
// are already rendered on the client or has no need for initialization
// Note: style is excluded because it relies on initial clone for future
// deep updates (#7063).
var isRenderedModule=makeMap('attrs,class,staticClass,staticStyle,key');// Note: this is a browser-only function so we can assume elms are DOM nodes.
function hydrate(elm,vnode,insertedVnodeQueue,inVPre){var i;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;inVPre=inVPre||data&&data.pre;vnode.elm=elm;if(isTrue(vnode.isComment)&&isDef(vnode.asyncFactory)){vnode.isAsyncPlaceholder=true;return true;}// assert node match
{if(!assertNodeMatch(elm,vnode,inVPre)){return false;}}if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true/* hydrating */);}if(isDef(i=vnode.componentInstance)){// child component. it should have hydrated its own tree.
initComponent(vnode,insertedVnodeQueue);return true;}}if(isDef(tag)){if(isDef(children)){// empty element, allow client to pick up and populate children
if(!elm.hasChildNodes()){createChildren(vnode,children,insertedVnodeQueue);}else{// v-html and domProps: innerHTML
if(isDef(i=data)&&isDef(i=i.domProps)&&isDef(i=i.innerHTML)){if(i!==elm.innerHTML){/* istanbul ignore if */if(typeof console!=='undefined'&&!hydrationBailed){hydrationBailed=true;console.warn('Parent: ',elm);console.warn('server innerHTML: ',i);console.warn('client innerHTML: ',elm.innerHTML);}return false;}}else{// iterate and compare children lists
var childrenMatch=true;var childNode=elm.firstChild;for(var i$1=0;i$1<children.length;i$1++){if(!childNode||!hydrate(childNode,children[i$1],insertedVnodeQueue,inVPre)){childrenMatch=false;break;}childNode=childNode.nextSibling;}// if childNode is not null, it means the actual childNodes list is
// longer than the virtual children list.
if(!childrenMatch||childNode){/* istanbul ignore if */if(typeof console!=='undefined'&&!hydrationBailed){hydrationBailed=true;console.warn('Parent: ',elm);console.warn('Mismatching childNodes vs. VNodes: ',elm.childNodes,children);}return false;}}}}if(isDef(data)){var fullInvoke=false;for(var key in data){if(!isRenderedModule(key)){fullInvoke=true;invokeCreateHooks(vnode,insertedVnodeQueue);break;}}if(!fullInvoke&&data['class']){// ensure collecting deps for deep class bindings for future updates
traverse(data['class']);}}}else if(elm.data!==vnode.text){elm.data=vnode.text;}return true;}function assertNodeMatch(node,vnode,inVPre){if(isDef(vnode.tag)){return vnode.tag.indexOf('vue-component')===0||!isUnknownElement$$1(vnode,inVPre)&&vnode.tag.toLowerCase()===(node.tagName&&node.tagName.toLowerCase());}else{return node.nodeType===(vnode.isComment?8:3);}}return function patch(oldVnode,vnode,hydrating,removeOnly){if(isUndef(vnode)){if(isDef(oldVnode)){invokeDestroyHook(oldVnode);}return;}var isInitialPatch=false;var insertedVnodeQueue=[];if(isUndef(oldVnode)){// empty mount (likely as component), create new root element
isInitialPatch=true;createElm(vnode,insertedVnodeQueue);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){// patch existing root node
patchVnode(oldVnode,vnode,insertedVnodeQueue,null,null,removeOnly);}else{if(isRealElement){// mounting to a real element
// check if this is server-rendered content and if we can perform
// a successful hydration.
if(oldVnode.nodeType===1&&oldVnode.hasAttribute(SSR_ATTR)){oldVnode.removeAttribute(SSR_ATTR);hydrating=true;}if(isTrue(hydrating)){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode;}else{warn('The client-side rendered virtual DOM tree is not matching '+'server-rendered content. This is likely caused by incorrect '+'HTML markup, for example nesting block-level elements inside '+'<p>, or missing <tbody>. Bailing hydration and performing '+'full client-side render.');}}// either not server-rendered, or hydration failed.
// create an empty node and replace it
oldVnode=emptyNodeAt(oldVnode);}// replacing existing element
var oldElm=oldVnode.elm;var parentElm=nodeOps.parentNode(oldElm);// create new node
createElm(vnode,insertedVnodeQueue,// extremely rare edge case: do not insert if old element is in a
// leaving transition. Only happens when combining transition +
// keep-alive + HOCs. (#4590)
oldElm._leaveCb?null:parentElm,nodeOps.nextSibling(oldElm));// update parent placeholder node element, recursively
if(isDef(vnode.parent)){var ancestor=vnode.parent;var patchable=isPatchable(vnode);while(ancestor){for(var i=0;i<cbs.destroy.length;++i){cbs.destroy[i](ancestor);}ancestor.elm=vnode.elm;if(patchable){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,ancestor);}// #6513
// invoke insert hooks that may have been merged by create hooks.
// e.g. for directives that uses the "inserted" hook.
var insert=ancestor.data.hook.insert;if(insert.merged){// start at index 1 to avoid re-invoking component mounted hook
for(var i$2=1;i$2<insert.fns.length;i$2++){insert.fns[i$2]();}}}else{registerRef(ancestor);}ancestor=ancestor.parent;}}// destroy old node
if(isDef(parentElm)){removeVnodes(parentElm,[oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm;};}/*  */var directives={create:updateDirectives,update:updateDirectives,destroy:function unbindDirectives(vnode){updateDirectives(vnode,emptyNode);}};function updateDirectives(oldVnode,vnode){if(oldVnode.data.directives||vnode.data.directives){_update(oldVnode,vnode);}}function _update(oldVnode,vnode){var isCreate=oldVnode===emptyNode;var isDestroy=vnode===emptyNode;var oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);var newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);var dirsWithInsert=[];var dirsWithPostpatch=[];var key,oldDir,dir;for(key in newDirs){oldDir=oldDirs[key];dir=newDirs[key];if(!oldDir){// new directive, bind
callHook$1(dir,'bind',vnode,oldVnode);if(dir.def&&dir.def.inserted){dirsWithInsert.push(dir);}}else{// existing directive, update
dir.oldValue=oldDir.value;dir.oldArg=oldDir.arg;callHook$1(dir,'update',vnode,oldVnode);if(dir.def&&dir.def.componentUpdated){dirsWithPostpatch.push(dir);}}}if(dirsWithInsert.length){var callInsert=function callInsert(){for(var i=0;i<dirsWithInsert.length;i++){callHook$1(dirsWithInsert[i],'inserted',vnode,oldVnode);}};if(isCreate){mergeVNodeHook(vnode,'insert',callInsert);}else{callInsert();}}if(dirsWithPostpatch.length){mergeVNodeHook(vnode,'postpatch',function(){for(var i=0;i<dirsWithPostpatch.length;i++){callHook$1(dirsWithPostpatch[i],'componentUpdated',vnode,oldVnode);}});}if(!isCreate){for(key in oldDirs){if(!newDirs[key]){// no longer present, unbind
callHook$1(oldDirs[key],'unbind',oldVnode,oldVnode,isDestroy);}}}}var emptyModifiers=Object.create(null);function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs){// $flow-disable-line
return res;}var i,dir;for(i=0;i<dirs.length;i++){dir=dirs[i];if(!dir.modifiers){// $flow-disable-line
dir.modifiers=emptyModifiers;}res[getRawDirName(dir)]=dir;dir.def=resolveAsset(vm.$options,'directives',dir.name,true);}// $flow-disable-line
return res;}function getRawDirName(dir){return dir.rawName||dir.name+"."+Object.keys(dir.modifiers||{}).join('.');}function callHook$1(dir,hook,vnode,oldVnode,isDestroy){var fn=dir.def&&dir.def[hook];if(fn){try{fn(vnode.elm,dir,vnode,oldVnode,isDestroy);}catch(e){handleError(e,vnode.context,"directive "+dir.name+" "+hook+" hook");}}}var baseModules=[ref,directives];/*  */function updateAttrs(oldVnode,vnode){var opts=vnode.componentOptions;if(isDef(opts)&&opts.Ctor.options.inheritAttrs===false){return;}if(isUndef(oldVnode.data.attrs)&&isUndef(vnode.data.attrs)){return;}var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};// clone observed objects, as the user probably wants to mutate it
if(isDef(attrs.__ob__)){attrs=vnode.data.attrs=extend({},attrs);}for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur);}}// #4391: in IE9, setting type can reset value for input[type=radio]
// #6666: IE/Edge forces progress value down to 1 before setting a max
/* istanbul ignore if */if((isIE||isEdge)&&attrs.value!==oldAttrs.value){setAttr(elm,'value',attrs.value);}for(key in oldAttrs){if(isUndef(attrs[key])){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}function setAttr(el,key,value){if(el.tagName.indexOf('-')>-1){baseSetAttr(el,key,value);}else if(isBooleanAttr(key)){// set attribute for blank value
// e.g. <option disabled>Select one</option>
if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{// technically allowfullscreen is a boolean attribute for <iframe>,
// but Flash expects a value of "true" when used on <embed> tag
value=key==='allowfullscreen'&&el.tagName==='EMBED'?'true':key;el.setAttribute(key,value);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,convertEnumeratedValue(key,value));}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{baseSetAttr(el,key,value);}}function baseSetAttr(el,key,value){if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{// #7138: IE10 & 11 fires input event when setting placeholder on
// <textarea>... block the first input event and remove the blocker
// immediately.
/* istanbul ignore if */if(isIE&&!isIE9&&el.tagName==='TEXTAREA'&&key==='placeholder'&&value!==''&&!el.__ieph){var blocker=function blocker(e){e.stopImmediatePropagation();el.removeEventListener('input',blocker);};el.addEventListener('input',blocker);// $flow-disable-line
el.__ieph=true;/* IE placeholder patched */}el.setAttribute(key,value);}}var attrs={create:updateAttrs,update:updateAttrs};/*  */function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticClass)&&isUndef(data["class"])&&(isUndef(oldData)||isUndef(oldData.staticClass)&&isUndef(oldData["class"]))){return;}var cls=genClassForVnode(vnode);// handle transition classes
var transitionClass=el._transitionClasses;if(isDef(transitionClass)){cls=concat(cls,stringifyClass(transitionClass));}// set the class
if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}var klass={create:updateClass,update:updateClass};/*  */ /*  */ /*  */ /*  */ // in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN='__r';var CHECKBOX_RADIO_TOKEN='__c';/*  */ // normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on){/* istanbul ignore if */if(isDef(on[RANGE_TOKEN])){// IE input[type=range] only supports `change` event
var event=isIE?'change':'input';on[event]=[].concat(on[RANGE_TOKEN],on[event]||[]);delete on[RANGE_TOKEN];}// This was originally intended to fix #4521 but no longer necessary
// after 2.5. Keeping it for backwards compat with generated code from < 2.4
/* istanbul ignore if */if(isDef(on[CHECKBOX_RADIO_TOKEN])){on.change=[].concat(on[CHECKBOX_RADIO_TOKEN],on.change||[]);delete on[CHECKBOX_RADIO_TOKEN];}}var target$1;function createOnceHandler$1(event,handler,capture){var _target=target$1;// save current target element in closure
return function onceHandler(){var res=handler.apply(null,arguments);if(res!==null){remove$2(event,onceHandler,capture,_target);}};}// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix=isUsingMicroTask&&!(isFF&&Number(isFF[1])<=53);function add$1(name,handler,capture,passive){// async edge case #6566: inner click event triggers patch, event handler
// attached to outer element during patch, and triggered again. This
// happens because browsers fire microtask ticks between event propagation.
// the solution is simple: we save the timestamp when a handler is attached,
// and the handler would only fire if the event passed to it was fired
// AFTER it was attached.
if(useMicrotaskFix){var attachedTimestamp=currentFlushTimestamp;var original=handler;handler=original._wrapper=function(e){if(// no bubbling, should always fire.
// this is just a safety net in case event.timeStamp is unreliable in
// certain weird environments...
e.target===e.currentTarget||// event is fired after handler attachment
e.timeStamp>=attachedTimestamp||// bail for environments that have buggy event.timeStamp implementations
// #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
// #9681 QtWebEngine event.timeStamp is negative value
e.timeStamp<=0||// #9448 bail if event is fired in another document in a multi-page
// electron/nw.js app, since event.timeStamp will be using a different
// starting reference
e.target.ownerDocument!==document){return original.apply(this,arguments);}};}target$1.addEventListener(name,handler,supportsPassive?{capture:capture,passive:passive}:capture);}function remove$2(name,handler,capture,_target){(_target||target$1).removeEventListener(name,handler._wrapper||handler,capture);}function updateDOMListeners(oldVnode,vnode){if(isUndef(oldVnode.data.on)&&isUndef(vnode.data.on)){return;}var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};target$1=vnode.elm;normalizeEvents(on);updateListeners(on,oldOn,add$1,remove$2,createOnceHandler$1,vnode.context);target$1=undefined;}var events={create:updateDOMListeners,update:updateDOMListeners};/*  */var svgContainer;function updateDOMProps(oldVnode,vnode){if(isUndef(oldVnode.data.domProps)&&isUndef(vnode.data.domProps)){return;}var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};// clone observed objects, as the user probably wants to mutate it
if(isDef(props.__ob__)){props=vnode.data.domProps=extend({},props);}for(key in oldProps){if(!(key in props)){elm[key]='';}}for(key in props){cur=props[key];// ignore children if the node has textContent or innerHTML,
// as these will throw away existing DOM nodes and cause removal errors
// on subsequent patches (#3360)
if(key==='textContent'||key==='innerHTML'){if(vnode.children){vnode.children.length=0;}if(cur===oldProps[key]){continue;}// #6601 work around Chrome version <= 55 bug where single textNode
// replaced by innerHTML/textContent retains its parentNode property
if(elm.childNodes.length===1){elm.removeChild(elm.childNodes[0]);}}if(key==='value'&&elm.tagName!=='PROGRESS'){// store value as _value as well since
// non-string values will be stringified
elm._value=cur;// avoid resetting cursor position when value is the same
var strCur=isUndef(cur)?'':String(cur);if(shouldUpdateValue(elm,strCur)){elm.value=strCur;}}else if(key==='innerHTML'&&isSVG(elm.tagName)&&isUndef(elm.innerHTML)){// IE doesn't support innerHTML for SVG elements
svgContainer=svgContainer||document.createElement('div');svgContainer.innerHTML="<svg>"+cur+"</svg>";var svg=svgContainer.firstChild;while(elm.firstChild){elm.removeChild(elm.firstChild);}while(svg.firstChild){elm.appendChild(svg.firstChild);}}else if(// skip the update if old and new VDOM state is the same.
// `value` is handled separately because the DOM value may be temporarily
// out of sync with VDOM state due to focus, composition and modifiers.
// This  #4521 by skipping the unnecesarry `checked` update.
cur!==oldProps[key]){// some property updates can throw
// e.g. `value` on <progress> w/ non-finite value
try{elm[key]=cur;}catch(e){}}}}// check platforms/web/util/attrs.js acceptValue
function shouldUpdateValue(elm,checkVal){return!elm.composing&&(elm.tagName==='OPTION'||isNotInFocusAndDirty(elm,checkVal)||isDirtyWithModifiers(elm,checkVal));}function isNotInFocusAndDirty(elm,checkVal){// return true when textbox (.number and .trim) loses focus and its value is
// not equal to the updated value
var notInFocus=true;// #6157
// work around IE bug when accessing document.activeElement in an iframe
try{notInFocus=document.activeElement!==elm;}catch(e){}return notInFocus&&elm.value!==checkVal;}function isDirtyWithModifiers(elm,newVal){var value=elm.value;var modifiers=elm._vModifiers;// injected by v-model runtime
if(isDef(modifiers)){if(modifiers.number){return toNumber(value)!==toNumber(newVal);}if(modifiers.trim){return value.trim()!==newVal.trim();}}return value!==newVal;}var domProps={create:updateDOMProps,update:updateDOMProps};/*  */var parseStyleText=cached(function(cssText){var res={};var listDelimiter=/;(?![^(]*\))/g;var propertyDelimiter=/:(.+)/;cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim());}});return res;});// merge static and dynamic style data on the same vnode
function normalizeStyleData(data){var style=normalizeStyleBinding(data.style);// static style is pre-processed into an object during compilation
// and is always a fresh object, so it's safe to merge into it
return data.staticStyle?extend(data.staticStyle,style):style;}// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle){if(Array.isArray(bindingStyle)){return toObject(bindingStyle);}if(typeof bindingStyle==='string'){return parseStyleText(bindingStyle);}return bindingStyle;}/**
   * parent component style should be after child's
   * so that parent component's style could override it
   */function getStyle(vnode,checkChild){var res={};var styleData;if(checkChild){var childNode=vnode;while(childNode.componentInstance){childNode=childNode.componentInstance._vnode;if(childNode&&childNode.data&&(styleData=normalizeStyleData(childNode.data))){extend(res,styleData);}}}if(styleData=normalizeStyleData(vnode.data)){extend(res,styleData);}var parentNode=vnode;while(parentNode=parentNode.parent){if(parentNode.data&&(styleData=normalizeStyleData(parentNode.data))){extend(res,styleData);}}return res;}/*  */var cssVarRE=/^--/;var importantRE=/\s*!important$/;var setProp=function setProp(el,name,val){/* istanbul ignore if */if(cssVarRE.test(name)){el.style.setProperty(name,val);}else if(importantRE.test(val)){el.style.setProperty(hyphenate(name),val.replace(importantRE,''),'important');}else{var normalizedName=normalize(name);if(Array.isArray(val)){// Support values array created by autoprefixer, e.g.
// {display: ["-webkit-box", "-ms-flexbox", "flex"]}
// Set them one by one, and the browser will only set those it can recognize
for(var i=0,len=val.length;i<len;i++){el.style[normalizedName]=val[i];}}else{el.style[normalizedName]=val;}}};var vendorNames=['Webkit','Moz','ms'];var emptyStyle;var normalize=cached(function(prop){emptyStyle=emptyStyle||document.createElement('div').style;prop=camelize(prop);if(prop!=='filter'&&prop in emptyStyle){return prop;}var capName=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<vendorNames.length;i++){var name=vendorNames[i]+capName;if(name in emptyStyle){return name;}}});function updateStyle(oldVnode,vnode){var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticStyle)&&isUndef(data.style)&&isUndef(oldData.staticStyle)&&isUndef(oldData.style)){return;}var cur,name;var el=vnode.elm;var oldStaticStyle=oldData.staticStyle;var oldStyleBinding=oldData.normalizedStyle||oldData.style||{};// if static style exists, stylebinding already merged into it when doing normalizeStyleData
var oldStyle=oldStaticStyle||oldStyleBinding;var style=normalizeStyleBinding(vnode.data.style)||{};// store normalized style under a different key for next diff
// make sure to clone it if it's reactive, since the user likely wants
// to mutate it.
vnode.data.normalizedStyle=isDef(style.__ob__)?extend({},style):style;var newStyle=getStyle(vnode,true);for(name in oldStyle){if(isUndef(newStyle[name])){setProp(el,name,'');}}for(name in newStyle){cur=newStyle[name];if(cur!==oldStyle[name]){// ie9 setting to null has no effect, must use empty string
setProp(el,name,cur==null?'':cur);}}}var style={create:updateStyle,update:updateStyle};/*  */var whitespaceRE=/\s+/;/**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */function addClass(el,cls){/* istanbul ignore if */if(!cls||!(cls=cls.trim())){return;}/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(whitespaceRE).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=" "+(el.getAttribute('class')||'')+" ";if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}/**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */function removeClass(el,cls){/* istanbul ignore if */if(!cls||!(cls=cls.trim())){return;}/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(whitespaceRE).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}if(!el.classList.length){el.removeAttribute('class');}}else{var cur=" "+(el.getAttribute('class')||'')+" ";var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}cur=cur.trim();if(cur){el.setAttribute('class',cur);}else{el.removeAttribute('class');}}}/*  */function resolveTransition(def$$1){if(!def$$1){return;}/* istanbul ignore else */if(_typeof2(def$$1)==='object'){var res={};if(def$$1.css!==false){extend(res,autoCssTransition(def$$1.name||'v'));}extend(res,def$$1);return res;}else if(typeof def$$1==='string'){return autoCssTransition(def$$1);}}var autoCssTransition=cached(function(name){return{enterClass:name+"-enter",enterToClass:name+"-enter-to",enterActiveClass:name+"-enter-active",leaveClass:name+"-leave",leaveToClass:name+"-leave-to",leaveActiveClass:name+"-leave-active"};});var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';// Transition property/event sniffing
var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){/* istanbul ignore if */if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}// binding to window is necessary to make hot reload work in IE in strict mode
var raf=inBrowser?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:/* istanbul ignore next */function(fn){return fn();};function nextFrame(fn){raf(function(){raf(fn);});}function addTransitionClass(el,cls){var transitionClasses=el._transitionClasses||(el._transitionClasses=[]);if(transitionClasses.indexOf(cls)<0){transitionClasses.push(cls);addClass(el,cls);}}function removeTransitionClass(el,cls){if(el._transitionClasses){remove(el._transitionClasses,cls);}removeClass(el,cls);}function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb();}var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function end(){el.removeEventListener(event,onEnd);cb();};var onEnd=function onEnd(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);// JSDOM may return undefined for transition properties
var transitionDelays=(styles[transitionProp+'Delay']||'').split(', ');var transitionDurations=(styles[transitionProp+'Duration']||'').split(', ');var transitionTimeout=getTimeout(transitionDelays,transitionDurations);var animationDelays=(styles[animationProp+'Delay']||'').split(', ');var animationDurations=(styles[animationProp+'Duration']||'').split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;/* istanbul ignore if */if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform};}function getTimeout(delays,durations){/* istanbul ignore next */while(delays.length<durations.length){delays=delays.concat(delays);}return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i]);}));}// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs(s){return Number(s.slice(0,-1).replace(',','.'))*1000;}/*  */function enter(vnode,toggleDisplay){var el=vnode.elm;// call leave callback now
if(isDef(el._leaveCb)){el._leaveCb.cancelled=true;el._leaveCb();}var data=resolveTransition(vnode.data.transition);if(isUndef(data)){return;}/* istanbul ignore if */if(isDef(el._enterCb)||el.nodeType!==1){return;}var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterToClass=data.enterToClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearToClass=data.appearToClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;var duration=data.duration;// activeInstance will always be the <transition> component managing this
// transition. One edge case to check is when the <transition> is placed
// as the root node of a child component. In that case we need to check
// <transition>'s parent for appear check.
var context=activeInstance;var transitionNode=activeInstance.$vnode;while(transitionNode&&transitionNode.parent){context=transitionNode.context;transitionNode=transitionNode.parent;}var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return;}var startClass=isAppear&&appearClass?appearClass:enterClass;var activeClass=isAppear&&appearActiveClass?appearActiveClass:enterActiveClass;var toClass=isAppear&&appearToClass?appearToClass:enterToClass;var beforeEnterHook=isAppear?beforeAppear||beforeEnter:beforeEnter;var enterHook=isAppear?typeof appear==='function'?appear:enter:enter;var afterEnterHook=isAppear?afterAppear||afterEnter:afterEnter;var enterCancelledHook=isAppear?appearCancelled||enterCancelled:enterCancelled;var explicitEnterDuration=toNumber(isObject(duration)?duration.enter:duration);if(explicitEnterDuration!=null){checkDuration(explicitEnterDuration,'enter',vnode);}var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(enterHook);var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,toClass);removeTransitionClass(el,activeClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}el._enterCb=null;});if(!vnode.data.show){// remove pending leave element on enter by injecting an insert hook
mergeVNodeHook(vnode,'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}enterHook&&enterHook(el,cb);});}// start enter transition
beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){removeTransitionClass(el,startClass);if(!cb.cancelled){addTransitionClass(el,toClass);if(!userWantsControl){if(isValidDuration(explicitEnterDuration)){setTimeout(cb,explicitEnterDuration);}else{whenTransitionEnds(el,type,cb);}}}});}if(vnode.data.show){toggleDisplay&&toggleDisplay();enterHook&&enterHook(el,cb);}if(!expectsCSS&&!userWantsControl){cb();}}function leave(vnode,rm){var el=vnode.elm;// call enter callback now
if(isDef(el._enterCb)){el._enterCb.cancelled=true;el._enterCb();}var data=resolveTransition(vnode.data.transition);if(isUndef(data)||el.nodeType!==1){return rm();}/* istanbul ignore if */if(isDef(el._leaveCb)){return;}var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveToClass=data.leaveToClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var duration=data.duration;var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(leave);var explicitLeaveDuration=toNumber(isObject(duration)?duration.leave:duration);if(isDef(explicitLeaveDuration)){checkDuration(explicitLeaveDuration,'leave',vnode);}var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}if(expectsCSS){removeTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveActiveClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}function performLeave(){// the delayed leave may have already been cancelled
if(cb.cancelled){return;}// record leaving element
if(!vnode.data.show&&el.parentNode){(el.parentNode._pending||(el.parentNode._pending={}))[vnode.key]=vnode;}beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){removeTransitionClass(el,leaveClass);if(!cb.cancelled){addTransitionClass(el,leaveToClass);if(!userWantsControl){if(isValidDuration(explicitLeaveDuration)){setTimeout(cb,explicitLeaveDuration);}else{whenTransitionEnds(el,type,cb);}}}});}leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}// only used in dev mode
function checkDuration(val,name,vnode){if(typeof val!=='number'){warn("<transition> explicit "+name+" duration is not a valid number - "+"got "+JSON.stringify(val)+".",vnode.context);}else if(isNaN(val)){warn("<transition> explicit "+name+" duration is NaN - "+'the duration expression might be incorrect.',vnode.context);}}function isValidDuration(val){return typeof val==='number'&&!isNaN(val);}/**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */function getHookArgumentsLength(fn){if(isUndef(fn)){return false;}var invokerFns=fn.fns;if(isDef(invokerFns)){// invoker
return getHookArgumentsLength(Array.isArray(invokerFns)?invokerFns[0]:invokerFns);}else{return(fn._length||fn.length)>1;}}function _enter(_,vnode){if(vnode.data.show!==true){enter(vnode);}}var transition=inBrowser?{create:_enter,activate:_enter,remove:function remove$$1(vnode,rm){/* istanbul ignore else */if(vnode.data.show!==true){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];/*  */ // the directive module should be applied last, after all
// built-in modules have been applied.
var modules=platformModules.concat(baseModules);var patch=createPatchFunction({nodeOps:nodeOps,modules:modules});/**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */ /* istanbul ignore if */if(isIE9){// http://www.matts411.com/post/internet-explorer-9-oninput/
document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}var directive={inserted:function inserted(el,binding,vnode,oldVnode){if(vnode.tag==='select'){// #6903
if(oldVnode.elm&&!oldVnode.elm._vOptions){mergeVNodeHook(vnode,'postpatch',function(){directive.componentUpdated(el,binding,vnode);});}else{setSelected(el,binding,vnode.context);}el._vOptions=[].map.call(el.options,getValue);}else if(vnode.tag==='textarea'||isTextInputType(el.type)){el._vModifiers=binding.modifiers;if(!binding.modifiers.lazy){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);// Safari < 10.2 & UIWebView doesn't fire compositionend when
// switching focus before confirming composition choice
// this also fixes the issue where some browsers e.g. iOS Chrome
// fires "change" instead of "input" on autocomplete.
el.addEventListener('change',onCompositionEnd);/* istanbul ignore if */if(isIE9){el.vmodel=true;}}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);// in case the options rendered by v-for have changed,
// it's possible that the value is out-of-sync with the rendered options.
// detect such cases and filter out values that no longer has a matching
// option in the DOM.
var prevOptions=el._vOptions;var curOptions=el._vOptions=[].map.call(el.options,getValue);if(curOptions.some(function(o,i){return!looseEqual(o,prevOptions[i]);})){// trigger change event if
// no matching option found for at least one value
var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,curOptions);}):binding.value!==binding.oldValue&&hasNoMatchingOption(binding.value,curOptions);if(needReset){trigger(el,'change');}}}}};function setSelected(el,binding,vm){actuallySetSelected(el,binding,vm);/* istanbul ignore if */if(isIE||isEdge){setTimeout(function(){actuallySetSelected(el,binding,vm);},0);}}function actuallySetSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){warn("<select multiple v-model=\""+binding.expression+"\"> "+"expects an Array value for its binding, but got "+Object.prototype.toString.call(value).slice(8,-1),vm);return;}var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}return;}}}if(!isMultiple){el.selectedIndex=-1;}}function hasNoMatchingOption(value,options){return options.every(function(o){return!looseEqual(o,value);});}function getValue(option){return'_value'in option?option._value:option.value;}function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){// prevent triggering an input event for no reason
if(!e.target.composing){return;}e.target.composing=false;trigger(e.target,'input');}function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}/*  */ // recursively search for possible transition defined inside the component root
function locateNode(vnode){return vnode.componentInstance&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.componentInstance._vnode):vnode;}var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;var originalDisplay=el.__vOriginalDisplay=el.style.display==='none'?'':el.style.display;if(value&&transition$$1){vnode.data.show=true;enter(vnode,function(){el.style.display=originalDisplay;});}else{el.style.display=value?originalDisplay:'none';}},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;/* istanbul ignore if */if(!value===!oldValue){return;}vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;if(transition$$1){vnode.data.show=true;if(value){enter(vnode,function(){el.style.display=el.__vOriginalDisplay;});}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}},unbind:function unbind(el,binding,vnode,oldVnode,isDestroy){if(!isDestroy){el.style.display=el.__vOriginalDisplay;}}};var platformDirectives={model:directive,show:show};/*  */var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options["abstract"]){return getRealChild(getFirstComponentChild(compOptions.children));}else{return vnode;}}function extractTransitionData(comp){var data={};var options=comp.$options;// props
for(var key in options.propsData){data[key]=comp[key];}// events.
// extract listeners and pass them directly to the transition methods
var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1];}return data;}function placeholder(h,rawChild){if(/\d-keep-alive$/.test(rawChild.tag)){return h('keep-alive',{props:rawChild.componentOptions.propsData});}}function hasParentTransition(vnode){while(vnode=vnode.parent){if(vnode.data.transition){return true;}}}function isSameChild(child,oldChild){return oldChild.key===child.key&&oldChild.tag===child.tag;}var isNotTextNode=function isNotTextNode(c){return c.tag||isAsyncPlaceholder(c);};var isVShowDirective=function isVShowDirective(d){return d.name==='show';};var Transition={name:'transition',props:transitionProps,"abstract":true,render:function render(h){var this$1=this;var children=this.$slots["default"];if(!children){return;}// filter out text nodes (possible whitespaces)
children=children.filter(isNotTextNode);/* istanbul ignore if */if(!children.length){return;}// warn multiple elements
if(children.length>1){warn('<transition> can only be used on a single element. Use '+'<transition-group> for lists.',this.$parent);}var mode=this.mode;// warn invalid mode
if(mode&&mode!=='in-out'&&mode!=='out-in'){warn('invalid <transition> mode: '+mode,this.$parent);}var rawChild=children[0];// if this is a component root node and the component's
// parent container node also has transition, skip.
if(hasParentTransition(this.$vnode)){return rawChild;}// apply transition data to child
// use getRealChild() to ignore abstract components e.g. keep-alive
var child=getRealChild(rawChild);/* istanbul ignore if */if(!child){return rawChild;}if(this._leaving){return placeholder(h,rawChild);}// ensure a key that is unique to the vnode type and to this transition
// component instance. This key will be used to remove pending leaving nodes
// during entering.
var id="__transition-"+this._uid+"-";child.key=child.key==null?child.isComment?id+'comment':id+child.tag:isPrimitive(child.key)?String(child.key).indexOf(id)===0?child.key:id+child.key:child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);// mark v-show
// so that the transition module can hand over the control to the directive
if(child.data.directives&&child.data.directives.some(isVShowDirective)){child.data.show=true;}if(oldChild&&oldChild.data&&!isSameChild(child,oldChild)&&!isAsyncPlaceholder(oldChild)&&// #6687 component root is a comment node
!(oldChild.componentInstance&&oldChild.componentInstance._vnode.isComment)){// replace old child transition data with fresh one
// important for dynamic transitions!
var oldData=oldChild.data.transition=extend({},data);// handle transition mode
if(mode==='out-in'){// return placeholder node and queue update when leave finishes
this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();});return placeholder(h,rawChild);}else if(mode==='in-out'){if(isAsyncPlaceholder(child)){return oldRawChild;}var delayedLeave;var performLeave=function performLeave(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave);mergeVNodeHook(data,'enterCancelled',performLeave);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;});}}return rawChild;}};/*  */var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,beforeMount:function beforeMount(){var this$1=this;var update=this._update;this._update=function(vnode,hydrating){var restoreActiveInstance=setActiveInstance(this$1);// force removing pass
this$1.__patch__(this$1._vnode,this$1.kept,false,// hydrating
true// removeOnly (!important, avoids unnecessary moves)
);this$1._vnode=this$1.kept;restoreActiveInstance();update.call(this$1,vnode,hydrating);};},render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots["default"]||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else{var opts=c.componentOptions;var name=opts?opts.Ctor.options.name||opts.tag||'':c.tag;warn("<transition-group> children must be keyed: <"+name+">");}}}if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}this.kept=h(tag,null,kept);this.removed=removed;}return h(tag,null,children);},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||(this.name||'v')+'-move';if(!children.length||!this.hasMove(children[0].elm,moveClass)){return;}// we divide the work into three loops to avoid mixing DOM reads and writes
// in each iteration - which helps prevent layout thrashing.
children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);// force reflow to put everything in position
// assign to this to avoid being removed in tree-shaking
// $flow-disable-line
this._reflow=document.body.offsetHeight;children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(e&&e.target!==el){return;}if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){/* istanbul ignore if */if(!hasTransition){return false;}/* istanbul ignore if */if(this._hasMove){return this._hasMove;}// Detect whether an element with the move class applied has
// CSS transitions. Since the element may be inside an entering
// transition at this very moment, we make a clone of it and remove
// all other transition classes applied to ensure only the move class
// is applied.
var clone=el.cloneNode();if(el._transitionClasses){el._transitionClasses.forEach(function(cls){removeClass(clone,cls);});}addClass(clone,moveClass);clone.style.display='none';this.$el.appendChild(clone);var info=getTransitionInfo(clone);this.$el.removeChild(clone);return this._hasMove=info.hasTransform;}}};function callPendingCbs(c){/* istanbul ignore if */if(c.elm._moveCb){c.elm._moveCb();}/* istanbul ignore if */if(c.elm._enterCb){c.elm._enterCb();}}function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};/*  */ // install platform specific utils
Vue.config.mustUseProp=mustUseProp;Vue.config.isReservedTag=isReservedTag;Vue.config.isReservedAttr=isReservedAttr;Vue.config.getTagNamespace=getTagNamespace;Vue.config.isUnknownElement=isUnknownElement;// install platform runtime directives & components
extend(Vue.options.directives,platformDirectives);extend(Vue.options.components,platformComponents);// install platform patch function
Vue.prototype.__patch__=inBrowser?patch:noop;// public mount method
Vue.prototype.$mount=function(el,hydrating){el=el&&inBrowser?query(el):undefined;return mountComponent(this,el,hydrating);};// devtools global hook
/* istanbul ignore next */if(inBrowser){setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue);}else{console[console.info?'info':'log']('Download the Vue Devtools extension for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}if(config.productionTip!==false&&typeof console!=='undefined'){console[console.info?'info':'log']("You are running Vue in development mode.\n"+"Make sure to turn on production mode when deploying for production.\n"+"See more tips at https://vuejs.org/guide/deployment.html");}},0);}var FilestackLoader=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports;}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==_typeof2(e)&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e){r.d(n,o,function(t){return e[t];}.bind(null,o));}return n;},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return r.d(t,"a",t),t;},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},r.p="",r(r.s=0);}([function(e,t,r){r.r(t),r.d(t,"loadModules",function(){return l;}),r.d(t,"loadModule",function(){return s;}),r.d(t,"registerModule",function(){return u;}),r.d(t,"loadCss",function(){return c;}),r.d(t,"FILESTACK_MODULES",function(){return o;});var n,o,a=("object"==(typeof window==="undefined"?"undefined":_typeof2(window))&&((n=window.filestackInternals)||(n={modules:{}},window.filestackInternals=n),n.modules||(n.modules={})),n),i=a&&a.modules,d=function d(e,t,r){e.detachEvent?e.detachEvent("onreadystatechange",t):e.removeEventListener(r,t,!1);},l=function l(e){return Promise.all(e.map(function(e){var t=e.id,r=e.url;return s(t,r);})).then(function(t){var r={};return t.forEach(function(t,n){var o=e[n];r[o.id]=t;}),r;});},s=function s(e,t){if(!e)throw new Error("Module id is required");var r=i[e];return e="fs-loader-"+e,r||(i[e]={},r=i[e]),r.instance?Promise.resolve(r.instance):r.promise?r.promise:r.promise=new Promise(function(r,n){var o=function o(t){if("load"===t.type||/^(complete|loaded)$/.test((t.currentTarget||t.srcElement).readyState)){var a=t.currentTarget||t.srcElement;d(a,o,"load"),d(a,n,"error"),setTimeout(function(){return r(i[e]?i[e].instance:void 0);},10);}},a=document.createElement("script");a.id=e,!a.attachEvent||a.attachEvent.toString&&a.attachEvent.toString().indexOf("[native code")<0?(a.addEventListener("load",o,!1),a.addEventListener("onerror",n,!1)):a.attachEvent("onreadystatechange",o),a.setAttribute("crossorigin","anonymous"),a.setAttribute("charset","utf-8"),a.setAttribute("async","true"),a.src=t,document.body.appendChild(a);});},u=function u(e,t,r){if(!e)throw new Error("Module id is required");if(!i)throw new Error("Loader is not initialized");i[e="fs-loader-"+e]&&(i[e]={instance:t,metadata:r});},c=function c(e){return null!==document.querySelector('link[href="'+e+'"]')?Promise.resolve():new Promise(function(t){var r=document.getElementsByTagName("head")[0],n=document.createElement("link"),o=function o(){t(),n.removeEventListener("load",o);};n.rel="stylesheet",n.href=e,n.addEventListener("load",o),r.appendChild(n);});};!function(e){e.FILESTACK_SDK="filestack-sdk",e.TRANSFORMS_UI="transforms-ui",e.PICKER="picker";}(o||(o={}));}]);var _FilestackLoader$loadModules=FilestackLoader.loadModules,_FilestackLoader$loadModule=FilestackLoader.loadModule,_FilestackLoader$registerModule=FilestackLoader.registerModule,_FilestackLoader$loadCss=FilestackLoader.loadCss,_FilestackLoader$FILESTACK_MODULES=FilestackLoader.FILESTACK_MODULES;// Logger can be used and required from many places.
// This is global on / off switch for it, which all
// created logger contexts respect.
var onOff={init:function init(){window.filestackInternals.logger.working=false;},isWorking:function isWorking(){return window.filestackInternals.logger.working;},on:function on(){window.filestackInternals.logger.working=true;},off:function off(){window.filestackInternals.logger.working=false;}};var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return _typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};var toConsumableArray=function toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}};/* eslint no-console:0 */var context=function context(contextName,onOff){var api=function log(){for(var _len=arguments.length,stuff=Array(_len),_key=0;_key<_len;_key++){stuff[_key]=arguments[_key];}var convertedToStrings=[].concat(stuff).map(function(thing){if((typeof thing==='undefined'?'undefined':_typeof(thing))==='object'){return JSON.stringify(thing,function(key,value){if(typeof value==='function'){// If any function named json is found then call that function to get the json object.
if(key==='json'){try{return value();}catch(err){// Throws? No worries. Just go on and return string.
}}return'[Function]';}if(value instanceof File){return'[File name: '+value.name+', mimetype: '+value.type+', size: '+value.size+']';}return value;},2);}return thing;});if(onOff.isWorking()){var _console;(_console=console).log.apply(_console,['['+contextName+']'].concat(toConsumableArray(convertedToStrings)));}};api.context=function(subContextName){return context(contextName+']['+subContextName,onOff);};api.on=onOff.on;api.off=onOff.off;return api;};var logger=context('filestack',onOff);var initializeGlobalNamespace=function initializeGlobalNamespace(){var namespace=void 0;if((typeof window==='undefined'?'undefined':_typeof(window))==='object'){namespace=window.filestackInternals;if(!namespace){namespace={};window.filestackInternals=namespace;}if(!namespace.logger){namespace.logger=logger;onOff.init();}}return namespace;};initializeGlobalNamespace();var commonjsGlobal=typeof globalThis!=='undefined'?globalThis:typeof window!=='undefined'?window:typeof global!=='undefined'?global:typeof self!=='undefined'?self:{};function unwrapExports(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,'default')?x['default']:x;}function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}var vueSessionstorage_min=createCommonjsModule(function(module,exports){!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(i){if(s[i])return s[i].exports;var n=s[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports;}var s={};return e.m=t,e.c=s,e.p="",e(0);}([function(t,e,s){function i(t){return t&&t.__esModule?t:{"default":t};}var n=s(2),o=i(n),r=s(1),u=i(r);window.sessionStorage||(window.sessionStorage=u["default"]);var a={install:function install(t,e){t.prototype.$session=new o["default"]();}};t.exports=a;},function(t,e){function s(){this.data={},this.setItem=function(t,e){this.data[t]=e;},this.getItem=function(t){return this.data[t];};}t.exports=s;},function(t,e){function s(){this.key=null,this.__getRandomString=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e="";t--;){e+=String.fromCharCode(48+~~(42*Math.random()));}return e;},this.__getKey=function(){var t=window.sessionStorage.getItem("sessionKey");t||(t=this.__getRandomString(),window.sessionStorage.setItem("sessionKey",t)),this.key=t;},this.__get=function(){this.key||this.__getKey();var t=JSON.parse(window.sessionStorage.getItem(this.key));return t||{};},this.get=function(t){var e=this.__get();return e[t];},this.__set=function(t){this.key||this.__getKey(),window.sessionStorage.setItem(this.key,JSON.stringify(t));},this.set=function(t,e){var s=this.__get();s[t]=e,this.__set(s);},this.exists=function(t){var e=this.__get();return t in e;},this.remove=function(t){var e=this.__get();delete e[t],this.__set(e);},this.clear=function(){this.__set({});};}t.exports=s;}]);});});var VueSessionStorage=unwrapExports(vueSessionstorage_min);var vueSessionstorage_min_1=vueSessionstorage_min.VueSessionStorage;/**
   * lodash 3.0.0 (Custom Build) <https://lodash.com/>
   * Build: `lodash modern modularize exports="npm" -o ./`
   * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
   * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
   * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Available under MIT license <https://lodash.com/license>
   */ /** Used to match template delimiters. */var reInterpolate=/<%=([\s\S]+?)%>/g;var lodash__reinterpolate=reInterpolate;/**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ /** Used as references for various `Number` constants. */var INFINITY=1/0;/** `Object#toString` result references. */var nullTag='[object Null]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]';/** Used to match HTML entities and HTML characters. */var reUnescapedHtml=/[&<>"']/g,reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g;/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Detect free variable `global` from Node.js. */var freeGlobal=_typeof2(commonjsGlobal)=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof2(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}/**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$1=objectProto.hasOwnProperty;/**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var Symbol$1=root.Symbol,symToStringTag=Symbol$1?Symbol$1.toStringTag:undefined;/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol$1?Symbol$1.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
   * By default, the template delimiters used by lodash are like those in
   * embedded Ruby (ERB) as well as ES2015 template strings. Change the
   * following template settings to use alternative delimiters.
   *
   * @static
   * @memberOf _
   * @type {Object}
   */var templateSettings={/**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */'escape':reEscape,/**
     * Used to detect code to be evaluated.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */'evaluate':reEvaluate,/**
     * Used to detect `data` property values to inject.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */'interpolate':lodash__reinterpolate,/**
     * Used to reference the data object in the template text.
     *
     * @memberOf _.templateSettings
     * @type {string}
     */'variable':'',/**
     * Used to import variables into the compiled template.
     *
     * @memberOf _.templateSettings
     * @type {Object}
     */'imports':{/**
       * A reference to the `lodash` function.
       *
       * @memberOf _.templateSettings.imports
       * @type {Function}
       */'_':{'escape':escape$1}}};/**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */function getRawTag(value){var isOwn=hasOwnProperty$1.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */function objectToString(value){return nativeObjectToString.call(value);}/**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */var isArray=Array.isArray;/**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */function isObjectLike(value){return value!=null&&_typeof2(value)=='object';}/**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */function isSymbol(value){return _typeof2(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */function toString$2(value){return value==null?'':baseToString(value);}/**
   * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
   * corresponding HTML entities.
   *
   * **Note:** No other characters are escaped. To escape additional
   * characters use a third-party library like [_he_](https://mths.be/he).
   *
   * Though the ">" character is escaped for symmetry, characters like
   * ">" and "/" don't need escaping in HTML and have no special meaning
   * unless they're part of a tag or unquoted attribute value. See
   * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
   * (under "semi-related fun fact") for more details.
   *
   * When working with HTML you should always
   * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
   * XSS vectors.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escape('fred, barney, & pebbles');
   * // => 'fred, barney, &amp; pebbles'
   */function escape$1(string){string=toString$2(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}var lodash_templatesettings=templateSettings;var lodash_template=createCommonjsModule(function(module,exports){/**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ /** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r',"\u2028":'u2028',"\u2029":'u2029'};/** Detect free variable `global` from Node.js. */var freeGlobal=_typeof2(commonjsGlobal)=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof2(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&'object'=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function baseUnary(func){return function(value){return func(value);};}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */function getValue(object,key){return object==null?undefined:object[key];}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol=root.Symbol,getPrototype=overArg(Object.getPrototypeOf,Object),propertyIsEnumerable=objectProto.propertyIsEnumerable,symToStringTag=_Symbol?_Symbol.toStringTag:undefined;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeNow=Date.now;/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}/**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
   * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
   * of source objects to the destination object for all destination properties
   * that resolve to `undefined`.
   *
   * @private
   * @param {*} objValue The destination value.
   * @param {*} srcValue The source value.
   * @param {string} key The key of the property to assign.
   * @param {Object} object The parent object of `objValue`.
   * @returns {*} Returns the value to assign.
   */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */function isIndex(value,length){var type=_typeof2(value);length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=_typeof2(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */function objectToString(value){return nativeObjectToString.call(value);}/**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */var setToString=shortOut(baseSetToString);/**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}/**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */function eq(value,other){return value===other||value!==value&&other!==other;}/**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */var isArray=Array.isArray;/**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */var isBuffer=nativeIsBuffer||stubFalse;/**
   * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
   * `SyntaxError`, `TypeError`, or `URIError` object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
   * @example
   *
   * _.isError(new Error);
   * // => true
   *
   * _.isError(Error);
   * // => false
   */function isError(value){if(!isObjectLike(value)){return false;}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value);}/**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */function isObject(value){var type=_typeof2(value);return value!=null&&(type=='object'||type=='function');}/**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */function isObjectLike(value){return value!=null&&_typeof2(value)=='object';}/**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */function isSymbol(value){return _typeof2(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */function toString(value){return value==null?'':baseToString(value);}/**
   * This method is like `_.assignIn` except that it accepts `customizer`
   * which is invoked to produce the assigned values. If `customizer` returns
   * `undefined`, assignment is handled by the method instead. The `customizer`
   * is invoked with five arguments: (objValue, srcValue, key, object, source).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias extendWith
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} [customizer] The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @see _.assignWith
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   return _.isUndefined(objValue) ? srcValue : objValue;
   * }
   *
   * var defaults = _.partialRight(_.assignInWith, customizer);
   *
   * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
   * Creates a compiled template function that can interpolate data properties
   * in "interpolate" delimiters, HTML-escape interpolated data properties in
   * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
   * properties may be accessed as free variables in the template. If a setting
   * object is given, it takes precedence over `_.templateSettings` values.
   *
   * **Note:** In the development build `_.template` utilizes
   * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
   * for easier debugging.
   *
   * For more information on precompiling templates see
   * [lodash's custom builds documentation](https://lodash.com/custom-builds).
   *
   * For more information on Chrome extension sandboxes see
   * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category String
   * @param {string} [string=''] The template string.
   * @param {Object} [options={}] The options object.
   * @param {RegExp} [options.escape=_.templateSettings.escape]
   *  The HTML "escape" delimiter.
   * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
   *  The "evaluate" delimiter.
   * @param {Object} [options.imports=_.templateSettings.imports]
   *  An object to import into the template as free variables.
   * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
   *  The "interpolate" delimiter.
   * @param {string} [options.sourceURL='templateSources[n]']
   *  The sourceURL of the compiled template.
   * @param {string} [options.variable='obj']
   *  The data object variable name.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Function} Returns the compiled template function.
   * @example
   *
   * // Use the "interpolate" delimiter to create a compiled template.
   * var compiled = _.template('hello <%= user %>!');
   * compiled({ 'user': 'fred' });
   * // => 'hello fred!'
   *
   * // Use the HTML "escape" delimiter to escape data property values.
   * var compiled = _.template('<b><%- value %></b>');
   * compiled({ 'value': '<script>' });
   * // => '<b>&lt;script&gt;</b>'
   *
   * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
   * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
   * compiled({ 'users': ['fred', 'barney'] });
   * // => '<li>fred</li><li>barney</li>'
   *
   * // Use the internal `print` function in "evaluate" delimiters.
   * var compiled = _.template('<% print("hello " + user); %>!');
   * compiled({ 'user': 'barney' });
   * // => 'hello barney!'
   *
   * // Use the ES template literal delimiter as an "interpolate" delimiter.
   * // Disable support by replacing the "interpolate" delimiter.
   * var compiled = _.template('hello ${ user }!');
   * compiled({ 'user': 'pebbles' });
   * // => 'hello pebbles!'
   *
   * // Use backslashes to treat delimiters as plain text.
   * var compiled = _.template('<%= "\\<%- value %\\>" %>');
   * compiled({ 'value': 'ignored' });
   * // => '<%- value %>'
   *
   * // Use the `imports` option to import `jQuery` as `jq`.
   * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
   * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
   * compiled({ 'users': ['fred', 'barney'] });
   * // => '<li>fred</li><li>barney</li>'
   *
   * // Use the `sourceURL` option to specify a custom sourceURL for the template.
   * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
   * compiled(data);
   * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
   *
   * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
   * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
   * compiled.source;
   * // => function(data) {
   * //   var __t, __p = '';
   * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
   * //   return __p;
   * // }
   *
   * // Use custom template delimiters.
   * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
   * var compiled = _.template('hello {{ user }}!');
   * compiled({ 'user': 'mustache' });
   * // => 'hello mustache!'
   *
   * // Use the `source` property to inline compiled templates for meaningful
   * // line numbers in error messages and stack traces.
   * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
   *   var JST = {\
   *     "main": ' + _.template(mainText).source + '\
   *   };\
   * ');
   */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=lodash_templatesettings.imports._.templateSettings||lodash_templatesettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===lodash__reinterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
// The sourceURL gets injected into the source that's eval-ed, so be careful
// with lookup (in case of e.g. prototype pollution), and strip newlines if any.
// A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.
var sourceURL=hasOwnProperty.call(options,'sourceURL')?'//# sourceURL='+(options.sourceURL+'').replace(/[\r\n]/g,' ')+'\n':'';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
// Like with sourceURL, we take care to not check the option's prototype,
// as this configuration is a code injection vector.
var variable=hasOwnProperty.call(options,'variable')&&options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result;}return result;}/**
   * Attempts to invoke `func`, returning either the result or the caught error
   * object. Any additional arguments are provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Util
   * @param {Function} func The function to attempt.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {*} Returns the `func` result or error object.
   * @example
   *
   * // Avoid throwing errors for invalid selectors.
   * var elements = _.attempt(function(selector) {
   *   return document.querySelectorAll(selector);
   * }, '>_>');
   *
   * if (_.isError(elements)) {
   *   elements = [];
   * }
   */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});/**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */function constant(value){return function(){return value;};}/**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */function identity(value){return value;}/**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */function stubFalse(){return false;}module.exports=template;});// We need a vue instance to handle reactivity
var vm=null;// The plugin
var VueTranslate={// Install the method
install:function install(Vue){var _Vue$mixin;var version=Vue.version[0];if(!vm){vm=new Vue({data:function data(){return{current:'',locales:{}};},computed:{// Current selected language
lang:function lang(){return this.current;},// Current locale values
locale:function locale(){if(!this.locales[this.current])return null;return this.locales[this.current];}},methods:{// Set a language as current
setLang:function setLang(val){if(this.current!==val){if(this.current===''){this.$emit('language:init',val);}else{this.$emit('language:changed',val);}}this.current=val;this.$emit('language:modified',val);},// Set a locale tu use
setLocales:function setLocales(locales){if(!locales){return;}var newLocale=Object.create(this.locales);for(var key in locales){if(!locales.hasOwnProperty(key)){continue;}if(!newLocale[key]){newLocale[key]={};}Vue.util.extend(newLocale[key],locales[key]);}this.locales=Object.create(newLocale);this.$emit('locales:loaded',locales);},text:function text(t,params){if(params){return lodash_template(this.locale[t]||t,{interpolate:/{([\s\S]+?)}/g})(params);}return this.locale[t]||t;}}});Vue.prototype.$translate=vm;}// Mixin to read locales and add the translation method and directive
Vue.mixin((_Vue$mixin={},_defineProperty(_Vue$mixin,version==='1'?'init':'beforeCreate',function(){this.$translate.setLocales(this.$options.locales);}),_defineProperty(_Vue$mixin,"methods",{// An alias for the .$translate.text method
t:function t(_t,p){return this.$translate.text(_t,p);}}),_defineProperty(_Vue$mixin,"directives",{translate:function translate(el){if(!el.$translateKey)el.$translateKey=el.innerText;var text=this.$translate.text(el.$translateKey);el.innerText=text;}.bind(vm)}),_Vue$mixin));// Global method for loading locales
Vue.locales=function(locales){vm.$translate.setLocales(locales);};// Global method for setting languages
Vue.lang=function(lang){vm.$translate.setLang(lang);};}};/**
   * vuex v3.1.2
   * (c) 2019 Evan You
   * @license MIT
   */function applyMixin(Vue){var version=Number(Vue.version.split('.')[0]);if(version>=2){Vue.mixin({beforeCreate:vuexInit});}else{// override init and inject vuex init procedure
// for 1.x backwards compatibility.
var _init=Vue.prototype._init;Vue.prototype._init=function(options){if(options===void 0)options={};options.init=options.init?[vuexInit].concat(options.init):vuexInit;_init.call(this,options);};}/**
     * Vuex init hook, injected into each instances init hooks list.
     */function vuexInit(){var options=this.$options;// store injection
if(options.store){this.$store=typeof options.store==='function'?options.store():options.store;}else if(options.parent&&options.parent.$store){this.$store=options.parent.$store;}}}var target$2=typeof window!=='undefined'?window:typeof global!=='undefined'?global:{};var devtoolHook=target$2.__VUE_DEVTOOLS_GLOBAL_HOOK__;function devtoolPlugin(store){if(!devtoolHook){return;}store._devtoolHook=devtoolHook;devtoolHook.emit('vuex:init',store);devtoolHook.on('vuex:travel-to-state',function(targetState){store.replaceState(targetState);});store.subscribe(function(mutation,state){devtoolHook.emit('vuex:mutation',mutation,state);});}/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */ /**
   * forEach for object
   */function forEachValue(obj,fn){Object.keys(obj).forEach(function(key){return fn(obj[key],key);});}function isObject$1(obj){return obj!==null&&_typeof2(obj)==='object';}function isPromise$1(val){return val&&typeof val.then==='function';}function assert(condition,msg){if(!condition){throw new Error("[vuex] "+msg);}}function partial(fn,arg){return function(){return fn(arg);};}// Base data struct for store's module, package with some attribute and method
var Module=function Module(rawModule,runtime){this.runtime=runtime;// Store some children item
this._children=Object.create(null);// Store the origin module object which passed by programmer
this._rawModule=rawModule;var rawState=rawModule.state;// Store the origin module's state
this.state=(typeof rawState==='function'?rawState():rawState)||{};};var prototypeAccessors$1={namespaced:{configurable:true}};prototypeAccessors$1.namespaced.get=function(){return!!this._rawModule.namespaced;};Module.prototype.addChild=function addChild(key,module){this._children[key]=module;};Module.prototype.removeChild=function removeChild(key){delete this._children[key];};Module.prototype.getChild=function getChild(key){return this._children[key];};Module.prototype.update=function update(rawModule){this._rawModule.namespaced=rawModule.namespaced;if(rawModule.actions){this._rawModule.actions=rawModule.actions;}if(rawModule.mutations){this._rawModule.mutations=rawModule.mutations;}if(rawModule.getters){this._rawModule.getters=rawModule.getters;}};Module.prototype.forEachChild=function forEachChild(fn){forEachValue(this._children,fn);};Module.prototype.forEachGetter=function forEachGetter(fn){if(this._rawModule.getters){forEachValue(this._rawModule.getters,fn);}};Module.prototype.forEachAction=function forEachAction(fn){if(this._rawModule.actions){forEachValue(this._rawModule.actions,fn);}};Module.prototype.forEachMutation=function forEachMutation(fn){if(this._rawModule.mutations){forEachValue(this._rawModule.mutations,fn);}};Object.defineProperties(Module.prototype,prototypeAccessors$1);var ModuleCollection=function ModuleCollection(rawRootModule){// register root module (Vuex.Store options)
this.register([],rawRootModule,false);};ModuleCollection.prototype.get=function get(path){return path.reduce(function(module,key){return module.getChild(key);},this.root);};ModuleCollection.prototype.getNamespace=function getNamespace(path){var module=this.root;return path.reduce(function(namespace,key){module=module.getChild(key);return namespace+(module.namespaced?key+'/':'');},'');};ModuleCollection.prototype.update=function update$1(rawRootModule){update([],this.root,rawRootModule);};ModuleCollection.prototype.register=function register(path,rawModule,runtime){var this$1=this;if(runtime===void 0)runtime=true;{assertRawModule(path,rawModule);}var newModule=new Module(rawModule,runtime);if(path.length===0){this.root=newModule;}else{var parent=this.get(path.slice(0,-1));parent.addChild(path[path.length-1],newModule);}// register nested modules
if(rawModule.modules){forEachValue(rawModule.modules,function(rawChildModule,key){this$1.register(path.concat(key),rawChildModule,runtime);});}};ModuleCollection.prototype.unregister=function unregister(path){var parent=this.get(path.slice(0,-1));var key=path[path.length-1];if(!parent.getChild(key).runtime){return;}parent.removeChild(key);};function update(path,targetModule,newModule){{assertRawModule(path,newModule);}// update target module
targetModule.update(newModule);// update nested modules
if(newModule.modules){for(var key in newModule.modules){if(!targetModule.getChild(key)){{console.warn("[vuex] trying to add a new module '"+key+"' on hot reloading, "+'manual reload is needed');}return;}update(path.concat(key),targetModule.getChild(key),newModule.modules[key]);}}}var functionAssert={assert:function assert(value){return typeof value==='function';},expected:'function'};var objectAssert={assert:function assert(value){return typeof value==='function'||_typeof2(value)==='object'&&typeof value.handler==='function';},expected:'function or object with "handler" function'};var assertTypes={getters:functionAssert,mutations:functionAssert,actions:objectAssert};function assertRawModule(path,rawModule){Object.keys(assertTypes).forEach(function(key){if(!rawModule[key]){return;}var assertOptions=assertTypes[key];forEachValue(rawModule[key],function(value,type){assert(assertOptions.assert(value),makeAssertionMessage(path,key,type,value,assertOptions.expected));});});}function makeAssertionMessage(path,key,type,value,expected){var buf=key+" should be "+expected+" but \""+key+"."+type+"\"";if(path.length>0){buf+=" in module \""+path.join('.')+"\"";}buf+=" is "+JSON.stringify(value)+".";return buf;}var Vue$1;// bind on install
var Store=function Store(options){var this$1=this;if(options===void 0)options={};// Auto install if it is not done yet and `window` has `Vue`.
// To allow users to avoid auto-installation in some cases,
// this code should be placed here. See #731
if(!Vue$1&&typeof window!=='undefined'&&window.Vue){install(window.Vue);}{assert(Vue$1,"must call Vue.use(Vuex) before creating a store instance.");assert(typeof Promise!=='undefined',"vuex requires a Promise polyfill in this browser.");assert(this instanceof Store,"store must be called with the new operator.");}var plugins=options.plugins;if(plugins===void 0)plugins=[];var strict=options.strict;if(strict===void 0)strict=false;// store internal state
this._committing=false;this._actions=Object.create(null);this._actionSubscribers=[];this._mutations=Object.create(null);this._wrappedGetters=Object.create(null);this._modules=new ModuleCollection(options);this._modulesNamespaceMap=Object.create(null);this._subscribers=[];this._watcherVM=new Vue$1();this._makeLocalGettersCache=Object.create(null);// bind commit and dispatch to self
var store=this;var ref=this;var dispatch=ref.dispatch;var commit=ref.commit;this.dispatch=function boundDispatch(type,payload){return dispatch.call(store,type,payload);};this.commit=function boundCommit(type,payload,options){return commit.call(store,type,payload,options);};// strict mode
this.strict=strict;var state=this._modules.root.state;// init root module.
// this also recursively registers all sub-modules
// and collects all module getters inside this._wrappedGetters
installModule(this,state,[],this._modules.root);// initialize the store vm, which is responsible for the reactivity
// (also registers _wrappedGetters as computed properties)
resetStoreVM(this,state);// apply plugins
plugins.forEach(function(plugin){return plugin(this$1);});var useDevtools=options.devtools!==undefined?options.devtools:Vue$1.config.devtools;if(useDevtools){devtoolPlugin(this);}};var prototypeAccessors$1$1={state:{configurable:true}};prototypeAccessors$1$1.state.get=function(){return this._vm._data.$$state;};prototypeAccessors$1$1.state.set=function(v){{assert(false,"use store.replaceState() to explicit replace store state.");}};Store.prototype.commit=function commit(_type,_payload,_options){var this$1=this;// check object-style commit
var ref=unifyObjectStyle(_type,_payload,_options);var type=ref.type;var payload=ref.payload;var options=ref.options;var mutation={type:type,payload:payload};var entry=this._mutations[type];if(!entry){{console.error("[vuex] unknown mutation type: "+type);}return;}this._withCommit(function(){entry.forEach(function commitIterator(handler){handler(payload);});});this._subscribers.forEach(function(sub){return sub(mutation,this$1.state);});if(options&&options.silent){console.warn("[vuex] mutation type: "+type+". Silent option has been removed. "+'Use the filter functionality in the vue-devtools');}};Store.prototype.dispatch=function dispatch(_type,_payload){var this$1=this;// check object-style dispatch
var ref=unifyObjectStyle(_type,_payload);var type=ref.type;var payload=ref.payload;var action={type:type,payload:payload};var entry=this._actions[type];if(!entry){{console.error("[vuex] unknown action type: "+type);}return;}try{this._actionSubscribers.filter(function(sub){return sub.before;}).forEach(function(sub){return sub.before(action,this$1.state);});}catch(e){{console.warn("[vuex] error in before action subscribers: ");console.error(e);}}var result=entry.length>1?Promise.all(entry.map(function(handler){return handler(payload);})):entry[0](payload);return result.then(function(res){try{this$1._actionSubscribers.filter(function(sub){return sub.after;}).forEach(function(sub){return sub.after(action,this$1.state);});}catch(e){{console.warn("[vuex] error in after action subscribers: ");console.error(e);}}return res;});};Store.prototype.subscribe=function subscribe(fn){return genericSubscribe(fn,this._subscribers);};Store.prototype.subscribeAction=function subscribeAction(fn){var subs=typeof fn==='function'?{before:fn}:fn;return genericSubscribe(subs,this._actionSubscribers);};Store.prototype.watch=function watch(getter,cb,options){var this$1=this;{assert(typeof getter==='function',"store.watch only accepts a function.");}return this._watcherVM.$watch(function(){return getter(this$1.state,this$1.getters);},cb,options);};Store.prototype.replaceState=function replaceState(state){var this$1=this;this._withCommit(function(){this$1._vm._data.$$state=state;});};Store.prototype.registerModule=function registerModule(path,rawModule,options){if(options===void 0)options={};if(typeof path==='string'){path=[path];}{assert(Array.isArray(path),"module path must be a string or an Array.");assert(path.length>0,'cannot register the root module by using registerModule.');}this._modules.register(path,rawModule);installModule(this,this.state,path,this._modules.get(path),options.preserveState);// reset store to update getters...
resetStoreVM(this,this.state);};Store.prototype.unregisterModule=function unregisterModule(path){var this$1=this;if(typeof path==='string'){path=[path];}{assert(Array.isArray(path),"module path must be a string or an Array.");}this._modules.unregister(path);this._withCommit(function(){var parentState=getNestedState(this$1.state,path.slice(0,-1));Vue$1["delete"](parentState,path[path.length-1]);});resetStore(this);};Store.prototype.hotUpdate=function hotUpdate(newOptions){this._modules.update(newOptions);resetStore(this,true);};Store.prototype._withCommit=function _withCommit(fn){var committing=this._committing;this._committing=true;fn();this._committing=committing;};Object.defineProperties(Store.prototype,prototypeAccessors$1$1);function genericSubscribe(fn,subs){if(subs.indexOf(fn)<0){subs.push(fn);}return function(){var i=subs.indexOf(fn);if(i>-1){subs.splice(i,1);}};}function resetStore(store,hot){store._actions=Object.create(null);store._mutations=Object.create(null);store._wrappedGetters=Object.create(null);store._modulesNamespaceMap=Object.create(null);var state=store.state;// init all modules
installModule(store,state,[],store._modules.root,true);// reset vm
resetStoreVM(store,state,hot);}function resetStoreVM(store,state,hot){var oldVm=store._vm;// bind store public getters
store.getters={};// reset local getters cache
store._makeLocalGettersCache=Object.create(null);var wrappedGetters=store._wrappedGetters;var computed={};forEachValue(wrappedGetters,function(fn,key){// use computed to leverage its lazy-caching mechanism
// direct inline function use will lead to closure preserving oldVm.
// using partial to return function with only arguments preserved in closure environment.
computed[key]=partial(fn,store);Object.defineProperty(store.getters,key,{get:function get(){return store._vm[key];},enumerable:true// for local getters
});});// use a Vue instance to store the state tree
// suppress warnings just in case the user has added
// some funky global mixins
var silent=Vue$1.config.silent;Vue$1.config.silent=true;store._vm=new Vue$1({data:{$$state:state},computed:computed});Vue$1.config.silent=silent;// enable strict mode for new vm
if(store.strict){enableStrictMode(store);}if(oldVm){if(hot){// dispatch changes in all subscribed watchers
// to force getter re-evaluation for hot reloading.
store._withCommit(function(){oldVm._data.$$state=null;});}Vue$1.nextTick(function(){return oldVm.$destroy();});}}function installModule(store,rootState,path,module,hot){var isRoot=!path.length;var namespace=store._modules.getNamespace(path);// register in namespace map
if(module.namespaced){if(store._modulesNamespaceMap[namespace]&&"development"!=='production'){console.error("[vuex] duplicate namespace "+namespace+" for the namespaced module "+path.join('/'));}store._modulesNamespaceMap[namespace]=module;}// set state
if(!isRoot&&!hot){var parentState=getNestedState(rootState,path.slice(0,-1));var moduleName=path[path.length-1];store._withCommit(function(){{if(moduleName in parentState){console.warn("[vuex] state field \""+moduleName+"\" was overridden by a module with the same name at \""+path.join('.')+"\"");}}Vue$1.set(parentState,moduleName,module.state);});}var local=module.context=makeLocalContext(store,namespace,path);module.forEachMutation(function(mutation,key){var namespacedType=namespace+key;registerMutation(store,namespacedType,mutation,local);});module.forEachAction(function(action,key){var type=action.root?key:namespace+key;var handler=action.handler||action;registerAction(store,type,handler,local);});module.forEachGetter(function(getter,key){var namespacedType=namespace+key;registerGetter(store,namespacedType,getter,local);});module.forEachChild(function(child,key){installModule(store,rootState,path.concat(key),child,hot);});}/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */function makeLocalContext(store,namespace,path){var noNamespace=namespace==='';var local={dispatch:noNamespace?store.dispatch:function(_type,_payload,_options){var args=unifyObjectStyle(_type,_payload,_options);var payload=args.payload;var options=args.options;var type=args.type;if(!options||!options.root){type=namespace+type;if(!store._actions[type]){console.error("[vuex] unknown local action type: "+args.type+", global type: "+type);return;}}return store.dispatch(type,payload);},commit:noNamespace?store.commit:function(_type,_payload,_options){var args=unifyObjectStyle(_type,_payload,_options);var payload=args.payload;var options=args.options;var type=args.type;if(!options||!options.root){type=namespace+type;if(!store._mutations[type]){console.error("[vuex] unknown local mutation type: "+args.type+", global type: "+type);return;}}store.commit(type,payload,options);}};// getters and state object must be gotten lazily
// because they will be changed by vm update
Object.defineProperties(local,{getters:{get:noNamespace?function(){return store.getters;}:function(){return makeLocalGetters(store,namespace);}},state:{get:function get(){return getNestedState(store.state,path);}}});return local;}function makeLocalGetters(store,namespace){if(!store._makeLocalGettersCache[namespace]){var gettersProxy={};var splitPos=namespace.length;Object.keys(store.getters).forEach(function(type){// skip if the target getter is not match this namespace
if(type.slice(0,splitPos)!==namespace){return;}// extract local getter type
var localType=type.slice(splitPos);// Add a port to the getters proxy.
// Define as getter property because
// we do not want to evaluate the getters in this time.
Object.defineProperty(gettersProxy,localType,{get:function get(){return store.getters[type];},enumerable:true});});store._makeLocalGettersCache[namespace]=gettersProxy;}return store._makeLocalGettersCache[namespace];}function registerMutation(store,type,handler,local){var entry=store._mutations[type]||(store._mutations[type]=[]);entry.push(function wrappedMutationHandler(payload){handler.call(store,local.state,payload);});}function registerAction(store,type,handler,local){var entry=store._actions[type]||(store._actions[type]=[]);entry.push(function wrappedActionHandler(payload){var res=handler.call(store,{dispatch:local.dispatch,commit:local.commit,getters:local.getters,state:local.state,rootGetters:store.getters,rootState:store.state},payload);if(!isPromise$1(res)){res=Promise.resolve(res);}if(store._devtoolHook){return res["catch"](function(err){store._devtoolHook.emit('vuex:error',err);throw err;});}else{return res;}});}function registerGetter(store,type,rawGetter,local){if(store._wrappedGetters[type]){{console.error("[vuex] duplicate getter key: "+type);}return;}store._wrappedGetters[type]=function wrappedGetter(store){return rawGetter(local.state,// local state
local.getters,// local getters
store.state,// root state
store.getters// root getters
);};}function enableStrictMode(store){store._vm.$watch(function(){return this._data.$$state;},function(){{assert(store._committing,"do not mutate vuex store state outside mutation handlers.");}},{deep:true,sync:true});}function getNestedState(state,path){return path.length?path.reduce(function(state,key){return state[key];},state):state;}function unifyObjectStyle(type,payload,options){if(isObject$1(type)&&type.type){options=payload;payload=type;type=type.type;}{assert(typeof type==='string',"expects string as the type, but found "+_typeof2(type)+".");}return{type:type,payload:payload,options:options};}function install(_Vue){if(Vue$1&&_Vue===Vue$1){{console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');}return;}Vue$1=_Vue;applyMixin(Vue$1);}/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */var mapState=normalizeNamespace(function(namespace,states){var res={};if(!isValidMap(states)){console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');}normalizeMap(states).forEach(function(ref){var key=ref.key;var val=ref.val;res[key]=function mappedState(){var state=this.$store.state;var getters=this.$store.getters;if(namespace){var module=getModuleByNamespace(this.$store,'mapState',namespace);if(!module){return;}state=module.context.state;getters=module.context.getters;}return typeof val==='function'?val.call(this,state,getters):state[val];};// mark vuex getter for devtools
res[key].vuex=true;});return res;});/**
   * Reduce the code which written in Vue.js for committing the mutation
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
   * @return {Object}
   */var mapMutations=normalizeNamespace(function(namespace,mutations){var res={};if(!isValidMap(mutations)){console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');}normalizeMap(mutations).forEach(function(ref){var key=ref.key;var val=ref.val;res[key]=function mappedMutation(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}// Get the commit method from store
var commit=this.$store.commit;if(namespace){var module=getModuleByNamespace(this.$store,'mapMutations',namespace);if(!module){return;}commit=module.context.commit;}return typeof val==='function'?val.apply(this,[commit].concat(args)):commit.apply(this.$store,[val].concat(args));};});return res;});/**
   * Reduce the code which written in Vue.js for getting the getters
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} getters
   * @return {Object}
   */var mapGetters=normalizeNamespace(function(namespace,getters){var res={};if(!isValidMap(getters)){console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');}normalizeMap(getters).forEach(function(ref){var key=ref.key;var val=ref.val;// The namespace has been mutated by normalizeNamespace
val=namespace+val;res[key]=function mappedGetter(){if(namespace&&!getModuleByNamespace(this.$store,'mapGetters',namespace)){return;}if(!(val in this.$store.getters)){console.error("[vuex] unknown getter: "+val);return;}return this.$store.getters[val];};// mark vuex getter for devtools
res[key].vuex=true;});return res;});/**
   * Reduce the code which written in Vue.js for dispatch the action
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
   * @return {Object}
   */var mapActions=normalizeNamespace(function(namespace,actions){var res={};if(!isValidMap(actions)){console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');}normalizeMap(actions).forEach(function(ref){var key=ref.key;var val=ref.val;res[key]=function mappedAction(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}// get dispatch function from store
var dispatch=this.$store.dispatch;if(namespace){var module=getModuleByNamespace(this.$store,'mapActions',namespace);if(!module){return;}dispatch=module.context.dispatch;}return typeof val==='function'?val.apply(this,[dispatch].concat(args)):dispatch.apply(this.$store,[val].concat(args));};});return res;});/**
   * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
   * @param {String} namespace
   * @return {Object}
   */var createNamespacedHelpers=function createNamespacedHelpers(namespace){return{mapState:mapState.bind(null,namespace),mapGetters:mapGetters.bind(null,namespace),mapMutations:mapMutations.bind(null,namespace),mapActions:mapActions.bind(null,namespace)};};/**
   * Normalize the map
   * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
   * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
   * @param {Array|Object} map
   * @return {Object}
   */function normalizeMap(map){if(!isValidMap(map)){return[];}return Array.isArray(map)?map.map(function(key){return{key:key,val:key};}):Object.keys(map).map(function(key){return{key:key,val:map[key]};});}/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */function isValidMap(map){return Array.isArray(map)||isObject$1(map);}/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */function normalizeNamespace(fn){return function(namespace,map){if(typeof namespace!=='string'){map=namespace;namespace='';}else if(namespace.charAt(namespace.length-1)!=='/'){namespace+='/';}return fn(namespace,map);};}/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */function getModuleByNamespace(store,helper,namespace){var module=store._modulesNamespaceMap[namespace];if(!module){console.error("[vuex] module namespace not found in "+helper+"(): "+namespace);}return module;}var index_esm={Store:Store,install:install,version:'3.1.2',mapState:mapState,mapMutations:mapMutations,mapGetters:mapGetters,mapActions:mapActions,createNamespacedHelpers:createNamespacedHelpers};// Takes: https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
// Returns: https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
var getFileEntryFromDataTransferItem=function getFileEntryFromDataTransferItem(file){if(typeof file.getAsEntry==='function'){return file.getAsEntry();}else if(typeof file.webkitGetAsEntry==='function'){return file.webkitGetAsEntry();}return undefined;};var isWantedFile=function isWantedFile(filename){var unwantedFiles=[// Stores thumbnails on OSX
'.DS_Store'];return unwantedFiles.indexOf(filename)===-1;};var getPath=function getPath(path,name){return"".concat(path,"/").concat(name);};var extractFromItems=function extractFromItems(items){var files=[];var traverseDirectoryTree=function traverseDirectoryTree(fileEntry){var path=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var promises=[];return new Promise(function(resolve){if(fileEntry.isDirectory){var reader=fileEntry.createReader();var readFiles=function readFiles(){reader.readEntries(function(dirContent){dirContent.forEach(function(dirItem){promises.push(traverseDirectoryTree(dirItem,getPath(path,fileEntry.name)));});if(dirContent.length){readFiles();}else{Promise.all(promises).then(resolve);}});};readFiles();}else if(fileEntry.isFile){fileEntry.file(function(file){if(isWantedFile(file.name)){file.path=getPath(path,file.name);files.push(file);}resolve();});}});};var extractUrl=function extractUrl(item){return new Promise(function(resolve){item.getAsString(function(url){files.push({url:url,source:'dragged-from-web'});resolve();});});};var promises=[];for(var i=0;i<items.length;i+=1){var item=items[i];if(item.kind==='file'&&item.type&&item.type!=='application/x-moz-file'){var _file=item.getAsFile();if(_file){// It is a simple file
files.push(_file);promises.push(Promise.resolve());}}else if(item.kind==='file'){// It's not a simple file, possibly folder, try to scout its content.
var _file2=getFileEntryFromDataTransferItem(item);if(_file2){promises.push(traverseDirectoryTree(_file2));}}else if(item.kind==='string'&&item.type==='text/uri-list'){promises.push(extractUrl(item));}}return Promise.all(promises).then(function(){return files;});};var extractFromFiles=function extractFromFiles(fileList){return new Promise(function(resolve){var files=[];for(var i=0;i<fileList.length;i+=1){files.push(fileList[i]);}resolve(files);});};// Takses: https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
// Returns Array of possible file representations:
// 1. File class instance - https://developer.mozilla.org/en-US/docs/Web/API/File
// 2. Blob class instance - https://developer.mozilla.org/en-US/docs/Web/API/Blob
// 3. Object with url to resource - { url: 'https://files.com/file.jpg' }
var extractFilesFromDataTransfer=function extractFilesFromDataTransfer(dataTransfer){// if there is no dataTransfer object, just return empty promise
if(!dataTransfer){return Promise.resolve([]);}if(dataTransfer.items){return extractFromItems(dataTransfer.items);}if(dataTransfer.files){return extractFromFiles(dataTransfer.files);}// Safety fallback if this dataTransfer has nothing we can make sense of.
return Promise.resolve([]);};var DISPLAY_MODE_OVERLAY='overlay';var DISPLAY_MODE_INLINE='inline';var DISPLAY_MODE_DROPPANE='dropPane';var isNumber=function isNumber(thing){return typeof thing==='number';};var isObject$2=function isObject$2(thing){return _typeof2(thing)==='object'&&thing!==null&&Array.isArray(thing)===false;};var isInteger=function isInteger(n){return n%1===0;};var parsers={dropPane:function dropPane(_dropPane){return _dropPane;},displayMode:function displayMode(mode){if([DISPLAY_MODE_OVERLAY,DISPLAY_MODE_INLINE].indexOf(mode)<-1){throw new Error('Wrong display mode');}return mode||DISPLAY_MODE_OVERLAY;},globalSearchOrder:function globalSearchOrder(order){return order.toLowerCase();},websearch:function websearch(attr){return attr;},/**
     * @deprecated
     */'dropPane.id':function dropPaneId(id){return id;},'dropPane.overlay':function dropPaneOverlay(overlay){return overlay;},'dropPane.onDragEnter':function dropPaneOnDragEnter(onDragEnter){if(typeof onDragEnter!=='function'){throw new Error('Invalid value for "dropPane.onDragEnter" config option');}return onDragEnter;},'dropPane.onDragLeave':function dropPaneOnDragLeave(onDragLeave){if(typeof onDragLeave!=='function'){throw new Error('Invalid value for "dropPane.onDragLeave" config option');}return onDragLeave;},'dropPane.onDragOver':function dropPaneOnDragOver(onDragOver){if(typeof onDragOver!=='function'){throw new Error('Invalid value for "dropPane.onDragOver" config option');}return onDragOver;},'dropPane.onDrop':function dropPaneOnDrop(onDrop){if(typeof onDrop!=='function'){throw new Error('Invalid value for "dropPane.onDrop" config option');}return onDrop;},'dropPane.onSuccess':function dropPaneOnSuccess(onSuccess){if(typeof onSuccess!=='function'){throw new Error('Invalid value for "dropPane.onSuccess" config option');}return onSuccess;},'dropPane.onError':function dropPaneOnError(onError){if(typeof onError!=='function'){throw new Error('Invalid value for "dropPane.onError" config option');}return onError;},'dropPane.onProgress':function dropPaneOnProgress(onProgress){if(typeof onProgress!=='function'){throw new Error('Invalid value for "dropPane.onProgress" config option');}return onProgress;},'dropPane.onClick':function dropPaneOnClick(onClick){if(typeof onClick!=='function'){throw new Error('Invalid value for "dropPane.onClick" config option');}return onClick;},'dropPane.disableClick':function dropPaneDisableClick(disableClick){if(typeof disableClick!=='boolean'){throw new Error('Invalid value for "dropPane.disableClick" config option');}return disableClick;},'dropPane.showIcon':function dropPaneShowIcon(showIcon){if(typeof showIcon!=='boolean'){throw new Error('Invalid value for "dropPane.showIcon" config option');}return showIcon;},'dropPane.showProgress':function dropPaneShowProgress(showProgress){if(typeof showProgress!=='boolean'){throw new Error('Invalid value for "dropPane.showProgress" config option');}return showProgress;},'dropPane.customText':function dropPaneCustomText(customText){if(typeof customText!=='string'){throw new Error('Invalid value for "dropPane.customText" config option');}return customText;},'dropPane.cropFiles':function dropPaneCropFiles(cropFiles){if(typeof cropFiles!=='boolean'){throw new Error('Invalid value for "dropPane.cropFiles" config option');}return cropFiles;},cropFiles:function cropFiles(_cropFiles){return _cropFiles;},rootId:function rootId(_rootId){if(typeof _rootId!=='string'){throw new Error('Invalid value for "rootId" config option');}return _rootId;},cleanupImageExif:function cleanupImageExif(cleanup){if(typeof cleanup!=='boolean'&&!(cleanup instanceof Object&&(cleanup.keepOrientation!==undefined||cleanup.keepICCandAPP!==undefined))){throw new Error('Invalid value for "cleanupImageExif" config option');}return cleanup;},fromSources:function fromSources(sourcesDefinedByUser){if(typeof sourcesDefinedByUser==='string'){sourcesDefinedByUser=[sourcesDefinedByUser];}sourcesDefinedByUser.forEach(function(source){if(typeof source==='string'){return;}if((!source.name||!source.icon)&&!(source.name==='globalsearch')){throw new Error("Custom source should have name and icon");}});return sourcesDefinedByUser.filter(function(s){return!s.deprecated;});},supportEmail:function supportEmail(_supportEmail){if(typeof _supportEmail!=='string'&&_supportEmail!==''){throw new Error('Invalid value for "supportEmail" config option');}else if(_supportEmail&&_supportEmail.length<5){throw new Error('Invalid value for "supportEmail" config option');}return _supportEmail;},customSourceContainer:function customSourceContainer(container){if(typeof container!=='string'){throw new Error('Invalid value for "customSourceContainer" config option');}return container;},customSourceName:function customSourceName(name){if(typeof name!=='string'){throw new Error('Invalid value for "customSourceName" config option');}return name;},customSourcePath:function customSourcePath(path){if(typeof path!=='string'){throw new Error('Invalid value for "customSourcePath" config option');}return path;},accept:function accept(acceptDefinedByUser){if(typeof acceptDefinedByUser==='string'){acceptDefinedByUser=[acceptDefinedByUser];}acceptDefinedByUser.forEach(function(oneOfAcceptValues){if(typeof oneOfAcceptValues!=='string'){throw new Error('Invalid value for "accept" config option');}});return acceptDefinedByUser;},acceptFn:function acceptFn(acceptFunc){if(typeof acceptFunc!=='function'){throw new Error('Invalid acceptFn argument. Function required');}return acceptFunc;},concurrency:function concurrency(_concurrency){if(typeof _concurrency!=='number'||!isInteger(_concurrency)||_concurrency<1){throw new Error('Invalid value for "concurrency" config option');}return _concurrency;},maxSize:function maxSize(maxSizeDefinedByUser){if(typeof maxSizeDefinedByUser!=='number'||!isInteger(maxSizeDefinedByUser)||maxSizeDefinedByUser<0){throw new Error('Invalid value for "maxSize" config option');}return maxSizeDefinedByUser;},minFiles:function minFiles(minFilesDefinedByUser){if(typeof minFilesDefinedByUser!=='number'||!isInteger(minFilesDefinedByUser)||minFilesDefinedByUser<0){throw new Error('Invalid value for "minFiles" config option');}return minFilesDefinedByUser;},failOverMaxFiles:function failOverMaxFiles(_failOverMaxFiles){if(typeof _failOverMaxFiles!=='boolean'){throw new Error('Invalid value for "failOverMaxFiles" config option');}return _failOverMaxFiles;},maxFiles:function maxFiles(maxFilesDefinedByUser){if(typeof maxFilesDefinedByUser!=='number'||!isInteger(maxFilesDefinedByUser)||maxFilesDefinedByUser<0){throw new Error('Invalid value for "maxFiles" config option');}return maxFilesDefinedByUser;},startUploadingWhenMaxFilesReached:function startUploadingWhenMaxFilesReached(startUploadingWhenMaxFilesReachedDefinedByUser){if(typeof startUploadingWhenMaxFilesReachedDefinedByUser!=='boolean'){throw new Error('Invalid value for "startUploadingWhenMaxFilesReached" config option');}return startUploadingWhenMaxFilesReachedDefinedByUser;},loadCss:function loadCss(loadCssDefinedByUser){if(typeof loadCssDefinedByUser==='boolean'&&loadCssDefinedByUser===false||typeof loadCssDefinedByUser==='string'){return loadCssDefinedByUser;}throw new Error('Invalid value for "loadCss" config option');},lang:function lang(langDefinedByUser){if(typeof langDefinedByUser==='boolean'&&langDefinedByUser===false||typeof langDefinedByUser==='string'){return langDefinedByUser;}throw new Error('Invalid value for "lang" config option');},viewType:function viewType(_viewType){if(['list','grid'].indexOf(_viewType)===-1){throw new Error('Invalid view type. Can be "list" or "grid"');}return _viewType;},customText:function customText(_customText){if(isObject$2(_customText)){return _customText;}throw new Error('Invalid value for "customText" config option');},storeTo:function storeTo(storeToDefinedByUser){if(isObject$2(storeToDefinedByUser)){return storeToDefinedByUser;}throw new Error('Invalid value for "storeTo" config option');},uploadConfig:function uploadConfig(_uploadConfig){if(isObject$2(_uploadConfig)){return _uploadConfig;}throw new Error('Invalid value for "uploadConfig" config option');},hideModalWhenUploading:function hideModalWhenUploading(hideWhenUploadingDefinedByUser){if(typeof hideWhenUploadingDefinedByUser!=='boolean'){throw new Error('Invalid value for "hideModalWhenUploading" config option');}return hideWhenUploadingDefinedByUser;},uploadInBackground:function uploadInBackground(uploadInBackgroundDefinedByUser){if(typeof uploadInBackgroundDefinedByUser!=='boolean'){throw new Error('Invalid value for "uploadInBackground" config option');}return uploadInBackgroundDefinedByUser;},allowManualRetry:function allowManualRetry(_allowManualRetry){if(typeof _allowManualRetry!=='boolean'){throw new Error('Invalid value for "allowManualRetry" config option');}return _allowManualRetry;},disableTransformer:function disableTransformer(enableTransformerDefinedByUser){if(typeof enableTransformerDefinedByUser!=='boolean'){throw new Error('Invalid value for "disableTransformer" config option');}return enableTransformerDefinedByUser;},disableThumbnails:function disableThumbnails(_disableThumbnails){if(typeof _disableThumbnails!=='boolean'){throw new Error('Invalid value for "disableThumbnails" config option');}return _disableThumbnails;},disableStorageKey:function disableStorageKey(disableKey){if(typeof disableKey!=='boolean'){throw new Error('Invalid value for "disableStorageKey" config option');}return disableKey;},onUploadStarted:function onUploadStarted(onUploadStartedDefinedByUser){if(typeof onUploadStartedDefinedByUser!=='function'){throw new Error('Invalid value for "onUploadStarted" config option');}return onUploadStartedDefinedByUser;},onFileSelected:function onFileSelected(onFileSelectedDefinedByUser){if(typeof onFileSelectedDefinedByUser!=='function'){throw new Error('Invalid value for "onFileSelected" config option');}return onFileSelectedDefinedByUser;},onFileUploadCancel:function onFileUploadCancel(cancelFunction){if(typeof cancelFunction!=='function'){throw new Error('Invalid value for "onFileUploadCancel" config option');}return cancelFunction;},onFileUploadStarted:function onFileUploadStarted(onFileSelectedDefinedByUser){if(typeof onFileSelectedDefinedByUser!=='function'){throw new Error('Invalid value for "onFileUploadStarted" config option');}return onFileSelectedDefinedByUser;},onFileUploadProgress:function onFileUploadProgress(onFileSelectedDefinedByUser){if(typeof onFileSelectedDefinedByUser!=='function'){throw new Error('Invalid value for "onFileUploadProgress" config option');}return onFileSelectedDefinedByUser;},onFileUploadFinished:function onFileUploadFinished(onFileSelectedDefinedByUser){if(typeof onFileSelectedDefinedByUser!=='function'){throw new Error('Invalid value for "onFileUploadFinished" config option');}return onFileSelectedDefinedByUser;},onFileUploadFailed:function onFileUploadFailed(onFileSelectedDefinedByUser){if(typeof onFileSelectedDefinedByUser!=='function'){throw new Error('Invalid value for "onFileUploadFailed" config option');}return onFileSelectedDefinedByUser;},onFileCropped:function onFileCropped(_onFileCropped){if(typeof _onFileCropped!=='function'){throw new Error('Invalid value for "onFileCropped" config option');}return _onFileCropped;},onOpen:function onOpen(_onOpen){if(typeof _onOpen!=='function'){throw new Error('Invalid value for "onOpen" config option');}return _onOpen;},onCancel:function onCancel(_onCancel){if(typeof _onCancel!=='function'){throw new Error('Invalid value for "onCancel" config option');}return _onCancel;},onClose:function onClose(_onClose){if(typeof _onClose!=='function'){throw new Error('Invalid value for "onClose" config option');}return _onClose;},onUploadDone:function onUploadDone(_onUploadDone){if(typeof _onUploadDone!=='function'){throw new Error('Invalid value for "onUploadDone" config option');}return _onUploadDone;},videoResolution:function videoResolution(res){if(typeof res!=='string'){throw new Error('Invalid value for "videoResolution" config option');}if(['1280x720','640x480','320x240'].indexOf(res)===-1){throw new Error('Invalid value for "videoResolution" config option');}return res;},errorsTimeout:function errorsTimeout(timeout){if(typeof timeout!=='number'||timeout<=0){throw new Error('Timeout must be a number [ms] greater than 0');}return timeout;},/* -----------------
    Transformer options
    ----------------- */transformations:function transformations(transformationsDefinedByUser){if(isObject$2(transformationsDefinedByUser)){return transformationsDefinedByUser;}throw new Error('Invalid value for "transformations" config option');},'transformations.crop':function transformationsCrop(cropDefinedByUser){if(isObject$2(cropDefinedByUser)){return cropDefinedByUser;}if(cropDefinedByUser===true){return{};}if(cropDefinedByUser===false){return false;}throw new Error('Invalid value for "transformations.crop" config option');},'transformations.crop.aspectRatio':function transformationsCropAspectRatio(aspectRatioDefinedByUser){if(isNumber(aspectRatioDefinedByUser)){return aspectRatioDefinedByUser;}throw new Error('Invalid value for "transformations.crop.aspectRatio" config option');},'transformations.crop.force':function transformationsCropForce(force){if(typeof force!=='boolean'){throw new Error('Invalid value for "transformations.crop.force" config option');}return force;},'transformations.force':function transformationsForce(force){if(typeof force!=='boolean'){throw new Error('Invalid value for "transformations.force" config option');}return force;},'transformations.circle':function transformationsCircle(circle){if(typeof circle!=='boolean'){throw new Error('Invalid value for "transformations.circle" config option');}return circle;},'transformations.rotate':function transformationsRotate(rotate){if(typeof rotate!=='boolean'){throw new Error('Invalid value for "transformations.rotate" config option');}return rotate;},'transformations.mask':function transformationsMask(mask){if(isObject$2(mask)){if(!mask.url||!mask.type){throw new Error('Mask transformation requires a URL and a type of "png" or "svg".');}return mask;}throw new Error('Invalid value for "transformations.mask" config option');},'transformations.mask.url':function transformationsMaskUrl(maskUrl){if(typeof maskUrl!=='string'){throw new Error('Invalid value for "transformations.mask.url" config option');}return maskUrl;},'transformations.mask.type':function transformationsMaskType(maskType){var allowed=['png','svg'];if(typeof maskType!=='string'||allowed.indexOf(maskType)===-1){throw new Error('Invalid value for "transformations.mask.type" config option');}return maskType;},'transformations.mask.color':function transformationsMaskColor(maskColor){if(typeof maskColor!=='string'){throw new Error('Invalid value for "transformations.mask.color" config option');}return maskColor;},imageMin:function imageMin(minDimensionsDefinedByUser){if(Array.isArray(minDimensionsDefinedByUser)){if(minDimensionsDefinedByUser.length===2){var oneOfElementsIsNotNumber=minDimensionsDefinedByUser.some(function(num){return typeof num!=='number';});if(!oneOfElementsIsNotNumber){return minDimensionsDefinedByUser;}throw new Error('Option "imageMin" requires array of numbers');}throw new Error('Option "imageMin" requires array with exactly two elements: [width, height]');}throw new Error('Invalid value for "imageMin" config option');},imageMax:function imageMax(maxDimensionsDefinedByUser){if(Array.isArray(maxDimensionsDefinedByUser)){if(maxDimensionsDefinedByUser.length===2){var oneOfElementsIsNotNumber=maxDimensionsDefinedByUser.some(function(num){return typeof num!=='number';});if(!oneOfElementsIsNotNumber){return maxDimensionsDefinedByUser;}throw new Error('Option "imageMax" requires array of numbers');}throw new Error('Option "imageMax" requires array with exactly two elements: [width, height]');}throw new Error('Invalid value for "imageMax" config option');},imageDim:function imageDim(maxDimensionsDefinedByUser){if(Array.isArray(maxDimensionsDefinedByUser)){if(maxDimensionsDefinedByUser.length===2){return maxDimensionsDefinedByUser;}throw new Error('Option "imageDim" requires array with exactly two elements: [width, height]');}throw new Error('Invalid value for "imageDim" config option');},imageMinMaxBlock:function imageMinMaxBlock(block){if(typeof block!=='boolean'){throw new Error('imageMinMaxBlock should be boolean');}return block;},container:function container(_container){return _container;},globalDropZone:function globalDropZone(_globalDropZone){if(typeof _globalDropZone!=='boolean'){throw new Error('Invalid value for "globalDropZone" config option');}return _globalDropZone;},exposeOriginalFile:function exposeOriginalFile(expose){if(typeof expose!=='boolean'){throw new Error('Invalid value for "exposeOriginalFile" config option');}return expose;},modalSize:function modalSize(_modalSize){if(Array.isArray(_modalSize)){if(_modalSize.length===2){var oneOfElementsIsNotNumber=_modalSize.some(function(num){return typeof num!=='number';});if(!oneOfElementsIsNotNumber){return _modalSize;}throw new Error('Option "modalSize" requires array of numbers');}throw new Error('Option "modalSize" requires array with exactly two elements: [width, height]');}throw new Error('Invalid value for "modalSize" config option');},customAuthText:function customAuthText(obj){if(!isObject$2(obj)){throw new Error('Invalid value for "customAuthText" config option');}return obj;},useSentryBreadcrumbs:function useSentryBreadcrumbs(_useSentryBreadcrumbs){if(typeof _useSentryBreadcrumbs!=='boolean'){throw new Error('Invalid value for "useSentryBreadcrumbs" config option');}return _useSentryBreadcrumbs;},/*
     * Paste mode options
     */pasteMode:function pasteMode(pasteModeDefinedByUser){if(isObject$2(pasteModeDefinedByUser)){return pasteModeDefinedByUser;}throw new Error('Invalid value for "pasteMode" config option');},'pasteMode.pasteToFirstInViewPort':function pasteModePasteToFirstInViewPort(pasteToFirstInViewPort){if(typeof pasteToFirstInViewPort!=='boolean'){throw new Error('Invalid value for "pasteMode.pasteToFirstInViewPort" config option');}return pasteToFirstInViewPort;},'pasteMode.pasteToFirstInstance':function pasteModePasteToFirstInstance(pasteToFirstInstance){if(typeof pasteToFirstInstance!=='boolean'){throw new Error('Invalid value for "pasteMode.pasteToFirstInstance" config option');}return pasteToFirstInstance;}};var addConfigDefaults=function addConfigDefaults(cfg,env){var config=_objectSpread({},cfg);if(config.fromSources===undefined){config.fromSources=['local_file_system','url','imagesearch','facebook','instagram','googledrive','dropbox'];}if(config.supportEmail===undefined){config.supportEmail='';}if(config.minFiles===undefined){config.minFiles=1;}if(config.maxFiles===undefined){config.maxFiles=1;}if(config.failOverMaxFiles===undefined){config.failOverMaxFiles=true;}if(config.loadCss===undefined){config.loadCss=env.css.main;}if(config.lang===undefined){config.lang='en';}if(config.viewType===undefined){config.viewType='list';}if(config.uploadInBackground===undefined){config.uploadInBackground=true;}if(config.errorsTimeout===undefined){config.errorsTimeout=5000;}if(config.transformations===undefined){config.transformations={crop:{},circle:true,rotate:true};}if(config.transformations&&config.transformations.mask&&config.transformations.mask.color===undefined){config.transformations.mask.color='#000000';}if(config.transformations&&config.transformations.circle===undefined){var oldCircle=config.transformations.crop&&config.transformations.crop.circle;if(oldCircle!==undefined){config.transformations.circle=oldCircle;}}if(config.imageMax===undefined){var oldImageMax=config.transformations.maxDimensions;if(oldImageMax!==undefined){config.imageMax=oldImageMax;}}if(config.imageMin===undefined){var oldImageMin=config.transformations.minDimensions;if(oldImageMin!==undefined){config.imageMin=oldImageMin;}}if(!config.dropPane&&config.displayMode===DISPLAY_MODE_DROPPANE){config.dropPane={};}if(config.dropPane){config.uploadInBackground=false;}if(config.dropPane&&config.dropPane.overlay===undefined){config.dropPane.overlay=true;}if(config.dropPane&&config.dropPane.showIcon===undefined){config.dropPane.showIcon=true;}if(config.dropPane&&config.dropPane.showProgress===undefined){config.dropPane.showProgress=true;}if(config.concurrency===undefined){config.concurrency=4;}if(config.displayMode===undefined){config.displayMode=DISPLAY_MODE_OVERLAY;}if(config.rootId===undefined){config.rootId='__filestack-picker';}if(config.useSentryBreadcrumbs===undefined){config.useSentryBreadcrumbs=true;}if(config.pasteMode===undefined){config.pasteMode={};}if(config.pasteMode.pasteToFirstInViewPort===undefined){config.pasteMode.pasteToFirstInViewPort=false;}if(config.pasteMode.pasteToFirstInstance===undefined){config.pasteMode.pasteToFirstInstance=false;}return config;};var parseConfig=function parseConfig(config,parentKey){var parsedConfig={};Object.keys(config).forEach(function(configOption){var key=configOption;if(parentKey){key="".concat(parentKey,".").concat(configOption);}var parser=parsers[key];if(typeof config[configOption]==='undefined'){return;}if(parser){var parsed=parser(config[configOption]);if(isObject$2(parsed)&&key.indexOf('transformations')!==-1){parsedConfig[configOption]=parseConfig(parsed,key);}else{parsedConfig[configOption]=parsed;}}else{throw new Error("Unknown config option \"".concat(key,"\""));}});if(parsedConfig.minFiles!==undefined&&parsedConfig.maxFiles!==undefined&&parsedConfig.minFiles>parsedConfig.maxFiles){throw new Error('Config option "minFiles" must be smaller or equal to "maxFiles"');}// console.log(parsedConfig);
return parsedConfig;};var getActivePickerInstance=function getActivePickerInstance(pasteMode){if(window.filestackInternals&&window.filestackInternals.enabledPickerInstances){var enabledPickerInstances=window.filestackInternals.enabledPickerInstances;// HOVERED
var overlayInstance=enabledPickerInstances.find(function(instance){return instance.$store.getters.isHovered;});if(!!overlayInstance){return overlayInstance;}// FIRST FULLY VISIBLE IN VIEWPORT
if(pasteMode&&pasteMode.pasteToFirstInViewPort){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=enabledPickerInstances[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){instance=_step.value;if(instance&&instance.$el){var bounding=instance.$el.getBoundingClientRect();if(bounding.top>=0&&bounding.left>=0&&bounding.right<=(window.innerWidth||document.documentElement.clientWidth)&&bounding.bottom<=(window.innerHeight||document.documentElement.clientHeight)){return instance;}}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator["return"]!=null){_iterator["return"]();}}finally{if(_didIteratorError){throw _iteratorError;}}}}// IF NOT FOUND RETURN FIRST
if(pasteMode&&pasteMode.pasteToFirstInstance){var firstInstance=enabledPickerInstances[0];if(firstInstance){return firstInstance;}}}return undefined;};//
var script={data:function data(){return{fileAboutToBeDropped:false};},computed:_objectSpread({},index_esm.mapGetters(['pasteMode'])),methods:_objectSpread({},index_esm.mapActions(['addFile','updateSelectLabelActive']),{dragenter:function dragenter(event){event.preventDefault();this.fileAboutToBeDropped=true;this.updateSelectLabelActive(true);},dragover:function dragover(event){event.preventDefault();},dragleave:function dragleave(){this.fileAboutToBeDropped=false;this.updateSelectLabelActive(false);},drop:function drop(event){var _this=this;event.preventDefault();this.fileAboutToBeDropped=false;extractFilesFromDataTransfer(event.dataTransfer).then(function(files){files.forEach(function(file){_this.addFile(file);});});},paste:function paste(event){var _this2=this;var activePickerInstance=getActivePickerInstance(this.pasteMode);if(activePickerInstance===this.$root){extractFilesFromDataTransfer(event.clipboardData).then(function(files){files.forEach(function(file){file.name='pasted file';_this2.addFile(file);});});}}}),mounted:function mounted(){var root=this.$root.$el;var dropZone=this.$refs.dropZone;document.addEventListener('paste',this.paste,false);root.addEventListener('dragenter',this.dragenter,false);dropZone.addEventListener('dragover',this.dragover,false);dropZone.addEventListener('dragleave',this.dragleave,false);dropZone.addEventListener('drop',this.drop,false);},beforeDestroy:function beforeDestroy(){var root=this.$root.$el;document.removeEventListener('paste',this.paste);root.removeEventListener('dragenter',this.dragenter);}};function normalizeComponent(template,style,script,scopeId,isFunctionalTemplate,moduleIdentifier/* server only */,shadowMode,createInjector,createInjectorSSR,createInjectorShadow){if(typeof shadowMode!=='boolean'){createInjectorSSR=createInjector;createInjector=shadowMode;shadowMode=false;}// Vue.extend constructor export interop.
var options=typeof script==='function'?script.options:script;// render functions
if(template&&template.render){options.render=template.render;options.staticRenderFns=template.staticRenderFns;options._compiled=true;// functional template
if(isFunctionalTemplate){options.functional=true;}}// scopedId
if(scopeId){options._scopeId=scopeId;}var hook;if(moduleIdentifier){// server build
hook=function hook(context){// 2.3 injection
context=context||// cached call
this.$vnode&&this.$vnode.ssrContext||// stateful
this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext;// functional
// 2.2 with runInNewContext: true
if(!context&&typeof __VUE_SSR_CONTEXT__!=='undefined'){context=__VUE_SSR_CONTEXT__;}// inject component styles
if(style){style.call(this,createInjectorSSR(context));}// register component module identifier for async chunk inference
if(context&&context._registeredComponents){context._registeredComponents.add(moduleIdentifier);}};// used by ssr in case component is cached and beforeCreate
// never gets called
options._ssrRegister=hook;}else if(style){hook=shadowMode?function(context){style.call(this,createInjectorShadow(context,this.$root.$options.shadowRoot));}:function(context){style.call(this,createInjector(context));};}if(hook){if(options.functional){// register for functional component in vue file
var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){hook.call(context);return originalRender(h,context);};}else{// inject component registration as beforeCreate hook
var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook];}}return script;}var isOldIE=typeof navigator!=='undefined'&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());/* script */var __vue_script__=script;/* template */var __vue_render__=function __vue_render__(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.fileAboutToBeDropped,expression:"fileAboutToBeDropped"}],ref:"dropZone",staticClass:"fsp-dropzone-overlay"},[_c("div",{staticClass:"fsp-dropzone-overlay__text"})]);};var __vue_staticRenderFns__=[];__vue_render__._withStripped=true;/* style */var __vue_inject_styles__=undefined;/* scoped */var __vue_scope_id__=undefined;/* module identifier */var __vue_module_identifier__=undefined;/* functional template */var __vue_is_functional_template__=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__=/*#__PURE__*/normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,false,undefined,undefined,undefined);//
var script$1={computed:_objectSpread({},index_esm.mapGetters(['mobileNavActive'])),methods:_objectSpread({},index_esm.mapActions(['updateMobileNavActive']),{toggleNav:function toggleNav(){this.updateMobileNavActive(!this.mobileNavActive);}})};/* script */var __vue_script__$1=script$1;/* template */var __vue_render__$1=function __vue_render__$1(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-mobile-menu",on:{click:function click($event){return _vm.toggleNav();}}});};var __vue_staticRenderFns__$1=[];__vue_render__$1._withStripped=true;/* style */var __vue_inject_styles__$1=undefined;/* scoped */var __vue_scope_id__$1=undefined;/* module identifier */var __vue_module_identifier__$1=undefined;/* functional template */var __vue_is_functional_template__$1=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$1=/*#__PURE__*/normalizeComponent({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},__vue_inject_styles__$1,__vue_script__$1,__vue_scope_id__$1,__vue_is_functional_template__$1,__vue_module_identifier__$1,false,undefined,undefined,undefined);//
var script$2={computed:_objectSpread({},index_esm.mapGetters(['cropFiles','customSourceName','mobileNavActive']),{customSourceLabel:function customSourceLabel(){return this.customSourceName||'Custom Source';},isCustomSource:function isCustomSource(){return this.source.name==='customsource';}}),components:{MobileMenuButton:__vue_component__$1},props:['source','hideHeader','hideMenu']};/* script */var __vue_script__$2=script$2;/* template */var __vue_render__$2=function __vue_render__$2(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.source&&_vm.source.name!=="globalsearch"?_c("div",{staticClass:"fsp-header","class":{"fsp-header--hide":_vm.hideHeader}},[_vm.source&&!_vm.mobileNavActive?_c("span",{staticClass:"fsp-header-icon","class":"fsp-navbar--"+_vm.source.name,attrs:{title:_vm.t(_vm.source.label)}}):_vm._e(),_vm._v(" "),_vm.source&&_vm.isCustomSource&&!_vm.mobileNavActive?_c("span",{staticClass:"fsp-header-text--visible"},[_vm._v(" "+_vm._s(_vm.t(_vm.customSourceLabel))+" ")]):_vm._e(),_vm._v(" "),_vm.mobileNavActive?_c("span",{staticClass:"fsp-header-text"},[_vm._v(" "+_vm._s(_vm.t("Select From"))+" ")]):_vm._e(),_vm._v(" "),!_vm.mobileNavActive?_vm._t("default"):_vm._e(),_vm._v(" "),!_vm.hideMenu&&!_vm.cropFiles?_c("mobile-menu-button"):_vm._e()],2):_vm._e();};var __vue_staticRenderFns__$2=[];__vue_render__$2._withStripped=true;/* style */var __vue_inject_styles__$2=undefined;/* scoped */var __vue_scope_id__$2=undefined;/* module identifier */var __vue_module_identifier__$2=undefined;/* functional template */var __vue_is_functional_template__$2=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$2=/*#__PURE__*/normalizeComponent({render:__vue_render__$2,staticRenderFns:__vue_staticRenderFns__$2},__vue_inject_styles__$2,__vue_script__$2,__vue_scope_id__$2,__vue_is_functional_template__$2,__vue_module_identifier__$2,false,undefined,undefined,undefined);//
var script$3={computed:_objectSpread({},index_esm.mapGetters(['isInlineDisplay','whitelabel']))};/* script */var __vue_script__$3=script$3;/* template */var __vue_render__$3=function __vue_render__$3(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return!_vm.isInlineDisplay?_c("div",{staticClass:"fsp-picker__brand-container"},[_c("transition",{attrs:{name:"fsp-picker-fade"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:!_vm.isInlineDisplay&&!_vm.whitelabel,expression:"!isInlineDisplay && !whitelabel"}],staticClass:"fsp-picker__brand"},[_vm._v("\n      Powered by "),_c("span",{staticClass:"fsp-icon--filestack"}),_vm._v(" Filestack\n    ")])])],1):_vm._e();};var __vue_staticRenderFns__$3=[];__vue_render__$3._withStripped=true;/* style */var __vue_inject_styles__$3=undefined;/* scoped */var __vue_scope_id__$3=undefined;/* module identifier */var __vue_module_identifier__$3=undefined;/* functional template */var __vue_is_functional_template__$3=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$3=/*#__PURE__*/normalizeComponent({render:__vue_render__$3,staticRenderFns:__vue_staticRenderFns__$3},__vue_inject_styles__$3,__vue_script__$3,__vue_scope_id__$3,__vue_is_functional_template__$3,__vue_module_identifier__$3,false,undefined,undefined,undefined);//
var script$4={props:{source:Object},components:{Branding:__vue_component__$3},computed:_objectSpread({},index_esm.mapGetters(['cropFiles','currentCloud','filesWaiting','isInlineDisplay','isSidebarHidden','route','uploadStarted']),{isCloud:function isCloud(){return Object.keys(this.currentCloud).length>0;},isLocal:function isLocal(){return this.route[1]==='local_file_system';},isWebcam:function isWebcam(){return['webcam','audio','video'].indexOf(this.route[1]!==-1);},isTransformer:function isTransformer(){return this.route[0]==='transform';},getContentClasses:function getContentClasses(){var sourceName=this._props.source&&this._props.source.name;return{'fsp-content':sourceName!=='globalsearch','fsp-content-with-tab':sourceName==='globalsearch','fsp-content--selected-items':this.isTransformer||!this.isLocal&&!this.isWebcam&&(this.filesWaiting.length>0||this.uploadStarted),'fsp-content--transformer':this.isTransformer};},getModalClasses:function getModalClasses(){return{'fsp-modal__body--full-width':this.isSidebarHidden&&!this.isTransformer,'fsp-modal__body--transformer':this.isTransformer,'fsp-modal__body--sidebar-disabled':!this.isTransformer&&this.cropFiles};}}),methods:{closePicker:function closePicker(){this.$store.dispatch('cancelPick');this.$root.$destroy();}}};/* script */var __vue_script__$4=script$4;/* template */var __vue_render__$4=function __vue_render__$4(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-picker"},[_c("div",{staticClass:"fsp-modal"},[_c("span",{staticClass:"fsp-picker__close-button fsp-icon--close-modal",attrs:{tabindex:"0",title:_vm.t("Click here or hit ESC to close picker")},on:{click:_vm.closePicker,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.closePicker($event);}}}),_vm._v(" "),_vm._t("sidebar"),_vm._v(" "),_c("div",{staticClass:"fsp-modal__body","class":_vm.getModalClasses},[_vm._t("header"),_vm._v(" "),_c("div",{ref:"content","class":_vm.getContentClasses},[_vm._t("body")],2),_vm._v(" "),_vm._t("footer")],2)],2),_vm._v(" "),_c("branding")],1);};var __vue_staticRenderFns__$4=[];__vue_render__$4._withStripped=true;/* style */var __vue_inject_styles__$4=undefined;/* scoped */var __vue_scope_id__$4=undefined;/* module identifier */var __vue_module_identifier__$4=undefined;/* functional template */var __vue_is_functional_template__$4=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$4=/*#__PURE__*/normalizeComponent({render:__vue_render__$4,staticRenderFns:__vue_staticRenderFns__$4},__vue_inject_styles__$4,__vue_script__$4,__vue_scope_id__$4,__vue_is_functional_template__$4,__vue_module_identifier__$4,false,undefined,undefined,undefined);//
var script$5={components:{ContentHeader:__vue_component__$2,Modal:__vue_component__$4},props:['isError'],computed:_objectSpread({},index_esm.mapGetters(['blocked','config']),{headerText:function headerText(){return this.blocked?this.t('Application blocked'):this.t('Application Unavailable');},titleText:function titleText(){return this.blocked?this.t('This application is blocked'):this.t('This application is unavailable');},subheaderText:function subheaderText(){return this.blocked?this.t('For some reason this application is blocked.'):this.t('For some reason this application is unavailable.');}})};/* script */var __vue_script__$5=script$5;/* template */var __vue_render__$5=function __vue_render__$5(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("modal",[_c("content-header",{attrs:{slot:"header","hide-menu":true},slot:"header"},[_c("span",{staticClass:"fsp-header-text--visible"},[_vm._v(_vm._s(_vm.t(_vm.headerText)))])]),_vm._v(" "),_c("div",{staticClass:"fsp-blocked__container",attrs:{slot:"body"},slot:"body"},[!_vm.isError?_c("div",{staticClass:"fsp-blocked__icon"}):_c("div",{staticClass:"fsp-blocked__error"}),_vm._v(" "),_c("div",{staticClass:"fsp-blocked__title"},[_vm._v("\n      "+_vm._s(_vm.t(_vm.titleText))+"\n    ")]),_vm._v(" "),_vm.config.supportEmail?_c("div",{staticClass:"fsp-text__subheader"},[_vm._v("\n      "+_vm._s(_vm.t("Please contact"))+" "),_c("a",{attrs:{href:"mailto:"+_vm.config.supportEmail}},[_vm._v(_vm._s(_vm.config.supportEmail))])]):_vm._e()])],1);};var __vue_staticRenderFns__$5=[];__vue_render__$5._withStripped=true;/* style */var __vue_inject_styles__$5=undefined;/* scoped */var __vue_scope_id__$5=undefined;/* module identifier */var __vue_module_identifier__$5=undefined;/* functional template */var __vue_is_functional_template__$5=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$5=/*#__PURE__*/normalizeComponent({render:__vue_render__$5,staticRenderFns:__vue_staticRenderFns__$5},__vue_inject_styles__$5,__vue_script__$5,__vue_scope_id__$5,__vue_is_functional_template__$5,__vue_module_identifier__$5,false,undefined,undefined,undefined);//
var script$6={computed:_objectSpread({},index_esm.mapGetters(['notifications']),{getClasses:function getClasses(){return{'fsp-notifications__success':!!this.mostRecentNotification.success};},mostRecentNotification:function mostRecentNotification(){return this.notifications[this.notifications.length-1];}}),methods:_objectSpread({},index_esm.mapActions(['removeAllNotifications']))};/* script */var __vue_script__$6=script$6;/* template */var __vue_render__$6=function __vue_render__$6(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.notifications.length>0?_c("div",{staticClass:"fsp-notifications__container","class":_vm.getClasses},[_c("div",{staticClass:"fsp-notifications__message"},[_vm._v("\n    "+_vm._s(_vm.t(_vm.mostRecentNotification.message,_vm.mostRecentNotification.params))+"\n  ")]),_vm._v(" "),_c("span",{staticClass:"fsp-icon fsp-notifications__close-button",on:{click:_vm.removeAllNotifications}})]):_vm._e();};var __vue_staticRenderFns__$6=[];__vue_render__$6._withStripped=true;/* style */var __vue_inject_styles__$6=undefined;/* scoped */var __vue_scope_id__$6=undefined;/* module identifier */var __vue_module_identifier__$6=undefined;/* functional template */var __vue_is_functional_template__$6=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$6=/*#__PURE__*/normalizeComponent({render:__vue_render__$6,staticRenderFns:__vue_staticRenderFns__$6},__vue_inject_styles__$6,__vue_script__$6,__vue_scope_id__$6,__vue_is_functional_template__$6,__vue_module_identifier__$6,false,undefined,undefined,undefined);var bowser=createCommonjsModule(function(module){/*!
   * Bowser - a browser detector
   * https://github.com/ded/bowser
   * MIT License | (c) Dustin Diaz 2015
   */!function(root,name,definition){if(module.exports)module.exports=definition();else root[name]=definition();}(commonjsGlobal,'bowser',function(){/**
      * See useragents.js for examples of navigator.userAgent
      */var t=true;function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[1]||'';}function getSecondMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[2]||'';}var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)(o|0)s/i.test(ua),windowsphone=/windows phone/i.test(ua),samsungBrowser=/SamsungBrowser/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua)&&!/tablet pc/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result;if(/opera/i.test(ua)){//  an old Opera
result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)};}else if(/opr\/|opios/i.test(ua)){// a new Opera
result={name:'Opera',opera:t,version:getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||versionIdentifier};}else if(/SamsungBrowser/i.test(ua)){result={name:'Samsung Internet for Android',samsungBrowser:t,version:versionIdentifier||getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)};}else if(/Whale/i.test(ua)){result={name:'NAVER Whale browser',whale:t,version:getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/MZBrowser/i.test(ua)){result={name:'MZ Browser',mzbrowser:t,version:getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)};}else if(/focus/i.test(ua)){result={name:'Focus',focus:t,version:getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)};}else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)};}else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)};}else if(windowsphone){result={name:'Windows Phone',osname:'Windows Phone',windowsphone:t};if(edgeVersion){result.msedge=t;result.version=edgeVersion;}else{result.msie=t;result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);}}else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)};}else if(chromeos){result={name:'Chrome',osname:'Chrome OS',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};}else if(/edg([ea]|ios)/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion};}else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier};}else if(sailfish){result={name:'Sailfish',osname:'Sailfish OS',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)};}else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)};}else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)};if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t;result.osname='Firefox OS';}}else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)};}else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)};}else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)};}else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',osname:'BlackBerry OS',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)};}else if(webos){result={name:'WebOS',osname:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};/touchpad\//i.test(ua)&&(result.touchpad=t);}else if(/bada/i.test(ua)){result={name:'Bada',osname:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}else if(tizen){result={name:'Tizen',osname:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier};}else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier};}else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};}else if(android){result={name:'Android',version:versionIdentifier};}else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t};if(versionIdentifier){result.version=versionIdentifier;}}else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'};// WTF: version is not part of user agent in web apps
if(versionIdentifier){result.version=versionIdentifier;}}else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier};}else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}// set webkit or gecko flag for browsers based on these engines
if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink";result.blink=t;}else{result.name=result.name||"Webkit";result.webkit=t;}if(!result.version&&versionIdentifier){result.version=versionIdentifier;}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko";result.gecko=t;result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);}// set OS flags for platforms that have multiple browsers
if(!result.windowsphone&&(android||result.silk)){result.android=t;result.osname='Android';}else if(!result.windowsphone&&iosdevice){result[iosdevice]=t;result.ios=t;result.osname='iOS';}else if(mac){result.mac=t;result.osname='macOS';}else if(xbox){result.xbox=t;result.osname='Xbox';}else if(windows){result.windows=t;result.osname='Windows';}else if(linux){result.linux=t;result.osname='Linux';}function getWindowsVersion(s){switch(s){case'NT':return'NT';case'XP':return'XP';case'NT 5.0':return'2000';case'NT 5.1':return'XP';case'NT 5.2':return'2003';case'NT 6.0':return'Vista';case'NT 6.1':return'7';case'NT 6.2':return'8';case'NT 6.3':return'8.1';case'NT 10.0':return'10';default:return undefined;}}// OS version extraction
var osVersion='';if(result.windows){osVersion=getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i));}else if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(result.mac){osVersion=getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}if(osVersion){result.osversion=osVersion;}// device type extraction
var osMajorVersion=!result.windows&&osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||android&&(osMajorVersion==3||osMajorVersion>=4&&!mobile)||result.silk){result.tablet=t;}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t;}// Graded Browser Support
// http://developer.yahoo.com/yui/articles/gbs
if(result.msedge||result.msie&&result.version>=10||result.yandexbrowser&&result.version>=15||result.vivaldi&&result.version>=1.0||result.chrome&&result.version>=20||result.samsungBrowser&&result.version>=4||result.whale&&compareVersions([result.version,'1.0'])===1||result.mzbrowser&&compareVersions([result.version,'6.0'])===1||result.focus&&compareVersions([result.version,'1.0'])===1||result.firefox&&result.version>=20.0||result.safari&&result.version>=6||result.opera&&result.version>=10.0||result.ios&&result.osversion&&result.osversion.split(".")[0]>=6||result.blackberry&&result.version>=10.1||result.chromium&&result.version>=20){result.a=t;}else if(result.msie&&result.version<10||result.chrome&&result.version<20||result.firefox&&result.version<20.0||result.safari&&result.version<6||result.opera&&result.version<10.0||result.ios&&result.osversion&&result.osversion.split(".")[0]<6||result.chromium&&result.version<20){result.c=t;}else result.x=t;return result;}var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent||'':'');bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}return false;};/**
     * Get version precisions count
     *
     * @example
     *   getVersionPrecision("1.10.3") // 3
     *
     * @param  {string} version
     * @return {number}
     */function getVersionPrecision(version){return version.split(".").length;}/**
     * Array::map polyfill
     *
     * @param  {Array} arr
     * @param  {Function} iterator
     * @return {Array}
     */function map(arr,iterator){var result=[],i;if(Array.prototype.map){return Array.prototype.map.call(arr,iterator);}for(i=0;i<arr.length;i++){result.push(iterator(arr[i]));}return result;}/**
     * Calculate browser version weight
     *
     * @example
     *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
     *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
     *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
     *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
     *
     * @param  {Array<String>} versions versions to compare
     * @return {Number} comparison result
     */function compareVersions(versions){// 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
var precision=Math.max(getVersionPrecision(versions[0]),getVersionPrecision(versions[1]));var chunks=map(versions,function(version){var delta=precision-getVersionPrecision(version);// 2) "9" -> "9.0" (for precision = 2)
version=version+new Array(delta+1).join(".0");// 3) "9.0" -> ["000000000"", "000000009"]
return map(version.split("."),function(chunk){return new Array(20-chunk.length).join("0")+chunk;}).reverse();});// iterate in reverse order by reversed chunks array
while(--precision>=0){// 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
if(chunks[0][precision]>chunks[1][precision]){return 1;}else if(chunks[0][precision]===chunks[1][precision]){if(precision===0){// all version chunks are same
return 0;}}else{return-1;}}}/**
     * Check if browser is unsupported
     *
     * @example
     *   bowser.isUnsupportedBrowser({
     *     msie: "10",
     *     firefox: "23",
     *     chrome: "29",
     *     safari: "5.1",
     *     opera: "16",
     *     phantom: "534"
     *   });
     *
     * @param  {Object}  minVersions map of minimal version to browser
     * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
     * @param  {String}  [ua] user agent string
     * @return {Boolean}
     */function isUnsupportedBrowser(minVersions,strictMode,ua){var _bowser=bowser;// make strictMode param optional with ua param usage
if(typeof strictMode==='string'){ua=strictMode;strictMode=void 0;}if(strictMode===void 0){strictMode=false;}if(ua){_bowser=detect(ua);}var version=""+_bowser.version;for(var browser in minVersions){if(minVersions.hasOwnProperty(browser)){if(_bowser[browser]){if(typeof minVersions[browser]!=='string'){throw new Error('Browser version in the minVersion map should be a string: '+browser+': '+String(minVersions));}// browser version and min supported version.
return compareVersions([version,minVersions[browser]])<0;}}}return strictMode;// not found
}/**
     * Check if browser is supported
     *
     * @param  {Object} minVersions map of minimal version to browser
     * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
     * @param  {String}  [ua] user agent string
     * @return {Boolean}
     */function check(minVersions,strictMode,ua){return!isUnsupportedBrowser(minVersions,strictMode,ua);}bowser.isUnsupportedBrowser=isUnsupportedBrowser;bowser.compareVersions=compareVersions;bowser.check=check;/*
     * Set our detect method to the main bowser object so we can
     * reuse it to test other user agents.
     * This is needed to implement future tests.
     */bowser._detect=detect;/*
     * Set our detect public method to the main bowser object
     * This is needed to implement bowser in server side
     */bowser.detect=detect;return bowser;});});// API payload doesn't give parent folder as a separate field
// This function will construct it so we can match files by folder paths
// Should return a path like /Folder1 for a file /Folder1/File
var getFolderPath=function getFolderPath(file){if(file.folder){return file.path;}var arr=file.path.split('/').map(function(s){return s.toLowerCase();});arr.pop();return"".concat(arr.join('/'),"/");};var isFileInFolder=function isFileInFolder(file,folder){var folderPath=getFolderPath(file);var path=folder.path.split('/').map(function(s){return s.toLowerCase();}).join('/');var pathWithTrail="".concat(path,"/");return folderPath===path||folderPath===pathWithTrail;};//
//
//
//
//
//
var script$7={props:['metadata','from'],computed:{name:function name(){return"".concat(this.metadata.author.first_name," ").concat(this.metadata.author.last_name);},link:function link(){return this.metadata.author.link;}}};/* script */var __vue_script__$7=script$7;/* template */var __vue_render__$7=function __vue_render__$7(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.metadata&&_vm.metadata.author?_c("span",{staticClass:"fsp-grid__unsplash_meta"},[_c("a",{attrs:{href:_vm.link,title:_vm.name,target:"_blank",tabindex:_vm.from==="Summary"?0:-1}},[_vm._v(_vm._s(_vm.name))])]):_vm._e();};var __vue_staticRenderFns__$7=[];__vue_render__$7._withStripped=true;/* style */var __vue_inject_styles__$7=undefined;/* scoped */var __vue_scope_id__$7=undefined;/* module identifier */var __vue_module_identifier__$7=undefined;/* functional template */var __vue_is_functional_template__$7=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$7=/*#__PURE__*/normalizeComponent({render:__vue_render__$7,staticRenderFns:__vue_staticRenderFns__$7},__vue_inject_styles__$7,__vue_script__$7,__vue_scope_id__$7,__vue_is_functional_template__$7,__vue_module_identifier__$7,false,undefined,undefined,undefined);var _isImage=function isImage(file){var type=file.mimetype||file.type;if(typeof type!=='string'){return false;}return type&&type.includes('image/');};var _isVideo=function isVideo(file){var type=file.mimetype||file.type;return type&&type.indexOf('video/')!==-1;};var isEditableImage=function isEditableImage(file){var ext=file.name&&file.name.split('.').pop().toLowerCase();var type=file.type||file.mimetype;var hasExt=['bmp','jpg','jpeg','png','gif','svg','tiff'].indexOf(ext)>=0;var hasMime=['image/jpeg','image/jpg','image/png','image/bmp','image/gif','image/tiff','image/svg','image/svg+xml'].indexOf(type)>=0;return hasExt||hasMime;};var isSVG$1=function isSVG$1(file){var ext=file.name&&file.name.split('.').pop().toLowerCase();var type=file.type||file.mimetype;var hasMime=['image/svg','image/svg+xml'].indexOf(type)>=0;return ext==='svg'||hasMime;};var _isAudio=function isAudio(file){var type=file.mimetype||file.type;if(typeof type!=='string'||!type){return false;}return type&&type.includes('audio/');};//
var script$8={components:{UnsplashMetadata:__vue_component__$7},props:['files','provider'],data:function data(){return{lastClicked:null};},mounted:function mounted(){if(this.provider==='unsplash'){this.$el.addEventListener('keydown',this.gridNavigator);}},destroyed:function destroyed(){if(this.provider==='unsplash'){this.$el.removeEventListener('keydown',this.gridNavigator);}},computed:_objectSpread({},index_esm.mapGetters(['cloudFolders','filesWaiting','viewType']),{gridClass:function gridClass(){var className="fps-grid__type-".concat(this.viewType);if(this.provider){className+=" fsp-grid_provider_".concat(this.provider);}if(bowser.mobile){className+=' fsp-grid_mobile';}return className;},onlyFolders:function onlyFolders(){return this.files.filter(function(f){return f.folder;});},onlyFiles:function onlyFiles(){return this.files.filter(function(f){return!f.folder;});},getRole:function getRole(){// changes only for unsplash [WCGA 2.0]
if(this.provider==='unsplash'){return'img';}return null;}}),methods:_objectSpread({},index_esm.mapActions(['setViewType','addFile','deselectFolder','goToDirectory']),{getName:function getName(file){if(file.display_name&&file.display_name.length){return file.display_name;}return file.name;},handleClickFile:function handleClickFile(ev,file){// prevent select on sublink click
if(ev.target&&ev.target.tagName&&ev.target.tagName.toLowerCase()==='a'){return;}if(!this.lastClicked){this.lastClicked=file;}if(ev.shiftKey){var start=this.files.indexOf(file);var end=this.files.indexOf(this.lastClicked);var fromEl=Math.min(start,end);var toEl=Math.max(start,end)+1;for(var i=fromEl;i<toEl;i+=1){if(!this.files[i]||this.files[i]===this.lastClicked||this.files[i].state===this.lastClicked.state){continue;}this.addFile(this.files[i]);}this.lastClicked=file;return;}this.lastClicked=file;this.addFile(file);},handleFolderClick:function handleFolderClick(ev,folder){if(ev.shiftKey){this.handleClickFile(ev,folder);return;}this.goToDirectory(folder);},getIconClass:function getIconClass(cls,file){var _ref;return _ref={},_defineProperty(_ref,cls,!this.isSelected(file)),_defineProperty(_ref,"".concat(cls,"--selected"),this.isSelected(file)),_ref;},isAudio:function isAudio(file){return _isAudio(file);},isImage:function isImage(file){return _isImage(file);},isVideo:function isVideo(file){return _isVideo(file);},isLoading:function isLoading(file){if(file.folder){return this.cloudFolders[file.path]&&this.cloudFolders[file.path].loading;}return false;},isSelected:function isSelected(file){if(file.folder){return this.getFileCount(file)>0;}return file.state;},getFileCount:function getFileCount(folder){return this.filesWaiting.filter(function(f){return isFileInFolder(f,folder);}).length;},getTabIndex:function getTabIndex(index){// giving a non -ve tabindex allows user to navigate through non-interactive elements using tab key.
// giving it -ve value allows the element to be focused but just not through tab key, maybe using JS
// If provide is unsplash give tab index as 0 to first element and -ve to rest all
if(this.provider==='unsplash'){return index===0?'0':-1;}// for all other source always pass 0
return'0';},getTitleLable:function getTitleLable(file){// changes only for unsplash [WCGA 2.0], return alt_description if unsplash else name.
if(this.provider==='unsplash'){if(this.isSelected(file)){return"".concat(file.alt_description,", Selected");}return file.alt_description;}return file.name;},gridNavigator:function gridNavigator(event){/* ----- Return if event listner fn, if parent is not grid-array component */if(!event.target.closest(".".concat(this.gridClass.split(' ').join('.')))){return;}/* ----- Return if any other key than home, end and arrowKeys are pressed */if(![35,36,37,38,39,40].includes(event.keyCode)){return;}/* ----- Setup how many items to skip if up/down arrow key is pressed --- */ // please note the value 768 is taken from variables.sass (variable - $desktop),
// which is used in grid.sass (.fsp-grid__cell -class) to calculate how many items to show per row.
var width=window.innerWidth||document.documentElement.clientWidth;var elementsToSkip=width>768?4:2;var elements=this.$el.querySelectorAll('.fsp-grid__cell');var currentFocusedIndex=Array.from(elements).indexOf(event.target);var lastIndex=elements.length-1;var newIndex;if(event.keyCode===37){// left arrow key
newIndex=currentFocusedIndex-1;}else if(event.keyCode===39){// right arrow key
newIndex=currentFocusedIndex+1;}else if(event.keyCode===38){// up arrow key
newIndex=currentFocusedIndex-elementsToSkip;}else if(event.keyCode===40){// down arrow key
newIndex=currentFocusedIndex+elementsToSkip;}else if(event.keyCode===36){// Home key
event.preventDefault();// prevent page scroll
if(event.ctrlKey){// CTRL + Home key
newIndex=0;}else{// Home key
newIndex=Math.floor(currentFocusedIndex/elementsToSkip)*elementsToSkip;}}else if(event.keyCode===35){// End key
event.preventDefault();// prevent page scroll
if(event.ctrlKey){// CTRL + End key
newIndex=lastIndex;}else{// End key
newIndex=Math.ceil((currentFocusedIndex+1)/elementsToSkip)*elementsToSkip-1;}}// Work-Arround for => safari browser the navigation is not working correctly.
// In safari browser when voice-over is on it reads arrow keys as next line.
// So stop event propogation and process it as normal
var isLastRow=currentFocusedIndex>=lastIndex-elementsToSkip;var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(isSafari){event.stopPropagation();event.preventDefault();// if downArrow or LeftArrow key is pressed on last row scroll the grid
if(isLastRow&&[39,40].includes(event.keyCode)){document.getElementsByClassName('fsp-content-scroll')[0].scrollTop+=20;}}// skip focus if element is out of range
if(newIndex<0||newIndex>lastIndex||isNaN(newIndex))return;elements[newIndex].focus();}})};/* script */var __vue_script__$8=script$8;/* template */var __vue_render__$8=function __vue_render__$8(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.files.length>0?_c("div",{staticClass:"fsp-grid","class":_vm.gridClass},[_vm._l(_vm.onlyFolders,function(folder,index){return _c("div",{key:index,staticClass:"fsp-grid__cell","class":{"fsp-grid__cell--selected":_vm.isSelected(folder)},attrs:{title:folder.name,tabindex:"0"},on:{click:function click($event){return _vm.handleFolderClick($event,folder);},keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.handleFolderClick($event,folder);}}},[_vm.isSelected(folder)?_c("span",{staticClass:"fsp-badge fsp-badge--bright fsp-badge--file"},[_vm._v("\n      "+_vm._s(_vm.getFileCount(folder))+"\n    ")]):_vm._e(),_vm._v(" "),!_vm.isSelected(folder)||_vm.viewType==="grid"?_c("span",{staticClass:"fsp-grid__icon","class":_vm.getIconClass("fsp-grid__icon-folder",folder)}):_vm._e(),_vm._v(" "),_c("span",{staticClass:"fsp-grid__text","class":{"fsp-grid__text--selected":_vm.isSelected(folder)}},[_vm._v(_vm._s(_vm.getName(folder)))]),_vm._v(" "),_vm.isSelected(folder)?_c("span",{staticClass:"fsp-grid__icon--selected",attrs:{title:"Deselect folder"},on:{click:function click($event){$event.stopPropagation();return _vm.deselectFolder(folder);}}}):_vm._e(),_vm._v(" "),!_vm.isLoading(folder)&&!_vm.isSelected(folder)?_c("span",{staticClass:"fsp-grid__icon-folder-add",attrs:{title:"Add folder"},on:{click:function click($event){$event.stopPropagation();return _vm.addFile(folder);}}}):_vm._e(),_vm._v(" "),_vm.isLoading(folder)?_c("div",{staticClass:"fsp-loading--folder"}):_vm._e()]);}),_vm._v(" "),_vm._l(_vm.onlyFiles,function(file,index){return _c("div",{key:file.path,staticClass:"fsp-grid__cell","class":{"fsp-grid__cell--selected":_vm.isSelected(file),"fsp-grid__cell--thumbnail":_vm.isImage(file)||_vm.isVideo(file)&&file.thumbnail},attrs:{tabindex:_vm.getTabIndex(index),title:_vm.getTitleLable(file),role:_vm.getRole},on:{keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.handleClickFile($event,file);},click:function click($event){return _vm.handleClickFile($event,file);}}},[_vm.isAudio(file)?_c("span",{staticClass:"fsp-grid__icon","class":_vm.getIconClass("fsp-grid__icon-audio",file)}):_vm.isImage(file)||_vm.isVideo(file)&&file.thumbnail?_c("div",{staticClass:"fsp-grid__thumbnail fsp-grid__icon"},[_c("div",{staticClass:"--preview",style:{"background-image":"url("+file.thumbnail+")"}}),_vm._v(" "),file.metadata&&file.metadata.author&&_vm.viewType==="grid"?_c("unsplash-metadata",{attrs:{metadata:file.metadata}}):_vm._e()],1):file.mimetype==="application/pdf"?_c("span",{staticClass:"fsp-grid__icon","class":_vm.getIconClass("fsp-grid__icon-pdf",file)}):file.mimetype==="application/zip"?_c("span",{staticClass:"fsp-grid__icon","class":_vm.getIconClass("fsp-grid__icon-zip",file)}):_c("span",{staticClass:"fsp-grid__icon","class":_vm.getIconClass("fsp-grid__icon-file",file)}),_vm._v(" "),_c("span",{staticClass:"fsp-grid__text","class":{"fsp-grid__text--selected":_vm.isSelected(file)}},[file.metadata&&file.metadata.author&&_vm.viewType==="list"?_c("unsplash-metadata",{attrs:{metadata:file.metadata}}):_vm._e(),_vm._v(" "),!file.metadata?_c("span",[_vm._v(_vm._s(_vm.getName(file)))]):_vm._e()],1),_vm._v(" "),_vm.isSelected(file)?_c("span",{staticClass:"fsp-grid__icon--selected"}):_vm._e(),_vm._v(" "),_c("div",{staticClass:"fsp-grid__cell--dark"})]);})],2):_vm._e();};var __vue_staticRenderFns__$8=[];__vue_render__$8._withStripped=true;/* style */var __vue_inject_styles__$8=undefined;/* scoped */var __vue_scope_id__$8=undefined;/* module identifier */var __vue_module_identifier__$8=undefined;/* functional template */var __vue_is_functional_template__$8=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$8=/*#__PURE__*/normalizeComponent({render:__vue_render__$8,staticRenderFns:__vue_staticRenderFns__$8},__vue_inject_styles__$8,__vue_script__$8,__vue_scope_id__$8,__vue_is_functional_template__$8,__vue_module_identifier__$8,false,undefined,undefined,undefined);//
//
//
//
//
//
//
//
//
var script$9={methods:{goBack:function goBack(){this.$store.commit('GO_BACK_WITH_ROUTE');}}};/* script */var __vue_script__$9=script$9;/* template */var __vue_render__$9=function __vue_render__$9(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-empty"},[_c("div",{staticClass:"fsp-empty__message"},[_vm._v("\n    "+_vm._s(_vm.t("This folder is empty."))+"\n  ")]),_vm._v(" "),_c("span",{staticClass:"fsp-empty__back-button",on:{click:_vm.goBack}},[_vm._v(_vm._s(_vm.t("Go back")))])]);};var __vue_staticRenderFns__$9=[];__vue_render__$9._withStripped=true;/* style */var __vue_inject_styles__$9=undefined;/* scoped */var __vue_scope_id__$9=undefined;/* module identifier */var __vue_module_identifier__$9=undefined;/* functional template */var __vue_is_functional_template__$9=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$9=/*#__PURE__*/normalizeComponent({render:__vue_render__$9,staticRenderFns:__vue_staticRenderFns__$9},__vue_inject_styles__$9,__vue_script__$9,__vue_scope_id__$9,__vue_is_functional_template__$9,__vue_module_identifier__$9,false,undefined,undefined,undefined);//
var script$a={props:['files'],components:{GridArray:__vue_component__$8,EmptyFolder:__vue_component__$9},computed:{folderIsEmpty:function folderIsEmpty(){return!this.$store.getters.currentCloud.isLoading&&!this.$store.getters.currentCloud.isErrored&&!this.$store.getters.currentCloudFiles.length;}}};/* script */var __vue_script__$a=script$a;/* template */var __vue_render__$a=function __vue_render__$a(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-cloud__folder-view"},[_vm.folderIsEmpty?_c("empty-folder"):_c("grid-array",{attrs:{files:_vm.files}})],1);};var __vue_staticRenderFns__$a=[];__vue_render__$a._withStripped=true;/* style */var __vue_inject_styles__$a=undefined;/* scoped */var __vue_scope_id__$a=undefined;/* module identifier */var __vue_module_identifier__$a=undefined;/* functional template */var __vue_is_functional_template__$a=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$a=/*#__PURE__*/normalizeComponent({render:__vue_render__$a,staticRenderFns:__vue_staticRenderFns__$a},__vue_inject_styles__$a,__vue_script__$a,__vue_scope_id__$a,__vue_is_functional_template__$a,__vue_module_identifier__$a,false,undefined,undefined,undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$b={props:['crumbs','onClick'],methods:{truncateCrumbs:function truncateCrumbs(crumbs){var newCrumbs=[].concat(crumbs[0]);var lastTwoCrumbs=crumbs.filter(function(crumb,i){return i>=crumbs.length-2;});newCrumbs.push.apply(newCrumbs,[{path:'',label:'...'}].concat(_toConsumableArray(lastTwoCrumbs)));return newCrumbs;},handleClick:function handleClick(crumb){if(crumb.path&&crumb.label){this.onClick(crumb);}}}};/* script */var __vue_script__$b=script$b;/* template */var __vue_render__$b=function __vue_render__$b(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-breadcrumb__container"},[_vm.crumbs.length<=3?_c("span",{staticStyle:{display:"flex"}},_vm._l(_vm.crumbs,function(crumb){return _c("span",{key:crumb.path,staticClass:"fsp-breadcrumb__label",on:{click:function click($event){return _vm.handleClick(crumb);}}},[_vm._v("\n      "+_vm._s(crumb.label)+"\n    ")]);}),0):_c("span",{staticStyle:{display:"flex"}},_vm._l(_vm.truncateCrumbs(_vm.crumbs),function(crumb){return _c("span",{key:crumb.path,staticClass:"fsp-breadcrumb__label",on:{click:function click($event){return _vm.handleClick(crumb);}}},[_vm._v("\n      "+_vm._s(crumb.label)+"\n    ")]);}),0)]);};var __vue_staticRenderFns__$b=[];__vue_render__$b._withStripped=true;/* style */var __vue_inject_styles__$b=undefined;/* scoped */var __vue_scope_id__$b=undefined;/* module identifier */var __vue_module_identifier__$b=undefined;/* functional template */var __vue_is_functional_template__$b=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$b=/*#__PURE__*/normalizeComponent({render:__vue_render__$b,staticRenderFns:__vue_staticRenderFns__$b},__vue_inject_styles__$b,__vue_script__$b,__vue_scope_id__$b,__vue_is_functional_template__$b,__vue_module_identifier__$b,false,undefined,undefined,undefined);//
//
//
//
//
//
var script$c={};/* script */var __vue_script__$c=script$c;/* template */var __vue_render__$c=function __vue_render__$c(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("transition",{attrs:{name:"fsp-loading--fade"}},[_c("div",{staticClass:"fsp-loading"})]);};var __vue_staticRenderFns__$c=[];__vue_render__$c._withStripped=true;/* style */var __vue_inject_styles__$c=undefined;/* scoped */var __vue_scope_id__$c=undefined;/* module identifier */var __vue_module_identifier__$c=undefined;/* functional template */var __vue_is_functional_template__$c=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$c=/*#__PURE__*/normalizeComponent({render:__vue_render__$c,staticRenderFns:__vue_staticRenderFns__$c},__vue_inject_styles__$c,__vue_script__$c,__vue_scope_id__$c,__vue_is_functional_template__$c,__vue_module_identifier__$c,false,undefined,undefined,undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$d={props:{clickFn:Function}};/* script */var __vue_script__$d=script$d;/* template */var __vue_render__$d=function __vue_render__$d(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("button",{staticClass:"fsp-button--authgoogle",attrs:{type:"button",tabindex:"0"},on:{click:_vm.clickFn}},[_c("svg",{staticClass:"svg-icon native iconGoogle",attrs:{"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 18 18"}},[_c("path",{attrs:{d:"M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z",fill:"#4285F4"}}),_vm._v(" "),_c("path",{attrs:{d:"M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z",fill:"#34A853"}}),_vm._v(" "),_c("path",{attrs:{d:"M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z",fill:"#FBBC05"}}),_vm._v(" "),_c("path",{attrs:{d:"M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z",fill:"#EA4335"}})]),_vm._v(" "),_c("span",[_vm._v("\n    "+_vm._s(_vm.t("Sign in with Google"))+"\n  ")])]);};var __vue_staticRenderFns__$d=[];__vue_render__$d._withStripped=true;/* style */var __vue_inject_styles__$d=undefined;/* scoped */var __vue_scope_id__$d=undefined;/* module identifier */var __vue_module_identifier__$d=undefined;/* functional template */var __vue_is_functional_template__$d=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$d=/*#__PURE__*/normalizeComponent({render:__vue_render__$d,staticRenderFns:__vue_staticRenderFns__$d},__vue_inject_styles__$d,__vue_script__$d,__vue_scope_id__$d,__vue_is_functional_template__$d,__vue_module_identifier__$d,false,undefined,undefined,undefined);/**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ /** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/** Used as references for various `Number` constants. */var NAN=0/0;/** `Object#toString` result references. */var symbolTag$1='[object Symbol]';/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal$1=_typeof2(commonjsGlobal)=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;/** Detect free variable `self`. */var freeSelf$1=(typeof self==="undefined"?"undefined":_typeof2(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root$1=freeGlobal$1||freeSelf$1||Function('return this')();/** Used for built-in method references. */var objectProto$1=Object.prototype;/**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */var objectToString$1=objectProto$1.toString;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max,nativeMin=Math.min;/**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */var now=function now(){return root$1.Date.now();};/**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber$1(wait)||0;if(isObject$3(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber$1(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject$3(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */function isObject$3(value){var type=_typeof2(value);return!!value&&(type=='object'||type=='function');}/**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */function isObjectLike$1(value){return!!value&&_typeof2(value)=='object';}/**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */function isSymbol$1(value){return _typeof2(value)=='symbol'||isObjectLike$1(value)&&objectToString$1.call(value)==symbolTag$1;}/**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */function toNumber$1(value){if(typeof value=='number'){return value;}if(isSymbol$1(value)){return NAN;}if(isObject$3(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject$3(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}var lodash_throttle=throttle;//
var script$e={updated:function updated(){var element=this.$refs.content;this.$emit('stateChange',element.scrollHeight>element.clientHeight);},methods:{handleScroll:function handleScroll(){var _this3=this;var ct=this.$refs.content;if(!ct){return;}var cur=ct.scrollHeight-Math.round(ct.scrollTop,10);var zones=[ct.clientHeight,ct.clientHeight-1,ct.clientHeight+1];this.funcHandler=this.funcHandler||lodash_throttle(function(){return _this3.$emit('callback');},1000);if(zones.indexOf(cur)!==-1){this.funcHandler();}}}};/* script */var __vue_script__$e=script$e;/* template */var __vue_render__$e=function __vue_render__$e(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{ref:"content",staticClass:"fsp-content-scroll",on:{scroll:_vm.handleScroll}},[_vm._t("default")],2);};var __vue_staticRenderFns__$e=[];__vue_render__$e._withStripped=true;/* style */var __vue_inject_styles__$e=undefined;/* scoped */var __vue_scope_id__$e=undefined;/* module identifier */var __vue_module_identifier__$e=undefined;/* functional template */var __vue_is_functional_template__$e=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$e=/*#__PURE__*/normalizeComponent({render:__vue_render__$e,staticRenderFns:__vue_staticRenderFns__$e},__vue_inject_styles__$e,__vue_script__$e,__vue_scope_id__$e,__vue_is_functional_template__$e,__vue_module_identifier__$e,false,undefined,undefined,undefined);//
var script$f={components:{CloudGrid:__vue_component__$a,Breadcrumbs:__vue_component__$b,Loading:__vue_component__$c,InfiniteScroll:__vue_component__$e,GoogleSignInButton:__vue_component__$d},data:function data(){return{googleSources:['googledrive','gmail','googlephotos']};},computed:_objectSpread({},index_esm.mapGetters(['apiClient','cloudFolders','currentCloud','currentCloudFiles','customSourceName','getSourceByName','isLoadingMore','filesWaiting','viewType']),{currentDisplay:function currentDisplay(){return this.getSourceByName(this.currentCloud.name);},currentLabel:function currentLabel(){if(this.currentCloud.name==='customsource'){return this.customSourceName||'Custom Source';}return this.currentDisplay.label;},currentCrumbs:function currentCrumbs(){var _this4=this;return this.currentCloud.path.map(function(path){if(path==='/'){return{label:_this4.currentLabel,path:path};}return{label:_this4.cloudFolders[path].name,path:path};});},currentSource:function currentSource(){if(!this.$store.getters.currentCloud||!Object.keys(this.$store.getters.currentCloud).length){return null;}return this.getSourceByName(this.$store.getters.currentCloud.name);},customAuthTextTop:function customAuthTextTop(){var currentCloudName=this.currentSource.name;var config=this.$store.getters.config.customAuthText;if(!config){return null;}if(config[currentCloudName]&&config[currentCloudName].top){return config[currentCloudName].top;}if(config["default"]&&config["default"].top){return config["default"].top;}return null;},customAuthTextBottom:function customAuthTextBottom(){var currentCloudName=this.currentSource.name;var config=this.$store.getters.config.customAuthText;if(!config){return null;}if(config[currentCloudName]&&config[currentCloudName].bottom){return config[currentCloudName].bottom;}if(config["default"]&&config["default"].bottom){return config["default"].bottom;}return null;}}),methods:_objectSpread({},index_esm.mapActions(['fetchCloudPath','setViewType']),{onScrollChange:function onScrollChange(v){this.$store.commit('SET_SCROLL_STATE',v);},loadMore:function loadMore(){this.$store.dispatch('loadMore',{});},toogleViewType:function toogleViewType(){var view=this.viewType==='list'?'grid':'list';this.$session.set('cloud-grid-view',view);this.setViewType(view);},getViewTypeIconClass:function getViewTypeIconClass(){return"fsp-cloud_view-type-icon-".concat(this.viewType==='list'?'grid':'list');},authorize:function authorize(){var _this5=this;var url=this.currentCloud.redirect;var win=window.open(url,'_blank');var waitUntilWindowClosed=function waitUntilWindowClosed(){setTimeout(function(){if(win&&win.closed!==true){setTimeout(waitUntilWindowClosed,100);}else{setTimeout(function(){_this5.fetchCloudPath({name:_this5.currentCloud.name});},100);}},1000);};waitUntilWindowClosed();},tryAgain:function tryAgain(){return this.fetchCloudPath({name:this.currentCloud.name});},updatePath:function updatePath(crumb){var index=this.currentCloud.path.indexOf(crumb.path);// Don't add path to route if we're already on that path
if(index===this.currentCloud.path.length-1){return;}var newPath=this.currentCloud.path.filter(function(path,i){return i<=index;});var rootPath=['source',this.currentCloud.name];if(crumb.path==='/'){this.$store.commit('CHANGE_ROUTE',rootPath);}else{rootPath.push(newPath);this.$store.commit('CHANGE_ROUTE',rootPath);}},shouldUseGoogleSignIn:function shouldUseGoogleSignIn(){if(this.currentSource.name){return this.googleSources.indexOf(this.currentSource.name)>-1;}return false;}}),mounted:function mounted(){var viewStorage=this.$session.get('cloud-grid-view');if(viewStorage){this.setViewType(viewStorage);}}};/* script */var __vue_script__$f=script$f;/* template */var __vue_render__$f=function __vue_render__$f(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("infinite-scroll",{"class":{"fsp-summary__has-actions":_vm.filesWaiting.length>0&&_vm.currentSource.ui!=="webcam"&&_vm.currentSource.ui!=="opentok"},on:{stateChange:_vm.onScrollChange,callback:_vm.loadMore}},[_c("div",{staticClass:"fsp-cloud__container"},[_vm.currentCloud.isLoading?_c("loading"):_vm._e(),_vm._v(" "),_vm.currentCloud.isErrored?_c("div",{staticClass:"fsp-cloud-error"},[_c("div",{staticClass:"fsp-cloud-error__text"},[_vm._v("\n        Something went wrong.\n      ")]),_vm._v(" "),_c("div",{key:"retryCall",staticClass:"fsp-button fsp-button--outline",attrs:{tabindex:"0"},on:{click:_vm.tryAgain,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.tryAgain($event);}}},[_vm._v("\n        Retry\n      ")])]):_vm.currentCloud.isUnauthorized?_c("div",{staticClass:"fsp-source-auth__wrapper"},[_c("span",{staticClass:"fsp-icon fsp-icon--auth fsp-source-auth__el","class":"fsp-icon--"+_vm.currentCloud.name}),_vm._v(" "),_c("div",{staticClass:"fsp-text__title fsp-source-auth__el"},[_vm._v("\n        "+_vm._s(_vm.t("Select Files from {providerName}").replace("{providerName}",_vm.currentDisplay.label))+"\n      ")]),_vm._v(" "),_c("div",{staticClass:"fsp-source-auth__el"},[_vm.customAuthTextTop?_vm._l(_vm.customAuthTextTop,function(textLine){return _c("div",{key:textLine,staticClass:"fsp-custom-auth-top__container"},[_c("div",{staticClass:"fsp-text__subheader"},[_vm._v("\n              "+_vm._s(textLine)+"\n            ")])]);}):[_c("div"),_vm._v(" "),_c("div",{staticClass:"fsp-text__subheader"},[_vm._v("\n            "+_vm._s(_vm.t("You need to authenticate with {providerName}.").replace("{providerName}",_vm.currentDisplay.label))+"\n          ")]),_vm._v(" "),_c("div",{staticClass:"fsp-text__subheader"},[_vm._v("\n            "+_vm._s(_vm.t("We only extract images and never modify or delete them."))+"\n          ")])]],2),_vm._v(" "),_vm.shouldUseGoogleSignIn()?_c("GoogleSignInButton",{attrs:{"click-fn":_vm.authorize}}):_c("button",{staticClass:"fsp-button fsp-button--auth fsp-source-auth__el",attrs:{type:"button",tabindex:"0"},on:{click:_vm.authorize}},[_vm._v("\n        "+_vm._s(_vm.t("Connect {providerName}").replace("{providerName}",_vm.currentDisplay.label))+"\n      ")]),_vm._v(" "),_c("div",{staticClass:"fsp-source-auth__el"},[_vm.customAuthTextBottom?_vm._l(_vm.customAuthTextBottom,function(textLine){return _c("div",{key:textLine,staticClass:"fsp-custom-auth-bottom__container"},[_c("div",{staticClass:"fsp-text__subheader"},[_vm._v("\n              "+_vm._s(textLine)+"\n            ")])]);}):[_c("div",{staticClass:"fsp-text__subheader"},[_vm._v("\n            "+_vm._s(_vm.t("A new page will open to connect your account."))+"\n          ")]),_vm._v(" "),_c("div",{staticClass:"fsp-text__subheader"},[_vm._v("\n            "+_vm._s(_vm.t('To disconnect from {providerName} click "Sign out" button in the menu.').replace("{providerName}",_vm.currentDisplay.label))+"\n          ")])]],2)],1):!_vm.currentCloud.isLoading?_c("div",{staticClass:"fsp-cloud__files-container"},[_c("div",{staticClass:"fsp-cloud__breadcrumbs"},[_vm.currentDisplay.layout!=="grid"?_c("breadcrumbs",{attrs:{crumbs:_vm.currentCrumbs,"on-click":_vm.updatePath}}):_vm._e(),_vm._v(" "),_c("div",{staticClass:"fsp-cloud_view-type",on:{click:function click($event){$event.preventDefault();return _vm.toogleViewType();}}},[_c("span",{staticClass:"fsp-cloud_view-type-icon","class":_vm.getViewTypeIconClass()})])],1),_vm._v(" "),_c("cloud-grid",{attrs:{files:_vm.currentCloudFiles}}),_vm._v(" "),_vm.isLoadingMore?_c("div",{staticClass:"fsp-loading-more-indicator"},[_c("span",[_vm._v(_vm._s(_vm.t("Loading more results")))])]):_vm._e()],1):_vm._e()],1)]);};var __vue_staticRenderFns__$f=[];__vue_render__$f._withStripped=true;/* style */var __vue_inject_styles__$f=undefined;/* scoped */var __vue_scope_id__$f=undefined;/* module identifier */var __vue_module_identifier__$f=undefined;/* functional template */var __vue_is_functional_template__$f=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$f=/*#__PURE__*/normalizeComponent({render:__vue_render__$f,staticRenderFns:__vue_staticRenderFns__$f},__vue_inject_styles__$f,__vue_script__$f,__vue_scope_id__$f,__vue_is_functional_template__$f,__vue_module_identifier__$f,false,undefined,undefined,undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$g={props:['isVisible','fullWidth']};/* script */var __vue_script__$g=script$g;/* template */var __vue_render__$g=function __vue_render__$g(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-footer","class":{"fsp-footer--appeared":_vm.isVisible}},[_c("div",{staticClass:"fsp-footer__nav"},[_c("span",{staticClass:"fsp-footer__nav--left"},[_vm._t("nav-left")],2),_vm._v(" "),_c("span",{staticClass:"fsp-footer__nav--center",style:{width:_vm.fullWidth?"100%":null}},[_vm._t("nav-center")],2),_vm._v(" "),_c("span",{staticClass:"fsp-footer__nav--right"},[_vm._t("nav-right")],2)])]);};var __vue_staticRenderFns__$g=[];__vue_render__$g._withStripped=true;/* style */var __vue_inject_styles__$g=undefined;/* scoped */var __vue_scope_id__$g=undefined;/* module identifier */var __vue_module_identifier__$g=undefined;/* functional template */var __vue_is_functional_template__$g=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$g=/*#__PURE__*/normalizeComponent({render:__vue_render__$g,staticRenderFns:__vue_staticRenderFns__$g},__vue_inject_styles__$g,__vue_script__$g,__vue_scope_id__$g,__vue_is_functional_template__$g,__vue_module_identifier__$g,false,undefined,undefined,undefined);//
var script$h={props:{globalSearchEnabled:Boolean},components:{InfiniteScroll:__vue_component__$e,GridArray:__vue_component__$8,Loading:__vue_component__$c},computed:_objectSpread({},index_esm.mapGetters(['isSearching','noResultsFound','resultsFound','imageSearchInput','imageSearchResults','filesWaiting','viewType','currentCloud']),{placeholderText:function placeholderText(){return"".concat(this.t('Search images'),"...");}}),mounted:function mounted(){this.oldViewType=this.viewType;this.setViewType('grid');this.$store.commit('CLEAR_IMAGES_STORE');var config=this.$store.state.config,defaultText=config.websearch&&config.websearch.predefinedText,globalSearchEnabled=this._props.globalSearchEnabled;if(defaultText&&!globalSearchEnabled){this.updateSearchInput(defaultText);this.fetch();}},destroyed:function destroyed(){this.setViewType(this.oldViewType);},methods:_objectSpread({},index_esm.mapActions(['fetchCloudPath','updateSearchInput','fetchImages','setViewType']),{loadMore:function loadMore(){if(this.isLoadingMore){return;}this.isLoadingMore=true;// For now we will not implementing pagination in imagesearch
},fetch:function fetch(){this.fetchImages();this.$refs.searchInput.blur();if(this._props.globalSearchEnabled){this.$store.dispatch('unsplash/search');}},updateInput:function updateInput(ev){this.updateSearchInput(ev.target.value);// If global search is enabled, update unsplash search value as well
if(this._props.globalSearchEnabled){this.$store.commit('unsplash/SET_SEARCH_WORD',ev.target.value);}},clearSearch:function clearSearch(){this.updateSearchInput('');}})};/* script */var __vue_script__$h=script$h;/* template */var __vue_render__$h=function __vue_render__$h(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-image-search"},[_vm.isSearching?_c("loading"):_vm._e(),_vm._v(" "),_c("infinite-scroll",{on:{callback:_vm.loadMore}},[_c("div",{staticClass:"fsp-image-search__form-container","class":{"fsp-image-search__form-container--results":_vm.resultsFound}},[_c("form",{staticClass:"fsp-url-source__form",on:{submit:function submit($event){$event.preventDefault();return _vm.fetch($event);}}},[_c("input",{ref:"searchInput",staticClass:"fsp-url-source__input",attrs:{placeholder:_vm.placeholderText,disabled:_vm.isSearching,tabindex:"0"},domProps:{value:_vm.imageSearchInput},on:{input:_vm.updateInput}}),_vm._v(" "),_c("button",{staticClass:"fsp-button fsp-url-source__submit-button",attrs:{type:"submit",tabindex:"0","aria-label":"Search Image"}},[_c("div",{staticClass:"fsp-icon fsp-image-search__submit-icon"})])])]),_vm._v(" "),_c("div",{staticClass:"fsp-image-search__results","class":{"fsp-content--selected-items":_vm.resultsFound&&_vm.filesWaiting.length}},[_vm.resultsFound?_c("grid-array",{staticStyle:{"padding-top":"0px"},attrs:{files:_vm.imageSearchResults}}):_vm._e()],1)])],1);};var __vue_staticRenderFns__$h=[];__vue_render__$h._withStripped=true;/* style */var __vue_inject_styles__$h=undefined;/* scoped */var __vue_scope_id__$h=undefined;/* module identifier */var __vue_module_identifier__$h=undefined;/* functional template */var __vue_is_functional_template__$h=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$h=/*#__PURE__*/normalizeComponent({render:__vue_render__$h,staticRenderFns:__vue_staticRenderFns__$h},__vue_inject_styles__$h,__vue_script__$h,__vue_scope_id__$h,__vue_is_functional_template__$h,__vue_module_identifier__$h,false,undefined,undefined,undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$i={mounted:function mounted(){this.selectTab(0);},methods:{selectTab:function selectTab(i){this.selectedIndex=i;this.tabs.forEach(function(tab,index){tab.isActive=index===i;});}},data:function data(){return{selectedIndex:0,tabs:[]};},created:function created(){this.tabs=this.$children;}};/* script */var __vue_script__$i=script$i;/* template */var __vue_render__$i=function __vue_render__$i(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"tabs__wrapper"},[_c("ul",{staticClass:"tabs__header"},_vm._l(_vm.tabs,function(tab,index){return _c("li",{key:tab.title,staticClass:"tabs__list","class":{active_tab:tab.isActive},on:{click:function click($event){return _vm.selectTab(index);}}},[_vm._v("\n      "+_vm._s(tab.title)+"\n    ")]);}),0),_vm._v(" "),_vm._t("default")],2);};var __vue_staticRenderFns__$i=[];__vue_render__$i._withStripped=true;/* style */var __vue_inject_styles__$i=undefined;/* scoped */var __vue_scope_id__$i=undefined;/* module identifier */var __vue_module_identifier__$i=undefined;/* functional template */var __vue_is_functional_template__$i=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$i=/*#__PURE__*/normalizeComponent({render:__vue_render__$i,staticRenderFns:__vue_staticRenderFns__$i},__vue_inject_styles__$i,__vue_script__$i,__vue_scope_id__$i,__vue_is_functional_template__$i,__vue_module_identifier__$i,false,undefined,undefined,undefined);//
//
//
//
//
//
var script$j={props:{title:{type:String,"default":'Tab'}},data:function data(){return{isActive:true};}};/* script */var __vue_script__$j=script$j;/* template */var __vue_render__$j=function __vue_render__$j(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.isActive,expression:"isActive"}],staticClass:"tab__item"},[_vm._t("default")],2);};var __vue_staticRenderFns__$j=[];__vue_render__$j._withStripped=true;/* style */var __vue_inject_styles__$j=undefined;/* scoped */var __vue_scope_id__$j=undefined;/* module identifier */var __vue_module_identifier__$j=undefined;/* functional template */var __vue_is_functional_template__$j=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$j=/*#__PURE__*/normalizeComponent({render:__vue_render__$j,staticRenderFns:__vue_staticRenderFns__$j},__vue_inject_styles__$j,__vue_script__$j,__vue_scope_id__$j,__vue_is_functional_template__$j,__vue_module_identifier__$j,false,undefined,undefined,undefined);//
var script$k={props:{globalSearchEnabled:{type:Boolean}},components:{InfiniteScroll:__vue_component__$e,Loading:__vue_component__$c,GridArray:__vue_component__$8},data:function data(){return{word:''};},computed:_objectSpread({},index_esm.mapGetters({isFinished:'unsplash/isFinished',searchWord:'unsplash/searchWord',results:'unsplash/results',isLoading:'unsplash/isLoading',viewType:'viewType'})),watch:{word:function word(val){this.$store.commit('unsplash/SET_SEARCH_WORD',val);}},mounted:function mounted(){this.oldViewType=this.viewType;this.setViewType('grid');},destroyed:function destroyed(){this.$store.commit('unsplash/RESET');this.setViewType(this.oldViewType);},methods:_objectSpread({},index_esm.mapActions(['setViewType','updateSearchInput','fetchImages']),{onScrollChange:function onScrollChange(v){this.$store.commit('unsplash/SET_SCROLL_STATE',v);},toogleViewType:function toogleViewType(){var view=this.viewType==='list'?'grid':'list';this.$session.set('cloud-grid-view',view);this.setViewType(view);},getViewTypeIconClass:function getViewTypeIconClass(){return"fsp-cloud_view-type-icon-".concat(this.viewType==='list'?'grid':'list');},loadMore:function loadMore(){if(this.isLoading){return;}this.$store.dispatch('unsplash/loadMore');},search:function search(){if(!this.searchWord){return;}this.$store.dispatch('unsplash/search');if(this._props.globalSearchEnabled){this.fetchImages();}},updateUnsplashSearchInput:function updateUnsplashSearchInput(event){var value=event.target.value;this.$store.commit('unsplash/SET_SEARCH_WORD',value);if(this._props.globalSearchEnabled){this.updateSearchInput(value);}}})};/* script */var __vue_script__$k=script$k;/* template */var __vue_render__$k=function __vue_render__$k(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("infinite-scroll",{on:{callback:_vm.loadMore,stateChange:_vm.onScrollChange}},[_c("div",{staticClass:"fsp-unsplash-source"},[_c("div",{staticClass:"fsp-unsplash-source__container","class":{"fsp-unsplash-is_filled":_vm.isFinished}},[_c("form",{staticClass:"fsp-unsplash-source__form",on:{submit:function submit($event){$event.preventDefault();return _vm.search($event);}}},[!_vm.isFinished?_c("div",{staticClass:"fsp-unsplash-logo fsp-icon--unsplash-logo"}):_vm._e(),_vm._v(" "),!_vm.isFinished?_c("div",{staticClass:"fsp-unsplash-title"},[_vm._v("\n          "+_vm._s(_vm.t("Unsplash - Photos for everyone"))+"\n          "),_c("div",{staticClass:"fsp-unsplash-subtitle",domProps:{innerHTML:_vm._s(_vm.t("The internet’s source of freely usable {linkStart} images {linkEnd}",{linkStart:"<a href='https://unsplash.com/?utm_source=filestack&utm_medium=referral' target='_blank'>",linkEnd:" </a>"}))}})]):_vm._e(),_vm._v(" "),_c("input",{staticClass:"fsp-url-source__input",attrs:{type:"text",placeholder:_vm.t("Search free high-resolution photos... "),tabindex:"0"},domProps:{value:_vm.searchWord},on:{input:_vm.updateUnsplashSearchInput}}),_vm._v(" "),_c("button",{staticClass:"fsp-button fsp-url-source__submit-button",attrs:{type:"submit",tabindex:"0","aria-label":"Search Image"}},[_c("div",{staticClass:"fsp-icon fsp-image-search__submit-icon"})])])]),_vm._v(" "),!_vm.isFinished&&_vm.isLoading?_c("loading"):_vm._e(),_vm._v(" "),_vm.isFinished?_c("div",{staticClass:"fsp-unsplash_results"},[_vm.results.length>0?_c("grid-array",{staticStyle:{"padding-top":"0px"},attrs:{provider:"unsplash",files:_vm.results}}):_vm._e(),_vm._v(" "),_vm.isLoading?_c("div",{staticClass:"fsp-loading-more-indicator"},[_c("span",[_vm._v(_vm._s(_vm.t("Loading more results")))])]):_vm._e()],1):_vm._e()],1)]);};var __vue_staticRenderFns__$k=[];__vue_render__$k._withStripped=true;/* style */var __vue_inject_styles__$k=undefined;/* scoped */var __vue_scope_id__$k=undefined;/* module identifier */var __vue_module_identifier__$k=undefined;/* functional template */var __vue_is_functional_template__$k=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$k=/*#__PURE__*/normalizeComponent({render:__vue_render__$k,staticRenderFns:__vue_staticRenderFns__$k},__vue_inject_styles__$k,__vue_script__$k,__vue_scope_id__$k,__vue_is_functional_template__$k,__vue_module_identifier__$k,false,undefined,undefined,undefined);//
var script$l={props:{searchOrder:String,hideMenu:Boolean},computed:_objectSpread({},index_esm.mapGetters(['cropFiles','mobileNavActive'])),components:{TabWrapper:__vue_component__$i,Tab:__vue_component__$j,Unsplash:__vue_component__$k,ImageSearch:__vue_component__$h,MobileMenuButton:__vue_component__$1}};/* script */var __vue_script__$l=script$l;/* template */var __vue_render__$l=function __vue_render__$l(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[!_vm.mobileNavActive?_c("div",{staticClass:"fsp-web-search"},[_vm.searchOrder==="googlesearch"?_c("tab-wrapper",[_c("tab",{attrs:{title:"Google Search"}},[_c("image-search",{attrs:{"global-search-enabled":true}})],1),_vm._v(" "),_c("tab",{attrs:{title:"Unsplash"}},[_c("unsplash",{attrs:{"global-search-enabled":true}})],1)],1):_c("tab-wrapper",[_c("tab",{attrs:{title:"Unsplash"}},[_c("unsplash",{attrs:{"global-search-enabled":true}})],1),_vm._v(" "),_c("tab",{attrs:{title:"Google Search"}},[_c("image-search",{attrs:{"global-search-enabled":true}})],1)],1),_vm._v(" "),!_vm.hideMenu&&!_vm.cropFiles?_c("mobile-menu-button"):_vm._e()],1):_c("div",{staticClass:"fsp-header"},[_vm.mobileNavActive?_c("span",{staticClass:"fsp-header-text"},[_vm._v(_vm._s(_vm.t("Select From")))]):_vm._e(),_vm._v(" "),!_vm.hideMenu&&!_vm.cropFiles?_c("mobile-menu-button"):_vm._e()],1)]);};var __vue_staticRenderFns__$l=[];__vue_render__$l._withStripped=true;/* style */var __vue_inject_styles__$l=undefined;/* scoped */var __vue_scope_id__$l=undefined;/* module identifier */var __vue_module_identifier__$l=undefined;/* functional template */var __vue_is_functional_template__$l=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$l=/*#__PURE__*/normalizeComponent({render:__vue_render__$l,staticRenderFns:__vue_staticRenderFns__$l},__vue_inject_styles__$l,__vue_script__$l,__vue_scope_id__$l,__vue_is_functional_template__$l,__vue_module_identifier__$l,false,undefined,undefined,undefined);//
var script$m={computed:_objectSpread({},index_esm.mapGetters(['selectLabelIsActive']))};/* script */var __vue_script__$m=script$m;/* template */var __vue_render__$m=function __vue_render__$m(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-select-labels","class":{"fsp-select-labels--active":_vm.selectLabelIsActive}},[_c("div",{staticClass:"fsp-drop-area__title fsp-text__title"},[_vm._v("\n    "+_vm._s(_vm.t("Select Files to Upload"))+"\n  ")]),_vm._v(" "),_c("div",{staticClass:"fsp-drop-area__subtitle fsp-text__subheader"},[_vm._v("\n    "+_vm._s(_vm.t("or Drag and Drop, Copy and Paste Files"))+"\n  ")])]);};var __vue_staticRenderFns__$m=[];__vue_render__$m._withStripped=true;/* style */var __vue_inject_styles__$m=undefined;/* scoped */var __vue_scope_id__$m=undefined;/* module identifier */var __vue_module_identifier__$m=undefined;/* functional template */var __vue_is_functional_template__$m=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$m=/*#__PURE__*/normalizeComponent({render:__vue_render__$m,staticRenderFns:__vue_staticRenderFns__$m},__vue_inject_styles__$m,__vue_script__$m,__vue_scope_id__$m,__vue_is_functional_template__$m,__vue_module_identifier__$m,false,undefined,undefined,undefined);//
var script$n={components:{SelectFilesLabel:__vue_component__$m},computed:_objectSpread({},index_esm.mapGetters(['accept','canAddMoreFiles','maxFiles']),{acceptStr:function acceptStr(){if(this.accept){return this.accept.join(',');}return undefined;},multiple:function multiple(){return this.maxFiles>1;}}),methods:_objectSpread({},index_esm.mapActions(['addFile','updateSelectLabelActive']),{clearEvent:function clearEvent(event){event.target.value=null;},onMouseover:function onMouseover(){this.updateSelectLabelActive(true);},onMouseout:function onMouseout(){this.updateSelectLabelActive(false);},onFilesSelected:function onFilesSelected(event){try{var files=event.target.files;if(!files.length){return;}for(var i=0;i<files.length;i+=1){this.addFile(files[i]);}}catch(e){console.error(event.target.files);throw e;}},openSelectFile:function openSelectFile(){this.$refs.fileUploadInput.click();}}),mounted:function mounted(){var dropArea=this.$refs.dropArea;if(dropArea){dropArea.addEventListener('mouseover',this.onMouseover);dropArea.addEventListener('mouseout',this.onMouseout);}}};/* script */var __vue_script__$n=script$n;/* template */var __vue_render__$n=function __vue_render__$n(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-drop-area-container"},[_c("div",{ref:"dropArea",staticClass:"fsp-drop-area",attrs:{tabindex:"0"},on:{click:_vm.openSelectFile,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.openSelectFile($event);}}},[_c("select-files-label"),_vm._v(" "),_c("input",{ref:"fileUploadInput",staticClass:"fsp-local-source__fileinput",attrs:{id:"fsp-fileUpload",type:"file",accept:_vm.acceptStr,multiple:_vm.multiple,disabled:!_vm.canAddMoreFiles},on:{change:function change($event){return _vm.onFilesSelected($event);},click:function click($event){return _vm.clearEvent($event);}}})],1)]);};var __vue_staticRenderFns__$n=[];__vue_render__$n._withStripped=true;/* style */var __vue_inject_styles__$n=undefined;/* scoped */var __vue_scope_id__$n=undefined;/* module identifier */var __vue_module_identifier__$n=undefined;/* functional template */var __vue_is_functional_template__$n=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$n=/*#__PURE__*/normalizeComponent({render:__vue_render__$n,staticRenderFns:__vue_staticRenderFns__$n},__vue_inject_styles__$n,__vue_script__$n,__vue_scope_id__$n,__vue_is_functional_template__$n,__vue_module_identifier__$n,false,undefined,undefined,undefined);// Generates guid-like random string
var guid=function guid(len){// eslint-disable-next-line
return new Array(len).join().replace(/(.|$)/g,function(){return(Math.random()*36|0).toString(36)[Math.random()<0.5?'toString':'toUpperCase']();});};/**
   * Convers blob to array buffer
   * @param {Blob} blobFile
   */var blobToArrayBuffer=function blobToArrayBuffer(blobFile){return new Promise(function(resolve,reject){if(!blobFile){return reject();}var reader=new FileReader();reader.onloadend=function(){resolve(reader.result);};reader.onerror=function(err){reject(err);};return reader.readAsArrayBuffer(blobFile);});};/**
   * Convers blob to Image object
   * @param {Blob} blob
   */var blobToImage=function blobToImage(blob){var image=document.createElement('img');var url=URL.createObjectURL(blob);image.src=url;return new Promise(function(resolve,reject){image.onerror=function(){return reject(new Error('Failed to create Image() from blob'));};image.onload=function(){return resolve(image);};});};/**
   * converts datauri to Blob
   *
   * @param {string} dataURI
   */var dataURItoBlob=function dataURItoBlob(dataURI){var mime=dataURI.split(',')[0].split(':')[1].split(';')[0];var binary=atob(dataURI.split(',')[1]);var array=[];for(var i=0;i<binary.length;i++){array.push(binary.charCodeAt(i));}return new Blob([new Uint8Array(array)],{type:mime});};var dataURItoBlobUrl=function dataURItoBlobUrl(dataURI){return URL.createObjectURL(dataURItoBlob(dataURI));};/**
   * Converts blob to file object safe
   *
   * @param {Blob} blobFile
   * @param {string} name
   */var blobToFile=function blobToFile(blobFile,name){var File=window.File;try{return new File([blobFile],name);}catch(e){// eslint-disable-next-line
File=/*#__PURE__*/function(_Blob){_inherits(File,_Blob);function File(chunks,filename){var _this6;var opts=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_classCallCheck(this,File);_this6=_possibleConstructorReturn(this,_getPrototypeOf(File).call(this,chunks,opts));_this6.lastModifiedDate=new Date();_this6.lastModified=_this6.lastModifiedDate;_this6.name=filename;return _this6;}return File;}(_wrapNativeSuper(Blob));return new File([blobFile],name);}};var consistentMimeMap={'video/avi':'video/x-msvideo','video/vnd.avi':'video/x-msvideo'// ... add more mappings if needed
};/**
   * Return a normalized file size as number or null if conditions are not fullfilled
   * @param {object} file
   * @returns {number|null}
   */var normalizeFileSize=function normalizeFileSize(file){var normalizedFileSize=null;if(file.size){if(typeof file.size==='number'){normalizedFileSize=file.size;}else if(typeof file.size==='string'&&file.size===parseInt(file.size,10).toString()){// convert when it's "200", but not when it's "200x250" (eg. facebook, instagram)
normalizedFileSize=parseInt(file.size,10);}}return normalizedFileSize;};var normalizeLocalFile=function normalizeLocalFile(inputFile,_ref2){var getters=_ref2.getters;var uuid=guid(16);var file=_defineProperty({source:'local_file_system',mimetype:consistentMimeMap[inputFile.type.toLowerCase()]||inputFile.type.toLowerCase(),name:inputFile.name,path:inputFile.name,size:inputFile.size,originalFile:inputFile,uuid:uuid,uploadId:uuid,progress:0,progressSize:''},"size",normalizeFileSize(inputFile));var knownMimetype=getters.apiClient.utils.extensionToMime(inputFile.name);// try to convert extension to mimetype
if(!inputFile.type){file.mimetype=knownMimetype;// if extension is found but we dont have it in our db try to read it again from magic bytes - avoid browser and system incompatibility
}else if(file.mimetype!==knownMimetype){// we need only begining of the file to read mb
return blobToArrayBuffer(inputFile.slice(0,4100)).then(function(blobFile){var foundMime=getters.apiClient.utils.getMimetype(blobFile,inputFile.name);file.mimetype=foundMime!=='application/octet-stream'?foundMime:file.mimetype;return Promise.resolve(file);});}return Promise.resolve(file);};/**
   * Return a normalized file object from different sources
   * @param {object} file - file object to be normalized
   * @param {object} cloudParams
   * @param {object} cloudParams.currentCloud - settings of currently selected cloud provider
   * @param {object} cloudParams.cloudFolders - list of all folders of the selected cloud
   * @param {object} cloudParams.selectedCloudPath - path to the selected folder
   * @returns {object}
   */var normalizeFile=function normalizeFile(file,_ref3){var currentCloud=_ref3.currentCloud,cloudFolders=_ref3.cloudFolders,selectedCloudPath=_ref3.selectedCloudPath;if(file.source==='dragged-from-web'){file.name=file.url.split('/').pop();file.path=file.url;file.mimetype='text/html';var ext=file.url.split('.').pop();var allowed=['jpg','jpeg','png','tiff','gif','bmp'];if(ext&&allowed.indexOf(ext.toLowerCase())!==-1){file.thumbnail=file.url;file.mimetype="image/".concat(ext);}}// link_path exists on responses from cloud().metadata(...)
if(file.link_path){file.source='url';file.path=file.link_path;file.mimetype=file.type;}// Reconstruct "original path" for cloud files from current paths
// because file paths from the API are not human readable and do not
// represent the entire folder tree
if(file.sourceKind==='cloud'&&currentCloud&&currentCloud.path){var originalPath=currentCloud.path.map(function(p){return cloudFolders[p]&&cloudFolders[p].name;}).filter(function(p){return p;}).join('/');// Folder selection sets a "selected" path so we can determine the parent folder of the selected files
var folderName=cloudFolders[selectedCloudPath]&&cloudFolders[selectedCloudPath].name;if(folderName){originalPath=originalPath?"".concat(originalPath,"/").concat(folderName):folderName;}file.originalPath=originalPath?"/".concat(originalPath,"/").concat(file.name):"/".concat(file.name);}file.uuid=guid(16);file.uploadId=file.uuid;file.progress=0;file.progressSize='';file.size=normalizeFileSize(file);return Promise.resolve(file);};var normalizeFileToResponse=function normalizeFileToResponse(normalizeFile){return{'url':normalizeFile.path,'type':normalizeFile.type,'filename':normalizeFile.name,'display_name':normalizeFile.display_name,'thumbnail':normalizeFile.thumbnail,'size':normalizeFile.size,'headers':normalizeFile.headers,'uuid':normalizeFile.uuid};};//
var script$o={computed:_objectSpread({},index_esm.mapGetters(['config','getSourceByName','filesList','fileCount']),{current:function current(){return this.getSourceByName(this.name);}}),props:['name'],methods:_objectSpread({},index_esm.mapActions(['addFile','startUploading','fetchMetadata']),{addRawFile:function addRawFile(inputFile){var _this7=this;if(!(inputFile instanceof Blob)||!(inputFile instanceof File)){throw new Error('File should be instance of bBlob or File');}if(!Array.isArray(inputFile)){inputFile=[inputFile];}var todo=[];inputFile.forEach(function(rawFile){rawFile.sourceName=_this7.name;todo.push(_this7.addFile(rawFile));});return Promise.all(todo).then(function(res){return inputFile.length===1?res.pop():res;});},fetchAndAddUrl:function fetchAndAddUrl(url,headers){return this.$store.dispatch('fetchCustomUrl',{url:url,headers:headers,sourceName:this.name});},addCustomUrl:function addCustomUrl(inputFile){var _this8=this;if(!inputFile.url||typeof inputFile.url!=='string'){throw new Error('Url property should exists and be typeof string');}if(!inputFile.filename||typeof inputFile.filename!=='string'){throw new Error('filename property should exists and be typeof string');}if(!Array.isArray(inputFile)){inputFile=[inputFile];}var todo=[];inputFile.forEach(function(fileToProcess){var fileObj={type:fileToProcess.type,link_path:fileToProcess.url,filename:fileToProcess.filename,display_name:fileToProcess.display_name||fileToProcess.filename,sourceKind:'custom',sourceName:_this8.name,thumb_exists:fileToProcess.thumbnail?true:false,thumbnail:fileToProcess.thumbnail,is_dir:false,headers:fileToProcess.headers};todo.push(_this8.addFile(fileObj));});return Promise.all(todo).then(function(res){return inputFile.length===1?res.pop():res;});},showSummaryView:function showSummaryView(){return this.$store.commit('CHANGE_ROUTE',['summary']);},addFiles:function addFiles(files){var _this9=this;if(!files){return;}var promises=[];if(files instanceof File){files['source']='custom_source';promises.push(this.addFile(file));}else if(files instanceof FileList){for(var i=0;i<files.length;i++){files['source']='custom_source';promises.push(this.addFile(files[i]));}}else{if(!Array.isArray(files)){files=[files];}files.forEach(function(file){var fileObj={type:file.type,link_path:file.url,filename:file.filename,display_name:file.display_name||file.filename,sourceKind:'custom',sourceName:_this9.name,thumb_exists:file.thumbnail?true:false,thumbnail:file.thumbnail,is_dir:false,headers:file.headers};promises.push(_this9.addFile(fileObj));});}return Promise.all(promises).then(function(res){return _this9.filesList.map(function(file){return normalizeFileToResponse(file);});});},removeFile:function removeFile(uuid){var file=this.filesList.find(function(file){return file.uuid===uuid;});if(!file){return;}return this.addFile(file);},getFile:function getFile(uuid){var file=this.filesList.find(function(file){return file.uuid===uuid;});if(!file){return;}return normalizeFileToResponse(file);},filesListResponse:function filesListResponse(){return this.filesList.map(function(file){return normalizeFileToResponse(file);});}}),mounted:function mounted(){if(this.current.mounted&&typeof this.current.mounted==='function'){this.current.mounted(this.$refs.placeholder,{addRawFile:this.addRawFile,// add raw file or blobct
addCustomUrl:this.addCustomUrl,// add file from given url
fetchAndAddUrl:this.fetchAndAddUrl,// fetch metadata and simple add url
startUploading:this.startUploading,// start file uploading
addFile:this.addFiles,// / add raw file or blobct
getFile:this.getFile,// return file
removeFile:this.removeFile,// remove file
filesList:this.filesListResponse,// return file list
count:this.fileCount,// return files count
metadata:this.fetchMetadata,// fetch metadata
showSummaryView:this.showSummaryView,// show summmary view
config:this.config// return config
});}}};/* script */var __vue_script__$o=script$o;/* template */var __vue_render__$o=function __vue_render__$o(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-custom-source"},[_c("div",{ref:"placeholder",attrs:{id:"fs-custom-placeholder"}})]);};var __vue_staticRenderFns__$o=[];__vue_render__$o._withStripped=true;/* style */var __vue_inject_styles__$o=undefined;/* scoped */var __vue_scope_id__$o=undefined;/* module identifier */var __vue_module_identifier__$o=undefined;/* functional template */var __vue_is_functional_template__$o=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$o=/*#__PURE__*/normalizeComponent({render:__vue_render__$o,staticRenderFns:__vue_staticRenderFns__$o},__vue_inject_styles__$o,__vue_script__$o,__vue_scope_id__$o,__vue_is_functional_template__$o,__vue_module_identifier__$o,false,undefined,undefined,undefined);//
var script$p={props:['source'],computed:_objectSpread({},index_esm.mapGetters(['accept','canAddMoreFiles','clouds','customSourceName','filesWaiting','route','maxFiles','mobileNavActive','uploadStarted']),{acceptStr:function acceptStr(){if(this.accept){return this.accept.join(',');}return undefined;},itemClasses:function itemClasses(){return{'fsp-source-list__item':true,'fsp-source-list__item--active':this.isSelectedSource,'fsp-source-list__item--disabled':this.uploadStarted};},itemLabel:function itemLabel(){if(this.source.name==='customsource'){return this.customSourceName||'Custom Source';}return this.source.label;},isSelectedSource:function isSelectedSource(){if(this.route[0]==='summary'){return false;}var selectedRoute=this.route.length>1?this.route[1]:'local_file_system';// custom source waoraround
if(selectedRoute.indexOf('custom/')>-1){selectedRoute=selectedRoute.split('/').pop();}return selectedRoute===this.source.name;},isAuthorized:function isAuthorized(){// Custom source doesn't require auth
if(this.source.ame==='customsource'){return false;}var cloud=this.clouds[this.source.name];return cloud&&cloud.status==='ready';},isMobileLocal:function isMobileLocal(){if(bowser.mobile&&this.mobileNavActive){return this.sourceName==='local_file_system'||this.sourceName==='video'||this.sourceName==='audio'||this.sourceName==='webcam';}return false;},multiple:function multiple(){return this.maxFiles>1;},sourceSelectedCount:function sourceSelectedCount(){var _this10=this;var checkSelected=this.filesWaiting.filter(function(fw){// hack for now because we cnanot pass eny adition attrs to add file (after rewrite that method we should change this counter)
if(fw.sourceKind==='custom'||fw.sourceName){if(fw.sourceName===_this10.source.name){return true;}return false;}return fw.source===_this10.source.name;});return checkSelected.length;}}),methods:_objectSpread({},index_esm.mapActions(['updateMobileNavActive','addFile','logout']),{clearEvent:function clearEvent(event){event.target.value=null;},onNavClick:function onNavClick(source){if(this.isMobileLocal){this.openSelectFile();}else if(source.isCustom){this.updateMobileNavActive(false);this.$store.dispatch('goToLastPath',"custom/".concat(source.name));}else{this.updateMobileNavActive(false);this.$store.dispatch('goToLastPath',source.name);}},openSelectFile:function openSelectFile(){this.$refs.mobileLocaInput.click();},onFilesSelected:function onFilesSelected(event){var files=event.target.files;for(var i=0;i<files.length;i+=1){this.addFile(files[i]);}}})};/* script */var __vue_script__$p=script$p;/* template */var __vue_render__$p=function __vue_render__$p(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{"class":_vm.itemClasses,attrs:{title:_vm.t(_vm.itemLabel),tabindex:"0"},on:{keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.onNavClick(_vm.source);},click:function click($event){return _vm.onNavClick(_vm.source);}}},[_vm.sourceSelectedCount?_c("span",{staticClass:"fsp-badge--source"},[_vm._v(_vm._s(_vm.sourceSelectedCount))]):_vm._e(),_vm._v(" "),!_vm.source.icon?_c("span",{staticClass:"fsp-source-list__icon fsp-icon","class":"fsp-icon--"+_vm.source.name}):_vm._e(),_vm._v(" "),_vm.source.icon?_c("span",{staticClass:"fsp-source-list__icon fsp-icon fsp-custom-icon",domProps:{innerHTML:_vm._s(_vm.source.icon)}}):_vm._e(),_vm._v(" "),_c("span",{staticClass:"fsp-source-list__label"},[_vm._v(_vm._s(_vm.t(_vm.itemLabel)))]),_vm._v(" "),_vm.isAuthorized?_c("span",{staticClass:"fsp-source-list__logout",on:{click:function click($event){$event.stopPropagation();return _vm.logout(_vm.source.name);}}},[_vm._v(" "+_vm._s(_vm.t("Sign Out")))]):_vm._e(),_vm._v(" "),_vm.isMobileLocal?_c("input",{ref:"mobileLocaInput",staticClass:"fsp-local-source__fileinput",attrs:{type:"file",accept:_vm.acceptStr,multiple:_vm.multiple,disabled:!_vm.canAddMoreFiles},on:{change:function change($event){return _vm.onFilesSelected($event);},click:function click($event){return _vm.clearEvent($event);}}}):_vm._e()]);};var __vue_staticRenderFns__$p=[];__vue_render__$p._withStripped=true;/* style */var __vue_inject_styles__$p=undefined;/* scoped */var __vue_scope_id__$p=undefined;/* module identifier */var __vue_module_identifier__$p=undefined;/* functional template */var __vue_is_functional_template__$p=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$p=/*#__PURE__*/normalizeComponent({render:__vue_render__$p,staticRenderFns:__vue_staticRenderFns__$p},__vue_inject_styles__$p,__vue_script__$p,__vue_scope_id__$p,__vue_is_functional_template__$p,__vue_module_identifier__$p,false,undefined,undefined,undefined);//
var script$q={components:{SourceNavItem:__vue_component__$p},computed:_objectSpread({},index_esm.mapGetters(['isSidebarHidden','cropFiles','fromSources','mobileNavActive']),{sidebarClasses:function sidebarClasses(){return{'fsp-modal__sidebar--mobile':this.mobileNavActive,'fsp-modal__sidebar':true};}})};/* script */var __vue_script__$q=script$q;/* template */var __vue_render__$q=function __vue_render__$q(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return!_vm.cropFiles&&!_vm.isSidebarHidden?_c("div",{"class":_vm.sidebarClasses},[_c("div",{staticClass:"fsp-source-list"},_vm._l(_vm.fromSources,function(source){return _c("source-nav-item",{key:source.name,attrs:{source:source}});}),1)]):_vm._e();};var __vue_staticRenderFns__$q=[];__vue_render__$q._withStripped=true;/* style */var __vue_inject_styles__$q=undefined;/* scoped */var __vue_scope_id__$q=undefined;/* module identifier */var __vue_module_identifier__$q=undefined;/* functional template */var __vue_is_functional_template__$q=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$q=/*#__PURE__*/normalizeComponent({render:__vue_render__$q,staticRenderFns:__vue_staticRenderFns__$q},__vue_inject_styles__$q,__vue_script__$q,__vue_scope_id__$q,__vue_is_functional_template__$q,__vue_module_identifier__$q,false,undefined,undefined,undefined);//
var script$r={props:{source:String},computed:_objectSpread({},index_esm.mapGetters(['canAddMoreFiles'])),methods:_objectSpread({},index_esm.mapActions(['addFile']),{openSelectFile:function openSelectFile(){this.$refs.mobileLocaInput.click();},onFilesSelected:function onFilesSelected(event){var files=event.target.files;for(var i=0;i<files.length;i+=1){this.addFile(files[i]);}}})};/* script */var __vue_script__$r=script$r;/* template */var __vue_render__$r=function __vue_render__$r(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-mobile-cam"},[_c("span",{staticClass:"fsp-button fsp-button--primary",on:{click:function click($event){return _vm.openSelectFile();}}},[_vm._v("\n    "+_vm._s(_vm.t("Click to record audio, video or pick file"))+"\n  ")]),_vm._v(" "),_c("input",{ref:"mobileLocaInput",staticClass:"fsp-local-source__fileinput",attrs:{type:"file",accept:_vm.acceptStr,multiple:_vm.multiple,disabled:!_vm.canAddMoreFiles},on:{change:function change($event){return _vm.onFilesSelected($event);}}})]);};var __vue_staticRenderFns__$r=[];__vue_render__$r._withStripped=true;/* style */var __vue_inject_styles__$r=undefined;/* scoped */var __vue_scope_id__$r=undefined;/* module identifier */var __vue_module_identifier__$r=undefined;/* functional template */var __vue_is_functional_template__$r=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$r=/*#__PURE__*/normalizeComponent({render:__vue_render__$r,staticRenderFns:__vue_staticRenderFns__$r},__vue_inject_styles__$r,__vue_script__$r,__vue_scope_id__$r,__vue_is_functional_template__$r,__vue_module_identifier__$r,false,undefined,undefined,undefined);//
var script$s={components:{FooterNav:__vue_component__$g,MobileCam:__vue_component__$r},computed:{isMobile:function isMobile(){return bowser.mobile;},isTablet:function isTablet(){return bowser.tablet;}},data:function data(){return{src:null,imgSrc:null,pictureTaken:false,webCamImageSrc:'',webCamError:'',hasUserMedia:false};},methods:_objectSpread({},index_esm.mapActions(['addFile']),{webCamReady:function webCamReady(){var _this11=this;if(!navigator||!navigator.mediaDevices){this.webCamError='disabled';return;}navigator.mediaDevices.getUserMedia({video:true,audio:false}).then(function(stream){_this11.$refs.video.srcObject=stream;_this11.$refs.video.play();_this11.hasUserMedia=true;})["catch"](function(){_this11.webCamError='disabled';});},turnWebCamOff:function turnWebCamOff(){if(this.$refs.video&&this.$refs.video.srcObject){this.$refs.video.srcObject.getTracks().forEach(function(track){track.stop();});}},clearPhoto:function clearPhoto(){var canvas=document.createElement('canvas');var context=canvas.getContext('2d');context.fillRect(0,0,canvas.width,canvas.height);this.webCamImageSrc='';this.pictureTaken=false;this.webCamReady();},getPhoto:function getPhoto(){if(!this.hasUserMedia)return null;var video=this.$refs.video;var canvas=document.createElement('canvas');var context=canvas.getContext('2d');canvas.height=video.clientHeight;canvas.width=video.clientWidth;context.drawImage(video,0,0);this.webCamImageSrc=dataURItoBlobUrl(canvas.toDataURL());this.imgSrc=this.webCamImageSrc;this.canvas=canvas;this.pictureTaken=true;this.turnWebCamOff();return canvas;},addPhoto:function addPhoto(){var _this12=this;var lang=this.$store.getters.lang;this.canvas.toBlob(function(blob){blob.name="webcam-".concat(new Date().toLocaleString(lang),".png");_this12.addFile(blob);});}}),beforeMount:function beforeMount(){if(this.isMobile){return;}if(navigator.mediaDevices){this.webCamReady();}else{this.webCamError='browser';}this.pictureTaken=false;},beforeDestroy:function beforeDestroy(){if(this.isMobile){return;}this.turnWebCamOff();}};/* script */var __vue_script__$s=script$s;/* template */var __vue_render__$s=function __vue_render__$s(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-webcam__container"},[!_vm.isMobile&&!_vm.isTablet?[_vm.webCamError?_c("div",[_vm.webCamError==="disabled"?_c("div",{staticClass:"fsp-source-auth__wrapper"},[_c("span",{staticClass:"fsp-icon fsp-icon--auth fsp-source-auth__el fsp-icon--webcam-disabled"}),_vm._v(" "),_c("div",{staticClass:"fsp-text__title fsp-source-auth__el"},[_vm._v("\n          "+_vm._s(_vm.t("Webcam Disabled"))+"\n        ")]),_vm._v(" "),_c("div",{staticClass:"fsp-source-auth__el"},[_c("span",{staticClass:"fsp-text__subheader"},[_vm._v("\n            "+_vm._s(_vm.t("Please enable your webcam to take a photo."))+"\n          ")])])]):_vm._e(),_vm._v(" "),_vm.webCamError==="browser"?_c("div",{staticClass:"fsp-source-auth__wrapper"},[_c("span",{staticClass:"fsp-icon fsp-icon--auth fsp-source-auth__el fsp-icon--webcam-disabled"}),_vm._v(" "),_c("div",{staticClass:"fsp-text__title fsp-source-auth__el"},[_vm._v("\n          "+_vm._s(_vm.t("Webcam Not Supported"))+"\n        ")]),_vm._v(" "),_c("div",{staticClass:"fsp-source-auth__el"},[_c("span",{staticClass:"fsp-text__subheader"},[_vm._v("\n            "+_vm._s(_vm.t("Your current browser does not support webcam functionality."))+"\n          ")]),_vm._v(" "),_c("br"),_vm._v(" "),_c("span",{staticClass:"fsp-text__subheader"},[_vm._v("\n            "+_vm._s(_vm.t("We suggest using Chrome or Firefox."))+"\n          ")])])]):_vm._e()]):_vm._e(),_vm._v(" "),!_vm.webCamError?_c("div",{staticClass:"fsp-webcam"},[_c("img",{directives:[{name:"show",rawName:"v-show",value:_vm.pictureTaken,expression:"pictureTaken"}],ref:"photo",staticClass:"fsp-webcam__image",attrs:{src:_vm.imgSrc}}),_vm._v(" "),_c("video",{directives:[{name:"show",rawName:"v-show",value:!_vm.pictureTaken,expression:"!pictureTaken"}],ref:"video",staticClass:"fsp-webcam__video",attrs:{src:_vm.src}})]):_vm._e(),_vm._v(" "),!_vm.webCamError?_c("footer-nav",{attrs:{slot:"footer","is-visible":true},slot:"footer"},[_c("span",{attrs:{slot:"nav-center"},slot:"nav-center"},[!_vm.pictureTaken?_c("span",{staticClass:"fsp-button fsp-button--primary fsp-button--webcam",on:{click:_vm.getPhoto}},[_c("span",{staticClass:"fsp-icon--webcam-start"})]):_vm._e(),_vm._v(" "),_vm.pictureTaken?_c("span",{staticClass:"fsp-button fsp-button--cancel fsp-button--webcam",on:{click:_vm.clearPhoto}},[_c("span",{staticClass:"fsp-icon--webcam-stop"})]):_vm._e()]),_vm._v(" "),_vm.pictureTaken?_c("span",{staticClass:"fsp-button fsp-button--primary",attrs:{slot:"nav-right",title:""+_vm.t("Next")},on:{click:_vm.addPhoto},slot:"nav-right"},[_vm._v("\n        "+_vm._s(_vm.t("Next"))+"\n      ")]):_vm._e()]):_vm._e()]:_vm._e(),_vm._v(" "),_vm.isMobile||_vm.isTablet?[_c("mobile-cam")]:_vm._e()],2);};var __vue_staticRenderFns__$s=[];__vue_render__$s._withStripped=true;/* style */var __vue_inject_styles__$s=undefined;/* scoped */var __vue_scope_id__$s=undefined;/* module identifier */var __vue_module_identifier__$s=undefined;/* functional template */var __vue_is_functional_template__$s=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$s=/*#__PURE__*/normalizeComponent({render:__vue_render__$s,staticRenderFns:__vue_staticRenderFns__$s},__vue_inject_styles__$s,__vue_script__$s,__vue_scope_id__$s,__vue_is_functional_template__$s,__vue_module_identifier__$s,false,undefined,undefined,undefined);//
var script$t={components:{Loading:__vue_component__$c},data:function data(){return{url:''};},computed:{isUrlFetching:function isUrlFetching(){return this.$store.getters.isUrlFetching;}},methods:{fetchUrl:function fetchUrl(){var _this13=this;if(this.url){this.$store.dispatch('fetchUrl',this.url).then(function(res){if(res&&_this13.$store.getters.maxFiles>1){_this13.$store.commit('CHANGE_ROUTE',['summary']);}});}}}};/* script */var __vue_script__$t=script$t;/* template */var __vue_render__$t=function __vue_render__$t(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-url-source"},[_vm.isUrlFetching?_c("loading"):_vm._e(),_vm._v(" "),_c("div",{staticClass:"fsp-url-source__container"},[_c("form",{staticClass:"fsp-url-source__form",on:{submit:function submit($event){$event.preventDefault();return _vm.fetchUrl($event);}}},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.url,expression:"url"}],staticClass:"fsp-url-source__input",attrs:{type:"url",placeholder:_vm.t("Enter a URL"),tabindex:"0"},domProps:{value:_vm.url},on:{input:function input($event){if($event.target.composing){return;}_vm.url=$event.target.value;}}}),_vm._v(" "),_vm._m(0)])])],1);};var __vue_staticRenderFns__$t=[function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("button",{staticClass:"fsp-button fsp-url-source__submit-button",attrs:{type:"submit",tabindex:"0"}},[_c("div",{staticClass:"fsp-icon fsp-url-source__submit-icon"})]);}];__vue_render__$t._withStripped=true;/* style */var __vue_inject_styles__$t=undefined;/* scoped */var __vue_scope_id__$t=undefined;/* module identifier */var __vue_module_identifier__$t=undefined;/* functional template */var __vue_is_functional_template__$t=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$t=/*#__PURE__*/normalizeComponent({render:__vue_render__$t,staticRenderFns:__vue_staticRenderFns__$t},__vue_inject_styles__$t,__vue_script__$t,__vue_scope_id__$t,__vue_is_functional_template__$t,__vue_module_identifier__$t,false,undefined,undefined,undefined);//
var UPLOAD_BTN_DISABLE_SECONDS=7000;// Time in milliseconds
var UPLOAD_MESSAGE='Your content is getting processed and will be ready for upload soon.';var script$u={props:{type:String},components:{FooterNav:__vue_component__$g,Loading:__vue_component__$c,MobileCam:__vue_component__$r},computed:_objectSpread({},index_esm.mapGetters(['getModuleUrl']),{isMobile:function isMobile(){return bowser.mobile;},isTablet:function isTablet(){return bowser.tablet;},client:function client(){return this.$store.getters.cloudClient;},filesList:function filesList(){return this.$store.getters.filesList;},maxFiles:function maxFiles(){return this.$store.getters.maxFiles;},routesHistory:function routesHistory(){return this.$store.getters.routesHistory;},isErrored:function isErrored(){return['browsererror','scripterror','accessDenied'].indexOf(this.state)!==-1;}}),data:function data(){return{archiveId:null,pendingRequest:false,attempt:0,state:'connecting',startButtonInit:false,publisher:null,session:null,otSession:{key:null,ot_session_id:null,ot_token:null},publisherOptions:{insertMode:'append',width:'100%',height:'100%'}};},methods:_objectSpread({},index_esm.mapActions(['addFile','toggleServerUploadInProgress','showNotification']),{goToSummary:function goToSummary(){this.$store.commit('CHANGE_ROUTE',['summary']);this.$store.dispatch('updateMobileNavActive',false);},loadOpenTok:function loadOpenTok(){var _this14=this;this.state='connecting';return _FilestackLoader$loadModule('opentok',"".concat(this.getModuleUrl('fs-opentok'),"?").concat(this.attempt))["catch"](function(){_this14.state='scripterror';});},reset:function reset(){var _this15=this;if(this.session){if(this.publisher)this.session.unpublish(this.publisher);this.session.disconnect();}this.attempt+=1;this.loadOpenTok().then(function(tok){_this15.initialize(tok);});},initialize:function initialize(tok){var _this16=this;if(!tok){console.error('Cannot initialize opentok');return;}this.client.tokInit(this.$props.type).then(function(res){_this16.otSession=res;var pubOptions=_objectSpread({},_this16.publisherOptions,{mirror:false,resolution:_this16.$store.getters.videoResolution,publishVideo:_this16.$props.type==='video'});_this16.session=tok.initSession(_this16.otSession.key,_this16.otSession.ot_session_id);_this16.session.connect(_this16.otSession.ot_token,function(err){if(!err&&_this16.$refs&&_this16.$refs.video){_this16.publisher=tok.initPublisher(_this16.$refs.video,pubOptions);_this16.session.publish(_this16.publisher);_this16.publisher.on('accessAllowed',function(){_this16.state='ready';_this16.startButtonInit=true;});_this16.publisher.on('accessDenied',function(){_this16.state='accessDenied';});}else{_this16.state='errored';console.warn('OT_ERROR',err);}});_this16.session.on('archiveStarted',function(evt){_this16.archiveId=evt.id;_this16.state='recording';});_this16.session.on('archiveStopped',function(evt){_this16.archiveId=evt.id;});})["catch"](function(){_this16.state='errored';});},start:function start(){var _this17=this;if(!this.startButtonInit||this.pendingRequest){return;}this.pendingRequest=true;this.client.tokStart(this.$props.type,this.otSession.key,this.otSession.ot_session_id).then(function(){_this17.pendingRequest=false;})["catch"](function(err){_this17.pendingRequest=false;_this17.state='errored';console.error(err);});},stop:function stop(){var _this18=this;if(!this.archiveId||this.pendingRequest){return;}this.pendingRequest=true;this.client.tokStop(this.$props.type,this.otSession.key,this.otSession.ot_session_id,this.archiveId).then(function(){_this18.pendingRequest=false;_this18.state='ready';var lang=_this18.$store.getters.lang;var date=new Date().toLocaleString(lang,{month:'short',day:'numeric',hour:'numeric',minute:'numeric',year:'numeric'});var ext=_this18.$props.type==='audio'?'mp3':'mp4';var mimetype=_this18.$props.type==='audio'?'audio/mpeg':'video/mp4';_this18.addFile({source:_this18.$props.type,sourceKind:'cloud',path:"/".concat(_this18.archiveId,"/recording-").concat(date,".").concat(ext),name:"recording-".concat(date,".").concat(ext),mimetype:mimetype});if(_this18.maxFiles>1){// Disable upload and upload more buttons to 7 seconds to make sure file is processed over the server
_this18.toggleServerUploadInProgress();_this18.$store.dispatch('showNotification',[UPLOAD_MESSAGE,{uploadTimeout:UPLOAD_BTN_DISABLE_SECONDS}]);setTimeout(function(){_this18.toggleServerUploadInProgress();},UPLOAD_BTN_DISABLE_SECONDS);_this18.goToSummary();}})["catch"](function(err){_this18.pendingRequest=false;_this18.state='errored';console.error(err);});}}),beforeMount:function beforeMount(){if(!navigator.mediaDevices){this.state='browsererror';}},mounted:function mounted(){var _this19=this;if(this.isMobile){return;}if(this.state!=='browsererror'){this.loadOpenTok().then(function(tok){_this19.initialize(tok);});}},destroyed:function destroyed(){if(this.session){if(this.publisher)this.session.unpublish(this.publisher);this.session.disconnect();}},watch:{type:function type(){var _this20=this;if(this.session){if(this.publisher)this.session.unpublish(this.publisher);this.session.disconnect();this.loadOpenTok().then(function(tok){_this20.initialize(tok);});}}}};/* script */var __vue_script__$u=script$u;/* template */var __vue_render__$u=function __vue_render__$u(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-video"},[!_vm.isMobile&&!_vm.isTablet?[_vm.filesList.length>0?_c("div",{staticClass:"fsp-summary__go-back",attrs:{title:"Go to summary"},on:{click:_vm.goToSummary}}):_vm._e(),_vm._v(" "),_vm.state==="connecting"?_c("loading"):_vm.state==="accessDenied"?_c("div",{staticClass:"fsp-source-auth__wrapper"},[_c("span",{staticClass:"fsp-icon fsp-icon--auth fsp-source-auth__el fsp-icon--video-disabled"}),_vm._v(" "),_c("div",{staticClass:"fsp-text__title fsp-source-auth__el"},[_vm._v("\n        "+_vm._s(_vm.t("Webcam Disabled"))+"\n      ")]),_vm._v(" "),_c("div",{staticClass:"fsp-source-auth__el"},[_c("span",{staticClass:"fsp-text__subheader"},[_vm._v(_vm._s(_vm.t("Please enable your webcam to record video or audio.")))])]),_vm._v(" "),_c("div",{key:"retryCam",staticClass:"fsp-button fsp-button--outline",on:{click:_vm.reset}},[_vm._v("\n        Retry\n      ")])]):_vm.state==="scripterror"?_c("div",{staticClass:"fsp-source-auth__wrapper"},[_c("span",{staticClass:"fsp-icon fsp-icon--auth fsp-source-auth__el fsp-icon--video-disabled"}),_vm._v(" "),_c("div",{staticClass:"fsp-text__title fsp-source-auth__el"},[_vm._v("\n        "+_vm._s("Failed to load "+_vm.type)+"\n      ")]),_vm._v(" "),_c("div",{staticClass:"fsp-source-auth__el"},[_c("div",{key:"retryCall",staticClass:"fsp-button fsp-button--outline",on:{click:_vm.reset}},[_vm._v("\n          Retry\n        ")])])]):_vm.state==="browsererror"?_c("div",{staticClass:"fsp-source-auth__wrapper"},[_c("span",{staticClass:"fsp-icon fsp-icon--auth fsp-source-auth__el fsp-icon--webcam-disabled"}),_vm._v(" "),_c("div",{staticClass:"fsp-text__title fsp-source-auth__el"},[_vm._v("\n        "+_vm._s(_vm.t("Webcam Not Supported"))+"\n      ")]),_vm._v(" "),_c("div",{staticClass:"fsp-source-auth__el"},[_c("span",{staticClass:"fsp-text__subheader"},[_vm._v(_vm._s(_vm.t("Your current browser does not support webcam functionality.")))]),_vm._v(" "),_c("br"),_vm._v(" "),_c("span",{staticClass:"fsp-text__subheader"},[_vm._v(_vm._s(_vm.t("We suggest using Chrome or Firefox.")))])])]):_vm._e(),_vm._v(" "),_c("div",{ref:"video",staticClass:"fsp-video__container"}),_vm._v(" "),_c("footer-nav",{attrs:{slot:"footer","is-visible":_vm.state!=="connecting"&&!_vm.isErrored},slot:"footer"},[_c("span",{attrs:{slot:"nav-left"},slot:"nav-left"}),_vm._v(" "),_c("span",{attrs:{slot:"nav-center"},slot:"nav-center"},[_vm.state==="ready"?_c("span",{staticClass:"fsp-button fsp-button--primary fsp-button--video","class":{"fsp-button--disabled":!_vm.startButtonInit},attrs:{title:""+_vm.t("Start")},on:{click:_vm.start}},[_c("span",{staticClass:"fsp-icon--video-start"})]):_vm._e(),_vm._v(" "),_vm.state==="recording"?_c("span",{staticClass:"fsp-button fsp-button--cancel fsp-button--video",attrs:{title:""+_vm.t("Stop")},on:{click:_vm.stop}},[_c("span",{staticClass:"fsp-icon--video-stop"})]):_vm._e()])])]:_vm._e(),_vm._v(" "),_vm.isMobile||_vm.isTablet?[_c("mobile-cam")]:_vm._e()],2);};var __vue_staticRenderFns__$u=[];__vue_render__$u._withStripped=true;/* style */var __vue_inject_styles__$u=undefined;/* scoped */var __vue_scope_id__$u=undefined;/* module identifier */var __vue_module_identifier__$u=undefined;/* functional template */var __vue_is_functional_template__$u=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$u=/*#__PURE__*/normalizeComponent({render:__vue_render__$u,staticRenderFns:__vue_staticRenderFns__$u},__vue_inject_styles__$u,__vue_script__$u,__vue_scope_id__$u,__vue_is_functional_template__$u,__vue_module_identifier__$u,false,undefined,undefined,undefined);//
var script$v={components:{Cloud:__vue_component__$f,ContentHeader:__vue_component__$2,FooterNav:__vue_component__$g,ImageSearch:__vue_component__$h,Local:__vue_component__$n,Modal:__vue_component__$4,OpenTok:__vue_component__$u,Sidebar:__vue_component__$q,Url:__vue_component__$t,Webcam:__vue_component__$s,Custom:__vue_component__$o,Unsplash:__vue_component__$k,WebSearch:__vue_component__$l},computed:_objectSpread({},index_esm.mapGetters(['canStartUpload','filesNeededCount','filesWaiting','mobileNavActive','minFiles','route','getSourceByName']),{currentSource:function currentSource(){var sourceName=this.route[1];if(this.route[1].indexOf('custom/')===0){var parts=this.route[1].split('/');sourceName=parts[1];}return this.getSourceByName(sourceName);},minFilesMessage:function minFilesMessage(){if(this.filesNeededCount===1){return"".concat(this.t('Add')," 1 ").concat(this.t('more file'));}if(this.filesNeededCount>1){return"".concat(this.t('Add')," ").concat(this.filesNeededCount," ").concat(this.t('more files'));}return null;},isInsideCloudFolder:function isInsideCloudFolder(){return this.currentSource.ui==='cloud'&&!this.mobileNavActive&&this.route[2]&&this.route[2].length;}}),methods:_objectSpread({},index_esm.mapActions(['deselectAllFiles','updateMobileNavActive']),{goBack:function goBack(){this.$store.commit('GO_BACK_WITH_ROUTE_CURRENT_TYPE');},goToSummary:function goToSummary(){if(this.canStartUpload){this.$store.commit('CHANGE_ROUTE',['summary']);this.updateMobileNavActive(false);}}})};/* script */var __vue_script__$v=script$v;/* template */var __vue_render__$v=function __vue_render__$v(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("modal",{attrs:{source:_vm.currentSource}},[_c("div",{attrs:{slot:"header"},slot:"header"},[_vm.isInsideCloudFolder?_c("div",{staticClass:"fsp-summary__go-back",attrs:{title:_vm.t("Go back")},on:{click:_vm.goBack}}):_vm._e(),_vm._v(" "),_c("content-header",{attrs:{source:_vm.currentSource}})],1),_vm._v(" "),_c("sidebar",{attrs:{slot:"sidebar"},slot:"sidebar"}),_vm._v(" "),_vm.currentSource.ui==="local"?_c("local",{attrs:{slot:"body"},slot:"body"}):_vm._e(),_vm._v(" "),_vm.currentSource.ui==="cloud"?_c("cloud",{attrs:{slot:"body"},slot:"body"}):_vm._e(),_vm._v(" "),_vm.currentSource.ui==="unsplash"?_c("unsplash",{attrs:{slot:"body"},slot:"body"}):_vm._e(),_vm._v(" "),_vm.currentSource.ui==="webcam"?_c("webcam",{attrs:{slot:"body"},slot:"body"}):_vm._e(),_vm._v(" "),_vm.currentSource.ui==="opentok"?_c("open-tok",{attrs:{slot:"body",type:_vm.currentSource.name},slot:"body"}):_vm._e(),_vm._v(" "),_vm.currentSource.ui==="imagesearch"?_c("image-search",{attrs:{slot:"body"},slot:"body"}):_vm._e(),_vm._v(" "),_vm.currentSource.name==="globalsearch"?_c("web-search",{attrs:{slot:"body","search-order":_vm.currentSource.order},slot:"body"}):_vm._e(),_vm._v(" "),_vm.currentSource.ui==="custom"?_c("custom",{key:_vm.currentSource.name,attrs:{slot:"body",name:_vm.currentSource.name},slot:"body"}):_vm._e(),_vm._v(" "),_vm.currentSource.ui==="url"?_c("url",{attrs:{slot:"body"},slot:"body"}):_vm._e(),_vm._v(" "),_c("footer-nav",{attrs:{slot:"footer","is-visible":_vm.filesWaiting.length>0&&_vm.currentSource.ui!=="webcam"&&_vm.currentSource.ui!=="opentok"},slot:"footer"},[_c("span",{staticClass:"fsp-footer-text",attrs:{slot:"nav-left"},slot:"nav-left"},[_c("span",[_vm._v(_vm._s(_vm.t("Selected Files"))+": "+_vm._s(_vm.filesWaiting.length))])]),_vm._v(" "),_c("span",{staticClass:"fsp-button fsp-button--primary","class":{"fsp-button--disabled":!_vm.canStartUpload},attrs:{slot:"nav-right",title:"Next",tabindex:"0"},on:{click:_vm.goToSummary,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.goToSummary($event);}},slot:"nav-right"},[!_vm.canStartUpload&&_vm.filesWaiting.length!==0?_c("span",[_vm._v("\n        "+_vm._s(_vm.minFilesMessage)+"\n      ")]):_c("span",[_vm._v(_vm._s(_vm.t("View/Edit Selected")))])])])],1);};var __vue_staticRenderFns__$v=[];__vue_render__$v._withStripped=true;/* style */var __vue_inject_styles__$v=undefined;/* scoped */var __vue_scope_id__$v=undefined;/* module identifier */var __vue_module_identifier__$v=undefined;/* functional template */var __vue_is_functional_template__$v=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$v=/*#__PURE__*/normalizeComponent({render:__vue_render__$v,staticRenderFns:__vue_staticRenderFns__$v},__vue_inject_styles__$v,__vue_script__$v,__vue_scope_id__$v,__vue_is_functional_template__$v,__vue_module_identifier__$v,false,undefined,undefined,undefined);var canvasToBlob=createCommonjsModule(function(module){(function(window){var CanvasPrototype=window.HTMLCanvasElement&&window.HTMLCanvasElement.prototype;var hasBlobConstructor=window.Blob&&function(){try{return Boolean(new Blob());}catch(e){return false;}}();var hasArrayBufferViewSupport=hasBlobConstructor&&window.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100;}catch(e){return false;}}();var BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;var dataURIPattern=/^data:((.*?)(;charset=.*?)?)(;base64)?,/;var dataURLtoBlob=(hasBlobConstructor||BlobBuilder)&&window.atob&&window.ArrayBuffer&&window.Uint8Array&&function(dataURI){var matches,mediaType,isBase64,dataString,byteString,arrayBuffer,intArray,i,bb;// Parse the dataURI components as per RFC 2397
matches=dataURI.match(dataURIPattern);if(!matches){throw new Error('invalid data URI');}// Default to text/plain;charset=US-ASCII
mediaType=matches[2]?matches[1]:'text/plain'+(matches[3]||';charset=US-ASCII');isBase64=!!matches[4];dataString=dataURI.slice(matches[0].length);if(isBase64){// Convert base64 to raw binary data held in a string:
byteString=atob(dataString);}else{// Convert base64/URLEncoded data component to raw binary:
byteString=decodeURIComponent(dataString);}// Write the bytes of the string to an ArrayBuffer:
arrayBuffer=new ArrayBuffer(byteString.length);intArray=new Uint8Array(arrayBuffer);for(i=0;i<byteString.length;i+=1){intArray[i]=byteString.charCodeAt(i);}// Write the ArrayBuffer (or ArrayBufferView) to a blob:
if(hasBlobConstructor){return new Blob([hasArrayBufferViewSupport?intArray:arrayBuffer],{type:mediaType});}bb=new BlobBuilder();bb.append(arrayBuffer);return bb.getBlob(mediaType);};if(window.HTMLCanvasElement&&!CanvasPrototype.toBlob){if(CanvasPrototype.mozGetAsFile){CanvasPrototype.toBlob=function(callback,type,quality){var self=this;setTimeout(function(){if(quality&&CanvasPrototype.toDataURL&&dataURLtoBlob){callback(dataURLtoBlob(self.toDataURL(type,quality)));}else{callback(self.mozGetAsFile('blob',type));}});};}else if(CanvasPrototype.toDataURL&&dataURLtoBlob){CanvasPrototype.toBlob=function(callback,type,quality){var self=this;setTimeout(function(){callback(dataURLtoBlob(self.toDataURL(type,quality)));});};}}if(module.exports){module.exports=dataURLtoBlob;}else{window.dataURLtoBlob=dataURLtoBlob;}})(window);});//
//
//
//
//
//
//
//
var script$w={watch:{progress:function progress(num){this.$refs.bar.style.width="".concat(num,"%");}},props:['progress']};/* script */var __vue_script__$w=script$w;/* template */var __vue_render__$w=function __vue_render__$w(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-progress-bar"},[_c("div",{staticClass:"fsp-progress-bar__container"},[_c("div",{ref:"bar",staticClass:"fsp-progress-bar__bar",staticStyle:{width:"0"}})])]);};var __vue_staticRenderFns__$w=[];__vue_render__$w._withStripped=true;/* style */var __vue_inject_styles__$w=undefined;/* scoped */var __vue_scope_id__$w=undefined;/* module identifier */var __vue_module_identifier__$w=undefined;/* functional template */var __vue_is_functional_template__$w=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$w=/*#__PURE__*/normalizeComponent({render:__vue_render__$w,staticRenderFns:__vue_staticRenderFns__$w},__vue_inject_styles__$w,__vue_script__$w,__vue_scope_id__$w,__vue_is_functional_template__$w,__vue_module_identifier__$w,false,undefined,undefined,undefined);/**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ /** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',funcTag='[object Function]',genTag='[object GeneratorFunction]';/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap$1(array,iteratee){var index=-1,length=array?array.length:0,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function baseValues(object,props){return arrayMap$1(props,function(key){return object[key];});}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/** Used for built-in method references. */var objectProto$2=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$2=objectProto$2.hasOwnProperty;/**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */var objectToString$2=objectProto$2.toString;/** Built-in value references. */var propertyIsEnumerable=objectProto$2.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);/**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray$1(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty$2.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty$2.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto$2;return value===proto;}/**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty$2.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString$2.call(value)==argsTag);}/**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */var isArray$1=Array.isArray;/**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */function isArrayLikeObject(value){return isObjectLike$2(value)&&isArrayLike(value);}/**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject$4(value)?objectToString$2.call(value):'';return tag==funcTag||tag==genTag;}/**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */function isObject$4(value){var type=_typeof2(value);return!!value&&(type=='object'||type=='function');}/**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */function isObjectLike$2(value){return!!value&&_typeof2(value)=='object';}/**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */function values(object){return object?baseValues(object,keys(object)):[];}var lodash_values=values;var matchesMimetype=function matchesMimetype(fileDefinition,singleAcceptOption){if(fileDefinition.mimetype&&singleAcceptOption==='image/*'){return fileDefinition.mimetype.indexOf('image/')!==-1;}if(fileDefinition.mimetype&&singleAcceptOption==='video/*'){return fileDefinition.mimetype.indexOf('video/')!==-1;}if(fileDefinition.mimetype&&singleAcceptOption==='audio/*'){return fileDefinition.mimetype.indexOf('audio/')!==-1;}if(fileDefinition.mimetype&&singleAcceptOption==='application/*'){return fileDefinition.mimetype.indexOf('application/')!==-1;}if(fileDefinition.mimetype&&singleAcceptOption==='text/*'){return fileDefinition.mimetype.indexOf('text/')!==-1;}var jpgTypes=['image/jpg','image/jpeg'];if(fileDefinition.mimetype&&jpgTypes.indexOf(singleAcceptOption)>-1){return jpgTypes.indexOf(fileDefinition.mimetype)>-1;}var aviTypes=['video/vnd.avi','video/avi','video/x-msvideo'];if(fileDefinition.mimetype&&aviTypes.indexOf(singleAcceptOption)>-1){return aviTypes.indexOf(fileDefinition.mimetype)>-1;}return fileDefinition.mimetype===singleAcceptOption;};var canAcceptThisFile=function canAcceptThisFile(fileDefinition,accept){if(accept===undefined||!accept.length){return true;}// Exception for .srt files
if(fileDefinition.mimetype===undefined&&fileDefinition.display_name.includes('.srt')){return true;}// handle windows .zip files
if(typeof fileDefinition.mimetype!='string'&&fileDefinition.name.includes('.zip')){return true;}return accept.some(function(singleAcceptOption){return matchesMimetype(fileDefinition,singleAcceptOption);});};// All data passed to outside world via callbacks HAVE TO be processed by one
// of those functions. This ensures no internal data will leak outside, and
// that all objects are cloned so users can't cause our app to crash by
// changing some fields in object passed to them.
var convertFileForOutsideWorld=function convertFileForOutsideWorld(f,_ref4){var exposeOriginalFile=_ref4.exposeOriginalFile;var file={filename:f.name||f.filename,handle:f.handle,mimetype:f.mimetype||f.type,originalPath:f.originalPath||f.path,size:f.size,source:f.source,url:f.url,uploadId:f.uploadId};if(f.originalFile){if(exposeOriginalFile){file.originalFile=f.originalFile;}else{file.originalFile={name:f.originalFile.name,type:f.originalFile.type,size:f.originalFile.size};}}if(f.metadata){file.metadata=f.metadata;}if(f.status)file.status=f.status;if(f.uploadTags)file.uploadTags=f.uploadTags;if(f.key)file.key=f.key;if(f.container)file.container=f.container;if(f.cropData)file.cropped=JSON.parse(JSON.stringify(f.cropData));if(f.rotated)file.rotated=JSON.parse(JSON.stringify(f.rotated));if(f.workflows)file.workflows=JSON.parse(JSON.stringify(f.workflows));return file;};var convertFileListForOutsideWorld=function convertFileListForOutsideWorld(list,getters){return list.map(function(file){return convertFileForOutsideWorld(file,getters);});};var readableSize=function readableSize(bytes){if(bytes===0){return'0.00B';}var e=Math.floor(Math.log(bytes)/Math.log(1024));return"".concat((bytes/Math.pow(1024,e)).toFixed(2)," ").concat(' KMGTP'.charAt(e),"B");};var displayName=function displayName(normalizedFile){var inputName=normalizedFile.filename||normalizedFile.name;if(inputName.length<45){return inputName;}var fileSplit=inputName.split('.');if(fileSplit.length===2){var truncName="".concat(fileSplit[0].substring(0,42),"..");var fileExt=fileSplit[1];return"".concat(truncName,".").concat(fileExt);}if(fileSplit.length>2){var _truncName="".concat(inputName.substring(0,42),"..");var _fileExt=fileSplit[fileSplit.length-1];return"".concat(_truncName,".").concat(_fileExt);}return"".concat(inputName.substring(0,42),"...");};var ar={// Actions
Upload:'تحميل','Upload more':'تحميل المزيد','Deselect All':'إلغاء تحديد الكل','View/Edit Selected':'شاهد / قم بتحرير ما تم اختياره','Sign Out':'تسجيل الخروج',// Source Labels
'My Device':'جهازي','Web Search':'البحث في شبكة الويب','Take Photo':'إلتقط صورة','Link (URL)':'رابط عنوان الموقع الالكتروني','Record Video':'تسجيل فيديو','Record Audio':'تسجيل صوت',// Custom Source
'Custom Source':'مصدر مخصص',// Footer Text
Add:'قم بإضافة','more file':'المزيد من الملفات','more files':'ملفات أخرى',// Cloud
'Connect {providerName}':'قم بتوصيل {providerName}','Select Files from {providerName}':'حدد الملفات من {providerName}','You need to authenticate with {providerName}.':'تحتاج إلى المصادقة مع {providerName}.','A new page will open to connect your account.':'.سيتم فتح صفحة جديدة للإتصال بحسابك','We only extract images and never modify or delete them.':'.نقوم فقط بإستخراج الصور ولن نقوم بالتعديل أو الحذف','To disconnect from {providerName} click "Sign out" button in the menu.':'لقطع الاتصال بـ {providerName} ، انقر فوق الزر "تسجيل الخروج" في القائمة.','Sign in with Google':'الدخول مع جوجل','Go back':'عد','This folder is empty.':'Dieser Ordner ist leer.',// Summary
Files:'ملفات',Images:'صور',Uploaded:'تم الرفع / التحميل',Uploading:'يتم الرفع / التحميل',Completed:'تمت العملية',Filter:'قم بتصفية','Cropped Images':'الصور المقصوصة','Edited Images':'الصور المحررة','Selected Files':'الملفات المختارة','Crop is required on images':'مطلوب المحاصيل على الصور',// Transform
Crop:'قم بإقتصاص',Circle:'قم بإقتصاص الصورة بشكل دائري / قطع دائري',Rotate:'قم بتدوير',Mask:'قم بحجب',Revert:'تراجع',Edit:'قم بتحرير',Reset:'إعد ضبط',Done:'إانتهى',Save:'حفظ',Next:'التالى','Edit Image':'قم بتحرير الصورة','This image cannot be edited':'لا يمكن تحرير هذه الصورة',// Retry messaging
'Connection Lost':'تم قطع الإتصال','Failed While Uploading':'حصل خطأ أثناء التحميل','Retrying in':'سيتم إعادة المحاولة بعد','Try again':'حاول مرة أخرى','Try now':'أعد المحاولة',// Local File Source
'Drag and Drop, Copy and Paste Files':'سحب وإسقاط الملفات ، نسخ ولصق الملفات','or Drag and Drop, Copy and Paste Files':'أو إسحب و أترك، إنسخ و ألصق الملفات','Select Files to Upload':'اختر الملفات للتحميل','Select From':'إختر من','Drop your files anywhere':'إسقاط الملفات الخاصة بك في أي مكان',// Input placeholders
'Enter a URL':'URL أدخل','Search images':'إبحث عن الصور',// Webcam Source
'Webcam Disabled':'كاميرا الويب معطلة','Webcam Not Supported':'كاميرا الويب غير مدعمة','Please enable your webcam to take a photo.':'الرجاء تفيل كاميرا الويب لأخذ صورة','Your current browser does not support webcam functionality.':'متصفح الويب المستخدم حاليا لا يدعم خاصية كاميرا الويب','We suggest using Chrome or Firefox.':'Firefox أو Chrome نقترح استخدام متصفح',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'{types} ليس من أنواع الملفات المقبولة ، أنواع الملفات المقبولة هي {displayName} ملف','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{roundFileSize} أكبر من الحد المسموح ، الحد المسموح أقل من{displayName} الملف','Our file upload limit is {maxFiles} {filesText}':'{maxFiles} {filesText} الحد الأعلى المسموح به لتحميل الملفات هو','No search results found for "{search}"':'لم يتم العثور على نتائج بحث لـ "{search}"','An error occurred. Please try again.':'حدث خطأ. حاول مرة اخرى.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'الملفات [{displayName}] كبيرة جدًا. حجم الملف المقبول هو {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'انقر هنا أو اضغط على ESC للإغلاق'};var ca={// Actions
Upload:'Carrega','Upload more':'Carregar mais','Deselect All':'Desfés tota la selecció','View/Edit Selected':'Visualitza/Edita les seleccionades','Sign Out':'Surt',// Source Labels
'My Device':'El meu dispositiu','Web Search':'Cerca al web','Take Photo':'Fes una foto','Link (URL)':'URL','Record Video':'Grava vídeo','Record Audio':'Grava l\'àudio',// Custom Source
'Custom Source':'Origen personalitzada',// Footer Text
Add:'Afegeix','more file':'més arxiu','more files':'més arxius',// Cloud
'Connect {providerName}':'Connecteu {providerName}','Select Files from {providerName}':'Seleccioneu Fitxers de {providerName}','You need to authenticate with {providerName}.':'Heu d’autenticar-vos amb {providerName}.','A new page will open to connect your account.':'S\'obrirà una nova pàgina per a connectar-te al teu compte','We only extract images and never modify or delete them.':'Tan sols agafem les imatges, però mai les modifiquem o eliminem.','To disconnect from {providerName} click "Sign out" button in the menu.':'Per desconnectar-vos de {providerName}, feu clic al botó "Surt" al menú.','Sign in with Google':'Inicieu la sessió amb Google','Go back':'Torna','This folder is empty.':'Dieser Ordner ist leer.',// Summary
Files:'Arxius',Images:'Imatges',Uploaded:'Carregada',Uploading:'Carregant',Completed:'Finalitzat',Filter:'Filtra','Cropped Images':'Imatges escapçades','Edited Images':'Imatges editades','Selected Files':'Arxius seleccionats','Crop is required on images':'Es requereix un cultiu a les imatges',// Transform
Crop:'Escapça',Circle:'Cercle',Rotate:'Gira',Mask:'Emmascara',Revert:'Reverteix',Edit:'Edita',Reset:'Reinicia',Done:'Fet',Save:'Guardar',Next:'Pròxim','Edit Image':'Edita la imatge','This image cannot be edited':'Aquesta imatge no es pot editar',// Retry messaging
'Connection Lost':'S\'ha perdut la connexió','Failed While Uploading':'Error de càrrega','Retrying in':'Reintentant en','Try again':'Torna-ho a intentar','Try now':'Prova-ho ara',// Local File Source
'Drag and Drop, Copy and Paste Files':'Arrossegueu i deixeu anar els fitxers, copieu i enganxeu fitxers','or Drag and Drop, Copy and Paste Files':'o arrosega, copia i enganxa els arxius','Select Files to Upload':'Selecciona els arxius a carregar','Select From':'Selecciona de','Drop your files anywhere':'Deixeu anar els fitxers en qualsevol lloc',// Input placeholders
'Enter a URL':'Introduïu un URL','Search images':'Cerca imatges',// Webcam Source
'Webcam Disabled':'Webcam inhabilitada','Webcam Not Supported':'Webcam no admesa','Please enable your webcam to take a photo.':'Sisplau, habilita la webcam per a fer la foto','Your current browser does not support webcam functionality.':'El teu navegador no admet la funcionalitat de webcam','We suggest using Chrome or Firefox.':'Recomanem utilitzar Chrome o Firefox.',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'L\'arxiu {displayName} no té un format vàlid. Els formats acceptats són {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'L\'arxiu {displayName} és massa gran. El tamany màxim acceptat és {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'El límit de càrrega és {maxFiles} {filesText}','No search results found for "{search}"':'No s’han trobat resultats per a "{search}"','An error occurred. Please try again.':'Hi ha hagut un error. Siusplau torna-ho a provar.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Els fitxers [{displayName}] són massa grans. La mida del fitxer acceptada és {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Feu clic aquí o premeu ESC per tancar'};var da={// Actions
Upload:'Upload','Upload more':'Upload flere','Deselect All':'Fravælg alle','View/Edit Selected':'Vis/rediger valgte','Sign Out':'Log ud',// Source Labels
'My Device':'Min enhed','Web Search':'Søgning på internettet','Take Photo':'Tag billede','Link (URL)':'Link (URL)','Record Video':'Optag video','Record Audio':'Optag lyd',// Custom Source
'Custom Source':'Brugerdefineret Kilde',// Footer Text
Add:'Tilføj','more file':'fil mere','more files':'flere filer',// Cloud
'Connect {providerName}':'Tilslut {providerName}','Select Files from {providerName}':'Vælg filer fra {providerName}','You need to authenticate with {providerName}.':'Du skal godkende med {providerName}.','A new page will open to connect your account.':'En ny side vil åbne for at forbinde med din konto','We only extract images and never modify or delete them.':'Vi hiver kun billeder og modificerer eller sletter dem aldrig','To disconnect from {providerName} click "Sign out" button in the menu.':'For at afbryde forbindelsen fra {providerName} skal du klikke på knappen "Log ud" i menuen.','Sign in with Google':'Log ind med Google','Go back':'Gå tilbage','This folder is empty.':'Dieser Ordner ist leer.',// Summary
Files:'Filer',Images:'Billeder',Uploaded:'Uploaded',Uploading:'Uploader',Completed:'Fuldført',Filter:'Filtrer','Cropped Images':'Beskærede billeder','Edited Images':'Redigerede filer','Selected Files':'Valgte filer','Crop is required on images':'Beskæring er påkrævet',// Transform
Crop:'Klippe',Circle:'Cirkel',Rotate:'Rotere',Mask:'Form',Revert:'Gør om',Edit:'Rediger',Reset:'Nulstil',Done:'Færdig',Save:'Gemme',Next:'Næste','Edit Image':'Rediger billede','This image cannot be edited':'',// Retry messaging
'Connection Lost':'Forbindelse tabt','Failed While Uploading':'Mislykkedes under upload','Retrying in':'Prøver igen om','Try again':'Prøv igen','Try now':'Prøv nu',// Local File Source
'Drag and Drop, Copy and Paste Files':'Træk og slip filer, kopier og indsæt filer','or Drag and Drop, Copy and Paste Files':'Eller træk og slip, kopier og indsæt filer','Select Files to Upload':'Vælg filer til upload','Select From':'Vælg fra','Drop your files anywhere':'Drop dine filer overalt',// Input placeholders
'Enter a URL':'Skriv en webadresse','Search images':'Søg billeder',// Webcam Source
'Webcam Disabled':'Webkamera deaktiveret','Webcam Not Supported':'Webkamera understøttes ikke','Please enable your webcam to take a photo.':'Aktivér dit webcam for at tage et billede','Your current browser does not support webcam functionality.':'Din nuværende browser understøtter ikke webcam','We suggest using Chrome or Firefox.':'Vi foreslår at bruge Chrome eller Firefox',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'Filen {displayName} er ikke i et acceptabelt format. De accepterede formater er {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':' Filen {displayName} er for stor. Den accepterede filstørrelse er {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':' Vores filstørrelse er begrænset til {maxFiles} {filesText}','No search results found for "{search}"':'Ingen søgeresultater fundet for "{search}"','An error occurred. Please try again.':'En fejl opstod. Prøv igen.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Filer [{displayName}] er for store. Den accepterede filstørrelse er {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Klik her eller tryk ESC for at lukke'};var de={// Actions
Upload:'Hochladen','Upload more':'Mehr hochladen','Deselect All':'Deaktivieren Sie alle','View/Edit Selected':'Anzeigen/Bearbeiten ausgewählt','Sign Out':'Abmelden',// Source Labels
'My Device':'Mein Gerät','Web Search':'Internetsuche','Take Photo':'Foto machen','Link (URL)':'URL-Adresse','Record Video':'Ein Video aufnehmen','Record Audio':'Ton aufnehmen',// Custom Source
'Custom Source':'Benutzerdefinierte Quelle',// Footer Text
Add:'Hinzufügen','more file':'weitere Datei','more files':'weitere Dateien',// Cloud
'Connect {providerName}':'Verbinden mit {providerName}','Select Files from {providerName}':'Wählen Sie Dateien aus {providerName}','You need to authenticate with {providerName}.':'Sie müssen sich mit {providerName} anmelden','A new page will open to connect your account.':'Eine neue Seite wird geöffnet, um Ihr Konto zu verbinden','We only extract images and never modify or delete them.':'Wir extrahieren Bilder nur und modifizieren oder löschen sie niemals','To disconnect from {providerName} click "Sign out" button in the menu.':'Um die Verbindung zu {providerName} zu trennen, klicken Sie im Menü auf "Abmelden".','Sign in with Google':'Anmeldung mit Google','Go back':'Zurück','This folder is empty.':'Dieser Ordner ist leer.',// Summary
Files:'Dateien',Images:'Bilder',Uploaded:'Hochgeladen',Uploading:'Wird hochgeladen',Completed:'Abgeschlossen',Filter:'Filtern','Cropped Images':'Freigestellte Bilder','Edited Images':'Bearbeitete Bilder','Selected Files':'Ausgewählten Dateien','Crop is required on images':'Zuschneiden ist für Bilder erforderlich',// Transform
Crop:'Zuschnitt',Circle:'Kreis',Rotate:'Rotieren',Mask:'Verdecken',Revert:'Rückgängig',Edit:'Bearbeiten',Reset:'Zurück',Done:'Fertig',Save:'Speichern',Next:'Nächster','Edit Image':'Bild bearbeiten','This image cannot be edited':'Dieses Bild kann nicht bearbeitet werden',// Retry messaging
'Connection Lost':'Keine Verbindung','Failed While Uploading':'Beim Hochladen fehlgeschlagen','Retrying in':'Wiederholen in','Try again':'Versuch es noch einmal','Try now':'Versuche es jetzt',// Local File Source
'Drag and Drop, Copy and Paste Files':'Dateien ziehen und ablegen, Dateien kopieren und einfügen','or Drag and Drop, Copy and Paste Files':'oder per Drag&Drop einfügen','Select Files to Upload':'Datei auswählen','Select From':'Wählen Sie aus','Drop your files anywhere':'Legen Sie Ihre Dateien überall ab',// Input placeholders
'Enter a URL':'Geben Sie eine URL ein','Search images':'Suche bilder',// Webcam Source
'Webcam Disabled':'Webcam ausgeschaltet','Webcam Not Supported':'Webcam nicht unterstützt','Please enable your webcam to take a photo.':'Bitte aktivieren Sie Ihre Webcam, um ein Foto zu machen','Your current browser does not support webcam functionality.':'Ihr aktueller Browser unterstützt keine Webcam-Funktionen.','We suggest using Chrome or Firefox.':'Wir empfehlen, mit Chrome oder Firefox.',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'Datei-{displayName} ist keine anerkannte Dateityp. Die akzeptierten Dateitypen sind {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{displayName} Datei ist zu groß. Die akzeptierten Dateigröße beträgt {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Unser Dateigrößenlimit ist {maxFiles} {filesText}','No search results found for "{search}"':'Keine Suchergebnisse für "{search}" gefunden','An error occurred. Please try again.':'Ein Fehler ist aufgetreten. Bitte versuche es erneut.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Dateien [{displayName}] sind zu groß. Die akzeptierte Dateigröße ist {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Klicken Sie hier um zurückzukehren oder drücken Sie Esc'};var en={'File {displayName} is not an accepted file type. The accepted file types are {types}':'File {displayName} is not an accepted file type. The accepted file types are {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'File {displayName} is too big. The accepted file size is less than {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Our file upload limit is {maxFiles} {filesText}','No search results found for "{search}"':'No search results found for "{search}"','An error occurred. Please try again.':'An error occurred. Please try again.','Please contact':'Please contact','Application blocked':'Application blocked','Application Unavailable':'Application Unavailable','This application is blocked':'This application is blocked','This application is unavailable':'This application is unavailable','For some reason this application is blocked.':'For some reason this application is blocked.','For some reason this application is unavailable.':'For some reason this application is unavailable.'};var es={// Actions
Upload:'Subir','Upload more':'Subir más','Deselect All':'Deseleccionar Todo','View/Edit Selected':'Ver/Editar Seleccionado','Sign Out':'Desconectar',// Source Labels
'My Device':'Mi Dispositivo','Web Search':'Búsqueda de Internet','Take Photo':'Tomar la foto','Link (URL)':'Dirección URL','Record Video':'Grabar video','Record Audio':'Grabar audio',// Custom Source
'Custom Source':'Fuente personalizada',// Footer Text
Add:'Añadir','more file':'el archivo más','more files':'el archivo más',// Cloud
'Connect {providerName}':'Conectar {providerName}','Select Files from {providerName}':'Seleccione Archivos de {providerName}','You need to authenticate with {providerName}.':'Necesitas autenticarte con {providerName}.','A new page will open to connect your account.':'Se abrirá una nueva página para conectar tu cuenta.','We only extract images and never modify or delete them.':'Sólo extraemos imágenes y nunca las modificamos o eliminamos','To disconnect from {providerName} click "Sign out" button in the menu.':'Desconectarse de Instagram, haga clic en el botón "Desconectar" en el menú.','Sign in with Google':'Inicia sesión con Google','Go back':'Volver','This folder is empty.':'Dieser Ordner ist leer.',// Summary
Files:'Archivos',Images:'Imágenes',Uploaded:'Subido',Uploading:'Subiendo',Completed:'Completado',Filter:'Filtrar','Cropped Images':'Imágenes recortadas','Edited Images':'Imágenes editadas','Selected Files':'Archivos seleccionados','Crop is required on images':'Se requiere cultivo en las imágenes',// Transform
Crop:'Recortar',Circle:'Circulo',Rotate:'Rotar',Mask:'Encubrir',Revert:'Deshacer',Edit:'Editar',Reset:'Restablecer',Done:'Terminado',Save:'Guardar',Next:'Siguiente','Edit Image':'Editar imagen','This image cannot be edited':'Esta imagen no puede ser editada',// Retry messaging
'Connection Lost':'Se ha perdido la conexión','Failed While Uploading':'Error durante la subida','Retrying in':'Volver a intentar en','Try again':'Inténtalo de nuevo','Try now':'Probar ahora',// Local File Source
'Drag and Drop, Copy and Paste Files':'Arrastrar y soltar archivos, copiar y pegar archivos','or Drag and Drop, Copy and Paste Files':'O arrastra y suéltalos, o copia y pégalos','Select Files to Upload':'Selecciona los archivos a subir','Select From':'Seleccione de','Drop your files anywhere':'Deja tus archivos en cualquier lugar',// Input placeholders
'Enter a URL':'Ingresa una URL','Search images':'Búsqueda de imágenes',// Webcam Source
'Webcam Disabled':'Webcam deshabilitada','Webcam Not Supported':'Webcam no soportada','Please enable your webcam to take a photo.':'Por favor, habilite su webcam para tomar una foto','Your current browser does not support webcam functionality.':'Su navegador actual no admite la funcionalidad de webcam','We suggest using Chrome or Firefox.':'Sugerimos usar Chrome o Firefox',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'Archivo {displayName} no es un tipo de archivo aceptado. Los tipos de archivo aceptados son {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{displayName} De archivo es demasiado grande. El tamaño aceptado es {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Nuestro límite de upload de archivo es {maxFiles} {filesText}','No search results found for "{search}"':'No se han encontrado resultados de búsqueda para "{search}"','An error occurred. Please try again.':'Ocurrió un error. Inténtalo de nuevo.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Los archivos [{displayName}] son demasiado grandes. El tamaño de archivo aceptado es {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Presiona aquí o la tecla ESC para cerrar'};var fr={// Actions
Upload:'Ajouter','Upload more':'Ajouter plus','Deselect All':'Tout déselectionner','View/Edit Selected':'AVoir/Modifier la sélection','Sign Out':'Se déconnecter',// Source Labels
'My Device':'Mon appareil','Web Search':'Recherche Internet','Take Photo':'Prendre une Photo','Link (URL)':'Adresse URL','Record Video':'Enregistrer une vidéo','Record Audio':'Enregistrement audio',// Custom Source
'Custom Source':'Source personnalisée',// Footer Text
Add:'Ajouter','more file':'plus de fichier','more files':'plus de fichiers',// Cloud
'Connect {providerName}':'Se connecter avec {providerName}','Select Files from {providerName}':'Sélectionner des fichiers dans {providerName}','You need to authenticate with {providerName}.':'Vous devez vous authentifier avec {providerName}.','A new page will open to connect your account.':"Une nouvelle page s'ouvrira pour connecter votre compte.",'We only extract images and never modify or delete them.':'Nous utilisons les images sans les modifier, ni les supprimer','To disconnect from {providerName} click "Sign out" button in the menu.':'Pour vous déconnecter {providerName}, cliquez sur le bouton "Se déconnecter" du menu.','Sign in with Google':'Connectez-vous avec Google','Go back':'Retourner','This folder is empty.':'Dieser Ordner ist leer.',// Summary
Files:'Fichiers',Images:'Images',Uploaded:'Ajouté',Uploading:'Ajouté',Completed:'Terminé',Filter:'Filtrer','Cropped Images':'Images Rognées','Edited Images':'Images Éditées','Selected Files':'Fichiers sélectionnés','Crop is required on images':'La culture est requise sur les images',// Transform
Crop:'Rogner',Circle:'Rond',Rotate:'Pivoter',Mask:'Cache',Revert:'Annuler',Edit:'Modifier',Reset:'Annuler',Done:'Fini',Save:'Appliquer',Next:'Prochain','Edit Image':'Image Éditer','This image cannot be edited':'Cette image ne peut pas être modifiée',// Retry messaging
'Connection Lost':'Connexion perdue','Failed While Uploading':'Échec du chargement','Retrying in':'Réessayer dans','Try again':'Réessayer','Try now':'Essayez maintenant',// Local File Source
'Drag and Drop, Copy and Paste Files':'Glisser et déposer des fichiers, copier et coller des fichiers','or Drag and Drop, Copy and Paste Files':'ou faites glisser, copier et coller des fichiers','Select Files to Upload':'Sélectionnez des fichiers à ajouter','Select From':'Sélectionnez depuis','Drop your files anywhere':'Déposez vos fichiers n\'importe où',// Input placeholders
'Enter a URL':'Entrez une URL','Search images':'Rechercher des images',// Webcam Source
'Webcam Disabled':'Webcam désactivé','Webcam Not Supported':'Webcam non prise en charge','Please enable your webcam to take a photo.':"S'il vous plaît activer votre webcam pour prendre une photo",'Your current browser does not support webcam functionality.':'Votre navigateur actuel ne prend pas en charge la fonctionnalité webcam','We suggest using Chrome or Firefox.':"Nous vous suggérons d'utiliser Chrome ou Firefox.",'Start':'Commencer','Stop':'Arrêt',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'{displayName} De fichier n’est pas un type de fichier accepté. Les types de fichiers acceptés sont {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'Le fichier {displayName} est trop grand. La taille de fichier acceptée est {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Notre limite de téléchargement est de {maxFiles} fichiers','No search results found for "{search}"':'Aucun résultat de recherche trouvé pour "{search}"','An error occurred. Please try again.':'Une erreur est survenue. Veuillez réessayer.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Les fichiers [{displayName}] sont trop gros. La taille du fichier accepté est {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Cliquez ici ou appuyez sur ESC pour fermer'};var he={// Actions
Upload:'העלה','Upload more':'העלה עוד','Deselect All':'בטל בחירה','View/Edit Selected':'צפה/ערוך בחירה','Sign Out':'התנתק',// Source Labels
'My Device':'המכשיר שלי','Web Search':'חיפוש תמונות','Take Photo':'לצלם','Link (URL)':'כתובת אתר','Record Video':'להקליט סרטון','Record Audio':'הקלט שמע',// Custom Source
'Custom Source':'מקור מותאם אישית',// Footer Text
Add:'הוסף','more file':'עוד קובץ','more files':'עוד קבצים',// Cloud
'Connect {providerName}':'חבר {providerName}','Select Files from {providerName}':'בחר קבצים מ- {providerName}','You need to authenticate with {providerName}.':'אתה צריך לאמת עם {providerName}.','A new page will open to connect your account.':'עמוד חדש יפתח על מנת לחבר את חשבונך','We only extract images and never modify or delete them.':'לעולם לא נשנה או נמחק את התמונות','To disconnect from {providerName} click "Sign out" button in the menu.':'כדי להתנתק מ {providerName} לחץ על הלחצן "התנתק" בתפריט.','Sign in with Google':'היכנס באמצעות Google','Go back':'תחזור','This folder is empty.':'Dieser Ordner ist leer.',// Summary
Files:'קבצים',Images:'תמונות',Uploaded:'הועלו',Uploading:'מעלה',Completed:'הושלם',Filter:'סנן','Cropped Images':'תמונות חתוכות','Edited Images':'תמונות ערוכות','Selected Files':'קבצים שנבחרו','Crop is required on images':'חיתוך נדרש בתמונות',// Transform
Crop:'לִגזוֹם',Circle:'חוּג',Rotate:'לְהִסְתוֹבֵב',Mask:'לְכַסוֹת בְּמַסֵכָה',Revert:'בטל שינויים',Edit:'ערוך',Reset:'לְאַתחֵל',Done:'בוצע',Save:'להציל',Next:'הַבָּא','Edit Image':'ערוך תמונה','This image cannot be edited':'לא ניתן לערוך תמונה זו',// Retry messaging
'Connection Lost':'חיבור נעלם','Failed While Uploading':'נכשל בעת העלאה','Retrying in':'מנסה שוב בעוד','Try again':'נסה שוב','Try now':'נסה עכשיו',// Local File Source
'Drag and Drop, Copy and Paste Files':'גרור ושחרר קבצים, העתק והדבק קבצים','or Drag and Drop, Copy and Paste Files':'או גרור / העתק והדבק את הקבצים','Select Files to Upload':'בחר קבצים להעלות','Select From':'בחר מ-','Drop your files anywhere':'זרוק את הקבצים שלך בכל מקום',// Input placeholders
'Enter a URL':'הזן כתובת אתר','Search images':'חיפוש תמונות',// Webcam Source
'Webcam Disabled':'מצלמה מכובת','Webcam Not Supported':'מצלמה לא נתמכת','Please enable your webcam to take a photo.':'נא הדלק את המצלמה על מנת לצלם','Your current browser does not support webcam functionality.':'הדפדפן בו אתה משתמש אינו תומך בשימוש במצלמה','We suggest using Chrome or Firefox.':'אנו ממליצים על דפדפן פיירפוקס או כרום',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'{types} הוא לא מסוג שנוכל לקבל.סוגי הקבצים המותר הם {displayName} הקובץ','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{roundFileSize} גדול מדי. הגודל המותר הו א {displayName} הקובץ','Our file upload limit is {maxFiles} {filesText}':'{filesText} {maxFiles} מגבלת גודל הקובץ היא','No search results found for "{search}"':'לא נמצאו תוצאות חיפוש עבור "{search}"','An error occurred. Please try again.':'התרחשה שגיאה. בבקשה נסה שוב.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'הקבצים [{displayName}] גדולים מדי. גודל הקובץ המקובל הוא {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'לחץ כאן או לחץ על ESC כדי לסגור'};var it={// Actions
Upload:'Caricare','Upload more':'Carica di più','Deselect All':'Deselezionare tutto','View/Edit Selected':'Visualizza/Modifica selezionato','Sign Out':'Esci',// Source Labels
'My Device':'Il mio dispositivo','Web Search':'Ricerca sul Web','Take Photo':'Fare una foto','Link (URL)':'Indirizzo URL','Record Video':'Registra video','Record Audio':'Registra audio',// Custom Source
'Custom Source':'Fonte personalizzata',// Footer Text
Add:'Aggiungere','more file':'più file','more files':'più file',// Cloud
'Connect {providerName}':'Connetti {providerName}','Select Files from {providerName}':'Seleziona File da {providerName}','You need to authenticate with {providerName}.':'Devi autenticarti con {providerName}.','A new page will open to connect your account.':'Si aprirà una nuova pagina per collegare il tuo account','We only extract images and never modify or delete them.':'Abbiamo estratto solo immagini e non modificarli o cancellarli.','To disconnect from {providerName} click "Sign out" button in the menu.':'Per disconnettersi da {providerName} fai clic sul pulsante "Esci" nel menu.','Sign in with Google':'Accedi con Google','Go back':'Torna indietro','This folder is empty.':'Questa cartella è vuota.',// Summary
Files:'File',Images:'Immagini',Uploaded:'Caricato',Uploading:'Caricamento',Completed:'Completato',Filter:'Filtrare','Cropped Images':'Immagini Ritagliate','Edited Images':'Immagini Modificate','Selected Files':'File selezionati','Crop is required on images':'Il ritaglio è richiesto sulle immagini',// Transform
Crop:'Ritaglia',Circle:'Circolo',Rotate:'Ruotare',Mask:'Mascherare',Revert:'Annulla',Edit:'Modifica',Reset:'Reset',Done:'Finito',Save:'Salvare',Next:'Il prossimo','Edit Image':'Modifica Immagine','This image cannot be edited':'Questa immagine non può essere modificata',// Retry messaging
'Connection Lost':'Connessione Persa','Failed While Uploading':'Errore Durante il Caricamento','Retrying in':'Riprovare tra','Try again':'Riprova','Try now':'Prova ora',// Local File Source
'Drag and Drop, Copy and Paste Files':'Trascina e rilascia i file, copia e incolla i file','or Drag and Drop, Copy and Paste Files':'o trascinare, copiare e incollare file','Select Files to Upload':'Selezionare i file da caricare','Select From':'Selezionare da','Drop your files anywhere':'Rilascia i tuoi file ovunque',// Input placeholders
'Enter a URL':'Inserisci un URL','Search images':'Ricerca immagini',// Webcam Source
'Webcam Disabled':'Webcam spenta','Webcam Not Supported':'Webcam non supportato','Please enable your webcam to take a photo.':'Si prega di attivare la webcam per scattare una foto.','Your current browser does not support webcam functionality.':'Il browser corrente non supporta la funzionalità webcam.','We suggest using Chrome or Firefox.':'Suggeriamo usando Chrome o Firefox.',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'{displayName} File non è un tipo di file accettato. I tipi di file accettati sono {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{displayName} Il file è molto grande. La dimensione massima accettata per i file è {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'È il nostro limite di upload di file {maxFiles} {filesText}','No search results found for "{search}"':'Nessun risultato di ricerca trovato per "{search}"','An error occurred. Please try again.':'Si è verificato un errore. Per favore riprova.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'I file [{displayName}] sono troppo grandi. La dimensione del file accettata è {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Clicca qui o premi ESC per chiudere'};var ja={// Actions
Upload:'アップロード','Upload more':'もっとアップロードする','Deselect All':'選択を全て解除','View/Edit Selected':'選択したファイルを閲覧/編集','Sign Out':'サインアウト',// Source Labels
'My Device':'マイデバイス','Web Search':'ウェブ検索','Take Photo':'写真を撮る','Link (URL)':'URLアドレス','Record Video':'録画映像','Record Audio':'レコードオーディオ',// Custom Source
'Custom Source':'カスタムソース',// Footer Text
Add:'追加','more file':'追加ファイル','more files':'追加ファイル',// Cloud
'Connect {providerName}':'{providerName}に接続','Select Files from {providerName}':'{providerName}からファイルを選択','You need to authenticate with {providerName}.':'{providerName}を認証してください','A new page will open to connect your account.':'マイページに移動します','We only extract images and never modify or delete them.':'画像の抽出だけを行い、修正や削除をすることはありません','To disconnect from {providerName} click "Sign out" button in the menu.':'{providerName}を切断するには[サインアウト]ボタンをクリックしてください','Sign in with Google':'Googleでサインイン','Go back':'戻る','This folder is empty.':'このフォルダーは空です。',// Summary
Files:'ファイル',Images:'画像',Uploaded:'アップロード完了',Uploading:'アップロード中',Completed:'完了',Filter:'フィルター','Failed While Uploading':'アップロード中に失敗しました','Cropped Images':'切り抜かれた画像','Edited Images':'編集された画像','Selected Files':'選択済のファイル','Crop is required on images':'画像に作物が必要です','This image cannot be edited':'この画像は編集できません',// Transform
Crop:'剪る',Circle:'円型',Rotate:'廻る',Mask:'覆う',Revert:'元に戻す',Edit:'編集',Reset:'セットをしなおす',Done:'終えた',Save:'適用する',Next:'次','Edit Image':'画像編集',// Retry messaging
'Connection Lost':'接続が切断されました','Retrying in':'以下で再試行：','Try again':'再試行する','Try now':'今すぐやってみて下さい',// Local File Source
'Drag and Drop, Copy and Paste Files':'ファイルのドラッグアンドドロップ、ファイルのコピーと貼り付け','or Drag and Drop, Copy and Paste Files':'または、ファイルをドラッグ・アンド・ドロップ、コピー・アンド・ペーストする','Select Files to Upload':'アップロードするファイルを選択','Select From':'から選択','Drop your files anywhere':'どこにでもファイルをドロップする',// Input placeholders
'Enter a URL':'URLを入力','Search images':'画像を検索',// Webcam Source
'Webcam Disabled':'ウェブカメラはオフ','Webcam Not Supported':'ウェブカメラはサポートされません','Please enable your webcam to take a photo.':'写真を撮るためにウェブカメラを有効にしてください。','Your current browser does not support webcam functionality.':'現在のブラウザはウェブカメラ機能をサポートしていません。','We suggest using Chrome or Firefox.':'私達は firefox を使用することを提案する。',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'ファイル名{displayName}は、送受信可能なファイル形式ではありません。受け入れ可能なファイル形式は{types}です','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'ファイル名{displayName}の容量が大きすぎます。送受信可能なファイルのサイズは{roundFileSize}です','Our file upload limit is {maxFiles} {filesText}':'一度にアップロードできるファイルの上限は {maxFiles} {filesText}','No search results found for "{search}"':'"{search}"に該当するものはありません','An error occurred. Please try again.':'エラーが発生しました。 もう一度やり直してください。','Files [{displayName}] are too big. The accepted file size is {maxSize}':'ファイル[{displayName}]は大きすぎます。 受け入れられるファイルサイズは{maxSize}です',// Other UI labels and titles
'Click here or hit ESC to close picker':'ここをクリックするかESCを押すと閉じます'};var ko={// Actions
Upload:'업로드하기','Upload more':'더 업로드','Deselect All':'모두 취소하기','View/Edit Selected':'선택한 파일들 보기/수정하기','Sign Out':'로그아웃',// Source Labels
'My Device':'내 기기','Web Search':'웹 검색','Take Photo':'사진을 찍어','Link (URL)':'링크','Record Video':'비디오 녹화','Record Audio':'오디오 녹음',Facebook:'페이스북',Instagram:'인스타그램',Dropbox:'드랍박스','Google Photos':'구글 포토','Google Drive':'구글 드라이브',// Custom Source
'Custom Source':'맞춤 소스',// Footer Text
Add:'추가','more file':'다른 파일','more files':'다른 파일들',// Cloud
'Connect {providerName}':'{providerName} 연결','Select Files from {providerName}':'{providerName}에서 파일 선택','You need to authenticate with {providerName}.':'{providerName}로 인증해야합니다.','A new page will open to connect your account.':'계정에 연결하기 위해 새로운 창이 열립니다','We only extract images and never modify or delete them.':'이미지를 수정 또는 삭제하지 않고 불러들입니다','To disconnect from {providerName} click "Sign out" button in the menu.':'{providerName}에서 연결을 끊으려면 메뉴에서 "로그 아웃"버튼을 클릭하십시오.','Sign in with Google':'Google로 로그인','Go back':'돌아 가기','This folder is empty.':'이 폴더는 비어 있습니다.',// Summary
Files:'파일들',Images:'이미지',Uploaded:'업로드되었습니다',Uploading:'업로드 중',Completed:'완료 됨',Filter:'필터','Cropped Images':'자른 이미지','Edited Images':'수정된 파일','Selected Files':'선택된 파일','Crop is required on images':'이미지에 자르기가 필요합니다.',// Transform
Crop:'수확고',Circle:'원',Rotate:'회전하다',Mask:'감추다',Revert:'복원',Edit:'수정',Reset:'다시 놓기',Done:'끝난',Save:'구하다',Next:'다음 것','Edit Image':'이미지 편집','This image cannot be edited':'이 이미지는 편집 할 수 없습니다.',// Retry messaging
'Connection Lost':'연결이 끊어짐','Failed While Uploading':'업로드하는 동안 실패했습니다','Retrying in':'에서 다시 시도','Try again':'다시 시도해보십시오','Try now':'지금 시도',// Local File Source
'Drag and Drop, Copy and Paste Files':'파일 드래그 앤 드롭, 파일 복사 및 붙여 넣기','or Drag and Drop, Copy and Paste Files':'또는 파일을 이곳에 끌어다 놓거나, 복사 붙여넣기를 할 수 있습니다','Select Files to Upload':'클릭해서 업로드할 파일을 선택해주세요','Select From':'선택부터','Drop your files anywhere':'어디서나 파일 놓기',// Input placeholders
'Enter a URL':'URL 입력','Search images':'이미지 검색하기',// Webcam Source
'Webcam Disabled':'웹캠 기능이 비활성화되었습니다','Webcam Not Supported':'웹캠이 지원되지 않는 기기입니다','Please enable your webcam to take a photo.':'사진을 찍으려면 웹캠 기능을 활성화해주세요','Your current browser does not support webcam functionality.':'현재 브라우저는 웹캠 기능을 지원하지 않습니다','We suggest using Chrome or Firefox.':'크롬 또는 파이어폭스를 이용해주세요',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'{displayName}: 업로드 가능한 파일 형식({types})이 아니라 업로드할 수 없습니다','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{displayName}: 업로드 가능한 파일 사이즈({roundFileSize})보다 커서 업로드할 수 없습니다','Our file upload limit is {maxFiles} {filesText}':'최대 {maxFiles}개 파일을 업로드할 수 있습니다 ({filesText})','No search results found for "{search}"':'"{search}"에 대한 검색 결과가 없습니다.','An error occurred. Please try again.':'오류가 발생했습니다. 다시 시도하십시오.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'[{displayName}] 파일이 너무 큽니다. 허용되는 파일 크기는 {maxSize}입니다.',// Other UI labels and titles
'Click here or hit ESC to close picker':'여기를 클릭하거나 Esc 키를 눌러 닫습니다.'};var nl={// Actions
Upload:'Uploaden','Upload more':'Upload meer','Deselect All':'Deselecteer alles','View/Edit Selected':'Selectie bekijken/aanpassen','Sign Out':'Afmelden',// Source Labels
'My Device':'Mijn apparaat','Web Search':'Zoeken op het web','Take Photo':'Foto nemen','Link (URL)':'Link (URL)','Record Video':'Video opnemen','Record Audio':'Geluid opnemen',// Custom Source
'Custom Source':'Aangepaste bron',// Footer Text
Add:'Toevoegen','more file':'meer bestand','more files':'meer bestanden',// Cloud
'Connect {providerName}':'Verbind {providerName}','Select Files from {providerName}':'Selecteer bestanden op {providerName}','You need to authenticate with {providerName}.':'U moet verifiëren met {providerName}.','A new page will open to connect your account.':'Een nieuwe pagina wordt geopend om verbinding te maken met uw account','We only extract images and never modify or delete them.':'We halen alleen uw afbeeldingen op en zullen deze nooit aanpassen of verwijderen','To disconnect from {providerName} click "Sign out" button in the menu.':'Om de verbinding met {providerName} te verbreken, klik je op "Afmelden" in het menu.','Sign in with Google':'Log in met Google','Go back':'Ga terug','This folder is empty.':'Deze map is leeg.',// Summary
Files:'Bestanden',Images:'Afbeeldingen',Uploaded:'Geüpload',Uploading:'Aan het uploaden',Completed:'Voltooid',Filter:'Zoeken','Cropped Images':'Bijgesneden afbeeldingen','Edited Images':'Bewerkte afbeeldingen','Selected Files':'Geselecteerde bestanden','Crop is required on images':'Uitsnede is vereist op afbeeldingen',// Transform
Crop:'Verkleinen',Circle:'Cirkel',Rotate:'Draaien',Mask:'Maskeren',Revert:'Ongedaan maken',Edit:'Bewerken',Reset:'Opnieuw zetten',Done:'Gedaan',Save:'Opslaan',Next:'Volgende','Edit Image':'Bewerk afbeelding','This image cannot be edited':'Deze afbeelding kan niet worden bewerkt',// Retry messaging
'Connection Lost':'Verbinding verbroken','Failed While Uploading':'Mislukt tijdens het uploaden','Retrying in':'Opnieuw proberen over','Try again':'Probeer het nog eens','Try now':'Probeer nu',// Local File Source
'Drag and Drop, Copy and Paste Files':'Sleep bestanden en zet ze neer, kopieer en plak bestanden','or Drag and Drop, Copy and Paste Files':'of slepen, kopiëren en plakken van bestanden','Select Files to Upload':'Selecteer bestanden om te uploaden','Select From':'Selecteren','Drop your files anywhere':'Zet je bestanden overal neer',// Input placeholders
'Enter a URL':'Voer een URL in','Search images':'Zoek beelden',// Webcam Source
'Webcam Disabled':'Webcam uitgeschakeld','Webcam Not Supported':'Webcam niet ondersteund','Please enable your webcam to take a photo.':'Schakel de webcam in om een foto te maken','Your current browser does not support webcam functionality.':'Deze browser heeft geen ondersteuning voor een webcam','We suggest using Chrome or Firefox.':'Wij raden aan om Chrome of Firefox te gebruiken.',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'Het bestandstype van {displayName} wordt niet geaccepteerd. Wel toegestane bestandstypen zijn: {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'Het {displayName} is te groot. De maximaal toegestane bestandsgrootte is: {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Het maximaal aantal, te uploaden, bestanden is {maxFiles} {filesText}','No search results found for "{search}"':'Geen zoekresultaten gevonden voor "{search}"','An error occurred. Please try again.':'Er is een fout opgetreden. Probeer het opnieuw.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Bestanden [{displayName}] zijn te groot. De geaccepteerde bestandsgrootte is {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Klik hier of druk op ESC om te sluiten'};var no$1={// Actions
Upload:'Last opp','Upload more':'Last opp mer','Deselect All':'Opphev alle','View/Edit Selected':'Vis/ rediger valgte','Sign Out':'Logg ut',// Source Labels
'My Device':'Min enhet','Web Search':'Nettsøk','Take Photo':'Ta bilde','Link (URL)':'Link (URL)','Record Video':'Ta opp video','Record Audio':'Ta opp lyd',// Custom Source
'Custom Source':'Egendefinert kilde',// Footer Text
Add:'Legg til','more file':'flere filer','more files':'flere filer',// Cloud
'Connect {providerName}':'Koble {providerName}','Select Files from {providerName}':'Velg filer fra {providerName}','You need to authenticate with {providerName}.':'Du må autentisere med {providerName}.','A new page will open to connect your account.':'En ny side vil åpnes for å koble til din konto','We only extract images and never modify or delete them.':'Vi trekker kun ut bilder og vil aldri endre eller slette dem','To disconnect from {providerName} click "Sign out" button in the menu.':'For å koble fra {providerName} klikker du på "Logg ut" -knappen i menyen.','Sign in with Google':'Logg på med Google','Go back':'Gå tilbake','This folder is empty.':'Denne mappen er tom.',// Summary
Files:'Filer',Images:'Bilder',Uploaded:'Lastet opp',Uploading:'Laster opp',Completed:'Fullført',Filter:'Filtrer','Cropped Images':'Filer og mapper','Edited Images':'Redigerte bilder','Selected Files':'Valgte filer','Crop is required on images':'Beskjæring er påkrevd for bilder',// Transform
Crop:'Beskjær',Circle:'Sirkel',Rotate:'Rotere',Mask:'Maske',Revert:'Tilbakestill',Edit:'Rediger',Reset:'Tilbakestill',Done:'Ferdig',Save:'Lagre',Next:'Neste','Edit Image':'Rediger bilde ','This image cannot be edited':'Dette bildet kan ikke redigeres',// Retry messaging
'Connection Lost':'Forbindelse mistet','Failed While Uploading':'Mislyktes under opplasting','Retrying in':'Prøver på nytt om','Try again':'Prøv igjen','Try now':'Prøv nå',// Local File Source
'Drag and Drop, Copy and Paste Files':'Dra og slipp, kopier og lim inn filer','or Drag and Drop, Copy and Paste Files':'eller dra og slipp, kopier og lim inn filer','Select Files to Upload':'Velg filer som skal lastes opp','Select From':'Velg fra','Drop your files anywhere':'Slett filene dine hvor som helst',// Input placeholders
'Enter a URL':'Skriv inn URL','Search images':'Søk bilder',// Webcam Source
'Webcam Disabled':'Webkamera deaktivert','Webcam Not Supported':'Webkamera ikke støttet','Please enable your webcam to take a photo.':'Vennligst aktiver ditt webkamera for å ta et bilde.','Your current browser does not support webcam functionality.':'Din nåværende nettleser støtter ikke webkamera funksjonalitet.','We suggest using Chrome or Firefox.':'Vi foreslår Chrome eller Firefox',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'Filen {displayName} er ikke en akseptert filtype. De godkjente filtyper er {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'Filen {displayName} er for stor. Akseptert filstørrelse er {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Vår filopplastingsgrense er {maxFiles} {filesText}','No search results found for "{search}"':'Ingen søkeresultater funnet for "{search}"','An error occurred. Please try again.':'En feil oppstod. Vær så snill, prøv på nytt.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Filene [{displayName}] er for store. Den aksepterte filstørrelsen er {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Klikk her eller trykk ESC for å lukke'};var pl={// Actions
Upload:'Prześlij pliki','Upload more':'Prześlij więcej','Deselect All':'Odznacz wszystko','View/Edit Selected':'Wyświetl/Edytuj zaznaczone','Sign Out':'Wyloguj się',// Source Labels
'My Device':'Moje urządzenie','Web Search':'Grafika z internetu','Take Photo':'Zrób zdjęcie','Link (URL)':'Adres URL','Record Video':'Nagrać wideo','Record Audio':'Nagrać dźwięk',// Custom Source
'Custom Source':'Niestandardowe źródło',// Footer Text
Add:'Dodaj','more file':'więcej plików','more files':'więcej plików',// Cloud
'Connect {providerName}':'Połącz z {providerName}','Select Files from {providerName}':'Wybierz pliki z {providerName}','You need to authenticate with {providerName}.':'Musisz zostać zautoryzowany przez {providerName}.','A new page will open to connect your account.':'Nowa strona zostanie otwarta w celu połączenia z Twoim kontem.','We only extract images and never modify or delete them.':'Mamy tylko wyodrębnić obrazy i nigdy zmodyfikować lub usunąć je','To disconnect from {providerName} click "Sign out" button in the menu.':'Aby rozłączyć się z {providerName} kliknij "Wyloguj się" w menu.','Sign in with Google':'Zaloguj się do Google','Go back':'Wróć','This folder is empty.':'Ten folder jest pusty.',// Summary
Files:'Pliki',Images:'Obrazy',Uploaded:'Przesłany',Uploading:'Przesyłanie danych',Completed:'Ukończono',Filter:'Szukaj','Cropped Images':'Przycięte obrazy','Edited Images':'Edytowane obrazy','Selected Files':'Wybrane pliki','Crop is required on images':'Przycinanie jest wymagane na obrazach',// Transform
Crop:'przytnij',Circle:'przytnij w kształcie koła',Rotate:'obróć',Mask:'dodaj warstwę',Revert:'Cofnij',Edit:'Edytuj',Reset:'przywróć oryginał',Done:'Gotowe',Save:'Zapisać',Next:'Kolejny','Edit Image':'Edytuj zdjęcie','This image cannot be edited':'Tego obrazu nie można edytować',// Retry messaging
'Connection Lost':'Utracono połączenie','Failed While Uploading':'Wystąpił błąd podczas przesyłania','Retrying in':'Ponawiam próbę','Try again':'Spróbuj ponownie','Try now':'Spróbuj teraz',// Local File Source
'Drag and Drop, Copy and Paste Files':'Przeciągnij i upuść pliki','or Drag and Drop, Copy and Paste Files':'lub przeciągnij i upuść, kopiować i wklejać pliki','Select Files to Upload':'Wybierz pliki do przesłania','Select From':'Wybierz z','Drop your files anywhere':'Upuść swoje pliki w dowolnym miejscu',// Input placeholders
'Enter a URL':'Wprowadź adres URL','Search images':'Szukaj obrazów',// Webcam Source
'Webcam Disabled':'Kamera jest wyłączona','Webcam Not Supported':'Kamera nie jest obsługiwana','Please enable your webcam to take a photo.':'Proszę włączyć kamerę internetową, aby zrobić zdjęcie','Your current browser does not support webcam functionality.':'Twoja przeglądarka obecnie nie obsługuje funkcji kamery internetowej.','We suggest using Chrome or Firefox.':'Zalecamy użycie Chrome lub Firefox',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'{displayName} Plik nie jest typem plików akceptowane. Typy plików akceptowane są {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{displayName} Plik jest zbyt duże. Rozmiar plików akceptowane jest {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Limit ilości plików to {maxFiles} {filesText}','No search results found for "{search}"':'Nie znaleziono wynikow dla "{search}"','An error occurred. Please try again.':'Wystąpił błąd. Spróbuj ponownie.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Pliki [{displayName}] są za duże. Akceptowany rozmiar pliku to {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Kliknij tutaj lub naciśnij ESC, aby zamknąć'};var pt={// Actions
Upload:'Carregar','Upload more':'Carregar mais','Deselect All':'Desmarcar todos','View/Edit Selected':'Exibir/Editar selecionada','Sign Out':'Desconectar',// Source Labels
'My Device':'Meu dispositivo','Web Search':'Buscar imagens na Web','Take Photo':'Tirar Foto','Link (URL)':'Link (URL)','Record Video':'Gravar vídeo','Record Audio':'Gravar audio',// Custom Source
'Custom Source':'Fonte Personalizada',// Footer Text
Add:'Adicionar','more file':'arquivo mais','more files':'mais arquivos',// Cloud
'Connect {providerName}':'Conecte o {providerName}','Select Files from {providerName}':'Selecione arquivos do {providerName}','You need to authenticate with {providerName}.':'Você precisa se autenticar com o {providerName}.','A new page will open to connect your account.':'Uma nova página será aberta para conectar a sua conta.','We only extract images and never modify or delete them.':'Nós apenas extraímos os arquivos selecionados e nunca os modificamos ou os removemos.','To disconnect from {providerName} click "Sign out" button in the menu.':'Para desconectar do {providerName}, clique no botão "Desconectar" no menu.','Sign in with Google':'Faça login no Google','Go back':'Volte','This folder is empty.':'Esta pasta está vazia.',// Summary
Files:'Ficheiros',Images:'Imagens',Uploaded:'Carregado',Uploading:'A Enviar',Completed:'Concluído',Filter:'Ordenar','Cropped Images':'Imagens Cortadas','Edited Images':'Imagens Editadas','Selected Files':'Arquivos selecionados','Crop is required on images':'A colheita é necessária em imagens',// Transform
Crop:'Cortar',Circle:'Círculo',Rotate:'Rodar',Mask:'Mascarar',Revert:'Desfazer',Edit:'Editar',Reset:'Recompor',Done:'Feito',Save:'Salve',Next:'Próximo','Edit Image':'Editar Imagem','This image cannot be edited':'Esta imagem não pode ser editada',// Retry messaging
'Failed While Uploading':'Falha ao enviar','Retrying in':'A Tentar Novamente em','Connection Lost':'Ligação perdida','Try again':'Tente novamente','Try now':'Tente agora',// Local File Source
'Drag and Drop, Copy and Paste Files':'Arraste e solte, copie e cole arquivos','or Drag and Drop, Copy and Paste Files':'ou arrastar, copiar e colar arquivos','Select Files to Upload':'Selecionar arquivos para upload','Select From':'Selecione de','Drop your files anywhere':'Solte seus arquivos em qualquer lugar',// Input placeholders
'Enter a URL':'Insira um URL','Search images':'Procurar fotos',// Webcam Source
'Webcam Disabled':'Webcam Desativada','Webcam Not Supported':'Webcam Não Suportada','Please enable your webcam to take a photo.':'Por favor, ative sua webcam para tirar uma foto','Your current browser does not support webcam functionality.':'Seu navegador atual não suporta conexão com a webcam.','We suggest using Chrome or Firefox.':'Nós sugerimos Chrome ou Firefox.',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':' Arquivo {displayName} não é um tipo de arquivo aceitos. Os tipos de arquivo aceitos são {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{displayName} Arquivo é muito grande. O tamanho de arquivo aceito é {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'É o nosso limite de upload de arquivo {maxFiles} {filesText}','No search results found for "{search}"':'Nenhum resultado de pesquisa encontrado para "{search}"','An error occurred. Please try again.':'Um erro ocorreu. Por favor, tente novamente.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Os arquivos [{displayName}] são muito grandes. O tamanho do arquivo aceito é {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Clique aqui ou pressione ESC para fechar'};var ru={// Actions
Upload:'загрузить','Upload more':'Загрузить больше','Deselect All':'отмена','View/Edit Selected':'просмотреть/редактировать','Sign Out':'выйти',// Source Labels
'My Device':'Моё устройство','Web Search':'Поиск изображений в сети','Take Photo':'Фотографировать','Link (URL)':'URL-адрес','Record Video':'Запись видео','Record Audio':'Запись аудио',// Custom Source
'Custom Source':'Пользовательский источник',// Footer Text
Add:'Добавить','more file':'более файла','more files':'больше файлов',// Cloud
'Connect {providerName}':'Подключите {providerName}','Select Files from {providerName}':'Выбрать файлы из {providerName}','You need to authenticate with {providerName}.':'Вам нужно пройти аутентификацию с помощью {providerName}.','A new page will open to connect your account.':'Новая страница открывается чтобы подключить ваш аккаунт','We only extract images and never modify or delete them.':'Мы просто извлекаем фото, а никогда не их изменяем или удалим','To disconnect from {providerName} click "Sign out" button in the menu.':'Чтобы отключиться от {providerName}, нажмите кнопку «Выйти» в меню.','Sign in with Google':'Войти через Google','Go back':'Вернитесь','This folder is empty.':'Эта папка пуста.',// Summary
Files:'файлы',Images:'фото',Uploaded:'загружены',Uploading:'Загружается',Completed:'Завершено',Filter:'сортировать по дате','Cropped Images':'Обрезанные изображения','Edited Images':'Отредактированные изображения','Selected Files':'Выбранные файлы','Crop is required on images':'Урожай требуется для изображений',// Transform
Crop:'отделка',Circle:'круг',Rotate:'вращаться',Mask:'скрывать',Revert:'Отменить',Edit:'Изменить',Reset:'сброс',Done:'законченный',Save:'Сохранить',Next:'Следующий','Edit Image':'редактировать изображение','This image cannot be edited':'Это изображение нельзя отредактировать',// Retry messaging
'Connection Lost':'Соединение потеряно','Failed While Uploading':'Ошибка при загрузке','Retrying in':'Повторная попытка через','Try again':'Попробуй еще раз','Try now':'Попробуй',// Local File Source
'Drag and Drop, Copy and Paste Files':'Перетаскивание, копирование и вставка файлов','or Drag and Drop, Copy and Paste Files':'или перетаскивать, копировать и вставлять файлы','Select Files to Upload':'Выберите файлы для загрузки','Select From':'выбрать в...','Drop your files anywhere':'Перетащите свои файлы куда угодно',// Input placeholders
'Enter a URL':'Введите URL-адрес','Search images':'поиск фото',// Webcam Source
'Webcam Disabled':'Веб-камера отключена','Webcam Not Supported':'Веб-камера не поддерживается','Please enable your webcam to take a photo.':'Пожалуйста, включите фотокамеру, чтобы сделать фотографию','Your current browser does not support webcam functionality.':'Текущий браузер не поддерживает функциональность веб-камеры','We suggest using Chrome or Firefox.':'Мы предлагаем использовать Firefox',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'{displayName} Файлов не является типом прикладываемых файлов. Типы прикладываемых файлов являются {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{displayName} Файл слишком большой. Признанных файл имеет размер {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Наш предел загрузки файлов {maxFiles} {filesText}','No search results found for "{search}"':'По запросу "{search}" ничего не найдено','An error occurred. Please try again.':'Произошла ошибка. Пожалуйста, попробуйте еще раз.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Файлы [{displayName}] слишком велики. Принятый размер файла: {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Нажмите здесь или нажмите ESC, чтобы закрыть'};var sv={// Actions
Upload:'Ladda upp','Upload more':'Ladda upp mer','Deselect All':'Avmarkera Alla','View/Edit Selected':'Visa/Editera Valda','Sign Out':'Logga ut',// Source Labels
'My Device':'Min enhet','Web Search':'Webbsökning','Take Photo':'Ta Ett Foto','Link (URL)':'URL-adress','Record Video':'Spela in video','Record Audio':'Spela in ljud',// Custom Source
'Custom Source':'Anpassad källa',// Footer Text
Add:'Lägg till','more file':'more fil','more files':'fler filer',// Cloud
'Connect {providerName}':'Anslut {providerName}','Select Files from {providerName}':'Välj filer från {providerName}','You need to authenticate with {providerName}.':'Du måste verifiera med google-enheten {providerName}.','A new page will open to connect your account.':'En ny sida öppnas för att ansluta ditt konto','We only extract images and never modify or delete them.':'Vi använder bara bildern och ändrar aldrig eller tar bort dem','To disconnect from {providerName} click "Sign out" button in the menu.':'För att koppla från {providerName}, klicka på "Logga ut" -knappen i menyn.','Sign in with Google':'Logga in med Google','Go back':'Gå tillbaka','This folder is empty.':'Denna mapp är tom.',// Summary
Files:'Filer',Images:'Bilder',Uploaded:'Uppladdade',Uploading:'Uppladdning',Completed:'Avslutad',Filter:'Filter','Cropped Images':'Beskurna Bilder','Edited Images':'Redigerad Bild','Selected Files':'Valda filer','Crop is required on images':'Beskär krävs på bilder',// Transform
Crop:'Beskära',Circle:'Cirkel',Rotate:'Rotera',Mask:'Maskera',Revert:'Invertera',Edit:'Editera',Reset:'Återställ',Done:'Gjort',Save:'Spara',Next:'Nästa','Edit Image':'Redigera Bild','This image cannot be edited':'Den här bilden kan inte redigeras',// Retry messaging
'Connection Lost':'Anslutning förlorad','Failed While Uploading':'Misslyckades Vid Uppladdning','Retrying in':'Försöker Igen','Try again':'Försök Igen','Try now':'Prova nu',// Local File Source
'Drag and Drop, Copy and Paste Files':'Dra och släpp, kopiera och klistra in filer','or Drag and Drop, Copy and Paste Files':'Eller dra och släpp, kopiera och klistra in filer','Select Files to Upload':'Välj dina filer för att ladda upp','Select From':'Välj från','Drop your files anywhere':'Släpp dina filer var som helst',// Input placeholders
'Enter a URL':'Ange en webbadress','Search images':'Sök bilder',// Webcam Source
'Webcam Disabled':'Webkameran Avaktiverad','Webcam Not Supported':'Webkameran är inte kompatibel','Please enable your webcam to take a photo.':'Vänligen aktivera din webkamera för att ta ett foto','Your current browser does not support webcam functionality.':'Din nuvarande webbläsare stöder inte webbkamera','We suggest using Chrome or Firefox.':'Vi föreslår att du använder Chrome eller Firefox.',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'Fil {displayName} är inte en accepterad filtyp. De accepterade filtyperna är {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'Fil {displayName} är för stor. Den accepterade filstorleken är mindre än {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Vår Filöverföringsgräns är {maxFiles} {filesText}','No search results found for "{search}"':'Inga sökresultat funna för "{search}"','An error occurred. Please try again.':'Ett fel uppstod. Var god försök igen.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Filer [{displayName}] är för stora. Den accepterade filstorleken är {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Klicka här eller tryck ESC för att stänga'};var tr={// Actions
Upload:'Resimleri Yükle','Deselect All':'Seçimi Kaldır','View/Edit Selected':'Görüntüle/Düzenle','Sign Out':'Çıkış Yap','Upload more':'Daha fazla ekle',// Source Labels
'My Device':'Bilgisayarım','Web Search':'Web Arama','Take Photo':'Fotoğraf Çek','Link (URL)':'Link','Record Video':'Video kaydetmek','Record Audio':'Ses kaydı',// Custom Source
'Custom Source':'Özel kaynak',// Footer Text
Add:'Ekle','more file':'Daha Fazla','more files':'Daha Fazla',// Cloud
'Connect {providerName}':'{providerName} bağlayın','Select Files from {providerName}':'{providerName} Dosyaları Seç','You need to authenticate with {providerName}.':'{providerName} sürücü ile kimlik doğrulaması yapmanız gerekir.','A new page will open to connect your account.':'Giriş yapman için yeni sayfa açılacak','We only extract images and never modify or delete them.':'Biz sadece resimlerinizi görüntüleriz, düzenleme ve silme işlemi yapmayız.','To disconnect from {providerName} click "Sign out" button in the menu.':'{providerName} ile bağlantısını kesmek için menüdeki "Çıkış Yap" butonuna tıklayın.','Sign in with Google':'Google ile giriş yap','Go back':'Geri dön','This folder is empty.':'Bu klasör boş.',// Summary
Files:'Dosyalar',Images:'Resimler',Uploaded:'Yüklendi',Uploading:'Yükleniyor',Completed:'Tamamlandı',Filter:'Filtre','Cropped Images':'Kesilen resimler','Edited Images':'Düzenlenen resimler','Selected Files':'Seçilen resimler','Crop is required on images':'Kesim işlemi resimlerde zorunludur',// Transform
Crop:'Kes',Circle:'Yuvarlak',Rotate:'Döndür',Mask:'Maskele',Revert:'Geri Al',Edit:'Düzenle',Reset:'Sıfırla',Done:'Tamam',Save:'Kaydet',Next:'Sonraki','Edit Image':'Resmi düzenle','This image cannot be edited':'Bu resim düzenlenemez',// Retry messaging
'Connection Lost':'İletişim koptu','Failed While Uploading':'Yüklenirken hata oluştu','Retrying in':'Tekrar denenecek: ','Try again':'Tekrar dene','Try now':'Şimdi tekrar dene',// Local File Source
'Drag and Drop, Copy and Paste Files':'Sürükle ve Bırak, Dosyaları Kopyala ve Yapıştır','or Drag and Drop, Copy and Paste Files':'veya sürükle bırak ya da buraya kopyala/yapıştır','Select Files to Upload':'Fotoğrafları yüklemek için seçin','Select From':'Seçiminizi yapın: ','Drop your files anywhere':'Resimlerinizi herhangi bir yere sürükleyin',// Input placeholders
'Enter a URL':'Link girin','Search images':'Resim ara',// Webcam Source
'Webcam Disabled':'Webcam Devre Dışı','Webcam Not Supported':'Webcam Desteklenmiyor','Please enable your webcam to take a photo.':'Lütfen web kameranızın fotoğraf çekmesini sağlayın.','Your current browser does not support webcam functionality.':'Mevcut tarayıcınız web kamerası işlevini desteklemiyor.','We suggest using Chrome or Firefox.':'Chrome veya Firefox kullanmanızı öneririz.',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'{displayName} isimli dosyanın tipi kabul edilmiyor. Kabul edilen dosya tipleri: {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'{displayName} isimli resim dosyasının boyutu çok büyük. Kabul edilen en yüksek dosya boyutu: {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Resim yükleme limiti {maxFiles} adet.','No search results found for "{search}"':'Arama sonucu "{search}"','An error occurred. Please try again.':'Bir hata oluştu. Lütfen tekrar deneyin.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'[{DisplayName}] dosyaları çok büyük. Kabul edilen dosya boyutu: {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Buraya tıklayın veya kapatmak için ESC basın.'};var vi={// Actions
Upload:'Tải lên','Upload more':'Tải lên nhiều hơn','Deselect All':'Bỏ chọn tất cả','View/Edit Selected':'Xem/Chỉnh sửa tập tin đã chọn','Sign Out':'Đăng xuất',// Source Labels
'My Device':'Thiết bị của tôi','Web Search':'Tìm kiếm trên web','Take Photo':'Chụp ảnh','Link (URL)':'Địa chỉ URL','Record Video':'Quay video','Record Audio':'Ghi âm',// Custom Source
'Custom Source':'Nguồn tùy chỉnh',// Footer Text
Add:'Thêm','more file':'Thêm tập tin','more files':'Thêm tập tin',// Cloud
'Connect {providerName}':'Kết nối {providerName}','Select Files from {providerName}':'Chọn tệp từ {providerName}','You need to authenticate with {providerName}.':'Bạn cần xác thực với {providerName}.','A new page will open to connect your account.':'Một trang kết nối với tài khoản của bạn sẽ được mở','We only extract images and never modify or delete them.':'Chúng tôi chỉ trích xuất hình ảnh và không bao giờ sửa đổi hoặc xóa chúng','To disconnect from {providerName} click "Sign out" button in the menu.':'Để ngắt kết nối khỏi {providerName}, nhấp vào nút "Đăng xuất" trong menu.','Sign in with Google':'Đăng nhập bằng Google','Go back':'Quay lại','This folder is empty.':'Thư mục này trống.',// Summary
Files:'Các tập tin',Images:'Hình ảnh',Uploaded:'Đã tải lên',Uploading:'Tải lên',Completed:'Đã hoàn thành',Filter:'Bộ lọc','Cropped Images':'Hình ảnh bị cắt','Edited Images':'Chỉnh sửa hình ảnh','Selected Files':'Tập tin đã được chọn','Crop is required on images':'Cây trồng được yêu cầu trên hình ảnh',// Transform
Crop:'Cắt',Circle:'Giới',Rotate:'Quay',Mask:'Mặt nạ',Revert:'Quay lại',Edit:'Chỉnh sửa',Reset:'Cài lại',Done:'Hoàn tất',Save:'Tiết kiệm',Next:'Kế tiếp','Edit Image':'Chỉnh sửa hình ảnh','This image cannot be edited':'Không thể chỉnh sửa hình ảnh này',// Retry messaging
'Connection Lost':'Kết nối bị mất','Failed While Uploading':'Không thể tải lên','Retrying in':'Đang thử lại','Try again':'Thử lại','Try now':'Thử ngay bây giờ',// Local File Source
'Drag and Drop, Copy and Paste Files':'Kéo và thả, sao chép và dán tập tin','or Drag and Drop, Copy and Paste Files':'hoặc Kéo và Thả, Sao chép và Dán Tập tin','Select Files to Upload':'Chọn tập tin để tải lên','Select From':'Chọn từ','Drop your files anywhere':'Thả tập tin của bạn bất cứ nơi nào',// Input placeholders
'Enter a URL':'Nhập URL','Search images':'Tìm kiểm hình ảnh',// Webcam Source
'Webcam Disabled':'Webcam bị vô hiệu hóa','Webcam Not Supported':'Webcam không được hỗ trợ','Please enable your webcam to take a photo.':'Hãy kích hoạt webcam của bạn để chụp ảnh.','Your current browser does not support webcam functionality.':'Trình duyệt hiện tại của bạn không hỗ trợ chức năng webcam.','We suggest using Chrome or Firefox.':'Chúng tôi khuyên bạn sử dụng Chrome hoặc Firefox.',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':'Tập tin {displayName} không phải là loại tập tin được chấp nhận. Các loại tập tin được chấp nhận là {types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':'Tập tin {displayName} quá lớn. Kích thước tập tin được chấp nhận là {roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'Giới hạn tập tin tải lên là {maxFiles} {filesText}','No search results found for "{search}"':'Không tìm thấy kết quả tìm kiếm cho "{search}"','An error occurred. Please try again.':'Xảy ra lỗi Vui lòng thử lại.','Files [{displayName}] are too big. The accepted file size is {maxSize}':'Tệp [{displayName}] quá lớn. Kích thước tệp được chấp nhận là {maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'Nhấn vào đây hoặc nhấn ESC để đóng'};var zh={// Actions
Upload:'上传','Upload more':'上传更多','Deselect All':'取消选择全部','View/Edit Selected':'查看/编辑所选项','Sign Out':'登出',// Source Labels
'My Device':'我的设备','Web Search':'为图片搜索网络','Take Photo':'拍照','Link (URL)':'网址','Record Video':'录视频','Record Audio':'录制音频',// Custom Source
'Custom Source':'自定义来源',// Footer Text
Add:'再添加','more file':'更多文件','more files':'更多文件',// Cloud
'Connect {providerName}':'连接{providerName}','Select Files from {providerName}':'从{providerName}中选择文件','You need to authenticate with {providerName}.':'您需要使用{providerName}驱动器进行身份验证。','A new page will open to connect your account.':'一个新页面会打开以关联您的帐户','We only extract images and never modify or delete them.':'我们只提取图像，从不修改或删除它们','To disconnect from {providerName} click "Sign out" button in the menu.':'要断开与{providerName}的连接，请单击菜单中的“登出”按钮。','Sign in with Google':'使用Google登录','Go back':'回去','This folder is empty.':'这个文件夹是空的。',// Summary
Files:'文件',Images:'图片',Uploaded:'已上传',Uploading:'正在上传',Completed:'已完成',Filter:'过滤','Cropped Images':'裁剪图片','Edited Images':'编辑的图像','Selected Files':'所选文件','Crop is required on images':'图像上需要裁剪',// Transform
Crop:'剪',Circle:'圆',Rotate:'回转',Mask:'重新盖上',Revert:'还原',Edit:'编辑',Reset:'重启',Done:'毕',Save:'保存',Next:'下一个','Edit Image':'编辑图像','This image cannot be edited':'此图像无法编辑',// Retry messaging
'Connection Lost':'连接中断','Failed While Uploading':'上传失败','Retrying in':'重试倒计时','Try again':'再试一次','Try now':'现在试试',// Local File Source
'Drag and Drop, Copy and Paste Files':'拖放，复制和粘贴文件','or Drag and Drop, Copy and Paste Files':'或拖放，复制和粘贴文件','Select Files to Upload':'选择要上传的文件','Select From':'选择自','Drop your files anywhere':'将文件放在任何地方',// Input placeholders
'Enter a URL':'输入一个网址','Search images':'搜索图像',// Webcam Source
'Webcam Disabled':'摄像头关闭','Webcam Not Supported':'不支持摄像头','Please enable your webcam to take a photo.':'请打开摄像头','Your current browser does not support webcam functionality.':'您的浏览器不支持网络摄像头功能。','We suggest using Chrome or Firefox.':'我们建议使用火狐。',// Error Notifications
'File {displayName} is not an accepted file type. The accepted file types are {types}':' 文件{displayName}不是可接受的文件类型。 可接受的文件类型为{types}','File {displayName} is too big. The accepted file size is less than {roundFileSize}':' 文件{displayName}太大。 可接受的文件大小为{roundFileSize}','Our file upload limit is {maxFiles} {filesText}':'我们的文件上传限制为 {maxFiles} {filesText}','No search results found for "{search}"':'未找到{search}的搜索结果','An error occurred. Please try again.':'发生错误。 请再试一次。','Files [{displayName}] are too big. The accepted file size is {maxSize}':'文件[{displayName}]太大。 可接受的文件大小为{maxSize}',// Other UI labels and titles
'Click here or hit ESC to close picker':'单击此处或按ESC键关闭'};var languages={ar:ar,ca:ca,da:da,de:de,en:en,es:es,fr:fr,he:he,it:it,ja:ja,ko:ko,nl:nl,no:no$1,pl:pl,pt:pt,ru:ru,sv:sv,tr:tr,vi:vi,zh:zh};var errors=function errors(){var lang=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'en';var customText=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var phrases=_objectSpread({},languages[lang],{},customText);var getPhrase=function getPhrase(p){return phrases[p]||p;};return{ERROR_FILE_NOT_ACCEPTABLE:getPhrase('File {displayName} is not an accepted file type. The accepted file types are {types}'),ERROR_FILE_TOO_BIG:getPhrase('File {displayName} is too big. The accepted file size is less than {roundFileSize}'),ERROR_FILES_TOO_BIG:getPhrase('Files [{displayName}] are too big. The accepted file size is {maxSize}'),ERROR_MAX_FILES_REACHED:getPhrase('Our file upload limit is {maxFiles} {filesText}')};};var image_traverse=createCommonjsModule(function(module){/**
   * CLASS originally forked from https://github.com/nodeca/image-blob-reduce/blob/master/lib/image_traverse.js
   * usefull links https://github.com/corkami/formats/blob/master/image/jpeg.md
   */ //////////////////////////////////////////////////////////////////////////
// Helpers
//
function error(message,code){var err=new Error(message);err.code=code;return err;}// Convert number to 0xHH string
//
function to_hex(number){var n=number.toString(16).toUpperCase();for(var i=2-n.length;i>0;i--){n='0'+n;}return'0x'+n;}function utf8_encode(str){try{return unescape(encodeURIComponent(str));}catch(_){return str;}}function utf8_decode(str){try{return decodeURIComponent(escape(str));}catch(_){return str;}}// Check if input is a Uint8Array
//
function is_uint8array(bin){return Object.prototype.toString.call(bin)==='[object Uint8Array]';}function isArrayBuffer(value){return value instanceof ArrayBuffer||toString.call(value)==='[object ArrayBuffer]';}function converToArray(input){if(isArrayBuffer(input)){return new Uint8Array(input);}return input;}//////////////////////////////////////////////////////////////////////////
// Exif parser
//
// Input:
//  - jpeg_bin:   Uint8Array - jpeg file
//  - exif_start: Number     - start of TIFF header (after Exif\0\0)
//  - exif_end:   Number     - end of Exif segment
//  - on_entry:   Number     - callback
//
function ExifParser(jpeg_bin,exif_start,exif_end){// Uint8Array, exif without signature (which isn't included in offsets)
this.input=jpeg_bin.subarray(exif_start,exif_end);// offset correction for `on_entry` callback
this.start=exif_start;// Check TIFF header (includes byte alignment and first IFD offset)
var sig=String.fromCharCode.apply(null,this.input.subarray(0,4));if(sig!=='II\x2A\0'&&sig!=='MM\0\x2A'){throw error('invalid TIFF signature','EBADDATA');}// true if motorola (big endian) byte alignment, false if intel
this.big_endian=sig[0]==='M';}ExifParser.prototype.each=function(on_entry){// allow premature exit
this.aborted=false;var offset=this.read_uint32(4);this.ifds_to_read=[{id:0,offset:offset}];while(this.ifds_to_read.length>0&&!this.aborted){var i=this.ifds_to_read.shift();if(!i.offset)continue;this.scan_ifd(i.id,i.offset,on_entry);}};ExifParser.prototype.filter=function(on_entry){var ifds={};// make sure IFD0 always exists
ifds.ifd0={id:0,entries:[]};this.each(function(entry){if(on_entry(entry)===false&&!entry.is_subifd_link)return;if(entry.is_subifd_link&&entry.count!==1&&entry.format!==4)return;// filter out bogus links
if(!ifds['ifd'+entry.ifd]){ifds['ifd'+entry.ifd]={id:entry.ifd,entries:[]};}ifds['ifd'+entry.ifd].entries.push(entry);});// thumbnails are not supported just yet, so delete all information related to it
delete ifds.ifd1;// Calculate output size
var length=8;Object.keys(ifds).forEach(function(ifd_no){length+=2;ifds[ifd_no].entries.forEach(function(entry){length+=12+(entry.data_length>4?Math.ceil(entry.data_length/2)*2:0);});length+=4;});this.output=new Uint8Array(length);this.output[0]=this.output[1]=(this.big_endian?'M':'I').charCodeAt(0);this.write_uint16(2,0x2a);var offset=8;var self=this;this.write_uint32(4,offset);Object.keys(ifds).forEach(function(ifd_no){ifds[ifd_no].written_offset=offset;var ifd_start=offset;var ifd_end=ifd_start+2+ifds[ifd_no].entries.length*12+4;offset=ifd_end;self.write_uint16(ifd_start,ifds[ifd_no].entries.length);ifds[ifd_no].entries.sort(function(a,b){// IFD entries must be in order of increasing tag IDs
return a.tag-b.tag;}).forEach(function(entry,idx){var entry_offset=ifd_start+2+idx*12;self.write_uint16(entry_offset,entry.tag);self.write_uint16(entry_offset+2,entry.format);self.write_uint32(entry_offset+4,entry.count);if(entry.is_subifd_link){// filled in later
if(ifds['ifd'+entry.tag])ifds['ifd'+entry.tag].link_offset=entry_offset+8;}else if(entry.data_length<=4){self.output.set(self.input.subarray(entry.data_offset-self.start,entry.data_offset-self.start+4),entry_offset+8);}else{self.write_uint32(entry_offset+8,offset);self.output.set(self.input.subarray(entry.data_offset-self.start,entry.data_offset-self.start+entry.data_length),offset);offset+=Math.ceil(entry.data_length/2)*2;}});var next_ifd=ifds['ifd'+(ifds[ifd_no].id+1)];if(next_ifd)next_ifd.link_offset=ifd_end-4;});Object.keys(ifds).forEach(function(ifd_no){if(ifds[ifd_no].written_offset&&ifds[ifd_no].link_offset){self.write_uint32(ifds[ifd_no].link_offset,ifds[ifd_no].written_offset);}});if(this.output.length!==offset)throw error('internal error: incorrect buffer size allocated');return this.output;};ExifParser.prototype.read_uint16=function(offset){var d=this.input;if(offset+2>d.length)throw error('unexpected EOF','EBADDATA');return this.big_endian?d[offset]*0x100+d[offset+1]:d[offset]+d[offset+1]*0x100;};ExifParser.prototype.read_uint32=function(offset){var d=this.input;if(offset+4>d.length)throw error('unexpected EOF','EBADDATA');return this.big_endian?d[offset]*0x1000000+d[offset+1]*0x10000+d[offset+2]*0x100+d[offset+3]:d[offset]+d[offset+1]*0x100+d[offset+2]*0x10000+d[offset+3]*0x1000000;};ExifParser.prototype.write_uint16=function(offset,value){var d=this.output;if(this.big_endian){d[offset]=value>>>8&0xff;d[offset+1]=value&0xff;}else{d[offset]=value&0xff;d[offset+1]=value>>>8&0xff;}};ExifParser.prototype.write_uint32=function(offset,value){var d=this.output;if(this.big_endian){d[offset]=value>>>24&0xff;d[offset+1]=value>>>16&0xff;d[offset+2]=value>>>8&0xff;d[offset+3]=value&0xff;}else{d[offset]=value&0xff;d[offset+1]=value>>>8&0xff;d[offset+2]=value>>>16&0xff;d[offset+3]=value>>>24&0xff;}};ExifParser.prototype.is_subifd_link=function(ifd,tag){return ifd===0&&tag===0x8769||// SubIFD
ifd===0&&tag===0x8825||// GPS Info
ifd===0x8769&&tag===0xa005;// Interop IFD
};// Returns byte length of a single component of a given format
//
ExifParser.prototype.exif_format_length=function(format){switch(format){case 1:// byte
case 2:// ascii
case 6:// sbyte
case 7:// undefined
return 1;case 3:// short
case 8:// sshort
return 2;case 4:// long
case 9:// slong
case 11:// float
return 4;case 5:// rational
case 10:// srational
case 12:// double
return 8;default:// unknown type
return 0;}};// Reads Exif data
//
ExifParser.prototype.exif_format_read=function(format,offset){var v;switch(format){case 1:// byte
case 2:// ascii
v=this.input[offset];return v;case 6:// sbyte
v=this.input[offset];return v|(v&0x80)*0x1fffffe;case 3:// short
v=this.read_uint16(offset);return v;case 8:// sshort
v=this.read_uint16(offset);return v|(v&0x8000)*0x1fffe;case 4:// long
v=this.read_uint32(offset);return v;case 9:// slong
v=this.read_uint32(offset);return v|0;case 5:// rational
case 10:// srational
case 11:// float
case 12:// double
return null;// not implemented
case 7:// undefined
return null;// blob
default:// unknown type
return null;}};ExifParser.prototype.scan_ifd=function(ifd_no,offset,on_entry){var entry_count=this.read_uint16(offset);offset+=2;for(var i=0;i<entry_count;i++){var tag=this.read_uint16(offset);var format=this.read_uint16(offset+2);var count=this.read_uint32(offset+4);var comp_length=this.exif_format_length(format);var data_length=count*comp_length;var data_offset=data_length<=4?offset+8:this.read_uint32(offset+8);var is_subifd_link=false;if(data_offset+data_length>this.input.length){throw error('unexpected EOF','EBADDATA');}var value=[];var comp_offset=data_offset;for(var j=0;j<count;j++,comp_offset+=comp_length){var item=this.exif_format_read(format,comp_offset);if(item===null){value=null;break;}value.push(item);}if(Array.isArray(value)&&format===2){try{value=utf8_decode(String.fromCharCode.apply(null,value));}catch(_){value=null;}if(value&&value[value.length-1]==='\0')value=value.slice(0,-1);}if(this.is_subifd_link(ifd_no,tag)){if(Array.isArray(value)&&Number.isInteger(value[0])&&value[0]>0){this.ifds_to_read.push({id:tag,offset:value[0]});is_subifd_link=true;}}var entry={is_big_endian:this.big_endian,ifd:ifd_no,tag:tag,format:format,count:count,entry_offset:offset+this.start,data_length:data_length,data_offset:data_offset+this.start,value:value,is_subifd_link:is_subifd_link};if(on_entry(entry)===false){this.aborted=true;return;}offset+=12;}if(ifd_no===0){this.ifds_to_read.push({id:1,offset:this.read_uint32(offset)});}};// Check whether input is a JPEG image
//
// Input:
//  - jpeg_bin: Uint8Array - jpeg file
//
// Returns true if it is and false otherwise
//
module.exports.is_jpeg=function(jpeg_bin){jpeg_bin=converToArray(jpeg_bin);return jpeg_bin.length>=4&&jpeg_bin[0]===0xff&&jpeg_bin[1]===0xd8&&jpeg_bin[2]===0xff;};// Call an iterator on each segment in the given JPEG image
//
// Input:
//  - jpeg_bin:   Uint8Array - jpeg file
//  - on_segment: Function - callback executed on each JPEG marker segment
//    - segment:  Object
//      - code:   Number - marker type (2nd byte, e.g. 0xE0 for APP0)
//      - offset: Number - offset of the first byte (0xFF) relative to `jpeg_bin` start
//      - length: Number - length of the entire marker segment including first two bytes and length
//        - 2 for standalone markers
//        - 4+length for markers with data
//
// Iteration stops when `EOI` (0xFFD9) marker is reached or if `on_segment`
// function returns `false`.
//
module.exports.jpeg_segments_each=function(jpeg_bin,on_segment){jpeg_bin=converToArray(jpeg_bin);if(!is_uint8array(jpeg_bin)){throw error('Invalid argument (jpeg_bin), Uint8Array expected','EINVAL');}if(typeof on_segment!=='function'){throw error('Invalid argument (on_segment), Function expected','EINVAL');}if(!module.exports.is_jpeg(jpeg_bin)){throw error('Unknown file format','ENOTJPEG');}var offset=0,length=jpeg_bin.length,inside_scan=false;for(;;){var segment_code,segment_length;if(offset+1>=length)throw error('1 Unexpected EOF','EBADDATA');var byte1=jpeg_bin[offset];var byte2=jpeg_bin[offset+1];if(byte1===0xff&&byte2===0xff){// padding
segment_code=0xff;segment_length=1;// added byte1===0x00 because of problems with pixel images
}else if((byte1===0xff||byte1===0x00)&&byte2!==0){// marker
segment_code=byte2;segment_length=2;if(0xd0<=segment_code&&segment_code<=0xd9||segment_code===0x01);else{if(offset+3>=length)throw error('Unexpected EOF','EBADDATA');segment_length+=jpeg_bin[offset+2]*0x100+jpeg_bin[offset+3];if(segment_length<2)throw error('Invalid segment length','EBADDATA');if(offset+segment_length-1>=length)throw error('Unexpected EOF','EBADDATA');}if(inside_scan){if(segment_code>=0xd0&&segment_code<=0xd7);else{inside_scan=false;}}if(segment_code===0xda/* SOS */)inside_scan=true;}else if(inside_scan){// entropy-encoded segment
for(var pos=offset+1;;pos++){// scan until we find FF
if(pos>=length)throw error('Unexpected EOF','EBADDATA');if(jpeg_bin[pos]===0xff){if(pos+1>=length)throw error('Unexpected EOF','EBADDATA');if(jpeg_bin[pos+1]!==0){segment_code=0;segment_length=pos-offset;break;}}}}else{throw error('Unexpected byte at segment start: '+to_hex(byte1)+' (offset '+to_hex(offset)+')','EBADDATA');}if(on_segment({code:segment_code,offset:offset,length:segment_length})===false)break;if(segment_code===0xd9/* EOI */)break;offset+=segment_length;}};// Replace or remove segments in the given JPEG image
//
// Input:
//  - jpeg_bin:   Uint8Array - jpeg file
//  - on_segment: Function - callback executed on each JPEG marker segment
//    - segment:  Object
//      - code:   Number - marker type (2nd byte, e.g. 0xE0 for APP0)
//      - offset: Number - offset of the first byte (0xFF) relative to `jpeg_bin` start
//      - length: Number - length of the entire marker segment including first two bytes and length
//        - 2 for standalone markers
//        - 4+length for markers with data
//
// `on_segment` function should return one of the following:
//  - `false`        - segment is removed from the output
//  - Uint8Array     - segment is replaced with the new data
//  - [ Uint8Array ] - segment is replaced with the new data
//  - anything else  - segment is copied to the output as is
//
// Any data after `EOI` (0xFFD9) marker is removed.
//
module.exports.jpeg_segments_filter=function(jpeg_bin,on_segment){jpeg_bin=converToArray(jpeg_bin);if(!is_uint8array(jpeg_bin)){throw error('Invalid argument (jpeg_bin), Uint8Array expected','EINVAL');}if(typeof on_segment!=='function'){throw error('Invalid argument (on_segment), Function expected','EINVAL');}var ranges=[];var out_length=0;module.exports.jpeg_segments_each(jpeg_bin,function(segment){var new_segment=on_segment(segment);if(is_uint8array(new_segment)){ranges.push({data:new_segment});out_length+=new_segment.length;}else if(Array.isArray(new_segment)){new_segment.filter(is_uint8array).forEach(function(s){ranges.push({data:s});out_length+=s.length;});}else if(new_segment!==false){var new_range={start:segment.offset,end:segment.offset+segment.length};if(ranges.length>0&&ranges[ranges.length-1].end===new_range.start){ranges[ranges.length-1].end=new_range.end;}else{ranges.push(new_range);}out_length+=segment.length;}});var result=new Uint8Array(out_length);var offset=0;ranges.forEach(function(range){var data=range.data||jpeg_bin.subarray(range.start,range.end);result.set(data,offset);offset+=data.length;});return result;};// Call an iterator on each Exif entry in the given JPEG image
//
// Input:
//  - jpeg_bin: Uint8Array - jpeg file
//  - on_entry: Function - callback executed on each Exif entry
//    - entry:  Object
//      - is_big_endian:  Boolean - whether Exif uses big or little endian byte alignment
//      - ifd:            Number  - IFD identifier (0 for IFD0, 1 for IFD1, 0x8769 for SubIFD,
//                                 0x8825 for GPS Info, 0xA005 for Interop IFD)
//      - tag:            Number  - exif entry tag (0x0110 - camera name, 0x0112 - orientation, etc. - see Exif spec)
//      - format:         Number  - exif entry format (1 - byte, 2 - ascii, 3 - short, etc. - see Exif spec)
//      - count:          Number  - number of components of the given format inside data
//                                 (usually 1, or string length for ascii format)
//      - entry_offset:   Number  - start of Exif entry (entry length is always 12, so not included)
//      - data_offset:    Number  - start of data attached to Exif entry (will overlap with entry if length <= 4)
//      - data_length:    Number  - length of data attached to Exif entry
//      - value:          Array|String|Null - our best attempt at parsing data (not all formats supported right now)
//      - is_subifd_link: Boolean - whether this entry is recognized to be a link to subifd (can't filter these out)
//
// Iteration stops early if iterator returns `false`.
//
// If Exif wasn't found anywhere (before start of the image data, SOS),
// iterator is never executed.
//
module.exports.jpeg_exif_tags_each=function(jpeg_bin,on_exif_entry){jpeg_bin=converToArray(jpeg_bin);if(!is_uint8array(jpeg_bin)){throw error('Invalid argument (jpeg_bin), Uint8Array expected','EINVAL');}if(typeof on_exif_entry!=='function'){throw error('Invalid argument (on_exif_entry), Function expected','EINVAL');}/* eslint-disable consistent-return */module.exports.jpeg_segments_each(jpeg_bin,function(segment){if(segment.code===0xda/* SOS */)return false;// look for APP1 segment and compare header with 'Exif\0\0'
if(segment.code===0xe1&&segment.length>=10&&jpeg_bin[segment.offset+4]===0x45&&jpeg_bin[segment.offset+5]===0x78&&jpeg_bin[segment.offset+6]===0x69&&jpeg_bin[segment.offset+7]===0x66&&jpeg_bin[segment.offset+8]===0x00&&jpeg_bin[segment.offset+9]===0x00){new ExifParser(jpeg_bin,segment.offset+10,segment.offset+segment.length).each(on_exif_entry);return false;}});};// Remove Exif entries in the given JPEG image
//
// Input:
//  - jpeg_bin: Uint8Array - jpeg file
//  - on_entry: Function - callback executed on each Exif entry
//    - entry:  Object
//      - is_big_endian:  Boolean - whether Exif uses big or little endian byte alignment
//      - ifd:            Number  - IFD identifier (0 for IFD0, 1 for IFD1, 0x8769 for SubIFD,
//                                  0x8825 for GPS Info, 0xA005 for Interop IFD)
//      - tag:            Number  - exif entry tag (0x0110 - camera name, 0x0112 - orientation, etc. - see Exif spec)
//      - format:         Number  - exif entry format (1 - byte, 2 - ascii, 3 - short, etc. - see Exif spec)
//      - count:          Number  - number of components of the given format inside data
//                                  (usually 1, or string length for ascii format)
//      - entry_offset:   Number  - start of Exif entry (entry length is always 12, so not included)
//      - data_offset:    Number  - start of data attached to Exif entry (will overlap with entry if length <= 4)
//      - data_length:    Number  - length of data attached to Exif entry
//      - value:          Array|String|Null - our best attempt at parsing data (not all formats supported right now)
//      - is_subifd_link: Boolean - whether this entry is recognized to be a link to subifd (can't filter these out)
//
// This function removes following from Exif:
//  - all entries where iterator returned false (except subifd links which are mandatory)
//  - IFD1 and thumbnail image (the purpose of this function is to reduce file size,
//    so thumbnail is usually the first thing to go)
//  - all other data that isn't in IFD0, SubIFD, GPSIFD, InteropIFD
//    (theoretically possible proprietary extensions, I haven't seen any of these yet)
//
// Changing data inside Exif entries is NOT supported yet (modifying `entry` object inside callback may break stuff).
//
// If Exif wasn't found anywhere (before start of the image data, SOS),
// iterator is never executed, and original JPEG is returned as is.
//
module.exports.jpeg_exif_tags_filter=function(jpeg_bin,on_exif_entry){jpeg_bin=converToArray(jpeg_bin);if(!is_uint8array(jpeg_bin)){throw error('Invalid argument (jpeg_bin), Uint8Array expected','EINVAL');}if(typeof on_exif_entry!=='function'){throw error('Invalid argument (on_exif_entry), Function expected','EINVAL');}var stop_search=false;return module.exports.jpeg_segments_filter(jpeg_bin,function(segment){if(stop_search){return;}if(segment.code===0xda/* SOS */){stop_search=true;}// look for APP1 segment and compare header with 'Exif\0\0'
if(segment.code===0xe1&&segment.length>=10&&jpeg_bin[segment.offset+4]===0x45&&jpeg_bin[segment.offset+5]===0x78&&jpeg_bin[segment.offset+6]===0x69&&jpeg_bin[segment.offset+7]===0x66&&jpeg_bin[segment.offset+8]===0x00&&jpeg_bin[segment.offset+9]===0x00){var new_exif=new ExifParser(jpeg_bin,segment.offset+10,segment.offset+segment.length).filter(on_exif_entry);if(!new_exif){return false;}var header=new Uint8Array(10);header.set(jpeg_bin.slice(segment.offset,segment.offset+10));header[2]=new_exif.length+8>>>8&0xff;header[3]=new_exif.length+8&0xff;stop_search=true;return[header,new_exif];}});};// Inserts a custom comment marker segment into JPEG file.
//
// Input:
//  - jpeg_bin: Uint8Array - jpeg file
//  - comment:  String
//
// Comment is inserted after first two bytes (FFD8, SOI).
//
// If JFIF (APP0) marker exists immediately after SOI (as mandated by the JFIF
// spec), we insert comment after it instead.
//
module.exports.jpeg_add_comment=function(jpeg_bin,comment){jpeg_bin=converToArray(jpeg_bin);var comment_inserted=false,segment_count=0;return module.exports.jpeg_segments_filter(jpeg_bin,function(segment){segment_count++;if(segment_count===1&&segment.code===0xd8/* SOI  */)return;if(segment_count===2&&segment.code===0xe0/* APP0 */)return;if(comment_inserted)return;comment=utf8_encode(comment);// comment segment
var csegment=new Uint8Array(5+comment.length);var offset=0;csegment[offset++]=0xff;csegment[offset++]=0xfe;csegment[offset++]=comment.length+3>>>8&0xff;csegment[offset++]=comment.length+3&0xff;comment.split('').forEach(function(c){csegment[offset++]=c.charCodeAt(0)&0xff;});csegment[offset++]=0;comment_inserted=true;return[csegment,jpeg_bin.subarray(segment.offset,segment.offset+segment.length)];});};module.exports.ExifParser=ExifParser;});var image_traverse_1=image_traverse.is_jpeg;var image_traverse_2=image_traverse.jpeg_segments_each;var image_traverse_3=image_traverse.jpeg_segments_filter;var image_traverse_4=image_traverse.jpeg_exif_tags_each;var image_traverse_5=image_traverse.jpeg_exif_tags_filter;var image_traverse_6=image_traverse.jpeg_add_comment;var image_traverse_7=image_traverse.ExifParser;var concatArr=function concatArr(){for(var _len2=arguments.length,arrays=new Array(_len2),_key2=0;_key2<_len2;_key2++){arrays[_key2]=arguments[_key2];}// Calculate byteSize from all arrays
var size=arrays.reduce(function(a,b){return a+b.byteLength;},0);// Allcolate a new buffer
var result=new Uint8Array(size);// Build the new array
var offset=0;for(var _i=0,_arrays=arrays;_i<_arrays.length;_i++){var arr=_arrays[_i];result.set(arr,offset);offset+=arr.byteLength;}return result;};/**
   * Cleanup jpeg segments
   * @param {Unit8Array} data
   */var cleanupAppSegments=function cleanupAppSegments(data){var segments=[];// iterate over all segments
image_traverse_2(data,function(segment){if(segment.code===0xda/* SOS */){return false;}segments.push(segment);});var toInsert=[];// pick only segments to insert
segments.forEach(function(segment){// exclude icc profile from segments to reinsert
if(segment.code===0xe2){return;}toInsert.push(data.slice(segment.offset,segment.offset+segment.length));});// calculate how much bytes should we slice from file to apply to metadata based on old segments length
var start=segments[0].offset;var end=segments[segments.length-1].offset+segments[segments.length-1].length;return concatArr.apply(null,[data.slice(0,start)].concat(toInsert,[data.slice(end)]));};/**
   * Reset orientation to 1 in provided file
   * @param {Blob} file
   */var cleanupOrientation=function cleanupOrientation(file){return blobToArrayBuffer(file).then(function(data){var isBigEndian,orientationOffset;image_traverse_4(data,function(entry){if(entry.ifd===0&&entry.tag===0x112&&Array.isArray(entry.value)){isBigEndian=entry.is_big_endian;orientationOffset=entry.data_offset;return false;}});if(orientationOffset){var _patch=isBigEndian?new Uint8Array([0,1]):new Uint8Array([1,0]);return new Blob([data.slice(0,orientationOffset),_patch,data.slice(orientationOffset+2)],{type:'image/jpeg'});}return file;});};/**
   * Clone exif from one image to another one
   *
   * @param {Blob} from
   * @param {Blob} to
   */var cloneExif=function cloneExif(from,to,_ref5){var _ref5$keepOrientation=_ref5.keepOrientation,keepOrientation=_ref5$keepOrientation===void 0?true:_ref5$keepOrientation,_ref5$keepIccProfile=_ref5.keepIccProfile,keepIccProfile=_ref5$keepIccProfile===void 0?false:_ref5$keepIccProfile,_ref5$keepAppData=_ref5.keepAppData,keepAppData=_ref5$keepAppData===void 0?false:_ref5$keepAppData;var fileName=to.name;if(!(from instanceof Blob)||!(to instanceof Blob)){throw new Error("Input sources should be blobs - from: ".concat(_typeof2(from),", to: ").concat(_typeof2(to)));}return Promise.all([blobToArrayBuffer(from),blobToArrayBuffer(to)]).then(function(res){var data=res[0];var data_out=res[1];if(!image_traverse_1(data_out)||!image_traverse_1(data)){return Promise.resolve(data_out);}var segments=[];image_traverse_2(data,function(segment){if(segment.code===0xda/* SOS */){return false;}segments.push(segment);});segments=segments.filter(function(segment){if(segment.code===0xe2&&!keepIccProfile){return false;}// Keep all APPn segments excluding APP2 (ICC_PROFILE),
// remove others because most of them depend on image data (DCT and such).
//
// APP0 - JFIF, APP1 - Exif, the rest are photoshop metadata and such
//
// See full list at https://www.w3.org/Graphics/JPEG/itu-t81.pdf (table B.1 on page 32)
//
if(segment.code>=0xe0&&segment.code<0xf0&&keepAppData){return true;}// Keep comments
//
if(segment.code===0xfe){return true;}return false;}).map(function(segment){return data.slice(segment.offset,segment.offset+segment.length);});var outputBlob=new Blob([data_out.slice(0,20)].concat(segments).concat([data_out.slice(20)]),{type:'image/jpeg'});if(fileName){outputBlob.name=fileName;}if(!keepOrientation){return cleanupOrientation(outputBlob);}return outputBlob;});};/**
   * Cleans up exif in file
   *
   * @param {Blob} file
   * @param {boolean} keepOrientation
   * @param {boolean} keepICCandAPP - Keep exif is now not used, enabled by default
   */var cleanupJpegExif=function cleanupJpegExif(file){var keepOrientation=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var keepICCandAPP=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var fileName=file.name;return blobToArrayBuffer(file).then(function(data){if(!image_traverse_1(data)){return Promise.resolve(file);}try{var exifOffset;var stopSearch;image_traverse_2(data,function(segment){if(stopSearch){return;}if(segment.code===0xda/* SOS */){stopSearch=true;}exifOffset=segment.offset+segment.length;});var fileHeader=image_traverse_5(data,function(entry){// keep orientation segment?
if(entry.ifd===0&&entry.tag===0x112&&keepOrientation){return true;}return false;});// concat new file with cleanup exif data
var cleanFileData=new Uint8Array(data).subarray(0,exifOffset);var outFileArr=concatArr(fileHeader,cleanFileData);if(!keepICCandAPP){outFileArr=cleanupAppSegments(outFileArr);}var outFile=new Blob([outFileArr],{type:'image/jpeg'});if(fileName){outFile.name=fileName;}return outFile;}catch(e){console.error(e);return file;}});};var URL$1=window.URL||window.webkitURL||window.mozURL||window.msURL;var tile=200;var picaOpts={unsharpAmount:80,unsharpRadius:0.6,unsharpThreshold:2};var createCanvas=function createCanvas(width,height){var tmpCanvas=document.createElement('canvas');tmpCanvas.width=width;tmpCanvas.height=height;return tmpCanvas;};var processResize=function processResize(file,config,picaUrl,ext){var quality=ext==='jpeg'||ext==='jpg'?3:undefined;// in some cases when image is and jpeg and alpha is set to false, chrome produce black image - setting alpha to always on seems to fix that issue
// const alpha = ext === 'png' || file.type === 'image/png';
return _FilestackLoader$loadModule('fs-pica',picaUrl).then(function(Pica){try{var pica=Pica({tile:tile});var destCanvas=createCanvas(config.width,config.height);return blobToImage(file).then(function(img){return pica.resize(img,destCanvas,_objectSpread({},picaOpts,{quality:quality,alpha:true})).then(function(result){return pica.toBlob(result,file.type||'image/jpeg');}).then(function(res){if(URL$1.revokeObjectURL){URL$1.revokeObjectURL(img.src);};// free resources
destCanvas=null;img=null;return res;});});}catch(e){console.error(e);return null;}});};var _resizeImage=function resizeImage(file,config,picaUrl){var ext=file.name.split('.').pop().toLowerCase();if(['bmp','jpg','jpeg','png'].indexOf(ext)===-1){return Promise.resolve(file);}if(['jpg','jpeg'].indexOf(ext)>-1){return processResize(file,config,picaUrl,ext).then(function(resizedFile){return cloneExif(file,resizedFile,{keepOrientation:true,keepIccProfile:false});})["catch"](console.error);}// if not process normal resize
return processResize(file,config,picaUrl,ext);};/**
   * Helper function calls callback for dynamic tag creation
   * @param {} file
   * @param { Object } tags
   * @returns
   */var getTags=function getTags(file,tags){var returnTags={};if(tags&&Object.keys(tags)){for(var _i2=0,_Object$keys=Object.keys(tags);_i2<_Object$keys.length;_i2++){var key=_Object$keys[_i2];var tag=tags[key];if(typeof tag==='function'){try{var res=tag(file);if(typeof res!=='string'){console.warn("Tag return value for key ".concat(key," should be a string, ").concat(_typeof2(res)," given"));continue;}returnTags[key]=res;}catch(e){console.warn("CANNOT CONVERT TAG: ".concat(tag));}}else{returnTags[key]=tag;}}return returnTags;}return tags;};// All files in upload queue need to be simple objects with required "source" and "name" keys.
var log=logger.context('picker');var isNumber$1=function isNumber$1(n){return!isNaN(parseFloat(n))&&!isNaN(n-0);};var REQUEST_REJECT_ABORT='aborted';var STATES={waiting:'waiting',uploading:'uploading',done:'done',failed:'failed',paused:'paused'};var uploadQueue=function uploadQueue(apiClient){var initialState=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var addFile=function addFile(context,file){var maxFilesReached=function maxFilesReached(){if(!context.getters.maxFiles||(context.getters.fileCount||0)<context.getters.maxFiles){return false;}var filesText=context.getters.maxFiles===1?'file':'files';var errorMsg=errors(context.getters.lang,context.getters.customText).ERROR_MAX_FILES_REACHED.replace('{maxFiles}',context.getters.maxFiles).replace('{filesText}',filesText);context.dispatch('showNotification',errorMsg);return true;};/**
       * Check if file size is smaller than provided in maxSize option
       * @param {Object} normalizedFile
       */var fileIsSmallEnough=function fileIsSmallEnough(normalizedFile){if(context.getters.maxSize===undefined||!normalizedFile.size){return true;}if(normalizedFile.size<context.getters.maxSize){return true;}var errorMsg=errors(context.getters.lang,context.getters.customText).ERROR_FILE_TOO_BIG.replace('{displayName}',displayName(normalizedFile)).replace('{roundFileSize}',readableSize(context.getters.maxSize));context.dispatch('showNotification',errorMsg);return false;};var checkFileSize=function checkFileSize(rawFile,opts){if(!opts.shouldBlock){return Promise.resolve();}if(file.type.indexOf('image')!==0){return Promise.resolve();}return new Promise(function(resolve,reject){var fr=new FileReader();fr.onload=function(){var img=new Image();img.onload=function(){if(opts.imageMin&&opts.imageMin[0]>img.width){return reject(new Error("Incorrect image size. Minimum width is ".concat(opts.imageMin[0],"px but image have ").concat(img.width,"px")));}if(opts.imageMin&&opts.imageMin[1]>img.height){return reject(new Error("Incorrect image size. Minimum height is ".concat(opts.imageMin[1],"px but image have ").concat(img.height,"px")));}if(opts.imageMax&&opts.imageMax[0]<img.width){return reject(new Error("Incorrect image size. Maximum width is ".concat(opts.imageMax[0],"px but image have ").concat(img.width,"px")));}if(opts.imageMax&&opts.imageMax[1]<img.height){return reject(new Error("Incorrect image size. Maximum height is ".concat(opts.imageMax[1],"px but image have ").concat(img.height,"px")));}return resolve();};img.src=fr.result;};fr.readAsDataURL(rawFile);});};var fileIsAcceptable=function fileIsAcceptable(normalizedFile){if(typeof context.getters.acceptFn==='function'){var mimeFromMagicBytes=function mimeFromMagicBytes(blob){return blobToArrayBuffer(blob.slice(0,4100)).then(function(blobFile){return context.getters.apiClient.utils.getMimetype(blobFile,blob.name);});};return context.getters.acceptFn(normalizedFile,{accept:context.getters.accept,// normal accept string
acceptMime:context.getters.acceptMime,// accept converted to mime
mimeFromMagicBytes:mimeFromMagicBytes,mimeFromExtension:context.getters.apiClient.utils.extensionToMime});}if(canAcceptThisFile(normalizedFile,context.getters.acceptMime)){return Promise.resolve();}var errorMsg=errors(context.getters.lang,context.getters.customText||undefined).ERROR_FILE_NOT_ACCEPTABLE.replace('{displayName}',displayName(normalizedFile)).replace('{types}',context.getters.accept);throw new Error(errorMsg);};var fireOnFileSelected=function fireOnFileSelected(normalizedFile){if(!context.getters.onFileSelected){return Promise.resolve();}return new Promise(function(resolve,reject){try{var result=context.getters.onFileSelected(convertFileForOutsideWorld(normalizedFile,context.getters));if(result instanceof Promise){result.then(resolve)["catch"](reject);}else{resolve(result);}}catch(err){reject(err);}});};var startUploadImmediatelyMaybe=function startUploadImmediatelyMaybe(){if(context.getters.startUploadingWhenMaxFilesReached===true&&context.getters.onlyFilesWaiting.length===context.getters.maxFiles){context.dispatch('startUploading');}};return new Promise(function(resolve,reject){// If file is already initialized we should remove it instead
// TODO: Rename this to something like toggleFile or split this out
if(file&&file.state!==undefined){context.dispatch('cancelUpload',file.uuid);context.commit('DESELECT_FILE',file.uuid);return resolve();}// addCloudFolder dispatches addFile for every file in the folder
// This returns immediately because we don't mark folders for the queue
// TODO Consider an approach where folders are added (might be less complicated?)
if(file&&file.folder){context.dispatch('addCloudFolder',{name:file.source,path:file.path});return resolve();}// decide what normalization method should be used
var normalizeMethod=file instanceof File||file instanceof Blob?normalizeLocalFile:normalizeFile;return normalizeMethod(file,context).then(function(normalizedFile){return fireOnFileSelected(normalizedFile).then(function(newFile){if(newFile){normalizedFile=_objectSpread({},normalizedFile,{name:newFile.name||newFile.filename||normalizedFile.name});}Promise.all([checkFileSize(file,{imageMax:context.getters.imageMax,imageMin:context.getters.imageMin,shouldBlock:context.getters.imageMinMaxBlock}),fileIsAcceptable(normalizedFile)]).then(function(){if(maxFilesReached()){return resolve();}if(fileIsSmallEnough(normalizedFile)){log('Selected file:',file);context.commit('INITIALIZE_FILE',normalizedFile);context.commit('MARK_FILE_AS_WAITING',normalizedFile.uuid);// If we reach maxFiles we might be starting all uploads
startUploadImmediatelyMaybe();// Start uploading this file immediately if background uploads are on
if(!context.getters.uploadStarted&&context.getters.uploadInBackground){context.dispatch('uploadMoreMaybe');}// Single image flow
if(_isImage(normalizedFile)&&isEditableImage(normalizedFile)&&context.getters.maxFiles===1&&!context.getters.disableTransformer&&!context.getters.uploadStarted){context.commit('CHANGE_ROUTE',['transform',normalizedFile.uuid]);}else if(context.getters.maxFiles===1){// Go to summary screen for a single selected file (non-image)
context.commit('CHANGE_ROUTE',['summary']);}else if(context.getters.maxFiles>1&&context.getters.fileCount===context.getters.maxFiles&&context.getters.route[0]!=='summary'){// Go to summary screen if maxFiles is reached
context.commit('CHANGE_ROUTE',['summary']);}else if(context.getters.maxFiles>1&&normalizedFile.source==='local_file_system'&&context.getters.route[0]!=='summary'){// Go to summary screen after selecting multiple local files
context.commit('CHANGE_ROUTE',['summary']);}}else{return resolve(false);}return resolve(normalizeFileToResponse(normalizedFile));})["catch"](function(err){if(file.uuid){context.dispatch('cancelUpload',file.uuid);context.commit('DESELECT_FILE',file.uuid);}console.error(err);context.dispatch('showNotification',err.message?err.message:err);return resolve(false);});})["catch"](function(err){if(file.uuid){context.dispatch('cancelUpload',file.uuid);context.commit('DESELECT_FILE',file.uuid);}context.dispatch('showNotification',err.message?err.message:err);return resolve(false);});});});};var startFakeProgress=function startFakeProgress(context,file){var clamp=function clamp(n,min,max){if(n<min)return min;if(n>max)return max;return n;};var inc=function inc(){var n=file.progress/100;var amount;if(n>1){return;}if(n>=0&&n<0.2)amount=0.1;else if(n>=0.2&&n<0.5)amount=0.04;else if(n>=0.5&&n<0.8)amount=0.02;else if(n>=0.8&&n<0.99)amount=0.005;else{amount=0;}n=clamp(n+amount,0,0.994);context.commit('SET_FILE_UPLOAD_PROGRESS',{uuid:file.uuid,progress:Math.round(n*100)});var progressEvent={totalBytes:Math.min(file.size,Math.round(file.size*Math.max(n,0.01))),totalPercent:Math.round(n*100)};if(context.getters.onFileUploadProgress){context.getters.onFileUploadProgress(convertFileForOutsideWorld(file,context.getters),progressEvent);}};var work=function work(){inc();setTimeout(function(){if(!file)return;if(file.state!==STATES.uploading){context.commit('SET_FILE_UPLOAD_PROGRESS',{uuid:file.uuid,progress:100});if(context.getters.onFileUploadProgress){context.getters.onFileUploadProgress(convertFileForOutsideWorld(file,context.getters),{totalBytes:file.size,totalPercent:100});}return;}work();},150);};work();};// A file can be manually passed in or pulled from state
var uploadOne=function uploadOne(context,manualFile){var pendingRequest;var file=manualFile||context.getters.onlyFilesWaiting[0];var uploadConfig=_objectSpread({progressInterval:10},context.getters.uploadConfig,{onRetry:function onRetry(payload){context.dispatch('checkNetworkXHR');if(context.getters.uploadConfig&&context.getters.uploadConfig.onRetry){context.getters.uploadConfig.onRetry(payload);}},onProgress:function onProgress(progressEvent){context.commit('SET_FILE_UPLOAD_PROGRESS',{uuid:file.uuid,progress:progressEvent.totalPercent,progressSize:readableSize(progressEvent.totalBytes)});if(context.rootGetters.dropPane&&context.rootGetters.dropPane.onProgress){console.log('on progres event fire',progressEvent.totalPercent);context.rootGetters.dropPane.onProgress(progressEvent.totalPercent);}if(context.getters.onFileUploadProgress){context.getters.onFileUploadProgress(convertFileForOutsideWorld(file,context.getters),progressEvent);}}},context.getters.uploadTags&&Object.keys(context.getters.uploadTags)&&{tags:getTags(file,context.getters.uploadTags)});// Dispath error on file size === 0
if(file&&file.sourceKind!=='cloud'&&file.sourceKind!=='custom'&&(!file.size||file.size===0)){context.commit('SET_FILE_UPLOAD_PROGRESS',{uuid:file.uuid,progress:100});context.commit('MARK_FILE_AS_FAILED',{uuid:file.uuid,msg:'Size is equal to 0kb'});if(context.getters.onFileUploadFailed!==undefined){context.getters.onFileUploadFailed(convertFileForOutsideWorld(file,context.getters),'Size is equal to 0kb');}return Promise.reject('Size is equal to 0kb');}var token={};var storeTo=_objectSpread({},context.getters.storeTo);if(context.getters.disableStorageKey){if(context.getters.storeTo&&context.getters.storeTo.path){storeTo.path="".concat(context.getters.storeTo.path).concat(file.name);}else{storeTo.path=file.name;}}// TODO How to rename files in cloudrouter?
if(file.sourceKind!=='cloud'&&file.name){storeTo.filename=file.name;}if(file.sourceKind==='custom'){storeTo.filename=file.filename;}context.commit('MARK_FILE_AS_UPLOADING',{uuid:file.uuid,token:token});log('Upload started:',file);apiClient.on('upload.error',function(err){if(!err['type']===REQUEST_REJECT_ABORT){console.error(err);}if(err['details']&&err['details']['data']&&err['details']['data']['error']==='file is larger than the maximum allowed size'){context.dispatch('showNotification',err.details.data.error);}});/**
       * Different sources are mapped to their own upload methods:
       * local and transformed files -> client.upload
       * cloud files -> client.cloud().store/link
       * any urls -> client.storeURL
       */if(file.transformed){// Start multi-part upload
pendingRequest=new Promise(function(resolve,reject){var removeExif=context.getters.removeExif;if(removeExif&&_isImage(file.transformed)){return resolve(cleanupJpegExif(file.transformed,removeExif.keepOrientation,removeExif.keepICCandAPP)["catch"](reject));}return resolve(file.transformed);}).then(function(blob){return context.dispatch('resizeImageMaybe',blob);}).then(function(blob){// @todo fix tests mocks and uncomment this
// if (!blob) {
//   return Promise.reject(new Error('Missing file element for upload'));
// }
if(!context.getters.files[file.uuid]){return Promise.resolve();}// convert some strange blob to correct file object with name
if(blob&&blob.toString()==='[object Blob]'){// custom blob with name Oo
blob=new File([blob],blob.name);}apiClient.once('upload.start',function(){context.dispatch('runCallbackUploadStarted',file.uuid);});return apiClient.upload(blob,uploadConfig,storeTo,token// Cancellation/pause/resume token
);});}else if(file.originalFile){pendingRequest=new Promise(function(resolve,reject){var removeExif=context.getters.removeExif;if(removeExif&&_isImage(file.originalFile)){return resolve(cleanupJpegExif(file.originalFile,removeExif.keepOrientation,removeExif.keepICCandAPP));}return resolve(file.originalFile);}).then(function(blob){return context.dispatch('resizeImageMaybe',blob);}).then(function(newBlob){// update image data if it was resized
context.commit('UPDATE_FILE_AFTER_RESIZE',{uuid:file.uuid,blob:newBlob});return newBlob;}).then(function(blob){// @todo fix tests mocks and uncomment this
// if (!blob) {
//   return Promise.reject(new Error('Missing file element for upload'));
// }
// A file could be deselected after resize but before upload
if(!context.getters.files[file.uuid]){return Promise.resolve();}// convert some strange blob to correct file object with name
if(blob&&blob.toString()==='[object Blob]'){// custom blob with name Oo
blob=blobToFile(blob,blob.name);}apiClient.once('upload.start',function(){context.dispatch('runCallbackUploadStarted',file.uuid);});fl=blobToFile(blob,file.originalFile.name);return apiClient.upload(fl,uploadConfig,storeTo,token// Cancellation/pause/resume token
);});}else if(file.source==='url'||file.source==='dragged-from-web'){// Store custom URL
pendingRequest=apiClient.storeURL(file.path,storeTo,token,null,getTags(file,context.getters.uploadTags),file.headers);context.dispatch('runCallbackUploadStarted',file.uuid);}else if(file.sourceKind==='cloud'){var _customSource={};if(context.getters.customSourcePath){_customSource.customSourcePath=context.getters.customSourcePath;}if(context.getters.customSourceContainer){_customSource.customSourceContainer=context.getters.customSourceContainer;}// Hit CloudRouter to link or store files
var cloudClient=context.getters.cloudClient;pendingRequest=cloudClient.store(file.source,file.path,storeTo,_customSource,token,getTags(file,context.getters.uploadTags));context.dispatch('runCallbackUploadStarted',file.uuid);}// Fake file progress for non-local files (not background uploads)
if(!file.transformed&&file.source!=='local_file_system'&&context.getters.uploadStarted){startFakeProgress(context,file);}pendingRequest.then(function(uploadedFileMetadata){// Short circuit
if(!uploadedFileMetadata){context.commit('MARK_FILE_AS_DONE',{uuid:file.uuid});return undefined;}// Set fake progress to 100% on successful upload (not background uploads)
if(!file.transformed&&file.source!=='local_file_system'){context.commit('SET_FILE_UPLOAD_PROGRESS',{uuid:file.uuid,progress:100,progressSize:uploadedFileMetadata.size});}// Cloudrouter will not return HTTP errors. Errors are in 200 response body.
// This counts as a failed upload. Thrown error is caught in catch handler below.
// TODO Move this into api-client
if(uploadedFileMetadata.error&&uploadedFileMetadata.error.text){throw new Error(uploadedFileMetadata.error.text);}var uploadedFile=_objectSpread({},file,{},uploadedFileMetadata);if(file.source==='local_file_system'){uploadedFile.mimetype=uploadedFileMetadata._file.type;// return sanitized filename instead of original
uploadedFile.name=uploadedFileMetadata._file.name;}// console.log(file, uploadedFileMetadata, '123');
// TODO Why is this being deleted?
delete uploadedFile.uuid;context.commit('MARK_FILE_AS_DONE',{uuid:file.uuid,uploadMetadata:uploadedFile});if(context.getters.onFileUploadFinished!==undefined){try{context.getters.onFileUploadFinished(convertFileForOutsideWorld(uploadedFile,context.getters));}catch(errorCallback){console.error('onFileUploadFinishedError',errorCallback);}}log('Upload done:',file);return uploadedFileMetadata;})["catch"](function(error){if(!navigator.onLine||error.message==='Network Error'){context.dispatch('onNetworkError',true);}// Set progress to 100 since it's actually "done"
context.commit('SET_FILE_UPLOAD_PROGRESS',{uuid:file.uuid,progress:100});context.commit('MARK_FILE_AS_FAILED',{uuid:file.uuid,msg:error.message});if(context.getters.onFileUploadFailed!==undefined){context.getters.onFileUploadFailed(convertFileForOutsideWorld(file,context.getters),error);}log('Upload failed:',file,error.message);log(error);});return pendingRequest;};// Actions
var finishUploadsMaybe=function finishUploadsMaybe(_ref6){var dispatch=_ref6.dispatch,_ref6$getters=_ref6.getters,allowManualRetry=_ref6$getters.allowManualRetry,filesDone=_ref6$getters.filesDone,filesList=_ref6$getters.filesList,filesFailed=_ref6$getters.filesFailed,uploadStarted=_ref6$getters.uploadStarted;if(uploadStarted&&filesList.length===filesDone.length+filesFailed.length){if(!(allowManualRetry&&filesFailed.length)){dispatch('allUploadsDone');}}};var uploadMoreMaybe=function uploadMoreMaybe(context){if(context.getters.filesUploading.length<context.getters.concurrency&&context.getters.onlyFilesWaiting.length>0){context.dispatch('uploadOne').then(function(){return context.dispatch('uploadMoreMaybe');})["catch"](function(){return context.dispatch('uploadMoreMaybe');});context.dispatch('uploadMoreMaybe');}else{context.dispatch('finishUploadsMaybe');}};var startUploading=function startUploading(context){// Already uploading - terminate this attempt.
if(context.getters.uploadStarted){return;}context.dispatch('checkNetworkNavigator');if(context.getters.onUploadStarted){context.getters.onUploadStarted(convertFileListForOutsideWorld(context.getters.filesList,context.getters));}context.commit('SET_UPLOAD_STARTED',true);context.dispatch('updateMobileNavActive',false);// Go to summary screen directly once uploading starts
var baseRoute=context.getters.route[0];if(baseRoute!=='transform'&&baseRoute!=='summary'){context.commit('CHANGE_ROUTE',['summary']);}// Keep uploading until we have nothing left
context.dispatch('uploadMoreMaybe');};initialState=_objectSpread({files:{},uploadStarted:false,serverUploadInProgress:false},initialState);var mutations={CLEAR_FILES:function CLEAR_FILES(state){// because of reference we need to reset state of all files
Object.keys(state.files).forEach(function(uuid){var file=state.files[uuid];Vue.set(file,'state',undefined);Vue.set(file,'uuid',undefined);Vue["delete"](state.files,uuid);});},SET_UPLOAD_STARTED:function SET_UPLOAD_STARTED(state,value){state.uploadStarted=value;},TOGGLE_SERVER_UPLOAD_IN_PROGRESS:function TOGGLE_SERVER_UPLOAD_IN_PROGRESS(state){state.serverUploadInProgress=!state.serverUploadInProgress;},INITIALIZE_FILE:function INITIALIZE_FILE(state,file){// Initial state
Vue.set(state.files,file.uuid,file);},MARK_FILE_AS_WAITING:function MARK_FILE_AS_WAITING(state,uuid){var file=state.files[uuid];Vue.set(file,'state',STATES.waiting);Vue.set(file,'progress',0);Vue.set(file,'progressSize',0);},DESELECT_FILE:function DESELECT_FILE(state,uuid){if(!uuid||!state.files||!state.files[uuid]){return;}var file=state.files[uuid];Vue.set(file,'state',undefined);Vue.set(file,'uuid',undefined);Vue["delete"](state.files,uuid);},DESELECT_FOLDER:function DESELECT_FOLDER(state,folder){Object.keys(state.files).forEach(function(uuid){var file=state.files[uuid];if(isFileInFolder(file,folder)){Vue.set(file,'state',undefined);Vue.set(file,'uuid',undefined);Vue["delete"](state.files,uuid);}});},MARK_FILE_AS_UPLOADING:function MARK_FILE_AS_UPLOADING(state,_ref7){var uuid=_ref7.uuid,token=_ref7.token;var file=state.files[uuid];Vue.set(file,'state',STATES.uploading);if(token){file.token=token;}},MARK_FILE_AS_PAUSED:function MARK_FILE_AS_PAUSED(state,uuid){var file=state.files[uuid];Vue.set(file,'state',STATES.paused);},MARK_FILE_AS_DONE:function MARK_FILE_AS_DONE(state,_ref8){var uuid=_ref8.uuid,uploadMetadata=_ref8.uploadMetadata;var file=state.files[uuid];if(uploadMetadata){Object.keys(uploadMetadata).forEach(function(key){Vue.set(file,key,uploadMetadata[key]);});}Vue.set(file,'state',STATES.done);},MARK_FILE_AS_FAILED:function MARK_FILE_AS_FAILED(state,_ref9){var uuid=_ref9.uuid,msg=_ref9.msg;var file=state.files[uuid];if(file){Vue.set(file,'state',STATES.failed);if(msg){Vue.set(file,'error',msg);}}},SET_FILE_UPLOAD_PROGRESS:function SET_FILE_UPLOAD_PROGRESS(state,_ref10){var uuid=_ref10.uuid,progress=_ref10.progress,progressSize=_ref10.progressSize;var file=state.files[uuid];if(file){Vue["delete"](file,'progress');Vue["delete"](file,'progressSize');Vue.set(file,'progress',progress);Vue.set(file,'progressSize',progressSize);}},SET_FILE_CROP_DATA:function SET_FILE_CROP_DATA(state,_ref11){var uuid=_ref11.uuid,cropData=_ref11.cropData,imageData=_ref11.imageData;var file=state.files[uuid];Vue.set(file,'cropData',{originalImageSize:[imageData.naturalWidth,imageData.naturalHeight],cropArea:{position:[cropData.x,cropData.y],size:[cropData.width,cropData.height]}});},SET_FILE_ROTATION:function SET_FILE_ROTATION(state,_ref12){var uuid=_ref12.uuid,rotation=_ref12.rotation;var file=state.files[uuid];if(rotation===0){return false;}Vue.set(file,'rotated',{value:Math.abs(rotation),direction:rotation>0?'CW':'CCW'});return true;},SET_FILE_TRANSFORMATION:function SET_FILE_TRANSFORMATION(state,_ref13){var uuid=_ref13.uuid,blob=_ref13.blob,transform=_ref13.transform;var file=state.files[uuid];file.state=STATES.waiting;if(!file.originalSize){Vue.set(file,'originalSize',file.size);}if(!file.originalName){Vue.set(file,'originalName',file.name);}if(transform==='circle'||transform==='crop'){Vue.set(file,'cropped',true);}Vue.set(file,'transformed',blob);Vue.set(file,'size',blob.size);Vue.set(file,'name',blob.name);Vue.set(file,'progress',0);Vue.set(file,'progressSize','');},REMOVE_FILE_TRANSFORMATION:function REMOVE_FILE_TRANSFORMATION(state,uuid){var file=state.files[uuid];Vue["delete"](file,'transformed');Vue["delete"](file,'cropped');Vue["delete"](file,'cropData');Vue["delete"](file,'rotated');if(file.originalSize){Vue.set(file,'size',file.originalSize);Vue["delete"](file,'originalSize');}if(file.originalName){Vue.set(file,'name',file.originalName);Vue["delete"](file,'originalName');}},REMOVE_SOURCE_FROM_WAITING:function REMOVE_SOURCE_FROM_WAITING(state,source){Object.keys(state.files).forEach(function(uuid){var file=state.files[uuid];if(file.source===source){Vue.set(file,'state',undefined);Vue.set(file,'uuid',undefined);Vue["delete"](state.files,uuid);}});},REMOVE_CLOUDS_FROM_WAITING:function REMOVE_CLOUDS_FROM_WAITING(state){Object.keys(state.files).forEach(function(uuid){var file=state.files[uuid];if(file.sourceKind==='cloud'){Vue.set(file,'state',undefined);Vue.set(file,'uuid',undefined);Vue["delete"](state.files,uuid);}});},UPDATE_FILE_AFTER_RESIZE:function UPDATE_FILE_AFTER_RESIZE(state,_ref14){var uuid=_ref14.uuid,blob=_ref14.blob;var file=state.files[uuid];Vue.set(file,'size',blob.size);Vue.set(file,'progress',0);Vue.set(file,'progressSize','');}};var actions={addFile:addFile,finishUploadsMaybe:finishUploadsMaybe,startUploading:startUploading,uploadMoreMaybe:uploadMoreMaybe,uploadOne:uploadOne,toggleServerUploadInProgress:function toggleServerUploadInProgress(context){context.commit('TOGGLE_SERVER_UPLOAD_IN_PROGRESS');},runCallbackUploadStarted:function runCallbackUploadStarted(_ref15,uuid){var state=_ref15.state,getters=_ref15.getters;if(!getters.onFileUploadStarted){return;}var file=state.files[uuid];getters.onFileUploadStarted(convertFileForOutsideWorld(file,getters),file.token);},cancelUpload:function cancelUpload(_ref16,uuid){var state=_ref16.state,getters=_ref16.getters;if(!uuid){return;}var file=state.files[uuid];if(file&&file.token&&file.token.cancel){file.token.cancel();}if(getters.onFileUploadCancel){getters.onFileUploadCancel(convertFileForOutsideWorld(file,getters));}},cancelFolderUpload:function cancelFolderUpload(_ref17,folder){var dispatch=_ref17.dispatch,state=_ref17.state;lodash_values(state.files).filter(function(file){// Ignore non-cloud files
if(file.sourceKind!=='cloud'){return true;}// This matches files under a path recursively, because of indexOf
return file.path.indexOf(folder.path)>=0;}).map(function(file){return file.uuid;}).forEach(function(uuid){dispatch('cancelUpload',uuid);});},cancelAllUploads:function cancelAllUploads(_ref18){var dispatch=_ref18.dispatch,state=_ref18.state;var uuids=Object.keys(state.files);uuids.forEach(function(uuid){dispatch('cancelUpload',uuid);});},deselectAllFiles:function deselectAllFiles(context){context.dispatch('cancelAllUploads');context.getters.filesList.forEach(function(file){if(file&&file.uuid){context.commit('DESELECT_FILE',file.uuid);}});},deselectFolder:function deselectFolder(context,folder){context.dispatch('cancelFolderUpload',folder);context.commit('DESELECT_FOLDER',folder);},resizeImageMaybe:function resizeImageMaybe(_ref19,blob){var dispatch=_ref19.dispatch,_ref19$getters=_ref19.getters,imageDim=_ref19$getters.imageDim,imageMin=_ref19$getters.imageMin,imageMax=_ref19$getters.imageMax,imageMinMaxBlock=_ref19$getters.imageMinMaxBlock;// Skip files that aren't images or if we have no resize options
if(!blob||!isEditableImage(blob)||!(imageDim||imageMin||imageMax)){return Promise.resolve(blob);}return new Promise(function(resolve){var img=new Image();var url=window.URL.createObjectURL(blob);img.src=url;img.onload=function(){window.URL.revokeObjectURL(url);var config={width:img.width,height:img.height};var ratio=config.width/config.height;if(imageMinMaxBlock){return Promise.resolve(blob);}imageDim=[1200*5,1200*5];if(imageDim){if(imageDim[0]){config.width=imageDim[0];config.height=config.width/ratio;}else if(imageDim[1]){config.height=imageDim[1];config.width=config.height*ratio;}}else{if(imageMin){if(config.width<imageMin[0]){config.width=imageMin[0];config.height=config.width/ratio;}if(config.height<imageMin[1]){config.height=imageMin[1];config.width=config.height*ratio;}}if(imageMax){if(config.width>imageMax[0]){config.width=imageMax[0];config.height=config.width/ratio;}if(config.height>imageMax[1]){config.height=imageMax[1];config.width=config.height*ratio;}}}config.width=parseInt(config.width,10);config.height=parseInt(config.height,10);// Resize with Pica -- maintain width/height ratio
if(img.width!==config.width&&img.height!==config.height){return dispatch('resizeImage',{blob:blob,config:config}).then(function(newBlob){return resolve(newBlob);})["catch"](function(){return resolve(blob);});}return resolve(blob);};});},resizeImage:function resizeImage(context,_ref20){var blob=_ref20.blob,config=_ref20.config;return _resizeImage(blob,config,context.getters.getModuleUrl('fs-pica'));},setFileCropData:function setFileCropData(_ref21,_ref22){var getters=_ref21.getters,commit=_ref21.commit;var uuid=_ref22.uuid,cropData=_ref22.cropData,imageData=_ref22.imageData,rotation=_ref22.rotation;var file=getters.files[uuid];function isCropped(){if(isNumber$1(cropData.x)&&isNumber$1(cropData.y)!==undefined&&cropData.width&&cropData.height){if(rotation===180){return imageData.naturalWidth!==cropData.width||imageData.naturalHeight!==cropData.height;}return imageData.naturalHeight!==cropData.width||imageData.naturalWidth!==cropData.height;}return false;}commit('SET_FILE_ROTATION',{uuid:uuid,rotation:rotation});if(!isCropped()){return false;}commit('SET_FILE_CROP_DATA',{uuid:uuid,cropData:cropData,imageData:imageData});if(typeof getters.onFileCropped==='function'){getters.onFileCropped(convertFileForOutsideWorld(file,getters));}return false;},transformImage:function transformImage(context,uuid){return context.commit('CHANGE_ROUTE',['transform',uuid]);},pauseAllUploads:function pauseAllUploads(_ref23){var commit=_ref23.commit,filesUploading=_ref23.getters.filesUploading;if(filesUploading.length){filesUploading.forEach(function(file){if(file.token&&file.token.pause){file.token.pause();commit('MARK_FILE_AS_PAUSED',file.uuid);}});}},retryAllFailedFiles:function retryAllFailedFiles(_ref24){var commit=_ref24.commit,dispatch=_ref24.dispatch,_ref24$getters=_ref24.getters,filesFailed=_ref24$getters.filesFailed,filesPaused=_ref24$getters.filesPaused;if(filesPaused.length){filesPaused.forEach(function(file){if(file.token&&file.token.resume){file.token.resume();commit('MARK_FILE_AS_UPLOADING',{uuid:file.uuid});}});}if(filesFailed.length){filesFailed.forEach(function(file){commit('MARK_FILE_AS_WAITING',file.uuid);dispatch('uploadMoreMaybe');});}}};var getters={files:function files(st){return st.files;},filesList:function filesList(st){return lodash_values(st.files);},filesUploading:function filesUploading(st,_ref25){var filesList=_ref25.filesList;return filesList.filter(function(f){return f.state===STATES.uploading;});},filesDone:function filesDone(st,_ref26){var filesList=_ref26.filesList;return filesList.filter(function(f){return f.state===STATES.done;});},filesFailed:function filesFailed(st,_ref27){var filesList=_ref27.filesList;return filesList.filter(function(f){return f.state===STATES.failed;});},filesPaused:function filesPaused(st,_ref28){var filesList=_ref28.filesList;return filesList.filter(function(f){return f.state===STATES.paused;});},fileCount:function fileCount(st,_ref29){var filesList=_ref29.filesList;return filesList.length;},onlyFilesWaiting:function onlyFilesWaiting(state,_ref30){var filesList=_ref30.filesList;return filesList.filter(function(f){return f.state===STATES.waiting;});},uploadStarted:function uploadStarted(st){return st.uploadStarted;},serverUploadInProgress:function serverUploadInProgress(st){return st.serverUploadInProgress;},filesWaiting:function filesWaiting(state,_ref31){var filesList=_ref31.filesList;if(state.uploadStarted){return filesList.filter(function(f){return f.state===STATES.waiting;});}return filesList;},filesNeededCount:function filesNeededCount(state,_ref32){var minFiles=_ref32.minFiles,filesWaiting=_ref32.filesWaiting;return minFiles-filesWaiting.length;},canStartUpload:function canStartUpload(state,_ref33){var filesWaiting=_ref33.filesWaiting,minFiles=_ref33.minFiles;return filesWaiting.length>=minFiles;},canAddMoreFiles:function canAddMoreFiles(state,_ref34){var filesWaiting=_ref34.filesWaiting,maxFiles=_ref34.maxFiles;return filesWaiting.length<maxFiles;}};return{state:initialState,mutations:mutations,actions:actions,getters:getters};};//
var log$1=logger.context('picker');var script$x={components:{ContentHeader:__vue_component__$2,FooterNav:__vue_component__$g,Loading:__vue_component__$c,Modal:__vue_component__$4,ProgressBar:__vue_component__$w},beforeDestroy:function beforeDestroy(){if(this.cropper){this.cropper.destroy();this.cropper=null;}},mounted:function mounted(){var _this21=this;log$1('Transform component mounted');this.$nextTick(function(){_this21.initialize();});},computed:_objectSpread({},index_esm.mapGetters(['getModuleUrl','apiClient','cropAspectRatio','cropFiles','cropForce','files','maxFiles','route','transformations','uploadStarted','filesList']),{filesNotCropped:function filesNotCropped(){return this.filesList.filter(function(file){return isEditableImage(file)&&!file.cropped;});},options:function options(){var opts=[];if(this.transformations.crop){opts.push('crop');}if(this.transformations.mask){opts.push('mask');}if(this.transformations.circle){opts.push('circle');if(typeof this.cropAspectRatio==='number'&&!isNaN(this.cropAspectRatio)&&this.cropAspectRatio!==1){opts.pop();}}if(this.transformations.rotate){opts.push('rotate');}return opts;},shouldGoBack:function shouldGoBack(){if(this.uploadStarted){return false;}if(this.cropFiles){return this.maxFiles>1&&this.cropFiles.length>1;}return true;}}),data:function data(){return{cachedURL:null,cropper:null,ctx:null,fabric:null,file:{},hasCircle:false,maskContainer:null,oImg:null,pendingApply:false,rotation:0,state:'loading'};},methods:_objectSpread({},index_esm.mapActions(['deselectAllFiles','resizeImageMaybe','startUploading','uploadOne']),{apply:function apply(done){var _this22=this;var type=this.file.mimetype;var name=this.file.name;this.pendingApply=false;return new Promise(function(resolve){var canvas=_this22.cropper.getCroppedCanvas();if(_this22.state==='circle'){canvas=_this22.getRoundedCanvas(canvas);_this22.hasCircle=true;}if(_this22.state==='mask'){canvas=_this22.getMaskedCanvas(canvas);_this22.hasCircle=true;}if(_this22.hasCircle||isSVG$1(_this22.file)){var ext=_this22.file.name&&_this22.file.name.split('.').pop().toLowerCase();type='image/png';name=ext==='png'?name:"".concat(name,".png");}var transform=_this22.state;_this22.state='loading';canvas.toBlob(function(finalBlob){if(_this22.cropper){finalBlob.name=name;_this22.$store.dispatch('setFileCropData',{uuid:_this22.file.uuid,cropData:_this22.cropper.getData(true),imageData:_this22.cropper.getImageData(),rotation:_this22.rotation});_this22.$store.commit('SET_FILE_TRANSFORMATION',{uuid:_this22.file.uuid,blob:finalBlob,transform:transform});if(!done){_this22.cropper.replace(window.URL.createObjectURL(finalBlob));}}resolve();},type);});},capitalize:function capitalize(s){return s&&s[0].toUpperCase()+s.slice(1);},getMaskedCanvas:function getMaskedCanvas(src){var canvas=document.createElement('canvas');var context=canvas.getContext('2d');canvas.width=src.width;canvas.height=src.height;context.imageSmoothingEnabled=true;context.drawImage(this.svgMask,0,0,canvas.width,canvas.height);context.globalCompositeOperation='source-out';context.drawImage(src,0,0,canvas.width,canvas.height);return canvas;},getRoundedCanvas:function getRoundedCanvas(src){var canvas=document.createElement('canvas');var context=canvas.getContext('2d');var width=src.width;var height=src.height;canvas.width=width;canvas.height=height;context.imageSmoothingEnabled=true;context.drawImage(src,0,0,width,height);context.globalCompositeOperation='destination-in';context.beginPath();context.arc(width/2,height/2,Math.min(width,height)/2,0,2*Math.PI,true);context.fill();return canvas;},getImageURL:function getImageURL(file){var _this23=this;return new Promise(function(resolve){if(_this23.cachedURL){return resolve(_this23.cachedURL);}// Local images get resized first
if(file.originalFile){return _this23.resizeImageMaybe(file.originalFile).then(function(blob){_this23.cachedURL=window.URL.createObjectURL(blob);resolve(_this23.cachedURL);});}// If file is background uploading wait until it is done
if(file.state===STATES.uploading){var check=function check(){if(file.state===STATES.uploading){setTimeout(check,100);}else{_this23.cachedURL=_this23.signUrl(file.url);resolve(_this23.cachedURL);}};return check();}// Non-local files will be uploaded to obtain a Filestack CDN link
return _this23.uploadOne(file).then(function(data){_this23.cachedURL=_this23.signUrl(data.url);resolve(_this23.cachedURL);})["catch"](function(){_this23.state='errored';resolve();});});},genIconClass:function genIconClass(option){if(this.state===option&&!this.uploadStarted&&this.state!=='loading'&&this.state!=='errored'){return"fst-icon--".concat(option,"-blue");}return"fst-icon--".concat(option,"-black");},getSidebarClasses:function getSidebarClasses(option){return{'fst-sidebar__option--active':option===this.state,'fst-sidebar__option--disabled':this.state==='loading'||this.state==='errored'||this.uploadStarted};},goBack:function goBack(){if(this.maxFiles===1){if(this.file){this.$store.commit('REMOVE_FILE_TRANSFORMATION',this.file.uuid);}this.$store.dispatch('deselectAllFiles');}this.$store.commit('GO_BACK_WITH_ROUTE');},handleApply:function handleApply(){if(this.state==='crop'||this.state==='circle'){var box=this.cropper.getCropBoxData();if(!box.width||!box.height){return;}}if(this.state!=='ready'&&this.state!=='loading'&&this.state!=='errored'){this.apply();}},handleReset:function handleReset(){if(this.state!=='loading'){if(this.file){this.$store.commit('REMOVE_FILE_TRANSFORMATION',this.file.uuid);}this.state='loading';this.hasCircle=false;this.rotation=0;this.cropper.destroy();this.$refs.image.src='';this.initialize();}},handleClick:function handleClick(transform){this.state=transform;},handleNext:function handleNext(){if(this.state!=='loading'){var _file4=this.filesNotCropped[0];this.cachedURL=null;this.state='loading';this.hasCircle=false;this.rotation=0;this.$refs.image.src='';this.cropper.destroy();this.initialize(_file4.uuid);}},handleDone:function handleDone(){var _this24=this;if(this.state!=='ready'&&this.state!=='loading'&&this.state!=='errored'){this.apply(true).then(function(){_this24.goBack();});}else if(this.state!=='loading'){this.goBack();}},handleUpload:function handleUpload(){var _this25=this;if(this.state!=='ready'&&this.state!=='loading'&&this.state!=='errored'){this.apply(true).then(function(){return _this25.startUploading();});}else if(this.state!=='loading'){this.startUploading();}},initialize:function initialize(uuid){var _this26=this;var opts={aspectRatio:this.cropAspectRatio,autoCrop:false,autoCropArea:1,background:false,center:false,dragMode:'none',guides:false,toggleDragModeOnDblclick:false,viewMode:1,zoomable:true};uuid=uuid||this.route[1];this.file=this.files[uuid];_FilestackLoader$loadModule('cropper',this.getModuleUrl('fs-cropper')).then(function(Cropper){_this26.getImageURL(_this26.file).then(function(url){log$1("Image transform URL ".concat(url));var img=_this26.$refs.image;if(img){img.src=url;img.addEventListener('ready',function(){log$1('Image for transformation loaded');_this26.state='ready';});img.addEventListener('error',function(e){log$1("Cannot load image to crop ".concat(e," imgTag"));_this26.state='errored';});// Initialize cropperjs on img
_this26.cropper=new Cropper(img,opts);}})["catch"](function(e){log$1("Cannot load image to crop ".concat(e));_this26.state='errored';});})["catch"](function(e){log$1("Cannot load cropper module ".concat(e));_this26.state='errored';});},rotate:function rotate(deg){this.rotation+=deg;// Prevent very large degree values when rotating multiple times over.
if(this.rotation===270){this.rotation=-90;}else if(this.rotation===-180){this.rotation=180;}this.cropper.rotate(deg);},showSVGMask:function showSVGMask(fabric){var _this27=this;fabric.loadSVGFromURL(this.transformations.mask.url,function(objects){var path=objects[0];if(!path||!path.d){return;}var canvas=document.createElement('canvas');var width=Math.ceil(path.width);var height=Math.ceil(path.height);var f=new fabric.Canvas(canvas);f.setDimensions({width:width,height:height});var clipPath=new fabric.Path(path.d,{width:width,height:height,top:0,left:0,fill:'#000000',globalCompositeOperation:'destination-out'});var rect=new fabric.Rect({width:width+100,height:height+100,left:0,top:0,fill:_this27.transformations.mask.color,stroke:_this27.transformations.mask.color,strokeWidth:10});// Add SVG path to canvas, render it for cropperjs cropper-face overlay
f.add(rect);f.add(clipPath);f.renderAll();// Add fill to SVG path, render it to an image with fill for canvas image compositing
var overlay=f.toDataURL();var img=new Image();img.src=overlay;_this27.svgMask=img;img.onerror=function(){_this27.state='errored';};img.onload=function(){// Enable cropper and add rendered overlay as background-image on cropper-face
var box=document.querySelector('.fsp-picker .cropper-face');_this27.cropper.setAspectRatio(width/height);_this27.cropper.crop();box.style.background="url(".concat(overlay,") no-repeat");box.style.backgroundSize='100%';box.style.opacity='0.5';};},null,{crossOrigin:'anonymous'});},signUrl:function signUrl(url){var _this$apiClient$sessi=this.apiClient.session,policy=_this$apiClient$sessi.policy,signature=_this$apiClient$sessi.signature;if(policy&&signature){return"".concat(url,"?policy=").concat(policy,"&signature=").concat(signature);}return url;}}),watch:{filesList:{immediate:false,handler:function handler(files){// Go back when there is nothing left in the current view
if(files.length===0){if(this.cropFiles){this.$root.$destroy();return;}this.$store.commit('GO_BACK_WITH_ROUTE_CURRENT_TYPE');this.$store.commit('SET_UPLOAD_STARTED',false);}}},state:function state(val){var _this28=this;var cropView=document.querySelector('.fsp-picker .cropper-view-box');var cropFace=document.querySelector('.fsp-picker .cropper-face');switch(val){case'ready':this.cropper.reset();this.cropper.clear();if(this.cropForce&&!this.file.cropped&&!!this.transformations.crop){this.state='crop';}if(this.cropForce&&!this.file.cropped&&!this.transformations.crop){this.state='circle';}if(!this.file){this.state='errored';break;}if(!this.file.transformed&&this.options.length===1&&this.options[0]==='mask'){this.state='mask';}break;case'circle':cropView.style.borderRadius='50%';cropFace.style.borderRadius='50%';cropFace.style.background='none';this.cropper.setAspectRatio(1);this.cropper.crop();break;case'crop':cropView.style.borderRadius='0px';cropFace.style.borderRadius='0px';cropFace.style.background='none';this.cropper.setAspectRatio(this.cropAspectRatio);this.cropper.crop();break;case'rotate':this.cropper.reset();this.cropper.clear();break;case'mask':{cropView.style.borderRadius='0px';cropFace.style.borderRadius='0px';_FilestackLoader$loadModule('fabric',this.getModuleUrl('fs-fabric')).then(function(fabric){_this28.showSVGMask(fabric);});break;}}}}};/* script */var __vue_script__$x=script$x;/* template */var __vue_render__$x=function __vue_render__$x(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("modal",[_c("div",{attrs:{slot:"header"},slot:"header"},[_vm.shouldGoBack?_c("div",{staticClass:"fsp-transformer__go-back",attrs:{title:_vm.t("Go back")},on:{click:_vm.goBack}}):_vm._e(),_vm._v(" "),_c("content-header",{attrs:{"hide-menu":true}},[_c("span",{staticClass:"fsp-header-text--visible"},[_vm._v(_vm._s(_vm.t("Edit Image")))])])],1),_vm._v(" "),_c("div",{staticClass:"fst-sidebar",attrs:{slot:"sidebar"},slot:"sidebar"},_vm._l(_vm.options,function(option){return _c("div",{key:option,staticClass:"fst-sidebar__option","class":_vm.getSidebarClasses(option),attrs:{title:_vm.t(_vm.capitalize(option)),tabindex:"0"},on:{click:function click($event){return _vm.handleClick(option);},keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.handleClick(option);}}},[_c("span",{staticClass:"fst-icon","class":_vm.genIconClass(option)}),_vm._v("\n      "+_vm._s(_vm.t(_vm.capitalize(option)))+"\n    ")]);}),0),_vm._v(" "),_c("div",{staticClass:"fsp-transformer",attrs:{slot:"body"},slot:"body"},[_vm.state==="loading"?_c("loading"):_vm._e(),_vm._v(" "),_vm.state==="errored"?_c("div",{staticClass:"fsp-transformer__error"},[_c("div",{staticClass:"fst-icon--broken-image"}),_vm._v("\n      "+_vm._s(_vm.t("This image cannot be edited"))+"\n    ")]):_vm._e(),_vm._v(" "),_c("img",{directives:[{name:"show",rawName:"v-show",value:_vm.state!=="loading"&&_vm.state!=="errored",expression:"state !== 'loading' && state !== 'errored'"}],ref:"image",staticStyle:{"max-width":"100%"}}),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.state==="rotate",expression:"state === 'rotate'"}],staticClass:"fsp-transformer__rotate"},[_c("div",{staticClass:"fsp-transformer__rotate-left",attrs:{title:"Rotate -90°"},on:{click:function click($event){return _vm.rotate(-90);}}}),_vm._v(" "),_c("div",{staticClass:"fsp-transformer__rotate-right",attrs:{title:"Rotate 90°"},on:{click:function click($event){return _vm.rotate(90);}}})]),_vm._v(" "),_c("footer-nav",{attrs:{slot:"footer","is-visible":!_vm.uploadStarted},slot:"footer"},[_c("span",{staticClass:"fsp-button fsp-button--cancel","class":{"fsp-button--cancel-disabled":!_vm.file.transformed||_vm.state==="loading"},attrs:{slot:"nav-left"},on:{click:_vm.handleReset},slot:"nav-left"},[_vm._v("\n        "+_vm._s(_vm.t("Reset"))+"\n      ")]),_vm._v(" "),_c("div",{attrs:{slot:"nav-right"},slot:"nav-right"},[_vm.state!=="ready"&&_vm.state!=="loading"&&_vm.state!=="errored"?_c("span",{staticClass:"fsp-button fsp-button--outline",attrs:{title:"Save",tabindex:"0"},on:{click:_vm.handleApply,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.handleApply($event);}}},[_vm._v("\n          "+_vm._s(_vm.t("Save"))+"\n        ")]):_vm.maxFiles===1?_c("span",{staticClass:"fsp-button fsp-button--primary","class":{"fsp-button--disabled":_vm.state==="loading"},attrs:{title:_vm.t("Upload"),tabindex:"0"},on:{click:_vm.handleUpload,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.handleUpload($event);}}},[_vm._v("\n          "+_vm._s(_vm.t("Upload"))+"\n        ")]):_vm.cropForce&&_vm.filesNotCropped.length&&_vm.state!=="loading"?_c("span",{staticClass:"fsp-button fsp-button--primary",attrs:{title:"Next",tabindex:"0"},on:{click:_vm.handleNext,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.handleNext($event);}}},[_vm._v("\n          "+_vm._s(_vm.t("Next"))+"\n        ")]):_c("span",{staticClass:"fsp-button fsp-button--primary","class":{"fsp-button--disabled":_vm.state==="loading"},attrs:{title:"Done",tabindex:"0"},on:{click:_vm.handleDone,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.handleDone($event);}}},[_vm._v("\n          "+_vm._s(_vm.t("Done"))+"\n        ")])])]),_vm._v(" "),_c("footer-nav",{attrs:{slot:"footer","is-visible":_vm.uploadStarted,"full-width":true},slot:"footer"},[_c("span",{attrs:{slot:"nav-center"},slot:"nav-center"},[_c("progress-bar",{attrs:{progress:_vm.file.progress}})],1)])],1)]);};var __vue_staticRenderFns__$x=[];__vue_render__$x._withStripped=true;/* style */var __vue_inject_styles__$x=undefined;/* scoped */var __vue_scope_id__$x=undefined;/* module identifier */var __vue_module_identifier__$x=undefined;/* functional template */var __vue_is_functional_template__$x=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$x=/*#__PURE__*/normalizeComponent({render:__vue_render__$x,staticRenderFns:__vue_staticRenderFns__$x},__vue_inject_styles__$x,__vue_script__$x,__vue_scope_id__$x,__vue_is_functional_template__$x,__vue_module_identifier__$x,false,undefined,undefined,undefined);var roundFileSize=function roundFileSize(numb){if(numb>=1048576){return"".concat(Math.round(numb/1048576),"MB");}if(numb>=1024){return"".concat(Math.round(numb/1024),"KB");}return"".concat(numb,"B");};//
var script$y={components:{UnsplashMetadata:__vue_component__$7},props:{file:Object},computed:_objectSpread({},index_esm.mapGetters(['blobURLs','cropForce','disableTransformer','disableThumbnails','uploadStarted'])),methods:_objectSpread({},index_esm.mapActions(['addFile','transformImage']),{isEditable:function isEditable(file){return isEditableImage(file);},isDone:function isDone(file){return file.state===STATES.done;},isFailed:function isFailed(file){return file.state===STATES.failed;},isTransformed:function isTransformed(file){return file.transformed;},getName:function getName(file){if(file.display_name&&file.display_name.length){return file.display_name;}return file.name;},generateClass:function generateClass(file){if(isEditableImage(file)){return'fsp-grid__icon-image';}if(_isAudio(file)){return'fsp-grid__icon-audio';}if(file.mimetype==='application/pdf'){return'fsp-grid__icon-pdf';}return'fsp-grid__icon-file';},generateThumbnail:function generateThumbnail(file){if(this.blobURLs[file.uuid]){return this.blobURLs[file.uuid];}var imageBlob=file.transformed||file.originalFile;var url=window.URL.createObjectURL(imageBlob);this.$store.commit('SET_BLOB_URL',{uuid:file.uuid,url:url});return url;},revert:function revert(file){this.$store.commit('REMOVE_FILE_TRANSFORMATION',file.uuid);this.$store.commit('REMOVE_BLOB_URL',file.uuid);},transform:function transform(uuid){this.$store.commit('REMOVE_BLOB_URL',uuid);this.transformImage(uuid);},translatedFileSize:function translatedFileSize(file){if(file.sourceKind==='cloud'&&!file.transformed||file.size==='0'||!file.size){return'';}return roundFileSize(file.size);}})};/* script */var __vue_script__$y=script$y;/* template */var __vue_render__$y=function __vue_render__$y(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"fsp-summary__item",style:{opacity:_vm.uploadStarted&&_vm.isDone(_vm.file)?"0.7":"1"}},[(_vm.file.source==="local_file_system"||_vm.isTransformed(_vm.file))&&!_vm.disableThumbnails&&_vm.isEditable(_vm.file)?_c("img",{key:_vm.file.uuid,ref:"thumb-"+_vm.file.uuid,staticClass:"fsp-summary__thumbnail",attrs:{src:_vm.generateThumbnail(_vm.file)}}):_vm.isEditable(_vm.file)&&_vm.file.source!=="local_file_system"&&!_vm.disableThumbnails?_c("div",[_c("img",{staticClass:"fsp-summary__thumbnail",attrs:{src:_vm.file.thumbnail}})]):_c("div",{staticClass:"fsp-summary__thumbnail-container"},[_c("span",{"class":_vm.generateClass(_vm.file)})]),_vm._v(" "),_c("span",{staticClass:"fsp-summary__item-name",attrs:{title:_vm.getName(_vm.file)}},[_c("span",[_vm._v(_vm._s(_vm.getName(_vm.file)))]),_vm._v(" "),_vm.file.metadata&&_vm.file.metadata.author?_c("unsplash-metadata",{attrs:{metadata:_vm.file.metadata,from:"Summary"}}):_vm._e(),_vm._v(" "),_vm.file&&_vm.file.state==="failed"?_c("span",{staticClass:"--error"},[_vm._v("\n      "+_vm._s(_vm.t(_vm.file.error))+"\n    ")]):_vm._e(),_vm._v(" "),_vm.file.size&&_vm.file.size>"0"&&!_vm.file.metadata?_c("span",{staticClass:"fsp-summary__size"},[!_vm.isFailed(_vm.file)&&(_vm.file.source==="local_file_system"||_vm.isTransformed(_vm.file))&&_vm.uploadStarted?_c("span",{staticClass:"fsp-summary__size-progress"},[_vm._v("\n        "+_vm._s(_vm.file.progressSize)+" /\n      ")]):_vm._e(),_vm._v(" "),_c("span",[_vm._v(" "+_vm._s(_vm.translatedFileSize(_vm.file)))])]):_vm._e()],1),_vm._v(" "),_vm.uploadStarted&&!_vm.isFailed(_vm.file)?_c("div",{staticClass:"fsp-summary__item-progress",style:{width:_vm.file.progress+"%"}}):_vm._e(),_vm._v(" "),_c("div",{staticClass:"fsp-summary__actions-container"},[!_vm.uploadStarted&&!_vm.disableTransformer&&!_vm.isTransformed(_vm.file)&&_vm.isEditable(_vm.file)?_c("span",{staticClass:"fsp-summary__action fsp-summary__action--button","class":{"fsp-summary__action--button-blue":_vm.cropForce},attrs:{tabindex:"0"},on:{click:function click($event){return _vm.transform(_vm.file.uuid);},keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.transform(_vm.file.uuid);}}},[_vm._v("\n      "+_vm._s(_vm.cropForce?_vm.t("Crop"):_vm.t("Edit"))+"\n    ")]):!_vm.uploadStarted&&_vm.isTransformed(_vm.file)?_c("span",{staticClass:"fsp-summary__action fsp-summary__action--button",on:{click:function click($event){return _vm.revert(_vm.file);}}},[_vm._v("\n      "+_vm._s(_vm.t("Revert"))+"\n    ")]):_vm._e(),_vm._v(" "),!_vm.uploadStarted&&_vm.isEditable(_vm.file)?_c("span",{staticClass:"fsp-summary__action-separator"}):_vm._e(),_vm._v(" "),!_vm.uploadStarted||!_vm.isDone(_vm.file)?_c("span",{staticClass:"fsp-summary__action fsp-summary__action--remove",attrs:{tabindex:"0"},on:{click:function click($event){return _vm.addFile(_vm.file);}}}):_vm._e()])]);};var __vue_staticRenderFns__$y=[];__vue_render__$y._withStripped=true;/* style */var __vue_inject_styles__$y=undefined;/* scoped */var __vue_scope_id__$y=undefined;/* module identifier */var __vue_module_identifier__$y=undefined;/* functional template */var __vue_is_functional_template__$y=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$y=/*#__PURE__*/normalizeComponent({render:__vue_render__$y,staticRenderFns:__vue_staticRenderFns__$y},__vue_inject_styles__$y,__vue_script__$y,__vue_scope_id__$y,__vue_is_functional_template__$y,__vue_module_identifier__$y,false,undefined,undefined,undefined);//
var script$z={components:{ContentHeader:__vue_component__$2,FooterNav:__vue_component__$g,Modal:__vue_component__$4,Sidebar:__vue_component__$q,SummaryRow:__vue_component__$y},computed:_objectSpread({},index_esm.mapGetters(['allowManualRetry','canStartUpload','cropFiles','cropForce','disableTransformer','fileCount','maxFiles','filesDone','filesFailed','filesUploading','filesList','filesPaused','filesWaiting','filesNeededCount','isConnected','isConnectedObj','lang','minFiles','mobileNavActive','route','routesHistory','uploadStarted','serverUploadInProgress']),{fileBuckets:function fileBuckets(){if(this.uploadStarted){if(!this.isConnected&&this.allowManualRetry){return[{id:'failed',name:'Connection Lost',files:this.filesPaused.concat(this.filesFailed)},{id:'done',name:'Completed',files:this.filesDone},{id:'uploading',name:'Uploading',files:this.filesUploading.concat(this.filesWaiting)}];}return[{id:'failed',name:'Failed While Uploading',files:this.filesFailed},{id:'done',name:'Completed',files:this.filesDone},{id:'uploading',name:'Uploading',files:this.filesUploading.concat(this.filesWaiting)}];}return[{id:'edited',name:'Edited Images',files:this.onlyTransformedImages},{id:'cropped',name:'Cropped Images',files:this.onlyCroppedImages},{id:'images',name:'Images',files:this.onlyImages},{id:'files',name:'Files',files:this.onlyFiles}];},minFilesMessage:function minFilesMessage(){if(this.filesNeededCount===1){return"".concat(this.t('Add')," 1 ").concat(this.t('more file'));}if(this.filesNeededCount>1){return"".concat(this.t('Add')," ").concat(this.filesNeededCount," ").concat(this.t('more files'));}return null;},onlyFiles:function onlyFiles(){return this.filesList.filter(function(f){return!_isImage(f);});},onlyImages:function onlyImages(){return this.filesList.filter(function(f){return _isImage(f);}).filter(function(f){return!f.transformed;});},onlyTransformedImages:function onlyTransformedImages(){if(this.cropForce){return this.filesList.filter(function(f){return _isImage(f);}).filter(function(f){return f.transformed;}).filter(function(f){return!f.cropped;});}return this.filesList.filter(function(f){return _isImage(f);}).filter(function(f){return f.transformed;});},onlyCroppedImages:function onlyCroppedImages(){if(this.cropForce){return this.filesList.filter(function(f){return _isImage(f);}).filter(function(f){return f.transformed;}).filter(function(f){return f.cropped;});}return[];},cropForceComplete:function cropForceComplete(){if(this.cropForce){return!this.onlyImages.length&&!this.onlyTransformedImages.length;}return true;},headerText:function headerText(){if(this.uploadStarted){return"".concat(this.t('Uploaded')," ").concat(this.filesDone.length," / ").concat(this.fileCount);}if(this.cropForce&&!this.cropForceComplete){return this.t('Crop is required on images');}return this.t('Selected Files');},placeholderText:function placeholderText(){return this.t('Filter');},reconnectTimer:function reconnectTimer(){return"- Retrying in ".concat(this.timer.toLocaleString(this.lang),"...");}}),data:function data(){return{timer:20,filter:''};},methods:_objectSpread({},index_esm.mapActions(['addFile','deselectAllFiles','retryAllFailedFiles','startUploading','transformImage']),{filterFiles:function filterFiles(filesList){var pattern=new RegExp(this.filter,'i');return filesList.filter(function(f){return pattern.test(f.name);});},retryAll:function retryAll(){this.resetCountdown();this.retryAllFailedFiles();this.$store.commit('SET_CONNECTION_STATUS',true);this.$store.commit('RESET_ATTEMPTS');},startCountdown:function startCountdown(){var _this29=this;if(!this.timerInterval){this.timerInterval=setInterval(function(){_this29.timer-=1;},1000);}},resetCountdown:function resetCountdown(){clearInterval(this.timerInterval);this.timerInterval=null;this.timer=20;},startUploadMaybe:function startUploadMaybe(){if(this.canStartUpload&&this.cropForceComplete){this.startUploading();}if(!this.cropForceComplete){var image=this.onlyImages[0]||this.onlyTransformedImages[0];this.transformImage(image.uuid);}},updateFilter:function updateFilter(event){this.filter=event.target.value;},historyBack:function historyBack(){this.$store.commit('GO_BACK_WITH_ROUTE_CURRENT_TYPE');}}),watch:{isConnectedObj:{handler:function handler(connected){if(connected.value===false){this.startCountdown();}if(connected.value===true){this.resetCountdown();}}},timer:{handler:function handler(value){if(value===0){this.retryAll();}}},filesList:{immediate:false,handler:function handler(files){// Go back when there is nothing left in the current view
if(files.length===0){if(this.cropFiles){this.$store.dispatch('cancelPick');this.$root.$destroy();return;}this.$store.commit('GO_BACK_WITH_ROUTE_CURRENT_TYPE');this.$store.commit('SET_UPLOAD_STARTED',false);}}}}};/* script */var __vue_script__$z=script$z;/* template */var __vue_render__$z=function __vue_render__$z(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("modal",[_c("div",{attrs:{slot:"header"},slot:"header"},[_c("content-header",[!_vm.mobileNavActive?_c("span",{staticClass:"fsp-header-text--visible"},[_vm._v("\n        "+_vm._s(_vm.headerText)+"\n      ")]):_vm._e()])],1),_vm._v(" "),_c("sidebar",{attrs:{slot:"sidebar"},slot:"sidebar"}),_vm._v(" "),_c("div",{staticClass:"fsp-summary",attrs:{slot:"body"},slot:"body"},[_c("div",{staticClass:"fsp-summary__header"},[_c("div",{staticClass:"fsp-summary__filter"},[_c("input",{attrs:{placeholder:_vm.placeholderText},on:{input:_vm.updateFilter}}),_vm._v(" "),_c("span",{staticClass:"fsp-summary__filter-icon"})])]),_vm._v(" "),_c("div",{staticClass:"fsp-summary__body","class":{"fsp-summary__has-actions":!_vm.uploadStarted}},[_vm._l(_vm.fileBuckets,function(bucket){return[_vm.filterFiles(bucket.files).length?_c("div",{key:bucket.id},[_c("div",{staticClass:"fsp-grid__label","class":{"fsp-color--error":bucket.id==="failed"}},[_vm._v("\n            "+_vm._s(_vm.t(bucket.name))+"\n            "),_vm.isConnected&&_vm.allowManualRetry&&bucket.id==="failed"?_c("span",{staticClass:"fsp-color--error fsp-summary__try-again",on:{click:_vm.retryAll}},[_vm._v("\n              "+_vm._s(_vm.t("Try again"))+"\n            ")]):!_vm.isConnected&&_vm.allowManualRetry&&bucket.id==="failed"?_c("span",{staticClass:"fsp-color--error",on:{click:_vm.retryAll}},[_vm._v("\n              "+_vm._s(_vm.reconnectTimer)+"\n              "),_c("span",{staticClass:"fsp-summary__try-again"},[_vm._v(_vm._s(_vm.t("Try now")))])]):_vm._e()]),_vm._v(" "),_vm._l(_vm.filterFiles(bucket.files),function(file){return _c("SummaryRow",{key:file.uuid,attrs:{file:file}});})],2):_vm._e()];})],2)]),_vm._v(" "),_c("footer-nav",{attrs:{slot:"footer","is-visible":!_vm.uploadStarted},slot:"footer"},[_c("span",{staticClass:"fsp-button fsp-button--cancel",attrs:{slot:"nav-left",tabindex:"0"},on:{click:_vm.deselectAllFiles,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.deselectAllFiles($event);}},slot:"nav-left"},[_vm._v("\n      "+_vm._s(_vm.t("Deselect All"))+"\n    ")]),_vm._v(" "),_c("div",{attrs:{slot:"nav-right"},slot:"nav-right"},[_vm.fileCount<_vm.maxFiles?_c("span",{staticClass:"fsp-button fsp-button--cancel","class":{"fsp-button--cancel-disabled":_vm.serverUploadInProgress},attrs:{"data-e2e":"upload-more",tabindex:"0",role:"button"},on:{click:_vm.historyBack,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.historyBack($event);}}},[_vm._v("\n        "+_vm._s(_vm.t("Upload more"))+"\n      ")]):_vm._e(),_vm._v(" "),_c("span",{staticClass:"fsp-button fsp-button--primary fsp-button-upload","class":{"fsp-button--cancel-disabled":!_vm.canStartUpload||_vm.serverUploadInProgress},attrs:{"data-e2e":"upload",tabindex:"0",role:"button"},on:{click:_vm.startUploadMaybe,keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){return null;}return _vm.startUploadMaybe($event);}}},[!_vm.uploadStarted&&!_vm.canStartUpload?_c("span",[_vm._v("\n          "+_vm._s(_vm.minFilesMessage)+"\n        ")]):_c("span",[_vm._v("\n          "+_vm._s(_vm.t("Upload"))+"\n          "),_c("span",{directives:[{name:"show",rawName:"v-show",value:_vm.filesWaiting.length>1,expression:"filesWaiting.length > 1"}],staticClass:"fsp-badge fsp-badge--bright"},[_vm._v("\n            "+_vm._s(_vm.filesWaiting.length)+"\n          ")])])])])])],1);};var __vue_staticRenderFns__$z=[];__vue_render__$z._withStripped=true;/* style */var __vue_inject_styles__$z=undefined;/* scoped */var __vue_scope_id__$z=undefined;/* module identifier */var __vue_module_identifier__$z=undefined;/* functional template */var __vue_is_functional_template__$z=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$z=/*#__PURE__*/normalizeComponent({render:__vue_render__$z,staticRenderFns:__vue_staticRenderFns__$z},__vue_inject_styles__$z,__vue_script__$z,__vue_scope_id__$z,__vue_is_functional_template__$z,__vue_module_identifier__$z,false,undefined,undefined,undefined);// Retrieve last element of an array
var last=function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;};var CALLBACK_URL_KEY='fs-tab';// Update client representation to include source information
var convertToFileObj=function convertToFileObj(fileReturnedByApi,cloudName){var file=_objectSpread({source:cloudName,sourceKind:'cloud'},fileReturnedByApi);return file;};var initialState={isLoadingMore:false,hasScroll:false,clouds:[],cloudFolders:{},selectedCloudPath:null};var mutations={SET_CLOUD_PATH:function SET_CLOUD_PATH(state,_ref35){var name=_ref35.name,path=_ref35.path,payload=_ref35.payload;var data=payload;var obj=state.clouds[name];if(obj.contents&&obj.contents[path]){data=obj.contents[path].concat(payload);}Vue.set(obj,'contents',_objectSpread({},obj.contents,_defineProperty({},path,data)));Vue.set(state.clouds[name],'status','ready');},SET_CLOUD_REDIRECT:function SET_CLOUD_REDIRECT(state,_ref36){var name=_ref36.name,auth=_ref36.payload.auth;var redirect=auth.redirect_url;if(!state.clouds[name]){return;}Vue.set(state.clouds[name],'redirect',redirect);Vue.set(state.clouds[name],'status','unauthorized');},SET_CLOUD_NEXT:function SET_CLOUD_NEXT(state,_ref37){var name=_ref37.name,path=_ref37.path,next=_ref37.next;if(!state.clouds[name]){return;}Vue.set(state.clouds[name],'next',_objectSpread({},state.clouds[name].next,_defineProperty({},path,next)));},SET_CLOUD_LOADING:function SET_CLOUD_LOADING(state,name){if(!state.clouds[name]){return;}Vue.set(state.clouds[name],'status','loading');},SET_CLOUD_ERROR:function SET_CLOUD_ERROR(state,name){var cloudObj=state.clouds[name];if(cloudObj){Vue.set(cloudObj,'status','errored');}},REMOVE_CLOUD_PATHS:function REMOVE_CLOUD_PATHS(state,name){if(!state.clouds[name]){return;}state.clouds[name]={status:'initialized'};},REMOVE_ALL_CLOUD_PATHS:function REMOVE_ALL_CLOUD_PATHS(state){for(var name in state.clouds){state.clouds[name]={status:'initialized'};}},SET_CLOUD_FOLDERS:function SET_CLOUD_FOLDERS(state,folders){folders.forEach(function(folder){state.cloudFolders[folder.path]=_objectSpread({},state.cloudFolders[folder.path],{name:folder.name});});},SET_CLOUD_PATH_SELECTED:function SET_CLOUD_PATH_SELECTED(state,path){state.selectedCloudPath=path;},SET_CLOUD_FOLDER_LOADING:function SET_CLOUD_FOLDER_LOADING(state,_ref38){var path=_ref38.path,value=_ref38.value;state.cloudFolders=_objectSpread({},state.cloudFolders,_defineProperty({},path,_objectSpread({},state.cloudFolders[path],{loading:value})));},RESET_CLOUD:function RESET_CLOUD(){// because of some reference we need to clear cloud contents initial state to reset values
Object.keys(initialState.clouds).forEach(function(key){initialState.clouds[key].contents=null;});},SET_SCROLL_STATE:function SET_SCROLL_STATE(state,hasScroll){Vue.set(state,'hasScroll',hasScroll);}};var actions={initClouds:function initClouds(_ref39){var rootGetters=_ref39.rootGetters,state=_ref39.state;// for now only one method but leave space to init it here
var sources=rootGetters.cloudSources.map(function(s){return s.name;}).reduce(function(obj,name){obj[name]={status:'initialized'};return obj;},{});Vue.set(state,'clouds',sources);},goToDirectory:function goToDirectory(_ref40,folder){var commit=_ref40.commit,dispatch=_ref40.dispatch,getters=_ref40.getters;var name=getters.currentCloud.name;var path=getters.currentCloud.path;var dirPath=folder.path;dispatch('fetchCloudPath',{name:name,path:dirPath}).then(function(res){if(name===getters.currentCloud.name&&res!==undefined){var newPath=path.concat([dirPath]);var newRoute=['source',name,newPath];commit('CHANGE_ROUTE',newRoute);}});},logout:function logout(_ref41,name){var commit=_ref41.commit,dispatch=_ref41.dispatch,getters=_ref41.getters;// Logout single cloud
if(name){getters.cloudClient.logout(name).then(function(){commit('REMOVE_CLOUD_PATHS',name);commit('REMOVE_SOURCE_FROM_WAITING',name);if(name===getters.currentCloud.name){// Get out of any folders
commit('CHANGE_ROUTE',['source',name]);}commit('REMOVE_SOURCE_FROM_ROUTES',name);dispatch('fetchCloudPath',{name:name,path:'/'});});}else{// Logout all clouds
getters.cloudClient.logout().then(function(){commit('REMOVE_ALL_CLOUD_PATHS');commit('REMOVE_CLOUDS_FROM_WAITING');});}},onFetchSuccess:function onFetchSuccess(context,_ref42){var name=_ref42.name,path=_ref42.path,res=_ref42.res;return new Promise(function(resolve,reject){var cloudObj=res[name];if(cloudObj&&cloudObj.auth&&cloudObj.auth.redirect_url){context.commit('SET_CLOUD_REDIRECT',{name:name,payload:cloudObj});resolve();}else if(cloudObj&&cloudObj.error){var msg=cloudObj.error.text||'Error occurred.';reject(new Error(msg));}else if(cloudObj&&cloudObj.contents){var payload=cloudObj.contents.map(function(file){return convertToFileObj(file,name);});context.commit('SET_CLOUD_NEXT',{name:name,path:path,next:cloudObj.next});// Keep a map of folder names to folder paths (important for FB, Google, etc.)
var folders=payload.filter(function(f){return f.folder;});context.commit('SET_CLOUD_FOLDERS',folders);// Add converted contents to cloud path in state
context.commit('SET_CLOUD_PATH',{name:name,path:path,payload:payload});// timeout due to list rendering issue in vue. Vue.nextTick is not enough
setTimeout(function(){if(!context.state.hasScroll&&cloudObj){context.dispatch('loadMore',{name:name,path:path,next:cloudObj.next});}},5);resolve(payload);}else{reject(new Error('Empty response.'));}});},prefetchClouds:function prefetchClouds(context){// Fetch root folder of each user-defined cloud source
var path='/';var clouds=context.getters.cloudSources.map(function(s){return s.name;}).reduce(function(obj,name){obj[name]={path:path};if(name==='customsource'){obj[name].customSourceContainer=context.getters.customSourceContainer;obj[name].customSourcePath=context.getters.customSourcePath;}return obj;},{});var keys=Object.keys(clouds);if(keys.length){keys.forEach(function(key){context.commit('SET_CLOUD_LOADING',key);});return context.getters.cloudClient.list(clouds,{},context.rootGetters.acceptMime).then(function(res){keys.forEach(function(name){context.dispatch('onFetchSuccess',{name:name,path:path,res:res})// Be silent on rejections
["catch"](function(){context.commit('SET_CLOUD_ERROR',name);});});})["catch"](function(){keys.forEach(function(key){context.commit('SET_CLOUD_ERROR',key);});});}return Promise.resolve();},addCloudFolder:function addCloudFolder(_ref43,_ref44){var state=_ref43.state,commit=_ref43.commit,dispatch=_ref43.dispatch,getters=_ref43.getters;var name=_ref44.name,path=_ref44.path,next=_ref44.next;// path is folder.path
commit('SET_CLOUD_FOLDER_LOADING',{path:path,value:true});return dispatch('fetchCloudPath',{name:name,path:path,load:false,next:next}).then(function(res){if(res){commit('SET_CLOUD_PATH_SELECTED',path);commit('SET_CLOUD_FOLDER_LOADING',{path:path,value:false});// TODO Remove this filter to fetch folders recursively. Maybe an option?
var list=res.filter(function(f){return!f.folder;});list.forEach(function(f){return dispatch('addFile',f);});commit('SET_CLOUD_PATH_SELECTED',null);// Recursively fetch this folder until there are no more next paths
var nextPath=state.clouds[name].next&&state.clouds[name].next[path];if(nextPath&&getters.fileCount!==getters.maxFiles){dispatch('addCloudFolder',{name:name,path:path,next:nextPath});}}})["catch"](function(err){commit('SET_CLOUD_FOLDER_LOADING',{path:path,value:false});return dispatch('showNotification',err.message);});},loadMore:function loadMore(_ref45,_ref46){var state=_ref45.state,dispatch=_ref45.dispatch,getters=_ref45.getters;var name=_ref46.name,path=_ref46.path,next=_ref46.next;if(!next||!next.length){next=getters.currentCloud?getters.currentCloud.next:'';}if(state.isLoadingMore||!next||!next.length){return;}// rething how to set loading flag, for now we cant use then because
// it is called after next loadMore call
// state.isLoadingMore = true;
return dispatch('fetchCloudPath',{next:next,name:name||getters.currentCloud.name,path:path||getters.currentCloud.lastPath,load:false});// .then(() => {
//   Vue.set(state, 'isLoadingMore', false);
// });
},fetchCloudPath:function fetchCloudPath(_ref47,_ref48){var state=_ref47.state,commit=_ref47.commit,getters=_ref47.getters,dispatch=_ref47.dispatch,rootGetters=_ref47.rootGetters;var name=_ref48.name,_ref48$path=_ref48.path,path=_ref48$path===void 0?'/':_ref48$path,_ref48$load=_ref48.load,load=_ref48$load===void 0?true:_ref48$load,next=_ref48.next;// Don't fetch path if we already have it cached
var cloudObj=state.clouds[name];if(!next&&cloudObj&&cloudObj.contents&&cloudObj.contents[path]){return Promise.resolve(cloudObj.contents[path]);}// Fetch folder list from CloudRouter API
var payload=_defineProperty({},name,{path:path,next:next});if(name==='customsource'){payload.customsource.customSourceContainer=getters.customSourceContainer;payload.customsource.customSourcePath=getters.customSourcePath;}if(load){commit('SET_CLOUD_LOADING',name);}return getters.cloudClient.list(payload,{},rootGetters.acceptMime).then(function(res){return dispatch('onFetchSuccess',{name:name,path:path,res:res});})["catch"](function(err){commit('SET_CLOUD_ERROR',name);return dispatch('showNotification',err.message);});},goToLastPath:function goToLastPath(_ref49,name){var getters=_ref49.getters,commit=_ref49.commit;// If we're already on the last path then do nothing
if(getters.currentCloud.name!==name){var lastPath=getters.routesHistory.filter(function(route){return route[1]===name;})// Look for all routes within current cloud
.pop();// Pop most recent route
if(lastPath&&lastPath.length){commit('CHANGE_ROUTE',lastPath);}else{// Default to root folder
commit('CHANGE_ROUTE',['source',name]);}}}};var getters={clouds:function clouds(st){return st.clouds;},cloudFolders:function cloudFolders(st){return st.cloudFolders;},isLoadingMore:function isLoadingMore(st){return st.isLoadingMore;},currentCloud:function currentCloud(st,_ref50){var route=_ref50.route;// Current cloud is based on current route, e.g. ['source', 'dropbox']
var name=route[1];var path=route[2]||['/'];var lastPath=last(path);if(st.clouds[name]){return{name:name,path:path,lastPath:lastPath,next:st.clouds[name].next&&st.clouds[name].next[lastPath],redirect:st.clouds[name].redirect,isUnauthorized:st.clouds[name].status==='unauthorized',isErrored:!st.clouds[name].contents&&st.clouds[name].status==='errored',isLoading:st.clouds[name].status==='loading'};}return{};},currentCloudFiles:function currentCloudFiles(st,_ref51){var currentCloud=_ref51.currentCloud;var name=currentCloud.name;var path=currentCloud.lastPath;if(st.clouds[name]&&st.clouds[name].contents){return st.clouds[name].contents[path]||[];}return[];},selectedCloudPath:function selectedCloudPath(st){return st.selectedCloudPath;}};var cloudStore={state:initialState,mutations:mutations,actions:actions,getters:getters};//
// comment to remove
var script$A={components:{Blocked:__vue_component__$5,DragAndDrop:__vue_component__,Notifications:__vue_component__$6,PickFromSource:__vue_component__$v,Transform:__vue_component__$x,UploadSummary:__vue_component__$z},data:function data(){return{isLoading:true,errorBlocked:false};},computed:_objectSpread({},index_esm.mapGetters(['rawConfig','whitelabel','intelligent','blocked','cloudClient','apiClient','cropFiles','prefetched','globalDropZone','isInlineDisplay','rootId','route','uiVisible']),{localPickingAllowed:function localPickingAllowed(){return this.route&&this.route[1]==='local_file_system'||this.globalDropZone;},getClasses:function getClasses(){return{'fsp-picker--inline':this.isInlineDisplay};}}),methods:_objectSpread({},index_esm.mapActions(['addFile','prefetchClouds','showNotification']),{isRootRoute:function isRootRoute(name){return this.route[0]===name;},detectEscPressed:function detectEscPressed(event){if(event.keyCode===27){this.$store.dispatch('cancelPick');this.$root.$destroy();}},checkPickerHovered:function checkPickerHovered(e){var hovered=this.$el.contains(e.target);this.$store.commit('SET_HOVER',hovered);}}),created:function created(){var _this30=this;if(!this.isInlineDisplay){window.addEventListener('keyup',this.detectEscPressed);}window.addEventListener('mousemove',this.checkPickerHovered);if(!this.prefetched){this.$store.dispatch('prefetch').then(function(){if(!_this30.cropFiles){_this30.prefetchClouds();// initial folder list needs to be done after prefetch request
}_this30.isLoading=false;})["catch"](function(e){console.error(e);_this30.isLoading=false;});}// Add files passed in from crop
var promises=[];if(this.cropFiles&&this.cropFiles.length){this.cropFiles.forEach(function(file){if(typeof file==='string'){promises.push(_this30.cloudClient.metadata(file));}else{_this30.addFile(file);}});return Promise.all(promises).then(function(res){res.forEach(function(r){if(r.error){throw new Error(r.error);}// workaround for wrong key name
r.name=r.name||r.filename;delete r.filename;_this30.addFile(r);});if(_this30.cropFiles&&_this30.cropFiles.length>=1){_this30.$store.commit('CHANGE_ROUTE',['summary']);}})["catch"](function(e){console.error(e);_this30.showNotification('Error fetching URL metadata.');setTimeout(function(){_this30.$store.dispatch('cancelPick');_this30.$root.$destroy();},2000);});}this.$store.dispatch('initClouds');if(window.URLSearchParams){var searchParams=new window.URLSearchParams(window.location.search);var sourceName=searchParams.get(CALLBACK_URL_KEY);if(sourceName&&sourceName.length>0){return this.$store.dispatch('goToLastPath',sourceName);}}return this.$store.dispatch('initRoute');},destroyed:function destroyed(){window.removeEventListener('keyup',this.detectEscPressed);window.removeEventListener('mousemove',this.checkPickerHovered);}};/* script */var __vue_script__$A=script$A;/* template */var __vue_render__$A=function __vue_render__$A(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("transition",{attrs:{appear:"","appear-class":"fsp-picker-appear","appear-to-class":"fsp-picker-appear-to","appear-active-class":"fsp-picker-appear-active"}},[_vm.blocked||_vm.errorBlocked?_c("Blocked",{"class":_vm.getClasses,attrs:{"is-error":_vm.errorBlocked}}):_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.uiVisible,expression:"uiVisible"}],"class":_vm.getClasses,attrs:{id:_vm.rootId}},[_vm.isLoading?_c("div",{staticClass:"fsp-loading--folder center"}):_c("div",{staticClass:"fsp-picker-holder"},[_vm.isRootRoute("source")?_c("pick-from-source"):_vm._e(),_vm._v(" "),_vm.isRootRoute("summary")?_c("upload-summary"):_vm._e(),_vm._v(" "),_vm.isRootRoute("transform")?_c("transform"):_vm._e(),_vm._v(" "),_c("notifications"),_vm._v(" "),_vm.localPickingAllowed&&!_vm.isRootRoute("transform")?_c("drag-and-drop"):_vm._e()],1)])],1);};var __vue_staticRenderFns__$A=[];__vue_render__$A._withStripped=true;/* style */var __vue_inject_styles__$A=undefined;/* scoped */var __vue_scope_id__$A=undefined;/* module identifier */var __vue_module_identifier__$A=undefined;/* functional template */var __vue_is_functional_template__$A=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$A=/*#__PURE__*/normalizeComponent({render:__vue_render__$A,staticRenderFns:__vue_staticRenderFns__$A},__vue_inject_styles__$A,__vue_script__$A,__vue_scope_id__$A,__vue_is_functional_template__$A,__vue_module_identifier__$A,false,undefined,undefined,undefined);//
var script$B={components:{Notifications:__vue_component__$6},data:function data(){return{cropFilesDone:0,cropFilesOverride:{},isDropping:false};},computed:_objectSpread({},index_esm.mapGetters(['accept','apiClient','canAddMoreFiles','dropPane','fileCount','filesDone','filesList','filesWaiting','maxFiles','maxSize','storeTo','uploadStarted','failOverMaxFiles','customText','pasteMode']),{acceptStr:function acceptStr(){if(this.accept){return this.accept.join(',');}return undefined;},containerClasses:function containerClasses(){return{'fsp-drop-pane__container':true,'fsp-drop-pane__container--active':this.isDropping};},filesFinished:function filesFinished(){if(this.cropFilesDone)return this.cropFilesDone;if(this.filesDone.length)return this.filesDone.length;return 0;},iconClasses:function iconClasses(){return{'fsp-drop-pane__icon':true,'fsp-drop-pane__icon--active':this.isDropping};},multiple:function multiple(){return this.maxFiles>1;},progressStyle:function progressStyle(){return{width:"".concat(this.totalProgress,"%")};},totalProgress:function totalProgress(){var cropFiles=lodash_values(this.cropFilesOverride);var list=cropFiles.length?cropFiles:this.filesList;var allPercents=Math.round(list.map(function(f){return f.progress;}).filter(function(n){return n;}).reduce(function(x,y){return x+y;},0)/this.fileCount);return allPercents;},customTextUploadOf:function customTextUploadOf(){if(this.customText&&this.customText.uploadOf){return this.customText.uploadOf;}return'';}}),methods:_objectSpread({},index_esm.mapActions(['addFile','showNotification']),{clearEvent:function clearEvent(event){event.target.value=null;},dragenter:function dragenter(event){event.preventDefault();this.isDropping=true;if(this.dropPane.onDragEnter)this.dropPane.onDragEnter(event);},dragover:function dragover(event){event.preventDefault();if(this.dropPane.onDragOver)this.dropPane.onDragOver(event);},dragleave:function dragleave(){this.isDropping=false;if(this.dropPane.onDragLeave)this.dropPane.onDragLeave();},drop:function drop(event){var _this31=this;event.preventDefault();this.isDropping=false;extractFilesFromDataTransfer(event.dataTransfer).then(function(files){return _this31.callAddFiles(files);});if(this.dropPane.onDrop)this.dropPane.onDrop(event);},incCropFilesDone:function incCropFilesDone(){this.cropFilesDone+=1;},onFilesSelected:function onFilesSelected(event){this.callAddFiles(event.target.files);},paste:function paste(event){var _this32=this;var activePickerInstance=getActivePickerInstance(this.pasteMode);if(activePickerInstance===this.$root){extractFilesFromDataTransfer(event.clipboardData).then(function(files){return _this32.callAddFiles(files);});}},openSelectFile:function openSelectFile(){if(this.dropPane.onClick){this.dropPane.onClick();}if(this.dropPane.disableClick){return;}this.$refs.fileUploadInput.click();},callAddFiles:function callAddFiles(files){// validate files before adding them to queue - workaround (maxSize, maxFiles)
if(this.maxFiles&&this.maxFiles>0&&this.maxFiles<files.length){var filesText=this.maxFiles===1?'file':'files';var errorMsg=errors(this.$store.getters.lang,this.$store.getters.customText).ERROR_MAX_FILES_REACHED.replace('{maxFiles}',this.$store.getters.maxFiles).replace('{filesText}',filesText);if(this.failOverMaxFiles){return this.showNotification(errorMsg);}else{this.showNotification(errorMsg);}}if(this.maxSize){var errored=[];for(var i=0;i<files.length;i++){if(files[i].size&&files[i].size>this.maxSize){errored.push(files[i].name);}}if(errored.length>0){var _errorMsg=errors(this.$store.getters.lang,this.$store.getters.customText).ERROR_FILES_TOO_BIG.replace('{displayName}',errored.join(', ')).replace('{maxSize}',readableSize(this.maxSize));return this.showNotification(_errorMsg);}}for(var idx=0;idx<files.length;idx++){var _file5=files[idx];if(!_file5.name){if(idx>0){_file5.name="untitled (".concat(idx,")");}else{_file5.name='untitled';}}this.addFile(_file5);}return true;},checkPickerHovered:function checkPickerHovered(e){var hovered=this.$el.contains(e.target);this.$store.commit('SET_HOVER',hovered);}}),created:function created(){window.addEventListener('mousemove',this.checkPickerHovered);},mounted:function mounted(){var dropZone=this.dropPane.overlay?this.$refs.dropOverlay:this.$refs.dropZone;var enterZone=this.dropPane.overlay?document:this.$refs.dropZone;document.addEventListener('paste',this.paste,false);enterZone.addEventListener('dragenter',this.dragenter,false);dropZone.addEventListener('dragover',this.dragover,false);dropZone.addEventListener('dragleave',this.dragleave,false);dropZone.addEventListener('drop',this.drop,false);},beforeDestroy:function beforeDestroy(){var dropZone=this.dropPane.overlay?this.$refs.dropOverlay:this.$refs.dropZone;var enterZone=this.dropPane.overlay?document:this.$refs.dropZone;document.removeEventListener('paste',this.paste);enterZone.removeEventListener('dragenter',this.dragenter);dropZone.removeEventListener('dragover',this.dragover);dropZone.removeEventListener('dragleave',this.dragleave);dropZone.removeEventListener('drop',this.drop);},destroyed:function destroyed(){window.removeEventListener('mousemove',this.checkPickerHovered);},watch:{filesWaiting:{handler:function handler(files){var _this33=this;if(!this.uploadStarted&&files.length&&!this.dropPane.cropFiles){setTimeout(function(){return _this33.$store.dispatch('startUploading');});return;}if(!this.uploadStarted&&files.length&&this.dropPane.cropFiles){// Spawn a new pick instance and use callbacks to override state
var blobs=files.filter(function(f){return f.originalFile;}).map(function(f){return f.originalFile;});var urls=files.filter(function(f){return!f.originalFile&&f.url;}).map(function(f){return f.url;});// Config that uses callbacks to update local component state
var _config={displayMode:DISPLAY_MODE_OVERLAY,onUploadDone:function onUploadDone(){_this33.$store.commit('SET_UPLOAD_STARTED',false);_this33.$store.commit('CLEAR_FILES');},onCancel:function onCancel(){_this33.$store.commit('SET_UPLOAD_STARTED',false);_this33.$store.commit('CLEAR_FILES');_this33.$store.dispatch('cancelPick');},dropPane:this.dropPane,transformations:this.$store.getters.transformations,onFileUploadProgress:function onFileUploadProgress(file,evt){_this33.$set(_this33.cropFilesOverride,file.uploadId,file);_this33.$set(_this33.cropFilesOverride[file.uploadId],'progress',evt.totalPercent);},onFileUploadFinished:function onFileUploadFinished(){return _this33.incCropFilesDone();},onUploadStarted:function onUploadStarted(){return _this33.$store.commit('SET_UPLOAD_STARTED',true);}};if(this.storeTo&&Object.keys(this.storeTo)){_config.storeTo=this.storeTo;}// New pick instance to handle cropFiles
var picker=new Picker(this.apiClient,_config);picker.crop(blobs.concat(urls));}}}}};/* script */var __vue_script__$B=script$B;/* template */var __vue_render__$B=function __vue_render__$B(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{"class":_vm.containerClasses},[_c("notifications"),_vm._v(" "),_c("input",{ref:"fileUploadInput",staticClass:"fsp-drop-pane__input",attrs:{type:"file",accept:_vm.acceptStr,multiple:_vm.multiple,disabled:!_vm.canAddMoreFiles},on:{change:function change($event){return _vm.onFilesSelected($event);},click:function click($event){return _vm.clearEvent($event);}}}),_vm._v(" "),_c("div",{ref:"dropZone",staticClass:"fsp-drop-pane__drop-zone",on:{click:_vm.openSelectFile}}),_vm._v(" "),_vm.dropPane.showIcon&&!_vm.uploadStarted?_c("div",{"class":_vm.iconClasses}):_vm._e(),_vm._v(" "),!_vm.uploadStarted?_c("div",{staticClass:"fsp-drop-pane__text"},[_vm._v("\n    "+_vm._s(_vm.dropPane.customText||_vm.t("Drag and Drop, Copy and Paste Files"))+"\n  ")]):_vm.dropPane.showProgress&&_vm.uploadStarted?_c("div",{staticClass:"fsp-drop-pane__text"},[_vm._v("\n    "+_vm._s(_vm.t("Uploaded")+" "+_vm.filesFinished+" "+(_vm.customTextUploadOf||_vm.t("of"))+" "+_vm.fileCount)+"\n    "),_c("div",{staticClass:"fsp-drop-pane__upload-progress",style:_vm.progressStyle})]):_vm._e(),_vm._v(" "),_c("transition",{attrs:{name:"__fs-fade"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.dropPane.overlay&&_vm.isDropping,expression:"dropPane.overlay && isDropping"}],ref:"dropOverlay",staticClass:"fsp-drop-pane__overlay"},[_c("div",{staticClass:"fsp-drop-pane__overlay-box"},[_c("div",{staticClass:"fsp-drop-pane__overlay-icon"}),_vm._v(" "),_c("div",{staticClass:"fsp-drop-pane__overlay-header"},[_vm._v("\n          "+_vm._s(_vm.t("Drop your files anywhere"))+"\n        ")])])])])],1);};var __vue_staticRenderFns__$B=[];__vue_render__$B._withStripped=true;/* style */var __vue_inject_styles__$B=undefined;/* scoped */var __vue_scope_id__$B=undefined;/* module identifier */var __vue_module_identifier__$B=undefined;/* functional template */var __vue_is_functional_template__$B=false;/* style inject */ /* style inject SSR */ /* style inject shadow dom */var __vue_component__$B=/*#__PURE__*/normalizeComponent({render:__vue_render__$B,staticRenderFns:__vue_staticRenderFns__$B},__vue_inject_styles__$B,__vue_script__$B,__vue_scope_id__$B,__vue_is_functional_template__$B,__vue_module_identifier__$B,false,undefined,undefined,undefined);var arrayFindIndex=function arrayFindIndex(arr,predicate,ctx){if(typeof Array.prototype.findIndex==='function'){return arr.findIndex(predicate,ctx);}if(typeof predicate!=='function'){throw new TypeError('predicate must be a function');}var list=Object(arr);var len=list.length;if(len===0){return-1;}for(var i=0;i<len;i++){if(predicate.call(ctx,list[i],i,list)){return i;}}return-1;};// Update client representation to include source information
var convertToFileObj$1=function convertToFileObj$1(fileReturnedByApi){var file=_objectSpread({source:'imagesearch',sourceKind:'cloud'},fileReturnedByApi);return file;};var initialState$1={input:'',isSearching:false,result:null,error:null};var mutations$1={UPDATE_INPUT:function UPDATE_INPUT(state,value){state.input=value;},FETCH_IMAGES_BEGIN:function FETCH_IMAGES_BEGIN(state){state.isSearching=true;},FETCH_IMAGES_SUCCESS:function FETCH_IMAGES_SUCCESS(state,result){state.result=result;state.isSearching=false;},FETCH_IMAGES_ERROR:function FETCH_IMAGES_ERROR(state,error){state.error=error;state.isSearching=false;},CLEAR_IMAGES_STORE:function CLEAR_IMAGES_STORE(state){state.isSearching=false;state.result=null;state.error=null;state.input='';}};var actions$1={updateSearchInput:function updateSearchInput(context,value){context.commit('UPDATE_INPUT',value);},fetchImages:function fetchImages(context){// Don't proceed if we're already searching
if(context.getters.isSearching){return;}var input=context.getters.imageSearchInput;if(!input){return;}context.commit('FETCH_IMAGES_BEGIN');context.getters.cloudClient.list({imagesearch:{path:"/".concat(input)}}).then(function(res){var cloudObj=res.imagesearch;if(!cloudObj){context.commit('FETCH_IMAGES_ERROR','No response.');context.dispatch('showNotification','An error occurred. Please try again.');}if(cloudObj&&cloudObj.contents){// Add source and sourceKind for imagesearch (cloud API)
cloudObj.contents=cloudObj.contents.map(convertToFileObj$1);// Commit the whole response into state
context.commit('FETCH_IMAGES_SUCCESS',cloudObj);}// No search results for specified input
if(cloudObj&&cloudObj.contents&&cloudObj.contents.length===0){context.dispatch('showNotification',['No search results found for "{search}"',{search:input}]);}if(cloudObj&&cloudObj.error){context.commit('FETCH_IMAGES_ERROR',cloudObj.error);context.dispatch('showNotification','An error occurred. Please try again.');}})["catch"](function(err){context.commit('FETCH_IMAGES_ERROR',err);context.dispatch('showNotification',err.message);});}};var getters$1={isSearching:function isSearching(st){return st.isSearching;},noResultsFound:function noResultsFound(st){return st.result&&st.result.contents.length===0;},resultsFound:function resultsFound(st){return st.result&&st.result.contents.length>0;},imageSearchInput:function imageSearchInput(st){return st.input;},imageSearchResults:function imageSearchResults(st){return st.result&&st.result.contents;}};var imageSearch={state:initialState$1,mutations:mutations$1,actions:actions$1,getters:getters$1};var ATTEMPT_LIMIT=2;var IMG_URLS=['http://cdn.filestackcontent.com/JRgmGyLtQjCFENsiL0SN','http://cdn.filestackcontent.com/F9wSolR8qtkRluW5nGoQ','http://cdn.filestackcontent.com/qLTNxOSpRH2zWhuiro3E'];var initialState$2={connected:{value:true},attempts:0,listeners:{}};var mutations$2={SET_CONNECTION_STATUS:function SET_CONNECTION_STATUS(state,value){state.connected={value:value};},INC_ATTEMPTS:function INC_ATTEMPTS(state){state.attempts+=1;},RESET_ATTEMPTS:function RESET_ATTEMPTS(state){state.attempts=0;},SET_NETWORK_LISTENERS:function SET_NETWORK_LISTENERS(state,listeners){state.listeners=listeners;}};var actions$2={onNetworkError:function onNetworkError(_ref52,override){var attempts=_ref52.state.attempts,commit=_ref52.commit,dispatch=_ref52.dispatch;commit('INC_ATTEMPTS');if(override||attempts>=ATTEMPT_LIMIT){commit('RESET_ATTEMPTS');commit('SET_CONNECTION_STATUS',false);dispatch('pauseAllUploads');}},onNetworkSuccess:function onNetworkSuccess(_ref53){var commit=_ref53.commit,dispatch=_ref53.dispatch;commit('SET_CONNECTION_STATUS',true);commit('RESET_ATTEMPTS');dispatch('retryAllFailedFiles');},checkNetworkNavigator:function checkNetworkNavigator(_ref54){var commit=_ref54.commit,dispatch=_ref54.dispatch,getters=_ref54.getters;if(getters.allowManualRetry){var online=function online(){return dispatch('onNetworkSuccess');};var offline=function offline(){return dispatch('onNetworkError',true);};window.addEventListener('online',online);window.addEventListener('offline',offline);commit('SET_NETWORK_LISTENERS',{online:online,offline:offline});}},removeNetworkListeners:function removeNetworkListeners(_ref55){var getters=_ref55.getters,_ref55$state$listener=_ref55.state.listeners,online=_ref55$state$listener.online,offline=_ref55$state$listener.offline;if(getters.allowManualRetry){window.removeEventListener('online',online);window.removeEventListener('offline',offline);}},checkNetworkXHR:function checkNetworkXHR(_ref56){var dispatch=_ref56.dispatch,getters=_ref56.getters;if(getters.allowManualRetry){var http=new XMLHttpRequest();var baseUrl=IMG_URLS[Math.floor(Math.random()*IMG_URLS.length)];var url="".concat(baseUrl,"?_=").concat(new Date().getTime());http.open('HEAD',url);http.onreadystatechange=function(){if(http.readyState===4){if(http.status){dispatch('onNetworkSuccess');}else{dispatch('onNetworkError');}}};http.send();}}};var getters$2={isConnected:function isConnected(st){return st.connected.value;},isConnectedObj:function isConnectedObj(st){return st.connected;}};var network={state:initialState$2,mutations:mutations$2,actions:actions$2,getters:getters$2};var notificationTime=5000;var mutations$3={ADD_NOTIFICATION:function ADD_NOTIFICATION(state,notification){state.notifications.push(notification);},REMOVE_NOTIFICATION:function REMOVE_NOTIFICATION(state,notificationToBeRemoved){state.notifications=state.notifications.filter(function(notification){return notification!==notificationToBeRemoved;});},REMOVE_ALL_NOTIFICATIONS:function REMOVE_ALL_NOTIFICATIONS(state){state.notifications.splice(0,state.notifications.length);}};var actions$3={showNotification:function showNotification(context,message,options){var notification={};if(Array.isArray(message)&&message.length===2){notification=_objectSpread({message:message[0],params:message[1]},options);}else if(_typeof2(message)==='object'){if(message['response']&&message['response']['data']['error']){message={message:message.response.data.error};}notification=_objectSpread({},message,{},options);}else{notification=_objectSpread({message:message},options);}// Prevent duplicate notifications
var messages=context.getters.notifications.map(function(n){return n.message;});if(messages.indexOf(message)<0){context.commit('ADD_NOTIFICATION',notification);setTimeout(function(){context.commit('REMOVE_NOTIFICATION',notification);},notification&&notification.params&&notification.params.uploadTimeout||context.rootGetters.errorsTimeout||notification.timeout||notificationTime);}},removeAllNotifications:function removeAllNotifications(context){context.commit('REMOVE_ALL_NOTIFICATIONS');}};var getters$3={notifications:function notifications(st){return st.notifications;}};var notifications={state:{notifications:[]},mutations:mutations$3,actions:actions$3,getters:getters$3};var mutations$4={FETCH_URL_START:function FETCH_URL_START(state){state.isFetching=true;},FETCH_URL_DONE:function FETCH_URL_DONE(state){state.isFetching=false;}};var actions$4={fetchUrl:function fetchUrl(context,url){context.commit('FETCH_URL_START');return context.getters.cloudClient.metadata(url).then(function(res){if(res.error){context.commit('FETCH_URL_DONE');return context.dispatch('showNotification',res.error);}context.commit('FETCH_URL_DONE');return context.dispatch('addFile',res).then(function(res){// strong check if res is false, otherwise res can be empty
if(res===false){return false;}return true;});})["catch"](function(err){context.commit('FETCH_URL_DONE');context.dispatch('showNotification',err);});}};var getters$4={isUrlFetching:function isUrlFetching(st){return st.isFetching;}};var urlSource={state:{isFetching:false},mutations:mutations$4,actions:actions$4,getters:getters$4};var mutations$5={// this loader indicates request in progress
SET_IS_LOADING:function SET_IS_LOADING(state,isLoading){Vue.set(state,'isLoading',isLoading);},// finished is flag used for first load list
SET_SEARCH_FINISHED:function SET_SEARCH_FINISHED(state,isFinished){Vue.set(state,'finished',isFinished);},SET_SEARCH_WORD:function SET_SEARCH_WORD(state,word){Vue.set(state,'searchWord',word);},// cleanup and set new search results
SET_SEARCH_RESULTS:function SET_SEARCH_RESULTS(state,data){data.map(function(el){return Object.assign(el,{source:'unsplash',sourceKind:'cloud'});});Vue.set(state,'results',data);},// add search from load more results
ADD_SEARCH_RESULTS:function ADD_SEARCH_RESULTS(state,data){data.map(function(el){return Object.assign(el,{source:'unsplash',sourceKind:'cloud'});});Vue.set(state,'results',[].concat(_toConsumableArray(state.results),_toConsumableArray(data)));},SET_NEXT_PAGE:function SET_NEXT_PAGE(state,next){Vue.set(state,'next',next);},RESET:function RESET(state){Vue.set(state,'results',[]);Vue.set(state,'searchWord','');Vue.set(state,'error',null);Vue.set(state,'next',0);Vue.set(state,'finished',false);Vue.set(state,'isLoading',false);Vue.set(state,'started',false);},SET_SCROLL_STATE:function SET_SCROLL_STATE(state,hasScroll){Vue.set(state,'hasScroll',hasScroll);}};var actions$5={search:function search(_ref57){var _this34=this;var state=_ref57.state,commit=_ref57.commit,rootGetters=_ref57.rootGetters,dispatch=_ref57.dispatch;commit('SET_NEXT_PAGE',0);commit('SET_SEARCH_FINISHED',false);commit('SET_IS_LOADING',true);rootGetters.cloudClient.list({unsplash:{path:"/".concat(state.searchWord,"/")}}).then(function(res){commit('SET_IS_LOADING',false);var result=res.unsplash;if(result&&result.error){_this34.dispatch('showNotification',result.error.text);commit('SET_SEARCH_FINISHED',true);return;}if(result&&result.contents&&result.contents.length===0){_this34.dispatch('showNotification',['No search results found for "{search}"',{search:state.searchWord}]);return;}commit('SET_SEARCH_FINISHED',true);commit('SET_NEXT_PAGE',result.next);commit('SET_SEARCH_RESULTS',result.contents);Vue.nextTick(function(){if(!state.hasScroll&&result.next){dispatch('loadMore');}});})["catch"](function(err){console.error(err);commit('SET_IS_LOADING',false);commit('SET_SEARCH_FINISHED',true);_this34.dispatch('showNotification','Cannot load more resources. Server error.');});},loadMore:function loadMore(_ref58){var _this35=this;var state=_ref58.state,commit=_ref58.commit,rootGetters=_ref58.rootGetters,dispatch=_ref58.dispatch;if(!state.next||state.next===''){return;}commit('SET_IS_LOADING',true);rootGetters.cloudClient.list({unsplash:{path:"/".concat(state.searchWord,"/"),next:state.next}}).then(function(res){commit('SET_IS_LOADING',false);var result=res.unsplash;if(result&&result.error){_this35.dispatch('showNotification',result.error.text);return;}commit('SET_NEXT_PAGE',result.next);commit('ADD_SEARCH_RESULTS',result.contents);Vue.nextTick(function(){if(!state.hasScroll&&result.next){dispatch('loadMore');}});})["catch"](function(err){console.error(err);commit('SET_IS_LOADING',false);_this35.dispatch('showNotification','Cannot load more resources. Server error.');});}};var getters$5={searchWord:function searchWord(st){return st.searchWord;},isFinished:function isFinished(st){return st.finished;},isLoading:function isLoading(st){return st.isLoading;},results:function results(st){return st.results;},isError:function isError(st){return!!st.error;},error:function error(st){return st.error;}};var unsplash={state:{hasScroll:false,searchWord:'',isLoading:false,results:[],finished:false,error:null,next:0},mutations:mutations$5,actions:actions$5,getters:getters$5,namespaced:true};var actions$6={fetchCustomUrl:function fetchCustomUrl(context,_ref59){var url=_ref59.url,headers=_ref59.headers,sourceName=_ref59.sourceName;return context.getters.cloudClient.metadata(url,headers).then(function(res){if(res.error){return context.dispatch('showNotification',res.error);}res.headers=headers;res.sourceName=sourceName;return context.dispatch('addFile',res).then(function(){return true;});})["catch"](function(){context.dispatch('showNotification','Error fetching URL metadata.');});},fetchMetadata:function fetchMetadata(context,_ref60){var url=_ref60.url,headers=_ref60.headers;return context.getters.cloudClient.metadata(url,headers).then(function(res){if(res.error){return context.dispatch('showNotification',res.error);}res.headers=headers;return res;})["catch"](function(){context.dispatch('showNotification','Error fetching URL metadata.');});}};var customSource={state:{},actions:actions$6};var initialState$3={sourcesList:[{name:'local_file_system',label:'My Device',ui:'local'},{name:'webcam',label:'Take Photo',ui:'webcam'},{name:'video',label:'Record Video',ui:'opentok'},{name:'audio',label:'Record Audio',ui:'opentok'},{name:'customsource',label:'Custom Source',ui:'cloud',layout:'list'},{name:'dropbox',label:'Dropbox',ui:'cloud',layout:'list'},{name:'facebook',label:'Facebook',ui:'cloud',layout:'hybrid'},{name:'instagram',label:'Instagram',ui:'cloud',layout:'grid'},{name:'box',label:'Box',ui:'cloud',layout:'list'},{name:'googledrive',label:'Google Drive',ui:'cloud',layout:'list'},{name:'github',label:'Github',ui:'cloud',layout:'list'},{name:'gmail',label:'Gmail',ui:'cloud',layout:'list'},{name:'picasa',label:'Google Photos',ui:'cloud',layout:'hybrid'},{name:'googlephotos',label:'Google Photos',ui:'cloud',layout:'hybrid'},{name:'onedrive',label:'OneDrive',ui:'cloud',layout:'list'},{name:'onedriveforbusiness',label:'OneDrive Business',ui:'cloud',layout:'list'},{name:'clouddrive',label:'Cloud Drive',ui:'cloud',layout:'list',deprecated:true},{name:'imagesearch',label:'Web Search',ui:'imagesearch'},{name:'unsplash',label:'Unsplash',ui:'unsplash'},{name:'url',label:'Link (URL)',ui:'url'},{name:'tint',label:'TINT',ui:'cloud'}],sources:[]};var mutations$6={SET_SOURCE_STATUS:function SET_SOURCE_STATUS(_ref61,_ref62){var st=_ref61.st;var name=_ref62.name,status=_ref62.status;var source=st.sources.find(function(el){return el.name===name;});source.status=status;},UPDATE_SOURCES_LIST:function UPDATE_SOURCES_LIST(st,list){var newSources=st.sources.filter(function(source){if(source.isCustom){return true;}return list.indexOf(source.name)>-1;});Vue.set(st,'sources',newSources);}};var actions$7={};var getters$6={fromSources:function fromSources(st){return st.sources;},cloudSources:function cloudSources(st){return st.sources.filter(function(s){return s.ui==='cloud'&&!s.deprecated;});},getSourceByName:function getSourceByName(st){return function(name){var definition;st.sources.forEach(function(sourceDefinition){if(sourceDefinition.name===name){definition=sourceDefinition;}});if(!definition){throw new Error("Unknown source \"".concat(name,"\""));}if(definition.deprecated){console.warn("Source ".concat(definition.name," is deprecated"));}return definition;};}};var initSourceStore=function initSourceStore(fromSources){initialState$3.sources=[];fromSources.forEach(function(source){if(typeof source==='string'){initialState$3.sources.push(initialState$3.sourcesList.find(function(el){return el.name===source;}));}else if(_typeof2(source)==='object'&&source.name==='globalsearch'){var sourceObj=_objectSpread({},source,{ui:'custom',isCustom:true});if(source.name==='globalsearch'){sourceObj.label='Global Search';}initialState$3.sources.push(sourceObj);}else if(_typeof2(source)==='object'){initialState$3.sources.push(_objectSpread({},source,{ui:'custom',isCustom:true}));}else{console.warn('Unknown source',source);}});return{state:initialState$3,mutations:mutations$6,actions:actions$7,getters:getters$6};};var lodash_clonedeep=createCommonjsModule(function(module,exports){/**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ /** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=_typeof2(commonjsGlobal)=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof2(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&'object'=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */function getValue(object,key){return object==null?undefined:object[key];}/**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol2=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol2?_Symbol2.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */function listCacheClear(){this.__data__=[];}/**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */function Stack(entries){this.__data__=new ListCache(entries);}/**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */function stackClear(){this.__data__=new ListCache();}/**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */function stackDelete(key){return this.__data__['delete'](key);}/**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */function stackGet(key){return this.__data__.get(key);}/**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function stackHas(key){return this.__data__.has(key);}/**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @param {boolean} [isFull] Specify a clone including symbols.
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
   * The base implementation of `getTag`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */function baseGetTag(value){return objectToString.call(value);}/**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
   * Creates a clone of `map`.
   *
   * @private
   * @param {Object} map The map to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned map.
   */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
   * Creates a clone of `set`.
   *
   * @private
   * @param {Object} set The set to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned set.
   */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
   * Copies own symbol properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
   * Creates an array of the own enumerable symbol properties of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */function isKeyable(value){var type=_typeof2(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */function cloneDeep(value){return baseClone(value,true,true);}/**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */function eq(value,other){return value===other||value!==value&&other!==other;}/**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */var isArray=Array.isArray;/**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */var isBuffer=nativeIsBuffer||stubFalse;/**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */function isObject(value){var type=_typeof2(value);return!!value&&(type=='object'||type=='function');}/**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */function isObjectLike(value){return!!value&&_typeof2(value)=='object';}/**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */function stubArray(){return[];}/**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */function stubFalse(){return false;}module.exports=cloneDeep;});var log$2=logger.context('picker');Vue.use(index_esm);var hasFalseyValues=function hasFalseyValues(obj){var result=true;Object.keys(obj).forEach(function(key){if(obj[key]){result=false;}});return result;};var compareArr=function compareArr(array1,array2){return array1.length===array2.length&&array1.every(function(value,index){return value===array2[index];});};var createStore=function createStore(apiClient,rawConfig,onPickerDone,onPickerCancel,initialState){var cloudClient=apiClient.cloud;var parsedConfig=parseConfig(addConfigDefaults(rawConfig,ENV));initialState=_objectSpread({},initialState,{apiClient:apiClient,modules:{'fs-cropper':ENV.vendor.cropper,'fs-fabric':ENV.vendor.fabric,'fs-opentok':ENV.vendor.opentok,'fs-pica':ENV.vendor.pica},cloudClient:cloudClient,config:parsedConfig,isHovered:false,rawConfig:rawConfig,viewType:null,route:[],routesHistory:[],whitelabel:false,blobURLs:{},blocked:false,prefetched:false,supportEmail:'',mobileNavActive:false,hideSidebar:false,selectLabelIsActive:false});return new index_esm.Store({state:initialState,modules:lodash_clonedeep({uploadQueue:uploadQueue(apiClient,initialState.uploadQueue),sources:initSourceStore(Object.assign([],parsedConfig.fromSources)),customSource:customSource,cloudStore:cloudStore,imageSearch:imageSearch,urlSource:urlSource,unsplash:unsplash,notifications:notifications,network:network}),mutations:{SET_PREFETCH:function SET_PREFETCH(state,data){Vue.set(state,'blocked',data.blocked);if(data.pickerOptions){Vue.set(state,'config',parseConfig(addConfigDefaults(data.pickerOptions,ENV)));}if(data.permissions){Vue.set(state,'whitelabel',data.permissions.whitelabel||false);Vue.set(state,'intelligent',data.permissions.intelligent_ingestion||false);}},CHANGE_ROUTE:function CHANGE_ROUTE(state,newRoute){log$2("Change route from ".concat(JSON.stringify(this.state.route)," to ").concat(JSON.stringify(newRoute)));if(compareArr(this.state.route,newRoute)){return;}state.routesHistory.push(state.route);state.route=newRoute;state.mobileNavActive=false;},GO_BACK_WITH_ROUTE:function GO_BACK_WITH_ROUTE(state){var lastRoute=state.routesHistory.pop();if(lastRoute){state.route=lastRoute;}},GO_BACK_WITH_ROUTE_CURRENT_TYPE:function GO_BACK_WITH_ROUTE_CURRENT_TYPE(state){var history=state.routesHistory.reverse();var toTest=this.state.route.join('/');var foundIdx=arrayFindIndex(history,function(el){if(el.join('/')!==toTest){return toTest.indexOf(el.join('/'))===0;}return false;});if(foundIdx>-1){history.splice(0,foundIdx);}history=history.reverse();var lastRoute=history.pop();if(lastRoute){state.route=lastRoute;}},PREFETCH_DONE:function PREFETCH_DONE(state){state.prefetched=true;},REMOVE_SOURCE_FROM_ROUTES:function REMOVE_SOURCE_FROM_ROUTES(state,name){state.routesHistory=state.routesHistory.filter(function(route){return route[1]&&route[1]!==name;});},SET_BLOB_URL:function SET_BLOB_URL(state,_ref63){var uuid=_ref63.uuid,url=_ref63.url;state.blobURLs[uuid]=url;},REMOVE_BLOB_URL:function REMOVE_BLOB_URL(state,uuid){Vue["delete"](state.blobURLs,uuid);},UPDATE_MOBILE_NAV_ACTIVE:function UPDATE_MOBILE_NAV_ACTIVE(state,isActive){state.mobileNavActive=isActive;},UPDATE_SELECT_LABEL_ACTIVE:function UPDATE_SELECT_LABEL_ACTIVE(state,isActive){state.selectLabelIsActive=isActive;},SET_VIEW_TYPE:function SET_VIEW_TYPE(state,type){if(['list','grid'].indexOf(type)===-1){throw new Error("View type ".concat(type," is not supported. Supported types: grid, list"));}state.viewType=type;},SET_HOVER:function SET_HOVER(state,isHovered){state.isHovered=isHovered;}},actions:{initRoute:function initRoute(_ref64){var state=_ref64.state,rootGetters=_ref64.rootGetters;var sources=rootGetters.fromSources;var source=sources[0];var newRoute=source?['source',source.name]:[];state.route=newRoute;state.routesHistory.push(state.route);if(sources.length===1){state.hideSidebar=true;}else{state.hideSidebar=false;}},setViewType:function setViewType(_ref65,type){var commit=_ref65.commit;commit('SET_VIEW_TYPE',type);},prefetch:function prefetch(_ref66){var state=_ref66.state,commit=_ref66.commit;var cfg=state.rawConfig;// filter out all custom sources
cfg.fromSources=cfg.fromSources.filter(function(source){return typeof source==='string';});return state.apiClient.prefetch({events:['picker'],permissions:['whitelabel','intelligent_ingestion'],pickerOptions:state.rawConfig}).then(function(resp){commit('SET_PREFETCH',resp);commit('PREFETCH_DONE');if(resp&&resp.pickerOptions&&resp.pickerOptions.fromSources){commit('UPDATE_SOURCES_LIST',resp.pickerOptions.fromSources);}return resp;});},allUploadsDone:function allUploadsDone(context){var filesUploaded=convertFileListForOutsideWorld(context.getters.filesDone,context.getters);var filesFailed=convertFileListForOutsideWorld(context.getters.filesFailed,context.getters);var hasDropPane=context.getters.dropPane;var isInlineDisplay=context.getters.isInlineDisplay;if(hasDropPane&&context.getters.dropPane.onSuccess){context.getters.dropPane.onSuccess(filesUploaded);}if(hasDropPane&&context.getters.dropPane.onError){context.getters.dropPane.onError(filesFailed);}context.dispatch('removeNetworkListeners');if(hasDropPane||isInlineDisplay){setTimeout(function(){context.commit('SET_UPLOAD_STARTED',false);context.commit('CLEAR_FILES');},1000);}try{onPickerDone({filesUploaded:filesUploaded,filesFailed:filesFailed});}catch(e){console.error(e);}},cancelPick:function cancelPick(_ref67){var dispatch=_ref67.dispatch,_ref67$getters=_ref67.getters,filesList=_ref67$getters.filesList,exposeOriginalFile=_ref67$getters.exposeOriginalFile;dispatch('cancelAllUploads');dispatch('removeNetworkListeners');if(onPickerCancel){onPickerCancel(convertFileListForOutsideWorld(filesList,{exposeOriginalFile:exposeOriginalFile}));}},updateMobileNavActive:function updateMobileNavActive(context,isActive){context.commit('UPDATE_MOBILE_NAV_ACTIVE',isActive);if(context.rootGetters.fromSources.length===1){context.state.hideSidebar=!isActive;}},updateSelectLabelActive:function updateSelectLabelActive(context,isActive){context.commit('UPDATE_SELECT_LABEL_ACTIVE',isActive);}},getters:{// Users can toggle modal visibility during upload
uiVisible:function uiVisible(st,getters){if(st.config.displayMode===DISPLAY_MODE_OVERLAY&&getters.uploadStarted&&st.config.hideModalWhenUploading){return false;}return true;},// Clients and base config
apiClient:function apiClient(st){return st.apiClient;},cloudClient:function cloudClient(st){return st.cloudClient;},config:function config(st){return st.config;},rawConfig:function rawConfig(st){return st.rawConfig;},blocked:function blocked(st){return st.blocked;},intelligent:function intelligent(st){return st.intelligent;},supportEmail:function supportEmail(st){return st.supportEmail;},// Derived state
blobURLs:function blobURLs(st){return st.blobURLs;},isInlineDisplay:function isInlineDisplay(st){return st.config.displayMode===DISPLAY_MODE_INLINE;},isSidebarHidden:function isSidebarHidden(st){return st.hideSidebar;},mobileNavActive:function mobileNavActive(st){return st.mobileNavActive;},prefetched:function prefetched(st){return st.prefetched;},route:function route(st){return st.route;},whitelabel:function whitelabel(st){return st.whitelabel;},routesHistory:function routesHistory(st){return st.routesHistory;},selectLabelIsActive:function selectLabelIsActive(st){return st.selectLabelIsActive;},// Options
accept:function accept(st){return st.config.accept;},acceptFn:function acceptFn(st){return st.config.acceptFn;},acceptMime:function acceptMime(st){var fn=st.apiClient.utils.extensionToMime;if(!st.config.accept||!st.config.accept.length){return[];}var toReturn=[];st.config.accept.forEach(function(el){return toReturn.push(fn(el));});return toReturn.filter(function(v,i,a){return a.indexOf(v)===i;});},viewType:function viewType(st){if(st.viewType){return st.viewType;}var vt=st.config.viewType;st.viewType=vt;return vt;},allowManualRetry:function allowManualRetry(st){return st.config.allowManualRetry;},concurrency:function concurrency(st){return st.config.concurrency;},container:function container(st){return st.config.container;},cropAspectRatio:function cropAspectRatio(st){return st.config.transformations.crop&&st.config.transformations.crop.aspectRatio||NaN;},cropFiles:function cropFiles(st){return st.config.cropFiles;},cropForce:function cropForce(st){return st.config.transformations.crop&&st.config.transformations.crop.force||st.config.transformations&&st.config.transformations.force;},customSourceContainer:function customSourceContainer(st){return st.config.customSourceContainer;},customSourcePath:function customSourcePath(st){return st.config.customSourcePath;},customSourceName:function customSourceName(st){return st.config.customSourceName;},// get custom source defined by user
getCustomSourceByName:function getCustomSourceByName(st){return function(name){return st.config.fromSources.find(function(s){return s.name===name;});};},customText:function customText(st){return st.config.customText;},disableStorageKey:function disableStorageKey(st){return st.config.disableStorageKey;},disableThumbnails:function disableThumbnails(st){return st.config.disableThumbnails;},errorsTimeout:function errorsTimeout(st){return st.config.errorsTimeout;},disableTransformer:function disableTransformer(st){return st.config.disableTransformer||hasFalseyValues(st.config.transformations);},dropPane:function dropPane(st){return st.config.dropPane;},exposeOriginalFile:function exposeOriginalFile(st){return st.config.exposeOriginalFile;},globalDropZone:function globalDropZone(st){return st.config.globalDropZone;},imageMin:function imageMin(st){return st.config.imageMin;},imageMax:function imageMax(st){return st.config.imageMax;},imageDim:function imageDim(st){return st.config.imageDim;},imageMinMaxBlock:function imageMinMaxBlock(st){return st.config.imageMinMaxBlock;},lang:function lang(st){return st.config.lang;},maxFiles:function maxFiles(st){return st.config.maxFiles;},failOverMaxFiles:function failOverMaxFiles(st){return st.config.failOverMaxFiles;},maxSize:function maxSize(st){return st.config.maxSize;},minFiles:function minFiles(st){return st.config.minFiles;},modalSize:function modalSize(st){return st.config.modalSize;},onClose:function onClose(st){return st.config.onClose;},onFileSelected:function onFileSelected(st){return st.config.onFileSelected;},onFileUploadCancel:function onFileUploadCancel(st){return st.config.onFileUploadCancel;},onFileUploadStarted:function onFileUploadStarted(st){return st.config.onFileUploadStarted;},onFileCropped:function onFileCropped(st){return st.config.onFileCropped;},onFileUploadProgress:function onFileUploadProgress(st){return st.config.onFileUploadProgress;},onFileUploadFinished:function onFileUploadFinished(st){return st.config.onFileUploadFinished;},onFileUploadFailed:function onFileUploadFailed(st){return st.config.onFileUploadFailed;},onOpen:function onOpen(st){return st.config.onOpen;},onUploadStarted:function onUploadStarted(st){return st.config.onUploadStarted;},rootId:function rootId(st){return st.config.rootId;},startUploadingWhenMaxFilesReached:function startUploadingWhenMaxFilesReached(st){return st.config.startUploadingWhenMaxFilesReached;},storeTo:function storeTo(st){return st.config.storeTo;},transformations:function transformations(st){return st.config.transformations;},uploadConfig:function uploadConfig(st){return st.config.uploadConfig;},uploadTags:function uploadTags(st){return st.config.uploadConfig?st.config.uploadConfig.tags:undefined;},uploadInBackground:function uploadInBackground(st){if(!st.config.uploadInBackground){return false;}if(st.config.disableTransformer||st.config.transformations&&!st.config.transformations.crop&&!st.config.transformations.circle&&!st.config.transformations.rotate){return st.config.uploadInBackground;}console.warn('Upload in background can be enabled only when cropper is disabled');return false;},videoResolution:function videoResolution(st){return st.config.videoResolution;},removeExif:function removeExif(st){return st.config.cleanupImageExif;},getModuleUrl:function getModuleUrl(st){return function(moduleName){var path=st.modules[moduleName];var cname=st.apiClient.session.cname;if(cname){path=path.replace('filestackapi.com',cname);}return path;};},isHovered:function isHovered(st){return st.isHovered;},// Paste mode behaviour
pasteMode:function pasteMode(st){return st.config.pasteMode;}}});};var log$3=logger.context('picker');/**
   * @module pick
   */ /**
   * The metadata available on uploaded files returned from pick.
   * @typedef {object} FileMetadata
   * @property {string} filename - Name of the file.
   * @property {string} handle - Filestack handle for the uploaded file.
   * @property {string} mimetype - The MIME type of the file.
   * @property {string} originalPath - The origin of the file, e.g. /Folder/file.jpg.
   * @property {number} size - Size in bytes of the uploaded file.
   * @property {string} source - The source from where the file was picked.
   * @property {string} url - The Filestack CDN URL for the uploaded file.
   * @property {object|undefined} originalFile - Properties of the local binary file.
   * @property {string|undefined} status - Indicates Filestack transit status.
   * @property {string|undefined} key - The hash-prefixed path for files stored in S3.
   * @property {string|undefined} container - The S3 container for the uploaded file.
   * @property {string} uploadId - A uuid for tracking this file in callbacks.
   * @property {object} cropped - An object containing crop position, size, and the original image size
   * @property {object} rotated - An object containing rotation direction and value
   */ /**
   * @callback onFileSelected
   * @param file {object} - File metadata.
   * @example
   *
   * // Using to veto file selection
   * // If you throw any error in this function it will reject the file selection.
   * // The error message will be displayed to the user as an alert.
   * onFileSelected(file) {
   *   if (file.size > 1000 * 1000) {
   *     throw new Error('File too big, select something smaller than 1MB');
   *   }
   * }
   *
   * // Using to change selected file name
   * // (NOTE: currently only works for local and transformed files, no cloud support yet)
   * onFileSelected(file) {
   *   file.name = 'foo';
   *   // It's important to return altered file by the end of this function.
   *   return file;
   * }
   */ /**
   * @callback onUploadStarted
   * @param files {array} - All currently selected files.
   */ /**
   * @callback onFileUploadStarted
   * @param file {object} - File metadata.
   */ /**
   * @callback onFileUploadFinished
   * @param file {object} - File metadata.
   */ /**
   * @callback onFileUploadFailed
   * @param file {object} - File metadata.
   * @param error {error} - Error instance for this upload.
   */ /**
   * @callback onFileUploadProgress
   * @param file {object} - File metadata.
   * @param event {object} - Progress event.
   * @param event.totalPercent {number} - Percent of file uploaded.
   * @param event.totalBytes {number} - Total number of bytes uploaded for this file.
   */ /**
   * Opens the picker UI.
   * @alias module:pick
   * @param [options] {object}
   * @param options.rootId=__filestack-picker {string} - Set id for Vue application mount point
   * @param options.displayMode=overlay {'inline' | 'overlay' | 'dropPane'}- set display mode for picker
   * @param options.container=document.body {string | querySelector | Node} - Picker mount point. Default value is set only in 'overlay' mode
   * @param options.fromSources {string[]} - Valid sources are:
        - `local_file_system` - __Default__
        - `url` - __Default__
        - `imagesearch` - __Default__
        - `facebook` - __Default__
        - `instagram` - __Default__
        - `googledrive` - __Default__
        - `dropbox` - __Default__
        - `video` - Desktop only. Not currently supported in Safari and IE.
        - `audio` - Desktop only. Not currently supported in Safari and IE.
        - `webcam` - Desktop only. Not currently supported in Safari and IE.
        - `evernote`
        - `flickr`
        - `box`
        - `github`
        - `gmail`
        - `googlephotos`
        - `onedrive`
        - `onedriveforbusiness`
        - `customsource` - Configure this in your application settings.
   * @param options.accept {string|string[]} - Restrict file types that are allowed to be picked. Formats accepted:
        - `.pdf` <- any file extension
        - '' <- no extension (not supported in local file source)
        - `image/jpeg` <- any mime type commonly known by browsers
        - `image/*` <- accept all types of images
        - `video/*` <- accept all types of video files
        - `audio/*` <- accept all types of audio files
        - `application/*` <- accept all types of application files
        - `text/*` <- accept all types of text files

   * @param options.showSupportEmail {string} - Show your support email.
   * @param options.customSourceContainer {string} - Set the default container for your custom source.
   * @param options.customSourcePath {string} - Set the default path for your custom source container.
   * @param options.concurrency=4 {number} - Max number of files to upload concurrently.
   * @param options.lang=en {string} - Sets locale. Accepts: `ca`, `da`, `de`, `en`, `es`, `fr`, `he`, `it`, `ja`, `ko`, `nl`, `no`, `pl`, `pt`, `sv`, `ru`, `vi`, `zh`.
   * @param options.minFiles=1 {number} - Minimum number of files required to start uploading.
   * @param options.maxFiles=1 {number} - Maximum number of files allowed to upload.
   * @param options.maxSize {number} - Restrict selected files to a maximum number of bytes. (e.g. `10 * 1024 * 1024` for 10MB limit).
   * @param options.startUploadingWhenMaxFilesReached=false {boolean} - Whether to start uploading automatically when maxFiles is hit.
   * @param options.hideWhenUploading=false {boolean} - Hide the picker UI once uploading begins.
   * @param options.uploadInBackground=true {boolean} - Start uploading immediately on file selection.
   * @param options.disableStorageKey=false {boolean} - When true removes the hash prefix on stored files.
   * @param options.disableTransformer=false {boolean} - When true removes ability to edit images.
   * @param options.disableThumbnails=false {boolean} - Disables local image thumbnail previews in the summary screen.
   * @param options.videoResolution=640x480 {string} - Sets the resolution of recorded video. One of "320x240", "640x480" or "1280x720".
   * @param options.transformations {object} - Specify options for images passed to the crop UI.
   * @param options.transformations.crop=true {boolean|object} - Enable crop.
   * @param options.transformations.crop.aspectRatio {number} - Maintain aspect ratio for crop selection. (e.g. 16/9 or 4/3)
   * @param options.transformations.crop.force {boolean} - Force all images to be cropped before uploading.
   * @param options.transformations.circle=true {boolean} - Enable circle crop. __Disabled if `crop.aspectRatio` is defined and not 1. Converts to PNG.__
   * @param options.transformations.rotate=true {boolean} - Enable image rotation.
   * @param options.imageDim {number[]} - Specify image dimensions. e.g. `[800, 600]`. Only for JPEG, PNG, and BMP files.
    Local and cropped images will be resized (upscaled or downscaled) to the specified dimensions before uploading.
    The original height to width ratio is maintained. To resize all images based on the width, set [width, null], e.g. [800, null].
    For the height set [null, height], e.g. [null, 600].
   * @param options.imageMax {number[]} - Specify maximum image dimensions. e.g. `[800, 600]`. Only for JPEG, PNG, and BMP files.
    Images bigger than the specified dimensions will be resized to the maximum size while maintaining the original aspect ratio.
    The output will not be exactly 800x600 unless the imageMax matches the aspect ratio of the original image.
   * @param options.imageMin {number[]} - Specify minimum image dimensions. e.g. `[800, 600]`. Only for JPEG, PNG, and BMP files.
    Images smaller than the specified dimensions will be upscaled to the minimum size while maintaining the original aspect ratio.
    The output will not be exactly 800x600 unless the imageMin matches the aspect ratio of the original image.
   * @param options.uploadConfig {object} - Options for local file uploads.
   * @param options.uploadConfig.partSize=6291456 {number} - Size of each uploaded part (defaults to 6MB). This is overridden when intelligent ingestion is enabled.
   * @param options.uploadConfig.concurrency=3 {number} - Max number of concurrent parts uploading (chunks of files, not whole files).
   * @param options.uploadConfig.intelligent {boolean|string} - Enable/disable intelligent ingestion. If truthy then intelligent ingestion must be enabled in your Filestack application. Passing true/false toggles the global intelligent flow (all parts are chunked and committed). Passing `'fallback'` will only use FII when network conditions may require it (only failing parts will be chunked).
   * @param options.uploadConfig.intelligentChunkSize {number} - Set the default chunk size for intelligent part uploads. Defaults to 8MB on desktop, 1MB on mobile.
   * @param options.uploadConfig.retry=10 {number} - Number of times to retry a failed part of the flow.
   * @param options.uploadConfig.retryFactor=2 {number} - Base factor for exponential backoff.
   * @param options.uploadConfig.timeout=120000 {number} - Time in milliseconds to wait before cancelling requests.
   * @param options.uploadConfig.onRetry {module:filestack~retryCallback} - Called when a retry is initiated.
   * @param options.storeTo {object} - Options for file storage.
   * @param options.storeTo.location {string} - One of `s3`, `gcs`, `rackspace`, `azure`, `dropbox`.
   * @param options.storeTo.region {string} - Valid S3 region for the selected S3 bucket. __S3 only__.
   * @param options.storeTo.container {string}
   * @param options.storeTo.path {string}
   * @param options.storeTo.access {string} - One of `public` or `private`.
   * @param options.onFileSelected {module:pick~onFileSelected} - Called whenever user selects a file.
   * @param options.onFileUploadCancel {module:pick~onFileUploadCancel} - Called when a file is being canceled.
   * @param options.onFileUploadStarted {module:pick~onFileUploadStarted} - Called when a file begins uploading.
   * @param options.onFileUploadProgress {module:pick~onFileUploadProgress} - Called during multi-part upload progress events. __Local files only__.
   * @param options.onFileUploadFinished {module:pick~onFileUploadFinished} - Called when a file is done uploading.
   * @param options.onFileUploadFailed {module:pick~onFileUploadFailed} - Called when uploading a file fails.
   * @param options.onUploadStarted {module:pick~onUploadStarted} - Called when uploading starts (user initiates uploading).
   * @param options.onOpen {function} - Called when the UI is mounted. As a first argument application component is passed
   * @param options.onCancel {function} - Called when uploads are canceled by user. As a first argument all selected files are passed
   * @param options.onClose {function} - Called after the picker instance is destroyed
   * @param options.onUploadDone {function} - Called when all uploads are finished
   * @param options.allowManualRetry=false {boolean} - Prevent modal close on upload failure and allow users to retry.
   * @param options.globalDropZone {boolean} - Toggle the drop zone to be active on all views. Default is active only on local file source.
   * @param options.exposeOriginalFile {boolean} - When true the originalFile metadata will be the actual File object instead of a POJO.
   * @param options.modalSize {number[]} - Specify [width, height] in pixels of the desktop modal.
   * @param options.dropPane {object} - Configure the picker for drop pane mode.
   * @param options.dropPane.id {string | querySelector} - @deprecated (use {container: 'ID', displayMode: 'dropPane'})  __Required__: Id for the DOM node that will mount the drop pane.
   * @param options.dropPane.overlay=true {boolean} - Toggle the full-page drop zone overlay.
   * @param options.dropPane.onDragEnter {function} - Callback for dragenter events.
   * @param options.dropPane.onDragLeave {function} - Callback for dragleave events.
   * @param options.dropPane.onDragOver {function} - Callback for dragover events.
   * @param options.dropPane.onDrop {function} - Callback for drop events.
   * @param options.dropPane.onSuccess {function} - Callback that is passed a list of uploaded file metadata.
   * @param options.dropPane.onError {function} - Callback that is passed a list of failed file metadata.
   * @param options.dropPane.onProgress {function} - Callback that is passed a number representing total progress percent for all dropped files.
   * @param options.dropPane.onClick {function} - Callback for drop pane click event.
   * @param options.dropPane.disableClick {boolean} - Disable click events on drop pane.
   * @param options.dropPane.showIcon=true {boolean} - Toggle icon element in drop pane.
   * @param options.dropPane.showProgress=true {boolean} - Toggle upload progress display.
   * @param options.dropPane.customText {string} - Customize the text content in the drop pane.
   * @param options.dropPane.cropFiles {boolean} - Toggle the crop UI for dropped files.
   * @param options.customAuthText {object} - Customize text on the cloud authentication screen. Use cloud provider name or 'default' to customize text for the all cloud providers.
   * @param options.useSentryBreadcrumbs=true {boolean} - Use sentry breadcrumbs and send additional information about picker errors.
   * @param options.pasteMode {object} - Specify options for copy and paste behaviour
   * @param options.pasteMode.pasteToFirstInViewPort {boolean} - Paste to first picker instance fully visible in viewport
   * @param options.pasteMode.pasteToFirstInstance {boolean} - Paste to first found picker instance
   *
   * @returns {Picker}
   * @example
   * const config = {
   *   onUploadDone: res => console.log(res),
   *   maxFiles: 20,
   * };
   * const picker = new Picker(apiClient, config);
   * picker.open();
   *
   */var Picker=/*#__PURE__*/function(){function Picker(apiClient,pickerConfig){_classCallCheck(this,Picker);log$3('Starting picker v1.26.2 with config:',pickerConfig);this.app=null;this._mutationObserver=null;this.apiClient=apiClient;this.config=parseConfig(addConfigDefaults(pickerConfig,ENV));this.rawConfig=addConfigDefaults(pickerConfig,ENV);this.loadCss=this._loadCssMaybe();/**
       * @Private
       */this._onUploadDone=this.config.onUploadDone;/**
       * @Private
       */this._onOpen=this.config.onOpen;/**
       * @Private
       */this._onCancel=this.config.onCancel;/**
       * @Private
       */this._onClose=this.config.onClose;// initialize vue app and setup container
this._initVue();this._initContainer();this._initMutationObserver();}/**
     * Opens the picker UI
     * @param  {Object} initialStateOverrides
     * @return {Promise<void>} or maybe RxJS subject
     */_createClass(Picker,[{key:"open",value:function open(){var _this36=this;var initialStateOverrides=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(this.app){console.warn('PickerOpen: Picker is already open');return Promise.resolve();}return this.loadCss.then(function(){var onDone=function onDone(res){if(_this36.app){if(_this36.config.displayMode===DISPLAY_MODE_OVERLAY){_this36.close();}}if(_this36._onUploadDone){_this36._onUploadDone(res);}};var onCancel=_this36._onCancel;_this36._createPicker(initialStateOverrides,onDone,onCancel);});}/**
     * Opens the picker UI for cropping files
     * @param  {files} Array of Blobs or URLs
     * @return {void}
     */},{key:"crop",value:function crop(files){if([DISPLAY_MODE_OVERLAY,DISPLAY_MODE_INLINE].indexOf(this.config.displayMode)<0){throw new Error('PickerCrop: you can only use crop in overlay and inline display modes');}var fs;if(typeof files==='string'){fs=[files];}else if(files&&files.length){fs=files;}else{throw new Error('PickerCrop: no files found');}var state={config:_objectSpread({},this.config,{cropFiles:fs,hideModalWhenUploading:true,fromSources:[],uploadInBackground:false,maxFiles:fs.length,startUploadingWhenMaxFilesReached:false,disableTransformer:false,transformations:_objectSpread({},this.config.transformations,{crop:_objectSpread({},this.config.transformations.crop,{force:true})})})};if(this.config.transformations&&typeof this.config.transformations.crop==='boolean'&&!this.config.transformations.crop){delete state.config.transformations.crop;}return this.open(state);}/**
     * Destroy picker instance
     * @return {void}
     */},{key:"close",value:function close(){if(!this.app){return;}this.app.$root.$destroy();this.app=null;}/**
     * Cancels all uploads on picker
     * @return {void}
     */},{key:"cancel",value:function cancel(){if(!this.app){return;}this.app.$store.dispatch('cancelPick');}/**
     * Setup Vue application
     * @private
     * @return {void}
     */},{key:"_initVue",value:function _initVue(){// Vue plugins
// Extend configured language object with customText object
var _this$config=this.config,customText=_this$config.customText,lang=_this$config.lang;var langObj=languages[lang];var extendedLanguages=_objectSpread({},languages,_defineProperty({},lang,_objectSpread({},langObj,{},customText)));Vue.use(VueTranslate);Vue.locales(extendedLanguages);Vue.use(VueSessionStorage);}/**
     * Setup picker container
     * @private
     * @return {void}
     */},{key:"_initContainer",value:function _initContainer(){this._component=this.config.displayMode===DISPLAY_MODE_DROPPANE?__vue_component__$B:__vue_component__$A;this._container=this._getElement(this.config.container,this.config.displayMode===DISPLAY_MODE_OVERLAY)||document.body;}/**
     * If user removes node with app we need to destroy all events connected with it
     * @private
     * @return void
     */},{key:"_initMutationObserver",value:function _initMutationObserver(){var _this37=this;var MutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserve;if(!MutationObserver){return;}this._mutationObserver=new MutationObserver(function(ev){var mutation=ev[0];if(!mutation){return;}if(_this37.app&&mutation.removedNodes.length>0&&([].indexOf.call(mutation.removedNodes,_this37.app.$el)>-1||[].indexOf.call(mutation.removedNodes,_this37._container)>-1)){_this37.app.$root.$destroy();_this37.app=null;}});}/**
     * Create picker application
     * @private
     * @param  {object} initialStateOverrides
     * @param  {function} onDone
     * @param  {function} onCancel
     * @return {void}
     */},{key:"_createPicker",value:function _createPicker(initialStateOverrides,onDone,onCancel){var _this38=this;var t=this;var rawConfig=Object.assign({},this.rawConfig,initialStateOverrides.config);var noScroll=rawConfig.displayMode===DISPLAY_MODE_OVERLAY;var root=document.createElement('div');if(document.getElementById(rawConfig.rootId)){console.warn('Picker Create: Application mount point already exists');return t.app;}this._container.appendChild(root);return new Vue({el:root,store:createStore(this.apiClient,rawConfig,onDone,onCancel,initialStateOverrides),render:function render(h){return h(_this38._component);},created:function created(){t.app=this;t._registerPickerInstance(this);if(noScroll){document.body.classList.add('fsp-picker--no-scroll');}this.$translate.setLang(rawConfig.lang);if(t._mutationObserver){t._mutationObserver.observe(t._container.parentNode,{childList:true});}if(t._onOpen){t._onOpen(t);}},destroyed:function destroyed(){if(t._mutationObserver){t._mutationObserver.disconnect();}document.body.classList.remove('fsp-picker--no-scroll');t._unregisterPickerInstance(t.app);var el=this.$el;if(el&&el.parentNode){el.parentNode.removeChild(el);}if(t._onClose){t._onClose();}// Clean up vuex
this.$store.commit('RESET_CLOUD');this.$store.commit('CLEAR_FILES');t.app=null;}});}/**
     * returns HtmlNode with given selector or undefined if not found when doNotThrow is enabled
     *
     * @param {string | Node} el
     * @param {boolean} doNotThrow
     * @private
     */},{key:"_getElement",value:function _getElement(el,doNotThrow){var toReturn;if(!el&&!doNotThrow){throw new Error('Filestack Picker Initialize: Container is not defined');}if(typeof el==='string'){if(el.indexOf('.')!==0&&el.indexOf('#')!==0){el="#".concat(el);}toReturn=document.querySelector(el);}else{toReturn=document.body.contains(el)?el:false;}if(!toReturn&&!doNotThrow){throw new Error("Filestack Picker Initialize: Container with - ".concat(el," not found in document"));}return toReturn;}/**
     * Load additional css file and add it to picker
     *
     * @private
     * @return {Promise}
     */},{key:"_loadCssMaybe",value:function _loadCssMaybe(){if(this.config.loadCss===false){return Promise.resolve();}// Apply modal size style
if(this.config.modalSize){var _style=document.createElement('style');_style.innerHTML="\n        @media screen and (min-width: 980px) {\n          .fsp-picker .fsp-modal {\n            width: ".concat(this.config.modalSize[0],"px !important;\n            height: ").concat(this.config.modalSize[1],"px !important;\n          }\n        }\n      ").trim();document.head.appendChild(_style);}var url=this.config.loadCss;var cname=this.apiClient.session.cname;// if there is any cname configured - replace filestack domain with cname and load static from that cname
if(cname&&cname.length){url=url.replace('filestackapi.com',cname);}return _FilestackLoader$loadCss(url);}/**
     * Register (add) current picker instance to window (for paste handling)
     * @private
     * @param { object } VueApp instance
     */ /* eslint-disable class-methods-use-this */},{key:"_registerPickerInstance",value:function _registerPickerInstance(app){if(!window.filestackInternals){window.filestackInternals={};}if(!window.filestackInternals.enabledPickerInstances){window.filestackInternals.enabledPickerInstances=[];}window.filestackInternals.enabledPickerInstances.push(app);}/**
     * Remove current picker instance from window
     * @private
     * @param { object } VueApp instance
     */ /* eslint-disable class-methods-use-this */},{key:"_unregisterPickerInstance",value:function _unregisterPickerInstance(app){var pickerInstances=window.filestackInternals.enabledPickerInstances;if(pickerInstances.length){window.filestackInternals.enabledPickerInstances=pickerInstances.filter(function(instance){return instance!==app;});}}}]);return Picker;}();_FilestackLoader$registerModule(_FilestackLoader$FILESTACK_MODULES.PICKER,Picker,{version:'v1.26.2'});return Picker;}();