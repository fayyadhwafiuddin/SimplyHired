import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterquali'
})
export class FilterqualiPipe implements PipeTransform {

  transform(value: Array<any>, ...args: any): any {
    if(args[0] === "All" || !args[0]){
      return value;
    }else{
      return value.filter((item)=>{
        return item.qualification == args[0];
      })
    }
  }

}
