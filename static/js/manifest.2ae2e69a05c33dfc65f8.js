!function(r){var n=window.webpackJsonp;window.webpackJsonp=function(e,u,c){for(var f,i,p,a=0,l=[];a<e.length;a++)i=e[a],o[i]&&l.push(o[i][0]),o[i]=0;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&(r[f]=u[f]);for(n&&n(e,u,c);l.length;)l.shift()();if(c)for(a=0;a<c.length;a++)p=t(t.s=c[a]);return p};var e={},o={2:0};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=e,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:e})},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="/",t.oe=function(r){throw console.error(r),r}}([]);
//# sourceMappingURL=manifest.2ae2e69a05c33dfc65f8.js.map

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>canvas-nest.js</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    html, body {
      height: 100%;
      width: 100%;
    }

    #github-iframe {
      position: fixed;
      left: 32px;
      top: 32px;
    }

    #area-render {
      position: fixed;
      width: 320px;
      height: 160px;
      right: 4px;
      bottom: 4px;
      border: dashed 1px #ccc;
    }
  </style>
</head>
<body>
<div id="github-iframe"></div>

<div id="area-render"></div>

<script type="text/javascript" color="255,0,0" pointColor="255,0,0" opacity='0.7' zIndex="-2" count="100" src="dist/canvas-nest.js"></script>
<script type="text/javascript" src="dist/canvas-nest.umd.js"></script>
<script type="text/javascript">
  var cn = new CanvasNest(document.getElementById('area-render'), {
    color: '255,0,255',
    count: 50,
  });

