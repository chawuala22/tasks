import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

  private tasks: Task[] = [
    {
      "id": "1",
      "name_task": "Desarrollo Frontend",
      "deadline": "15/10/2024",
      "state": false,
      "associated_persons": [
        {
          "full_name": "Laura Gómez",
          "age": 27,
          "skills": [
            "angular",
            "css",
            "nginx"
          ]
        },
        {
          "full_name": "Carlos Pérez",
          "age": 32,
          "skills": [
            "typescript",
            "nodejs",
            "firebase"
          ]
        }
      ]
    }
    
  ];

  getAllTasks() {
    const response = {
      message: 'Success',
      data: this.tasks,
    };
    return response;
  }

  getTaskById(taskId: string): Task {
    return this.tasks.find((task) => task.id === taskId);
  }

  createTasks(name_task: string, deadline: string, state: boolean, associated_persons: any[]) {
    const task = {
      id: v4(),
      name_task,
      deadline,
      state,
      associated_persons
    };
    this.tasks.push(task);
    return task;
  }
  deleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTasks(id: string, updateFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const newtask = Object.assign(task, updateFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newtask : task));
    return newtask;
  }
}
