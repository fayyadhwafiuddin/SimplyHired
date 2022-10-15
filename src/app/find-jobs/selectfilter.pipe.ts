import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectfilter'
})
export class SelectfilterPipe implements PipeTransform {

  transform(value: Array<any>, ...args: any): any {
    if(args[0] === "All" || !args[0]){
      return value;
    }else{
      return value.filter((item)=>{
        return item.district == args[0];
      })
    };
  }

}
