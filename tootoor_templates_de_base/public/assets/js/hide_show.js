$(document).ready(function(){
    $("#autre").on('change',function(){
      var selectedBalue = $("#autre").val();
      if (selectedBalue == "autre") 
      {
        $("#autre_libelle").slideDown(500);
      }
      else{
        $("#autre_libelle").slideUp(500);
      }
    }); 

    $("#partager").on('change',function(){
      var selectedBalue = $("#partager").val();
      if (selectedBalue == "share") 
      {
        $("#collaborateur").slideDown(500);
      }
      else{
        $("#collaborateur").slideUp(500);
      }
    });
    $("#mentor").on('change',function(){
      var selectedBalue = $("#mentor").val();
      if (selectedBalue == "mentor") 
      {
        $("#card_mentor").slideDown(500);

      }
      else{
        $("#card_mentor").slideUp(500);
      }
    }); 
    // if($('#credit-card').is(':checked')) 
    //   { 
    //     $("#paiement").slideDown(500);
    //   }
    //   else{
    //     $("#paiement").slideUp(500);
    //   }
    //   $('#credit-card').click(function(){
    //     if ($('#credit-card').is(':checked')) {
    //       $("#paiement").slideDown(500);
    //     }
    //     $("#paiement").slideUp(500);
    //   });

      // if($("#credit-card").attr("checked", true)){
      //   $("#paiement").slideDown(500);
      // }
    }); 