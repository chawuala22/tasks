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
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';


@Controller('task')
export class TasksController {
  constructor(private _tasksService: TasksService) {}

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
    return this._tasksService.createTasks(
      newTask.name_task,
      newTask.deadline,
      newTask.date_completed,
      newTask.state,
      newTask.associated_persons,
    );
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this._tasksService.deleteTasks(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto) {
    return this._tasksService.updateTasks(id, updateFields);
  }
}
