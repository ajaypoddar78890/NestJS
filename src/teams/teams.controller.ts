import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';
import { Team } from './Schema/teams.schema';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post('create')
  async createTeam(@Body() body: any): Promise<Team> {
    return await this.teamsService.createTeam(body);
  }
  @Get()
  async findAllTeam(): Promise<Team[]> {
    return await this.teamsService.getAllTeams();
  }

  @Put(':id')
  async updateTeam(@Param('id') id: string, @Body() body: any): Promise<Team> {
    return await this.teamsService.updateTeam(id, body);
  }
}
