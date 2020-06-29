// This method will change the original array
function arrayReplace(array, elemToReplace, substitutionElem) {
    
    array.forEach( (elem, index) => {
        if(elem === elemToReplace){
           array[index] = substitutionElem; 
        } 
    });
    return array; //array.replace(elemToReplace,substitutionElem);
}

// Non-destructive to the original array
/*function arrayReplace(array, elemToReplace, substitutionElem){
    let newArray = array.map(elem => elem === elemToReplace ? substitutionElem : elem);
    return newArray;
    //return array;
}*/



/**
* Test Suite 
*/
describe('arrayReplace()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const array = [1, 2, 1];
        const elemToReplace = 1;
        const substitutionElem = 3;
        
        // act
        const result = arrayReplace(array, elemToReplace, substitutionElem);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([3, 2, 3]);
    });
});


