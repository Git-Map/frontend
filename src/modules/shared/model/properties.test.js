import { get } from './properties';

describe('properties', () => {
    describe('get', () => {
        it('should return a first level property', () => {

            const TARGET = {
                key:'value'
            };

            expect(get(TARGET,'key')).toBe('value');
        });

        it('should return a default value if no value is present', () => {

            const TARGET = {
                key:'value'
            };

            expect(get(TARGET,'key2','default')).toBe('default');
        });

        it('should work with array positioning', () => {

            const TARGET = [1,2];

            expect(get(TARGET,'0')).toBe(1);
        });

        it('should work with nested properties', () => {

            const TARGET = {
                key:'value',
                child: {
                    key:'value2',
                    child:[{
                        key:'value3'
                    }]
                }
            };

            expect(get(TARGET,'child.key')).toBe('value2');
            expect(get(TARGET,'child.child.0.key')).toBe('value3');
        });

        it('should throw if target is not an Object', () => {
            expect(() => {
                get(false,'key');
            }).toThrow();
        });

        it('should throw if path is not a string', () => {

            const TARGET = [1,2];

            expect(() => {
                get(TARGET,false);
            }).toThrow();
        });
    });
});
