const redis = require('redis');


const redisCache = async() =>{
    const redisConnect = redis.createClient({
        url:  process.env.REDIS_URL || "redis://localhost:6379",
        legacyMode: true,
    });
    redisConnect.on('error', (err) => console.error('Redis Client Error', err));
    try {
        await redisConnect.connect();
    } catch (err) {
        console.error('Failed to connect to Redis:', err);
    }
    return redisConnect;
}


module.exports = {redisCache}