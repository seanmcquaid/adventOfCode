const intCode = array => {
    let mutableArray = array;
    mutableArray[1] = 12;
    mutableArray[2] = 2;
    let i = 0;
    while(i < mutableArray.length){
        let positionOne = mutableArray[i + 1];
        let positionTwo = mutableArray[i + 2];
        let positionThree = mutableArray[i + 3];

        let positionOneIndexValue = mutableArray[positionOne];
        let positionTwoIndexValue = mutableArray[positionTwo];

        if(mutableArray[i] === 1){
            mutableArray[positionThree] = positionOneIndexValue + positionTwoIndexValue;
        }else if(mutableArray[i] === 2){
            mutableArray[positionThree] = positionOneIndexValue * positionTwoIndexValue;
        }else if(mutableArray[i] === 99){
            break;
        } else {
            break;
        }

        i += 4;

        
    }

    return mutableArray[0];
}

module.exports = {
    intCode,
};