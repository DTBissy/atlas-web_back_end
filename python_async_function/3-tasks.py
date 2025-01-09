#!/usr/bin/env python3
"""Takes an integer for max delay and returns asynchio.Task"""
import asyncio
wait_random = __import__("0-basic_async_syntax").wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    return asyncio.create_task(asyncio.sleep(max_delay))
