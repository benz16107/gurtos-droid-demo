import assert from 'node:assert/strict';
import { slug } from './slug.js';

assert.equal(slug('Hello World'), 'hello-world');
assert.equal(slug('Hello, World!'), 'hello-world');
assert.equal(slug('  GurtOS   ships  '), 'gurtos-ships');
console.log('ok');
