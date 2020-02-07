export const Add = "Add";
export const Remove = "Remove";


export const addItem = item => {
    return { 
        type: Add, payload: item
    };
};

export const removeItem = item => {
    return {
        type: Remove, payload: item
    }
}