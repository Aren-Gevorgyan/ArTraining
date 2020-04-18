//newcomer
$(document).ready(function(){

  let item_array_newcomer = $(".content_item_newcomer");
  let information = $("p");
  let indexNewcomer = 0;

  $("#next").click(function(){
    if (indexNewcomer == item_array_newcomer.length -1){
       return;
    }
    information.animate({opacity: "0"}, "slow");
    item_array_newcomer.eq(indexNewcomer).hide(2000);
    item_array_newcomer.eq(indexNewcomer + 1).show(2000);;
    information.animate({opacity: "1"}, "slow");
    return indexNewcomer++;
  });

  $("#back").click(function(){
    if (indexNewcomer == 0){
       return;
    }
    information.animate({opacity: "0"}, "slow");
    item_array_newcomer.eq(indexNewcomer).hide(2000);
    item_array_newcomer.eq(indexNewcomer - 1).show(2000);
    information.animate({opacity: "1"}, "slow");
    return indexNewcomer--;
  });
//middle
  let item_array_middle = $(".content_item_middle");
  let indexMiddle = 0;

    $("#next_two").click(function(){
    if (indexMiddle == item_array_middle.length -1){
       return;
    }
    information.animate({opacity: "0"}, "slow");
    item_array_middle.eq(indexMiddle).hide(2000);
    item_array_middle.eq(indexMiddle + 1).show(2000);;
    information.animate({opacity: "1"}, "slow");
    return indexMiddle++;
  });

  $("#two_back").click(function(){
    if (indexMiddle == 0){
       return;
    }
    information.animate({opacity: "0"}, "slow");
    item_array_middle.eq(indexMiddle).hide(2000);
    item_array_middle.eq(indexMiddle - 1).show(2000);
    information.animate({opacity: "1"}, "slow");
    return indexMiddle--;
  });


//high
  let item_array_high = $(".content_item_high");
  let indexHigh = 0;

    $("#next_three").click(function(){
    if (indexHigh == item_array_high.length -1){
       return;
    }
    information.animate({opacity: "0"}, "slow");
    item_array_high.eq(indexHigh).hide(2000);
    item_array_high.eq(indexHigh + 1).show(2000);;
    information.animate({opacity: "1"}, "slow");
    return indexHigh++;
  });

  $("#back_three").click(function(){
    if (indexHigh == 0){
       return;
    }
    information.animate({opacity: "0"}, "slow");
    item_array_high.eq(indexHigh).hide(2000);
    item_array_high.eq(indexHigh - 1).show(2000);
    information.animate({opacity: "1"}, "slow");
    return indexHigh--;
  });

});