let garage = {

    moto : [
        {brand: "Honda" , model: "Forza 350"},
        {brand: "Piaggio", model: "Vespa"},
        {brand: "Honda", model: "X-ADV 750" },
    ],

    automobili : [
        {brand: "Audi", model: "A4"},
        {brand: "Audi", model: "A5"},
        {brand: "Fiat", model: "Panda"},
    ],
    
    
// METODO showVettura
    showVettura : function(vettura, marca) {

        // se è moto
            if(vettura == 'moto'){

                // variabile d'appoggio
                let result = false;

                // PER OGNI MOTO SE ABBIAMO LA MARCA
                this.moto.forEach((motorazzo)=>{
                  
                    if (motorazzo.brand.toLowerCase() == marca.toLowerCase()){

                        result = true;
                    } 
                
                });

                // SE ABBIAMO LA MARCA FILTRA, MA FUORI DAL FOREACH altrimenti stampa per ogni elemento
                if(result){
                      let filtered = this.moto.filter( (motocicletta) => 
                        motocicletta.brand.toLowerCase() == marca.toLowerCase());

                        console.log(`Per questo brand di motori, abbiamo i seguenti modelli:`);
                        
                        filtered.forEach ((motorino) => 
                            console.log(`- ${motorino.model}`)
                        );
            
                // SE NON ABBIAMO LA MARCA 
                } else {
                         
                    console.log(`Mi dispiace, non c'è nessun modello per la moto selezionata: ${marca.toLowerCase()};`);
                

                }

        // altrimenti se è auto
        } else {

               // variabile d'appoggio
               let result = false;

                // PER OGNI AUTO SE ABBIAMO LA MARCA
                this.automobili.forEach((automobilazza)=>{
             
                    if (automobilazza.brand.toLowerCase() == marca.toLowerCase()){

                        result = true;
                    } 

                });

                // SE ABBIAMO LA MARCA FILTRA, MA FUORI DAL FOREACH altrimenti stampa per ogni elemento
                if(result){

                    let filtered = this.automobili.filter( (autovettura) => 
                      autovettura.brand.toLowerCase() == marca.toLowerCase());

                      console.log(`Per questo brand di automobili, abbiamo i seguenti modelli:`);
                      
                      filtered.forEach ((autina) => 
                          console.log(`- ${autina.model}`)
                      );
          
                // SE NON ABBIAMO LA MARCA 
              } else {
                       
                  console.log(`Mi dispiace, non c'è nessun modello per la macchina selezionata: ${marca.toLowerCase()};`);

              }

        }
        // FINE ELSE COMPLETO
    }
    // fine metodo showvettura 
}
// FINE OGGETTO GARAGE


let mezzo = prompt('Che mezzo stai cercando nel Garage?\n1) moto;\n2) auto;')
let brand = prompt('Che marca di vettura stai ricercando?');

garage.showVettura(mezzo.toLowerCase(), brand.toLowerCase());