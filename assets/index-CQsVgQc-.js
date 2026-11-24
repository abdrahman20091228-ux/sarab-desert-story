(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="172",Ul=0,Oa=1,Fl=2,ca=1,jo=2,_n=3,hn=0,Te=1,ve=2,Pn=0,vi=1,xr=2,za=3,ka=4,Nl=5,Wn=100,Bl=101,Ol=102,zl=103,kl=104,Gl=200,Hl=201,Vl=202,Wl=203,vr=204,Mr=205,Xl=206,ql=207,Yl=208,jl=209,Zl=210,$l=211,Kl=212,Jl=213,Ql=214,yr=0,Sr=1,wr=2,wi=3,Er=4,br=5,Tr=6,Ar=7,ha=0,tc=1,ec=2,Mn=0,nc=1,ic=2,sc=3,Zo=4,rc=5,ac=6,oc=7,$o=300,Ei=301,bi=302,Cr=303,Rr=304,Fs=306,In=1e3,Rn=1001,Pr=1002,Xe=1003,lc=1004,es=1005,$e=1006,zs=1007,Yn=1008,Sn=1009,Ko=1010,Jo=1011,Zi=1012,ua=1013,$n=1014,cn=1015,Ji=1016,da=1017,fa=1018,Ti=1020,Qo=35902,tl=1021,el=1022,rn=1023,nl=1024,il=1025,Mi=1026,Ai=1027,pa=1028,ma=1029,sl=1030,ga=1031,_a=1033,Ts=33776,As=33777,Cs=33778,Rs=33779,Lr=35840,Ir=35841,Dr=35842,Ur=35843,Fr=36196,Nr=37492,Br=37496,Or=37808,zr=37809,kr=37810,Gr=37811,Hr=37812,Vr=37813,Wr=37814,Xr=37815,qr=37816,Yr=37817,jr=37818,Zr=37819,$r=37820,Kr=37821,Ps=36492,Jr=36494,Qr=36495,rl=36283,ta=36284,ea=36285,na=36286,cc=3200,hc=3201,xa=0,uc=1,on="",De="srgb",Ci="srgb-linear",Is="linear",ie="srgb",ti=7680,Ga=519,dc=512,fc=513,pc=514,al=515,mc=516,gc=517,_c=518,xc=519,Ha=35044,Va="300 es",vn=2e3,Ds=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wa=1234567;const Yi=Math.PI/180,$i=180/Math.PI;function Li(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function va(s,t){return(s%t+t)%t}function vc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Mc(s,t,e){return s!==t?(e-s)/(t-s):0}function ji(s,t,e){return(1-e)*s+e*t}function yc(s,t,e,n){return ji(s,t,1-Math.exp(-e*n))}function Sc(s,t=1){return t-Math.abs(va(s,t*2)-t)}function wc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ec(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function bc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Tc(s,t){return s+Math.random()*(t-s)}function Ac(s){return s*(.5-Math.random())}function Cc(s){s!==void 0&&(Wa=s);let t=Wa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rc(s){return s*Yi}function Pc(s){return s*$i}function Lc(s){return(s&s-1)===0&&s!==0}function Ic(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Dc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uc(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),d=a((t+n)/2),u=r((t-n)/2),c=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*d,l*u,l*c,o*h);break;case"YZY":s.set(l*c,o*d,l*u,o*h);break;case"ZXZ":s.set(l*u,l*c,o*d,o*h);break;case"XZX":s.set(o*d,l*g,l*p,o*h);break;case"YXY":s.set(l*p,o*d,l*g,o*h);break;case"ZYZ":s.set(l*g,l*p,o*d,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xt={DEG2RAD:Yi,RAD2DEG:$i,generateUUID:Li,clamp:kt,euclideanModulo:va,mapLinear:vc,inverseLerp:Mc,lerp:ji,damp:yc,pingpong:Sc,smoothstep:wc,smootherstep:Ec,randInt:bc,randFloat:Tc,randFloatSpread:Ac,seededRandom:Cc,degToRad:Rc,radToDeg:Pc,isPowerOfTwo:Lc,ceilPowerOfTwo:Ic,floorPowerOfTwo:Dc,setQuaternionFromProperEuler:Uc,normalize:Ne,denormalize:mi};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,r,a,o,l,h){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,h)}set(t,e,n,i,r,a,o,l,h){const d=this.elements;return d[0]=t,d[1]=i,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],u=n[7],c=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],y=i[4],x=i[7],R=i[2],A=i[5],b=i[8];return r[0]=a*_+o*v+l*R,r[3]=a*m+o*y+l*A,r[6]=a*f+o*x+l*b,r[1]=h*_+d*v+u*R,r[4]=h*m+d*y+u*A,r[7]=h*f+d*x+u*b,r[2]=c*_+p*v+g*R,r[5]=c*m+p*y+g*A,r[8]=c*f+p*x+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8];return e*a*d-e*o*h-n*r*d+n*o*l+i*r*h-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],u=d*a-o*h,c=o*l-d*r,p=h*r-a*l,g=e*u+n*c+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*h-d*n)*_,t[2]=(o*n-i*a)*_,t[3]=c*_,t[4]=(d*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-i*h,i*l,-i*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ks.makeScale(t,e)),this}rotate(t){return this.premultiply(ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new Ft;function ol(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ki(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fc(){const s=Ki("canvas");return s.style.display="block",s}const Xa={};function gi(s){s in Xa||(Xa[s]=!0,console.warn(s))}function Nc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Oc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qa=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ya=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zc(){const s={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===on?Is:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ci]:{primaries:t,whitePoint:n,transfer:Is,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),s}const Jt=zc();function yn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ei;class kc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=Ki("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ki("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gc=0;class ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Gs(i[a].image)):r.push(Gs(i[a]))}else r=Gs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hc=0;class Re extends Pi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Rn,i=Rn,r=$e,a=Yn,o=rn,l=Sn,h=Re.DEFAULT_ANISOTROPY,d=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Li(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$o)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case In:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case In:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=$o;Re.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,h=l[0],d=l[4],u=l[8],c=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(d-c)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+c)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,x=(p+1)/2,R=(f+1)/2,A=(d+c)/4,b=(u+_)/4,C=(g+m)/4;return y>x&&y>R?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=b/n):x>R?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=C/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=b/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(c-d)*(c-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(c-d)/v,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vc extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new ll(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Vc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],h=n[i+1],d=n[i+2],u=n[i+3];const c=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=c,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==c||h!==p||d!==g){let m=1-o;const f=l*c+h*p+d*g+u*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,f*v);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const x=o*v;if(l=l*m+c*x,h=h*m+p*x,d=d*m+g*x,u=u*m+_*x,m===1-o){const R=1/Math.sqrt(l*l+h*h+d*d+u*u);l*=R,h*=R,d*=R,u*=R}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a],c=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+d*u+l*p-h*c,t[e+1]=l*g+d*c+h*u-o*p,t[e+2]=h*g+d*p+o*c-l*u,t[e+3]=d*g-o*u-l*c-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(i/2),u=o(r/2),c=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=c*d*u+h*p*g,this._y=h*p*u-c*d*g,this._z=h*d*g+c*p*u,this._w=h*d*u-c*p*g;break;case"YXZ":this._x=c*d*u+h*p*g,this._y=h*p*u-c*d*g,this._z=h*d*g-c*p*u,this._w=h*d*u+c*p*g;break;case"ZXY":this._x=c*d*u-h*p*g,this._y=h*p*u+c*d*g,this._z=h*d*g+c*p*u,this._w=h*d*u-c*p*g;break;case"ZYX":this._x=c*d*u-h*p*g,this._y=h*p*u+c*d*g,this._z=h*d*g-c*p*u,this._w=h*d*u+c*p*g;break;case"YZX":this._x=c*d*u+h*p*g,this._y=h*p*u+c*d*g,this._z=h*d*g-c*p*u,this._w=h*d*u-c*p*g;break;case"XZY":this._x=c*d*u-h*p*g,this._y=h*p*u-c*d*g,this._z=h*d*g+c*p*u,this._w=h*d*u+c*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],d=e[6],u=e[10],c=n+o+u;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-h)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+h)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-h)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+h)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+a*o+i*h-r*l,this._y=i*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-i*o,this._w=a*d-n*o-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),u=Math.sin((1-e)*d)/h,c=Math.sin(e*d)/h;return this._w=a*u+this._w*c,this._x=n*u+this._x*c,this._y=i*u+this._y*c,this._z=r*u+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*i-o*n),d=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*h+a*u-o*d,this.y=n+l*d+o*h-r*u,this.z=i+l*u+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new L,ja=new Ln;class Kn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(t.matrixWorld),this.union(ns)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),is.subVectors(this.max,Fi),ni.subVectors(t.a,Fi),ii.subVectors(t.b,Fi),si.subVectors(t.c,Fi),wn.subVectors(ii,ni),En.subVectors(si,ii),Nn.subVectors(ni,si);let e=[0,-wn.z,wn.y,0,-En.z,En.y,0,-Nn.z,Nn.y,wn.z,0,-wn.x,En.z,0,-En.x,Nn.z,0,-Nn.x,-wn.y,wn.x,0,-En.y,En.x,0,-Nn.y,Nn.x,0];return!Vs(e,ni,ii,si,is)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,ni,ii,si,is))?!1:(ss.crossVectors(wn,En),e=[ss.x,ss.y,ss.z],Vs(e,ni,ii,si,is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new L,new L,new L,new L,new L,new L,new L,new L],Qe=new L,ns=new Kn,ni=new L,ii=new L,si=new L,wn=new L,En=new L,Nn=new L,Fi=new L,is=new L,ss=new L,Bn=new L;function Vs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=t.dot(Bn),h=e.dot(Bn),d=n.dot(Bn);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const Xc=new Kn,Ni=new L,Ws=new L;class Ii{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(Ws)),this.expandByPoint(Ni.copy(t.center).sub(Ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new L,Xs=new L,rs=new L,bn=new L,qs=new L,as=new L,Ys=new L;class hl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xs.copy(t).add(e).multiplyScalar(.5),rs.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(Xs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(rs),o=bn.dot(this.direction),l=-bn.dot(rs),h=bn.lengthSq(),d=Math.abs(1-a*a);let u,c,p,g;if(d>0)if(u=a*l-o,c=a*o-l,g=r*d,u>=0)if(c>=-g)if(c<=g){const _=1/d;u*=_,c*=_,p=u*(u+a*c+2*o)+c*(a*u+c+2*l)+h}else c=r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;else c=-r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;else c<=-g?(u=Math.max(0,-(-a*r+o)),c=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+c*(c+2*l)+h):c<=g?(u=0,c=Math.min(Math.max(-r,-l),r),p=c*(c+2*l)+h):(u=Math.max(0,-(a*r+o)),c=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+c*(c+2*l)+h);else c=a>0?-r:r,u=Math.max(0,-(a*c+o)),p=-u*u+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xs).addScaledVector(rs,c),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,i=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,i=(t.min.x-c.x)*h),d>=0?(r=(t.min.y-c.y)*d,a=(t.max.y-c.y)*d):(r=(t.max.y-c.y)*d,a=(t.min.y-c.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-c.z)*u,l=(t.max.z-c.z)*u):(o=(t.max.z-c.z)*u,l=(t.min.z-c.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,r){qs.subVectors(e,t),as.subVectors(n,t),Ys.crossVectors(qs,as);let a=this.direction.dot(Ys),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,t);const l=o*this.direction.dot(as.crossVectors(bn,as));if(l<0)return null;const h=o*this.direction.dot(qs.cross(bn));if(h<0||l+h>a)return null;const d=-o*bn.dot(Ys);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(t,e,n,i,r,a,o,l,h,d,u,c,p,g,_,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,h,d,u,c,p,g,_,m)}set(t,e,n,i,r,a,o,l,h,d,u,c,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=d,f[10]=u,f[14]=c,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const c=a*d,p=a*u,g=o*d,_=o*u;e[0]=l*d,e[4]=-l*u,e[8]=h,e[1]=p+g*h,e[5]=c-_*h,e[9]=-o*l,e[2]=_-c*h,e[6]=g+p*h,e[10]=a*l}else if(t.order==="YXZ"){const c=l*d,p=l*u,g=h*d,_=h*u;e[0]=c+_*o,e[4]=g*o-p,e[8]=a*h,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=p*o-g,e[6]=_+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*d,p=l*u,g=h*d,_=h*u;e[0]=c-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*d,e[9]=_-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*d,p=a*u,g=o*d,_=o*u;e[0]=l*d,e[4]=g*h-p,e[8]=c*h+_,e[1]=l*u,e[5]=_*h+c,e[9]=p*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,p=a*h,g=o*l,_=o*h;e[0]=l*d,e[4]=_-c*u,e[8]=g*u+p,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-h*d,e[6]=p*u+g,e[10]=c-_*u}else if(t.order==="XZY"){const c=a*l,p=a*h,g=o*l,_=o*h;e[0]=l*d,e[4]=-u,e[8]=h*d,e[1]=c*u+_,e[5]=a*d,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*d,e[10]=_*u+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qc,t,Yc)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Tn.crossVectors(n,He),Tn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Tn.crossVectors(n,He)),Tn.normalize(),os.crossVectors(He,Tn),i[0]=Tn.x,i[4]=os.x,i[8]=He.x,i[1]=Tn.y,i[5]=os.y,i[9]=He.y,i[2]=Tn.z,i[6]=os.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],u=n[5],c=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],y=n[7],x=n[11],R=n[15],A=i[0],b=i[4],C=i[8],w=i[12],M=i[1],P=i[5],B=i[9],N=i[13],V=i[2],j=i[6],W=i[10],K=i[14],G=i[3],q=i[7],ot=i[11],vt=i[15];return r[0]=a*A+o*M+l*V+h*G,r[4]=a*b+o*P+l*j+h*q,r[8]=a*C+o*B+l*W+h*ot,r[12]=a*w+o*N+l*K+h*vt,r[1]=d*A+u*M+c*V+p*G,r[5]=d*b+u*P+c*j+p*q,r[9]=d*C+u*B+c*W+p*ot,r[13]=d*w+u*N+c*K+p*vt,r[2]=g*A+_*M+m*V+f*G,r[6]=g*b+_*P+m*j+f*q,r[10]=g*C+_*B+m*W+f*ot,r[14]=g*w+_*N+m*K+f*vt,r[3]=v*A+y*M+x*V+R*G,r[7]=v*b+y*P+x*j+R*q,r[11]=v*C+y*B+x*W+R*ot,r[15]=v*w+y*N+x*K+R*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],d=t[2],u=t[6],c=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*h*u-r*o*c+n*h*c+i*o*p-n*l*p)+_*(+e*l*p-e*h*c+r*a*c-i*a*p+i*h*d-r*l*d)+m*(+e*h*u-e*o*p-r*a*u+n*a*p+r*o*d-n*h*d)+f*(-i*o*d-e*l*u+e*o*c+i*a*u-n*a*c+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],d=t[8],u=t[9],c=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=u*m*h-_*c*h+_*l*p-o*m*p-u*l*f+o*c*f,y=g*c*h-d*m*h-g*l*p+a*m*p+d*l*f-a*c*f,x=d*_*h-g*u*h+g*o*p-a*_*p-d*o*f+a*u*f,R=g*u*l-d*_*l-g*o*c+a*_*c+d*o*m-a*u*m,A=e*v+n*y+i*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=v*b,t[1]=(_*c*r-u*m*r-_*i*p+n*m*p+u*i*f-n*c*f)*b,t[2]=(o*m*r-_*l*r+_*i*h-n*m*h-o*i*f+n*l*f)*b,t[3]=(u*l*r-o*c*r-u*i*h+n*c*h+o*i*p-n*l*p)*b,t[4]=y*b,t[5]=(d*m*r-g*c*r+g*i*p-e*m*p-d*i*f+e*c*f)*b,t[6]=(g*l*r-a*m*r-g*i*h+e*m*h+a*i*f-e*l*f)*b,t[7]=(a*c*r-d*l*r+d*i*h-e*c*h-a*i*p+e*l*p)*b,t[8]=x*b,t[9]=(g*u*r-d*_*r-g*n*p+e*_*p+d*n*f-e*u*f)*b,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*f+e*o*f)*b,t[11]=(d*o*r-a*u*r-d*n*h+e*u*h+a*n*p-e*o*p)*b,t[12]=R*b,t[13]=(d*_*i-g*u*i+g*n*c-e*_*c-d*n*m+e*u*m)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*b,t[15]=(a*u*i-d*o*i+d*n*l-e*u*l-a*n*c+e*o*c)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,d*o+n,d*l-i*a,0,h*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,d=a+a,u=o+o,c=r*h,p=r*d,g=r*u,_=a*d,m=a*u,f=o*u,v=l*h,y=l*d,x=l*u,R=n.x,A=n.y,b=n.z;return i[0]=(1-(_+f))*R,i[1]=(p+x)*R,i[2]=(g-y)*R,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(c+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+y)*b,i[9]=(m-v)*b,i[10]=(1-(c+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const h=1/r,d=1/a,u=1/o;return tn.elements[0]*=h,tn.elements[1]*=h,tn.elements[2]*=h,tn.elements[4]*=d,tn.elements[5]*=d,tn.elements[6]*=d,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=vn){const l=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),c=(n+i)/(n-i);let p,g;if(o===vn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ds)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=vn){const l=this.elements,h=1/(e-t),d=1/(n-i),u=1/(a-r),c=(e+t)*h,p=(n+i)*d;let g,_;if(o===vn)g=(a+r)*u,_=-2*u;else if(o===Ds)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new L,tn=new Yt,qc=new L(0,0,0),Yc=new L(1,1,1),Tn=new L,os=new L,He=new L,Za=new Yt,$a=new Ln;class Oe{constructor(t=0,e=0,n=0,i=Oe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],h=i[5],d=i[9],u=i[2],c=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $a.setFromEuler(this),this.setFromQuaternion($a,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oe.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jc=0;const Ka=new L,ai=new Ln,pn=new Yt,ls=new L,Bi=new L,Zc=new L,$c=new Ln,Ja=new L(1,0,0),Qa=new L(0,1,0),to=new L(0,0,1),eo={type:"added"},Kc={type:"removed"},oi={type:"childadded",child:null},js={type:"childremoved",child:null};class Me extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new L,e=new Oe,n=new Ln,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ft}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(to,t)}translateOnAxis(t,e){return Ka.copy(t).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(to,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ls.copy(t):ls.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Bi,ls,this.up):pn.lookAt(ls,Bi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),ai.setFromRotationMatrix(pn),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eo),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kc),js.child=t,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eo),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,Zc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,$c,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),d=a(t.images),u=a(t.shapes),c=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),c.length>0&&(n.skeletons=c),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new L(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new L,mn=new L,Zs=new L,gn=new L,li=new L,ci=new L,no=new L,$s=new L,Ks=new L,Js=new L,Qs=new se,tr=new se,er=new se;class sn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){en.subVectors(i,e),mn.subVectors(n,e),Zs.subVectors(t,e);const a=en.dot(en),o=en.dot(mn),l=en.dot(Zs),h=mn.dot(mn),d=mn.dot(Zs),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const c=1/u,p=(h*l-o*d)*c,g=(a*d-o*l)*c;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Qs.setScalar(0),tr.setScalar(0),er.setScalar(0),Qs.fromBufferAttribute(t,e),tr.fromBufferAttribute(t,n),er.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Qs,r.x),a.addScaledVector(tr,r.y),a.addScaledVector(er,r.z),a}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),mn.subVectors(t,e),en.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),en.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;li.subVectors(i,n),ci.subVectors(r,n),$s.subVectors(t,n);const l=li.dot($s),h=ci.dot($s);if(l<=0&&h<=0)return e.copy(n);Ks.subVectors(t,i);const d=li.dot(Ks),u=ci.dot(Ks);if(d>=0&&u<=d)return e.copy(i);const c=l*u-d*h;if(c<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(li,a);Js.subVectors(t,r);const p=li.dot(Js),g=ci.dot(Js);if(g>=0&&p<=g)return e.copy(r);const _=p*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(ci,o);const m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return no.subVectors(r,i),o=(u-d)/(u-d+(p-g)),e.copy(i).addScaledVector(no,o);const f=1/(m+_+c);return a=_*f,o=c*f,e.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},cs={h:0,s:0,l:0};function nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class at{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=va(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nr(a,r,t+1/3),this.g=nr(a,r,t),this.b=nr(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Jt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(kt(Ie.r*255,0,255))*65536+Math.round(kt(Ie.g*255,0,255))*256+Math.round(kt(Ie.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=De){Jt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(cs);const n=ji(An.h,cs.h,e),i=ji(An.s,cs.s,e),r=ji(An.l,cs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new at;at.NAMES=dl;let Jc=0;class Jn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=vi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vr,this.blendDst=Mr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ln extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new L,hs=new bt;class Qt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hs.fromBufferAttribute(this,e),hs.applyMatrix3(t),this.setXY(e,hs.x,hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ha&&(t.usage=this.usage),t}}class fl extends Qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pl extends Qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Qt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qc=0;const Ze=new Yt,ir=new Me,hi=new L,Ve=new Kn,Oi=new Kn,be=new L;class ge extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ol(t)?pl:fl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return ir.lookAt(t),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Ve.min,Oi.min),Ve.expandByPoint(be),be.addVectors(Ve.max,Oi.max),Ve.expandByPoint(be)):(Ve.expandByPoint(Oi.min),Ve.expandByPoint(Oi.max))}Ve.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)be.fromBufferAttribute(o,h),l&&(hi.fromBufferAttribute(t,h),be.add(hi)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new L,l[C]=new L;const h=new L,d=new L,u=new L,c=new bt,p=new bt,g=new bt,_=new L,m=new L;function f(C,w,M){h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),c.fromBufferAttribute(r,C),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),d.sub(h),u.sub(h),p.sub(c),g.sub(c);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),o[C].add(_),o[w].add(_),o[M].add(_),l[C].add(m),l[w].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,w=v.length;C<w;++C){const M=v[C],P=M.start,B=M.count;for(let N=P,V=P+B;N<V;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new L,x=new L,R=new L,A=new L;function b(C){R.fromBufferAttribute(i,C),A.copy(R);const w=o[C];y.copy(w),y.sub(R.multiplyScalar(R.dot(w))).normalize(),x.crossVectors(A,w);const P=x.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,w=v.length;C<w;++C){const M=v[C],P=M.start,B=M.count;for(let N=P,V=P+B;N<V;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,p=n.count;c<p;c++)n.setXYZ(c,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,h=new L,d=new L,u=new L;if(t)for(let c=0,p=t.count;c<p;c+=3){const g=t.getX(c+0),_=t.getX(c+1),m=t.getX(c+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),d.subVectors(a,r),u.subVectors(i,r),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),o.add(d),l.add(d),h.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,p=e.count;c<p;c+=3)i.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),d.subVectors(a,r),u.subVectors(i,r),d.cross(u),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const h=o.array,d=o.itemSize,u=o.normalized,c=new h.constructor(l.length*d);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*d;for(let f=0;f<d;f++)c[g++]=h[p++]}return new Qt(c,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,u=h.length;d<u;d++){const c=h[d],p=t(c,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let u=0,c=h.length;u<c;u++){const p=h[u];d.push(p.toJSON(t.data))}d.length>0&&(i[l]=d,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(e))}const r=t.morphAttributes;for(const h in r){const d=[],u=r[h];for(let c=0,p=u.length;c<p;c++)d.push(u[c].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new Yt,On=new hl,us=new Ii,so=new L,ds=new L,fs=new L,ps=new L,sr=new L,ms=new L,ro=new L,gs=new L;class ut extends Me{constructor(t=new ge,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ms.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],u=r[l];d!==0&&(sr.fromBufferAttribute(u,t),a?ms.addScaledVector(sr,d):ms.addScaledVector(sr.sub(e),d))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(us.containsPoint(On.origin)===!1&&(On.intersectSphere(us,so)===null||On.origin.distanceToSquared(so)>(t.far-t.near)**2))&&(io.copy(r).invert(),On.copy(t.ray).applyMatrix4(io),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,c=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=y;x<R;x+=3){const A=o.getX(x),b=o.getX(x+1),C=o.getX(x+2);i=_s(this,f,t,n,h,d,u,A,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);i=_s(this,a,t,n,h,d,u,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=y;x<R;x+=3){const A=x,b=x+1,C=x+2;i=_s(this,f,t,n,h,d,u,A,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,y=m+1,x=m+2;i=_s(this,a,t,n,h,d,u,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function th(s,t,e,n,i,r,a,o){let l;if(t.side===Te?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===hn,o),l===null)return null;gs.copy(o),gs.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(gs);return h<e.near||h>e.far?null:{distance:h,point:gs.clone(),object:s}}function _s(s,t,e,n,i,r,a,o,l,h){s.getVertexPosition(o,ds),s.getVertexPosition(l,fs),s.getVertexPosition(h,ps);const d=th(s,t,e,n,ds,fs,ps,ro);if(d){const u=new L;sn.getBarycoord(ro,ds,fs,ps,u),i&&(d.uv=sn.getInterpolatedAttribute(i,o,l,h,u,new bt)),r&&(d.uv1=sn.getInterpolatedAttribute(r,o,l,h,u,new bt)),a&&(d.normal=sn.getInterpolatedAttribute(a,o,l,h,u,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new L,materialIndex:0};sn.getNormal(ds,fs,ps,c.normal),d.face=c,d.barycoord=u}return d}class Ct extends ge{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],u=[];let c=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(u,2));function g(_,m,f,v,y,x,R,A,b,C,w){const M=x/b,P=R/C,B=x/2,N=R/2,V=A/2,j=b+1,W=C+1;let K=0,G=0;const q=new L;for(let ot=0;ot<W;ot++){const vt=ot*P-N;for(let Rt=0;Rt<j;Rt++){const Gt=Rt*M-B;q[_]=Gt*v,q[m]=vt*y,q[f]=V,h.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[f]=A>0?1:-1,d.push(q.x,q.y,q.z),u.push(Rt/b),u.push(1-ot/C),K+=1}}for(let ot=0;ot<C;ot++)for(let vt=0;vt<b;vt++){const Rt=c+vt+j*ot,Gt=c+vt+j*(ot+1),X=c+(vt+1)+j*(ot+1),et=c+(vt+1)+j*ot;l.push(Rt,Gt,et),l.push(Gt,X,et),G+=6}o.addGroup(p,G,w),p+=G,c+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){const t={};for(let e=0;e<s.length;e++){const n=Ri(s[e]);for(const i in n)t[i]=n[i]}return t}function eh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ml(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const nh={clone:Ri,merge:Be};var ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ue extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ih,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=eh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gl extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new L,ao=new bt,oo=new bt;class We extends gl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,ao,oo),e.subVectors(oo,ao)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,di=1;class rh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(ui,di,t,e);i.layers=this.layers,this.add(i);const r=new We(ui,di,t,e);r.layers=this.layers,this.add(r);const a=new We(ui,di,t,e);a.layers=this.layers,this.add(a);const o=new We(ui,di,t,e);o.layers=this.layers,this.add(o);const l=new We(ui,di,t,e);l.layers=this.layers,this.add(l);const h=new We(ui,di,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,u=t.getRenderTarget(),c=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(u,c,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _l extends Re{constructor(t,e,n,i,r,a,o,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,i,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ah extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _l(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ct(5,5,5),r=new Ue({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Pn});r.uniforms.tEquirect.value=e;const a=new ut(i,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=$e),new rh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Ma{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new Ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ia extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oe,this.environmentIntensity=1,this.environmentRotation=new Oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class oh extends Re{constructor(t=null,e=1,n=1,i,r,a,o,l,h=Xe,d=Xe,u,c){super(null,a,o,l,h,d,i,r,u,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa extends Qt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fi=new Yt,lo=new Yt,xs=[],co=new Kn,lh=new Yt,zi=new ut,ki=new Ii;class ke extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fi),co.copy(t.boundingBox).applyMatrix4(fi),this.boundingBox.union(co)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fi),ki.copy(t.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(ki)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(zi.geometry=this.geometry,zi.material=this.material,zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ki.copy(this.boundingSphere),ki.applyMatrix4(n),t.ray.intersectsSphere(ki)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fi),lo.multiplyMatrices(n,fi),zi.matrixWorld=lo,zi.raycast(t,xs);for(let a=0,o=xs.length;a<o;a++){const l=xs[a];l.instanceId=r,l.object=this,e.push(l)}xs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new oh(new Float32Array(i*this.count),i,this.count,pa,cn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const rr=new L,ch=new L,hh=new Ft;class Hn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=rr.subVectors(n,e).cross(ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hh.getNormalMatrix(t),i=this.coplanarPoint(rr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Ii,vs=new L;class ya{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],h=i[4],d=i[5],u=i[6],c=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,c-h,m-p,x-f).normalize(),n[1].setComponents(l+r,c+h,m+p,x+f).normalize(),n[2].setComponents(l+a,c+d,m+g,x+v).normalize(),n[3].setComponents(l-a,c-d,m-g,x-v).normalize(),n[4].setComponents(l-o,c-u,m-_,x-y).normalize(),e===vn)n[5].setComponents(l+o,c+u,m+_,x+y).normalize();else if(e===Ds)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(vs.x=i.normal.x>0?t.max.x:t.min.x,vs.y=i.normal.y>0?t.max.y:t.min.y,vs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uh extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ho=new Yt,ra=new hl,Ms=new Ii,ys=new L;class dh extends Me{constructor(t=new ge,e=new uh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(i),Ms.radius+=r,t.ray.intersectsSphere(Ms)===!1)return;ho.copy(i).invert(),ra.copy(t.ray).applyMatrix4(ho);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,u=n.attributes.position;if(h!==null){const c=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=c,_=p;g<_;g++){const m=h.getX(g);ys.fromBufferAttribute(u,m),uo(ys,m,l,i,t,e,this)}}else{const c=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=c,_=p;g<_;g++)ys.fromBufferAttribute(u,g),uo(ys,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uo(s,t,e,n,i,r,a){const o=ra.distanceSqToPoint(s);if(o<e){const l=new L;ra.closestPointToPoint(s,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ce extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ss extends Re{constructor(t,e,n,i,r,a,o,l,h){super(t,e,n,i,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xl extends Re{constructor(t,e,n,i,r,a,o,l,h,d=Mi){if(d!==Mi&&d!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Mi&&(n=$n),n===void 0&&d===Ai&&(n=Ti),super(null,i,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Sa extends ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],h=new L,d=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,c=3;u<=e;u++,c+=3){const p=n+u/e*i;h.x=t*Math.cos(p),h.y=t*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),d.x=(a[c]/t+1)/2,d.y=(a[c+1]/t+1)/2,l.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe extends ge{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;i=Math.floor(i),r=Math.floor(r);const d=[],u=[],c=[],p=[];let g=0;const _=[],m=n/2;let f=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(p,2));function v(){const x=new L,R=new L;let A=0;const b=(e-t)/n;for(let C=0;C<=r;C++){const w=[],M=C/r,P=M*(e-t)+t;for(let B=0;B<=i;B++){const N=B/i,V=N*l+o,j=Math.sin(V),W=Math.cos(V);R.x=P*j,R.y=-M*n+m,R.z=P*W,u.push(R.x,R.y,R.z),x.set(j,b,W).normalize(),c.push(x.x,x.y,x.z),p.push(N,1-M),w.push(g++)}_.push(w)}for(let C=0;C<i;C++)for(let w=0;w<r;w++){const M=_[w][C],P=_[w+1][C],B=_[w+1][C+1],N=_[w][C+1];(t>0||w!==0)&&(d.push(M,P,N),A+=3),(e>0||w!==r-1)&&(d.push(P,B,N),A+=3)}h.addGroup(f,A,0),f+=A}function y(x){const R=g,A=new bt,b=new L;let C=0;const w=x===!0?t:e,M=x===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*M,0),c.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let B=0;B<=i;B++){const V=B/i*l+o,j=Math.cos(V),W=Math.sin(V);b.x=w*W,b.y=m*M,b.z=w*j,u.push(b.x,b.y,b.z),c.push(0,M,0),A.x=j*.5+.5,A.y=W*.5*M+.5,p.push(A.x,A.y),g++}for(let B=0;B<i;B++){const N=R+B,V=P+B;x===!0?d.push(V,V+1,N):d.push(V+1,V,N),C+=3}h.addGroup(f,C,x===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jn extends pe{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new jn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wa extends ge{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),h(n),d(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new L,x=new L,R=new L;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],x),p(e[A+2],R),l(y,x,R,v)}function l(v,y,x,R){const A=R+1,b=[];for(let C=0;C<=A;C++){b[C]=[];const w=v.clone().lerp(x,C/A),M=y.clone().lerp(x,C/A),P=A-C;for(let B=0;B<=P;B++)B===0&&C===A?b[C][B]=w:b[C][B]=w.clone().lerp(M,B/P)}for(let C=0;C<A;C++)for(let w=0;w<2*(A-C)-1;w++){const M=Math.floor(w/2);w%2===0?(c(b[C][M+1]),c(b[C+1][M]),c(b[C][M])):(c(b[C][M+1]),c(b[C+1][M+1]),c(b[C+1][M]))}}function h(v){const y=new L;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function d(){const v=new L;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,R=f(v)/Math.PI+.5;a.push(x,1-R)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){const y=a[v+0],x=a[v+2],R=a[v+4],A=Math.max(y,x,R),b=Math.min(y,x,R);A>.9&&b<.1&&(y<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function c(v){r.push(v.x,v.y,v.z)}function p(v,y){const x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const v=new L,y=new L,x=new L,R=new L,A=new bt,b=new bt,C=new bt;for(let w=0,M=0;w<r.length;w+=9,M+=6){v.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),A.set(a[M+0],a[M+1]),b.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),R.copy(v).add(y).add(x).divideScalar(3);const P=m(R);_(A,M+0,v,P),_(b,M+2,y,P),_(C,M+4,x,P)}}function _(v,y,x,R){R<0&&v.x===1&&(a[y]=v.x-1),x.x===0&&x.z===0&&(a[y]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.vertices,t.indices,t.radius,t.details)}}class Ea extends wa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ea(t.radius,t.detail)}}class me extends ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),h=o+1,d=l+1,u=t/o,c=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<d;f++){const v=f*c-a;for(let y=0;y<h;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const y=v+h*f,x=v+h*(f+1),R=v+1+h*(f+1),A=v+1+h*f;p.push(y,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.widthSegments,t.heightSegments)}}class ba extends ge{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],h=[],d=[];let u=t;const c=(e-t)/i,p=new L,g=new bt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,d.push(g.x,g.y)}u+=c}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const v=f+m,y=v,x=v+n+1,R=v+n+2,A=v+1;o.push(y,x,A),o.push(x,R,A)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Us extends ge{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const d=[],u=new L,c=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],y=f/n;let x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),c.copy(u).normalize(),_.push(c.x,c.y,c.z),m.push(A+x,1-y),v.push(h++)}d.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const y=d[f][v+1],x=d[f][v],R=d[f+1][v],A=d[f+1][v+1];(f!==0||a>0)&&p.push(y,x,A),(f!==n-1||l<Math.PI)&&p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ta extends ge{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],h=[],d=new L,u=new L,c=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),c.subVectors(u,d).normalize(),l.push(c.x,c.y,c.z),h.push(g/i),h.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,v=(i+1)*p+g;a.push(_,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nn extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xe extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fh extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ph extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mh{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return h.push(d,u),this},this.removeHandler=function(d){const u=h.indexOf(d);return u!==-1&&h.splice(u,2),this},this.getHandler=function(d){for(let u=0,c=h.length;u<c;u+=2){const p=h[u],g=h[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const gh=new mh;class Aa{constructor(t){this.manager=t!==void 0?t:gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";class _h extends Aa{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=fo.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ki("img");function l(){d(),fo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){d(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class vl extends Aa{constructor(t){super(t)}load(t,e,n,i){const r=new Re,a=new _h(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ca extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xh extends Ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ar=new Yt,po=new L,mo=new L;class Ml{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;po.setFromMatrixPosition(t.matrixWorld),e.position.copy(po),mo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mo),e.updateMatrixWorld(),ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const go=new Yt,Gi=new L,or=new L;class vh extends Ml{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gi),or.copy(n.position),or.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(or),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),go.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go)}}class yl extends Ca{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ra extends gl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mh extends Ml{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _o extends Ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Mh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yh extends ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Sh extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function xo(s,t,e,n){const i=wh(n);switch(e){case tl:return s*t;case nl:return s*t;case il:return s*t*2;case pa:return s*t/i.components*i.byteLength;case ma:return s*t/i.components*i.byteLength;case sl:return s*t*2/i.components*i.byteLength;case ga:return s*t*2/i.components*i.byteLength;case el:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case _a:return s*t*4/i.components*i.byteLength;case Ts:case As:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Rs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ir:case Ur:return Math.max(s,16)*Math.max(t,8)/4;case Lr:case Dr:return Math.max(s,8)*Math.max(t,8)/2;case Fr:case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case kr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case qr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case jr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $r:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ps:case Jr:case Qr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case rl:case ta:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wh(s){switch(s){case Sn:case Ko:return{byteLength:1,components:1};case Zi:case Jo:case Ji:return{byteLength:2,components:1};case da:case fa:return{byteLength:2,components:4};case $n:case ua:case cn:return{byteLength:4,components:1};case Qo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Eh(s){const t=new WeakMap;function e(o,l){const h=o.array,d=o.usage,u=h.byteLength,c=s.createBuffer();s.bindBuffer(l,c),s.bufferData(l,h,d),o.onUploadCallback();let p;if(h instanceof Float32Array)p=s.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=s.SHORT;else if(h instanceof Uint32Array)p=s.UNSIGNED_INT;else if(h instanceof Int32Array)p=s.INT;else if(h instanceof Int8Array)p=s.BYTE;else if(h instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,h){const d=l.array,u=l.updateRanges;if(s.bindBuffer(h,o),u.length===0)s.bufferSubData(h,0,d);else{u.sort((p,g)=>p.start-g.start);let c=0;for(let p=1;p<u.length;p++){const g=u[c],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++c,u[c]=_)}u.length=c+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:i,remove:r,update:a}}var bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Th=`#ifdef USE_ALPHAHASH
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
#endif`,Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
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
#endif`,Ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dh=`#ifdef USE_BATCHING
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
#endif`,Uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
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
#endif`,zh=`#ifdef USE_BUMPMAP
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
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jh=`#define PI 3.141592653589793
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
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$h=`vec3 transformedNormal = objectNormal;
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
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",nu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iu=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,du=`#ifdef USE_GRADIENTMAP
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
}`,fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gu=`uniform bool receiveShadow;
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
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Su=`PhysicalMaterial material;
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
#endif`,wu=`struct PhysicalMaterial {
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
}`,Eu=`
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Au=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uu=`#if defined( USE_POINTS_UV )
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
#endif`,Fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Gu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yu=`#ifdef USE_NORMALMAP
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
#endif`,ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ju=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cd=`float getShadowMask() {
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
}`,hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fd=`#ifdef USE_SKINNING
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
#endif`,pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#ifdef USE_TRANSMISSION
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`#include <common>
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
}`,Ld=`#if DEPTH_PACKING == 3200
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
}`,Id=`#define DISTANCE
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
}`,Dd=`#define DISTANCE
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,Od=`#include <common>
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
}`,zd=`uniform vec3 diffuse;
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
}`,kd=`#define LAMBERT
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
}`,Gd=`#define LAMBERT
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
}`,Hd=`#define MATCAP
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
}`,Vd=`#define MATCAP
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
}`,Wd=`#define NORMAL
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
}`,Xd=`#define NORMAL
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
}`,qd=`#define PHONG
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
}`,Yd=`#define PHONG
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
}`,jd=`#define STANDARD
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
}`,Zd=`#define STANDARD
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
}`,$d=`#define TOON
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
}`,Kd=`#define TOON
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
}`,Jd=`uniform float size;
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
}`,Qd=`uniform vec3 diffuse;
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
}`,tf=`#include <common>
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
}`,ef=`uniform vec3 color;
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
}`,nf=`uniform float rotation;
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
}`,sf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:bh,alphahash_pars_fragment:Th,alphamap_fragment:Ah,alphamap_pars_fragment:Ch,alphatest_fragment:Rh,alphatest_pars_fragment:Ph,aomap_fragment:Lh,aomap_pars_fragment:Ih,batching_pars_vertex:Dh,batching_vertex:Uh,begin_vertex:Fh,beginnormal_vertex:Nh,bsdfs:Bh,iridescence_fragment:Oh,bumpmap_pars_fragment:zh,clipping_planes_fragment:kh,clipping_planes_pars_fragment:Gh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Vh,color_fragment:Wh,color_pars_fragment:Xh,color_pars_vertex:qh,color_vertex:Yh,common:jh,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:$h,displacementmap_pars_vertex:Kh,displacementmap_vertex:Jh,emissivemap_fragment:Qh,emissivemap_pars_fragment:tu,colorspace_fragment:eu,colorspace_pars_fragment:nu,envmap_fragment:iu,envmap_common_pars_fragment:su,envmap_pars_fragment:ru,envmap_pars_vertex:au,envmap_physical_pars_fragment:_u,envmap_vertex:ou,fog_vertex:lu,fog_pars_vertex:cu,fog_fragment:hu,fog_pars_fragment:uu,gradientmap_pars_fragment:du,lightmap_pars_fragment:fu,lights_lambert_fragment:pu,lights_lambert_pars_fragment:mu,lights_pars_begin:gu,lights_toon_fragment:xu,lights_toon_pars_fragment:vu,lights_phong_fragment:Mu,lights_phong_pars_fragment:yu,lights_physical_fragment:Su,lights_physical_pars_fragment:wu,lights_fragment_begin:Eu,lights_fragment_maps:bu,lights_fragment_end:Tu,logdepthbuf_fragment:Au,logdepthbuf_pars_fragment:Cu,logdepthbuf_pars_vertex:Ru,logdepthbuf_vertex:Pu,map_fragment:Lu,map_pars_fragment:Iu,map_particle_fragment:Du,map_particle_pars_fragment:Uu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Nu,morphinstance_vertex:Bu,morphcolor_vertex:Ou,morphnormal_vertex:zu,morphtarget_pars_vertex:ku,morphtarget_vertex:Gu,normal_fragment_begin:Hu,normal_fragment_maps:Vu,normal_pars_fragment:Wu,normal_pars_vertex:Xu,normal_vertex:qu,normalmap_pars_fragment:Yu,clearcoat_normal_fragment_begin:ju,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:$u,iridescence_pars_fragment:Ku,opaque_fragment:Ju,packing:Qu,premultiplied_alpha_fragment:td,project_vertex:ed,dithering_fragment:nd,dithering_pars_fragment:id,roughnessmap_fragment:sd,roughnessmap_pars_fragment:rd,shadowmap_pars_fragment:ad,shadowmap_pars_vertex:od,shadowmap_vertex:ld,shadowmask_pars_fragment:cd,skinbase_vertex:hd,skinning_pars_vertex:ud,skinning_vertex:dd,skinnormal_vertex:fd,specularmap_fragment:pd,specularmap_pars_fragment:md,tonemapping_fragment:gd,tonemapping_pars_fragment:_d,transmission_fragment:xd,transmission_pars_fragment:vd,uv_pars_fragment:Md,uv_pars_vertex:yd,uv_vertex:Sd,worldpos_vertex:wd,background_vert:Ed,background_frag:bd,backgroundCube_vert:Td,backgroundCube_frag:Ad,cube_vert:Cd,cube_frag:Rd,depth_vert:Pd,depth_frag:Ld,distanceRGBA_vert:Id,distanceRGBA_frag:Dd,equirect_vert:Ud,equirect_frag:Fd,linedashed_vert:Nd,linedashed_frag:Bd,meshbasic_vert:Od,meshbasic_frag:zd,meshlambert_vert:kd,meshlambert_frag:Gd,meshmatcap_vert:Hd,meshmatcap_frag:Vd,meshnormal_vert:Wd,meshnormal_frag:Xd,meshphong_vert:qd,meshphong_frag:Yd,meshphysical_vert:jd,meshphysical_frag:Zd,meshtoon_vert:$d,meshtoon_frag:Kd,points_vert:Jd,points_frag:Qd,shadow_vert:tf,shadow_frag:ef,sprite_vert:nf,sprite_frag:sf},nt={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},an={basic:{uniforms:Be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new at(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Be([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Be([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new at(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Be([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Be([nt.points,nt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Be([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Be([nt.common,nt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Be([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Be([nt.sprite,nt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Be([nt.common,nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Be([nt.lights,nt.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};an.physical={uniforms:Be([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const ws={r:0,b:0,g:0},kn=new Oe,rf=new Yt;function af(s,t,e,n,i,r,a){const o=new at(0);let l=r===!0?0:1,h,d,u=null,c=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const R=g(y);R===null?f(o,l):R&&R.isColor&&(f(R,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Fs)?(d===void 0&&(d=new ut(new Ct(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:Ri(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),kn.copy(x.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rf.makeRotationFromEuler(kn)),d.material.toneMapped=Jt.getTransfer(R.colorSpace)!==ie,(u!==R||c!==R.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,u=R,c=R.version,p=s.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new ut(new me(2,2),new Ue({name:"BackgroundMaterial",uniforms:Ri(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(R.colorSpace)!==ie,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||c!==R.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,c=R.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function f(y,x){y.getRGB(ws,ml(s)),n.buffers.color.setClear(ws.r,ws.g,ws.b,x,a)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m,dispose:v}}function of(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=c(null);let r=i,a=!1;function o(M,P,B,N,V){let j=!1;const W=u(N,B,P);r!==W&&(r=W,h(r.object)),j=p(M,N,B,V),j&&g(M,N,B,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(M,P,B,N),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function h(M){return s.bindVertexArray(M)}function d(M){return s.deleteVertexArray(M)}function u(M,P,B){const N=B.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let j=V[P.id];j===void 0&&(j={},V[P.id]=j);let W=j[N];return W===void 0&&(W=c(l()),j[N]=W),W}function c(M){const P=[],B=[],N=[];for(let V=0;V<e;V++)P[V]=0,B[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:N,object:M,attributes:{},index:null}}function p(M,P,B,N){const V=r.attributes,j=P.attributes;let W=0;const K=B.getAttributes();for(const G in K)if(K[G].location>=0){const ot=V[G];let vt=j[G];if(vt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),ot===void 0||ot.attribute!==vt||vt&&ot.data!==vt.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(M,P,B,N){const V={},j=P.attributes;let W=0;const K=B.getAttributes();for(const G in K)if(K[G].location>=0){let ot=j[G];ot===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor));const vt={};vt.attribute=ot,ot&&ot.data&&(vt.data=ot.data),V[G]=vt,W++}r.attributes=V,r.attributesNum=W,r.index=N}function _(){const M=r.newAttributes;for(let P=0,B=M.length;P<B;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const B=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;B[M]=1,N[M]===0&&(s.enableVertexAttribArray(M),N[M]=1),V[M]!==P&&(s.vertexAttribDivisor(M,P),V[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let B=0,N=P.length;B<N;B++)P[B]!==M[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function y(M,P,B,N,V,j,W){W===!0?s.vertexAttribIPointer(M,P,B,V,j):s.vertexAttribPointer(M,P,B,N,V,j)}function x(M,P,B,N){_();const V=N.attributes,j=B.getAttributes(),W=P.defaultAttributeValues;for(const K in j){const G=j[K];if(G.location>=0){let q=V[K];if(q===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const ot=q.normalized,vt=q.itemSize,Rt=t.get(q);if(Rt===void 0)continue;const Gt=Rt.buffer,X=Rt.type,et=Rt.bytesPerElement,_t=X===s.INT||X===s.UNSIGNED_INT||q.gpuType===ua;if(q.isInterleavedBufferAttribute){const it=q.data,At=it.stride,It=q.offset;if(it.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)f(G.location+Ot,it.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)m(G.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Ot=0;Ot<G.locationSize;Ot++)y(G.location+Ot,vt/G.locationSize,X,ot,At*et,(It+vt/G.locationSize*Ot)*et,_t)}else{if(q.isInstancedBufferAttribute){for(let it=0;it<G.locationSize;it++)f(G.location+it,q.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let it=0;it<G.locationSize;it++)m(G.location+it);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let it=0;it<G.locationSize;it++)y(G.location+it,vt/G.locationSize,X,ot,vt*et,vt/G.locationSize*it*et,_t)}}else if(W!==void 0){const ot=W[K];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(G.location,ot);break;case 3:s.vertexAttrib3fv(G.location,ot);break;case 4:s.vertexAttrib4fv(G.location,ot);break;default:s.vertexAttrib1fv(G.location,ot)}}}}v()}function R(){C();for(const M in n){const P=n[M];for(const B in P){const N=P[B];for(const V in N)d(N[V].object),delete N[V];delete P[B]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const B in P){const N=P[B];for(const V in N)d(N[V].object),delete N[V];delete P[B]}delete n[M.id]}function b(M){for(const P in n){const B=n[P];if(B[M.id]===void 0)continue;const N=B[M.id];for(const V in N)d(N[V].object),delete N[V];delete B[M.id]}}function C(){w(),a=!0,r!==i&&(r=i,h(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function lf(s,t,e){let n;function i(h){n=h}function r(h,d){s.drawArrays(n,h,d),e.update(d,n,1)}function a(h,d,u){u!==0&&(s.drawArraysInstanced(n,h,d,u),e.update(d,n,u))}function o(h,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];e.update(p,n,1)}function l(h,d,u,c){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)a(h[g],d[g],c[g]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,d,0,c,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*c[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==rn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Sn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==cn&&!C)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const u=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:c,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function hf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Hn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,c){const p=u.length!==0||c||n!==0||i;return i=c,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,c){e=d(u,c,0)},this.setState=function(u,c,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?d(null):h();else{const v=r?0:n,y=v*4;let x=f.clippingState||null;l.value=x,x=d(g,c,y,p);for(let R=0;R!==y;++R)x[R]=e[R];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,c,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=c.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function uf(s){let t=new WeakMap;function e(a,o){return o===Cr?a.mapping=Ei:o===Rr&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cr||o===Rr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new ah(l.height);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const xi=4,vo=[.125,.215,.35,.446,.526,.582],Xn=20,lr=new Ra,Mo=new at;let cr=null,hr=0,ur=0,dr=!1;const Vn=(1+Math.sqrt(5))/2,pi=1/Vn,yo=[new L(-Vn,pi,0),new L(Vn,pi,0),new L(-pi,0,Vn),new L(pi,0,Vn),new L(0,Vn,-pi),new L(0,Vn,pi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class aa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cr,hr,ur),this._renderer.xr.enabled=dr,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Ji,format:rn,colorSpace:Ci,depthBuffer:!1},i=So(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=df(r)),this._blurMaterial=ff(r,t,e)}return i}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,n,i){const o=new We(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,c=d.toneMapping;d.getClearColor(Mo),d.toneMapping=Mn,d.autoClear=!1;const p=new ln({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new ut(new Ct,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Mo),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(h[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,h[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,h[f]));const y=this._cubeSize;Es(i,v*y,f>2?y:0,y,y),d.setRenderTarget(i),_&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=c,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ei||t.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yo[(i-r-1)%yo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new ut(this._lodPlanes[i],h),c=h.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const f=[];let v=0;for(let b=0;b<Xn;++b){const C=b/_,w=Math.exp(-C*C/2);f.push(w),b===0?v+=w:b<m&&(v+=2*w)}for(let b=0;b<f.length;b++)f[b]=f[b]/v;c.envMap.value=t.texture,c.samples.value=m,c.weights.value=f,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-n;const x=this._sizeLods[i],R=3*x*(i>y-xi?i-y+xi:0),A=4*(this._cubeSize-x);Es(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(u,lr)}}function df(s){const t=[],e=[],n=[];let i=s;const r=s-xi+1+vo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-xi?l=vo[a-s+xi-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,u=1+h,c=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,C=A>2?0:-1,w=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];v.set(w,_*g*A),y.set(c,m*g*A);const M=[A,A,A,A,A,A];x.set(M,f*g*A)}const R=new ge;R.setAttribute("position",new Qt(v,_)),R.setAttribute("uv",new Qt(y,m)),R.setAttribute("faceIndex",new Qt(x,f)),t.push(R),i>xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function So(s,t,e){const n=new Dn(s,t,e);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ff(s,t,e){const n=new Float32Array(Xn),i=new L(0,1,0);return new Ue({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function wo(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Eo(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function pf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Cr||l===Rr,d=l===Ei||l===bi;if(h||d){let u=t.get(o);const c=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new aa(s)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return h&&p&&p.height>0||d&&p&&i(p)?(e===null&&(e=new aa(s)),u=h?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&gi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gf(s,t,e,n){const i={},r=new WeakMap;function a(u){const c=u.target;c.index!==null&&t.remove(c.index);for(const g in c.attributes)t.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete i[c.id];const p=r.get(c);p&&(t.remove(p),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(u,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,e.memory.geometries++),c}function l(u){const c=u.attributes;for(const p in c)t.update(c[p],s.ARRAY_BUFFER)}function h(u){const c=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const R=v[y+0],A=v[y+1],b=v[y+2];c.push(R,A,A,b,b,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const R=y+0,A=y+1,b=y+2;c.push(R,A,A,b,b,R)}}else return;const m=new(ol(c)?pl:fl)(c,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function d(u){const c=r.get(u);if(c){const p=u.index;p!==null&&c.version<p.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function _f(s,t,e){let n;function i(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,p){s.drawElements(n,p,r,c*a),e.update(p,n,1)}function h(c,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,c*a,g),e.update(p,n,g))}function d(c,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,c,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(c,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<c.length;f++)h(c[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,c,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function xf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function vf(s,t,e){const n=new WeakMap,i=new se;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let c=n.get(o);if(c===void 0||c.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;c!==void 0&&c.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*A*4*u),C=new cl(b,R,A,u);C.type=cn,C.needsUpdate=!0;const w=x*4;for(let P=0;P<u;P++){const B=f[P],N=v[P],V=y[P],j=R*A*4*P;for(let W=0;W<B.count;W++){const K=W*w;g===!0&&(i.fromBufferAttribute(B,W),b[j+K+0]=i.x,b[j+K+1]=i.y,b[j+K+2]=i.z,b[j+K+3]=0),_===!0&&(i.fromBufferAttribute(N,W),b[j+K+4]=i.x,b[j+K+5]=i.y,b[j+K+6]=i.z,b[j+K+7]=0),m===!0&&(i.fromBufferAttribute(V,W),b[j+K+8]=i.x,b[j+K+9]=i.y,b[j+K+10]=i.z,b[j+K+11]=V.itemSize===4?i.w:1)}}c={count:u,texture:C,size:new bt(R,A)},n.set(o,c),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",c.size)}return{update:r}}function Mf(s,t,e,n){let i=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,u=t.get(l,d);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;i.get(c)!==h&&(c.update(),i.set(c,h))}return u}function a(){i=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const wl=new Re,bo=new xl(1,1),El=new cl,bl=new Wc,Tl=new _l,To=[],Ao=[],Co=new Float32Array(16),Ro=new Float32Array(9),Po=new Float32Array(4);function Di(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=To[i];if(r===void 0&&(r=new Float32Array(i),To[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ns(s,t){let e=Ao[t];e===void 0&&(e=new Int32Array(t),Ao[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Po.set(n),s.uniformMatrix2fv(this.addr,!1,Po),Ee(e,n)}}function Tf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Ro.set(n),s.uniformMatrix3fv(this.addr,!1,Ro),Ee(e,n)}}function Af(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,n))return;Co.set(n),s.uniformMatrix4fv(this.addr,!1,Co),Ee(e,n)}}function Cf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function Lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function If(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function Ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function Nf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(bo.compareFunction=al,r=bo):r=wl,e.setTexture2D(t||r,i)}function Bf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||bl,i)}function Of(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Tl,i)}function zf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||El,i)}function kf(s){switch(s){case 5126:return yf;case 35664:return Sf;case 35665:return wf;case 35666:return Ef;case 35674:return bf;case 35675:return Tf;case 35676:return Af;case 5124:case 35670:return Cf;case 35667:case 35671:return Rf;case 35668:case 35672:return Pf;case 35669:case 35673:return Lf;case 5125:return If;case 36294:return Df;case 36295:return Uf;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return zf}}function Gf(s,t){s.uniform1fv(this.addr,t)}function Hf(s,t){const e=Di(t,this.size,2);s.uniform2fv(this.addr,e)}function Vf(s,t){const e=Di(t,this.size,3);s.uniform3fv(this.addr,e)}function Wf(s,t){const e=Di(t,this.size,4);s.uniform4fv(this.addr,e)}function Xf(s,t){const e=Di(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function qf(s,t){const e=Di(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Yf(s,t){const e=Di(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function jf(s,t){s.uniform1iv(this.addr,t)}function Zf(s,t){s.uniform2iv(this.addr,t)}function $f(s,t){s.uniform3iv(this.addr,t)}function Kf(s,t){s.uniform4iv(this.addr,t)}function Jf(s,t){s.uniform1uiv(this.addr,t)}function Qf(s,t){s.uniform2uiv(this.addr,t)}function tp(s,t){s.uniform3uiv(this.addr,t)}function ep(s,t){s.uniform4uiv(this.addr,t)}function np(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||wl,r[a])}function ip(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||bl,r[a])}function sp(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Tl,r[a])}function rp(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||El,r[a])}function ap(s){switch(s){case 5126:return Gf;case 35664:return Hf;case 35665:return Vf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return jf;case 35667:case 35671:return Zf;case 35668:case 35672:return $f;case 35669:case 35673:return Kf;case 5125:return Jf;case 36294:return Qf;case 36295:return tp;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}class op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kf(e.type)}}class lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ap(e.type)}}class cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function Lo(s,t){s.seq.push(t),s.map[t.id]=t}function hp(s,t,e){const n=s.name,i=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),a=fr.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===i){Lo(e,h===void 0?new op(o,s,t):new lp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new cp(o),Lo(e,u)),e=u}}}class Ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);hp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Io(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const up=37297;let dp=0;function fp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Do=new Ft;function pp(s){Jt._getMatrix(Do,Jt.workingColorSpace,s);const t=`mat3( ${Do.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Is:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Uo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+fp(s.getShaderSource(t),a)}else return i}function mp(s,t){const e=pp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gp(s,t){let e;switch(t){case nc:e="Linear";break;case ic:e="Reinhard";break;case sc:e="Cineon";break;case Zo:e="ACESFilmic";break;case ac:e="AgX";break;case oc:e="Neutral";break;case rc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bs=new L;function _p(){Jt.getLuminanceCoefficients(bs);const s=bs.x.toFixed(4),t=bs.y.toFixed(4),e=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function vp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Xi(s){return s!==""}function Fo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function No(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(s){return s.replace(yp,wp)}const Sp=new Map;function wp(s,t){let e=Bt[t];if(e===void 0){const n=Sp.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const Ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(s){return s.replace(Ep,bp)}function bp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Oo(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Tp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ca?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===jo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Ap(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ei:case bi:t="ENVMAP_TYPE_CUBE";break;case Fs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Rp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ha:t="ENVMAP_BLENDING_MULTIPLY";break;case tc:t="ENVMAP_BLENDING_MIX";break;case ec:t="ENVMAP_BLENDING_ADD";break}return t}function Pp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Tp(e),h=Ap(e),d=Cp(e),u=Rp(e),c=Pp(e),p=xp(e),g=vp(r),_=i.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),f.length>0&&(f+=`
`)):(m=[Oo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),f=[Oo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?gp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,mp("linearToOutputTexel",e.outputColorSpace),_p(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),a=oa(a),a=Fo(a,e),a=No(a,e),o=oa(o),o=Fo(o,e),o=No(o,e),a=Bo(a),o=Bo(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+a,x=v+f+o,R=Io(i,i.VERTEX_SHADER,y),A=Io(i,i.FRAGMENT_SHADER,x);i.attachShader(_,R),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(R).trim(),V=i.getShaderInfoLog(A).trim();let j=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,A);else{const K=Uo(i,R,"vertex"),G=Uo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+K+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||V==="")&&(W=!1);W&&(P.diagnostics={runnable:j,programLog:B,vertexShader:{log:N,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(R),i.deleteShader(A),C=new Ls(i,_),w=Mp(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,up)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let Ip=0;class Dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Up(t),e.set(t,n)),n}}class Up{constructor(t){this.id=Ip++,this.code=t,this.usedTimes=0}}function Fp(s,t,e,n,i,r,a){const o=new ul,l=new Dp,h=new Set,d=[],u=i.logarithmicDepthBuffer,c=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return h.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,B,N){const V=B.fog,j=N.geometry,W=w.isMeshStandardMaterial?B.environment:null,K=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),G=K&&K.mapping===Fs?K.image.height:null,q=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ot=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=ot!==void 0?ot.length:0;let Rt=0;j.morphAttributes.position!==void 0&&(Rt=1),j.morphAttributes.normal!==void 0&&(Rt=2),j.morphAttributes.color!==void 0&&(Rt=3);let Gt,X,et,_t;if(q){const ne=an[q];Gt=ne.vertexShader,X=ne.fragmentShader}else Gt=w.vertexShader,X=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),_t=l.getFragmentShaderID(w);const it=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,he=!!w.map,jt=!!w.matcap,_e=!!K,I=!!w.aoMap,qe=!!w.lightMap,Vt=!!w.bumpMap,Wt=!!w.normalMap,St=!!w.displacementMap,oe=!!w.emissiveMap,yt=!!w.metalnessMap,T=!!w.roughnessMap,S=w.anisotropy>0,O=w.clearcoat>0,Z=w.dispersion>0,J=w.iridescence>0,Y=w.sheen>0,Mt=w.transmission>0,lt=S&&!!w.anisotropyMap,ft=O&&!!w.clearcoatMap,Zt=O&&!!w.clearcoatNormalMap,tt=O&&!!w.clearcoatRoughnessMap,pt=J&&!!w.iridescenceMap,Tt=J&&!!w.iridescenceThicknessMap,Pt=Y&&!!w.sheenColorMap,mt=Y&&!!w.sheenRoughnessMap,Xt=!!w.specularMap,Nt=!!w.specularColorMap,re=!!w.specularIntensityMap,D=Mt&&!!w.transmissionMap,st=Mt&&!!w.thicknessMap,H=!!w.gradientMap,$=!!w.alphaMap,ht=w.alphaTest>0,ct=!!w.alphaHash,Ut=!!w.extensions;let de=Mn;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(de=s.toneMapping);const Pe={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:Gt,fragmentShader:X,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ci,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:jt,envMap:_e,envMapMode:_e&&K.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:qe,bumpMap:Vt,normalMap:Wt,displacementMap:c&&St,emissiveMap:oe,normalMapObjectSpace:Wt&&w.normalMapType===uc,normalMapTangentSpace:Wt&&w.normalMapType===xa,metalnessMap:yt,roughnessMap:T,anisotropy:S,anisotropyMap:lt,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Zt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Xt,specularColorMap:Nt,specularIntensityMap:re,transmission:Mt,transmissionMap:D,thicknessMap:st,gradientMap:H,opaque:w.transparent===!1&&w.blending===vi&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:ht,alphaHash:ct,combine:w.combine,mapUv:he&&_(w.map.channel),aoMapUv:I&&_(w.aoMap.channel),lightMapUv:qe&&_(w.lightMap.channel),bumpMapUv:Vt&&_(w.bumpMap.channel),normalMapUv:Wt&&_(w.normalMap.channel),displacementMapUv:St&&_(w.displacementMap.channel),emissiveMapUv:oe&&_(w.emissiveMap.channel),metalnessMapUv:yt&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:lt&&_(w.anisotropyMap.channel),clearcoatMapUv:ft&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(w.sheenRoughnessMap.channel),specularMapUv:Xt&&_(w.specularMap.channel),specularColorMapUv:Nt&&_(w.specularColorMap.channel),specularIntensityMapUv:re&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:st&&_(w.thicknessMap.channel),alphaMapUv:$&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Wt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(he||$),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===ie,decodeVideoTextureEmissive:oe&&w.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(w.emissiveMap.colorSpace)===ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ve,flipSided:w.side===Te,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ut&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&w.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pe.vertexUv1s=h.has(1),Pe.vertexUv2s=h.has(2),Pe.vertexUv3s=h.has(3),h.clear(),Pe}function f(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(M,w),y(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const M=g[w.type];let P;if(M){const B=an[M];P=nh.clone(B.uniforms)}else P=w.uniforms;return P}function R(w,M){let P;for(let B=0,N=d.length;B<N;B++){const V=d[B];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Lp(s,M,w,r),d.push(P)),P}function A(w){if(--w.usedTimes===0){const M=d.indexOf(w);d[M]=d[d.length-1],d.pop(),w.destroy()}}function b(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:d,dispose:C}}function Np(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Bp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ko(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,c,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:c,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=c,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,c,p,g,_,m){const f=a(u,c,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,c,p,g,_,m){const f=a(u,c,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function h(u,c){e.length>1&&e.sort(u||Bp),n.length>1&&n.sort(c||zo),i.length>1&&i.sort(c||zo)}function d(){for(let u=t,c=s.length;u<c;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:h}}function Op(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new ko,s.set(n,[a])):i>=r.length?(a=new ko,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function zp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new at};break;case"SpotLight":e={position:new L,direction:new L,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function kp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Gp=0;function Hp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vp(s){const t=new zp,e=kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);const i=new L,r=new Yt,a=new Yt;function o(h){let d=0,u=0,c=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,y=0,x=0,R=0,A=0,b=0;h.sort(Hp);for(let w=0,M=h.length;w<M;w++){const P=h[w],B=P.color,N=P.intensity,V=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=B.r*N,u+=B.g*N,c+=B.b*N;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],N);b++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(N),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const K=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,K.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=j,x++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(B).multiplyScalar(N),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const K=P.shadow,G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(N),W.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[f]=W,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=c;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=b,n.version=Gp++)}function l(h,d){let u=0,c=0,p=0,g=0,_=0;const m=d.matrixWorldInverse;for(let f=0,v=h.length;f<v;f++){const y=h[f];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=n.point[c];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),c++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Go(s){const t=new Vp(s),e=[],n=[];function i(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Wp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Go(s),t.set(i,[o])):r>=a.length?(o=new Go(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
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
}`;function Yp(s,t,e){let n=new ya;const i=new bt,r=new bt,a=new se,o=new fh({depthPacking:hc}),l=new ph,h={},d=e.maxTextureSize,u={[hn]:Te,[Te]:hn,[ve]:ve},c=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Xp,fragmentShader:qp}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ca;let f=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Pn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=f!==_n&&this.type===_n,V=f===_n&&this.type!==_n;for(let j=0,W=A.length;j<W;j++){const K=A[j],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const q=G.getFrameExtents();if(i.multiply(q),r.copy(G.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/q.x),i.x=r.x*q.x,G.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/q.y),i.y=r.y*q.y,G.mapSize.y=r.y)),G.map===null||N===!0||V===!0){const vt=this.type!==_n?{minFilter:Xe,magFilter:Xe}:{};G.map!==null&&G.map.dispose(),G.map=new Dn(i.x,i.y,vt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ot=G.getViewportCount();for(let vt=0;vt<ot;vt++){const Rt=G.getViewport(vt);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),B.viewport(a),G.updateMatrices(K,vt),n=G.getFrustum(),x(b,C,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===_n&&v(G,C),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,P)};function v(A,b){const C=t.update(_);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dn(i.x,i.y)),c.uniforms.shadow_pass.value=A.map.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,C,c,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,C,p,_,null)}function y(A,b,C,w){let M=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=M.uuid,N=b.uuid;let V=h[B];V===void 0&&(V={},h[B]=V);let j=V[N];j===void 0&&(j=M.clone(),V[N]=j,b.addEventListener("dispose",R)),M=j}if(M.visible=b.visible,M.wireframe=b.wireframe,w===_n?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=C}return M}function x(A,b,C,w,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===_n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const N=t.update(A),V=A.material;if(Array.isArray(V)){const j=N.groups;for(let W=0,K=j.length;W<K;W++){const G=j[W],q=V[G.materialIndex];if(q&&q.visible){const ot=y(A,q,w,M);A.onBeforeShadow(s,A,b,C,N,ot,G),s.renderBufferDirect(C,null,N,ot,A,G),A.onAfterShadow(s,A,b,C,N,ot,G)}}}else if(V.visible){const j=y(A,V,w,M);A.onBeforeShadow(s,A,b,C,N,j,null),s.renderBufferDirect(C,null,N,j,A,null),A.onAfterShadow(s,A,b,C,N,j,null)}}const B=A.children;for(let N=0,V=B.length;N<V;N++)x(B[N],b,C,w,M)}function R(A){A.target.removeEventListener("dispose",R);for(const C in h){const w=h[C],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const jp={[yr]:Sr,[wr]:Tr,[Er]:Ar,[wi]:br,[Sr]:yr,[Tr]:wr,[Ar]:Er,[br]:wi};function Zp(s,t){function e(){let D=!1;const st=new se;let H=null;const $=new se(0,0,0,0);return{setMask:function(ht){H!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),H=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,Ut,de,Pe){Pe===!0&&(ht*=de,ct*=de,Ut*=de),st.set(ht,ct,Ut,de),$.equals(st)===!1&&(s.clearColor(ht,ct,Ut,de),$.copy(st))},reset:function(){D=!1,H=null,$.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,H=null,$=null,ht=null;return{setReversed:function(ct){if(st!==ct){const Ut=t.get("EXT_clip_control");st?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const de=ht;ht=null,this.setClear(de)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?it(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ct){H!==ct&&!D&&(s.depthMask(ct),H=ct)},setFunc:function(ct){if(st&&(ct=jp[ct]),$!==ct){switch(ct){case yr:s.depthFunc(s.NEVER);break;case Sr:s.depthFunc(s.ALWAYS);break;case wr:s.depthFunc(s.LESS);break;case wi:s.depthFunc(s.LEQUAL);break;case Er:s.depthFunc(s.EQUAL);break;case br:s.depthFunc(s.GEQUAL);break;case Tr:s.depthFunc(s.GREATER);break;case Ar:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),s.clearDepth(ct),ht=ct)},reset:function(){D=!1,H=null,$=null,ht=null,st=!1}}}function i(){let D=!1,st=null,H=null,$=null,ht=null,ct=null,Ut=null,de=null,Pe=null;return{setTest:function(ne){D||(ne?it(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(ne){st!==ne&&!D&&(s.stencilMask(ne),st=ne)},setFunc:function(ne,Ke,un){(H!==ne||$!==Ke||ht!==un)&&(s.stencilFunc(ne,Ke,un),H=ne,$=Ke,ht=un)},setOp:function(ne,Ke,un){(ct!==ne||Ut!==Ke||de!==un)&&(s.stencilOp(ne,Ke,un),ct=ne,Ut=Ke,de=un)},setLocked:function(ne){D=ne},setClear:function(ne){Pe!==ne&&(s.clearStencil(ne),Pe=ne)},reset:function(){D=!1,st=null,H=null,$=null,ht=null,ct=null,Ut=null,de=null,Pe=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,h=new WeakMap;let d={},u={},c=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,y=null,x=null,R=null,A=null,b=new at(0,0,0),C=0,w=!1,M=null,P=null,B=null,N=null,V=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=K>=2);let q=null,ot={};const vt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),Gt=new se().fromArray(vt),X=new se().fromArray(Rt);function et(D,st,H,$){const ht=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<H;Ut++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(st+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ct}const _t={};_t[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc(wi),Vt(!1),Wt(Oa),it(s.CULL_FACE),I(Pn);function it(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function At(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function It(D,st){return u[D]!==st?(s.bindFramebuffer(D,st),u[D]=st,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Ot(D,st){let H=p,$=!1;if(D){H=c.get(st),H===void 0&&(H=[],c.set(st,H));const ht=D.textures;if(H.length!==ht.length||H[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Ut=ht.length;ct<Ut;ct++)H[ct]=s.COLOR_ATTACHMENT0+ct;H.length=ht.length,$=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,$=!0);$&&s.drawBuffers(H)}function he(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const jt={[Wn]:s.FUNC_ADD,[Bl]:s.FUNC_SUBTRACT,[Ol]:s.FUNC_REVERSE_SUBTRACT};jt[zl]=s.MIN,jt[kl]=s.MAX;const _e={[Gl]:s.ZERO,[Hl]:s.ONE,[Vl]:s.SRC_COLOR,[vr]:s.SRC_ALPHA,[Zl]:s.SRC_ALPHA_SATURATE,[Yl]:s.DST_COLOR,[Xl]:s.DST_ALPHA,[Wl]:s.ONE_MINUS_SRC_COLOR,[Mr]:s.ONE_MINUS_SRC_ALPHA,[jl]:s.ONE_MINUS_DST_COLOR,[ql]:s.ONE_MINUS_DST_ALPHA,[$l]:s.CONSTANT_COLOR,[Kl]:s.ONE_MINUS_CONSTANT_COLOR,[Jl]:s.CONSTANT_ALPHA,[Ql]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,st,H,$,ht,ct,Ut,de,Pe,ne){if(D===Pn){_===!0&&(At(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),D!==Nl){if(D!==m||ne!==w){if((f!==Wn||x!==Wn)&&(s.blendEquation(s.FUNC_ADD),f=Wn,x=Wn),ne)switch(D){case vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xr:s.blendFunc(s.ONE,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ka:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ka:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,R=null,A=null,b.set(0,0,0),C=0,m=D,w=ne}return}ht=ht||st,ct=ct||H,Ut=Ut||$,(st!==f||ht!==x)&&(s.blendEquationSeparate(jt[st],jt[ht]),f=st,x=ht),(H!==v||$!==y||ct!==R||Ut!==A)&&(s.blendFuncSeparate(_e[H],_e[$],_e[ct],_e[Ut]),v=H,y=$,R=ct,A=Ut),(de.equals(b)===!1||Pe!==C)&&(s.blendColor(de.r,de.g,de.b,Pe),b.copy(de),C=Pe),m=D,w=!1}function qe(D,st){D.side===ve?At(s.CULL_FACE):it(s.CULL_FACE);let H=D.side===Te;st&&(H=!H),Vt(H),D.blending===vi&&D.transparent===!1?I(Pn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Wt(D){D!==Ul?(it(s.CULL_FACE),D!==P&&(D===Oa?s.cullFace(s.BACK):D===Fl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),P=D}function St(D){D!==B&&(W&&s.lineWidth(D),B=D)}function oe(D,st,H){D?(it(s.POLYGON_OFFSET_FILL),(N!==st||V!==H)&&(s.polygonOffset(st,H),N=st,V=H)):At(s.POLYGON_OFFSET_FILL)}function yt(D){D?it(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+j-1),q!==D&&(s.activeTexture(D),q=D)}function S(D,st,H){H===void 0&&(q===null?H=s.TEXTURE0+j-1:H=q);let $=ot[H];$===void 0&&($={type:void 0,texture:void 0},ot[H]=$),($.type!==D||$.texture!==st)&&(q!==H&&(s.activeTexture(H),q=H),s.bindTexture(D,st||_t[D]),$.type=D,$.texture=st)}function O(){const D=ot[q];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Gt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Gt.copy(D))}function mt(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Xt(D,st){let H=h.get(st);H===void 0&&(H=new WeakMap,h.set(st,H));let $=H.get(D);$===void 0&&($=s.getUniformBlockIndex(st,D.name),H.set(D,$))}function Nt(D,st){const $=h.get(st).get(D);l.get(st)!==$&&(s.uniformBlockBinding(st,$,D.__bindingPointIndex),l.set(st,$))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},q=null,ot={},u={},c=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,y=null,x=null,R=null,A=null,b=new at(0,0,0),C=0,w=!1,M=null,P=null,B=null,N=null,V=null,Gt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:At,bindFramebuffer:It,drawBuffers:Ot,useProgram:he,setBlending:I,setMaterial:qe,setFlipSided:Vt,setCullFace:Wt,setLineWidth:St,setPolygonOffset:oe,setScissorTest:yt,activeTexture:T,bindTexture:S,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Xt,uniformBlockBinding:Nt,texStorage2D:Zt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:re}}function $p(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,d=new WeakMap;let u;const c=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return p?new OffscreenCanvas(T,S):Ki("canvas")}function _(T,S,O){let Z=1;const J=yt(T);if((J.width>O||J.height>O)&&(Z=O/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(Z*J.width),Mt=Math.floor(Z*J.height);u===void 0&&(u=g(Y,Mt));const lt=S?g(Y,Mt):u;return lt.width=Y,lt.height=Mt,lt.getContext("2d").drawImage(T,0,0,Y,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Mt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(T,S,O,Z,J=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=S;if(S===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),S===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),S===s.RGBA){const Mt=J?Is:Jt.getTransfer(Z);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=Mt===ie?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(T,S){let O;return T?S===null||S===$n||S===Ti?O=s.DEPTH24_STENCIL8:S===cn?O=s.DEPTH32F_STENCIL8:S===Zi&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$n||S===Ti?O=s.DEPTH_COMPONENT24:S===cn?O=s.DEPTH_COMPONENT32F:S===Zi&&(O=s.DEPTH_COMPONENT16),O}function R(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xe&&T.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){const S=T.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&d.delete(S)}function b(T){const S=T.target;S.removeEventListener("dispose",b),M(S)}function C(T){const S=n.get(T);if(S.__webglInit===void 0)return;const O=T.source,Z=c.get(O);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(T),Object.keys(Z).length===0&&c.delete(O)}n.remove(T)}function w(T){const S=n.get(T);s.deleteTexture(S.__webglTexture);const O=T.source,Z=c.get(O);delete Z[S.__cacheKey],a.memory.textures--}function M(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=T.textures;for(let Z=0,J=O.length;Z<J;Z++){const Y=n.get(O[Z]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[Z])}n.remove(T)}let P=0;function B(){P=0}function N(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function V(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function j(T,S){const O=n.get(T);if(T.isVideoTexture&&St(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,T,S);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function W(T,S){const O=n.get(T);if(T.version>0&&O.__version!==T.version){X(O,T,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function K(T,S){const O=n.get(T);if(T.version>0&&O.__version!==T.version){X(O,T,S);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function G(T,S){const O=n.get(T);if(T.version>0&&O.__version!==T.version){et(O,T,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}const q={[In]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[Pr]:s.MIRRORED_REPEAT},ot={[Xe]:s.NEAREST,[lc]:s.NEAREST_MIPMAP_NEAREST,[es]:s.NEAREST_MIPMAP_LINEAR,[$e]:s.LINEAR,[zs]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},vt={[dc]:s.NEVER,[xc]:s.ALWAYS,[fc]:s.LESS,[al]:s.LEQUAL,[pc]:s.EQUAL,[_c]:s.GEQUAL,[mc]:s.GREATER,[gc]:s.NOTEQUAL};function Rt(T,S){if(S.type===cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===$e||S.magFilter===zs||S.magFilter===es||S.magFilter===Yn||S.minFilter===$e||S.minFilter===zs||S.minFilter===es||S.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,q[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,q[S.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,q[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ot[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==es&&S.minFilter!==Yn||S.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Gt(T,S){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let J=c.get(Z);J===void 0&&(J={},c.set(Z,J));const Y=V(S);if(Y!==T.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[Y].usedTimes++;const Mt=J[T.__cacheKey];Mt!==void 0&&(J[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(S)),T.__cacheKey=Y,T.__webglTexture=J[Y].texture}return O}function X(T,S,O){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);const J=Gt(T,S),Y=S.source;e.bindTexture(Z,T.__webglTexture,s.TEXTURE0+O);const Mt=n.get(Y);if(Y.version!==Mt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const lt=Jt.getPrimaries(Jt.workingColorSpace),ft=S.colorSpace===on?null:Jt.getPrimaries(S.colorSpace),Zt=S.colorSpace===on||lt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let tt=_(S.image,!1,i.maxTextureSize);tt=oe(S,tt);const pt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type);let Pt=y(S.internalFormat,pt,Tt,S.colorSpace,S.isVideoTexture);Rt(Z,S);let mt;const Xt=S.mipmaps,Nt=S.isVideoTexture!==!0,re=Mt.__version===void 0||J===!0,D=Y.dataReady,st=R(S,tt);if(S.isDepthTexture)Pt=x(S.format===Ai,S.type),re&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,Tt,null));else if(S.isDataTexture)if(Xt.length>0){Nt&&re&&e.texStorage2D(s.TEXTURE_2D,st,Pt,Xt[0].width,Xt[0].height);for(let H=0,$=Xt.length;H<$;H++)mt=Xt[H],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(s.TEXTURE_2D,H,Pt,mt.width,mt.height,0,pt,Tt,mt.data);S.generateMipmaps=!1}else Nt?(re&&e.texStorage2D(s.TEXTURE_2D,st,Pt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Tt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,Tt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Pt,Xt[0].width,Xt[0].height,tt.depth);for(let H=0,$=Xt.length;H<$;H++)if(mt=Xt[H],S.format!==rn)if(pt!==null)if(Nt){if(D)if(S.layerUpdates.size>0){const ht=xo(mt.width,mt.height,S.format,S.type);for(const ct of S.layerUpdates){const Ut=mt.data.subarray(ct*ht/mt.data.BYTES_PER_ELEMENT,(ct+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,ct,mt.width,mt.height,1,pt,Ut)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Pt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,Tt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,Pt,mt.width,mt.height,tt.depth,0,pt,Tt,mt.data)}else{Nt&&re&&e.texStorage2D(s.TEXTURE_2D,st,Pt,Xt[0].width,Xt[0].height);for(let H=0,$=Xt.length;H<$;H++)mt=Xt[H],S.format!==rn?pt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(s.TEXTURE_2D,H,Pt,mt.width,mt.height,0,pt,Tt,mt.data)}else if(S.isDataArrayTexture)if(Nt){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Pt,tt.width,tt.height,tt.depth),D)if(S.layerUpdates.size>0){const H=xo(tt.width,tt.height,S.format,S.type);for(const $ of S.layerUpdates){const ht=tt.data.subarray($*H/tt.data.BYTES_PER_ELEMENT,($+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,pt,Tt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Tt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,pt,Tt,tt.data);else if(S.isData3DTexture)Nt?(re&&e.texStorage3D(s.TEXTURE_3D,st,Pt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Tt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,pt,Tt,tt.data);else if(S.isFramebufferTexture){if(re)if(Nt)e.texStorage2D(s.TEXTURE_2D,st,Pt,tt.width,tt.height);else{let H=tt.width,$=tt.height;for(let ht=0;ht<st;ht++)e.texImage2D(s.TEXTURE_2D,ht,Pt,H,$,0,pt,Tt,null),H>>=1,$>>=1}}else if(Xt.length>0){if(Nt&&re){const H=yt(Xt[0]);e.texStorage2D(s.TEXTURE_2D,st,Pt,H.width,H.height)}for(let H=0,$=Xt.length;H<$;H++)mt=Xt[H],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,pt,Tt,mt):e.texImage2D(s.TEXTURE_2D,H,Pt,pt,Tt,mt);S.generateMipmaps=!1}else if(Nt){if(re){const H=yt(tt);e.texStorage2D(s.TEXTURE_2D,st,Pt,H.width,H.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Tt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,pt,Tt,tt);m(S)&&f(Z),Mt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function et(T,S,O){if(S.image.length!==6)return;const Z=Gt(T,S),J=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const Y=n.get(J);if(J.version!==Y.__version||Z===!0){e.activeTexture(s.TEXTURE0+O);const Mt=Jt.getPrimaries(Jt.workingColorSpace),lt=S.colorSpace===on?null:Jt.getPrimaries(S.colorSpace),ft=S.colorSpace===on||Mt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Zt&&!tt?pt[$]=_(S.image[$],!0,i.maxCubemapSize):pt[$]=tt?S.image[$].image:S.image[$],pt[$]=oe(S,pt[$]);const Tt=pt[0],Pt=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),Xt=y(S.internalFormat,Pt,mt,S.colorSpace),Nt=S.isVideoTexture!==!0,re=Y.__version===void 0||Z===!0,D=J.dataReady;let st=R(S,Tt);Rt(s.TEXTURE_CUBE_MAP,S);let H;if(Zt){Nt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Xt,Tt.width,Tt.height);for(let $=0;$<6;$++){H=pt[$].mipmaps;for(let ht=0;ht<H.length;ht++){const ct=H[ht];S.format!==rn?Pt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Pt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Pt,mt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Xt,ct.width,ct.height,0,Pt,mt,ct.data)}}}else{if(H=S.mipmaps,Nt&&re){H.length>0&&st++;const $=yt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Xt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Pt,mt,pt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,pt[$].width,pt[$].height,0,Pt,mt,pt[$].data);for(let ht=0;ht<H.length;ht++){const Ut=H[ht].image[$].image;Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Ut.width,Ut.height,Pt,mt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Xt,Ut.width,Ut.height,0,Pt,mt,Ut.data)}}else{Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pt,mt,pt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,Pt,mt,pt[$]);for(let ht=0;ht<H.length;ht++){const ct=H[ht];Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Pt,mt,ct.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Xt,Pt,mt,ct.image[$])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function _t(T,S,O,Z,J,Y){const Mt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),ft=y(O.internalFormat,Mt,lt,O.colorSpace),Zt=n.get(S),tt=n.get(O);if(tt.__renderTarget=S,!Zt.__hasExternalTextures){const pt=Math.max(1,S.width>>Y),Tt=Math.max(1,S.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,ft,pt,Tt,S.depth,0,Mt,lt,null):e.texImage2D(J,Y,ft,pt,Tt,0,Mt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Wt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,J,tt.__webglTexture,0,Vt(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,J,tt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(T,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer){const Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,Y=x(S.stencilBuffer,J),Mt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Vt(S);Wt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Y,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,T)}else{const Z=S.textures;for(let J=0;J<Z.length;J++){const Y=Z[J],Mt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),ft=y(Y.internalFormat,Mt,lt,Y.colorSpace),Zt=Vt(S);O&&Wt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,ft,S.width,S.height):Wt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,ft,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ft,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const J=Z.__webglTexture,Y=Vt(S);if(S.depthTexture.format===Mi)Wt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===Ai)Wt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function It(T){const S=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");At(S.__webglFramebuffer,T)}else if(O){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),it(S.__webglDepthbuffer[Z],T,!1);else{const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),it(S.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(T,S,O){const Z=n.get(T);S!==void 0&&_t(Z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&It(T)}function he(T){const S=T.texture,O=n.get(T),Z=n.get(S);T.addEventListener("dispose",b);const J=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let ft=0;ft<S.mipmaps.length;ft++)O.__webglFramebuffer[lt][ft]=s.createFramebuffer()}else O.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)O.__webglFramebuffer[lt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let lt=0,ft=J.length;lt<ft;lt++){const Zt=n.get(J[lt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Wt(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const ft=J[lt];O.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const Zt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=y(ft.internalFormat,Zt,tt,ft.colorSpace,T.isXRRenderTarget===!0),Tt=Vt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,pt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),it(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)_t(O.__webglFramebuffer[lt][ft],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else _t(O.__webglFramebuffer[lt],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(S)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,ft=J.length;lt<ft;lt++){const Zt=J[lt],tt=n.get(Zt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Rt(s.TEXTURE_2D,Zt),_t(O.__webglFramebuffer,T,Zt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),m(Zt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),Rt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)_t(O.__webglFramebuffer[ft],T,S,s.COLOR_ATTACHMENT0,lt,ft);else _t(O.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,lt,0);m(S)&&f(lt),e.unbindTexture()}T.depthBuffer&&It(T)}function jt(T){const S=T.textures;for(let O=0,Z=S.length;O<Z;O++){const J=S[O];if(m(J)){const Y=v(T),Mt=n.get(J).__webglTexture;e.bindTexture(Y,Mt),f(Y),e.unbindTexture()}}}const _e=[],I=[];function qe(T){if(T.samples>0){if(Wt(T)===!1){const S=T.textures,O=T.width,Z=T.height;let J=s.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(T),lt=S.length>1;if(lt)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Zt=n.get(S[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,J,s.NEAREST),l===!0&&(_e.length=0,I.length=0,_e.push(s.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_e.push(Y),I.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Zt=n.get(S[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Vt(T){return Math.min(i.maxSamples,T.samples)}function Wt(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function St(T){const S=a.render.frame;d.get(T)!==S&&(d.set(T,S),T.update())}function oe(T,S){const O=T.colorSpace,Z=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ci&&O!==on&&(Jt.getTransfer(O)===ie?(Z!==rn||J!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=he,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Wt}function Kp(s,t){function e(n,i=on){let r;const a=Jt.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===da)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ko)return s.BYTE;if(n===Jo)return s.SHORT;if(n===Zi)return s.UNSIGNED_SHORT;if(n===ua)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===cn)return s.FLOAT;if(n===Ji)return s.HALF_FLOAT;if(n===tl)return s.ALPHA;if(n===el)return s.RGB;if(n===rn)return s.RGBA;if(n===nl)return s.LUMINANCE;if(n===il)return s.LUMINANCE_ALPHA;if(n===Mi)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===pa)return s.RED;if(n===ma)return s.RED_INTEGER;if(n===sl)return s.RG;if(n===ga)return s.RG_INTEGER;if(n===_a)return s.RGBA_INTEGER;if(n===Ts||n===As||n===Cs||n===Rs)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lr||n===Ir||n===Dr||n===Ur)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===Nr||n===Br)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fr||n===Nr)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Br)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Or||n===zr||n===kr||n===Gr||n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===jr||n===Zr||n===$r||n===Kr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Or)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$r)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kr)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===Jr||n===Qr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ps)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Jp={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(h,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],c=d.position.distanceTo(u.position),p=.02,g=.005;h.inputState.pinching&&c>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tm=`
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

}`;class em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ue({vertexShader:Qp,fragmentShader:tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nm extends Pi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,u=null,c=null,p=null,g=null;const _=new em,m=e.getContextAttributes();let f=null,v=null;const y=[],x=[],R=new bt;let A=null;const b=new We;b.viewport=new se;const C=new We;C.viewport=new se;const w=[b,C],M=new Sh;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=y[X];return et===void 0&&(et=new pr,y[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=y[X];return et===void 0&&(et=new pr,y[X]=et),et.getGripSpace()},this.getHand=function(X){let et=y[X];return et===void 0&&(et=new pr,y[X]=et),et.getHandSpace()};function N(X){const et=x.indexOf(X.inputSource);if(et===-1)return;const _t=y[et];_t!==void 0&&(_t.update(X.inputSource,X.frame,h||a),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",j);for(let X=0;X<y.length;X++){const et=x[X];et!==null&&(x[X]=null,y[X].disconnect(et))}P=null,B=null,_.reset(),t.setRenderTarget(f),p=null,c=null,u=null,i=null,v=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",V),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let _t=null,it=null,At=null;m.depth&&(At=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?Ai:Mi,it=m.stencil?Ti:$n);const It={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=new XRWebGLBinding(i,e),c=u.createProjectionLayer(It),i.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),v=new Dn(c.textureWidth,c.textureHeight,{format:rn,type:Sn,depthTexture:new xl(c.textureWidth,c.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Dn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(o),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(X){for(let et=0;et<X.removed.length;et++){const _t=X.removed[et],it=x.indexOf(_t);it>=0&&(x[it]=null,y[it].disconnect(_t))}for(let et=0;et<X.added.length;et++){const _t=X.added[et];let it=x.indexOf(_t);if(it===-1){for(let It=0;It<y.length;It++)if(It>=x.length){x.push(_t),it=It;break}else if(x[It]===null){x[It]=_t,it=It;break}if(it===-1)break}const At=y[it];At&&At.connect(_t)}}const W=new L,K=new L;function G(X,et,_t){W.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const it=W.distanceTo(K),At=et.projectionMatrix.elements,It=_t.projectionMatrix.elements,Ot=At[14]/(At[10]-1),he=At[14]/(At[10]+1),jt=(At[9]+1)/At[5],_e=(At[9]-1)/At[5],I=(At[8]-1)/At[0],qe=(It[8]+1)/It[0],Vt=Ot*I,Wt=Ot*qe,St=it/(-I+qe),oe=St*-I;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(oe),X.translateZ(St),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),At[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Ot+St,T=he+St,S=Vt-oe,O=Wt+(it-oe),Z=jt*he/T*yt,J=_e*he/T*yt;X.projectionMatrix.makePerspective(S,O,Z,J,yt,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,_t=X.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=C.near=b.near=et,M.far=C.far=b.far=_t,(P!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,B=M.far),b.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,M.layers.mask=b.layers.mask|C.layers.mask;const it=X.parent,At=M.cameras;q(M,it);for(let It=0;It<At.length;It++)q(At[It],it);At.length===2?G(M,b,C):M.projectionMatrix.copy(b.projectionMatrix),ot(X,M,it)};function ot(X,et,_t){_t===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$i*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(X){l=X,c!==null&&(c.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let vt=null;function Rt(X,et){if(d=et.getViewerPose(h||a),g=et,d!==null){const _t=d.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let it=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let It=0;It<_t.length;It++){const Ot=_t[It];let he=null;if(p!==null)he=p.getViewport(Ot);else{const _e=u.getViewSubImage(c,Ot);he=_e.viewport,It===0&&(t.setRenderTargetTextures(v,_e.colorTexture,c.ignoreDepthValues?void 0:_e.depthStencilTexture),t.setRenderTarget(v))}let jt=w[It];jt===void 0&&(jt=new We,jt.layers.enable(It),jt.viewport=new se,w[It]=jt),jt.matrix.fromArray(Ot.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Ot.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(he.x,he.y,he.width,he.height),It===0&&(M.matrix.copy(jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(jt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const It=u.getDepthInformation(_t[0]);It&&It.isValid&&It.texture&&_.init(t,It,i.renderState)}}for(let _t=0;_t<y.length;_t++){const it=x[_t],At=y[_t];it!==null&&At!==void 0&&At.update(it,et,h||a)}vt&&vt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Gt=new Sl;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}}const Gn=new Oe,im=new Yt;function sm(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ml(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Te&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Te&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Gn.copy(x),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(im.makeRotationFromEuler(Gn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Te&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function h(v,y){let x=i[v.id];x===void 0&&(g(v),x=d(v),i[v.id]=x,v.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(v,R);const A=t.render.frame;r[v.id]!==A&&(c(v),r[v.id]=A)}function d(v){const y=u();v.__bindingPointIndex=y;const x=s.createBuffer(),R=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const y=i[v.id],x=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,b=x.length;A<b;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,M=C.length;w<M;w++){const P=C[w];if(p(P,A,w,R)===!0){const B=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let j=0;j<N.length;j++){const W=N[j],K=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,B+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,y,x,R){const A=v.value,b=y+"_"+x;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const C=R[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const y=v.uniforms;let x=0;const R=16;for(let b=0,C=y.length;b<C;b++){const w=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,P=w.length;M<P;M++){const B=w[M],N=Array.isArray(B.value)?B.value:[B.value];for(let V=0,j=N.length;V<j;V++){const W=N[V],K=_(W),G=x%R,q=G%K.boundary,ot=G+q;x+=q,ot!==0&&R-ot<K.storage&&(x+=R-ot),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=K.storage}}}const A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:h,dispose:f}}class am{constructor(t={}){const{canvas:e=Fc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Mn,this.toneMappingExposure=1;const x=this;let R=!1,A=0,b=0,C=null,w=-1,M=null;const P=new se,B=new se;let N=null;const V=new at(0);let j=0,W=e.width,K=e.height,G=1,q=null,ot=null;const vt=new se(0,0,W,K),Rt=new se(0,0,W,K);let Gt=!1;const X=new ya;let et=!1,_t=!1;this.transmissionResolutionScale=1;const it=new Yt,At=new Yt,It=new L,Ot=new se,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function _e(){return C===null?G:1}let I=n;function qe(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){const U="webgl2";if(I=qe(U,E),I===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Vt,Wt,St,oe,yt,T,S,O,Z,J,Y,Mt,lt,ft,Zt,tt,pt,Tt,Pt,mt,Xt,Nt,re,D;function st(){Vt=new mf(I),Vt.init(),Nt=new Kp(I,Vt),Wt=new cf(I,Vt,t,Nt),St=new Zp(I,Vt),Wt.reverseDepthBuffer&&c&&St.buffers.depth.setReversed(!0),oe=new xf(I),yt=new Np,T=new $p(I,Vt,St,yt,Wt,Nt,oe),S=new uf(x),O=new pf(x),Z=new Eh(I),re=new of(I,Z),J=new gf(I,Z,oe,re),Y=new Mf(I,J,Z,oe),Pt=new vf(I,Wt,T),tt=new hf(yt),Mt=new Fp(x,S,O,Vt,Wt,re,tt),lt=new sm(x,yt),ft=new Op,Zt=new Wp(Vt),Tt=new af(x,S,O,St,Y,p,l),pt=new Yp(x,Y,Wt),D=new rm(I,oe,Wt,St),mt=new lf(I,Vt,oe),Xt=new _f(I,Vt,oe),oe.programs=Mt.programs,x.capabilities=Wt,x.extensions=Vt,x.properties=yt,x.renderLists=ft,x.shadowMap=pt,x.state=St,x.info=oe}st();const H=new nm(x,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(W,K,!1))},this.getSize=function(E){return E.set(W,K)},this.setSize=function(E,U,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,K=U,e.width=Math.floor(E*G),e.height=Math.floor(U*G),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*G,K*G).floor()},this.setDrawingBufferSize=function(E,U,z){W=E,K=U,G=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,U,z,k){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,U,z,k),St.viewport(P.copy(vt).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,U,z,k){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,U,z,k),St.scissor(B.copy(Rt).multiplyScalar(G).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(E){St.setScissorTest(Gt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){ot=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(E=!0,U=!0,z=!0){let k=0;if(E){let F=!1;if(C!==null){const Q=C.texture.format;F=Q===_a||Q===ga||Q===ma}if(F){const Q=C.texture.type,rt=Q===Sn||Q===$n||Q===Zi||Q===Ti||Q===da||Q===fa,dt=Tt.getClearColor(),gt=Tt.getClearAlpha(),Lt=dt.r,Dt=dt.g,wt=dt.b;rt?(g[0]=Lt,g[1]=Dt,g[2]=wt,g[3]=gt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Lt,_[1]=Dt,_[2]=wt,_[3]=gt,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),z&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Tt.dispose(),ft.dispose(),Zt.dispose(),yt.dispose(),S.dispose(),O.dispose(),Y.dispose(),re.dispose(),D.dispose(),Mt.dispose(),H.dispose(),H.removeEventListener("sessionstart",La),H.removeEventListener("sessionend",Ia),Un.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=oe.autoReset,U=pt.enabled,z=pt.autoUpdate,k=pt.needsUpdate,F=pt.type;st(),oe.autoReset=E,pt.enabled=U,pt.autoUpdate=z,pt.needsUpdate=k,pt.type=F}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ut(E){const U=E.target;U.removeEventListener("dispose",Ut),de(U)}function de(E){Pe(E),yt.remove(E)}function Pe(E){const U=yt.get(E).programs;U!==void 0&&(U.forEach(function(z){Mt.releaseProgram(z)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,k,F,Q){U===null&&(U=he);const rt=F.isMesh&&F.matrixWorld.determinant()<0,dt=Cl(E,U,z,k,F);St.setMaterial(k,rt);let gt=z.index,Lt=1;if(k.wireframe===!0){if(gt=J.getWireframeAttribute(z),gt===void 0)return;Lt=2}const Dt=z.drawRange,wt=z.attributes.position;let $t=Dt.start*Lt,te=(Dt.start+Dt.count)*Lt;Q!==null&&($t=Math.max($t,Q.start*Lt),te=Math.min(te,(Q.start+Q.count)*Lt)),gt!==null?($t=Math.max($t,0),te=Math.min(te,gt.count)):wt!=null&&($t=Math.max($t,0),te=Math.min(te,wt.count));const ye=te-$t;if(ye<0||ye===1/0)return;re.setup(F,k,dt,z,gt);let fe,Kt=mt;if(gt!==null&&(fe=Z.get(gt),Kt=Xt,Kt.setIndex(fe)),F.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*_e()),Kt.setMode(I.LINES)):Kt.setMode(I.TRIANGLES);else if(F.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),St.setLineWidth(Et*_e()),F.isLineSegments?Kt.setMode(I.LINES):F.isLineLoop?Kt.setMode(I.LINE_LOOP):Kt.setMode(I.LINE_STRIP)}else F.isPoints?Kt.setMode(I.POINTS):F.isSprite&&Kt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Kt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,Ae=F._multiDrawCounts,ee=F._multiDrawCount,Je=gt?Z.get(gt).bytesPerElement:1,Qn=yt.get(k).currentProgram.getUniforms();for(let Ge=0;Ge<ee;Ge++)Qn.setValue(I,"_gl_DrawID",Ge),Kt.render(Et[Ge]/Je,Ae[Ge])}else if(F.isInstancedMesh)Kt.renderInstances($t,ye,F.count);else if(z.isInstancedBufferGeometry){const Et=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ae=Math.min(z.instanceCount,Et);Kt.renderInstances($t,ye,Ae)}else Kt.render($t,ye)};function ne(E,U,z){E.transparent===!0&&E.side===ve&&E.forceSinglePass===!1?(E.side=Te,E.needsUpdate=!0,ts(E,U,z),E.side=hn,E.needsUpdate=!0,ts(E,U,z),E.side=ve):ts(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),f=Zt.get(z),f.init(U),y.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const k=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let rt=0;rt<Q.length;rt++){const dt=Q[rt];ne(dt,z,F),k.add(dt)}else ne(Q,z,F),k.add(Q)}),y.pop(),f=null,k},this.compileAsync=function(E,U,z=null){const k=this.compile(E,U,z);return new Promise(F=>{function Q(){if(k.forEach(function(rt){yt.get(rt).currentProgram.isReady()&&k.delete(rt)}),k.size===0){F(E);return}setTimeout(Q,10)}Vt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ke=null;function un(E){Ke&&Ke(E)}function La(){Un.stop()}function Ia(){Un.start()}const Un=new Sl;Un.setAnimationLoop(un),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(E){Ke=E,H.setAnimationLoop(E),E===null?Un.stop():Un.start()},H.addEventListener("sessionstart",La),H.addEventListener("sessionend",Ia),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(U),U=H.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,C),f=Zt.get(E,y.length),f.init(U),y.push(f),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(At),_t=this.localClippingEnabled,et=tt.init(this.clippingPlanes,_t),m=ft.get(E,v.length),m.init(),v.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Bs(Q,U,-1/0,x.sortObjects)}Bs(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,ot),jt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,jt&&Tt.addToRenderList(m,E),this.info.render.frame++,et===!0&&tt.beginShadows();const z=f.state.shadowsArray;pt.render(z,E,U),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(F.length>0)for(let rt=0,dt=Q.length;rt<dt;rt++){const gt=Q[rt];Ua(k,F,E,gt)}jt&&Tt.render(E);for(let rt=0,dt=Q.length;rt<dt;rt++){const gt=Q[rt];Da(m,E,gt,gt.viewport)}}else F.length>0&&Ua(k,F,E,U),jt&&Tt.render(E),Da(m,E,U);C!==null&&b===0&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,U),re.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],et===!0&&tt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Bs(E,U,z,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){k&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);const rt=Y.update(E),dt=E.material;dt.visible&&m.push(E,rt,dt,z,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const rt=Y.update(E),dt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Ot.copy(rt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(dt)){const gt=rt.groups;for(let Lt=0,Dt=gt.length;Lt<Dt;Lt++){const wt=gt[Lt],$t=dt[wt.materialIndex];$t&&$t.visible&&m.push(E,rt,$t,z,Ot.z,wt)}}else dt.visible&&m.push(E,rt,dt,z,Ot.z,null)}}const Q=E.children;for(let rt=0,dt=Q.length;rt<dt;rt++)Bs(Q[rt],U,z,k)}function Da(E,U,z,k){const F=E.opaque,Q=E.transmissive,rt=E.transparent;f.setupLightsView(z),et===!0&&tt.setGlobalState(x.clippingPlanes,z),k&&St.viewport(P.copy(k)),F.length>0&&Qi(F,U,z),Q.length>0&&Qi(Q,U,z),rt.length>0&&Qi(rt,U,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ua(E,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Dn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Ji:Sn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[k.id],rt=k.viewport||P;Q.setSize(rt.z*x.transmissionResolutionScale,rt.w*x.transmissionResolutionScale);const dt=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(V),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),jt&&Tt.render(z);const gt=x.toneMapping;x.toneMapping=Mn;const Lt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),et===!0&&tt.setGlobalState(x.clippingPlanes,k),Qi(E,z,k),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let wt=0,$t=U.length;wt<$t;wt++){const te=U[wt],ye=te.object,fe=te.geometry,Kt=te.material,Et=te.group;if(Kt.side===ve&&ye.layers.test(k.layers)){const Ae=Kt.side;Kt.side=Te,Kt.needsUpdate=!0,Fa(ye,z,k,fe,Kt,Et),Kt.side=Ae,Kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}x.setRenderTarget(dt),x.setClearColor(V,j),Lt!==void 0&&(k.viewport=Lt),x.toneMapping=gt}function Qi(E,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,Q=E.length;F<Q;F++){const rt=E[F],dt=rt.object,gt=rt.geometry,Lt=k===null?rt.material:k,Dt=rt.group;dt.layers.test(z.layers)&&Fa(dt,U,z,gt,Lt,Dt)}}function Fa(E,U,z,k,F,Q){E.onBeforeRender(x,U,z,k,F,Q),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,U,z,k,E,Q),F.transparent===!0&&F.side===ve&&F.forceSinglePass===!1?(F.side=Te,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,E,Q),F.side=hn,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,E,Q),F.side=ve):x.renderBufferDirect(z,U,k,F,E,Q),E.onAfterRender(x,U,z,k,F,Q)}function ts(E,U,z){U.isScene!==!0&&(U=he);const k=yt.get(E),F=f.state.lights,Q=f.state.shadowsArray,rt=F.state.version,dt=Mt.getParameters(E,F.state,Q,U,z),gt=Mt.getProgramCacheKey(dt);let Lt=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",Ut),Lt=new Map,k.programs=Lt);let Dt=Lt.get(gt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===rt)return Ba(E,dt),Dt}else dt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(dt,x),Dt=Mt.acquireProgram(dt,gt),Lt.set(gt,Dt),k.uniforms=dt.uniforms;const wt=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=tt.uniform),Ba(E,dt),k.needsLights=Pl(E),k.lightsStateVersion=rt,k.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Na(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ls.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ba(E,U){const z=yt.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Cl(E,U,z,k,F){U.isScene!==!0&&(U=he),T.resetTextureUnits();const Q=U.fog,rt=k.isMeshStandardMaterial?U.environment:null,dt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ci,gt=(k.isMeshStandardMaterial?O:S).get(k.envMap||rt),Lt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!z.morphAttributes.position,$t=!!z.morphAttributes.normal,te=!!z.morphAttributes.color;let ye=Mn;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=x.toneMapping);const fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Kt=fe!==void 0?fe.length:0,Et=yt.get(k),Ae=f.state.lights;if(et===!0&&(_t===!0||E!==M)){const Fe=E===M&&k.id===w;tt.setState(k,E,Fe)}let ee=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ae.state.version||Et.outputColorSpace!==dt||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==gt||k.fog===!0&&Et.fog!==Q||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Dt||Et.morphTargets!==wt||Et.morphNormals!==$t||Et.morphColors!==te||Et.toneMapping!==ye||Et.morphTargetsCount!==Kt)&&(ee=!0):(ee=!0,Et.__version=k.version);let Je=Et.currentProgram;ee===!0&&(Je=ts(k,U,F));let Qn=!1,Ge=!1,Ui=!1;const ce=Je.getUniforms(),Ye=Et.uniforms;if(St.useProgram(Je.program)&&(Qn=!0,Ge=!0,Ui=!0),k.id!==w&&(w=k.id,Ge=!0),Qn||M!==E){St.buffers.depth.getReversed()?(it.copy(E.projectionMatrix),Bc(it),Oc(it),ce.setValue(I,"projectionMatrix",it)):ce.setValue(I,"projectionMatrix",E.projectionMatrix),ce.setValue(I,"viewMatrix",E.matrixWorldInverse);const ze=ce.map.cameraPosition;ze!==void 0&&ze.setValue(I,It.setFromMatrixPosition(E.matrixWorld)),Wt.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ce.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ge=!0,Ui=!0)}if(F.isSkinnedMesh){ce.setOptional(I,F,"bindMatrix"),ce.setOptional(I,F,"bindMatrixInverse");const Fe=F.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ce.setValue(I,"boneTexture",Fe.boneTexture,T))}F.isBatchedMesh&&(ce.setOptional(I,F,"batchingTexture"),ce.setValue(I,"batchingTexture",F._matricesTexture,T),ce.setOptional(I,F,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",F._indirectTexture,T),ce.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",F._colorsTexture,T));const je=z.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&Pt.update(F,z,Je),(Ge||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,ce.setValue(I,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ye.envMap.value=gt,Ye.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Ye.envMapIntensity.value=U.environmentIntensity),Ge&&(ce.setValue(I,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Rl(Ye,Ui),Q&&k.fog===!0&&lt.refreshFogUniforms(Ye,Q),lt.refreshMaterialUniforms(Ye,k,G,K,f.state.transmissionRenderTarget[E.id]),Ls.upload(I,Na(Et),Ye,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ls.upload(I,Na(Et),Ye,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ce.setValue(I,"center",F.center),ce.setValue(I,"modelViewMatrix",F.modelViewMatrix),ce.setValue(I,"normalMatrix",F.normalMatrix),ce.setValue(I,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Fe=k.uniformsGroups;for(let ze=0,Os=Fe.length;ze<Os;ze++){const Fn=Fe[ze];D.update(Fn,Je),D.bind(Fn,Je)}}return Je}function Rl(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Pl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,z){yt.get(E.texture).__webglTexture=U,yt.get(E.depthTexture).__webglTexture=z;const k=yt.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=yt.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Ll=I.createFramebuffer();this.setRenderTarget=function(E,U=0,z=0){C=E,A=U,b=z;let k=!0,F=null,Q=!1,rt=!1;if(E){const gt=yt.get(E);if(gt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(gt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(gt.__hasExternalTextures)T.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(gt.__boundDepthTexture!==wt){if(wt!==null&&yt.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(rt=!0);const Dt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?F=Dt[U][z]:F=Dt[U],Q=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?F=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?F=Dt[z]:F=Dt,P.copy(E.viewport),B.copy(E.scissor),N=E.scissorTest}else P.copy(vt).multiplyScalar(G).floor(),B.copy(Rt).multiplyScalar(G).floor(),N=Gt;if(z!==0&&(F=Ll),St.bindFramebuffer(I.FRAMEBUFFER,F)&&k&&St.drawBuffers(E,F),St.viewport(P),St.scissor(B),St.setScissorTest(N),Q){const gt=yt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,z)}else if(rt){const gt=yt.get(E.texture),Lt=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.__webglTexture,z,Lt)}else if(E!==null&&z!==0){const gt=yt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gt.__webglTexture,z)}w=-1},this.readRenderTargetPixels=function(E,U,z,k,F,Q,rt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){St.bindFramebuffer(I.FRAMEBUFFER,dt);try{const gt=E.texture,Lt=gt.format,Dt=gt.type;if(!Wt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&z>=0&&z<=E.height-F&&I.readPixels(U,z,k,F,Nt.convert(Lt),Nt.convert(Dt),Q)}finally{const gt=C!==null?yt.get(C).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,k,F,Q,rt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){const gt=E.texture,Lt=gt.format,Dt=gt.type;if(!Wt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-k&&z>=0&&z<=E.height-F){St.bindFramebuffer(I.FRAMEBUFFER,dt);const wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),I.readPixels(U,z,k,F,Nt.convert(Lt),Nt.convert(Dt),0);const $t=C!==null?yt.get(C).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,$t);const te=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Nc(I,te,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(wt),I.deleteSync(te),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(E.image.width*k),Q=Math.floor(E.image.height*k),rt=U!==null?U.x:0,dt=U!==null?U.y:0;T.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,rt,dt,F,Q),St.unbindTexture()};const Il=I.createFramebuffer(),Dl=I.createFramebuffer();this.copyTextureToTexture=function(E,U,z=null,k=null,F=0,Q=null){E.isTexture!==!0&&(gi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],U=arguments[2],Q=arguments[3]||0,z=null),Q===null&&(F!==0?(gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let rt,dt,gt,Lt,Dt,wt,$t,te,ye;const fe=E.isCompressedTexture?E.mipmaps[Q]:E.image;if(z!==null)rt=z.max.x-z.min.x,dt=z.max.y-z.min.y,gt=z.isBox3?z.max.z-z.min.z:1,Lt=z.min.x,Dt=z.min.y,wt=z.isBox3?z.min.z:0;else{const je=Math.pow(2,-F);rt=Math.floor(fe.width*je),dt=Math.floor(fe.height*je),E.isDataArrayTexture?gt=fe.depth:E.isData3DTexture?gt=Math.floor(fe.depth*je):gt=1,Lt=0,Dt=0,wt=0}k!==null?($t=k.x,te=k.y,ye=k.z):($t=0,te=0,ye=0);const Kt=Nt.convert(U.format),Et=Nt.convert(U.type);let Ae;U.isData3DTexture?(T.setTexture3D(U,0),Ae=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Ae=I.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Ae=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ee=I.getParameter(I.UNPACK_ROW_LENGTH),Je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ge=I.getParameter(I.UNPACK_SKIP_ROWS),Ui=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt);const ce=E.isDataArrayTexture||E.isData3DTexture,Ye=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const je=yt.get(E),Fe=yt.get(U),ze=yt.get(je.__renderTarget),Os=yt.get(Fe.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,ze.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let Fn=0;Fn<gt;Fn++)ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(E).__webglTexture,F,wt+Fn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,Q,ye+Fn)),I.blitFramebuffer(Lt,Dt,rt,dt,$t,te,rt,dt,I.DEPTH_BUFFER_BIT,I.NEAREST);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||yt.has(E)){const je=yt.get(E),Fe=yt.get(U);St.bindFramebuffer(I.READ_FRAMEBUFFER,Il),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dl);for(let ze=0;ze<gt;ze++)ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,F,wt+ze):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,F),Ye?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,Q,ye+ze):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,Q),F!==0?I.blitFramebuffer(Lt,Dt,rt,dt,$t,te,rt,dt,I.COLOR_BUFFER_BIT,I.NEAREST):Ye?I.copyTexSubImage3D(Ae,Q,$t,te,ye+ze,Lt,Dt,rt,dt):I.copyTexSubImage2D(Ae,Q,$t,te,Lt,Dt,rt,dt);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ye?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ae,Q,$t,te,ye,rt,dt,gt,Kt,Et,fe.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ae,Q,$t,te,ye,rt,dt,gt,Kt,fe.data):I.texSubImage3D(Ae,Q,$t,te,ye,rt,dt,gt,Kt,Et,fe):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,$t,te,rt,dt,Kt,Et,fe.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,$t,te,fe.width,fe.height,Kt,fe.data):I.texSubImage2D(I.TEXTURE_2D,Q,$t,te,rt,dt,Kt,Et,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ui),Q===0&&U.generateMipmaps&&I.generateMipmap(Ae),St.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,k=null,F=0){return E.isTexture!==!0&&(gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,k,F)},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,St.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const Ho="sarab_settings_v41",ue=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<900),mr={low:{label:"منخفض",dprCap:.85,shadowMapSize:512,shadows:!1,dustCount:65,stormStreaks:95,cloudOctaves:2,useSkyCache:!0,useIBL:!1,anisotropy:1,sunFlare:!1,resolutionScale:.85,sandSparkle:!1},medium:{label:"متوسط",dprCap:1.05,shadowMapSize:512,shadows:!0,dustCount:110,stormStreaks:150,cloudOctaves:3,useSkyCache:ue,useIBL:!ue,anisotropy:2,sunFlare:!0,resolutionScale:.95,sandSparkle:!1},high:{label:"عالي",dprCap:1.35,shadowMapSize:ue?1024:2048,shadows:!0,dustCount:220,stormStreaks:260,cloudOctaves:4,useSkyCache:ue,useIBL:!0,anisotropy:4,sunFlare:!0,resolutionScale:1,sandSparkle:!0},ultra:{label:"فائق",dprCap:1.7,shadowMapSize:2048,shadows:!0,dustCount:300,stormStreaks:300,cloudOctaves:5,useSkyCache:!1,useIBL:!0,anisotropy:8,sunFlare:!0,resolutionScale:1.1,sandSparkle:!0}},Vo={quality:ue?"medium":"high",fpsCap:ue?45:60,batterySaver:!1,sensitivity:2.2,resolutionScale:ue?.95:1,fov:72,volume:.85,shadows:!0,sunFlare:!0,dustStorm:!0,showFps:!1};class om{constructor(){this.data={...Vo},this.listeners=new Set,this.load()}load(){try{const t=localStorage.getItem(Ho);if(t){const e=JSON.parse(t);this.data={...Vo,...e}}}catch{}}save(){try{localStorage.setItem(Ho,JSON.stringify(this.data))}catch{}}getPreset(){const t=mr[this.data.quality]||mr.medium;return this.data.batterySaver?{...t,shadows:!1,shadowMapSize:512,useSkyCache:!0,useIBL:!1,cloudOctaves:2,dustCount:Math.min(t.dustCount,60),stormStreaks:Math.min(t.stormStreaks,90),anisotropy:2}:t}getEffectiveFpsCap(){return this.data.batterySaver?Math.min(30,this.data.fpsCap||30):this.data.fpsCap||(ue?45:60)}applyQualityPreset(t){const e=mr[t];e&&(this.data.quality=t,this.data.shadows=e.shadows,this.data.sunFlare=e.sunFlare,this.data.resolutionScale=e.resolutionScale,this.save(),this.emit())}set(t,e){this.data[t]=e,this.save(),this.emit()}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.data,this.getPreset())}}const Wo=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<920);class lm{constructor(t){this.renderer=t,this.loader=new vl,this.sets=new Map,this.anisotropy=Math.min(Wo?4:8,t.capabilities.getMaxAnisotropy())}setAnisotropy(t){this.anisotropy=Math.min(t,this.renderer.capabilities.getMaxAnisotropy());for(const e of this.sets.values())for(const n of Object.values(e))n&&n.isTexture&&(n.anisotropy=this.anisotropy,n.needsUpdate=!0)}loadPBRSet(t,e=1,n=1){const i=`${t}_${e}_${n}`;if(this.sets.has(i))return this.sets.get(i);const r=(c,p)=>(c.wrapS=In,c.wrapT=In,c.repeat.set(e,n),c.anisotropy=this.anisotropy,c.colorSpace=p?De:on,c),a=Wo?"_512.webp":".webp",o=`./textures/${t}`,l=r(this.loader.load(`${o}_albedo${a}`),!0),h=r(this.loader.load(`${o}_normal${a}`),!1),d=r(this.loader.load(`${o}_roughness${a}`),!1),u={map:l,normalMap:h,roughnessMap:d};return this.sets.set(i,u),u}createContactShadowTexture(){if(this._shadowTex)return this._shadowTex;const t=128,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);i.addColorStop(0,"rgba(32, 20, 10, 0.42)"),i.addColorStop(.38,"rgba(38, 24, 12, 0.24)"),i.addColorStop(.72,"rgba(42, 28, 14, 0.06)"),i.addColorStop(1,"rgba(42, 28, 14, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new Ss(e);return this._shadowTex=r,r}createTwigClusterTexture(){if(this._twigTex)return this._twigTex;const t=256,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.clearRect(0,0,t,t);const i=t*.5,r=t*.5;let a=31337;const o=()=>(a=a*16807%2147483647,(a-1)/2147483646);for(let h=0;h<210;h++){const d=o()*Math.PI*2,u=Math.pow(o(),.75)*.44*t,c=d+(o()-.5)*2.8+(u<t*.14?Math.PI:0),p=(.04+Math.pow(o(),.65)*.42)*t,g=i+Math.cos(d)*u,_=r+Math.sin(d)*u,m=i+Math.cos(c)*p,f=r+Math.sin(c)*p,v=(g+m)*.5+(o()-.5)*28,y=(_+f)*.5+(o()-.5)*28,x=Math.round(132+o()*68);if(n.strokeStyle=`rgb(${x}, ${Math.round(x*.84)}, ${Math.round(x*.58)})`,n.lineWidth=1.4+o()*2,n.lineCap="round",n.beginPath(),n.moveTo(g,_),n.quadraticCurveTo(v,y,m,f),n.stroke(),o()>.4){const R=v+(o()-.5)*16,A=y+(o()-.5)*16;n.lineWidth=1,n.beginPath(),n.moveTo(v,y),n.lineTo(R,A),n.stroke()}}const l=new Ss(e);return l.colorSpace=De,this._twigTex=l,l}createDustParticleTexture(){if(this._dustTex)return this._dustTex;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.addColorStop(0,"rgba(255, 244, 222, 0.85)"),i.addColorStop(.35,"rgba(245, 212, 162, 0.45)"),i.addColorStop(.7,"rgba(232, 185, 124, 0.12)"),i.addColorStop(1,"rgba(232, 185, 124, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new Ss(e);return this._dustTex=r,r}createFootprintTexture(){if(this._footTex)return this._footTex;const t=64,e=128,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.clearRect(0,0,t,e);const r=(o,l,h,d,u)=>{i.save(),i.translate(o,l),i.scale(h,d);const c=i.createRadialGradient(0,0,.1,0,0,1);c.addColorStop(0,`rgba(74, 46, 20, ${u})`),c.addColorStop(.7,`rgba(92, 58, 26, ${u*.65})`),c.addColorStop(1,"rgba(92, 58, 26, 0)"),i.fillStyle=c,i.beginPath(),i.arc(0,0,1,0,Math.PI*2),i.fill(),i.restore()};r(32,42,19,32,.48),r(32,92,15,22,.45);const a=new Ss(n);return this._footTex=a,a}}class cm{constructor(){this.manifest={},this.geometries=new Map,this.materials=new Map,this.loader=new vl}async preloadAll(){try{const t=await fetch("./models/manifest.json");if(!t.ok)return;this.manifest=await t.json();const e=Object.keys(this.manifest);await Promise.all(e.map(n=>this._loadModel(n,this.manifest[n])))}catch(t){console.warn("ModelManager preload warning:",t)}}async _loadModel(t,e){const[n,i,r]=await Promise.all([fetch(`./models/${t}.bin`).then(f=>f.arrayBuffer()),e.hasDiff?this._loadTex(`./models/${t}_diff.webp`,!0):Promise.resolve(null),e.hasNor?this._loadTex(`./models/${t}_nor.webp`,!1):Promise.resolve(null)]),a=new Uint32Array(n,0,2),o=a[0],l=a[1],h=new Float32Array(n,8,o*8),d=new Uint16Array(n,8+o*32,l),u=new Float32Array(o*3),c=new Float32Array(o*3),p=new Float32Array(o*2);for(let f=0;f<o;f++){const v=f*8;u[f*3]=h[v],u[f*3+1]=h[v+1],u[f*3+2]=h[v+2],c[f*3]=h[v+3],c[f*3+1]=h[v+4],c[f*3+2]=h[v+5],p[f*2]=h[v+6],p[f*2+1]=1-h[v+7]}const g=new ge;g.setAttribute("position",new Qt(u,3)),g.setAttribute("normal",new Qt(c,3)),g.setAttribute("uv",new Qt(p,2)),g.setIndex(new Qt(d.slice(),1)),g.computeBoundingBox(),g.computeBoundingSphere();const _=t==="compass"||t==="lantern",m=ue&&!_?new xe({map:i||null,normalMap:r||null,normalScale:new bt(t.startsWith("rock")?.78:.72,t.startsWith("rock")?.78:.72),side:t.startsWith("rock")?ve:hn}):new nn({map:i||null,normalMap:r||null,normalScale:new bt(t.startsWith("rock")?.78:.72,t.startsWith("rock")?.78:.72),roughness:_?.58:.88,metalness:_?.42:.04,side:t.startsWith("rock")?ve:hn});m.name=`scan_${t}`,t==="table"||t==="chair"?(m.onBeforeCompile=f=>{f.fragmentShader=f.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
           float _woodLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           float _grain = clamp(_woodLuma * 1.15, 0.16, 0.96);
           vec3 _desertCedar = vec3(0.32, 0.21, 0.11);
           vec3 _bleachedHighlight = vec3(0.54, 0.40, 0.25);
           diffuseColor.rgb = mix(_desertCedar, _bleachedHighlight, smoothstep(0.25, 0.88, _grain)) * (0.68 + _grain * 0.52);`)},m.customProgramCacheKey=()=>`scan_wood_retint_${t}`):t.startsWith("rock")&&m.color.set("#d8c4a6"),this.geometries.set(t,g),this.materials.set(t,m)}_loadTex(t,e){return new Promise(n=>{this.loader.load(t,i=>{i.colorSpace=e?De:on,i.wrapS=In,i.wrapT=In,n(i)},void 0,()=>n(null))})}getGeometry(t){return this.geometries.get(t)||null}getMaterial(t){return this.materials.get(t)||null}getMeta(t){return this.manifest[t]||null}createMesh(t,e=1){const n=this.getGeometry(t),i=this.getMaterial(t);if(!n||!i)return null;const r=new ut(n,i);return r.scale.setScalar(e),r}}class hm{constructor(){this.ctx=null,this.masterGain=null,this.volume=.85,this.unlocked=!1,this.windGain=null,this.windFilterLow=null,this.windFilterHigh=null,this.indoorFactor=0,this.timeOfDay=0,this.radioActive=!1,this.radioGain=null,this._noiseBuffer=null,this._blipCounter=0}unlock(){if(this.unlocked&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.volume,this.masterGain.connect(this.ctx.destination),this._noiseBuffer=this._createNoiseBuffer(4),this._setupDesertWind(),this.unlocked=!0,this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}_createNoiseBuffer(t){const e=this.ctx.sampleRate,n=Math.floor(e*t),i=this.ctx.createBuffer(1,n,e),r=i.getChannelData(0);let a=0,o=0,l=0,h=0,d=0,u=0,c=0;for(let p=0;p<n;p++){const g=Math.random()*2-1;a=.99886*a+g*.0555179,o=.99332*o+g*.0750759,l=.969*l+g*.153852,h=.8665*h+g*.3104856,d=.55*d+g*.5329522,u=-.7616*u-g*.016898,r[p]=(a+o+l+h+d+u+c+g*.5362)*.055,c=g*.115926}return i}_setupDesertWind(){const t=this.ctx.currentTime;this.windGain=this.ctx.createGain(),this.windGain.gain.value=.24,this.windGain.connect(this.masterGain);const e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer,e.loop=!0,this.windFilterLow=this.ctx.createBiquadFilter(),this.windFilterLow.type="bandpass",this.windFilterLow.frequency.value=260,this.windFilterLow.Q.value=1.4;const n=this.ctx.createGain();n.gain.value=.72,e.connect(this.windFilterLow),this.windFilterLow.connect(n),n.connect(this.windGain),e.start(t);const i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer,i.loop=!0,this.windFilterHigh=this.ctx.createBiquadFilter(),this.windFilterHigh.type="bandpass",this.windFilterHigh.frequency.value=1450,this.windFilterHigh.Q.value=2.6;const r=this.ctx.createGain();r.gain.value=.22,i.connect(this.windFilterHigh),this.windFilterHigh.connect(r),r.connect(this.windGain),i.start(t+1.1);const a=this.ctx.createOscillator();a.type="sine",a.frequency.value=.11;const o=this.ctx.createGain();o.gain.value=110,a.connect(o),o.connect(this.windFilterLow.frequency),a.start(t);const l=this.ctx.createOscillator();l.type="sine",l.frequency.value=.07;const h=this.ctx.createGain();h.gain.value=420,l.connect(h),h.connect(this.windFilterHigh.frequency),l.start(t),this.stormWhistleGain=this.ctx.createGain(),this.stormWhistleGain.gain.value=0;const d=this.ctx.createOscillator();d.type="sine",d.frequency.value=185;const u=this.ctx.createOscillator();u.type="sine",u.frequency.value=.23;const c=this.ctx.createGain();c.gain.value=38,u.connect(c),c.connect(d.frequency),d.connect(this.stormWhistleGain),this.stormWhistleGain.connect(this.masterGain),d.start(t),u.start(t),this.stormIntensity=0,this._ambAccum=.2}setStormIntensity(t){this.stormIntensity=Math.max(0,Math.min(1,t))}setSuspended(t){this.ctx&&(t&&this.ctx.state==="running"?this.ctx.suspend().catch(()=>{}):!t&&this.unlocked&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}updateAmbience(t,e,n,i){if(!this.unlocked||!this.ctx||!this.windGain||this.ctx.state!=="running"||(this.indoorFactor+=(e-this.indoorFactor)*Math.min(1,t*4.5),this.timeOfDay=n,this._ambAccum+=t,this._ambAccum<.125))return;this._ambAccum=0;const r=this.ctx.currentTime,a=this.stormIntensity||0,o=.85+.22*Math.sin(i*(.37+a*.8))+.14*Math.sin(i*(.91+a*1.4)),h=(.24+n*.09+a*.52)*o*(1-this.indoorFactor*(.56-a*.12));this.windGain.gain.setTargetAtTime(h,r,.14);const d=(250+n*65+a*210)*(1-this.indoorFactor*.42),u=(1520+a*680)*(1-this.indoorFactor*.65);if(this.windFilterLow.frequency.setTargetAtTime(d,r,.18),this.windFilterHigh.frequency.setTargetAtTime(u,r,.18),this.stormWhistleGain){const c=a*a*.055*(1-this.indoorFactor*.6);this.stormWhistleGain.gain.setTargetAtTime(c,r,.18)}}playTextBlip(t="thought",e=""){if(!this.unlocked||!this.ctx||!e||/[\s،.؟!…—\-:]/.test(e))return;this._blipCounter++;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createBiquadFilter(),a=this.ctx.createGain(),o=[262,277,311,330,294,277],l=[349,370,415,392,349],h=[520,610,480,680,560];if(t==="radio"){i.type="sawtooth";const d=h[this._blipCounter%h.length];i.frequency.setValueAtTime(d+(Math.random()-.5)*35,n),r.type="bandpass",r.frequency.value=1450,r.Q.value=3.2,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.055,n+.006),a.gain.exponentialRampToValueAtTime(8e-4,n+.048)}else if(t==="journal"){i.type="triangle";const d=l[this._blipCounter%l.length];i.frequency.setValueAtTime(d+(Math.random()-.5)*14,n),r.type="lowpass",r.frequency.value=1350,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.07,n+.005),a.gain.exponentialRampToValueAtTime(8e-4,n+.046)}else{i.type="triangle";const d=o[this._blipCounter%o.length],u=(Math.random()-.5)*18;i.frequency.setValueAtTime(d+u,n),i.frequency.exponentialRampToValueAtTime((d+u)*.88,n+.042),r.type="bandpass",r.frequency.value=920,r.Q.value=1.1,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.088,n+.004),a.gain.exponentialRampToValueAtTime(8e-4,n+.048)}i.connect(r),r.connect(a),a.connect(this.masterGain),i.start(n),i.stop(n+.055)}playFootstep(t="sand",e=!1){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const n=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer;const r=Math.random()*2.4,a=this.ctx.createBiquadFilter(),o=this.ctx.createGain(),l=e?.24:.16;if(t==="stone"){a.type="bandpass",a.frequency.value=680+Math.random()*190,a.Q.value=2,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(l*1.15,n+.008),o.gain.exponentialRampToValueAtTime(.001,n+.09);const h=this.ctx.createOscillator(),d=this.ctx.createGain();h.frequency.setValueAtTime(115,n),h.frequency.exponentialRampToValueAtTime(48,n+.06),d.gain.setValueAtTime(l*.5,n),d.gain.exponentialRampToValueAtTime(.001,n+.065),h.connect(d),d.connect(this.masterGain),h.start(n),h.stop(n+.07)}else a.type="bandpass",a.frequency.value=950+Math.random()*340,a.Q.value=.85,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(l,n+.032),o.gain.exponentialRampToValueAtTime(.001,n+.18);i.connect(a),a.connect(o),o.connect(this.masterGain),i.start(n,r,.22)}playWakeUpTinnitus(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(3400,t),e.frequency.exponentialRampToValueAtTime(2600,t+3.2),n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.032,t+.5),n.gain.exponentialRampToValueAtTime(1e-4,t+3.8),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+4)}playSunGlareSwell(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(420,t+.7),e.frequency.exponentialRampToValueAtTime(140,t+1.8),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.09,t+.55),n.gain.exponentialRampToValueAtTime(.001,t+1.9),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+2)}playPaperRustle(){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=1800;const i=this.ctx.createGain();i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.16,t+.04),i.gain.exponentialRampToValueAtTime(.001,t+.24),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t,.5,.28)}playMetalSwitch(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(65,t+.14),n.gain.setValueAtTime(.14,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.2);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(60,t+.12),r.gain.setValueAtTime(.001,t+.12),r.gain.linearRampToValueAtTime(.05,t+.35),r.gain.exponentialRampToValueAtTime(.001,t+1.2),i.connect(r),r.connect(this.masterGain),i.start(t+.12),i.stop(t+1.25)}playRadioBurst(){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(1600,t),n.frequency.linearRampToValueAtTime(2600,t+.8),n.frequency.linearRampToValueAtTime(1200,t+1.8),n.Q.value=3.5;const i=this.ctx.createGain();i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.18,t+.12),i.gain.setValueAtTime(.15,t+1.6),i.gain.exponentialRampToValueAtTime(.001,t+2.4),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t,.2,2.5),[.25,.45,.65,1.05,1.45].forEach((a,o)=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="sine",l.frequency.value=780;const d=o>=3?.24:.11;h.gain.setValueAtTime(.001,t+a),h.gain.linearRampToValueAtTime(.06,t+a+.01),h.gain.exponentialRampToValueAtTime(.001,t+a+d),l.connect(h),h.connect(this.masterGain),l.start(t+a),l.stop(t+a+d+.02)})}playDesertSting(t=!1){if(!this.unlocked||!this.ctx)return;const e=this.ctx.currentTime,n=t?[110,164.8,220,233.1]:[146.8,220,293.7],i=t?4.4:2.6;n.forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createBiquadFilter(),h=this.ctx.createGain();o.type=a===0?"sawtooth":"triangle",o.frequency.setValueAtTime(r,e),l.type="lowpass",l.frequency.setValueAtTime(a===0?320:780,e),h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(.055/(a*.35+1),e+.6),h.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(l),l.connect(h),h.connect(this.masterGain),o.start(e),o.stop(e+i+.1)})}}const qt=0,zt=-18,xn=0,qi=380,_i=96;function Hi(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)}function Vi(s,t){const e=s-qt,n=t-zt,i=Math.sin(s*.09+t*.07)*2.8+Math.cos(s*.05-t*.08)*2.1,r=Math.hypot(e*.92,(n-1.5)*1.08)+i,a=Math.hypot(s+11,t-15),o=Math.sin(s*.022+t*.016+Math.sin(t*.011)*1.45),l=Math.pow(1-Math.abs(o),1.15)*4.7,h=Math.sin(s*.044-t*.032+1.7+Math.cos(s*.019)*.9),d=(1-Math.abs(h))*2,u=Math.sin(s*.01-t*.008)*4.3+Math.cos(s*.008+t*.014)*3.7,c=Math.sin(s*.13+t*.1)*.09,p=Math.exp(-((s+68)*(s+68)/620+(t-16)*(t-16)/880))*13.5,g=Math.exp(-((s-38)*(s-38)/960+(t+88)*(t+88)/560))*14.5,_=Math.exp(-((s-64)*(s-64)/680+(t+8)*(t+8)/840))*14.5,m=Math.exp(-((s+28)*(s+28)/760+(t-64)*(t-64)/640))*13.5,f=Math.hypot(s,t),v=Hi(62,165,f)*8.5*(.5+.5*Math.sin(s*.018+t*.013));let y=u*.45+l+d+c+p+g+_+m+v-2.65;const x=Hi(13.2,28.5,r);y*=x;const R=Hi(4,14.5,a);y=y*(.38+.62*R);const A=Hi(10.6,12.6,Math.max(Math.abs(e),Math.abs(n)*1.15)),b=Math.exp(-((s-11.2)*(s-11.2)/14+(t+17.5)*(t+17.5)/26))*1.15*A,C=Math.exp(-((s+11.5)*(s+11.5)/14+(t+24.8)*(t+24.8)/16))*.75*A,w=Math.exp(-((s-9.5)*(s-9.5)/14+(t+28.5)*(t+28.5)/16))*.85*A,M=Math.exp(-((e-0)*(e-0)/85+(n+11)*(n+11)/70)),P=Math.exp(-((e+12.5)*(e+12.5)/48+n*n/36));y*=(1-M*.92)*(1-P*.82);const B=Math.max(Math.abs(e)-9.8,Math.abs(n)-8.6),N=1-Hi(0,2.8,B);return(xn+y+b+C+w)*(1-N)+-.14*N}function ae(s,t){const e=qi*.5;if(s<=-e||s>=e||t<=-e||t>=e)return Vi(s,t);const n=(s+e)/qi*_i,i=(t+e)/qi*_i,r=Math.min(_i-1,Math.max(0,Math.floor(n))),a=Math.min(_i-1,Math.max(0,Math.floor(i))),o=n-r,l=i-a,h=qi/_i,d=-e+r*h,u=-e+a*h,c=d+h,p=u+h,g=Vi(d,u),_=Vi(c,u),m=Vi(d,p),f=Vi(c,p);return o+l<=1?g+o*(_-g)+l*(m-g):f+(1-o)*(m-f)+(1-l)*(_-f)}function um(s,t,e={x:0,y:1,z:0}){const i=ae(s-.45,t),r=ae(s+.45,t),a=ae(s,t-.45),o=ae(s,t+.45),l=i-r,h=2*.45,d=a-o,u=Math.hypot(l,h,d)||1;return e.x=l/u,e.y=h/u,e.z=d/u,e}function Si(s,t){const e=Math.max(0,Math.min(1,t)),n=1.08+(.54-1.08)*e,i=e<.35?1+(.35-e)*.42:1,r=1+.055*Math.sin(e*22)+.03*Math.cos(e*37),a=1+.14*Math.sin(s*3+.7)+.09*Math.cos(s*5-.4),o=e>.96?a:a*i*r;return n*o}class dm{constructor(t){this.getTerrainHeight=t,this.aabbs=[],this.obbs=[],this.cylinders=[],this.ellipses=[],this.mesas=[],this.floorZones=[],this.interiorZones=[],this.worldRadius=176}addBoxCollider(t,e,n,i,r=-10,a=14,o=null){const l=o!==null?o:a<=2.35;this.aabbs.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:a,climbable:l})}addOBBCollider(t,e,n,i,r=0,a=-5,o=2,l=null,h=!0){this.obbs.push({x:t,z:e,hx:n,hz:i,cos:Math.cos(r),sin:Math.sin(r),minY:a,maxY:o,hoodY:l!==null?l:o,climbable:h})}addCylinderCollider(t,e,n,i=12){this.cylinders.push({x:t,z:e,r:n*.96,maxY:i,climbable:i<2.2})}addEllipseCollider(t,e,n,i,r=0,a=1.5,o=!0){this.ellipses.push({x:t,z:e,rx:Math.max(.28,n*.98),rz:Math.max(.28,i*.98),cos:Math.cos(r),sin:Math.sin(r),topY:a,climbable:o})}addMesaCollider(t,e,n,i,r=0,a=0,o=25){this.mesas.push({x:t,z:e,sx:n,sz:i,cos:Math.cos(r),sin:Math.sin(r),baseY:a,meshBottomY:a-4.5,height:o,broadR:Math.max(n,i)*1.62})}addFloorZone(t,e,n,i,r,a="stone"){this.floorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,y:r,surface:a})}addInteriorZone(t,e,n,i,r=-1,a=7){this.interiorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:a})}_getMesaBlockingRadiusU(t,e,n){const i=Math.max(0,Math.min(.95,(n-t.meshBottomY)/t.height)),r=Math.max(0,Math.min(.95,(n+1.5-t.meshBottomY)/t.height)),a=Si(e,i),o=Si(e,(i+r)*.5),l=Si(e,r);return Math.max(a,o,l)+.035}getGroundInfo(t,e,n=0){let i=this.getTerrainHeight(t,e),r="sand";const a=n+.58;for(let o=0;o<this.floorZones.length;o++){const l=this.floorZones[o];t>=l.minX&&t<=l.maxX&&e>=l.minZ&&e<=l.maxZ&&l.y>=i-.22&&(i=Math.max(i,l.y),r=l.surface)}for(let o=0;o<this.ellipses.length;o++){const l=this.ellipses[o];if(!l.climbable)continue;const h=t-l.x,d=e-l.z,u=Math.max(l.rx,l.rz)+.28;if(h*h+d*d>u*u)continue;const c=h*l.cos-d*l.sin,p=h*l.sin+d*l.cos,g=c/(l.rx+.12),_=p/(l.rz+.12),m=g*g+_*_;if(m<=1){const f=i+(l.topY-i)*Math.sqrt(Math.max(0,1-m*.55));f<=a&&f>i&&(i=f,r="stone")}}for(let o=0;o<this.obbs.length;o++){const l=this.obbs[o];if(!l.climbable)continue;const h=t-l.x,d=e-l.z,u=h*l.cos-d*l.sin,c=h*l.sin+d*l.cos;if(Math.abs(u)<=l.hx+.16&&Math.abs(c)<=l.hz+.16){const p=c>.25?l.hoodY:l.maxY;p<=a&&p>i&&(i=p,r="stone")}}for(let o=0;o<this.aabbs.length;o++){const l=this.aabbs[o];l.climbable&&t>=l.minX-.15&&t<=l.maxX+.15&&e>=l.minZ-.15&&e<=l.maxZ+.15&&l.maxY<=a&&l.maxY>i&&(i=l.maxY,r="stone")}return{groundY:i,surface:r}}isInsideBuilding(t){for(let e=0;e<this.interiorZones.length;e++){const n=this.interiorZones[e];if(t.x>=n.minX&&t.x<=n.maxX&&t.z>=n.minZ&&t.z<=n.maxZ&&t.y>=n.minY&&t.y<=n.maxY)return!0}return!1}resolveHorizontal(t,e=.36){const n=t.y+.48;let i=!1;for(let h=0;h<3;h++){const d=Math.hypot(t.x,t.z);if(d>this.worldRadius){const u=this.worldRadius/d;t.x*=u,t.z*=u,i=!0}for(let u=0;u<this.aabbs.length;u++){const c=this.aabbs[u],p=c.climbable?n:t.y+.18;if(c.maxY<=p||t.y+1.68<c.minY)continue;const g=Math.max(c.minX,Math.min(t.x,c.maxX)),_=Math.max(c.minZ,Math.min(t.z,c.maxZ)),m=t.x-g,f=t.z-_,v=m*m+f*f;if(v<e*e)if(v>1e-6){const y=Math.sqrt(v),x=e-y;t.x+=m/y*x,t.z+=f/y*x}else{const y=Math.abs(t.x-c.minX),x=Math.abs(c.maxX-t.x),R=Math.abs(t.z-c.minZ),A=Math.abs(c.maxZ-t.z),b=Math.min(y,x,R,A);b===y?t.x=c.minX-e:b===x?t.x=c.maxX+e:b===R?t.z=c.minZ-e:t.z=c.maxZ+e}}for(let u=0;u<this.obbs.length;u++){const c=this.obbs[u],p=t.x-c.x,g=t.z-c.z,_=p*c.cos-g*c.sin,m=p*c.sin+g*c.cos,f=m>.25?c.hoodY:c.maxY;if(c.climbable&&f<=n)continue;const v=Math.max(-c.hx,Math.min(_,c.hx)),y=Math.max(-c.hz,Math.min(m,c.hz)),x=_-v,R=m-y,A=x*x+R*R;if(A<e*e){let b=_,C=m;if(A>1e-6){const w=Math.sqrt(A),M=e-w;b+=x/w*M,C+=R/w*M}else{const w=Math.abs(_+c.hx),M=Math.abs(c.hx-_),P=Math.abs(m+c.hz),B=Math.abs(c.hz-m),N=Math.min(w,M,P,B);N===w?b=-c.hx-e:N===M?b=c.hx+e:N===P?C=-c.hz-e:C=c.hz+e}t.x=c.x+(b*c.cos+C*c.sin),t.z=c.z+(-b*c.sin+C*c.cos)}}for(let u=0;u<this.cylinders.length;u++){const c=this.cylinders[u];if(c.maxY<=n)continue;const p=t.x-c.x,g=t.z-c.z,_=e+c.r,m=p*p+g*g;if(m<_*_&&m>1e-6){const f=Math.sqrt(m),v=_-f;t.x+=p/f*v,t.z+=g/f*v}}for(let u=0;u<this.ellipses.length;u++){const c=this.ellipses[u];if(c.climbable&&c.topY<=n)continue;const p=t.x-c.x,g=t.z-c.z,_=Math.max(c.rx,c.rz)+e;if(p*p+g*g>_*_)continue;const m=p*c.cos-g*c.sin,f=p*c.sin+g*c.cos,v=c.rx+e,y=c.rz+e,x=m/v,R=f/y,A=x*x+R*R;if(A<1&&A>1e-8){const b=1/Math.sqrt(A),C=m*b,w=f*b;t.x=c.x+(C*c.cos+w*c.sin),t.z=c.z+(-C*c.sin+w*c.cos)}}for(let u=0;u<this.mesas.length;u++){const c=this.mesas[u],p=t.x-c.x,g=t.z-c.z,_=c.broadR+e;if(p*p+g*g>_*_)continue;const m=p*c.cos-g*c.sin,f=p*c.sin+g*c.cos,v=m/c.sx,y=f/c.sz,x=Math.hypot(v,y),R=Math.atan2(y,v),A=this._getMesaBlockingRadiusU(c,R,t.y),b=e/Math.min(c.sx,c.sz),C=A+b;if(x<C){const w=x>1e-6?v/x:1,M=x>1e-6?y/x:0,P=w*C*c.sx,B=M*C*c.sz;t.x=c.x+(P*c.cos+B*c.sin),t.z=c.z+(-P*c.sin+B*c.cos)}}}const r=.4,a=(this.getTerrainHeight(t.x+r,t.z)-this.getTerrainHeight(t.x-r,t.z))/(2*r),o=(this.getTerrainHeight(t.x,t.z+r)-this.getTerrainHeight(t.x,t.z-r))/(2*r),l=Math.hypot(a,o);if(l>.92){const h=(l-.92)*.35;t.x-=a/l*h,t.z-=o/l*h}return i}}const Ht={sandTintNoon:new at("#f4e7ce"),sandTintAsr:new at("#f0cfa4"),mesaBase:new at("#c7a47c"),mesaStrataDark:new at("#9e7c58"),adobeWall:new at("#d2c0a4"),ceilingPlaster:new at("#ddd2be"),weatheredWood:new at("#8e7050"),jeepBody:new at("#9c7b5c"),jeepGlass:new at("#5b6b68"),horizonNoon:new at("#e2d2b5"),horizonAsr:new at("#e3a668"),horizonStorm:new at("#c89258"),sunNoon:new at("#fff6e3"),sunAsr:new at("#ffae5c"),sunStorm:new at("#d9a368"),hemiSkyNoon:new at("#8cbde8"),hemiSkyAsr:new at("#df9f64"),hemiSkyStorm:new at("#c9955e"),hemiGroundNoon:new at("#c9a374"),hemiGroundAsr:new at("#966338"),hemiGroundStorm:new at("#9d7042"),exposureNoon:.96,exposureAsr:1.08,exposureInteriorNoon:1.22,exposureInteriorAsr:1.26,exposureStorm:.92},Zn={uTimeOfDay:{value:0},uStorm:{value:0},uHorizonColor:{value:Ht.horizonNoon.clone()},uShadowFadeCenter:{value:new L(0,0,0)}};function qn(s,t={}){const e=t.saturation??.94,n=t.contrast??1.03,i=t.aerialStrength??0,r=t.aerialStart??45,a=t.aerialEnd??210,o=s.onBeforeCompile;return s.onBeforeCompile=(l,h)=>{o&&o(l,h),l.uniforms.uGradeHorizon=Zn.uHorizonColor,l.uniforms.uGradeStorm=Zn.uStorm,i>.001&&(l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying float vAerialDist;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vec4 _apWp = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _apWp = instanceMatrix * _apWp;
           #endif
           _apWp = modelMatrix * _apWp;
           vAerialDist = length(cameraPosition - _apWp.xyz);`));const d=i>.001?`uniform vec3 uGradeHorizon;
uniform float uGradeStorm;
varying float vAerialDist;`:`uniform vec3 uGradeHorizon;
uniform float uGradeStorm;`,u=i>.001?`
          float _apF = smoothstep(${r.toFixed(1)}, ${a.toFixed(1)}, vAerialDist);
          float _apMix = clamp(_apF * (${i.toFixed(3)} + uGradeStorm * 0.42), 0.0, 0.85);
          // Desaturate distant rock slightly before mixing toward desert horizon haze
          float _apLuma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 _apDesat = mix(gl_FragColor.rgb, vec3(_apLuma), _apF * 0.35);
          gl_FragColor.rgb = mix(_apDesat, uGradeHorizon, _apMix);
        `:"";l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
${d}`).replace("#include <tonemapping_fragment>",`
        {
          // Unified subtle desert color grading (balanced saturation + soft warm shadows)
          float _luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          gl_FragColor.rgb = mix(vec3(_luma), gl_FragColor.rgb, ${e.toFixed(3)});
          gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * ${n.toFixed(3)} + 0.5;
          gl_FragColor.rgb = max(gl_FragColor.rgb, vec3(0.0));
          ${u}
        }
        #include <tonemapping_fragment>
        `)},s.customProgramCacheKey=()=>`desert_grade_${e}_${n}_${i}_${s.name||""}`,s}const gr=`
  varying vec3 vWorldDir;
  void main() {
    vWorldDir = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`,Al=`
  uniform vec3 uSunDir;
  uniform float uTimeOfDay;
  uniform float uTime;
  uniform float uStorm;
  uniform float uCloudOctaves;
  uniform vec3 uHorizonColor;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbmClouds(vec2 p, int octaves) {
    float val = 0.0;
    float amp = 0.52;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      if (i >= octaves) break;
      val += amp * vnoise(p);
      p = rot * p * 2.07 + vec2(1.7, 9.2);
      amp *= 0.5;
    }
    return val;
  }

  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = max(0.001, 1.0 + g2 - 2.0 * g * cosTheta);
    return (1.0 - g2) / (4.0 * 3.14159265 * pow(denom, 1.5));
  }

  vec3 evalProceduralSky(vec3 dir, bool includeSunDisc) {
    vec3 sunDir = normalize(uSunDir);
    float y = dir.y;
    float sunCos = dot(dir, sunDir);
    float warm = pow(clamp(uTimeOfDay, 0.0, 1.0), 1.15);

    vec3 zenithNoon = vec3(0.032, 0.145, 0.46);
    vec3 zenithAsr  = vec3(0.042, 0.088, 0.22);
    vec3 zenithCol  = mix(zenithNoon, zenithAsr, warm);

    vec3 midNoon = vec3(0.17, 0.37, 0.68);
    vec3 midAsr  = vec3(0.28, 0.23, 0.25);
    vec3 midCol  = mix(midNoon, midAsr, warm);

    vec3 beltNoon = vec3(0.68, 0.59, 0.44);
    vec3 beltAsr  = vec3(0.84, 0.34, 0.09);
    vec3 beltCol  = mix(beltNoon, beltAsr, warm);

    vec3 skyCol = mix(beltCol, midCol, smoothstep(0.0, 0.30, max(y, 0.0)));
    skyCol = mix(skyCol, zenithCol, smoothstep(0.16, 0.85, max(y, 0.0)));

    float azimGlow = pow(max(0.0, sunCos), 3.0) * smoothstep(0.55, -0.05, y);
    vec3 sunsetTint = mix(vec3(0.95, 0.72, 0.38), vec3(1.15, 0.36, 0.06), warm);
    skyCol += sunsetTint * azimGlow * mix(0.12, 0.72, warm) * (1.0 - uStorm * 0.75);

    float mieTight = hgPhase(sunCos, 0.82);
    float mieWide  = hgPhase(sunCos, 0.38);
    vec3 sunColor  = mix(vec3(1.0, 0.92, 0.74), vec3(1.05, 0.45, 0.12), warm);
    float mieScale = (1.0 - uStorm * 0.82) * smoothstep(-0.08, 0.06, y);
    skyCol += sunColor * (mieTight * 0.22 + mieWide * 0.36) * mieScale;

    if (includeSunDisc) {
      float sunRadius = mix(0.99962, 0.99940, warm);
      float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
      float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
      vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.0, 0.62, 0.20), warm) * (2.6 + limb * 3.4);
      float sunVis = (1.0 - smoothstep(0.12, 0.80, uStorm)) * smoothstep(-0.02, 0.02, y);
      skyCol += discCol * disc * sunVis;
    }

    int oct = int(uCloudOctaves + 0.5);
    if (y > 0.02 && oct >= 1) {
      vec2 cloudUV = dir.xz / (y + 0.22);
      vec2 windDrift = vec2(uTime * 0.0045, uTime * 0.0018);

      vec2 warp = vec2(
        vnoise(cloudUV * 0.65 + windDrift * 0.7),
        vnoise(cloudUV * 0.65 + vec2(4.2, 1.9) + windDrift * 0.5)
      );
      vec2 cirrusUV = cloudUV * vec2(0.55, 1.15) + warp * 0.55 + windDrift;
      float nCirrus = fbmClouds(cirrusUV, oct);

      float nPuff = fbmClouds(cloudUV * 1.15 - windDrift * 0.8 + warp * 0.25, max(2, oct - 1));
      float cloudDensity = smoothstep(0.55, 0.82, nCirrus) * 0.64
                         + smoothstep(0.63, 0.85, nPuff) * 0.34;

      float horizonFade = smoothstep(0.03, 0.26, y);
      cloudDensity = clamp(cloudDensity * horizonFade * (1.0 - uStorm * 0.85), 0.0, 0.78);

      float sunHighlight = pow(max(0.0, sunCos), 6.0);
      float selfShade = smoothstep(0.15, 0.75, nPuff);
      vec3 cloudLitNoon = vec3(0.92, 0.90, 0.84);
      vec3 cloudLitAsr  = vec3(1.05, 0.56, 0.19);
      vec3 cloudShdNoon = vec3(0.38, 0.48, 0.62);
      vec3 cloudShdAsr  = vec3(0.24, 0.16, 0.18);

      vec3 cLit = mix(cloudLitNoon, cloudLitAsr, warm);
      vec3 cShd = mix(cloudShdNoon, cloudShdAsr, warm);
      vec3 cloudCol = mix(cShd, cLit, 0.55 + 0.45 * (1.0 - selfShade));
      cloudCol += sunColor * sunHighlight * mix(0.26, 0.72, warm);

      skyCol = mix(skyCol, cloudCol, cloudDensity);
    }

    if (uStorm > 0.001) {
      float stormHeight = smoothstep(0.85, -0.05, y);
      float stormMix = clamp(uStorm * (0.58 + 0.42 * stormHeight), 0.0, 0.96);
      vec3 stormZenith = uHorizonColor * vec3(0.84, 0.81, 0.76);
      vec3 stormSky = mix(uHorizonColor, stormZenith, clamp(y, 0.0, 1.0));
      skyCol = mix(skyCol, stormSky, stormMix);
    }

    float horizonBlend = smoothstep(0.14 + uStorm * 0.14, -0.015, y);
    skyCol = mix(skyCol, uHorizonColor, horizonBlend);

    if (y < 0.0) {
      vec3 groundBounce = uHorizonColor * mix(vec3(0.66, 0.58, 0.46), vec3(0.56, 0.40, 0.25), warm);
      skyCol = mix(uHorizonColor, groundBounce, smoothstep(0.0, -0.35, y));
    }

    return skyCol;
  }
`,Xo=`
  ${Al}
  varying vec3 vWorldDir;
  void main() {
    vec3 skyCol = evalProceduralSky(normalize(vWorldDir), true);
    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,fm=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,pm=`
  ${Al}
  varying vec2 vUv;
  const float PI = 3.14159265359;
  void main() {
    float lon = (vUv.x - 0.5) * (2.0 * PI);
    float lat = (vUv.y - 0.5) * PI;
    float clat = cos(lat);
    vec3 dir = vec3(clat * cos(lon), sin(lat), clat * sin(lon));
    // Bake atmosphere + clouds into cache (sun disc drawn crisp on live dome!)
    vec3 col = evalProceduralSky(dir, false);
    // Store soft-clamped linear value inside 8-bit RT (scale by 0.5 to preserve HDR headroom up to 2.0)
    gl_FragColor = vec4(clamp(col * 0.5, 0.0, 1.0), 1.0);
  }
