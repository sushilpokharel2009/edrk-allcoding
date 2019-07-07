import {Developer} from './dev';
import {DEVELOPERS} from './model-developers';
import {Injectable, Inject, Injector , Provider} from '@angular/core';

export class DevValueService{
    public getDevelopers() {
    return DEVELOPERS;
  }
}

/* Injectable annotation to create a service */
/* Demonstrating how to use @Inject with constructor and using provider based instanciation of the class */

@Injectable()
export class DevService {

constructor(@Inject(DevValueService) private _DevValueService : DevValueService){}

/* Using/Injecting the class */
/* DevValueService is not declared as a Injectable right now but a normal class with some functions. */
/* However, we use provider to create a instance of it. Usage as singleton depends on how you call this class; whether with providers or use new instance everytime. */
/* This class is instanciated with provider in the app.components.ts and injected here using contructor */ 
/* The DevValueService can be private or public depending on need to expose service */

/* getDevelopers function within Service using Provider Value */    
  getDevelopers() {
    return Promise.resolve(this._DevValueService.getDevelopers());
  }
  
/* Mocking getDevelopers as to be from REST API and optionally use this to mock instead */
  getDevelopersSlowly() {
    return new Promise<Developer[]>(resolve =>
      setTimeout(()=>resolve(DEVELOPERS), 2000) // 2 seconds
    );
  }
}