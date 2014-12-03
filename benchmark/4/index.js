/**
*
*	BENCHMARK: ...
*
*
*	DESCRIPTION:
*		- Benchmarks...
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// Setup:
var idx = 0;

localStorage.clear();
localStorage.setItem( idx, JSON.stringify( window.tiny ) );

// Benchmark:
var val = JSON.parse( localStorage.getItem( idx ) );

// Teardown:
localStorage.clear();
