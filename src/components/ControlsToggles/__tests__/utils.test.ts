import { getUniqueOptions } from '../utils';

describe('ControlsToggles/Utils', () => {
  describe('getUniqueOptions', () => {
    it('filter options by label and value', () => {
      const options = [
        { label: 'Pizza', value: 'pizza' },
        { label: 'pizza', value: 'pizza' },
        { label: 'Hamburguer', value: 'hamburguer' },
        { label: 'Hambúrguer', value: 'hamburguer' },
        { label: 'Salad', value: 'salad', disabled: true },
        { label: 'Salad', value: 'salad', disabled: false },
      ];

      expect(getUniqueOptions(options)).toEqual([
        { label: 'Pizza', value: 'pizza' },
        { label: 'Hamburguer', value: 'hamburguer' },
        { label: 'Salad', value: 'salad', disabled: true },
      ]);
    });
  });
});
