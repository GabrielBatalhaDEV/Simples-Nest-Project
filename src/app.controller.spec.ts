import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],

      providers: [PrismaRocketMembersRepository],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(
        appController.getHello({ name: 'Gabriel', function: 'Fazer Testes' }),
      );
    });
  });
});

