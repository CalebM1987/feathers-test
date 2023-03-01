import * as dotenv from 'dotenv'
dotenv.config()
import { logger } from '../logger';
import { users } from './users';

import { MongoClient } from "mongodb";

async function seedDB(){
  const uri = process.env.MONGODB
  const client = new MongoClient(uri!)

  const session = client.startSession()

  try {
    await client.connect()
    logger.info('connected to mongo instance!')

    const collection = client.db('feathers-test').collection('users')

    // clear records
    collection.drop()

    // add data
    collection.insertMany(users as any)

    logger.info('seeded database with users: ', users)
    
  } catch(err){
    console.warn('failed to connect to mongo instance', err)
  } finally {
    session.endSession()
    logger.info('ended session')
  }
}

seedDB()