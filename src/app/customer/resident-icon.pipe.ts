import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'residentIcon'
})
export class ResidentIconPipe implements PipeTransform {

  transform(resident: boolean): string {
    return resident 
      ? 'https://www.flaticon.com/svg/static/icons/svg/2089/2089713.svg'
      : 'https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg'
  }

}
