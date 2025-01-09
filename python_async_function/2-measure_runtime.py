#!/usr/bin/env python3
"""A measure time module"""
import asyncio
from typing import *
import time
wait_n = __import__('1-concurrent_coroutines').wait_n

async def measure_time(n: int, max_delay: int) -> float:
    """This will use the time module to measure the time it takes
    my async module to run"""
    start = time.perf_counter()
    await wait_n(n, max_delay)
    elapsed = time.perf_counter() - start
    return elapsed / n
