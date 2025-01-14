#!/usr/bin/python3
"""This a Last in First out
class module, which inherits basecaching"""
from base_caching import BaseCaching
from typing import Dict


class LIFOCache(BaseCaching):
    """This class utilizes Last in First out
    Algorthims to manage the cache"""
    def __init__(self):
        super().__init__()

    def put(self, key: str, item: str) -> Dict[str, str]:
        """This will update the dictionary
        - if the dict is bigger than the max numbers
        it will delete the first key"""
        if key is None or item is None:
            return None
        else:
            add = self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                fo = list(self.cache_data.keys())[3]
                print(f"DISCARD: {fo}")
                del self.cache_data[fo]
                return self.cache_data
            else:
                return add

    def get(self, key: str) -> str:
        """This function prints the entered key"""
        if key is None:
            return None
        else:
            return self.cache_data.get(key)
