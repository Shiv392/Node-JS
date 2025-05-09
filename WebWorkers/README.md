Web Worker allow to handle function that might take long time without blocking the main thread or main execution.

AS js is single threaded programing languagae so when we do any heavy cpu computation like iteeration over 100000000 recors, 
then it will block the ui when using main thread.

So web workder solve this problem. Web worker run this function in the background and do not block the main thread 
exicution. 