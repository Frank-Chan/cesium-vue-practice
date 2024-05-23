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
import{a as y,b as P,d as W}from"./chunk-H26ARMDM.js";import{a as L}from"./chunk-KROATL7C.js";import{a as B}from"./chunk-WF3Q7FOG.js";import{b as q}from"./chunk-NERDVOKQ.js";import{e as T}from"./chunk-4ACNSQDC.js";function Y(t){let a=t._uSquared,i=t._ellipsoid.maximumRadius,n=t._ellipsoid.minimumRadius,e=(i-n)/i,s=Math.cos(t._startHeading),h=Math.sin(t._startHeading),r=(1-e)*Math.tan(t._start.latitude),o=1/Math.sqrt(1+r*r),d=o*r,c=Math.atan2(r,s),u=o*h,l=u*u,M=1-l,_=Math.sqrt(M),g=a/4,p=g*g,f=p*g,m=p*p,q=1+g-3*p/4+5*f/4-175*m/64,O=1-g+15*p/8-35*f/8,v=1-3*g+35*p/4,H=1-5*g,y=q*c-O*Math.sin(2*c)*g/2-v*Math.sin(4*c)*p/16-H*Math.sin(6*c)*f/48-5*Math.sin(8*c)*m/512,P=t._constants;P.a=i,P.b=n,P.f=e,P.cosineHeading=s,P.sineHeading=h,P.tanU=r,P.cosineU=o,P.sineU=d,P.sigma=c,P.sineAlpha=u,P.sineSquaredAlpha=l,P.cosineSquaredAlpha=M,P.cosineAlpha=_,P.u2Over4=g,P.u4Over16=p,P.u6Over64=f,P.u8Over256=m,P.a0=q,P.a1=O,P.a2=v,P.a3=H,P.distanceRatio=y}function Z(t,a){return t*a*(4+t*(4-3*a))/16}function k(t,a,i,n,e,s,h){let r=Z(t,i);return(1-r)*t*a*(n+r*e*(h+r*s*(2*h*h-1)))}function $(t,a,i,n,e,s,h){let r,o,d,c,u,l=(a-i)/a,M=s-n,_=Math.atan((1-l)*Math.tan(e)),g=Math.atan((1-l)*Math.tan(h)),p=Math.cos(_),f=Math.sin(_),m=Math.cos(g),q=Math.sin(g),O=p*m,v=p*q,H=f*q,y=f*m,P=M,S=L.TWO_PI,b=Math.cos(P),A=Math.sin(P);do{b=Math.cos(P),A=Math.sin(P);let t,a=v-y*b;d=Math.sqrt(m*m*A*A+a*a),o=H+O*b,r=Math.atan2(d,o),0===d?(t=0,c=1):(t=O*A/d,c=1-t*t),S=P,u=o-2*H/c,isFinite(u)||(u=0),P=M+k(l,t,c,r,d,o,u)}while(Math.abs(P-S)>L.EPSILON12);let E=c*(a*a-i*i)/(i*i),R=1+E*(4096+E*(E*(320-175*E)-768))/16384,T=E*(256+E*(E*(74-47*E)-128))/1024,j=u*u,U=T*d*(u+T*(o*(2*j-1)-T*u*(4*d*d-3)*(4*j-3)/6)/4),w=i*R*(r-U),x=Math.atan2(m*A,v-y*b),D=Math.atan2(p*A,v*b-y);t._distance=w,t._startHeading=x,t._endHeading=D,t._uSquared=E}var j=new y,x=new y;function N(t,a,i,n){let e=y.normalize(n.cartographicToCartesian(a,x),j),s=y.normalize(n.cartographicToCartesian(i,x),x);q.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(y.angleBetween(e,s))-Math.PI),.0125),$(t,n.maximumRadius,n.minimumRadius,a.longitude,a.latitude,i.longitude,i.latitude),t._start=P.clone(a,t._start),t._end=P.clone(i,t._end),t._start.height=0,t._end.height=0,Y(t)}function E(t,a,i){let n=B(i,W.WGS84);this._ellipsoid=n,this._start=new P,this._end=new P,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,T(t)&&T(a)&&N(this,t,a,n)}Object.defineProperties(E.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return q.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return q.defined("distance",this._distance),this._startHeading}},endHeading:{get:function(){return q.defined("distance",this._distance),this._endHeading}}}),E.prototype.setEndPoints=function(t,a){q.defined("start",t),q.defined("end",a),N(this,t,a,this._ellipsoid)},E.prototype.interpolateUsingFraction=function(t,a){return this.interpolateUsingSurfaceDistance(this._distance*t,a)},E.prototype.interpolateUsingSurfaceDistance=function(t,a){q.defined("distance",this._distance);let i=this._constants,n=i.distanceRatio+t/i.b,e=Math.cos(2*n),s=Math.cos(4*n),h=Math.cos(6*n),r=Math.sin(2*n),o=Math.sin(4*n),d=Math.sin(6*n),c=Math.sin(8*n),u=n*n,l=n*u,M=i.u8Over256,_=i.u2Over4,g=i.u6Over64,p=i.u4Over16,f=2*l*M*e/3+n*(1-_+7*p/4-15*g/4+579*M/64-(p-15*g/4+187*M/16)*e-(5*g/4-115*M/16)*s-29*M*h/16)+(_/2-p+71*g/32-85*M/16)*r+(5*p/16-5*g/4+383*M/96)*o-u*((g-11*M/2)*r+5*M*o/2)+(29*g/96-29*M/16)*d+539*M*c/1536,m=Math.asin(Math.sin(f)*i.cosineAlpha),O=Math.atan(i.a/i.b*Math.tan(m));f-=i.sigma;let v=Math.cos(2*i.sigma+f),H=Math.sin(f),y=Math.cos(f),S=i.cosineU*y,b=i.sineU*H,A=Math.atan2(H*i.sineHeading,S-b*i.cosineHeading)-k(i.f,i.sineAlpha,i.cosineSquaredAlpha,f,H,y,v);return T(a)?(a.longitude=this._start.longitude+A,a.latitude=O,a.height=0,a):new P(this._start.longitude+A,O,0)};var ct=E;export{ct as a};