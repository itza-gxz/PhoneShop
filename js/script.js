

function orderNow() {
    alert("Welcome! Order your mobile products online.");
}

function shopNow() {
    alert("Explore our latest smartphones and gadgets.");
}

function showAccessories() {
    alert("Check our accessories: Chargers, AirPods, Cases, Power Banks and more.");
}

function buyNow(productName) {
    alert("You selected: " + productName);
}




function counter(id,target){

    let count=0;

    let speed=setInterval(()=>{

        count++;

        document.getElementById(id).innerHTML=count+"+";

        if(count>=target){
            clearInterval(speed);
        }

    },20);
}

counter("customer",500);
counter("product",200);
counter("order",1000);
