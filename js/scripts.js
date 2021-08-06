
let listOfFloors = [];
let garageFloors = ['G1', 'G2', 'G3'];
let currentFloor = 0;
let lastFloor = 0;
let nextFloor = 0;
let showErrorInput = false;
let timebyFloor = 1000; // a second 
let input = '';


// function GO button
function addFloor() {
    let floor = input;

    if(listOfFloors.includes(floor)) return;

    if(validFloor(floor)){
        

        lastFloor = floor;
        listOfFloors.push(floor);
        listOfFloors.sort(function(a, b){return b-a});
        // listOfFloors = sortList(listOfFloors);
        
        html = ''
        listOfFloors.forEach( floor => {
            html = html + `<p>${floor}<button onclick="deleteFloor('${floor}')">X</button> </p>`
        })
        document.getElementById("list").innerHTML = html;
        resetInput()
    
    } else {
        // show error for 1.5 second 
        showErrorInput = true;
        document.getElementById("showErrorInput").classList.add("hide");
        
        setTimeout(function(){ 
            showErrorInput = false;
            document.getElementById("showErrorInput").classList.remove("hide");
            resetInput()
        }, 1500);
    }
}

// create floor number
function addNumber(number){
    
    document.getElementById("step1").classList.add("hide");
    document.getElementById("step2").classList.remove("hide");

    if(input === 'G1' || input === 'G2' || input === 'G3') return;
    if(input != '') if(!isNaN(input) && (number === 'G1' || number === 'G2' || number === 'G3')) return;

    if(input.length >= 3) return;
    String(input = input + number);
    document.getElementById("numberInput").innerHTML = input;
}

// delete current number
function resetInput(){
    input = ''
    document.getElementById("numberInput").innerHTML = input;
}

// function close doors
function closeDoors(){
    
    if(listOfFloors.length > 0){
        document.getElementById("step2").classList.add("hide");
        document.getElementById("step3").classList.remove("hide");

        let ETA = 0;
        let timeList = [];
        let timeElapsed = 0;
        console.log(listOfFloors)

    //     listOfFloors.forEach( floor => {
    //         if(garageFloors.includes(floor)){
    //             switch(floor){
    //                 case "G1": floor = 1; break;
    //                 case "G2": floor = 2; break;
    //                 case "G3": floor = 3; break;
    //             }
    //         }
    //         time = floor * timebyFloor
    //         timeList.push(time);
    //         ETA = Number(time) + Number(ETA)
    //     })
    //     console.log({ETA})
    //     console.log({timeList})

    //     while(ETA >= 0){
    //         document.getElementById("ETA").innerHTML = "ETA: "+ ETA;
    
    //         timeElapsed = timeElapsed + 1000;
    //         setTimeout(function(){ ETA = ETA - 1000 }, 1000);
            
    //         if( timeList[0] == timeElapsed ){
    //             timeList.shift(); //delete first floor
    //         }
    
    //     }
    // }
    

    }
}

// validate input floor
function validFloor(floor){

    if (!isNaN(floor)) { // numeric floor

        if(floor > 105 || floor < 1) return false; // floor does not exist
        else return true; // correct floor number

    } else if (garageFloors.includes(floor)) return true; // garage floor
    
    else return false; // floor does not exist
    
}

// delete floor
function deleteFloor(floor){
    const index = listOfFloors.indexOf(String(floor));
    console.log({index})
    if (index > -1) {
        listOfFloors.splice(index, 1);
    }

    html = ''
    listOfFloors.forEach( floor => {
        html = html + `<p>${floor}<button onclick="deleteFloor('${floor}')">X</button> </p>`
    })
    document.getElementById("list").innerHTML = html;

}



// function sortList(list) {
//     console.log("----------------------------------------")
//     list.sort(function(a, b){return b-a});
//     garages = []
//     console.log({list})

//     list.forEach( floor => {
// console.log(floor)
//         if(isNaN(String(floor))){
//             console.log(floor)
//             garages.push(floor);
//             const index = list.indexOf(String(floor));
//             console.log({index})
//             if (index > -1) {
//                 list.splice(index, 1);
//             }
//         }

//     })
//     console.log({2: garages})

//     garages.forEach( floor => {
//         list.splice(list.length, 0, floor)
//     })
//     return list;
// }