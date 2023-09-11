import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'username'
})
export class UserNamePipe implements PipeTransform{
    transform(value: {firstName: string, lastName: string}, local: 'fr' | 'en' = 'fr'): string {
        return local === 'fr' ?
         `${value.lastName.toUpperCase()} ${value.firstName}` :
         `${value.firstName} ${value.lastName}`;
    }

}