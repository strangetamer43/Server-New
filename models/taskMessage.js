import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    field: String,
    registrations: [{
        name: String,
        user: String,
        time: String,
    }],
    completions: [{
        name: String,
        user: String,
        time: String,
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }, 

});

const TaskMessage = mongoose.model('TaskMessage', taskSchema);

export default TaskMessage;