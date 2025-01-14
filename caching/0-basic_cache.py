#!/usr/bin/python3
"""This will inheirt from base_caching.
It will add cached items to a dictionary."""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """This class is inherited from base_caching"""
    def __init__(self):
        super().__init__()

    def put(self, key, item):
        if (key, item) == None:
            return {}
        else:
            add = self.cache_data[key] = item
            return add

    def get(self, key):
        if key == None:
            return {}
        else:
            return self.cache_data.get(key)
