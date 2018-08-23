let count = 0;
//Shows how to mock the get notifications function 
//The set count function allows users to set the count explictly for the purposes of testing

export default{
    __setCount(__count){
        count = __count;
    },
    async GetNotifications(){
        console.warn("Using mock serivce");

        return {count};
    }
}