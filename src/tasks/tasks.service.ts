import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { UpdateTaskDTto } from './dto/task.dto';
import { Fruit } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Fruit[] = [
    {
      "id": "1",
      "title": "Banana",
      "price": 3,
      "description": "Fresh banana",
      "category": "fruit"
    },
    {
      "id": "2",
      "title": "Passion fruit",
      "price": 10,
      "description": "Fresh",
      "category": "fruit"
    },
    {
      "id": "3",
      "title": "Apple",
      "price": 2,
      "description": "Fresh apple",
      "category": "fruit"
    },
    {
      "id": "4",
      "title": "Kiwi",
      "price": 7,
      "description": "Fresh kiwi",
      "category": "fruit"
    },
    {
      "id": "5",
      "title": "Blackberry",
      "price": 8,
      "description": "Fresh blackberry",
      "category": "fruit"
    },
  ];

  getAllTasks() {
    const response = {
      message: 'Success',
      data: this.tasks,
    };
    return response;
  }

  getTaskById(taskId: string): Fruit {
    return this.tasks.find((task) => task.id === taskId);
  }
  createTasks(title: string, description: string, price: number, category: string) {
    const task = {
      id: v4(),
      title,
      price,
      description,
      category
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

  updateTasks(id: string, updateFields: UpdateTaskDTto): Fruit {
    const task = this.getTaskById(id);
    const newtask = Object.assign(task, updateFields);
    this.tasks = this.tasks.map((task) => (task.id === id ? newtask : task));
    return newtask;
  }
}
