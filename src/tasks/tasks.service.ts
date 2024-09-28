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
      "img": "https://familia.freshcatarina.com/uploads/PLATANO.png",
      "category": "fruit"
    },
    {
      "id": "2",
      "title": "Passion fruit",
      "price": 10,
      "description": "Fresh",
      "img": "https://caribbeanexotics.com.co/wp-content/uploads/2021/03/granadilla-producto-caribbean-exotics-1.png",
      "category": "fruit"
    },
    {
      "id": "3",
      "title": "Apple",
      "price": 2,
      "description": "Fresh apple",
      "img": "https://www.frutality.es/wp-content/uploads/manzana-royal.png",
      "category": "fruit"
    },
    {
      "id": "4",
      "title": "Kiwi",
      "price": 7,
      "description": "Fresh kiwi",
      "img": "https://tastybitesec.com/wp-content/uploads/2021/03/kiwi-fruit.png",
      "category": "fruit"
    },
    {
      "id": "5",
      "title": "Blackberry",
      "price": 8,
      "description": "Fresh blackberry",
      "img": "https://i.pinimg.com/originals/a3/37/94/a337949e15bbe4c97a3eec8c542d7ca9.png",
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
  createTasks(title: string, description: string, price: number, category: string, img: string) {
    const task = {
      id: v4(),
      title,
      price,
      description,
      img,
      category
    };
    this.tasks.push(task);
    return task;
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
