function init() 
	{
		renderer = new THREE.WebGLRenderer(  { antialias: true } );
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 1000 );
		
		camera.position.y = 10;
		
		scene = new THREE.Scene();
		scene.fog = new THREE.Fog( 0xeeeeee, 0, 1000 );
		
		var light = new THREE.DirectionalLight( 0xffffff, 1.5 );
		light.position.set( 1, 1, 1 );
		scene.add( light );
		var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
		light.position.set( -1, - 0.5, -1 );
		scene.add( light );
		
		controls = new THREE.FirstPersonControls( camera );
		controls.movementSpeed = 100;
		controls.lookSpeed = 0.085;
		
		var maxAnisotropy = renderer.getMaxAnisotropy();
		
		// floor
		geometry = new THREE.PlaneGeometry( 1400, 1000, 256, 256 );
		

		var texture = THREE.ImageUtils.loadTexture( "img/brickwhiteplastered.jpg" );
		var material = new THREE.MeshPhongMaterial( { color: 0xeeeeee, map:texture } );

		texture.anisotropy = maxAnisotropy;
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 20,20 );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.x = - Math.PI / 2;
		
		scene.add( mesh );
		// objects
		var ab = 31;
		geometry = new THREE.CubeGeometry( 1220, 60, 20 );

		material = new THREE.MeshPhongMaterial( { specular: 0xffffff, shading: THREE.FlatShading  });
		material.color.setHex(0x35172d);

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
				
		var geo_horiz_300 = new THREE.CubeGeometry( 300, 60, 20 );
		var geo_horiz_280 = new THREE.CubeGeometry( 280, 60, 20 );
		var geo_horiz_160 = new THREE.CubeGeometry( 160, 60, 20 );
		var geo_vert_240 = new THREE.CubeGeometry( 20, 60, 240 );
		var geo_vert_160 = new THREE.CubeGeometry( 20, 60, 160 );
		var geo_vert_40 = new THREE.CubeGeometry( 20, 60, 40 );
		var geo_mid_40 = new THREE.CubeGeometry( 40, 40, 40 );
		var geo_mid_60 = new THREE.CubeGeometry( 60, 60, 40 );

		var mesh0, mesh1, mesh2, mesh3, mesh4, mesh5;
		
		//logo
		cube = new THREE.Mesh(geo_mid_40, material);
			cube.position.x = 0;
			cube.position.y = ab;
			cube.position.z = 200;
			scene.add( cube );
		
		// info locations
		for (var i = 1; i <= 4; i++) {
		mesh1 = new THREE.Mesh(geo_mid_60, material);
			switch(i) {
			case 1 : 
				mesh1.position.x = 375;
				mesh1.position.y = ab;
				mesh1.position.z = 145;
				scene.add( mesh1 );
				break;
			case 2 : 
				mesh1.position.x = -375;
				mesh1.position.y = ab;
				mesh1.position.z = 145;
				scene.add( mesh1 );
				break;
			case 3 :
				mesh1.position.x = 375;
				mesh1.position.y = ab;
				mesh1.position.z = -145;
				scene.add( mesh1 );
				break;
			case 4 : 
				mesh1.position.x = -375;
				mesh1.position.y = ab;
				mesh1.position.z = -145;
				scene.add( mesh1 );
				break;
			}
		}
		
		
		//walls wing east
			// side right top
			mesh3 = new THREE.Mesh( geo_vert_240, material );  
				mesh3.position.x = 505;
				mesh3.position.y = ab;
				mesh3.position.z = 175;
				scene.add( mesh3 );
			// side right bottom 
			mesh3 = new THREE.Mesh( geo_vert_240, material );  
				mesh3.position.x = 505;
				mesh3.position.y = ab;
				mesh3.position.z = -175;
				scene.add( mesh3 );
			// side left bottom 
			mesh3 = new THREE.Mesh( geo_vert_240, material );  
				mesh3.position.x = 245;
				mesh3.position.y = ab;
				mesh3.position.z = 175;
				scene.add( mesh3 );
			//side left top
			for (var i = 0; i < 5; i++) {
				mesh3 = new THREE.Mesh( geo_vert_40, material);
				mesh3.position.x = 245;
				mesh3.position.y = ab;
				mesh3.position.z = -120+(i*-40);
				scene.add( mesh3 );
			}
			// bottom
			mesh3 = new THREE.Mesh( geo_horiz_280, material ); 
				mesh3.position.x = 375;
				mesh3.position.y = ab;
				mesh3.position.z = -305;
				scene.add( mesh3 );
			mesh3 = new THREE.Mesh( geo_horiz_280, material ); // top
				mesh3.position.x = 375;
				mesh3.position.y = ab;
				mesh3.position.z = 305;
				scene.add( mesh3 );

		//walls wing west	
			mesh4 = new THREE.Mesh( geo_vert_240, material );  // side left top
				mesh4.position.x = -505;
				mesh4.position.y = ab;
				mesh4.position.z = 175;
				scene.add( mesh4 );
			mesh4 = new THREE.Mesh( geo_vert_240, material );  // side left bottom 
				mesh4.position.x = -505;
				mesh4.position.y = ab;
				mesh4.position.z = -175;
				scene.add( mesh4 );
			for (var i = 0; i < 5; i++) {
				mesh3 = new THREE.Mesh( geo_vert_40, material);
				mesh3.position.x = -245;
				mesh3.position.y = ab;
				mesh3.position.z = -120+(i*-40);
				scene.add( mesh3 );
			}
			mesh4 = new THREE.Mesh( geo_vert_240, material );  // side right bottom 
				mesh4.position.x = -245;
				mesh4.position.y = ab;
				mesh4.position.z = 175;
				scene.add( mesh4 );
			mesh4 = new THREE.Mesh( geo_horiz_280, material ); // bottom
				mesh4.position.x = -375;
				mesh4.position.y = ab;
				mesh4.position.z = -305;
				scene.add( mesh4 );
			mesh4 = new THREE.Mesh( geo_horiz_280, material ); // top
				mesh4.position.x = -375;
				mesh4.position.y = ab;
				mesh4.position.z = 305;
				scene.add( mesh4 );

		// wall centre north south	
			mesh2 = new THREE.Mesh( geo_horiz_300, material ); // top
				mesh2.position.x = 0;
				mesh2.position.y = ab;
				mesh2.position.z = -305;
				scene.add( mesh2 );
			mesh2 = new THREE.Mesh( geo_horiz_300, material ); // bottom
				mesh2.position.x = 0;
				mesh2.position.y = ab;
				mesh2.position.z = 55;
				scene.add( mesh2 );
			for (var i = 0; i < 5; i++) {
				mesh2 = new THREE.Mesh( geo_vert_40, material);
				mesh2.position.x = 140;
				mesh2.position.y = ab;
				mesh2.position.z = -120+(i*-40);
					scene.add( mesh2 );
				mesh3 = new THREE.Mesh( geo_vert_40, material);
				mesh3.position.x = -140;
				mesh3.position.y = ab;
				mesh3.position.z = -120+(i*-40);
					scene.add( mesh3 );
			}
		
		renderer.setClearColorHex(0xeeeeee, 1.0);
		//renderer.setSize( window.innerWidth, 99*window.innerHeight/100);
		renderer.setSize( window.innerWidth, window.innerHeight);
		document.body.appendChild( renderer.domElement );
		window.addEventListener( 'resize', onWindowResize, false );
	}