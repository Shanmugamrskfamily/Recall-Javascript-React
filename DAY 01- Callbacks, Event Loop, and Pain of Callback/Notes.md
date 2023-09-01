1. Callbacks:

   A callback is a function that is passed as an argument to another function.
   Callbacks are commonly used in JavaScript for asynchronous operations like handling network requests, reading files, or waiting for user input. They allow you to specify what should happen when an asynchronous operation completes.

2. Event Loop:

   The event loop is a core concept in JavaScript's concurrency model.
   It's responsible for managing the execution of code, handling events, and managing asynchronous tasks.
   The event loop continuously checks the message queue for tasks and executes them one by one, ensuring non-blocking behavior.

3. Pain of Callbacks:

   Callback hell or "Pyramid of Doom" is a common issue when dealing with multiple nested callbacks. This can make your code hard to read and maintain. Callbacks don't handle errors well; you need to manually check for errors in each callback.
   Debugging can be challenging when dealing with complex callback chains.
