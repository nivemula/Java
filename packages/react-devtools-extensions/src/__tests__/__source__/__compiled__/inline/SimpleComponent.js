"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Component;var _jsxRuntime=require("react/jsx-runtime"),_react=_interopRequireWildcard(require("react"));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function Component({foo:a}){const b=(0,_react.useMemo)(()=>({foo:a}),[a]);(0,_react.useEffect)(()=>{// Not named
});const c=useCustomHook();return/*#__PURE__*/(0,_jsxRuntime.jsx)("div",{children:b+c})}function useCustomHook(){const[a]=(0,_react.useState)(!0);return a}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpbXBsZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJmb28iLCJtZW1vaXplZEZvbyIsImN1c3RvbSIsInVzZUN1c3RvbUhvb2siLCJzdGF0ZVZhbHVlIl0sIm1hcHBpbmdzIjoid3lCQUVlLFFBQVNBLENBQUFBLFNBQVQsQ0FBbUIsQ0FBQ0MsR0FBRyxDQUFIQSxDQUFELENBQW5CLENBQTBCLENBQ3ZDLEtBQU1DLENBQUFBLENBQVcsQ0FBRyxtQkFDbEIsS0FBTyxDQUNMRCxHQUFHLENBQUhBLENBREssQ0FBUCxDQURrQixDQUlsQixDQUFDQSxDQUFELENBSmtCLENBQXBCLENBT0EscUJBQVUsSUFBTSxDQUNkO0FBQ0QsQ0FGRCxDQVJ1QyxDQVl2QyxLQUFNRSxDQUFBQSxDQUFNLENBQUdDLGFBQWEsRUFBNUIsQ0FFQSxtQkFBTyxvQ0FBTUYsQ0FBVyxDQUFHQyxDQUFwQixFQUNSLENBRUQsUUFBU0MsQ0FBQUEsYUFBVCxFQUF5QixDQUN2QixLQUFNLENBQUNDLENBQUQsRUFBZSx1QkFBckIsQ0FFQSxNQUFPQSxDQUFBQSxDQUNSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoe2Zvb30pIHtcbiAgY29uc3QgbWVtb2l6ZWRGb28gPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBmb28sXG4gICAgfSksXG4gICAgW2Zvb10sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBOb3QgbmFtZWRcbiAgfSk7XG5cbiAgY29uc3QgY3VzdG9tID0gdXNlQ3VzdG9tSG9vaygpO1xuXG4gIHJldHVybiA8ZGl2PnttZW1vaXplZEZvbyArIGN1c3RvbX08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIHVzZUN1c3RvbUhvb2soKSB7XG4gIGNvbnN0IFtzdGF0ZVZhbHVlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiBzdGF0ZVZhbHVlO1xufVxuIl19