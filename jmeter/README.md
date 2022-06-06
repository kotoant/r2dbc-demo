5000-10-100: number of users(thread): 5000, ramp time: 10 sec, loops: 100 (100 reqs from each user).

without suffix: server -> proxy -> database. Proxy latency = 10ms.

with suffix -0: server -> database.

with suffix -2 (only for r2dbc): connectionPool.maxSize=80 instead of 100.
