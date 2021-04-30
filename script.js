var client_count = 0;
var rate_count = 0;
var monnaie = 0;
var service_en_cours = false;

function alea(min,max){

    min = Math.ceil(min);
    max = Math.floor(max);
    brouzoufs = Math.floor(Math.random() * (max - min)) + min;
    cents = Math.floor(Math.random() * (10 - 0)) / 10.0;
    return brouzoufs+cents;

}

$(document).ready(function(){

    $("#prochainClient").click(function(){
        alert("Bonjour!");

        service_en_cours = true;

        console.log()
        client_count++;
        $("#client_num").html(client_count);
        $("#rate_num").html(rate_count);

        var rand_num = alea(0.1,10);

        $("#total_num").html(rand_num.toFixed(2));

        var paye_num = Math.ceil(rand_num / 10) * 10;

        $("#paye_num").html(paye_num);

        $("#stat").html("Non traité").css('color','black');
        
        $("#prochainClient").html("Service en cours")
        .prop('disabled', true).css('background', 'grey')
        .css('font-style', 'italic').css('color', 'white');
    });

    $("#tirroir").click(function(){
        if($('#coins:visible').length == 0 && service_en_cours == true)
        {
            $("#coins").show();
            $("#tirroir").html("Fermer le tiroir caisse");

            monnaie = 0;
            $("#monnaie").html(monnaie);
        }
            
        else
        {
            $("#coins").hide(); 
            $("#tirroir").html("Ouvrir le tiroir caisse");
        }
            
    });

    $("#vingt").click(function(){
        monnaie += 20;
        $("#monnaie").html(monnaie.toFixed(2));
    });
    $("#dix").click(function(){
        monnaie += 10;
        $("#monnaie").html(monnaie.toFixed(2));
    });
    $("#cinq").click(function(){
        monnaie += 5;
        $("#monnaie").html(monnaie.toFixed(2));
    });
    $("#deux").click(function(){
        monnaie += 2;
        $("#monnaie").html(monnaie.toFixed(2));
    });
    $("#un").click(function(){
        monnaie += 1;
        $("#monnaie").html(monnaie.toFixed(2));
    });
    $("#cinquante").click(function(){
        monnaie += 0.50;
        $("#monnaie").html(monnaie.toFixed(2));
    });
    $("#vingt_vingt").click(function(){
        monnaie += 0.20;
        $("#monnaie").html(monnaie.toFixed(2));
    });
    $("#dix_dix").click(function(){
        monnaie += 0.1;
        
        $("#monnaie").html(monnaie.toFixed(2));
    });


    $("#rendre").click(function(){
        var pay = $("#paye_num").text();
        pay = Number.parseFloat(pay);

        var tot = $("#total_num").text();
        tot = Number.parseFloat(tot);

        let diff = pay - tot;

        if(monnaie.toFixed(2) > diff)
        {
            service_en_cours = false;
            rate_count++;
            $("#rate_num").html(rate_count);

            $("#stat").html("Rendu plus que nécessaire !")
            .css('color', 'red');
        }

        else if(monnaie.toFixed(2) < diff)
        {
            service_en_cours = false;
            rate_count++;
            $("#rate_num").html(rate_count);

            $("#stat").html("Il manque de la monnaie !")
            .css('color', 'red');
        }

        else
        {
            service_en_cours = false;
            $("#stat").html("Le compte est bon")
            .css('color', 'green');
        }
        
        $("#prochainClient").html("Servir le prochain client")
            .prop('disabled', false).css('background', 'rgb(152,251,152)')
            .css('font-style', 'normal').css('color', 'black');

        $("#coins").hide();
        $("#tirroir").html("Ouvrir le tiroir caisse");
    });


    $("#prochainClient").hover(function(){
        $(this).css("background-color", 'white');
        }, function(){
        $(this).css("background-color", 'rgb(152,251,152)');
    });


});
