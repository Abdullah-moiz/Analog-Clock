const getSechand = document.querySelector('.sec-hand');
const getminHand = document.querySelector('.min-hand');
const getHourHand =  document.querySelector('.hour-hand');
const setDate = ()=>{
    const currentDate = new Date();//creating a date object
    const sec = currentDate.getSeconds();
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();
    const getSecInDegree = ((sec / 60 )*360)+90;
    const getminInDegree = ((min / 60 )*360)+90;
    const gethourInDegree = ((hour / 60 )*360)+90;
    getSechand.style.transform = `rotate(${getSecInDegree}deg)`;
    getminHand.style.transform = `rotate(${getminInDegree}deg)`;
    getHourHand.style.transform = `rotate(${gethourInDegree}deg)`;
    
        // console.log(sec)
}
setInterval(setDate,1000)