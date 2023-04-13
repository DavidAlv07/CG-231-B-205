         var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        //creating scene
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a3b4c);
        
        var size = 150;
        var divisions = 160;
        var axesHelper = new THREE.AxesHelper(1000);
        scene.add(axesHelper);
        
        //GRILLA
        const gridHelper = new THREE.GridHelper(size, divisions);
        scene.add(gridHelper);

        var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
        camera.position.z = 4.5;
        camera.position.x = -1.2;
        camera.position.y = 2;

        camera.rotation.set(0, -0.5, 0);

        var l = 1;

        //renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //add geometry
        var geometry = new THREE.BoxGeometry(l,l,l);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var cube = new THREE.Mesh(geometry, material);
       
        //cubo #2
        var geometry = new THREE.BoxGeometry(l,l,l);
        var material = new THREE.MeshBasicMaterial({color: 0x0000ff});
        var cube2 = new THREE.Mesh(geometry, material);
        

        //cube3
        var geometry1 = new THREE.BoxGeometry(l,l,l);
        var material = new THREE.MeshBasicMaterial({color: 0xff0000});
        var cube3 = new THREE.Mesh(geometry1, material);
        

        document.addEventListener('keydown', function(event) {
            switch(event.keyCode) {
                case 49: // APARECER PRIMER CUBO
                scene.add(cube);
                break;
                case 50: // APARECER SEGUNDO CUBO
                scene.add(cube2);
                break;
                case 51: // APARECER TERCER CUBO
                scene.add(cube3);
                break;
                
                case 81: // rotar cubo#2 (letra q)
                cube2.scale.x=l/2
                cube2.scale.y=l/2
                cube2.scale.z=l/2
                break;

                case 87: // trasladar cubo#2 (letra w)
                cube2.position.y+=l*3/4
                break;

                case 69: // trasladar cubo#3 (letra e)
                cube3.scale.x=l/4
                cube3.scale.y=l/4
                cube3.scale.z=l/4
                break;
                
                case 82: // trasladar cubo#3 (letra r)
                cube3.position.y+=l*9/8
                
                break;
            }
        });

        


        
        //animation
        var animate = function(){
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            
        }

        animate();

 