#!/usr/bin/env python3
from typing import List
"""This will collect 10 random numbs using
async generator"""

ag = __import__("0-async_generator").async_generator


async def async_comprehension() -> List[float]:
    """Returns a list of random numbers retrieved from my
    async generator function"""
    nums = [x async for x in ag()]
    return nums
