import { PhoneFormatPipe } from './phone-format.pipe';

describe('PhoneFormatPipe', () => {
  let pipe: PhoneFormatPipe;

  beforeEach(() => {
    pipe = new PhoneFormatPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format phone number correctly', () => {
    const phoneNumber = '+1234567890';
    const formattedPhoneNumber = pipe.transform(phoneNumber);
    expect(formattedPhoneNumber).toEqual('+123 4567 890');
  });
});
