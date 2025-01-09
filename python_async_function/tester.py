import asyncio

async def say_after(delay, msg):
    await asyncio.sleep(delay)
    print(msg)

# Running the asynchronous function
async def main():
    task1 = asyncio.create_task(say_after(3, "Hello"))
    task2 = asyncio.create_task(say_after(3, "World"))
    print("Started")
    await task1
    await task2
    print("Finished")

asyncio.run(main())
