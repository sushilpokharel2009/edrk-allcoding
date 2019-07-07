import {Developer} from './dev';
import {DEVELOPERS} from './model-developers';
import {Injectable} from '@angular/core';

/* Injectable annotation to create a service */

@Injectable()
export class DevService {

/* getDevelopers function within service */    
  getDevelopers() {
    return Promise.resolve(DEVELOPERS);
  }
  
/* Mocking getDevelopers as to be from REST API */
  getDevelopersSlowly() {
    return new Promise<Developer[]>(resolve =>
      setTimeout(()=>resolve(DEVELOPERS), 2000) // 2 seconds
    );
  }
}