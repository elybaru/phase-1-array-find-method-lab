
function superbowlWin(array) {
    const result = array.find(record => record.result === "W")
    if (result) {
        return result.year 
    } else {
        return undefined
    }
    
}