`,mm=`
  uniform sampler2D uSkyCache;
  uniform vec3 uSunDir;
  uniform float uTimeOfDay;
  uniform float uStorm;
  varying vec3 vWorldDir;

  const float INV_TWO_PI = 0.15915494309189535;
  const float INV_PI = 0.3183098861837907;

  void main() {
    vec3 dir = normalize(vWorldDir);
    float u = atan(dir.z, dir.x) * INV_TWO_PI + 0.5;
    float v = clamp(asin(clamp(dir.y, -1.0, 1.0)) * INV_PI + 0.5, 0.002, 0.998);

    // Single bilinear fetch restores linear HDR procedural sky!
    vec3 skyCol = texture2D(uSkyCache, vec2(u, v)).rgb * 2.0;

    // Add razor-sharp limb-darkened solar disc analytically
    float warm = pow(clamp(uTimeOfDay, 0.0, 1.0), 1.15);
    float sunCos = dot(dir, normalize(uSunDir));
    float sunRadius = mix(0.99962, 0.99940, warm);
    float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
    float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
    vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.0, 0.62, 0.20), warm) * (2.6 + limb * 3.4);
    float sunVis = (1.0 - smoothstep(0.12, 0.80, uStorm)) * smoothstep(-0.02, 0.02, dir.y);
    skyCol += discCol * disc * sunVis;

    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class gm{constructor(t,e){this.scene=t,this.renderer=e,this.useCache=!1,this.useIBL=!0,this.uniforms={uSunDir:{value:new L(.2,.9,-.35).normalize()},uTimeOfDay:{value:0},uTime:{value:0},uStorm:{value:0},uCloudOctaves:{value:4},uHorizonColor:{value:Ht.horizonNoon.clone()}};const n=new Us(940,28,18);this._realtimeMat=new Ue({side:Te,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:gr,fragmentShader:Xo}),this._skyCacheRT=new Dn(512,256,{minFilter:$e,magFilter:$e,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),this._skyCacheRT.texture.wrapS=In,this._skyCacheRT.texture.wrapT=Rn,this._cacheScene=new ia,this._cacheCam=new Ra(-1,1,1,-1,0,1),this._cacheQuad=new ut(new me(2,2),new Ue({depthTest:!1,depthWrite:!1,uniforms:this.uniforms,vertexShader:fm,fragmentShader:pm})),this._cacheScene.add(this._cacheQuad),this._cachedMat=new Ue({side:Te,depthWrite:!1,fog:!1,uniforms:{uSkyCache:{value:this._skyCacheRT.texture},uSunDir:this.uniforms.uSunDir,uTimeOfDay:this.uniforms.uTimeOfDay,uStorm:this.uniforms.uStorm},vertexShader:gr,fragmentShader:mm}),this.mesh=new ut(n,this._realtimeMat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,this.scene.add(this.mesh),this._cacheTimer=999,this._lastCacheTime=-999,this._lastCacheStorm=-999,this._pmrem=null,this._envScene=null,this._envRT=null,this._lastBakeTime=-999,this._lastBakeStorm=-999,this._bakeCooldown=0}_ensureIBLScene(){if(this._pmrem)return;this._pmrem=new aa(this.renderer),this._pmrem.compileCubemapShader(),this._envScene=new ia;const t={uSunDir:this.uniforms.uSunDir,uTimeOfDay:this.uniforms.uTimeOfDay,uTime:{value:0},uStorm:this.uniforms.uStorm,uCloudOctaves:{value:2},uHorizonColor:this.uniforms.uHorizonColor},e=new ut(new Us(20,14,10),new Ue({side:Te,depthWrite:!1,fog:!1,uniforms:t,vertexShader:gr,fragmentShader:Xo}));this._envScene.add(e)}setQualityOptions({cloudOctaves:t=4,useSkyCache:e=!1,useIBL:n=!0}){this.uniforms.uCloudOctaves.value=t,this.useCache=!!e,this.mesh.material=this.useCache?this._cachedMat:this._realtimeMat,this.useCache&&(this._cacheTimer=999,this.bakeSkyCache()),this.useIBL=!!n,this.useIBL?this._envRT||this.bakeIBL(this.uniforms.uTimeOfDay.value,this.uniforms.uStorm.value):(this.scene.environment=null,this._envRT&&(this._envRT.dispose(),this._envRT=null))}bakeSkyCache(){const t=this.renderer.getRenderTarget(),e=this.renderer.toneMapping;this.renderer.toneMapping=Mn,this.renderer.setRenderTarget(this._skyCacheRT),this.renderer.render(this._cacheScene,this._cacheCam),this.renderer.setRenderTarget(t),this.renderer.toneMapping=e,this._cacheTimer=0,this._lastCacheTime=this.uniforms.uTimeOfDay.value,this._lastCacheStorm=this.uniforms.uStorm.value}computeHorizonColor(t,e,n){const i=Math.pow(xt.clamp(t,0,1),1.15);return n.lerpColors(Ht.horizonNoon,Ht.horizonAsr,i),e>.001&&n.lerp(Ht.horizonStorm,xt.clamp(e*.92,0,.95)),n}update(t,e,n,i,r,a){if(this.mesh.position.copy(n),this.uniforms.uSunDir.value.copy(i),this.uniforms.uTimeOfDay.value=r,this.uniforms.uTime.value=e,this.uniforms.uStorm.value=a,this.computeHorizonColor(r,a,this.uniforms.uHorizonColor.value),this.useCache){this._cacheTimer+=t;const o=Math.abs(r-this._lastCacheTime),l=Math.abs(a-this._lastCacheStorm);(this._cacheTimer>=1||o>.015||l>.025)&&this.bakeSkyCache()}if(this.useIBL){this._bakeCooldown=Math.max(0,this._bakeCooldown-t);const o=Math.abs(r-this._lastBakeTime),l=Math.abs(a-this._lastBakeStorm);this._bakeCooldown<=0&&(o>.035||l>.08||!this._envRT)&&(this.bakeIBL(r,a),this._bakeCooldown=.65)}}bakeIBL(t,e){if(!this.useIBL)return;this._ensureIBLScene(),this._lastBakeTime=t,this._lastBakeStorm=e;const n=this._envRT;this._envRT=this._pmrem.fromScene(this._envScene,.04,.1,100),this.scene.environment=this._envRT.texture,n&&n.dispose()}}class _m{constructor(t,e,n){this.scene=t,this.renderer=e,this.settings=n,this.timeOfDay=0,this.targetTimeOfDay=0,this.stormIntensity=0,this.sunDirection=new L(.2,.9,-.35).normalize(),this.glareAmount=0,this.targetExposure=Ht.exposureNoon,this.currentExposure=Ht.exposureNoon,this.cutsceneGlareBoost=0,this._tmpVec=new L,this._camDir=new L,this._tmpCol=new at,this._sandBounceNoon=new at("#e6bd88"),this._sandBounceAsr=new at("#d88848"),this._intBounceNoon=new at("#f4d4a8"),this._intBounceAsr=new at("#f6aa5c"),this._lastShadowFocus=new L(9999,9999,9999),this._lastShadowSun=new L,this._shadowCooldown=0,this._forceShadowUpdate=!0,this._shadowFrustumHalf=22,this.shadowUpdatesCount=0,this._lastGlareVisible=!1,this._lastGlareOp="",this._lastGlareX=-999,this._lastGlareY=-999,this._lastGlareG=-1,this._lastHazeOp="",this._lastAtmosTime=-999,this._lastAtmosStorm=-999,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.proceduralSky=new gm(this.scene,this.renderer),this._createLights(),this._createFog(),this.glareEl=document.getElementById("sun-glare-layer"),this.heatHazeEl=document.getElementById("heat-haze-layer"),this.glareEl&&this.glareEl.classList.add("hidden"),this.setTimeOfDay(0,!0)}_createLights(){this.sunLight=new _o(Ht.sunNoon,3.1),this.sunLight.castShadow=!0;const t=ue?512:2048;this.sunLight.shadow.mapSize.set(t,t),this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=125;const e=this._shadowFrustumHalf;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.bias=-45e-5,this.sunLight.shadow.normalBias=.022,this.sunLight.shadow.radius=ue?1.4:2.6,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.hemiLight=new xh(Ht.hemiSkyNoon,Ht.hemiGroundNoon,1.12),this.scene.add(this.hemiLight),this.interiorBounceLight=new yl(16045224,2.4,22,1.45),this.interiorBounceLight.position.set(0,3.1,-18),this.scene.add(this.interiorBounceLight),this.sandBounceLight=new _o(15121800,.5),this.sandBounceLight.position.set(-25,10,30),this.scene.add(this.sandBounceLight)}_createFog(){this.fog=new Ma(Ht.horizonNoon.getHex(),.0028),this.scene.fog=this.fog}applySettings(t,e){const n=!!t.shadows&&e.shadows!==!1&&!t.batterySaver;this.sunLight.castShadow=n,this.renderer.shadowMap.enabled=n,n&&this.sunLight.shadow.mapSize.x!==e.shadowMapSize&&(this.sunLight.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.sunLight.shadow.map&&(this.sunLight.shadow.map.dispose(),this.sunLight.shadow.map=null)),this.proceduralSky.setQualityOptions({cloudOctaves:e.cloudOctaves??3,useSkyCache:!!e.useSkyCache,useIBL:!!e.useIBL}),this._iblCompensation=e.useIBL?0:.22,this._applyAtmosphere(this.timeOfDay,this.stormIntensity),this._forceShadowUpdate=!0}setTimeOfDay(t,e=!1){const n=Math.max(0,Math.min(1,t));this.targetTimeOfDay=n,e&&(this.timeOfDay=n,this._applyAtmosphere(n,this.stormIntensity),this.proceduralSky.uniforms.uSunDir.value.copy(this.sunDirection),this.proceduralSky.uniforms.uTimeOfDay.value=n,this.proceduralSky.useCache&&this.proceduralSky.bakeSkyCache(),this.proceduralSky.bakeIBL(n,this.stormIntensity),this._forceShadowUpdate=!0)}setStormIntensity(t,e=!1){const n=Math.max(0,Math.min(1,t)),i=Math.abs(n-this.stormIntensity)>.003;this.stormIntensity=n,(i||e)&&this._applyAtmosphere(this.timeOfDay,this.stormIntensity),e&&(this.proceduralSky.uniforms.uStorm.value=n,this.proceduralSky.useCache&&this.proceduralSky.bakeSkyCache(),this.proceduralSky.bakeIBL(this.timeOfDay,this.stormIntensity))}_applyAtmosphere(t,e){this.timeOfDay=t,this._lastAtmosTime=t,this._lastAtmosStorm=e;const n=Math.pow(t,1.15),i=xt.lerp(48,11.5,t),r=xt.lerp(-138,-118,t),a=xt.degToRad(i),o=xt.degToRad(r);this.sunDirection.set(Math.cos(a)*Math.sin(o),Math.sin(a),Math.cos(a)*Math.cos(o)).normalize(),this.proceduralSky.computeHorizonColor(t,e,this.fog.color);const l=xt.lerp(.0026,.0038,n);this.fog.density=xt.lerp(l,.036,Math.pow(e,1.25)),Zn.uTimeOfDay.value=t,Zn.uStorm.value=e,Zn.uHorizonColor.value.copy(this.fog.color),this._tmpCol.lerpColors(Ht.sunNoon,Ht.sunAsr,n),e>.001&&this._tmpCol.lerp(Ht.sunStorm,e*.85),this.sunLight.color.copy(this._tmpCol);const h=xt.lerp(3.15,2.85,t);if(this.sunLight.intensity=h*(1-e*.72),this.hemiLight.color.lerpColors(Ht.hemiSkyNoon,Ht.hemiSkyAsr,n),e>.001&&this.hemiLight.color.lerp(Ht.hemiSkyStorm,e*.9),this.hemiLight.groundColor.lerpColors(Ht.hemiGroundNoon,Ht.hemiGroundAsr,n),e>.001&&this.hemiLight.groundColor.lerp(Ht.hemiGroundStorm,e*.85),this.hemiLight.intensity=xt.lerp(1.06,.92,t)+(this._iblCompensation||0)+e*.65,this.scene.environmentIntensity=xt.lerp(.55,.68,n)*(1-e*.2),this.sandBounceLight.color.lerpColors(this._sandBounceNoon,this._sandBounceAsr,n),this.sandBounceLight.intensity=xt.lerp(.46,.36,t)*(1-e*.55),this.sandBounceLight.position.set(-this.sunDirection.x*40,12,-this.sunDirection.z*40),this.interiorBounceLight.color.lerpColors(this._intBounceNoon,this._intBounceAsr,n),this.interiorBounceLight.intensity=xt.lerp(2.4,2.75,n)*(1-e*.25),this.glareEl){const d=Math.round(xt.lerp(240,174,n));if(Math.abs(d-this._lastGlareG)>=3){this._lastGlareG=d;const u=Math.round(xt.lerp(202,98,n));this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g",String(d)),this.glareEl.style.setProperty("--sun-b",String(u))}}if(this.heatHazeEl){const d=(xt.lerp(.42,.25,t)*(1-e*.6)).toFixed(2);d!==this._lastHazeOp&&(this._lastHazeOp=d,this.heatHazeEl.style.opacity=d)}}update(t,e,n,i,r){const a=this.targetTimeOfDay-this.timeOfDay;Math.abs(a)>5e-4&&(this.timeOfDay+=a*Math.min(1,t*1.15),Math.abs(this.timeOfDay-this._lastAtmosTime)>=.002&&this._applyAtmosphere(this.timeOfDay,this.stormIntensity)),this.proceduralSky.update(t,e,n.position,this.sunDirection,this.timeOfDay,this.stormIntensity);const o=xt.clamp(i.x,-55,55),l=xt.clamp(i.z,-55,55);if(Zn.uShadowFadeCenter.value.set(o,i.y,l),this.sunLight.castShadow&&this.renderer.shadowMap.enabled){this._shadowCooldown=Math.max(0,this._shadowCooldown-t);const m=(o-this._lastShadowFocus.x)*(o-this._lastShadowFocus.x)+(l-this._lastShadowFocus.z)*(l-this._lastShadowFocus.z),f=this._lastShadowSun.distanceToSquared(this.sunDirection),v=ue?1.44:.36;(this._forceShadowUpdate||this._shadowCooldown<=0&&(m>v||f>8e-5))&&(this._forceShadowUpdate=!1,this._shadowCooldown=ue?.28:.08,this._lastShadowFocus.set(o,0,l),this._lastShadowSun.copy(this.sunDirection),this.sunLight.target.position.set(o,0,l),this.sunLight.position.set(o+this.sunDirection.x*58,this.sunDirection.y*58,l+this.sunDirection.z*58),this.renderer.shadowMap.needsUpdate=!0,this.shadowUpdatesCount++)}n.getWorldDirection(this._camDir);const h=this._camDir.dot(this.sunDirection),d=this.settings.data.sunFlare&&!this.settings.data.batterySaver;let u=0;if(d&&!r&&h>.42&&this.stormIntensity<.75){u=Math.pow((h-.42)/.58,2.3)*(1-this.stormIntensity),this._tmpVec.copy(n.position).addScaledVector(this.sunDirection,400).project(n);const m=Math.round((this._tmpVec.x*.5+.5)*200)*.5,f=Math.round((-this._tmpVec.y*.5+.5)*200)*.5;this.glareEl&&(m!==this._lastGlareX||f!==this._lastGlareY)&&(this._lastGlareX=m,this._lastGlareY=f,this.glareEl.style.setProperty("--sun-x",`${m}%`),this.glareEl.style.setProperty("--sun-y",`${f}%`))}const c=Math.min(1,u*.85+this.cutsceneGlareBoost);if(this.glareAmount+=(c-this.glareAmount)*Math.min(1,t*6.5),this.glareEl){const m=this.glareAmount>.012;if(m!==this._lastGlareVisible&&(this._lastGlareVisible=m,this.glareEl.classList.toggle("hidden",!m)),m){const f=this.glareAmount.toFixed(2);f!==this._lastGlareOp&&(this._lastGlareOp=f,this.glareEl.style.opacity=f)}}const p=xt.lerp(xt.lerp(Ht.exposureNoon,Ht.exposureAsr,this.timeOfDay),Ht.exposureStorm,this.stormIntensity),g=xt.lerp(Ht.exposureInteriorNoon,Ht.exposureInteriorAsr,this.timeOfDay),_=r?g:p;this.targetExposure=_+this.cutsceneGlareBoost*.6-u*.12,this.currentExposure+=(this.targetExposure-this.currentExposure)*Math.min(1,t*2.8),this.renderer.toneMappingExposure=this.currentExposure}}class xm{constructor(t,e,n,i,r){this.scene=t,this.tex=e,this.models=n,this.physics=i,this.settings=r,this.group=new Ce,this.scene.add(this.group),this.hawks=[],this.tumbleweeds=[],this.lizards=[],this.jeepWorldPos=new L(-5.8,0,2.2),this.tentBarrelWorldPos=new L,this.stormIntensity=0,this._dummy=new Me,this._tmpCol=new at,this._dustNoonCol=new at("#ecd6b0"),this._dustAsrCol=new at("#f0b672"),this._faunaAccum=0,this._lizardsInitialized=!1,this._createTerrain(),this._createHorizonSkirt(),this._createDistantMesas(),this._createRocks(),this._createDesertShrubs(),this._createDesertPalms(),this._createBuriedJeep(),this._createTatteredCampTent(),this._createSoaringHawks(),this._createRollingTumbleweeds(),this._createDesertLizards(),this._createFootprintTrail(),this._createGPUDustParticles()}_createSandMaterial(t,e,n=!1){const i=this.tex.loadPBRSet("sand",t,e),a=n||ue?new xe({map:i.map,normalMap:n?null:i.normalMap,normalScale:new bt(1,1),vertexColors:!0,color:Ht.sandTintNoon}):new nn({map:i.map,normalMap:i.normalMap,normalScale:new bt(1.05,1.05),roughness:.91,metalness:.02,vertexColors:!0,color:Ht.sandTintNoon});return a.name=n?"sand_far":"sand_near",n?qn(a,{saturation:.88,contrast:1,aerialStrength:.45,aerialStart:140,aerialEnd:520}):(a.onBeforeCompile=o=>{o.uniforms.uShadowFadeCenter=Zn.uShadowFadeCenter,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDesertWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vDesertWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uShadowFadeCenter;
varying vec3 vDesertWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
             float macroWave = sin(vDesertWorldPos.x * 0.045 + vDesertWorldPos.z * 0.035) * 0.5 + 0.5;
             vec3 warmTint = mix(vec3(0.94, 0.89, 0.81), vec3(1.04, 0.98, 0.90), macroWave);
             diffuseColor.rgb *= warmTint;`)},qn(a,{saturation:.92,contrast:1.03})),a}_createTerrain(){const t=qi,e=_i,n=new me(t,t,e,e);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3);for(let a=0;a<i.count;a++){const o=i.getX(a),l=i.getZ(a),h=ae(o,l);i.setY(a,h);const d=ae(o+2,l),u=ae(o,l+2),c=Math.hypot(d-h,u-h)*.5,p=o-qt,g=l-zt,_=Math.max(Math.abs(p)-7.8,Math.abs(g)-6.6),m=_<2.4&&_>-7?xt.clamp(.78+Math.max(0,_)*.09,.78,1):1,f=xt.clamp(.92+h*.011-c*.07,.83,1.06),v=m*f;r[a*3]=v,r[a*3+1]=v*.985,r[a*3+2]=v*.965}n.setAttribute("color",new Qt(r,3)),n.computeVertexNormals(),this.terrainMat=this._createSandMaterial(62,62,!1),this.terrainMesh=new ut(n,this.terrainMat),this.terrainMesh.receiveShadow=!0,this.group.add(this.terrainMesh)}_createHorizonSkirt(){const n=new me(1480,1480,32,32);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3);for(let o=0;o<i.count;o++){const l=i.getX(o),h=i.getZ(o),d=Math.max(Math.abs(l),Math.abs(h));let u=ae(l,h);if(d<185)u-=3.2;else{const p=Math.min(1,(d-185)/250);u+=(Math.sin(l*.008+h*.006)*18+Math.cos(l*.005-h*.009)*14)*p}i.setY(o,u);const c=xt.clamp(.94+u*.004,.84,1.05);r[o*3]=c,r[o*3+1]=c*.97,r[o*3+2]=c*.93}n.setAttribute("color",new Qt(r,3)),n.computeVertexNormals();const a=new ut(n,this._createSandMaterial(78,78,!0));this.group.add(a)}_createDistantMesas(){const t=new pe(.54,1.08,1,16,7,!1);t.translate(0,.5,0);const e=t.attributes.position;for(let l=0;l<e.count;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l),c=Math.hypot(h,u);if(c>1e-5){const p=Math.atan2(u,h),g=Si(p,d),_=g/c,m=1.08+(.54-1.08)*d,f=c>=m*.9?_:g/Math.max(.01,m);e.setXYZ(l,h*f,d,u*f)}}t.computeVertexNormals();const n=this.tex.loadPBRSet("sandstone_rock",4,2),i=new xe({map:n.map,normalMap:ue?null:n.normalMap,normalScale:new bt(.85,.85),color:Ht.mesaBase});i.name="mesa_sandstone",i.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMesaWorldPos;
varying float vMesaLocalY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vMesaLocalY = position.y;
           vec4 _mw = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _mw = instanceMatrix * _mw;
           #endif
           vMesaWorldPos = (modelMatrix * _mw).xyz;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vMesaWorldPos;
varying float vMesaLocalY;`).replace("#include <color_fragment>",`#include <color_fragment>
           float _ml = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_ml), diffuseColor.rgb, 0.62);
           float bandCoord = vMesaWorldPos.y * 0.42 + sin(vMesaWorldPos.x * 0.03 + vMesaWorldPos.z * 0.025) * 0.8;
           float strata1 = sin(bandCoord * 3.1) * 0.5 + 0.5;
           float strata2 = sin(bandCoord * 8.7 + 1.3) * 0.5 + 0.5;
           vec3 paleLimestone = vec3(0.76, 0.66, 0.52);
           vec3 erodedOchre   = vec3(0.55, 0.43, 0.31);
           vec3 strataTint = mix(erodedOchre, paleLimestone, strata1 * 0.65 + strata2 * 0.35);
           diffuseColor.rgb *= mix(vec3(0.85), strataTint * 1.35, 0.68);
           float baseDust = smoothstep(0.32, 0.02, vMesaLocalY);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.74, 0.63, 0.47), baseDust * 0.62);`)},qn(i,{saturation:.78,contrast:1.03,aerialStrength:.48,aerialStart:65,aerialEnd:205});const r=[{x:-138,z:-92,sx:44,sy:26,sz:32,ry:.4},{x:-34,z:-138,sx:54,sy:30,sz:36,ry:1.1},{x:92,z:-124,sx:48,sy:28,sz:36,ry:2},{x:134,z:-30,sx:44,sy:24,sz:34,ry:.8},{x:-136,z:32,sx:46,sy:24,sz:34,ry:2.5},{x:104,z:108,sx:48,sy:25,sz:36,ry:1.6},{x:-76,z:118,sx:42,sy:23,sz:32,ry:.2}],a=new ke(t,i,r.length),o=this._dummy;r.forEach((l,h)=>{const d=ae(l.x,l.z);o.position.set(l.x,d-4.5,l.z),o.rotation.set(0,l.ry,0),o.scale.set(l.sx,l.sy,l.sz),o.updateMatrix(),a.setMatrixAt(h,o.matrix),this.physics.addMesaCollider(l.x,l.z,l.sx,l.sz,l.ry,d,l.sy)}),a.instanceMatrix.needsUpdate=!0,this.group.add(a)}_createLowPolyRockLODGeo(){const t=new Ea(.5,1),e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getX(n),r=e.getY(n),a=e.getZ(n);const o=.86+.22*Math.sin(i*7.1+a*5.3)*Math.cos(r*6.4);i*=.54*o,r=(r+.5)*.44*o,a*=.96*o,e.setXYZ(n,i,r,a)}return t.computeVertexNormals(),t}_createRocks(){const t=this.models?.getGeometry("rock_07"),e=this.models?.getMaterial("rock_07"),n=this.models?.getGeometry("rock_09")||t,i=this.models?.getMaterial("rock_09")||e,r=this._createLowPolyRockLODGeo(),a=this.tex.loadPBRSet("sandstone_rock",2,2),o=new xe({map:a.map,color:10193268});o.name="rock_lod_sandstone",o.onBeforeCompile=q=>{q.fragmentShader=q.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
         float _rl = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
         diffuseColor.rgb = mix(vec3(_rl), diffuseColor.rgb, 0.48) * vec3(0.95, 0.90, 0.82);`)},qn(o,{saturation:.78,aerialStrength:.42,aerialStart:45,aerialEnd:160});const l=t||r,h=e||o,d=n||r,u=i||o,c=[{x:-8.2,z:10.2,sx:3.6,sy:1.55,sz:2,ry:.5,type:0,hero:!0},{x:-13.5,z:-9.5,sx:5.5,sy:3.1,sz:3.6,ry:1.1,type:0,hero:!0},{x:-15.6,z:-11.2,sx:3.6,sy:2.1,sz:2.4,ry:2.3,type:1,hero:!0},{x:13.8,z:-12,sx:5.8,sy:3.3,sz:3.8,ry:.4,type:0,hero:!0},{x:15.8,z:-14.2,sx:3.8,sy:2.2,sz:2.6,ry:1.9,type:1,hero:!0},{x:-13.2,z:-27.5,sx:6.4,sy:3.8,sz:4.2,ry:2.6,type:0,hero:!0},{x:12,z:-29,sx:5.4,sy:3,sz:3.6,ry:.9,type:1,hero:!0},{x:-29,z:4,sx:9.5,sy:5.8,sz:6.4,ry:.5,type:0,hero:!1},{x:-34,z:-28,sx:10.5,sy:6.5,sz:7,ry:1.4,type:0,hero:!1},{x:31,z:-20,sx:9.2,sy:5.5,sz:6.2,ry:2.1,type:1,hero:!1},{x:22,z:16,sx:7.4,sy:4.4,sz:4.8,ry:1.1,type:0,hero:!1}];let p=4219;const g=()=>(p=p*16807%2147483647,(p-1)/2147483646);for(let q=0;q<34;q++){const ot=g()*Math.PI*2,vt=20+Math.pow(g(),.78)*105,Rt=Math.cos(ot)*vt,Gt=Math.sin(ot)*vt-10;if(Math.abs(Rt-qt)<12.5&&Math.abs(Gt-zt)<12.5||Math.hypot(Rt+11,Gt-15)<6||Math.hypot(Rt-this.jeepWorldPos.x,Gt-this.jeepWorldPos.z)<5.5)continue;const X=1.6+Math.pow(g(),1.6)*5.2,et=Math.hypot(Rt,Gt+6);c.push({x:Rt,z:Gt,sx:X*(.9+g()*.35),sy:X*(.65+g()*.35),sz:X*(.85+g()*.35),ry:g()*Math.PI*2,type:q%2,hero:et<30})}const _=c.filter(q=>q.hero&&q.type===0),m=c.filter(q=>q.hero&&q.type===1),f=c.filter(q=>!q.hero),v=new ke(l,h,Math.max(1,_.length));v.count=_.length,v.castShadow=!0,v.receiveShadow=!0;const y=new ke(d,u,Math.max(1,m.length));y.count=m.length,y.castShadow=!0,y.receiveShadow=!0;const x=new ke(r,o,Math.max(1,f.length));x.count=f.length,x.castShadow=!1,x.receiveShadow=!0;const R=_.length+m.length,A=new me(1,1);A.rotateX(-Math.PI/2);const b=new ln({map:this.tex.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:.35,polygonOffset:!0,polygonOffsetFactor:-2}),C=new ke(A,b,Math.max(1,R));C.count=R;const w=this._dummy,M=new L(0,1,0),P=new L,B=new Ln,N=new Ln,V={x:0,y:1,z:0};let j=0,W=0,K=0,G=0;c.forEach(q=>{const ot=ae(q.x,q.z),vt=q.sy*.04;if(w.position.set(q.x,ot-vt,q.z),w.rotation.set(0,q.ry,0),w.scale.set(q.sx,q.sy,q.sz),w.updateMatrix(),q.hero){q.type===0?v.setMatrixAt(j++,w.matrix):y.setMatrixAt(W++,w.matrix),um(q.x,q.z,V),P.set(V.x,V.y,V.z),B.setFromUnitVectors(M,P),N.setFromAxisAngle(M,q.ry),B.multiply(N),w.position.set(q.x,ot+.03,q.z),w.quaternion.copy(B);const _t=q.sx*.265,it=q.sz*.49;w.scale.set(_t*1.92,1,it*1.92),w.updateMatrix(),C.setMatrixAt(G++,w.matrix)}else x.setMatrixAt(K++,w.matrix);const Rt=q.sx*.265,Gt=q.sz*.49,X=q.type===0?.44:.23,et=ot-vt+q.sy*X;this.physics.addEllipseCollider(q.x,q.z,Rt,Gt,q.ry,et,!0)}),v.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0,this.group.add(v,y,x,C)}_createDesertShrubs(){const t=[];for(let d=0;d<6;d++){const u=d/6*Math.PI*2+.3,c=.48+d%2*.24,p=.44+d%3*.14,g=new jn(.03,p,3,1);g.translate(0,p*.5,0),g.rotateZ(c),g.rotateY(u),t.push(g)}const e=this._mergeGeometriesSimple(t);t.forEach(d=>d.dispose());const n=new xe({color:7758916}),i=46,r=new ke(e,n,i);r.castShadow=!1;let a=8821;const o=()=>(a=a*16807%2147483647,(a-1)/2147483646),l=this._dummy;let h=0;for(let d=0;d<120&&h<i;d++){const u=o()*Math.PI*2,c=12+Math.pow(o(),.85)*90,p=Math.cos(u)*c,g=Math.sin(u)*c-12;if(Math.abs(p-qt)<10&&Math.abs(g-zt)<10)continue;const _=ae(p,g),m=.7+o()*.95;l.position.set(p,_-.03,g),l.rotation.set(0,o()*Math.PI*2,0),l.scale.set(m*1.2,m*.85,m*1.2),l.updateMatrix(),r.setMatrixAt(h,l.matrix),h++}r.count=h,r.instanceMatrix.needsUpdate=!0,this.group.add(r)}_createDesertPalms(){const t=this.tex.loadPBRSet("desert_wood",1,3),e=new xe({map:t.map,color:9204566});this.palmTimeUniform={value:0},this.palmStormUniform={value:0};const n=new xe({color:6056252,side:ve});n.onBeforeCompile=u=>{u.uniforms.uTime=this.palmTimeUniform,u.uniforms.uStorm=this.palmStormUniform,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uStorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           float tipDist = length(position.xz);
           float swayAmp = (0.045 + uStorm * 0.19) * tipDist;
           float swayFreq = 1.5 + uStorm * 3.4;
           float phase = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.2;
           transformed.x += (sin(uTime * swayFreq + phase) + uStorm * 0.7) * swayAmp;
           transformed.y += cos(uTime * swayFreq * 0.85 + phase) * swayAmp * 0.55;`)};const i=[{x:qt-10.8,z:zt-9.2,h:6.2,lean:.14,ry:.4},{x:qt-12.6,z:zt-6.8,h:4.8,lean:-.18,ry:2.1},{x:qt+11.4,z:zt-10.5,h:5.5,lean:.16,ry:1.2},{x:-16.5,z:7.5,h:4.6,lean:.2,ry:3.1}],r=[],a=12;for(let u=0;u<a;u++){const c=new me(.62,2.65,2,4),p=c.attributes.position;for(let m=0;m<p.count;m++){const v=(p.getY(m)+1.325)/2.65,y=Math.sin(v*Math.PI)*1.18;p.setX(m,p.getX(m)*y),p.setZ(m,-v*v*.78)}c.translate(0,1.325,0);const g=new Yt,_=new Oe(.72+u%3*.22,u/a*Math.PI*2,0,"YXZ");g.makeRotationFromEuler(_),c.applyMatrix4(g),c.computeVertexNormals(),r.push(c)}const o=this._mergeGeometriesSimple(r);r.forEach(u=>u.dispose()),this.palmCrownInst=new ke(o,n,i.length),this.palmCrownInst.castShadow=!ue;const l=[],h=this._dummy;i.forEach((u,c)=>{const p=ae(u.x,u.z),g=new pe(.14,.29,u.h,7,4),_=g.attributes.position;for(let y=0;y<_.count;y++){const x=(_.getY(y)+u.h*.5)/u.h;_.setX(y,_.getX(y)+x*x*u.h*u.lean)}g.translate(0,u.h*.5,0);const m=new Yt;m.makeRotationY(u.ry),m.setPosition(u.x,p-.1,u.z),g.applyMatrix4(m),g.computeVertexNormals(),l.push(g);const f=u.x+Math.cos(u.ry)*(u.h*u.lean),v=u.z-Math.sin(u.ry)*(u.h*u.lean);h.position.set(f,p+u.h-.22,v),h.rotation.set(0,u.ry,0),h.scale.set(1,1,1),h.updateMatrix(),this.palmCrownInst.setMatrixAt(c,h.matrix),this.physics.addCylinderCollider(u.x,u.z,.34,p+u.h)}),this.palmCrownInst.instanceMatrix.needsUpdate=!0;const d=new ut(this._mergeGeometriesSimple(l),e);d.castShadow=!0,d.receiveShadow=!0,l.forEach(u=>u.dispose()),this.group.add(d,this.palmCrownInst)}_createBuriedJeep(){const t=this.jeepWorldPos.x,e=this.jeepWorldPos.z,n=ae(t,e);this.jeepWorldPos.y=n+.85;const i=this.tex.loadPBRSet("rusted_metal",2,2),r=new nn({map:i.map,normalMap:i.normalMap,normalScale:new bt(.55,.55),roughness:.78,metalness:.28,vertexColors:!0});r.name="jeep_weathered",r.onBeforeCompile=x=>{x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vJeepNormalW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vJeepNormalW = normalize(mat3(modelMatrix) * objectNormal);`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vJeepNormalW;`).replace("#include <color_fragment>",`#include <color_fragment>
           // Keep steel chassis/bullbar dark (vColor < 0.25), lift body panels to weathered desert khaki-tan with rust mottling!
           float _vLuma = dot(vColor.rgb, vec3(0.333));
           float _texLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           float _rustMask = smoothstep(0.18, 0.04, _texLuma);
           vec3 _khakiPaint = vColor.rgb * (0.72 + _texLuma * 1.45);
           vec3 _rustPatch = vec3(0.24, 0.11, 0.055);
           vec3 _panelCol = mix(_khakiPaint, _rustPatch, _rustMask * 0.45);
           diffuseColor.rgb = mix(diffuseColor.rgb * 1.35, _panelCol, smoothstep(0.12, 0.35, _vLuma));
           float topDust = smoothstep(0.35, 0.92, vJeepNormalW.y);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.54, 0.43, 0.28), topDust * 0.48);`)},qn(r,{saturation:.85,contrast:1.03});const a=new nn({color:6977648,roughness:.22,metalness:.72,envMapIntensity:1.55,transparent:!0,opacity:.68,side:ve}),o=new Ce;o.position.set(t,n-.15,e);const l=.72;o.rotation.set(.06,l,-.09);const h=[],d=[],u=(x,R,A,b,C,w,M,P,B)=>{const N=new Yt;if(N.compose(new L(A,b,C),new Ln().setFromEuler(new Oe(w,M,P)),new L(1,1,1)),R.applyMatrix4(N),R.computeVertexNormals(),B!==null){const V=new at(B),j=R.attributes.position.count,W=new Float32Array(j*3);for(let K=0;K<j;K++)W[K*3]=V.r,W[K*3+1]=V.g,W[K*3+2]=V.b;R.setAttribute("color",new Qt(W,3))}x.push(R)},c=12166018,p=9403490,g=3091239;u(h,new Ct(1.92,.66,2.55),0,.58,-.58,0,0,0,c),u(h,new Ct(1.82,.54,1.48),0,.54,1.32,0,0,0,c),u(h,new Ct(2.14,.16,1.12),0,.68,1.25,0,0,0,p),u(h,new Ct(2.14,.16,1.12),0,.68,-1.22,0,0,0,p),u(h,new Ct(1.78,.09,2.18),0,1.62,-.55,0,0,0,c),u(h,new Ct(.09,.72,.09),-.84,1.25,.42,-.25,0,0,p),u(h,new Ct(.09,.72,.09),.84,1.25,.42,-.25,0,0,p),u(h,new Ct(.11,.7,.12),-.85,1.26,-.52,0,0,0,p),u(h,new Ct(.11,.7,.12),.85,1.26,-.52,0,0,0,p),u(h,new Ct(.14,.7,.18),-.85,1.26,-1.55,0,0,0,p),u(h,new Ct(.14,.7,.18),.85,1.26,-1.55,0,0,0,p),u(h,new Ct(1.74,.06,1.36),0,1.14,1.28,-.38,0,0,c),u(h,new Ct(2.04,.2,.24),0,.36,2.12,0,0,0,g),u(h,new Ct(2.02,.2,.22),0,.38,-2.02,0,0,0,g),u(h,new Ct(1.72,.46,.08),0,.56,2.02,0,0,0,g),u(h,new Ct(.75,.45,.85),0,.66,1.28,0,0,0,g),u(h,new pe(.02,.02,.58,5),-.72,1.05,1.72,0,0,0,g),u(h,new Ct(1.64,.08,1.85),0,1.71,-.58,0,0,0,g),u(h,new Ct(.55,.52,.52),-.45,.88,-.25,0,0,0,g),u(h,new Ct(.55,.52,.52),.45,.88,-.25,0,0,0,g),u(d,new me(1.62,.64),0,1.26,.42,-.25,0,0,null),u(d,new me(.84,.58),-.86,1.26,-.05,0,Math.PI/2,0,null),u(d,new me(.84,.58),.86,1.26,-.05,0,Math.PI/2,0,null);const _=new ut(this._mergeGeometriesSimple(h),r);_.castShadow=!0,_.receiveShadow=!0,h.forEach(x=>x.dispose());const m=new ut(this._mergeGeometriesSimple(d),a);d.forEach(x=>x.dispose()),o.add(_,m);const f=this.models?.getGeometry("tyre"),v=this.models?.getMaterial("tyre")||r,y=[{x:-.98,y:.02,z:1.25,ry:Math.PI/2},{x:.98,y:.02,z:1.25,ry:-Math.PI/2},{x:-.98,y:.02,z:-1.22,ry:Math.PI/2},{x:.98,y:.02,z:-1.22,ry:-Math.PI/2},{x:0,y:.48,z:-1.96,ry:0}];if(f){const x=new ke(f,v,y.length);x.castShadow=!0,y.forEach((R,A)=>{this._dummy.position.set(R.x,R.y,R.z),this._dummy.rotation.set(0,R.ry,0),this._dummy.scale.set(.82,.82,1.05),this._dummy.updateMatrix(),x.setMatrixAt(A,this._dummy.matrix)}),x.instanceMatrix.needsUpdate=!0,o.add(x)}this.group.add(o),this.physics.addOBBCollider(t,e,1.02,2.08,l,n-.5,n+1.48,n+.96,!0)}_createTatteredCampTent(){const t=qt+10.6,e=zt+5.8,n=ae(t,e),i=this.tex.loadPBRSet("desert_wood",1,1),r=new xe({map:i.map,color:12100488}),a=this.tex.loadPBRSet("tattered_fabric",2,2);this.tentTimeUniform={value:0},this.tentStormUniform={value:0};const o=new xe({map:a.map,side:ve,color:13942426});o.onBeforeCompile=p=>{p.uniforms.uTime=this.tentTimeUniform,p.uniforms.uStorm=this.tentStormUniform,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uStorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           float spd = 4.2 + uStorm * 7.5;
           float amp = 0.042 + uStorm * 0.11;
           transformed.y += sin(uTime * spd + position.x * 2.5 + position.z * 2.0) * amp;`)};const l=new Ce;l.position.set(t,n,e),l.rotation.y=-.5;const h=[];[[-1.6,-1.2],[1.6,-1.2],[-1.6,1.2],[1.6,1.2]].forEach(([p,g])=>{const _=new pe(.05,.06,2.35,5);_.translate(p,1.15,g),h.push(_)});const d=new ut(this._mergeGeometriesSimple(h),r);d.castShadow=!1,h.forEach(p=>p.dispose()),l.add(d);const u=new me(3.5,2.7,6,4);u.rotateX(-Math.PI/2+.14);const c=new ut(u,o);c.position.set(0,2.28,0),c.castShadow=!ue,l.add(c),this.tentBarrelWorldPos.set(t-.55,n,e-.55),this.group.add(l),this.physics.addBoxCollider(t-.85,t-.15,e-.85,e-.15,n,n+1.05,!0)}_createSoaringHawks(){const t=new ln({color:2825490,side:ve}),e=new jn(.11,.72,4);e.rotateX(Math.PI/2);const n=new ge;n.setAttribute("position",new Qt(new Float32Array([0,0,.16,1.18,.06,-.05,0,0,-.22]),3)),n.computeVertexNormals();const i=new ge;i.setAttribute("position",new Qt(new Float32Array([0,0,.16,-1.18,.06,-.05,0,0,-.22]),3)),i.computeVertexNormals();const r=this._mergeGeometriesSimple([e,n,i]);this.hawkInst=new ke(r,t,4),this.hawkInst.frustumCulled=!1,this.group.add(this.hawkInst);for(let a=0;a<4;a++)this.hawks.push({centerX:a%2===0?-4:10,centerZ:zt+(a-1.5)*8,radius:19+a*7.5,altitude:17+a*4.2,speed:.24+a*.04,phase:a*1.65})}_createRollingTumbleweeds(){const t=[],e=[[0,0,0],[0,Math.PI/3,0],[0,Math.PI*2/3,0],[Math.PI/2,.3,0],[Math.PI/3,.4,Math.PI/4],[-Math.PI/3,-.4,-Math.PI/4]];for(const[r,a,o]of e){const l=new me(.76,.76),h=new Yt().makeRotationFromEuler(new Oe(r,a,o));l.applyMatrix4(h),t.push(l)}const n=this._mergeGeometriesSimple(t);t.forEach(r=>r.dispose());const i=new xe({map:this.tex.createTwigClusterTexture(),alphaTest:.35,side:ve,color:12756092});this.tumbleweedInst=new ke(n,i,4),this.tumbleweedInst.frustumCulled=!1,this.group.add(this.tumbleweedInst);for(let r=0;r<4;r++){const a=-34+r*22,o=-4+r%3*14;this.tumbleweeds.push({x:a,z:o,rotX:0,rotZ:0,speed:1.85+r%3*.6,phase:r*1.4})}}_createDesertLizards(){const t=[],e=new jn(.06,.34,5);e.rotateX(Math.PI/2);const n=new jn(.035,.32,4);n.rotateX(-Math.PI/2),n.translate(0,0,-.28),t.push(e,n);const i=this._mergeGeometriesSimple(t),r=new xe({color:10913111});this.lizardInst=new ke(i,r,3),this.lizardInst.frustumCulled=!1,this.group.add(this.lizardInst),[{x:-9.5,z:9.2,yaw:.8},{x:-4.2,z:-2.5,yaw:-1.2},{x:7.5,z:-8,yaw:2.1}].forEach(o=>{this.lizards.push({x:o.x,z:o.z,yaw:o.yaw,speed:0})})}_createFootprintTrail(){const t=new me(.3,.58);t.rotateX(-Math.PI/2);const e=new ln({map:this.tex.createFootprintTexture(),transparent:!0,depthWrite:!1,opacity:.65}),n=28,i=new ke(t,e,n),r=this._dummy;for(let a=0;a<n;a++){const o=a/(n-1),l=xt.lerp(-10.5,0,o)+Math.sin(o*Math.PI)*-2.2,h=xt.lerp(13.8,zt+10.6,o),d=(a%2===0?1:-1)*.16,u=l+d,c=ae(u,h)+.03;r.position.set(u,c,h),r.rotation.set(0,Math.atan2(10.5,zt+10.6-13.8),0),r.scale.set(1,1,1),r.updateMatrix(),i.setMatrixAt(a,r.matrix)}i.instanceMatrix.needsUpdate=!0,this.group.add(i)}_createGPUDustParticles(){const e=new ge,n=new Float32Array(320*3),i=new Float32Array(320*3);for(let a=0;a<320;a++)n[a*3]=(Math.random()-.5)*56,n[a*3+1]=.2+Math.random()*3.8,n[a*3+2]=(Math.random()-.5)*56,i[a*3]=Math.random()*6.28,i[a*3+1]=.7+Math.random()*1.3,i[a*3+2]=Math.random();e.setAttribute("position",new Qt(n,3)),e.setAttribute("aSeed",new Qt(i,3)),this.dustMaxCount=320,this.baseDustCount=220,this.dustUniforms={uTime:{value:0},uStorm:{value:0},uPlayerPos:{value:new L},uColor:{value:new at("#efd3a8")},uMap:{value:this.tex.createDustParticleTexture()}};const r=new Ue({transparent:!0,depthWrite:!1,uniforms:this.dustUniforms,vertexShader:`
        attribute vec3 aSeed;
        uniform float uTime;
        uniform float uStorm;
        uniform vec3 uPlayerPos;
        void main() {
          vec3 p = position;
          float speed = (2.6 + uStorm * 10.5) * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 28.0, 56.0) - 28.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.42 - uPlayerPos.z + 28.0, 56.0) - 28.0 + uPlayerPos.z;
          p.y += sin(uTime * (1.3 + uStorm * 2.4) + aSeed.x) * (0.25 + uStorm * 0.45);
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          float sizeMult = 1.0 + uStorm * 0.85;
          gl_PointSize = clamp((110.0 * sizeMult) / max(1.0, -mvPosition.z), 2.0, 15.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uStorm;
        uniform sampler2D uMap;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.05) discard;
          float op = mix(0.28, 0.62, uStorm);
          gl_FragColor = vec4(uColor * tex.rgb, tex.a * op);
        }
      `});this.dustPoints=new dh(e,r),this.dustPoints.frustumCulled=!1,this.group.add(this.dustPoints)}applySettings(t){this.baseDustCount=Math.min(this.dustMaxCount,t.dustCount),this.dustPoints&&this.dustPoints.geometry.setDrawRange(0,this.baseDustCount)}setStormIntensity(t){if(this.stormIntensity=Math.max(0,Math.min(1,t)),this.dustPoints){const e=Math.round(xt.lerp(this.baseDustCount,this.dustMaxCount,this.stormIntensity));this.dustPoints.geometry.setDrawRange(0,e)}}update(t,e,n,i){const r=this._dummy,a=this.stormIntensity;if(this.palmTimeUniform&&(this.palmTimeUniform.value=e),this.palmStormUniform&&(this.palmStormUniform.value=a),this.tentTimeUniform&&(this.tentTimeUniform.value=e),this.tentStormUniform&&(this.tentStormUniform.value=a),this.dustUniforms.uTime.value=e,this.dustUniforms.uStorm.value=a,this.dustUniforms.uPlayerPos.value.copy(n),this._tmpCol.lerpColors(this._dustNoonCol,this._dustAsrCol,Math.pow(i,1.2)),a>.001&&this._tmpCol.lerp(Ht.horizonStorm,a*.75),this.dustUniforms.uColor.value.copy(this._tmpCol),this._faunaAccum+=t,!(!this._lizardsInitialized||this._faunaAccum>=.033))return;const l=this._lizardsInitialized?this._faunaAccum:t;this._faunaAccum=0;for(let u=0;u<this.hawks.length;u++){const c=this.hawks[u],p=e*c.speed+c.phase,g=c.centerX+Math.cos(p)*c.radius,_=c.centerZ+Math.sin(p)*c.radius,m=c.altitude+a*14+Math.sin(e*.7+c.phase)*1.4;r.position.set(g,m,_),r.rotation.set(0,-p,.24),r.scale.set(1,1+Math.sin(e*5+c.phase)*.15,1),r.updateMatrix(),this.hawkInst.setMatrixAt(u,r.matrix)}this.hawkInst.instanceMatrix.needsUpdate=!0;const h=1+a*2.2;for(let u=0;u<this.tumbleweeds.length;u++){const c=this.tumbleweeds[u],p=c.speed*h*l;c.x+=p,c.z+=p*.34,c.x-n.x>46&&(c.x-=92),c.z-n.z>46&&(c.z-=92);const g=Math.abs(Math.sin(e*(3.8+a*3)+c.phase))*(.16+a*.22),_=ae(c.x,c.z)+.34+g;c.rotZ-=p*2.2,c.rotX+=p*.85,r.position.set(c.x,_,c.z),r.rotation.set(c.rotX,0,c.rotZ),r.scale.set(1,1,1),r.updateMatrix(),this.tumbleweedInst.setMatrixAt(u,r.matrix)}this.tumbleweedInst.instanceMatrix.needsUpdate=!0;let d=!this._lizardsInitialized;for(let u=0;u<this.lizards.length;u++){const c=this.lizards[u],p=c.x-n.x,g=c.z-n.z;if(p*p+g*g<33.64?(c.yaw=Math.atan2(p,g),c.speed=4.8):c.speed>.05?c.speed*=Math.max(0,1-l*3.5):c.speed=0,c.speed>.05||!this._lizardsInitialized){c.speed>.05&&(c.x+=Math.sin(c.yaw)*c.speed*l,c.z+=Math.cos(c.yaw)*c.speed*l);const m=ae(c.x,c.z)+.04;r.position.set(c.x,m,c.z),r.rotation.set(0,c.yaw,Math.sin(e*18)*(c.speed*.03)),r.scale.set(1,1,1),r.updateMatrix(),this.lizardInst.setMatrixAt(u,r.matrix),d=!0}}d&&(this._lizardsInitialized=!0,this.lizardInst.instanceMatrix.needsUpdate=!0)}_mergeGeometriesSimple(t){let e=0,n=0,i=!0,r=!0;for(const g of t)e+=g.attributes.position.count,n+=g.index?g.index.count:g.attributes.position.count,g.attributes.uv||(i=!1),g.attributes.color||(r=!1);const a=new Float32Array(e*3),o=new Float32Array(e*3),l=i?new Float32Array(e*2):null,h=r?new Float32Array(e*3):null,d=new Uint32Array(n);let u=0,c=0;for(const g of t){const _=g.attributes.position,m=g.attributes.normal;if(a.set(_.array,u*3),o.set(m.array,u*3),i&&g.attributes.uv&&l.set(g.attributes.uv.array,u*2),r&&g.attributes.color&&h.set(g.attributes.color.array,u*3),g.index){const f=g.index.array;for(let v=0;v<f.length;v++)d[c+v]=f[v]+u;c+=f.length}else{for(let f=0;f<_.count;f++)d[c+f]=u+f;c+=_.count}u+=_.count}const p=new ge;return p.setAttribute("position",new Qt(a,3)),p.setAttribute("normal",new Qt(o,3)),l&&p.setAttribute("uv",new Qt(l,2)),h&&p.setAttribute("color",new Qt(h,3)),p.setIndex(new Qt(d,1)),p}}function Wi(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ge;let h=0;for(let d=0;d<s.length;++d){const u=s[d];let c=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,d),h+=p}}if(e){let d=0;const u=[];for(let c=0;c<s.length;++c){const p=s[c].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+d);d+=s[c].attributes.position.count}l.setIndex(u)}for(const d in r){const u=qo(r[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(const d in a){const u=a[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let c=0;c<u;++c){const p=[];for(let _=0;_<a[d].length;++_)p.push(a[d][_][c]);const g=qo(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(g)}}return l}function qo(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){const d=s[h];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}const a=new t(r),o=new Qt(a,e,n);let l=0;for(let h=0;h<s.length;++h){const d=s[h];if(d.isInterleavedBufferAttribute){const u=l/e;for(let c=0,p=d.count;c<p;c++)for(let g=0;g<e;g++){const _=d.getComponent(c,g);o.setComponent(c+u,g,_)}}else a.set(d.array,l);l+=d.count*e}return i!==void 0&&(o.gpuType=i),o}class vm{constructor(t,e,n,i,r,a=null){this.scene=t,this.tex=e,this.models=n,this.physics=i,this.jeepWorldPos=r,this.tentBarrelWorldPos=a,this.group=new Ce,this.group.position.set(qt,xn,zt),this.scene.add(this.group),this.interactables=[],this.activeMissionId=null,this.windTurbine=null,this.windVane=null,this.awningTimeUniform={value:0},this.awningStormUniform={value:0},this.stormIntensity=0,this.radioGlowMat=null,this.radioLight=null,this.hatchMesh=null,this.hatchTargetAngle=0,this.switchLever=null,this.switchTargetAngle=.6,this.compassNeedle=null,this.godRayMat=null,this._rayNoonCol=new at("#fff0c4"),this._rayAsrCol=new at("#ffae52"),this._createMaterials(),this._buildMainEstate(),this._buildCourtyardWalls(),this._buildGrandAwning(),this._buildWindVaneTower(),this._buildInteriorRooms(),this._buildBackCourtyardAndWell(),this._buildStoryClues(),this._optimizeStaticBatches()}_createMaterials(){const t=this.tex.loadPBRSet("adobe_wall",1,1);this.adobeMat=ue?new xe({map:t.map,normalMap:t.normalMap,normalScale:new bt(.45,.45),vertexColors:!0,color:15917768}):new nn({map:t.map,normalMap:t.normalMap,normalScale:new bt(.45,.45),roughness:.94,metalness:.01,vertexColors:!0,color:15917768}),this.adobeMat.name="adobe_wall_v4",this.adobeMat.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vAdobeWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
           float _al = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_al), diffuseColor.rgb, 0.62) * 1.38 + vec3(0.035, 0.028, 0.018);
           float patch1 = sin(vAdobeWorldPos.x * 0.55 + vAdobeWorldPos.y * 0.8) * cos(vAdobeWorldPos.z * 0.55 - vAdobeWorldPos.y * 0.6);
           float groundDust = smoothstep(0.95, 0.02, vAdobeWorldPos.y);
           vec3 plasterVariation = mix(vec3(0.92, 0.89, 0.84), vec3(1.04, 1.01, 0.96), patch1 * 0.5 + 0.5);
           diffuseColor.rgb *= plasterVariation;
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.32, 0.19), groundDust * 0.34);`)},qn(this.adobeMat,{saturation:.86,contrast:1.02}),this.ceilingMat=new xe({color:Ht.ceilingPlaster}),this.ceilingMat.name="interior_plaster_ceiling",this.ceilingMat.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCeilPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vCeilPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCeilPos;`).replace("#include <color_fragment>",`#include <color_fragment>
           float mottle = sin(vCeilPos.x * 0.9 + vCeilPos.z * 0.7) * cos(vCeilPos.x * 0.4 - vCeilPos.z * 1.1);
           diffuseColor.rgb *= mix(0.91, 1.03, mottle * 0.5 + 0.5);`)};const e=this.tex.loadPBRSet("desert_wood",1.6,1);this.woodMat=ue?new xe({map:e.map,color:12757902}):new nn({map:e.map,normalMap:e.normalMap,normalScale:new bt(.85,.85),roughness:.88,metalness:.03,color:12757902});const n=this.tex.loadPBRSet("rusted_metal",1.5,1.5);this.metalMat=new nn({map:n.map,normalMap:ue?null:n.normalMap,normalScale:new bt(.9,.9),roughness:.76,metalness:.45,color:10916992});const i=this.tex.loadPBRSet("floor_tiles",4.8,4);this.floorMat=ue?new xe({map:i.map,normalMap:i.normalMap,normalScale:new bt(.8,.8),vertexColors:!0,color:13219996}):new nn({map:i.map,normalMap:i.normalMap,normalScale:new bt(.85,.85),roughness:.9,metalness:.02,vertexColors:!0,color:13219996}),qn(this.floorMat,{saturation:.88,contrast:1.03}),this.hatchFrameMat=new xe({map:i.map,color:8088406});const r=this.tex.loadPBRSet("tattered_fabric",2.4,2);this.fabricMat=new xe({map:r.map,side:ve,color:13811876}),this.fabricMat.onBeforeCompile=l=>{l.uniforms.uTime=this.awningTimeUniform,l.uniforms.uStorm=this.awningStormUniform,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uStorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           float spd = 3.5 + uStorm * 7.5;
           float amp = 0.042 + uStorm * 0.12;
           transformed.y += sin(uTime * spd + position.x * 1.8 + position.z * 1.5) * amp;`)},this.rugMat=new xe({color:16777215}),this.rugMat.name="bedouin_sadu_rug",this.rugMat.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRugUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vRugUv = uv;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRugUv;`).replace("#include <color_fragment>",`#include <color_fragment>
           vec2 p = vRugUv;
           vec2 c = abs(p - 0.5) * 2.0;
           float weave = 0.92 + 0.08 * sin(p.x * 240.0) * sin(p.y * 160.0);

           vec3 colCrimson = vec3(0.28, 0.055, 0.032);
           vec3 colCream   = vec3(0.56, 0.47, 0.34);
           vec3 colOchre   = vec3(0.44, 0.25, 0.075);
           vec3 colCharcoal= vec3(0.055, 0.048, 0.044);

           vec3 col = colCrimson;
           float outerBorder = step(0.84, max(c.x, c.y));
           float innerBorder = step(0.74, max(c.x, c.y)) * (1.0 - outerBorder);
           col = mix(col, colCharcoal, outerBorder * 0.85);
           col = mix(col, colCream, innerBorder);

           vec2 tile = fract(vec2(p.x * 5.0, p.y * 3.0)) - 0.5;
           float diamond = abs(tile.x) + abs(tile.y);
           float innerMedallion = (1.0 - step(0.74, max(c.x, c.y)));
           if (innerMedallion > 0.5) {
             float dOuter = smoothstep(0.42, 0.38, diamond);
             float dMid   = smoothstep(0.29, 0.25, diamond);
             float dCore  = smoothstep(0.14, 0.10, diamond);
             col = mix(col, colCream, dOuter);
             col = mix(col, colOchre, dMid);
             col = mix(col, colCharcoal, dCore);
           }

           float chev = step(0.5, fract((p.x + p.y) * 18.0));
           col = mix(col, colOchre, innerBorder * chev * 0.55);

           float dustWear = sin(p.x * 7.0 + p.y * 5.0) * 0.5 + 0.5;
           col = mix(col, vec3(0.38, 0.30, 0.19), dustWear * 0.28);
           diffuseColor.rgb = col * weave;`)};const a=this.tex.loadPBRSet("sandstone_rock",2,2);this.stoneMat=new xe({map:a.map,color:12297350});const o=this.tex.loadPBRSet("sand",2,2);this.sandDriftMat=new xe({map:o.map,color:Ht.sandTintNoon}),this.darkMetalMat=new nn({color:3879209,roughness:.68,metalness:.65}),this.brassMat=new nn({color:12950344,roughness:.38,metalness:.8}),this.paperMat=new xe({color:14864552,side:ve})}_createBakedBox(t,e,n,i=.74,r=.99){const a=new Ct(t,e,n,1,1,1),o=a.attributes.position,l=a.attributes.normal,h=a.attributes.uv,d=new Float32Array(o.count*3),u=1.45;for(let c=0;c<o.count;c++){const p=o.getX(c),g=o.getY(c),_=o.getZ(c),m=Math.abs(l.getX(c));Math.abs(l.getY(c))>.5?h.setXY(c,(p+t*.5)/u,(_+n*.5)/u):m>.5?h.setXY(c,(_+n*.5)/u,(g+e*.5)/u):h.setXY(c,(p+t*.5)/u,(g+e*.5)/u);const v=xt.clamp((g+e*.5)/Math.max(.001,e),0,1),y=xt.lerp(i,r,Math.pow(v,.55));d[c*3]=y,d[c*3+1]=y*.985,d[c*3+2]=y*.965}return h.needsUpdate=!0,a.setAttribute("color",new Qt(d,3)),a}_addBox(t,e,n,i,r,a,o=!0,l=this.adobeMat,h=!0,d=null){const u=l===this.adobeMat?this._createBakedBox(i,r,a):new Ct(i,r,a),c=new ut(u,l);if(c.position.set(t,e,n),c.castShadow=h,c.receiveShadow=!0,this.group.add(c),o){const p=qt+t,g=zt+n;this.physics.addBoxCollider(p-i*.5,p+i*.5,g-a*.5,g+a*.5,e-r*.5,e+r*.5,d)}return c}_buildMainEstate(){const n=new Ct(14.8,.24,12.2,4,1,4),i=n.attributes.position,r=new Float32Array(i.count*3);for(let f=0;f<i.count;f++){const y=1-Math.max(Math.abs(i.getX(f))/7.4,Math.abs(i.getZ(f))/6.1)*.26;r[f*3]=y,r[f*3+1]=y*.98,r[f*3+2]=y*.95}n.setAttribute("color",new Qt(r,3));const a=new ut(n,this.floorMat);a.position.set(0,.04,0),a.receiveShadow=!0,this.group.add(a),this.physics.addFloorZone(qt-7.3,qt+7.3,zt-6,zt+6.4,.16,"stone"),this.physics.addInteriorZone(qt-7.1,qt+7.1,zt-5.9,zt+5.9,-.5,4.6);const o=new ut(new Ct(3.4,.18,1.6),this.stoneMat);o.position.set(0,.05,6.85),o.receiveShadow=!0,this.group.add(o),this._addBox(-6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(-4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(-4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(0,3.68,6.1,2.5,1.35,.56,!1),this._addBox(0,2.98,6.1,2.75,.18,.66,!1,this.woodMat),this._addBox(-1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat),this._addBox(1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat);const l=new ut(new Ct(1.05,2.75,.08),this.woodMat);l.position.set(-1.12,1.52,5.45),l.rotation.y=1.18,this.group.add(l),this._addBox(-7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(-7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(-4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(0,3.65,-6.1,2.3,1.4,.56,!1),this._addBox(0,2.92,-6.1,2.5,.16,.64,!1,this.woodMat),this._addBox(-7.35,4.35/2,3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,4.35/2,-3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,.65,0,.56,1.3,2.8,!0,this.adobeMat,!0,!1),this._addBox(-7.35,3.55,0,.56,1.6,2.8,!1),this._addBox(-7.35,1.32,0,.66,.12,2.9,!1,this.woodMat),this._addBox(-7.35,2.75,0,.66,.12,2.9,!1,this.woodMat),this._addBox(7.35,4.35/2,3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,4.35/2,-3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,.9,0,.56,1.8,1.8,!0,this.adobeMat,!0,!1),this._addBox(7.35,3.65,0,.56,1.4,1.8,!1),this._addBox(-2.3,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(-2.3,3.65,2.2,.42,1.4,2.6,!1),this._addBox(-2.3,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(2.6,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(2.6,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(2.6,3.65,2.2,.42,1.4,2.6,!1),this._addBox(2.6,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(0,4.46,0,15.2,.3,12.6,!1);const h=new ut(new me(14.6,12),this.ceilingMat);h.rotation.x=Math.PI/2,h.position.set(0,4.29,0),h.receiveShadow=!0,this.group.add(h),this._addBox(-4.2,4.88,6.1,6.4,.56,.38,!1),this._addBox(4.4,4.82,6.1,6,.46,.38,!1),this._addBox(-7.4,4.88,0,.38,.56,12.6,!1),this._addBox(7.4,4.82,-1.2,.38,.44,10,!1),this._addBox(0,4.92,-6.1,15.2,.62,.38,!1);const d=new pe(.11,.12,16.4,5);d.rotateZ(Math.PI/2);for(let f=-4.8;f<=4.8;f+=1.9){const v=new ut(d,this.woodMat);v.position.set(0,4.16,f),v.castShadow=!1,this.group.add(v)}this._addBox(-2.4,5.9,-2,5.6,2.6,4.8,!1),this._addBox(-2.4,7.35,-4.25,5.6,.36,.32,!1),this._addBox(-2.4,5.65,.45,1.25,1.8,.16,!1,this.darkMetalMat,!1);const u=new Ce;u.position.set(7.72,0,2.6),u.rotation.z=.14;const c=new ut(new pe(.035,.04,4.6,5),this.woodMat);c.position.set(0,2.3,-.28);const p=new ut(new pe(.035,.04,4.6,5),this.woodMat);p.position.set(0,2.3,.28),u.add(c,p);for(let f=.45;f<=4.2;f+=.45){const v=new ut(new pe(.024,.024,.58,5),this.woodMat);v.rotation.x=Math.PI/2,v.position.set(0,f,0),u.add(v)}this.group.add(u),[{x:-.2,y:.1,z:5.1,sx:2.2,sy:.32,sz:2.6},{x:-6.4,y:.12,z:-5.1,sx:1.8,sy:.38,sz:1.8},{x:6.3,y:.12,z:5,sx:1.6,sy:.34,sz:1.7},{x:-1.6,y:.12,z:-5.3,sx:1.5,sy:.28,sz:1.4}].forEach(f=>{const v=new jn(1,1,8);v.scale(f.sx,f.sy,f.sz);const y=new ut(v,this.sandDriftMat);y.position.set(f.x,f.y,f.z),y.receiveShadow=!0,this.group.add(y)});const _=new me(19.5,16.8);_.rotateX(-Math.PI/2);const m=new ut(_,new ln({map:this.tex.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:.38}));m.position.set(0,.03,.4),this.group.add(m)}_buildCourtyardWalls(){this._addBox(-5.6,.95,10.2,6.8,1.9,.48,!0,this.adobeMat,!0,!0),this._addBox(5.6,.85,10.2,6.8,1.7,.48,!0,this.adobeMat,!0,!0),this._addBox(-2.25,1.45,10.2,.72,2.9,.72,!0,this.adobeMat,!0,!1),this._addBox(2.25,1.35,10.2,.72,2.7,.72,!0,this.adobeMat,!0,!1),this._addBox(0,2.85,10.2,5.2,.22,.42,!1,this.woodMat),this._addBox(-8.9,.85,8.2,.46,1.7,4.2,!0,this.adobeMat,!0,!0),this._addBox(8.9,.75,8.2,.46,1.5,4.2,!0,this.adobeMat,!0,!0)}_buildGrandAwning(){[[-6.6,9],[-3.8,9],[-1.5,9],[1.6,9]].forEach(([i,r])=>{const a=new ut(new pe(.1,.12,2.85,5),this.woodMat);a.position.set(i,1.42,r),a.castShadow=!0,this.group.add(a),this.physics.addCylinderCollider(qt+i,zt+r,.22,3)}),this._addBox(-2.5,2.82,9,8.5,.16,.16,!1,this.woodMat);for(let i=-6.4;i<=1.6;i+=1.3){const r=new ut(new Ct(.1,.11,3.1),this.woodMat);r.position.set(i,3.08,7.6),r.rotation.x=.18,this.group.add(r)}const e=new me(8.2,3,8,4);e.rotateX(-Math.PI/2+.18);const n=e.attributes.position;for(let i=0;i<n.count;i++){const r=Math.abs(Math.sin(n.getX(i)*1.1))*-.16;n.setY(i,n.getY(i)+r)}e.computeVertexNormals(),this.awningCloth=new ut(e,this.fabricMat),this.awningCloth.position.set(-2.5,3.12,7.55),this.awningCloth.castShadow=!0,this.group.add(this.awningCloth)}_buildWindVaneTower(){const t=new Ce;t.position.set(3.8,4.6,-2.4);const e=7.4;[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]].forEach(([h,d])=>{const u=new ut(new pe(.045,.07,e,5),this.metalMat);u.position.set(h*.5,e*.5,d*.5),u.rotation.z=h>0?.095:-.095,u.rotation.x=d>0?-.095:.095,u.castShadow=!0,t.add(u)});for(let h=1.2;h<e-.8;h+=1.6){const d=1.48*(1-h/e*.72),u=new ut(new Ct(d,.05,.05),this.darkMetalMat);u.position.set(0,h,d*.5);const c=u.clone();c.position.set(0,h,-d*.5);const p=new ut(new Ct(.05,.05,d),this.darkMetalMat);p.position.set(d*.5,h,0);const g=p.clone();g.position.set(-d*.5,h,0),t.add(u,c,p,g)}this.windVane=new Ce,this.windVane.position.set(0,e+.2,0);const i=new Ct(2.1,.06,.06);i.translate(.45,0,0);const r=new Ct(1.05,.72,.04);r.translate(1.42,.05,0);const a=new ut(Wi([i,r],!1),this.metalMat);i.dispose(),r.dispose(),this.windVane.add(a);const o=[];for(let h=0;h<8;h++){const d=h/8*Math.PI*2,u=new Ct(.03,1,.2),c=new Yt;c.makeRotationFromEuler(new Oe(d,.32,0)),c.setPosition(0,Math.cos(d)*.62,Math.sin(d)*.62),u.applyMatrix4(c),o.push(u)}const l=Wi(o,!1);o.forEach(h=>h.dispose()),this.windTurbine=new ut(l,this.metalMat),this.windTurbine.position.set(-.58,0,0),this.windVane.add(this.windTurbine),t.add(this.windVane),this.group.add(t)}_buildInteriorRooms(){const t=new ut(new me(3.6,2.4),this.rugMat);t.rotation.x=-Math.PI/2,t.position.set(.1,.175,2.1),t.receiveShadow=!0,this.group.add(t);const e=new ut(new Ct(1.68,.12,1.68),new ln({color:722692}));e.position.set(0,.13,-1.6),this.group.add(e),this._addBox(-.94,.2,-1.6,.18,.09,2.06,!1,this.hatchFrameMat,!1),this._addBox(.94,.2,-1.6,.18,.09,2.06,!1,this.hatchFrameMat,!1),this._addBox(0,.2,-2.54,1.7,.09,.18,!1,this.hatchFrameMat,!1),this._addBox(0,.2,-.66,1.7,.09,.18,!1,this.hatchFrameMat,!1),this.hatchMesh=new Ce,this.hatchMesh.position.set(0,.24,-2.45);const n=new ut(new Ct(1.72,.08,1.72),this.woodMat);n.position.set(0,0,.85),n.receiveShadow=!0;const i=new Ct(1.76,.1,.14);i.translate(0,.01,.35);const r=new Ct(1.76,.1,.14);r.translate(0,.01,1.35);const a=new Ct(.14,.1,1.76);a.translate(0,.01,.85);const o=new ut(Wi([i,r,a],!1),this.metalMat);i.dispose(),r.dispose(),a.dispose();const l=new ut(new Ta(.14,.028,6,12),this.brassMat);l.rotation.x=Math.PI/2,l.position.set(0,.07,1.48),this.hatchMesh.add(n,o,l),this.group.add(this.hatchMesh);const h=this.models?.getGeometry("crate"),d=this.models?.getMaterial("crate");if(h&&d){const b=new ke(h,d,2);b.receiveShadow=!0;const C=new Me;C.position.set(1.45,.16,-4.85),C.rotation.set(0,.28,0),C.scale.setScalar(1.35),C.updateMatrix(),b.setMatrixAt(0,C.matrix),C.position.set(-3.2,.02,7.6),C.rotation.set(0,0,0),C.scale.setScalar(1.15),C.updateMatrix(),b.setMatrixAt(1,C.matrix),b.instanceMatrix.needsUpdate=!0,this.group.add(b)}else this._addBox(1.45,.52,-4.85,1.1,.75,.75,!1,this.woodMat),this._addBox(-3.2,.26,7.6,.85,.5,.72,!1,this.woodMat);this.physics.addBoxCollider(qt+.8,qt+2.1,zt-5.3,zt-4.4,.16,.88,!0);const u=this.models?.createMesh("jug",.55);u&&(u.position.set(1.35,.73,-4.82),u.castShadow=!1,this.group.add(u));const c=this.models?.createMesh("table",2.25);c?(c.position.set(-5.35,.16,-.4),c.castShadow=!1,c.receiveShadow=!0,this.group.add(c)):this._addBox(-5.35,.96,-.4,2.1,.1,1.05,!1,this.woodMat),this.physics.addBoxCollider(qt-6.45,qt-4.25,zt-.98,zt+.18,.16,1.08,!0);const p=this.models?.createMesh("chair",.58);p&&(p.position.set(-4.65,.16,.78),p.rotation.y=-2.4,p.castShadow=!1,this.group.add(p));const g=this.models?.createMesh("lantern",.13);g&&(g.position.set(-6.05,1.06,-.62),g.castShadow=!1,this.group.add(g)),this._addBox(-4.8,2.25,-5.75,2.4,1.45,.08,!1,this.woodMat,!1),[{x:-4.9,y:2.3,z:-5.69,rx:0,ry:0,rz:.06,w:.52,h:.38},{x:-4.2,y:2.18,z:-5.69,rx:0,ry:0,rz:-.08,w:.42,h:.46},{x:-5.55,y:2.22,z:-5.69,rx:0,ry:0,rz:.03,w:.45,h:.34},{x:-4.85,y:1.07,z:-.45,rx:-Math.PI/2,ry:0,rz:.4,w:.32,h:.24},{x:-5.1,y:.175,z:.45,rx:-Math.PI/2,ry:0,rz:1.1,w:.34,h:.25}].forEach(b=>{const C=new ut(new me(b.w,b.h),this.paperMat);C.position.set(b.x,b.y,b.z),C.rotation.set(b.rx,b.ry,b.rz),this.group.add(C)}),this._addBox(-2.85,1.35,-3.4,.62,2.4,2.2,!0,this.metalMat,!1,!1),this.godRayUniforms={uColor:{value:new at("#ffdfa0")},uOpacity:{value:.15}},this.godRayMat=new Ue({transparent:!0,depthWrite:!1,side:ve,blending:xr,uniforms:this.godRayUniforms,vertexShader:`
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
      `});const m=new pe(.72,1.35,3.8,12,1,!0);m.rotateZ(-.86),m.translate(-5.65,1.65,0);const f=new pe(.72,1.35,3.8,12,1,!0);f.scale(.68,.78,.68),f.rotateX(-.82),f.translate(-4.4,1.55,4.4);const v=new ut(Wi([m,f],!1),this.godRayMat);m.dispose(),f.dispose(),this.group.add(v),this._addBox(5.2,.6,-4.4,2.4,.92,1.05,!0,this.woodMat,!1,!0),this._addBox(6.4,1.3,1.8,.85,2.25,1.9,!0,this.metalMat,!1,!1);const y=new Ce;y.position.set(5.15,1.32,-4.35),y.rotation.y=-.15;const x=new ut(new Ct(.84,.48,.44),this.darkMetalMat);y.add(x),this.radioGlowMat=new nn({color:3877914,emissive:new at("#ff8c2b"),emissiveIntensity:.04,roughness:.3});const R=new ut(new me(.48,.14),this.radioGlowMat);R.position.set(-.1,.06,.225),y.add(R);for(let b=0;b<2;b++){const C=new ut(new pe(.045,.045,.05,8),this.brassMat);C.rotation.x=Math.PI/2,C.position.set(.24,-.05+b*.14,.23),y.add(C)}const A=new ut(new pe(.008,.012,1.3,4),this.darkMetalMat);A.position.set(.32,.82,-.05),y.add(A),this.group.add(y),this.radioLight=new yl(16748086,0,7.5,2),this.radioLight.position.set(qt+5.15,xn+1.5,zt-3.9),this.scene.add(this.radioLight)}_buildBackCourtyardAndWell(){const t=this.models?.getGeometry("barrel"),e=this.models?.getMaterial("barrel")||this.metalMat,n=[[8.3,2.2,.72],[8.6,1.15,.72],[-8.3,4.4,.72],[5.8,-7.8,.72]];if(this.tentBarrelWorldPos&&n.push([this.tentBarrelWorldPos.x-qt,this.tentBarrelWorldPos.z-zt,.65]),t){const _=new ke(t,e,n.length);_.castShadow=!0;const m=new Me;n.forEach(([f,v,y],x)=>{const R=ae(qt+f,zt+v)-xn;m.position.set(f,R,v),m.rotation.set(0,x*1.1,0),m.scale.setScalar(y),m.updateMatrix(),_.setMatrixAt(x,m.matrix),x<4&&this.physics.addCylinderCollider(qt+f,zt+v,.42,R+1.15)}),_.instanceMatrix.needsUpdate=!0,this.group.add(_)}const i=-6.8,r=-10.4,a=ae(qt+i,zt+r)-xn,o=new Ce;o.position.set(i,a,r);const l=new ut(new pe(1.3,1.42,1.05,10,1,!0),this.stoneMat);l.position.y=.5,l.castShadow=!0;const h=new ut(new Sa(1.22,10),new ln({color:591364}));h.rotation.x=-Math.PI/2,h.position.y=.42;const d=new ut(new Ct(.14,2.3,.14),this.woodMat);d.position.set(-1.26,1.15,0);const u=new ut(new Ct(.14,1.85,.14),this.woodMat);u.position.set(1.26,.92,0),u.rotation.z=-.15;const c=new ut(new pe(.06,.06,2.7,5),this.woodMat);c.rotation.z=Math.PI/2-.12,c.position.set(0,2.02,0),o.add(l,h,d,u,c),this.group.add(o),this.physics.addCylinderCollider(qt+i,zt+r,1.5,a+1.8);const p=new Ce;p.position.set(4.1,1.48,-6.58);const g=new ut(new Ct(.56,.72,.32),this.metalMat);g.castShadow=!0,this.switchLever=new ut(new Ct(.08,.34,.18),this.brassMat),this.switchLever.position.set(.1,.04,-.2),this.switchLever.rotation.x=.6,p.add(g,this.switchLever),this.group.add(p)}_buildStoryClues(){const t=(h,d,u,c=3.8,p=.36)=>{const g=new ut(new ba(.1,.145,20),new ln({color:16767362,transparent:!0,opacity:.85,side:ve,depthTest:!1}));g.position.copy(u).add(new L(0,p,0)),g.renderOrder=12,g.visible=!1,this.scene.add(g),this.interactables.push({id:h,label:d,worldPos:u.clone(),radius:c,ringMesh:g})},e=ae(-8.2,10.2)+.56,n=new Ce;n.position.set(-8.2,e,10.2);const i=this.models?.createMesh("compass",.38);i?n.add(i):n.add(new ut(new pe(.16,.16,.06,12),this.brassMat));const r=new ut(new Ct(.022,.022,.18),new ln({color:12724252}));r.position.y=.065,this.compassNeedle=r,n.add(r),this.scene.add(n),t("compass","فحص البوصلة المحطمة",new L(-8.2,e+.04,10.2),4,.36),t("jeep","تفتيش حطام سيارة البعثة",this.jeepWorldPos.clone(),4.8,.48),this.physics.addBoxCollider(qt-3.75,qt-2.65,zt+7.2,zt+8,0,.56,!0);const a=new ut(new pe(.14,.15,.3,10),this.metalMat);a.rotation.z=.5,a.position.set(-3.08,.59,7.62);const o=new ut(new Ct(.42,.14,.32),this.woodMat);o.position.set(-3.38,.55,7.52),this.group.add(a,o),t("canteen","فحص حقيبة البعثة والزمزمية",new L(qt-3.2,xn+.62,zt+7.6),3.8,.38);const l=new ut(new Ct(.38,.05,.48),this.paperMat);l.position.set(-5.3,1.07,-.32),l.rotation.y=.25,this.group.add(l),t("journal","قراءة دفتر ملاحظات نادر",new L(qt-5.3,xn+1.1,zt-.32),3.8,.36),t("antenna_box","تشغيل قاطع برج الهوائي",new L(qt+4.1,xn+1.5,zt-6.75),3.8,.42),t("radio","تشغيل المذياع التناظري (تردد ٤٤)",new L(qt+5.15,xn+1.38,zt-4.35),4,.42)}setActiveMissionId(t){this.activeMissionId=t;for(let e=0;e<this.interactables.length;e++){const n=this.interactables[e];n.ringMesh&&(n.ringMesh.visible=n.id===t)}}getActiveInteractable(){return this.activeMissionId&&this.interactables.find(t=>t.id===this.activeMissionId)||null}setAntennaPowered(t){this.switchTargetAngle=t?-.65:.6,this.radioGlowMat&&(this.radioGlowMat.emissiveIntensity=t?2.2:.04),this.radioLight&&(this.radioLight.intensity=t?2.3:0)}setStormIntensity(t){this.stormIntensity=Math.max(0,Math.min(1,t)),this.awningStormUniform.value=this.stormIntensity}unlockHatch(){this.hatchTargetAngle=-.82}_optimizeStaticBatches(){const t=new Set([this.adobeMat,this.woodMat,this.metalMat,this.darkMetalMat,this.stoneMat,this.hatchFrameMat,this.brassMat,this.paperMat,this.sandDriftMat]),e=new Set([this.awningCloth,this.hatchMesh,this.switchLever,this.windVane,this.windTurbine]),n=l=>{let h=l;for(;h&&h!==this.group;){if(e.has(h))return!0;h=h.parent}return!1};this.group.updateMatrixWorld(!0);const i=new Yt().copy(this.group.matrixWorld).invert(),r=new Map,a=[];this.group.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||!t.has(l.material)||n(l))return;const h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone(),d=new Yt().multiplyMatrices(i,l.matrixWorld);h.applyMatrix4(d);const u=new ge;if(u.setAttribute("position",h.attributes.position.clone()),h.attributes.normal&&u.setAttribute("normal",h.attributes.normal.clone()),h.attributes.uv&&u.setAttribute("uv",h.attributes.uv.clone()),l.material.vertexColors)if(h.attributes.color)u.setAttribute("color",h.attributes.color.clone());else{const c=new Float32Array(h.attributes.position.count*3).fill(1);u.setAttribute("color",new Qt(c,3))}h.dispose(),r.has(l.material)||r.set(l.material,[]),r.get(l.material).push(u),a.push(l)});const o=new Set([this.paperMat,this.hatchFrameMat,this.brassMat,this.sandDriftMat]);for(const[l,h]of r.entries()){if(h.length<2){h.forEach(u=>u.dispose());continue}const d=Wi(h,!1);if(h.forEach(u=>u.dispose()),d){const u=new ut(d,l);u.castShadow=!o.has(l),u.receiveShadow=!0,this.group.add(u)}}for(const l of a){const h=r.get(l.material);h&&h.length>=2&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}}update(t,e,n,i){const r=this.stormIntensity;if(this.windTurbine&&(this.windTurbine.rotation.x+=t*(2.6+i*2.5+r*9.5+Math.sin(e*.7)*.8)),this.windVane&&(this.windVane.rotation.y=.35+Math.sin(e*(.42+r*1.4))*(.25+r*.18)),this.awningTimeUniform.value=e,this.switchLever&&(this.switchLever.rotation.x+=(this.switchTargetAngle-this.switchLever.rotation.x)*Math.min(1,t*10)),this.hatchMesh&&(this.hatchMesh.rotation.x+=(this.hatchTargetAngle-this.hatchMesh.rotation.x)*Math.min(1,t*4.5)),this.godRayUniforms){const o=1-r*.85;this.godRayUniforms.uOpacity.value=xt.lerp(.13,.25,i)*o,this.godRayUniforms.uColor.value.lerpColors(this._rayNoonCol,this._rayAsrCol,i)}this.compassNeedle&&(this.compassNeedle.rotation.y=.4+Math.sin(e*5.2)*.25+Math.cos(e*13)*.08);const a=this.getActiveInteractable();if(a&&a.ringMesh){const o=n.position.distanceTo(a.worldPos);if(o<2.2)a.ringMesh.visible=!1;else{a.ringMesh.visible=!0,a.ringMesh.lookAt(n.position);const l=xt.clamp((o-2.2)/2.8,0,1);a.ringMesh.material.opacity=.78*l;const h=.88+Math.sin(e*4)*.14;a.ringMesh.scale.setScalar(h)}}}}class Mm{constructor(t,e){this.scene=t,this.settings=e,this.intensity=0,this.targetIntensity=0,this.enabled=e.data.dustStorm!==!1,this.maxStreaks=300,this.group=new Ce,this.scene.add(this.group),this.overlayEl=document.getElementById("dust-storm-layer"),this._colorTmp=new at,this._createSandWall(),this._createWindStreaks(),this._setVisible(!1),this._lastOverlayVis=!1,this._lastOverlayOp="",this.overlayEl&&this.overlayEl.classList.add("hidden")}_setOverlayOpacity(t){if(!this.overlayEl)return;const e=t>.006;if(e!==this._lastOverlayVis&&(this._lastOverlayVis=e,this.overlayEl.classList.toggle("hidden",!e)),e){const n=t.toFixed(2);n!==this._lastOverlayOp&&(this._lastOverlayOp=n,this.overlayEl.style.opacity=n)}}_createSandWall(){const t=new pe(18.5,18.5,24,20,1,!0);this.wallUniforms={uTime:{value:0},uIntensity:{value:0},uIndoor:{value:0},uColor:{value:Ht.horizonStorm.clone()},uSimple:{value:0}};const e=new Ue({transparent:!0,depthWrite:!1,side:Te,fog:!1,uniforms:this.wallUniforms,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uIntensity;
        uniform float uIndoor;
        uniform vec3 uColor;
        uniform float uSimple;
        varying vec2 vUv;

        float hash21(vec2 p) {
          p = fract(p * vec2(127.1, 311.7));
          p += dot(p, p + 34.5);
          return fract(p.x * p.y);
        }

        float vnoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
            mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        void main() {
          // Seamless periodic U around cylinder circumference (scale = integer 6.0)
          float angU = vUv.x * 6.0;
          float yV = vUv.y;

          vec2 uv1 = vec2(angU - uTime * 0.85, yV * 2.4 + sin(angU * 1.05 + uTime * 0.6) * 0.14);
          float n1 = vnoise(uv1);
          float n2 = uSimple > 0.5 ? n1 : vnoise(vec2(angU * 2.0 - uTime * 1.55, yV * 4.5 - uTime * 0.25));
          float gust = n1 * 0.62 + n2 * 0.38;

          // Denser sand wall near the ground, thinning gently overhead
          float verticalMask = smoothstep(0.0, 0.18, yV) * smoothstep(1.0, 0.22, yV);
          float dustBand = smoothstep(0.28, 0.82, gust) * verticalMask;
          float indoorAtten = 1.0 - uIndoor * 0.82;
          float alpha = dustBand * uIntensity * 0.48 * indoorAtten;
          if (alpha < 0.004) discard;

          vec3 col = uColor * (0.86 + gust * 0.34);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});this.sandWall=new ut(t,e),this.sandWall.frustumCulled=!1,this.sandWall.renderOrder=4,this.group.add(this.sandWall)}_createWindStreaks(){const t=new me(1.65,.055),e=new yh;e.index=t.index,e.attributes.position=t.attributes.position,e.attributes.uv=t.attributes.uv;const n=new Float32Array(this.maxStreaks*4);let i=9187;const r=()=>(i=i*16807%2147483647,(i-1)/2147483646);for(let o=0;o<this.maxStreaks;o++)n[o*4]=(r()-.5)*34,n[o*4+1]=.25+r()*5.2,n[o*4+2]=(r()-.5)*34,n[o*4+3]=.75+r()*.9;e.setAttribute("aSeed",new sa(n,4)),e.instanceCount=this.maxStreaks,this.streakUniforms={uTime:{value:0},uIntensity:{value:0},uIndoor:{value:0},uPlayerPos:{value:new L},uColor:{value:Ht.horizonStorm.clone()}};const a=new Ue({transparent:!0,depthWrite:!1,side:ve,uniforms:this.streakUniforms,vertexShader:`
        attribute vec4 aSeed;
        uniform float uTime;
        uniform float uIntensity;
        uniform vec3 uPlayerPos;
        varying vec2 vUv;
        varying float vFade;

        void main() {
          vUv = uv;
          float spd = (12.0 + uIntensity * 14.0) * aSeed.w;
          vec3 windDir = normalize(vec3(1.0, -0.05, 0.34));

          // Wrap particle smoothly inside 34m box around player purely on GPU
          vec3 center;
          center.x = mod(aSeed.x + uTime * spd - uPlayerPos.x + 17.0, 34.0) - 17.0 + uPlayerPos.x;
          center.z = mod(aSeed.z + uTime * spd * 0.34 - uPlayerPos.z + 17.0, 34.0) - 17.0 + uPlayerPos.z;
          center.y = uPlayerPos.y - 0.6 + aSeed.y + sin(uTime * 2.6 + aSeed.x) * 0.25;

          // Orient quad lengthwise along wind direction and face camera vertically
          vec3 toCam = normalize(cameraPosition - center);
          vec3 side = normalize(cross(windDir, toCam));
          float lenScale = (0.75 + uIntensity * 0.95) * aSeed.w;
          vec3 worldPos = center + windDir * (position.x * lenScale) + side * position.y;

          float dist = length(cameraPosition - center);
          vFade = smoothstep(1.2, 4.0, dist) * smoothstep(17.5, 11.0, dist);

          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,fragmentShader:`
        uniform float uIntensity;
        uniform float uIndoor;
        uniform vec3 uColor;
        varying vec2 vUv;
        varying float vFade;

        void main() {
          float along = sin(vUv.x * 3.14159265);
          float across = sin(vUv.y * 3.14159265);
          float alpha = along * across * across * vFade * uIntensity * 0.52 * (1.0 - uIndoor * 0.85);
          if (alpha < 0.01) discard;
          vec3 col = uColor * 1.18;
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});this.streakMesh=new ut(e,a),this.streakMesh.frustumCulled=!1,this.streakMesh.renderOrder=5,this.group.add(this.streakMesh)}_setVisible(t){this.sandWall.visible=t,this.streakMesh.visible=t}applySettings(t,e){this.enabled=t.dustStorm!==!1;const n=e.stormStreaks??240;this.streakMesh.geometry.instanceCount=Math.min(this.maxStreaks,n),this.wallUniforms.uSimple.value=t.quality==="low"?1:0,this.enabled||(this.intensity=0,this.targetIntensity=0,this._setVisible(!1),this._setOverlayOpacity(0))}setTargetIntensity(t,e=!1){const n=this.enabled?xt.clamp(t,0,1):0;this.targetIntensity=n,e&&(this.intensity=n,this._setVisible(this.intensity>.01),this.intensity<=.01&&this._setOverlayOpacity(0))}update(t,e,n,i,r,a){if(!this.enabled)return this.intensity=0,this._setVisible(!1),this._setOverlayOpacity(0),0;const o=this.targetIntensity>this.intensity?.45:.55;this.intensity+=(this.targetIntensity-this.intensity)*Math.min(1,t*o),Math.abs(this.targetIntensity-this.intensity)<.002&&(this.intensity=this.targetIntensity);const l=this.intensity>.01;this._setVisible(l);const h=r?1:0;if(l){this.sandWall.position.set(n.position.x,n.position.y+1.5,n.position.z),this._colorTmp.copy(Ht.horizonStorm).lerp(Ht.horizonAsr,xt.clamp(a*.35,0,.35)),this.wallUniforms.uTime.value=e,this.wallUniforms.uIntensity.value=this.intensity,this.wallUniforms.uIndoor.value+=(h-this.wallUniforms.uIndoor.value)*Math.min(1,t*5),this.wallUniforms.uColor.value.copy(this._colorTmp),this.streakUniforms.uTime.value=e,this.streakUniforms.uIntensity.value=this.intensity,this.streakUniforms.uIndoor.value=this.wallUniforms.uIndoor.value,this.streakUniforms.uPlayerPos.value.copy(i),this.streakUniforms.uColor.value.copy(this._colorTmp);const d=.88+.12*Math.sin(e*2.3)*Math.cos(e*1.1);this._setOverlayOpacity(this.intensity*d*(r?.16:.55))}else this._setOverlayOpacity(0);return this.intensity}}class ym{constructor(t,e,n,i){this.camera=t,this.physics=e,this.audio=n,this.settings=i,this.enabled=!1,this.position=new L(-11,0,15),this.yaw=-.34,this.pitch=-.02,this.eyeHeight=1.72,this.walkSpeed=4.55,this.sprintSpeed=8.95,this.vy=0,this.gravity=-19.5,this.jumpVelocity=7.5,this.onGround=!0,this.isJumping=!1,this.isActuallySprinting=!1,this.currentFovBoost=0,this.isSprintingKey=!1,this.autoSprintLocked=!1,this.isInsideHouse=!1,this.currentSurface="sand",this.bobTimer=0,this.lastStepSign=0,this.boundaryWarnCooldown=0,this.onBoundaryHit=null,this.keys={},this.joyVec={x:0,y:0},this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyActive=!1,this.joyTouchId=null,this.joyOrigin={x:0,y:0},this.lookTouchId=null,this.lookLast={x:0,y:0},this.mouseDragging=!1,this.pointerLocked=!1,this._targetYaw=this.yaw,this._targetPitch=this.pitch,this.focusedInteractable=null,this._forward=new L,this._right=new L,this._moveDir=new L,this._toObj=new L,this.sprintBannerEl=document.getElementById("auto-sprint-banner"),this._bindInputs()}_haptic(t=12){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}setAutoSprintLock(t){this.autoSprintLocked=!!t,this.sprintBannerEl&&this.sprintBannerEl.classList.toggle("hidden",!this.autoSprintLocked)}setPose(t,e,n,i=0){const r=this.physics.getGroundInfo(t,e,0);this.position.set(t,r.groundY,e),this.vy=0,this.onGround=!0,this.isJumping=!1,this.setAutoSprintLock(!1),this.yaw=n,this.pitch=i,this._targetYaw=n,this._targetPitch=i,this._applyCameraTransform(0,0)}triggerJump(){!this.enabled||!this.onGround||(this.audio.unlock(),this._haptic(14),this.vy=this.jumpVelocity,this.onGround=!1,this.isJumping=!0,this.audio.playFootstep(this.currentSurface,!0))}_bindInputs(){if(window.addEventListener("keydown",c=>{this.keys[c.code]=!0,(c.code==="ShiftLeft"||c.code==="ShiftRight")&&(this.isSprintingKey=!0),(c.code==="KeyS"||c.code==="ArrowDown")&&this.setAutoSprintLock(!1),c.code==="Space"&&(c.preventDefault(),this.triggerJump())}),window.addEventListener("keyup",c=>{this.keys[c.code]=!1,(c.code==="ShiftLeft"||c.code==="ShiftRight")&&(this.isSprintingKey=!1)}),this.sprintBannerEl){const c=p=>{p.preventDefault(),p.stopPropagation(),this.setAutoSprintLock(!1),this._haptic(10)};this.sprintBannerEl.addEventListener("touchstart",c,{passive:!1}),this.sprintBannerEl.addEventListener("click",c)}const t=document.getElementById("btn-mobile-jump");t&&(t.addEventListener("touchstart",c=>{c.preventDefault(),c.stopPropagation(),this.triggerJump()},{passive:!1}),t.addEventListener("click",c=>{c.stopPropagation(),this.triggerJump()}));const e=document.getElementById("look-zone"),n=document.getElementById("game-canvas");if(document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===n}),window.addEventListener("mousemove",c=>{if(this.enabled&&(this.pointerLocked||this.mouseDragging)){const p=this.settings.data.sensitivity*.0022;this._targetYaw-=c.movementX*p,this._targetPitch-=c.movementY*p,this._clampPitch()}}),window.addEventListener("pointerdown",c=>{if(!(!this.enabled||c.pointerType==="touch"||c.button!==0)&&(this.audio.unlock(),this.mouseDragging=!0,c.target===n||c.target===e))try{n.requestPointerLock&&!("ontouchstart"in window)&&n.requestPointerLock()}catch{}}),window.addEventListener("pointerup",()=>{this.mouseDragging=!1}),e){e.addEventListener("touchstart",p=>{if(this.enabled){this.audio.unlock();for(const g of p.changedTouches)if(this.lookTouchId===null){this.lookTouchId=g.identifier,this.lookLast.x=g.clientX,this.lookLast.y=g.clientY;break}}},{passive:!0}),e.addEventListener("touchmove",p=>{if(!(!this.enabled||this.lookTouchId===null)){for(const g of p.changedTouches)if(g.identifier===this.lookTouchId){const _=g.clientX-this.lookLast.x,m=g.clientY-this.lookLast.y;this.lookLast.x=g.clientX,this.lookLast.y=g.clientY;const f=Math.hypot(_,m),v=1+Math.min(.85,f*.02),y=this.settings.data.sensitivity*.0058*v;this._targetYaw-=_*y,this._targetPitch-=m*y*.88,this._clampPitch(),p.preventDefault();break}}},{passive:!1});const c=p=>{for(const g of p.changedTouches)if(g.identifier===this.lookTouchId){this.lookTouchId=null;break}};e.addEventListener("touchend",c,{passive:!0}),e.addEventListener("touchcancel",c,{passive:!0})}const i=document.getElementById("joystick-zone"),r=document.getElementById("joystick-float-wrap"),a=document.getElementById("joystick-base"),o=document.getElementById("joystick-knob"),l=document.getElementById("joystick-sprint-lock"),h=46,d=52,u=(c,p,g,_)=>{o&&(o.style.transform=`translate(${c.toFixed(1)}px, ${p.toFixed(1)}px)`),a&&a.classList.toggle("sprinting",g),l&&l.classList.toggle("engaged",_)};if(i&&r){i.addEventListener("touchstart",p=>{if(this.enabled){this.audio.unlock();for(const g of p.changedTouches)if(this.joyTouchId===null){this.joyTouchId=g.identifier,this.joyActive=!0,this.joyBeyondRing=!1,this.joyLockHover=!1,this.setAutoSprintLock(!1),this.joyOrigin.x=g.clientX,this.joyOrigin.y=g.clientY,r.style.left=`${g.clientX}px`,r.style.top=`${g.clientY}px`,r.classList.remove("hidden"),u(0,0,!1,!1);break}}},{passive:!0}),i.addEventListener("touchmove",p=>{if(!(!this.enabled||this.joyTouchId===null)){for(const g of p.changedTouches)if(g.identifier===this.joyTouchId){const _=g.clientX-this.joyOrigin.x,m=g.clientY-this.joyOrigin.y,f=Math.hypot(_,m),v=m<-36&&Math.abs(_)<Math.abs(m)*.85;this.joyBeyondRing=f>d&&v;const y=this.joyLockHover;this.joyLockHover=m<-92&&Math.abs(_)<56,this.joyLockHover&&!y&&this._haptic(16);const x=this.joyBeyondRing?56:h;let R=_,A=m;f>x&&(R=_/f*x,A=m/f*x);const b=Math.min(1,f/h),C=f>1e-4?_/f:0,w=f>1e-4?m/f:0,M=C*b,P=w*b;this.joyVec.x=Math.abs(M)<.08?0:M,this.joyVec.y=Math.abs(P)<.08?0:P,u(R,A,this.joyBeyondRing||this.joyLockHover,this.joyLockHover),p.preventDefault();break}}},{passive:!1});const c=p=>{for(const g of p.changedTouches)if(g.identifier===this.joyTouchId){this.joyLockHover&&(this.setAutoSprintLock(!0),this._haptic(22)),this.joyTouchId=null,this.joyActive=!1,this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyVec.x=0,this.joyVec.y=0,r.classList.add("hidden"),u(0,0,!1,!1);break}};i.addEventListener("touchend",c,{passive:!0}),i.addEventListener("touchcancel",c,{passive:!0})}}_clampPitch(){this._targetPitch=xt.clamp(this._targetPitch,-1.32,1.32)}update(t,e,n){if(!this.enabled)return;this.boundaryWarnCooldown>0&&(this.boundaryWarnCooldown-=t);const i=Math.min(1,t*28);this.yaw+=(this._targetYaw-this.yaw)*i,this.pitch+=(this._targetPitch-this.pitch)*i;let r=0,a=0;(this.keys.KeyW||this.keys.ArrowUp)&&(r+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(r-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(a+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(a-=1);let o=!1;this.joyActive?(r-=this.joyVec.y,a+=this.joyVec.x,(this.joyBeyondRing||this.joyLockHover)&&(o=!0)):this.autoSprintLocked&&(r=1,o=!0);const l=Math.min(1,Math.hypot(r,a));this.isActuallySprinting=(this.isSprintingKey||o)&&l>.3&&r>.15;const h=this.isActuallySprinting?8:0;this.currentFovBoost+=(h-this.currentFovBoost)*Math.min(1,t*7.5);const d=this.settings.data.fov+this.currentFovBoost;Math.abs(this.camera.fov-d)>.05&&(this.camera.fov=d,this.camera.updateProjectionMatrix());let u=0;if(l>.01){const m=(this.isActuallySprinting?this.sprintSpeed:this.walkSpeed)*l;u=m,this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this._moveDir.set(0,0,0).addScaledVector(this._forward,r).addScaledVector(this._right,a).normalize(),this.position.x+=this._moveDir.x*m*t,this.position.z+=this._moveDir.z*m*t,this.physics.resolveHorizontal(this.position,.36)&&this.boundaryWarnCooldown<=0&&this.onBoundaryHit&&(this.boundaryWarnCooldown=8,this.setAutoSprintLock(!1),this.onBoundaryHit())}const c=this.physics.getGroundInfo(this.position.x,this.position.z,this.position.y);this.currentSurface=c.surface;const p=this.position.y-c.groundY;this.isJumping||!this.onGround||p>.38?(this.onGround=!1,this.vy+=this.gravity*t,this.position.y+=this.vy*t,this.position.y<=c.groundY&&(this.position.y=c.groundY,this.vy<-3.2&&this.audio.playFootstep(this.currentSurface,!0),this.vy=0,this.onGround=!0,this.isJumping=!1)):(this.position.y+=(c.groundY-this.position.y)*Math.min(1,t*24),this.vy=0,this.onGround=!0),this.isInsideHouse=this.physics.isInsideBuilding(this.position);let g=0,_=0;if(this.onGround&&u>.35){const m=this.isActuallySprinting?12.8:7.6,f=this.isActuallySprinting?.082:.042,v=this.isActuallySprinting?.04:.02;this.bobTimer+=t*m;const y=Math.sin(this.bobTimer);g=y*f,_=Math.cos(this.bobTimer*.5)*v,y<-.82&&this.lastStepSign>=-.82&&this.audio.playFootstep(this.currentSurface,this.isActuallySprinting),this.lastStepSign=y}else this.onGround&&(g=Math.sin(e*1.45)*.011,this.lastStepSign=0);this._applyCameraTransform(_,g),this._updateActiveInteractable(n)}_applyCameraTransform(t,e){this.camera.position.set(this.position.x+Math.cos(this.yaw)*t,this.position.y+this.eyeHeight+e,this.position.z-Math.sin(this.yaw)*t),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=t*(this.isActuallySprinting?-.28:-.14)}_updateActiveInteractable(t){if(!t){this.focusedInteractable=null;return}const e=this.camera.position.distanceTo(t.worldPos);if(e>t.radius){this.focusedInteractable=null;return}this.camera.getWorldDirection(this._forward),this._toObj.subVectors(t.worldPos,this.camera.position).normalize();const n=this._forward.dot(this._toObj);this.focusedInteractable=n>.52||e<2.2?t:null}}class Sm{constructor(t,e,n,i){this.camera=t,this.sky=e,this.audio=n,this.player=i,this.mode="title",this.timer=0,this.onWakeupComplete=null,this.onWakeupSubtitle=null,this._spokeStep1=!1,this._spokeStep2=!1,this._spokeStep3=!1,this._playedSunSwell=!1,this.eyelidEl=document.getElementById("eyelid-layer"),this.blurEl=document.getElementById("vision-blur-layer"),this.containerEl=document.getElementById("game-container"),this.skipBtn=document.getElementById("btn-skip-cutscene"),this.whisperEl=document.getElementById("time-whisper-banner"),this.whisperClockEl=document.getElementById("whisper-clock"),this.whisperLabelEl=document.getElementById("whisper-label"),this._whisperTimeout=null,this.skipBtn&&this.skipBtn.addEventListener("click",()=>{this.mode==="wakeup"&&this.finishWakeup()})}startTitleCamera(){this.mode="title",this.timer=0,this._setEyelids(1),this._setBlur(0,0),this.sky.cutsceneGlareBoost=0,this.containerEl?.classList.remove("cinematic-bars-active"),this.skipBtn?.classList.add("hidden")}startWakeupCutscene(t,e){this.mode="wakeup",this.timer=0,this.onWakeupSubtitle=t,this.onWakeupComplete=e,this._spokeStep1=!1,this._spokeStep2=!1,this._spokeStep3=!1,this._playedSunSwell=!1,this.player.enabled=!1,this.containerEl?.classList.add("cinematic-bars-active"),this.skipBtn?.classList.remove("hidden"),this._wakeBaseY=ae(-11,15),this._setEyelids(0),this._setBlur(14,.22),this.audio.playWakeUpTinnitus()}finishWakeup(){this.mode==="wakeup"&&(this.mode="gameplay",this._setEyelids(1),this._setBlur(0,0),this.sky.cutsceneGlareBoost=0,this.containerEl?.classList.remove("cinematic-bars-active"),this.skipBtn?.classList.add("hidden"),this.player.setPose(-11,15,-.34,-.02),this.player.enabled=!0,this.onWakeupComplete&&this.onWakeupComplete())}startEndingVista(){this.mode="ending",this.timer=0,this.player.enabled=!1,this.containerEl?.classList.add("cinematic-bars-active")}smoothAdvanceTime(t,e,n){this.sky.setTimeOfDay(n,!1),this.audio.playDesertSting(n>=.85),this.whisperEl&&this.whisperClockEl&&this.whisperLabelEl&&(this.whisperClockEl.textContent=t,this.whisperLabelEl.textContent=e,this.whisperEl.classList.add("visible"),this._whisperTimeout&&clearTimeout(this._whisperTimeout),this._whisperTimeout=setTimeout(()=>{this.whisperEl.classList.remove("visible")},3400))}_setEyelids(t){this.eyelidEl&&this.eyelidEl.style.setProperty("--eyelid-open",xt.clamp(t,0,1).toFixed(3))}_setBlur(t,e){this.blurEl&&(this.blurEl.style.backdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.webkitBackdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.background=e>.01?`rgba(255, 246, 224, ${e.toFixed(3)})`:"rgba(255, 246, 224, 0)")}update(t,e){if(this.timer+=t,this.mode==="title"){const n=.54+Math.sin(e*.1)*.18,i=28+Math.sin(e*.16)*1.4,r=qt+4.5+Math.sin(n)*i,a=zt+2+Math.cos(n)*i,o=ae(r,a);this.camera.position.set(r,o+5.2+Math.sin(e*.2)*.35,a),this.camera.lookAt(qt-2.2,3.2,zt);return}if(this.mode==="ending"){const i=-18.5+Math.sin(e*.14)*2.5,r=4,a=ae(i,r);this.camera.position.set(i,a+4,r),this.camera.lookAt(qt+1,4.2,zt);return}if(this.mode==="wakeup"){const n=this.timer,i=-11,r=15,a=this._wakeBaseY,o=this.sky.sunDirection,l=Math.atan2(-o.x,-o.z),h=Math.asin(xt.clamp(o.y,-.95,.95));let d=a+.42,u=l+.28,c=.26,p=.14,g=0,_=14,m=0,f=0;if(n<2.8){const v=n/2.8;n<1?g=xt.smoothstep(n,.15,1)*.54:n<1.45?g=xt.lerp(.54,.12,(n-1)/.45):g=xt.lerp(.12,.95,xt.smoothstep(n,1.45,2.7)),_=xt.lerp(14,2,v),m=xt.lerp(.16,.05,v),p=xt.lerp(.15,.03,v),c=xt.lerp(.24,.42,v),n>1.2&&!this._spokeStep1&&(this._spokeStep1=!0,this.onWakeupSubtitle?.("حرارة خانقة... رمل جاف يملأ فمي... أين أنا؟"))}else if(n<5.6){const v=xt.smoothstep(n,2.8,4.9);g=n<4.7?.96:xt.lerp(.96,.46,(n-4.7)/.9),u=xt.lerp(l+.28,l,v),c=xt.lerp(.42,Math.min(1.18,h-.03),v),p=xt.lerp(.03,0,v),d=a+xt.lerp(.42,.68,v);const y=xt.smoothstep(n,3.4,4.85);f=y*.94,m=y*.3,_=2*(1-v)+y*2.2,n>3.6&&!this._playedSunSwell&&(this._playedSunSwell=!0,this.audio.playSunGlareSwell()),n>4.1&&!this._spokeStep2&&(this._spokeStep2=!0,this.onWakeupSubtitle?.("آه... شمس الظهيرة حارقة! سطوعها يكاد يعمي عيني..."))}else if(n<8){const v=xt.smoothstep(n,5.6,7.6);g=xt.lerp(.46,1,xt.smoothstep(n,6.1,7.5)),u=xt.lerp(l,-.52,v),c=xt.lerp(Math.min(1.18,h-.03),-.56,v),p=Math.sin(v*Math.PI)*-.07,d=a+xt.lerp(.68,1.18,v),f=Math.max(0,.94*(1-v*1.45)),m=Math.max(0,.3*(1-v*1.5)),_=Math.max(0,2.2*(1-v*1.35))}else if(n<10.8){const v=xt.smoothstep(n,8,10.5);g=1,_=0,m=0,f=0,u=xt.lerp(-.52,-.34,v),c=xt.lerp(-.56,-.02,v),p=0,d=a+xt.lerp(1.18,this.player.eyeHeight,v),n>8.4&&!this._spokeStep3&&(this._spokeStep3=!0,this.onWakeupSubtitle?.("بيت مهجور وسط هذه الكثبان... وهناك بوصلة تلمع على الصخرة أمامي."))}else{this.finishWakeup();return}this.camera.position.set(i,d,r),this.camera.rotation.order="YXZ",this.camera.rotation.y=u,this.camera.rotation.x=c,this.camera.rotation.z=p,this._setEyelids(g),this._setBlur(_,m),this.sky.cutsceneGlareBoost=f}}}const wm=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];function _r(s){return String(s).replace(/\d/g,t=>wm[Number(t)])}const Yo=[{id:"compass",objective:"تفحّص البوصلة الملقاة على الصخرة القريبة لمعرفة اتجاهك",tag:"المهمة ١ من ٦ — الصحراء المفتوحة",title:"بوصلة نحاسية محطمة",sfx:"paper",inspectText:`الزجاج مشقوق بفعل الشمس، لكن الإبرة لم تتوقف... إنها ترتجف بعناد وتشير مباشرةً نحو برج الهوائي فوق البيت المهجور بدلاً من الشمال.

نُقش على ظهرها: «محطة الرصد — القطاع ٧».`,lines:[{text:"إبرة البوصلة لا تشير للشمال... شيء ما داخل ذلك البيت المهجور يجذبها بقوة.",style:"thought"},{text:"هناك آثار أقدام تقود نحو حطام سيارة مدفونة في الرمل... سأتفقدها أولاً.",style:"thought"}],timeTarget:.16,whisperClock:null},{id:"jeep",objective:"اتبع آثار الأقدام وتفتّش حطام سيارة البعثة المدفونة في الرمل",tag:"المهمة ٢ من ٦ — طريق البعثة",title:"حطام سيارة الدفع الرباعي وبطاقة هوية",sfx:"metal",inspectText:`السيارة غارقة في الرمال منذ أيام، ومحرّكها محترق كأن موجة كهرومغناطيسية ضربتها فجأة.

على المقعد الأمامي وجدتَ بطاقة تعريفية تحمل صورتك أنت:
«المهندس نادر العتيبي — قائد بعثة وادي الصمت الجيولوجية».`,lines:[{text:"هذه صورتي... اسمي نادر! لماذا لا أذكر شيئاً عن هذه الحادثة؟",style:"thought"},{text:"المعدات مفقودة من السيارة... لا بد أن الفريق نقلها إلى ساحة البيت المهجور.",style:"thought"}],timeTarget:.34,whisperClock:"١:٢٥ ظهراً",whisperPhase:"بعد الظهيرة — وهج الرمال يشتد"},{id:"canteen",objective:"ادخل ساحة البيت المهجور وتفقّد حقيبة البعثة تحت المظلة",tag:"المهمة ٣ من ٦ — فناء البيت المهجور",title:"حقيبة البعثة وتحذير مكتوب بعجلة",sfx:"paper",inspectText:`الزمزمية جافة تماماً. لكن داخل جيب الحقيبة ورقة مطوية بيدٍ مرتجفة:

«نادر... النبضة الصوتية القادمة من أسفل البيت تمحو الذاكرة القريبة! إذا استيقظتَ تائهاً في الكثبان، ادخل غرفة مكتبك بالداخل واقرأ دفترك فوراً قبل حلول العصر.»`,lines:[{text:"النبضة تحت البيت هي سبب فقدان ذاكرتي! وأنا من كتب التحذير لنفسي...",style:"thought"},{text:"يجب أن أدخل البيت الآن وأجد دفتري في غرفة المكتب اليسرى.",style:"thought"}],timeTarget:.52,whisperClock:"٢:٣٥ بعد الظهر",whisperPhase:"الشمس تبدأ بالميل غرباً"},{id:"journal",objective:"ادخل غرفة المكتب (الجهة اليسرى داخل البيت) واقرأ دفتر ملاحظاتك",tag:"المهمة ٤ من ٦ — مكتب البحث الداخلي",title:"دفتر ملاحظات نادر — اليوم السادس",sfx:"paper",inspectText:`«عثرنا على ممرٍّ خرسانيٍّ قديم أسفل هذا البيت، يعلوه باب قبوٍ حديديٍّ وسط الردهة.

نزل زملائي الثلاثة بالأمس لتتبع مصدر الإشارة ثم أُغلق القفل المغناطيسي عليهم!
لا يُفتح القبو إلا بتشغيل المذياع على التردد ٤٤ — لكن برج الهوائي مفصول. اخرج للباحة الخلفية قرب النخيل وارفع قاطع البرج أولاً.»`,lines:[{text:"زملائي محاصرون في القبو تحت قدميّ الآن... منذ الأمس!",style:"journal"},{text:"سأخرج من الباب الخلفي نحو النخيل وأرفع قاطع برج الهوائي فوراً.",style:"thought"}],timeTarget:.74,whisperClock:"٣:٤٠ قبيل العصر",whisperPhase:"الرمال تكتسي بلون ذهبي دافئ"},{id:"antenna_box",objective:"اخرج من الباب الخلفي نحو النخيل وشغّل قاطع برج الهوائي",tag:"المهمة ٥ من ٦ — الباحة الخلفية",title:"إعادة التيار الاحتياطي من توربينة الرياح",sfx:"metal",inspectText:`دفعتَ الذراع المعدنية الثقيلة للأعلى بقوة!

دارت توربينة الرياح فوق السطح بأزيزٍ كهربائي واضح، وعاد التيار الاحتياطي يتدفق نحو غرفة الاتصالات داخل البيت.`,lines:[{text:"نجحت! الكابلات تنبض بالكهرباء الآن... والشمس تقترب سريعاً من العصر.",style:"thought"},{text:"عليّ الركض إلى غرفة الاتصالات بالجهة اليمنى داخل البيت وتشغيل المذياع!",style:"thought"}],timeTarget:.9,whisperClock:"٤:١٨ عصراً",whisperPhase:"وقت العصر — ظلال طويلة فوق الكثبان"},{id:"radio",objective:"عُد إلى غرفة الاتصالات (الجهة اليمنى داخل البيت) وشغّل المذياع",tag:"المهمة ٦ من ٦ — لحظة الحقيقة (العصر)",title:"التردد ٤٤ — النداء من تحت الرمال",sfx:"radio",inspectText:`توهّج مؤشر المذياع بضوء كهرماني ساطع وسط غبار العصر الذهبي، واخترق صوت مألوف موجات التشويش!

وفي اللحظة نفسها، دوّى صوت انفتاح القفل المغناطيسي لباب القبو الحديدي في الردهة الرئيسية خلفك...`,lines:[{text:"«... نادر! هل تسمعني؟ نحن بخير أسفل القبو... لكن لا تبقَ في الخارج بعد الغروب...»",style:"radio"},{text:"«... الشيء الذي أيقظناه في الرمال يستفيق كل مساء... انزل إلينا الآن!»",style:"radio"},{text:"انفتح باب القبو أخيراً... لقد حلّ العصر، والرحلة الحقيقية تبدأ الآن.",style:"thought"}],timeTarget:1,whisperClock:"٤:٤٥ عصراً",whisperPhase:"العصر الذهبي — ختام الفصل الأول"}];class Em{constructor(t,e,n,i,r,a=null){this.audio=t,this.sky=e,this.house=n,this.cutscenes=i,this.ui=r,this.dustStorm=a,this.missionIndex=0,this.chapterComplete=!1,this._pendingEnding=!1,this.freeRoam=!1,this.queue=[],this.activeLine=null,this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.charInterval=.042,this.subContainer=document.getElementById("subtitle-container"),this.subSpeaker=document.getElementById("subtitle-speaker"),this.subText=document.getElementById("subtitle-text")}reset(){this.missionIndex=0,this.chapterComplete=!1,this._pendingEnding=!1,this.freeRoam=!1,this.queue=[],this.activeLine=null,this.house.setAntennaPowered(!1),this.sky.setTimeOfDay(0,!0),this.dustStorm?.setTargetIntensity(0,!0),this.hideSubtitle(),this._activateCurrentMission()}getCurrentMission(){return this.missionIndex>=Yo.length?null:Yo[this.missionIndex]}_activateCurrentMission(){const t=this.getCurrentMission();if(!t){this.house.setActiveMissionId(null),this.ui.updateMission("اكتمل الفصل الأول — تجوّل بحرية في وقت العصر",null,null);return}this.house.setActiveMissionId(t.id),this.ui.updateMission(t.objective,null,0)}enqueueLine(t,e="thought",n=""){this.queue.push({text:t,style:e,speaker:n}),this.activeLine||this._startNextLine()}sayImmediate(t,e="thought",n=""){this.queue=[],this.activeLine=null,this.enqueueLine(t,e,n)}_startNextLine(){if(this.queue.length===0){this.activeLine=null,this.hideSubtitle(),this._pendingEnding&&!this.freeRoam&&(this._pendingEnding=!1,this.cutscenes.startEndingVista(),this.ui.showEndingScreen());return}this.activeLine=this.queue.shift(),this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.subContainer&&this.subText&&(this.subContainer.classList.remove("hidden"),this.subText.textContent="",this.subText.classList.add("typing"),this.subSpeaker&&(this.activeLine.speaker?(this.subSpeaker.textContent=this.activeLine.speaker,this.subSpeaker.classList.remove("hidden")):this.activeLine.style==="radio"?(this.subSpeaker.textContent="المذياع — التردد ٤٤",this.subSpeaker.classList.remove("hidden")):this.subSpeaker.classList.add("hidden")))}hideSubtitle(){this.subContainer&&this.subContainer.classList.add("hidden"),this.subText&&this.subText.classList.remove("typing")}handleInteract(t){const e=this.getCurrentMission();!t||!e||t.id!==e.id||(e.sfx==="metal"?this.audio.playMetalSwitch():e.sfx==="radio"?this.audio.playRadioBurst():this.audio.playPaperRustle(),e.id==="antenna_box"?this.house.setAntennaPowered(!0):e.id==="radio"&&this.house.unlockHatch(),this.ui.openInspectModal(e.tag,e.title,e.inspectText,()=>{e.whisperClock?this.cutscenes.smoothAdvanceTime(e.whisperClock,e.whisperPhase,e.timeTarget):this.sky.setTimeOfDay(Math.max(this.sky.targetTimeOfDay,e.timeTarget),!1),e.id==="journal"&&this.dustStorm?(this.dustStorm.setTargetIntensity(.88,!1),this.enqueueLine("الريح تشتد وعاصفة ترابية تهبّ في الخارج... اتبع سهم البوصلة نحو قاطع الهوائي!","thought")):e.id==="antenna_box"&&this.dustStorm&&this.dustStorm.setTargetIntensity(0,!1);for(const n of e.lines)this.enqueueLine(n.text,n.style);this.missionIndex++,this._activateCurrentMission(),e.id==="radio"&&!this.chapterComplete&&(this.chapterComplete=!0,this._pendingEnding=!0)}))}getClockDisplay(t=this.sky.timeOfDay){const e=Math.round(735+t*270),n=Math.floor(e/60),i=e%60,r=n>12?n-12:n,a=i<10?`0${i}`:`${i}`,o=n>=15?"عصراً":"ظهراً";return`${_r(r)}:${_r(a)} ${o}`}update(t,e,n,i=0){if(e&&!this.freeRoam&&this.sky.targetTimeOfDay<.96&&(this.sky.targetTimeOfDay=Math.min(.96,this.sky.targetTimeOfDay+t/320)),this._hudAccum=(this._hudAccum||.2)+t,this._hudAccum>=.1){this._hudAccum=0;const r=this.house.getActiveInteractable(),a=this.getCurrentMission();if(e&&a&&r&&n){const o=r.worldPos.x-n.x,l=r.worldPos.z-n.z,h=Math.max(1,Math.round(Math.hypot(o,l))),d=Math.atan2(-o,-l);let u=i-d;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;const c=Math.round(u*180/Math.PI);this.ui.updateMission(a.objective,`${_r(h)}م`,c)}this.ui.updateClock(this.getClockDisplay(this.sky.timeOfDay),this.sky.timeOfDay)}if(this.activeLine){const r=this.activeLine.text;if(this.charIndex<r.length)for(this.charTimer+=t;this.charTimer>=this.charInterval&&this.charIndex<r.length;){this.charTimer-=this.charInterval;const a=r[this.charIndex];this.charIndex++,this.subText&&(this.subText.textContent=r.slice(0,this.charIndex)),this.charIndex%2===1&&this.audio.playTextBlip(this.activeLine.style,a)}else{this.subText&&this.subText.classList.remove("typing"),this.holdTimer+=t;const a=Math.max(2.3,r.length*.042);this.holdTimer>=a&&this._startNextLine()}}}}class bm{constructor(t,e){this.settings=t,this.audio=e,this.fullscreenGate=document.getElementById("fullscreen-gate"),this.titleScreen=document.getElementById("title-screen"),this.hudLayer=document.getElementById("hud-layer"),this.settingsModal=document.getElementById("settings-modal"),this.controlsModal=document.getElementById("controls-modal"),this.inspectModal=document.getElementById("inspect-modal"),this.endingScreen=document.getElementById("ending-screen"),this.portraitWarning=document.getElementById("portrait-warning"),this.missionTextEl=document.getElementById("hud-mission-text"),this.missionDistEl=document.getElementById("hud-mission-dist"),this.missionArrowEl=document.getElementById("hud-mission-arrow"),this.clockEl=document.getElementById("hud-clock"),this.sunIconEl=document.getElementById("hud-sun-icon"),this.fpsEl=document.getElementById("hud-fps-counter"),this.reticleDot=document.getElementById("reticle-dot"),this.mobileInteractBtn=document.getElementById("btn-mobile-interact"),this.mobileInteractText=document.getElementById("mobile-interact-text"),this.restoreFsBtn=document.getElementById("btn-restore-fs"),this.returnTitleBtn=document.getElementById("btn-return-title"),this.onStartGame=null,this.onInteract=null,this.onPauseToggle=null,this.onReturnToTitle=null,this.onFreeRoam=null,this.onReplayChapter=null,this._inspectCloseCb=null,this._portraitDismissed=!1,this.isModalOpen=!1,this.inGameplay=!1,this._bindButtons(),this._bindFullscreenMonitor(),this._syncSettingsUI(),this._checkOrientation(),window.addEventListener("resize",()=>this._checkOrientation())}async enterMandatoryFullscreen(){this.audio.unlock();try{const t=document.documentElement;document.fullscreenElement||(t.requestFullscreen?await t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape").catch(()=>{})}catch{}this.fullscreenGate?.classList.remove("active"),setTimeout(()=>this.fullscreenGate?.classList.add("hidden"),380),this.showTitleScreen()}_bindFullscreenMonitor(){const t=()=>{const e=!!(document.fullscreenElement||document.webkitFullscreenElement);this.restoreFsBtn?.classList.toggle("hidden",e)};document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),this.restoreFsBtn?.addEventListener("click",()=>{this.enterMandatoryFullscreen()})}_bindButtons(){document.getElementById("btn-enter-fullscreen")?.addEventListener("click",()=>{this.enterMandatoryFullscreen()}),document.getElementById("btn-start-game")?.addEventListener("click",()=>{this.audio.unlock(),!document.fullscreenElement&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),this.hideTitleScreen(),this.onStartGame?.()}),document.getElementById("btn-open-settings")?.addEventListener("click",()=>{this.audio.unlock(),this.openSettings(!1)}),document.getElementById("btn-hud-pause")?.addEventListener("click",()=>{this.openSettings(!0)});const t=()=>{this.settingsModal?.classList.add("hidden"),this.isModalOpen=!1,this.onPauseToggle?.(!1)};document.getElementById("btn-close-settings")?.addEventListener("click",t),document.getElementById("btn-resume-from-settings")?.addEventListener("click",t),this.returnTitleBtn?.addEventListener("click",()=>{t(),this.onReturnToTitle?.()}),document.getElementById("btn-open-controls")?.addEventListener("click",()=>{this.controlsModal?.classList.remove("hidden"),this.isModalOpen=!0});const e=()=>{this.controlsModal?.classList.add("hidden"),this.isModalOpen=!1};document.getElementById("btn-close-controls")?.addEventListener("click",e),document.getElementById("btn-ok-controls")?.addEventListener("click",e),document.getElementById("btn-close-inspect")?.addEventListener("click",()=>{this.inspectModal?.classList.add("hidden"),this.isModalOpen=!1;const o=this._inspectCloseCb;this._inspectCloseCb=null,this.onPauseToggle?.(!1),o?.()}),this.mobileInteractBtn?.addEventListener("click",()=>this.onInteract?.()),document.getElementById("btn-free-roam")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.showHUD(),this.onFreeRoam?.()}),document.getElementById("btn-replay-chapter")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.onReplayChapter?.()}),document.getElementById("btn-dismiss-portrait")?.addEventListener("click",()=>{this._portraitDismissed=!0,this.portraitWarning?.classList.add("hidden")}),window.addEventListener("keydown",o=>{o.code==="KeyE"&&this.inGameplay&&!this.isModalOpen?this.onInteract?.():o.code==="Escape"&&this.inGameplay&&(this.settingsModal?.classList.contains("hidden")?this.isModalOpen||this.openSettings(!0):t())}),document.getElementById("opt-quality")?.querySelectorAll("button").forEach(o=>{o.addEventListener("click",()=>{this.settings.applyQualityPreset(o.dataset.val),this._syncSettingsUI()})}),document.getElementById("opt-fpscap")?.querySelectorAll("button").forEach(o=>{o.addEventListener("click",()=>{this.settings.set("fpsCap",Number(o.dataset.val)),this._syncSettingsUI()})});const r=(o,l,h,d)=>{const u=document.getElementById(o),c=document.getElementById(h);u?.addEventListener("input",()=>{const p=parseFloat(u.value);this.settings.set(l,p),c&&(c.textContent=d(p))})};r("opt-sensitivity","sensitivity","val-sensitivity",o=>`${o.toFixed(1)}x`),r("opt-resolution","resolutionScale","val-resolution",o=>`${Math.round(o*100)}%`),r("opt-fov","fov","val-fov",o=>`${Math.round(o)}°`),r("opt-volume","volume","val-volume",o=>`${Math.round(o*100)}%`);const a=(o,l)=>{const h=document.getElementById(o);h?.addEventListener("change",()=>{this.settings.set(l,h.checked),l==="showFps"&&this._updateFpsVisibility(),l==="batterySaver"&&this._syncSettingsUI()})};a("opt-battery","batterySaver"),a("opt-shadows","shadows"),a("opt-sunflare","sunFlare"),a("opt-storm","dustStorm"),a("opt-fps","showFps")}_syncSettingsUI(){const t=this.settings.data;document.querySelectorAll("#opt-quality button").forEach(i=>{i.classList.toggle("active",i.dataset.val===t.quality)}),document.querySelectorAll("#opt-fpscap button").forEach(i=>{i.classList.toggle("active",Number(i.dataset.val)===Number(t.fpsCap))});const e=(i,r,a,o)=>{const l=document.getElementById(i),h=document.getElementById(a);l&&(l.value=String(r)),h&&(h.textContent=o(r))};e("opt-sensitivity",t.sensitivity,"val-sensitivity",i=>`${i.toFixed(1)}x`),e("opt-resolution",t.resolutionScale,"val-resolution",i=>`${Math.round(i*100)}%`),e("opt-fov",t.fov,"val-fov",i=>`${Math.round(i)}°`),e("opt-volume",t.volume,"val-volume",i=>`${Math.round(i*100)}%`);const n=(i,r)=>{const a=document.getElementById(i);a&&(a.checked=!!r)};n("opt-battery",t.batterySaver),n("opt-shadows",t.shadows),n("opt-sunflare",t.sunFlare),n("opt-storm",t.dustStorm),n("opt-fps",t.showFps),this._updateFpsVisibility()}_updateFpsVisibility(){this.fpsEl?.classList.toggle("hidden",!this.settings.data.showFps)}_checkOrientation(){if(this._portraitDismissed||!this.portraitWarning)return;const t=window.innerHeight>window.innerWidth&&window.innerWidth<680;this.portraitWarning.classList.toggle("hidden",!t)}isGateActive(){return!!(this.fullscreenGate&&!this.fullscreenGate.classList.contains("hidden"))}dismissGateForDebug(){this.fullscreenGate?.classList.remove("active"),this.fullscreenGate?.classList.add("hidden")}showTitleScreen(){this.inGameplay=!1,this.hudLayer?.classList.add("hidden"),this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.titleScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.titleScreen?.classList.add("active"))}hideTitleScreen(){this.titleScreen?.classList.remove("active"),setTimeout(()=>this.titleScreen?.classList.add("hidden"),450)}showHUD(){this.inGameplay=!0,this.hudLayer?.classList.remove("hidden"),this._updateFpsVisibility()}hideHUD(){this.hudLayer?.classList.add("hidden")}openSettings(t){document.pointerLockElement&&document.exitPointerLock?.(),this._syncSettingsUI(),this.returnTitleBtn?.classList.toggle("hidden",!t),this.settingsModal?.classList.remove("hidden"),this.isModalOpen=!0,t&&this.onPauseToggle?.(!0)}openInspectModal(t,e,n,i){document.pointerLockElement&&document.exitPointerLock?.(),document.getElementById("inspect-tag").textContent=t,document.getElementById("inspect-title").textContent=e,document.getElementById("inspect-body").textContent=n,this._inspectCloseCb=i,this.inspectModal?.classList.remove("hidden"),this.isModalOpen=!0,this.onPauseToggle?.(!0)}showEndingScreen(){this.inGameplay=!1,this.hideHUD(),this.endingScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.endingScreen?.classList.add("active"))}updateMission(t,e,n=null){if(this.missionTextEl&&this.missionTextEl.textContent!==t&&(this.missionTextEl.textContent=t),this.missionArrowEl)if(n!==null&&Number.isFinite(n)){const i=Math.round(n);i!==this._lastArrowDeg&&(this._lastArrowDeg=i,this.missionArrowEl.style.transform=`rotate(${i}deg)`),this._arrowHidden!==!1&&(this._arrowHidden=!1,this.missionArrowEl.classList.remove("hidden"))}else this._arrowHidden!==!0&&(this._arrowHidden=!0,this.missionArrowEl.classList.add("hidden"));this.missionDistEl&&(e?(this._lastDistText!==e&&(this._lastDistText=e,this.missionDistEl.textContent=e),this._distHidden!==!1&&(this._distHidden=!1,this.missionDistEl.classList.remove("hidden"))):this._distHidden!==!0&&(this._distHidden=!0,this.missionDistEl.classList.add("hidden")))}updateClock(t,e){if(this.clockEl&&this._lastClockText!==t&&(this._lastClockText=t,this.clockEl.textContent=t),this.sunIconEl){const n=e>.65?"#ff9d42":"#ffe08a";this._lastSunColor!==n&&(this._lastSunColor=n,this.sunIconEl.style.color=n)}}updateInteractPrompt(t){const e=t?t.id:null;if(e!==this._lastInteractId){if(this._lastInteractId=e,!t){this.reticleDot?.classList.remove("interactive"),this.mobileInteractBtn?.classList.add("hidden");return}this.reticleDot?.classList.add("interactive"),this.mobileInteractText&&(this.mobileInteractText.textContent=t.label),this.mobileInteractBtn?.classList.remove("hidden")}}updateFPS(t){this.fpsEl&&this.settings.data.showFps&&(this.fpsEl.textContent=`${Math.round(t)} FPS`)}}class Tm{constructor(){this.canvas=document.getElementById("game-canvas"),this.settings=new om,this.audio=new hm,this.modelManager=new cm,this.paused=!1,this.tabHidden=!1,this.elapsed=0,this.fpsFrames=0,this.fpsAccum=0,this.dynamicDprMult=1,this._lastRenderMs=0,this._renderedInitialFrame=!1,this._initRenderer(),this._bootAsync()}async _bootAsync(){await this.modelManager.preloadAll(),this._initWorld(),this._initGameplay(),this._bindSettings(),this._bindVisibilityGuard(),this._exposeDebugAPI(),window.addEventListener("resize",()=>this._onResize()),this._onResize(),this.cutscenes.startTitleCamera(),requestAnimationFrame(t=>this._animate(t))}_initRenderer(){this.renderer=new am({canvas:this.canvas,antialias:!0,powerPreference:ue?"default":"high-performance",stencil:!1}),this.renderer.outputColorSpace=De,this.renderer.toneMapping=Zo,this.renderer.toneMappingExposure=.96,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ue?ca:jo,this.scene=new ia,this.camera=new We(this.settings.data.fov,window.innerWidth/window.innerHeight,.14,1150)}_initWorld(){this.texManager=new lm(this.renderer),this.physics=new dm(ae),this.sky=new _m(this.scene,this.renderer,this.settings),this.desert=new xm(this.scene,this.texManager,this.modelManager,this.physics,this.settings),this.house=new vm(this.scene,this.texManager,this.modelManager,this.physics,this.desert.jeepWorldPos,this.desert.tentBarrelWorldPos),this.dustStorm=new Mm(this.scene,this.settings)}_initGameplay(){this.player=new ym(this.camera,this.physics,this.audio,this.settings),this.cutscenes=new Sm(this.camera,this.sky,this.audio,this.player),this.ui=new bm(this.settings,this.audio),this.story=new Em(this.audio,this.sky,this.house,this.cutscenes,this.ui,this.dustStorm),this.player.onBoundaryHit=()=>{this.story.sayImmediate("الصحراء هنا بلا نهاية... لن أبتعد كثيراً قبل إنهاء مهمتي.")},this.ui.onStartGame=()=>{this.story.reset(),this.cutscenes.startWakeupCutscene(t=>this.story.sayImmediate(t,"thought"),()=>this.ui.showHUD())},this.ui.onInteract=()=>{if(this.player.enabled&&this.player.focusedInteractable){try{navigator.vibrate&&navigator.vibrate(15)}catch{}this.story.handleInteract(this.player.focusedInteractable)}},this.ui.onPauseToggle=t=>{this.paused=t,this.audio.setSuspended(t||this.tabHidden),this.cutscenes.mode==="gameplay"&&(this.player.enabled=!t)},this.ui.onReturnToTitle=()=>{this.paused=!1,this.audio.setSuspended(!1),this.player.enabled=!1,this.story.reset(),this.cutscenes.startTitleCamera(),this.ui.showTitleScreen()},this.ui.onFreeRoam=()=>{this.story.freeRoam=!0,this.dustStorm.setTargetIntensity(0,!0),this.sky.setTimeOfDay(.96,!0),this.cutscenes.mode="gameplay",this.cutscenes.containerEl?.classList.remove("cinematic-bars-active"),this.player.setPose(-5,-4,-.4,-.02),this.player.enabled=!0,this.story.sayImmediate("وقت العصر الذهبي... تجوّل بحرية في الصحراء وتأمل الأجواء.")},this.ui.onReplayChapter=()=>this.ui.onStartGame()}_bindVisibilityGuard(){document.addEventListener("visibilitychange",()=>{this.tabHidden=document.hidden,this.audio.setSuspended(this.tabHidden||this.paused),this.tabHidden||(this._lastRenderMs=performance.now())})}_applyPixelRatio(){const t=this.settings.data,e=this.settings.getPreset(),n=Math.max(.6,Math.min(1.85,Math.min(window.devicePixelRatio||1,e.dprCap)*t.resolutionScale));this.renderer.setPixelRatio(n)}_bindSettings(){const t=(e,n)=>{this._applyPixelRatio(),this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.audio.setVolume(e.volume),this.texManager.setAnisotropy(n.anisotropy),this.sky.applySettings(e,n),this.desert.applySettings(n),this.dustStorm.applySettings(e,n)};t(this.settings.data,this.settings.getPreset()),this.settings.onChange(t)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}_animate(t){if(requestAnimationFrame(u=>this._animate(u)),this.tabHidden)return;if(this._renderedInitialFrame&&(this.paused||this.ui.isModalOpen||this.ui.isGateActive())){this._lastRenderMs=t;return}const i=1e3/(this.cutscenes.mode==="title"||this.cutscenes.mode==="ending"?24:this.settings.getEffectiveFpsCap());this._lastRenderMs===0&&(this._lastRenderMs=t-i);const r=t-this._lastRenderMs;if(this._renderedInitialFrame&&r<i-1.5)return;const a=Math.max(.001,r/1e3),o=Math.min(a,.055);if(this._lastRenderMs=t,this._renderedInitialFrame=!0,this.elapsed+=o,this.cutscenes.mode==="gameplay"){const u=this.house.getActiveInteractable();this.player.update(o,this.elapsed,u),this.ui.updateInteractPrompt(this.player.focusedInteractable)}else this.cutscenes.update(o,this.elapsed);const l=this.cutscenes.mode==="gameplay"?this.player.position:this.camera.position,h=this.cutscenes.mode==="gameplay"?this.player.isInsideHouse:!1,d=this.dustStorm.update(o,this.elapsed,this.camera,l,h,this.sky.timeOfDay);if(this.sky.setStormIntensity(d),this.desert.setStormIntensity(d),this.house.setStormIntensity(d),this.audio.setStormIntensity(d),this.sky.update(o,this.elapsed,this.camera,l,h),this.desert.update(o,this.elapsed,l,this.sky.timeOfDay),this.house.update(o,this.elapsed,this.camera,this.sky.timeOfDay),this.audio.updateAmbience(o,h?1:0,this.sky.timeOfDay,this.elapsed),this.story.update(o,this.cutscenes.mode==="gameplay",l,this.player.yaw),this.renderer.render(this.scene,this.camera),this.fpsFrames++,this.fpsAccum+=a,this.fpsAccum>=.85){const u=this.fpsFrames/this.fpsAccum;this.ui.updateFPS(u),this.fpsFrames=0,this.fpsAccum=0}}_exposeDebugAPI(){window.__SARAB__={showTitle:()=>{this.ui.dismissGateForDebug(),this.ui.showTitleScreen()},setTimeOfDay:t=>this.sky.setTimeOfDay(t,!0),setStorm:t=>{this.dustStorm.setTargetIntensity(t,!0),this.sky.setStormIntensity(t,!0),this.desert.setStormIntensity(t),this.house.setStormIntensity(t),this.audio.setStormIntensity(t)},teleport:(t,e,n,i=0,r=!0)=>{const a=this.sky.timeOfDay,o=this.dustStorm.targetIntensity;this.ui.dismissGateForDebug(),this.ui.hideTitleScreen(),this.cutscenes.mode="gameplay",this.cutscenes.containerEl?.classList.remove("cinematic-bars-active"),this.story.reset(),r&&(this.sky.setTimeOfDay(a,!0),this.dustStorm.setTargetIntensity(o,!0),this.sky.setStormIntensity(o,!0)),this.ui.showHUD(),this.player.enabled=!0,this.player.setPose(t,e,n,i)},setMission:t=>{this.story.missionIndex=t,this.story._activateCurrentMission()},triggerSubtitle:(t,e="thought")=>this.story.sayImmediate(t,e),testRockCollision:()=>{const n=ae(-13.5,-9.5);let i=0;const r=.36,a=1.42+r;for(let o=0;o<16;o++){const l=o/16*Math.PI*2,h=new L(-13.5+Math.cos(l)*.5,n,-9.5+Math.sin(l)*.5);this.physics.resolveHorizontal(h,r);const d=Math.hypot(h.x- -13.5,h.z- -9.5);d<a&&(i=Math.max(i,a-d))}return{rockBlockedCleanly:i<.02,maxPenetration:Number(i.toFixed(4))}},testMesaCollision:()=>{let e=0,n=0;for(const i of this.physics.mesas)for(let r=0;r<36;r++){const a=r/36*Math.PI*2,o=i.baseY+.5,l=Math.max(0,Math.min(.95,(o-i.meshBottomY)/i.height)),h=Si(a,l),d=Math.cos(a)*h*.75*i.sx,u=Math.sin(a)*h*.75*i.sz,c=i.x+(d*i.cos+u*i.sin),p=i.z+(-d*i.sin+u*i.cos),g=new L(c,o,p);this.physics.resolveHorizontal(g,.36);const _=g.x-i.x,m=g.z-i.z,f=_*i.cos-m*i.sin,v=_*i.sin+m*i.cos,y=f/i.sx,x=v/i.sz,R=Math.atan2(x,y),A=Si(R,l),b=Math.hypot(y,x);if(b<A){const C=(A-b)*Math.min(i.sx,i.sz);e=Math.max(e,C)}n++}return{mesasTested:this.physics.mesas.length,anglesTested:n,allMesasSolid:e<.01,maxPenetrationMeters:Number(e.toFixed(4))}},testJeepClimb:()=>{const t=this.desert.jeepWorldPos.x,e=this.desert.jeepWorldPos.z,n=ae(t,e),i=this.physics.getGroundInfo(t,e,n+1.2);return{groundY:Number(n.toFixed(2)),roofStandY:Number(i.groundY.toFixed(2)),canClimbJeep:i.groundY>n+.8}},getStats:()=>({drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,shadowUpdates:this.sky.shadowUpdatesCount,skyCacheActive:this.sky.proceduralSky.useCache,fpsCap:this.settings.getEffectiveFpsCap(),timeOfDay:this.sky.timeOfDay,storm:Number(this.dustStorm.intensity.toFixed(2)),pos:this.player.position.toArray(),indoor:this.player.isInsideHouse,modelsLoaded:this.modelManager.geometries.size})}}}window.addEventListener("DOMContentLoaded",()=>{new Tm});
