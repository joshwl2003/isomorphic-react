describe('The question detail component',() =>{
    beforeEach(() =>{
        console.log("Before Each");
    });
    beforeAll(() =>{
        console.log("Before All");
    });
    afterEach(() =>{
        console.log("After Each");
    });
    afterAll(() =>{
        console.log("After All");
    });


    it(' should display a list of items', () =>{
        expect(2 + 2).toEqual(4);
    });

    it(' should display a list of items 1', () =>{
        expect(3 + 3).toEqual(6);
    });
})