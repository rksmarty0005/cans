import { validate, isFormValid } from './ChildForm.helper';

describe('ChildForm.helper', () => {
  describe('#validate()', () => {
    it('first_name', () => {
      expect(validate('first_name', 'Mike')).toBe(true);
      expect(validate('first_name', 'Mike John')).toBe(true);
      expect(validate('first_name', 'Mike  John')).toBe(false);
      expect(validate('first_name', 'Mike-John')).toBe(true);
      expect(validate('first_name', 'mike')).toBe(true);
      expect(validate('first_name', 'Mike1')).toBe(false);
      expect(validate('first_name', 'Mike-')).toBe(false);
      expect(validate('first_name', '   ')).toBe(false);
      expect(validate('first_name', 'Mike#')).toBe(false);
      expect(validate('first_name', '@')).toBe(false);
    });
    it('last_name', () => {
      expect(validate('last_name', 'Mike')).toBe(true);
      expect(validate('last_name', 'Mike John')).toBe(true);
      expect(validate('last_name', 'Mike  John')).toBe(false);
      expect(validate('last_name', 'Mike-John')).toBe(true);
      expect(validate('last_name', 'mike')).toBe(true);
      expect(validate('last_name', 'Mike1')).toBe(false);
      expect(validate('last_name', 'Mike-')).toBe(false);
      expect(validate('last_name', '   ')).toBe(false);
      expect(validate('last_name', 'Mike#')).toBe(false);
      expect(validate('last_name', '@')).toBe(false);
    });
    it('case_id', () => {
      expect(validate('case_id', 'E76cv396')).toBe(true);
      expect(validate('case_id', '76cv39d6')).toBe(true);
      expect(validate('case_id', 'vgh7321 ')).toBe(false);
      expect(validate('case_id', '#34la7sd')).toBe(false);
      expect(validate('case_id', '   ')).toBe(false);
    });
    it('dob', () => {
      expect(validate('dob', '2012/10/12')).toBe(true);
      expect(validate('dob', null)).toBe(false);
      expect(validate('dob', undefined)).toBe(false);
      expect(validate('dob', '')).toBe(false);
    });
    it('county', () => {
      expect(validate('county', { id: '1' })).toBe(true);
      expect(validate('county', {})).toBe(false);
      expect(validate('county', null)).toBe(false);
      expect(validate('county', undefined)).toBe(false);
      expect(validate('county', '')).toBe(false);
    });
    it('unknown field name', () => {
      expect(validate('unknownFieldName', { id: '1' })).toBe(false);
      expect(validate('unknownFieldName', {})).toBe(false);
      expect(validate('unknownFieldName', null)).toBe(false);
      expect(validate('unknownFieldName', undefined)).toBe(false);
      expect(validate('unknownFieldName', '')).toBe(false);
      expect(validate('unknownFieldName', 'string')).toBe(false);
    });
  });

  describe('#isFormValid()', () => {
    it('returns false when invalid', () => {
      expect(
        isFormValid({
          first_name: '',
          last_name: '',
          dob: '',
          case_id: '',
          county: '',
        })
      ).toBe(false);
    });
    it('returns true when valid', () => {
      expect(
        isFormValid({
          first_name: 'Amber',
          last_name: 'Jersey',
          dob: '10/12/2012',
          case_id: '123',
          county: { id: 1 },
        })
      ).toBe(true);
    });
  });
});
