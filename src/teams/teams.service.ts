import { Injectable } from '@nestjs/common';
import { Team, TeamDocument } from './Schema/teams.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  async createTeam(data: any): Promise<Team> {
    const newTeam = new this.teamModel(data);
    return newTeam.save();
  }

  async getAllTeams(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }

  async updateTeam(id: string, body: any): Promise<Team> {
    const updatedTeam = await this.teamModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTeam) {
      throw new Error('Team not found');
    }

    return updatedTeam;
  }
}
