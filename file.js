var firstnumber="";
var firstvalue=1;
var secondnumber="";
var operator;
var total;
var counter=1;
function getnumber(values)
{   

        if(values!="divide" && values!="multiply" && values!="minus" && values!="plus" &&firstvalue==1)
        {
        firstnumber = firstnumber.concat(values);
        document.getElementById("val1").value = firstnumber;
        }

        if(values=="divide" && firstvalue==1)
        {  
            //secondnumber = secondnumber.concat(values);
            document.getElementById("val1").value = " ";
            firstvalue=2;
            operator=values;
        }
        if(firstvalue==2)
        {
            if(operator=="divide" && counter==1)
            {  
                values=" "
                secondnumber = secondnumber.concat(values);
                document.getElementById("val1").value = secondnumber;
                counter=2;
            }
            if(operator=="divide" && counter==2)
            {  
                
                secondnumber = secondnumber.concat(values);
                document.getElementById("val1").value = secondnumber;
                counter=2;
            }
            if(values=="equal" && operator=="divide")
            {
                total=parseInt(firstnumber)/parseInt(secondnumber);
                document.getElementById("val1").value = total;
                firstnumber=total.toString();
                secondnumber=" ";
                firstvalue=1;
                counter=1;
            }
            
        }

        if(values=="multiply" && firstvalue==1)
        {  
            //secondnumber = secondnumber.concat(values);
            document.getElementById("val1").value = " ";
            firstvalue=2;
            operator=values;
        }
        
        if(firstvalue==2)
        {
            if(operator=="multiply" && counter==1)
            {  
                values=" "
                secondnumber = secondnumber.concat(values);
                document.getElementById("val1").value = secondnumber;
                counter=2;
            }
            if(operator=="multiply" && counter==2)
            {  
                
                secondnumber = secondnumber.concat(values);
                document.getElementById("val1").value = secondnumber;
                counter=2;
            }
            if(values=="equal" && operator=="multiply")
            {
                total=parseInt(firstnumber)*parseInt(secondnumber);
                document.getElementById("val1").value = total;
                firstnumber=total.toString();
                secondnumber=" ";
                firstvalue=1;
                counter=1;
            }
            
        }
        if(values=="minus" && firstvalue==1)
        {  
            //secondnumber = secondnumber.concat(values);
            document.getElementById("val1").value = " ";
            firstvalue=2;
            operator=values;
        }
        
        if(firstvalue==2)
        {
            if(operator=="minus" && counter==1)
            {  
                values=" "
                secondnumber = secondnumber.concat(values);
                document.getElementById("val1").value = secondnumber;
                counter=2;
            }
            if(operator=="minus" && counter==2)
            {  
                
                secondnumber = secondnumber.concat(values);
                document.getElementById("val1").value = secondnumber;
                counter=2;
            }
            if(values=="equal" && operator=="minus")
            {
                total=parseInt(firstnumber)-parseInt(secondnumber);
                document.getElementById("val1").value = total;
                firstnumber=total.toString();
                secondnumber=" ";
                firstvalue=1;
                counter=1;
            }
            
        }

        if(values=="plus" && firstvalue==1)
        {  
            //secondnumber = secondnumber.concat(values);
            document.getElementById("val1").value = " ";
            firstvalue=2;
            operator=values;
        }
        
        if(firstvalue==2)
        {
            if(operator=="plus" && counter==1)
            {  
                values=" "
                secondnumber = secondnumber.concat(values);
                document.getElementById("val1").value = secondnumber;
                counter=2;
            }
            if(operator=="plus" && counter==2)
            {  
                
                secondnumber = secondnumber.concat(values);
                document.getElementById("val1").value = secondnumber;
                counter=2;
            }
            if(values=="equal" && operator=="plus")
            {
                total=parseInt(firstnumber)+parseInt(secondnumber);
                document.getElementById("val1").value = total;
                firstnumber=total.toString();
                secondnumber=" ";
                firstvalue=1;
                counter=1;
            }
            
        }


    
}
