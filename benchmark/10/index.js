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
var idx = 0,
	value = JSON.stringify( window.large );

localStorage.clear();

// Benchmark:
idx++;
localStorage.setItem( idx, value ) );

// Teardown:
localStorage.clear();
