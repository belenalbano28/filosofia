<?php session_start(); ?>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/nieztche.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="js/functions.js"> </script>
    </head>
           <body>
            <div class="titulo">Test de personalidad</div>
            <div class="sub-titulo">Responda las siguientes preguntas <br> para obtener el resultado.</div>
            


                <div class="box contenedor" id="contenedor1">
                    <div class="texto">
                        ¿te describirías como alguien servicial?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c1opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c1opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button class="siguiente" onclick="cambiarcontenedor(1)">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor2">
                    <div class="texto">
                        ¿te describirías como alguien valiente?
                    </div>
                    <div class="opciones">
                        <div class="opciones">
                            <div>
                                <input type="radio" id="c2opcion1" name="drone" value="huey"
                                       checked>
                                <label for="huey">si</label>
                              </div>
                          
                              <div>
                                <input type="radio" id="c2opcion2" name="drone" value="dewey">
                                <label for="dewey">no</label>
                              </div>
                          
                        </div>
                    </div>
                <div class="wrap"><button class="siguiente" onclick="cambiarcontenedor(2)">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor3">
                    <div class="texto">
                        ¿consideras que tienes confinza en ti mismo?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c3opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c3opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(3)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor4">
                    <div class="texto">
                        ¿te consideras una persona obediente?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c4opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c4opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(4)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor5">
                    <div class="texto">
                        ¿te consideras una persona sumisa?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c5opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c5opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(5)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor6">
                    <div class="texto">
                        ¿consideras que tienes buena autoestima?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c6opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c6opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(6)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor7">
                    <div class="texto">
                        ¿piensas que te valoras a ti mismo?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c7opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c7opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(7)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor8">
                    <div class="texto">
                        ¿te consideras esclavo de tu moral?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c8opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c8opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(8)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor9">
                    <div class="texto">
                        ¿sostienes pensamientos que no surgieron de ti?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c9opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c9opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(9)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor10">
                    <div class="texto">
                        ¿cuestionas los pensamientos que se te imponen?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c10opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c10opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(10)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor11">
                    <div class="texto">
                        ¿vives la vida de forma superficial y si cuestionarte demasiado?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c11opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c11opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(11)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor12">
                    <div class="texto">
                        ¿piensas que te dedicas a trabajar sin preguntarte por qué?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c12opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c12opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(12)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor13">
                    <div class="texto">
                        ¿sientes que algunas situaciones/creencias te impiden avanzar?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c13opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c13opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(13)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor14">
                    <div class="texto">
                        ¿sientes que has alcanzado la libertad?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c14opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c14opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(14)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor15">
                    <div class="texto">
                        ¿ves viable para tu vida actuar de otra forma?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c15opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c15opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(15)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor16">
                    <div class="texto">
                        ¿sientes inquietud por averiguar tu lugar en el mundo?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c16opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c16opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(16)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor17">
                    <div class="texto">
                        ¿te cuestionas qué es bueno y qué es malo?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c17opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c17opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(17)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor18">
                    <div class="texto">
                        ¿te consideras arrogante?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c18opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c18opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(18)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor19">
                    <div class="texto">
                        ¿rechazas otras maneras de ver la vida diferentes a la tuya?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c19opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c19opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(19)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor20">
                    <div class="texto">
                        ¿te sueles aislar de los demas?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c20opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c20opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(20)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor21">
                    <div class="texto">
                        ¿sueles entrar en conflicto con los demas?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c21opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c21opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(21)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor22">
                    <div class="texto">
                        ¿te coonsideras incorformista?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c22opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c22opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(22)" class="siguiente">Siguiente</button></div>
                    
                </div>
              
                <div class="box contenedor" id="contenedor24">
                    <div class="texto">
                        sientes que rechazar esta moral:
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c24opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">te libera</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c24opcion2" name="drone" value="dewey">
                            <label for="dewey">te ata</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(24)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor25">
                    <div class="texto">
                        pretendes alcanzar la libertad haciendo 'lo que quieres' y no 'lo que debes'
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c25opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c25opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                
                <div class="wrap"><button onclick="cambiarcontenedor(25)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor27">
                    <div class="texto">
                        ¿sientes que has alcanzado la libertad?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c27opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c27opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                
                <div class="wrap"><button onclick="cambiarcontenedor(27)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor29">
                    <div class="texto">
                        ¿te describirías a ti mismo como una persona autonoma?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c29opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c29opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(29)" class="siguiente">Siguiente</button></div>
                    
                </div>
               
                <div class="box contenedor" id="contenedor31">
                    <div class="texto">
                        ¿piensas que creas tus propios valores?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c31opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c31opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="cambiarcontenedor(31)" class="siguiente">Siguiente</button></div>
                    
                </div>
                <div class="box contenedor" id="contenedor32">
                    <div class="texto">
                        ¿te consideras una persona libre de prejuicios?
                    </div>
                    <div class="opciones">
                        <div>
                            <input type="radio" id="c32opcion1" name="drone" value="huey"
                                   checked>
                            <label for="huey">si</label>
                          </div>
                      
                          <div>
                            <input type="radio" id="c32opcion2" name="drone" value="dewey">
                            <label for="dewey">no</label>
                          </div>
                      
                    </div>
                <div class="wrap"><button onclick="fin()" class="siguiente">Finalizar</button></div>
                    
                </div>

                <div class="barra">
                    <progress value="0" max="100" id="pbar" style="display: none;"></progress>
                </div>

                <div class="finalizacion" id="finalizacion">
                    <div class="texto1" id="texto"><?php echo $_SESSION['nombre']; ?></div>
                    <div class="texto2" id="resultado"></div>
                    <div class="wrap"><button onclick="location.href='php/logout.php'" class="siguiente2">Finalizar</button></div>
                </div>
           </body>
</html>