let tasks = [];

exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

exports.createTask = (req, res) => {
    const { id, title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const newTask = { id, title, createdBy: req.user.username };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);

    if (tasks.length === initialLength) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
};