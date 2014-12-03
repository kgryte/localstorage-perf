var db;
window.db = db;

// Make a new DB request:
var request = window.indexedDB.open( 'benchmark', 1 );
request.onupgradeneeded = function( evt ) {
	var db = evt.target.result;
	if ( !db.objectStoreNames.contains( 'test-tiny' ) ) {
		db.createObjectStore( 'test-tiny', {
			'keyPath': 'timestamp'
		});
	}
	if ( !db.objectStoreNames.contains( 'test-small' ) ) {
		db.createObjectStore( 'test-small', {
			'keyPath': 'timestamp'
		});
	}
	if ( !db.objectStoreNames.contains( 'test-medium' ) ) {
		db.createObjectStore( 'test-medium', {
			'keyPath': 'timestamp'
		});
	}
	if ( !db.objectStoreNames.contains( 'test-large' ) ) {
		db.createObjectStore( 'test-large', {
			'keyPath': 'timestamp'
		});
	}
};
request.onsuccess = function( evt ) {
	// Assign result to global `db`...
	db = evt.target.result;
};
request.onerror = function( evt ) {
	console.log( evt );
};

// Create sample datasets...
var now = Date.now() - 1e8,
		tiny,
		small,
		medium,
		large,
		i;

// A single datum...
tiny = {
	'timestamp': now,
	'value': Math.random()
};

// A small dataset...
small = new Array( 100 );
for ( i = 0; i < small.length; i++ ) {
	small[ i ] = {
		'timestamp': now + i*2000,
		'value': Math.random()
	};
}

// A medium dataset...
medium = new Array( 1000 );
for ( i = 0; i < medium.length; i++ ) {
	medium[ i ] = {
		'timestamp': now + i*2000,
		'value': Math.random()
	};
}

// A large dataset...
large = new Array( 10000 );
for ( i = 0; i < large.length; i++ ) {
	large[ i ] = {
		'timestamp': now + i*2000,
		'value': Math.random()
	};
}

window.tiny = tiny;
window.small = small;
window.medium = medium;
window.large = large;
