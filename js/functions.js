function cambiarcontenedor(x){
    
    
    switch (x) {
        case 1:
            //te describes como alguien servicial
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
              $.ajax({
                type: 'POST',
                url: 'php/camellosession.php',
                data: data, // access in body
              }).done(function (msg) {
              }).fail(function (msg) {
               console.log(msg);
                
              }).always(function (msg) {
                
              });
              $('#contenedor'+x).toggle('slow');
              $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
              $('#contenedor'+x).toggle('slow');
              $('#contenedor'+a).toggle('slow');
            }
          break;
        case 2:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {

                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
            break;
            
        case 3:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
              
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
            break;
        case 4:
            var a=x+1;
            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
              
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 5:
            var a=x+1;
            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 6:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 7:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 8:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });

                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 9:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 10:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 11:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 12:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 13:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 14:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 15:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 16:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
            $('#contenedor'+a).toggle('slow');
                
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 17:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
             
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 18:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
            
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 19:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
            
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 20:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
                
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 21:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
            
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 22:
            var a=x+2;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
                
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        
        case 24:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
            
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        
        case 25:
            var a=x+4;

                if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/leonsession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
            
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
       
        case 29:
            var a=x+2;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
                
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
       
        case 31:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 3};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
            
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        case 32:
            var a=x+1;

            if($('#c'+x+'opcion1').is(':checked')){
                data = {puntos: 4};
                $.ajax({
                  type: 'POST',
                  url: 'php/ninosession.php',
                  data: data, // access in body
                }).done(function (msg) {
                 
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
                
            }else if($('#c'+x+'opcion2').is(':checked')){
                
                data1 = {puntos: 1};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
                $('#contenedor'+x).toggle('slow');
                $('#contenedor'+a).toggle('slow');
            }
        break;
        

        default:
         
      }



}

function fin(){
    var camello;
    var leon;
    var nino;
    var final;
    var recomendacion;
    $('#contenedor32').toggle('slow');
    $('#pbar').css('display','block');
    
    var inicio=0;
		var progreso=setInterval(function(){
			inicio+=4;

            $('#pbar').val(inicio);
			if(parseInt(inicio)>=100){
				clearInterval(progreso);
                $('#pbar').css('display','none');
                $('#finalizacion').toggle('slow');
                data1 = {puntos: 0};
                $.ajax({
                  type: 'POST',
                  url: 'php/camellosession.php',
                  data: data1, // access in body
                }).done(function (msg) {
                  camello=msg;
                  data2 = {puntos: 0};
                  $.ajax({
                    type: 'POST',
                    url: 'php/leonsession.php',
                    data: data2, // access in body
                  }).done(function (msg) {
                    leon=msg;
                    data = {puntos: 0};
                    $.ajax({
                      type: 'POST',
                      url: 'php/ninosession.php',
                      data: data, // access in body
                    }).done(function (msg) {
                      nino=msg;
                      var texto;
                      let lista=[leon,camello,nino];
                      var mayor = lista[0];
                      for(i=1;i<lista.length;i++){
                          if(lista[i] > mayor)
                              mayor=lista[i];
                      }
                      if(nino==mayor){
                        texto='Niño';
                      }else if(camello==mayor){
                        texto='Camello';
                      }else{
                        texto='León';
                      }
                        //recomendacion='Felicitaciones! eres clasificado por Niezche como un super-humano. ';
                       // $('#recomendacion').html(recomendacion);
                     
                      $('#resultado').html('Eres: '+texto);
                   

                    }).fail(function (msg) {
                     console.log(msg);
                      
                    }).always(function (msg) {
                      
                    });
                  }).fail(function (msg) {
                   console.log(msg);
                    
                  }).always(function (msg) {
                    
                  });
                }).fail(function (msg) {
                 console.log(msg);
                  
                }).always(function (msg) {
                  
                });
               
               
			}
		},100);
}
function mayor(lista){
  var mayor = lista[0];
for(i=1;i<lista.length;i++){
    if(lista[i] > mayor)
        mayor=lista[i];
}
return mayor;
}
function guardar(){

    var nombre = document.getElementById('nombre').value;
    data = {nombre: nombre};
  $.ajax({
    type: 'POST',
    url: 'php/usuariosession.php',
    data: data, // access in body
  }).done(function (msg) {
    if(msg==true){
    document.getElementById('nombre').value='';
    document.getElementById('error').style.display='none';

        setTimeout(function() {
            
            location.href='inicio.html'
        },2000);
    document.getElementById('loader').style.visibility='visible';
    //muestro el loader
    }else{
        document.getElementById('nombre').value='';
        document.getElementById('error').style.display='block';
        document.getElementById('error').innerText='Ha ocurrido un error.';
        //dio error
    }
  }).fail(function (msg) {
   console.log(msg);
    
  }).always(function (msg) {
    
  });
}