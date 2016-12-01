import { isObject, isUndefined, isNull, isString } from 'lodash';

export const get = (target, path, defaultValue) => {

    if(!isObject(target)){
        throw new Error('target is not an object');
    }

    if(!isString(path)){
        throw new Error('path is not a string');
    }

    const parts = path.split('.');
    let current = target;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];

        if (!Object.prototype.propertyIsEnumerable.call(current, part)) {
            return defaultValue;
        }

        current = current[part];

        if (isUndefined(current) || isNull(current)) {
      /*
        If we have a falsy value we need to stop the for cycle.
        But if we are at the end of the array we should return the default value
       */

            if (i !== parts.length - 1) {
                return defaultValue;
            }

            break;
        }
    }

    return current;
};

