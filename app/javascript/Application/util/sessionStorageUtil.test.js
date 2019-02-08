import { getIntItem, setItem } from './sessionStorageUtil'

describe('sessionStorageUtil', () => {
  beforeAll(() => sessionStorage.clear())

  afterAll(() => sessionStorage.clear())

  describe('#getIntItem()', () => {
    it('should return null initially', () => {
      expect(getIntItem('some_key')).toBe(null)
    })

    describe('and #setItem()', () => {
      it('should store and get an int value by key', () => {
        setItem('a_key', 123)
        expect(getIntItem('a_key')).toBe(123)
      })
    })
  })
})
