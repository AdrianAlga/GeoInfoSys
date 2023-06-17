// Inisialisasi peta
var map = L.map("map").setView([-6.8751, 109.0436], 13); // Menggunakan koordinat Kabupaten Brebes dan level zoom 13

// Tambahkan peta dasar menggunakan Leaflet Provider Tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Data titik lokasi rawan kecelakaan
var rawanKecelakaan = [
  {
    latitude: -6.87596280069214, 
    longitude: 109.04718467042551,
    kTunggal: 5,
    kLari: 3,
    kBeruntun: 2,
    totalLaka: 10,
    namaLokasi: "Lokasi A",
    kota: "Makassar",
    provinsi: "Sulawesi Selatan",
    alamat: "Jalan Contoh 123"
  },
  {
    latitude: -6.868837053095887, 
    longitude: 109.03379330886818,
    kTunggal: 2,
    kLari: 1,
    kBeruntun: 0,
    totalLaka: 3,
    namaLokasi: "Lokasi B",
    kota: "Makassar",
    provinsi: "Sulawesi Selatan",
    alamat: "Jalan Contoh 456"
  }
];

// Tambahkan marker untuk setiap titik lokasi rawan kecelakaan
rawanKecelakaan.forEach(function(data) {
  var marker = L.marker([data.latitude, data.longitude]).addTo(map);
  var popupContent = `
    <strong>Titik Rawan Kecelakaan</strong><br>
    Nama Lokasi: ${data.namaLokasi}<br>
   
  `;
  marker.bindPopup(popupContent).on("click", function() {
    showDetailInfo(data);
  });
});