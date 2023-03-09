import { AppService } from '../app.service';
import { TestingModule, Test } from '@nestjs/testing';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('calculate', () => {
    it('should divide two numbers correctly', () => {
      const result = appService.calculate({
        prevValue: '10',
        operation: '/',
        currValue: '5',
      });
      expect(result).toEqual('2');
    });

    it('should return 0 when trying to divide by zero', () => {
      const result = appService.calculate({
        prevValue: '10',
        operation: '/',
        currValue: '0',
      });
      expect(result).toEqual('0');
    });

    it('should add two numbers correctly', () => {
      const result = appService.calculate({
        prevValue: '10',
        operation: '+',
        currValue: '5',
      });
      expect(result).toEqual('15');
    });

    it('should subtract two numbers correctly', () => {
      const result = appService.calculate({
        prevValue: '10',
        operation: '-',
        currValue: '5',
      });
      expect(result).toEqual('5');
    });

    it('should multiply two numbers correctly', () => {
      const result = appService.calculate({
        prevValue: '10',
        operation: '*',
        currValue: '5',
      });
      expect(result).toEqual('50');
    });

    it('should return undefined when given an unknown operator', () => {
      const result = appService.calculate({
        prevValue: '10',
        operation: '%',
        currValue: '5',
      });
      expect(result).toBeUndefined();
    });
  });
});
