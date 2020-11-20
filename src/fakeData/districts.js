const districts = [
  {
    _id: "bagerhat",
    district: "Bagerhat",
    districtbn: "বাগেরহাট",
  },
  {
    _id: "bandarban",
    district: "Bandarban",
    districtbn: "বান্দরবান",
  },
  {
    _id: "barguna",
    district: "Barguna",
    districtbn: "বরগুনা",
  },
  {
    _id: "barishal",
    district: "Barishal",
    districtbn: "বরিশাল",
  },
  {
    _id: "bhola",
    district: "Bhola",
    districtbn: "ভোলা",
  },
  {
    _id: "bogura",
    district: "Bogura",
    districtbn: "বগুড়া",
  },
  {
    _id: "brahmanbaria",
    district: "Brahmanbaria",
    districtbn: "ব্রাহ্মণবাড়িয়া",
  },
  {
    _id: "chandpur",
    district: "Chandpur",
    districtbn: "চাঁদপুর",
  },
  {
    _id: "chapai nawabganj",
    district: "Chapai Nawabganj",
    districtbn: "চাঁপাইনবাবগঞ্জ",
  },
  {
    _id: "chattogram",
    district: "Chattogram",
    districtbn: "চট্টগ্রাম",
  },
  {
    _id: "chuadanga",
    district: "Chuadanga",
    districtbn: "চুয়াডাঙ্গা",
  },
  {
    _id: "cox's bazar",
    district: "Cox's Bazar",
    districtbn: "কক্স বাজার",
  },
  {
    _id: "cumilla",
    district: "Cumilla",
    districtbn: "কুমিল্লা",
  },
  {
    _id: "dhaka",
    district: "Dhaka",
    districtbn: "ঢাকা",
  },
  {
    _id: "dinajpur",
    district: "Dinajpur",
    districtbn: "দিনাজপুর",
  },
  {
    _id: "faridpur",
    district: "Faridpur",
    districtbn: "ফরিদপুর",
  },
  {
    _id: "feni",
    district: "Feni",
    districtbn: "ফেনী",
  },
  {
    _id: "gaibandha",
    district: "Gaibandha",
    districtbn: "গাইবান্ধা",
  },
  {
    _id: "gazipur",
    district: "Gazipur",
    districtbn: "গাজীপুর",
  },
  {
    _id: "gopalganj",
    district: "Gopalganj",
    districtbn: "গোপালগঞ্জ",
  },
  {
    _id: "habiganj",
    district: "Habiganj",
    districtbn: "হবিগঞ্জ",
  },
  {
    _id: "jaipurhat",
    district: "Jaipurhat",
    districtbn: "জয়পুরহাট",
  },
  {
    _id: "jamalpur",
    district: "Jamalpur",
    districtbn: "জামালপুর",
  },
  {
    _id: "jashore",
    district: "Jashore",
    districtbn: "যশোর",
  },
  {
    _id: "jhalokati",
    district: "Jhalokati",
    districtbn: "ঝালকাঠী",
  },
  {
    _id: "jhenaidah",
    district: "Jhenaidah",
    districtbn: "ঝিনাইদহ",
  },
  {
    _id: "khagrachari",
    district: "Khagrachari",
    districtbn: "খাগড়াছড়ি",
  },
  {
    _id: "khulna",
    district: "Khulna",
    districtbn: "খুলনা",
  },
  {
    _id: "kishoreganj",
    district: "Kishoreganj",
    districtbn: "কিশোরগঞ্জ",
  },
  {
    _id: "kurigram",
    district: "Kurigram",
    districtbn: "কুড়িগ্রাম",
  },
  {
    _id: "kushtia",
    district: "Kushtia",
    districtbn: "কুষ্টিয়া",
  },
  {
    _id: "lakshmipur",
    district: "Lakshmipur",
    districtbn: "লক্ষ্মীপুর",
  },
  {
    _id: "lalmonirhat",
    district: "Lalmonirhat",
    districtbn: "লালমনিরহাট",
  },
  {
    _id: "madaripur",
    district: "Madaripur",
    districtbn: "মাদারীপুর",
  },
  {
    _id: "magura",
    district: "Magura",
    districtbn: "মাগুরা",
  },
  {
    _id: "manikganj",
    district: "Manikganj",
    districtbn: "মানিকগঞ্জ",
  },
  {
    _id: "meherpur",
    district: "Meherpur",
    districtbn: "মেহেরপুর",
  },
  {
    _id: "moulvibazar",
    district: "Moulvibazar",
    districtbn: "মৌলভীবাজার",
  },
  {
    _id: "munshiganj",
    district: "Munshiganj",
    districtbn: "মুন্সিগঞ্জ",
  },
  {
    _id: "mymensingh",
    district: "Mymensingh",
    districtbn: "ময়মনসিংহ",
  },
  {
    _id: "naogaon",
    district: "Naogaon",
    districtbn: "নওগাঁ",
  },
  {
    _id: "narail",
    district: "Narail",
    districtbn: "নড়াইল",
  },
  {
    _id: "narayanganj",
    district: "Narayanganj",
    districtbn: "নারায়ণগঞ্জ",
  },
  {
    _id: "narsingdi",
    district: "Narsingdi",
    districtbn: "নরসিংদী",
  },
  {
    _id: "natore",
    district: "Natore",
    districtbn: "নাটোর",
  },
  {
    _id: "netrokona",
    district: "Netrokona",
    districtbn: "নেত্রকোনা",
  },
  {
    _id: "nilphamari",
    district: "Nilphamari",
    districtbn: "নিলফামারী",
  },
  {
    _id: "noakhali",
    district: "Noakhali",
    districtbn: "নোয়াখালী",
  },
  {
    _id: "pabna",
    district: "Pabna",
    districtbn: "পাবনা",
  },
  {
    _id: "panchagarh",
    district: "Panchagarh",
    districtbn: "পঞ্চগড়",
  },
  {
    _id: "patuakhali",
    district: "Patuakhali",
    districtbn: "পটুয়াখালী",
  },
  {
    _id: "pirojpur",
    district: "Pirojpur",
    districtbn: "পিরোজপুর",
  },
  {
    _id: "rajbari",
    district: "Rajbari",
    districtbn: "রাজবাড়ী",
  },
  {
    _id: "rajshahi",
    district: "Rajshahi",
    districtbn: "রাজশাহী",
  },
  {
    _id: "rangamati",
    district: "Rangamati",
    districtbn: "রাঙ্গামাটি",
  },
  {
    _id: "rangpur",
    district: "Rangpur",
    districtbn: "রংপুর",
  },
  {
    _id: "satkhira",
    district: "Satkhira",
    districtbn: "সাতক্ষীরা",
  },
  {
    _id: "shariatpur",
    district: "Shariatpur",
    districtbn: "শরিয়তপুর",
  },
  {
    _id: "sherpur",
    district: "Sherpur",
    districtbn: "শেরপুর",
  },
  {
    _id: "sirajganj",
    district: "Sirajganj",
    districtbn: "সিরাজগঞ্জ",
  },
  {
    _id: "sunamganj",
    district: "Sunamganj",
    districtbn: "সুনামগঞ্জ",
  },
  {
    _id: "sylhet",
    district: "Sylhet",
    districtbn: "সিলেট",
  },
  {
    _id: "tangail",
    district: "Tangail",
    districtbn: "টাঙ্গাইল",
  },
  {
    _id: "thakurgaon",
    district: "Thakurgaon",
    districtbn: "ঠাকুরগাঁও",
  },
];

export default districts;
