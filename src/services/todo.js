import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
            priority: 'High',
            dueDate: '2024-12-20',
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
            priority: 'Medium',
            dueDate: '2024-12-25',
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
            priority: 'Low',
            dueDate: null,
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Sorts the todo list based on the provided type (priority or due date).
 *
 * @param {Array} list
 * @param {String} type - "priority" or "dueDate"
 * @return {Array} - Sorted list
 */
export function sortList(list, type) {
    if (type === 'priority') {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return list.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    if (type === 'dueDate') {
        return list.sort((a, b) => {
            const dateA = new Date(a.dueDate || '9999-12-31'); // Default far-future date if dueDate is null
            const dateB = new Date(b.dueDate || '9999-12-31');
            return dateA - dateB; // Ascending order
        });
    }

    return list; // Default: no sorting
}


/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId(),
        priority: data.priority || 'Medium',
        dueDate: data.dueDate || null
    }, data);

    return list.concat([item]);
}
