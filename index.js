import {suma, multiplica} from './Modulos/controller.js'
import chalk from 'chalk';

const res1 = suma(1,2)
const res2 = suma(4,5)

const res3 = multiplica(res1,res2)

console.log(chalk.green(`El resultado es: ${res3}`))