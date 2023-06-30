import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any  {
    if(!value) return null
    if(!args) return value

    args = args.toLowerCase()
    //console.log('VALUE: ', value, ' ARGS: ', args);

    return value.filter((inmueble: any) => {
      return JSON.stringify(inmueble.name).toLowerCase().includes(args) || JSON.stringify(inmueble.price).toLowerCase().includes(args) || JSON.stringify(inmueble.address).toLowerCase().includes(args)
    })
  }

}
