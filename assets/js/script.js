(function($) {
    "use strict";

    // Preloader
    function handlePreloader() {
        if ($('.preloader').length) {
            $('body').addClass('page-loaded');
            $('.preloader').delay(1000).fadeOut(300);
        }
    }

    // Header lama tetap dipertahankan.
    function headerStyle() {
        if ($('.main-header').length) {
            var scrollY = $(window).scrollTop();
            var header = $('.main-header');

            if (scrollY <= 200) {
                header.removeClass('header-fixed').addClass('header-absolute');

                header.css({
                    transform: 'translateY(0)',
                    opacity: '1'
                });
            } else if (scrollY > 200 && scrollY <= 350) {
                header.css({
                    transform: 'translateY(-100px)',
                    opacity: '0'
                });
            } else {
                header
                    .addClass('header-fixed')
                    .removeClass('header-absolute');

                header.css({
                    transform: 'translateY(0)',
                    opacity: '1'
                });
            }
        }
    }

    $(window).on('scroll', function() {
        headerStyle();
    });

    headerStyle();

    // Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append(
            '<div class="dropdown-btn">' +
                '<span class="fa fa-angle-right"></span>' +
            '</div>'
        );
    }

    // Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
        if (
            $.fn.mCustomScrollbar &&
            $('.mobile-menu .menu-box').length
        ) {
            $('.mobile-menu .menu-box').mCustomScrollbar();
        }

        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();

        if (mobileMenuContent) {
            $('.mobile-menu .menu-box .menu-outer').append(
                mobileMenuContent
            );

            $('.sticky-header .main-menu').append(
                mobileMenuContent
            );
        }

        $('.mobile-menu').on(
            'click',
            'li.dropdown .dropdown-btn',
            function() {
                $(this).toggleClass('open');
                $(this).prev('ul').slideToggle(500);
            }
        );

        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on(
            'click',
            function() {
                $('body').removeClass('mobile-menu-visible');
            }
        );
    }

    // Back to Top
    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();

        if (scrollPos > 300) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });

    $('#backToTop').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate(
            {
                scrollTop: 0
            },
            100
        );
    });

    $(window).on('load', function() {
        handlePreloader();
    });
})(window.jQuery);

// Mencegah Inspect Element dan View Source
document.addEventListener("keydown", function (event) {
    if (
        (event.ctrlKey &&
        (event.key === "u" ||
            event.key === "i" ||
            event.key === "j" ||
            event.key === "s")) ||
        (event.ctrlKey &&
        event.shiftKey &&
        (event.key === "I" || event.key === "J" || event.key === "C")) ||
        event.key === "F12"
    ) {
        event.preventDefault();
        console.log("Inspect Element telah dinonaktifkan!"); // Debugging
    }
    });
    // Mencegah Klik Kanan
    document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    });
    // Mencegah Drag & Drop pada Semua Gambar
    document.addEventListener("dragstart", function (event) {
    event.preventDefault();
    });
    // Mencegah Klik Kanan pada Gambar Secara Spesifik
    document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("contextmenu", (event) => event.preventDefault());
});


// =====================================================
// DATA DAN RENDERER STRUKTUR ORGANISASI
// =====================================================

const iconPlaceholderKahimWahim = 'assets/img/icon/kahim-wahim-gear.png';
const iconPlaceholderInternal = 'assets/img/icon/icon-internal.png';
const iconPlaceholderRelasi = 'assets/img/icon/icon-relasi.png';
const iconPlaceholderRnD = 'assets/img/icon/icon-rnd.png';
const iconPlaceholderEdukasi = 'assets/img/icon/icon-edukasi.png';
const iconPlaceholderInfokom = 'assets/img/icon/icon-infokom.png';

