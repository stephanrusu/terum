function init() 
	{
		renderer = new THREE.WebGLRenderer(  { antialias: true } );
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 1000 );
		
		camera.position.y = 10;
		
		scene = new THREE.Scene();
		scene.fog = new THREE.Fog( 0xffffff, 0, 1000 );
		
		var light = new THREE.DirectionalLight( 0xffffff, 1.5 );
		light.position.set( 1, 1, 1 );
		scene.add( light );
		var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
		light.position.set( -1, - 0.5, -1 );
		scene.add( light );
		
		controls = new THREE.FirstPersonControls( camera );
		controls.movementSpeed = 100;
		controls.lookSpeed = 0.050;
		
		var maxAnisotropy = renderer.getMaxAnisotropy();
		
		// floor
		geometry = new THREE.PlaneGeometry( 1400, 1000, 256, 256 );
		

		var texture = THREE.ImageUtils.loadTexture( "img/brickwhiteplastered.jpg" );
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );
		

		texture.anisotropy = maxAnisotropy;
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 10,10 );
		
		var texture1 = THREE.ImageUtils.loadTexture( "img/brickblueplastered.jpg" );
		texture1.anisotropy = maxAnisotropy;
		texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
		texture1.repeat.set( 10, 15 );

		var mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.x = - Math.PI / 2;
		
		scene.add( mesh );
		// objects
		var ab = 31;
		geometry = new THREE.CubeGeometry( 1220, 60, 20 );

		material = new THREE.MeshPhongMaterial( { specular: 0xffffff, shading: THREE.FlatShading, map:texture1  });
		//material.color.setHex(0x6949c2);

		// begin north
			mesh = new THREE.Mesh( geometry, material );
			mesh.position.x = 0;
			mesh.position.y = ab;
			mesh.position.z = -400;
			scene.add( mesh );			
		// end north
		// begin south
			mesh = new THREE.Mesh( geometry, material );
			mesh.position.x = 0;
			mesh.position.y = ab;
			mesh.position.z = 400;
			scene.add( mesh );		
		// end south
		
		geometry = new THREE.CubeGeometry( 20, 60, 780 );

		// begin east
			mesh = new THREE.Mesh( geometry, material );
			mesh.position.x = 600;
			mesh.position.y = ab;
			mesh.position.z = 0;
			scene.add( mesh );						
		// end east
		// begin west
			mesh = new THREE.Mesh( geometry, material );
			mesh.position.x = -600;
			mesh.position.y = ab;
			mesh.position.z = 0;
			scene.add( mesh );		
		//end west	
		var geo_mid_40 = new THREE.CubeGeometry( 40, 40, 40 );
				//logo
		cube = new THREE.Mesh(geo_mid_40, material);
			cube.position.x = 0;
			cube.position.y = ab;
			cube.position.z = 200;
		scene.add( cube );
		objects.push ( cube );
			
		projector = new THREE.Projector();
			
		renderer.setSize( window.innerWidth, window.innerHeight);
		document.body.appendChild( renderer.domElement );
		document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		window.addEventListener( 'resize', onWindowResize, false );
	}