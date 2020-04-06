let header1=document.getElementsByClassName("listings printh1")

console.log(header1)
let completeAddress=header1[0].innerText;

completeAddress

let firstCutPosition=completeAddress.search(" : ")
let secondCutPosition=completeAddress.search(",")
let StreetAddress=completeAddress.slice(firstCutPosition,secondCutPosition)
let uniqueStreet=StreetAddress.slice(1)

let thirdCutPosition=completeAddress.search("#")



function nth_occurrence (string, char, nth) {
    var first_index = string.indexOf(char);
    var length_up_to_first_index = first_index + 1;

    if (nth == 1) {
        return first_index;
    } else {
        var string_after_first_occurrence = string.slice(length_up_to_first_index);
        var next_occurrence = nth_occurrence(string_after_first_occurrence, char, nth - 1);

        if (next_occurrence === -1) {
            return -1;
        } else {
            return length_up_to_first_index + next_occurrence;  
        }
    }
}
let occurence;
let gettinSecondOccurence=nth_occurrence(completeAddress,"#",2)
let gettingSecondComma=nth_occurrence(completeAddress,",",2)


let unitNumber=completeAddress.slice(gettinSecondOccurence,gettingSecondComma)

let gettingThirdComma=nth_occurrence(completeAddress,",",3)
let gettingCity=completeAddress.slice(gettingSecondComma,gettingThirdComma)

let gettingZipCode1=nth_occurrence(completeAddress,"(",1)
let gettingZipCode2=nth_occurrence(completeAddress,")",1)
let zipcode=completeAddress.slice(gettingZipCode1,gettingZipCode2)

let classFv=document.getElementsByClassName("fv")

let area1=""


let aptType1=""



let gettingBedrooms="";

let gettingBathrooms="";

let gettingPetsPolicy="";
let firstPrice=""
let classFn=document.getElementsByClassName("Fn")
let availabilityExp=""

let gettingLength=classFv.length--
for(let i=0;i<classFn.length;i++){

    if(classFn[i].textContent==="Availability:"){
        availabilityExp=classFv[i].innerText
    }
    if(classFn[i].textContent==="Pets Policy:"){
        gettingPetsPolicy=classFv[i].innerText
    }

    if(classFn[i].textContent==="Bathrooms:"){
        gettingBathrooms=classFv[i].innerText
    }
    if(classFn[i].textContent==="Bedrooms:"){
        gettingBedrooms=classFv[i].innerText
     
    }
    if(classFn[i].textContent==="Price:"){
        firstPrice=classFv[i].innerText;
       
    }
    if(classFn[i].textContent==="Type:"){
        aptType1=classFv[i].innerText
       
    }
    if(classFn[i].textContent==="Area:"){
        area1=classFv[i].innerText
      
    }

}
let gas=false;
let heat=false;
let water=false;
let internet=false;
let cable=false;
let electricity=false;
//Loop to get Utilities
for(let i=0;i<classFn.length;i++){

    let lookingForUtilities=classFv[i].textContent
if(lookingForUtilities.search("Gas")!=-1)
    {
    gas=true;
       }

       if(lookingForUtilities.search("Heat")!=-1)
    {
           heat=true;
       }
       if(lookingForUtilities.search("Water")!=-1)
       {
            water=true;
       }
       if(lookingForUtilities.search("Internet")!=-1)
       {
           internet=true;
       }
       if(lookingForUtilities.search("Cable")!=-1)
       {
           cable=true;
       }
       if(lookingForUtilities.search("Electricity")!=-1)
       {
           electricity=true;
       }
    }


    //Loop to Get amenities Dis is going to be a long one
    let healthClub=false;
    let laundry=false;
    let pool=false;
    let patio=false;
    let wheelChairAccess=false;
    let balcony=false;
    let dishwasher=false;
    let eatInKitchen=false;
    let firePlace=false;
    let hardWood=false;
    
    let washer=false;
    
    for(let i=0;i<classFn.length;i++){
        let lookingForAmenities=classFv[i].textContent

        if(lookingForAmenities.search("Health Club")!=-1)
        {
            healthClub=true;
        }
        if(lookingForAmenities.search("Laundry")!=-1)
        {
            laundry=true;
        }
        if(lookingForAmenities.search("Pool")!=-1)
        {
            pool=true;
        }
        if(lookingForAmenities.search("Patio")!=-1)
        {
            patio=true;
        }
        if(lookingForAmenities.search("Deck")!=-1)
        {
            patio=true;
        }
        if(lookingForAmenities.search("Wheelchair Access")!=-1)
        {
            wheelChairAccess=true;
        }
        if(lookingForAmenities.search("Balcony")!=-1)
        {
            balcony=true;
        }
        if(lookingForAmenities.search("Dishwasher")!=-1)
        {
            dishwasher=true;
        }
        if(lookingForAmenities.search("Eat In Kitchen")!=-1)
        {
            eatInKitchen=true;
        }
        if(lookingForAmenities.search("Fireplace")!=-1)
        {
            firePlace=true;
        }
        if(lookingForAmenities.search("Hardwood")!=-1)
        {
            hardWood=true;
        }
        if(lookingForAmenities.search("Washer")!=-1)
        {
            washer=true;
        }

    }
let price=firstPrice.slice(1)

let occurenceForPrice=nth_occurrence(price," ",1)

let aptPrice1=price.slice(0,occurenceForPrice)

let aptPrice2=aptPrice1.replace(",","")

let aptPriceToNumber=parseInt(aptPrice2)
let writeDescription="";
let getDescription=document.getElementsByClassName("description")
if(getDescription!=undefined){
     writeDescription=getDescription[0].textContent
}


let occurenceBedroom= nth_occurrence(gettingBedrooms,"(",1)
gettingBedrooms.slice(0,occurenceBedroom).trim()
let trimmingArea=nth_occurrence(area1,"(",1)
area1=area1.slice(0,trimmingArea-1)

//Formating address to show correctly

let occurenceAdress=nth_occurrence(StreetAddress,":",1)
occurenceAdress++
StreetAddress=StreetAddress.slice(occurenceAdress)
unitNumber=unitNumber.slice(1)
zipcode=zipcode.slice(1)

//Formatting aptType1
let occureForAptType=nth_occurrence(aptType1,"(",1)
aptType1=aptType1.slice(0,occureForAptType)

//The Object that we need to send but we can't
let sendingObject={
    street:StreetAddress,
    unit:unitNumber,
    zip:zipcode,
    area:area1,
    aparmentType:aptType1,
    bedroom:gettingBedrooms,
    bathroom:gettingBathrooms,
    pets:gettingPetsPolicy,
    availability:availabilityExp,
    apartmentPrice:aptPriceToNumber,
    description:writeDescription,
    gasUtility:gas,
    waterUtility:water,
    heatUtility:heat,
    internetUtility:internet,
    electricityUtility:electricity,
    cableUtility:cable,
    healthclubAmenities:healthClub,
    laundryAmenities:laundry,
    poolAmenities:pool,
    patioAmenities:patio,
    wheelchairamenities:wheelChairAccess,
    balconyamenities:balcony,
    dishwasheramenities:dishwasher,
    eatInKitchenAmenities:eatInKitchen,
    fireplaceAmenities:firePlace,
    hardWoodAmenities:hardWood,
    washerAmenities:washer,



}