const organizationData = [
    // SC
    {
        id: 'sc',
        type: 'sc',
        badge: 'SC',
        name: 'Steering Committee',
        shortName: 'Steering Committee',
        description: 'Pengarah dan pengawas organisasi',
        image: 'assets/img/divisi/steering.webp',
        memberCount: 6,

        leaders: [
            {
                title: 'Ketua Himpunan',

                description:
                    'Merupakan pengambil kebijakan tertinggi dalam HIMTIKA yang menjalankan fungsi kepemimpinan umum dan menjadi penanggung jawab pelaksanaan tugas serta program HIMTIKA, baik ke dalam maupun keluar.',

                roles: [
                    'Memimpin HIMTIKA',
                    'Menetapkan Kebijakan',
                    'Mengoordinasi pengurus',
                    'Bertanggungjawab kegiatan'
                ],

                photo: 'assets/img/pengurus/kahim.webp',
                icon: iconPlaceholderKahimWahim,
                name: 'M. Akmal Fauzan N. R.',
                nickname: 'Akmal',
                role: 'Ketua Himpunan'
            },
            {
                title: 'Wakil Ketua Himpunan',

                description:
                    'Merupakan penanggung jawab koordinator bidang data dan pustaka, ketatausahaan, penerangan, serta hubungan organisasi dengan pihak eksternal.',

                roles: [
                    'Mendampingi Kahim',
                    'Mengkoordinasi bidang',
                    'Menggantikan ketua',
                    'Mengawasi program'
                ],

                photo: 'assets/img/pengurus/wahim.webp',
                icon: iconPlaceholderKahimWahim,
                name: 'Indyra Putri Pratama',
                nickname: 'Indyra',
                role: 'Wakil Ketua Himpunan',
                mirrored: true,
                reverseGradient: true
            }
        ],

        secretary: {
            kicker: 'Administrasi',
            title: 'Sekretaris',

            description:
                'Merupakan penanggung jawab dan koordinator di bidang administrasi HIMTIKA.',

            roles: [
                'Mengoordinasikan administrasi kesekretariatan dan kearsipan',
                'Menyiapkan materi rapat dan dokumen organisasi',
                'Mencatat surat masuk, surat keluar, dan daftar hadir rapat pengurus',
                'Memelihara inventaris serta alat-alat kesekretariatan'
            ],

            members: [
                {
                    name: 'Alia Hamzah',
                    nickname: 'Alia',
                    role: 'Sekretaris Umum',
                    photo:
                        'assets/img/pengurus/sekum-alia.webp'
                },
                {
                    name: 'Nasya Putri Anjani',
                    nickname: 'Nasya',
                    role: 'Wakil Sekretaris Umum',
                    photo:
                        'assets/img/pengurus/wasekum-nasya.webp'
                }
            ]
        },

        treasurer: {
            kicker: 'Keuangan',
            title: 'Bendahara',

            description:
                'Merupakan penanggung jawab dan koordinator di bidang keuangan dan perlengkapan organisasi HIMTIKA.',

            roles: [
                'Bertanggung jawab atas penerimaan dan pengeluaran keuangan',
                'Mencatat dan melaporkan dana kemahasiswaan kepada Ketua Himpunan',
                'Mengelola pembukuan dan laporan keuangan',
                'Mengawasi dana kas bersama Ketua Himpunan'
            ],

            members: [
                {
                    name: 'Anisa Diyah Ayu Lestari',
                    nickname: 'Anisa',
                    role: 'Bendahara Umum',
                    photo:
                        'assets/img/pengurus/bendum-anisa.webp'
                },
                {
                    name: 'Luckyta Rizqia Jubaedi',
                    nickname: 'Lucky',
                    role: 'Wakil Bendahara Umum',
                    photo:
                        'assets/img/pengurus/wabendum-luckyta.webp'
                }
            ]
        }
    },

    // Internal
    {
        id: 'internal',
        type: 'division',
        badge: 'Divisi',
        name: 'Internal',
        shortName: 'Divisi Internal',
        description:
            'Penguatan organisasi internal',
        image: 'assets/img/divisi/internal.webp',
        memberCount: 9,

        divisionDescription:
            'Divisi Internal bertugas mengelola kaderisasi serta pengembangan sumber daya manusia di HIMTIKA. Divisi ini berperan dalam menjaga komunikasi yang harmonis antar pengurus serta mempersiapkan generasi Informatika yang lebih baik melalui kegiatan kaderisasi dan pengenalan kehidupan kampus bagi mahasiswa baru.',

        leader: {
            name: 'Ambar Triyasmin',
            nickname: 'yasmin',
            role: 'Ketua Divisi Internal',
            photo: 'assets/img/pengurus/kadiv-internal.webp',
            icon: iconPlaceholderInternal
        },

        departments: [
            {
                name: 'Human Resource Development',
                description: 'Meningkatkan motivasi, softskill, karakter, dan perkembangan kinerja pengurus HIMTIKA.',
                members: [
                    [
                        'Tantawi Shafa Saadilah Simatupang',
                        'Ketua Departemen HRD',
                        'kadept-internal-tantawi.webp',
                        'Tantawi'
                    ],
                    [
                        "An'Amatus Syafira Aulia Azahra",
                        'Anggota Dept. HRD',
                        'anggota-internal-azahra.webp',
                        'Aza'
                    ],
                    [
                        'Kaisya Almaidja',
                        'Anggota Dept. HRD',
                        'anggota-internal-kaisya.webp',
                        'Kaisya'
                    ],
                    [
                        'Ridho Mughni Nursila',
                        'Anggota Dept. HRD',
                        'anggota-internal-ridho.webp',
                        'Ridho'
                    ]
                ]
            },
            {
                name: 'HIMTIKA Care',
                description: 'Menjalankan pembinaan, penjagaan, evaluasi, dan kontrol organisasi dengan semangat empati serta kekeluargaan.',
                members: [
                    [
                        'Sri Dayanti',
                        'Ketua Departemen HIMTIKA Care',
                        'kadept-internal-sri.webp',
                        'Sri'
                    ],
                    [
                        'Aqilah Filzah Hidayat',
                        'Anggota Dept. HIMTIKA Care',
                        'anggota-internal-aqilah.webp',
                        'Aqilah'
                    ],
                    [
                        'Gibran Ferdiansyah',
                        'Anggota Dept. HIMTIKA Care',
                        'anggota-internal-gibran.webp',
                        'Gibran'
                    ],
                    [
                        'Kayla Dwi Septiani',
                        'Anggota Dept. HIMTIKA Care',
                        'anggota-internal-kayla.webp',
                        'Kayla'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Human Resource Development',
                'Dies Natalis HIMTIKA',
                'Ridho Mughni Nursila',
                'Dies Natalis HIMTIKA merupakan rangkaian kegiatan untuk memperingati hari berdirinya HIMTIKA ke-9 pada 16 Oktober 2017 sekaligus menjadi momentum mempererat hubungan dan rasa kekeluargaan di lingkungan Informatika. Kegiatan ini menjadi wadah untuk membangun kebersamaan, solidaritas, dan silaturahmi antara pengurus, anggota, alumni, serta mahasiswa Informatika lintas angkatan.',
                'internal-dies-natalis.webp',
                'https://www.instagram.com/diesnatalis.himtika/'
            ],
            [
                'Human Resource Development',
                'IT Bootcamp: Independent Project',
                'An’Amatus Syafira Aulia Azahra',
                'IT Bootcamp: Independent Project merupakan kegiatan yang dirancang untuk mengenalkan kehidupan kampus di lingkungan Program Studi Informatika kepada mahasiswa baru. Melalui rangkaian pembelajaran dan kegiatan bersama, program ini membantu mahasiswa mengembangkan hardskill dan softskill, kemampuan dasar di bidang IT, jiwa kepemimpinan, serta membangun rasa kekeluargaan antarmahasiswa Informatika.',
                'internal-it-bootcamp.webp',
                'https://himtika.cs.unsika.ac.id/it-bootcamp/'
            ],
            [
                'Human Resource Development',
                'Latihan Kepemimpinan Manajemen Mahasiswa Pra-Dasar (LKMMPD)',
                'Kaisya Almaidja',
                'LKMM Pra-Dasar merupakan kegiatan pembekalan bagi mahasiswa baru Informatika untuk mengembangkan keterampilan dasar yang dibutuhkan dalam kehidupan perkuliahan dan organisasi. Program ini membekali mahasiswa dengan kemampuan berkomunikasi, mengenali dan mengembangkan potensi diri, membangun pola pikir kritis, serta memposisikan diri secara efektif dalam organisasi kemahasiswaan.',
                'internal-lkmmpd.webp',
                'https://himtika.cs.unsika.ac.id/lkmmpd/'
            ],
            [
                'Human Resource Development',
                'Musyawarah Anggota',
                'Tantawi Shafa Saadilah Simatupang',
                'MUSANG merupakan sebuah musyawarah anggota yang diadakan pada akhir  masa  kepengurusan  untuk  mengkaji  kinerja  pengurus, melakukan pertanggungjawaban,  mengamandemenkan AD/ART, GBHPK, MO, PO, mendemisionerkan  pengurus lama serta untuk memilih Ketua Umum HIMTIKA.',
                'internal-musang.webp',
                'https://instagram.com/himtika_unsika/'
            ],
            [
                'HIMTIKA Care',
                'HIMTIKA Organizing Agenda',
                'Kayla Dwi Septiani',
                'HIMTIKA Organizing Agenda merupakan program kerja yang menaungi berbagai agenda untuk mendukung keberlangsungan dan pengembangan organisasi HIMTIKA. Program ini mencakup Rapat Kerja Pengurus, HIMTIKA Growth Up, Evaluasi Triwulan, Himtalks, dan HIMTIKA Awards yang berperan dalam menyelaraskan arah kepengurusan, mengembangkan kualitas SDM, mengevaluasi kinerja, membangun komunikasi, serta memberikan apresiasi kepada pengurus dan anggota HIMTIKA.',
                'internal-hoa.webp',
                'https://himtalks.vercel.app/himtalks/'
            ]
        ]
    },

    // Relasi
    {
        id: 'relation',
        type: 'division',
        badge: 'Divisi',
        name: 'Relation',
        shortName: 'Divisi Relation',
        description: 'Relasi dan kemitraan eksternal',
        image: 'assets/img/divisi/relasi.webp',
        memberCount: 8,

        divisionDescription:
            'Divisi Relation bertanggung jawab membangun dan memelihara hubungan kerja sama dengan instansi, organisasi, maupun perusahaan di luar kampus. Selain itu, divisi ini juga berperan dalam kegiatan pendanaan serta menjalin kolaborasi untuk mendukung kegiatan dan perkembangan HIMTIKA.',

        leader: {
            name: 'Rois Alif Pradipa',
            nickname: 'Rois',
            role: 'Ketua Divisi Relation',
            photo: 'assets/img/pengurus/kadiv-relasi.webp',
            icon: iconPlaceholderRelasi
        },

        departments: [
            {
                name: 'Public Marketing',
                description: 'Mengembangkan tools marketing dan sumber dana potensial melalui kreativitas serta inisiatif bidang teknologi informasi.',
                members: [
                    [
                        'Valen Jason',
                        'Ketua Departemen Public Marketing',
                        'kadept-relasi-jason.webp',
                        'Jason'
                    ],
                    [
                        'Julian Manasye Nasyok',
                        'Anggota Dept. Public Marketing',
                        'anggota-relasi-julian.webp',
                        'Julian'
                    ],
                    [
                        'Marssello Hotasi Marpaung',
                        'Anggota Dept. Public Marketing',
                        'anggota-relasi-marcello.webp',
                        'sello'
                    ]
                ]
            },
            {
                name: 'Public Relation',
                description: 'Memperluas serta menjaga hubungan baik dengan himpunan, instansi, dan mahasiswa melalui komunikasi agenda HIMTIKA.',
                members: [
                    [
                        'Ihsan Fauzi Akbar',
                        'Ketua Departemen Public Relation',
                        'kadept-relasi-ihsan.webp',
                        'Ihsan'
                    ],
                    [
                        'Al Fazran Dwi Nugraha',
                        'Anggota Dept. Public Relation',
                        'anggota-relasi-fazran.webp',
                        'Fazran'
                    ],
                    [
                        'Fadhil Azhar Putra',
                        'Anggota Dept. Public Relation',
                        'anggota-relasi-ajay.webp',
                        'Ajay'
                    ],
                    [
                        'Raffa Hafizh Hauzaan',
                        'Anggota Dept. Public Relation',
                        'anggota-relasi-raffa.webp',
                        'Raffa'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Public Marketing',
                'Corporation',
                'Marssello Hotasi Marpaung',
                'Corporation merupakan program kerja yang berfokus pada pengembangan, produksi, dan pemasaran berbagai produk untuk memperoleh pemasukan tambahan bagi HIMTIKA. Produk yang dipasarkan dapat berupa produk digital maupun non-digital yang dikembangkan melalui kolaborasi dengan Divisi Research and Development, Information and Communication, maupun Department Public Marketing sesuai kebutuhan produk yang akan dipasarkan.',
                'relasi-corporation.webp',
                'https://www.instagram.com/corporation_himtika/'
            ],
            [
                'Public Relation',
                'HI-Link',
                'Ihsan Fauzi Akbar',
                'HI-LINK (HIMTIKA Link) merupakan program kerja yang menjadi jembatan konektivitas antara HIMTIKA dengan lingkungan eksternal, baik institusi pendidikan maupun industri. Program ini menaungi HIMTIKA Exchange sebagai wadah studi banding dengan organisasi kemahasiswaan lain serta HIMTIKA Goes to Company yang memberikan kesempatan kepada mahasiswa untuk mengenal secara langsung lingkungan, budaya, dan kebutuhan kompetensi di dunia kerja.',
                'relasi-hi-link.webp',
                'https://youtu.be/iNu6ZJkP6qY?si=ZPeNFNF9c-eRHxrr'
            ],
            [
                'Public Relation',
                'Kemitraan',
                'Al Fazran Dwi Nugraha',
                'Kemitraan merupakan program kerja yang berfokus pada pembangunan kerja sama antara HIMTIKA dengan perusahaan atau badan usaha. Melalui pencarian, pendekatan, dan negosiasi dengan mitra potensial, program ini berupaya membangun hubungan kerja sama yang saling menguntungkan sekaligus membantu mengurangi pengeluaran dan mendukung kebutuhan finansial berbagai kegiatan HIMTIKA.',
                'relasi-kemitraan.webp',
            ]
        ]
    },

    // RnD
    {
        id: 'rnd',
        type: 'division',
        badge: 'Divisi',
        name: 'RnD',
        shortName: 'Divisi RnD',
        description: 'Inovasi dan pengembangan teknologi',
        image: 'assets/img/divisi/rnd.webp',
        memberCount: 8,

        divisionDescription:
            'Divisi Research and Development (RnD) merupakan divisi yang menjadi ujung tombak dalam  penerapan teknologi informasi. Divisi ini fokus pada peningkatan kualitas di lingkungan  HIMTIKA dan program studi Informatika UNSIKA. Selain itu, RnD juga berperan sebagai IT Support untuk mendukung optimalisasi kinerja HIMTIKA.',

        leader: {
            name: 'Raika Maulana Dwi Putra',
            nickname: 'Raika',
            role: 'Ketua Divisi RnD',
            photo: 'assets/img/pengurus/kadiv-rnd.webp',
            icon: iconPlaceholderRnD
        },

        departments: [
            {
                name: 'Research Development',
                description: 'Mengumpulkan ide dan inovasi, mengidentifikasi kebutuhan serta masalah produk digital, dan mengawal pengembangan sampai tahap rilis.',
                members: [
                    [
                        'Muhammad Rafisyah Rizkiyawan',
                        'Ketua Departemen Research Development',
                        'kadept-rnd-rafisyah.webp',
                        'Rafisyah'
                    ],
                    [
                        'Mohammed Ali Irsyad Ginting',
                        'Anggota Dept. Research Development',
                        'anggota-rnd-irsyad.webp',
                        'Irsyad'
                    ],
                    [
                        'Nanang Saepudin',
                        'Anggota Dept. Research Development',
                        'anggota-rnd-nanang.webp',
                        'Nanang'
                    ]
                ]
            },
            {
                name: 'Product Development',
                description: 'Membuat, mengembangkan, mengelola, dan menjadi IT Support produk digital HIMTIKA.',
                members: [
                    [
                        'Rafli Rizqi Fadillah',
                        'Ketua Departemen Product Development',
                        'kadept-rnd-rafli.webp',
                        'Rafli'
                    ],
                    [
                        'Arsya Awfazahran',
                        'Anggota Dept. Product Development',
                        'anggota-rnd-arsya.webp',
                        'Arsya'
                    ],
                    [
                        'Azka Barra Haidar',
                        'Anggota Dept. Product Development',
                        'anggota-rnd-azka.webp',
                        'Azka'
                    ],
                    [
                        'Fajar Abdilah',
                        'Anggota Dept. Product Development',
                        'anggota-rnd-fajar.webp',
                        'Fajar'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Product Development',
                'HIMTIKA Software Development',
                'Fajar Abdilah',
                'HIMTIKA Software Development merupakan program kerja yang berfokus pada pengembangan dan pengelolaan produk digital HIMTIKA berupa website dan aplikasi mobile. Program ini tidak hanya melakukan pemeliharaan produk yang telah tersedia, tetapi juga mengembangkan fitur, layanan, dan tampilan baru untuk menunjang kebutuhan mahasiswa Informatika serta bekerja sama dengan Department Research Development dalam proses pengembangan produk digital yang informatif dan solutif.',
                'rnd-himtika-software-development.webp'
            ],
            [
                'Research Development',
                'Software House',
                'Nanang Saepudin',
                'Software House adalah program kerja yang berfokus pada penelitian dan pengembangan produk digital HIMTIKA berupa website dan aplikasi mobile. Program ini menjadi wadah bagi mahasiswa Informatika untuk menyampaikan ide atau kebutuhan yang kemudian dianalisis dan dikembangkan bersama HIMTIKA Software Development menjadi produk digital yang bermanfaat.',
                'rnd-software-house.webp'
            ]
        ]
    },

    // Edukasi
    {
        id: 'education',
        type: 'division',
        badge: 'Divisi',
        name: 'Education',
        shortName: 'Divisi Education',
        description: 'Pengembangan akademik dan prestasi mahasiswa',
        image: 'assets/img/divisi/edukasi.webp',
        memberCount: 6,

        divisionDescription:
            'Divisi Education berfungsi sebagai wadah bagi mahasiswa Informatika untuk mengembangkan keterampilan dan wawasan di bidang akademik maupun teknologi informasi. Divisi ini juga mendorong prestasi mahasiswa melalui pelatihan, kegiatan akademik, serta penyebaran informasi perlombaan di bidang IT.',

        leader: {
            name: 'Rifqy Kurniawan Fattahillah',
            nickname: 'Rifqy',
            role: 'Ketua Divisi Education',
            photo: 'assets/img/pengurus/kadiv-edukasi.webp',
            icon: iconPlaceholderEdukasi
        },

        departments: [
            {
                name: 'Skill Education',
                description: 'Memfasilitasi minat, bakat, karya, dan kesiapan mahasiswa dalam mengikuti perlombaan bidang IT.',
                members: [
                    [
                        'Fitria',
                        'Ketua Departemen Skill Education',
                        'kadept-edukasi-fitria.webp',
                        'Fitria'
                    ],
                    [
                        'Aditya Akwinda',
                        'Anggota Dept. Skill Education',
                        'anggota-edukasi-aditya.webp',
                        'Adit'
                    ],
                    [
                        'Ahmad Haikal',
                        'Anggota Dept. Skill Education',
                        'anggota-edukasi-haikal.webp',
                        'Haikal'
                    ]
                ]
            },
            {
                name: 'College Education',
                description: 'Meningkatkan keahlian dan pemahaman keilmuan IT melalui kelas belajar serta pengayaan materi perkuliahan.',
                members: [
                    [
                        'Amelia Marliana',
                        'Ketua Departemen College Education',
                        'kadept-edukasi-amelia.webp',
                        'Amel'
                    ],
                    [
                        'Andika Bagas Febrian',
                        'Anggota Dept. College Education',
                        'anggota-edukasi-andika.webp',
                        'Bagas'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Skill Education',
                'Create and Compete',
                'Ahmad Haikal',
                'Create and Compete merupakan program kerja yang mewadahi inovasi, ide, minat, bakat, dan karya mahasiswa Informatika Unsika untuk direalisasikan melalui project yang hasilnya dipamerkan pada kegiatan-kegiatan atau disalurkan ke perlombaan. Program ini juga mendorong mahasiswa untuk meningkatkan kompetensi dan semangat berprestasi melalui pembinaan, pendampingan, serta penyaluran kemampuan ke berbagai perlombaan dan sertifikasi sesuai bidang yang diminati. CnC juga mengumumkan info lomba pada instagram @cnc_himtika.',
                'edukasi-cnc.webp',
                'https://www.instagram.com/cnc_himtika'
            ],
            [
                'Skill Education',
                'Pekan IT',
                'Fitria',
                'Pekan IT merupakan program kerja yang mewadahi kegiatan edukasi dan kompetisi di bidang teknologi informasi. Rangkaian kegiatannya mencakup SEMANTIK: Internformatics Competition sebagai ajang kompetisi mahasiswa Informatika UNSIKA di bidang IT, serta National IT Competition (NIC) yang membuka kompetisi tingkat nasional bagi mahasiswa dari berbagai perguruan tinggi. Selain kompetisi, Pekan IT juga menghadirkan Tech Talks sebagai ruang edukasi untuk memperluas wawasan dan pengetahuan seputar perkembangan teknologi, sehingga mahasiswa dapat mengembangkan softskill, hardskill, kreativitas, serta jiwa kompetitifnya.',
                'edukasi-pekan-it.webp',
                'https://himtika.cs.unsika.ac.id/pekan-it'
            ],
            [
                'College Education',
                'Study Club',
                'Amelia Marliana',
                'Study Club merupakan program kerja berupa kegiatan kelas belajar bersama yang berfokus pada pengembangan pengetahuan dan keterampilan di bidang IT. Program ini menjadi wadah bagi mahasiswa Informatika Unsika untuk mempelajari bidang yang diminati secara bertahap, mengembangkan kompetensi diri, serta berkolaborasi dengan mahasiswa lain yang memiliki minat serupa.',
                'edukasi-study-club.webp',
                'https://himtika.cs.unsika.ac.id/studyclub'
            ]
        ]
    },

    // Infokom
    {
        id: 'infokom',
        type: 'division',
        badge: 'Divisi',
        name: 'InfoCom',
        shortName: 'Divisi InfoCom',
        description: 'Media dan informasi digital',
        image: 'assets/img/divisi/infokom.webp',
        memberCount: 8,

        divisionDescription:
            'Divisi Information and Communication (InfoCom) bertanggung jawab dalam mengelola seluruh  informasi dari internal HIMTIKA. Informasi tersebut kemudian disampaikan melalui  platform media sosial HIMTIKA agar dapat diakses oleh mahasiswa Informatika',

        leader: {
            name: 'Atika Sari Ramadhani',
            nickname: 'Atika',
            role: 'Ketua Divisi InfoCom',
            photo: 'assets/img/pengurus/kadiv-infokom.webp',
            icon: iconPlaceholderInfokom
        },

        departments: [
            {
                name: 'Media Information',
                description: 'Mengelola publikasi kegiatan, media sosial, branding digital, dan perancangan konten HIMTIKA.',
                members: [
                    [
                        'Afif Ghazanfar',
                        'Ketua Departemen Media Information',
                        'kadept-infokom-afif.webp',
                        'Afif'
                    ],
                    [
                        'Muhammad Fajar Ramadhan',
                        'Anggota Dept. Media Information',
                        'anggota-infokom-fajaw.webp',
                        'Fajaw'
                    ],
                    [
                        'Wisnu Tahta Agung Prayoga',
                        'Anggota Dept. Media Information',
                        'anggota-infokom-wisnu.webp',
                        'Wisnu'
                    ]
                ]
            },
            {
                name: 'Media Creative',
                description: 'Mengembangkan media informasi sesuai identitas visual HIMTIKA serta memproduksi konten desain dan video.',
                members: [
                    [
                        'Stefanie Roria Bintang',
                        'Ketua Departemen Media Creative',
                        'kadept-infokom-stefanie.webp',
                        'Bintang'
                    ],
                    [
                        'Rizky Yoga Salasa',
                        'Anggota Dept. Media Creative',
                        'anggota-infokom-yoga.webp',
                        'Yoga'
                    ],
                    [
                        'Rizky Fitri Putri Awaliyah',
                        'Anggota Dept. Media Creative',
                        'anggota-infokom-pipit.webp',
                        'Pipit'
                    ],
                    [
                        'Taqi Hamizan',
                        'Anggota Dept. Media Creative',
                        'anggota-infokom-taqi.webp',
                        'Taqi'
                    ]
                ]
            }
        ],

        programs: [
            [
                'Media Information',
                'Always On',
                'Muhammad Fajar Ramadhan',
                'Always On merupakan program kerja yang berfokus pada pengelolaan dan penyebaran informasi melalui berbagai media sosial HIMTIKA, seperti Instagram, TikTok, LinkedIn, dan YouTube. Program ini mengoptimalkan media sosial sebagai sumber informasi yang aktif dan relevan agar berbagai informasi mengenai HIMTIKA, kegiatan organisasi, serta lingkungan Informatika dapat tersampaikan kepada mahasiswa secara luas.',
                'infokom-always-on.webp'
            ],
            [
                'Media Information',
                'Content Writer',
                'Wisnu Tahta Agung Prayoga',
                'Content Writer merupakan program kerja yang bertanggung jawab dalam merancang dan menyusun konten informatif serta interaktif untuk berbagai media HIMTIKA. Program ini bekerja sama dengan Department Media Creative dalam menyiapkan konsep dan materi komunikasi, seperti caption, headline, serta konten untuk Instagram, YouTube, TikTok, dan media lainnya agar informasi dapat disampaikan secara menarik, kreatif, dan efektif.',
                'infokom-content-writer.webp'
            ],
            [
                'Media Creative',
                'Desain Komunikasi Visual',
                'Rizky Fitri Putri Awaliyah',
                'Desain Komunikasi Visual merupakan program kerja yang berperan sebagai eksekutor berbagai kebutuhan visual HIMTIKA. Program ini mengolah materi yang telah disiapkan oleh Content Writer menjadi desain dan konten visual yang menarik, komunikatif, dan mudah dipahami sehingga informasi HIMTIKA dapat tersampaikan secara efektif kepada mahasiswa Informatika maupun audiens lainnya.',
                'infokom-dkv.webp'
            ]
        ]
    }
];

// =====================================================
// NORMALISASI DATA
// =====================================================

organizationData.forEach(function(item) {
    if (item.departments) {
        item.departments.forEach(function(department) {
            department.members = department.members.map(
                function(member) {
                    return {
                        name: member[0],
                        role: member[1],
                        photo:
                            'assets/img/pengurus/' + member[2],
                        nickname: member[3] || null
                    };
                }
            );
        });
    }

    if (item.programs) {
        item.programs = item.programs.map(function(program) {
            return {
                department: program[0],
                title: program[1],
                pic: program[2],
                description: program[3],
                image:
                    'assets/img/proker/' + program[4],

                // Isi link masing-masing program kerja di sini.
                href: program[5] || 'https://himtika.cs.unsika.ac.id/grand-design-himtika/'
            };
        });
    }
});

let currentIndex = 0;

// Status drag/swipe
let isDivisionDragging = false;
let divisionDragStartX = 0;
let divisionDragDistance = 0;
let divisionDragMoved = false;

const divisionSliderViewport = document.getElementById('divisionSliderViewport');

/*
Menghitung jarak antar-card berdasarkan ukuran card aktual.

Jadi tidak memakai angka tetap 501px lagi karena ukuran card
berubah pada mobile, tablet, dan desktop.
*/
function getCardSpacing() {
    const card = document.querySelector(
        '#divisionSlider .division-card'
    );

    if (!card) {
        return 280;
    }

    const cardWidth = card.offsetWidth;

    let cardGap = 28;

    if (window.innerWidth >= 640) { cardGap = 34; }
    if (window.innerWidth >= 768) { cardGap = 40; }
    if (window.innerWidth >= 1024) { cardGap = 48; }
    if (window.innerWidth >= 1280) { cardGap = 34; }
    if (window.innerWidth >= 1536) { cardGap = 64; }

    return cardWidth + cardGap;
}

/*
Membuat seluruh card satu kali.

Setelah itu card tidak dirender ulang setiap slider berpindah.
Yang berubah hanya transform, opacity, scale, dan z-index.
*/
function buildSlider() {
    const slider = document.getElementById('divisionSlider');

    if (!slider) {
        return;
    }

    slider.innerHTML = '';

    organizationData.forEach((division, index) => {
        const card = document.createElement('div');

        card.className = 'division-card';
        card.dataset.index = index;

        const badgeText = division.badge;

        card.innerHTML = `
            <img
                src="${division.image}"
                alt="${division.name}"
                draggable="false"
                onerror="
                    this.onerror = null;
                    this.src = 'assets/img/logo/Himtika.png';
                "
            >

            <div class="card-badge-label">
                ${badgeText}
            </div>

            <div class="card-badge-count">
                <img src="assets/img/icon/member-count.svg">
                ${division.memberCount}
            </div>

            <div class="card-info">
                <h3>${division.name}</h3>
                <p>${division.description}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            /*
            Setelah swipe, click biasanya ikut terpanggil.
            Kondisi ini mencegah card berpindah dua kali.
            */
            if (divisionDragMoved) {
                return;
            }

            currentIndex = index;
            updateSlider();
        });

        slider.appendChild(card);
    });
}

/*
Membuat dot pagination.
*/
function buildDots() {
    const dotsContainer = document.getElementById('sliderDots');

    if (!dotsContainer) {
        return;
    }

    dotsContainer.innerHTML = '';

    organizationData.forEach((division, index) => {
        const dot = document.createElement('button');

        dot.type = 'button';
        dot.className = 'dot';
        dot.dataset.index = index;

        dot.setAttribute(
            'aria-label',
            `Pilih ${division.name}`
        );

        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });

        dotsContainer.appendChild(dot);
    });
}

/*
Mencari jarak terpendek secara melingkar.

Contoh:
Dari card terakhir menuju card pertama tidak bergerak melewati
seluruh card, tetapi mengambil jalur terpendek.
*/
function getCircularDiff(index, total) {
    let difference = index - currentIndex;

    if (difference > total / 2) {
        difference -= total;
    }

    if (difference < -total / 2) {
        difference += total;
    }

    return difference;
}

/*
Mengatur posisi setiap card.

dragOffset hanya berisi nilai ketika pengguna sedang swipe.
Dalam keadaan normal nilainya 0.
*/
function updateSlider(dragOffset = 0, updateSectionContent = true) {
    const slider = document.getElementById('divisionSlider');

    if (!slider) {
        return;
    }

    const total = organizationData.length;
    const cards = Array.from(slider.children);

    const cardSpacing = getCardSpacing();

    cards.forEach((card) => {
        const index = Number(card.dataset.index);
        const difference = getCircularDiff(index, total);
        const absoluteDifference = Math.abs(difference);

        let scale = 0.7;
        let opacity = 0;
        let zIndex = 10 - absoluteDifference;
        let liftY = 0;

        // Card tengah
        if (absoluteDifference === 0) {
            scale = 1.06;
            opacity = 1;
            liftY = -10;
        }

        // Card kanan dan kiri terdekat
        else if (absoluteDifference === 1) {
            scale = 0.86;
            opacity = 1;
        }

        // Card yang lebih jauh
        else if (absoluteDifference === 2) {
            scale = 0.72;
            opacity = 1;
        }

        // const translateX =
        //     difference * cardSpacing +
        //     dragOffset;

        let translateX;

        if (absoluteDifference === 2) {
            translateX = Math.sign(difference) * (cardSpacing * 1.8);
        } else {
            translateX = difference * cardSpacing;
        }

        translateX += dragOffset;

        card.style.transform = `
            translateX(${translateX}px)
            translateY(${liftY}px)
            scale(${scale})
        `;

        card.style.opacity = opacity;

        card.style.zIndex = zIndex;

        card.style.pointerEvents =
            absoluteDifference > 2
                ? 'none'
                : 'auto';

        card.classList.toggle(
            'active',
            absoluteDifference === 0
        );
    });

    const dots = document.querySelectorAll('#sliderDots .dot');

    dots.forEach((dot) => {
        const index = Number(dot.dataset.index);

        dot.classList.toggle(
            'active',
            index === currentIndex
        );
    });

    /*
    Saat jari masih bergerak, bagian bawah tidak perlu
    dirender ulang berkali-kali.

    Bagian bawah baru berubah ketika swipe selesai.
    */
    if (!updateSectionContent) {
        return;
    }

    updateAboutSection(currentIndex);
    // updateWakilSection(currentIndex);
    updateSekretarisSection(currentIndex);
    updateBendaharaSection(currentIndex);
    updateDepartmentSections(currentIndex);
    updateProkerSection(currentIndex);
}

// ==================== DIVISION SLIDER SWIPE ====================
function startDivisionDrag(clientX) {
    if (!divisionSliderViewport) {
        return;
    }

    isDivisionDragging = true;
    divisionDragMoved = false;

    divisionDragStartX = clientX;
    divisionDragDistance = 0;

    divisionSliderViewport.classList.add(
        'is-dragging'
    );
}

function moveDivisionDrag(clientX) {
    if (!isDivisionDragging) {
        return;
    }

    divisionDragDistance =
        clientX -
        divisionDragStartX;

    /*
    Jika jari sudah bergerak lebih dari 5px,
    interaksi dianggap swipe, bukan click.
    */
    if (
        Math.abs(divisionDragDistance) >
        5
    ) {
        divisionDragMoved = true;
    }

    /*
    Card langsung mengikuti jari selama swipe.
    */
    updateSlider(
        divisionDragDistance,
        false
    );
}

function endDivisionDrag() {
    if (!isDivisionDragging) {
        return;
    }

    isDivisionDragging = false;

    if (divisionSliderViewport) {
        divisionSliderViewport.classList.remove(
            'is-dragging'
        );
    }

    const cardSpacing = getCardSpacing();

    /*
    Threshold mengikuti ukuran card,
    tetapi tidak pernah lebih dari 90px.
    */
    const swipeThreshold = Math.min(cardSpacing * 0.18, 90);

    // Swipe ke kiri: next
    if (divisionDragDistance < -swipeThreshold) {
        currentIndex = (currentIndex + 1) % organizationData.length;
    }

    // Swipe ke kanan: previous
    else if (divisionDragDistance > swipeThreshold) {
        currentIndex = (currentIndex - 1 + organizationData.length) % organizationData.length;
    }

    divisionDragDistance = 0;

    /*
    Card melakukan snap ke posisi final.
    */
    updateSlider();

    /*
    Memberi waktu agar event click bawaan browser
    tidak ikut memindahkan slider sekali lagi.
    */
    window.setTimeout(() => {
        divisionDragMoved = false;
    }, 100);
}

// ==================== ABOUT SECTION UPDATER ====================
let aboutUpdateTimeout = null;

function highlightFirstWord(text) {
    const words = text.trim().split(' ');

    const firstWord = words.shift();
    const remainingWords = words.join(' ');

    return `
        <strong class="about-section-role-highlight">
            ${firstWord}
        </strong>
        ${remainingWords}
    `;
}

function renderAboutRoleList(roles) {
    return `
        <ul class="about-section-role-list">
            ${roles
                .map((role) => `
                    <li class="about-section-role-item">
                        <img
                            src="assets/img/icon/icon-check.svg"
                            alt=""
                            class="about-section-role-icon"
                            aria-hidden="true"
                        >

                        <span>
                            ${highlightFirstWord(role)}
                        </span>
                    </li>
                `)
                .join('')}
        </ul>
    `;
}

function renderAboutDepartmentList(departments) {
    return `
        <ul class="about-section-department-list">
            ${departments
                .map((department) => `
                    <li class="about-section-department-item">
                        <img
                            src="assets/img/icon/icon-frame.svg"
                            alt=""
                            class="about-section-department-icon"
                            aria-hidden="true"
                        >

                        <span>
                            Departemen
                            <strong>
                                ${department.name}
                            </strong>
                        </span>
                    </li>
                `)
                .join('')}
        </ul>
    `;
}

function highlightNickname(name, nickname) {
    if (!name || !nickname) {
        return name;
    }

    return name.replace(
        nickname,
        `<span class="about-section-person-name-highlight">${nickname}</span>`
    );
}

function renderAboutLeaderCard({
    title,
    description,
    photo,
    icon,
    name,
    nickname,
    role,
    roles = [],
    departments = [],
    reverse = false
}) {
    const reverseClass =
        reverse
            ? ' about-section-card-reverse'
            : '';

    const contentList =
        roles.length > 0
            ? `
                <div class="about-section-list-label">
                    Peran ${title}, yaitu:
                </div>

                ${renderAboutRoleList(roles)}
            `
            : `
                <div class="about-section-list-label">
                    Departemen yang dimiliki, yaitu:
                </div>

                ${renderAboutDepartmentList(departments)}
            `;

    return `
        <article
            class="about-section-card${reverseClass}"
        >
            <div class="about-section-card-content">
                <h3 class="about-section-card-title">
                    ${title}
                </h3>

                <p class="about-section-card-description">
                    ${description}
                </p>

                ${contentList}
            </div>

            <div class="about-section-person">
                <div class="about-section-person-image-wrapper">
                    <img
                        src="${icon || ''}"
                        alt=""
                        class="about-section-card-icon"
                        aria-hidden="true"
                        onerror="this.style.display='none'"
                    >

                    <img
                        src="${photo}"
                        alt="${name}"
                        class="about-section-person-image"
                        onerror="
                            this.onerror = null;
                            this.src = 'assets/img/logo/Himtika.png';
                        "
                    >

                    <div class="about-section-person-badge">
                        <span class="about-section-person-name">
                            ${highlightNickname(name, nickname)}
                        </span>

                        <span class="about-section-person-role">
                            ${role}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function updateAboutSection(index) {
    const data =
        organizationData[index];

    const title =
        document.getElementById(
            'aboutDivisionName'
        );

    const cards =
        document.getElementById(
            'aboutCards'
        );

    if (!data || !title || !cards) {
        return;
    }

    cards.classList.add(
        'about-section-fade-out'
    );

    title.style.opacity = '0';

    clearTimeout(aboutUpdateTimeout);

    aboutUpdateTimeout =
        setTimeout(() => {

            /*
            ==========================
            STEERING COMMITTEE
            ==========================
            */
            if (data.type === 'sc') {
                title.textContent =
                    'Steering Committee';

                cards.innerHTML =
                    data.leaders
                        .map((leader, leaderIndex) => {
                            return renderAboutLeaderCard({
                                title:
                                    leader.title,

                                description:
                                    leader.description,

                                photo:
                                    leader.photo,

                                icon:
                                    leader.icon,

                                name:
                                    leader.name,
                                
                                nickname:
                                    leader.nickname,

                                role:
                                    leader.role,

                                roles:
                                    leader.roles,

                                reverse:
                                    leaderIndex === 1
                            });
                        })
                        .join('');
            }

            /*
            ==========================
            DIVISION
            ==========================
            */
            else {
                title.textContent =
                    data.shortName;

                cards.innerHTML =
                    renderAboutLeaderCard({
                        title:
                            data.shortName,

                        description:
                            data.divisionDescription,

                        photo:
                            data.leader.photo,

                        icon:
                            data.leader.icon,

                        name:
                            data.leader.name,
                        
                        nickname:
                            data.leader.nickname,

                        role:
                            data.leader.role,

                        departments:
                            data.departments
                    });
            }

            cards.classList.remove(
                'about-section-fade-out'
            );

            title.style.opacity = '1';

        }, 280);
}

// ==================== WAKIL KETUA SECTION UPDATER ====================
// Card tambahan khusus divisi Steering Committee: sama polanya seperti
// about-card utama, hanya saja fotonya tampil di kiri (via class
// .about-card-mirror) dan berisi checklist "Peran ... yaitu" alih-alih
// daftar departemen. Divisi lain yang tidak punya field `about.wakil`
// akan menyembunyikan card ini sepenuhnya.
let wakilUpdateTimeout = null;

function renderPeranItem(item) {
    return `<li><img src="assets/img/icon/icon_check.png" alt="" class="peran-check-icon" onerror="this.style.display='none'"> <span class="about-gold">${item.highlight}</span> ${item.text}</li>`;
}

function updateWakilSection(index) {
    const div = divisions[index];
    const card = document.getElementById('aboutCardWakil');
    if (!card) return;

    const wakil = div && div.about && div.about.wakil;

    // Divisi tanpa data wakil (semua kecuali Steering Committee): sembunyikan
    if (!wakil) {
        clearTimeout(wakilUpdateTimeout);
        card.classList.remove('about-fade-out');
        card.style.display = 'none';
        return;
    }

    const elCardSpan    = document.getElementById('aboutWakilCardSpan');
    const elDesc        = document.getElementById('aboutWakilCardDesc');
    const elPeranLabel  = document.getElementById('aboutWakilPeranLabel');
    const elPeranGrid   = document.getElementById('aboutWakilPeranGrid');
    const elPhoto       = document.getElementById('aboutWakilPhoto');
    const elBgIcon      = document.getElementById('aboutWakilBgIcon');
    const elFirstName   = document.getElementById('badgeWakilFirstName');
    const elLastName    = document.getElementById('badgeWakilLastName');
    const elRole        = document.getElementById('badgeWakilRole');

    card.classList.add('about-fade-out');

    clearTimeout(wakilUpdateTimeout);
    wakilUpdateTimeout = setTimeout(() => {
        card.style.display = '';

        if (elCardSpan)   elCardSpan.textContent   = wakil.title;
        if (elDesc)       elDesc.textContent       = wakil.description;
        if (elPeranLabel) elPeranLabel.textContent = wakil.peranLabel;
        if (elPeranGrid) {
            elPeranGrid.innerHTML = (wakil.peran || []).map(renderPeranItem).join('');
        }

        if (elPhoto) {
            elPhoto.src = wakil.photo;
            elPhoto.alt = wakil.role;
            elPhoto.style.setProperty('--photo-scale', wakil.scale || 1.15);
            elPhoto.style.setProperty('--photo-pos-y', wakil.posY || '5%');
        }

        if (elBgIcon && div.about.bgIcon) {
            elBgIcon.src = div.about.bgIcon;
        }

        if (elFirstName) elFirstName.textContent = wakil.firstName;
        if (elLastName)  elLastName.textContent  = wakil.lastName;
        if (elRole)       elRole.textContent      = wakil.role;

        card.classList.remove('about-fade-out');
    }, 280);
}

// Setiap divisi punya 2 departemen, masing-masing punya section sendiri
// (#deptSection1 & #deptSection2) yang isinya diganti sesuai divisi aktif,
// dengan pola yang sama seperti about-card: fade-out -> ganti konten -> fade-in.

// Bungkus nama dengan highlight emas pada kata yang ditandai di data
// (mis. nickname/panggilan), sisanya tetap putih.
function renderMemberName(member, highlightClass) {
    const full = member.name.trim();
    const nickname = member.nickname?.trim();

    if (!nickname) {
        return full;
    }

    const fullLower =
        full.toLowerCase();

    const nicknameLower =
        nickname.toLowerCase();

    const idx =
        fullLower.indexOf(nicknameLower);

    /*
    Nickname terdapat di dalam nama lengkap.
    Contoh:
    Muhammad Rafisyah Rizkiyawan
    */
    if (idx !== -1) {
        const before =
            full.slice(0, idx);

        const match =
            full.slice(
                idx,
                idx + nickname.length
            );

        const after =
            full.slice(
                idx + nickname.length
            );

        return `
            ${before}<span class="${highlightClass}">${match}</span>${after}
        `;
    }

    /*
    Nickname tidak terdapat di nama lengkap.
    Contoh:
    Rizky Fitri Putri Awaliyah (Pipit)
    */
    return `
        ${full}
        (<span class="${highlightClass}">${nickname}</span>)
    `;
}

// ==================== DEPARTMENT SECTION UPDATER ====================
function renderDepartmentMember(member) {
    return `
        <article class="department-section-member">
            <div class="department-section-member-image-wrapper">
                <div class="department-section-member-shine"></div>

                <div class="department-section-member-floating">
                    <img
                        src="${member.photo}"
                        alt="${member.name}"
                        class="department-section-member-image"
                        onerror="
                            this.onerror = null;
                            this.src = 'assets/img/logo/Himtika.png';
                        "
                    >
                </div>

                <div class="department-section-member-overlay">
                    <h3 class="department-section-member-name">
                        ${renderMemberName(
                            member,
                            'department-section-member-name-highlight'
                        )}
                    </h3>

                    <p class="department-section-member-role">
                        ${member.role}
                    </p>
                </div>
            </div>
        </article>
    `;
}

function updateDepartmentSections(index) {
    const data =
        organizationData[index];

    const section1 =
        document.getElementById(
            'departmentSection1'
        );

    const section2 =
        document.getElementById(
            'departmentSection2'
        );

    if (!section1 || !section2) {
        return;
    }


    /*
    ==========================
    STEERING COMMITTEE
    ==========================
    */

    if (
        !data ||
        data.type === 'sc'
    ) {
        section1.hidden = true;
        section2.hidden = true;

        return;
    }


    /*
    ==========================
    DIVISION
    ==========================
    */

    const departments =
        data.departments || [];

    const departmentSections = [
        {
            section: section1,
            title:
                document.getElementById(
                    'departmentTitle1'
                ),
            description:
                document.getElementById(
                    'departmentDescription1'
                ),
            members:
                document.getElementById(
                    'departmentMembers1'
                )
        },

        {
            section: section2,
            title:
                document.getElementById(
                    'departmentTitle2'
                ),
            description:
                document.getElementById(
                    'departmentDescription2'
                ),
            members:
                document.getElementById(
                    'departmentMembers2'
                )
        }
    ];


    departmentSections.forEach(
        (elements, departmentIndex) => {

            const department =
                departments[departmentIndex];

            /*
            Kalau ternyata suatu saat ada divisi
            yang hanya punya satu departemen,
            section kedua otomatis hilang.
            */
            if (!department) {
                elements.section.hidden = true;
                return;
            }

            elements.section.hidden = false;

            if (elements.title) {
                elements.title.textContent =
                    department.name;
            }

            if (elements.description) {
                elements.description.textContent =
                    department.description;
            }

            if (elements.members) {
                elements.members.innerHTML =
                    department.members
                        .map(renderDepartmentMember)
                        .join('');
            }
        }
    );
}

// ==================== SC MANAGEMENT SECTION UPDATER ====================
function renderManagementMember(member, sectionName) {
    return `
        <article class="${sectionName}-section-member">
            <div class="${sectionName}-section-member-image-wrapper">
                <div class="${sectionName}-section-member-shine"></div>

                <div class="${sectionName}-section-member-floating">
                    <img
                        src="${member.photo}"
                        alt="${member.name}"
                        class="${sectionName}-section-member-image"
                        onerror="
                            this.onerror = null;
                            this.src = 'assets/img/logo/Himtika.png';
                        "
                    >
                </div>

                <div class="${sectionName}-section-member-overlay">
                    <h3 class="${sectionName}-section-member-name">
                        ${renderMemberName(
                            member,
                            `${sectionName}-section-member-name-highlight`
                        )}
                    </h3>

                    <p class="${sectionName}-section-member-role">
                        ${member.role}
                    </p>
                </div>
            </div>
        </article>
    `;
}

function renderManagementRole(role, sectionName) {
    const words =
        role.trim().split(' ');

    const firstWord =
        words.shift();

    const rest =
        words.join(' ');

    return `
        <li class="${sectionName}-section-role-item">
            <img
                src="assets/img/icon/icon-check.svg"
                alt=""
                class="${sectionName}-section-role-icon"
                aria-hidden="true"
            >

            <span>
                <strong class="${sectionName}-section-role-highlight">
                    ${firstWord}
                </strong>
                ${rest}
            </span>
        </li>
    `;
}

// ==================== ADMINISTRASI SEKRETARIS SECTION UPDATER ====================
function updateSekretarisSection(index) {
    const data =
        organizationData[index];

    const section =
        document.getElementById(
            'secretarySection'
        );

    if (!section) {
        return;
    }

    if (
        !data ||
        data.type !== 'sc' ||
        !data.secretary
    ) {
        section.hidden = true;
        return;
    }

    const secretary =
        data.secretary;

    section.hidden = false;

    const eyebrow =
        document.getElementById(
            'secretaryEyebrow'
        );

    const title =
        document.getElementById(
            'secretaryTitle'
        );

    const description =
        document.getElementById(
            'secretaryDescription'
        );

    const membersMobile =
        document.getElementById(
            'secretaryMembersMobile'
        );

    const membersDesktop =
        document.getElementById(
            'secretaryMembersDesktop'
        );

    const roles =
        document.getElementById(
            'secretaryRoleList'
        );


    if (eyebrow) {
        eyebrow.textContent =
            secretary.kicker;
    }

    if (title) {
        title.textContent =
            secretary.title;
    }

    if (description) {
        description.textContent =
            secretary.description;
    }

    const membersHTML =
        secretary.members
            .map((member) =>
                renderManagementMember(
                    member,
                    'secretary'
                )
            )
            .join('');

    if (membersMobile) {
        membersMobile.innerHTML =
            membersHTML;
    }

    if (membersDesktop) {
        membersDesktop.innerHTML =
            membersHTML;
    }

    if (roles) {
        roles.innerHTML =
            secretary.roles
                .map((role) =>
                    renderManagementRole(
                        role,
                        'secretary'
                    )
                )
                .join('');
    }
}

// ==================== KEUANGAN BENDAHARA SECTION UPDATER ====================
function updateBendaharaSection(index) {
    const data =
        organizationData[index];

    const section =
        document.getElementById(
            'treasurerSection'
        );

    if (!section) {
        return;
    }

    if (
        !data ||
        data.type !== 'sc' ||
        !data.treasurer
    ) {
        section.hidden = true;
        return;
    }

    const treasurer =
        data.treasurer;

    section.hidden = false;

    const eyebrow =
        document.getElementById(
            'treasurerEyebrow'
        );

    const title =
        document.getElementById(
            'treasurerTitle'
        );

    const description =
        document.getElementById(
            'treasurerDescription'
        );

    const membersMobile =
        document.getElementById(
            'treasurerMembersMobile'
        );

    const membersDesktop =
        document.getElementById(
            'treasurerMembersDesktop'
        );

    const roles =
        document.getElementById(
            'treasurerRoleList'
        );


    if (eyebrow) {
        eyebrow.textContent =
            treasurer.kicker;
    }

    if (title) {
        title.textContent =
            treasurer.title;
    }

    if (description) {
        description.textContent =
            treasurer.description;
    }

    const membersHTML =
        treasurer.members
            .map((member) =>
                renderManagementMember(
                    member,
                    'treasurer'
                )
            )
            .join('');

    if (membersMobile) {
        membersMobile.innerHTML =
            membersHTML;
    }

    if (membersDesktop) {
        membersDesktop.innerHTML =
            membersHTML;
    }

    if (roles) {
        roles.innerHTML =
            treasurer.roles
                .map((role) =>
                    renderManagementRole(
                        role,
                        'treasurer'
                    )
                )
                .join('');
    }
}

// ==================== PROKER SECTION UPDATER ====================
let currentProkerIndex = 0;
let prokerAnimationTimeout = null;
let isProkerChanging = false;

function getCurrentProkerData() {
    const item = organizationData[currentIndex];

    if (
        !item ||
        item.type === 'sc' ||
        !item.programs ||
        item.programs.length === 0
    ) {
        return null;
    }

    return item;
}

function renderProkerThumbnail(proker, prokerIndex, isActive) {
    return `
        <button
            type="button"
            class="proker-section-thumbnail${isActive ? ' is-active' : ''}"
            data-proker-index="${prokerIndex}"
            aria-label="Pilih program kerja ${proker.title}"
        >
            <img
                src="${proker.image}"
                alt="${proker.title}"
                class="proker-section-thumbnail-image"
                draggable="false"
                onerror="
                    this.onerror = null;
                    this.src = 'assets/img/logo/Himtika.png';
                "
            >
        </button>
    `;
}

function renderProkerThumbnails(item) {
    const track = document.getElementById('prokerThumbnailTrack');

    if (!track) { return; }

    track.innerHTML =
        item.programs
            .map(function(proker, index) {
                return renderProkerThumbnail(
                    proker,
                    index,
                    index === currentProkerIndex
                );
            })
            .join('');
}

function updateProkerThumbnailActive() {
    const track = document.getElementById('prokerThumbnailTrack');

    if (!track) { return; }

    const thumbnails = track.querySelectorAll('.proker-section-thumbnail');

    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.classList.toggle(
            'is-active',
            index === currentProkerIndex
        );
    });
}

function getProkerThumbnailSpacing() {
    const thumbnail = document.querySelector('#prokerThumbnailTrack .proker-section-thumbnail');

    if (!thumbnail) {
        return 94;
    }

    const thumbnailWidth = thumbnail.offsetWidth;
    let thumbnailGap = 10;

    if (window.innerWidth >= 640) {
        thumbnailGap = 12;
    }
    if (window.innerWidth >= 768) {
        thumbnailGap = 14;
    }
    if (window.innerWidth >= 1024) {
        thumbnailGap = 12;
    }
    if (window.innerWidth >= 1280) {
        thumbnailGap = 14;
    }
    if (window.innerWidth >= 1536) {
        thumbnailGap = 16;
    }

    return thumbnailWidth + thumbnailGap;
}

function updateProkerThumbnailSlider(animate = true) {
    const item = getCurrentProkerData();

    const track = document.getElementById('prokerThumbnailTrack');

    if (
        !item ||
        !track ||
        !item.programs.length
    ) {
        return;
    }

    const total = item.programs.length;
    const thumbnails =
        Array.from(
            track.querySelectorAll(
                '.proker-section-thumbnail'
            )
        );
    const baseSpacing = getProkerThumbnailSpacing();
    const baseWidth = thumbnails[0]?.offsetWidth || 84;
    const gap = baseSpacing - baseWidth;


    thumbnails.forEach(function(thumbnail, index) {
        /*
        ========================================
        CIRCULAR FORWARD DISTANCE

        current 0:
        0 -> slot 0
        1 -> slot 1
        2 -> slot 2
        3 -> slot 3
        ...

        current 4:
        4 -> slot 0
        0 -> slot 1
        1 -> slot 2
        ...

        Jadi setelah NEXT, card yang baru dilewati
        berpindah ke kanan/belakang.
        ========================================
        */
        const distance = (index - currentProkerIndex + total) % total;
        let scale = 0.82;
        let opacity = 0;
        let zIndex = 1;

        /*
        ACTIVE
        */
        if (distance === 0) {
            scale = 1.08;
            opacity = 1;
            zIndex = 5;
        }

        /*
        NEXT PERTAMA
        */
        else if (distance === 1) {
            scale = 0.96;
            opacity = 1;
            zIndex = 4;
        }

        /*
        NEXT KEDUA
        */
        else if (distance === 2) {
            scale = 0.9;
            opacity = 0.82;
            zIndex = 3;
        }

        /*
        CARD KEEMPAT:
        hanya sedikit mengintip
        */
        else if (distance === 3) {
            scale = 0.84;
            opacity = 0.32;
            zIndex = 2;
        }

        let translateX = 0;

        if (distance > 0) {
            let previousScale = 1.08;

            for (let slot = 1; slot <= distance; slot++) {
                let currentScale = 0.82;

                if (slot === 1) {
                    currentScale = 0.96;
                } else if (slot === 2) {
                    currentScale = 0.9;
                } else if (slot === 3) {
                    currentScale = 0.84;
                }

                translateX +=
                    (baseWidth * previousScale) / 2 +
                    gap +
                    (baseWidth * currentScale) / 2;

                previousScale = currentScale;
            }
        }


        thumbnail.style.transition =
            animate
                ? `
                    transform 520ms
                    cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 420ms ease,
                    filter 420ms ease
                `
                : 'none';


        thumbnail.style.transform = `
            translate3d(${translateX}px, 0, 0)
            scale(${scale})
        `;

        thumbnail.style.opacity = opacity;

        thumbnail.style.zIndex = zIndex;

        thumbnail.style.pointerEvents =
            distance > 3
                ? 'none'
                : 'auto';

        thumbnail.classList.toggle('is-active', distance === 0);
        thumbnail.classList.toggle('is-distant', distance === 3);
    });
}

function updateProkerContent(item) {
    const proker = item.programs[currentProkerIndex];

    if (!proker) {
        return;
    }

    const divisionName = document.getElementById('prokerDivisionName');
    const background = document.getElementById('prokerBackground');
    const department = document.getElementById('prokerDepartment');
    const title = document.getElementById('prokerTitle');
    const pic = document.getElementById('prokerPic');
    const description = document.getElementById('prokerDescription');
    const learnMore = document.getElementById('prokerLearnMore');
    const counterCurrent = document.getElementById('prokerCurrent');
    const counterTotal = document.getElementById('prokerTotal');

    if (divisionName) {
        divisionName.textContent = item.shortName;
    }
    if (background) {
        background.src = proker.image;
        background.alt = proker.title;
    }
    if (department) {
        department.textContent = `Dept. ${proker.department}`;
    }
    if (title) {
        title.textContent = proker.title;
    }
    if (pic) {
        pic.textContent = `${proker.pic}`;
    }
    if (description) {
        description.textContent = proker.description;
    }
    if (counterCurrent) {
        counterCurrent.textContent = currentProkerIndex + 1;
    }
    if (counterTotal) {
        counterTotal.textContent = item.programs.length;
    }
    if (learnMore) {
        if (proker.href) {
            learnMore.href = proker.href;
            learnMore.removeAttribute('aria-disabled');
            learnMore.removeAttribute('tabindex');
        } else {
            learnMore.href = '#';
            learnMore.setAttribute('aria-disabled','true');
            learnMore.setAttribute('tabindex','-1');
        }
    }
}

function animateProkerContentChange(item, newIndex) {
    const background = document.getElementById('prokerBackground');
    const content = document.getElementById('prokerContent');

    if (!background || !content) {
        currentProkerIndex = newIndex;
        updateProkerContent(item);
        updateProkerThumbnailSlider();

        return;
    }

    clearTimeout(prokerAnimationTimeout);

    isProkerChanging = true;

    /*
    ========================================
    PHASE 1 — KELUAR
    ========================================
    */
    background.classList.add('proker-background-leave');
    content.classList.add('proker-content-leave');

    prokerAnimationTimeout =
        window.setTimeout(
            function() {

                /*
                GANTI DATA ketika elemen lama
                sudah hampir tidak terlihat.
                */
                currentProkerIndex = newIndex;
                updateProkerContent(item);
                updateProkerThumbnailSlider();

                /*
                Force browser membaca state baru
                sebelum animasi masuk.
                */
                requestAnimationFrame(
                    function() {

                        requestAnimationFrame(
                            function() {
                                background.classList.remove('proker-background-leave');
                                content.classList.remove('proker-content-leave');
                                background.classList.add('proker-background-enter');
                                content.classList.add('proker-content-enter');
                                window.setTimeout(
                                    function() {
                                        background.classList.remove('proker-background-enter');
                                        content.classList.remove('proker-content-enter');
                                        isProkerChanging = false;
                                    },
                                    380
                                );
                            }
                        );
                    }
                );
            },
            220
        );
}

function updateProkerSection(index) {
    const section = document.getElementById('prokerSection');

    if (!section) {
        return;
    }

    const item = organizationData[index];

    if (
        !item ||
        item.type === 'sc' ||
        !item.programs ||
        item.programs.length === 0
    ) {
        section.hidden = true;
        return;
    }

    section.hidden = false;

    if (currentProkerIndex >= item.programs.length) {
        currentProkerIndex = 0;
    }

    updateProkerContent(item);
    renderProkerThumbnails(item);
    requestAnimationFrame(
        function() {
            updateProkerThumbnailSlider(
                false
            );
        }
    );
}

function goToProker(newIndex) {
    const item = getCurrentProkerData();

    if (!item || isProkerChanging) {
        return;
    }

    const total = item.programs.length;
    const safeIndex = ((newIndex % total) + total) % total;

    if (safeIndex === currentProkerIndex) {
        return;
    }

    /*
    Thumbnail bergerak ke state baru dulu.
    */
    const oldIndex = currentProkerIndex;
    currentProkerIndex = safeIndex;

    updateProkerThumbnailSlider();

    /*
    Balikkan state data sebentar.
    Pergantian data dilakukan saat fade-out selesai.
    */
    currentProkerIndex = oldIndex;
    animateProkerContentChange(item,safeIndex);
}

// Navigation
document.addEventListener('DOMContentLoaded', () => {
    const prokerPrevBtn = document.getElementById('prokerPrevBtn');
    const prokerNextBtn = document.getElementById('prokerNextBtn');
    const prokerThumbnailTrack = document.getElementById('prokerThumbnailTrack');

    if (prokerPrevBtn) {
        prokerPrevBtn.addEventListener('click',
            function() {
                goToProker(currentProkerIndex - 1);
            }
        );
    }

    if (prokerNextBtn) {
        prokerNextBtn.addEventListener('click',
            function() {
                goToProker(currentProkerIndex + 1);
            }
        );
    }

    if (prokerThumbnailTrack) {
        prokerThumbnailTrack.addEventListener('click',
            function(event) {
                const thumbnail = event.target.closest('.proker-section-thumbnail');

                if (!thumbnail) { return; }

                const index = Number(thumbnail.dataset.prokerIndex);

                if (Number.isNaN(index)) { return; }

                goToProker(index);
            }
        );
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');


    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + organizationData.length) % organizationData.length;
            currentProkerIndex = 0;
            updateSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % organizationData.length;
            currentProkerIndex = 0;
            updateSlider();
        });
    }

    /*
    EVENT SWIPE MOBILE
    */
    if (divisionSliderViewport) {
        divisionSliderViewport.addEventListener('touchstart', (event) => {
            if (!event.touches.length) {
                return;
            }

            startDivisionDrag(
                event.touches[0].clientX
            );
        },
        {
            passive: true
        });

        divisionSliderViewport.addEventListener('touchmove', (event) => {
            if (!event.touches.length) {
                return;
            }

            moveDivisionDrag(
                event.touches[0].clientX
            );
        },
        {
            passive: true
        });

        divisionSliderViewport.addEventListener('touchend', endDivisionDrag);
        divisionSliderViewport.addEventListener('touchcancel', endDivisionDrag);
    }


    /*
    OPSIONAL: DRAG MOUSE DESKTOP
    */
    if (divisionSliderViewport) {
        divisionSliderViewport.addEventListener('mousedown', (event) => {
            if (event.button !== 0) {
                return;
            }

            event.preventDefault();
            startDivisionDrag(event.clientX);
        });

        window.addEventListener('mousemove', (event) => {
            moveDivisionDrag(event.clientX);
        });

        window.addEventListener('mouseup', endDivisionDrag);
    }


    /*
    Ketika ukuran layar berubah, posisi dan jarak card
    dihitung ulang tanpa membangun ulang card.
    */
    window.addEventListener('resize', () => {
        updateSlider(0, false);
        updateProkerThumbnailSlider(false);
    });

    /*
    INITIALIZATION
    */
    buildSlider();
    buildDots();
    updateSlider();
});