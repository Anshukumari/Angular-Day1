import {Injectable} from '@angular/core'

@Injectable()
export class DepartmentService
{
    loadDepartments():string[]{
        return ['ISG','TTS','Commodiaty']
    }
}