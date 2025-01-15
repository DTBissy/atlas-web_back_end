from collections import OrderedDict
from base_caching import BaseCaching

class LRUCache(BaseCaching):
    def __init__(self):
        super().__init__()
        self.cache_data = OrderedDict()

    def get(self, key: int) -> int:
        if key in self.cache_data:
            value = self.cache_data.pop(key)
            self.cache_data[key] = value  # Move to end to mark as recently used
            return value
        return -1

    def put(self, key: int, value: int) -> None:
        if len(self.cache_data) == BaseCaching.MAX_ITEMS and key not in self.cache_data:
            popped = self.cache_data.popitem(last=False)
            print(f"DISCARD: {popped[0]}")
            del popped  # Remove oldest item
        elif key in self.cache_data:
            self.cache_data.pop(key)

        self.cache_data[key] = value
