import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'orderBy'})

export class OrderBy implements PipeTransform {
    transform(obj: any, orderFields: String): any {
        orderFields.split('').forEach(function(currentField: any) {
            var orderType = 'ASC';

            if (currentField[0] === '-') {
                currentField = currentField.substring(1);
                orderType = 'DESC';
            }

            obj.sort(function(a: any, b: any) {
                if (orderType === 'ASC') {
                    if (a[currentField] < b[currentField]) {return -1};
                    if (a[currentField] > b[currentField]) {return 1};
                    return 0;
                } else {
                    if (a[currentField] < b[currentField]) {return 1};
                    if (a[currentField] > b[currentField]) {return -1};
                    return 0;
                }
            });

        });
        return obj;
    }
}