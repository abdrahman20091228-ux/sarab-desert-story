(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="172",Tc=0,ba=1,bc=2,Qr=1,Ac=2,fn=3,_n=0,Ue=1,we=2,bn=0,fi=1,dr=2,Aa=3,Ra=4,Rc=5,kn=100,Cc=101,Pc=102,Lc=103,Dc=104,Ic=200,Uc=201,Fc=202,Nc=203,fr=204,pr=205,Bc=206,Oc=207,zc=208,kc=209,Gc=210,Hc=211,Vc=212,Wc=213,Xc=214,mr=0,gr=1,_r=2,gi=3,xr=4,vr=5,Mr=6,yr=7,zo=0,qc=1,Yc=2,An=0,jc=1,Zc=2,$c=3,ko=4,Kc=5,Jc=6,Qc=7,Go=300,_i=301,xi=302,Hi=303,Sr=304,Rs=306,Cn=1e3,Tn=1001,Er=1002,ke=1003,tl=1004,Zi=1005,qe=1006,Is=1007,Hn=1008,xn=1009,Ho=1010,Vo=1011,Vi=1012,ta=1013,Wn=1014,an=1015,qi=1016,ea=1017,na=1018,vi=1020,Wo=35902,Xo=1021,qo=1022,tn=1023,Yo=1024,jo=1025,pi=1026,Mi=1027,ia=1028,sa=1029,Zo=1030,ra=1031,aa=1033,vs=33776,Ms=33777,ys=33778,Ss=33779,wr=35840,Tr=35841,br=35842,Ar=35843,Rr=36196,Cr=37492,Pr=37496,Lr=37808,Dr=37809,Ir=37810,Ur=37811,Fr=37812,Nr=37813,Br=37814,Or=37815,zr=37816,kr=37817,Gr=37818,Hr=37819,Vr=37820,Wr=37821,Es=36492,Xr=36494,qr=36495,$o=36283,Yr=36284,jr=36285,Zr=36286,el=3200,nl=3201,Ko=0,il=1,sn="",Ee="srgb",yi="srgb-linear",Ts="linear",ee="srgb",jn=7680,Ca=519,sl=512,rl=513,al=514,Jo=515,ol=516,cl=517,ll=518,hl=519,Pa=35044,La="300 es",mn=2e3,bs=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Da=1234567;const ki=Math.PI/180,Wi=180/Math.PI;function wi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function oa(s,t){return(s%t+t)%t}function ul(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function dl(s,t,e){return s!==t?(e-s)/(t-s):0}function Gi(s,t,e){return(1-e)*s+e*t}function fl(s,t,e,n){return Gi(s,t,1-Math.exp(-e*n))}function pl(s,t=1){return t-Math.abs(oa(s,t*2)-t)}function ml(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function gl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function _l(s,t){return s+Math.floor(Math.random()*(t-s+1))}function xl(s,t){return s+Math.random()*(t-s)}function vl(s){return s*(.5-Math.random())}function Ml(s){s!==void 0&&(Da=s);let t=Da+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yl(s){return s*ki}function Sl(s){return s*Wi}function El(s){return(s&s-1)===0&&s!==0}function wl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Tl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bl(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),l=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*l,c*d,c*u,o*h);break;case"YZY":s.set(c*u,o*l,c*d,o*h);break;case"ZXZ":s.set(c*d,c*u,o*l,o*h);break;case"XZX":s.set(o*l,c*g,c*f,o*h);break;case"YXY":s.set(c*f,o*l,c*g,o*h);break;case"ZYZ":s.set(c*g,c*f,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:ki,RAD2DEG:Wi,generateUUID:wi,clamp:kt,euclideanModulo:oa,mapLinear:ul,inverseLerp:dl,lerp:Gi,damp:fl,pingpong:pl,smoothstep:ml,smootherstep:gl,randInt:_l,randFloat:xl,randFloatSpread:vl,seededRandom:Ml,degToRad:yl,radToDeg:Sl,isPowerOfTwo:El,ceilPowerOfTwo:wl,floorPowerOfTwo:Tl,setQuaternionFromProperEuler:bl,normalize:De,denormalize:li};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,r,a,o,c,h){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h)}set(t,e,n,i,r,a,o,c,h){const l=this.elements;return l[0]=t,l[1]=i,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],E=i[4],M=i[7],R=i[2],T=i[5],A=i[8];return r[0]=a*_+o*y+c*R,r[3]=a*m+o*E+c*T,r[6]=a*p+o*M+c*A,r[1]=h*_+l*y+d*R,r[4]=h*m+l*E+d*T,r[7]=h*p+l*M+d*A,r[2]=u*_+f*y+g*R,r[5]=u*m+f*E+g*T,r[8]=u*p+f*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+i*r*h-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=l*a-o*h,u=o*c-l*r,f=h*r-a*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*h-l*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(l*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-i*h,i*c,-i*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Us.makeScale(t,e)),this}rotate(t){return this.premultiply(Us.makeRotation(-t)),this}translate(t,e){return this.premultiply(Us.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Ut;function Qo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Al(){const s=Xi("canvas");return s.style.display="block",s}const Ia={};function hi(s){s in Ia||(Ia[s]=!0,console.warn(s))}function Rl(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Cl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ua=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fa=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ll(){const s={enabled:!0,workingColorSpace:yi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===sn?Ts:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[yi]:{primaries:t,whitePoint:n,transfer:Ts,toXYZ:Ua,fromXYZ:Fa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Ua,fromXYZ:Fa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),s}const $t=Ll();function gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zn;class Dl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=Xi("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Il=0;class tc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fs(i[a].image)):r.push(Fs(i[a]))}else r=Fs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ul=0;class be extends Ei{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Tn,i=Tn,r=qe,a=Hn,o=tn,c=xn,h=be.DEFAULT_ANISOTROPY,l=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=wi(),this.name="",this.source=new tc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Go)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cn:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cn:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Go;be.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,h=c[0],l=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(h+1)/2,M=(f+1)/2,R=(p+1)/2,T=(l+u)/4,A=(d+_)/4,P=(g+m)/4;return E>M&&E>R?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=T/n,r=A/n):M>R?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=P/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-l)*(u-l));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-l)/y,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fl extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ec extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nl extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],h=n[i+1],l=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||h!==f||l!==g){let m=1-o;const p=c*u+h*f+l*g+d*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const M=o*y;if(c=c*m+u*M,h=h*m+f*M,l=l*m+g*M,d=d*m+_*M,m===1-o){const R=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=R,h*=R,l*=R,d*=R}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],h=n[i+2],l=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+l*d+c*f-h*u,t[e+1]=c*g+l*u+h*d-o*f,t[e+2]=h*g+l*f+o*u-c*d,t[e+3]=l*g-o*d-c*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*l*d+h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d-u*f*g;break;case"YXZ":this._x=u*l*d+h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d+u*f*g;break;case"ZXY":this._x=u*l*d-h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d-u*f*g;break;case"ZYX":this._x=u*l*d-h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d+u*f*g;break;case"YZX":this._x=u*l*d+h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d-u*f*g;break;case"XZY":this._x=u*l*d-h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(l-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+h)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+i*h-r*c,this._y=i*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-i*o,this._w=a*l-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),d=Math.sin((1-e)*l)/h,u=Math.sin(e*l)/h;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*i-o*n),l=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*l,this.y=n+c*l+o*h-r*d,this.z=i+c*d+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new D,Na=new Rn;class qn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(t.matrixWorld),this.union($i)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),Ki.subVectors(this.max,Ci),$n.subVectors(t.a,Ci),Kn.subVectors(t.b,Ci),Jn.subVectors(t.c,Ci),vn.subVectors(Kn,$n),Mn.subVectors(Jn,Kn),Dn.subVectors($n,Jn);let e=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-Dn.z,Dn.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,Dn.z,0,-Dn.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-Dn.y,Dn.x,0];return!Bs(e,$n,Kn,Jn,Ki)||(e=[1,0,0,0,1,0,0,0,1],!Bs(e,$n,Kn,Jn,Ki))?!1:(Ji.crossVectors(vn,Mn),e=[Ji.x,Ji.y,Ji.z],Bs(e,$n,Kn,Jn,Ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new D,new D,new D,new D,new D,new D,new D,new D],Ze=new D,$i=new qn,$n=new D,Kn=new D,Jn=new D,vn=new D,Mn=new D,Dn=new D,Ci=new D,Ki=new D,Ji=new D,In=new D;function Bs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){In.fromArray(s,r);const o=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),c=t.dot(In),h=e.dot(In),l=n.dot(In);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const Bl=new qn,Pi=new D,Os=new D;class Ti{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pi.subVectors(t,this.center);const e=Pi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Pi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Os.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pi.copy(t.center).add(Os)),this.expandByPoint(Pi.copy(t.center).sub(Os))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new D,zs=new D,Qi=new D,yn=new D,ks=new D,ts=new D,Gs=new D;class nc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zs.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(zs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Qi),o=yn.dot(this.direction),c=-yn.dot(Qi),h=yn.lengthSq(),l=Math.abs(1-a*a);let d,u,f,g;if(l>0)if(d=a*c-o,u=a*o-c,g=r*l,d>=0)if(u>=-g)if(u<=g){const _=1/l;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(zs).addScaledVector(Qi,u),f}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,i=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,i=(t.min.x-u.x)*h),l>=0?(r=(t.min.y-u.y)*l,a=(t.max.y-u.y)*l):(r=(t.max.y-u.y)*l,a=(t.min.y-u.y)*l),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,i,r){ks.subVectors(e,t),ts.subVectors(n,t),Gs.crossVectors(ks,ts);let a=this.direction.dot(Gs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,t);const c=o*this.direction.dot(ts.crossVectors(yn,ts));if(c<0)return null;const h=o*this.direction.dot(ks.cross(yn));if(h<0||c+h>a)return null;const l=-o*yn.dot(Gs);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,i,r,a,o,c,h,l,d,u,f,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h,l,d,u,f,g,_,m)}set(t,e,n,i,r,a,o,c,h,l,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),a=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*l,f=a*d,g=o*l,_=o*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=f+g*h,e[5]=u-_*h,e[9]=-o*c,e[2]=_-u*h,e[6]=g+f*h,e[10]=a*c}else if(t.order==="YXZ"){const u=c*l,f=c*d,g=h*l,_=h*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*l,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*l,f=c*d,g=h*l,_=h*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*l,e[9]=_-u*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*l,f=a*d,g=o*l,_=o*d;e[0]=c*l,e[4]=g*h-f,e[8]=u*h+_,e[1]=c*d,e[5]=_*h+u,e[9]=f*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*h,g=o*c,_=o*h;e[0]=c*l,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,f=a*h,g=o*c,_=o*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=u*d+_,e[5]=a*l,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*l,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ol,t,zl)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Sn.crossVectors(n,Be),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Sn.crossVectors(n,Be)),Sn.normalize(),es.crossVectors(Be,Sn),i[0]=Sn.x,i[4]=es.x,i[8]=Be.x,i[1]=Sn.y,i[5]=es.y,i[9]=Be.y,i[2]=Sn.z,i[6]=es.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],E=n[7],M=n[11],R=n[15],T=i[0],A=i[4],P=i[8],w=i[12],x=i[1],C=i[5],B=i[9],k=i[13],O=i[2],X=i[6],W=i[10],$=i[14],H=i[3],et=i[7],ht=i[11],xt=i[15];return r[0]=a*T+o*x+c*O+h*H,r[4]=a*A+o*C+c*X+h*et,r[8]=a*P+o*B+c*W+h*ht,r[12]=a*w+o*k+c*$+h*xt,r[1]=l*T+d*x+u*O+f*H,r[5]=l*A+d*C+u*X+f*et,r[9]=l*P+d*B+u*W+f*ht,r[13]=l*w+d*k+u*$+f*xt,r[2]=g*T+_*x+m*O+p*H,r[6]=g*A+_*C+m*X+p*et,r[10]=g*P+_*B+m*W+p*ht,r[14]=g*w+_*k+m*$+p*xt,r[3]=y*T+E*x+M*O+R*H,r[7]=y*A+E*C+M*X+R*et,r[11]=y*P+E*B+M*W+R*ht,r[15]=y*w+E*k+M*$+R*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*d-i*h*d-r*o*u+n*h*u+i*o*f-n*c*f)+_*(+e*c*f-e*h*u+r*a*u-i*a*f+i*h*l-r*c*l)+m*(+e*h*d-e*o*f-r*a*d+n*a*f+r*o*l-n*h*l)+p*(-i*o*l-e*c*d+e*o*u+i*a*d-n*a*u+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=d*m*h-_*u*h+_*c*f-o*m*f-d*c*p+o*u*p,E=g*u*h-l*m*h-g*c*f+a*m*f+l*c*p-a*u*p,M=l*_*h-g*d*h+g*o*f-a*_*f-l*o*p+a*d*p,R=g*d*c-l*_*c-g*o*u+a*_*u+l*o*m-a*d*m,T=e*y+n*E+i*M+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*A,t[2]=(o*m*r-_*c*r+_*i*h-n*m*h-o*i*p+n*c*p)*A,t[3]=(d*c*r-o*u*r-d*i*h+n*u*h+o*i*f-n*c*f)*A,t[4]=E*A,t[5]=(l*m*r-g*u*r+g*i*f-e*m*f-l*i*p+e*u*p)*A,t[6]=(g*c*r-a*m*r-g*i*h+e*m*h+a*i*p-e*c*p)*A,t[7]=(a*u*r-l*c*r+l*i*h-e*u*h-a*i*f+e*c*f)*A,t[8]=M*A,t[9]=(g*d*r-l*_*r-g*n*f+e*_*f+l*n*p-e*d*p)*A,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*p+e*o*p)*A,t[11]=(l*o*r-a*d*r-l*n*h+e*d*h+a*n*f-e*o*f)*A,t[12]=R*A,t[13]=(l*_*i-g*d*i+g*n*u-e*_*u-l*n*m+e*d*m)*A,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*A,t[15]=(a*d*i-l*o*i+l*n*c-e*d*c-a*n*u+e*o*u)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,l*o+n,l*c-i*a,0,h*c-i*o,l*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,d=o+o,u=r*h,f=r*l,g=r*d,_=a*l,m=a*d,p=o*d,y=c*h,E=c*l,M=c*d,R=n.x,T=n.y,A=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+M)*R,i[2]=(g-E)*R,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(u+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+E)*A,i[9]=(m-y)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qn.set(i[0],i[1],i[2]).length();const a=Qn.set(i[4],i[5],i[6]).length(),o=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const h=1/r,l=1/a,d=1/o;return $e.elements[0]*=h,$e.elements[1]*=h,$e.elements[2]*=h,$e.elements[4]*=l,$e.elements[5]*=l,$e.elements[6]*=l,$e.elements[8]*=d,$e.elements[9]*=d,$e.elements[10]*=d,e.setFromRotationMatrix($e),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=mn){const c=this.elements,h=2*r/(e-t),l=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(o===mn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===bs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=mn){const c=this.elements,h=1/(e-t),l=1/(n-i),d=1/(a-r),u=(e+t)*h,f=(n+i)*l;let g,_;if(o===mn)g=(a+r)*d,_=-2*d;else if(o===bs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new D,$e=new jt,Ol=new D(0,0,0),zl=new D(1,1,1),Sn=new D,es=new D,Be=new D,Ba=new jt,Oa=new Rn;class Ge{constructor(t=0,e=0,n=0,i=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],l=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kl=0;const za=new D,ti=new Rn,hn=new jt,ns=new D,Li=new D,Gl=new D,Hl=new Rn,ka=new D(1,0,0),Ga=new D(0,1,0),Ha=new D(0,0,1),Va={type:"added"},Vl={type:"removed"},ei={type:"childadded",child:null},Hs={type:"childremoved",child:null};class xe extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new D,e=new Ge,n=new Rn,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ut}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(ka,t)}rotateY(t){return this.rotateOnAxis(Ga,t)}rotateZ(t){return this.rotateOnAxis(Ha,t)}translateOnAxis(t,e){return za.copy(t).applyQuaternion(this.quaternion),this.position.add(za.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ka,t)}translateY(t){return this.translateOnAxis(Ga,t)}translateZ(t){return this.translateOnAxis(Ha,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Li,ns,this.up):hn.lookAt(ns,Li,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(hn),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Va),ei.child=t,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vl),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Va),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,Gl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Hl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new D(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new D,un=new D,Vs=new D,dn=new D,ni=new D,ii=new D,Wa=new D,Ws=new D,Xs=new D,qs=new D,Ys=new ne,js=new ne,Zs=new ne;class Qe{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),un.subVectors(n,e),Vs.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(un),c=Ke.dot(Vs),h=un.dot(un),l=un.dot(Vs),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(h*c-o*l)*u,g=(a*l-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ys.setScalar(0),js.setScalar(0),Zs.setScalar(0),Ys.fromBufferAttribute(t,e),js.fromBufferAttribute(t,n),Zs.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ys,r.x),a.addScaledVector(js,r.y),a.addScaledVector(Zs,r.z),a}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),un.subVectors(t,e),Ke.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Ke.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ni.subVectors(i,n),ii.subVectors(r,n),Ws.subVectors(t,n);const c=ni.dot(Ws),h=ii.dot(Ws);if(c<=0&&h<=0)return e.copy(n);Xs.subVectors(t,i);const l=ni.dot(Xs),d=ii.dot(Xs);if(l>=0&&d<=l)return e.copy(i);const u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(ni,a);qs.subVectors(t,r);const f=ni.dot(qs),g=ii.dot(qs);if(g>=0&&f<=g)return e.copy(r);const _=f*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(ii,o);const m=l*g-f*d;if(m<=0&&d-l>=0&&f-g>=0)return Wa.subVectors(r,i),o=(d-l)/(d-l+(f-g)),e.copy(i).addScaledVector(Wa,o);const p=1/(m+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},is={h:0,s:0,l:0};function $s(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=oa(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$s(a,r,t+1/3),this.g=$s(a,r,t),this.b=$s(a,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return $t.fromWorkingColorSpace(Ce.copy(this),t),Math.round(kt(Ce.r*255,0,255))*65536+Math.round(kt(Ce.g*255,0,255))*256+Math.round(kt(Ce.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,r=Ce.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=l<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ee){$t.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(is);const n=Gi(En.h,is.h,e),i=Gi(En.s,is.s,e),r=Gi(En.l,is.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Mt;Mt.NAMES=sc;let Wl=0;class bi extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=fi,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=pr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==pr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new D,ss=new Dt;class te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}}class rc extends te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ac extends te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xl=0;const Xe=new jt,Ks=new xe,si=new D,Oe=new qn,Di=new qn,ye=new D;class pe extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qo(t)?ac:rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Ks.lookAt(t),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Oe.min,Di.min),Oe.expandByPoint(ye),ye.addVectors(Oe.max,Di.max),Oe.expandByPoint(ye)):(Oe.expandByPoint(Di.min),Oe.expandByPoint(Di.max))}Oe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)ye.fromBufferAttribute(o,h),c&&(si.fromBufferAttribute(t,h),ye.add(si)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new te(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new D,c[P]=new D;const h=new D,l=new D,d=new D,u=new Dt,f=new Dt,g=new Dt,_=new D,m=new D;function p(P,w,x){h.fromBufferAttribute(n,P),l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,x),l.sub(h),d.sub(h),f.sub(u),g.sub(u);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(C),o[P].add(_),o[w].add(_),o[x].add(_),c[P].add(m),c[w].add(m),c[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,w=y.length;P<w;++P){const x=y[P],C=x.start,B=x.count;for(let k=C,O=C+B;k<O;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new D,M=new D,R=new D,T=new D;function A(P){R.fromBufferAttribute(i,P),T.copy(R);const w=o[P];E.copy(w),E.sub(R.multiplyScalar(R.dot(w))).normalize(),M.crossVectors(T,w);const C=M.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,w=y.length;P<w;++P){const x=y[P],C=x.start,B=x.count;for(let k=C,O=C+B;k<O;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,h=new D,l=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),l.subVectors(a,r),d.subVectors(i,r),l.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(l),c.add(l),h.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),l.subVectors(a,r),d.subVectors(i,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){const h=o.array,l=o.itemSize,d=o.normalized,u=new h.constructor(c.length*l);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*l;for(let p=0;p<l;p++)u[g++]=h[f++]}return new te(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,d=h.length;l<d;l++){const u=h[l],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];l.push(f.toJSON(t.data))}l.length>0&&(i[c]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const l=i[h];this.setAttribute(h,l.clone(e))}const r=t.morphAttributes;for(const h in r){const l=[],d=r[h];for(let u=0,f=d.length;u<f;u++)l.push(d[u].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,l=a.length;h<l;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new jt,Un=new nc,rs=new Ti,qa=new D,as=new D,os=new D,cs=new D,Js=new D,ls=new D,Ya=new D,hs=new D;class lt extends xe{constructor(t=new pe,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ls.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],d=r[c];l!==0&&(Js.fromBufferAttribute(d,t),a?ls.addScaledVector(Js,l):ls.addScaledVector(Js.sub(e),l))}e.add(ls)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(rs.containsPoint(Un.origin)===!1&&(Un.intersectSphere(rs,qa)===null||Un.origin.distanceToSquared(qa)>(t.far-t.near)**2))&&(Xa.copy(r).invert(),Un.copy(t.ray).applyMatrix4(Xa),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=E;M<R;M+=3){const T=o.getX(M),A=o.getX(M+1),P=o.getX(M+2);i=us(this,p,t,n,h,l,d,T,A,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);i=us(this,a,t,n,h,l,d,y,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=E;M<R;M+=3){const T=M,A=M+1,P=M+2;i=us(this,p,t,n,h,l,d,T,A,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,M=m+2;i=us(this,a,t,n,h,l,d,y,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function ql(s,t,e,n,i,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===_n,o),c===null)return null;hs.copy(o),hs.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(hs);return h<e.near||h>e.far?null:{distance:h,point:hs.clone(),object:s}}function us(s,t,e,n,i,r,a,o,c,h){s.getVertexPosition(o,as),s.getVertexPosition(c,os),s.getVertexPosition(h,cs);const l=ql(s,t,e,n,as,os,cs,Ya);if(l){const d=new D;Qe.getBarycoord(Ya,as,os,cs,d),i&&(l.uv=Qe.getInterpolatedAttribute(i,o,c,h,d,new Dt)),r&&(l.uv1=Qe.getInterpolatedAttribute(r,o,c,h,d,new Dt)),a&&(l.normal=Qe.getInterpolatedAttribute(a,o,c,h,d,new D),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a:o,b:c,c:h,normal:new D,materialIndex:0};Qe.getNormal(as,os,cs,u.normal),l.face=u,l.barycoord=d}return l}class At extends pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ce(h,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(d,2));function g(_,m,p,y,E,M,R,T,A,P,w){const x=M/A,C=R/P,B=M/2,k=R/2,O=T/2,X=A+1,W=P+1;let $=0,H=0;const et=new D;for(let ht=0;ht<W;ht++){const xt=ht*C-k;for(let Bt=0;Bt<X;Bt++){const ie=Bt*x-B;et[_]=ie*y,et[m]=xt*E,et[p]=O,h.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=T>0?1:-1,l.push(et.x,et.y,et.z),d.push(Bt/A),d.push(1-ht/P),$+=1}}for(let ht=0;ht<P;ht++)for(let xt=0;xt<A;xt++){const Bt=u+xt+X*ht,ie=u+xt+X*(ht+1),Y=u+(xt+1)+X*(ht+1),tt=u+(xt+1)+X*ht;c.push(Bt,ie,tt),c.push(ie,Y,tt),H+=6}o.addGroup(f,H,w),f+=H,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new At(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const n=Si(s[e]);for(const i in n)t[i]=n[i]}return t}function Yl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function oc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const jl={clone:Si,merge:Ie};var Zl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$l=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zl,this.fragmentShader=$l,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=Yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new D,ja=new Dt,Za=new Dt;class ze extends cc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,ja,Za),e.subVectors(Za,ja)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ki*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,ai=1;class Kl extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(ri,ai,t,e);i.layers=this.layers,this.add(i);const r=new ze(ri,ai,t,e);r.layers=this.layers,this.add(r);const a=new ze(ri,ai,t,e);a.layers=this.layers,this.add(a);const o=new ze(ri,ai,t,e);o.layers=this.layers,this.add(o);const c=new ze(ri,ai,t,e);c.layers=this.layers,this.add(c);const h=new ze(ri,ai,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const h of e)this.remove(h);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lc extends be{constructor(t,e,n,i,r,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jl extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new At(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:bn});r.uniforms.tEquirect.value=e;const a=new lt(i,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=qe),new Kl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class ca{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new ca(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ql extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class th extends be{constructor(t=null,e=1,n=1,i,r,a,o,c,h=ke,l=ke,d,u){super(null,a,o,c,h,l,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a extends te{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const oi=new jt,Ka=new jt,ds=[],Ja=new qn,eh=new jt,Ii=new lt,Ui=new Ti;class Je extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,eh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oi),Ja.copy(t.boundingBox).applyMatrix4(oi),this.boundingBox.union(Ja)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oi),Ui.copy(t.boundingSphere).applyMatrix4(oi),this.boundingSphere.union(Ui)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(n),t.ray.intersectsSphere(Ui)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,oi),Ka.multiplyMatrices(n,oi),Ii.matrixWorld=Ka,Ii.raycast(t,ds);for(let a=0,o=ds.length;a<o;a++){const c=ds[a];c.instanceId=r,c.object=this,e.push(c)}ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new th(new Float32Array(i*this.count),i,this.count,ia,an));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Qs=new D,nh=new D,ih=new Ut;class On{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qs.subVectors(n,e).cross(nh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ih.getNormalMatrix(t),i=this.coplanarPoint(Qs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Ti,fs=new D;class la{constructor(t=new On,e=new On,n=new On,i=new On,r=new On,a=new On){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],h=i[4],l=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],E=i[14],M=i[15];if(n[0].setComponents(c-r,u-h,m-f,M-p).normalize(),n[1].setComponents(c+r,u+h,m+f,M+p).normalize(),n[2].setComponents(c+a,u+l,m+g,M+y).normalize(),n[3].setComponents(c-a,u-l,m-g,M-y).normalize(),n[4].setComponents(c-o,u-d,m-_,M-E).normalize(),e===mn)n[5].setComponents(c+o,u+d,m+_,M+E).normalize();else if(e===bs)n[5].setComponents(o,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fs.x=i.normal.x>0?t.max.x:t.min.x,fs.y=i.normal.y>0?t.max.y:t.min.y,fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sh extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qa=new jt,$r=new nc,ps=new Ti,ms=new D;class rh extends xe{constructor(t=new pe,e=new sh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(i),ps.radius+=r,t.ray.intersectsSphere(ps)===!1)return;Qa.copy(i).invert(),$r.copy(t.ray).applyMatrix4(Qa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=h.getX(g);ms.fromBufferAttribute(d,m),to(ms,m,c,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)ms.fromBufferAttribute(d,g),to(ms,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function to(s,t,e,n,i,r,a){const o=$r.distanceSqToPoint(s);if(o<e){const c=new D;$r.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Pe extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class tr extends be{constructor(t,e,n,i,r,a,o,c,h){super(t,e,n,i,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hc extends be{constructor(t,e,n,i,r,a,o,c,h,l=pi){if(l!==pi&&l!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===pi&&(n=Wn),n===void 0&&l===Mi&&(n=vi),super(null,i,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=c!==void 0?c:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ha extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],h=new D,l=new Dt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[u]/t+1)/2,l.y=(a[u+1]/t+1)/2,c.push(l.x,l.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _e extends pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const l=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(l),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function y(){const M=new D,R=new D;let T=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const w=[],x=P/r,C=x*(e-t)+t;for(let B=0;B<=i;B++){const k=B/i,O=k*c+o,X=Math.sin(O),W=Math.cos(O);R.x=C*X,R.y=-x*n+m,R.z=C*W,d.push(R.x,R.y,R.z),M.set(X,A,W).normalize(),u.push(M.x,M.y,M.z),f.push(k,1-x),w.push(g++)}_.push(w)}for(let P=0;P<i;P++)for(let w=0;w<r;w++){const x=_[w][P],C=_[w+1][P],B=_[w+1][P+1],k=_[w][P+1];(t>0||w!==0)&&(l.push(x,C,k),T+=3),(e>0||w!==r-1)&&(l.push(C,B,k),T+=3)}h.addGroup(p,T,0),p+=T}function E(M){const R=g,T=new Dt,A=new D;let P=0;const w=M===!0?t:e,x=M===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,m*x,0),u.push(0,x,0),f.push(.5,.5),g++;const C=g;for(let B=0;B<=i;B++){const O=B/i*c+o,X=Math.cos(O),W=Math.sin(O);A.x=w*W,A.y=m*x,A.z=w*X,d.push(A.x,A.y,A.z),u.push(0,x,0),T.x=X*.5+.5,T.y=W*.5*x+.5,f.push(T.x,T.y),g++}for(let B=0;B<i;B++){const k=R+B,O=C+B;M===!0?l.push(O,O+1,k):l.push(O+1,O,k),P+=3}h.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vn extends _e{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Vn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),h(n),l(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const E=new D,M=new D,R=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],M),f(e[T+2],R),c(E,M,R,y)}function c(y,E,M,R){const T=R+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const w=y.clone().lerp(M,P/T),x=E.clone().lerp(M,P/T),C=T-P;for(let B=0;B<=C;B++)B===0&&P===T?A[P][B]=w:A[P][B]=w.clone().lerp(x,B/C)}for(let P=0;P<T;P++)for(let w=0;w<2*(T-P)-1;w++){const x=Math.floor(w/2);w%2===0?(u(A[P][x+1]),u(A[P+1][x]),u(A[P][x])):(u(A[P][x+1]),u(A[P+1][x+1]),u(A[P+1][x]))}}function h(y){const E=new D;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(y),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function l(){const y=new D;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const M=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(M,1-R)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const E=a[y+0],M=a[y+2],R=a[y+4],T=Math.max(E,M,R),A=Math.min(E,M,R);T>.9&&A<.1&&(E<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,E){const M=y*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function g(){const y=new D,E=new D,M=new D,R=new D,T=new Dt,A=new Dt,P=new Dt;for(let w=0,x=0;w<r.length;w+=9,x+=6){y.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),T.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),R.copy(y).add(E).add(M).divideScalar(3);const C=m(R);_(T,x+0,y,C),_(A,x+2,E,C),_(P,x+4,M,C)}}function _(y,E,M,R){R<0&&y.x===1&&(a[E]=y.x-1),M.x===0&&M.z===0&&(a[E]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.vertices,t.indices,t.radius,t.details)}}class da extends ua{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new da(t.radius,t.detail)}}class Se extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),h=o+1,l=c+1,d=t/o,u=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<l;p++){const y=p*u-a;for(let E=0;E<h;E++){const M=E*d-r;g.push(M,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const E=y+h*p,M=y+h*(p+1),R=y+1+h*(p+1),T=y+1+h*p;f.push(E,M,T),f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.widthSegments,t.heightSegments)}}class fa extends pe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],h=[],l=[];let d=t;const u=(e-t)/i,f=new D,g=new Dt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,l.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,E=y,M=y+n+1,R=y+n+2,T=y+1;o.push(E,M,T),o.push(M,R,T)}}this.setIndex(o),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pa extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const l=[],d=new D,u=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],E=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const T=R/e;d.x=-t*Math.cos(i+T*r)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(i+T*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+M,1-E),y.push(h++)}l.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const E=l[p][y+1],M=l[p][y],R=l[p+1][y],T=l[p+1][y+1];(p!==0||a>0)&&f.push(E,M,T),(p!==n-1||c<Math.PI)&&f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cs extends pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],h=[],l=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),l.x=t*Math.cos(_),l.y=t*Math.sin(_),u.subVectors(d,l).normalize(),c.push(u.x,u.y,u.z),h.push(g/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class re extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ah extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=el,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oh extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ch{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,i.onProgress!==void 0&&i.onProgress(l,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){const d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=h.length;d<u;d+=2){const f=h[d],g=h[d+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null}}}const lh=new ch;class ma{constructor(t){this.manager=t!==void 0?t:lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ma.DEFAULT_MATERIAL_NAME="__DEFAULT";class hh extends ma{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=eo.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Xi("img");function c(){l(),eo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(d){l(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class ga extends ma{constructor(t){super(t)}load(t,e,n,i){const r=new be,a=new hh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class _a extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class uh extends _a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const er=new jt,no=new D,io=new D;class uc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;no.setFromMatrixPosition(t.matrixWorld),e.position.copy(no),io.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(io),e.updateMatrixWorld(),er.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(er),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(er)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const so=new jt,Fi=new D,nr=new D;class dh extends uc{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fi),nr.copy(n.position),nr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nr),n.updateMatrixWorld(),i.makeTranslation(-Fi.x,-Fi.y,-Fi.z),so.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so)}}class dc extends _a{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fc extends cc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fh extends uc{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ro extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new fh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ph extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ao(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ao();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ao(){return performance.now()}function oo(s,t,e,n){const i=gh(n);switch(e){case Xo:return s*t;case Yo:return s*t;case jo:return s*t*2;case ia:return s*t/i.components*i.byteLength;case sa:return s*t/i.components*i.byteLength;case Zo:return s*t*2/i.components*i.byteLength;case ra:return s*t*2/i.components*i.byteLength;case qo:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case aa:return s*t*4/i.components*i.byteLength;case vs:case Ms:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ys:case Ss:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tr:case Ar:return Math.max(s,16)*Math.max(t,8)/4;case wr:case br:return Math.max(s,8)*Math.max(t,8)/2;case Rr:case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Or:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case zr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case kr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Hr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Vr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Wr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Es:case Xr:case qr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $o:case Yr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case jr:case Zr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gh(s){switch(s){case xn:case Ho:return{byteLength:1,components:1};case Vi:case Vo:case qi:return{byteLength:2,components:1};case ea:case na:return{byteLength:2,components:4};case Wn:case ta:case an:return{byteLength:4,components:1};case Wo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function _h(s){const t=new WeakMap;function e(o,c){const h=o.array,l=o.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,h,l),o.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){const l=c.array,d=c.updateRanges;if(s.bindBuffer(h,o),d.length===0)s.bufferSubData(h,0,l);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:r,update:a}}var xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ru=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,du=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_u=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Au=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ku=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ud=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Td=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:xh,alphahash_pars_fragment:vh,alphamap_fragment:Mh,alphamap_pars_fragment:yh,alphatest_fragment:Sh,alphatest_pars_fragment:Eh,aomap_fragment:wh,aomap_pars_fragment:Th,batching_pars_vertex:bh,batching_vertex:Ah,begin_vertex:Rh,beginnormal_vertex:Ch,bsdfs:Ph,iridescence_fragment:Lh,bumpmap_pars_fragment:Dh,clipping_planes_fragment:Ih,clipping_planes_pars_fragment:Uh,clipping_planes_pars_vertex:Fh,clipping_planes_vertex:Nh,color_fragment:Bh,color_pars_fragment:Oh,color_pars_vertex:zh,color_vertex:kh,common:Gh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Yh,colorspace_fragment:jh,colorspace_pars_fragment:Zh,envmap_fragment:$h,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Jh,envmap_pars_vertex:Qh,envmap_physical_pars_fragment:hu,envmap_vertex:tu,fog_vertex:eu,fog_pars_vertex:nu,fog_fragment:iu,fog_pars_fragment:su,gradientmap_pars_fragment:ru,lightmap_pars_fragment:au,lights_lambert_fragment:ou,lights_lambert_pars_fragment:cu,lights_pars_begin:lu,lights_toon_fragment:uu,lights_toon_pars_fragment:du,lights_phong_fragment:fu,lights_phong_pars_fragment:pu,lights_physical_fragment:mu,lights_physical_pars_fragment:gu,lights_fragment_begin:_u,lights_fragment_maps:xu,lights_fragment_end:vu,logdepthbuf_fragment:Mu,logdepthbuf_pars_fragment:yu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:Eu,map_fragment:wu,map_pars_fragment:Tu,map_particle_fragment:bu,map_particle_pars_fragment:Au,metalnessmap_fragment:Ru,metalnessmap_pars_fragment:Cu,morphinstance_vertex:Pu,morphcolor_vertex:Lu,morphnormal_vertex:Du,morphtarget_pars_vertex:Iu,morphtarget_vertex:Uu,normal_fragment_begin:Fu,normal_fragment_maps:Nu,normal_pars_fragment:Bu,normal_pars_vertex:Ou,normal_vertex:zu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:Gu,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:Wu,opaque_fragment:Xu,packing:qu,premultiplied_alpha_fragment:Yu,project_vertex:ju,dithering_fragment:Zu,dithering_pars_fragment:$u,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:Qu,shadowmap_pars_vertex:td,shadowmap_vertex:ed,shadowmask_pars_fragment:nd,skinbase_vertex:id,skinning_pars_vertex:sd,skinning_vertex:rd,skinnormal_vertex:ad,specularmap_fragment:od,specularmap_pars_fragment:cd,tonemapping_fragment:ld,tonemapping_pars_fragment:hd,transmission_fragment:ud,transmission_pars_fragment:dd,uv_pars_fragment:fd,uv_pars_vertex:pd,uv_vertex:md,worldpos_vertex:gd,background_vert:_d,background_frag:xd,backgroundCube_vert:vd,backgroundCube_frag:Md,cube_vert:yd,cube_frag:Sd,depth_vert:Ed,depth_frag:wd,distanceRGBA_vert:Td,distanceRGBA_frag:bd,equirect_vert:Ad,equirect_frag:Rd,linedashed_vert:Cd,linedashed_frag:Pd,meshbasic_vert:Ld,meshbasic_frag:Dd,meshlambert_vert:Id,meshlambert_frag:Ud,meshmatcap_vert:Fd,meshmatcap_frag:Nd,meshnormal_vert:Bd,meshnormal_frag:Od,meshphong_vert:zd,meshphong_frag:kd,meshphysical_vert:Gd,meshphysical_frag:Hd,meshtoon_vert:Vd,meshtoon_frag:Wd,points_vert:Xd,points_frag:qd,shadow_vert:Yd,shadow_frag:jd,sprite_vert:Zd,sprite_frag:$d},nt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},nn={basic:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ie([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ie([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ie([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ie([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ie([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ie([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ie([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ie([nt.lights,nt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};nn.physical={uniforms:Ie([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const gs={r:0,b:0,g:0},Nn=new Ge,Kd=new jt;function Jd(s,t,e,n,i,r,a){const o=new Mt(0);let c=r===!0?0:1,h,l,d=null,u=0,f=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const R=g(E);R===null?p(o,c):R&&R.isColor&&(p(R,1),M=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,M){const R=g(M);R&&(R.isCubeTexture||R.mapping===Rs)?(l===void 0&&(l=new lt(new At(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Si(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Nn.copy(M.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),l.material.uniforms.envMap.value=R,l.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kd.makeRotationFromEuler(Nn)),l.material.toneMapped=$t.getTransfer(R.colorSpace)!==ee,(d!==R||u!==R.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=R,u=R.version,f=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new lt(new Se(2,2),new en({name:"BackgroundMaterial",uniforms:Si(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=$t.getTransfer(R.colorSpace)!==ee,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function p(E,M){E.getRGB(gs,oc(s)),n.buffers.color.setClear(gs.r,gs.g,gs.b,M,a)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:m,dispose:y}}function Qd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(x,C,B,k,O){let X=!1;const W=d(k,B,C);r!==W&&(r=W,h(r.object)),X=f(x,k,B,O),X&&g(x,k,B,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(x,C,B,k),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function h(x){return s.bindVertexArray(x)}function l(x){return s.deleteVertexArray(x)}function d(x,C,B){const k=B.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let X=O[C.id];X===void 0&&(X={},O[C.id]=X);let W=X[k];return W===void 0&&(W=u(c()),X[k]=W),W}function u(x){const C=[],B=[],k=[];for(let O=0;O<e;O++)C[O]=0,B[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,C,B,k){const O=r.attributes,X=C.attributes;let W=0;const $=B.getAttributes();for(const H in $)if($[H].location>=0){const ht=O[H];let xt=X[H];if(xt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),ht===void 0||ht.attribute!==xt||xt&&ht.data!==xt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(x,C,B,k){const O={},X=C.attributes;let W=0;const $=B.getAttributes();for(const H in $)if($[H].location>=0){let ht=X[H];ht===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const xt={};xt.attribute=ht,ht&&ht.data&&(xt.data=ht.data),O[H]=xt,W++}r.attributes=O,r.attributesNum=W,r.index=k}function _(){const x=r.newAttributes;for(let C=0,B=x.length;C<B;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const B=r.newAttributes,k=r.enabledAttributes,O=r.attributeDivisors;B[x]=1,k[x]===0&&(s.enableVertexAttribArray(x),k[x]=1),O[x]!==C&&(s.vertexAttribDivisor(x,C),O[x]=C)}function y(){const x=r.newAttributes,C=r.enabledAttributes;for(let B=0,k=C.length;B<k;B++)C[B]!==x[B]&&(s.disableVertexAttribArray(B),C[B]=0)}function E(x,C,B,k,O,X,W){W===!0?s.vertexAttribIPointer(x,C,B,O,X):s.vertexAttribPointer(x,C,B,k,O,X)}function M(x,C,B,k){_();const O=k.attributes,X=B.getAttributes(),W=C.defaultAttributeValues;for(const $ in X){const H=X[$];if(H.location>=0){let et=O[$];if(et===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const ht=et.normalized,xt=et.itemSize,Bt=t.get(et);if(Bt===void 0)continue;const ie=Bt.buffer,Y=Bt.type,tt=Bt.bytesPerElement,gt=Y===s.INT||Y===s.UNSIGNED_INT||et.gpuType===ta;if(et.isInterleavedBufferAttribute){const rt=et.data,bt=rt.stride,Pt=et.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)p(H.location+Ot,rt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)m(H.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Ot=0;Ot<H.locationSize;Ot++)E(H.location+Ot,xt/H.locationSize,Y,ht,bt*tt,(Pt+xt/H.locationSize*Ot)*tt,gt)}else{if(et.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt,et.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let rt=0;rt<H.locationSize;rt++)E(H.location+rt,xt/H.locationSize,Y,ht,xt*tt,xt/H.locationSize*rt*tt,gt)}}else if(W!==void 0){const ht=W[$];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(H.location,ht);break;case 3:s.vertexAttrib3fv(H.location,ht);break;case 4:s.vertexAttrib4fv(H.location,ht);break;default:s.vertexAttrib1fv(H.location,ht)}}}}y()}function R(){P();for(const x in n){const C=n[x];for(const B in C){const k=C[B];for(const O in k)l(k[O].object),delete k[O];delete C[B]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const B in C){const k=C[B];for(const O in k)l(k[O].object),delete k[O];delete C[B]}delete n[x.id]}function A(x){for(const C in n){const B=n[C];if(B[x.id]===void 0)continue;const k=B[x.id];for(const O in k)l(k[O].object),delete k[O];delete B[x.id]}}function P(){w(),a=!0,r!==i&&(r=i,h(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function tf(s,t,e){let n;function i(h){n=h}function r(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,d){d!==0&&(s.drawArraysInstanced(n,h,l,d),e.update(l,n,d))}function o(h,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,d);let f=0;for(let g=0;g<d;g++)f+=l[g];e.update(f,n,1)}function c(h,l,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)a(h[g],l[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,l,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=l[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ef(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==tn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==xn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==an&&!P)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:R,maxSamples:T}}function nf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new On,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{const y=r?0:n,E=y*4;let M=p.clippingState||null;c.value=M,M=l(g,u,E,f);for(let R=0;R!==E;++R)M[R]=e[R];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==_;++E,M+=4)a.copy(d[E]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sf(s){let t=new WeakMap;function e(a,o){return o===Hi?a.mapping=_i:o===Sr&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hi||o===Sr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Jl(c.height);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const di=4,co=[.125,.215,.35,.446,.526,.582],Gn=20,ir=new fc,lo=new Mt;let sr=null,rr=0,ar=0,or=!1;const zn=(1+Math.sqrt(5))/2,ci=1/zn,ho=[new D(-zn,ci,0),new D(zn,ci,0),new D(-ci,0,zn),new D(ci,0,zn),new D(0,zn,-ci),new D(0,zn,ci),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class uo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sr,rr,ar),this._renderer.xr.enabled=or,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:qi,format:tn,colorSpace:yi,depthBuffer:!1},i=fo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rf(r)),this._blurMaterial=af(r,t,e)}return i}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,ir)}_sceneToCubeUV(t,e,n,i){const o=new ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(lo),l.toneMapping=An,l.autoClear=!1;const f=new rn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new lt(new At,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(lo),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const E=this._cubeSize;_s(i,y*E,p>2?E:0,E,E),l.setRenderTarget(i),_&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=u,l.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=po());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;_s(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ir)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ho[(i-r-1)%ho.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new lt(this._lodPlanes[i],h),u=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),_=r/g,m=isFinite(r)?1+Math.floor(l*_):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const p=[];let y=0;for(let A=0;A<Gn;++A){const P=A/_,w=Math.exp(-P*P/2);p.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const M=this._sizeLods[i],R=3*M*(i>E-di?i-E+di:0),T=4*(this._cubeSize-M);_s(e,R,T,3*M,2*M),c.setRenderTarget(e),c.render(d,ir)}}function rf(s){const t=[],e=[],n=[];let i=s;const r=s-di+1+co.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-di?c=co[a-s+di-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),l=-h,d=1+h,u=[l,l,d,l,d,d,l,l,d,d,l,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),E=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,P=T>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(w,_*g*T),E.set(u,m*g*T);const x=[T,T,T,T,T,T];M.set(x,p*g*T)}const R=new pe;R.setAttribute("position",new te(y,_)),R.setAttribute("uv",new te(E,m)),R.setAttribute("faceIndex",new te(M,p)),t.push(R),i>di&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fo(s,t,e){const n=new Xn(s,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function af(s,t,e){const n=new Float32Array(Gn),i=new D(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function po(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function mo(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function of(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Hi||c===Sr,l=c===_i||c===xi;if(h||l){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new uo(s)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return h&&f&&f.height>0||l&&f&&i(f)?(e===null&&(e=new uo(s)),d=h?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&hi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lf(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function h(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let E=0,M=y.length;E<M;E+=3){const R=y[E+0],T=y[E+1],A=y[E+2];u.push(R,T,T,A,A,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,M=y.length/3-1;E<M;E+=3){const R=E+0,T=E+1,A=E+2;u.push(R,T,T,A,A,R)}}else return;const m=new(Qo(u)?ac:rc)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function l(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function hf(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*a),e.update(f,n,1)}function h(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function l(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)h(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function uf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function df(s,t,e){const n=new WeakMap,i=new ne;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*T*4*d),P=new ec(A,R,T,d);P.type=an,P.needsUpdate=!0;const w=M*4;for(let C=0;C<d;C++){const B=p[C],k=y[C],O=E[C],X=R*T*4*C;for(let W=0;W<B.count;W++){const $=W*w;g===!0&&(i.fromBufferAttribute(B,W),A[X+$+0]=i.x,A[X+$+1]=i.y,A[X+$+2]=i.z,A[X+$+3]=0),_===!0&&(i.fromBufferAttribute(k,W),A[X+$+4]=i.x,A[X+$+5]=i.y,A[X+$+6]=i.z,A[X+$+7]=0),m===!0&&(i.fromBufferAttribute(O,W),A[X+$+8]=i.x,A[X+$+9]=i.y,A[X+$+10]=i.z,A[X+$+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new Dt(R,T)},n.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ff(s,t,e,n){let i=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,d=t.get(c,l);if(i.get(d)!==h&&(t.update(d),i.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==h&&(u.update(),i.set(u,h))}return d}function a(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const mc=new be,go=new hc(1,1),gc=new ec,_c=new Nl,xc=new lc,_o=[],xo=[],vo=new Float32Array(16),Mo=new Float32Array(9),yo=new Float32Array(4);function Ai(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=_o[i];if(r===void 0&&(r=new Float32Array(i),_o[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ps(s,t){let e=xo[t];e===void 0&&(e=new Int32Array(t),xo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function pf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;yo.set(n),s.uniformMatrix2fv(this.addr,!1,yo),Me(e,n)}}function vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Mo.set(n),s.uniformMatrix3fv(this.addr,!1,Mo),Me(e,n)}}function Mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;vo.set(n),s.uniformMatrix4fv(this.addr,!1,vo),Me(e,n)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function Tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function Cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(go.compareFunction=Jo,r=go):r=mc,e.setTexture2D(t||r,i)}function Pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_c,i)}function Lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||xc,i)}function Df(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gc,i)}function If(s){switch(s){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return xf;case 35675:return vf;case 35676:return Mf;case 5124:case 35670:return yf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return wf;case 5125:return Tf;case 36294:return bf;case 36295:return Af;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Df}}function Uf(s,t){s.uniform1fv(this.addr,t)}function Ff(s,t){const e=Ai(t,this.size,2);s.uniform2fv(this.addr,e)}function Nf(s,t){const e=Ai(t,this.size,3);s.uniform3fv(this.addr,e)}function Bf(s,t){const e=Ai(t,this.size,4);s.uniform4fv(this.addr,e)}function Of(s,t){const e=Ai(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function zf(s,t){const e=Ai(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function kf(s,t){const e=Ai(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gf(s,t){s.uniform1iv(this.addr,t)}function Hf(s,t){s.uniform2iv(this.addr,t)}function Vf(s,t){s.uniform3iv(this.addr,t)}function Wf(s,t){s.uniform4iv(this.addr,t)}function Xf(s,t){s.uniform1uiv(this.addr,t)}function qf(s,t){s.uniform2uiv(this.addr,t)}function Yf(s,t){s.uniform3uiv(this.addr,t)}function jf(s,t){s.uniform4uiv(this.addr,t)}function Zf(s,t,e){const n=this.cache,i=t.length,r=Ps(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||mc,r[a])}function $f(s,t,e){const n=this.cache,i=t.length,r=Ps(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||_c,r[a])}function Kf(s,t,e){const n=this.cache,i=t.length,r=Ps(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||xc,r[a])}function Jf(s,t,e){const n=this.cache,i=t.length,r=Ps(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||gc,r[a])}function Qf(s){switch(s){case 5126:return Uf;case 35664:return Ff;case 35665:return Nf;case 35666:return Bf;case 35674:return Of;case 35675:return zf;case 35676:return kf;case 5124:case 35670:return Gf;case 35667:case 35671:return Hf;case 35668:case 35672:return Vf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Jf}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=If(e.type)}}class ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qf(e.type)}}class np{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function So(s,t){s.seq.push(t),s.map[t.id]=t}function ip(s,t,e){const n=s.name,i=n.length;for(cr.lastIndex=0;;){const r=cr.exec(n),a=cr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){So(e,h===void 0?new tp(o,s,t):new ep(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new np(o),So(e,d)),e=d}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);ip(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Eo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const sp=37297;let rp=0;function ap(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wo=new Ut;function op(s){$t._getMatrix(wo,$t.workingColorSpace,s);const t=`mat3( ${wo.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case Ts:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function To(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ap(s.getShaderSource(t),a)}else return i}function cp(s,t){const e=op(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lp(s,t){let e;switch(t){case jc:e="Linear";break;case Zc:e="Reinhard";break;case $c:e="Cineon";break;case ko:e="ACESFilmic";break;case Jc:e="AgX";break;case Qc:e="Neutral";break;case Kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xs=new D;function hp(){$t.getLuminanceCoefficients(xs);const s=xs.x.toFixed(4),t=xs.y.toFixed(4),e=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function up(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function dp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Oi(s){return s!==""}function bo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ao(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(s){return s.replace(pp,gp)}const mp=new Map;function gp(s,t){let e=Nt[t];if(e===void 0){const n=mp.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kr(e)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(s){return s.replace(_p,xp)}function xp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Co(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qr?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case xi:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Sp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zo:t="ENVMAP_BLENDING_MULTIPLY";break;case qc:t="ENVMAP_BLENDING_MIX";break;case Yc:t="ENVMAP_BLENDING_ADD";break}return t}function Ep(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=vp(e),h=Mp(e),l=yp(e),d=Sp(e),u=Ep(e),f=up(e),g=dp(r),_=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),p.length>0&&(p+=`
`)):(m=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),p=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Nt.tonemapping_pars_fragment:"",e.toneMapping!==An?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,cp("linearToOutputTexel",e.outputColorSpace),hp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),a=Kr(a),a=bo(a,e),a=Ao(a,e),o=Kr(o),o=bo(o,e),o=Ao(o,e),a=Ro(a),o=Ro(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,M=y+p+o,R=Eo(i,i.VERTEX_SHADER,E),T=Eo(i,i.FRAGMENT_SHADER,M);i.attachShader(_,R),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(C){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(R).trim(),O=i.getShaderInfoLog(T).trim();let X=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,T);else{const $=To(i,R,"vertex"),H=To(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+$+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||O==="")&&(W=!1);W&&(C.diagnostics={runnable:X,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(R),i.deleteShader(T),P=new ws(i,_),w=fp(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,sp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Tp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ap(t),e.set(t,n)),n}}class Ap{constructor(t){this.id=Tp++,this.code=t,this.usedTimes=0}}function Rp(s,t,e,n,i,r,a){const o=new ic,c=new bp,h=new Set,l=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return h.add(w),w===0?"uv":`uv${w}`}function m(w,x,C,B,k){const O=B.fog,X=k.geometry,W=w.isMeshStandardMaterial?B.environment:null,$=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),H=$&&$.mapping===Rs?$.image.height:null,et=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=ht!==void 0?ht.length:0;let Bt=0;X.morphAttributes.position!==void 0&&(Bt=1),X.morphAttributes.normal!==void 0&&(Bt=2),X.morphAttributes.color!==void 0&&(Bt=3);let ie,Y,tt,gt;if(et){const Qt=nn[et];ie=Qt.vertexShader,Y=Qt.fragmentShader}else ie=w.vertexShader,Y=w.fragmentShader,c.update(w),tt=c.getVertexShaderID(w),gt=c.getFragmentShaderID(w);const rt=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Pt=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,he=!!w.map,Wt=!!w.matcap,fe=!!$,L=!!w.aoMap,He=!!w.lightMap,Gt=!!w.bumpMap,Ht=!!w.normalMap,yt=!!w.displacementMap,oe=!!w.emissiveMap,vt=!!w.metalnessMap,b=!!w.roughnessMap,v=w.anisotropy>0,N=w.clearcoat>0,j=w.dispersion>0,K=w.iridescence>0,q=w.sheen>0,_t=w.transmission>0,at=v&&!!w.anisotropyMap,dt=N&&!!w.clearcoatMap,Xt=N&&!!w.clearcoatNormalMap,Q=N&&!!w.clearcoatRoughnessMap,ft=K&&!!w.iridescenceMap,Tt=K&&!!w.iridescenceThicknessMap,Rt=q&&!!w.sheenColorMap,pt=q&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ft=!!w.specularColorMap,se=!!w.specularIntensityMap,I=_t&&!!w.transmissionMap,it=_t&&!!w.thicknessMap,V=!!w.gradientMap,Z=!!w.alphaMap,ct=w.alphaTest>0,ot=!!w.alphaHash,It=!!w.extensions;let ue=An;w.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Ae={shaderID:et,shaderType:w.type,shaderName:w.name,vertexShader:ie,fragmentShader:Y,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:yi,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:Wt,envMap:fe,envMapMode:fe&&$.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:He,bumpMap:Gt,normalMap:Ht,displacementMap:u&&yt,emissiveMap:oe,normalMapObjectSpace:Ht&&w.normalMapType===il,normalMapTangentSpace:Ht&&w.normalMapType===Ko,metalnessMap:vt,roughnessMap:b,anisotropy:v,anisotropyMap:at,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:Q,dispersion:j,iridescence:K,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Ft,specularIntensityMap:se,transmission:_t,transmissionMap:I,thicknessMap:it,gradientMap:V,opaque:w.transparent===!1&&w.blending===fi&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:ot,combine:w.combine,mapUv:he&&_(w.map.channel),aoMapUv:L&&_(w.aoMap.channel),lightMapUv:He&&_(w.lightMap.channel),bumpMapUv:Gt&&_(w.bumpMap.channel),normalMapUv:Ht&&_(w.normalMap.channel),displacementMapUv:yt&&_(w.displacementMap.channel),emissiveMapUv:oe&&_(w.emissiveMap.channel),metalnessMapUv:vt&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:at&&_(w.anisotropyMap.channel),clearcoatMapUv:dt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(w.sheenRoughnessMap.channel),specularMapUv:Vt&&_(w.specularMap.channel),specularColorMapUv:Ft&&_(w.specularColorMap.channel),specularIntensityMapUv:se&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:it&&_(w.thicknessMap.channel),alphaMapUv:Z&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ht||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(he||Z),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Bt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&$t.getTransfer(w.map.colorSpace)===ee,decodeVideoTextureEmissive:oe&&w.emissiveMap.isVideoTexture===!0&&$t.getTransfer(w.emissiveMap.colorSpace)===ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===we,flipSided:w.side===Ue,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=h.has(1),Ae.vertexUv2s=h.has(2),Ae.vertexUv3s=h.has(3),h.clear(),Ae}function p(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)x.push(C),x.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(y(x,w),E(x,w),x.push(s.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function y(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function E(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const x=g[w.type];let C;if(x){const B=nn[x];C=jl.clone(B.uniforms)}else C=w.uniforms;return C}function R(w,x){let C;for(let B=0,k=l.length;B<k;B++){const O=l[B];if(O.cacheKey===x){C=O,++C.usedTimes;break}}return C===void 0&&(C=new wp(s,x,w,r),l.push(C)),C}function T(w){if(--w.usedTimes===0){const x=l.indexOf(w);l[x]=l[l.length-1],l.pop(),w.destroy()}}function A(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:P}}function Cp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Pp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Po(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Lo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(d,u){e.length>1&&e.sort(d||Pp),n.length>1&&n.sort(u||Po),i.length>1&&i.sort(u||Po)}function l(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:l,sort:h}}function Lp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Lo,s.set(n,[a])):i>=r.length?(a=new Lo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Dp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Mt};break;case"SpotLight":e={position:new D,direction:new D,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Up=0;function Fp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Np(s){const t=new Dp,e=Ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,r=new jt,a=new jt;function o(h){let l=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,E=0,M=0,R=0,T=0,A=0;h.sort(Fp);for(let w=0,x=h.length;w<x;w++){const C=h[w],B=C.color,k=C.intensity,O=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)l+=B.r*k,d+=B.g*k,u+=B.b*k;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],k);A++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=W,f++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(B).multiplyScalar(k),W.distance=O,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[_]=W;const $=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,$.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,M++}_++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(B).multiplyScalar(k),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const $=C.shadow,H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=W,g++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(k),W.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=A,n.version=Up++)}function c(h,l){let d=0,u=0,f=0,g=0,_=0;const m=l.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const E=h[p];if(E.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(E.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Do(s){const t=new Np(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Bp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Do(s),t.set(i,[o])):r>=a.length?(o=new Do(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kp(s,t,e){let n=new la;const i=new Dt,r=new Dt,a=new ne,o=new ah({depthPacking:nl}),c=new oh,h={},l=e.maxTextureSize,d={[_n]:Ue,[Ue]:_n,[we]:we},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Op,fragmentShader:zp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),B=s.state;B.setBlending(bn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==fn&&this.type===fn,O=p===fn&&this.type!==fn;for(let X=0,W=T.length;X<W;X++){const $=T[X],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const et=H.getFrameExtents();if(i.multiply(et),r.copy(H.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/et.x),i.x=r.x*et.x,H.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/et.y),i.y=r.y*et.y,H.mapSize.y=r.y)),H.map===null||k===!0||O===!0){const xt=this.type!==fn?{minFilter:ke,magFilter:ke}:{};H.map!==null&&H.map.dispose(),H.map=new Xn(i.x,i.y,xt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ht=H.getViewportCount();for(let xt=0;xt<ht;xt++){const Bt=H.getViewport(xt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),B.viewport(a),H.updateMatrices($,xt),n=H.getFrustum(),M(A,P,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===fn&&y(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,x,C)};function y(T,A){const P=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,P,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,P,f,_,null)}function E(T,A,P,w){let x=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=x.uuid,k=A.uuid;let O=h[B];O===void 0&&(O={},h[B]=O);let X=O[k];X===void 0&&(X=x.clone(),O[k]=X,A.addEventListener("dispose",R)),x=X}if(x.visible=A.visible,x.wireframe=A.wireframe,w===fn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=s.properties.get(x);B.light=P}return x}function M(T,A,P,w,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const k=t.update(T),O=T.material;if(Array.isArray(O)){const X=k.groups;for(let W=0,$=X.length;W<$;W++){const H=X[W],et=O[H.materialIndex];if(et&&et.visible){const ht=E(T,et,w,x);T.onBeforeShadow(s,T,A,P,k,ht,H),s.renderBufferDirect(P,null,k,ht,T,H),T.onAfterShadow(s,T,A,P,k,ht,H)}}}else if(O.visible){const X=E(T,O,w,x);T.onBeforeShadow(s,T,A,P,k,X,null),s.renderBufferDirect(P,null,k,X,T,null),T.onAfterShadow(s,T,A,P,k,X,null)}}const B=T.children;for(let k=0,O=B.length;k<O;k++)M(B[k],A,P,w,x)}function R(T){T.target.removeEventListener("dispose",R);for(const P in h){const w=h[P],x=T.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}const Gp={[mr]:gr,[_r]:Mr,[xr]:yr,[gi]:vr,[gr]:mr,[Mr]:_r,[yr]:xr,[vr]:gi};function Hp(s,t){function e(){let I=!1;const it=new ne;let V=null;const Z=new ne(0,0,0,0);return{setMask:function(ct){V!==ct&&!I&&(s.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){I=ct},setClear:function(ct,ot,It,ue,Ae){Ae===!0&&(ct*=ue,ot*=ue,It*=ue),it.set(ct,ot,It,ue),Z.equals(it)===!1&&(s.clearColor(ct,ot,It,ue),Z.copy(it))},reset:function(){I=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,it=!1,V=null,Z=null,ct=null;return{setReversed:function(ot){if(it!==ot){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const ue=ct;ct=null,this.setClear(ue)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(ot){V!==ot&&!I&&(s.depthMask(ot),V=ot)},setFunc:function(ot){if(it&&(ot=Gp[ot]),Z!==ot){switch(ot){case mr:s.depthFunc(s.NEVER);break;case gr:s.depthFunc(s.ALWAYS);break;case _r:s.depthFunc(s.LESS);break;case gi:s.depthFunc(s.LEQUAL);break;case xr:s.depthFunc(s.EQUAL);break;case vr:s.depthFunc(s.GEQUAL);break;case Mr:s.depthFunc(s.GREATER);break;case yr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ot}},setLocked:function(ot){I=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),s.clearDepth(ot),ct=ot)},reset:function(){I=!1,V=null,Z=null,ct=null,it=!1}}}function i(){let I=!1,it=null,V=null,Z=null,ct=null,ot=null,It=null,ue=null,Ae=null;return{setTest:function(Qt){I||(Qt?rt(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!I&&(s.stencilMask(Qt),it=Qt)},setFunc:function(Qt,Ye,on){(V!==Qt||Z!==Ye||ct!==on)&&(s.stencilFunc(Qt,Ye,on),V=Qt,Z=Ye,ct=on)},setOp:function(Qt,Ye,on){(ot!==Qt||It!==Ye||ue!==on)&&(s.stencilOp(Qt,Ye,on),ot=Qt,It=Ye,ue=on)},setLocked:function(Qt){I=Qt},setClear:function(Qt){Ae!==Qt&&(s.clearStencil(Qt),Ae=Qt)},reset:function(){I=!1,it=null,V=null,Z=null,ct=null,ot=null,It=null,ue=null,Ae=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,h=new WeakMap;let l={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,E=null,M=null,R=null,T=null,A=new Mt(0,0,0),P=0,w=!1,x=null,C=null,B=null,k=null,O=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=$>=2);let et=null,ht={};const xt=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),ie=new ne().fromArray(xt),Y=new ne().fromArray(Bt);function tt(I,it,V,Z){const ct=new Uint8Array(4),ot=s.createTexture();s.bindTexture(I,ot),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<V;It++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(it+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return ot}const gt={};gt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(gi),Gt(!1),Ht(ba),rt(s.CULL_FACE),L(bn);function rt(I){l[I]!==!0&&(s.enable(I),l[I]=!0)}function bt(I){l[I]!==!1&&(s.disable(I),l[I]=!1)}function Pt(I,it){return d[I]!==it?(s.bindFramebuffer(I,it),d[I]=it,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=it),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(I,it){let V=f,Z=!1;if(I){V=u.get(it),V===void 0&&(V=[],u.set(it,V));const ct=I.textures;if(V.length!==ct.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,It=ct.length;ot<It;ot++)V[ot]=s.COLOR_ATTACHMENT0+ot;V.length=ct.length,Z=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,Z=!0);Z&&s.drawBuffers(V)}function he(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Wt={[kn]:s.FUNC_ADD,[Cc]:s.FUNC_SUBTRACT,[Pc]:s.FUNC_REVERSE_SUBTRACT};Wt[Lc]=s.MIN,Wt[Dc]=s.MAX;const fe={[Ic]:s.ZERO,[Uc]:s.ONE,[Fc]:s.SRC_COLOR,[fr]:s.SRC_ALPHA,[Gc]:s.SRC_ALPHA_SATURATE,[zc]:s.DST_COLOR,[Bc]:s.DST_ALPHA,[Nc]:s.ONE_MINUS_SRC_COLOR,[pr]:s.ONE_MINUS_SRC_ALPHA,[kc]:s.ONE_MINUS_DST_COLOR,[Oc]:s.ONE_MINUS_DST_ALPHA,[Hc]:s.CONSTANT_COLOR,[Vc]:s.ONE_MINUS_CONSTANT_COLOR,[Wc]:s.CONSTANT_ALPHA,[Xc]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,it,V,Z,ct,ot,It,ue,Ae,Qt){if(I===bn){_===!0&&(bt(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),I!==Rc){if(I!==m||Qt!==w){if((p!==kn||M!==kn)&&(s.blendEquation(s.FUNC_ADD),p=kn,M=kn),Qt)switch(I){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dr:s.blendFunc(s.ONE,s.ONE);break;case Aa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ra:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Aa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ra:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,E=null,R=null,T=null,A.set(0,0,0),P=0,m=I,w=Qt}return}ct=ct||it,ot=ot||V,It=It||Z,(it!==p||ct!==M)&&(s.blendEquationSeparate(Wt[it],Wt[ct]),p=it,M=ct),(V!==y||Z!==E||ot!==R||It!==T)&&(s.blendFuncSeparate(fe[V],fe[Z],fe[ot],fe[It]),y=V,E=Z,R=ot,T=It),(ue.equals(A)===!1||Ae!==P)&&(s.blendColor(ue.r,ue.g,ue.b,Ae),A.copy(ue),P=Ae),m=I,w=!1}function He(I,it){I.side===we?bt(s.CULL_FACE):rt(s.CULL_FACE);let V=I.side===Ue;it&&(V=!V),Gt(V),I.blending===fi&&I.transparent===!1?L(bn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(I){x!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),x=I)}function Ht(I){I!==Tc?(rt(s.CULL_FACE),I!==C&&(I===ba?s.cullFace(s.BACK):I===bc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),C=I}function yt(I){I!==B&&(W&&s.lineWidth(I),B=I)}function oe(I,it,V){I?(rt(s.POLYGON_OFFSET_FILL),(k!==it||O!==V)&&(s.polygonOffset(it,V),k=it,O=V)):bt(s.POLYGON_OFFSET_FILL)}function vt(I){I?rt(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function b(I){I===void 0&&(I=s.TEXTURE0+X-1),et!==I&&(s.activeTexture(I),et=I)}function v(I,it,V){V===void 0&&(et===null?V=s.TEXTURE0+X-1:V=et);let Z=ht[V];Z===void 0&&(Z={type:void 0,texture:void 0},ht[V]=Z),(Z.type!==I||Z.texture!==it)&&(et!==V&&(s.activeTexture(V),et=V),s.bindTexture(I,it||gt[I]),Z.type=I,Z.texture=it)}function N(){const I=ht[et];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(I){ie.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function pt(I){Y.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Vt(I,it){let V=h.get(it);V===void 0&&(V=new WeakMap,h.set(it,V));let Z=V.get(I);Z===void 0&&(Z=s.getUniformBlockIndex(it,I.name),V.set(I,Z))}function Ft(I,it){const Z=h.get(it).get(I);c.get(it)!==Z&&(s.uniformBlockBinding(it,Z,I.__bindingPointIndex),c.set(it,Z))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},et=null,ht={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,E=null,M=null,R=null,T=null,A=new Mt(0,0,0),P=0,w=!1,x=null,C=null,B=null,k=null,O=null,ie.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:he,setBlending:L,setMaterial:He,setFlipSided:Gt,setCullFace:Ht,setLineWidth:yt,setPolygonOffset:oe,setScissorTest:vt,activeTexture:b,bindTexture:v,unbindTexture:N,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Vt,uniformBlockBinding:Ft,texStorage2D:Xt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:se}}function Vp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,l=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):Xi("canvas")}function _(b,v,N){let j=1;const K=vt(b);if((K.width>N||K.height>N)&&(j=N/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(j*K.width),_t=Math.floor(j*K.height);d===void 0&&(d=g(q,_t));const at=v?g(q,_t):d;return at.width=q,at.height=_t,at.getContext("2d").drawImage(b,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+_t+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){s.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,v,N,j,K=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=v;if(v===s.RED&&(N===s.FLOAT&&(q=s.R32F),N===s.HALF_FLOAT&&(q=s.R16F),N===s.UNSIGNED_BYTE&&(q=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.R8UI),N===s.UNSIGNED_SHORT&&(q=s.R16UI),N===s.UNSIGNED_INT&&(q=s.R32UI),N===s.BYTE&&(q=s.R8I),N===s.SHORT&&(q=s.R16I),N===s.INT&&(q=s.R32I)),v===s.RG&&(N===s.FLOAT&&(q=s.RG32F),N===s.HALF_FLOAT&&(q=s.RG16F),N===s.UNSIGNED_BYTE&&(q=s.RG8)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RG8UI),N===s.UNSIGNED_SHORT&&(q=s.RG16UI),N===s.UNSIGNED_INT&&(q=s.RG32UI),N===s.BYTE&&(q=s.RG8I),N===s.SHORT&&(q=s.RG16I),N===s.INT&&(q=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGB8UI),N===s.UNSIGNED_SHORT&&(q=s.RGB16UI),N===s.UNSIGNED_INT&&(q=s.RGB32UI),N===s.BYTE&&(q=s.RGB8I),N===s.SHORT&&(q=s.RGB16I),N===s.INT&&(q=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),N===s.UNSIGNED_INT&&(q=s.RGBA32UI),N===s.BYTE&&(q=s.RGBA8I),N===s.SHORT&&(q=s.RGBA16I),N===s.INT&&(q=s.RGBA32I)),v===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),v===s.RGBA){const _t=K?Ts:$t.getTransfer(j);N===s.FLOAT&&(q=s.RGBA32F),N===s.HALF_FLOAT&&(q=s.RGBA16F),N===s.UNSIGNED_BYTE&&(q=_t===ee?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(b,v){let N;return b?v===null||v===Wn||v===vi?N=s.DEPTH24_STENCIL8:v===an?N=s.DEPTH32F_STENCIL8:v===Vi&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===vi?N=s.DEPTH_COMPONENT24:v===an?N=s.DEPTH_COMPONENT32F:v===Vi&&(N=s.DEPTH_COMPONENT16),N}function R(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ke&&b.minFilter!==qe?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){const v=b.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&l.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),x(v)}function P(b){const v=n.get(b);if(v.__webglInit===void 0)return;const N=b.source,j=u.get(N);if(j){const K=j[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(b),Object.keys(j).length===0&&u.delete(N)}n.remove(b)}function w(b){const v=n.get(b);s.deleteTexture(v.__webglTexture);const N=b.source,j=u.get(N);delete j[v.__cacheKey],a.memory.textures--}function x(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let K=0;K<v.__webglFramebuffer[j].length;K++)s.deleteFramebuffer(v.__webglFramebuffer[j][K]);else s.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)s.deleteFramebuffer(v.__webglFramebuffer[j]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=b.textures;for(let j=0,K=N.length;j<K;j++){const q=n.get(N[j]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[j])}n.remove(b)}let C=0;function B(){C=0}function k(){const b=C;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),C+=1,b}function O(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function X(b,v){const N=n.get(b);if(b.isVideoTexture&&yt(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,b,v);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function W(b,v){const N=n.get(b);if(b.version>0&&N.__version!==b.version){Y(N,b,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function $(b,v){const N=n.get(b);if(b.version>0&&N.__version!==b.version){Y(N,b,v);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function H(b,v){const N=n.get(b);if(b.version>0&&N.__version!==b.version){tt(N,b,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const et={[Cn]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[Er]:s.MIRRORED_REPEAT},ht={[ke]:s.NEAREST,[tl]:s.NEAREST_MIPMAP_NEAREST,[Zi]:s.NEAREST_MIPMAP_LINEAR,[qe]:s.LINEAR,[Is]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},xt={[sl]:s.NEVER,[hl]:s.ALWAYS,[rl]:s.LESS,[Jo]:s.LEQUAL,[al]:s.EQUAL,[ll]:s.GEQUAL,[ol]:s.GREATER,[cl]:s.NOTEQUAL};function Bt(b,v){if(v.type===an&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===qe||v.magFilter===Is||v.magFilter===Zi||v.magFilter===Hn||v.minFilter===qe||v.minFilter===Is||v.minFilter===Zi||v.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,et[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,et[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,et[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ht[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ke||v.minFilter!==Zi&&v.minFilter!==Hn||v.type===an&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ie(b,v){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",T));const j=v.source;let K=u.get(j);K===void 0&&(K={},u.set(j,K));const q=O(v);if(q!==b.__cacheKey){K[q]===void 0&&(K[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[q].usedTimes++;const _t=K[b.__cacheKey];_t!==void 0&&(K[b.__cacheKey].usedTimes--,_t.usedTimes===0&&w(v)),b.__cacheKey=q,b.__webglTexture=K[q].texture}return N}function Y(b,v,N){let j=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=s.TEXTURE_3D);const K=ie(b,v),q=v.source;e.bindTexture(j,b.__webglTexture,s.TEXTURE0+N);const _t=n.get(q);if(q.version!==_t.__version||K===!0){e.activeTexture(s.TEXTURE0+N);const at=$t.getPrimaries($t.workingColorSpace),dt=v.colorSpace===sn?null:$t.getPrimaries(v.colorSpace),Xt=v.colorSpace===sn||at===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Q=_(v.image,!1,i.maxTextureSize);Q=oe(v,Q);const ft=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type);let Rt=E(v.internalFormat,ft,Tt,v.colorSpace,v.isVideoTexture);Bt(j,v);let pt;const Vt=v.mipmaps,Ft=v.isVideoTexture!==!0,se=_t.__version===void 0||K===!0,I=q.dataReady,it=R(v,Q);if(v.isDepthTexture)Rt=M(v.format===Mi,v.type),se&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,Tt,null));else if(v.isDataTexture)if(Vt.length>0){Ft&&se&&e.texStorage2D(s.TEXTURE_2D,it,Rt,Vt[0].width,Vt[0].height);for(let V=0,Z=Vt.length;V<Z;V++)pt=Vt[V],Ft?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(s.TEXTURE_2D,V,Rt,pt.width,pt.height,0,ft,Tt,pt.data);v.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(s.TEXTURE_2D,it,Rt,Q.width,Q.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Tt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,Tt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,Rt,Vt[0].width,Vt[0].height,Q.depth);for(let V=0,Z=Vt.length;V<Z;V++)if(pt=Vt[V],v.format!==tn)if(ft!==null)if(Ft){if(I)if(v.layerUpdates.size>0){const ct=oo(pt.width,pt.height,v.format,v.type);for(const ot of v.layerUpdates){const It=pt.data.subarray(ot*ct/pt.data.BYTES_PER_ELEMENT,(ot+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,ot,pt.width,pt.height,1,ft,It)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Rt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,Tt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,Rt,pt.width,pt.height,Q.depth,0,ft,Tt,pt.data)}else{Ft&&se&&e.texStorage2D(s.TEXTURE_2D,it,Rt,Vt[0].width,Vt[0].height);for(let V=0,Z=Vt.length;V<Z;V++)pt=Vt[V],v.format!==tn?ft!==null?Ft?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(s.TEXTURE_2D,V,Rt,pt.width,pt.height,0,ft,Tt,pt.data)}else if(v.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,Rt,Q.width,Q.height,Q.depth),I)if(v.layerUpdates.size>0){const V=oo(Q.width,Q.height,v.format,v.type);for(const Z of v.layerUpdates){const ct=Q.data.subarray(Z*V/Q.data.BYTES_PER_ELEMENT,(Z+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ft,Tt,ct)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(v.isData3DTexture)Ft?(se&&e.texStorage3D(s.TEXTURE_3D,it,Rt,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(v.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(s.TEXTURE_2D,it,Rt,Q.width,Q.height);else{let V=Q.width,Z=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(s.TEXTURE_2D,ct,Rt,V,Z,0,ft,Tt,null),V>>=1,Z>>=1}}else if(Vt.length>0){if(Ft&&se){const V=vt(Vt[0]);e.texStorage2D(s.TEXTURE_2D,it,Rt,V.width,V.height)}for(let V=0,Z=Vt.length;V<Z;V++)pt=Vt[V],Ft?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ft,Tt,pt):e.texImage2D(s.TEXTURE_2D,V,Rt,ft,Tt,pt);v.generateMipmaps=!1}else if(Ft){if(se){const V=vt(Q);e.texStorage2D(s.TEXTURE_2D,it,Rt,V.width,V.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Tt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Rt,ft,Tt,Q);m(v)&&p(j),_t.__version=q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function tt(b,v,N){if(v.image.length!==6)return;const j=ie(b,v),K=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+N);const q=n.get(K);if(K.version!==q.__version||j===!0){e.activeTexture(s.TEXTURE0+N);const _t=$t.getPrimaries($t.workingColorSpace),at=v.colorSpace===sn?null:$t.getPrimaries(v.colorSpace),dt=v.colorSpace===sn||_t===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Xt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!Xt&&!Q?ft[Z]=_(v.image[Z],!0,i.maxCubemapSize):ft[Z]=Q?v.image[Z].image:v.image[Z],ft[Z]=oe(v,ft[Z]);const Tt=ft[0],Rt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),Vt=E(v.internalFormat,Rt,pt,v.colorSpace),Ft=v.isVideoTexture!==!0,se=q.__version===void 0||j===!0,I=K.dataReady;let it=R(v,Tt);Bt(s.TEXTURE_CUBE_MAP,v);let V;if(Xt){Ft&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Vt,Tt.width,Tt.height);for(let Z=0;Z<6;Z++){V=ft[Z].mipmaps;for(let ct=0;ct<V.length;ct++){const ot=V[ct];v.format!==tn?Rt!==null?Ft?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,Rt,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,Vt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,ot.width,ot.height,Rt,pt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,Vt,ot.width,ot.height,0,Rt,pt,ot.data)}}}else{if(V=v.mipmaps,Ft&&se){V.length>0&&it++;const Z=vt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Ft?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,Rt,pt,ft[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,ft[Z].width,ft[Z].height,0,Rt,pt,ft[Z].data);for(let ct=0;ct<V.length;ct++){const It=V[ct].image[Z].image;Ft?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,It.width,It.height,Rt,pt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,Vt,It.width,It.height,0,Rt,pt,It.data)}}else{Ft?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Rt,pt,ft[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,Rt,pt,ft[Z]);for(let ct=0;ct<V.length;ct++){const ot=V[ct];Ft?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Rt,pt,ot.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,Vt,Rt,pt,ot.image[Z])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),q.__version=K.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function gt(b,v,N,j,K,q){const _t=r.convert(N.format,N.colorSpace),at=r.convert(N.type),dt=E(N.internalFormat,_t,at,N.colorSpace),Xt=n.get(v),Q=n.get(N);if(Q.__renderTarget=v,!Xt.__hasExternalTextures){const ft=Math.max(1,v.width>>q),Tt=Math.max(1,v.height>>q);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,q,dt,ft,Tt,v.depth,0,_t,at,null):e.texImage2D(K,q,dt,ft,Tt,0,_t,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Ht(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,K,Q.__webglTexture,0,Gt(v)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,K,Q.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(b,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer){const j=v.depthTexture,K=j&&j.isDepthTexture?j.type:null,q=M(v.stencilBuffer,K),_t=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Gt(v);Ht(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,q,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,q,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,b)}else{const j=v.textures;for(let K=0;K<j.length;K++){const q=j[K],_t=r.convert(q.format,q.colorSpace),at=r.convert(q.type),dt=E(q.internalFormat,_t,at,q.colorSpace),Xt=Gt(v);N&&Ht(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,dt,v.width,v.height):Ht(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,dt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,dt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const K=j.__webglTexture,q=Gt(v);if(v.depthTexture.format===pi)Ht(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(v.depthTexture.format===Mi)Ht(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pt(b){const v=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=j}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");bt(v.__webglFramebuffer,b)}else if(N){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=s.createRenderbuffer(),rt(v.__webglDepthbuffer[j],b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),rt(v.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(b,v,N){const j=n.get(b);v!==void 0&&gt(j.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Pt(b)}function he(b){const v=b.texture,N=n.get(b),j=n.get(v);b.addEventListener("dispose",A);const K=b.textures,q=b.isWebGLCubeRenderTarget===!0,_t=K.length>1;if(_t||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=v.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[at]=[];for(let dt=0;dt<v.mipmaps.length;dt++)N.__webglFramebuffer[at][dt]=s.createFramebuffer()}else N.__webglFramebuffer[at]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)N.__webglFramebuffer[at]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(_t)for(let at=0,dt=K.length;at<dt;at++){const Xt=n.get(K[at]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Ht(b)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let at=0;at<K.length;at++){const dt=K[at];N.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[at]);const Xt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),ft=E(dt.internalFormat,Xt,Q,dt.colorSpace,b.isXRRenderTarget===!0),Tt=Gt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,ft,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,N.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)gt(N.__webglFramebuffer[at][dt],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else gt(N.__webglFramebuffer[at],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,dt=K.length;at<dt;at++){const Xt=K[at],Q=n.get(Xt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Bt(s.TEXTURE_2D,Xt),gt(N.__webglFramebuffer,b,Xt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(Xt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Bt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)gt(N.__webglFramebuffer[dt],b,v,s.COLOR_ATTACHMENT0,at,dt);else gt(N.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,at,0);m(v)&&p(at),e.unbindTexture()}b.depthBuffer&&Pt(b)}function Wt(b){const v=b.textures;for(let N=0,j=v.length;N<j;N++){const K=v[N];if(m(K)){const q=y(b),_t=n.get(K).__webglTexture;e.bindTexture(q,_t),p(q),e.unbindTexture()}}}const fe=[],L=[];function He(b){if(b.samples>0){if(Ht(b)===!1){const v=b.textures,N=b.width,j=b.height;let K=s.COLOR_BUFFER_BIT;const q=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(b),at=v.length>1;if(at)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const Xt=n.get(v[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,N,j,0,0,N,j,K,s.NEAREST),c===!0&&(fe.length=0,L.length=0,fe.push(s.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(fe.push(q),L.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const Xt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Gt(b){return Math.min(i.maxSamples,b.samples)}function Ht(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function yt(b){const v=a.render.frame;l.get(b)!==v&&(l.set(b,v),b.update())}function oe(b,v){const N=b.colorSpace,j=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==yi&&N!==sn&&($t.getTransfer(N)===ee?(j!==tn||K!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function vt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ht}function Wp(s,t){function e(n,i=sn){let r;const a=$t.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===ea)return s.UNSIGNED_SHORT_4_4_4_4;if(n===na)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ho)return s.BYTE;if(n===Vo)return s.SHORT;if(n===Vi)return s.UNSIGNED_SHORT;if(n===ta)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===Xo)return s.ALPHA;if(n===qo)return s.RGB;if(n===tn)return s.RGBA;if(n===Yo)return s.LUMINANCE;if(n===jo)return s.LUMINANCE_ALPHA;if(n===pi)return s.DEPTH_COMPONENT;if(n===Mi)return s.DEPTH_STENCIL;if(n===ia)return s.RED;if(n===sa)return s.RED_INTEGER;if(n===Zo)return s.RG;if(n===ra)return s.RG_INTEGER;if(n===aa)return s.RGBA_INTEGER;if(n===vs||n===Ms||n===ys||n===Ss)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wr||n===Tr||n===br||n===Ar)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rr||n===Cr||n===Pr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rr||n===Cr)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lr||n===Dr||n===Ir||n===Ur||n===Fr||n===Nr||n===Br||n===Or||n===zr||n===kr||n===Gr||n===Hr||n===Vr||n===Wr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ir)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ur)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Br)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Or)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===Xr||n===qr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Es)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===Yr||n===jr||n===Zr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Es)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Xp={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new be,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new en({vertexShader:qp,fragmentShader:Yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new Se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zp extends Ei{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,d=null,u=null,f=null,g=null;const _=new jp,m=e.getContextAttributes();let p=null,y=null;const E=[],M=[],R=new Dt;let T=null;const A=new ze;A.viewport=new ne;const P=new ze;P.viewport=new ne;const w=[A,P],x=new ph;let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=E[Y];return tt===void 0&&(tt=new lr,E[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=E[Y];return tt===void 0&&(tt=new lr,E[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=E[Y];return tt===void 0&&(tt=new lr,E[Y]=tt),tt.getHandSpace()};function k(Y){const tt=M.indexOf(Y.inputSource);if(tt===-1)return;const gt=E[tt];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,h||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<E.length;Y++){const tt=M[Y];tt!==null&&(M[Y]=null,E[Y].disconnect(tt))}C=null,B=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,y=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",O),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let gt=null,rt=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?Mi:pi,rt=m.stencil?vi:Wn);const Pt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Pt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Xn(u.textureWidth,u.textureHeight,{format:tn,type:xn,depthTexture:new hc(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let tt=0;tt<Y.removed.length;tt++){const gt=Y.removed[tt],rt=M.indexOf(gt);rt>=0&&(M[rt]=null,E[rt].disconnect(gt))}for(let tt=0;tt<Y.added.length;tt++){const gt=Y.added[tt];let rt=M.indexOf(gt);if(rt===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=M.length){M.push(gt),rt=Pt;break}else if(M[Pt]===null){M[Pt]=gt,rt=Pt;break}if(rt===-1)break}const bt=E[rt];bt&&bt.connect(gt)}}const W=new D,$=new D;function H(Y,tt,gt){W.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(gt.matrixWorld);const rt=W.distanceTo($),bt=tt.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),he=bt[14]/(bt[10]+1),Wt=(bt[9]+1)/bt[5],fe=(bt[9]-1)/bt[5],L=(bt[8]-1)/bt[0],He=(Pt[8]+1)/Pt[0],Gt=Ot*L,Ht=Ot*He,yt=rt/(-L+He),oe=yt*-L;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const vt=Ot+yt,b=he+yt,v=Gt-oe,N=Ht+(rt-oe),j=Wt*he/b*vt,K=fe*he/b*vt;Y.projectionMatrix.makePerspective(v,N,j,K,vt,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let tt=Y.near,gt=Y.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),x.near=P.near=A.near=tt,x.far=P.far=A.far=gt,(C!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,B=x.far),A.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,x.layers.mask=A.layers.mask|P.layers.mask;const rt=Y.parent,bt=x.cameras;et(x,rt);for(let Pt=0;Pt<bt.length;Pt++)et(bt[Pt],rt);bt.length===2?H(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),ht(Y,x,rt)};function ht(Y,tt,gt){gt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xt=null;function Bt(Y,tt){if(l=tt.getViewerPose(h||a),g=tt,l!==null){const gt=l.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let rt=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Pt=0;Pt<gt.length;Pt++){const Ot=gt[Pt];let he=null;if(f!==null)he=f.getViewport(Ot);else{const fe=d.getViewSubImage(u,Ot);he=fe.viewport,Pt===0&&(t.setRenderTargetTextures(y,fe.colorTexture,u.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(y))}let Wt=w[Pt];Wt===void 0&&(Wt=new ze,Wt.layers.enable(Pt),Wt.viewport=new ne,w[Pt]=Wt),Wt.matrix.fromArray(Ot.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ot.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(x.matrix.copy(Wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(Wt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Pt=d.getDepthInformation(gt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let gt=0;gt<E.length;gt++){const rt=M[gt],bt=E[gt];rt!==null&&bt!==void 0&&bt.update(rt,tt,h||a)}xt&&xt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const ie=new pc;ie.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}}const Bn=new Ge,$p=new jt;function Kp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,oc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,E):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,M=y.envMapRotation;E&&(m.envMap.value=E,Bn.copy(M),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4($p.makeRotationFromEuler(Bn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const M=E.program;n.uniformBlockBinding(y,M)}function h(y,E){let M=i[y.id];M===void 0&&(g(y),M=l(y),i[y.id]=M,y.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(y,R);const T=t.render.frame;r[y.id]!==T&&(u(y),r[y.id]=T)}function l(y){const E=d();y.__bindingPointIndex=E;const M=s.createBuffer(),R=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const E=i[y.id],M=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let T=0,A=M.length;T<A;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,x=P.length;w<x;w++){const C=P[w];if(f(C,T,w,R)===!0){const B=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let X=0;X<k.length;X++){const W=k[X],$=_(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,B+O,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,E,M,R){const T=y.value,A=E+"_"+M;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const E=y.uniforms;let M=0;const R=16;for(let A=0,P=E.length;A<P;A++){const w=Array.isArray(E[A])?E[A]:[E[A]];for(let x=0,C=w.length;x<C;x++){const B=w[x],k=Array.isArray(B.value)?B.value:[B.value];for(let O=0,X=k.length;O<X;O++){const W=k[O],$=_(W),H=M%R,et=H%$.boundary,ht=H+et;M+=et,ht!==0&&R-ht<$.storage&&(M+=R-ht),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=$.storage}}}const T=M%R;return T>0&&(M+=R-T),y.__size=M,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:h,dispose:p}}class Qp{constructor(t={}){const{canvas:e=Al(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=An,this.toneMappingExposure=1;const M=this;let R=!1,T=0,A=0,P=null,w=-1,x=null;const C=new ne,B=new ne;let k=null;const O=new Mt(0);let X=0,W=e.width,$=e.height,H=1,et=null,ht=null;const xt=new ne(0,0,W,$),Bt=new ne(0,0,W,$);let ie=!1;const Y=new la;let tt=!1,gt=!1;this.transmissionResolutionScale=1;const rt=new jt,bt=new jt,Pt=new D,Ot=new ne,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function fe(){return P===null?H:1}let L=n;function He(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jr}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const U="webgl2";if(L=He(U,S),L===null)throw He(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Gt,Ht,yt,oe,vt,b,v,N,j,K,q,_t,at,dt,Xt,Q,ft,Tt,Rt,pt,Vt,Ft,se,I;function it(){Gt=new cf(L),Gt.init(),Ft=new Wp(L,Gt),Ht=new ef(L,Gt,t,Ft),yt=new Hp(L,Gt),Ht.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),oe=new uf(L),vt=new Cp,b=new Vp(L,Gt,yt,vt,Ht,Ft,oe),v=new sf(M),N=new of(M),j=new _h(L),se=new Qd(L,j),K=new lf(L,j,oe,se),q=new ff(L,K,j,oe),Rt=new df(L,Ht,b),Q=new nf(vt),_t=new Rp(M,v,N,Gt,Ht,se,Q),at=new Kp(M,vt),dt=new Lp,Xt=new Bp(Gt),Tt=new Jd(M,v,N,yt,q,f,c),ft=new kp(M,q,Ht),I=new Jp(L,oe,Ht,yt),pt=new tf(L,Gt,oe),Vt=new hf(L,Gt,oe),oe.programs=_t.programs,M.capabilities=Ht,M.extensions=Gt,M.properties=vt,M.renderLists=dt,M.shadowMap=ft,M.state=yt,M.info=oe}it();const V=new Zp(M,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(W,$,!1))},this.getSize=function(S){return S.set(W,$)},this.setSize=function(S,U,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,$=U,e.width=Math.floor(S*H),e.height=Math.floor(U*H),z===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*H,$*H).floor()},this.setDrawingBufferSize=function(S,U,z){W=S,$=U,H=z,e.width=Math.floor(S*z),e.height=Math.floor(U*z),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,U,z,G){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,U,z,G),yt.viewport(C.copy(xt).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Bt)},this.setScissor=function(S,U,z,G){S.isVector4?Bt.set(S.x,S.y,S.z,S.w):Bt.set(S,U,z,G),yt.scissor(B.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){yt.setScissorTest(ie=S)},this.setOpaqueSort=function(S){et=S},this.setTransparentSort=function(S){ht=S},this.getClearColor=function(S){return S.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(S=!0,U=!0,z=!0){let G=0;if(S){let F=!1;if(P!==null){const J=P.texture.format;F=J===aa||J===ra||J===sa}if(F){const J=P.texture.type,st=J===xn||J===Wn||J===Vi||J===vi||J===ea||J===na,ut=Tt.getClearColor(),mt=Tt.getClearAlpha(),Ct=ut.r,Lt=ut.g,Et=ut.b;st?(g[0]=Ct,g[1]=Lt,g[2]=Et,g[3]=mt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ct,_[1]=Lt,_[2]=Et,_[3]=mt,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Tt.dispose(),dt.dispose(),Xt.dispose(),vt.dispose(),v.dispose(),N.dispose(),q.dispose(),se.dispose(),I.dispose(),_t.dispose(),V.dispose(),V.removeEventListener("sessionstart",va),V.removeEventListener("sessionend",Ma),Pn.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=oe.autoReset,U=ft.enabled,z=ft.autoUpdate,G=ft.needsUpdate,F=ft.type;it(),oe.autoReset=S,ft.enabled=U,ft.autoUpdate=z,ft.needsUpdate=G,ft.type=F}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){const U=S.target;U.removeEventListener("dispose",It),ue(U)}function ue(S){Ae(S),vt.remove(S)}function Ae(S){const U=vt.get(S).programs;U!==void 0&&(U.forEach(function(z){_t.releaseProgram(z)}),S.isShaderMaterial&&_t.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,z,G,F,J){U===null&&(U=he);const st=F.isMesh&&F.matrixWorld.determinant()<0,ut=vc(S,U,z,G,F);yt.setMaterial(G,st);let mt=z.index,Ct=1;if(G.wireframe===!0){if(mt=K.getWireframeAttribute(z),mt===void 0)return;Ct=2}const Lt=z.drawRange,Et=z.attributes.position;let qt=Lt.start*Ct,Kt=(Lt.start+Lt.count)*Ct;J!==null&&(qt=Math.max(qt,J.start*Ct),Kt=Math.min(Kt,(J.start+J.count)*Ct)),mt!==null?(qt=Math.max(qt,0),Kt=Math.min(Kt,mt.count)):Et!=null&&(qt=Math.max(qt,0),Kt=Math.min(Kt,Et.count));const me=Kt-qt;if(me<0||me===1/0)return;se.setup(F,G,ut,z,mt);let de,Zt=pt;if(mt!==null&&(de=j.get(mt),Zt=Vt,Zt.setIndex(de)),F.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*fe()),Zt.setMode(L.LINES)):Zt.setMode(L.TRIANGLES);else if(F.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),yt.setLineWidth(wt*fe()),F.isLineSegments?Zt.setMode(L.LINES):F.isLineLoop?Zt.setMode(L.LINE_LOOP):Zt.setMode(L.LINE_STRIP)}else F.isPoints?Zt.setMode(L.POINTS):F.isSprite&&Zt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Zt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const wt=F._multiDrawStarts,Te=F._multiDrawCounts,Jt=F._multiDrawCount,je=mt?j.get(mt).bytesPerElement:1,Yn=vt.get(G).currentProgram.getUniforms();for(let Ne=0;Ne<Jt;Ne++)Yn.setValue(L,"_gl_DrawID",Ne),Zt.render(wt[Ne]/je,Te[Ne])}else if(F.isInstancedMesh)Zt.renderInstances(qt,me,F.count);else if(z.isInstancedBufferGeometry){const wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Te=Math.min(z.instanceCount,wt);Zt.renderInstances(qt,me,Te)}else Zt.render(qt,me)};function Qt(S,U,z){S.transparent===!0&&S.side===we&&S.forceSinglePass===!1?(S.side=Ue,S.needsUpdate=!0,ji(S,U,z),S.side=_n,S.needsUpdate=!0,ji(S,U,z),S.side=we):ji(S,U,z)}this.compile=function(S,U,z=null){z===null&&(z=S),p=Xt.get(z),p.init(U),E.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const J=F.material;if(J)if(Array.isArray(J))for(let st=0;st<J.length;st++){const ut=J[st];Qt(ut,z,F),G.add(ut)}else Qt(J,z,F),G.add(J)}),E.pop(),p=null,G},this.compileAsync=function(S,U,z=null){const G=this.compile(S,U,z);return new Promise(F=>{function J(){if(G.forEach(function(st){vt.get(st).currentProgram.isReady()&&G.delete(st)}),G.size===0){F(S);return}setTimeout(J,10)}Gt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ye=null;function on(S){Ye&&Ye(S)}function va(){Pn.stop()}function Ma(){Pn.start()}const Pn=new pc;Pn.setAnimationLoop(on),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){Ye=S,V.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},V.addEventListener("sessionstart",va),V.addEventListener("sessionend",Ma),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,U,P),p=Xt.get(S,E.length),p.init(U),E.push(p),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,gt),m=dt.get(S,y.length),m.init(),y.push(m),V.enabled===!0&&V.isPresenting===!0){const J=M.xr.getDepthSensingMesh();J!==null&&Ls(J,U,-1/0,M.sortObjects)}Ls(S,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(et,ht),Wt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Wt&&Tt.addToRenderList(m,S),this.info.render.frame++,tt===!0&&Q.beginShadows();const z=p.state.shadowsArray;ft.render(z,S,U),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const J=U.cameras;if(F.length>0)for(let st=0,ut=J.length;st<ut;st++){const mt=J[st];Sa(G,F,S,mt)}Wt&&Tt.render(S);for(let st=0,ut=J.length;st<ut;st++){const mt=J[st];ya(m,S,mt,mt.viewport)}}else F.length>0&&Sa(G,F,S,U),Wt&&Tt.render(S),ya(m,S,U);P!==null&&A===0&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,U),se.resetDefaultState(),w=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],tt===!0&&Q.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ls(S,U,z,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){G&&Ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(bt);const st=q.update(S),ut=S.material;ut.visible&&m.push(S,st,ut,z,Ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const st=q.update(S),ut=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ot.copy(S.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ot.copy(st.boundingSphere.center)),Ot.applyMatrix4(S.matrixWorld).applyMatrix4(bt)),Array.isArray(ut)){const mt=st.groups;for(let Ct=0,Lt=mt.length;Ct<Lt;Ct++){const Et=mt[Ct],qt=ut[Et.materialIndex];qt&&qt.visible&&m.push(S,st,qt,z,Ot.z,Et)}}else ut.visible&&m.push(S,st,ut,z,Ot.z,null)}}const J=S.children;for(let st=0,ut=J.length;st<ut;st++)Ls(J[st],U,z,G)}function ya(S,U,z,G){const F=S.opaque,J=S.transmissive,st=S.transparent;p.setupLightsView(z),tt===!0&&Q.setGlobalState(M.clippingPlanes,z),G&&yt.viewport(C.copy(G)),F.length>0&&Yi(F,U,z),J.length>0&&Yi(J,U,z),st.length>0&&Yi(st,U,z),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Sa(S,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Xn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?qi:xn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const J=p.state.transmissionRenderTarget[G.id],st=G.viewport||C;J.setSize(st.z*M.transmissionResolutionScale,st.w*M.transmissionResolutionScale);const ut=M.getRenderTarget();M.setRenderTarget(J),M.getClearColor(O),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&Tt.render(z);const mt=M.toneMapping;M.toneMapping=An;const Ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),tt===!0&&Q.setGlobalState(M.clippingPlanes,G),Yi(S,z,G),b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Et=0,qt=U.length;Et<qt;Et++){const Kt=U[Et],me=Kt.object,de=Kt.geometry,Zt=Kt.material,wt=Kt.group;if(Zt.side===we&&me.layers.test(G.layers)){const Te=Zt.side;Zt.side=Ue,Zt.needsUpdate=!0,Ea(me,z,G,de,Zt,wt),Zt.side=Te,Zt.needsUpdate=!0,Lt=!0}}Lt===!0&&(b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J))}M.setRenderTarget(ut),M.setClearColor(O,X),Ct!==void 0&&(G.viewport=Ct),M.toneMapping=mt}function Yi(S,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,J=S.length;F<J;F++){const st=S[F],ut=st.object,mt=st.geometry,Ct=G===null?st.material:G,Lt=st.group;ut.layers.test(z.layers)&&Ea(ut,U,z,mt,Ct,Lt)}}function Ea(S,U,z,G,F,J){S.onBeforeRender(M,U,z,G,F,J),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(M,U,z,G,S,J),F.transparent===!0&&F.side===we&&F.forceSinglePass===!1?(F.side=Ue,F.needsUpdate=!0,M.renderBufferDirect(z,U,G,F,S,J),F.side=_n,F.needsUpdate=!0,M.renderBufferDirect(z,U,G,F,S,J),F.side=we):M.renderBufferDirect(z,U,G,F,S,J),S.onAfterRender(M,U,z,G,F,J)}function ji(S,U,z){U.isScene!==!0&&(U=he);const G=vt.get(S),F=p.state.lights,J=p.state.shadowsArray,st=F.state.version,ut=_t.getParameters(S,F.state,J,U,z),mt=_t.getProgramCacheKey(ut);let Ct=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?N:v).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",It),Ct=new Map,G.programs=Ct);let Lt=Ct.get(mt);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===st)return Ta(S,ut),Lt}else ut.uniforms=_t.getUniforms(S),S.onBeforeCompile(ut,M),Lt=_t.acquireProgram(ut,mt),Ct.set(mt,Lt),G.uniforms=ut.uniforms;const Et=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=Q.uniform),Ta(S,ut),G.needsLights=yc(S),G.lightsStateVersion=st,G.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Lt,G.uniformsList=null,Lt}function wa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=ws.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ta(S,U){const z=vt.get(S);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function vc(S,U,z,G,F){U.isScene!==!0&&(U=he),b.resetTextureUnits();const J=U.fog,st=G.isMeshStandardMaterial?U.environment:null,ut=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:yi,mt=(G.isMeshStandardMaterial?N:v).get(G.envMap||st),Ct=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,Kt=!!z.morphAttributes.color;let me=An;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(me=M.toneMapping);const de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=de!==void 0?de.length:0,wt=vt.get(G),Te=p.state.lights;if(tt===!0&&(gt===!0||S!==x)){const Le=S===x&&G.id===w;Q.setState(G,S,Le)}let Jt=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Te.state.version||wt.outputColorSpace!==ut||F.isBatchedMesh&&wt.batching===!1||!F.isBatchedMesh&&wt.batching===!0||F.isBatchedMesh&&wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&wt.instancing===!1||!F.isInstancedMesh&&wt.instancing===!0||F.isSkinnedMesh&&wt.skinning===!1||!F.isSkinnedMesh&&wt.skinning===!0||F.isInstancedMesh&&wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&wt.instancingMorph===!1&&F.morphTexture!==null||wt.envMap!==mt||G.fog===!0&&wt.fog!==J||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Q.numPlanes||wt.numIntersection!==Q.numIntersection)||wt.vertexAlphas!==Ct||wt.vertexTangents!==Lt||wt.morphTargets!==Et||wt.morphNormals!==qt||wt.morphColors!==Kt||wt.toneMapping!==me||wt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,wt.__version=G.version);let je=wt.currentProgram;Jt===!0&&(je=ji(G,U,F));let Yn=!1,Ne=!1,Ri=!1;const le=je.getUniforms(),Ve=wt.uniforms;if(yt.useProgram(je.program)&&(Yn=!0,Ne=!0,Ri=!0),G.id!==w&&(w=G.id,Ne=!0),Yn||x!==S){yt.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),Cl(rt),Pl(rt),le.setValue(L,"projectionMatrix",rt)):le.setValue(L,"projectionMatrix",S.projectionMatrix),le.setValue(L,"viewMatrix",S.matrixWorldInverse);const Fe=le.map.cameraPosition;Fe!==void 0&&Fe.setValue(L,Pt.setFromMatrixPosition(S.matrixWorld)),Ht.logarithmicDepthBuffer&&le.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Ne=!0,Ri=!0)}if(F.isSkinnedMesh){le.setOptional(L,F,"bindMatrix"),le.setOptional(L,F,"bindMatrixInverse");const Le=F.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),le.setValue(L,"boneTexture",Le.boneTexture,b))}F.isBatchedMesh&&(le.setOptional(L,F,"batchingTexture"),le.setValue(L,"batchingTexture",F._matricesTexture,b),le.setOptional(L,F,"batchingIdTexture"),le.setValue(L,"batchingIdTexture",F._indirectTexture,b),le.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(L,"batchingColorTexture",F._colorsTexture,b));const We=z.morphAttributes;if((We.position!==void 0||We.normal!==void 0||We.color!==void 0)&&Rt.update(F,z,je),(Ne||wt.receiveShadow!==F.receiveShadow)&&(wt.receiveShadow=F.receiveShadow,le.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ve.envMap.value=mt,Ve.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Ve.envMapIntensity.value=U.environmentIntensity),Ne&&(le.setValue(L,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&Mc(Ve,Ri),J&&G.fog===!0&&at.refreshFogUniforms(Ve,J),at.refreshMaterialUniforms(Ve,G,H,$,p.state.transmissionRenderTarget[S.id]),ws.upload(L,wa(wt),Ve,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ws.upload(L,wa(wt),Ve,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(L,"center",F.center),le.setValue(L,"modelViewMatrix",F.modelViewMatrix),le.setValue(L,"normalMatrix",F.normalMatrix),le.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Le=G.uniformsGroups;for(let Fe=0,Ds=Le.length;Fe<Ds;Fe++){const Ln=Le[Fe];I.update(Ln,je),I.bind(Ln,je)}}return je}function Mc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function yc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,U,z){vt.get(S.texture).__webglTexture=U,vt.get(S.depthTexture).__webglTexture=z;const G=vt.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const z=vt.get(S);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Sc=L.createFramebuffer();this.setRenderTarget=function(S,U=0,z=0){P=S,T=U,A=z;let G=!0,F=null,J=!1,st=!1;if(S){const mt=vt.get(S);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(mt.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(mt.__hasExternalTextures)b.rebindTextures(S,vt.get(S.texture).__webglTexture,vt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Et=S.depthTexture;if(mt.__boundDepthTexture!==Et){if(Et!==null&&vt.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(st=!0);const Lt=vt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?F=Lt[U][z]:F=Lt[U],J=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?F=vt.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[z]:F=Lt,C.copy(S.viewport),B.copy(S.scissor),k=S.scissorTest}else C.copy(xt).multiplyScalar(H).floor(),B.copy(Bt).multiplyScalar(H).floor(),k=ie;if(z!==0&&(F=Sc),yt.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&yt.drawBuffers(S,F),yt.viewport(C),yt.scissor(B),yt.setScissorTest(k),J){const mt=vt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,z)}else if(st){const mt=vt.get(S.texture),Ct=U;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,z,Ct)}else if(S!==null&&z!==0){const mt=vt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,z)}w=-1},this.readRenderTargetPixels=function(S,U,z,G,F,J,st){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){yt.bindFramebuffer(L.FRAMEBUFFER,ut);try{const mt=S.texture,Ct=mt.format,Lt=mt.type;if(!Ht.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&z>=0&&z<=S.height-F&&L.readPixels(U,z,G,F,Ft.convert(Ct),Ft.convert(Lt),J)}finally{const mt=P!==null?vt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(S,U,z,G,F,J,st){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&st!==void 0&&(ut=ut[st]),ut){const mt=S.texture,Ct=mt.format,Lt=mt.type;if(!Ht.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-G&&z>=0&&z<=S.height-F){yt.bindFramebuffer(L.FRAMEBUFFER,ut);const Et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.bufferData(L.PIXEL_PACK_BUFFER,J.byteLength,L.STREAM_READ),L.readPixels(U,z,G,F,Ft.convert(Ct),Ft.convert(Lt),0);const qt=P!==null?vt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,qt);const Kt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Rl(L,Kt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,J),L.deleteBuffer(Et),L.deleteSync(Kt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,z=0){S.isTexture!==!0&&(hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-z),F=Math.floor(S.image.width*G),J=Math.floor(S.image.height*G),st=U!==null?U.x:0,ut=U!==null?U.y:0;b.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,st,ut,F,J),yt.unbindTexture()};const Ec=L.createFramebuffer(),wc=L.createFramebuffer();this.copyTextureToTexture=function(S,U,z=null,G=null,F=0,J=null){S.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],U=arguments[2],J=arguments[3]||0,z=null),J===null&&(F!==0?(hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=F,F=0):J=0);let st,ut,mt,Ct,Lt,Et,qt,Kt,me;const de=S.isCompressedTexture?S.mipmaps[J]:S.image;if(z!==null)st=z.max.x-z.min.x,ut=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,Ct=z.min.x,Lt=z.min.y,Et=z.isBox3?z.min.z:0;else{const We=Math.pow(2,-F);st=Math.floor(de.width*We),ut=Math.floor(de.height*We),S.isDataArrayTexture?mt=de.depth:S.isData3DTexture?mt=Math.floor(de.depth*We):mt=1,Ct=0,Lt=0,Et=0}G!==null?(qt=G.x,Kt=G.y,me=G.z):(qt=0,Kt=0,me=0);const Zt=Ft.convert(U.format),wt=Ft.convert(U.type);let Te;U.isData3DTexture?(b.setTexture3D(U,0),Te=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Te=L.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Jt=L.getParameter(L.UNPACK_ROW_LENGTH),je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ne=L.getParameter(L.UNPACK_SKIP_ROWS),Ri=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et);const le=S.isDataArrayTexture||S.isData3DTexture,Ve=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const We=vt.get(S),Le=vt.get(U),Fe=vt.get(We.__renderTarget),Ds=vt.get(Le.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Fe.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Ln=0;Ln<mt;Ln++)le&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(S).__webglTexture,F,Et+Ln),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,J,me+Ln)),L.blitFramebuffer(Ct,Lt,st,ut,qt,Kt,st,ut,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||vt.has(S)){const We=vt.get(S),Le=vt.get(U);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Ec),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,wc);for(let Fe=0;Fe<mt;Fe++)le?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,F,Et+Fe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,We.__webglTexture,F),Ve?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Le.__webglTexture,J,me+Fe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Le.__webglTexture,J),F!==0?L.blitFramebuffer(Ct,Lt,st,ut,qt,Kt,st,ut,L.COLOR_BUFFER_BIT,L.NEAREST):Ve?L.copyTexSubImage3D(Te,J,qt,Kt,me+Fe,Ct,Lt,st,ut):L.copyTexSubImage2D(Te,J,qt,Kt,Ct,Lt,st,ut);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ve?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Te,J,qt,Kt,me,st,ut,mt,Zt,wt,de.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,J,qt,Kt,me,st,ut,mt,Zt,de.data):L.texSubImage3D(Te,J,qt,Kt,me,st,ut,mt,Zt,wt,de):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,J,qt,Kt,st,ut,Zt,wt,de.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,J,qt,Kt,de.width,de.height,Zt,de.data):L.texSubImage2D(L.TEXTURE_2D,J,qt,Kt,st,ut,Zt,wt,de);L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ri),J===0&&U.generateMipmaps&&L.generateMipmap(Te),yt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,z=null,G=null,F=0){return S.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0),hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,z,G,F)},this.initRenderTarget=function(S){vt.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,yt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const Io="sarab_settings_v3",As=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<900),hr={low:{label:"منخفض",dprCap:.78,shadowMapSize:512,shadows:!1,dustCount:80,anisotropy:1,sunFlare:!0,resolutionScale:.78,sandSparkle:!1},medium:{label:"متوسط",dprCap:1.05,shadowMapSize:512,shadows:!0,dustCount:150,anisotropy:2,sunFlare:!0,resolutionScale:.9,sandSparkle:!1},high:{label:"عالي",dprCap:1.35,shadowMapSize:1024,shadows:!0,dustCount:240,anisotropy:4,sunFlare:!0,resolutionScale:1,sandSparkle:!0},ultra:{label:"فائق",dprCap:1.7,shadowMapSize:2048,shadows:!0,dustCount:320,anisotropy:8,sunFlare:!0,resolutionScale:1.1,sandSparkle:!0}},Uo={quality:As?"medium":"high",sensitivity:2.2,resolutionScale:As?.9:1,fov:72,volume:.85,shadows:!0,sunFlare:!0,showFps:!1};class tm{constructor(){this.data={...Uo},this.listeners=new Set,this.load()}load(){try{const t=localStorage.getItem(Io);if(t){const e=JSON.parse(t);this.data={...Uo,...e}}}catch{}}save(){try{localStorage.setItem(Io,JSON.stringify(this.data))}catch{}}getPreset(){return hr[this.data.quality]||hr.medium}applyQualityPreset(t){const e=hr[t];e&&(this.data.quality=t,this.data.shadows=e.shadows,this.data.sunFlare=e.sunFlare,this.data.resolutionScale=e.resolutionScale,this.save(),this.emit())}set(t,e){this.data[t]=e,this.save(),this.emit()}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.data,this.getPreset())}}const Fo=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<920);class em{constructor(t){this.renderer=t,this.loader=new ga,this.sets=new Map,this.anisotropy=Math.min(Fo?4:8,t.capabilities.getMaxAnisotropy())}setAnisotropy(t){this.anisotropy=Math.min(t,this.renderer.capabilities.getMaxAnisotropy());for(const e of this.sets.values())for(const n of Object.values(e))n&&n.isTexture&&(n.anisotropy=this.anisotropy,n.needsUpdate=!0)}loadPBRSet(t,e=1,n=1){const i=`${t}_${e}_${n}`;if(this.sets.has(i))return this.sets.get(i);const r=(u,f)=>(u.wrapS=Cn,u.wrapT=Cn,u.repeat.set(e,n),u.anisotropy=this.anisotropy,u.colorSpace=f?Ee:sn,u),a=Fo?"_512.webp":".webp",o=`./textures/${t}`,c=r(this.loader.load(`${o}_albedo${a}`),!0),h=r(this.loader.load(`${o}_normal${a}`),!1),l=r(this.loader.load(`${o}_roughness${a}`),!1),d={map:c,normalMap:h,roughnessMap:l};return this.sets.set(i,d),d}createContactShadowTexture(){if(this._shadowTex)return this._shadowTex;const t=128,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,6,t/2,t/2,t/2);i.addColorStop(0,"rgba(22, 12, 5, 0.56)"),i.addColorStop(.45,"rgba(28, 16, 7, 0.34)"),i.addColorStop(.78,"rgba(34, 20, 9, 0.10)"),i.addColorStop(1,"rgba(34, 20, 9, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new tr(e);return this._shadowTex=r,r}createDustParticleTexture(){if(this._dustTex)return this._dustTex;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.addColorStop(0,"rgba(255, 244, 222, 0.85)"),i.addColorStop(.35,"rgba(245, 212, 162, 0.45)"),i.addColorStop(.7,"rgba(232, 185, 124, 0.12)"),i.addColorStop(1,"rgba(232, 185, 124, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new tr(e);return this._dustTex=r,r}createFootprintTexture(){if(this._footTex)return this._footTex;const t=64,e=128,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.clearRect(0,0,t,e);const r=(o,c,h,l,d)=>{i.save(),i.translate(o,c),i.scale(h,l);const u=i.createRadialGradient(0,0,.1,0,0,1);u.addColorStop(0,`rgba(74, 46, 20, ${d})`),u.addColorStop(.7,`rgba(92, 58, 26, ${d*.65})`),u.addColorStop(1,"rgba(92, 58, 26, 0)"),i.fillStyle=u,i.beginPath(),i.arc(0,0,1,0,Math.PI*2),i.fill(),i.restore()};r(32,42,19,32,.48),r(32,92,15,22,.45);const a=new tr(n);return this._footTex=a,a}}class nm{constructor(){this.manifest={},this.geometries=new Map,this.materials=new Map,this.loader=new ga}async preloadAll(){try{const t=await fetch("./models/manifest.json");if(!t.ok)return;this.manifest=await t.json();const e=Object.keys(this.manifest);await Promise.all(e.map(n=>this._loadModel(n,this.manifest[n])))}catch(t){console.warn("ModelManager preload warning:",t)}}async _loadModel(t,e){const[n,i,r]=await Promise.all([fetch(`./models/${t}.bin`).then(m=>m.arrayBuffer()),e.hasDiff?this._loadTex(`./models/${t}_diff.webp`,!0):Promise.resolve(null),e.hasNor?this._loadTex(`./models/${t}_nor.webp`,!1):Promise.resolve(null)]),a=new Uint32Array(n,0,2),o=a[0],c=a[1],h=new Float32Array(n,8,o*8),l=new Uint16Array(n,8+o*32,c),d=new Float32Array(o*3),u=new Float32Array(o*3),f=new Float32Array(o*2);for(let m=0;m<o;m++){const p=m*8;d[m*3]=h[p],d[m*3+1]=h[p+1],d[m*3+2]=h[p+2],u[m*3]=h[p+3],u[m*3+1]=h[p+4],u[m*3+2]=h[p+5],f[m*2]=h[p+6],f[m*2+1]=1-h[p+7]}const g=new pe;g.setAttribute("position",new te(d,3)),g.setAttribute("normal",new te(u,3)),g.setAttribute("uv",new te(f,2)),g.setIndex(new te(l.slice(),1)),g.computeBoundingBox(),g.computeBoundingSphere();const _=new re({map:i||null,normalMap:r||null,normalScale:new Dt(.85,.85),roughness:.84,metalness:t==="compass"||t==="lantern"?.35:.06,side:t.startsWith("rock")?we:_n});this.geometries.set(t,g),this.materials.set(t,_)}_loadTex(t,e){return new Promise(n=>{this.loader.load(t,i=>{i.colorSpace=e?Ee:sn,i.wrapS=Cn,i.wrapT=Cn,n(i)},void 0,()=>n(null))})}getGeometry(t){return this.geometries.get(t)||null}getMaterial(t){return this.materials.get(t)||null}getMeta(t){return this.manifest[t]||null}createMesh(t,e=1){const n=this.getGeometry(t),i=this.getMaterial(t);if(!n||!i)return null;const r=new lt(n,i);return r.scale.setScalar(e),r}}class im{constructor(){this.ctx=null,this.masterGain=null,this.volume=.85,this.unlocked=!1,this.windGain=null,this.windFilterLow=null,this.windFilterHigh=null,this.indoorFactor=0,this.timeOfDay=0,this.radioActive=!1,this.radioGain=null,this._noiseBuffer=null,this._blipCounter=0}unlock(){if(this.unlocked&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.volume,this.masterGain.connect(this.ctx.destination),this._noiseBuffer=this._createNoiseBuffer(4),this._setupDesertWind(),this.unlocked=!0,this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}_createNoiseBuffer(t){const e=this.ctx.sampleRate,n=Math.floor(e*t),i=this.ctx.createBuffer(1,n,e),r=i.getChannelData(0);let a=0,o=0,c=0,h=0,l=0,d=0,u=0;for(let f=0;f<n;f++){const g=Math.random()*2-1;a=.99886*a+g*.0555179,o=.99332*o+g*.0750759,c=.969*c+g*.153852,h=.8665*h+g*.3104856,l=.55*l+g*.5329522,d=-.7616*d-g*.016898,r[f]=(a+o+c+h+l+d+u+g*.5362)*.055,u=g*.115926}return i}_setupDesertWind(){const t=this.ctx.currentTime;this.windGain=this.ctx.createGain(),this.windGain.gain.value=.24,this.windGain.connect(this.masterGain);const e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer,e.loop=!0,this.windFilterLow=this.ctx.createBiquadFilter(),this.windFilterLow.type="bandpass",this.windFilterLow.frequency.value=260,this.windFilterLow.Q.value=1.4;const n=this.ctx.createGain();n.gain.value=.72,e.connect(this.windFilterLow),this.windFilterLow.connect(n),n.connect(this.windGain),e.start(t);const i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer,i.loop=!0,this.windFilterHigh=this.ctx.createBiquadFilter(),this.windFilterHigh.type="bandpass",this.windFilterHigh.frequency.value=1450,this.windFilterHigh.Q.value=2.6;const r=this.ctx.createGain();r.gain.value=.22,i.connect(this.windFilterHigh),this.windFilterHigh.connect(r),r.connect(this.windGain),i.start(t+1.1);const a=this.ctx.createOscillator();a.type="sine",a.frequency.value=.11;const o=this.ctx.createGain();o.gain.value=110,a.connect(o),o.connect(this.windFilterLow.frequency),a.start(t);const c=this.ctx.createOscillator();c.type="sine",c.frequency.value=.07;const h=this.ctx.createGain();h.gain.value=420,c.connect(h),h.connect(this.windFilterHigh.frequency),c.start(t)}updateAmbience(t,e,n,i){if(!this.unlocked||!this.ctx||!this.windGain)return;this.indoorFactor+=(e-this.indoorFactor)*Math.min(1,t*4.5),this.timeOfDay=n;const r=this.ctx.currentTime,a=.85+.22*Math.sin(i*.37)+.12*Math.sin(i*.91),c=(.24+n*.09)*a*(1-this.indoorFactor*.56);this.windGain.gain.setTargetAtTime(c,r,.12);const h=(250+n*65)*(1-this.indoorFactor*.42),l=1520*(1-this.indoorFactor*.65);this.windFilterLow.frequency.setTargetAtTime(h,r,.18),this.windFilterHigh.frequency.setTargetAtTime(l,r,.18)}playTextBlip(t="thought",e=""){if(!this.unlocked||!this.ctx||!e||/[\s،.؟!…—\-:]/.test(e))return;this._blipCounter++;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createBiquadFilter(),a=this.ctx.createGain(),o=[262,277,311,330,294,277],c=[349,370,415,392,349],h=[520,610,480,680,560];if(t==="radio"){i.type="sawtooth";const l=h[this._blipCounter%h.length];i.frequency.setValueAtTime(l+(Math.random()-.5)*35,n),r.type="bandpass",r.frequency.value=1450,r.Q.value=3.2,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.055,n+.006),a.gain.exponentialRampToValueAtTime(8e-4,n+.048)}else if(t==="journal"){i.type="triangle";const l=c[this._blipCounter%c.length];i.frequency.setValueAtTime(l+(Math.random()-.5)*14,n),r.type="lowpass",r.frequency.value=1350,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.07,n+.005),a.gain.exponentialRampToValueAtTime(8e-4,n+.046)}else{i.type="triangle";const l=o[this._blipCounter%o.length],d=(Math.random()-.5)*18;i.frequency.setValueAtTime(l+d,n),i.frequency.exponentialRampToValueAtTime((l+d)*.88,n+.042),r.type="bandpass",r.frequency.value=920,r.Q.value=1.1,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.088,n+.004),a.gain.exponentialRampToValueAtTime(8e-4,n+.048)}i.connect(r),r.connect(a),a.connect(this.masterGain),i.start(n),i.stop(n+.055)}playFootstep(t="sand",e=!1){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const n=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer;const r=Math.random()*2.4,a=this.ctx.createBiquadFilter(),o=this.ctx.createGain(),c=e?.24:.16;if(t==="stone"){a.type="bandpass",a.frequency.value=680+Math.random()*190,a.Q.value=2,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(c*1.15,n+.008),o.gain.exponentialRampToValueAtTime(.001,n+.09);const h=this.ctx.createOscillator(),l=this.ctx.createGain();h.frequency.setValueAtTime(115,n),h.frequency.exponentialRampToValueAtTime(48,n+.06),l.gain.setValueAtTime(c*.5,n),l.gain.exponentialRampToValueAtTime(.001,n+.065),h.connect(l),l.connect(this.masterGain),h.start(n),h.stop(n+.07)}else a.type="bandpass",a.frequency.value=950+Math.random()*340,a.Q.value=.85,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(c,n+.032),o.gain.exponentialRampToValueAtTime(.001,n+.18);i.connect(a),a.connect(o),o.connect(this.masterGain),i.start(n,r,.22)}playWakeUpTinnitus(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(3400,t),e.frequency.exponentialRampToValueAtTime(2600,t+3.2),n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.032,t+.5),n.gain.exponentialRampToValueAtTime(1e-4,t+3.8),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+4)}playSunGlareSwell(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(420,t+.7),e.frequency.exponentialRampToValueAtTime(140,t+1.8),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.09,t+.55),n.gain.exponentialRampToValueAtTime(.001,t+1.9),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+2)}playPaperRustle(){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=1800;const i=this.ctx.createGain();i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.16,t+.04),i.gain.exponentialRampToValueAtTime(.001,t+.24),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t,.5,.28)}playMetalSwitch(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(65,t+.14),n.gain.setValueAtTime(.14,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.2);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(60,t+.12),r.gain.setValueAtTime(.001,t+.12),r.gain.linearRampToValueAtTime(.05,t+.35),r.gain.exponentialRampToValueAtTime(.001,t+1.2),i.connect(r),r.connect(this.masterGain),i.start(t+.12),i.stop(t+1.25)}playRadioBurst(){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(1600,t),n.frequency.linearRampToValueAtTime(2600,t+.8),n.frequency.linearRampToValueAtTime(1200,t+1.8),n.Q.value=3.5;const i=this.ctx.createGain();i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.18,t+.12),i.gain.setValueAtTime(.15,t+1.6),i.gain.exponentialRampToValueAtTime(.001,t+2.4),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t,.2,2.5),[.25,.45,.65,1.05,1.45].forEach((a,o)=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.value=780;const l=o>=3?.24:.11;h.gain.setValueAtTime(.001,t+a),h.gain.linearRampToValueAtTime(.06,t+a+.01),h.gain.exponentialRampToValueAtTime(.001,t+a+l),c.connect(h),h.connect(this.masterGain),c.start(t+a),c.stop(t+a+l+.02)})}playDesertSting(t=!1){if(!this.unlocked||!this.ctx)return;const e=this.ctx.currentTime,n=t?[110,164.8,220,233.1]:[146.8,220,293.7],i=t?4.4:2.6;n.forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();o.type=a===0?"sawtooth":"triangle",o.frequency.setValueAtTime(r,e),c.type="lowpass",c.frequency.setValueAtTime(a===0?320:780,e),h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(.055/(a*.35+1),e+.6),h.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(c),c.connect(h),h.connect(this.masterGain),o.start(e),o.stop(e+i+.1)})}}class sm{constructor(t){this.getTerrainHeight=t,this.aabbs=[],this.obbs=[],this.cylinders=[],this.ellipses=[],this.mesas=[],this.floorZones=[],this.interiorZones=[],this.worldRadius=176}addBoxCollider(t,e,n,i,r=-10,a=14,o=null){const c=o!==null?o:a<=2.35;this.aabbs.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:a,climbable:c})}addOBBCollider(t,e,n,i,r=0,a=-5,o=2,c=null,h=!0){this.obbs.push({x:t,z:e,hx:n,hz:i,cos:Math.cos(-r),sin:Math.sin(-r),minY:a,maxY:o,hoodY:c!==null?c:o,climbable:h})}addCylinderCollider(t,e,n,i=12){this.cylinders.push({x:t,z:e,r:n*.96,maxY:i,climbable:i<2.2})}addEllipseCollider(t,e,n,i,r=0,a=1.5,o=!0){this.ellipses.push({x:t,z:e,rx:Math.max(.28,n*.98),rz:Math.max(.28,i*.98),cos:Math.cos(-r),sin:Math.sin(-r),topY:a,climbable:o})}addMesaCollider(t,e,n,i,r=0,a=0,o=25){this.mesas.push({x:t,z:e,rx:n*.96,rz:i*.96,cos:Math.cos(-r),sin:Math.sin(-r),baseY:a,height:o})}addFloorZone(t,e,n,i,r,a="stone"){this.floorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,y:r,surface:a})}addInteriorZone(t,e,n,i,r=-1,a=7){this.interiorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:a})}getGroundInfo(t,e,n=0){let i=this.getTerrainHeight(t,e),r="sand";const a=n+.58;for(let o=0;o<this.floorZones.length;o++){const c=this.floorZones[o];t>=c.minX&&t<=c.maxX&&e>=c.minZ&&e<=c.maxZ&&c.y>=i-.22&&(i=Math.max(i,c.y),r=c.surface)}for(let o=0;o<this.ellipses.length;o++){const c=this.ellipses[o];if(!c.climbable)continue;const h=t-c.x,l=e-c.z,d=Math.max(c.rx,c.rz)+.28;if(h*h+l*l>d*d)continue;const u=h*c.cos-l*c.sin,f=h*c.sin+l*c.cos,g=u/(c.rx+.12),_=f/(c.rz+.12),m=g*g+_*_;if(m<=1){const p=i+(c.topY-i)*Math.sqrt(Math.max(0,1-m*.55));p<=a&&p>i&&(i=p,r="stone")}}for(let o=0;o<this.obbs.length;o++){const c=this.obbs[o];if(!c.climbable)continue;const h=t-c.x,l=e-c.z,d=h*c.cos-l*c.sin,u=h*c.sin+l*c.cos;if(Math.abs(d)<=c.hx+.16&&Math.abs(u)<=c.hz+.16){const f=u>.25?c.hoodY:c.maxY;f<=a&&f>i&&(i=f,r="stone")}}for(let o=0;o<this.aabbs.length;o++){const c=this.aabbs[o];c.climbable&&t>=c.minX-.15&&t<=c.maxX+.15&&e>=c.minZ-.15&&e<=c.maxZ+.15&&c.maxY<=a&&c.maxY>i&&(i=c.maxY,r="stone")}for(let o=0;o<this.mesas.length;o++){const c=this.mesas[o],h=t-c.x,l=e-c.z,d=Math.max(c.rx,c.rz)+.5;if(h*h+l*l>d*d)continue;const u=h*c.cos-l*c.sin,f=h*c.sin+l*c.cos,g=Math.hypot(u/c.rx,f/c.rz);if(g<1&&g>.82){const _=(1-g)/.18,m=c.baseY+_*2.1;m<=a&&m>i&&(i=m,r="stone")}}return{groundY:i,surface:r}}isInsideBuilding(t){for(let e=0;e<this.interiorZones.length;e++){const n=this.interiorZones[e];if(t.x>=n.minX&&t.x<=n.maxX&&t.z>=n.minZ&&t.z<=n.maxZ&&t.y>=n.minY&&t.y<=n.maxY)return!0}return!1}resolveHorizontal(t,e=.36){const n=t.y+.48;for(let l=0;l<3;l++){for(let d=0;d<this.aabbs.length;d++){const u=this.aabbs[d],f=u.climbable?n:t.y+.18;if(u.maxY<=f||t.y+1.68<u.minY)continue;const g=Math.max(u.minX,Math.min(t.x,u.maxX)),_=Math.max(u.minZ,Math.min(t.z,u.maxZ)),m=t.x-g,p=t.z-_,y=m*m+p*p;if(y<e*e)if(y>1e-6){const E=Math.sqrt(y),M=e-E;t.x+=m/E*M,t.z+=p/E*M}else{const E=Math.abs(t.x-u.minX),M=Math.abs(u.maxX-t.x),R=Math.abs(t.z-u.minZ),T=Math.abs(u.maxZ-t.z),A=Math.min(E,M,R,T);A===E?t.x=u.minX-e:A===M?t.x=u.maxX+e:A===R?t.z=u.minZ-e:t.z=u.maxZ+e}}for(let d=0;d<this.obbs.length;d++){const u=this.obbs[d],f=t.x-u.x,g=t.z-u.z,_=f*u.cos-g*u.sin,m=f*u.sin+g*u.cos,p=m>.25?u.hoodY:u.maxY;if(u.climbable&&p<=n)continue;const y=Math.max(-u.hx,Math.min(_,u.hx)),E=Math.max(-u.hz,Math.min(m,u.hz)),M=_-y,R=m-E,T=M*M+R*R;if(T<e*e){let A=_,P=m;if(T>1e-6){const C=Math.sqrt(T),B=e-C;A+=M/C*B,P+=R/C*B}else{const C=Math.abs(_+u.hx),B=Math.abs(u.hx-_),k=Math.abs(m+u.hz),O=Math.abs(u.hz-m),X=Math.min(C,B,k,O);X===C?A=-u.hx-e:X===B?A=u.hx+e:X===k?P=-u.hz-e:P=u.hz+e}const w=u.cos,x=-u.sin;t.x=u.x+(A*w-P*x),t.z=u.z+(A*x+P*w)}}for(let d=0;d<this.cylinders.length;d++){const u=this.cylinders[d];if(u.maxY<=n)continue;const f=t.x-u.x,g=t.z-u.z,_=e+u.r,m=f*f+g*g;if(m<_*_&&m>1e-6){const p=Math.sqrt(m),y=_-p;t.x+=f/p*y,t.z+=g/p*y}}for(let d=0;d<this.ellipses.length;d++){const u=this.ellipses[d];if(u.climbable&&u.topY<=n)continue;const f=t.x-u.x,g=t.z-u.z,_=Math.max(u.rx,u.rz)+e;if(f*f+g*g>_*_)continue;const m=f*u.cos-g*u.sin,p=f*u.sin+g*u.cos,y=u.rx+e,E=u.rz+e,M=m/y,R=p/E,T=M*M+R*R;if(T<1&&T>1e-8){const A=1/Math.sqrt(T),P=m*A,w=p*A,x=u.cos,C=-u.sin;t.x=u.x+(P*x-w*C),t.z=u.z+(P*C+w*x)}}for(let d=0;d<this.mesas.length;d++){const u=this.mesas[d],f=t.x-u.x,g=t.z-u.z,_=Math.max(u.rx,u.rz)+e;if(f*f+g*g>_*_)continue;const m=f*u.cos-g*u.sin,p=f*u.sin+g*u.cos,y=u.rx*.85+e,E=u.rz*.85+e,M=m/y,R=p/E,T=M*M+R*R;if(T<1&&T>1e-8){const A=1/Math.sqrt(T),P=m*A,w=p*A,x=u.cos,C=-u.sin;t.x=u.x+(P*x-w*C),t.z=u.z+(P*C+w*x)}}}const i=.4,r=(this.getTerrainHeight(t.x+i,t.z)-this.getTerrainHeight(t.x-i,t.z))/(2*i),a=(this.getTerrainHeight(t.x,t.z+i)-this.getTerrainHeight(t.x,t.z-i))/(2*i),o=Math.hypot(r,a);if(o>.92){const l=(o-.92)*.35;t.x-=r/o*l,t.z-=a/o*l}const c=Math.hypot(t.x,t.z);let h=!1;if(c>this.worldRadius){const l=this.worldRadius/c;t.x*=l,t.z*=l,h=!0}return h}}class rm{constructor(t,e,n){this.scene=t,this.renderer=e,this.settings=n,this.timeOfDay=0,this.targetTimeOfDay=0,this.sunDirection=new D(.2,.9,-.35).normalize(),this.glareAmount=0,this.targetExposure=1.06,this.currentExposure=1.06,this.cutsceneGlareBoost=0,this._tmpVec=new D,this._camDir=new D,this._lastShadowFocus=new D(9999,9999,9999),this._lastShadowSun=new D,this._shadowFrameCounter=0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this._createSkyDome(),this._createLights(),this._createFog(),this.glareEl=document.getElementById("sun-glare-layer"),this.heatHazeEl=document.getElementById("heat-haze-layer"),this.setTimeOfDay(0,!0)}_createSkyDome(){const t=new ga,e=o=>{const c=t.load(o);return c.colorSpace=Ee,c.wrapS=Cn,c.wrapT=Tn,c.generateMipmaps=!1,c.minFilter=qe,c.magFilter=qe,c},n=e("./textures/sky_noon.webp"),i=e("./textures/sky_asr.webp");this.envNoon=t.load("./textures/env_noon.webp",o=>{o.mapping=Hi,o.colorSpace=Ee,this.timeOfDay<.5&&(this.scene.environment=o,this.scene.environmentIntensity=.65)}),this.envAsr=t.load("./textures/env_asr.webp",o=>{o.mapping=Hi,o.colorSpace=Ee});const r=new pa(920,32,20);this.skyUniforms={uNoonMap:{value:n},uAsrMap:{value:i},uBlend:{value:0},uAzimOffset:{value:0},uSunDir:{value:new D(0,1,0)},uHorizonColor:{value:new Mt("#e8d4b4")}};const a=new en({side:Ue,depthWrite:!1,fog:!1,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorldDir;
        void main() {
          vWorldDir = position;
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uNoonMap;
        uniform sampler2D uAsrMap;
        uniform float uBlend;
        uniform float uAzimOffset;
        uniform vec3 uSunDir;
        uniform vec3 uHorizonColor;
        varying vec3 vWorldDir;

        const float PI = 3.141592653589793;
        const float INV_TWO_PI = 0.15915494309189535;
        const float INV_PI = 0.3183098861837907;

        void main() {
          vec3 dir = normalize(vWorldDir);

          // Exact 3D spherical projection -> zero seam or mipmap line at zenith!
          float u = fract(atan(dir.z, dir.x) * INV_TWO_PI + uAzimOffset);
          float v = clamp(0.5 + asin(clamp(dir.y, -1.0, 1.0)) * INV_PI, 0.002, 0.998);
          vec2 uv = vec2(u, v);

          vec3 colNoon = texture2D(uNoonMap, uv).rgb;
          vec3 colAsr = texture2D(uAsrMap, uv).rgb;
          vec3 skyCol = mix(colNoon, colAsr, uBlend);

          // Intense physical solar disc + atmospheric Mie glow at the exact 3D sunDirection!
          float sunCos = max(0.0, dot(dir, normalize(uSunDir)));
          float sunCore = smoothstep(0.99935, 0.99992, sunCos);
          float sunCorona = pow(sunCos, 64.0) * 0.55 + pow(sunCos, 10.0) * 0.22;
          vec3 sunTint = mix(vec3(1.0, 0.97, 0.88), vec3(1.0, 0.72, 0.36), uBlend);
          skyCol += sunTint * (sunCore * 1.65 + sunCorona);

          // Smooth aerial perspective horizon blend so distant dunes melt naturally into the sky
          float horizonFactor = smoothstep(0.16, -0.04, dir.y);
          skyCol = mix(skyCol, uHorizonColor, horizonFactor * 0.88);

          gl_FragColor = vec4(skyCol, 1.0);
        }
      `});this.skyMesh=new lt(r,a),this.skyMesh.frustumCulled=!1,this.scene.add(this.skyMesh)}_createLights(){this.sunLight=new ro(16774620,3.25),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=135;const t=34;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.normalBias=.028,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.hemiLight=new uh(9618670,13804908,1.15),this.scene.add(this.hemiLight),this.interiorBounceLight=new dc(16175772,2.2,22,1.4),this.interiorBounceLight.position.set(0,3,-18),this.scene.add(this.interiorBounceLight),this.sandBounceLight=new ro(15516297,.55),this.sandBounceLight.position.set(-25,10,30),this.scene.add(this.sandBounceLight)}_createFog(){this.fog=new ca(15126440,.0029),this.scene.fog=this.fog}applySettings(t,e){const n=!!t.shadows;this.sunLight.castShadow=n,this.renderer.shadowMap.enabled=n,n&&this.sunLight.shadow.mapSize.x!==e.shadowMapSize&&(this.sunLight.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.sunLight.shadow.map&&(this.sunLight.shadow.map.dispose(),this.sunLight.shadow.map=null)),this.renderer.shadowMap.needsUpdate=!0}setTimeOfDay(t,e=!1){const n=Math.max(0,Math.min(1,t));this.targetTimeOfDay=n,e&&this._applyTimeValues(n)}_applyTimeValues(t){this.timeOfDay=t;const e=Math.pow(t,1.15);this.skyUniforms.uBlend.value=e;const n=St.lerp(48,11.5,t),i=St.lerp(-138,-118,t),r=St.degToRad(n),a=St.degToRad(i);this.sunDirection.set(Math.cos(r)*Math.sin(a),Math.sin(r),Math.cos(r)*Math.cos(a)).normalize(),this.skyUniforms.uSunDir.value.copy(this.sunDirection);const o=Math.atan2(this.sunDirection.z,this.sunDirection.x);if(this.skyUniforms.uAzimOffset.value=.6-o/(Math.PI*2),t>=.55&&this.envAsr&&this.scene.environment!==this.envAsr?this.scene.environment=this.envAsr:t<.55&&this.envNoon&&this.scene.environment!==this.envNoon&&(this.scene.environment=this.envNoon),this.scene.environmentIntensity=St.lerp(.65,.8,e),this.sunLight.color.lerpColors(new Mt("#fff7e4"),new Mt("#ffaa52"),e),this.sunLight.intensity=St.lerp(3.25,2.95,t),this.hemiLight.color.lerpColors(new Mt("#92c4ee"),new Mt("#e29a58"),e),this.hemiLight.groundColor.lerpColors(new Mt("#d2a56c"),new Mt("#995b2a"),e),this.hemiLight.intensity=St.lerp(1.18,.96,t),this.sandBounceLight.color.lerpColors(new Mt("#ecc289"),new Mt("#df8b46"),e),this.sandBounceLight.intensity=St.lerp(.58,.45,t),this.sandBounceLight.position.set(-this.sunDirection.x*40,12,-this.sunDirection.z*40),this.interiorBounceLight.color.lerpColors(new Mt("#f6d29c"),new Mt("#ffa852"),e),this.interiorBounceLight.intensity=St.lerp(2.1,2.45,e),this.fog.color.lerpColors(new Mt("#e6cfa8"),new Mt("#df9b58"),e),this.fog.density=St.lerp(.0028,.0041,e),this.skyUniforms.uHorizonColor.value.copy(this.fog.color),this.glareEl){const c=Math.round(St.lerp(240,174,e)),h=Math.round(St.lerp(202,98,e));this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g",String(c)),this.glareEl.style.setProperty("--sun-b",String(h))}this.heatHazeEl&&(this.heatHazeEl.style.opacity=String(St.lerp(.45,.28,t).toFixed(2))),this.renderer.shadowMap.needsUpdate=!0}update(t,e,n,i,r){this.skyMesh.position.copy(n.position);const a=this.targetTimeOfDay-this.timeOfDay;Math.abs(a)>2e-4&&this._applyTimeValues(this.timeOfDay+a*Math.min(1,t*1.15));const o=St.clamp(i.x,-45,45),c=St.clamp(i.z,-45,45);this._shadowFrameCounter++;const h=(o-this._lastShadowFocus.x)*(o-this._lastShadowFocus.x)+(c-this._lastShadowFocus.z)*(c-this._lastShadowFocus.z),l=this._lastShadowSun.distanceToSquared(this.sunDirection);(h>.25||l>1e-4||this._shadowFrameCounter>=6)&&(this._shadowFrameCounter=0,this._lastShadowFocus.set(o,0,c),this._lastShadowSun.copy(this.sunDirection),this.sunLight.target.position.set(o,0,c),this.sunLight.position.set(o+this.sunDirection.x*64,this.sunDirection.y*64,c+this.sunDirection.z*64),this.renderer.shadowMap.needsUpdate=!0),n.getWorldDirection(this._camDir);const d=this._camDir.dot(this.sunDirection),u=this.settings.data.sunFlare;let f=0;if(u&&!r&&d>.38){f=Math.pow((d-.38)/.62,2.2),this._tmpVec.copy(n.position).addScaledVector(this.sunDirection,400).project(n);const m=(this._tmpVec.x*.5+.5)*100,p=(-this._tmpVec.y*.5+.5)*100;this.glareEl&&(this.glareEl.style.setProperty("--sun-x",`${m.toFixed(1)}%`),this.glareEl.style.setProperty("--sun-y",`${p.toFixed(1)}%`))}const g=Math.min(1,f*.88+this.cutsceneGlareBoost);this.glareAmount+=(g-this.glareAmount)*Math.min(1,t*6.5),this.glareEl&&(this.glareEl.style.opacity=this.glareAmount>.008?this.glareAmount.toFixed(3):"0");const _=r?St.lerp(1.22,1.3,this.timeOfDay):St.lerp(1.04,1.1,this.timeOfDay);this.targetExposure=_+this.cutsceneGlareBoost*.65-f*.14,this.currentExposure+=(this.targetExposure-this.currentExposure)*Math.min(1,t*2.8),this.renderer.toneMappingExposure=this.currentExposure}}const Yt=0,zt=-18,pn=0,zi=380,ui=96;function Ni(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)}function Bi(s,t){const e=s-Yt,n=t-zt,i=Math.sin(s*.09+t*.07)*2.8+Math.cos(s*.05-t*.08)*2.1,r=Math.hypot(e*.92,(n-1.5)*1.08)+i,a=Math.hypot(s+11,t-15),o=Math.sin(s*.022+t*.016+Math.sin(t*.011)*1.45),c=Math.pow(1-Math.abs(o),1.15)*4.7,h=Math.sin(s*.044-t*.032+1.7+Math.cos(s*.019)*.9),l=(1-Math.abs(h))*2,d=Math.sin(s*.01-t*.008)*4.3+Math.cos(s*.008+t*.014)*3.7,u=Math.sin(s*.13+t*.1)*.09,f=Math.exp(-((s+56)*(s+56)/620+(t+24)*(t+24)/880))*16.5,g=Math.exp(-((s-14)*(s-14)/960+(t+78)*(t+78)/560))*19.5,_=Math.exp(-((s-62)*(s-62)/680+(t+8)*(t+8)/840))*15,m=Math.exp(-((s+28)*(s+28)/760+(t-64)*(t-64)/640))*14,p=Math.hypot(s,t),y=Ni(55,165,p)*9.5*(.5+.5*Math.sin(s*.018+t*.013));let E=d*.45+c+l+u+f+g+_+m+y-2.65;const M=Ni(10.8,26.5,r);E*=M;const R=Ni(4,14.5,a);E=E*(.38+.62*R);const T=Ni(7.6,9.2,Math.max(Math.abs(e),Math.abs(n)*1.18)),A=Math.exp(-((s-8.8)*(s-8.8)/14+(t+17.5)*(t+17.5)/28))*1.35*T,P=Math.exp(-((s+8.6)*(s+8.6)/15+(t+19.2)*(t+19.2)/22))*.95*T,w=Math.exp(-((s+6.5)*(s+6.5)/14+(t+26.2)*(t+26.2)/14))*1.05*T,x=Math.exp(-((e-.5)*(e-.5)/28+(n+9)*(n+9)/24));E*=1-x*.85;const C=1-Ni(7.2,8.5,Math.max(Math.abs(e),Math.abs(n)*1.18));return(pn+E+A+P+w)*(1-C)+-.12*C}function ae(s,t){const e=zi*.5;if(s<=-e||s>=e||t<=-e||t>=e)return Bi(s,t);const n=(s+e)/zi*ui,i=(t+e)/zi*ui,r=Math.min(ui-1,Math.max(0,Math.floor(n))),a=Math.min(ui-1,Math.max(0,Math.floor(i))),o=n-r,c=i-a,h=zi/ui,l=-e+r*h,d=-e+a*h,u=l+h,f=d+h,g=Bi(l,d),_=Bi(u,d),m=Bi(l,f),p=Bi(u,f);return o+c<=1?g+o*(_-g)+c*(m-g):p+(1-o)*(m-p)+(1-c)*(_-p)}function am(s,t,e={x:0,y:1,z:0}){const i=ae(s-.45,t),r=ae(s+.45,t),a=ae(s,t-.45),o=ae(s,t+.45),c=i-r,h=2*.45,l=a-o,d=Math.hypot(c,h,l)||1;return e.x=c/d,e.y=h/d,e.z=l/d,e}class om{constructor(t,e,n,i,r){this.scene=t,this.tex=e,this.models=n,this.physics=i,this.settings=r,this.group=new Pe,this.scene.add(this.group),this.hawks=[],this.tumbleweeds=[],this.lizards=[],this.palmCrowns=[],this.jeepWorldPos=new D(-5.8,0,2.2),this._dummy=new xe,this._createTerrain(),this._createHorizonSkirt(),this._createDistantMesas(),this._createRocks(),this._createDesertShrubs(),this._createDesertPalms(),this._createBuriedJeep(),this._createTatteredCampTent(),this._createSoaringHawks(),this._createRollingTumbleweeds(),this._createDesertLizards(),this._createFootprintTrail(),this._createGPUDustParticles()}_createSandMaterial(t,e,n=!1){const i=this.tex.loadPBRSet("sand",t,e),r=new re({map:i.map,normalMap:n?null:i.normalMap,normalScale:new Dt(1.15,1.15),roughnessMap:null,roughness:.9,metalness:.02,vertexColors:!0});return n||(r.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDesertWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vDesertWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vDesertWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
             float macroWave = sin(vDesertWorldPos.x * 0.045 + vDesertWorldPos.z * 0.035) * 0.5 + 0.5;
             vec3 warmTint = mix(vec3(0.95, 0.90, 0.82), vec3(1.06, 0.99, 0.89), macroWave);
             diffuseColor.rgb *= warmTint;`)}),r}_createTerrain(){const t=zi,e=ui,n=new Se(t,t,e,e);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3);for(let a=0;a<i.count;a++){const o=i.getX(a),c=i.getZ(a),h=ae(o,c);i.setY(a,h);const l=ae(o+2,c),d=ae(o,c+2),u=Math.hypot(l-h,d-h)*.5,f=o-Yt,g=c-zt,_=Math.max(Math.abs(f)-7.8,Math.abs(g)-6.6),m=_<2.4&&_>-7?St.clamp(.76+Math.max(0,_)*.1,.76,1):1,p=St.clamp(.92+h*.012-u*.075,.82,1.08),y=m*p;r[a*3]=y,r[a*3+1]=y*.985,r[a*3+2]=y*.96}n.setAttribute("color",new te(r,3)),n.computeVertexNormals(),this.terrainMat=this._createSandMaterial(62,62,!1),this.terrainMesh=new lt(n,this.terrainMat),this.terrainMesh.receiveShadow=!0,this.group.add(this.terrainMesh)}_createHorizonSkirt(){const n=new Se(1480,1480,32,32);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3);for(let o=0;o<i.count;o++){const c=i.getX(o),h=i.getZ(o),l=Math.max(Math.abs(c),Math.abs(h));let d=ae(c,h);if(l<185)d-=3.2;else{const f=Math.min(1,(l-185)/250);d+=(Math.sin(c*.008+h*.006)*18+Math.cos(c*.005-h*.009)*14)*f}i.setY(o,d);const u=St.clamp(.94+d*.004,.84,1.06);r[o*3]=u,r[o*3+1]=u*.97,r[o*3+2]=u*.93}n.setAttribute("color",new te(r,3)),n.computeVertexNormals();const a=new lt(n,this._createSandMaterial(78,78,!0));this.group.add(a)}_createDistantMesas(){const t=new _e(.56,1,1,14,5,!1);t.translate(0,.5,0);const e=t.attributes.position;for(let c=0;c<e.count;c++){const h=e.getX(c),l=e.getY(c),d=e.getZ(c),u=Math.atan2(d,h),f=1+.14*Math.sin(u*3+.7)+.08*Math.cos(u*5)+.07*Math.sin(l*16),g=l>.96?1:f;e.setXYZ(c,h*g,l,d*g)}t.computeVertexNormals();const n=this.tex.loadPBRSet("sandstone_rock",3,2),i=new re({map:n.map,normalMap:n.normalMap,normalScale:new Dt(1.2,1.2),roughness:.94,metalness:.02,color:14068346}),r=[{x:-125,z:-108,sx:46,sy:26,sz:34,ry:.4},{x:-34,z:-138,sx:54,sy:30,sz:36,ry:1.1},{x:92,z:-124,sx:48,sy:28,sz:36,ry:2},{x:134,z:-30,sx:44,sy:24,sz:34,ry:.8},{x:-136,z:32,sx:46,sy:24,sz:34,ry:2.5},{x:104,z:108,sx:48,sy:25,sz:36,ry:1.6},{x:-76,z:118,sx:42,sy:23,sz:32,ry:.2}],a=new Je(t,i,r.length),o=this._dummy;r.forEach((c,h)=>{const l=ae(c.x,c.z);o.position.set(c.x,l-4.5,c.z),o.rotation.set(0,c.ry,0),o.scale.set(c.sx,c.sy,c.sz),o.updateMatrix(),a.setMatrixAt(h,o.matrix),this.physics.addMesaCollider(c.x,c.z,c.sx,c.sz,c.ry,l,c.sy)}),a.instanceMatrix.needsUpdate=!0,this.group.add(a)}_createRocks(){const t=this.models?.getGeometry("rock_07"),e=this.models?.getMaterial("rock_07"),n=this.models?.getGeometry("rock_09")||t,i=this.models?.getMaterial("rock_09")||e,r=new da(.5,1),a=this.tex.loadPBRSet("sandstone_rock",2,2),o=new re({map:a.map,normalMap:a.normalMap,roughness:.92}),c=t||r,h=e||o,l=n||r,d=i||o,u=[{x:-8.2,z:10.2,sx:3.6,sy:1.55,sz:2,ry:.5,type:0},{x:-13.5,z:-9.5,sx:5.5,sy:3.1,sz:3.6,ry:1.1,type:0},{x:-15.6,z:-11.2,sx:3.6,sy:2.1,sz:2.4,ry:2.3,type:1},{x:13.8,z:-12,sx:5.8,sy:3.3,sz:3.8,ry:.4,type:0},{x:15.8,z:-14.2,sx:3.8,sy:2.2,sz:2.6,ry:1.9,type:1},{x:-13.2,z:-27.5,sx:6.4,sy:3.8,sz:4.2,ry:2.6,type:0},{x:12,z:-29,sx:5.4,sy:3,sz:3.6,ry:.9,type:1},{x:-29,z:4,sx:9.5,sy:5.8,sz:6.4,ry:.5,type:0},{x:-34,z:-28,sx:10.5,sy:6.5,sz:7,ry:1.4,type:0},{x:31,z:-20,sx:9.2,sy:5.5,sz:6.2,ry:2.1,type:1},{x:22,z:16,sx:7.4,sy:4.4,sz:4.8,ry:1.1,type:0}];let f=4219;const g=()=>(f=f*16807%2147483647,(f-1)/2147483646);for(let O=0;O<34;O++){const X=g()*Math.PI*2,W=20+Math.pow(g(),.78)*105,$=Math.cos(X)*W,H=Math.sin(X)*W-10;if(Math.abs($-Yt)<12.5&&Math.abs(H-zt)<12.5||Math.hypot($+11,H-15)<6||Math.hypot($-this.jeepWorldPos.x,H-this.jeepWorldPos.z)<5.5)continue;const et=1.6+Math.pow(g(),1.6)*5.2;u.push({x:$,z:H,sx:et*(.9+g()*.35),sy:et*(.65+g()*.35),sz:et*(.85+g()*.35),ry:g()*Math.PI*2,type:O%2})}const _=u.filter(O=>O.type===0),m=u.filter(O=>O.type===1),p=new Je(c,h,_.length);p.castShadow=!0,p.receiveShadow=!0;const y=new Je(l,d,m.length);y.castShadow=!0,y.receiveShadow=!0;const E=new Se(1,1);E.rotateX(-Math.PI/2);const M=new rn({map:this.tex.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:.54,polygonOffset:!0,polygonOffsetFactor:-2}),R=new Je(E,M,u.length),T=this._dummy,A=new D(0,1,0),P=new D,w=new Rn,x=new Rn,C={x:0,y:1,z:0};let B=0,k=0;u.forEach((O,X)=>{const W=ae(O.x,O.z),$=O.sy*.04;T.position.set(O.x,W-$,O.z),T.rotation.set(0,O.ry,0),T.scale.set(O.sx,O.sy,O.sz),T.updateMatrix(),O.type===0?p.setMatrixAt(B++,T.matrix):y.setMatrixAt(k++,T.matrix),am(O.x,O.z,C),P.set(C.x,C.y,C.z),w.setFromUnitVectors(A,P),x.setFromAxisAngle(A,O.ry),w.multiply(x),T.position.set(O.x,W+.045,O.z),T.quaternion.copy(w);const H=O.sx*.265,et=O.sz*.49;T.scale.set(H*2.5,1,et*2.5),T.updateMatrix(),R.setMatrixAt(X,T.matrix);const ht=O.type===0?.44:.23,xt=W-$+O.sy*ht;this.physics.addEllipseCollider(O.x,O.z,H,et,O.ry,xt,!0)}),p.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,this.group.add(p,y,R)}_createDesertShrubs(){const t=[];for(let l=0;l<6;l++){const d=l/6*Math.PI*2+.3,u=.48+l%2*.24,f=.44+l%3*.14,g=new Vn(.03,f,3,1);g.translate(0,f*.5,0),g.rotateZ(u),g.rotateY(d),t.push(g)}const e=this._mergeGeometriesSimple(t);t.forEach(l=>l.dispose());const n=new re({color:7758914,roughness:.96,metalness:0}),i=46,r=new Je(e,n,i);r.castShadow=!1;let a=8821;const o=()=>(a=a*16807%2147483647,(a-1)/2147483646),c=this._dummy;let h=0;for(let l=0;l<120&&h<i;l++){const d=o()*Math.PI*2,u=12+Math.pow(o(),.85)*90,f=Math.cos(d)*u,g=Math.sin(d)*u-12;if(Math.abs(f-Yt)<10&&Math.abs(g-zt)<10)continue;const _=ae(f,g),m=.7+o()*.95;c.position.set(f,_-.03,g),c.rotation.set(0,o()*Math.PI*2,0),c.scale.set(m*1.2,m*.85,m*1.2),c.updateMatrix(),r.setMatrixAt(h,c.matrix),h++}r.count=h,r.instanceMatrix.needsUpdate=!0,this.group.add(r)}_createDesertPalms(){const t=this.tex.loadPBRSet("desert_wood",1,3),e=new re({map:t.map,roughness:.94,color:9401428}),n=new re({color:6056248,roughness:.9,side:we}),i=[{x:Yt-10.8,z:zt-9.2,h:6.2,lean:.14,ry:.4},{x:Yt-12.6,z:zt-6.8,h:4.8,lean:-.18,ry:2.1},{x:Yt+11.4,z:zt-10.5,h:5.5,lean:.16,ry:1.2},{x:-16.5,z:7.5,h:4.6,lean:.2,ry:3.1}],r=[],a=12;for(let l=0;l<a;l++){const d=new Se(.62,2.65,2,4),u=d.attributes.position;for(let _=0;_<u.count;_++){const p=(u.getY(_)+1.325)/2.65,y=Math.sin(p*Math.PI)*1.18;u.setX(_,u.getX(_)*y),u.setZ(_,-p*p*.78)}d.translate(0,1.325,0);const f=new jt,g=new Ge(.72+l%3*.22,l/a*Math.PI*2,0,"YXZ");f.makeRotationFromEuler(g),d.applyMatrix4(f),d.computeVertexNormals(),r.push(d)}const o=this._mergeGeometriesSimple(r);r.forEach(l=>l.dispose());const c=[];i.forEach((l,d)=>{const u=ae(l.x,l.z),f=new _e(.14,.29,l.h,7,4),g=f.attributes.position;for(let E=0;E<g.count;E++){const M=(g.getY(E)+l.h*.5)/l.h;g.setX(E,g.getX(E)+M*M*l.h*l.lean)}f.translate(0,l.h*.5,0);const _=new jt;_.makeRotationY(l.ry),_.setPosition(l.x,u-.1,l.z),f.applyMatrix4(_),f.computeVertexNormals(),c.push(f);const m=new lt(o,n),p=l.x+Math.cos(l.ry)*(l.h*l.lean),y=l.z-Math.sin(l.ry)*(l.h*l.lean);m.position.set(p,u+l.h-.22,y),m.rotation.y=l.ry,m.castShadow=!0,this.group.add(m),this.palmCrowns.push({crown:m,phase:d*1.7}),this.physics.addCylinderCollider(l.x,l.z,.34,u+l.h)});const h=new lt(this._mergeGeometriesSimple(c),e);h.castShadow=!0,h.receiveShadow=!0,c.forEach(l=>l.dispose()),this.group.add(h)}_createBuriedJeep(){const t=this.jeepWorldPos.x,e=this.jeepWorldPos.z,n=ae(t,e);this.jeepWorldPos.y=n+.85;const i=this.tex.loadPBRSet("rusted_metal",2,2),r=new re({map:i.map,normalMap:i.normalMap,roughness:.72,metalness:.48,color:12950381}),a=new re({color:2301208,roughness:.86,metalness:.4}),o=new re({color:7044216,roughness:.18,metalness:.55,transparent:!0,opacity:.52,side:we}),c=new Pe;c.position.set(t,n-.15,e);const h=.72;c.rotation.set(.06,h,-.09);const l=[],d=[],u=[],f=(M,R,T,A,P,w=0,x=0,C=0)=>{const B=new jt;B.compose(new D(T,A,P),new Rn().setFromEuler(new Ge(w,x,C)),new D(1,1,1)),R.applyMatrix4(B),R.computeVertexNormals(),M.push(R)};f(l,new At(1.92,.66,2.55),0,.58,-.58),f(l,new At(1.82,.54,1.48),0,.54,1.32),f(l,new At(2.14,.16,1.12),0,.68,1.25),f(l,new At(2.14,.16,1.12),0,.68,-1.22),f(l,new At(1.78,.09,2.18),0,1.62,-.55),f(l,new At(.09,.72,.09),-.84,1.25,.42,-.25,0,0),f(l,new At(.09,.72,.09),.84,1.25,.42,-.25,0,0),f(l,new At(.11,.7,.12),-.85,1.26,-.52),f(l,new At(.11,.7,.12),.85,1.26,-.52),f(l,new At(.14,.7,.18),-.85,1.26,-1.55),f(l,new At(.14,.7,.18),.85,1.26,-1.55),f(l,new At(1.74,.06,1.36),0,1.14,1.28,-.38,0,0),f(d,new At(2.04,.2,.24),0,.36,2.12),f(d,new At(2.02,.2,.22),0,.38,-2.02),f(d,new At(1.72,.46,.08),0,.56,2.02),f(d,new At(.75,.45,.85),0,.66,1.28),f(d,new _e(.02,.02,.58,5),-.72,1.05,1.72),f(d,new At(1.64,.08,1.85),0,1.71,-.58),f(d,new At(.55,.52,.52),-.45,.88,-.25),f(d,new At(.55,.52,.52),.45,.88,-.25),f(u,new Se(1.62,.64),0,1.26,.42,-.25,0,0),f(u,new Se(.84,.58),-.86,1.26,-.05,0,Math.PI/2,0),f(u,new Se(.84,.58),.86,1.26,-.05,0,Math.PI/2,0);const g=new lt(this._mergeGeometriesSimple(l),r);g.castShadow=!0,g.receiveShadow=!0;const _=new lt(this._mergeGeometriesSimple(d),a);_.castShadow=!0;const m=new lt(this._mergeGeometriesSimple(u),o);c.add(g,_,m);const p=this.models?.getGeometry("tyre"),y=this.models?.getMaterial("tyre")||a,E=[{x:-.98,y:.02,z:1.25,ry:Math.PI/2},{x:.98,y:.02,z:1.25,ry:-Math.PI/2},{x:-.98,y:.02,z:-1.22,ry:Math.PI/2},{x:.98,y:.02,z:-1.22,ry:-Math.PI/2},{x:0,y:.48,z:-1.96,ry:0}];if(p){const M=new Je(p,y,E.length);M.castShadow=!0,E.forEach((R,T)=>{this._dummy.position.set(R.x,R.y,R.z),this._dummy.rotation.set(0,R.ry,0),this._dummy.scale.set(.82,.82,1.05),this._dummy.updateMatrix(),M.setMatrixAt(T,this._dummy.matrix)}),M.instanceMatrix.needsUpdate=!0,c.add(M)}this.group.add(c),this.physics.addOBBCollider(t,e,1.02,2.08,h,n-.5,n+1.48,n+.96,!0)}_createTatteredCampTent(){const t=Yt+10.6,e=zt+5.8,n=ae(t,e),i=this.tex.loadPBRSet("desert_wood",1,1),r=new re({map:i.map,roughness:.92}),a=this.tex.loadPBRSet("tattered_fabric",2,2);this.tentTimeUniform={value:0};const o=new re({map:a.map,roughness:.94,side:we,color:14271132});o.onBeforeCompile=g=>{g.uniforms.uTime=this.tentTimeUniform,g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           transformed.y += sin(uTime * 4.2 + position.x * 2.5 + position.z * 2.0) * 0.045;`)};const c=new Pe;c.position.set(t,n,e),c.rotation.y=-.5;const h=[];[[-1.6,-1.2],[1.6,-1.2],[-1.6,1.2],[1.6,1.2]].forEach(([g,_])=>{const m=new _e(.05,.06,2.35,5);m.translate(g,1.15,_),h.push(m)});const l=new lt(this._mergeGeometriesSimple(h),r);l.castShadow=!0,h.forEach(g=>g.dispose()),c.add(l);const d=new Se(3.5,2.7,6,4);d.rotateX(-Math.PI/2+.14);const u=new lt(d,o);u.position.set(0,2.28,0),u.castShadow=!0,c.add(u);const f=this.models?.createMesh("barrel",.65);f&&(f.position.set(-.7,0,-.4),f.castShadow=!0,c.add(f)),this.group.add(c),this.physics.addBoxCollider(t-.85,t-.15,e-.85,e-.15,n,n+1.05,!0)}_createSoaringHawks(){const t=new rn({color:2825490,side:we}),e=new Vn(.11,.72,4);e.rotateX(Math.PI/2);const n=new pe;n.setAttribute("position",new te(new Float32Array([0,0,.16,1.18,.06,-.05,0,0,-.22]),3)),n.computeVertexNormals();const i=new pe;i.setAttribute("position",new te(new Float32Array([0,0,.16,-1.18,.06,-.05,0,0,-.22]),3)),i.computeVertexNormals();const r=this._mergeGeometriesSimple([e,n,i]);this.hawkInst=new Je(r,t,4),this.hawkInst.frustumCulled=!1,this.group.add(this.hawkInst);for(let a=0;a<4;a++)this.hawks.push({centerX:a%2===0?-4:10,centerZ:zt+(a-1.5)*8,radius:19+a*7.5,altitude:17+a*4.2,speed:.24+a*.04,phase:a*1.65})}_createRollingTumbleweeds(){const t=[];for(let i=0;i<7;i++){const r=.28+i%3*.05,a=new Cs(r,.014,4,9);a.rotateX(i*1.13%Math.PI),a.rotateY(i*1.97%Math.PI),a.rotateZ(i*.79%Math.PI),t.push(a)}const e=this._mergeGeometriesSimple(t);t.forEach(i=>i.dispose());const n=new re({color:8151357,roughness:.98});this.tumbleweedInst=new Je(e,n,4),this.tumbleweedInst.frustumCulled=!1,this.group.add(this.tumbleweedInst);for(let i=0;i<4;i++){const r=-34+i*22,a=-4+i%3*14;this.tumbleweeds.push({x:r,z:a,rotX:0,rotZ:0,speed:1.85+i%3*.6,phase:i*1.4})}}_createDesertLizards(){const t=[],e=new Vn(.06,.34,5);e.rotateX(Math.PI/2);const n=new Vn(.035,.32,4);n.rotateX(-Math.PI/2),n.translate(0,0,-.28),t.push(e,n);const i=this._mergeGeometriesSimple(t),r=new re({color:10913111,roughness:.88});this.lizardInst=new Je(i,r,3),this.lizardInst.frustumCulled=!1,this.group.add(this.lizardInst),[{x:-9.5,z:9.2,yaw:.8},{x:-4.2,z:-2.5,yaw:-1.2},{x:7.5,z:-8,yaw:2.1}].forEach(o=>{this.lizards.push({x:o.x,z:o.z,yaw:o.yaw,speed:0})})}_createFootprintTrail(){const t=new Se(.3,.58);t.rotateX(-Math.PI/2);const e=new rn({map:this.tex.createFootprintTexture(),transparent:!0,depthWrite:!1,opacity:.72}),n=28,i=new Je(t,e,n),r=this._dummy;for(let a=0;a<n;a++){const o=a/(n-1),c=St.lerp(-10.5,0,o)+Math.sin(o*Math.PI)*-2.2,h=St.lerp(13.8,zt+10.6,o),l=(a%2===0?1:-1)*.16,d=c+l,u=ae(d,h)+.03;r.position.set(d,u,h),r.rotation.set(0,Math.atan2(10.5,zt+10.6-13.8),0),r.scale.set(1,1,1),r.updateMatrix(),i.setMatrixAt(a,r.matrix)}i.instanceMatrix.needsUpdate=!0,this.group.add(i)}_createGPUDustParticles(){const e=new pe,n=new Float32Array(320*3),i=new Float32Array(320*3);for(let a=0;a<320;a++)n[a*3]=(Math.random()-.5)*56,n[a*3+1]=.2+Math.random()*3.8,n[a*3+2]=(Math.random()-.5)*56,i[a*3]=Math.random()*6.28,i[a*3+1]=.7+Math.random()*1.3,i[a*3+2]=Math.random();e.setAttribute("position",new te(n,3)),e.setAttribute("aSeed",new te(i,3)),this.dustMaxCount=320,this.dustUniforms={uTime:{value:0},uPlayerPos:{value:new D},uColor:{value:new Mt("#efd3a8")},uMap:{value:this.tex.createDustParticleTexture()}};const r=new en({transparent:!0,depthWrite:!1,uniforms:this.dustUniforms,vertexShader:`
        attribute vec3 aSeed;
        uniform float uTime;
        uniform vec3 uPlayerPos;
        void main() {
          vec3 p = position;
          float speed = 2.6 * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 28.0, 56.0) - 28.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.55 - uPlayerPos.z + 28.0, 56.0) - 28.0 + uPlayerPos.z;
          p.y += sin(uTime * 1.3 + aSeed.x) * 0.25;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = clamp(110.0 / max(1.0, -mvPosition.z), 2.0, 9.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform sampler2D uMap;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.05) discard;
          gl_FragColor = vec4(uColor * tex.rgb, tex.a * 0.32);
        }
      `});this.dustPoints=new rh(e,r),this.dustPoints.frustumCulled=!1,this.group.add(this.dustPoints)}applySettings(t){this.dustPoints&&this.dustPoints.geometry.setDrawRange(0,Math.min(this.dustMaxCount,t.dustCount))}update(t,e,n,i){const r=this._dummy;for(let a=0;a<this.hawks.length;a++){const o=this.hawks[a],c=e*o.speed+o.phase,h=o.centerX+Math.cos(c)*o.radius,l=o.centerZ+Math.sin(c)*o.radius,d=o.altitude+Math.sin(e*.7+o.phase)*1.4;r.position.set(h,d,l),r.rotation.set(0,-c,.24),r.scale.set(1,1+Math.sin(e*5+o.phase)*.15,1),r.updateMatrix(),this.hawkInst.setMatrixAt(a,r.matrix)}this.hawkInst.instanceMatrix.needsUpdate=!0;for(let a=0;a<this.tumbleweeds.length;a++){const o=this.tumbleweeds[a],c=o.speed*t;o.x+=c,o.z+=c*.32,o.x-n.x>46&&(o.x-=92),o.z-n.z>46&&(o.z-=92);const h=Math.abs(Math.sin(e*3.8+o.phase))*.18,l=ae(o.x,o.z)+.34+h;o.rotZ-=c*2.1,o.rotX+=c*.8,r.position.set(o.x,l,o.z),r.rotation.set(o.rotX,0,o.rotZ),r.scale.set(1,1,1),r.updateMatrix(),this.tumbleweedInst.setMatrixAt(a,r.matrix)}this.tumbleweedInst.instanceMatrix.needsUpdate=!0;for(let a=0;a<this.lizards.length;a++){const o=this.lizards[a],c=o.x-n.x,h=o.z-n.z;Math.hypot(c,h)<5.8?(o.yaw=Math.atan2(c,h),o.speed=4.8):o.speed*=Math.max(0,1-t*3.5),o.speed>.05&&(o.x+=Math.sin(o.yaw)*o.speed*t,o.z+=Math.cos(o.yaw)*o.speed*t);const d=ae(o.x,o.z)+.04;r.position.set(o.x,d,o.z),r.rotation.set(0,o.yaw,Math.sin(e*18)*(o.speed*.03)),r.scale.set(1,1,1),r.updateMatrix(),this.lizardInst.setMatrixAt(a,r.matrix)}this.lizardInst.instanceMatrix.needsUpdate=!0;for(let a=0;a<this.palmCrowns.length;a++){const o=this.palmCrowns[a];o.crown.rotation.z=Math.sin(e*1.4+o.phase)*(.045+i*.03),o.crown.rotation.x=Math.cos(e*1.1+o.phase)*.03}this.tentTimeUniform&&(this.tentTimeUniform.value=e),this.dustUniforms.uTime.value=e,this.dustUniforms.uPlayerPos.value.copy(n),this.dustUniforms.uColor.value.lerpColors(new Mt("#eed5ad"),new Mt("#f7b56b"),Math.pow(i,1.2))}_mergeGeometriesSimple(t){let e=0,n=0,i=!0;for(const u of t)e+=u.attributes.position.count,n+=u.index?u.index.count:u.attributes.position.count,u.attributes.uv||(i=!1);const r=new Float32Array(e*3),a=new Float32Array(e*3),o=i?new Float32Array(e*2):null,c=new Uint32Array(n);let h=0,l=0;for(const u of t){const f=u.attributes.position,g=u.attributes.normal;if(r.set(f.array,h*3),a.set(g.array,h*3),i&&u.attributes.uv&&o.set(u.attributes.uv.array,h*2),u.index){const _=u.index.array;for(let m=0;m<_.length;m++)c[l+m]=_[m]+h;l+=_.length}else{for(let _=0;_<f.count;_++)c[l+_]=h+_;l+=f.count}h+=f.count}const d=new pe;return d.setAttribute("position",new te(r,3)),d.setAttribute("normal",new te(a,3)),o&&d.setAttribute("uv",new te(o,2)),d.setIndex(new te(c,1)),d}}function No(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new pe;let h=0;for(let l=0;l<s.length;++l){const d=s[l];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,l),h+=f}}if(e){let l=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+l);l+=s[u].attributes.position.count}c.setIndex(d)}for(const l in r){const d=Bo(r[l]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,d)}for(const l in a){const d=a[l][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<a[l].length;++_)f.push(a[l][_][u]);const g=Bo(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Bo(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){const l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}const a=new t(r),o=new te(a,e,n);let c=0;for(let h=0;h<s.length;++h){const l=s[h];if(l.isInterleavedBufferAttribute){const d=c/e;for(let u=0,f=l.count;u<f;u++)for(let g=0;g<e;g++){const _=l.getComponent(u,g);o.setComponent(u+d,g,_)}}else a.set(l.array,c);c+=l.count*e}return i!==void 0&&(o.gpuType=i),o}class cm{constructor(t,e,n,i,r){this.scene=t,this.tex=e,this.models=n,this.physics=i,this.jeepWorldPos=r,this.group=new Pe,this.group.position.set(Yt,pn,zt),this.scene.add(this.group),this.interactables=[],this.activeMissionId=null,this.windTurbine=null,this.windVane=null,this.awningTimeUniform={value:0},this.radioGlowMat=null,this.radioLight=null,this.hatchMesh=null,this.hatchTargetAngle=0,this.switchLever=null,this.switchTargetAngle=.6,this.compassNeedle=null,this.godRayMat=null,this._createMaterials(),this._buildMainEstate(),this._buildCourtyardWalls(),this._buildGrandAwning(),this._buildWindVaneTower(),this._buildInteriorRooms(),this._buildBackCourtyardAndWell(),this._buildStoryClues(),this._optimizeStaticBatches()}_createMaterials(){const t=this.tex.loadPBRSet("adobe_wall",1,1);this.adobeMat=new re({map:t.map,normalMap:t.normalMap,normalScale:new Dt(1.15,1.15),roughness:.93,metalness:.02,vertexColors:!0}),this.adobeMat.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vAdobeWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
           float patch1 = sin(vAdobeWorldPos.x * 0.55 + vAdobeWorldPos.y * 0.8) * cos(vAdobeWorldPos.z * 0.55 - vAdobeWorldPos.y * 0.6);
           float groundDust = smoothstep(1.35, 0.05, vAdobeWorldPos.y);
           vec3 plasterVariation = mix(vec3(0.92, 0.87, 0.79), vec3(1.06, 1.01, 0.94), patch1 * 0.5 + 0.5);
           diffuseColor.rgb *= plasterVariation;
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.84, 0.72, 0.55), groundDust * 0.35);`)};const e=this.tex.loadPBRSet("desert_wood",1.6,1);this.woodMat=new re({map:e.map,normalMap:e.normalMap,normalScale:new Dt(1,1),roughness:.88,metalness:.04});const n=this.tex.loadPBRSet("rusted_metal",1.5,1.5);this.metalMat=new re({map:n.map,normalMap:n.normalMap,normalScale:new Dt(1.1,1.1),roughness:.72,metalness:.52});const i=this.tex.loadPBRSet("floor_tiles",4.8,4);this.floorMat=new re({map:i.map,normalMap:i.normalMap,normalScale:new Dt(1.1,1.1),roughness:.88,metalness:.03,vertexColors:!0});const r=this.tex.loadPBRSet("tattered_fabric",2.4,2);this.fabricMat=new re({map:r.map,roughness:.95,metalness:0,side:we}),this.fabricMat.onBeforeCompile=c=>{c.uniforms.uTime=this.awningTimeUniform,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           transformed.y += sin(uTime * 3.5 + position.x * 1.8 + position.z * 1.5) * 0.045;`)};const a=this.tex.loadPBRSet("sandstone_rock",2,2);this.stoneMat=new re({map:a.map,normalMap:a.normalMap,roughness:.94,metalness:.02});const o=this.tex.loadPBRSet("sand",2,2);this.sandDriftMat=new re({map:o.map,normalMap:o.normalMap,roughness:.92}),this.darkMetalMat=new re({color:3879209,roughness:.65,metalness:.7}),this.brassMat=new re({color:12950344,roughness:.36,metalness:.82}),this.paperMat=new re({color:15127722,roughness:.9,side:we})}_createBakedBox(t,e,n,i=.74,r=.99){const a=new At(t,e,n,1,1,1),o=a.attributes.position,c=a.attributes.normal,h=a.attributes.uv,l=new Float32Array(o.count*3),d=1.45;for(let u=0;u<o.count;u++){const f=o.getX(u),g=o.getY(u),_=o.getZ(u),m=Math.abs(c.getX(u));Math.abs(c.getY(u))>.5?h.setXY(u,(f+t*.5)/d,(_+n*.5)/d):m>.5?h.setXY(u,(_+n*.5)/d,(g+e*.5)/d):h.setXY(u,(f+t*.5)/d,(g+e*.5)/d);const y=St.clamp((g+e*.5)/Math.max(.001,e),0,1),E=St.lerp(i,r,Math.pow(y,.55));l[u*3]=E,l[u*3+1]=E*.985,l[u*3+2]=E*.965}return h.needsUpdate=!0,a.setAttribute("color",new te(l,3)),a}_addBox(t,e,n,i,r,a,o=!0,c=this.adobeMat,h=!0,l=null){const d=c===this.adobeMat?this._createBakedBox(i,r,a):new At(i,r,a),u=new lt(d,c);if(u.position.set(t,e,n),u.castShadow=h,u.receiveShadow=!0,this.group.add(u),o){const f=Yt+t,g=zt+n;this.physics.addBoxCollider(f-i*.5,f+i*.5,g-a*.5,g+a*.5,e-r*.5,e+r*.5,l)}return u}_buildMainEstate(){const n=new At(14.8,.24,12.2,4,1,4),i=n.attributes.position,r=new Float32Array(i.count*3);for(let m=0;m<i.count;m++){const y=1-Math.max(Math.abs(i.getX(m))/7.4,Math.abs(i.getZ(m))/6.1)*.26;r[m*3]=y,r[m*3+1]=y*.98,r[m*3+2]=y*.95}n.setAttribute("color",new te(r,3));const a=new lt(n,this.floorMat);a.position.set(0,.04,0),a.receiveShadow=!0,this.group.add(a),this.physics.addFloorZone(Yt-7.3,Yt+7.3,zt-6,zt+6.4,.16,"stone"),this.physics.addInteriorZone(Yt-7.1,Yt+7.1,zt-5.9,zt+5.9,-.5,4.6);const o=new lt(new At(3.4,.18,1.6),this.stoneMat);o.position.set(0,.05,6.85),o.receiveShadow=!0,this.group.add(o),this._addBox(-6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(-4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(-4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(0,3.68,6.1,2.5,1.35,.56,!1),this._addBox(0,2.98,6.1,2.75,.18,.66,!1,this.woodMat),this._addBox(-1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat),this._addBox(1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat);const c=new lt(new At(1.05,2.75,.08),this.woodMat);c.position.set(-1.12,1.52,5.45),c.rotation.y=1.18,this.group.add(c),this._addBox(-7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(-7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(-4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(0,3.65,-6.1,2.3,1.4,.56,!1),this._addBox(0,2.92,-6.1,2.5,.16,.64,!1,this.woodMat),this._addBox(-7.35,4.35/2,3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,4.35/2,-3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,.65,0,.56,1.3,2.8,!0,this.adobeMat,!0,!1),this._addBox(-7.35,3.55,0,.56,1.6,2.8,!1),this._addBox(-7.35,1.32,0,.66,.12,2.9,!1,this.woodMat),this._addBox(-7.35,2.75,0,.66,.12,2.9,!1,this.woodMat),this._addBox(7.35,4.35/2,3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,4.35/2,-3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,.9,0,.56,1.8,1.8,!0,this.adobeMat,!0,!1),this._addBox(7.35,3.65,0,.56,1.4,1.8,!1),this._addBox(-2.3,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(-2.3,3.65,2.2,.42,1.4,2.6,!1),this._addBox(-2.3,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(2.6,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(2.6,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(2.6,3.65,2.2,.42,1.4,2.6,!1),this._addBox(2.6,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(0,4.46,0,15.2,.3,12.6,!1),this._addBox(-4.2,4.88,6.1,6.4,.56,.38,!1),this._addBox(4.4,4.82,6.1,6,.46,.38,!1),this._addBox(-7.4,4.88,0,.38,.56,12.6,!1),this._addBox(7.4,4.82,-1.2,.38,.44,10,!1),this._addBox(0,4.92,-6.1,15.2,.62,.38,!1);const h=new _e(.11,.12,16.4,5);h.rotateZ(Math.PI/2);for(let m=-4.8;m<=4.8;m+=1.9){const p=new lt(h,this.woodMat);p.position.set(0,4.18,m),p.castShadow=!1,this.group.add(p)}this._addBox(-2.4,5.9,-2,5.6,2.6,4.8,!1),this._addBox(-2.4,7.35,-4.25,5.6,.36,.32,!1),this._addBox(-2.4,5.65,.45,1.25,1.8,.16,!1,this.darkMetalMat,!1);const l=new Pe;l.position.set(7.72,0,2.6),l.rotation.z=.14;const d=new lt(new _e(.035,.04,4.6,5),this.woodMat);d.position.set(0,2.3,-.28);const u=new lt(new _e(.035,.04,4.6,5),this.woodMat);u.position.set(0,2.3,.28),l.add(d,u);for(let m=.45;m<=4.2;m+=.45){const p=new lt(new _e(.024,.024,.58,5),this.woodMat);p.rotation.x=Math.PI/2,p.position.set(0,m,0),l.add(p)}this.group.add(l),[{x:-.2,y:.1,z:5.1,sx:2.2,sy:.32,sz:2.6},{x:-6.4,y:.12,z:-5.1,sx:1.8,sy:.38,sz:1.8},{x:6.3,y:.12,z:5,sx:1.6,sy:.34,sz:1.7},{x:-1.6,y:.12,z:-5.3,sx:1.5,sy:.28,sz:1.4}].forEach(m=>{const p=new Vn(1,1,8);p.scale(m.sx,m.sy,m.sz);const y=new lt(p,this.sandDriftMat);y.position.set(m.x,m.y,m.z),y.receiveShadow=!0,this.group.add(y)});const g=new Se(21,18);g.rotateX(-Math.PI/2);const _=new lt(g,new rn({map:this.tex.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:.54}));_.position.set(0,.03,.4),this.group.add(_)}_buildCourtyardWalls(){this._addBox(-5.6,.95,10.2,6.8,1.9,.48,!0,this.adobeMat,!0,!0),this._addBox(5.6,.85,10.2,6.8,1.7,.48,!0,this.adobeMat,!0,!0),this._addBox(-2.25,1.45,10.2,.72,2.9,.72,!0,this.adobeMat,!0,!1),this._addBox(2.25,1.35,10.2,.72,2.7,.72,!0,this.adobeMat,!0,!1),this._addBox(0,2.85,10.2,5.2,.22,.42,!1,this.woodMat),this._addBox(-8.9,.85,8.2,.46,1.7,4.2,!0,this.adobeMat,!0,!0),this._addBox(8.9,.75,8.2,.46,1.5,4.2,!0,this.adobeMat,!0,!0)}_buildGrandAwning(){[[-6.6,9],[-3.8,9],[-1.5,9],[1.6,9]].forEach(([i,r])=>{const a=new lt(new _e(.1,.12,2.85,5),this.woodMat);a.position.set(i,1.42,r),a.castShadow=!0,this.group.add(a),this.physics.addCylinderCollider(Yt+i,zt+r,.22,3)}),this._addBox(-2.5,2.82,9,8.5,.16,.16,!1,this.woodMat);for(let i=-6.4;i<=1.6;i+=1.3){const r=new lt(new At(.1,.11,3.1),this.woodMat);r.position.set(i,3.08,7.6),r.rotation.x=.18,this.group.add(r)}const e=new Se(8.2,3,8,4);e.rotateX(-Math.PI/2+.18);const n=e.attributes.position;for(let i=0;i<n.count;i++){const r=Math.abs(Math.sin(n.getX(i)*1.1))*-.16;n.setY(i,n.getY(i)+r)}e.computeVertexNormals(),this.awningCloth=new lt(e,this.fabricMat),this.awningCloth.position.set(-2.5,3.12,7.55),this.awningCloth.castShadow=!0,this.group.add(this.awningCloth)}_buildWindVaneTower(){const t=new Pe;t.position.set(3.8,4.6,-2.4);const e=7.4;[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]].forEach(([c,h])=>{const l=new lt(new _e(.045,.07,e,5),this.metalMat);l.position.set(c*.5,e*.5,h*.5),l.rotation.z=c>0?.095:-.095,l.rotation.x=h>0?-.095:.095,l.castShadow=!0,t.add(l)});for(let c=1.2;c<e-.8;c+=1.6){const h=1.48*(1-c/e*.72),l=new lt(new At(h,.05,.05),this.darkMetalMat);l.position.set(0,c,h*.5);const d=l.clone();d.position.set(0,c,-h*.5);const u=new lt(new At(.05,.05,h),this.darkMetalMat);u.position.set(h*.5,c,0);const f=u.clone();f.position.set(-h*.5,c,0),t.add(l,d,u,f)}this.windVane=new Pe,this.windVane.position.set(0,e+.2,0);const i=new lt(new At(2.1,.06,.06),this.metalMat);i.position.set(.45,0,0);const r=new lt(new At(1.05,.72,.04),this.metalMat);r.position.set(1.42,.05,0),this.windVane.add(i,r);const a=[];for(let c=0;c<8;c++){const h=c/8*Math.PI*2,l=new At(.03,1,.2),d=new jt;d.makeRotationFromEuler(new Ge(h,.32,0)),d.setPosition(0,Math.cos(h)*.62,Math.sin(h)*.62),l.applyMatrix4(d),a.push(l)}const o=No(a,!1);a.forEach(c=>c.dispose()),this.windTurbine=new lt(o,this.metalMat),this.windTurbine.position.set(-.58,0,0),this.windVane.add(this.windTurbine),t.add(this.windVane),this.group.add(t)}_buildInteriorRooms(){const t=new lt(new Se(3.6,2.4),this.fabricMat);t.rotation.x=-Math.PI/2,t.position.set(.1,.17,2.1),t.receiveShadow=!0,this.group.add(t);const e=new lt(new At(1.68,.12,1.68),new rn({color:722692}));e.position.set(0,.13,-1.6),this.group.add(e),this._addBox(-.94,.21,-1.6,.18,.1,2.06,!1,this.stoneMat),this._addBox(.94,.21,-1.6,.18,.1,2.06,!1,this.stoneMat),this._addBox(0,.21,-2.54,1.7,.1,.18,!1,this.stoneMat),this._addBox(0,.21,-.66,1.7,.1,.18,!1,this.stoneMat),this.hatchMesh=new Pe,this.hatchMesh.position.set(0,.24,-2.45);const n=new lt(new At(1.72,.08,1.72),this.woodMat);n.position.set(0,0,.85),n.castShadow=!0,n.receiveShadow=!0;const i=new lt(new At(1.76,.1,.14),this.metalMat);i.position.set(0,.01,.35);const r=new lt(new At(1.76,.1,.14),this.metalMat);r.position.set(0,.01,1.35);const a=new lt(new At(.14,.1,1.76),this.metalMat);a.position.set(0,.01,.85);const o=new lt(new Cs(.14,.028,6,12),this.brassMat);o.rotation.x=Math.PI/2,o.position.set(0,.07,1.48),this.hatchMesh.add(n,i,r,a,o),this.group.add(this.hatchMesh);const c=this.models?.createMesh("crate",1.35);c?(c.position.set(1.45,.16,-4.85),c.rotation.y=.28,c.castShadow=!0,this.group.add(c)):this._addBox(1.45,.52,-4.85,1.1,.75,.75,!1,this.woodMat),this.physics.addBoxCollider(Yt+.8,Yt+2.1,zt-5.3,zt-4.4,.16,.88,!0);const h=this.models?.createMesh("jug",.55);h&&(h.position.set(1.35,.73,-4.82),h.castShadow=!0,this.group.add(h));const l=this.models?.createMesh("table",2.25);l?(l.position.set(-5.35,.16,-.4),l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)):this._addBox(-5.35,.96,-.4,2.1,.1,1.05,!1,this.woodMat),this.physics.addBoxCollider(Yt-6.45,Yt-4.25,zt-.98,zt+.18,.16,1.08,!0);const d=this.models?.createMesh("chair",.58);d&&(d.position.set(-4.65,.16,.78),d.rotation.y=-2.4,d.castShadow=!0,this.group.add(d));const u=this.models?.createMesh("lantern",.13);u&&(u.position.set(-6.05,1.06,-.62),u.castShadow=!0,this.group.add(u)),this._addBox(-4.8,2.25,-5.75,2.4,1.45,.08,!1,this.woodMat,!1),[{x:-4.9,y:2.3,z:-5.69,rx:0,ry:0,rz:.06,w:.52,h:.38},{x:-4.2,y:2.18,z:-5.69,rx:0,ry:0,rz:-.08,w:.42,h:.46},{x:-5.55,y:2.22,z:-5.69,rx:0,ry:0,rz:.03,w:.45,h:.34},{x:-4.85,y:1.07,z:-.45,rx:-Math.PI/2,ry:0,rz:.4,w:.32,h:.24},{x:-5.1,y:.175,z:.45,rx:-Math.PI/2,ry:0,rz:1.1,w:.34,h:.25}].forEach(R=>{const T=new lt(new Se(R.w,R.h),this.paperMat);T.position.set(R.x,R.y,R.z),T.rotation.set(R.rx,R.ry,R.rz),this.group.add(T)}),this._addBox(-2.85,1.35,-3.4,.62,2.4,2.2,!0,this.metalMat,!0,!1),this.godRayUniforms={uColor:{value:new Mt("#ffdfa0")},uOpacity:{value:.16}},this.godRayMat=new en({transparent:!0,depthWrite:!1,side:we,blending:dr,uniforms:this.godRayUniforms,vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormalV;
        varying vec3 vViewDir;
        void main() {
          vUv = uv;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormalV = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec3 vNormalV;
        varying vec3 vViewDir;
        void main() {
          float fresnel = pow(abs(dot(normalize(vNormalV), normalize(vViewDir))), 1.75);
          float lengthFade = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.72, vUv.y);
          float alpha = fresnel * lengthFade * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `});const g=new _e(.72,1.35,3.8,12,1,!0),_=new lt(g,this.godRayMat);_.position.set(-5.65,1.65,0),_.rotation.z=-.86;const m=new lt(g,this.godRayMat);m.scale.set(.68,.78,.68),m.position.set(-4.4,1.55,4.4),m.rotation.x=-.82,this.group.add(_,m),this._addBox(5.2,.6,-4.4,2.4,.92,1.05,!0,this.woodMat,!0,!0),this._addBox(6.4,1.3,1.8,.85,2.25,1.9,!0,this.metalMat,!0,!1);const p=new Pe;p.position.set(5.15,1.32,-4.35),p.rotation.y=-.15;const y=new lt(new At(.84,.48,.44),this.darkMetalMat);p.add(y),this.radioGlowMat=new re({color:3877914,emissive:new Mt("#ff8c2b"),emissiveIntensity:.04,roughness:.3});const E=new lt(new Se(.48,.14),this.radioGlowMat);E.position.set(-.1,.06,.225),p.add(E);for(let R=0;R<2;R++){const T=new lt(new _e(.045,.045,.05,8),this.brassMat);T.rotation.x=Math.PI/2,T.position.set(.24,-.05+R*.14,.23),p.add(T)}const M=new lt(new _e(.008,.012,1.3,4),this.darkMetalMat);M.position.set(.32,.82,-.05),p.add(M),this.group.add(p),this.radioLight=new dc(16748086,0,7.5,2),this.radioLight.position.set(Yt+5.15,pn+1.5,zt-3.9),this.scene.add(this.radioLight)}_buildBackCourtyardAndWell(){const t=this.models?.getGeometry("barrel"),e=this.models?.getMaterial("barrel")||this.metalMat,n=[[8.3,2.2],[8.6,1.15],[-8.3,4.4],[5.8,-7.8]];if(t){const _=new Je(t,e,n.length);_.castShadow=!0;const m=new xe;n.forEach(([p,y],E)=>{const M=ae(Yt+p,zt+y)-pn;m.position.set(p,M,y),m.rotation.set(0,E*1.1,0),m.scale.setScalar(.72),m.updateMatrix(),_.setMatrixAt(E,m.matrix),this.physics.addCylinderCollider(Yt+p,zt+y,.42,M+1.15)}),_.instanceMatrix.needsUpdate=!0,this.group.add(_)}const i=-6.8,r=-10.4,a=ae(Yt+i,zt+r)-pn,o=new Pe;o.position.set(i,a,r);const c=new lt(new _e(1.3,1.42,1.05,10,1,!0),this.stoneMat);c.position.y=.5,c.castShadow=!0;const h=new lt(new ha(1.22,10),new rn({color:591364}));h.rotation.x=-Math.PI/2,h.position.y=.42;const l=new lt(new At(.14,2.3,.14),this.woodMat);l.position.set(-1.26,1.15,0);const d=new lt(new At(.14,1.85,.14),this.woodMat);d.position.set(1.26,.92,0),d.rotation.z=-.15;const u=new lt(new _e(.06,.06,2.7,5),this.woodMat);u.rotation.z=Math.PI/2-.12,u.position.set(0,2.02,0),o.add(c,h,l,d,u),this.group.add(o),this.physics.addCylinderCollider(Yt+i,zt+r,1.5,a+1.8);const f=new Pe;f.position.set(4.1,1.48,-6.58);const g=new lt(new At(.56,.72,.32),this.metalMat);g.castShadow=!0,this.switchLever=new lt(new At(.08,.34,.18),this.brassMat),this.switchLever.position.set(.1,.04,-.2),this.switchLever.rotation.x=.6,f.add(g,this.switchLever),this.group.add(f)}_buildStoryClues(){const t=(l,d,u,f=3.8,g=.14)=>{const _=new lt(new fa(.14,.21,18),new rn({color:16766074,transparent:!0,opacity:.94,side:we,depthTest:!1}));_.position.copy(u).add(new D(0,g,0)),_.renderOrder=12,_.visible=!1,this.scene.add(_),this.interactables.push({id:l,label:d,worldPos:u.clone(),radius:f,ringMesh:_})},e=ae(-8.2,10.2)+.56,n=new Pe;n.position.set(-8.2,e,10.2);const i=this.models?.createMesh("compass",.38);i?n.add(i):n.add(new lt(new _e(.16,.16,.06,12),this.brassMat));const r=new lt(new At(.022,.022,.18),new rn({color:12724252}));r.position.y=.065,this.compassNeedle=r,n.add(r),this.scene.add(n),t("compass","فحص البوصلة المحطمة",new D(-8.2,e+.04,10.2),4,.11),t("jeep","تفتيش حطام سيارة البعثة",this.jeepWorldPos.clone(),4.8,.18);const a=this.models?.createMesh("crate",1.15);a?(a.position.set(-3.2,.02,7.6),a.castShadow=!0,this.group.add(a)):this._addBox(-3.2,.26,7.6,.85,.5,.72,!1,this.woodMat),this.physics.addBoxCollider(Yt-3.75,Yt-2.65,zt+7.2,zt+8,0,.56,!0);const o=new lt(new _e(.14,.15,.3,10),this.metalMat);o.rotation.z=.5,o.position.set(-3.08,.59,7.62);const c=new lt(new At(.42,.14,.32),new re({color:7228204,roughness:.92}));c.position.set(-3.38,.55,7.52),this.group.add(o,c),t("canteen","فحص حقيبة البعثة والزمزمية",new D(Yt-3.2,pn+.62,zt+7.6),3.8,.12);const h=new lt(new At(.38,.05,.48),this.paperMat);h.position.set(-5.3,1.07,-.32),h.rotation.y=.25,this.group.add(h),t("journal","قراءة دفتر ملاحظات نادر",new D(Yt-5.3,pn+1.1,zt-.32),3.8,.12),t("antenna_box","تشغيل قاطع برج الهوائي",new D(Yt+4.1,pn+1.5,zt-6.75),3.8,.08),t("radio","تشغيل المذياع التناظري (تردد ٤٤)",new D(Yt+5.15,pn+1.38,zt-4.35),4,.14)}setActiveMissionId(t){this.activeMissionId=t;for(let e=0;e<this.interactables.length;e++){const n=this.interactables[e];n.ringMesh&&(n.ringMesh.visible=n.id===t)}}getActiveInteractable(){return this.activeMissionId&&this.interactables.find(t=>t.id===this.activeMissionId)||null}setAntennaPowered(t){this.switchTargetAngle=t?-.65:.6,this.radioGlowMat&&(this.radioGlowMat.emissiveIntensity=t?2.2:.04),this.radioLight&&(this.radioLight.intensity=t?2.3:0)}unlockHatch(){this.hatchTargetAngle=-.82}_optimizeStaticBatches(){const t=new Set([this.adobeMat,this.woodMat,this.metalMat,this.darkMetalMat,this.stoneMat,this.brassMat,this.paperMat,this.sandDriftMat]),e=new Set([this.awningCloth,this.hatchMesh,this.switchLever,this.windVane,this.windTurbine]),n=o=>{let c=o;for(;c&&c!==this.group;){if(e.has(c))return!0;c=c.parent}return!1};this.group.updateMatrixWorld(!0);const i=new jt().copy(this.group.matrixWorld).invert(),r=new Map,a=[];this.group.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||!t.has(o.material)||n(o))return;const c=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone(),h=new jt().multiplyMatrices(i,o.matrixWorld);c.applyMatrix4(h);const l=new pe;if(l.setAttribute("position",c.attributes.position.clone()),c.attributes.normal&&l.setAttribute("normal",c.attributes.normal.clone()),c.attributes.uv&&l.setAttribute("uv",c.attributes.uv.clone()),o.material.vertexColors)if(c.attributes.color)l.setAttribute("color",c.attributes.color.clone());else{const d=new Float32Array(c.attributes.position.count*3).fill(1);l.setAttribute("color",new te(d,3))}c.dispose(),r.has(o.material)||r.set(o.material,[]),r.get(o.material).push(l),a.push(o)});for(const[o,c]of r.entries()){if(c.length<2){c.forEach(l=>l.dispose());continue}const h=No(c,!1);if(c.forEach(l=>l.dispose()),h){const l=new lt(h,o);l.castShadow=o!==this.paperMat,l.receiveShadow=!0,this.group.add(l)}}for(const o of a){const c=r.get(o.material);c&&c.length>=2&&o.parent&&(o.parent.remove(o),o.geometry.dispose())}}update(t,e,n,i){this.windTurbine&&(this.windTurbine.rotation.x+=t*(2.6+i*2.5+Math.sin(e*.7)*.8)),this.windVane&&(this.windVane.rotation.y=.35+Math.sin(e*.42)*.25),this.awningTimeUniform.value=e,this.switchLever&&(this.switchLever.rotation.x+=(this.switchTargetAngle-this.switchLever.rotation.x)*Math.min(1,t*10)),this.hatchMesh&&(this.hatchMesh.rotation.x+=(this.hatchTargetAngle-this.hatchMesh.rotation.x)*Math.min(1,t*4.5)),this.godRayUniforms&&(this.godRayUniforms.uOpacity.value=St.lerp(.14,.28,i),this.godRayUniforms.uColor.value.lerpColors(new Mt("#fff0c4"),new Mt("#ffae52"),i)),this.compassNeedle&&(this.compassNeedle.rotation.y=.4+Math.sin(e*5.2)*.25+Math.cos(e*13)*.08);const r=this.getActiveInteractable();if(r&&r.ringMesh){r.ringMesh.visible=!0,r.ringMesh.lookAt(n.position);const a=.88+Math.sin(e*4)*.18;r.ringMesh.scale.setScalar(a)}}}class lm{constructor(t,e,n,i){this.camera=t,this.physics=e,this.audio=n,this.settings=i,this.enabled=!1,this.position=new D(-11,0,15),this.yaw=-.34,this.pitch=-.02,this.eyeHeight=1.72,this.walkSpeed=4.55,this.sprintSpeed=8.95,this.vy=0,this.gravity=-19.5,this.jumpVelocity=7.5,this.onGround=!0,this.isJumping=!1,this.isActuallySprinting=!1,this.currentFovBoost=0,this.isSprintingKey=!1,this.autoSprintLocked=!1,this.isInsideHouse=!1,this.currentSurface="sand",this.bobTimer=0,this.lastStepSign=0,this.boundaryWarnCooldown=0,this.onBoundaryHit=null,this.keys={},this.joyVec={x:0,y:0},this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyActive=!1,this.joyTouchId=null,this.joyOrigin={x:0,y:0},this.lookTouchId=null,this.lookLast={x:0,y:0},this.mouseDragging=!1,this.pointerLocked=!1,this._targetYaw=this.yaw,this._targetPitch=this.pitch,this.focusedInteractable=null,this._forward=new D,this._right=new D,this._moveDir=new D,this._toObj=new D,this.sprintBannerEl=document.getElementById("auto-sprint-banner"),this._bindInputs()}_haptic(t=12){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}setAutoSprintLock(t){this.autoSprintLocked=!!t,this.sprintBannerEl&&this.sprintBannerEl.classList.toggle("hidden",!this.autoSprintLocked)}setPose(t,e,n,i=0){const r=this.physics.getGroundInfo(t,e,0);this.position.set(t,r.groundY,e),this.vy=0,this.onGround=!0,this.isJumping=!1,this.setAutoSprintLock(!1),this.yaw=n,this.pitch=i,this._targetYaw=n,this._targetPitch=i,this._applyCameraTransform(0,0)}triggerJump(){!this.enabled||!this.onGround||(this.audio.unlock(),this._haptic(14),this.vy=this.jumpVelocity,this.onGround=!1,this.isJumping=!0,this.audio.playFootstep(this.currentSurface,!0))}_bindInputs(){if(window.addEventListener("keydown",u=>{this.keys[u.code]=!0,(u.code==="ShiftLeft"||u.code==="ShiftRight")&&(this.isSprintingKey=!0),(u.code==="KeyS"||u.code==="ArrowDown")&&this.setAutoSprintLock(!1),u.code==="Space"&&(u.preventDefault(),this.triggerJump())}),window.addEventListener("keyup",u=>{this.keys[u.code]=!1,(u.code==="ShiftLeft"||u.code==="ShiftRight")&&(this.isSprintingKey=!1)}),this.sprintBannerEl){const u=f=>{f.preventDefault(),f.stopPropagation(),this.setAutoSprintLock(!1),this._haptic(10)};this.sprintBannerEl.addEventListener("touchstart",u,{passive:!1}),this.sprintBannerEl.addEventListener("click",u)}const t=document.getElementById("btn-mobile-jump");t&&(t.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation(),this.triggerJump()},{passive:!1}),t.addEventListener("click",u=>{u.stopPropagation(),this.triggerJump()}));const e=document.getElementById("look-zone"),n=document.getElementById("game-canvas");if(document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===n}),window.addEventListener("mousemove",u=>{if(this.enabled&&(this.pointerLocked||this.mouseDragging)){const f=this.settings.data.sensitivity*.0022;this._targetYaw-=u.movementX*f,this._targetPitch-=u.movementY*f,this._clampPitch()}}),window.addEventListener("pointerdown",u=>{if(!(!this.enabled||u.pointerType==="touch"||u.button!==0)&&(this.audio.unlock(),this.mouseDragging=!0,u.target===n||u.target===e))try{n.requestPointerLock&&!("ontouchstart"in window)&&n.requestPointerLock()}catch{}}),window.addEventListener("pointerup",()=>{this.mouseDragging=!1}),e){e.addEventListener("touchstart",f=>{if(this.enabled){this.audio.unlock();for(const g of f.changedTouches)if(this.lookTouchId===null){this.lookTouchId=g.identifier,this.lookLast.x=g.clientX,this.lookLast.y=g.clientY;break}}},{passive:!0}),e.addEventListener("touchmove",f=>{if(!(!this.enabled||this.lookTouchId===null)){for(const g of f.changedTouches)if(g.identifier===this.lookTouchId){const _=g.clientX-this.lookLast.x,m=g.clientY-this.lookLast.y;this.lookLast.x=g.clientX,this.lookLast.y=g.clientY;const p=Math.hypot(_,m),y=1+Math.min(.85,p*.02),E=this.settings.data.sensitivity*.0058*y;this._targetYaw-=_*E,this._targetPitch-=m*E*.88,this._clampPitch(),f.preventDefault();break}}},{passive:!1});const u=f=>{for(const g of f.changedTouches)if(g.identifier===this.lookTouchId){this.lookTouchId=null;break}};e.addEventListener("touchend",u,{passive:!0}),e.addEventListener("touchcancel",u,{passive:!0})}const i=document.getElementById("joystick-zone"),r=document.getElementById("joystick-float-wrap"),a=document.getElementById("joystick-base"),o=document.getElementById("joystick-knob"),c=document.getElementById("joystick-sprint-lock"),h=46,l=52,d=(u,f,g,_)=>{o&&(o.style.transform=`translate(${u.toFixed(1)}px, ${f.toFixed(1)}px)`),a&&a.classList.toggle("sprinting",g),c&&c.classList.toggle("engaged",_)};if(i&&r){i.addEventListener("touchstart",f=>{if(this.enabled){this.audio.unlock();for(const g of f.changedTouches)if(this.joyTouchId===null){this.joyTouchId=g.identifier,this.joyActive=!0,this.joyBeyondRing=!1,this.joyLockHover=!1,this.setAutoSprintLock(!1),this.joyOrigin.x=g.clientX,this.joyOrigin.y=g.clientY,r.style.left=`${g.clientX}px`,r.style.top=`${g.clientY}px`,r.classList.remove("hidden"),d(0,0,!1,!1);break}}},{passive:!0}),i.addEventListener("touchmove",f=>{if(!(!this.enabled||this.joyTouchId===null)){for(const g of f.changedTouches)if(g.identifier===this.joyTouchId){const _=g.clientX-this.joyOrigin.x,m=g.clientY-this.joyOrigin.y,p=Math.hypot(_,m),y=m<-36&&Math.abs(_)<Math.abs(m)*.85;this.joyBeyondRing=p>l&&y;const E=this.joyLockHover;this.joyLockHover=m<-92&&Math.abs(_)<56,this.joyLockHover&&!E&&this._haptic(16);const M=this.joyBeyondRing?56:h;let R=_,T=m;p>M&&(R=_/p*M,T=m/p*M);const A=Math.min(1,p/h),P=p>1e-4?_/p:0,w=p>1e-4?m/p:0,x=P*A,C=w*A;this.joyVec.x=Math.abs(x)<.08?0:x,this.joyVec.y=Math.abs(C)<.08?0:C,d(R,T,this.joyBeyondRing||this.joyLockHover,this.joyLockHover),f.preventDefault();break}}},{passive:!1});const u=f=>{for(const g of f.changedTouches)if(g.identifier===this.joyTouchId){this.joyLockHover&&(this.setAutoSprintLock(!0),this._haptic(22)),this.joyTouchId=null,this.joyActive=!1,this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyVec.x=0,this.joyVec.y=0,r.classList.add("hidden"),d(0,0,!1,!1);break}};i.addEventListener("touchend",u,{passive:!0}),i.addEventListener("touchcancel",u,{passive:!0})}}_clampPitch(){this._targetPitch=St.clamp(this._targetPitch,-1.32,1.32)}update(t,e,n){if(!this.enabled)return;this.boundaryWarnCooldown>0&&(this.boundaryWarnCooldown-=t);const i=Math.min(1,t*28);this.yaw+=(this._targetYaw-this.yaw)*i,this.pitch+=(this._targetPitch-this.pitch)*i;let r=0,a=0;(this.keys.KeyW||this.keys.ArrowUp)&&(r+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(r-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(a+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(a-=1);let o=!1;this.joyActive?(r-=this.joyVec.y,a+=this.joyVec.x,(this.joyBeyondRing||this.joyLockHover)&&(o=!0)):this.autoSprintLocked&&(r=1,o=!0);const c=Math.min(1,Math.hypot(r,a));this.isActuallySprinting=(this.isSprintingKey||o)&&c>.3&&r>.15;const h=this.isActuallySprinting?8:0;this.currentFovBoost+=(h-this.currentFovBoost)*Math.min(1,t*7.5);const l=this.settings.data.fov+this.currentFovBoost;Math.abs(this.camera.fov-l)>.05&&(this.camera.fov=l,this.camera.updateProjectionMatrix());let d=0;if(c>.01){const m=(this.isActuallySprinting?this.sprintSpeed:this.walkSpeed)*c;d=m,this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this._moveDir.set(0,0,0).addScaledVector(this._forward,r).addScaledVector(this._right,a).normalize(),this.position.x+=this._moveDir.x*m*t,this.position.z+=this._moveDir.z*m*t,this.physics.resolveHorizontal(this.position,.36)&&this.boundaryWarnCooldown<=0&&this.onBoundaryHit&&(this.boundaryWarnCooldown=8,this.setAutoSprintLock(!1),this.onBoundaryHit())}const u=this.physics.getGroundInfo(this.position.x,this.position.z,this.position.y);this.currentSurface=u.surface;const f=this.position.y-u.groundY;this.isJumping||!this.onGround||f>.38?(this.onGround=!1,this.vy+=this.gravity*t,this.position.y+=this.vy*t,this.position.y<=u.groundY&&(this.position.y=u.groundY,this.vy<-3.2&&this.audio.playFootstep(this.currentSurface,!0),this.vy=0,this.onGround=!0,this.isJumping=!1)):(this.position.y+=(u.groundY-this.position.y)*Math.min(1,t*24),this.vy=0,this.onGround=!0),this.isInsideHouse=this.physics.isInsideBuilding(this.position);let g=0,_=0;if(this.onGround&&d>.35){const m=this.isActuallySprinting?12.8:7.6,p=this.isActuallySprinting?.082:.042,y=this.isActuallySprinting?.04:.02;this.bobTimer+=t*m;const E=Math.sin(this.bobTimer);g=E*p,_=Math.cos(this.bobTimer*.5)*y,E<-.82&&this.lastStepSign>=-.82&&this.audio.playFootstep(this.currentSurface,this.isActuallySprinting),this.lastStepSign=E}else this.onGround&&(g=Math.sin(e*1.45)*.011,this.lastStepSign=0);this._applyCameraTransform(_,g),this._updateActiveInteractable(n)}_applyCameraTransform(t,e){this.camera.position.set(this.position.x+Math.cos(this.yaw)*t,this.position.y+this.eyeHeight+e,this.position.z-Math.sin(this.yaw)*t),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=t*(this.isActuallySprinting?-.28:-.14)}_updateActiveInteractable(t){if(!t){this.focusedInteractable=null;return}const e=this.camera.position.distanceTo(t.worldPos);if(e>t.radius){this.focusedInteractable=null;return}this.camera.getWorldDirection(this._forward),this._toObj.subVectors(t.worldPos,this.camera.position).normalize();const n=this._forward.dot(this._toObj);this.focusedInteractable=n>.52||e<2.2?t:null}}class hm{constructor(t,e,n,i){this.camera=t,this.sky=e,this.audio=n,this.player=i,this.mode="title",this.timer=0,this.onWakeupComplete=null,this.onWakeupSubtitle=null,this._spokeStep1=!1,this._spokeStep2=!1,this._spokeStep3=!1,this._playedSunSwell=!1,this.eyelidEl=document.getElementById("eyelid-layer"),this.blurEl=document.getElementById("vision-blur-layer"),this.containerEl=document.getElementById("game-container"),this.skipBtn=document.getElementById("btn-skip-cutscene"),this.whisperEl=document.getElementById("time-whisper-banner"),this.whisperClockEl=document.getElementById("whisper-clock"),this.whisperLabelEl=document.getElementById("whisper-label"),this._whisperTimeout=null,this.skipBtn&&this.skipBtn.addEventListener("click",()=>{this.mode==="wakeup"&&this.finishWakeup()})}startTitleCamera(){this.mode="title",this.timer=0,this._setEyelids(1),this._setBlur(0,0),this.sky.cutsceneGlareBoost=0,this.containerEl?.classList.remove("cinematic-bars-active"),this.skipBtn?.classList.add("hidden")}startWakeupCutscene(t,e){this.mode="wakeup",this.timer=0,this.onWakeupSubtitle=t,this.onWakeupComplete=e,this._spokeStep1=!1,this._spokeStep2=!1,this._spokeStep3=!1,this._playedSunSwell=!1,this.player.enabled=!1,this.containerEl?.classList.add("cinematic-bars-active"),this.skipBtn?.classList.remove("hidden"),this._wakeBaseY=ae(-11,15),this._setEyelids(0),this._setBlur(14,.22),this.audio.playWakeUpTinnitus()}finishWakeup(){this.mode==="wakeup"&&(this.mode="gameplay",this._setEyelids(1),this._setBlur(0,0),this.sky.cutsceneGlareBoost=0,this.containerEl?.classList.remove("cinematic-bars-active"),this.skipBtn?.classList.add("hidden"),this.player.setPose(-11,15,-.34,-.02),this.player.enabled=!0,this.onWakeupComplete&&this.onWakeupComplete())}startEndingVista(){this.mode="ending",this.timer=0,this.player.enabled=!1,this.containerEl?.classList.add("cinematic-bars-active")}smoothAdvanceTime(t,e,n){this.sky.setTimeOfDay(n,!1),this.audio.playDesertSting(n>=.85),this.whisperEl&&this.whisperClockEl&&this.whisperLabelEl&&(this.whisperClockEl.textContent=t,this.whisperLabelEl.textContent=e,this.whisperEl.classList.add("visible"),this._whisperTimeout&&clearTimeout(this._whisperTimeout),this._whisperTimeout=setTimeout(()=>{this.whisperEl.classList.remove("visible")},3400))}_setEyelids(t){this.eyelidEl&&this.eyelidEl.style.setProperty("--eyelid-open",St.clamp(t,0,1).toFixed(3))}_setBlur(t,e){this.blurEl&&(this.blurEl.style.backdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.webkitBackdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.background=e>.01?`rgba(255, 246, 224, ${e.toFixed(3)})`:"rgba(255, 246, 224, 0)")}update(t,e){if(this.timer+=t,this.mode==="title"){const n=.54+Math.sin(e*.1)*.18,i=28+Math.sin(e*.16)*1.4,r=Yt+4.5+Math.sin(n)*i,a=zt+2+Math.cos(n)*i,o=ae(r,a);this.camera.position.set(r,o+5.2+Math.sin(e*.2)*.35,a),this.camera.lookAt(Yt-2.2,3.2,zt);return}if(this.mode==="ending"){const i=-18.5+Math.sin(e*.14)*2.5,r=4,a=ae(i,r);this.camera.position.set(i,a+4,r),this.camera.lookAt(Yt+1,4.2,zt);return}if(this.mode==="wakeup"){const n=this.timer,i=-11,r=15,a=this._wakeBaseY,o=this.sky.sunDirection,c=Math.atan2(-o.x,-o.z),h=Math.asin(St.clamp(o.y,-.95,.95));let l=a+.42,d=c+.28,u=.26,f=.14,g=0,_=14,m=0,p=0;if(n<2.8){const y=n/2.8;n<1?g=St.smoothstep(n,.15,1)*.54:n<1.45?g=St.lerp(.54,.12,(n-1)/.45):g=St.lerp(.12,.95,St.smoothstep(n,1.45,2.7)),_=St.lerp(14,2,y),m=St.lerp(.16,.05,y),f=St.lerp(.15,.03,y),u=St.lerp(.24,.42,y),n>1.2&&!this._spokeStep1&&(this._spokeStep1=!0,this.onWakeupSubtitle?.("حرارة خانقة... رمل جاف يملأ فمي... أين أنا؟"))}else if(n<5.6){const y=St.smoothstep(n,2.8,4.9);g=n<4.7?.96:St.lerp(.96,.46,(n-4.7)/.9),d=St.lerp(c+.28,c,y),u=St.lerp(.42,Math.min(1.18,h-.03),y),f=St.lerp(.03,0,y),l=a+St.lerp(.42,.68,y);const E=St.smoothstep(n,3.4,4.85);p=E*.94,m=E*.3,_=2*(1-y)+E*2.2,n>3.6&&!this._playedSunSwell&&(this._playedSunSwell=!0,this.audio.playSunGlareSwell()),n>4.1&&!this._spokeStep2&&(this._spokeStep2=!0,this.onWakeupSubtitle?.("آه... شمس الظهيرة حارقة! سطوعها يكاد يعمي عيني..."))}else if(n<8){const y=St.smoothstep(n,5.6,7.6);g=St.lerp(.46,1,St.smoothstep(n,6.1,7.5)),d=St.lerp(c,-.52,y),u=St.lerp(Math.min(1.18,h-.03),-.56,y),f=Math.sin(y*Math.PI)*-.07,l=a+St.lerp(.68,1.18,y),p=Math.max(0,.94*(1-y*1.45)),m=Math.max(0,.3*(1-y*1.5)),_=Math.max(0,2.2*(1-y*1.35))}else if(n<10.8){const y=St.smoothstep(n,8,10.5);g=1,_=0,m=0,p=0,d=St.lerp(-.52,-.34,y),u=St.lerp(-.56,-.02,y),f=0,l=a+St.lerp(1.18,this.player.eyeHeight,y),n>8.4&&!this._spokeStep3&&(this._spokeStep3=!0,this.onWakeupSubtitle?.("بيت مهجور وسط هذه الكثبان... وهناك بوصلة تلمع على الصخرة أمامي."))}else{this.finishWakeup();return}this.camera.position.set(i,l,r),this.camera.rotation.order="YXZ",this.camera.rotation.y=d,this.camera.rotation.x=u,this.camera.rotation.z=f,this._setEyelids(g),this._setBlur(_,m),this.sky.cutsceneGlareBoost=p}}}const um=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];function ur(s){return String(s).replace(/\d/g,t=>um[Number(t)])}const Oo=[{id:"compass",objective:"تفحّص البوصلة الملقاة على الصخرة القريبة لمعرفة اتجاهك",tag:"المهمة ١ من ٦ — الصحراء المفتوحة",title:"بوصلة نحاسية محطمة",sfx:"paper",inspectText:`الزجاج مشقوق بفعل الشمس، لكن الإبرة لم تتوقف... إنها ترتجف بعناد وتشير مباشرةً نحو برج الهوائي فوق البيت المهجور بدلاً من الشمال.

نُقش على ظهرها: «محطة الرصد — القطاع ٧».`,lines:[{text:"إبرة البوصلة لا تشير للشمال... شيء ما داخل ذلك البيت المهجور يجذبها بقوة.",style:"thought"},{text:"هناك آثار أقدام تقود نحو حطام سيارة مدفونة في الرمل... سأتفقدها أولاً.",style:"thought"}],timeTarget:.16,whisperClock:null},{id:"jeep",objective:"اتبع آثار الأقدام وتفتّش حطام سيارة البعثة المدفونة في الرمل",tag:"المهمة ٢ من ٦ — طريق البعثة",title:"حطام سيارة الدفع الرباعي وبطاقة هوية",sfx:"metal",inspectText:`السيارة غارقة في الرمال منذ أيام، ومحرّكها محترق كأن موجة كهرومغناطيسية ضربتها فجأة.

على المقعد الأمامي وجدتَ بطاقة تعريفية تحمل صورتك أنت:
«المهندس نادر العتيبي — قائد بعثة وادي الصمت الجيولوجية».`,lines:[{text:"هذه صورتي... اسمي نادر! لماذا لا أذكر شيئاً عن هذه الحادثة؟",style:"thought"},{text:"المعدات مفقودة من السيارة... لا بد أن الفريق نقلها إلى ساحة البيت المهجور.",style:"thought"}],timeTarget:.34,whisperClock:"١:٢٥ ظهراً",whisperPhase:"بعد الظهيرة — وهج الرمال يشتد"},{id:"canteen",objective:"ادخل ساحة البيت المهجور وتفقّد حقيبة البعثة تحت المظلة",tag:"المهمة ٣ من ٦ — فناء البيت المهجور",title:"حقيبة البعثة وتحذير مكتوب بعجلة",sfx:"paper",inspectText:`الزمزمية جافة تماماً. لكن داخل جيب الحقيبة ورقة مطوية بيدٍ مرتجفة:

«نادر... النبضة الصوتية القادمة من أسفل البيت تمحو الذاكرة القريبة! إذا استيقظتَ تائهاً في الكثبان، ادخل غرفة مكتبك بالداخل واقرأ دفترك فوراً قبل حلول العصر.»`,lines:[{text:"النبضة تحت البيت هي سبب فقدان ذاكرتي! وأنا من كتب التحذير لنفسي...",style:"thought"},{text:"يجب أن أدخل البيت الآن وأجد دفتري في غرفة المكتب اليسرى.",style:"thought"}],timeTarget:.52,whisperClock:"٢:٣٥ بعد الظهر",whisperPhase:"الشمس تبدأ بالميل غرباً"},{id:"journal",objective:"ادخل غرفة المكتب (الجهة اليسرى داخل البيت) واقرأ دفتر ملاحظاتك",tag:"المهمة ٤ من ٦ — مكتب البحث الداخلي",title:"دفتر ملاحظات نادر — اليوم السادس",sfx:"paper",inspectText:`«عثرنا على ممرٍّ خرسانيٍّ قديم أسفل هذا البيت، يعلوه باب قبوٍ حديديٍّ وسط الردهة.

نزل زملائي الثلاثة بالأمس لتتبع مصدر الإشارة ثم أُغلق القفل المغناطيسي عليهم!
لا يُفتح القبو إلا بتشغيل المذياع على التردد ٤٤ — لكن برج الهوائي مفصول. اخرج للباحة الخلفية قرب النخيل وارفع قاطع البرج أولاً.»`,lines:[{text:"زملائي محاصرون في القبو تحت قدميّ الآن... منذ الأمس!",style:"journal"},{text:"سأخرج من الباب الخلفي نحو النخيل وأرفع قاطع برج الهوائي فوراً.",style:"thought"}],timeTarget:.74,whisperClock:"٣:٤٠ قبيل العصر",whisperPhase:"الرمال تكتسي بلون ذهبي دافئ"},{id:"antenna_box",objective:"اخرج من الباب الخلفي نحو النخيل وشغّل قاطع برج الهوائي",tag:"المهمة ٥ من ٦ — الباحة الخلفية",title:"إعادة التيار الاحتياطي من توربينة الرياح",sfx:"metal",inspectText:`دفعتَ الذراع المعدنية الثقيلة للأعلى بقوة!

دارت توربينة الرياح فوق السطح بأزيزٍ كهربائي واضح، وعاد التيار الاحتياطي يتدفق نحو غرفة الاتصالات داخل البيت.`,lines:[{text:"نجحت! الكابلات تنبض بالكهرباء الآن... والشمس تقترب سريعاً من العصر.",style:"thought"},{text:"عليّ الركض إلى غرفة الاتصالات بالجهة اليمنى داخل البيت وتشغيل المذياع!",style:"thought"}],timeTarget:.9,whisperClock:"٤:١٨ عصراً",whisperPhase:"وقت العصر — ظلال طويلة فوق الكثبان"},{id:"radio",objective:"عُد إلى غرفة الاتصالات (الجهة اليمنى داخل البيت) وشغّل المذياع",tag:"المهمة ٦ من ٦ — لحظة الحقيقة (العصر)",title:"التردد ٤٤ — النداء من تحت الرمال",sfx:"radio",inspectText:`توهّج مؤشر المذياع بضوء كهرماني ساطع وسط غبار العصر الذهبي، واخترق صوت مألوف موجات التشويش!

وفي اللحظة نفسها، دوّى صوت انفتاح القفل المغناطيسي لباب القبو الحديدي في الردهة الرئيسية خلفك...`,lines:[{text:"«... نادر! هل تسمعني؟ نحن بخير أسفل القبو... لكن لا تبقَ في الخارج بعد الغروب...»",style:"radio"},{text:"«... الشيء الذي أيقظناه في الرمال يستفيق كل مساء... انزل إلينا الآن!»",style:"radio"},{text:"انفتح باب القبو أخيراً... لقد حلّ العصر، والرحلة الحقيقية تبدأ الآن.",style:"thought"}],timeTarget:1,whisperClock:"٤:٤٥ عصراً",whisperPhase:"العصر الذهبي — ختام الفصل الأول"}];class dm{constructor(t,e,n,i,r){this.audio=t,this.sky=e,this.house=n,this.cutscenes=i,this.ui=r,this.missionIndex=0,this.chapterComplete=!1,this._pendingEnding=!1,this.freeRoam=!1,this.queue=[],this.activeLine=null,this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.charInterval=.042,this.subContainer=document.getElementById("subtitle-container"),this.subSpeaker=document.getElementById("subtitle-speaker"),this.subText=document.getElementById("subtitle-text")}reset(){this.missionIndex=0,this.chapterComplete=!1,this._pendingEnding=!1,this.freeRoam=!1,this.queue=[],this.activeLine=null,this.house.setAntennaPowered(!1),this.sky.setTimeOfDay(0,!0),this.hideSubtitle(),this._activateCurrentMission()}getCurrentMission(){return this.missionIndex>=Oo.length?null:Oo[this.missionIndex]}_activateCurrentMission(){const t=this.getCurrentMission();if(!t){this.house.setActiveMissionId(null),this.ui.updateMission("اكتمل الفصل الأول — تجوّل بحرية في وقت العصر",null,null);return}this.house.setActiveMissionId(t.id),this.ui.updateMission(t.objective,null,0)}enqueueLine(t,e="thought",n=""){this.queue.push({text:t,style:e,speaker:n}),this.activeLine||this._startNextLine()}sayImmediate(t,e="thought",n=""){this.queue=[],this.activeLine=null,this.enqueueLine(t,e,n)}_startNextLine(){if(this.queue.length===0){this.activeLine=null,this.hideSubtitle(),this._pendingEnding&&!this.freeRoam&&(this._pendingEnding=!1,this.cutscenes.startEndingVista(),this.ui.showEndingScreen());return}this.activeLine=this.queue.shift(),this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.subContainer&&this.subText&&(this.subContainer.classList.remove("hidden"),this.subText.textContent="",this.subText.classList.add("typing"),this.subSpeaker&&(this.activeLine.speaker?(this.subSpeaker.textContent=this.activeLine.speaker,this.subSpeaker.classList.remove("hidden")):this.activeLine.style==="radio"?(this.subSpeaker.textContent="المذياع — التردد ٤٤",this.subSpeaker.classList.remove("hidden")):this.subSpeaker.classList.add("hidden")))}hideSubtitle(){this.subContainer&&this.subContainer.classList.add("hidden"),this.subText&&this.subText.classList.remove("typing")}handleInteract(t){const e=this.getCurrentMission();!t||!e||t.id!==e.id||(e.sfx==="metal"?this.audio.playMetalSwitch():e.sfx==="radio"?this.audio.playRadioBurst():this.audio.playPaperRustle(),e.id==="antenna_box"?this.house.setAntennaPowered(!0):e.id==="radio"&&this.house.unlockHatch(),this.ui.openInspectModal(e.tag,e.title,e.inspectText,()=>{e.whisperClock?this.cutscenes.smoothAdvanceTime(e.whisperClock,e.whisperPhase,e.timeTarget):this.sky.setTimeOfDay(Math.max(this.sky.targetTimeOfDay,e.timeTarget),!1);for(const n of e.lines)this.enqueueLine(n.text,n.style);this.missionIndex++,this._activateCurrentMission(),e.id==="radio"&&!this.chapterComplete&&(this.chapterComplete=!0,this._pendingEnding=!0)}))}getClockDisplay(t=this.sky.timeOfDay){const e=Math.round(735+t*270),n=Math.floor(e/60),i=e%60,r=n>12?n-12:n,a=i<10?`0${i}`:`${i}`,o=n>=15?"عصراً":"ظهراً";return`${ur(r)}:${ur(a)} ${o}`}update(t,e,n,i=0){e&&!this.freeRoam&&this.sky.targetTimeOfDay<.96&&(this.sky.targetTimeOfDay=Math.min(.96,this.sky.targetTimeOfDay+t/320));const r=this.house.getActiveInteractable(),a=this.getCurrentMission();if(e&&a&&r&&n){const o=r.worldPos.x-n.x,c=r.worldPos.z-n.z,h=Math.max(1,Math.round(Math.hypot(o,c))),l=Math.atan2(-o,-c);let d=i-l;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;const u=d*180/Math.PI;this.ui.updateMission(a.objective,`${ur(h)}م`,u)}if(this.ui.updateClock(this.getClockDisplay(this.sky.timeOfDay),this.sky.timeOfDay),this.activeLine){const o=this.activeLine.text;if(this.charIndex<o.length)for(this.charTimer+=t;this.charTimer>=this.charInterval&&this.charIndex<o.length;){this.charTimer-=this.charInterval;const c=o[this.charIndex];this.charIndex++,this.subText&&(this.subText.textContent=o.slice(0,this.charIndex)),this.charIndex%2===1&&this.audio.playTextBlip(this.activeLine.style,c)}else{this.subText&&this.subText.classList.remove("typing"),this.holdTimer+=t;const c=Math.max(2.3,o.length*.042);this.holdTimer>=c&&this._startNextLine()}}}}class fm{constructor(t,e){this.settings=t,this.audio=e,this.fullscreenGate=document.getElementById("fullscreen-gate"),this.titleScreen=document.getElementById("title-screen"),this.hudLayer=document.getElementById("hud-layer"),this.settingsModal=document.getElementById("settings-modal"),this.controlsModal=document.getElementById("controls-modal"),this.inspectModal=document.getElementById("inspect-modal"),this.endingScreen=document.getElementById("ending-screen"),this.portraitWarning=document.getElementById("portrait-warning"),this.missionTextEl=document.getElementById("hud-mission-text"),this.missionDistEl=document.getElementById("hud-mission-dist"),this.missionArrowEl=document.getElementById("hud-mission-arrow"),this.clockEl=document.getElementById("hud-clock"),this.sunIconEl=document.getElementById("hud-sun-icon"),this.fpsEl=document.getElementById("hud-fps-counter"),this.reticleDot=document.getElementById("reticle-dot"),this.mobileInteractBtn=document.getElementById("btn-mobile-interact"),this.mobileInteractText=document.getElementById("mobile-interact-text"),this.restoreFsBtn=document.getElementById("btn-restore-fs"),this.returnTitleBtn=document.getElementById("btn-return-title"),this.onStartGame=null,this.onInteract=null,this.onPauseToggle=null,this.onReturnToTitle=null,this.onFreeRoam=null,this.onReplayChapter=null,this._inspectCloseCb=null,this._portraitDismissed=!1,this.isModalOpen=!1,this.inGameplay=!1,this._bindButtons(),this._bindFullscreenMonitor(),this._syncSettingsUI(),this._checkOrientation(),window.addEventListener("resize",()=>this._checkOrientation())}async enterMandatoryFullscreen(){this.audio.unlock();try{const t=document.documentElement;document.fullscreenElement||(t.requestFullscreen?await t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape").catch(()=>{})}catch{}this.fullscreenGate?.classList.remove("active"),setTimeout(()=>this.fullscreenGate?.classList.add("hidden"),380),this.showTitleScreen()}_bindFullscreenMonitor(){const t=()=>{const e=!!(document.fullscreenElement||document.webkitFullscreenElement);this.restoreFsBtn?.classList.toggle("hidden",e)};document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),this.restoreFsBtn?.addEventListener("click",()=>{this.enterMandatoryFullscreen()})}_bindButtons(){document.getElementById("btn-enter-fullscreen")?.addEventListener("click",()=>{this.enterMandatoryFullscreen()}),document.getElementById("btn-start-game")?.addEventListener("click",()=>{this.audio.unlock(),!document.fullscreenElement&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),this.hideTitleScreen(),this.onStartGame?.()}),document.getElementById("btn-open-settings")?.addEventListener("click",()=>{this.audio.unlock(),this.openSettings(!1)}),document.getElementById("btn-hud-pause")?.addEventListener("click",()=>{this.openSettings(!0)});const t=()=>{this.settingsModal?.classList.add("hidden"),this.isModalOpen=!1,this.onPauseToggle?.(!1)};document.getElementById("btn-close-settings")?.addEventListener("click",t),document.getElementById("btn-resume-from-settings")?.addEventListener("click",t),this.returnTitleBtn?.addEventListener("click",()=>{t(),this.onReturnToTitle?.()}),document.getElementById("btn-open-controls")?.addEventListener("click",()=>{this.controlsModal?.classList.remove("hidden"),this.isModalOpen=!0});const e=()=>{this.controlsModal?.classList.add("hidden"),this.isModalOpen=!1};document.getElementById("btn-close-controls")?.addEventListener("click",e),document.getElementById("btn-ok-controls")?.addEventListener("click",e),document.getElementById("btn-close-inspect")?.addEventListener("click",()=>{this.inspectModal?.classList.add("hidden"),this.isModalOpen=!1;const a=this._inspectCloseCb;this._inspectCloseCb=null,this.onPauseToggle?.(!1),a?.()}),this.mobileInteractBtn?.addEventListener("click",()=>this.onInteract?.()),document.getElementById("btn-free-roam")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.showHUD(),this.onFreeRoam?.()}),document.getElementById("btn-replay-chapter")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.onReplayChapter?.()}),document.getElementById("btn-dismiss-portrait")?.addEventListener("click",()=>{this._portraitDismissed=!0,this.portraitWarning?.classList.add("hidden")}),window.addEventListener("keydown",a=>{a.code==="KeyE"&&this.inGameplay&&!this.isModalOpen?this.onInteract?.():a.code==="Escape"&&this.inGameplay&&(this.settingsModal?.classList.contains("hidden")?this.isModalOpen||this.openSettings(!0):t())}),document.getElementById("opt-quality")?.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{this.settings.applyQualityPreset(a.dataset.val),this._syncSettingsUI()})});const i=(a,o,c,h)=>{const l=document.getElementById(a),d=document.getElementById(c);l?.addEventListener("input",()=>{const u=parseFloat(l.value);this.settings.set(o,u),d&&(d.textContent=h(u))})};i("opt-sensitivity","sensitivity","val-sensitivity",a=>`${a.toFixed(1)}x`),i("opt-resolution","resolutionScale","val-resolution",a=>`${Math.round(a*100)}%`),i("opt-fov","fov","val-fov",a=>`${Math.round(a)}°`),i("opt-volume","volume","val-volume",a=>`${Math.round(a*100)}%`);const r=(a,o)=>{const c=document.getElementById(a);c?.addEventListener("change",()=>{this.settings.set(o,c.checked),o==="showFps"&&this._updateFpsVisibility()})};r("opt-shadows","shadows"),r("opt-sunflare","sunFlare"),r("opt-fps","showFps")}_syncSettingsUI(){const t=this.settings.data;document.querySelectorAll("#opt-quality button").forEach(i=>{i.classList.toggle("active",i.dataset.val===t.quality)});const e=(i,r,a,o)=>{const c=document.getElementById(i),h=document.getElementById(a);c&&(c.value=String(r)),h&&(h.textContent=o(r))};e("opt-sensitivity",t.sensitivity,"val-sensitivity",i=>`${i.toFixed(1)}x`),e("opt-resolution",t.resolutionScale,"val-resolution",i=>`${Math.round(i*100)}%`),e("opt-fov",t.fov,"val-fov",i=>`${Math.round(i)}°`),e("opt-volume",t.volume,"val-volume",i=>`${Math.round(i*100)}%`);const n=(i,r)=>{const a=document.getElementById(i);a&&(a.checked=!!r)};n("opt-shadows",t.shadows),n("opt-sunflare",t.sunFlare),n("opt-fps",t.showFps),this._updateFpsVisibility()}_updateFpsVisibility(){this.fpsEl?.classList.toggle("hidden",!this.settings.data.showFps)}_checkOrientation(){if(this._portraitDismissed||!this.portraitWarning)return;const t=window.innerHeight>window.innerWidth&&window.innerWidth<680;this.portraitWarning.classList.toggle("hidden",!t)}dismissGateForDebug(){this.fullscreenGate?.classList.remove("active"),this.fullscreenGate?.classList.add("hidden")}showTitleScreen(){this.inGameplay=!1,this.hudLayer?.classList.add("hidden"),this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.titleScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.titleScreen?.classList.add("active"))}hideTitleScreen(){this.titleScreen?.classList.remove("active"),setTimeout(()=>this.titleScreen?.classList.add("hidden"),450)}showHUD(){this.inGameplay=!0,this.hudLayer?.classList.remove("hidden"),this._updateFpsVisibility()}hideHUD(){this.hudLayer?.classList.add("hidden")}openSettings(t){document.pointerLockElement&&document.exitPointerLock?.(),this._syncSettingsUI(),this.returnTitleBtn?.classList.toggle("hidden",!t),this.settingsModal?.classList.remove("hidden"),this.isModalOpen=!0,t&&this.onPauseToggle?.(!0)}openInspectModal(t,e,n,i){document.pointerLockElement&&document.exitPointerLock?.(),document.getElementById("inspect-tag").textContent=t,document.getElementById("inspect-title").textContent=e,document.getElementById("inspect-body").textContent=n,this._inspectCloseCb=i,this.inspectModal?.classList.remove("hidden"),this.isModalOpen=!0,this.onPauseToggle?.(!0)}showEndingScreen(){this.inGameplay=!1,this.hideHUD(),this.endingScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.endingScreen?.classList.add("active"))}updateMission(t,e,n=null){this.missionTextEl&&this.missionTextEl.textContent!==t&&(this.missionTextEl.textContent=t),this.missionArrowEl&&(n!==null&&Number.isFinite(n)?(this.missionArrowEl.style.transform=`rotate(${n.toFixed(1)}deg)`,this.missionArrowEl.classList.remove("hidden")):this.missionArrowEl.classList.add("hidden")),this.missionDistEl&&(e?(this.missionDistEl.textContent=e,this.missionDistEl.classList.remove("hidden")):this.missionDistEl.classList.add("hidden"))}updateClock(t,e){this.clockEl&&(this.clockEl.textContent=t),this.sunIconEl&&(this.sunIconEl.style.color=e>.65?"#ff9d42":"#ffe08a")}updateInteractPrompt(t){if(!t){this.reticleDot?.classList.remove("interactive"),this.mobileInteractBtn?.classList.add("hidden");return}this.reticleDot?.classList.add("interactive"),this.mobileInteractText&&(this.mobileInteractText.textContent=t.label),this.mobileInteractBtn?.classList.remove("hidden")}updateFPS(t){this.fpsEl&&this.settings.data.showFps&&(this.fpsEl.textContent=`${Math.round(t)} FPS`)}}class pm{constructor(){this.canvas=document.getElementById("game-canvas"),this.settings=new tm,this.audio=new im,this.modelManager=new nm,this.paused=!1,this.clock=new mh,this.elapsed=0,this.fpsFrames=0,this.fpsAccum=0,this.dynamicDprMult=1,this._initRenderer(),this._bootAsync()}async _bootAsync(){await this.modelManager.preloadAll(),this._initWorld(),this._initGameplay(),this._bindSettings(),this._exposeDebugAPI(),window.addEventListener("resize",()=>this._onResize()),this._onResize(),this.cutscenes.startTitleCamera(),this._animate()}_initRenderer(){this.renderer=new Qp({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=Ee,this.renderer.toneMapping=ko,this.renderer.toneMappingExposure=1.06,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qr,this.scene=new Ql,this.camera=new ze(this.settings.data.fov,window.innerWidth/window.innerHeight,.14,1150)}_initWorld(){this.texManager=new em(this.renderer),this.physics=new sm(ae),this.sky=new rm(this.scene,this.renderer,this.settings),this.desert=new om(this.scene,this.texManager,this.modelManager,this.physics,this.settings),this.house=new cm(this.scene,this.texManager,this.modelManager,this.physics,this.desert.jeepWorldPos)}_initGameplay(){this.player=new lm(this.camera,this.physics,this.audio,this.settings),this.cutscenes=new hm(this.camera,this.sky,this.audio,this.player),this.ui=new fm(this.settings,this.audio),this.story=new dm(this.audio,this.sky,this.house,this.cutscenes,this.ui),this.player.onBoundaryHit=()=>{this.story.sayImmediate("الصحراء هنا بلا نهاية... لن أبتعد كثيراً قبل إنهاء مهمتي.")},this.ui.onStartGame=()=>{this.story.reset(),this.cutscenes.startWakeupCutscene(t=>this.story.sayImmediate(t,"thought"),()=>this.ui.showHUD())},this.ui.onInteract=()=>{if(this.player.enabled&&this.player.focusedInteractable){try{navigator.vibrate&&navigator.vibrate(15)}catch{}this.story.handleInteract(this.player.focusedInteractable)}},this.ui.onPauseToggle=t=>{this.paused=t,this.cutscenes.mode==="gameplay"&&(this.player.enabled=!t)},this.ui.onReturnToTitle=()=>{this.paused=!1,this.player.enabled=!1,this.story.reset(),this.cutscenes.startTitleCamera(),this.ui.showTitleScreen()},this.ui.onFreeRoam=()=>{this.story.freeRoam=!0,this.sky.setTimeOfDay(.96,!0),this.cutscenes.mode="gameplay",this.cutscenes.containerEl?.classList.remove("cinematic-bars-active"),this.player.setPose(-5,-4,-.4,-.02),this.player.enabled=!0,this.story.sayImmediate("وقت العصر الذهبي... تجوّل بحرية في الصحراء وتأمل الأجواء.")},this.ui.onReplayChapter=()=>this.ui.onStartGame()}_applyPixelRatio(){const t=this.settings.data,e=this.settings.getPreset(),n=Math.min(window.devicePixelRatio||1,e.dprCap)*t.resolutionScale,i=Math.max(.55,Math.min(1.85,n*this.dynamicDprMult));this.renderer.setPixelRatio(i)}_bindSettings(){const t=(e,n)=>{this.dynamicDprMult=1,this._applyPixelRatio(),this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.audio.setVolume(e.volume),this.texManager.setAnisotropy(n.anisotropy),this.sky.applySettings(e,n),this.desert.applySettings(n)};t(this.settings.data,this.settings.getPreset()),this.settings.onChange(t)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}_animate(){requestAnimationFrame(()=>this._animate());const t=this.clock.getDelta(),e=Math.min(t,.05);if(!this.paused){if(this.elapsed+=e,this.cutscenes.mode==="gameplay"){const r=this.house.getActiveInteractable();this.player.update(e,this.elapsed,r),this.ui.updateInteractPrompt(this.player.focusedInteractable)}else this.cutscenes.update(e,this.elapsed);const n=this.cutscenes.mode==="gameplay"?this.player.position:this.camera.position,i=this.cutscenes.mode==="gameplay"?this.player.isInsideHouse:!1;this.sky.update(e,this.elapsed,this.camera,n,i),this.desert.update(e,this.elapsed,n,this.sky.timeOfDay),this.house.update(e,this.elapsed,this.camera,this.sky.timeOfDay),this.audio.updateAmbience(e,i?1:0,this.sky.timeOfDay,this.elapsed),this.story.update(e,this.cutscenes.mode==="gameplay",n,this.player.yaw)}if(this.renderer.render(this.scene,this.camera),this.fpsFrames++,this.fpsAccum+=t,this.fpsAccum>=.75){const n=this.fpsFrames/this.fpsAccum;this.ui.updateFPS(n),As&&n>14&&n<48&&this.dynamicDprMult>.72?(this.dynamicDprMult=Math.max(.72,this.dynamicDprMult-.05),this._applyPixelRatio()):As&&n>57&&this.dynamicDprMult<1&&(this.dynamicDprMult=Math.min(1,this.dynamicDprMult+.03),this._applyPixelRatio()),this.fpsFrames=0,this.fpsAccum=0}}_exposeDebugAPI(){window.__SARAB__={showTitle:()=>{this.ui.dismissGateForDebug(),this.ui.showTitleScreen()},setTimeOfDay:t=>this.sky.setTimeOfDay(t,!0),teleport:(t,e,n,i=0,r=!0)=>{const a=this.sky.timeOfDay;this.ui.dismissGateForDebug(),this.ui.hideTitleScreen(),this.cutscenes.mode="gameplay",this.cutscenes.containerEl?.classList.remove("cinematic-bars-active"),this.story.reset(),r&&this.sky.setTimeOfDay(a,!0),this.ui.showHUD(),this.player.enabled=!0,this.player.setPose(t,e,n,i)},setMission:t=>{this.story.missionIndex=t,this.story._activateCurrentMission()},triggerSubtitle:(t,e="thought")=>this.story.sayImmediate(t,e),testRockCollision:()=>{const n=ae(-13.5,-9.5);let i=0;const r=.36,a=1.42+r;for(let o=0;o<16;o++){const c=o/16*Math.PI*2,h=new D(-13.5+Math.cos(c)*.5,n,-9.5+Math.sin(c)*.5);this.physics.resolveHorizontal(h,r);const l=Math.hypot(h.x- -13.5,h.z- -9.5);l<a&&(i=Math.max(i,a-l))}return{rockBlockedCleanly:i<.02,maxPenetration:Number(i.toFixed(4))}},testJeepClimb:()=>{const t=this.desert.jeepWorldPos.x,e=this.desert.jeepWorldPos.z,n=ae(t,e),i=this.physics.getGroundInfo(t,e,n+1.2);return{groundY:Number(n.toFixed(2)),roofStandY:Number(i.groundY.toFixed(2)),canClimbJeep:i.groundY>n+.8}},getStats:()=>({drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,timeOfDay:this.sky.timeOfDay,pos:this.player.position.toArray(),indoor:this.player.isInsideHouse,modelsLoaded:this.modelManager.geometries.size})}}}window.addEventListener("DOMContentLoaded",()=>{new pm});
