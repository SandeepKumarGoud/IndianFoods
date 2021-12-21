$(document).ready(function() {
    $(".slick").slick({
        dots:true
    })

    let section2Ele = $(".section-two") 

    let pageCutter = 0
    let sampleImageLinks = [
        "Home Resources/Items/Aloo Chat.jpg",
        "Home Resources/Items/Bhel poori.jpg",
        "Home Resources/Items/cauli-flower-manchuria.jpg",
        "Home Resources/Items/chicken-manchuria.jpg",
        "Home Resources/Items/chips-and-salsa.jpg",
        "Home Resources/Items/Chole Bhature.jpg",
        "Home Resources/Items/Dahi puri.jpg",
        "Home Resources/Items/Dahi vada.jpg",
        "Home Resources/Items/french fries.jpg",
        "Home Resources/Items/kathi roll.jpg",
        "Home Resources/Items/lassi.jpg",
        "Home Resources/Items/Mirch Bajji.jpg",
        "Home Resources/Items/Momos.jpg",
        "Home Resources/Items/onion pakoda.jpg",
        "Home Resources/Items/Paani pooori.jpg",
        "Home Resources/Items/Pav bhajii.jpg",
        "Home Resources/Items/Poha.jpg",
        "Home Resources/Items/royal dosa.jpg",
        "Home Resources/Items/samosa chat.jpg",
        "Home Resources/Items/Vada Pao.jpg",
    ]
    let sampleItemNames = ["Aloo Chat", "Bhel Poori", "Cauli Flower Manchuria", "Chicken Manchuria", "Chips and salsa", "Chola Bhature", 
        "Dahi Poori", "Daahi Vada", "French Fries", "Kathi Roll", "lassi", "Mirch Bajji", "Momos", "Onion Pakoda", "Paani Poori", "Pav Bhaji",
         "Poha", "Royal Dosa", "Samosa Chat", "Vada Pao"
    ]
    let sampleCost = ["40", "50", "60", "80", "40", "40", "50", "60", "80", "40", "40", "50", "60", "80", "40", "40", "50", "60", "80", "40"]
    let sampleratings = ["4.0", "3.5", "3.8", "4.2", "4.0", "4.0", "3.5", "3.8", "4.2", "4.0", "4.0", "4.0", "3.5", "3.8", "4.0", "3.5", "3.8", "4.2", "4.0", "4.0"]

    function itemUpdates() {
        section2Ele.empty()
        for (let i=pageCutter; i<=pageCutter+5; i++) {
            // console.log(sampleItemNames[i]);
            console.log(i);
            section2Ele.append(`
                <div class="item-cont">
                <img class="item" src="${sampleImageLinks[i]}" >
                <div>
                <p class="para1">${sampleItemNames[i]}</p>
                <p class="para2">${sampleratings[i]} rating</p>
                <div class="rupee-cont">
                <i class="rupee-style fas fa-rupee-sign"></i>
                <p class="para2">${sampleCost[i]}</p>
                </div>

                </div>
                </div>
            `)
           
       }
    }
    itemUpdates()

     // let leftArrowEle = $("#left-arrow")
    let rightArrowEle = $("#right-arrow")

    $("#leftArrow").click(function() {
        console.log("left");
        if (pageCutter-6 >= 0) {
            pageCutter -= 6
            itemUpdates()
        }
    })

    $("#rightArrow").click(function() {
        console.log("right");
        console.log(pageCutter+6 <= 25);
        if (pageCutter+6 <= 16) {
            pageCutter += 6
            itemUpdates()
            console.log("success");
        }
    })


})

/* function leftArrowFn() {
    if (pageCutter-6 > 0) {
        pageCutter -= 6
    }
}
function rightArrowFn() {
    if (pageCutter+6 < 16) {
        pageCutter += 6
    }
}  */