var i = 0;
					function brackets(){
							if(i == 0){
								calculator.display.value += '(';
								i = 1;	
							}
							else if(i == 1){
								calculator.display.value += ')';
								i = 0;
							}
					}
					