export const taskQueries = {
    readTasks: `
        SELECT *
        FROM todolistdb.tasks
        `,
    readTaskById: `
        SELECT *
        FROM todolistdb.tasks
        WHERE todolistdb.tasks.id = ?
        `,
    createTask: `
        INSERT INTO todolistdb.tasks(task, dueDate, priority) VALUES (?, ?, ?)
        `,
    updateTask: `
        UPDATE todolistdb.tasks
        SET task = ?, dueDate = ?, priority = ?
        WHERE id = ?
        `,
    deleteTask: `
        DELETE FROM todolistdb.tasks
        WHERE id = ?
        `
};