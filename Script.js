    let cardFinal = "";
    $.getJSON("Animales.json", function(responseJson) {

        poblarTable(responseJson);
    });

    function poblarTable(data) {

        console.log(data)


        let rowtable = "";

        for (let i = 0; i < data.length; i++) {

            rowtable += `<tr><td> ${data[i].id} </td><td> ${data[i].Tipo} </td><td>${data[i].Nombre}</td><td>${data[i].Observacion }</td><td>${data[i].Ubicacion}</td><td>${data[i].Rasgos}</td><td><img src='${ data[i].Imagen }' style='width: 90px;height: 110px;' alt= '${data[i].Tipo}' /></td></tr>`

        }
        $("#bodyTable").html(rowtable)


    }










    // console.log(data[0].Tipo);
    // let rowtable = "<tr><td>" + data[0].id + "</td><td>" + data[0].Tipo + "</td><td>Pascual</td><td>Esta mal</td><td>Se encuentra en robledo cerca a la quintana</td><td>Tiene el pelo cafe  , ademas tiene una patica mala</td><td>https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg</td></tr>";
    // $("#bodyTable").html(rowtable)