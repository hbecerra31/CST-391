/**
 * Represents a task with an ID, description, optional due date, and priority level.
 */
export interface Task {
    id: number;
    task: string;
    dueDate?: string; // Optional due date in ISO format (YYYY-MM-DD)
    priority: 'Low' | 'Medium' | 'High';
    
}