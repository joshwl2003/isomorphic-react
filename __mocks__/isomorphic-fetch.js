//Mocks out a class. In this case it is mocking out what the fetch function in 
//Fetch question saga is doind

let __value = 42;

const isomorphicFetch = jest.fn(()=>__value);
isomorphicFetch.__setValue = v => __value = v;

export default isomorphicFetch;
