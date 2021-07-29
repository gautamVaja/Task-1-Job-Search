$(document).ready(function () {
    $('#sec').hide();
});
$('#fe').click(function (e) {
    e.preventDefault();
    $('#prev').hide();
    $("#sec").show();
    var gen = $("#liGen").val();
    var ag = $("#ageg").val();
    console.log("AGE AND GEN");
    console.log(ag, gen);
    for (let i = 0; i < 96; i++) {
        $.get("https://api.randomuser.me/",
            function (data) {
                // console.log(data);
                // console.log(i);
                // console.log(data.results[0].gender);
                // console.log(data.results[0].cell);

                // console.log(data.results['0'].cell);
                // both above are working
                // if (data.results[0].gender == gen) {
                //     console.log('HERE IT IS');
                //     console.log(data);
                //     console.log(data.results[0].gender);
                //     console.log(data.results[0].cell);
                //     i++;
                // }

                let imurl = data.results[0].picture.medium;
                let name = "";
                // console.log(data.results[0].name);
                for (const k in data.results[0].name) {
                    if (Object.hasOwnProperty.call(data.results[0].name, k)) {
                        const element = data.results[0].name[k];
                        name += element + " ";
                    }
                }
                console.log(name);
                let age = data.results[0].dob.age;
                let country = data.results[0].nat;
                let phone = data.results[0].phone;
                let email = data.results[0].email;
                console.log(imurl);
                console.log(age, country, phone, email);



                //adding to html
                // var ageNat = age + "     " + country;
                //  
                if (data.results[0].gender == gen && (age > ag && age <= parseInt(ag) + 10)) {
                    var hcode = '<div class="item">  <img src="' + imurl + '" alt="phoho"> <p class="name">' + name + '</p> <p class="ageN">' + age + " " + country + '</p>   <p class="phone">' + phone + '</p>   <p class="email">' + email + '</p>   </div>';
                    $('#data').html($('#data').html() + hcode);
                }
            }
        );
    }
});