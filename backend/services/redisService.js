import Redis from "ioredis";

const redisClent = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});

redisClent.on('connect', ()=>{
    console.log('Redis connected')
})

export default redisClent;