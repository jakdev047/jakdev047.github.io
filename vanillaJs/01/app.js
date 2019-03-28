// IIFE
(function (){
   // selecting
   let p1_times = document.querySelector('.p1_times');
   let p1_score = document.querySelector('.p1_score');

   let p2_times = document.querySelector('.p2_times');
   let p2_score = document.querySelector('.p2_score');

   let wScore = document.querySelector('.wScore');

   let refreash = document.querySelector('#refreash');
   let reset = document.querySelector('#reset');
   let p1_btn = document.querySelector('#p1_btn');
   let p2_btn = document.querySelector('#p2_btn');


   function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
   };

   function getRandomNumber(max) {
      return Math.floor((Math.random() * Math.floor(max)) + 1);
   }

   // initial value
   let targetScore = getRandomInt(2,10);
   let p1times = 0;
   let p2times = 0;

   p1_btn.setAttribute('disabled','disabled');
   p2_btn.setAttribute('disabled','disabled');

   function refreashFn(){
      wScore.textContent = targetScore;
      refreash.setAttribute('disabled','disabled');
      p1_btn.removeAttribute('disabled');
   }

   function p1_btnFn(){
      p1times++
      p1_times.textContent = p1times;

      p1TargetNumber = getRandomNumber(targetScore);

      p1_score.textContent = `and Dont\'t Match ${p1TargetNumber}`;

      if(targetScore === p1TargetNumber ) {
         p1_score.textContent = `and Exact Match ${p1TargetNumber}`;
         p1_btn.setAttribute('disabled','disabled');
         p2_btn.removeAttribute('disabled');
      }

   }

   function p2_btnFn(){

      p2times++;
      p2_times.textContent = p2times;

      p2TargetNumber = getRandomNumber(targetScore);

      p2_score.textContent = `and Dont\'t Match ${p2TargetNumber}`;

      if(targetScore === p2TargetNumber ) {

         p2_score.textContent = `and Exact Match ${p2TargetNumber}`;
         p2_btn.setAttribute('disabled','disabled');
      }

   }

   function resetFn(){

      p1times = 0;
      p2times = 0;

      targetScore = getRandomInt(2,10);

      p1_times.textContent = 0;
      p2_times.textContent = 0;

      p1_score.textContent = '';
      p2_score.textContent = '';
      wScore.textContent = 0;
      

      refreash.removeAttribute('disabled');
      p1_btn.setAttribute('disabled','disabled');
      p2_btn.setAttribute('disabled','disabled');
   }

   // refreash btn
   refreash.addEventListener('click',refreashFn);

   // player One Btn
   p1_btn.addEventListener('click',p1_btnFn);

   // player Two Btn
   p2_btn.addEventListener('click',p2_btnFn);

   // reset btn
   reset.addEventListener('click',resetFn);

})();