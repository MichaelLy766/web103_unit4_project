// client/src/utilities/validation.js

export const validateConvertibleOptions = (isConvertible, selectedOptions) => {
    const roofOption = selectedOptions.roof;

    if (isConvertible) {
        if (typeof roofOption === 'string') {
            return roofOption.toLowerCase() === 'soft top';
        } else if (roofOption && roofOption.name) {
            return roofOption.name.toLowerCase() === 'soft top';
        }
    }

    return true;
};