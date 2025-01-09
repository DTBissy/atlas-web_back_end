import asyncio


async def fetch_data(id: int, sleep: int)-> str:
    print(f"Coroutine {id} starting to fetch data")
    await asyncio.sleep(sleep)
    return {"id": id, "data": f"Sample data from coroutine {id}"}

async def main():
    """Event Loop"""
    results = await asyncio.gather(fetch_data(1,2), fetch_data(2,1), fetch_data(3,3))

    for result in results:
        print(f"Recieved result {result}")

asyncio.run(main())
