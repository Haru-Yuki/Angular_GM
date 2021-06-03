import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new TimePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add hours string if value >=60', () => {
    expect(pipe.transform(70)).toBe('1h 10min');
  });

  it('should not add hours string if value <60', () => {
    expect(pipe.transform(45)).toBe('45min');
  });
});
