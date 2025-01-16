#!/usr/bin/env python3
"""This is a module using Least Recently Used
algorithims"""
from collections import OrderedDict
from base_caching import BaseCaching

class LRUCache(BaseCaching):
    """This is the Least Recently Used Algorithims
    class."""
    def __init__(self):
        super().__init__()
        self.cache_data = OrderedDict()

    def get(self, key: str) -> str:
        """This function prints the entered key"""
        if key is None:
            return None
        else:
            return self.cache_data.get(key)

    def put(self, key: int, item: int) -> None:
        """Updates the value in the value in the
        cache using Least Recently Used algorithims"""
        if key is None:
            return None
        if item is None:
            return None
        else:
            if len(self.cache_data) == BaseCaching.MAX_ITEMS:
                popped = self.cache_data.popitem(last=False)
                print(f"DISCARD: {popped[0]}")
                del popped  # Remove oldest item
            elif key in self.cache_data:
                self.cache_data.pop(key)

            self.cache_data[key] = item
