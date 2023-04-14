import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../models/player';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Iplayer>, searchInput: string) {
    // console.log(searchInput2);

    if (!searchInput) {
      return value

    }

    if (!value) {
      return []
    }





    let filterArray = value.filter(e => {
      return e.country.toLowerCase().startsWith(searchInput.toLowerCase())
    })

    return filterArray







  }

}
