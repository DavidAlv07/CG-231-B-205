        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        //Escena
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a3b4c);
        
        var size = 150;
        var divisions = 160;
        var axesHelper = new THREE.AxesHelper(1000);
        scene.add(axesHelper);
        
        //GRILLA
        const gridHelper = new THREE.GridHelper(size, divisions);
        scene.add(gridHelper);

       //CAMARA
        var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
        camera.position.z = 4.5;
        camera.position.x = -1.2;
        camera.position.y = 2;

        camera.rotation.set(0, -0.5, 0);

        

        var lado = 5;

        //renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        var controls = new THREE.OrbitControls(camera, renderer.domElement);//ORBITCONTROLS
        
        //CUBE #1
        var geometry = new THREE.BoxGeometry(lado,lado,lado);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var cube = new THREE.Mesh(geometry, material);
       
        //CUBE #2
        var geometry2 = new THREE.BoxGeometry(lado,lado,lado);
        var material = new THREE.MeshBasicMaterial({color: 0xffffff});
        var cube2 = new THREE.Mesh(geometry2, material);
        

        //CUBE #3
        var geometry1 = new THREE.BoxGeometry(lado,lado,lado);
        var material = new THREE.MeshBasicMaterial({color: 0xff0000});
        var cube3 = new THREE.Mesh(geometry1, material);
        

        document.addEventListener('keydown', function(event) {
            switch(event.keyCode) {
                case 49: // APARECER PRIMER CUBO (TECLA 1)
                scene.add(cube);
                console.log(cube.x)
                break;
                case 50: // APARECER SEGUNDO CUBO (TECLA 2)
                scene.add(cube2);
                console.log(cube2.x)
                break;
                case 51: // APARECER TERCER CUBO (TECLA 3)
                scene.add(cube3);
                console.log(cube3.geometry.x)
                break;
                
                case 81: // rotar cubo#2 (letra q)
                cube2.scale.x/=2
                cube2.scale.y/=2
                cube2.scale.z/=2
                console.log(cube2.scale.x)
                break;

                case 87: // trasladar cubo#2 (letra w)
                cube2.position.y+=lado*3/4
                //cube2.position.y+=1
                //console.log(cube2.position.y)
                break;

                case 69: // escalar cubo#3 (letra e)
                cube3.scale.x/=4
                cube3.scale.y/=4
                cube3.scale.z/=4
                //console.log(lado/4)
                break;
                
                case 82: // trasladar cubo#3 (letra r)
                cube3.position.y+=lado*9/8
                //cube3.position.y+=2
                //console.log(cube3.position.y)
                break;

                
                case 53: //Limpiar la escena (tecla 5)
                cube2.scale.x*=2
                cube2.scale.y*=2
                cube2.scale.z*=2
                cube2.position.y-=lado*3/4
                cube3.scale.x*=4
                cube3.scale.y*=4
                cube3.scale.z*=4
                cube3.position.y-=lado*9/8
                scene.remove(cube);
                scene.remove(cube2);
                scene.remove(cube3);
                break;
            }
        });

      


        
      function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}


render();

 