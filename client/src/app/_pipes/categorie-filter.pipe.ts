import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'categorieFilter'})

export class CategorieFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items) {
            return items;
        }
        if(!filter)
        {
            return items.filter(item => item.parent === null || item.parent === undefined);
        }else{
            return items.filter(item => item.parent === filter._id);
        }
    }
}