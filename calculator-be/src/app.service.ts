import { Injectable } from '@nestjs/common';
import { CalculateDTORequest } from './dto/calculate-request.dto';

@Injectable()
export class AppService {
  calculate(calculateDTORequest: CalculateDTORequest): string {
    const { prevValue, operation, currValue } = calculateDTORequest;

    let calculation = '0';

    switch (operation) {
      case '/':
        calculation =
          currValue !== '0'
            ? String(parseFloat(prevValue) / parseFloat(currValue))
            : '0';
        break;
      case '+':
        calculation = String(parseFloat(prevValue) + parseFloat(currValue));
        break;
      case '*':
        calculation = String(parseFloat(prevValue) * parseFloat(currValue));
        break;
      case '-':
        calculation = String(parseFloat(prevValue) - parseFloat(currValue));
        break;
      default:
        return;
    }

    return calculation;
  }
}
