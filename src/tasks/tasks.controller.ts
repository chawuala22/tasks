import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDTto } from './dto/task.dto';

@Controller('fruit')
export class TasksController {
  constructor(private _tasksService: TasksService) { }

  @Get()
  getAllTasks() {
    return this._tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this._tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this._tasksService.createTasks(newTask.title, newTask.description, newTask.price, newTask.category, newTask.img);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this._tasksService.deleteTasks(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDTto) {
    return this._tasksService.updateTasks(id, updateFields);
  }
}
