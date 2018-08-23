import {handleFetchQuestion} from './fetch-question-saga'
import fetch from 'isomorphic-fetch';

/*shows how to create unit test using mocks
You must add __mocks__ folders*/
describe("Fetch question saga", () =>{
   beforeAll(() => {
    fetch.__setValue([{question_id:42}])});
    
    it ("should fetch the questions",async ()=>{
        const gen = handleFetchQuestion({question_id:42});
        const { value } = await gen.next();

        //Verify that the return value is what we expected
        expect(value).toEqual([{question_id:42}]);

        //This allows us to see if the function was called with what we expected it to be called with
        expect(fetch).toHaveBeenCalledWith('/api/questions/42');
    });
})
