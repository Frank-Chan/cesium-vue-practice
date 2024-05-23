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
import{a as be,b as Ne}from"./chunk-VIH6IU5Q.js";import{a as Ae}from"./chunk-BHWELPB4.js";import{a as ue}from"./chunk-GAH7IJVU.js";import{a as ee}from"./chunk-PT6JDBLV.js";import"./chunk-4CSLOU34.js";import"./chunk-YGZTDFCH.js";import"./chunk-4ZLSWVFU.js";import"./chunk-B3LBD7CG.js";import{a as Ve}from"./chunk-YNTFMT6T.js";import{d as de}from"./chunk-2Z7LHEFB.js";import{h as Se}from"./chunk-URXUHQWZ.js";import"./chunk-2ZKHVIZO.js";import{a as A,b as Ie,c as Z,d as Ce}from"./chunk-H26ARMDM.js";import{a as N}from"./chunk-KROATL7C.js";import"./chunk-6A4YVUYV.js";import"./chunk-IPTRD2UF.js";import"./chunk-WF3Q7FOG.js";import{a as V,b as q}from"./chunk-NERDVOKQ.js";import{e as f}from"./chunk-4ACNSQDC.js";var ne={clipTriangleAtAxisAlignedThreshold:function(e,t,i,n,s,r){if(!f(e))throw new V("threshold is required.");if(!f(t))throw new V("keepAbove is required.");if(!f(i))throw new V("u0 is required.");if(!f(n))throw new V("u1 is required.");if(!f(s))throw new V("u2 is required.");let h,u,o;f(r)?r.length=0:r=[],t?(h=i<e,u=n<e,o=s<e):(h=i>e,u=n>e,o=s>e);let p,l,d,a,m,c,g=h+u+o;return 1===g?h?(p=(e-i)/(n-i),l=(e-i)/(s-i),r.push(1),r.push(2),1!==l&&(r.push(-1),r.push(0),r.push(2),r.push(l)),1!==p&&(r.push(-1),r.push(0),r.push(1),r.push(p))):u?(d=(e-n)/(s-n),a=(e-n)/(i-n),r.push(2),r.push(0),1!==a&&(r.push(-1),r.push(1),r.push(0),r.push(a)),1!==d&&(r.push(-1),r.push(1),r.push(2),r.push(d))):o&&(m=(e-s)/(i-s),c=(e-s)/(n-s),r.push(0),r.push(1),1!==c&&(r.push(-1),r.push(2),r.push(1),r.push(c)),1!==m&&(r.push(-1),r.push(2),r.push(0),r.push(m))):2===g?h||i===e?u||n===e?!o&&s!==e&&(l=(e-i)/(s-i),d=(e-n)/(s-n),r.push(2),r.push(-1),r.push(0),r.push(2),r.push(l),r.push(-1),r.push(1),r.push(2),r.push(d)):(c=(e-s)/(n-s),p=(e-i)/(n-i),r.push(1),r.push(-1),r.push(2),r.push(1),r.push(c),r.push(-1),r.push(0),r.push(1),r.push(p)):(a=(e-n)/(i-n),m=(e-s)/(i-s),r.push(0),r.push(-1),r.push(1),r.push(0),r.push(a),r.push(-1),r.push(2),r.push(0),r.push(m)):3!==g&&(r.push(0),r.push(1),r.push(2)),r},computeBarycentricCoordinates:function(e,t,i,n,s,r,h,u,o){if(!f(e))throw new V("x is required.");if(!f(t))throw new V("y is required.");if(!f(i))throw new V("x1 is required.");if(!f(n))throw new V("y1 is required.");if(!f(s))throw new V("x2 is required.");if(!f(r))throw new V("y2 is required.");if(!f(h))throw new V("x3 is required.");if(!f(u))throw new V("y3 is required.");let p=i-h,l=h-s,d=r-u,a=n-u,m=1/(d*p+l*a),c=t-u,g=e-h,w=(d*g+l*c)*m,x=(-a*g+p*c)*m,y=1-w-x;return f(o)?(o.x=w,o.y=x,o.z=y,o):new A(w,x,y)},computeLineSegmentLineSegmentIntersection:function(e,t,i,n,s,r,h,u,o){q.typeOf.number("x00",e),q.typeOf.number("y00",t),q.typeOf.number("x01",i),q.typeOf.number("y01",n),q.typeOf.number("x10",s),q.typeOf.number("y10",r),q.typeOf.number("x11",h),q.typeOf.number("y11",u);let p=(h-s)*(t-r)-(u-r)*(e-s),l=(i-e)*(t-r)-(n-t)*(e-s),d=(u-r)*(i-e)-(h-s)*(n-t);if(0===d)return;let a=p/d,m=l/d;return a>=0&&a<=1&&m>=0&&m<=1?(f(o)||(o=new Z),o.x=e+a*(i-e),o.y=t+a*(n-t),o):void 0}},ie=ne,a=32767,z=a/2|0,Me=[],ze=[],Xe=[],te=new Ie,E=new A,Ke=[],We=[],Ye=[],Le=[],_e=[],Je=new A,Qe=new de,Ze=new ue,Ge=new Z,$e=new A;function je(e,t){let i=e.isEastChild,n=e.isNorthChild,s=i?z:0,r=i?a:z,h=n?z:0,u=n?a:z,o=Ke,p=We,f=Ye,l=_e;o.length=0,p.length=0,f.length=0,l.length=0;let d=Le;d.length=0;let c={},g=e.vertices,w=e.indices;w=w.subarray(0,e.indexCountWithoutSkirts);let x,y,V,B,I,v=Ne.clone(e.encoding),S=v.hasVertexNormals,b=0,k=e.vertexCountWithoutSkirts,q=e.minimumHeight,C=e.maximumHeight,T=new Array(k),j=new Array(k),O=new Array(k),H=S?new Array(2*k):void 0,K=20;for(y=0,V=0;y<k;++y,V+=2){let e=v.decodeTextureCoordinates(g,y,Ge);if(x=v.decodeHeight(g,y),B=N.clamp(e.x*a|0,0,a),I=N.clamp(e.y*a|0,0,a),O[y]=N.clamp((x-q)/(C-q)*a|0,0,a),B<K&&(B=0),I<K&&(I=0),a-B<K&&(B=a),a-I<K&&(I=a),T[y]=B,j[y]=I,S){let e=v.getOctEncodedNormal(g,y,$e);H[V]=e.x,H[V+1]=e.y}(i&&B>=z||!i&&B<=z)&&(n&&I>=z||!n&&I<=z)&&(c[y]=b,o.push(B),p.push(I),f.push(O[y]),S&&(l.push(H[V]),l.push(H[V+1])),++b)}let U=[];U.push(new m),U.push(new m),U.push(new m);let F,R,Z=[];for(Z.push(new m),Z.push(new m),Z.push(new m),y=0;y<w.length;y+=3){let e=w[y],t=w[y+1],s=w[y+2],r=T[e],h=T[t],u=T[s];U[0].initializeIndexed(T,j,O,H,e),U[1].initializeIndexed(T,j,O,H,t),U[2].initializeIndexed(T,j,O,H,s);let a=ie.clipTriangleAtAxisAlignedThreshold(z,i,r,h,u,Me);F=0,!(F>=a.length)&&(F=Z[0].initializeFromClipResult(a,F,U),!(F>=a.length)&&(F=Z[1].initializeFromClipResult(a,F,U),!(F>=a.length)&&(F=Z[2].initializeFromClipResult(a,F,U),R=ie.clipTriangleAtAxisAlignedThreshold(z,n,Z[0].getV(),Z[1].getV(),Z[2].getV(),ze),Oe(o,p,f,l,d,c,R,Z,S),F<a.length&&(Z[2].clone(Z[1]),Z[2].initializeFromClipResult(a,F,U),R=ie.clipTriangleAtAxisAlignedThreshold(z,n,Z[0].getV(),Z[1].getV(),Z[2].getV(),ze),Oe(o,p,f,l,d,c,R,Z,S)))))}let L=i?-a:0,Y=n?-a:0,D=[],W=[],M=[],X=[],P=Number.MAX_VALUE,Q=-P,G=Xe;G.length=0;let J=Ce.clone(e.ellipsoid),_=Se.clone(e.childRectangle),$=_.north,ee=_.south,ne=_.east,se=_.west;for(ne<se&&(ne+=N.TWO_PI),y=0;y<o.length;++y)B=Math.round(o[y]),B<=s?(D.push(y),B=0):B>=r?(M.push(y),B=a):B=2*B+L,o[y]=B,I=Math.round(p[y]),I<=h?(W.push(y),I=0):I>=u?(X.push(y),I=a):I=2*I+Y,p[y]=I,x=N.lerp(q,C,f[y]/a),x<P&&(P=x),x>Q&&(Q=x),f[y]=x,te.longitude=N.lerp(se,ne,B/a),te.latitude=N.lerp(ee,$,I/a),te.height=x,J.cartographicToCartesian(te,E),G.push(E.x),G.push(E.y),G.push(E.z);let re=de.fromVertices(G,A.ZERO,3,Qe),he=ue.fromRectangle(_,P,Q,J,Ze),oe=new be(J).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(re.center,G,3,re.center,P,Je),pe=Q-P,fe=new Uint16Array(o.length+p.length+f.length);for(y=0;y<o.length;++y)fe[y]=o[y];let le=o.length;for(y=0;y<p.length;++y)fe[le+y]=p[y];for(le+=p.length,y=0;y<f.length;++y)fe[le+y]=a*(f[y]-P)/pe;let ae,me=Ve.createTypedArray(o.length,d);if(S){let e=new Uint8Array(l);t.push(fe.buffer,me.buffer,e.buffer),ae=e.buffer}else t.push(fe.buffer,me.buffer);return{vertices:fe.buffer,encodedNormals:ae,indices:me.buffer,minimumHeight:P,maximumHeight:Q,westIndices:D,southIndices:W,eastIndices:M,northIndices:X,boundingSphere:re,orientedBoundingBox:he,horizonOcclusionPoint:oe}}function m(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}m.prototype.clone=function(e){return f(e)||(e=new m),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},m.prototype.initializeIndexed=function(e,t,i,n,s){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=i,this.normalBuffer=n,this.index=s,this.first=void 0,this.second=void 0,this.ratio=void 0},m.prototype.initializeFromClipResult=function(e,t,i){let n=t+1;return-1!==e[t]?i[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=i[e[n]],++n,this.second=i[e[n]],++n,this.ratio=e[n],++n),n},m.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},m.prototype.isIndexed=function(){return f(this.index)},m.prototype.getH=function(){return f(this.index)?this.heightBuffer[this.index]:N.lerp(this.first.getH(),this.second.getH(),this.ratio)},m.prototype.getU=function(){return f(this.index)?this.uBuffer[this.index]:N.lerp(this.first.getU(),this.second.getU(),this.ratio)},m.prototype.getV=function(){return f(this.index)?this.vBuffer[this.index]:N.lerp(this.first.getV(),this.second.getV(),this.ratio)};var K=new Z,oe=-1,en=[new A,new A],nn=[new A,new A];function Te(e,t){++oe;let i=en[oe],n=nn[oe];return i=ee.octDecode(e.first.getNormalX(),e.first.getNormalY(),i),n=ee.octDecode(e.second.getNormalX(),e.second.getNormalY(),n),E=A.lerp(i,n,e.ratio,E),A.normalize(E,E),ee.octEncode(E,t),--oe,t}m.prototype.getNormalX=function(){return f(this.index)?this.normalBuffer[2*this.index]:(K=Te(this,K),K.x)},m.prototype.getNormalY=function(){return f(this.index)?this.normalBuffer[2*this.index+1]:(K=Te(this,K),K.y)};var S=[];function Oe(e,t,i,n,s,r,h,u,o){if(0===h.length)return;let p=0,l=0;for(;l<h.length;)l=S[p++].initializeFromClipResult(h,l,u);for(let d=0;d<p;++d){let s=S[d];if(s.isIndexed())s.newIndex=r[s.index],s.uBuffer=e,s.vBuffer=t,s.heightBuffer=i,o&&(s.normalBuffer=n);else{let h=s.getKey();if(f(r[h]))s.newIndex=r[h];else{let u=e.length;e.push(s.getU()),t.push(s.getV()),i.push(s.getH()),o&&(n.push(s.getNormalX()),n.push(s.getNormalY())),s.newIndex=u,r[h]=u}}}3===p?(s.push(S[0].newIndex),s.push(S[1].newIndex),s.push(S[2].newIndex)):4===p&&(s.push(S[0].newIndex),s.push(S[1].newIndex),s.push(S[2].newIndex),s.push(S[0].newIndex),s.push(S[2].newIndex),s.push(S[3].newIndex))}S.push(new m),S.push(new m),S.push(new m),S.push(new m);var An=Ae(je);export{An as default};