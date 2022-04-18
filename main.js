'use strict';

//TODO: Libreries   XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //

const formidable = require('formidable');
const axios = require('axios');
const https = require('http2');
const http = require('http');
const peer = require('peer');
const url = require('url');
const wss = require('wss');
const fs = require('fs');
const ws = require('ws');

//TODO: State XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//

const state = new Object();

//TODO: String Normalization XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
const mimeType = {	
	
	//TODO: Font Mimetype //
	"otf" : "font/otf",
	"ttf" : "font/ttf",
	"woff": "font/woff",
	"woff2":"font/woff2",
	
	//TODO: Audio Mimetype //
	"oga" : "audio/ogg",
	"aac" : "audio/aac",
	"wav" : "audio/wav",
	"mp3" : "audio/mpeg",
	"opus": "audio/opus",
	"weba": "audio/webm",
	
	//TODO: Video Mimetype //
	"ogv" : "video/ogg",
	"mp4" : "video/mp4",
	"ts"  : "video/mp2t",
	"webm": "video/webm",
	"mpeg": "video/mpeg",
	"avi" : "video/x-msvideo",
	
	//TODO: Web Text Mimetype //
	"css" : "text/css",
	"csv" : "text/csv",
	"html": "text/html",
	"ics" : "text/calendar",
	"js"  : "text/javascript",
	"xml" : "application/xhtml+xml",

	//TODO: Images Mimetype //
	"bmp" : "image/bmp",
	"gif" : "image/gif",
	"png" : "image/png",
	"jpg" : "image/jpeg",
	"jpeg": "image/jpeg",
	"webp": "image/webp",
	"svg" : "image/svg+xml",
	"ico" : "image/vnd.microsoft.icon",
	
	//TODO: Especial Mimetype //
	"zip" : "application/zip",
	"gz"  : "application/gzip",
	"sh"  : "application/x-sh",
	"json": "application/json",
	"tar" : "application/x-tar",
	"rar" : "application/vnd.rar",
	"7z"  : "application/x-7z-compressed",
	"m3u8": "application/vnd.apple.mpegurl",
	
	//TODO: Text Plain Mimetype //
	"txt" : "text/plain",
	"text": "text/plain",
	
	//TODO: Document Mimetype //
	"pdf" : "application/pdf",	
	"doc" : "application/msword",
	"vsd" : "application/vnd.visio",
	"xls" : "application/vnd.ms-excel",
	"ppt" : "application/vnd.ms-powerpoint",
	"swf" : "application/x-shockwave-flash",
	"ods" : "application/vnd.oasis.opendocument.spreadsheet",	
	"odp" : "application/vnd.oasis.opendocument.presentation",	
	"odt" : "application/vnd.oasis.opendocument.presentation",	
	"xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	"docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",	
	"pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
};

//TODO: Main Class  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //

