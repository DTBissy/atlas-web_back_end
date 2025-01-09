#!/usr/bin/env python3
import asyncio
import time
ac = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """This will start my count timer and then start my async
    comprehension function. This will send it into a list."""
    start = time.perf_counter()
    await asyncio.gather(ac(),ac(),ac(),ac())
    elapsed = time.perf_counter() - start
    return elapsed
