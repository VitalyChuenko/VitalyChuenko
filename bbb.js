function Calculator () {
    this.calculate = function(str) {
      let STR1 ;
      let a = 0;
      let k = 1;
  if (str.indexOf("+") != -1) STR1 = str.slice(0 , str.indexOf("+"));
  if (str.indexOf("-") != -1) STR1 = str.slice(0 , str.indexOf("-"));
  if (str.indexOf("*") != -1) STR1 = str.slice(0 , str.indexOf("*"));
  if (str.indexOf("/") != -1) STR1 = str.slice(0 , str.indexOf("/"));
  if (str.indexOf("**") != -1) STR1 = str.slice(0 , str.indexOf("**"));
       for (i = STR1.length-1;  i > -1 ;  --i ) {  
                if (STR1[i]!=" ") {a+= (+STR1[i])*k ; k*=10};
              }
      let STR2 ;
      let b = 0;
      let j = 1;
  if (str.indexOf("+") != -1) STR2 = str.slice( str.indexOf("+") +1);
  if (str.indexOf("-") != -1) STR2 = str.slice( str.indexOf("-") +1);
  if (str.indexOf("*") != -1) STR2 = str.slice( str.indexOf("*") +1);
  if (str.indexOf("/") != -1) STR2 = str.slice( str.indexOf("/") +1);
  if (str.indexOf("**") != -1) STR2 = str.slice( str.indexOf("**") +2);
       for (i = STR2.length-1;  i > -1 ;  --i ) {  
                if (STR2[i]!=" ") {b+= (+STR2[i])*j ; j*=10};
              }
  
       return (str.indexOf("+") != -1) ? a + b : 
              (str.indexOf("-") != -1) ? a - b :
              (str.indexOf("**") != -1) ? a ** b :
              (str.indexOf("/") != -1) ? a / b : a * b ;
    }
  }
  let calc = new Calculator;
  alert( calc.calculate("2 /3") );
  