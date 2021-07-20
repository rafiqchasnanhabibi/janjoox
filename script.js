$("#tombol-cari").on("click", function () {
  $("#list-film").html("");
  $.ajax({
    url: "http://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "aa14c69b",
      s: $("#search-film").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let films = result.Search;

        $.each(films, function (i, data) {
          $("#list-film").append(
            `
          <div class="col">
          <div class="card shadow" id="filme">
             <img src="` +
              data.Poster +
              `" class="card-img-top mx-auto mt-2" alt="...">
              <div class="card-body">
               <h5 class="card-title">` +
              data.Title +
              `</h5>
              <h6 class="card-subtitle mb-2 text-muted">` +
              data.Year +
              `</h6>
           </div>
          </div>
          `
          );
        });

        $("#search-film").val("");
      } else {
        $("#list-film").html(
          `
        <div class="col">
        <h1 class="text-center">` +
            result.Error +
            `</h1>
        </div>`
        );
      }
    },
  });
});

$("#tombol-golet").on("click", function () {
  $("#list-kisah").html("");
  $.ajax({
    url: "https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi",
    type: "get",
    dataType: "json",
    data: {
      q : $("#search-kisah").val(),
    },
    success: function (result) {
      
      if (result.message == "ok") {
        let dataNabi = result.nabi;

        $.each(dataNabi, function (i, data) {
          $("#list-kisah").html(
            `
            <div class="card text-center m-2">
            <div class="card-header">
              Kisah 25 Nabi dan Rasul
            </div>
            <div class="card-body">
              <h5 class="card-title">`+ dataNabi.nama +`</h5>
              <p class="text-start" id="kisah">Nama: `+ dataNabi.nama +`</p>
              <p class="text-start" id="kisah">Umur: `+ dataNabi.umur +` tahun</p>
              <p class="text-start" id="kisah">Tempat: `+ dataNabi.tempat +`</p>
              <p class="text-center" id="kisah">`+ dataNabi.kisah +`</p>
            </div>
            <div class="card-footer text-muted kisah">
              Wallohu A'lamu Bi Ash Showab - Semoga Bermanfaat
            </div>
          </div>
          `
          );
        });
      

        $("#search-kisah").val("");
      } else {
        $("#list-kisah").html(
          `
        <div class="col">
        <h1 class="text-center">"Maaf kisah tidak ditemukan, Pastikan Anda memasukan Pencarian yang benar..  </h1>
        </div>`
        );
      }
    },
  });
});

$.ajax({
  type: "GET",
  url: "http://apicovid19indonesia-v2.vercel.app/api/indonesia",
  data: "data",
  dataType: "json",
  success: function (result) {
      let dataSembuh = result.sembuh.toLocaleString('de');
      let dataDirawat = result.dirawat.toLocaleString('de');
      let dataPositif = result.positif.toLocaleString('de');
      let dataMeninggal = result.meninggal.toLocaleString('de');
      let tanggal = result.lastUpdate.slice(0,10);
          $('#tanggalUpdate').html(`
          <h4>Terakhir di-update: `+ tanggal +` </h4>
          `)
           $('#data-list').html(`
              
              <div class="card text-white bg-success" >
                  <div class="card-header text-center h4">Sudah Sembuh</div>
                  <div class="card-body">
                      <h3 class="card-title">`+ dataSembuh +` Orang</h3>
                      <p class="card-text"></p>
                  </div>
              </div>
              </div>
              
              <div class="card text-white bg-info" >
                  <div class="card-header text-center h4 ">Masih Dirawat</div>
                  <div class="card-body">
                      <h3 class="card-title">`+ dataDirawat +` Pasien</h3>
                      <p class="card-text"></p>
                  </div>
              </div>
              </div>
              
              <div class="card text-white bg-danger" >
                  <div class="card-header text-center h4 ">Terkonfirmasi Positif</div>
                  <div class="card-body">
                      <h3 class="card-title">`+ dataPositif +` Orang</h3>
                      <p class="card-text"></p>
                  </div>
              </div>
              </div>
              
              <div class="card text-white bg-secondary" >
                  <div class="card-header text-center h4 ">Wafat</div>
                  <div class="card-body">
                      <h3 class="card-title">`+ dataMeninggal +` Orang</h3>
                      <p class="card-text"></p>
                  </div>
              </div>
              </div>
           `);
  }
});

$("#info").on("click", function(){
  $.ajax({
      type: "GET",
      url: "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi",
      data: "",
      dataType: "json",
      success: function (result) {
          $.each(result, function (indexInArray, data) { 
               $('#dataProvinsi').append(`
               <div class="card mb-2">
                  <div class="card-header">
                  `+ data.provinsi +`
                  </div>
                  <div class="card-body">
                      <blockquote class="blockquote mb-0">
                      <p>Kasus = `+ data.kasus.toLocaleString('de') +` Kasus</p>
                      <p>Dirawat = `+ data.dirawat.toLocaleString('de') +` Pasien</p>
                      <p>Sembuh = `+ data.sembuh.toLocaleString('de') +` Orang</p>
                      <p>Meninggal = `+ data.meninggal.toLocaleString('de') +` Orang</p><br>
                      <footer class="blockquote-footer p-1">Tetap Patuhi <cite title="Source Title ">Protokol Kesehatan</cite></footer>
                      </blockquote>
                  </div>
               </div>
               `);
          });

      }

  });
});

$.ajax({
  type: "GET",
  url: "http://apicovid19indonesia-v2.vercel.app/api/indonesia",
  data: "data",
  dataType: "json",
  success: function (result) {
      let dataSembuh = result.sembuh.toLocaleString('de');
      let dataDirawat = result.dirawat.toLocaleString('de');
      let dataPositif = result.positif.toLocaleString('de');
      let dataMeninggal = result.meninggal.toLocaleString('de');
      let tanggal = result.lastUpdate.slice(0,10);
          $('#tanggalUpdate').html(`
          <h4>Terakhir di-update: `+ tanggal +` </h4>
          `)
           $('#sembuh').html(`
              
              <div class="card bg-header" >
                  <div class="card-header text-center h6">Sudah Sembuh</div>
                  <div class="card-body">
                      <h3 class="card-title">`+ dataSembuh +` Orang</h3>
                      <p class="card-text"></p>
                  </div>
              </div>
              </div>
            `)
            $('#dirawat').html(`
              
              <div class="card bg-header" >
                  <div class="card-header text-center h6 ">Masih Dirawat</div>
                  <div class="card-body">
                      <h3 class="card-title">`+ dataDirawat +` Pasien</h3>
                      <p class="card-text"></p>
                  </div>
              </div>
              </div>
            `)
            $('#terkonfirmasi').html(`
              <div class="card bg-header" >
                  <div class="card-header text-center h6 ">Terkonfirmasi Positif</div>
                  <div class="card-body">
                      <h3 class="card-title">`+ dataPositif +` Orang</h3>
                      <p class="card-text"></p>
                  </div>
              </div>
              </div>
            `)
            $('#wafat').html(`
              <div class="card bg-header" >
                  <div class="card-header text-center h6 ">Wafat</div>
                  <div class="card-body">
                      <h3 class="card-title">`+ dataMeninggal +` Orang</h3>
                      <p class="card-text"></p>
                  </div>
              </div>
              </div>
           `);
  }
});