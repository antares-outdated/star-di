import { Container } from 'inversify'
import 'reflect-metadata'
import { TYPES } from './types'
import { IOutput } from './interfaces'
import { CliOutput } from './cli-output'
import { Star } from './star'

const myContainer = new Container()
myContainer.bind<IOutput>(TYPES.IOutput).to(CliOutput)
myContainer.bind<Star>(TYPES.Star).to(Star)

export { myContainer }
