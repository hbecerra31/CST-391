export interface Task {
    id: number;
    task: string;
    dueDate?: string; // Optional due date in ISO format (YYYY-MM-DD)
    priority: 'Low' | 'Medium' | 'High';
    
}