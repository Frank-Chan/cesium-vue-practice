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
import{a as O}from"./chunk-2Z7LHEFB.js";import{h as I,i as V}from"./chunk-URXUHQWZ.js";import{a as W,b as v}from"./chunk-H26ARMDM.js";import{a as R}from"./chunk-KROATL7C.js";import{a as k}from"./chunk-NERDVOKQ.js";import{e as N}from"./chunk-4ACNSQDC.js";var z=Math.cos,Z=Math.sin,D=Math.sqrt,L={computePosition:function(t,n,a,r,o,s,e){let i=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,l=g.latitude-t.granYCos*r+o*t.granXSin,u=z(l),c=Z(l),C=i.z*c,S=g.longitude+r*t.granYSin+o*t.granXCos,R=u*z(S),w=u*Z(S),m=i.x*R,O=i.y*w,d=D(m*R+O*w+C*c);if(s.x=m/d,s.y=O/d,s.z=C/d,a){let n=t.stNwCorner;N(n)?(l=n.latitude-t.stGranYCos*r+o*t.stGranXSin,S=n.longitude+r*t.stGranYSin+o*t.stGranXCos,e.x=(S-t.stWest)*t.lonScalar,e.y=(l-t.stSouth)*t.latScalar):(e.x=(S-h.west)*t.lonScalar,e.y=(l-h.south)*t.latScalar)}}},A=new V,g=new W,F=new v,b=new W,q=new O;function B(t,n,a,r,o,s,e){let i=Math.cos(n),h=r*i,l=a*i,u=Math.sin(n),c=r*u,C=a*u;g=q.project(t,g),g=W.subtract(g,b,g);let S=V.fromRotation(n,A);g=V.multiplyByVector(S,g,g),g=W.add(g,b,g),t=q.unproject(g,t),s-=1,e-=1;let R=t.latitude,w=R+s*C,m=R-h*e,O=R-h*e+s*C,d=Math.max(R,w,m,O),p=Math.min(R,w,m,O),X=t.longitude,Y=X+s*l,f=X+e*c,I=X+e*c+s*l,_=Math.max(X,Y,f,I),M=Math.min(X,Y,f,I);return{north:d,south:p,east:_,west:M,granYCos:h,granYSin:c,granXCos:l,granXSin:C,nwCorner:t}}L.computeOptions=function(t,n,a,r,o,s,e){let i=t.east,g=t.west,h=t.north,l=t.south,u=!1,c=!1;h===R.PI_OVER_TWO&&(u=!0),l===-R.PI_OVER_TWO&&(c=!0);let C,S=h-l;C=g>i?R.TWO_PI-g+i:i-g;let w=Math.ceil(C/n)+1,m=Math.ceil(S/n)+1,O=C/(w-1),d=S/(m-1),p=I.northwest(t,s),X=I.center(t,F);(0!==a||0!==r)&&(X.longitude<p.longitude&&(X.longitude+=R.TWO_PI),b=q.project(X,b));let W=d,Y=O,f=0,_=0,M=I.clone(t,o),V={granYCos:W,granYSin:f,granXCos:Y,granXSin:_,nwCorner:p,boundingRectangle:M,width:w,height:m,northCap:u,southCap:c};if(0!==a){let t=B(p,a,O,d,X,w,m);if(h=t.north,l=t.south,i=t.east,g=t.west,h<-R.PI_OVER_TWO||h>R.PI_OVER_TWO||l<-R.PI_OVER_TWO||l>R.PI_OVER_TWO)throw new k("Rotated rectangle is invalid.  It crosses over either the north or south pole.");V.granYCos=t.granYCos,V.granYSin=t.granYSin,V.granXCos=t.granXCos,V.granXSin=t.granXSin,M.north=h,M.south=l,M.east=i,M.west=g}if(0!==r){a-=r;let t=I.northwest(M,e),n=B(t,a,O,d,X,w,m);V.stGranYCos=n.granYCos,V.stGranXCos=n.granXCos,V.stGranYSin=n.granYSin,V.stGranXSin=n.granXSin,V.stNwCorner=t,V.stWest=n.west,V.stSouth=n.south}return V};var nt=L;export{nt as a};