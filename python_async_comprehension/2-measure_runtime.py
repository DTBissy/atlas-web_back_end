#!/usr/bin/env python3
import asyncio
import time
ac = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """This will start my count timer and then start my async
    comprehension function. This will send it into a list comprehension
    async function that will then use my async gen function
     to generate 10 random numbers. It will generate 10 numbers
    10 times. I think it takes roughly ten seconds because the
    event loop holds everything up and knocks them down
    at the same time."""
    start = time.perf_counter()
    await asyncio.gather(ac(),ac(),ac(),ac())
    elapsed = time.perf_counter() - start
    return elapsed
