function Board(y=3) //y is the number in 1 row
{
    var x = NumbersArray(y*y); //x is a random number
    x = ShuffleNumber(x);
    var con





}

function NumbersArray(y)
{
    var array = [];
    for(var i = 1; i <= y; i ++){
        array.push(i);
    }
    return array;

}

function ShuffleNumber(array)
{

    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}