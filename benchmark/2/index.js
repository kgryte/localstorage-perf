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
var timestamp = Date.now(),
	value = Math.random();

localStorage.clear();
localStorage.setItem( timestamp, value );

// Benchmark:
localStorage.getItem( timestamp, value );

// Teardown:
localStorage.clear();
