import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it ('deve formatar a data 2024-07-15 para 15/07/2024', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2024-07-15')).toEqual('15/07/2024');
  })
});
