# Prop drilling readme

This demo of prop drilling involves a buggy settings viewer/editor, and a
fix that uses prop drilling. I initially intended a include a fix that didn't
use prop drilling, but I couldn't think of a good one.


## What is prop drilling

Unnecessary/excessive plumbing of props through multiple layers of components.
In this case, it is to maintain shared state across multiple components.


## Todo

- picture of the problem with a description
- support pictures in markdown
- find an alternative to passing 'onDelete' everywhere
  - react context?