const MOLLYJS_CLASS = function( front_path, back_path ){
	const mollyJS = {
		keys: Object.keys( mimeType ),
		max_age: 1000 * 60 * 60 * 24,
		timeout: 1000 * 60 * 10,
		state: new Object(),
		mimetype: mimeType,
		front: front_path,
		back: back_path,
		cors: false
	};
	
	mollyJS.slugify = function(str){ const map = {
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
	
	mollyJS.header = function( mimeType,size=0 ){
		const headers = {
			"Content-Security-Policy-Reporn-Only": "default-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self';",
			"Strict-Transport-Security": `max-age=${mollyJS.max_age}; preload`,
			"Content-Type":mimeType,
		};	
		
		if( !mollyJS.cors ){
			headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
			headers["Access-Control-Allow-Origin"] = "*";
		}
		
		return headers;
	}

	mollyJS.chunkheader = function( mimeType,start,end,size ){
		const contentLength = end-start+1;
		const headers = {
			"Content-Security-Policy-Reporn-Only": "default-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self';",
			"Strict-Transport-Security": `max-age=${mollyJS.max_age}; preload`,
			"Cache-Control": `public, max-age=${mollyJS.max_age}`,
			"Content-Range":`bytes ${start}-${end}/${size}`,
			"Content-Length":contentLength,
			"Content-Type": mimeType,
			"Accept-Ranges":"bytes",
		};
		
		if( !mollyJS.cors ){
			headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
			headers["Access-Control-Allow-Origin"] = "*";
		}
		
		return headers;
	}
	
	mollyJS.router = function( req,res ){
		
		//TODO: MollyJS Req DOC XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		
		req.parse = url.parse(req.url, true);
		req.query = req.parse.query; 
		
		req.parse.method = req.method;
		req.parse.host = req.headers['host'];
		req.parse.hostname = req.headers['host'];
		req.parse.origin = req.headers['origin'];
		req.parse.ip = req.headers['x-forwarded-for'];
		req.parse.protocol = req.headers['x-forwarded-proto'];
		
		//TODO: MollyJS API DOC XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		req._params = {
			_url: req.parse.pathname.replace(/.api\S+/i,''),
			_prm: req.parse.pathname.replace(/^\S+api?|\S+/i,''),
		};	req.parse.params = req._params._prm;
		
		req.api = ( _params )=>{
			try{const obj = new Object();
				const keys = _params.replace(/^\W/,'').split('/');
				const prms = req._params._prm.replace(/^\W/,'').split('/');
				for( var i in keys ){ obj[keys[i]] = prms[i]; } return obj;
			} catch(e) { return undefined; }
		}
		
		//TODO: MollyJS METHOD DOC  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		req.get = ( callback )=>{ if( req.method === 'GET' ) callback( req,res ); }
		req.put = ( callback )=>{ if( req.method === 'PUT' ) callback( req,res ); }
		req.post = ( callback )=>{ if( req.method === 'POST' ) callback( req,res ); }	
		req.patch = ( callback )=>{ if( req.method === 'PATCH' ) callback( req,res ); }
		req.delete = ( callback )=>{ if( req.method === 'DELETE' ) callback( req,res ); }
		
		//TODO: MollyJS FILES DOC   XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
		
		req.saveFile = (_file,_path)=>{ fs.renameSync( _file.filepath,_path ); }
		
		req.form = ( cd )=>{
			const form = new formidable.IncomingForm();
			form.parse(req, (err,fields,files)=>{
				const data = { fields:fields, files:files }
				cd( err,data );
			});
		}
		
		req.downloadFile = (_url,_path)=>{ 
			if( _url.startsWith('http') ){
				axios.get(_url,{responseType:'stream'}).then( (response)=>{
					let _newPath = fs.createWriteStream(_path);
						response.data.pipe( _newPath ); 
				}).catch( err=>{} );
			} else if( _url.startsWith('data:') ) {
				const data = _url.split('base64,').pop();
				fs.writeFileSync(_path, data, {encoding: 'base64'});
			} else { }
		}
		
		//TODO: MollyJS SEND DOC XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
		res.sendFile = ( _path )=>{
			if( fs.existsSync( _path ) ){
				const _SIZE = fs.statSync( _path ).size;
				for( var i in mollyJS.keys ){
					let key = mollyJS.keys[i];
					if( _path.endsWith( key ) )
						return mollyJS.sendStaticFile( req,res,_path,_SIZE,mimeType[key] );
				}	mollyJS.sendStaticFile( req,res,_path,_SIZE,'text/plain' );
			} else { return res._404(); }
		}
		
		res.send = ( _status, _data, _mimetype='html' )=>{
			const mimeType = mollyJS.mimetype[ _mimetype ] || 'text/plain';
			res.writeHead(_status, mollyJS.header( mimeType ));
			res.end( _data ); return 0;
		}
		
		res._404 = ()=>{
			const mimeType = mollyJS.mimetype[ 'html' ];
			res.writeHead(404, mollyJS.header( mimeType ));
			res.end( mollyJS._404_() ); return 0;			
		}
		
		res.redirect = ( _url )=>{ res.writeHead(301, {'location':_url}); res.end(); }
		res.json = ( _status,_obj ) =>{ res.send( _status, JSON.stringify(_obj) ); }
		
		//TODO: _main_ Function  XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
		try{ mollyJS.loadModule( req,res,`${mollyJS.back}/_main_.js` ); } catch(e) { }
				
		//TODO: Server Pages XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX//
		try{		
			if( fs.existsSync(`${mollyJS.front}${req.parse.pathname}.html`) )
				return res.sendFile( `${mollyJS.front}${req.parse.pathname}.html` ); 
				
			else if( fs.existsSync(`${mollyJS.front}${req.parse.pathname}/index.html`) )
				return res.sendFile( `${mollyJS.front}${req.parse.pathname}/index.html` );

			else if( fs.existsSync(`${mollyJS.back}/${req._params._url}.js`) ) 
				return mollyJS.loadModule( req,res,`${mollyJS.back}/${req._params._url}.js` );
	
			else 
				return res.sendFile( `${mollyJS.front}${req.parse.pathname}` );
		
		} catch(err) {
			console.log(err.message, req.parse.path);
			res.send(404,err.message);
		}
			
	}
	
	mollyJS.loadModule = function( req,res,_path ){
		const data = fs.readFileSync( _path );
		eval(`try{ ${data} 
			} catch(err) { 
				console.log(err.message, _path);
				res.send(404,err.message);
			}
		`);
	}
	
	mollyJS.sendStaticFile = function( req,res,url,size,mimeType ){
		const range = req.headers.range;
					
		if( !range ) {
			const header = mollyJS.header( mimeType,size );
				  header["Cache-Control"] = `public, max-age=${mollyJS.max_age}`;
				  header["Content-Length"] = size;
			res.writeHead( 200,header );
			res.end( fs.readFileSync( url ) );
		
		} else { 
			const chuck_size = Math.pow( 10,6 ); 
			const start = Number(range.replace(/\D/g,""));
			const end = Math.min(chuck_size+start,size-1);
			const chuck = fs.createReadStream( url,{start,end} );

			res.writeHead(206, mollyJS.chunkheader( mimeType,start,end,size ));
			chuck.pipe( res );
		}
	}
	
	mollyJS.createServer = function( Port ){
		const server = http.createServer( mollyJS.router ).listen( Port,'0.0.0.0',()=>{
			console.log(`server started at http://localhost:${Port}`);
		}); server.setTimeout( mollyJS.timeout ); 
		mollyJS.httpServer = server;
		return server;
	}
	
	mollyJS.createSecureServer = function( Port ){
		const ssl_key = { key: process.env.KEY, cert: process.env.CERT };	
		const server = https.createSecureServer( ssl_key, mollyJS.router ).listen( Port,'0.0.0.0',()=>{
			console.log(`server started at https://localhost:${Port}`);
		}); server.setTimeout( mollyJS.timeout ); 
		mollyJS.httpsServer = server;
		return server;
	}
	
	mollyJS.createWebSocketServer = function( _opt ){
		return new ws.WebSocketServer( _opt );		
	}
	
	mollyJS.createWebSocketClient = function( _url ){
		return new ws.WebSocket( _url );	
	}
	
	mollyJS.createPeerServer = function( _opt ){
		return peer.PeerServer( _opt );
	}
	
	mollyJS._404_ = function(){ 
		let url = `${mollyJS.front}/404.html`
		if( fs.existsSync(url) )
			return fs.readFileSync(`${mollyJS.front}/404.html`); 
		return 'Oops 404 not found';
	}
	
	return mollyJS;
};	require('dotenv').config();
	
//TODO: _init_ Function XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX //
try{const mollyJS = new MOLLYJS_CLASS( `${__dirname}/www`, `${__dirname}/controller` );
	const data = fs.readFileSync( `${__dirname}/controller/_init_.js` );
	eval(`try{ ${data} } catch(e) { console.log(e); }`);
} catch(e) { console.log(e); }


