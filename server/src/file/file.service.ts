import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs'

@Injectable()
export class FileService {
    async createFile(file, name:string , type:string ){
        console.log(type)
        console.log(path.resolve(__dirname, '..', 'static', type  , name))
        
        try{
            const fileName = name+'.jpg'
            const filePath = path.resolve(__dirname, '..', 'static' , type )
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }

            fs.writeFileSync(path.join(filePath,fileName), file.buffer)
            return `${type}/${fileName}`

        }

        catch(err){
            throw new HttpException('Ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

