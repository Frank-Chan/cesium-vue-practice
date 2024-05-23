/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.117
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
import{a as T}from"./chunk-UK55SE65.js";import"./chunk-GAH7IJVU.js";import{a as f}from"./chunk-NSWJ5LZZ.js";import"./chunk-QF7CWIRX.js";import{a as G}from"./chunk-VXN75QM4.js";import{a as C}from"./chunk-MS2KBTBR.js";import"./chunk-PT6JDBLV.js";import"./chunk-7QMJUJWF.js";import"./chunk-4CSLOU34.js";import"./chunk-YGZTDFCH.js";import"./chunk-HUIDJQZX.js";import{a as L}from"./chunk-EETKHMAV.js";import"./chunk-3NQCF6LY.js";import"./chunk-4ZLSWVFU.js";import"./chunk-B3LBD7CG.js";import{a as w}from"./chunk-YNTFMT6T.js";import{a as O}from"./chunk-4S4T622A.js";import{b,c as d,d as k}from"./chunk-WRT5H5YZ.js";import{d as P}from"./chunk-2Z7LHEFB.js";import"./chunk-URXUHQWZ.js";import{a as H}from"./chunk-2ZKHVIZO.js";import{a as l,d as g}from"./chunk-H26ARMDM.js";import"./chunk-KROATL7C.js";import"./chunk-6A4YVUYV.js";import"./chunk-IPTRD2UF.js";import{a as c}from"./chunk-WF3Q7FOG.js";import{b as a}from"./chunk-NERDVOKQ.js";import{e as u}from"./chunk-4ACNSQDC.js";function E(e){let r=e.length,t=new Float64Array(3*r),o=w.createTypedArray(r,2*r),n=0,i=0;for(let s=0;s<r;s++){let a=e[s];t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,o[i++]=s,o[i++]=(s+1)%r}let a=new O({position:new k({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:a,indices:o,primitiveType:b.LINES})}function m(e){e=c(e,c.EMPTY_OBJECT);let r=e.polygonHierarchy;a.defined("options.polygonHierarchy",r),this._polygonHierarchy=r,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=f.computeHierarchyPackedLength(r,l)+1}m.fromPositions=function(e){e=c(e,c.EMPTY_OBJECT),a.defined("options.positions",e.positions);let r={polygonHierarchy:{positions:e.positions}};return new m(r)},m.pack=function(e,r,t){return a.typeOf.object("value",e),a.defined("array",r),t=c(t,0),t=f.packPolygonHierarchy(e._polygonHierarchy,r,t,l),r[t]=e.packedLength,r};var v={polygonHierarchy:{}};m.unpack=function(e,r,t){a.defined("array",e),r=c(r,0);let o=f.unpackPolygonHierarchy(e,r,l);r=o.startingIndex,delete o.startingIndex;let n=e[r];return u(t)||(t=new m(v)),t._polygonHierarchy=o,t.packedLength=n,t},m.createGeometry=function(e){let r=e._polygonHierarchy,t=r.positions;if(t=L(t,l.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let o=f.polygonOutlinesFromHierarchy(r,!1);if(0===o.length)return;let n=[];for(let s=0;s<o.length;s++){let e=new G({geometry:E(o[s])});n.push(e)}let i=C.combineInstances(n)[0],a=P.fromPoints(r.positions);return new d({attributes:i.attributes,indices:i.indices,primitiveType:i.primitiveType,boundingSphere:a})};var h=m;function A(e,r){return u(r)&&(e=h.unpack(e,r)),e._ellipsoid=g.clone(e._ellipsoid),h.createGeometry(e)}var Z=A;export{Z as default};