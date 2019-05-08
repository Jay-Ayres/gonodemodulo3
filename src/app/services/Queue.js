const Kue = require('Kue')
const redisConfig = require('../../config/redis')
const jobs = require('../jobs')

const Queue = Kue.createQueue({ redis: redisConfig })

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)
module.exports = Queue
