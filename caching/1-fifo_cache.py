#!/usr/bin/python3
"""This a First in First out
class module, which inherits basecaching"""
from base_caching import BaseCaching
from typing import Dict


class FIFOCache(BaseCaching):
    """This class will use First In First Out
    algorithms to mangage the caching process"""
    def __init__(self):
        super().__init__()

    def put(self, key: str, item: str) -> Dict[str, str]:
        """This will update the dictionary
        - if the dict is bigger than the max numbers
        it will delete the first key"""
        add = self.cache_data[key] = item
        if key == None or item == None:
            return None
        else:
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                fo = list(self.cache_data.keys())[0]
                print(f"Discard {fo}")
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
