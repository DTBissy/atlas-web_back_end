#!/usr/bin/env python3
"""This is my async generator"""
import asyncio
from typing import List
import random


async def async_generator() -> object:
    numbers = []
    for x in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
