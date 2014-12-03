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

// Benchmark:
idx++;
localStorage.setItem( idx, JSON.stringify( window.small ) );

// Teardown:
localStorage.clear();
