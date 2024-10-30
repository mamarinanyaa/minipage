export const SELECTORTAGS_CHANGE = 'SELECTORTAGS_CHANGE';
export const SELECTOROPTION_CHANGE = 'SELECTOROPTION_CHANGE';
export const SELECTOR_RESET = 'SELECTOR_RESET';

export const selectorTagsChange = (data) => ({
    type: SELECTORTAGS_CHANGE,
    data
})

export const selectorOptionChange = (data) => ({
    type: SELECTOROPTION_CHANGE,
    data
})

export const selectorReset = () => ({
    type: SELECTOR_RESET,
})
