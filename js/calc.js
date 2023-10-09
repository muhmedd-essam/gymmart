$('#calorie-calculator').submit(function(e){
    e.preventDefault();
    calcDailyCals();
  });
  
  $('#macro-calculator').submit(function(e){
    e.preventDefault();
    calcCalsFromMacros();
  });
  
  $('button[type="reset"]').click(function(){
    $('#results').fadeOut('fast',function(){
      $(this).html('');
    });
  });
  
  function calcCalsFromMacros(){
    let carbs = parseInt($('#carbs').val()) * 4;
    let protein = parseInt($('#protein').val()) * 4;
    let fat = parseInt($('#fat').val()) * 9;
  
    let result = carbs+protein+fat;
    
    $('#m-results').fadeOut('fast',function(){
      $(this).html('<h3 style=" color: #fffdfd;">Estimated Daily Calories: ' + result + '</h3>').fadeIn('fast');
    });
    
  }
  
  
  function calcDailyCals(){
    let age = parseInt($('#age').val());
    let sex = $('input[name="sex"]:checked').val();
    let weight = parseFloat($('#weight').val()) * 0.453592;
    let height = parseFloat($("#inches").val()) * 2.54;
    let activity = parseFloat($('#activity_level').val());
    let goal = parseInt($('#gain_loss_amount').val());
    
    let result;
    
      if (sex === 'male') {
      result = (66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)) * activity;
    } else {
      result = (655.1 + (9.247 * weight) + (1.850 * height) - (4.676 * age)) * activity;
    }
    
      result = Math.round(result + goal);
    
    calcDailyMacros(result);
    
    $('#results').fadeOut('fast',function(){
      $(this).html('<h3 style=" color: #fffdfd;" >Estimated Daily Calories: ' + result + '</h3>').fadeIn('fast');
    });    
    
    function calcDailyMacros(result){
      let carbs = (result * .4) /4; 
      let protein = (result * .3) /4; 
      let fat = (result * .3) / 9;
      
      $('#carbs').val(Math.round(carbs));
      $('#protein').val(Math.round(protein));
      $('#fat').val(Math.round(fat));
    }
    
    
  }
  
  