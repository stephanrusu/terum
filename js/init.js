function init() {
	renderer = new THREE.WebGLRenderer(  { antialias: true } );
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0xffffff, 0, 1000 );

	
	var light = new THREE.DirectionalLight( 0xffffff, 1.5 );
	light.position.set( 1, 1, 1 );
	scene.add( light );
	var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
	light.position.set( -1, - 0.5, -1 );
	scene.add( light );
	
	controls = new THREE.PointerLockControls( camera );
	scene.add( controls.getObject() );
	
	ray = new THREE.Ray();
	ray.direction.set( 0, -1, 0 );
	
	var maxAnisotropy = renderer.getMaxAnisotropy();
	
	// floor
	geometry = new THREE.PlaneGeometry( 1400, 1000, 256, 256 );
	

	var texture = THREE.ImageUtils.loadTexture( "img/grasslight-big.jpg" );
	var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );

	texture.anisotropy = maxAnisotropy;
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set( 25,25 );

	
	//material = new THREE.MeshBasicMaterial( { map: texture });
	var mesh = new THREE.Mesh( geometry, material );
	mesh.rotation.x = - Math.PI / 2;
	
	scene.add( mesh );
	
	// objects
	var ab = 31;
	geometry = new THREE.CubeGeometry( 1220, 60, 20 );

	material = new THREE.MeshPhongMaterial( { specular: 0xffffff, shading: THREE.FlatShading  });
	material.color.setHex(0x6949c2);

	// begin north
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = 0;
		mesh.position.y = ab;
		mesh.position.z = -400;
		scene.add( mesh );
		objects.push( mesh );
	// end north
	// begin south
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = 0;
		mesh.position.y = ab;
		mesh.position.z = 400;
		scene.add( mesh );		
		objects.push( mesh );		
	// end south
	
	geometry = new THREE.CubeGeometry( 20, 60, 780 );

	// begin east
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = 600;
		mesh.position.y = ab;
		mesh.position.z = 0;
		scene.add( mesh );		
		objects.push( mesh );	
	// end east
	// begin west
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = -600;
		mesh.position.y = ab;
		mesh.position.z = 0;
		scene.add( mesh );		
		objects.push( mesh );
	//end west

	geo_horiz_300 = new THREE.CubeGeometry( 300, 60, 20 );
	geo_horiz_270 = new THREE.CubeGeometry( 270, 60, 20 );
	geo_horiz_150 = new THREE.CubeGeometry( 150, 60, 20 );
	geo_vert_250 = new THREE.CubeGeometry( 20, 60, 250 );
	geo_vert_150 = new THREE.CubeGeometry( 20, 60, 150 );

	//walls wing east
		mesh3 = new THREE.Mesh( geo_vert_250, material );  // side right top
			mesh3.position.x = 500;
			mesh3.position.y = ab;
			mesh3.position.z = 170;
			scene.add( mesh3 );
			objects.push( mesh3 );
		mesh3 = new THREE.Mesh( geo_vert_250, material );  // side right bottom 
			mesh3.position.x = 500;
			mesh3.position.y = ab;
			mesh3.position.z = -170;
			scene.add( mesh3 );
			objects.push( mesh3 );
		mesh3 = new THREE.Mesh( geo_vert_150, material );  // side left top 
			mesh3.position.x = 250;
			mesh3.position.y = ab;
			mesh3.position.z = -220;
			scene.add( mesh3 );
			objects.push( mesh3 );
		mesh3 = new THREE.Mesh( geo_vert_250, material );  // side left bottom 
			mesh3.position.x = 250;
			mesh3.position.y = ab;
			mesh3.position.z = 170;
			scene.add( mesh3 );
			objects.push( mesh3 );	
		mesh3 = new THREE.Mesh( geo_horiz_270, material ); // bottom
			mesh3.position.x = 375;
			mesh3.position.y = ab;
			mesh3.position.z = -305;
			scene.add( mesh3 );
			objects.push( mesh3 );
		mesh3 = new THREE.Mesh( geo_horiz_270, material ); // top
			mesh3.position.x = 375;
			mesh3.position.y = ab;
			mesh3.position.z = 305;
			scene.add( mesh3 );
			objects.push( mesh3 );

	//walls wing west	
		mesh4 = new THREE.Mesh( geo_vert_250, material );  // side left top
			mesh4.position.x = -500;
			mesh4.position.y = ab;
			mesh4.position.z = 170;
			scene.add( mesh4 );
			objects.push( mesh4 );
		mesh4 = new THREE.Mesh( geo_vert_250, material );  // side left bottom 
			mesh4.position.x = -500;
			mesh4.position.y = ab;
			mesh4.position.z = -170;
			scene.add( mesh4 );
			objects.push( mesh4 );
		mesh4 = new THREE.Mesh( geo_vert_150, material );  // side right top
			mesh4.position.x = -250;
			mesh4.position.y = ab;
			mesh4.position.z = -220;
			scene.add( mesh4 );
			objects.push( mesh4 );
		mesh4 = new THREE.Mesh( geo_vert_250, material );  // side right bottom 
			mesh4.position.x = -250;
			mesh4.position.y = ab;
			mesh4.position.z = 170;
			scene.add( mesh4 );
			objects.push( mesh4 );		
		mesh4 = new THREE.Mesh( geo_horiz_270, material ); // bottom
			mesh4.position.x = -375;
			mesh4.position.y = ab;
			mesh4.position.z = -305;
			scene.add( mesh4 );
			objects.push( mesh4 );
		mesh4 = new THREE.Mesh( geo_horiz_270, material ); // top
			mesh4.position.x = -375;
			mesh4.position.y = ab;
			mesh4.position.z = 305;
			scene.add( mesh4 );
			objects.push( mesh4 );

	// wall centre north south	
		mesh2 = new THREE.Mesh( geo_horiz_300, material ); // top
			mesh2.position.x = 0;
			mesh2.position.y = ab;
			mesh2.position.z = -305;
			scene.add( mesh2 );
			objects.push( mesh2 );
		mesh2 = new THREE.Mesh( geo_horiz_300, material ); // bottom
			mesh2.position.x = 0;
			mesh2.position.y = ab;
			mesh2.position.z = 55;
			scene.add( mesh2 );
			objects.push( mesh2 );
		mesh2 = new THREE.Mesh( geo_vert_150, material );  // right
			mesh2.position.x = 140;
			mesh2.position.y = ab;
			mesh2.position.z = -220;
			scene.add( mesh2 );
			objects.push( mesh2 );
		mesh2 = new THREE.Mesh( geo_vert_150, material );  // left
			mesh2.position.x = -140;
			mesh2.position.y = ab;
			mesh2.position.z = -220;
			scene.add( mesh2 );
			objects.push( mesh2 );

	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );
}