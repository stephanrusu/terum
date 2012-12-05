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
	

	var texture = THREE.ImageUtils.loadTexture( "img/floor.jpg" );
	var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );

	texture.anisotropy = maxAnisotropy;
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set( 128,128 );

	
	
	//material = new THREE.MeshBasicMaterial( { map: texture });
	var mesh = new THREE.Mesh( geometry, material );
	mesh.rotation.x = - Math.PI / 2;
	
	scene.add( mesh );
	
	// objects
	geometry = new THREE.CubeGeometry( 1220, 60, 20 );
	material = new THREE.MeshPhongMaterial( { specular: 0xffffff, shading: THREE.FlatShading  });
	
	// begin north
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = 0;
		mesh.position.y = 31;
		mesh.position.z = -400;
		scene.add( mesh );
		material.color.setHex(0x6949c2);
		objects.push( mesh );
	// end north
	// begin south 			
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = 0;
		mesh.position.y = 31;
		mesh.position.z = 400;
		scene.add( mesh );
		material.color.setHex(0x6949c2);
		objects.push( mesh );		
	// end south
	
	geometry = new THREE.CubeGeometry( 20, 60, 780 );

	// begin east
		
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = 600;
		mesh.position.y = 31;
		mesh.position.z = 0;
		scene.add( mesh );
		material.color.setHex(0x6949c2);
		objects.push( mesh );	
	// end east
	// begin west
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = -600;
		mesh.position.y = 31;
		mesh.position.z = 0;
		scene.add( mesh );
		material.color.setHex(0x6949c2);
		objects.push( mesh );
	//end west

	
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );
}