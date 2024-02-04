import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDTto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First Task',
      description: 'Description task for the first task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(taskId: string): Task {
    return this.tasks.find((task) => task.id === taskId);
  }
  createTasks(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);

    const response = {
      status: 'ok',
      data: [task],
    };

    return response;
  }
  deleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTasks(id: string, updateFields: UpdateTaskDTto): Task {
    const task = this.getTaskById(id);
    const newtask = Object.assign(task, updateFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newtask : task));
    return newtask;
  }
}
