Streams is like reading or writing some kind of data from or into the source .

It is like reading data from the file.

But both node js readfile and stream looks same , what is the main diffrence between them : 

readfile loads all the data at once in the memory before reading but 
Streams loads data in form of packates or chunks so that there is no load while reading data .


📦 Common Real-World Use Cases->

1. Reading large files line by line
2. Sending a large file as a download without loading it all into RAM
3. Compressing or decompressing data on the fly (e.g. gzip)
4. Streaming logs to a dashboard
5. Handling real-time audio/video streams

🛠️ How Streams Work (Under the Hood) ->

Streams use buffers and events (data, end, error, etc.).
Instead of waiting for all the data to be read or written, they use an event-driven and asynchronous model to process chunks bit by bit.