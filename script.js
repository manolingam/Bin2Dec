const getResult = () => {

    let bin = document.getElementById('input').value;
    let inputCheck = true;
    let decimal = 0;

    if(!bin.length) {

        alert('You got to input there buddy :)');
        inputCheck = false;

    } else {
    
        for(let i = bin.length-1; i >= 0; i-- ) {

            if(bin[i] !== '1' && bin[i] !== '0') {

                alert("Enter only 1's and 0's.");
                inputCheck = false;
                document.getElementById('input').value = '';
                break;

            } else {

                decimal += parseInt(bin[i]) * Math.pow(2, bin.length-(i+1));

            }
        }

        if(inputCheck) {

            document.getElementById('result').innerText = decimal;
            document.getElementById('input').value = '';
            
        }
    }
    
}