#!/usr/bin/env python3
"""Will display a asynchronous function max delay and max ns"""
import asyncio
from typing import *
from basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    for x in n:

