Node.js is single-threaded by default, meaning:
It can handle only one CPU core.
Even if you have a machine with 8 cores, Node will use only one unless you scale it.

✅ Cluster allows you to fork the main process into multiple worker processes, each running on a separate core.

It's used to handle more traffic, improve performance, and reliability of your application — especially HTTP servers.