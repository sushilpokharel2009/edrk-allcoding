'use strict';

describe('1st tests', () => {
  
  it('true is true', () => expect(true).toEqual(true));
  
  it('null is not the same thing as undefined',
  () => expect(null).not.toEqual(undefined)
  );
  
  it('null is the same thing as undefined',
  () => expect(null).toEqual(undefined)
  );
  
});

xdescribe('2nd tests', () => {
  
  it('true is true', () => expect(true).toEqual(true));
  
  it('null is not the same thing as undefined',
  () => expect(null).not.toEqual(undefined)
  );
  
  it('null is the same thing as undefined',
  () => expect(null).toEqual(undefined)
  );
  
});