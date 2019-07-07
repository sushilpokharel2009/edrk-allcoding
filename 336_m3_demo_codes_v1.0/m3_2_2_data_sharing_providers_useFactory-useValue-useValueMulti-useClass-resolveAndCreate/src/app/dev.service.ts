import {Developer} from './dev';
import {DEVELOPERS} from './model-developers';
import {Injectable, Inject, Injector , Provider, ReflectiveInjector, ValueProvider, FactoryProvider} from '@angular/core';

/* Using Injector within a normal class to create a Injector Object of Factory type */
/* Registering a multiple provider values within Injector object. */ 
/* The provider will return an array of strings */
/* After Injecting DevValueMultiService to Service/Factory/Component you can access the value as DevValueMultiService.injectoreg.get("Strings") */
/* The result of the above get will be ["String1","String2"] */

const provider: ValueProvider = {provide: 'someTokenMulti', useValue: 'someValue1', multi:true};
const provider2: ValueProvider = {provide: 'someTokenMulti', useValue: 'someValue2', multi:true};
const provider3: ValueProvider = {provide: 'noMulti', useValue: 'noMultiValue'};

export class DevValueMultiService{
    public injectoreg = ReflectiveInjector.resolveAndCreate([
      provider, provider2, provider3     
    ]);
}

export var serviceFactory = function(){ 

            /* Do your value or object conversion OR pre-processing here */
            return {DEV: DEVELOPERS}
}

const factoryProvider: FactoryProvider = {provide: 'myFactory', useFactory: serviceFactory, deps: []};

export class DevValueService{
    public injectoreg = ReflectiveInjector.resolveAndCreate([
      factoryProvider
    ]);
}

/* Injectable annotation to create a service */

@Injectable()
export class DevService {

constructor(@Inject(DevValueService) private _DevValueService: any){}

/* The DevValueService can be private or public depending on need to expose service */
/* getDevelopers function within Service using Provider Value */    
  getDevelopers() {
    return Promise.resolve(this._DevValueService.injectoreg.get('myFactory').DEV);
  }
  
/* Mocking getDevelopers as to be from REST API and optionally use this to mock instead */
  getDevelopersSlowly() {
    return new Promise<Developer[]>(resolve =>
      setTimeout(()=>resolve(DEVELOPERS), 2000) // 2 seconds
    );
  }
}
