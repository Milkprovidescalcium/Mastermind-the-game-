let storedColor = 'black';
document.body.addEventListener('click', function(evt){
    if(evt.target.classList.contains('circleColor')){ //clicking on the colorpick circles
        const selected = evt.target;
        const classList = selected.classList;
        storedColor = classList[1]; //stored color is the 2nd class (NOT the 'circle' class)
    }  
    if(evt.target.classList.contains('circle')){
        evt.target.classList.remove(evt.target.classList.item(1)); //removing the second class (aka the existing color)
        evt.target.classList.add(storedColor) 
    }  
}, false);



document.getElementById('guessButton').addEventListener('click',() =>{

    let parent = document.querySelector('#guessrow1'); //first grab the parent
    let children = parent.querySelectorAll('div'); //then grab the children

    let array = [];
    for(let i = 0, item; item = children[i]; i++){
        array.push(item);
    } //forloop to like, push all the kids into the array, like pushing all the kids into my icecream truck
      //also stolen off of stackoverflow
    console.log(array) 
    //okay so, I got it to display an array, but idrk how array syntax
    //like, works, so uhh, yeah I guess
    //I DONT KNOW HOW ARRAYS WORK
});

//okay so, what Im trying to do is make this one big array.
//and thennn, pick out 4 random items from that big array
//to make a SMALL array
//and then itll compare the small random array with the one you guessed

const mamaArray = [ 'div.circle.black',
                    'div.circle.violet',
                    'div.circle.indigo',
                    'div.circle.blue', 
                    'div.circle.green',
                    'div.circle.yellow',
                    'div.circle.orange',
                    'div.circle.red'];


document.getElementById('temp').addEventListener('click',() =>{
    //console.log(mamaArray)

    // for(let i = 0; i < 4; i++){
    //     randoms = Math.floor(Math.random() * 8) ;
    //     console.log(randoms)
    // } 
    //------------ISSUE: the numbers repeat themselves, and that's boring

    //------------SOLUTION: copy an algorithm from stackoverflow
    function shuffle(array){
        let currentIndex = array.length;

        while(currentIndex!=0){            //while theres still, like stuff to shuffle
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }
    let range = [0,1,2,3,4,5,6,7]
    shuffle(range)

    let randoms = range.slice(1,5)
    //console.log(randoms)
    //okay guys, so I jsut copied the "Fisher-yates shuffle algorithm" or whatever
    //from stack overflow, so noww the random numbers dont repeat
    //but the numbers are in an array sooo 


    let cpuArray= [];
    randoms.forEach((index)=>cpuArray.push(mamaArray[index])) 
    console.log(cpuArray)
    //foreach is like a forloop that's used for iterating over arrays, how convenient!
    //the arrow syntax basically tells the code what should happen on each iteration
    //im just using the numbers in my "randoms" array to push items into the cpu array
    //grabbing items from the mamaArray specifying which items with the "index" which is just
    //the content of my randoms array
    //How Fun and exciting!

});
