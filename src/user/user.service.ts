import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user,schema';

@Injectable()
export class UserService {
  async updateUser(id: string, body: any): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, body, { new: true })
      .exec();
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  }
  findAllUsers(): User[] | PromiseLike<User[]> {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(data: any): Promise<User> {
    const newUser = new this.userModel(data);
    return await newUser.save();
  }

  async getAllUsers(query: any = {}): Promise<User[]> {
    const users = await this.userModel.find(query).exec();
    console.log(users); // This will print the full array of user objects
    return users;
  }

  async findByUserId(userID: string, data: any): Promise<User[]> {
    return this.userModel.find({ userID: userID, ...data }).exec();
  }

  async deleteUser(id: string): Promise<{ message: string; data: User }> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();

    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }

    return {
      message: 'User deleted successfully',
      data: deletedUser,
    };
  }

  async searchUsers(query: any): Promise<User[]> {
    return this.userModel.find(query).exec();
  }
}
