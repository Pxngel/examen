import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
      if(arg === null){
        return value
      }
    for(const post of value){
      if(post.name.indexOf(arg) > -1){
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
