res.send( 200,`
	
	'use strict';
		
	//TODO: Query Variables  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//

	const query = new URLSearchParams( window.location.search );
	const state = new Object();	
	
	// TODO: Slugify XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
	
	const slugify = function(str){ const map = {
		'c' : 'ç|Ç',
		''  : /\s|\W/,'n':'ñ|Ñ',
	   	'e' : 'é|è|ê|ë|É|È|Ê|Ë',
	   	'i' : 'í|ì|î|ï|Í|Ì|Î|Ï',
	   	'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
	   	'o' : 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
	   	'a' : 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
	};	for (var pattern in map) { 
			str=str.replace( new RegExp(map[pattern],'g' ), pattern); 
		}	return str.toLowerCase();
	}
	
	//TODO: Events  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		
	const removeEvent = function( args ){ args[0].removeEventListener( args[1],args[2],true ); return args; }
	const addEvent = function( ...args ){ args[0].addEventListener( args[1],args[2],true ); return args; }
	
	//TODO: Element Modifier XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
	
	const replaceElement = function(...args){ args[1].parentElement.replaceChild( args[0],args[1] ); }
	const removeElement = function(...args){ args[0].parentElement.removeChild( args[0] ); }
	const createElement = function(...args){ return document.createElement(args); }
	const appendElement = function(...args){ return args[0].appendChild(args[1]); }
	
	//TODO: Dom Modifier XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
		
	const $$= function(...args){ return document.querySelectorAll(args); }
	const $ = function(...args){ return document.querySelector(args); }
	
	//TODO: Require Function XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
	
	const require = function( ...args ){
	
		return new Promise( async(res,rej)=>{
		args = args.flat(); for( var i=args.length; i--; ){
			
			const response = await ajax.get( args[i] );
			const file = await response.blob();
			var script = undefined;
			
			switch( file.type ){
				case 'application/javascript':
					script = window.createElement('script');
					script.src = URL.createObjectURL( file );
					script.type="text/javascript";
					window.$('head').appendChild(script);
				break;
				case 'text/css':
					script = window.createElement('link');
					script.href = URL.createObjectURL( file );
					script.rel = 'stylesheet';
					window.$('head').appendChild(script);
				break;
			}
			
			if( !(i>0) ) setTimeout( res,500 );
			
		} });
	}
	
	//TODO: ajax Modifier   XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
	
	const ajax = new Object();
	
	ajax.put = function( _url,_obj ){
		if( typeof( _obj ) !== 'object' ) _obj = new Object();
		_obj.method = 'PUT'; return fetch( _url,_obj );
	}
	
	ajax.get = function( _url,_obj ){
		if( typeof( _obj ) !== 'object' ) _obj = new Object();
		_obj.method = 'GET'; return fetch( _url,_obj );
	}
	
	ajax.patch = function( _url,_obj ){
		if( typeof( _obj ) !== 'object' ) _obj = new Object();
		_obj.method = 'PATCH'; return fetch( _url,_obj );
	}
	
	ajax.delete = function( _url,_obj ){
		if( typeof( _obj ) !== 'object' ) _obj = new Object();
		_obj.method = 'DELETE'; return fetch( _url,_obj );
	}
		
	ajax.post = function( _url,_body,_obj ){
		if( typeof( _obj ) !== 'object' ) _obj = new Object();
		if( _body !== undefined ) _obj.body = _body; 
		_obj.method = 'POST'; return fetch( _url,_obj );
	}
	
	//TODO: Clipboard XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
	
	const clipboard = new Object()
	
	clipboard.paste = async()=>{
		return navigator.clipboard.readText()
	}
	
	clipboard.copy = ( _value )=>{
 		navigator.clipboard.writeText( _value );
	}
	
	//TODO: DEVICE DETECTION XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
	
	const device = new Object();
	
	device.isMobile = function(){
		const match = [ /Windows Phone/i, /BlackBerry/i, /Android/i, /iPhone/i, /webOS/i, /iPad/i, /iPod/i ];
		return match.some( (item) => {
		    return navigator.userAgent.match( item );
		});
	}
	
	device.getBrowser = function(){
		const match = [ /Chrome/i, /Safari/i, /Opera/i, /Mozilla/i, ];
		
		var output = 'generic';
		for( var i in match ){		
			if( navigator.userAgent.match(match[i]) ){
				output = match[i]; break;
			}	continue;
		}	return output;
			
	}
	
	device.getOS = function(){
		const match = [ 
			/Windows Phone/i, /BlackBerry/i, /Android/i,
			/iPhone/i, /webOS/i, /iPad/i, 
			/iPod/i, /Linux/i, /MacOS/i,
			/windows/i, /ChromeOS/i,
		];	var output = 'generic';
		
		for( var i in match ){
			let data = navigator.userAgent.match(match[i])
			if( navigator.userAgent.match(match[i]) ){
				output = data[0]; break;
			}	continue;
		}	return output;
		
	}
	
	device.getSize = function( _bool ){
		const size = [ 
			[150,'small'],
			[480,'medium'],
			[640,'xlarge'],
			[720,'xxsmall'],
		];
		
		for( var i=size.length; i--; ){
			if ( window.innerWidth>size[i][0] )	
				return !_bool ? size[i][1] : i;
		}
		
	}
	
	//TODO: IP  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
	
	device.getIP = async function( _ip='' ){
		const response = await ajax.get('http://ip-api.com/json/'+_ip);
		return await response.json();
	}
	
	//TODO: Web Mobile Sensors  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
	
	device.battery = function(){
		if( !window.BatteryManager ) 
			return console.error(' battery is not supported ');
		return navigator.getBattery();
	}

	device.gyroscope = function( callback ){ 
		if( !window.DeviceOrientationEvent ) 
			return console.error(' gyroscope is not supported ');
		addEvent( window,'deviceorientation', (event)=>callback(event) );
	}
	
	device.accelerometer = function( callback ){ 
		if( !window.DeviceMotionEvent )
			return console.error(' Accelerometer is not supported ');
		addEvent( window,'deviceorientation', (event)=>callback(event) ); 
	}
	
	device.geolocation = function( _obj ){
		if( !window.navigator.geolocation )
			return console.error(' geolocation is not supported ');
			
		if( typeof( _obj ) !== 'object' ){ _obj = new Object();	
		 	_obj.enableHighAccuracy = true;
		  	_obj.timeout = 5000;
		  	_obj.maximumAge = 0;
		}	
	
		const promise = new Promise( function(res,rej){
			navigator.geolocation.getCurrentPosition( res,rej,_obj );
		});	return promise;
	}
	
	//TODO: Desktop XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		
	device.getScreen = function( _obj ){
		if( !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) )
			return console.error('screen recorder is not suported');

		if( typeof( _obj ) !== 'object' ){ 
			_obj = new Object();	
			_obj.video = true; 
			_obj.audio = true;
		}	
		
		return navigator.mediaDevices.getDisplayMedia( _obj );
	}
	
	//TODO: Camera  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		
	device.getCamera = function( _obj ){
		if( !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) )
			return console.error('camera is not suported');

		if( typeof( _obj ) !== 'object' ){ 
			_obj = new Object();	
			_obj.video = true; 
			_obj.audio = true;
		}	
		
		return navigator.mediaDevices.getUserMedia( _obj );
	}
	
	//TODO: Microphone  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		
	device.getMicrophone = function( _obj ){
		if( !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) )
			return console.error('microphone is not suported');

		if( typeof( _obj ) !== 'object' ){ 
			_obj = new Object();	
			_obj.video = false;
			_obj.audio = true;
		}	
		
		return navigator.mediaDevices.getUserMedia( _obj );
	}
	
	//TODO: Record Element  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //

	device.stopRecording = function( _recorder ){ _recorder.mediaRecorder.stop(); }
	device.startRecording = function( _recorder ){
   		const mediaRecorder = new MediaRecorder( _recorder );
			  _recorder.mediaRecorder = mediaRecorder;
		const data = new Array();

		_recorder.mediaRecorder.ondataavailable = (event)=>{
			data.push( event.data );
		};	_recorder.mediaRecorder.start();
		
		var promise = new Promise( (res,rej)=>{
			_recorder.mediaRecorder.onerror = (err)=> rej(err);
			_recorder.mediaRecorder.onstop = ()=>res(data);
		});	return promise;
	}
	
	device.saveRecord = function( _blobs,_name ){ 	
		var _blob = new Blob( _blobs, {'type':_blobs[0].type});	
		var url = URL.createObjectURL( _blob );
		var a = createElement('a');
		$('body').appendChild(a);
			a.setAttribute('download',_name);
			a.setAttribute('href',url);
			a.style = "display: none";
			a.click();
		URL.revokeObjectURL(url);
		$('body').removeChild(a);
	}

	//TODO: WebVAST Support XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		
	const webVAST = new Object();
	
	//TODO: WebHLS Support  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
	
	const webHLS = new Object();
	
	webHLS.play = function( _video, _url ){
		if ( Hls.isSupported() ) {
			const hls = new Hls(); hls.loadSource( _url ); hls.attachMedia( _video );
		} else if( _video.canPlayType('application/vnd.apple.mpegurl' )) 
			_video.src = _url;
	}
	
	//TODO: WebQR   XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //https://davidshimjs.github.io/qrcodejs/
																				//https://github.com/nimiq/qr-scanner
	
	const webQR = new Object();
	
	webQR.create = ( a,b )=>{ return new QRCode( a,b ); }
	
	webQR.scan = ( a,b )=>{ return new QrScanner( a,b ); }
	
	//TODO: WebP2P  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
	
	const webPeer = new Object();
	
	webPeer.createPeer = function( ...args ){

		const _obj = new Peer(args);
		
		_obj.event = _obj.on;
		_obj.oncall = function(){return undefined;}
		_obj.onopen = function(){return undefined;}
		_obj.onerror = function(){return undefined;}
		_obj.onclose = function(){return undefined;}
		_obj.onstream = function(){return undefined;}
		_obj.onmessage = function(){return undefined;}
		_obj.onconnected = function(){return undefined;}
		_obj.onconnection = function(){return undefined;}
		_obj.ondisconnected = function(){return undefined;}
		
		_obj.on = (...args)=>{ switch( args[0] ){
			case 'call' : _obj.oncall = args[1]; break;
			case 'load' : _obj.onload = args[1]; break;
			case 'open' : _obj.onopen = args[1]; break;
			case 'error': _obj.onerror = args[1]; break;
			case 'close': _obj.onclose = args[1]; break;
			case 'data' : _obj.onmessage = args[1]; break;
			case 'stream' : _obj.onstream = args[1]; break;
			case 'connection' : _obj.onconnection = args[1]; break;
			case 'disconnected' : _obj.ondisconnected = args[1]; break;
		}};	return _obj;
		
	}
	
	webPeer.recive = function( _peer, _mediaStream ){
	
		_peer.event('disconnected', ()=>_peer.ondisconnected());
		_peer.event('stream', (data)=>_peer.onstream(data));
		_peer.event('data', (msg)=>_peer.onmessage(msg));
		_peer.event('error', (err)=>_peer.onerror(err));
		_peer.event('close', ()=>_peer.onclose());

		_peer.event('connection', (_conn)=>{
			_conn.on('open', ()=>{ _peer.onopen(_conn);
				_conn.on('disconnected', ()=>_peer.ondisconnected());
				_conn.on('stream', (data)=>_peer.onstream(data));
				_conn.on('data', (msg)=>_peer.onmessage(msg));
				_conn.on('error', (err)=>_peer.onerror(err));
				_conn.on('close', ()=>_peer.onclose());	
			});
			
		});
	
		_peer.event('call',(_call)=>{ _peer.oncall( _call );
			_call.on('stream', (data)=>_peer.onstream(data) );
			if( _mediaStream!==undefined ){ _call.answer( _mediaStream ); }
		});
		
	}
	
	webPeer.connect = function( _peer, _peerID ,_mediaStream ){
		
		_peer.event('disconnected', ()=>_peer.ondisconnected());
		_peer.event('stream', (data)=>_peer.onstream(data));
		_peer.event('call', (_call)=>_peer.oncall(_call));
		_peer.event('data', (msg)=>_peer.onmessage(msg));
		_peer.event('error', (err)=>_peer.onerror(err));
		_peer.event('close', ()=>_peer.onclose());

		const _conn = _peer.connect( _peerID );
		_conn.on('open',()=>{ _peer.onopen(_conn);
			_conn.on('disconnected', ()=>_peer.ondisconnected());
			_conn.on('stream', (data)=>_peer.onstream(data));
			_conn.on('data', (msg)=>_peer.onmessage(msg));
			_conn.on('error', (err)=>_peer.onerror(err));
			_conn.on('close', ()=>_peer.onclose());
		});
		
		if( _mediaStream!==undefined ){
			const _call = _peer.call(_peerID, _mediaStream);
			_call.on('stream', (data)=>_peer.onstream(data) );
		}
		
	}

	//TODO: WebSocket OBJECT XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
	
	const webSocket = new Object();
	
	webSocket.connect = ( _url,_opt )=>{ 
	
		if( !window.WebSocket )
			return console.error('Websocket not suported');
		
		const _obj = new WebSocket( _url ); 
		
		if( typeof(_opt) == 'object' ){
			const keys = Object.keys(_opt);
			keys.map( x=>{ _obj[x] = _opt[x] });
		}
			
		_obj.on = (...args)=>{ switch( args[0] ){
			case 'open' : _obj.onopen = args[1]; break;
			case 'error': _obj.onerror = args[1]; break;
			case 'close': _obj.onclose = args[1]; break;
			case 'data' : _obj.onmessage = args[1]; break;
		}};	return _obj;
		
	}
	
	//TODO: Lazy Load Fuction   XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
	
	const config = { rootMargin:'250px 0px' };
	const observer = new IntersectionObserver( (entries, observer)=>{
		entries.forEach( entry=>{
			const object = entry.target;
			const placeholder = object.src;
			if( entry.isIntersecting ){
				object.src = object.dataset.src;
				observer.unobserve( object );
				addEvent(object,'error',()=>{try{
					const newImage = createElement('img');
						  newImage.setAttribute('src',placeholder);
					replaceElement( newImage,object );
				}catch(e){ }});
			}
		});
	}, config); 
	
	const lazyContent = function(){
		$$('img[data-src]').forEach( item=>observer.observe(item));		
	}
	
	//TODO: Load Component Fuction  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		
	const loadComponents = function(){ try{
		
		if( window['_changing_'] ) return undefined;
		
		window['_changing_'] = true;
		const renders = $$('component[path]'); 
			
		if( !(renders.length>0) ){ 
			window['_changing_'] = false;
			return lazyContent(); 
		}
			
		renders.forEach( async(render,index)=>{
				
			const response = await ajax.get( render.getAttribute('path') );
			const element = createElement('div');
			const attr = render.attributes;
				
			const data = new Array();
			element.innerHTML = await response.text();
			const script = element.querySelectorAll('script');
			
			for( var i=attr.length; i--; ){
				if( attr[i].localName !== 'path' )
					element.setAttribute( attr[i].localName,attr[i].value );
			}
				
			for( var i=script.length; i--; ){
				data.push([
					script[i].getAttribute('src'),
					script[i].innerText,
				]);	script[i].remove();
			}	render.replaceWith( element );
			
			data.forEach( x=>{	
				if( x[0] ) require( x[0] );
				eval( 'try{'+ x[1] +'}catch(e){console.error(e)}' );
			});
			
			if( index>=renders.length-1 ){ setTimeout( ()=>{
				window['_changing_'] = false;
				loadComponents();
			},100 );}
							
		});
		
	} catch(e) { }}
		
	//TODO: frameworks XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
	
	const libs = new Object();
	
	libs.uikit = [
		'https://cdn.jsdelivr.net/npm/uikit@3.13.7/dist/js/uikit.min.js',
		'https://cdn.jsdelivr.net/npm/uikit@3.13.7/dist/css/uikit.min.css',
		'https://cdn.jsdelivr.net/npm/uikit@3.13.7/dist/js/uikit-icons.min.js'
	];
	
	libs.qr = [
		'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/qr-scanner/1.4.1/qr-scanner.legacy.min.js',
	]
	
	libs.aframe = [
		'https://aframe.io/releases/0.8.0/aframe.min.js',
		'https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js',
		'https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v3.13.1/dist/aframe-extras.min.js',
	];
	
	libs.phaser = [
		'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.60.0-beta.5/phaser.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.60.0-beta.5/phaser-arcade-physics.min.js',
	];
	
	libs.mdl = [
		'https://code.getmdl.io/1.3.0/material.min.js',
		'https://fonts.googleapis.com/icon?family=Material+Icons',
		'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css',
	]
	
	libs.icon = 'https://fonts.googleapis.com/icon?family=Material+Icons';
	
	libs.mui = 'https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js';
	
	libs.web3 = 'https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.3/web3.min.js';
	libs.ethers = 'https://cdnjs.cloudflare.com/ajax/libs/ethers/5.6.3/ethers.umd.min.js';
	
	libs.peer = 'https://unpkg.com/peerjs@1.3.2/dist/peerjs.min.js';
	libs.faker = 'https://cdnjs.cloudflare.com/ajax/libs/Faker/0.5.12/MinFaker.js';
	libs.three = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
	libs.sharer = 'https://cdnjs.cloudflare.com/ajax/libs/sharer.js/0.5.1/sharer.min.js';
	libs.socketIO = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.4.1/socket.io.js';
	
	libs.gpu = 'https://cdnjs.cloudflare.com/ajax/libs/gpu.js/1.0.0/gpu.min.js';
	libs.crypto = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
	libs.hls = 'https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.1.5-0.canary.8313/hls.min.js';
	
	//TODO: OnLoadEvent XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
	addEvent( document, 'DOMSubtreeModified', function(){ loadComponents(); });
	addEvent( document, 'DOMContentLoaded', function(){ loadComponents(); });
	
`,'js' );
