$(document).ready(function(){
   
    //input click
    $(document).on('click','.row_data',function(event){
        event.preventDefault();

        $(this).focus();
        document.execCommand('selectAll',false,null);

    });


    //input focus out
    $(document).on('focusout','.row_data',function(event){
        event.preventDefault();

        let tbl_row = $(this).closest('tr');

        let tblArr = {};

        let firstQuarter = 0;
        let secondQuarter = 0;
        let avg = 0.0;

        tbl_row.find('.row_data').each(function(index,val){
            let col_name = $(this).attr('name');
            let col_val = $(this).val();
            tblArr[col_name] = parseInt(col_val);

            firstQuarter = parseInt(tblArr['firstQuarter']);
            secondQuarter = parseInt(tblArr['secondQuarter']);

            if(firstQuarter == 0 || secondQuarter == 0){
                return;
            }     
         
            avg = parseFloat((firstQuarter+secondQuarter)/2);
            if(avg <75 && avg != 0){
                $(this).filter(':not([name]), [name="remark"]').val("Failed")
            }
            else if(avg > 75){
                $(this).filter(':not([name]), [name="remark"]').val("Passed")
            }
            else{
                $(this).filter(':not([name]), [name="remark"]').val("?")
            }

            //if the value is integer/float
            // if(!isNaN(avg)){
            //     averageQ.value = avg;
            // }


            $(this).filter(':not([name]), [name="finalGrade"]').val(avg)
        });

      
    });

    $("input").keypress(function(evt){
        evt = evt ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    });

});




function onLimit100(val){
    if(Number(val.value) > 100){
        val.value = 100;
    }
    
}


// input checker > number only
