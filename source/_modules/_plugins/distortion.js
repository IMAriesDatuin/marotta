"use strict";

// AUTHOR: https://github.com/Creative-Srijon/WebGL-Distortion-Hover-Effects
var hoverEffect = function hoverEffect(opts) {
  var THREE = window.THREE;
  var vertex = "\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n";
  var fragment = "\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n  vec2 distortedPosition1 = vUv + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = vUv + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n";

  function firstDefined() {
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] !== undefined) return arguments[i];
    }
  }

  var parent = opts.parent;
  var dispImage = opts.displacementImage;
  var image1 = opts.image1;
  var image2 = opts.image2;
  var intensity1 = firstDefined(opts.intensity1, opts.intensity, 1);
  var intensity2 = firstDefined(opts.intensity2, opts.intensity, 1);
  var commonAngle = firstDefined(opts.angle, Math.PI / 4); // 45 degrees by default, so grayscale images work correctly

  var angle1 = firstDefined(opts.angle1, commonAngle);
  var angle2 = firstDefined(opts.angle2, -commonAngle * 3);
  var speedIn = firstDefined(opts.speedIn, opts.speed, 1.6);
  var speedOut = firstDefined(opts.speedOut, opts.speed, 1.2);
  var userHover = firstDefined(opts.hover, true);
  var easing = firstDefined(opts.easing, Expo.easeOut);

  if (!parent) {
    console.warn('Parent missing');
    return;
  }

  if (!(image1 && image2 && dispImage)) {
    console.warn('One or more images are missing');
    return;
  }

  var scene = new THREE.Scene();
  var camera = new THREE.OrthographicCamera(parent.offsetWidth / -2, parent.offsetWidth / 2, parent.offsetHeight / 2, parent.offsetHeight / -2, 1, 1000);
  camera.position.z = 1;
  var renderer = new THREE.WebGLRenderer({
    antialias: false
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xffffff, 0.0);
  renderer.setSize(parent.offsetWidth, parent.offsetHeight);
  parent.appendChild(renderer.domElement);

  var render = function render() {
    // This will be called by the TextureLoader as well as TweenMax.
    renderer.render(scene, camera);
  };

  var loader = new THREE.TextureLoader();
  loader.crossOrigin = '';
  var texture1 = loader.load(image1, render);
  var texture2 = loader.load(image2, render);
  var disp = loader.load(dispImage, render);
  disp.wrapS = disp.wrapT = THREE.RepeatWrapping;
  texture1.magFilter = texture2.magFilter = THREE.LinearFilter;
  texture1.minFilter = texture2.minFilter = THREE.LinearFilter;
  var mat = new THREE.ShaderMaterial({
    uniforms: {
      intensity1: {
        type: 'f',
        value: intensity1
      },
      intensity2: {
        type: 'f',
        value: intensity2
      },
      dispFactor: {
        type: 'f',
        value: 0.0
      },
      angle1: {
        type: 'f',
        value: angle1
      },
      angle2: {
        type: 'f',
        value: angle2
      },
      texture1: {
        type: 't',
        value: texture1
      },
      texture2: {
        type: 't',
        value: texture2
      },
      disp: {
        type: 't',
        value: disp
      }
    },
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0
  });
  var geometry = new THREE.PlaneBufferGeometry(parent.offsetWidth, parent.offsetHeight, 1);
  var object = new THREE.Mesh(geometry, mat);
  scene.add(object);

  function transitionIn() {
    TweenMax.to(mat.uniforms.dispFactor, speedIn, {
      value: 1,
      ease: easing,
      onUpdate: render,
      onComplete: render
    });
  }

  function transitionOut() {
    TweenMax.to(mat.uniforms.dispFactor, speedOut, {
      value: 0,
      ease: easing,
      onUpdate: render,
      onComplete: render
    });
  }

  if (userHover) {
    parent.addEventListener('mouseenter', transitionIn);
    parent.addEventListener('touchstart', transitionIn);
    parent.addEventListener('mouseleave', transitionOut);
    parent.addEventListener('touchend', transitionOut);
  }

  window.addEventListener('resize', function (e) {
    renderer.setSize(parent.offsetWidth, parent.offsetHeight);
  });
  this.next = transitionIn;
  this.previous = transitionOut;
};