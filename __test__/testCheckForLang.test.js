import { checkForLang } from '../src/client/js/langChecker'

let inputText='english word'
let apiKey='7351add14297b6d945bb9e12d48d33e6'
// test('works with async/await',async () => {
//   const data = await checkForLang(inputText, apiKey);
//   expect(data.body).toEqual({});
// });


describe('checkForLang() using Promises',() => {
  it('loaded and got data',async () => {
    return await checkForLang(inputText, apiKey)
    .then(data => {
      expect(data).toBeDefined()
      expect(data).toEqual({"body": {"status": {"code": 200, "credits": 0, "msg": "Missing required parameter(s): key"}}})
    })
  })
})