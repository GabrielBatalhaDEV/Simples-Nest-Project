import { Controller, Get, Body, Post } from '@nestjs/common';

import { CreateTeamMemberBody } from './dtos/create-team-memeber-body';

import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller()
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post()
  async getHello(@Body() body: CreateTeamMemberBody): Promise<void> {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}

