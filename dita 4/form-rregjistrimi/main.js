console.log('rregjistrimi loadohet');
window.onload = function () {
    const forma = document.getElementById('register-form');
 
    forma.addEventListener('submit', function(e) {
        e.preventDefault();
        // validojme pasword
        const pasword = document.getElementById('password').value;
        console.log(pasword);
        if(pasword.length < 6){
            document.getElementById('message').innerHTML = 
            "Passwordi duhet te jete te pakten 6 shifra";
            document.getElementById('message').style.color = 'red';
            return;
        }
        // Do shikojme nese mosha eshte mbi 18. 
        const age = document.getElementById('age').value;
        if(age >= 18) {
            // ketu eshte bere ruajtja e te dhenave
            document.getElementById('message').innerHTML = "Ju u rregjistruat me sukses!"
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').innerHTML = "Ju nuk lejoheni te rregjistroheni ne kete website!"
            document.getElementById('message').style.color = 'red';
        }
    });
}